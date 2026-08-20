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

// --- the cat: render-side body (physics stays a capsule) -------------------
// Horizontal body + head + ears + gaited legs + lashing tail. Facing comes
// from velocity; gait phase from speed. Pure cosmetics per the seam rules.
const catParts = {};
function buildCat() {
  const g = new THREE.Group();
  const fur = new THREE.MeshLambertMaterial({ color: 0xff9d45 });
  const dark = new THREE.MeshLambertMaterial({ color: 0xd97f2e });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.24, 3, 8), fur);
  body.rotation.x = Math.PI / 2; // lie along z (facing +z locally)
  body.position.y = 0.02;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 8), fur);
  head.position.set(0, 0.1, 0.2);
  g.add(head);
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.07, 4), dark);
    ear.position.set(0.05 * sx, 0.19, 0.19);
    g.add(ear);
  }
  catParts.legs = [];
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.14, 0.035), dark);
    leg.position.set(0.065 * sx, -0.12, 0.11 * sz);
    leg.userData.phase = sz > 0 ? (sx > 0 ? 0 : Math.PI) : (sx > 0 ? Math.PI : 0);
    g.add(leg);
    catParts.legs.push(leg);
  }
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.028, 0.24), dark);
  tail.position.set(0, 0.1, -0.26);
  tail.rotation.x = -0.5;
  g.add(tail);
  catParts.tail = tail;
  scene.add(g);
  return g;
}
let catGroup = null;
let catFacing = 0;
let catPrev = null;

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

// --- camera: aspect-adaptive, auto-framing, with look-drag orbit -----------
// Vertical FOV derives from a fixed *horizontal* FOV so tall phone screens
// widen vertically instead of cropping the room away.
const H_FOV = 78 * (Math.PI / 180);
let camYaw = 0; // user look: horizontal orbit
let camPitch = 0.55; // user look: vertical (rad above horizontal)
let camDist = 4.6;
const focus = new THREE.Vector3(0, 0.4, 0.3); // EMA'd point of interest
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  const aspect = innerWidth / innerHeight;
  camera.aspect = aspect;
  const vfov = 2 * Math.atan(Math.tan(H_FOV / 2) / Math.min(aspect, 1.2));
  camera.fov = Math.min(105, (vfov * 180) / Math.PI);
  camDist = 4.2 * Math.max(1, Math.min(1.6, 0.8 / aspect));
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

// Look control: window-level pointer tracking (element-level listeners
// proved unreliable on mobile — playtest 2). Any drag that STARTS above
// the pad is a look gesture, per-pointer-id so it coexists with the pad
// thumb. Horizontal = orbit, vertical = pitch.
let lookId = null;
let lookLast = null;
addEventListener('pointerdown', (e) => {
  if (e.clientY >= pad.getBoundingClientRect().top) return; // pad's finger
  if (lookId !== null) return;
  lookId = e.pointerId;
  lookLast = [e.clientX, e.clientY];
});
addEventListener('pointermove', (e) => {
  if (e.pointerId !== lookId || !lookLast) return;
  camYaw -= (e.clientX - lookLast[0]) * 0.008;
  camPitch = Math.max(0.12, Math.min(1.25, camPitch + (e.clientY - lookLast[1]) * 0.005));
  lookLast = [e.clientX, e.clientY];
});
for (const ev of ['pointerup', 'pointercancel']) {
  addEventListener(ev, (e) => {
    if (e.pointerId === lookId) {
      lookId = null;
      lookLast = null;
    }
  });
}

// --- thumb pad → dot: the pointer fiction (founder 2026-08-20) -------------
// Your thumb is the hand holding the laser; the dot lands in the scene
// directly ABOVE your thumb on screen. Thumb position maps to a screen
// aim-point above the pad; a ray through that pixel hits the floor; that's
// the dot. Screen-space aiming is inherently camera-relative, and the
// amplification is real ray geometry: grazing angles sweep far.
const pad = document.getElementById('pad');
const thumbEl = document.getElementById('thumb');
let dotX = 0, dotZ = -1.5, dotActive = false;
let aimScreen = null; // [sx, sy] pixel the beam aims through
const raycaster = new THREE.Raycaster();
const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function padPoint(e) {
  const r = pad.getBoundingClientRect();
  const t = e.touches ? e.touches[0] : e;
  const fx = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width));
  const fy = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
  // aim-point: same x as the thumb; y sweeps the scene area above the pad
  // (pad bottom = close in front of you, pad top = deep in the room)
  const sx = r.left + fx * r.width;
  const sy = innerHeight * (0.08 + fy * 0.52); // 8%..60% of screen height
  aimScreen = [sx, sy];
  thumbEl.style.left = `${fx * r.width}px`;
  thumbEl.style.top = `${fy * r.height}px`;
}
function updateDotFromAim() {
  if (!aimScreen) return;
  const ndc = new THREE.Vector2(
    (aimScreen[0] / innerWidth) * 2 - 1,
    -(aimScreen[1] / innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(ndc, camera);
  const hit = new THREE.Vector3();
  if (raycaster.ray.intersectPlane(floorPlane, hit)) {
    dotX = Math.max(-ROOM, Math.min(ROOM, hit.x));
    dotZ = Math.max(-ROOM, Math.min(ROOM, hit.z));
  } else {
    // aiming above the horizon: push the dot to the room's far edge
    const d = raycaster.ray.direction;
    dotX = Math.max(-ROOM, Math.min(ROOM, camera.position.x + d.x * 8));
    dotZ = Math.max(-ROOM, Math.min(ROOM, camera.position.z + d.z * 8));
  }
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
  const catState = lk.lk_cat_state(sim);
  let catPos = null;
  for (let i = 0; i < count; i++) {
    const o = i * FLOATS_PER_BODY;
    if (data[o] === 3) {
      if (!catGroup) catGroup = buildCat();
      const x = data[o + 5], y = data[o + 6], z = data[o + 7];
      catPos = [x, y, z];
      if (catPrev) {
        const vx = x - catPrev[0], vz = z - catPrev[2];
        const sp = Math.hypot(vx, vz) * 60;
        if (sp > 0.25) {
          const target = Math.atan2(vx, vz);
          let d = target - catFacing;
          while (d > Math.PI) d -= 2 * Math.PI;
          while (d < -Math.PI) d += 2 * Math.PI;
          catFacing += d * 0.2;
        }
        const swing = Math.min(0.7, sp * 0.22);
        for (const leg of catParts.legs) {
          leg.rotation.x = Math.sin(now * 0.02 + leg.userData.phase) * swing;
        }
        catParts.tail.rotation.y =
          catState === 3 ? Math.sin(now * 0.05) * 0.9 : Math.sin(now * 0.004) * 0.25;
      }
      catPrev = [x, y, z];
      catGroup.position.set(x, y, z);
      catGroup.rotation.y = catFacing + (catState === 3 ? Math.sin(now * 0.045) * 0.22 : 0);
      continue;
    }
    if (!meshes[i]) meshes[i] = meshFor(data[o + 1], data[o + 2], data[o + 3], data[o + 4], data[o]);
    const m = meshes[i];
    m.position.set(data[o + 5], data[o + 6], data[o + 7]);
    m.quaternion.set(data[o + 8], data[o + 9], data[o + 10], data[o + 11]);
    if (data[o] === 2) m.material.color.setHex(data[o + 12] ? 0xe8595f : CLASS_COLOR[2]);
  }

  updateDotFromAim();

  // auto-framing: gentle — blend the action point halfway to room center
  // so the camera drifts with play but never chases it (playtest 2: the
  // camera must not fight the look control)
  if (catPos) {
    const ax = dotActive ? catPos[0] * 0.55 + dotX * 0.45 : catPos[0];
    const az = dotActive ? catPos[2] * 0.55 + dotZ * 0.45 : catPos[2];
    focus.x += (Math.max(-1.6, Math.min(1.6, ax * 0.5)) - focus.x) * 0.04;
    focus.z += (Math.max(-1.6, Math.min(1.6, az * 0.5)) - focus.z) * 0.04;
    focus.y += (Math.min(1.0, catPos[1] * 0.4 + 0.35) - focus.y) * 0.04;
  }
  const horiz = Math.cos(camPitch) * camDist;
  camera.position.set(
    focus.x + Math.sin(camYaw) * horiz,
    focus.y + Math.sin(camPitch) * camDist,
    focus.z - Math.cos(camYaw) * horiz
  );
  camera.lookAt(focus);

  dot.position.set(dotX, 0.03, dotZ);
  dot.visible = beam.visible = dotActive;
  if (dotActive && aimScreen) {
    // beam rises from your hand: anchor just above the thumb, near-plane
    const hn = new THREE.Vector2((aimScreen[0] / innerWidth) * 2 - 1, -0.75);
    raycaster.setFromCamera(hn, camera);
    const hand = camera.position
      .clone()
      .add(raycaster.ray.direction.clone().multiplyScalar(1.0));
    beamGeo.setFromPoints([hand, dot.position]);
  }

  scoreEl.textContent = lk.lk_score(sim);
  stateEl.textContent = STATE_NAMES[catState] ?? '?';
  meterEl.style.width = `${(lk.lk_interest(sim) * 100).toFixed(0)}%`;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
stateEl.textContent = 'PAD = LASER · DRAG SCENE = LOOK';
requestAnimationFrame(frame);
