// catgen7.js — cat v7, the character cat (founder: "give us a new cat
// model"). v3-v6 are one generic quadruped sculpt in four coats of paint;
// this is a second sculpt on the same recipe (SDF -> polygonize at load ->
// code-built skeleton -> CatRig), authored for silhouette and for a face:
//
//  - a big round head with cheeks, cheek tufts, whisker pads, a chin and a
//    nose; large cupped ears; a puffed chest under a short neck; haunches;
//    legs that taper into mitten paws; a thick tail that stands up;
//  - PARAMETRIC: one layout() takes a small build record (head, girth, leg,
//    neck, tail...) and every primitive, bone, contact point and coat
//    landmark follows from it, so a room of cats differs in silhouette —
//    standard, chonk, lanky, kitten;
//  - a FACE: a second small skinned mesh draped on the head — eye patches
//    whose iris, pupil and lids are drawn in the fragment shader from a few
//    uniforms, a nose-and-mouth patch, whiskers — and an Expression driver
//    that turns the sim's brain state into pupils, lids, ears, whiskers and
//    tail (wide pupils on the hunt, slits when bored, closed and content
//    when it purrs). All of it cosmetic and viewer-side.
//
// Same canonical space as catgen.js (+z nose, y up, feet on y=0, ~0.095 m
// per unit after CatRig's SCALE) and the same bone names, so the pose
// tables, contact clamp and head tracking are untouched. The coat painter
// keys off v2's bind-pose bounds, which no longer fit a parametric body:
// each vertex carries a `coatPos` — where the same landmark sits in that
// reference space — and the painter reads it instead of the position.
//
// Fully ours, like catgen.js: no model file, no license strings.

import * as THREE from 'three';
import { edgeTable, triTable } from './vendor/MarchingCubes.js';
import { smin, sdSphere, sdCapsule, buildWalkClip } from './catgen.js?v=k65';

// ------------------------------------------------------------- builds ---
// multipliers on the standard sculpt. S is the whole cat; everything else
// reshapes it. Kept to four: each build is polygonized once per session
// (cached), and that is the cost that scales with this list.
const STD = {
  S: 0.9, head: 0.95, ear: 1, earW: 1, cheek: 1, tuft: 1, eye: 1,
  len: 1, girth: 1, belly: 0, leg: 1, legT: 1, paw: 1, stance: 1, neck: 1, tailL: 1, tailT: 1,
};
export const BUILDS = [
  { name: 'standard', ...STD },
  { name: 'chonk', ...STD, S: 0.95, girth: 1.3, belly: 0.5, len: 0.96, leg: 0.8, legT: 1.25, paw: 1.12, stance: 1.22, neck: 0.35, head: 1.03, cheek: 1.5, ear: 0.82, tailL: 0.85, tailT: 1.3, tuft: 1.25 },
  { name: 'lanky', ...STD, S: 0.95, girth: 0.8, len: 1.1, leg: 1.3, legT: 0.8, paw: 0.88, stance: 0.86, neck: 1.7, head: 0.84, cheek: 0.45, ear: 1.3, earW: 1.08, tailL: 1.22, tailT: 0.68, tuft: 0.45 },
  { name: 'kitten', ...STD, S: 0.76, head: 1.24, eye: 1.14, ear: 1.08, cheek: 1.1, len: 0.76, girth: 0.96, leg: 0.7, legT: 1.08, paw: 1.18, neck: 0.3, tailL: 0.66, tailT: 0.95, tuft: 0.8 },
];
export const BUILD_NAMES = BUILDS.map((b) => b.name);

// ------------------------------------------------------------- layout ---
// every anchor of the sculpt, in unscaled units (S is applied on the way
// out). Head features are head-local: relative to the skull centre `hc`,
// in units of the head scale `hs`.
const TAIL_ARC = [[0, 0, 0], [0, 0.34, -0.6], [0, 0.9, -1.0], [0, 1.52, -1.08], [0, 2.08, -0.9], [0, 2.46, -0.52]];
const TAIL_R = [0.27, 0.275, 0.265, 0.255, 0.25, 0.215];

function layout(P) {
  const hs = P.head, g = P.girth;
  const A = 0.3; // ankle height: the paw is an ellipsoid under it
  const kneeY = A + 0.66 * P.leg, shY = A + 1.58 * P.leg, ty = shY + 0.12;
  const zc = -0.5, zR = zc - 1.12 * P.len, zM = zc + 0.1 * P.len, zF = zc + 1.25 * P.len;
  const rR = 0.86 * g, rM = 0.84 * g, rF = 0.76 * g;
  const hc = [0, ty + 0.58 + 0.45 * P.neck + 0.5 * (hs - 1), zF + 0.52 + 0.42 * P.neck + 0.3 * (hs - 1)];
  const xF = 0.5 * P.stance, xR = 0.54 * P.stance;
  const tr = [0, ty + 0.14, zR - 0.7 * rR];
  const tail = TAIL_ARC.map((o) => [0, tr[1] + o[1] * P.tailL, tr[2] + o[2] * P.tailL]);
  const tailR = TAIL_R.map((r) => r * P.tailT);
  // ear (the +x one; the SDF mirrors): base buried in the skull, tip up and out
  const earB = [0.5, 0.58, -0.06];
  const earT = [earB[0] + 0.34 * P.ear, earB[1] + 1.08 * P.ear, earB[2] - 0.12 * P.ear];
  const pawY = 0.19 * P.paw;
  return {
    P, S: P.S, hs, hc, A, kneeY, shY, ty, zc, zR, zM, zF, rR, rM, rF, xF, xR, tr, tail, tailR, earB, earT, pawY,
    fPaw: [xF + 0.03, pawY, zF + 0.3], rPaw: [xR + 0.02, pawY, zR - 0.12],
    // the hind leg's Z: stifle forward of the hip, hock behind it, the paw back under
    hipY: A + 1.5 * P.leg, stifleY: A + 0.98 * P.leg, hockY: A + 0.38 * P.leg,
    stifleZ: zR + 0.3, hockZ: zR - 0.38, ankleZ: zR - 0.3, elbowZ: zF + 0.03, wristZ: zF + 0.12,
  };
}

// ---------------------------------------------------------------- SDF ---
// scaled-sphere ellipsoid: an under-estimate away from the short axis, but
// 1-Lipschitz, which is what the narrow-band skip in polygonize() relies on
function sdEll(px, py, pz, cx, cy, cz, rx, ry, rz) {
  const x = (px - cx) / rx, y = (py - cy) / ry, z = (pz - cz) / rz;
  return (Math.sqrt(x * x + y * y + z * z) - 1) * Math.min(rx, ry, rz);
}

function makeSDF(L) {
  const { P, S, hs, hc, A, kneeY, shY, ty, zc, zR, zM, zF, rR, rM, rF, xF, xR, tr, tail, tailR, earB, earT, pawY, fPaw, rPaw, hipY, stifleY, hockY, stifleZ, hockZ, ankleZ, elbowZ, wristZ } = L;
  const lt = P.legT, pw = P.paw, belly = P.belly, tf = P.tuft;
  const ckx = 0.5 + 0.09 * P.cheek, ckr = 0.43 + 0.08 * P.cheek;
  const chestR = 0.68 * Math.pow(P.girth, 0.8);
  // ear frame: axis a (base -> tip), facing n (forward, a touch outward), width w
  const eax = earT[0] - earB[0], eay = earT[1] - earB[1], eaz = earT[2] - earB[2];
  const eL = Math.hypot(eax, eay, eaz);
  const ax_ = eax / eL, ay_ = eay / eL, az_ = eaz / eL;
  let nx_ = 0.32, ny_ = 0, nz_ = 1;
  const nd = nx_ * ax_ + ny_ * ay_ + nz_ * az_;
  nx_ -= ax_ * nd; ny_ -= ay_ * nd; nz_ -= az_ * nd;
  const nl = Math.hypot(nx_, ny_, nz_); nx_ /= nl; ny_ /= nl; nz_ /= nl;
  const wx_ = ay_ * nz_ - az_ * ny_, wy_ = az_ * nx_ - ax_ * nz_, wz_ = ax_ * ny_ - ay_ * nx_;
  const earW0 = 0.47 * P.earW, earW1 = 0.085, earN0 = 0.17, earN1 = 0.085;

  // the head, in head-local units
  function head(x, y, z) {
    const ax = Math.abs(x);
    let d = sdEll(x, y, z, 0, 0, 0, 1.0, 0.86, 0.92);
    d = smin(d, sdSphere(ax, y, z, ckx, -0.38, 0.3, ckr), 0.3); // cheeks
    d = smin(d, sdSphere(ax, y, z, 0.2, -0.38, 0.8, 0.28), 0.14); // whisker pads (the cleft between them stays)
    d = smin(d, sdSphere(x, y, z, 0, -0.6, 0.66, 0.22), 0.14); // chin
    d = smin(d, sdSphere(x, y, z, 0, -0.19, 0.98, 0.14), 0.1); // nose
    // cheek tufts: two points a side, out, down and back — the silhouette
    // from the game camera is head + ears + these
    d = smin(d, sdCapsule(ax, y, z, ckx + 0.3, -0.4, 0.2, ckx + 0.36 + 0.42 * tf, -0.5 - 0.1 * tf, -0.12, 0.26, 0.03), 0.1);
    d = smin(d, sdCapsule(ax, y, z, ckx + 0.22, -0.62, 0.16, ckx + 0.26 + 0.28 * tf, -0.66 - 0.4 * tf, -0.08, 0.22, 0.03), 0.1);
    // ear: an elliptic cone, cupped (the edges bend forward), round-tipped
    const qx = ax - earB[0], qy = y - earB[1], qz = z - earB[2];
    const along = qx * ax_ + qy * ay_ + qz * az_;
    const t = along < 0 ? 0 : along > eL ? 1 : along / eL;
    const ex = along - t * eL;
    const rw = earW0 + (earW1 - earW0) * t, rn = earN0 + (earN1 - earN0) * t;
    const u = qx * wx_ + qy * wy_ + qz * wz_;
    const un = u / rw;
    const v = qx * nx_ + qy * ny_ + qz * nz_ - 0.11 * (1 - t) * un * un;
    const de = (Math.sqrt(un * un + (v * v + ex * ex) / (rn * rn)) - 1) * rn * 0.9;
    return smin(d, de, 0.12);
  }

  return function sdf(X, Y, Z) {
    const x = X / S, y = Y / S, z = Z / S;
    const ax = Math.abs(x);
    // torso: rear barrel into the chest, a belly when the build carries one
    let d = sdCapsule(x, y, z, 0, ty - 0.05, zR, 0, ty, zM, rR, rM);
    d = smin(d, sdCapsule(x, y, z, 0, ty, zM, 0, ty + 0.08, zF, rM, rF), 0.4);
    if (belly > 0) d = smin(d, sdSphere(x, y, z, 0, ty - 0.34 * belly, zc - 0.1, rM + 0.06 * belly), 0.45);
    // puffed chest under the chin, and the tuft that points off it
    d = smin(d, sdSphere(x, y, z, 0, ty - 0.2, zF + 0.28, chestR), 0.35);
    d = smin(d, sdCapsule(x, y, z, 0, ty - 0.26, zF + 0.7, 0, ty - 0.66 - 0.16 * tf, zF + 1.0 + 0.16 * tf, 0.3, 0.04), 0.16);
    d = smin(d, sdCapsule(x, y, z, 0, ty - 0.56, zF + 0.6, 0, ty - 0.98 - 0.1 * tf, zF + 0.78 + 0.1 * tf, 0.25, 0.04), 0.14);
    d = smin(d, sdCapsule(x, y, z, 0, ty + 0.25, zF + 0.15, 0, hc[1] - 0.3 * hs, hc[2] - 0.35 * hs, 0.5, 0.44), 0.3); // neck
    // front leg: shoulder -> elbow -> wrist -> mitten
    d = smin(d, sdCapsule(ax, y, z, xF, shY, zF + 0.1, xF + 0.02, kneeY, elbowZ, 0.36 * lt, 0.27 * lt), 0.22);
    d = smin(d, sdCapsule(ax, y, z, xF + 0.02, kneeY, elbowZ, xF + 0.03, A, wristZ, 0.27 * lt, 0.2 * lt), 0.18);
    d = smin(d, sdEll(ax, y, z, fPaw[0], fPaw[1], fPaw[2], 0.3 * pw, 0.19 * pw, 0.4 * pw), 0.1);
    // rear leg: haunch -> stifle -> hock -> ankle -> mitten
    d = smin(d, sdSphere(ax, y, z, xR, ty - 0.28, zR + 0.1, 0.68 * (0.55 + 0.45 * P.girth)), 0.35);
    d = smin(d, sdCapsule(ax, y, z, xR, hipY - 0.1, zR + 0.12, xR, stifleY, stifleZ, 0.46 * lt, 0.36 * lt), 0.25);
    d = smin(d, sdCapsule(ax, y, z, xR, stifleY, stifleZ, xR + 0.02, hockY, hockZ, 0.34 * lt, 0.2 * lt), 0.2);
    d = smin(d, sdCapsule(ax, y, z, xR + 0.02, hockY, hockZ, xR + 0.02, A - 0.02, ankleZ, 0.2 * lt, 0.18 * lt), 0.15);
    d = smin(d, sdEll(ax, y, z, rPaw[0], rPaw[1], rPaw[2], 0.3 * pw, 0.19 * pw, 0.42 * pw), 0.1);
    // tail: one thick arc, up and over
    for (let i = 0; i < 5; i++) {
      const a = tail[i], b = tail[i + 1];
      d = smin(d, sdCapsule(x, y, z, 0, a[1], a[2], 0, b[1], b[2], tailR[i], tailR[i + 1]), i === 0 ? 0.22 : 0.1);
    }
    d = smin(d, head((x - hc[0]) / hs, (y - hc[1]) / hs, (z - hc[2]) / hs) * hs, 0.2);
    return d * S;
  };
}

// ------------------------------------------------------- polygonization ---
// Marching cubes on an isotropic grid (the vendored tables, our own walk):
// indexed output with shared edge vertices, so the mesh is welded by
// construction. Two things keep the load cost down. The body is
// mirror-symmetric, so only x >= 0 is sampled. And the field is only
// evaluated near the surface: one sample at the middle of each 4x4x4 block
// of grid points decides whether the block can contain the surface at all
// (the SDF is 1-Lipschitz, bar the cupped ear, which the margin in `far`
// covers); if not, the block is filled with that value —
// right sign, wrong magnitude, never interpolated to a vertex that isn't
// then projected onto the real surface anyway.
const EDGE_CORNER = [0, 1, 3, 0, 4, 5, 7, 4, 0, 1, 2, 3]; // edge -> the corner it starts at
const EDGE_AXIS = [0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 2];

function polygonize(sdf, lo, hi, h) {
  const mid = Math.ceil(Math.max(-lo[0], hi[0]) / h);
  const nx = 2 * mid + 1, ny = Math.ceil((hi[1] - lo[1]) / h) + 1, nz = Math.ceil((hi[2] - lo[2]) / h) + 1;
  const sy = nx, sz = nx * ny, N = nx * ny * nz;
  const field = new Float32Array(N);
  const B = 4, far = 3.7 * h; // half-diagonal of a block (2.6h) plus a cell of margin
  let evals = 0;
  for (let k0 = 0; k0 < nz; k0 += B) {
    for (let j0 = 0; j0 < ny; j0 += B) {
      for (let i0 = mid; i0 < nx; i0 += B) {
        const dc = sdf((i0 - mid + 1.5) * h, lo[1] + (j0 + 1.5) * h, lo[2] + (k0 + 1.5) * h);
        const skip = Math.abs(dc) > far;
        evals++;
        const k1 = Math.min(nz, k0 + B), j1 = Math.min(ny, j0 + B), i1 = Math.min(nx, i0 + B);
        for (let k = k0; k < k1; k++) {
          for (let j = j0; j < j1; j++) {
            const row = k * sz + j * sy;
            for (let i = i0; i < i1; i++) {
              let d = dc;
              if (!skip) { d = sdf((i - mid) * h, lo[1] + j * h, lo[2] + k * h); evals++; }
              field[row + i] = d;
              field[row + 2 * mid - i] = d;
            }
          }
        }
      }
    }
  }
  const off = [0, 1, 1 + sy, sy, sz, 1 + sz, 1 + sy + sz, sy + sz]; // corner -> grid offset
  const stride = [1, sy, sz];
  const edgeVert = [new Int32Array(N).fill(-1), new Int32Array(N).fill(-1), new Int32Array(N).fill(-1)];
  const pos = [], idx = [];
  const cv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let k = 0; k < nz - 1; k++) {
    for (let j = 0; j < ny - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        const q = k * sz + j * sy + i;
        let ci = 0;
        for (let c = 0; c < 8; c++) if (field[q + off[c]] > 0) ci |= 1 << c;
        const bits = edgeTable[ci];
        if (bits === 0) continue;
        for (let e = 0; e < 12; e++) {
          if (!(bits & (1 << e))) continue;
          const a = q + off[EDGE_CORNER[e]], axis = EDGE_AXIS[e];
          let v = edgeVert[axis][a];
          if (v < 0) {
            const fa = field[a], fb = field[a + stride[axis]];
            const t = fa / (fa - fb);
            const ai = a % sy, aj = ((a / sy) | 0) % ny, ak = (a / sz) | 0;
            v = pos.length / 3;
            pos.push((ai - mid + (axis === 0 ? t : 0)) * h, lo[1] + (aj + (axis === 1 ? t : 0)) * h, lo[2] + (ak + (axis === 2 ? t : 0)) * h);
            edgeVert[axis][a] = v;
          }
          cv[e] = v;
        }
        for (let t = ci * 16; triTable[t] !== -1; t += 3) idx.push(cv[triTable[t]], cv[triTable[t + 1]], cv[triTable[t + 2]]);
      }
    }
  }
  // drop each vertex onto the true surface (two Newton steps on a
  // four-tap gradient) and keep that gradient as its normal: smoother than
  // anything the triangles could average to, and the edge interpolation's
  // stair-stepping goes with it
  const nv = pos.length / 3;
  const P = new Float32Array(pos), Nn = new Float32Array(nv * 3);
  const e = h * 0.2;
  for (let v = 0; v < nv; v++) {
    let x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2], gx = 0, gy = 1, gz = 0;
    for (let it = 0; it < 2; it++) {
      const a = sdf(x + e, y - e, z - e), b = sdf(x - e, y - e, z + e), c = sdf(x - e, y + e, z - e), d = sdf(x + e, y + e, z + e);
      gx = (a - b - c + d) / (4 * e); gy = (-a - b + c + d) / (4 * e); gz = (-a + b - c + d) / (4 * e);
      const g2 = gx * gx + gy * gy + gz * gz || 1, val = (a + b + c + d) / 4;
      // a step longer than a cell means a bad gradient (a crease): don't take it
      const s = Math.max(-h, Math.min(h, val / g2 * Math.sqrt(g2))) / Math.sqrt(g2);
      x -= gx * s; y -= gy * s; z -= gz * s;
      evals += 4;
    }
    const gl = Math.hypot(gx, gy, gz) || 1;
    P[v * 3] = x; P[v * 3 + 1] = y; P[v * 3 + 2] = z;
    Nn[v * 3] = gx / gl; Nn[v * 3 + 1] = gy / gl; Nn[v * 3 + 2] = gz / gl;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(P, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(Nn, 3));
  geo.setIndex(new THREE.BufferAttribute(nv > 65535 ? new Uint32Array(idx) : new Uint16Array(idx), 1));
  geo.userData.evals = evals;
  return geo;
}

// --------------------------------------------------------------- rig ---
// [key, head, parent, segment end, radius]. catrig's canonical names, plus
// two more tail bones (the tables only name the first three; the Expression
// driver owns the tip). Identity frames, so the pose tables' documented
// signs hold (x+ = nose down / leg tip back) — except the tail, whose
// chain is built turned about y: v2's tail rests curled up and x+ lays it
// down, and the tables were tuned to that. On identity frames (v3-v6) the
// same +x lifts the tail over the back instead.
function bones(L) {
  const { P, hs, hc, A, kneeY, shY, ty, zc, zR, zF, rR, rM, rF, xF, xR, tail, tailR, earB, earT, hipY, stifleY, hockY, fPaw, rPaw, stifleZ, hockZ, ankleZ, elbowZ, wristZ } = L;
  const H = (x, y, z) => [hc[0] + x * hs, hc[1] + y * hs, hc[2] + z * hs];
  const hb = H(0, -0.28, -0.38); // the skull's pivot: low and back, where the neck meets it
  const eb = (s) => H(s * (earB[0] + (earT[0] - earB[0]) * 0.22), earB[1] + (earT[1] - earB[1]) * 0.22, earB[2]);
  const et = (s) => H(s * earT[0], earT[1], earT[2]);
  const lt = P.legT;
  const out = [
    ['root', [0, ty - 0.03, zc - 0.5 * P.len], null, [0, ty - 0.05, zR - 0.3], rR],
    ['torso', [0, ty, zc + 0.15 * P.len], 'root', [0, ty, zc + 0.55 * P.len], rM],
    ['spine01', [0, ty + 0.02, zc + 0.55 * P.len], 'root', [0, ty + 0.06, zc + 0.95 * P.len], rM],
    ['spine02', [0, ty + 0.06, zc + 0.95 * P.len], 'spine01', [0, ty + 0.26, zF + 0.2], rF],
    ['neck', [0, ty + 0.3, zF + 0.16], 'spine02', hb, 0.5],
    ['head', hb, 'neck', H(0, -0.1, 0.9), 0.92 * hs],
    ['earl', eb(1), 'head', et(1), 0.3 * hs],
    ['earr', eb(-1), 'head', et(-1), 0.3 * hs],
  ];
  const tk = ['tail', 'tail01', 'tail02', 'tail03', 'tail04'];
  for (let i = 0; i < 5; i++) out.push([tk[i], tail[i], i ? tk[i - 1] : 'root', tail[i + 1], tailR[i] * 1.1]);
  for (const [sfx, s] of [['l', 1], ['r', -1]]) {
    out.push(
      [`legupperf${sfx}`, [s * xF, shY, zF + 0.1], 'spine02', [s * (xF + 0.02), kneeY, elbowZ], 0.38 * lt],
      [`leglowerf${sfx}`, [s * (xF + 0.02), kneeY, elbowZ], `legupperf${sfx}`, [s * (xF + 0.03), A, wristZ], 0.28 * lt],
      [`footf${sfx}`, [s * (xF + 0.03), A, wristZ], `leglowerf${sfx}`, [s * fPaw[0], fPaw[1], fPaw[2] + 0.22], 0.26 * P.paw],
      [`thighb${sfx}`, [s * xR, hipY, zR + 0.1], 'root', [s * xR, stifleY, stifleZ], 0.6],
      [`legupperb${sfx}`, [s * xR, stifleY, stifleZ], `thighb${sfx}`, [s * (xR + 0.02), hockY, hockZ], 0.34 * lt],
      [`leglowerb${sfx}`, [s * (xR + 0.02), hockY, hockZ], `legupperb${sfx}`, [s * (xR + 0.02), A - 0.02, ankleZ], 0.25 * lt],
      [`footb${sfx}`, [s * (xR + 0.02), A - 0.02, ankleZ], `leglowerb${sfx}`, [s * rPaw[0], rPaw[1], rPaw[2] + 0.24], 0.26 * P.paw],
    );
  }
  const S = L.S;
  for (const b of out) {
    b[1] = b[1].map((v) => v * S); b[3] = b[3].map((v) => v * S); b[4] *= S;
  }
  return out;
}

const TAIL_TURN = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);

function buildSkeleton(def) {
  const byKey = {}, list = [], wq = {}, wp = {};
  const v = new THREE.Vector3(), qi = new THREE.Quaternion();
  for (const [key, pos, parent] of def) {
    const b = new THREE.Bone();
    b.name = `${key}_0`; // catrig's canonical() strips the suffix
    wq[key] = key === 'tail' ? TAIL_TURN.clone() : parent ? wq[parent].clone() : new THREE.Quaternion();
    wp[key] = pos;
    if (parent) {
      qi.copy(wq[parent]).invert();
      v.set(pos[0] - wp[parent][0], pos[1] - wp[parent][1], pos[2] - wp[parent][2]).applyQuaternion(qi);
      b.position.copy(v);
      b.quaternion.copy(qi).multiply(wq[key]);
      byKey[parent].add(b);
    } else {
      b.position.set(pos[0], pos[1], pos[2]);
    }
    byKey[key] = b;
    list.push(b);
  }
  return { rootBone: byKey.root, list, byKey };
}

// two nearest bone segments, by distance in units of the bone's own radius
// (so the barrel keeps its belly instead of handing it to a leg), inverse
// quartic. Returns [i0, i1, w0, w1].
function makeSkinner(def) {
  const n = def.length;
  return (px, py, pz) => {
    let b0 = 0, d0 = 1e9, b1 = 0, d1 = 1e9;
    for (let b = 0; b < n; b++) {
      const a = def[b][1], e = def[b][3];
      const bax = e[0] - a[0], bay = e[1] - a[1], baz = e[2] - a[2];
      const len2 = bax * bax + bay * bay + baz * baz || 1e-6;
      const t = Math.max(0, Math.min(1, ((px - a[0]) * bax + (py - a[1]) * bay + (pz - a[2]) * baz) / len2));
      const dx = px - (a[0] + bax * t), dy = py - (a[1] + bay * t), dz = pz - (a[2] + baz * t);
      const d = (dx * dx + dy * dy + dz * dz) / (def[b][4] * def[b][4]);
      if (d < d0) { b1 = b0; d1 = d0; b0 = b; d0 = d; } else if (d < d1) { b1 = b; d1 = d; }
    }
    const w0 = 1 / (d0 * d0 + 1e-6), w1 = 1 / (d1 * d1 + 1e-6);
    return [b0, b1, w0 / (w0 + w1), w1 / (w0 + w1)];
  };
}

function skinGeometry(geo, skin) {
  const pos = geo.getAttribute('position');
  const idx = new Uint16Array(pos.count * 4), wgt = new Float32Array(pos.count * 4);
  for (let v = 0; v < pos.count; v++) {
    const s = skin(pos.getX(v), pos.getY(v), pos.getZ(v));
    idx[v * 4] = s[0]; idx[v * 4 + 1] = s[1]; wgt[v * 4] = s[2]; wgt[v * 4 + 1] = s[3];
  }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(idx, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(wgt, 4));
}

// --------------------------------------------------------- coat space ---
// The coat painter (catrig's coatColor) masks by position in v2's
// bind-pose box: socks under y 0.48, a bib on the chest front, a face
// forward of z 1.24, ears above y 2.96, a tail behind z -2.53. Map this
// build's landmarks onto those numbers, piecewise-linear in y and z.
function makeCoatSpace(L) {
  const { S, hs, hc, ty, zR, zF, tr, P, earT } = L;
  const yk = [[0, 0], [0.48, 0.48], [hc[1] - 0.86 * hs, 1.9], [hc[1] - 0.2 * hs, 2.5], [hc[1] + 0.3 * hs, 2.75], [hc[1] + 0.84 * hs, 3.0], [hc[1] + earT[1] * hs, 3.7]];
  const zk = [[tr[2] - 1.3 * P.tailL, -3.4], [tr[2] - 0.22, -2.53], [zR, -1.55], [zF, 0.6], [hc[2] + 0.25 * hs, 1.24], [hc[2] + 0.75 * hs, 1.75], [hc[2] + 1.2 * hs, 2.4]];
  const pw = (k, v) => {
    if (v <= k[0][0]) return k[0][1] + (v - k[0][0]);
    for (let i = 1; i < k.length; i++) {
      if (v <= k[i][0]) return k[i - 1][1] + ((v - k[i - 1][0]) / (k[i][0] - k[i - 1][0])) * (k[i][1] - k[i - 1][1]);
    }
    return k[k.length - 1][1] + (v - k[k.length - 1][0]);
  };
  return (X, Y, Z) => {
    const x = X / S, y = Y / S, z = Z / S;
    let cz = pw(zk, z);
    // y and z alone can't tell head from body where they overlap. Off the
    // head nothing is "face" (the chest tuft reaches as far forward as the
    // chin); on it, nothing sits behind z 1.15 — the tabby's shoulder band
    // (warped, it reaches 1.13 at ear height) ends before that, and without
    // this it wraps the back of the skull as a hood
    const r = Math.hypot(x - hc[0], y - hc[1], z - hc[2]) / hs;
    const onHead = Math.max(0, Math.min(1, (1.45 - r) / 0.35));
    cz = Math.min(cz, 1.12) * (1 - onHead) + Math.max(cz, 1.15) * onHead;
    return [x * 0.75 / hs, pw(yk, y), cz];
  };
}

// --------------------------------------------------------------- face ---
// One small skinned mesh draped on the head: two eye patches, a nose-and-
// mouth patch, six whiskers. Patches are grids traced onto the sculpt (so
// they hug it) and lifted a hair; what they show is drawn in the fragment
// shader from the patch's own uv. aFace = (kind, side, t): kind 0 eye,
// 1 nose+mouth, 2 whisker; side +1 is the cat's left; t runs root->tip
// along a whisker.
function buildFace(L, sdf, skin, coatSpace) {
  const { S, hs, hc, P } = L;
  const H = (x, y, z) => [(hc[0] + x * hs) * S, (hc[1] + y * hs) * S, (hc[2] + z * hs) * S];
  const U = hs * S; // one head-local unit
  const pos = [], nrm = [], uv = [], face = [], si = [], sw = [], cp = [], idx = [];
  const grad = (x, y, z) => {
    const e = 0.01;
    const a = sdf(x + e, y - e, z - e), b = sdf(x - e, y - e, z + e), c = sdf(x - e, y + e, z - e), d = sdf(x + e, y + e, z + e);
    const g = [a - b - c + d, -a - b + c + d, -a + b - c + d];
    const l = Math.hypot(g[0], g[1], g[2]) || 1;
    return [g[0] / l, g[1] / l, g[2] / l];
  };
  const push = (p, n, u, v, kind, side, t, skinAt) => {
    pos.push(p[0], p[1], p[2]); nrm.push(n[0], n[1], n[2]); uv.push(u, v); face.push(kind, side, t);
    const s = skin(skinAt[0], skinAt[1], skinAt[2]);
    si.push(s[0], s[1], 0, 0); sw.push(s[2], s[3], 0, 0);
    const c = coatSpace(skinAt[0], skinAt[1], skinAt[2]);
    cp.push(c[0], c[1], c[2]);
    return pos.length / 3 - 1;
  };
  // a (2n+1)x(2m+1) grid around `c`, spanning ru x rv along u and v, traced
  // back along `dir` onto the surface
  const patch = (c, dir, ru, rv, n, m, kind, side, lift, tilt = 0) => {
    const dl = Math.hypot(dir[0], dir[1], dir[2]);
    const d = [dir[0] / dl, dir[1] / dl, dir[2] / dl];
    let u = [d[2], 0, -d[0]]; // up x dir: the cat's left
    const ul = Math.hypot(u[0], u[1], u[2]); u = [u[0] / ul, u[1] / ul, u[2] / ul];
    let v = [d[1] * u[2] - d[2] * u[1], d[2] * u[0] - d[0] * u[2], d[0] * u[1] - d[1] * u[0]];
    if (tilt) {
      const ct = Math.cos(tilt), st = Math.sin(tilt);
      const u2 = [u[0] * ct + v[0] * st, u[1] * ct + v[1] * st, u[2] * ct + v[2] * st];
      v = [v[0] * ct - u[0] * st, v[1] * ct - u[1] * st, v[2] * ct - u[2] * st];
      u = u2;
    }
    const ids = [];
    for (let j = -m; j <= m; j++) {
      for (let i = -n; i <= n; i++) {
        const a = (i / n) * 1.2, b = (j / m) * 1.2;
        let p = [c[0] + u[0] * a * ru + v[0] * b * rv + d[0] * U, c[1] + u[1] * a * ru + v[1] * b * rv + d[1] * U, c[2] + u[2] * a * ru + v[2] * b * rv + d[2] * U];
        let hit = false;
        for (let s = 0, t = 0; s < 80 && t < 2.2 * U; s++) {
          const dd = sdf(p[0], p[1], p[2]);
          if (dd < 0.002) { hit = true; break; }
          const st = Math.max(dd, 0.004);
          p = [p[0] - d[0] * st, p[1] - d[1] * st, p[2] - d[2] * st]; t += st;
        }
        if (!hit) p = [c[0] + u[0] * a * ru + v[0] * b * rv, c[1] + u[1] * a * ru + v[1] * b * rv, c[2] + u[2] * a * ru + v[2] * b * rv];
        const nn = grad(p[0], p[1], p[2]);
        ids.push(push([p[0] + nn[0] * lift, p[1] + nn[1] * lift, p[2] + nn[2] * lift], nn, a, b, kind, side, 0, p));
      }
    }
    const w = 2 * n + 1;
    for (let j = 0; j < 2 * m; j++) {
      for (let i = 0; i < 2 * n; i++) {
        const q = j * w + i;
        idx.push(ids[q], ids[q + 1], ids[q + w + 1], ids[q], ids[q + w + 1], ids[q + w]);
      }
    }
  };
  // eyes: big, low and wide apart on the skull's front; outer corners up a touch
  const ex = 0.43, ey = 0.03, er = 0.27 * P.eye;
  for (const s of [1, -1]) patch(H(s * ex, ey, 0.6), [s * 0.34, 0.04, 1], er * U, er * 1.14 * U, 5, 5, 0, s, 0.014 * U, s * 0.05);
  // nose + mouth, over the pads
  patch(H(0, -0.37, 0.8), [0, 0.12, 1], 0.4 * U, 0.34 * U, 6, 5, 1, 0, 0.012 * U);
  // whiskers: three a side off the pads — thin three-sided blades, long
  // (cartoon length: they have to survive the game camera)
  const fan = [[0.34, 1.15], [0.04, 1.3], [-0.26, 1.05]];
  for (const s of [1, -1]) {
    fan.forEach(([el, len], k) => {
      const root = H(s * 0.36, -0.36 + (1 - k) * 0.075, 0.84 - Math.abs(1 - k) * 0.03);
      const dir = [s * Math.cos(el) * 0.97, Math.sin(el), -0.22 * Math.cos(el)];
      const dl = Math.hypot(dir[0], dir[1], dir[2]);
      dir[0] /= dl; dir[1] /= dl; dir[2] /= dl;
      const t1 = [0, dir[2], -dir[1]]; // any perpendicular
      const tl = Math.hypot(t1[0], t1[1], t1[2]); t1[0] /= tl; t1[1] /= tl; t1[2] /= tl;
      const t2 = [dir[1] * t1[2] - dir[2] * t1[1], dir[2] * t1[0] - dir[0] * t1[2], dir[0] * t1[1] - dir[1] * t1[0]];
      const ring = (t, r, droop) => [0, 1, 2].map((q) => {
        const th = (q * Math.PI * 2) / 3;
        const o = [root[0] + dir[0] * t * len * U, root[1] + dir[1] * t * len * U - droop * U, root[2] + dir[2] * t * len * U];
        const c = Math.cos(th) * r * U, sn = Math.sin(th) * r * U;
        const p = [o[0] + t1[0] * c + t2[0] * sn, o[1] + t1[1] * c + t2[1] * sn, o[2] + t1[2] * c + t2[2] * sn];
        return push(p, [t1[0] * Math.cos(th) + t2[0] * Math.sin(th), t1[1] * Math.cos(th) + t2[1] * Math.sin(th), t1[2] * Math.cos(th) + t2[2] * Math.sin(th)], k, s, 2, s, t, root);
      });
      const r0 = ring(0, 0.017, 0), r1 = ring(0.5, 0.012, 0.03);
      const apex = push([root[0] + dir[0] * len * U, root[1] + dir[1] * len * U - 0.1 * U, root[2] + dir[2] * len * U], dir, k, s, 2, s, 1, root);
      for (let q = 0; q < 3; q++) {
        const q2 = (q + 1) % 3;
        idx.push(r0[q], r0[q2], r1[q2], r0[q], r1[q2], r1[q], r1[q], r1[q2], apex);
      }
    });
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nrm), 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uv), 2));
  geo.setAttribute('aFace', new THREE.BufferAttribute(new Float32Array(face), 3));
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(new Uint16Array(si), 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(new Float32Array(sw), 4));
  geo.setAttribute('coatPos', new THREE.BufferAttribute(new Float32Array(cp), 3));
  // lids are the coat's colour at the eye; with no coat they are the body's orange
  const col = new Float32Array(pos.length);
  for (let i = 0; i < col.length; i += 3) { col[i] = 1.0; col[i + 1] = 0.336; col[i + 2] = 0.06; }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setIndex(idx);
  return geo;
}

// ---------------------------------------------------------- materials ---
let ramp7 = null;
function toonRamp() {
  if (!ramp7) {
    // four steps, shallow: the room's own toon ramp is harsher, but a cat
    // is mostly seen from above under a ceiling light — a deep shadow step
    // turns the flanks to mud
    ramp7 = new THREE.DataTexture(new Uint8Array([138, 138, 138, 255, 196, 196, 196, 255, 236, 236, 236, 255, 255, 255, 255, 255]), 4, 1);
    ramp7.minFilter = ramp7.magFilter = THREE.NearestFilter;
    ramp7.needsUpdate = true;
  }
  return ramp7;
}

// short-fur read without a fur pass: a pale fuzz that gathers where the
// surface turns away from the eye
function patchRim(mat) {
  if (mat.userData.rim7) return;
  mat.userData.rim7 = true;
  mat.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', `
      {
        float rim7 = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
        outgoingLight += (diffuseColor.rgb * 0.6 + 0.07) * smoothstep(0.55, 1.0, rim7) * 0.5;
      }
      #include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => 'cat7-rim';
  mat.needsUpdate = true;
}

// iris colour by coat (COAT_NAMES order), [left, right]; the white cat is odd-eyed
const IRIS = [
  [0x86c440, 0x86c440], [0xe2b032, 0xe2b032], [0x4aa8ee, 0x4aa8ee], [0xb9d436, 0xb9d436], [0x4aa8ee, 0xe2a52c],
  [0xe0a030, 0xe0a030], [0xf2cf2e, 0xf2cf2e], [0xe8902a, 0xe8902a], [0x5cb4f0, 0x5cb4f0], [0x7fc84a, 0x7fc84a], [0xc9a13c, 0xc9a13c],
];
const NOSE = [0xf08a8a, 0xd97f86, 0x5a3b34, 0xe88f95, 0xf7a0a8, 0x3a2a2a, 0x2a2228, 0x56505e, 0xe9949a, 0xf08a8a, 0xf2a0a0];

const FACE_VERT_DECL = `
  attribute vec3 aFace; varying vec3 vFace; varying vec2 vFuv;
  uniform vec3 uWhisk;`;
const FACE_VERT = `
  vFace = aFace; vFuv = uv;
  if (aFace.x > 1.5) {
    // whiskers fan forward on the hunt and lie back when content; a slow
    // twitch keeps them from reading as wire
    float t2 = aFace.z * aFace.z;
    float tw = sin(uWhisk.z * 3.1 + aFace.y * 1.7 + uv.x * 2.3) * 0.02;
    transformed += vec3(0.0, (uWhisk.y + tw) * t2, uWhisk.x * t2);
  }`;
const FACE_FRAG_DECL = `
  varying vec3 vFace; varying vec2 vFuv;
  uniform vec4 uEye; uniform vec2 uGaze; uniform vec3 uIrisL; uniform vec3 uIrisR; uniform vec3 uNose;
  float seg7(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)); }`;
// after color_fragment: diffuseColor.rgb is the coat at this vertex (the lid colour)
const FACE_FRAG = `
  float flat7 = 0.0; // how much of this fragment is drawn flat (unlit ink / iris / nose) rather than lit fur
  vec3 flatCol7 = vec3(0.0);
  const vec3 INK7 = vec3(0.012, 0.008, 0.016);
  if (vFace.x < 0.5) {
    vec2 p = vFuv;
    float aa = max(fwidth(p.x), fwidth(p.y)) * 0.9 + 1e-4;
    float r = length(p);
    // uEye: x pupil (0 slit .. 1 round), y upper lid (0 open .. 1 shut), z lower lid, w smile
    float meet = -0.12 + uEye.w * 0.34 * (1.0 - p.x * p.x);
    float top = mix(1.02, meet + 0.03, uEye.y) - 0.1 * p.x * p.x * (1.0 - uEye.y);
    float bot = mix(-1.1, meet - 0.03, uEye.z);
    float open = smoothstep(-aa, aa, top - p.y) * smoothstep(-aa, aa, p.y - bot);
    float inEye = smoothstep(aa, -aa, r - 0.88);
    // outside the eye's ink ring there is nothing: the fur shows through
    if (r > 1.0 + aa) discard;
    vec3 iris = vFace.y > 0.0 ? uIrisL : uIrisR;
    vec2 g = p - uGaze;
    vec3 col = mix(iris * 1.22, iris * 0.5, smoothstep(-0.75, 0.8, p.y)); // lit from below the brow
    col = mix(col, iris * 0.32, smoothstep(0.62, 0.9, r)); // the iris darkens to its rim
    float pw = mix(0.085, 0.6, uEye.x), ph = mix(0.76, 0.66, uEye.x);
    float pup = length(g / vec2(pw, ph));
    col = mix(vec3(0.004), col, smoothstep(1.0 - aa / pw, 1.0 + aa / pw, pup));
    // two catchlights, fixed in the eye: they are what makes it read wet and alive
    col = mix(col, vec3(1.0), smoothstep(aa, -aa, length(p - vec2(0.3, 0.38)) - 0.19));
    col = mix(col, vec3(1.0), smoothstep(aa, -aa, length(p - vec2(-0.26, -0.3)) - 0.085) * 0.85);
    // ink: the ring where the eye is open, a heavy upper lash, a light lower one
    float ring = smoothstep(0.86 - aa, 0.86 + aa, r) * open;
    float lashT = smoothstep(0.11 + aa, 0.11 - aa, abs(p.y - top)) * step(0.0, 1.1 - abs(p.x));
    float lashB = smoothstep(0.05 + aa, 0.05 - aa, abs(p.y - bot)) * uEye.z;
    float ink = max(ring, max(lashT, lashB));
    // a shut eye is just its lash arc: no ring, and nothing outside the arc's span
    float shut = 1.0 - open;
    if (r > 0.9 && ink < 0.5 && shut > 0.5) discard;
    flat7 = max(open * inEye, ink);
    flatCol7 = mix(col, INK7, ink);
  } else if (vFace.x < 1.5) {
    vec2 p = vFuv;
    float aa = max(fwidth(p.x), fwidth(p.y)) * 0.9 + 1e-4;
    // nose: a rounded triangle, point down
    vec2 q = p - vec2(0.0, 0.52);
    float tri = max(q.y - 0.2, abs(q.x) * 0.82 - q.y * 0.62 - 0.2) - 0.06;
    float nose = smoothstep(aa, -aa, tri);
    // mouth: a stem under the nose into two arcs — the ":3"
    float m = seg7(p, vec2(0.0, 0.2), vec2(0.0, -0.06));
    vec2 c = vec2(abs(p.x) - 0.3, p.y + 0.02);
    float arc = abs(length(c) - 0.3);
    if (c.y > 0.0) arc = min(length(c - vec2(-0.3, 0.0)), length(c - vec2(0.3, 0.0)));
    m = min(m, arc);
    float mouth = smoothstep(0.05 + aa, 0.05 - aa, m);
    if (max(nose, mouth) < 0.5) discard;
    flat7 = 1.0;
    flatCol7 = mix(INK7, uNose * mix(0.72, 1.12, smoothstep(0.3, 0.75, p.y)), nose);
  } else {
    flat7 = 1.0;
    flatCol7 = vec3(0.93, 0.92, 0.88);
  }
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.0), flat7);`;

function faceMaterial(u) {
  const m = new THREE.MeshToonMaterial({
    vertexColors: true, gradientMap: toonRamp(), side: THREE.DoubleSide,
    // decals: a hair above the fur, and never z-fighting it at room distance
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -6,
  });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + FACE_VERT_DECL)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + FACE_VERT);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\n' + FACE_FRAG_DECL)
      .replace('#include <color_fragment>', '#include <color_fragment>\n' + FACE_FRAG)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += flatCol7 * flat7;');
  };
  m.customProgramCacheKey = () => 'cat7-face';
  return m;
}

// ---------------------------------------------------------- expression ---
// What the cat's face, ears and tail say, per mood. pupil 0 slit .. 1
// round; lidT/lidB 0 open .. 1 shut; smile bows the closed-eye line up
// (content) or down (the squeezed-shut stretch);
// earF tips the ears forward (+) or back (-), earOut rolls them outward
// (the pounce's streamlining — play, not fear: the tone invariant holds),
// earIn turns the cups to face the prey; whisk fans the whiskers forward;
// lift lowers (+) or raises (-) the tail, hook curls its tip over, twitch
// flicks the tip, lash whips the whole tail, thump is the slow bored sweep.
const M0 = { pupil: 0.36, lidT: 0.14, lidB: 0, smile: 0, earF: 0, earOut: 0, earIn: 0, radar: 0, whisk: 0.2, droop: 0, lift: 0, hook: 0, twitch: 0, lash: 0, thump: 0 };
export const MOODS = {
  calm: { ...M0 },
  alert: { ...M0, pupil: 0.86, lidT: 0, earF: 0.24, earOut: -0.1, earIn: 0.22, whisk: 0.75, lift: -0.2, twitch: 0.3 },
  stalk: { ...M0, pupil: 0.95, lidT: 0.04, earF: 0.32, earOut: -0.06, earIn: 0.26, whisk: 1, lift: 0.5, twitch: 1 },
  windup: { ...M0, pupil: 1, lidT: 0, earF: 0.36, earOut: -0.04, earIn: 0.28, whisk: 1, lift: 0.05, twitch: 0.5, lash: 1 },
  pounce: { ...M0, pupil: 1, lidT: 0, earF: -0.34, earOut: 0.5, whisk: 1, lift: 0.85 },
  recover: { ...M0, pupil: 0.6, lidT: 0.08, earOut: 0.14, whisk: 0.4, lift: 0.1 },
  bored: { ...M0, pupil: 0.03, lidT: 0.52, lidB: 0.06, earF: -0.1, earOut: 0.3, whisk: 0, droop: 1, lift: 0.75, thump: 1 },
  zoomies: { ...M0, pupil: 0.92, lidT: 0, earF: -0.16, earOut: 0.26, whisk: 0.7, lift: -0.45, hook: 0.7 },
  search: { ...M0, pupil: 0.7, lidT: 0.04, earF: 0.14, radar: 1, whisk: 0.75, lift: 0.25, twitch: 0.4 },
  swat: { ...M0, pupil: 0.95, lidT: 0, earF: 0.26, earIn: 0.2, whisk: 1, lift: 0.1, lash: 0.8 },
  content: { ...M0, pupil: 0.3, lidT: 1, lidB: 1, smile: 1, earF: -0.04, earOut: 0.14, whisk: 0, droop: 0.4 },
  pleased: { ...M0, pupil: 0.46, lidT: 0.08, earF: 0.1, whisk: 0.45, lift: -0.55, hook: 0.55 },
  squint: { ...M0, pupil: 0.3, lidT: 1, lidB: 1, smile: -0.7, earF: -0.2, earOut: 0.2, whisk: 0.2, lift: 0.3 },
};
export const MOOD_NAMES = Object.keys(MOODS);

// sim brain state (+ ambient act) -> mood. Callers that pass no state (the
// lab's pose dropdown, the engine preview) get the mood their pose implies.
const ST_MOOD = ['calm', 'alert', 'stalk', 'windup', 'pounce', 'recover', 'bored', 'zoomies', 'search', 'swat'];
const ACT_MOOD = ['calm', 'content', 'content', 'pleased', 'squint']; // sit, groom, loaf (it purrs), wander, stretch
const POSE_MOOD = { crouch: 'stalk', sit: 'calm', loaf: 'content', groom: 'content', stretch: 'squint', swat: 'swat', windup: 'windup', pounce: 'pounce' };
export function moodOf(s) {
  if (s.mood && MOODS[s.mood]) return s.mood;
  if (s.st != null && s.st >= 0) return s.st === 0 ? ACT_MOOD[s.act] ?? 'calm' : ST_MOOD[s.st] ?? 'calm';
  if (s.pose) return POSE_MOOD[s.pose] ?? 'calm';
  return (s.speed || 0) > 0.15 ? 'pleased' : 'calm';
}

const KEYS = Object.keys(M0);
const DRIVEN = ['earl', 'earr', 'tail', 'tail01', 'tail02', 'tail03', 'tail04'];
const _q = new THREE.Quaternion(), _e = new THREE.Euler();

export class Expression {
  // unit: one head-local unit in mesh space (how far a whisker tip travels)
  constructor(coat, unit) {
    this.unit = unit;
    const c = coat == null ? 0 : coat % IRIS.length;
    this.u = {
      uEye: { value: new THREE.Vector4(0.36, 0.14, 0, 0) },
      uGaze: { value: new THREE.Vector2() },
      uWhisk: { value: new THREE.Vector3() },
      uIrisL: { value: new THREE.Color(IRIS[c][0]) },
      uIrisR: { value: new THREE.Color(IRIS[c][1]) },
      uNose: { value: new THREE.Color(NOSE[c]) },
    };
    this.v = { ...M0 };
    this.mood = 'calm';
    this.t = Math.random() * 20; // cats in a room must not blink or twitch in step
    this.blinkAt = this.t + 1 + Math.random() * 3;
    this.blink = 0;
    this.flickAt = this.t + 2 + Math.random() * 4;
    this.flick = 0;
    this.flickSide = 1;
    this.pre = {}; // bone -> its orientation before this driver touched it
  }

  // Called before the rig's own layers run. The driver multiplies deltas
  // onto ears and tail; the mixer only re-writes a bone whose blended value
  // CHANGED since last frame (a constant track, or no track, is written
  // once and never again), and the pose and idle layers slerp from wherever
  // the bone is. So yesterday's delta would be today's starting point and
  // the ears would wind up like propellers (they did). Put the bones back.
  restore(rig) {
    for (const key in this.pre) rig.bones[key].quaternion.copy(this.pre[key]);
  }

  // rig: the CatRig (bones, already written this frame by clip + pose
  // layer + head tracking). gaze: how far the dot sits off the nose, in
  // radians [yaw, pitch] — the eyes lead the slew-limited head.
  update(dt, s, rig, gaze) {
    const h = Math.min(0.1, Math.max(0, dt));
    this.t += h;
    const t = this.t;
    this.mood = moodOf(s);
    const m = MOODS[this.mood], v = this.v;
    for (const k of KEYS) {
      // pupils and lids are quick, ears a beat behind, the tail takes its time
      const rate = k === 'pupil' || k === 'lidT' || k === 'lidB' ? 12 : k === 'lift' || k === 'hook' ? 4 : 8;
      v[k] += (m[k] - v[k]) * Math.min(1, h * rate);
    }
    // blinks: quick ones on any mood but the pounce; a seated calm cat also
    // gives the long slow one
    if (t > this.blinkAt) {
      this.blinkLen = this.mood === 'calm' && Math.random() < 0.35 ? 0.9 : 0.16;
      this.blinkT = 0;
      this.blinkAt = t + 2.2 + Math.random() * 4.5;
    }
    if (this.blinkT != null) {
      this.blinkT += h;
      const p = this.blinkT / this.blinkLen;
      this.blink = p >= 1 || this.mood === 'pounce' ? 0 : Math.sin(p * Math.PI) ** 0.6;
      if (p >= 1) this.blinkT = null;
    }
    const U = this.u;
    U.uEye.value.set(v.pupil, Math.max(v.lidT, this.blink), Math.max(v.lidB, this.blink * 0.55), v.smile);
    const gz = U.uGaze.value;
    const open = 1 - Math.max(v.lidT, this.blink);
    gz.x += ((gaze ? Math.max(-0.2, Math.min(0.2, gaze[0] * 0.5)) : 0) * open - gz.x) * Math.min(1, h * 14);
    gz.y += ((gaze ? Math.max(-0.14, Math.min(0.14, gaze[1] * 0.5)) : 0) * open - gz.y) * Math.min(1, h * 14);
    U.uWhisk.value.set((v.whisk - 0.25) * this.unit * 0.42, -v.droop * this.unit * 0.16, t);

    // ears: an occasional single-ear flick on top of the mood
    if (t > this.flickAt) {
      this.flickT = 0;
      this.flickSide = Math.random() < 0.5 ? 1 : -1;
      this.flickAt = t + 1.5 + Math.random() * 5;
    }
    if (this.flickT != null) {
      this.flickT += h;
      this.flick = this.flickT < 0.22 ? Math.sin((this.flickT / 0.22) * Math.PI) : 0;
      if (this.flickT >= 0.22) this.flickT = null;
    }
    const B = rig.bones;
    const posed = !!s.pose;
    for (const key of DRIVEN) {
      const bone = B[key];
      if (!bone) continue;
      // no clip names the outer tail bones and no pose is holding them: ease
      // them home, or the tail keeps the last pose's curl while the cat walks off
      if (!posed && key !== 'tail' && key.startsWith('tail')) bone.quaternion.slerp(rig.rest[key], Math.min(1, h * 6));
      (this.pre[key] || (this.pre[key] = new THREE.Quaternion())).copy(bone.quaternion);
    }
    for (const [key, side] of [['earl', 1], ['earr', -1]]) {
      const bone = B[key];
      if (!bone) continue;
      const fl = this.flickSide === side && this.mood !== 'pounce' ? this.flick : 0;
      const radar = v.radar * Math.sin(t * 3.4 + (side > 0 ? 0 : 2.3)) * 0.34;
      _q.setFromEuler(_e.set(v.earF - fl * 0.12, side * (-v.earIn + radar), -side * (v.earOut + fl * 0.3)));
      bone.quaternion.multiply(_q);
    }
    // tail. Its chain is built so +x lays it down (see bones()); z swings it
    // side to side while it stands, y while it lies back — give both.
    const burst = Math.max(0, Math.sin(t * 1.3) * Math.sin(t * 0.53 + 1)) ** 0.5; // the tip twitches in bouts
    const tw = v.twitch * (0.35 + 0.65 * burst);
    const thump = v.thump * Math.sin(t * 1.5) * Math.abs(Math.sin(t * 0.75));
    const tail = [
      [v.lift * 0.5, thump * 0.3, thump * 0.2],
      [v.lift * 0.3 + Math.sin(t * 9.5) * 0.1 * v.lash, 0, Math.sin(t * 9.5) * 0.3 * v.lash],
      [v.lift * 0.2 - v.hook * 0.15, 0, Math.sin(t * 9.5 - 0.9) * 0.34 * v.lash + Math.sin(t * 11) * 0.08 * tw],
      [-v.hook * 0.5, Math.cos(t * 7.3) * 0.16 * tw, Math.sin(t * 9.5 - 1.8) * 0.3 * v.lash + Math.sin(t * 11) * 0.3 * tw],
      [-v.hook * 0.6, Math.cos(t * 7.3 - 0.6) * 0.22 * tw, Math.sin(t * 11 - 0.7) * 0.42 * tw],
    ];
    ['tail', 'tail01', 'tail02', 'tail03', 'tail04'].forEach((key, i) => {
      const bone = B[key];
      if (!bone) return;
      _q.setFromEuler(_e.set(tail[i][0], tail[i][1], tail[i][2]));
      bone.quaternion.multiply(_q);
    });
  }
}

// The shared pose tables were tuned on v2's skeleton. Where this one's
// proportions make an entry land wrong, it brings its own (lab-read):
// the loaf folded v7's forearms up through its back — here they fold
// forward under the chest and vanish, which is the bread; the sit stacked
// spine, neck and head into a stare at the ceiling and threw the forelegs
// out in front — here the head comes level and the forelegs stand.
const POSE_FIX = {
  loaf: { leglowerfl: [-2.6, 0, 0], leglowerfr: [-2.6, 0, 0] },
  sit: { neck: [0.22, 0, 0], head: [0.2, 0, 0], legupperfl: [0.4, 0, 0], legupperfr: [0.4, 0, 0] },
  // the reach-up threw the head so far back the face pointed at the ceiling
  stretch: { neck: [0, 0, 0], head: [0.2, 0, 0] },
};

// ------------------------------------------------------------- source ---
const GRID = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches ? 0.092 : 0.08;

function buildOne(bi) {
  const t0 = performance.now();
  const P = BUILDS[bi];
  const L = layout(P);
  const S = L.S;
  const sdf = makeSDF(L);
  const tailTop = L.tail[5][1] + 0.5, earTop = L.hc[1] + (L.earT[1] + 0.3) * L.hs;
  const lo = [-1.8 * S, -0.12 * S, (L.tail[3][2] - 0.6) * S];
  const hi = [-lo[0], Math.max(tailTop, earTop) * S, (L.hc[2] + 1.45 * L.hs) * S];
  const geo = polygonize(sdf, lo, hi, GRID);
  const def = bones(L);
  const skin = makeSkinner(def);
  skinGeometry(geo, skin);
  const coatSpace = makeCoatSpace(L);
  const pos = geo.getAttribute('position');
  const cp = new Float32Array(pos.count * 3), tint = new Float32Array(pos.count * 4);
  // inner ears: a pink that the coat is blended toward (catrig's coat
  // painter reads `tint`), strongest in the middle of the cup
  const { earB, earT, hs, hc } = L;
  const el = Math.hypot(earT[0] - earB[0], earT[1] - earB[1], earT[2] - earB[2]);
  const ea = [(earT[0] - earB[0]) / el, (earT[1] - earB[1]) / el, (earT[2] - earB[2]) / el];
  const nrm = geo.getAttribute('normal');
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    cp.set(coatSpace(x, y, z), i * 3);
    const qx = Math.abs(x) / S / hs - earB[0], qy = (y / S - hc[1]) / hs - earB[1], qz = (z / S - hc[2]) / hs - earB[2];
    const t = (qx * ea[0] + qy * ea[1] + qz * ea[2]) / el;
    const side = Math.hypot(qx - ea[0] * t * el, qy - ea[1] * t * el, qz - ea[2] * t * el) / (0.47 * P.earW * (1 - t) + 0.085 * t);
    const front = nrm.getZ(i);
    const w = Math.max(0, Math.min(1, (t - 0.3) / 0.12)) * Math.max(0, Math.min(1, (0.93 - t) / 0.2)) * Math.max(0, Math.min(1, (0.8 - side) / 0.25)) * Math.max(0, Math.min(1, (front - 0.35) / 0.3));
    tint.set([0.93, 0.62, 0.64, w * 0.85], i * 4);
  }
  geo.setAttribute('coatPos', new THREE.BufferAttribute(cp, 3));
  geo.setAttribute('tint', new THREE.BufferAttribute(tint, 4));
  // zeroed uv: the coat material is a clone of ours, but keep the channel
  // every other house cat has
  geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(pos.count * 2), 2));

  const { rootBone, list, byKey } = buildSkeleton(def);
  const mesh = new THREE.SkinnedMesh(geo, new THREE.MeshToonMaterial({ color: 0xff9d45, gradientMap: toonRamp() }));
  mesh.name = 'cat7_0';
  mesh.userData.cat7 = 'body';
  mesh.add(rootBone);
  mesh.bind(new THREE.Skeleton(list));
  const face = new THREE.SkinnedMesh(buildFace(L, sdf, skin, coatSpace), new THREE.MeshBasicMaterial());
  face.name = 'face7_0';
  face.userData.cat7 = 'face';
  face.userData.face = true; // catrig: coat the geometry (lids), keep our material
  mesh.add(face);
  face.bind(mesh.skeleton, mesh.bindMatrix);

  // Sketchfab-style nesting, as catgen.js: CatRig's SCALE lands 1 unit at 0.095 m
  const wrap = new THREE.Group();
  wrap.name = 'wrap_0';
  wrap.scale.setScalar(100);
  wrap.add(mesh);
  const scene = new THREE.Group();
  scene.add(wrap);

  // the walk: catgen's diagonal gait on this build's root height. Its
  // tracks are authored on identity frames, so the turned tail chain gets
  // its rest folded in.
  const clip = buildWalkClip(byKey, def[0][1]);
  for (const tr of clip.tracks) {
    if (tr.name !== `${byKey.tail.name}.quaternion`) continue;
    const q = new THREE.Quaternion();
    for (let i = 0; i < tr.values.length; i += 4) {
      q.fromArray(tr.values, i).premultiply(byKey.tail.quaternion).toArray(tr.values, i);
    }
  }

  // contact points for catrig's measured-ground pass, in metres under each
  // bone (its table is v2's): pads under the ankles, belly, haunches
  const M = 0.095 * S;
  const haunch = L.hipY - (L.ty - 0.28) + 0.68 * (0.55 + 0.45 * P.girth);
  const contacts = [
    ['footfl', L.A * M], ['footfr', L.A * M], ['footbl', (L.A - 0.02) * M], ['footbr', (L.A - 0.02) * M],
    ['torso', (L.rM + 0.4 * P.belly) * M], ['thighbl', haunch * M], ['thighbr', haunch * M],
  ];
  const unit = L.hs * S;
  return {
    scene, animations: [clip], contacts, poseFix: POSE_FIX, build: bi, buildName: P.name,
    stats: { ms: performance.now() - t0, verts: pos.count, tris: geo.getIndex().count / 3, faceTris: face.geometry.getIndex().count / 3, evals: geo.userData.evals },
    // CatRig calls this once its bones are collected: the body's rim, this
    // rig's own face material, and the driver that animates both
    attach(rig, coat) {
      const expr = new Expression(coat, unit);
      rig.inner.traverse((o) => {
        if (o.userData.cat7 === 'body') {
          // the coat material is a per-coat clone of ours; catrig may have
          // handed it v2's grey map if that cat loaded first
          if (o.material.map) { o.material.map = null; o.material.needsUpdate = true; }
          patchRim(o.material);
        } else if (o.userData.cat7 === 'face') {
          o.material = faceMaterial(expr.u);
          o.castShadow = false;
        }
      });
      return expr;
    },
  };
}

// One source for every v7 cat; CatRig asks it for a build per cat. Builds
// are polygonized on first use and kept.
const built = [];
let source = null;
export function buildCat7Source() {
  if (source) return source;
  const forBuild = (b) => {
    const bi = ((b | 0) % BUILDS.length + BUILDS.length) % BUILDS.length;
    return built[bi] || (built[bi] = buildOne(bi));
  };
  source = {
    v7: true,
    builds: BUILD_NAMES,
    forBuild,
    // polygonize the first n builds now (the game calls this at load, off the
    // first frame, so a cat's first appearance doesn't hitch)
    warm: (n) => { for (let b = 0; b < Math.min(n, BUILDS.length); b++) forBuild(b); },
    stats: () => built.map((s) => s && { name: s.buildName, ...s.stats }),
  };
  return source;
}
