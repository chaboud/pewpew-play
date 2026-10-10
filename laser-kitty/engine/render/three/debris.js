// debris.js — cosmetic crumbs and splinters: what a shatter or a sever
// throws that the sim does not carry. Renderer-side only (Math.random,
// wall-clock dt), never fed back to the sim.
//
// Crumbs fly ballistic, land on whatever the stream says is under them
// (a ray down against the room's boxes, cast at birth and again whenever
// they wake), bounce a little, roll to a stop and stay: destruction
// accumulates, a homeowner's mess. They never vanish in the air and never
// pop: a woken crumb whose support moved or broke falls again; past the
// budget the oldest resting crumb crumbles away over CRUMBLE_S.
import * as THREE from 'three';
import { ROW, F, CLS, SHAPE } from '../../seam.js?v=k62';
import { CRUMBLE_S } from './crumble.js?v=k62';

const G = 9.8;
const _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _ax = new THREE.Vector3();
const _c = new THREE.Color();

/** highest surface under (x, y, z) among the room's solid rows; {y, idx, sx, sy, sz} of the support */
export function surfaceBelow(rows, count, x, y, z, skip = -1) {
  let best = -Infinity, bi = -1;
  for (let i = 0; i < count; i++) {
    if (i === skip) continue;
    const o = i * ROW;
    const cls = rows[o];
    if (cls === CLS.CAT || cls === CLS.TOMBSTONE) continue;
    const a = rows[o + F.A], b = rows[o + F.B], c = rows[o + F.C];
    if (Math.max(a, b, c) < 0.03) continue; // crumbs, sparks, droplets, cloth particles
    const px = rows[o + F.PX], py = rows[o + F.PY], pz = rows[o + F.PZ];
    const shape = rows[o + F.SHAPE];
    let hit = -Infinity;
    if (shape === SHAPE.BOX) {
      if (b < 0.004) continue; // decals lie on surfaces
      // ray (x,y,z) + t(0,-1,0) against the oriented box, in its frame
      const qx = rows[o + F.QX], qy = rows[o + F.QY], qz = rows[o + F.QZ], qw = rows[o + F.QW];
      _q.set(-qx, -qy, -qz, qw);
      const lo = _p.set(x - px, y - py, z - pz).applyQuaternion(_q);
      const ox = lo.x, oy = lo.y, oz = lo.z;
      const ld = _ax.set(0, -1, 0).applyQuaternion(_q);
      let t0 = 0, t1 = 8;
      const ext = [a, b, c], org = [ox, oy, oz], dir = [ld.x, ld.y, ld.z];
      let ok = true;
      for (let k = 0; k < 3 && ok; k++) {
        if (Math.abs(dir[k]) < 1e-6) { if (Math.abs(org[k]) > ext[k]) ok = false; continue; }
        let ta = (-ext[k] - org[k]) / dir[k], tb = (ext[k] - org[k]) / dir[k];
        if (ta > tb) { const tt = ta; ta = tb; tb = tt; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) ok = false;
      }
      if (ok) hit = y - t0;
    } else {
      const r = shape === SHAPE.SPHERE ? a : b;
      const d2 = (x - px) * (x - px) + (z - pz) * (z - pz);
      if (d2 < r * r) hit = py + Math.sqrt(r * r - d2);
    }
    if (hit > best && hit <= y + 0.005) { best = hit; bi = i; }
  }
  if (bi < 0) return { y: -2, idx: -1, sx: 0, sy: 0, sz: 0 };
  const o = bi * ROW;
  return { y: best, idx: bi, sx: rows[o + F.PX], sy: rows[o + F.PY], sz: rows[o + F.PZ] };
}

export class Debris {
  constructor(scene, cap = 600) {
    this.cap = cap;
    this.n = 0;
    // SoA state
    this.p = new Float32Array(cap * 3); this.v = new Float32Array(cap * 3);
    this.ax = new Float32Array(cap * 3); this.ang = new Float32Array(cap); this.w = new Float32Array(cap);
    this.size = new Float32Array(cap * 3); this.floor = new Float32Array(cap);
    this.sup = new Int32Array(cap).fill(-1); this.supP = new Float32Array(cap * 3);
    this.state = new Uint8Array(cap); // 0 free, 1 flying, 2 resting, 3 crumbling
    this.t = new Float32Array(cap); this.born = new Float64Array(cap);
    this.kind = new Uint8Array(cap); // 0 chip, 1 splinter
    this.hx = 4; this.hz = 3;
    this.clock = 0;
    this.meshes = [
      this.makeMesh(scene, new THREE.IcosahedronGeometry(1, 0)),
      this.makeMesh(scene, new THREE.BoxGeometry(1, 1, 1)),
    ];
  }

  makeMesh(scene, geo) {
    const mat = new THREE.MeshToonMaterial({ color: 0xffffff });
    const m = new THREE.InstancedMesh(geo, mat, this.cap);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(this.cap * 3).fill(1), 3);
    m.castShadow = false;
    m.receiveShadow = true;
    m.frustumCulled = false;
    m.count = 0;
    scene.add(m);
    return m;
  }

  room(hx, hz) {
    this.hx = hx; this.hz = hz;
    this.state.fill(0);
    this.n = 0;
    for (const m of this.meshes) for (let k = 0; k < this.cap; k++) m.setMatrixAt(k, ZERO);
  }

  alloc() {
    for (let k = 0; k < this.cap; k++) if (this.state[k] === 0) return k;
    // over budget: the oldest resting crumb crumbles away (never a pop); if
    // none rests, the oldest flying one is recycled (rare: a burst of bursts)
    let old = -1, oldT = Infinity, oldF = -1, oldFT = Infinity;
    for (let k = 0; k < this.cap; k++) {
      if (this.state[k] === 2 && this.born[k] < oldT) { oldT = this.born[k]; old = k; }
      if (this.state[k] === 1 && this.born[k] < oldFT) { oldFT = this.born[k]; oldF = k; }
    }
    if (old >= 0) { this.state[old] = 3; this.t[old] = 0; }
    return oldF;
  }

  /**
   * Throw `n` pieces from inside an oriented box (centre p, quat q, half
   * extents ext) in `color`, kind 0 chips / 1 splinters.
   */
  throwFrom(rows, count, p, q, ext, color, n, kind = 0, skip = -1, kick = 1) {
    const col = new THREE.Color(color);
    const big = Math.max(ext[0], ext[1], ext[2]);
    for (let j = 0; j < n; j++) {
      const k = this.alloc();
      if (k < 0) return;
      _p.set((Math.random() * 2 - 1) * ext[0], (Math.random() * 2 - 1) * ext[1], (Math.random() * 2 - 1) * ext[2]).applyQuaternion(q);
      const x = p[0] + _p.x, y = p[1] + _p.y, z = p[2] + _p.z;
      this.p[k * 3] = x; this.p[k * 3 + 1] = y; this.p[k * 3 + 2] = z;
      const th = Math.random() * Math.PI * 2, sp = (0.3 + Math.random() * 1.1) * kick;
      this.v[k * 3] = Math.cos(th) * sp + _p.x * 2; this.v[k * 3 + 1] = (0.6 + Math.random() * 1.4) * kick; this.v[k * 3 + 2] = Math.sin(th) * sp + _p.z * 2;
      _ax.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      this.ax[k * 3] = _ax.x; this.ax[k * 3 + 1] = _ax.y; this.ax[k * 3 + 2] = _ax.z;
      this.ang[k] = Math.random() * 6.28; this.w[k] = (Math.random() * 2 - 1) * 14;
      const s = Math.min(0.03, Math.max(0.006, big * (0.12 + Math.random() * 0.2)));
      if (kind === 1) { this.size[k * 3] = s * 0.35; this.size[k * 3 + 1] = s * 0.3; this.size[k * 3 + 2] = s * (1.6 + Math.random() * 1.6); }
      else { this.size[k * 3] = this.size[k * 3 + 1] = this.size[k * 3 + 2] = s * 0.55; }
      const below = surfaceBelow(rows, count, x, y, z, skip);
      this.land(k, below);
      this.state[k] = 1; this.t[k] = 0; this.born[k] = this.clock; this.kind[k] = kind;
      _c.copy(col).multiplyScalar(0.85 + Math.random() * 0.3);
      this.meshes[kind].setColorAt(k, _c);
      this.meshes[kind].instanceColor.needsUpdate = true;
      this.meshes[1 - kind].setMatrixAt(k, ZERO); // the slot's last life may have been the other kind
    }
  }

  land(k, below) {
    this.floor[k] = below.y;
    this.sup[k] = below.idx;
    this.supP[k * 3] = below.sx; this.supP[k * 3 + 1] = below.sy; this.supP[k * 3 + 2] = below.sz;
  }

  /** pace by the frame's sim seconds (a long frame is many ticks), in steps no coarser than a tick */
  update(dt, rows, count) {
    let left = Math.min(dt, 0.5);
    do {
      const h = Math.min(left, 1 / 60);
      this.step(h, rows, count, left - h <= 1e-6);
      left -= h;
    } while (left > 1e-6);
  }

  step(dt, rows, count, draw) {
    this.clock += dt;
    const mesh = this.meshes;
    let hi = [0, 0];
    for (let k = 0; k < this.cap; k++) {
      const st = this.state[k];
      if (st === 0) continue;
      const kind = this.kind[k];
      hi[kind] = Math.max(hi[kind], k + 1);
      const i3 = k * 3;
      let scale = 1;
      if (st === 1) {
        this.v[i3 + 1] -= G * dt;
        this.p[i3] += this.v[i3] * dt; this.p[i3 + 1] += this.v[i3 + 1] * dt; this.p[i3 + 2] += this.v[i3 + 2] * dt;
        this.ang[k] += this.w[k] * dt;
        // the room's walls (the front is open: a crumb may fall off the stage)
        const lx = this.hx - 0.02, lz = this.hz - 0.02;
        if (Math.abs(this.p[i3]) > lx) { this.p[i3] = Math.sign(this.p[i3]) * lx; this.v[i3] *= -0.3; }
        if (this.p[i3 + 2] > lz) { this.p[i3 + 2] = lz; this.v[i3 + 2] *= -0.3; }
        const rest = this.floor[k] + this.size[i3 + 1] * 0.5;
        if (this.p[i3 + 1] <= rest) {
          this.p[i3 + 1] = rest;
          if (this.v[i3 + 1] < -0.5) {
            this.v[i3 + 1] *= -0.3; this.v[i3] *= 0.55; this.v[i3 + 2] *= 0.55; this.w[k] *= 0.5;
          } else {
            // rolling out on the surface, then still
            this.v[i3 + 1] = 0;
            const f = Math.exp(-dt * 9);
            this.v[i3] *= f; this.v[i3 + 2] *= f; this.w[k] *= f;
            if (Math.hypot(this.v[i3], this.v[i3 + 2]) < 0.03) { this.state[k] = 2; this.v[i3] = this.v[i3 + 2] = 0; }
            // rolled off the edge of what holds it: find what is under it now
            const below = surfaceBelow(rows, count, this.p[i3], this.p[i3 + 1] + 0.01, this.p[i3 + 2]);
            if (below.y < this.floor[k] - 0.01) { this.land(k, below); }
          }
        }
        if (this.p[i3 + 1] < -1.5) { this.state[k] = 3; this.t[k] = 0; }
      } else if (st === 2) {
        // resting: wake if what holds it moved or broke
        const si = this.sup[k];
        if (si >= 0 && si < count) {
          const o = si * ROW;
          const moved = rows[o] === CLS.TOMBSTONE ||
            Math.abs(rows[o + F.PX] - this.supP[i3]) + Math.abs(rows[o + F.PY] - this.supP[i3 + 1]) + Math.abs(rows[o + F.PZ] - this.supP[i3 + 2]) > 0.01;
          if (moved) {
            this.state[k] = 1;
            this.land(k, surfaceBelow(rows, count, this.p[i3], this.p[i3 + 1] - this.size[i3 + 1] * 0.6, this.p[i3 + 2], si));
          }
        }
      } else if (st === 3) {
        this.t[k] += dt;
        const u = Math.min(1, this.t[k] / CRUMBLE_S);
        scale = 1 - u * u * (3 - 2 * u);
        if (u >= 1) { this.state[k] = 0; mesh[kind].setMatrixAt(k, ZERO); continue; }
      }
      if (!draw) continue;
      _p.set(this.p[i3], this.p[i3 + 1], this.p[i3 + 2]);
      _ax.set(this.ax[i3], this.ax[i3 + 1], this.ax[i3 + 2]);
      _q.setFromAxisAngle(_ax, this.ang[k]);
      _s.set(this.size[i3] * scale, this.size[i3 + 1] * scale, this.size[i3 + 2] * scale);
      _m.compose(_p, _q, _s);
      mesh[kind].setMatrixAt(k, _m);
    }
    if (!draw) return;
    for (let m = 0; m < 2; m++) {
      mesh[m].count = hi[m];
      mesh[m].visible = hi[m] > 0;
      mesh[m].instanceMatrix.needsUpdate = true;
    }
  }

  census() {
    const c = [0, 0, 0, 0];
    for (let k = 0; k < this.cap; k++) c[this.state[k]]++;
    return { flying: c[1], resting: c[2], crumbling: c[3] };
  }
}

const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
