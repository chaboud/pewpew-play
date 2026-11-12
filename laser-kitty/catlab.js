// catlab.js — the cat rendering harness. A neutral stage for working a
// rig in detail: pose presets, locomotion blend, head tracking against
// an orbiting dot, skeleton view, and the v1 blob alongside for scale.
// For v7: its body types, each expression forced, and line-ups.
// Everything tuned here ships: the pose tables live in catrig.js, which
// the game imports too.
//
// Headless hooks (Playwright): ?pose=crouch&speed=0.8&yaw=0.6&nodot=1
// window.__catlab = {ready, setPose, setSpeed, setYaw}
// v7 adds ?build=0..3 (body type), ?mood=<name> (force an expression),
// ?lineup=builds|coats|versions (several cats in a row), ?cam=theta,phi,
// dist,height (a fixed camera for close-ups), and __catlab.setBuild /
// setMood / setLineup / setCam / stats().

import * as THREE from 'three';
import { CatRig, POSES, COAT_NAMES } from './catrig.js?v=k64';
import { MOOD_NAMES } from './catgen7.js?v=k64';
import { mountNav } from './nav.js?v=k64';
mountNav({ right: '10px', top: '10px' });

const params = new URLSearchParams(location.search);
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1824);
const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 50);

// stage: a soft floor disc + grid, gallery lighting
const floor = new THREE.Mesh(
  new THREE.CircleGeometry(2.2, 48),
  new THREE.MeshStandardMaterial({ color: 0x2a2536, roughness: 0.95 })
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);
const grid = new THREE.GridHelper(4, 16, 0x4a4460, 0x322d42);
grid.position.y = 0.001;
scene.add(grid);

scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x3a3040, 1.1));
const key = new THREE.DirectionalLight(0xfff2dd, 2.2);
key.position.set(1.6, 2.4, 1.2);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
// without these a smooth toon body reads its own shadow map as contour lines
key.shadow.bias = -0.0005;
key.shadow.normalBias = 0.012;
key.shadow.camera.left = key.shadow.camera.bottom = -1.5;
key.shadow.camera.right = key.shadow.camera.top = 1.5;
scene.add(key);
const rim = new THREE.DirectionalLight(0x86a8ff, 0.8);
rim.position.set(-1.4, 1.2, -1.6);
scene.add(rim);

// the laser dot the head tracks
const dot = new THREE.Mesh(
  new THREE.SphereGeometry(0.02, 10, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3b30 })
);
scene.add(dot);
const dotGlow = new THREE.PointLight(0xff5040, 0.6, 0.8);
dot.add(dotGlow);

// state
const state = {
  pose: params.get('pose') || '',
  speed: parseFloat(params.get('speed') || '0'),
  yaw: parseFloat(params.get('yaw') || '0.6'),
  dotOn: !params.has('nodot'),
  camTheta: 0.5,
  camPhi: 1.12,
  camDist: 1.35,
  camY: 0.16,
  camZ: 0, // look-at offset along the stage's z (a cat at yaw 0 has its head at about +0.16)
  build: parseInt(params.get('build') || '0', 10),
  mood: params.get('mood') || '',
  lineup: params.get('lineup') || '',
};
if (params.has('cam')) {
  const c = params.get('cam').split(',').map(Number);
  state.camTheta = c[0]; state.camPhi = c[1]; state.camDist = c[2]; state.camY = c[3] ?? 0.16; state.camZ = c[4] ?? 0;
}

let rig = null; // the first cat on stage (hooks, skeleton view, bone probe)
let rigs = []; // every cat on stage: one, or a line-up
let skelHelper = null;
let blob = null;

// v1 blob for side-by-side scale reference (hand-rolled mini copy of the
// game's buildCat silhouette — enough for eyeballing proportions)
function buildBlob() {
  const g = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: 0xff9d45, roughness: 0.9 });
  const dark = new THREE.MeshStandardMaterial({ color: 0xb4661f, roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.115, 20, 16), fur);
  body.scale.set(1.05, 0.92, 1.5);
  body.position.y = 0.02;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.088, 16, 12), fur);
  head.position.set(0, 0.11, 0.2);
  g.add(head);
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.075, 4), dark);
    ear.position.set(0.053 * sx, 0.2, 0.185);
    g.add(ear);
  }
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.14, 0.035), dark);
    leg.position.set(0.065 * sx, -0.12, 0.11 * sz);
    g.add(leg);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.position.set(-0.55, 0.19, 0);
  scene.add(g);
  return g;
}

let modelVariant = parseInt(params.get('model') || '2', 10);
// what stands on the stage: one cat, or a line-up for comparing at a glance
// — every v7 body type, every coat, or the house sculpts side by side
function cast(coat) {
  // build -1: leave it to the rig, which deals bodies by the same ordinal
  // that picks the coat — the cast as the game hands it out
  const build = state.build < 0 ? undefined : state.build;
  if (state.lineup === 'builds') return [0, 1, 2, 3].map((b) => ({ variant: 7, coat, build: b }));
  if (state.lineup === 'coats') return COAT_NAMES.map((_, c) => ({ variant: modelVariant, coat: c, build }));
  if (state.lineup === 'versions') return [3, 6, 7].map((v) => ({ variant: v, coat, build }));
  if (state.lineup === 'moods') return MOOD_NAMES.map((m) => ({ variant: 7, coat, build, mood: m }));
  return [{ variant: modelVariant, coat, build }];
}
let building = 0;
function buildRig(coat) {
  const who = cast(coat);
  const ticket = ++building;
  window.__catlab.ready = false;
  Promise.all(who.map((w) => CatRig.source(w.variant))).then((srcs) => {
    if (ticket !== building) return;
    for (const r of rigs) r.dispose();
    if (skelHelper) scene.remove(skelHelper);
    const n = who.length;
    // a row across the stage (two rows for the eleven coats)
    const perRow = n > 6 ? Math.ceil(n / 2) : n;
    rigs = who.map((w, i) => {
      const r = new CatRig(srcs[i], scene, w.coat, { build: w.build });
      r.labMood = w.mood || null;
      const row = Math.floor(i / perRow), col = i % perRow, cols = Math.min(perRow, n - row * perRow);
      r.group.position.set(n === 1 ? 0.1 : (col - (cols - 1) / 2) * 0.56, 0.19, n > perRow ? (row ? 0.42 : -0.42) : 0);
      return r;
    });
    rig = rigs[0];
    rig.group.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(rig.inner);
    window.__catlab.bbox = { min: { ...bb.min }, max: { ...bb.max } };
    skelHelper = new THREE.SkeletonHelper(rig.inner);
    skelHelper.visible = document.getElementById('c-skel').checked;
    scene.add(skelHelper);
    if (!blob) blob = buildBlob();
    blob.visible = n === 1 && document.getElementById('c-blob').checked;
    window.__catlab.rig = rig;
    window.__catlab.rigs = rigs;
    window.__catlab.ready = true;
  });
}

// UI wiring
const $ = (id) => document.getElementById(id);
$('c-pose').value = state.pose;
$('c-speed').value = state.speed;
$('c-yaw').value = state.yaw;
$('v-speed').textContent = state.speed.toFixed(1);
$('v-yaw').textContent = state.yaw.toFixed(1);
$('c-pose').onchange = (e) => (state.pose = e.target.value);
$('c-speed').oninput = (e) => {
  state.speed = parseFloat(e.target.value);
  $('v-speed').textContent = state.speed.toFixed(1);
};
$('c-yaw').oninput = (e) => {
  state.yaw = parseFloat(e.target.value);
  $('v-yaw').textContent = state.yaw.toFixed(1);
};
const coatNow = () => parseInt($('c-coat').value, 10);
$('c-coat').value = params.get('coat') || '0';
$('c-coat').onchange = () => buildRig(coatNow());
$('c-model').value = String(modelVariant);
$('c-model').onchange = (e) => {
  modelVariant = parseInt(e.target.value, 10);
  buildRig(coatNow());
};
// v7: body type, a forced expression, line-ups
$('c-build').value = String(state.build);
$('c-build').onchange = (e) => { state.build = parseInt(e.target.value, 10); buildRig(coatNow()); };
$('c-mood').value = state.mood;
$('c-mood').onchange = (e) => (state.mood = e.target.value);
$('c-lineup').value = state.lineup;
$('c-lineup').onchange = (e) => { state.lineup = e.target.value; buildRig(coatNow()); };
$('c-dot').onchange = (e) => (state.dotOn = e.target.checked);
$('c-skel').onchange = (e) => { if (skelHelper) skelHelper.visible = e.target.checked; };
$('c-blob').onchange = (e) => { if (blob) blob.visible = e.target.checked && rigs.length === 1; };
if (params.has('noblob')) $('c-blob').checked = false;
if (params.has('nodot')) $('c-dot').checked = false;

// drag orbit + wheel zoom
let dragging = false, px = 0, py = 0;
canvas.addEventListener('pointerdown', (e) => { dragging = true; px = e.clientX; py = e.clientY; });
addEventListener('pointerup', () => (dragging = false));
addEventListener('pointermove', (e) => {
  if (!dragging) return;
  state.camTheta += (e.clientX - px) * 0.008;
  state.camPhi = Math.max(0.3, Math.min(1.5, state.camPhi + (e.clientY - py) * 0.006));
  px = e.clientX; py = e.clientY;
});
addEventListener('wheel', (e) => {
  state.camDist = Math.max(0.5, Math.min(4, state.camDist + e.deltaY * 0.0015));
});

window.__catlab = {
  ready: false,
  poses: POSES, // live-mutable: tune tables in the console, then commit
  setPose: (p) => { state.pose = p; $('c-pose').value = p; },
  setSpeed: (s) => { state.speed = s; },
  setYaw: (y) => { state.yaw = y; },
  setBuild: (b) => { state.build = b; $('c-build').value = String(b); buildRig(coatNow()); },
  setMood: (m) => { state.mood = m; $('c-mood').value = m; },
  setLineup: (l) => { state.lineup = l; $('c-lineup').value = l; buildRig(coatNow()); },
  setCam: (theta, phi, dist, y, z) => { state.camTheta = theta; state.camPhi = phi; state.camDist = dist; if (y != null) state.camY = y; if (z != null) state.camZ = z; },
  // what one cat costs to draw: its meshes (= draw calls in the colour
  // pass), triangles and vertices, how many of those also cast a shadow,
  // and for v7 what each body type cost to polygonize
  stats: () => {
    const out = { meshes: 0, tris: 0, verts: 0, shadowCasters: 0, shadowTris: 0, bones: Object.keys(rig.bones).length };
    rig.inner.traverse((o) => {
      if (!o.isMesh) return;
      const g = o.geometry, t = (g.index ? g.index.count : g.attributes.position.count) / 3;
      out.meshes++; out.tris += t; out.verts += g.attributes.position.count;
      if (o.castShadow) { out.shadowCasters++; out.shadowTris += t; }
    });
    return out;
  },
  renderInfo: () => ({ ...renderer.info.render }),
  source: (v) => CatRig.source(v),
};
buildRig(coatNow());

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const w = innerWidth, h = innerHeight;
  if (canvas.width !== w * renderer.getPixelRatio()) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  // dot orbit: swings around the cat at nose height, occasionally darting
  const t = now / 1000;
  dot.visible = state.dotOn;
  dot.position.set(Math.cos(t * 0.7) * 0.7, 0.1 + Math.sin(t * 1.7) * 0.28 + 0.28, Math.sin(t * 0.9) * 0.7);
  for (const r of rigs) {
    r.group.rotation.y = state.yaw;
    r.update(dt, {
      speed: state.speed,
      pose: state.pose || null,
      dot: state.dotOn ? dot.position : null,
      mood: r.labMood || state.mood || null,
    });
  }
  if (rig) {
    // bone probe: ?probe=thighbl&axis=x&amt=1 forces one local rotation
    // after the full update, so the local flexion axes can be read off
    // screenshots instead of guessed
    const pb = params.get('probe');
    if (pb && rig.bones[pb]) {
      const amt = parseFloat(params.get('amt') || '1');
      const ax = params.get('axis') || 'x';
      const e = new THREE.Euler(ax === 'x' ? amt : 0, ax === 'y' ? amt : 0, ax === 'z' ? amt : 0);
      rig.bones[pb].quaternion.copy(rig.rest[pb]).multiply(new THREE.Quaternion().setFromEuler(e));
    }
  }
  const tx = rigs.length === 1 ? rig.group.position.x : 0; // a lone cat stands off-centre, beside the blob
  camera.position.set(
    tx + Math.sin(state.camTheta) * Math.sin(state.camPhi) * state.camDist,
    Math.cos(state.camPhi) * state.camDist + state.camY - 0.01,
    state.camZ + Math.cos(state.camTheta) * Math.sin(state.camPhi) * state.camDist
  );
  camera.lookAt(tx, state.camY, state.camZ);
  renderer.render(scene, camera);
}
requestAnimationFrame(frame);
