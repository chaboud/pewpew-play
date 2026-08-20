// Grey-box viewer: a thin adapter over the sim core's C ABI (ADR-0001
// thin-frontend discipline — no game logic lives here).
import * as THREE from './vendor/three.module.min.js';

const STATE_NAMES = ['IDLE', 'ALERT', 'STALK', 'WINDUP', 'POUNCE', 'RECOVER', 'BORED', 'ZOOMIES!', 'SEARCH'];
const STATE_TINT = [0x9aa0b0, 0xffe86b, 0xffb347, 0xc792ea, 0xff5a5a, 0x8fd18f, 0x6f7480, 0x53c8d8, 0x4dd0e1];
const FLOATS_PER_BODY = 13;
const SEED = 42;

const wasm = await WebAssembly.instantiateStreaming(fetch('lk_core.wasm'), {});
const lk = wasm.instance.exports;
let sim = lk.lk_new(SEED, 0);

// --- three scene -----------------------------------------------------------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x191724);
scene.fog = new THREE.Fog(0x191724, 9, 16);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 50);
scene.add(new THREE.HemisphereLight(0xcdd6ea, 0x33293a, 0.9));
const sun = new THREE.DirectionalLight(0xffe9c9, 1.7);
sun.position.set(-2.5, 5.5, -2.0);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -4;
sun.shadow.camera.right = 4;
sun.shadow.camera.top = 4;
sun.shadow.camera.bottom = -4;
sun.shadow.camera.far = 14;
sun.shadow.bias = -0.002;
scene.add(sun);

// deterministic per-body color variety within each class palette
function bodyColor(i, cls, dims, py) {
  const h = ((i * 2654435761) >>> 0) / 4294967296;
  if (cls === 3) return new THREE.Color(0xff9d45);
  if (cls === 0) {
    // small elevated statics are paintings — give them gallery colors
    if (Math.max(...dims) < 0.6 && py > 0.9) return new THREE.Color().setHSL(h, 0.55, 0.55);
    return new THREE.Color(0x37333f);
  }
  if (cls === 1) return new THREE.Color().setHSL(0.07 + h * 0.06, 0.35, 0.38 + h * 0.1);
  return new THREE.Color().setHSL((0.45 + h * 0.5) % 1, 0.6, 0.55);
}

let meshes = [];
let debugLook = false;
function meshFor(i, shape, a, b, c, cls, py) {
  let geo;
  if (shape === 1) geo = new THREE.SphereGeometry(a, 14, 12);
  else if (shape === 2) geo = new THREE.CapsuleGeometry(b, a * 2, 4, 10);
  else geo = new THREE.BoxGeometry(a * 2, b * 2, c * 2);
  const mat = new THREE.MeshPhongMaterial({
    color: bodyColor(i, cls, [a, b, c], py),
    shininess: 24,
  });
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cls !== 0;
  m.receiveShadow = true;
  scene.add(m);
  return m;
}

// rug: render-side decor only
const rug = new THREE.Mesh(
  new THREE.CircleGeometry(1.15, 28),
  new THREE.MeshPhongMaterial({ color: 0x5a3040, shininess: 2 })
);
rug.rotation.x = -Math.PI / 2;
rug.position.set(0, 0.004, 0.2);
rug.receiveShadow = true;
scene.add(rug);

// --- the cat: render-side body (physics stays a capsule) -------------------
const catParts = {};
let catGroup = null;
let catFacing = 0;
let catPrev = null;
function buildCat() {
  const g = new THREE.Group();
  const fur = new THREE.MeshPhongMaterial({ color: 0xff9d45, shininess: 8 });
  const dark = new THREE.MeshPhongMaterial({ color: 0xd97f2e, shininess: 8 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.24, 4, 10), fur);
  body.rotation.x = Math.PI / 2;
  body.position.y = 0.02;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), fur);
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
  catParts.mats = [fur, dark];
  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  scene.add(g);
  return g;
}

// --- laser visuals: core dot, oriented spill, glow sprite, beam ------------
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
const glowCanvas = document.createElement('canvas');
glowCanvas.width = glowCanvas.height = 64;
{
  const g2 = glowCanvas.getContext('2d');
  const grad = g2.createRadialGradient(32, 32, 2, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255,80,64,0.9)');
  grad.addColorStop(1, 'rgba(255,80,64,0)');
  g2.fillStyle = grad;
  g2.fillRect(0, 0, 64, 64);
}
const glow = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(glowCanvas),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
);
glow.scale.setScalar(0.4);
scene.add(glow);
const beamGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
const beam = new THREE.Line(
  beamGeo,
  new THREE.LineBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.5 })
);
scene.add(beam);
// debug: line-of-sight from cat eye to dot (green = seen, red = blocked)
const losGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
const losLine = new THREE.Line(losGeo, new THREE.LineBasicMaterial({ color: 0x44ff66 }));
losLine.visible = false;
scene.add(losLine);

// --- camera: fixed diorama vantage, grab-the-world arcball look ------------
const H_FOV = 62 * (Math.PI / 180);
const EYE = new THREE.Vector3(0, 2.0, -5.6);
let lookYaw = 0;
let lookPitch = -0.26;
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
  if (e.target.closest && e.target.closest('button')) return;
  if (e.clientY >= pad.getBoundingClientRect().top) return;
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

// --- aiming: belt-buckle emitter, focus-plane parallax ---------------------
const pad = document.getElementById('pad');
const thumbEl = document.getElementById('thumb');
let dotActive = false;
let aimScreen = null;
const raycaster = new THREE.Raycaster();
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
  const sx = r.left + fx * r.width;
  const sy = innerHeight * (0.08 + fy * 0.52);
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

// --- HUD + buttons ---------------------------------------------------------
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

function applyLookMode() {
  for (const m of meshes) {
    if (!m) continue;
    m.material.wireframe = debugLook;
  }
  losLine.visible = false;
  document.getElementById('dbg').classList.toggle('on', debugLook);
}
document.getElementById('reset').addEventListener('click', () => {
  lk.lk_free(sim);
  sim = lk.lk_new(SEED, 0);
  for (const m of meshes) if (m) scene.remove(m);
  meshes = [];
  if (catGroup) {
    scene.remove(catGroup);
    catGroup = null;
    catPrev = null;
    catFacing = 0;
  }
});
document.getElementById('dbg').addEventListener('click', () => {
  debugLook = !debugLook;
  applyLookMode();
});

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
      // debug: tint the cat by state so attention reads at a glance
      const tint = debugLook ? STATE_TINT[catState] ?? 0xffffff : 0xff9d45;
      catParts.mats[0].color.setHex(tint);
      continue;
    }
    if (!meshes[i]) {
      meshes[i] = meshFor(i, data[o + 1], data[o + 2], data[o + 3], data[o + 4], data[o], data[o + 6]);
      meshes[i].material.wireframe = debugLook;
    }
    const m = meshes[i];
    m.position.set(data[o + 5], data[o + 6], data[o + 7]);
    m.quaternion.set(data[o + 8], data[o + 9], data[o + 10], data[o + 11]);
    if (data[o] === 2 && data[o + 12]) m.material.emissive?.setHex(0x551111);
  }

  applyLook(Math.sin(now * 0.0006) * 0.012);

  const L = new Float32Array(lk.memory.buffer, lk.lk_laser(sim), 10);
  const lit = dotActive && L[0] > 0.5;
  dot.visible = spill.visible = beam.visible = glow.visible = lit;
  if (lit) {
    const n = new THREE.Vector3(L[4], L[5], L[6]);
    dot.position.set(L[1], L[2], L[3]).addScaledVector(n, 0.012);
    glow.position.copy(dot.position).addScaledVector(n, 0.05);
    glow.material.opacity = 0.35 + 0.5 * L[8];
    spill.position.set(L[1], L[2], L[3]).addScaledVector(n, 0.006);
    spill.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    spill.scale.setScalar(L[7]);
    spill.material.opacity = 0.15 + 0.35 * L[8];
    beamGeo.setFromPoints([beltWorld(), dot.position]);
  }
  // debug LOS line: cat eye -> dot, green when the cat can see it
  losLine.visible = debugLook && lit && !!catPos;
  if (losLine.visible) {
    losGeo.setFromPoints([
      new THREE.Vector3(catPos[0], catPos[1] + 0.16, catPos[2]),
      dot.position,
    ]);
    losLine.material.color.setHex(L[9] > 0.05 ? 0x44ff66 : 0xff4455);
  }

  scoreEl.textContent = lk.lk_score(sim);
  stateEl.textContent = debugLook
    ? `${STATE_NAMES[catState] ?? '?'} · vis ${(L[9] ?? 0).toFixed(2)}`
    : STATE_NAMES[catState] ?? '?';
  meterEl.style.width = `${(lk.lk_interest(sim) * 100).toFixed(0)}%`;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
stateEl.textContent = 'PAD = LASER · DRAG ROOM = LOOK';
requestAnimationFrame(frame);
