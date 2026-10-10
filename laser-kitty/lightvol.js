// lightvol.js — the room's light as a volume texture (founder: "in a
// volume texture, we'd insert lights, Minecraft style. It's what
// Splinecraft does"). A grid of 7-10 cm texels over the room shell; the
// walls and furniture are voxelized from the sim's body rows into a
// solid mask; every emitter (neon sign, budgeted point light, the laser
// dot) is splatted as a sub-texel gaussian; a Gauss-Seidel max-flood
// propagates each colour channel outward with a per-texel attenuation,
// stopping at solids; a separable blur rounds the flood's diamond.
//
// The grid math (LightGrid) has no three.js in it and runs in a Web
// Worker (lightvol.worker.js) that refines continuously — one flood
// round and a blur per step, as fast as the thread allows — and posts
// the packed bytes back. The main thread (LightVolume) eases each
// result into the Data3DTexture, Splinecraft's step-and-ease, so the
// field never pops: a light that moves slides, a light that dies fades.
// Consumers: the haze march samples it per step; every lit material
// samples it as coloured irradiance through a global shader-chunk graft.
import * as THREE from 'three';

import { LightGrid, SCALE } from './lightgrid.js?v=k60';
export { LightGrid, SCALE };

// ------------------------------------------------- the main-thread side ---
export class LightVolume {
  constructor() {
    this.tex = null;
    this.nx = this.ny = this.nz = 0;
    this.texel = 0.1;
    this.bytes = null;
    this.gain = 0.6;
    this.worker = null;
    this.busy = false;        // a step is in flight
    this.spare = null;        // the buffer the worker hands back, reused
    this.pendingEmitters = null;
    this.pendingRows = null;
    this.ease = 0.45;         // Splinecraft's step-and-ease: a fraction of the gap per result
    this.lastResult = 0;
    this.minInterval = 40;    // ms between results we accept (upload budget)
    this.stepsDone = 0;
    // three CLONES ShaderLib uniform values per program (Vector3s,
    // Textures), which would freeze origin/size and strand the texture
    // at its first upload. Typed arrays copy by reference, and the
    // texture's clone() is overridden to return itself.
    this.originArr = new Float32Array(3);
    this.sizeArr = new Float32Array([1, 1, 1]);
    this.laserArr = new Float32Array(4);
    this.uniforms = {
      uLkLight: { value: null },
      uLkOrigin: { value: this.originArr },
      uLkSize: { value: this.sizeArr },
      uLkLaser: { value: this.laserArr },
    };
  }

  // the room: half extents in x/z, ceiling height, and the texel size
  // wanted (fine pointers get a denser grid). Tall shells grow the texel
  // to stay under ~110 per axis.
  setup(hx, hz, ceil, texelWanted = 0.1) {
    const span = Math.max(2 * hx + 0.4, ceil + 0.4, 2 * hz + 0.4);
    this.texel = Math.max(texelWanted, span / 110);
    const t = this.texel;
    this.nx = Math.ceil((2 * hx + 0.4) / t);
    this.ny = Math.ceil((ceil + 0.4) / t);
    this.nz = Math.ceil((2 * hz + 0.4) / t);
    const origin = [-hx - 0.2, -0.2, -hz - 0.2];
    this.originArr.set(origin);
    this.sizeArr.set([this.nx * t, this.ny * t, this.nz * t]);
    const n = this.nx * this.ny * this.nz;
    this.bytes = new Uint8Array(n * 4);
    for (let i = 3; i < n * 4; i += 4) this.bytes[i] = 255;
    if (this.tex) this.tex.dispose();
    this.tex = new THREE.Data3DTexture(this.bytes, this.nx, this.ny, this.nz);
    this.tex.format = THREE.RGBAFormat;
    this.tex.type = THREE.UnsignedByteType;
    this.tex.minFilter = this.tex.magFilter = THREE.LinearFilter;
    this.tex.wrapS = this.tex.wrapT = this.tex.wrapR = THREE.ClampToEdgeWrapping;
    this.tex.unpackAlignment = 1;
    this.tex.clone = () => this.tex;
    this.tex.needsUpdate = true;
    this.uniforms.uLkLight.value = this.tex;
    if (!this.worker) {
      this.worker = new Worker(new URL('./lightvol.worker.js?v=k60', import.meta.url), { type: 'module' });
      this.worker.onmessage = (ev) => this.onResult(ev.data);
      this.worker.onerror = (e) => console.error('light volume worker', e.message || e);
    }
    this.busy = false;
    this.spare = new Uint8Array(n * 4);
    this.stepsDone = 0;
    this.worker.postMessage({ type: 'setup', nx: this.nx, ny: this.ny, nz: this.nz, texel: t, origin });
  }

  // furniture rows (copied: the wasm view can't cross threads)
  voxelize(rows, count) {
    if (!this.worker) return;
    const copy = new Float32Array(rows.buffer.slice(rows.byteOffset, rows.byteOffset + count * 15 * 4));
    this.worker.postMessage({ type: 'solid', rows: copy, count }, [copy.buffer]);
  }

  // emitters: [{ pos, color, strength }] — the newest set is what the
  // next step uses; every frame may call this, only one step runs at a time
  setEmitters(list) {
    const em = new Float32Array(list.length * 7);
    for (let i = 0; i < list.length; i++) {
      const e = list[i];
      em.set([e.pos.x, e.pos.y, e.pos.z, e.color.r, e.color.g, e.color.b, e.strength], i * 7);
    }
    this.pendingEmitters = em;
    this.kick();
  }

  kick() {
    if (this.busy || !this.worker || !this.pendingEmitters || !this.spare) return;
    this.busy = true;
    const em = this.pendingEmitters;
    this.pendingEmitters = null;
    const out = this.spare;
    this.spare = null;
    // the first steps after a room build flood deep so the field exists
    const rounds = this.stepsDone < 2 ? 4 : 1;
    const decay = this.stepsDone < 2 ? 0 : 0.9;
    this.worker.postMessage({ type: 'step', emitters: em, rounds, decay, gain: this.gain, out }, [em.buffer, out.buffer]);
  }

  onResult(msg) {
    if (msg.type !== 'result') return;
    this.busy = false;
    this.lastMs = msg.ms; this.lastRounds = msg.rounds;
    const inc = msg.out;
    if (inc.length === this.bytes.length) {
      // ease toward the new field: the first results snap, the rest slide
      const k = this.stepsDone < 2 ? 1 : this.ease;
      const B = this.bytes;
      for (let i = 0; i < B.length; i += 4) {
        B[i] += (inc[i] - B[i]) * k;
        B[i + 1] += (inc[i + 1] - B[i + 1]) * k;
        B[i + 2] += (inc[i + 2] - B[i + 2]) * k;
      }
      this.tex.needsUpdate = true;
      this.stepsDone++;
      this.lastResult = performance.now();
    }
    this.spare = inc;
    // keep refining with the newest emitters, paced by the upload budget
    const wait = Math.max(0, this.minInterval - (performance.now() - this.lastResult));
    if (this.pendingEmitters) setTimeout(() => this.kick(), wait);
  }
}

// GLSL for anyone sampling the volume: world position → light (linear rgb)
export const LIGHTVOL_GLSL = `
  uniform sampler3D uLkLight;
  uniform vec3 uLkOrigin, uLkSize;
  uniform vec4 uLkLaser;
  // bytes hold light * gain / 4: this returns gain-scaled linear light
  vec3 lkLight(vec3 wp) {
    vec3 uvw = (wp - uLkOrigin) / uLkSize;
    if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return vec3(0.0);
    return texture(uLkLight, uvw).rgb * 4.0;
  }
  // the laser's hot core on surfaces, continuous (the volume carries its spread)
  vec3 lkLaser(vec3 wp) {
    if (uLkLaser.w <= 0.0) return vec3(0.0);
    vec3 d = wp - uLkLaser.xyz;
    return vec3(1.0, 0.2, 0.12) * (uLkLaser.w * 0.5 / (1.0 + dot(d, d) * 90.0));
  }`;

// graft the volume into every built-in lit material: a world-position
// varying written in project_vertex, and the sample added to the ambient
// irradiance at the end of lights_fragment_begin (toon, lambert, phong,
// standard all go through it). Must run before the first program compiles.
export function installLightVolumeShading(uniforms) {
  const SC = THREE.ShaderChunk;
  SC.common = SC.common + `
precision highp sampler3D;
varying vec3 vLkWorld;
` + LIGHTVOL_GLSL;
  SC.project_vertex = SC.project_vertex + `
#ifdef USE_INSTANCING
  vLkWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  vLkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif
`;
  SC.lights_fragment_begin = SC.lights_fragment_begin + `
  irradiance += lkLight(vLkWorld) + lkLaser(vLkWorld);
`;
  for (const name of Object.keys(THREE.ShaderLib)) {
    const lib = THREE.ShaderLib[name];
    if (!lib || !lib.uniforms) continue;
    for (const k of Object.keys(uniforms)) lib.uniforms[k] = uniforms[k];
  }
}
