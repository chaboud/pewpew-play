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

// ------------------------------------------------------------ variants ---
// v3: smooth sculpt. v4: chunky faceted low-poly of the same body.
const cache = {};
export function buildCatSource(variant) {
  if (cache[variant]) return cache[variant];
  const faceted = variant === 4;
  const geo = buildGeometry(faceted ? 34 : 88, 120000);
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
  const mat = new THREE.MeshStandardMaterial({ color: 0xff9d45, roughness: 0.9 });
  const mesh = new THREE.SkinnedMesh(geo, mat);
  mesh.name = 'catgen_0';
  mesh.add(rootBone);
  mesh.bind(new THREE.Skeleton(list));
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
