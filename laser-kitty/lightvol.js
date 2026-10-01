// lightvol.js — the room's light as a volume texture (founder: "in a
// volume texture, we'd insert lights, Minecraft style. It's what
// Splinecraft does"). A grid of ~10 cm texels over the room shell; the
// walls and furniture are voxelized from the sim's body rows into a
// solid mask; every emitter (neon sign, budgeted point light, the laser
// dot) is injected into its texel; a Gauss-Seidel max-flood propagates
// each colour channel outward with a per-texel attenuation, stopping at
// solids — Minecraft's light levels with a smoother falloff. The result
// is uploaded as a Data3DTexture that (a) the haze march samples per step
// instead of looping over emitters and (b) every lit material samples as
// coloured indirect light, via a global shader-chunk graft, so a red sign
// warms the wall and the cat under it.
import * as THREE from 'three';

const ATT = 0.86;       // per 10 cm texel: ~1 m to a third, ~2.5 m to a tenth
const SCALE = 4;        // bytes store value/SCALE: headroom for stacked signs

export class LightVolume {
  constructor() {
    this.tex = null;
    this.nx = this.ny = this.nz = 0;
    this.texel = 0.1;
    this.origin = new THREE.Vector3();
    this.size = new THREE.Vector3(1, 1, 1);
    this.light = null;   // Float32 rgb per texel
    this.src = null;     // Float32 rgb: injected sources
    this.solid = null;   // Uint8: 1 = blocked
    this.bytes = null;   // RGBA8 upload buffer
    // three CLONES ShaderLib uniform values per program (Vector3s,
    // Textures), which would freeze origin/size and strand the texture
    // at its first upload. Typed arrays copy by reference, and the
    // texture's clone() is overridden to return itself, so one update
    // reaches every program. Gain is baked into the upload.
    this.originArr = new Float32Array(3);
    this.sizeArr = new Float32Array([1, 1, 1]);
    this.gain = 0.6;
    this.uniforms = {
      uLkLight: { value: null },
      uLkOrigin: { value: this.originArr },
      uLkSize: { value: this.sizeArr },
    };
  }

  // the room: half extents in x/z, ceiling height. Texel grows past 10 cm
  // for tall shells so the grid stays under ~96 per axis
  setup(hx, hz, ceil) {
    const span = Math.max(2 * hx + 0.4, ceil + 0.4, 2 * hz + 0.4);
    this.texel = Math.max(0.1, span / 96);
    const t = this.texel;
    this.nx = Math.ceil((2 * hx + 0.4) / t);
    this.ny = Math.ceil((ceil + 0.4) / t);
    this.nz = Math.ceil((2 * hz + 0.4) / t);
    this.origin.set(-hx - 0.2, -0.2, -hz - 0.2);
    this.size.set(this.nx * t, this.ny * t, this.nz * t);
    this.originArr.set([this.origin.x, this.origin.y, this.origin.z]);
    this.sizeArr.set([this.size.x, this.size.y, this.size.z]);
    const n = this.nx * this.ny * this.nz;
    this.light = new Float32Array(n * 3);
    this.src = new Float32Array(n * 3);
    this.solid = new Uint8Array(n);
    this.bytes = new Uint8Array(n * 4);
    if (this.tex) this.tex.dispose();
    this.tex = new THREE.Data3DTexture(this.bytes, this.nx, this.ny, this.nz);
    this.tex.format = THREE.RGBAFormat;
    this.tex.type = THREE.UnsignedByteType;
    this.tex.minFilter = this.tex.magFilter = THREE.LinearFilter;
    this.tex.wrapS = this.tex.wrapT = this.tex.wrapR = THREE.ClampToEdgeWrapping;
    this.tex.unpackAlignment = 1;
    this.tex.clone = () => this.tex; // see the uniforms note above
    this.tex.needsUpdate = true;
    this.uniforms.uLkLight.value = this.tex;
  }

  index(ix, iy, iz) { return (iz * this.ny + iy) * this.nx + ix; }

  // solids from the sim's render rows (15 floats per body): static and
  // furniture boxes with some bulk — walls, counters, shelves, couches.
  // Only the texels inside each box's bounds are visited, so this is
  // cheap enough to rerun as furniture topples.
  voxelize(rows, count) {
    this.solid.fill(0);
    const t = this.texel, o = this.origin;
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), l = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const r = i * 15;
      const cls = rows[r], shape = rows[r + 1];
      if (shape !== 0 || (cls !== 0 && cls !== 1)) continue;
      const a = rows[r + 2], b = rows[r + 3], c = rows[r + 4];
      const bulk = Math.min(a, b, c);
      // thin statics (walls, shelves) count; thin dynamics (cards, cloth) don't
      if (cls === 1 && (bulk < 0.05 || Math.max(a, b, c) < 0.15)) continue;
      if (cls === 0 && Math.max(a, b, c) < 0.12) continue;
      p.set(rows[r + 5], rows[r + 6], rows[r + 7]);
      q.set(rows[r + 8], rows[r + 9], rows[r + 10], rows[r + 11]);
      const qi = q.clone().invert();
      const rad = Math.hypot(a, b, c) + t;
      const x0 = Math.max(0, Math.floor((p.x - rad - o.x) / t)), x1 = Math.min(this.nx - 1, Math.ceil((p.x + rad - o.x) / t));
      const y0 = Math.max(0, Math.floor((p.y - rad - o.y) / t)), y1 = Math.min(this.ny - 1, Math.ceil((p.y + rad - o.y) / t));
      const z0 = Math.max(0, Math.floor((p.z - rad - o.z) / t)), z1 = Math.min(this.nz - 1, Math.ceil((p.z + rad - o.z) / t));
      // pad thin boxes so a wall thinner than a texel still blocks
      const ea = Math.max(a, t * 0.55), eb = Math.max(b, t * 0.55), ec = Math.max(c, t * 0.55);
      for (let iz = z0; iz <= z1; iz++) for (let iy = y0; iy <= y1; iy++) for (let ix = x0; ix <= x1; ix++) {
        l.set(o.x + (ix + 0.5) * t, o.y + (iy + 0.5) * t, o.z + (iz + 0.5) * t).sub(p).applyQuaternion(qi);
        if (Math.abs(l.x) <= ea && Math.abs(l.y) <= eb && Math.abs(l.z) <= ec) this.solid[this.index(ix, iy, iz)] = 1;
      }
    }
  }

  // emitters: [{ pos, color, strength }] → the source field (max-splat
  // into the texel and its six neighbours, so a light sitting in a wall
  // texel still gets out)
  inject(emitters) {
    this.src.fill(0);
    const t = this.texel, o = this.origin;
    for (const e of emitters) {
      const ix = Math.floor((e.pos.x - o.x) / t), iy = Math.floor((e.pos.y - o.y) / t), iz = Math.floor((e.pos.z - o.z) / t);
      const rr = e.color.r * e.strength, gg = e.color.g * e.strength, bb = e.color.b * e.strength;
      const put = (x, y, z, k) => {
        if (x < 0 || y < 0 || z < 0 || x >= this.nx || y >= this.ny || z >= this.nz) return;
        const j = this.index(x, y, z) * 3;
        if (rr * k > this.src[j]) this.src[j] = rr * k;
        if (gg * k > this.src[j + 1]) this.src[j + 1] = gg * k;
        if (bb * k > this.src[j + 2]) this.src[j + 2] = bb * k;
      };
      put(ix, iy, iz, 1);
      put(ix + 1, iy, iz, ATT); put(ix - 1, iy, iz, ATT);
      put(ix, iy + 1, iz, ATT); put(ix, iy - 1, iz, ATT);
      put(ix, iy, iz + 1, ATT); put(ix, iy, iz - 1, ATT);
    }
  }

  // Gauss-Seidel max-flood: a forward sweep carries light along +x +y +z,
  // a backward sweep along the other three; a few rounds reach steady
  // state. Solids take no light and pass none.
  sweep(rounds = 2) {
    const L = this.light, S = this.src, solid = this.solid;
    const nx = this.nx, ny = this.ny, nz = this.nz;
    const sx = 3, sy = nx * 3, sz = nx * ny * 3;
    const n = nx * ny * nz;
    // seed: light can only drop to the source level, never below it
    for (let i = 0; i < n * 3; i++) if (S[i] > L[i]) L[i] = S[i];
    for (let i = 0; i < n; i++) if (solid[i]) { L[i * 3] = L[i * 3 + 1] = L[i * 3 + 2] = 0; }
    for (let r = 0; r < rounds; r++) {
      for (let i = 0; i < n; i++) {
        if (solid[i]) continue;
        const ix = i % nx, iy = ((i / nx) | 0) % ny, iz = (i / (nx * ny)) | 0;
        const j = i * 3;
        for (let c = 0; c < 3; c++) {
          let m = S[j + c];
          if (ix > 0) { const v = L[j - sx + c] * ATT; if (v > m) m = v; }
          if (iy > 0) { const v = L[j - sy + c] * ATT; if (v > m) m = v; }
          if (iz > 0) { const v = L[j - sz + c] * ATT; if (v > m) m = v; }
          L[j + c] = m;
        }
      }
      for (let i = n - 1; i >= 0; i--) {
        if (solid[i]) continue;
        const ix = i % nx, iy = ((i / nx) | 0) % ny, iz = (i / (nx * ny)) | 0;
        const j = i * 3;
        for (let c = 0; c < 3; c++) {
          let m = L[j + c];
          if (ix < nx - 1) { const v = L[j + sx + c] * ATT; if (v > m) m = v; }
          if (iy < ny - 1) { const v = L[j + sy + c] * ATT; if (v > m) m = v; }
          if (iz < nz - 1) { const v = L[j + sz + c] * ATT; if (v > m) m = v; }
          L[j + c] = m;
        }
      }
    }
  }

  // a light that went out must fade: decay the field toward the sources
  // before a sweep so stale glow doesn't linger forever
  decay(k = 0.7) {
    const L = this.light;
    for (let i = 0; i < L.length; i++) L[i] *= k;
  }

  upload() {
    const L = this.light, B = this.bytes;
    const n = this.nx * this.ny * this.nz;
    const k = (this.gain / SCALE) * 255;
    for (let i = 0; i < n; i++) {
      B[i * 4] = Math.min(255, L[i * 3] * k);
      B[i * 4 + 1] = Math.min(255, L[i * 3 + 1] * k);
      B[i * 4 + 2] = Math.min(255, L[i * 3 + 2] * k);
      B[i * 4 + 3] = 255;
    }
    this.tex.needsUpdate = true;
  }
}

// GLSL for anyone sampling the volume: world position → light (linear rgb)
export const LIGHTVOL_GLSL = `
  uniform sampler3D uLkLight;
  uniform vec3 uLkOrigin, uLkSize;
  // bytes hold light * gain / 4: this returns gain-scaled linear light
  vec3 lkLight(vec3 wp) {
    vec3 uvw = (wp - uLkOrigin) / uLkSize;
    if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return vec3(0.0);
    return texture(uLkLight, uvw).rgb * 4.0;
  }`;

// graft the volume into every built-in lit material: a world-position
// varying written in project_vertex, and the sample added to the ambient
// irradiance at the end of lights_fragment_begin (toon, lambert, phong,
// standard all go through it). The uniform objects are shared, so one
// update reaches every program. Must run before the first render.
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
  irradiance += lkLight(vLkWorld);
`;
  for (const name of Object.keys(THREE.ShaderLib)) {
    const lib = THREE.ShaderLib[name];
    if (!lib || !lib.uniforms) continue;
    for (const k of Object.keys(uniforms)) lib.uniforms[k] = uniforms[k];
  }
}
