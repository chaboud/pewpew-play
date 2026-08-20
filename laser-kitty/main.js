// Grey-box viewer: a thin adapter over the sim core's C ABI (ADR-0001
// thin-frontend discipline — no game logic lives here).
import * as THREE from './vendor/three.module.min.js';

const STATE_NAMES = ['IDLE', 'ALERT', 'STALK', 'WINDUP', 'POUNCE', 'RECOVER', 'BORED', 'ZOOMIES!', 'SEARCH'];
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

// laser dot + spill (wiki/game/laser.md): a bright core plus an oriented
// spill disc on the hit surface — size/opacity come from the core's optics
const dot = new THREE.Mesh(
  new THREE.SphereGeometry(0.028, 10, 8),
  new THREE.MeshBasicMaterial({ color: 0xff3b30 })
);
scene.add(dot);
const spill = new THREE.Mesh(
  new THREE.CircleGeometry(1, 20),
  new THREE.MeshBasicMaterial({ color: 0xff5545, transparent: true, opacity: 0.35, depthWrite: false })
);
scene.add(spill);
const beamGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
const beam = new THREE.Line(
  beamGeo,
  new THREE.LineBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.55 })
);
scene.add(beam);

// --- camera: fixed diorama vantage (founder, playtest 3) -------------------
// You stand OUTSIDE the room, slightly above, looking in — a diorama of
// targets. The eye never translates (a whisper of idle bob only). Look
// direction is explicit: grab-the-world arcball, no follow, no auto.
const H_FOV = 62 * (Math.PI / 180);
const EYE = new THREE.Vector3(0, 2.0, -5.6);
let lookYaw = 0;
let lookPitch = -0.26; // slightly down into the room
const YAW_LIM = 0.9;
const PITCH_MIN = -0.8, PITCH_MAX = 0.15;
function applyLook(bob = 0) {
  camera.position.set(EYE.x, EYE.y + bob, EYE.z);
  const f = new THREE.Vector3(
    Math.sin(lookYaw) * Math.cos(lookPitch),
    Math.sin(lookPitch),
    Math.cos(lookYaw) * Math.cos(lookPitch)
  );
  camera.lookAt(camera.position.clone().add(f));
}
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  const aspect = innerWidth / innerHeight;
  camera.aspect = aspect;
  const vfov = 2 * Math.atan(Math.tan(H_FOV / 2) / Math.min(aspect, 1.2));
  camera.fov = Math.min(105, (vfov * 180) / Math.PI);
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();
applyLook();

// Grab-the-world look: on drag start, remember the ray you grabbed; each
// move, rotate the view so that world direction stays under the finger
// (natural scrolling — correct by construction, no sign tuning). Yaw and
// pitch clamped so the room never leaves the frame; roll always zero.
const lookRay = new THREE.Raycaster();
let lookId = null;
let grabDir = null;
function pixelDir(x, y) {
  lookRay.setFromCamera(
    new THREE.Vector2((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1),
    camera
  );
  return lookRay.ray.direction.clone();
}
addEventListener('pointerdown', (e) => {
  if (e.clientY >= pad.getBoundingClientRect().top) return; // laser finger
  if (lookId !== null) return;
  lookId = e.pointerId;
  grabDir = pixelDir(e.clientX, e.clientY);
});
addEventListener('pointermove', (e) => {
  if (e.pointerId !== lookId || !grabDir) return;
  const d1 = pixelDir(e.clientX, e.clientY);
  const q = new THREE.Quaternion().setFromUnitVectors(d1, grabDir);
  const f = new THREE.Vector3();
  camera.getWorldDirection(f);
  f.applyQuaternion(q);
  lookPitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, Math.asin(Math.max(-0.99, Math.min(0.99, f.y)))));
  lookYaw = Math.max(-YAW_LIM, Math.min(YAW_LIM, Math.atan2(f.x, f.z)));
  applyLook();
});
for (const ev of ['pointerup', 'pointercancel']) {
  addEventListener(ev, (e) => {
    if (e.pointerId === lookId) {
      lookId = null;
      grabDir = null;
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
let dotActive = false;
let aimScreen = null; // [sx, sy] pixel the beam aims through
const raycaster = new THREE.Raycaster();
// Belt-buckle emitter, avatar-frame relative (wiki/game/laser.md):
// centered below the eye — handedness-neutral. The laser ray goes from the
// belt through the aim point on the focus plane (mid-room depth).
const BELT_LOCAL = new THREE.Vector3(0, -0.75, 0.15);
const FOCUS_D = 5.5;
const laserRay = { ox: 0, oy: 0, oz: 0, dx: 0, dy: 0, dz: 1 };
function beltWorld() {
  return camera.position.clone().add(BELT_LOCAL.clone().applyQuaternion(camera.quaternion));
}
function updateLaserRay() {
  if (!aimScreen) return;
  const ndc = new THREE.Vector2(
    (aimScreen[0] / innerWidth) * 2 - 1,
    -(aimScreen[1] / innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(ndc, camera);
  const fwd = new THREE.Vector3();
  camera.getWorldDirection(fwd);
  // point where the eye-ray crosses the focus plane (perpendicular to view)
  const t = FOCUS_D / Math.max(0.2, raycaster.ray.direction.dot(fwd));
  const p = camera.position.clone().add(raycaster.ray.direction.clone().multiplyScalar(t));
  const belt = beltWorld();
  const d = p.sub(belt).normalize();
  laserRay.ox = belt.x; laserRay.oy = belt.y; laserRay.oz = belt.z;
  laserRay.dx = d.x; laserRay.dy = d.y; laserRay.dz = d.z;
}
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
  updateLaserRay();
  while (acc >= DT) {
    lk.lk_step(sim, laserRay.ox, laserRay.oy, laserRay.oz, laserRay.dx, laserRay.dy, laserRay.dz, dotActive ? 1 : 0);
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

  // fixed diorama eye; a whisper of bob for naturalness, never a follow
  applyLook(Math.sin(now * 0.0006) * 0.012);

  // dot + spill exactly where the core says the ray landed
  const L = new Float32Array(lk.memory.buffer, lk.lk_laser(sim), 10);
  const lit = dotActive && L[0] > 0.5;
  dot.visible = spill.visible = beam.visible = lit;
  if (lit) {
    const n = new THREE.Vector3(L[4], L[5], L[6]);
    dot.position.set(L[1], L[2], L[3]).addScaledVector(n, 0.012);
    spill.position.set(L[1], L[2], L[3]).addScaledVector(n, 0.006);
    spill.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    spill.scale.setScalar(L[7]);
    spill.material.opacity = 0.15 + 0.35 * L[8];
    dot.material.color.setHSL(0.995, 1.0, 0.35 + 0.25 * L[8]);
    beamGeo.setFromPoints([beltWorld(), dot.position]);
  }

  scoreEl.textContent = lk.lk_score(sim);
  stateEl.textContent = STATE_NAMES[catState] ?? '?';
  meterEl.style.width = `${(lk.lk_interest(sim) * 100).toFixed(0)}%`;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
stateEl.textContent = 'PAD = LASER · DRAG ROOM = LOOK';
requestAnimationFrame(frame);
