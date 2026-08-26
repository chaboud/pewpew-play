// catlab.js — the cat rendering harness. A neutral stage for working the
// V2 rig in detail: pose presets, locomotion blend, head tracking against
// an orbiting dot, skeleton view, and the v1 blob alongside for scale.
// Everything tuned here ships: the pose tables live in catrig.js, which
// the game imports too.
//
// Headless hooks (Playwright): ?pose=crouch&speed=0.8&yaw=0.6&nodot=1
// window.__catlab = {ready, setPose, setSpeed, setYaw}

import * as THREE from 'three';
import { CatRig, POSES } from './catrig.js?v=k37';

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
key.shadow.mapSize.set(1024, 1024);
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
};

let rig = null;
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

let rigGltf = null;
function buildRig(coat) {
  if (rig) { rig.dispose(); if (skelHelper) scene.remove(skelHelper); }
  rig = new CatRig(rigGltf, scene, coat);
  rig.group.position.set(0.1, 0.19, 0);
  skelHelper = new THREE.SkeletonHelper(rig.inner);
  skelHelper.visible = document.getElementById('c-skel').checked;
  scene.add(skelHelper);
  window.__catlab.rig = rig;
}
CatRig.load().then((gltf) => {
  rigGltf = gltf;
  rig = new CatRig(gltf, scene, parseInt(params.get('coat') || '0', 10));
  rig.group.position.set(0.1, 0.19, 0); // group origin = capsule center height
  rig.group.updateMatrixWorld(true);
  const bb = new THREE.Box3().setFromObject(rig.inner);
  console.log('RIG BBOX', JSON.stringify({ min: bb.min, max: bb.max }));
  window.__catlab.bbox = { min: { ...bb.min }, max: { ...bb.max } };
  skelHelper = new THREE.SkeletonHelper(rig.inner);
  skelHelper.visible = false;
  scene.add(skelHelper);
  blob = buildBlob();
  window.__catlab.rig = rig;
  window.__catlab.ready = true;
});

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
$('c-coat').onchange = (e) => { if (rigGltf) buildRig(parseInt(e.target.value, 10)); };
$('c-dot').onchange = (e) => (state.dotOn = e.target.checked);
$('c-skel').onchange = (e) => { if (skelHelper) skelHelper.visible = e.target.checked; };
$('c-blob').onchange = (e) => { if (blob) blob.visible = e.target.checked; };
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
};

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
  if (rig) {
    rig.group.rotation.y = state.yaw;
    rig.update(dt, {
      speed: state.speed,
      pose: state.pose || null,
      dot: state.dotOn ? dot.position : null,
    });
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
  camera.position.set(
    Math.sin(state.camTheta) * Math.sin(state.camPhi) * state.camDist,
    Math.cos(state.camPhi) * state.camDist + 0.15,
    Math.cos(state.camTheta) * Math.sin(state.camPhi) * state.camDist
  );
  camera.lookAt(0, 0.16, 0);
  renderer.render(scene, camera);
}
requestAnimationFrame(frame);
