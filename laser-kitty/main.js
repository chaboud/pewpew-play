// Grey-box viewer: a thin adapter over the sim core's C ABI (ADR-0001
// thin-frontend discipline — no game logic lives here).
import * as THREE from './vendor/three.module.min.js';

const STATE_NAMES = ['IDLE', 'ALERT', 'STALK', 'WINDUP', 'POUNCE', 'RECOVER', 'BORED', 'ZOOMIES!'];
const ROOM = 2.8; // dot travel half-extent (slightly inside the walls)
const FLOATS_PER_BODY = 13;

const wasm = await WebAssembly.instantiateStreaming(fetch('lk_core.wasm'), {});
const lk = wasm.instance.exports;
const sim = lk.lk_new(42, 0);

// --- three scene -----------------------------------------------------------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x14121a);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 50);
camera.position.set(0, 3.4, -4.8);
camera.lookAt(0, 0.55, 0.6);
scene.add(new THREE.HemisphereLight(0xbccadf, 0x2a2431, 1.1));
const sun = new THREE.DirectionalLight(0xfff2dd, 1.6);
sun.position.set(-2, 5, -3);
scene.add(sun);

const CLASS_COLOR = [0x2c2837, 0xa08a6a, 0x53c8d8, 0xff9d45];
const meshes = [];
function meshFor(shape, a, b, c, cls) {
  let geo;
  if (shape === 1) geo = new THREE.SphereGeometry(a, 12, 10);
  else if (shape === 2) geo = new THREE.CapsuleGeometry(b, a * 2, 3, 8);
  else geo = new THREE.BoxGeometry(a * 2, b * 2, c * 2);
  const mat = new THREE.MeshLambertMaterial({ color: CLASS_COLOR[cls] });
  const m = new THREE.Mesh(geo, mat);
  scene.add(m);
  return m;
}

// laser dot + beam (R-19: the beam is the aiming feedback)
const dot = new THREE.Mesh(
  new THREE.SphereGeometry(0.045, 10, 8),
  new THREE.MeshBasicMaterial({ color: 0xff2b2b })
);
scene.add(dot);
const beamGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
const beam = new THREE.Line(
  beamGeo,
  new THREE.LineBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.55 })
);
scene.add(beam);

function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

// --- thumb pad → dot (amplified absolute mapping, like a real pointer) -----
const pad = document.getElementById('pad');
const thumbEl = document.getElementById('thumb');
let dotX = 0, dotZ = -1.5, dotActive = false;
function padPoint(e) {
  const r = pad.getBoundingClientRect();
  const t = e.touches ? e.touches[0] : e;
  const nx = ((t.clientX - r.left) / r.width) * 2 - 1;
  const ny = ((t.clientY - r.top) / r.height) * 2 - 1;
  dotX = -Math.max(-1, Math.min(1, nx)) * ROOM; // mirrored: camera faces +z
  dotZ = -Math.max(-1, Math.min(1, ny)) * ROOM;
  thumbEl.style.left = `${Math.max(0, Math.min(r.width, t.clientX - r.left))}px`;
  thumbEl.style.top = `${Math.max(0, Math.min(r.height, t.clientY - r.top))}px`;
}
for (const [ev, on] of [['pointerdown', true], ['pointermove', null], ['pointerup', false], ['pointercancel', false]]) {
  pad.addEventListener(ev, (e) => {
    if (on !== null) dotActive = on;
    if (dotActive && on !== false) padPoint(e);
    e.preventDefault();
  }, { passive: false });
}

// --- HUD -------------------------------------------------------------------
const scoreEl = document.getElementById('score');
const stateEl = document.getElementById('state');
const meterEl = document.getElementById('meterfill');
const popsEl = document.getElementById('pops');
function popScore(text) {
  const div = document.createElement('div');
  div.className = 'pop';
  div.textContent = text;
  div.style.left = `${30 + Math.random() * 40}%`;
  div.style.top = '28%';
  popsEl.appendChild(div);
  setTimeout(() => div.remove(), 900);
}

// --- fixed-tick loop -------------------------------------------------------
let last = performance.now();
let acc = 0;
const DT = 1000 / 60;
function frame(now) {
  acc = Math.min(acc + (now - last), 100);
  last = now;
  while (acc >= DT) {
    lk.lk_step(sim, dotX, dotZ, dotActive ? 1 : 0);
    const n = lk.lk_event_count(sim);
    for (let i = 0; i < n; i++) {
      const code = lk.lk_event(sim, i);
      if (code >>> 24 === 3) {
        const chain = (code >> 20) & 0xf;
        popScore(`+${code & 0xfff}${chain > 1 ? ` x${chain}` : ''}`);
      }
    }
    acc -= DT;
  }

  const count = lk.lk_body_count(sim);
  const ptr = lk.lk_render_data(sim);
  const data = new Float32Array(lk.memory.buffer, ptr, count * FLOATS_PER_BODY);
  for (let i = 0; i < count; i++) {
    const o = i * FLOATS_PER_BODY;
    if (!meshes[i]) meshes[i] = meshFor(data[o + 1], data[o + 2], data[o + 3], data[o + 4], data[o]);
    const m = meshes[i];
    m.position.set(data[o + 5], data[o + 6], data[o + 7]);
    m.quaternion.set(data[o + 8], data[o + 9], data[o + 10], data[o + 11]);
    if (data[o] === 2) m.material.color.setHex(data[o + 12] ? 0xe8595f : CLASS_COLOR[2]);
    if (data[o] === 3 && lk.lk_cat_state(sim) === 3) {
      m.rotation.y = Math.sin(now * 0.045) * 0.22; // the butt-wiggle, render-side
    }
  }

  dot.position.set(dotX, 0.03, dotZ);
  dot.visible = beam.visible = dotActive;
  const from = new THREE.Vector3(0.4, 0.15, -3.4); // "your hand", bottom of view
  beamGeo.setFromPoints([from, dot.position]);

  scoreEl.textContent = lk.lk_score(sim);
  stateEl.textContent = STATE_NAMES[lk.lk_cat_state(sim)] ?? '?';
  meterEl.style.width = `${(lk.lk_interest(sim) * 100).toFixed(0)}%`;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
stateEl.textContent = 'DRAG THE PAD';
requestAnimationFrame(frame);
