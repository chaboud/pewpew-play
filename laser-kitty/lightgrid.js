// lightgrid.js — the light volume's grid math, with no three.js in it so
// the Web Worker can import it (import maps don't reach workers). See
// lightvol.js for what it is and who samples it.
export const ATT = 0.86;   // per texel at 10 cm; rescaled with the texel so reach stays in metres
export const SCALE = 4;    // bytes store value/SCALE: headroom for stacked signs

const KSIG2 = 2 * 0.7 * 0.7;
const KERNEL_SUM = (() => { let w = 0; for (let z = -1; z <= 2; z++) for (let y = -1; y <= 2; y++) for (let x = -1; x <= 2; x++) w += Math.exp(-(x * x + y * y + z * z) / KSIG2); return w; })();

// ------------------------------------------------------------ the grid ---
export class LightGrid {
  constructor() {
    this.nx = this.ny = this.nz = 0;
    this.texel = 0.1;
    this.att = ATT;
    this.origin = [0, 0, 0];
    this.light = null; this.src = null; this.solid = null; this.tmp = null;
  }

  setup(nx, ny, nz, texel, origin) {
    this.nx = nx; this.ny = ny; this.nz = nz; this.texel = texel; this.origin = origin;
    // attenuation per texel keeps the same reach in metres as 0.86 at 10 cm
    this.att = Math.pow(ATT, texel / 0.1);
    const n = nx * ny * nz;
    this.light = new Float32Array(n * 3);
    this.src = new Float32Array(n * 3);
    this.solid = new Uint8Array(n);
    this.tmp = new Float32Array(n * 3);
  }

  index(ix, iy, iz) { return (iz * this.ny + iy) * this.nx + ix; }

  // solids from the sim's render rows (15 floats per body): static and
  // furniture boxes with some bulk. Only the texels inside each box's
  // bounds are visited.
  voxelize(rows, count) {
    this.solid.fill(0);
    const t = this.texel, o = this.origin;
    for (let i = 0; i < count; i++) {
      const r = i * 15;
      const cls = rows[r], shape = rows[r + 1];
      if (shape !== 0 || (cls !== 0 && cls !== 1)) continue;
      const a = rows[r + 2], b = rows[r + 3], c = rows[r + 4];
      const bulk = Math.min(a, b, c);
      if (cls === 1 && (bulk < 0.05 || Math.max(a, b, c) < 0.15)) continue;
      if (cls === 0 && Math.max(a, b, c) < 0.12) continue;
      const px = rows[r + 5], py = rows[r + 6], pz = rows[r + 7];
      // inverse quaternion (conjugate) for world→local
      const qx = -rows[r + 8], qy = -rows[r + 9], qz = -rows[r + 10], qw = rows[r + 11];
      const rad = Math.hypot(a, b, c) + t;
      const x0 = Math.max(0, Math.floor((px - rad - o[0]) / t)), x1 = Math.min(this.nx - 1, Math.ceil((px + rad - o[0]) / t));
      const y0 = Math.max(0, Math.floor((py - rad - o[1]) / t)), y1 = Math.min(this.ny - 1, Math.ceil((py + rad - o[1]) / t));
      const z0 = Math.max(0, Math.floor((pz - rad - o[2]) / t)), z1 = Math.min(this.nz - 1, Math.ceil((pz + rad - o[2]) / t));
      const ea = Math.max(a, t * 0.55), eb = Math.max(b, t * 0.55), ec = Math.max(c, t * 0.55);
      for (let iz = z0; iz <= z1; iz++) for (let iy = y0; iy <= y1; iy++) for (let ix = x0; ix <= x1; ix++) {
        const vx = o[0] + (ix + 0.5) * t - px, vy = o[1] + (iy + 0.5) * t - py, vz = o[2] + (iz + 0.5) * t - pz;
        // v' = q v q*  (q = conjugate above)
        const ix2 = qw * vx + qy * vz - qz * vy, iy2 = qw * vy + qz * vx - qx * vz, iz2 = qw * vz + qx * vy - qy * vx, iw2 = -qx * vx - qy * vy - qz * vz;
        const lx = ix2 * qw + iw2 * -qx + iy2 * -qz - iz2 * -qy;
        const ly = iy2 * qw + iw2 * -qy + iz2 * -qx - ix2 * -qz;
        const lz = iz2 * qw + iw2 * -qz + ix2 * -qy - iy2 * -qx;
        if (Math.abs(lx) <= ea && Math.abs(ly) <= eb && Math.abs(lz) <= ec) this.solid[this.index(ix, iy, iz)] = 1;
      }
    }
  }

  // emitters: flat [x, y, z, r, g, b, strength, ...]. A source is splatted
  // over the 4×4×4 texels around its CONTINUOUS position with a gaussian
  // of the distance to each texel centre, renormalized so the energy is
  // the same wherever it sits between centres.
  inject(em) {
    this.src.fill(0);
    const t = this.texel, o = this.origin;
    for (let k = 0; k < em.length; k += 7) {
      const gx = (em[k] - o[0]) / t - 0.5, gy = (em[k + 1] - o[1]) / t - 0.5, gz = (em[k + 2] - o[2]) / t - 0.5;
      const bx = Math.floor(gx), by = Math.floor(gy), bz = Math.floor(gz);
      let wsum = 0;
      for (let dz = -1; dz <= 2; dz++) for (let dy = -1; dy <= 2; dy++) for (let dx = -1; dx <= 2; dx++) {
        const fx = bx + dx - gx, fy = by + dy - gy, fz = bz + dz - gz;
        wsum += Math.exp(-(fx * fx + fy * fy + fz * fz) / KSIG2);
      }
      const norm = KERNEL_SUM / Math.max(wsum, 1e-6);
      const st = em[k + 6];
      const rr = em[k + 3] * st, gg = em[k + 4] * st, bb = em[k + 5] * st;
      for (let dz = -1; dz <= 2; dz++) {
        const z = bz + dz; if (z < 0 || z >= this.nz) continue;
        for (let dy = -1; dy <= 2; dy++) {
          const y = by + dy; if (y < 0 || y >= this.ny) continue;
          for (let dx = -1; dx <= 2; dx++) {
            const x = bx + dx; if (x < 0 || x >= this.nx) continue;
            const fx = x - gx, fy = y - gy, fz = z - gz;
            const w = Math.exp(-(fx * fx + fy * fy + fz * fz) / KSIG2) * norm;
            const j = this.index(x, y, z) * 3;
            this.src[j] += rr * w; this.src[j + 1] += gg * w; this.src[j + 2] += bb * w;
          }
        }
      }
    }
  }

  // Gauss-Seidel max-flood: a forward sweep carries light along +x +y +z,
  // a backward sweep along the other three. Solids take and pass nothing.
  sweep(rounds = 1) {
    const L = this.light, S = this.src, solid = this.solid, att = this.att;
    const nx = this.nx, ny = this.ny, nz = this.nz;
    const sx = 3, sy = nx * 3, sz = nx * ny * 3;
    const n = nx * ny * nz;
    for (let i = 0; i < n * 3; i++) if (S[i] > L[i]) L[i] = S[i];
    for (let i = 0; i < n; i++) if (solid[i]) { L[i * 3] = L[i * 3 + 1] = L[i * 3 + 2] = 0; }
    for (let r = 0; r < rounds; r++) {
      for (let i = 0; i < n; i++) {
        if (solid[i]) continue;
        const ix = i % nx, iy = ((i / nx) | 0) % ny, iz = (i / (nx * ny)) | 0;
        const j = i * 3;
        for (let c = 0; c < 3; c++) {
          let m = L[j + c];
          if (ix > 0) { const v = L[j - sx + c] * att; if (v > m) m = v; }
          if (iy > 0) { const v = L[j - sy + c] * att; if (v > m) m = v; }
          if (iz > 0) { const v = L[j - sz + c] * att; if (v > m) m = v; }
          L[j + c] = m;
        }
      }
      for (let i = n - 1; i >= 0; i--) {
        if (solid[i]) continue;
        const ix = i % nx, iy = ((i / nx) | 0) % ny, iz = (i / (nx * ny)) | 0;
        const j = i * 3;
        for (let c = 0; c < 3; c++) {
          let m = L[j + c];
          if (ix < nx - 1) { const v = L[j + sx + c] * att; if (v > m) m = v; }
          if (iy < ny - 1) { const v = L[j + sy + c] * att; if (v > m) m = v; }
          if (iz < nz - 1) { const v = L[j + sz + c] * att; if (v > m) m = v; }
          L[j + c] = m;
        }
      }
    }
  }

  // one separable 3-tap blur rounds the six-neighbour diamond; the
  // source splats are restored on top so the blur never dims a light
  blur() {
    const L = this.light, solid = this.solid, T = this.tmp, S = this.src;
    const nx = this.nx, ny = this.ny, nz = this.nz;
    const strides = [3, nx * 3, nx * ny * 3];
    const dims = [nx, ny, nz];
    const n = nx * ny * nz;
    let src = L, dst = T;
    for (let axis = 0; axis < 3; axis++) {
      const st = strides[axis];
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
    if (src !== L) L.set(src);
    for (let i = 0; i < L.length; i++) if (S[i] > L[i]) L[i] = S[i];
  }

  decay(k) {
    const L = this.light;
    for (let i = 0; i < L.length; i++) L[i] *= k;
  }

  // one refinement step: new sources, a little forgetting, one flood
  // round, the rounding blur
  step(emitters, rounds = 1, decay = 0.9) {
    this.inject(emitters);
    this.decay(decay);
    this.sweep(rounds);
    this.blur();
  }

  pack(bytes, gain) {
    const L = this.light;
    const n = this.nx * this.ny * this.nz;
    const k = (gain / SCALE) * 255;
    for (let i = 0; i < n; i++) {
      bytes[i * 4] = Math.min(255, L[i * 3] * k);
      bytes[i * 4 + 1] = Math.min(255, L[i * 3 + 1] * k);
      bytes[i * 4 + 2] = Math.min(255, L[i * 3 + 2] * k);
      bytes[i * 4 + 3] = 255;
    }
  }
}

