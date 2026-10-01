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
// gaussian kernel mass for a source centred on a texel: splats are scaled
// so the centre texel of a centred source holds exactly the strength
const KERNEL_SUM = (() => { let w = 0; const s2 = 2 * 0.7 * 0.7; for (let z = -1; z <= 2; z++) for (let y = -1; y <= 2; y++) for (let x = -1; x <= 2; x++) w += Math.exp(-(x * x + y * y + z * z) / s2); return w; })();

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
    // the laser dot stays off the grid for surfaces: an analytic red pool
    // updated every frame (x, y, z, gain·on), so it never pops texel to texel
    this.laserArr = new Float32Array(4);
    this.uniforms = {
      uLkLight: { value: null },
      uLkOrigin: { value: this.originArr },
      uLkSize: { value: this.sizeArr },
      uLkLaser: { value: this.laserArr },
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

  // emitters: [{ pos, color, strength }] → the source field. A source is
  // splatted over the 4×4×4 texels around its CONTINUOUS position with a
  // gaussian of the distance to each texel centre (founder: "injection
  // needs to be able to happen partially, as a sort of trilinear or
  // tricubic contribution" — a light snapped to one texel popped texel
  // to texel as it moved, which matters a lot for the laser). The
  // kernel is renormalized so the energy is the same wherever the
  // source sits between centres.
  inject(emitters) {
    this.src.fill(0);
    const t = this.texel, o = this.origin;
    const sig2 = 2 * 0.7 * 0.7;
    for (const e of emitters) {
      const gx = (e.pos.x - o.x) / t - 0.5, gy = (e.pos.y - o.y) / t - 0.5, gz = (e.pos.z - o.z) / t - 0.5;
      const bx = Math.floor(gx), by = Math.floor(gy), bz = Math.floor(gz);
      let wsum = 0;
      for (let dz = -1; dz <= 2; dz++) for (let dy = -1; dy <= 2; dy++) for (let dx = -1; dx <= 2; dx++) {
        const fx = bx + dx - gx, fy = by + dy - gy, fz = bz + dz - gz;
        wsum += Math.exp(-(fx * fx + fy * fy + fz * fz) / sig2);
      }
      const norm = KERNEL_SUM / Math.max(wsum, 1e-6);
      const rr = e.color.r * e.strength, gg = e.color.g * e.strength, bb = e.color.b * e.strength;
      for (let dz = -1; dz <= 2; dz++) {
        const z = bz + dz; if (z < 0 || z >= this.nz) continue;
        for (let dy = -1; dy <= 2; dy++) {
          const y = by + dy; if (y < 0 || y >= this.ny) continue;
          for (let dx = -1; dx <= 2; dx++) {
            const x = bx + dx; if (x < 0 || x >= this.nx) continue;
            const fx = x - gx, fy = y - gy, fz = z - gz;
            const w = Math.exp(-(fx * fx + fy * fy + fz * fz) / sig2) * norm;
            const j = this.index(x, y, z) * 3;
            this.src[j] += rr * w; this.src[j + 1] += gg * w; this.src[j + 2] += bb * w;
          }
        }
      }
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

  // the six-neighbour flood spreads in a diamond; one separable 3-tap
  // blur per upload rounds it into a sphere-ish falloff. Solids stay dark.
  blur() {
    const L = this.light, solid = this.solid;
    if (!this.tmp || this.tmp.length !== L.length) this.tmp = new Float32Array(L.length);
    const T = this.tmp;
    const nx = this.nx, ny = this.ny, nz = this.nz;
    const strides = [3, nx * 3, nx * ny * 3];
    const dims = [nx, ny, nz];
    let src = L, dst = T;
    for (let axis = 0; axis < 3; axis++) {
      const st = strides[axis], n = nx * ny * nz;
      for (let i = 0; i < n; i++) {
        const j = i * 3;
        if (solid[i]) { dst[j] = dst[j + 1] = dst[j + 2] = 0; continue; }
        const ia = axis === 0 ? i % nx : axis === 1 ? ((i / nx) | 0) % ny : (i / (nx * ny)) | 0;
        const lo = ia > 0 ? j - st : j, hi = ia < dims[axis] - 1 ? j + st : j;
        dst[j] = src[j] * 0.5 + (src[lo] + src[hi]) * 0.25;
        dst[j + 1] = src[j + 1] * 0.5 + (src[lo + 1] + src[hi + 1]) * 0.25;
        dst[j + 2] = src[j + 2] * 0.5 + (src[lo + 2] + src[hi + 2]) * 0.25;
      }
      const sw = src; src = dst; dst = sw;
    }
    // three passes: the result sits in T (L→T→L→T); copy back
    if (src !== L) L.set(src);
    // the blur must not dim the sources themselves (three passes took a
    // splat's peak to a third): restore the splats on top of the rounded field
    const S = this.src;
    for (let i = 0; i < L.length; i++) if (S[i] > L[i]) L[i] = S[i];
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
  uniform vec4 uLkLaser;
  // bytes hold light * gain / 4: this returns gain-scaled linear light
  vec3 lkLight(vec3 wp) {
    vec3 uvw = (wp - uLkOrigin) / uLkSize;
    if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return vec3(0.0);
    return texture(uLkLight, uvw).rgb * 4.0;
  }
  // the laser's pool on surfaces, continuous (see uLkLaser)
  vec3 lkLaser(vec3 wp) {
    if (uLkLaser.w <= 0.0) return vec3(0.0);
    vec3 d = wp - uLkLaser.xyz;
    return vec3(1.0, 0.2, 0.12) * (uLkLaser.w * 0.9 / (1.0 + dot(d, d) * 60.0));
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
  irradiance += lkLight(vLkWorld) + lkLaser(vLkWorld);
`;
  for (const name of Object.keys(THREE.ShaderLib)) {
    const lib = THREE.ShaderLib[name];
    if (!lib || !lib.uniforms) continue;
    for (const k of Object.keys(uniforms)) lib.uniforms[k] = uniforms[k];
  }
}
