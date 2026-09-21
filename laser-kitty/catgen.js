// catgen.js — the house-built cat (founder: "make cats version 3 and 4").
// No model file: the body is an SDF (smooth-min capsules and spheres)
// polygonized once at load through the vendored MarchingCubes tables, the
// skeleton is authored in code with catrig's canonical bone names, skin
// weights fall out of distance-to-bone-segments, and the walk cycle is a
// synthesized AnimationClip. The result mimics a loaded gltf ({scene,
// animations}) closely enough that CatRig consumes it unchanged — same
// pose tables, same contact clamp, same head tracking, same coats.
//
// Everything here is authored in the toon cat's canonical vertex space
// (y 0..3.7, z -3.4..2.4, +z = nose) so the coat painter's probe-verified
// bounds keep working; a wrapper node scaled x100 reproduces the
// Sketchfab-style nesting the rig code already expects (SCALE 0.00095
// lands the cat at the same 0.35m it has always been).
//
// License note (why this file exists): CC0 rigged cats effectively don't
// exist, and the v2 cat is CC-BY. This mesh, rig, and clip are authored
// from measurements and code — fully ours.

import * as THREE from 'three';
import { MarchingCubes } from './vendor/MarchingCubes.js';

// ---------------------------------------------------------------- SDF ---
const smin = (a, b, k) => {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
};

function sdSphere(px, py, pz, cx, cy, cz, r) {
  const dx = px - cx, dy = py - cy, dz = pz - cz;
  return Math.sqrt(dx * dx + dy * dy + dz * dz) - r;
}

// capsule from a to b with radius lerped ra -> rb (round tapered cone)
function sdCapsule(px, py, pz, ax, ay, az, bx, by, bz, ra, rb) {
  const bax = bx - ax, bay = by - ay, baz = bz - az;
  const pax = px - ax, pay = py - ay, paz = pz - az;
  const t = Math.max(0, Math.min(1, (pax * bax + pay * bay + paz * baz) / (bax * bax + bay * bay + baz * baz)));
  const dx = pax - bax * t, dy = pay - bay * t, dz = paz - baz * t;
  return Math.sqrt(dx * dx + dy * dy + dz * dz) - (ra + (rb - ra) * t);
}

// the cat, in canonical units. Proportions measured off the v2 silhouette
// (dimensions aren't copyrightable; the surface is authored here).
function catSDF(x, y, z) {
  const ax = Math.abs(x); // body is symmetric: sculpt one side
  let d = 1e9;
  // torso: rear barrel into a slimmer chest
  d = smin(d, sdCapsule(x, y, z, 0, 1.85, -1.55, 0, 1.95, -0.2, 0.92, 0.84), 0.4);
  d = smin(d, sdCapsule(x, y, z, 0, 1.95, -0.2, 0, 2.15, 0.85, 0.82, 0.7), 0.4);
  // neck + head + muzzle + cheeks: the head rides clearly ABOVE the
  // chest line (first bake buried it — the cat read hunched)
  d = smin(d, sdCapsule(x, y, z, 0, 2.3, 0.85, 0, 2.85, 1.35, 0.44, 0.4), 0.25);
  d = smin(d, sdSphere(x, y, z, 0, 3.05, 1.6, 0.66), 0.24);
  d = smin(d, sdSphere(x, y, z, 0, 2.8, 2.1, 0.34), 0.2);
  d = smin(d, sdSphere(ax, y, z, 0.27, 2.9, 1.85, 0.32), 0.18);
  // ears: tapered cones off the skull
  d = smin(d, sdCapsule(ax, y, z, 0.38, 3.5, 1.4, 0.56, 4.1, 1.25, 0.24, 0.03), 0.09);
  // front leg (mirrored by ax)
  d = smin(d, sdCapsule(ax, y, z, 0.45, 1.95, 0.75, 0.47, 0.95, 0.8, 0.3, 0.22), 0.22);
  d = smin(d, sdCapsule(ax, y, z, 0.47, 0.95, 0.8, 0.48, 0.25, 0.83, 0.22, 0.17), 0.18);
  d = smin(d, sdSphere(ax, y, z, 0.48, 0.2, 0.95, 0.22), 0.12);
  // rear leg: thigh bulge + shin + paw
  d = smin(d, sdSphere(ax, y, z, 0.52, 1.7, -1.5, 0.62), 0.35);
  d = smin(d, sdCapsule(ax, y, z, 0.5, 1.35, -1.6, 0.52, 0.6, -1.68, 0.3, 0.2), 0.2);
  d = smin(d, sdCapsule(ax, y, z, 0.52, 0.6, -1.68, 0.52, 0.22, -1.7, 0.2, 0.17), 0.15);
  d = smin(d, sdSphere(ax, y, z, 0.52, 0.18, -1.55, 0.22), 0.12);
  // tail: three arcs curling up and back
  d = smin(d, sdCapsule(x, y, z, 0, 1.95, -2.3, 0, 2.35, -2.85, 0.19, 0.15), 0.15);
  d = smin(d, sdCapsule(x, y, z, 0, 2.35, -2.85, 0, 2.85, -3.15, 0.15, 0.12), 0.12);
  d = smin(d, sdCapsule(x, y, z, 0, 2.85, -3.15, 0, 3.3, -3.2, 0.12, 0.07), 0.1);
  return d;
}

// ------------------------------------------------------- polygonization ---
// map canonical bounds into the MC unit cube (per-axis, non-uniform)
const BOUNDS = { x: [-1.5, 1.5], y: [-0.25, 4.3], z: [-3.9, 2.9] };
const span = (b) => b[1] - b[0];
const mid = (b) => (b[0] + b[1]) / 2;

function buildGeometry(res, maxPoly) {
  const mc = new MarchingCubes(res, new THREE.MeshBasicMaterial(), false, false, maxPoly);
  mc.isolation = 0;
  const sx = span(BOUNDS.x) / 2, sy = span(BOUNDS.y) / 2, sz = span(BOUNDS.z) / 2;
  const cx = mid(BOUNDS.x), cy = mid(BOUNDS.y), cz = mid(BOUNDS.z);
  const half = mc.halfsize;
  for (let k = 0; k < res; k++) {
    const wz = ((k - half) / half) * sz + cz;
    for (let j = 0; j < res; j++) {
      const wy = ((j - half) / half) * sy + cy;
      const row = mc.size2 * k + mc.size * j;
      for (let i = 0; i < res; i++) {
        const wx = ((i - half) / half) * sx + cx;
        // field positive inside; MC's gradient normals want the sign this way
        mc.field[row + i] = -catSDF(wx, wy, wz);
      }
    }
  }
  mc.update();
  const n = mc.count;
  const src = mc.geometry;
  const pos = new Float32Array(n * 3);
  const sp = src.getAttribute('position');
  for (let v = 0; v < n; v++) {
    // unmap cube coords back to canonical units
    pos[v * 3] = sp.getX(v) * sx + cx;
    pos[v * 3 + 1] = sp.getY(v) * sy + cy;
    pos[v * 3 + 2] = sp.getZ(v) * sz + cz;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  // dummy UVs: the shared coat-material cache may carry the v2 grayMap;
  // a zeroed channel samples one pale texel instead of crashing
  geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  geo.computeVertexNormals();
  return geo;
}

// --------------------------------------------------------------- rig ---
// bone key -> [head position, parent key]. Identity orientations: local
// +x rotation pitches (x+ = nose down / leg tip back), matching the sign
// conventions the POSES tables document — no per-rig sign map needed.
const BONE_DEF = [
  ['root', [0, 1.9, -1.0], null],
  ['torso', [0, 1.9, -0.3], 'root'],
  ['spine01', [0, 2.0, 0.1], 'root'],
  ['spine02', [0, 2.1, 0.6], 'spine01'],
  ['neck', [0, 2.35, 0.95], 'spine02'],
  ['head', [0, 3.0, 1.45], 'neck'],
  ['earl', [0.42, 3.55, 1.35], 'head'],
  ['earr', [-0.42, 3.55, 1.35], 'head'],
  ['tail', [0, 1.98, -2.25], 'root'],
  ['tail01', [0, 2.35, -2.85], 'tail'],
  ['tail02', [0, 2.85, -3.15], 'tail01'],
  ['legupperfl', [0.45, 1.95, 0.78], 'spine02'],
  ['leglowerfl', [0.47, 0.95, 0.8], 'legupperfl'],
  ['footfl', [0.48, 0.25, 0.83], 'leglowerfl'],
  ['legupperfr', [-0.45, 1.95, 0.78], 'spine02'],
  ['leglowerfr', [-0.47, 0.95, 0.8], 'legupperfr'],
  ['footfr', [-0.48, 0.25, 0.83], 'leglowerfr'],
  ['thighbl', [0.52, 1.75, -1.5], 'root'],
  ['legupperbl', [0.5, 1.35, -1.6], 'thighbl'],
  ['leglowerbl', [0.52, 0.6, -1.68], 'legupperbl'],
  ['footbl', [0.52, 0.22, -1.7], 'leglowerbl'],
  ['thighbr', [-0.52, 1.75, -1.5], 'root'],
  ['legupperbr', [-0.5, 1.35, -1.6], 'thighbr'],
  ['leglowerbr', [-0.52, 0.6, -1.68], 'legupperbr'],
  ['footbr', [-0.52, 0.22, -1.7], 'leglowerbr'],
];
// skinning segments: bone -> segment end (world). Leaves extend outward.
const SEG_END = {
  torso: [0, 2.0, 0.1], root: [0, 1.9, -1.7], spine01: [0, 2.1, 0.6],
  spine02: [0, 2.3, 0.95], neck: [0, 3.0, 1.45], head: [0, 2.85, 2.45],
  earl: [0.56, 4.15, 1.25], earr: [-0.56, 4.15, 1.25],
  tail: [0, 2.35, -2.85], tail01: [0, 2.85, -3.15], tail02: [0, 3.32, -3.2],
  legupperfl: [0.47, 0.95, 0.8], leglowerfl: [0.48, 0.25, 0.83], footfl: [0.48, 0.15, 1.1],
  legupperfr: [-0.47, 0.95, 0.8], leglowerfr: [-0.48, 0.25, 0.83], footfr: [-0.48, 0.15, 1.1],
  thighbl: [0.5, 1.35, -1.6], legupperbl: [0.52, 0.6, -1.68], leglowerbl: [0.52, 0.22, -1.7], footbl: [0.52, 0.12, -1.35],
  thighbr: [-0.5, 1.35, -1.6], legupperbr: [-0.52, 0.6, -1.68], leglowerbr: [-0.52, 0.22, -1.7], footbr: [-0.52, 0.12, -1.35],
};

function buildSkeleton() {
  const byKey = {};
  const list = [];
  for (const [key, pos, parent] of BONE_DEF) {
    const b = new THREE.Bone();
    b.name = `${key}_0`; // canonical() strips the suffix
    const p = parent ? BONE_DEF.find((d) => d[0] === parent)[1] : [0, 0, 0];
    b.position.set(pos[0] - p[0], pos[1] - p[1], pos[2] - p[2]);
    byKey[key] = b;
    list.push(b);
    if (parent) byKey[parent].add(b);
  }
  return { rootBone: byKey.root, list, byKey };
}

function skinGeometry(geo) {
  const heads = BONE_DEF.map((d) => d[1]);
  const ends = BONE_DEF.map((d) => SEG_END[d[0]]);
  const pos = geo.getAttribute('position');
  const idx = new Uint16Array(pos.count * 4);
  const wgt = new Float32Array(pos.count * 4);
  for (let v = 0; v < pos.count; v++) {
    const px = pos.getX(v), py = pos.getY(v), pz = pos.getZ(v);
    let b0 = 0, d0 = 1e9, b1 = 0, d1 = 1e9;
    for (let b = 0; b < heads.length; b++) {
      const a = heads[b], e = ends[b];
      const bax = e[0] - a[0], bay = e[1] - a[1], baz = e[2] - a[2];
      const len2 = bax * bax + bay * bay + baz * baz || 1e-6;
      const t = Math.max(0, Math.min(1, ((px - a[0]) * bax + (py - a[1]) * bay + (pz - a[2]) * baz) / len2));
      const dx = px - (a[0] + bax * t), dy = py - (a[1] + bay * t), dz = pz - (a[2] + baz * t);
      const d = dx * dx + dy * dy + dz * dz;
      if (d < d0) { b1 = b0; d1 = d0; b0 = b; d0 = d; }
      else if (d < d1) { b1 = b; d1 = d; }
    }
    // inverse-quartic falloff between the two nearest segments
    const w0 = 1 / (d0 * d0 + 1e-6), w1 = 1 / (d1 * d1 + 1e-6);
    const s = w0 + w1;
    idx[v * 4] = b0; idx[v * 4 + 1] = b1;
    wgt[v * 4] = w0 / s; wgt[v * 4 + 1] = w1 / s;
  }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(idx, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(wgt, 4));
}

// --------------------------------------------------------- walk clip ---
// synthesized diagonal gait, 0.83s like the v2 clip so the stride
// matcher's constants carry. t=0.21 is a planted passing frame (the
// stand layer freezes there).
function buildWalkClip(byKey) {
  const DUR = 0.83;
  const N = 24;
  const times = new Float32Array(N + 1);
  const legPhase = { legupperfl: 0, footfl: 0, leglowerfl: 0, legupperbr: 0, leglowerbr: 0, footbr: 0,
    legupperfr: Math.PI, footfr: Math.PI, leglowerfr: Math.PI, legupperbl: Math.PI, leglowerbl: Math.PI, footbl: Math.PI,
    thighbl: Math.PI, thighbr: 0 };
  const tracks = [];
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const addQuatTrack = (key, fn) => {
    const vals = new Float32Array((N + 1) * 4);
    for (let k = 0; k <= N; k++) {
      const ph = (k / N) * Math.PI * 2;
      times[k] = (k / N) * DUR;
      const [x, y, z] = fn(ph);
      q.setFromEuler(e.set(x, y, z));
      vals[k * 4] = q.x; vals[k * 4 + 1] = q.y; vals[k * 4 + 2] = q.z; vals[k * 4 + 3] = q.w;
    }
    tracks.push(new THREE.QuaternionKeyframeTrack(`${byKey[key].name}.quaternion`, times.slice(), vals));
  };
  // the planted frame lands at t=0.21 (phase ~1.59, sin ~1): offset the
  // cycle so that phase sits at the neutral crossing instead
  const OFF = -1.59 + Math.PI;
  for (const [key, ph0] of Object.entries(legPhase)) {
    const upper = key.startsWith('legupper') || key.startsWith('thigh');
    const front = key.includes('f') && !key.startsWith('thigh');
    const amp = key.startsWith('thigh') ? 0.28 : upper ? (front ? 0.42 : 0.34) : key.startsWith('leglower') ? 0.3 : 0.22;
    const lag = key.startsWith('leglower') ? 0.7 : key.startsWith('foot') ? 1.3 : 0;
    addQuatTrack(key, (ph) => [Math.sin(ph + ph0 + OFF - lag) * amp, 0, 0]);
  }
  addQuatTrack('spine01', (ph) => [0, 0, Math.sin(ph * 2 + OFF) * 0.05]);
  addQuatTrack('spine02', (ph) => [0, 0, Math.sin(ph * 2 + OFF + 0.5) * 0.04]);
  addQuatTrack('tail', (ph) => [0, Math.sin(ph + OFF) * 0.12, 0]);
  addQuatTrack('head', (ph) => [Math.sin(ph * 2 + OFF) * 0.03, 0, 0]);
  // root bob: position track (the clip owns translations, like the v2 clip)
  const rootPos = new Float32Array((N + 1) * 3);
  const rp = BONE_DEF[0][1];
  for (let k = 0; k <= N; k++) {
    const ph = (k / N) * Math.PI * 2;
    rootPos[k * 3] = rp[0];
    rootPos[k * 3 + 1] = rp[1] + Math.abs(Math.sin(ph + OFF)) * 0.06 - 0.03;
    rootPos[k * 3 + 2] = rp[2];
  }
  tracks.push(new THREE.VectorKeyframeTrack(`${byKey.root.name}.position`, times.slice(), rootPos));
  const clip = new THREE.AnimationClip('walk', DUR, tracks);
  return clip;
}

// ---------------------------------------------------------------- fur ---
// v5: the long-hair. Spike clumps sprout from the v3 body — a crown swept
// up and back off the skull, a ruff down the chest, cheek tufts, a plumed
// tail, shorter sweep along the back and belly — cel-shaded on a three-
// step ramp with an inverted-hull ink outline (founder: "long-hair with
// Dragonball Z style fur that we cel shade with outlining"). Seeded, so
// every build is the same cat.
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// where fur grows and how it lies, in canonical coords (+z nose, y up).
// null = bare (paws, ear tips, the face). len/r in canonical units, flow
// is the comb direction blended with the surface normal, dens scales the
// clump count per unit area.
function furAt(x, y, z, ny) {
  const ax = Math.abs(x);
  if (y < 0.5) return null;
  if (y > 3.4 && ax > 0.3 && z < 1.6) return null;
  if (z > 1.75 && y > 2.35 && y < 3.35 && ax < 0.42) return null;
  // big tapered clumps, not needles: the anime read is a few dozen
  // fat spikes per region with the body showing between them
  if (y > 3.05 && z > 0.7 && z < 1.75) return { len: 1.15, r: 0.34, flow: [x * 0.5, 1.0, -0.6], dens: 1.3 };
  if (z > 1.35 && z < 2.05 && y > 2.45 && y < 3.15 && ax > 0.3) return { len: 0.65, r: 0.26, flow: [Math.sign(x) * 0.9, -0.25, -0.5], dens: 1.2 };
  if (z < -2.05 && y > 1.6) return { len: 0.9, r: 0.28, flow: [0, 0.3, -0.4], dens: 1.3 };
  if (z > 0.35 && z < 1.5 && y > 1.5 && y < 3.1) return { len: 0.8, r: 0.3, flow: [x * 0.4, -0.6, -0.1], dens: 1.0 };
  if (ax > 0.28 && y < 1.55) return { len: 0.32, r: 0.18, flow: [0, -0.8, -0.2], dens: 0.35 };
  if (ny < -0.35) return { len: 0.4, r: 0.22, flow: [0, -0.9, -0.2], dens: 0.6 };
  // back and flanks lie flatter and shorter so the body still reads
  return { len: 0.4, r: 0.22, flow: [0, -0.25, -1.0], dens: 0.5 };
}

// weld MC's triangle soup so the body shades smooth under the toon ramp
// (spikes stay unwelded on purpose: flat facets read as ink-and-cel)
function weld(geo, eps = 1e-3) {
  const pos = geo.getAttribute('position');
  const map = new Map();
  const out = [];
  const index = new Uint32Array(pos.count);
  for (let v = 0; v < pos.count; v++) {
    const x = pos.getX(v), y = pos.getY(v), z = pos.getZ(v);
    const k = `${Math.round(x / eps)},${Math.round(y / eps)},${Math.round(z / eps)}`;
    let id = map.get(k);
    if (id === undefined) { id = out.length / 3; map.set(k, id); out.push(x, y, z); }
    index[v] = id;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(out), 3));
  g.setIndex(new THREE.BufferAttribute(index, 1));
  return g;
}

function buildFurGeometry(seed = 7) {
  const body = weld(buildGeometry(72, 120000));
  body.computeVertexNormals();
  const bp = body.getAttribute('position'), bn = body.getAttribute('normal');
  const bi = body.getIndex();
  const rand = mulberry32(seed);
  const verts = [];
  const tris = [];
  const K = 7; // clumps per unit area at dens 1
  let acc = 0;
  const A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3();
  const n = new THREE.Vector3(), dir = new THREE.Vector3(), t1 = new THREE.Vector3(), t2 = new THREE.Vector3();
  const p = new THREE.Vector3(), q = new THREE.Vector3(), bend = new THREE.Vector3(), fl = new THREE.Vector3();
  const pushTri = (a, b, c, axisP, axisD) => {
    // wind every face outward from the clump axis
    const e1 = b.clone().sub(a), e2 = c.clone().sub(a);
    const fn = e1.cross(e2);
    const cen = a.clone().add(b).add(c).multiplyScalar(1 / 3);
    const rel = cen.sub(axisP);
    const out = rel.sub(axisD.clone().multiplyScalar(rel.dot(axisD)));
    const base = verts.length / 3;
    if (fn.dot(out) < 0) { const t = b; b = c; c = t; }
    verts.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    tris.push(base, base + 1, base + 2);
  };
  for (let f = 0; f < bi.count; f += 3) {
    const i0 = bi.getX(f), i1 = bi.getX(f + 1), i2 = bi.getX(f + 2);
    A.fromBufferAttribute(bp, i0); B.fromBufferAttribute(bp, i1); C.fromBufferAttribute(bp, i2);
    const area = B.clone().sub(A).cross(C.clone().sub(A)).length() * 0.5;
    n.fromBufferAttribute(bn, i0).add(q.fromBufferAttribute(bn, i1)).add(q.fromBufferAttribute(bn, i2)).normalize();
    const cx = (A.x + B.x + C.x) / 3, cy = (A.y + B.y + C.y) / 3, cz = (A.z + B.z + C.z) / 3;
    const fur = furAt(cx, cy, cz, n.y);
    if (!fur) continue;
    acc += area * fur.dens * K;
    while (acc >= 1) {
      acc -= 1;
      // random point on the face
      let u = rand(), v = rand();
      if (u + v > 1) { u = 1 - u; v = 1 - v; }
      p.copy(A).addScaledVector(B.clone().sub(A), u).addScaledVector(C.clone().sub(A), v);
      const len = fur.len * (0.7 + 0.6 * rand());
      const r = fur.r * (0.8 + 0.4 * rand());
      fl.set(fur.flow[0], fur.flow[1], fur.flow[2]);
      dir.copy(n).addScaledVector(fl, 0.85);
      // a little scatter so clumps don't comb in lockstep
      dir.x += (rand() - 0.5) * 0.25; dir.y += (rand() - 0.5) * 0.25; dir.z += (rand() - 0.5) * 0.25;
      dir.normalize();
      t1.set(0, 1, 0);
      if (Math.abs(dir.y) > 0.9) t1.set(1, 0, 0);
      t1.cross(dir).normalize();
      t2.crossVectors(dir, t1).normalize();
      // clumps curve with the comb: mid ring and tip drift along the flow
      bend.copy(fl).sub(dir.clone().multiplyScalar(fl.dot(dir))).multiplyScalar(len * 0.18);
      const rot = rand() * Math.PI * 2;
      const root = p.clone().addScaledVector(n, -0.14); // rooted well under the skin
      const ring = (center, rad) => [0, 1, 2].map((k) => {
        const th = rot + (k * Math.PI * 2) / 3;
        return center.clone().addScaledVector(t1, Math.cos(th) * rad).addScaledVector(t2, Math.sin(th) * rad);
      });
      const b0 = ring(root, r);
      const mid = p.clone().addScaledVector(dir, len * 0.45).add(bend);
      const m0 = ring(mid, r * 0.55);
      const apex = p.clone().addScaledVector(dir, len).addScaledVector(bend, 2.4);
      for (let k = 0; k < 3; k++) {
        const k2 = (k + 1) % 3;
        pushTri(b0[k], b0[k2], m0[k2], p, dir);
        pushTri(b0[k], m0[k2], m0[k], p, dir);
        pushTri(m0[k], m0[k2], apex, p, dir);
      }
    }
  }
  // one geometry: welded body (smooth) + clump soup (flat)
  const nb = bp.count;
  const pos = new Float32Array(nb * 3 + verts.length);
  pos.set(bp.array.subarray(0, nb * 3), 0);
  pos.set(verts, nb * 3);
  const idx = new Uint32Array(bi.count + tris.length);
  idx.set(bi.array.subarray(0, bi.count), 0);
  for (let i = 0; i < tris.length; i++) idx[bi.count + i] = tris[i] + nb;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  geo.computeVertexNormals();
  geo.userData.clumps = tris.length / 27;
  geo.userData.bodyVerts = nb;
  return geo;
}

// inverted hull: the same geometry pushed out along position-welded
// normals (clump facets share tips, so averaging closes the seams) and
// drawn back-face in ink; skinned off the same skeleton so it follows
function buildHullGeometry(geo, thick = 0.075) {
  const pos = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
  // clumps get a thin edge: a body-sized hull swallows a spike whole
  const nb = geo.userData.bodyVerts || pos.count;
  const acc = new Map();
  const key = (i) => `${Math.round(pos.getX(i) * 1000)},${Math.round(pos.getY(i) * 1000)},${Math.round(pos.getZ(i) * 1000)}`;
  for (let i = 0; i < pos.count; i++) {
    const k = key(i);
    const a = acc.get(k) || [0, 0, 0];
    a[0] += nrm.getX(i); a[1] += nrm.getY(i); a[2] += nrm.getZ(i);
    acc.set(k, a);
  }
  const out = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const a = acc.get(key(i));
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    const t = i < nb ? thick : thick * 0.4;
    out[i * 3] = pos.getX(i) + (a[0] / l) * t;
    out[i * 3 + 1] = pos.getY(i) + (a[1] / l) * t;
    out[i * 3 + 2] = pos.getZ(i) + (a[2] / l) * t;
  }
  const hull = new THREE.BufferGeometry();
  hull.setAttribute('position', new THREE.BufferAttribute(out, 3));
  hull.setIndex(geo.getIndex());
  hull.setAttribute('uv', geo.getAttribute('uv'));
  hull.setAttribute('skinIndex', geo.getAttribute('skinIndex'));
  hull.setAttribute('skinWeight', geo.getAttribute('skinWeight'));
  hull.computeVertexNormals();
  return hull;
}

let toonRamp = null;
function celRamp() {
  if (!toonRamp) {
    // three steps: shadow, mid, lit — the anime read, no soft falloff
    // shadow step stays warm-dark, not black: flat clump facets facing
    // away from the key read as shaded fur, the ink hull draws the lines
    toonRamp = new THREE.DataTexture(new Uint8Array([112, 112, 112, 255, 190, 190, 190, 255, 255, 255, 255, 255]), 3, 1);
    toonRamp.minFilter = toonRamp.magFilter = THREE.NearestFilter;
    toonRamp.needsUpdate = true;
  }
  return toonRamp;
}

// ------------------------------------------------------------ variants ---
// v3: smooth sculpt. v4: chunky faceted low-poly of the same body.
// v5: v3's body under long spiky fur, cel-shaded with an ink outline.
const cache = {};
export function buildCatSource(variant) {
  if (cache[variant]) return cache[variant];
  const faceted = variant === 4;
  const furry = variant === 5;
  const geo = furry ? buildFurGeometry() : buildGeometry(faceted ? 34 : 88, 120000);
  if (faceted) {
    // flat shading: non-indexed MC output already is; recompute normals
    // per-face by dropping smooth normals
    const g2 = geo.toNonIndexed ? geo : geo;
    g2.deleteAttribute('normal');
    g2.computeVertexNormals();
    const nrm = g2.getAttribute('normal');
    const posA = g2.getAttribute('position');
    for (let f = 0; f < posA.count; f += 3) {
      const nx = (nrm.getX(f) + nrm.getX(f + 1) + nrm.getX(f + 2)) / 3;
      const ny = (nrm.getY(f) + nrm.getY(f + 1) + nrm.getY(f + 2)) / 3;
      const nz = (nrm.getZ(f) + nrm.getZ(f + 1) + nrm.getZ(f + 2)) / 3;
      for (let v2 = 0; v2 < 3; v2++) nrm.setXYZ(f + v2, nx, ny, nz);
    }
  }
  skinGeometry(geo);
  const { rootBone, list, byKey } = buildSkeleton();
  const mat = furry
    ? new THREE.MeshToonMaterial({ color: 0xff9d45, gradientMap: celRamp() })
    : new THREE.MeshStandardMaterial({ color: 0xff9d45, roughness: 0.9 });
  const mesh = new THREE.SkinnedMesh(geo, mat);
  mesh.name = 'catgen_0';
  mesh.add(rootBone);
  mesh.bind(new THREE.Skeleton(list));
  if (furry) {
    const ink = new THREE.SkinnedMesh(buildHullGeometry(geo),
      new THREE.MeshBasicMaterial({ color: 0x1a1120, side: THREE.BackSide }));
    ink.name = 'ink_0';
    ink.userData.outline = true; // catrig: no coat, no shadow
    ink.bind(mesh.skeleton, mesh.bindMatrix);
    mesh.add(ink);
  }
  // Sketchfab-style nesting: wrapper x100 so CatRig's SCALE lands the cat
  // at its usual 0.35m
  const wrap = new THREE.Group();
  wrap.name = 'wrap_0';
  wrap.scale.setScalar(100);
  wrap.add(mesh);
  const scene = new THREE.Group();
  scene.add(wrap);
  const src = { scene, animations: [buildWalkClip(byKey)] };
  cache[variant] = src;
  return src;
}
