// Grey-box viewer: a thin adapter over the sim core's C ABI (ADR-0001
// thin-frontend discipline — no game logic lives here).
import * as THREE from './vendor/three.module.min.js';

const STATE_NAMES = ['IDLE', 'ALERT', 'STALK', 'WINDUP', 'POUNCE', 'RECOVER', 'BORED', 'ZOOMIES!', 'SEARCH', 'SWAT!'];
const AMB_NAMES = ['SIT', 'GROOM', 'LOAF', 'WANDER', 'STRETCH'];
const STATE_TINT = [0x9aa0b0, 0xffe86b, 0xffb347, 0xc792ea, 0xff5a5a, 0x8fd18f, 0x6f7480, 0x53c8d8, 0x4dd0e1, 0xff7ab8];
const FLOATS_PER_BODY = 15; // [.., flag, gloss, tint_r] — sim optics drive materials
const SEED = 42;

const wasm = await WebAssembly.instantiateStreaming(fetch('lk_core.wasm'), {});
const lk = wasm.instance.exports;

// settings: build knobs (cats, weight) rebuild the sim; live knobs stream in
const DEFAULTS = { cats: 1, weight: 1, strength: 1, gravity: 1, destruct: 1, quality: 2, shadows: true };
let cfg = { ...DEFAULTS };
try { cfg = { ...DEFAULTS, ...JSON.parse(localStorage.getItem('lk-settings') || '{}') }; } catch {}
function saveCfg() { try { localStorage.setItem('lk-settings', JSON.stringify(cfg)); } catch {} }
function newSim() {
  const s = lk.lk_new_cfg(SEED, 0, cfg.cats, cfg.weight);
  lk.lk_tune(s, cfg.strength, cfg.gravity, cfg.destruct);
  return s;
}
let sim = newSim();

// --- three scene -----------------------------------------------------------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, cfg.quality));
renderer.shadowMap.enabled = cfg.shadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x272138);
// fog kept far outside the room: camera sits ~5.6m out, far wall ~9m — the
// first pass started fog at 9 and drowned the back half on phone OLEDs.
scene.fog = new THREE.Fog(0x272138, 13, 26);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 50);
scene.add(new THREE.HemisphereLight(0xfff1de, 0x51436a, 1.25));
const sun = new THREE.DirectionalLight(0xffe3b8, 1.9);
sun.position.set(-2.5, 5.5, -2.0);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -4;
sun.shadow.camera.right = 4;
sun.shadow.camera.top = 4;
sun.shadow.camera.bottom = -4;
sun.shadow.camera.far = 14;
sun.shadow.bias = -0.002;
sun.castShadow = cfg.shadows;
scene.add(sun);
const lampGlow = new THREE.PointLight(0xffd9a0, 6, 6, 2);
lampGlow.position.set(2.2, 1.35, -1.6); // the floor lamp is "on"
scene.add(lampGlow);

// --- toon look: shared band ramp + material factory ------------------------
const ramp = new THREE.DataTexture(new Uint8Array([96, 160, 222, 255]), 4, 1, THREE.RedFormat);
ramp.minFilter = ramp.magFilter = THREE.NearestFilter;
ramp.needsUpdate = true;
function toonMat(color, opts = {}) {
  return new THREE.MeshToonMaterial({ color, gradientMap: ramp, ...opts });
}

function makeCanvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'));
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
// wood plank floor
const floorTex = makeCanvas(512, 512, (g) => {
  g.fillStyle = '#8a6a4d';
  g.fillRect(0, 0, 512, 512);
  for (let r = 0; r < 8; r++) {
    for (let cix = 0; cix < 4; cix++) {
      const off = (r % 2) * 64;
      const shade = 0.88 + ((r * 7 + cix * 13) % 5) * 0.05;
      g.fillStyle = `rgb(${Math.round(138 * shade)},${Math.round(106 * shade)},${Math.round(77 * shade)})`;
      g.fillRect(cix * 128 + off - 64, r * 64 + 2, 124, 60);
    }
  }
});
floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
floorTex.repeat.set(3, 3);
// neutral-toned detail maps: material color tints them (map * color)
const woodTex = makeCanvas(256, 256, (g) => {
  g.fillStyle = '#cfcfcf';
  g.fillRect(0, 0, 256, 256);
  for (let k = 0; k < 40; k++) {
    const y = (k * 61) % 256;
    g.strokeStyle = `rgba(90,80,70,${0.06 + (k % 3) * 0.05})`;
    g.lineWidth = 1 + (k % 3);
    g.beginPath();
    g.moveTo(0, y);
    g.bezierCurveTo(80, y + 6, 170, y - 6, 256, y + 3);
    g.stroke();
  }
});
woodTex.wrapS = woodTex.wrapT = THREE.RepeatWrapping;
const fabricTex = makeCanvas(128, 128, (g) => {
  g.fillStyle = '#d6d6d6';
  g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 3) {
    for (let x = 0; x < 128; x += 3) {
      const v = ((x * 7 + y * 13) % 17) / 17;
      g.fillStyle = `rgba(60,60,60,${0.05 + v * 0.1})`;
      g.fillRect(x + ((y / 3) % 2), y, 2, 2);
    }
  }
});
fabricTex.wrapS = fabricTex.wrapT = THREE.RepeatWrapping;
fabricTex.repeat.set(2, 2);
// small deterministic canvas "paintings" keyed by body index
function artTex(i) {
  let s = (i * 2654435761) >>> 0;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  return makeCanvas(128, 96, (g) => {
    g.fillStyle = `hsl(${Math.round(rnd() * 360)},45%,72%)`;
    g.fillRect(0, 0, 128, 96);
    for (let k = 0; k < 6; k++) {
      g.fillStyle = `hsl(${Math.round(rnd() * 360)},60%,${45 + Math.round(rnd() * 25)}%)`;
      if (rnd() < 0.5) {
        g.beginPath();
        g.arc(rnd() * 128, rnd() * 96, 8 + rnd() * 22, 0, 7);
        g.fill();
      } else {
        g.fillRect(rnd() * 100, rnd() * 70, 12 + rnd() * 40, 8 + rnd() * 30);
      }
    }
    g.strokeStyle = '#3a2c20';
    g.lineWidth = 8;
    g.strokeRect(0, 0, 128, 96);
  });
}

// deterministic per-body color variety within each class palette
function bodyColor(i, cls, dims, py) {
  const h = ((i * 2654435761) >>> 0) / 4294967296;
  if (cls === 3) return new THREE.Color(0xff9d45);
  if (cls === 0) return new THREE.Color(0x6b5f85);
  if (cls === 1) return new THREE.Color().setHSL(0.06 + h * 0.07, 0.42, 0.42 + h * 0.14);
  return new THREE.Color().setHSL((0.42 + h * 0.55) % 1, 0.62, 0.58);
}

let meshes = [];
let debugLook = false;
// Materials derive from the sim's optics: gloss (the value the laser's
// spill/glint math uses) picks the family — shiny phong, matte fabric, or
// toon wood/plastic. One source of truth for how surfaces behave.
function meshFor(i, shape, a, b, c, cls, py, gloss) {
  let geo;
  if (shape === 1) geo = new THREE.SphereGeometry(a, 14, 12);
  else if (shape === 2) geo = new THREE.CapsuleGeometry(b, a * 2, 4, 10);
  else geo = new THREE.BoxGeometry(a * 2, b * 2, c * 2);
  let mat;
  const color = bodyColor(i, cls, [a, b, c], py);
  const painting = cls === 0 && (a < 0.025 || c < 0.025) && Math.max(a, b, c) < 0.6 && py > 0.9;
  if (cls === 0 && a > 2 && b < 0.2) {
    mat = toonMat(0xffffff, { map: floorTex }); // the floor slab
  } else if (painting) {
    mat = toonMat(0xffffff, { map: artTex(i) });
  } else if (cls === 2 && a < 0.06 && b > 0.2) {
    mat = new THREE.MeshPhongMaterial({
      color: 0x1c2430, emissive: 0x0f2f3a, shininess: 120, specular: 0xaaccdd,
    }); // the TV screen
  } else if (cls !== 0 && gloss >= 0.5) {
    mat = new THREE.MeshPhongMaterial({
      color, shininess: 20 + gloss * 100, specular: 0xbbccdd,
    });
  } else if (cls !== 0 && gloss <= 0.1) {
    mat = toonMat(color, { map: fabricTex });
  } else if (cls === 1) {
    mat = toonMat(color, { map: woodTex });
  } else {
    mat = toonMat(color);
  }
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cls !== 0;
  m.receiveShadow = true;
  scene.add(m);
  return m;
}

// --- render-side room dressing (no collision, pure decor) ------------------
const decor = new THREE.Group();
{
  const trimMat = toonMat(0x4a3a55);
  for (const [x, z, w, d, ry] of [
    [0, 2.975, 6.1, 0.05, 0],
    [2.975, 0, 0.05, 5.95, 0],
    [-2.975, 0, 0.05, 5.95, 0],
  ]) {
    const bb = new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, d), trimMat);
    bb.position.set(x, 0.07, z);
    decor.add(bb);
  }
  // front edge of the diorama floor slab: make the cut look intentional
  const lip = new THREE.Mesh(new THREE.BoxGeometry(6.1, 0.06, 0.05), trimMat);
  lip.position.set(0, 0.03, -2.995);
  decor.add(lip);
  // window high on the left wall, over the sun's shoulder
  const win = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.95, 1.25), toonMat(0x3a2c20));
  win.add(frame);
  const pane = new THREE.Mesh(
    new THREE.PlaneGeometry(1.1, 0.8),
    new THREE.MeshBasicMaterial({ color: 0xffe7c2 })
  );
  pane.rotation.y = Math.PI / 2;
  pane.position.x = 0.035;
  win.add(pane);
  for (const mz of [-0.19, 0.19]) {
    const mull = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.85, 0.05), toonMat(0x3a2c20));
    mull.position.set(0.01, 0, mz);
    win.add(mull);
  }
  win.position.set(-3.02, 2.05, 0.6);
  decor.add(win);
  // rug under the seating area
  const rug = new THREE.Mesh(new THREE.CircleGeometry(1.15, 28), toonMat(0x7a4258));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(0, 0.006, 0.2);
  rug.receiveShadow = true;
  decor.add(rug);
}
scene.add(decor);

// --- the cats: render-side bodies (physics stays capsules) -----------------
const catViews = new Map(); // body index -> {group, legs, tailSegs, mats, prev, facing}
const CAT_COATS = [0xff9d45, 0x8a8f9e, 0xf5f0e6, 0x3d3a45]; // orange, grey, cream, black
const CAT_DARKS = [0xd97f2e, 0x6b7080, 0xd8cfc0, 0x2a2830];
function buildCat(k) {
  const view = { legs: [], tailSegs: [], prev: null, facing: 0, coat: CAT_COATS[k % 4] };
  const g = new THREE.Group();
  const fur = toonMat(view.coat);
  const dark = toonMat(CAT_DARKS[k % 4]);
  const white = toonMat(0xfff4e6);
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 12), fur);
  body.scale.set(1.05, 0.92, 1.5);
  body.position.y = 0.02;
  g.add(body);
  view.body = body;
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), white);
  chest.position.set(0, -0.03, 0.13);
  g.add(chest);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.088, 12, 10), fur);
  head.position.set(0, 0.11, 0.2);
  g.add(head);
  view.head = head;
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), white);
  muzzle.position.set(0, 0.085, 0.265);
  g.add(muzzle);
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.017, 8, 6), toonMat(0x27221c));
    eye.position.set(0.04 * sx, 0.14, 0.272);
    g.add(eye);
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.075, 4), dark);
    ear.position.set(0.053 * sx, 0.2, 0.185);
    ear.rotation.z = -0.25 * sx;
    g.add(ear);
  }
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.14, 0.035), dark);
    leg.position.set(0.065 * sx, -0.12, 0.11 * sz);
    leg.userData.phase = sz > 0 ? (sx > 0 ? 0 : Math.PI) : (sx > 0 ? Math.PI : 0);
    const paw = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 6), white);
    paw.position.y = -0.07;
    leg.add(paw);
    g.add(leg);
    view.legs.push(leg);
  }
  const tail = new THREE.Group();
  for (let s = 0; s < 4; s++) {
    const seg = new THREE.Mesh(new THREE.SphereGeometry(0.026 - s * 0.003, 8, 6), s === 3 ? dark : fur);
    tail.add(seg);
    view.tailSegs.push(seg);
  }
  tail.position.set(0, 0.08, -0.17);
  g.add(tail);
  view.mats = [fur, dark];
  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  scene.add(g);
  view.group = g;
  return view;
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
// the beam: a thin additive cylinder from the belt emitter to the dot
const beam = new THREE.Mesh(
  new THREE.CylinderGeometry(0.006, 0.006, 1, 6, 1, true),
  new THREE.MeshBasicMaterial({
    color: 0xff4444,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
);
scene.add(beam);
function placeBeam(from, to) {
  const d = to.clone().sub(from);
  const len = d.length();
  beam.position.copy(from).addScaledVector(d, 0.5);
  beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  beam.scale.set(1, len, 1);
}
// coherent-light life: speckle sparkles inside the spill + a star glint on
// glossy surfaces (surface gloss recovered from the sim's spill radius).
const sparkles = [];
for (let i = 0; i < 6; i++) {
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: glow.material.map, blending: THREE.AdditiveBlending, depthWrite: false,
    })
  );
  s.visible = false;
  scene.add(s);
  sparkles.push(s);
}
const glintTex = new THREE.CanvasTexture(
  (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    g.translate(32, 32);
    const ray = g.createLinearGradient(0, -30, 0, 30);
    ray.addColorStop(0, 'rgba(255,120,100,0)');
    ray.addColorStop(0.5, 'rgba(255,200,180,0.95)');
    ray.addColorStop(1, 'rgba(255,120,100,0)');
    g.fillStyle = ray;
    for (let k = 0; k < 2; k++) {
      g.fillRect(-1.6, -30, 3.2, 60);
      g.rotate(Math.PI / 2);
    }
    return c;
  })()
);
const glint = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glintTex, blending: THREE.AdditiveBlending, depthWrite: false,
  })
);
glint.visible = false;
scene.add(glint);
// debug: line-of-sight from cat eye to dot (green = seen, red = blocked)
const losGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
const losLine = new THREE.Line(losGeo, new THREE.LineBasicMaterial({ color: 0x44ff66 }));
losLine.visible = false;
scene.add(losLine);

// --- dust puffs on topples -------------------------------------------------
const puffTex = new THREE.CanvasTexture(
  (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(16, 16, 2, 16, 16, 15);
    grad.addColorStop(0, 'rgba(255,240,220,0.85)');
    grad.addColorStop(1, 'rgba(255,240,220,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 32, 32);
    return c;
  })()
);
const puffs = [];
for (let i = 0; i < 28; i++) {
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: puffTex, transparent: true, depthWrite: false })
  );
  s.visible = false;
  scene.add(s);
  puffs.push({ s, vel: new THREE.Vector3(), life: 0 });
}
let puffCursor = 0;
function burstPuffs(pos) {
  for (let k = 0; k < 6; k++) {
    const p = puffs[puffCursor];
    puffCursor = (puffCursor + 1) % puffs.length;
    p.s.position.copy(pos);
    p.s.visible = true;
    p.s.scale.setScalar(0.12 + Math.random() * 0.1);
    const a = Math.random() * Math.PI * 2;
    p.vel.set(Math.cos(a) * 0.7, 0.8 + Math.random() * 0.6, Math.sin(a) * 0.7);
    p.life = 0.5;
  }
}
function tickPuffs(dt) {
  for (const p of puffs) {
    if (!p.s.visible) continue;
    p.life -= dt;
    if (p.life <= 0) {
      p.s.visible = false;
      continue;
    }
    p.s.position.addScaledVector(p.vel, dt);
    p.vel.y -= 2.2 * dt;
    p.s.material.opacity = p.life * 1.6;
    p.s.scale.multiplyScalar(1 + dt * 1.5);
  }
}

// --- camera: fixed diorama vantage, grab-the-world arcball look ------------
const H_FOV = 62 * (Math.PI / 180);
const EYE = new THREE.Vector3(0, 2.0, -5.6);
const HOME_YAW = 0, HOME_PITCH = -0.26;
let lookYaw = HOME_YAW;
let lookPitch = HOME_PITCH;
const YAW_LIM = 0.9;
const PITCH_MIN = -0.8, PITCH_MAX = 0.15;
// bounded pinch zoom: scales the FOV (the vantage never translates —
// diorama doctrine holds). <1 = step back a little.
const ZOOM_MIN = 0.7, ZOOM_MAX = 2.4;
let zoom = 1;
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
  // zoom applies AFTER the aspect adaptation and its cap — otherwise tall
  // phones (already pinned at the cap) couldn't zoom out at all
  const vfov = 2 * Math.atan(Math.tan(H_FOV / 2) / Math.min(aspect, 1.2));
  const base = Math.min((105 * Math.PI) / 180, vfov);
  const vz = 2 * Math.atan(Math.tan(base / 2) / zoom);
  camera.fov = Math.min(120, (vz * 180) / Math.PI);
  camera.updateProjectionMatrix();
}
function setZoom(z) {
  zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
  resize();
}
addEventListener('resize', resize);
addEventListener(
  'wheel',
  (e) => {
    if (e.clientY >= pad.getBoundingClientRect().top) return;
    setZoom(zoom * (e.deltaY < 0 ? 1.08 : 1 / 1.08));
    e.preventDefault();
  },
  { passive: false }
);
resize();
applyLook();

const lookRay = new THREE.Raycaster();
const lookPts = new Map(); // pointerId -> [x, y] for look-area pointers
let grabDir = null;
let pinchDist = 0;
function pixelDir(x, y) {
  lookRay.setFromCamera(
    new THREE.Vector2((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1),
    camera
  );
  return lookRay.ray.direction.clone();
}
function pinchSpan() {
  const [a, b] = [...lookPts.values()];
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}
addEventListener('pointerdown', (e) => {
  if (e.target.closest && e.target.closest('button, #panel')) return;
  if (e.clientY >= pad.getBoundingClientRect().top) return;
  if (lookPts.size >= 2) return;
  lookPts.set(e.pointerId, [e.clientX, e.clientY]);
  if (lookPts.size === 1) {
    grabDir = pixelDir(e.clientX, e.clientY);
  } else {
    grabDir = null; // second finger: the gesture becomes a pinch
    pinchDist = pinchSpan();
  }
});
addEventListener('pointermove', (e) => {
  if (!lookPts.has(e.pointerId)) return;
  lookPts.set(e.pointerId, [e.clientX, e.clientY]);
  if (lookPts.size === 2) {
    const span = pinchSpan();
    if (pinchDist > 20) setZoom(zoom * (span / pinchDist));
    pinchDist = span;
    return;
  }
  if (!grabDir) return;
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
    if (!lookPts.delete(e.pointerId)) return;
    grabDir = null;
    if (lookPts.size === 1) {
      // pinch ended with one finger down: hand it back to the arcball
      const [p] = [...lookPts.values()];
      grabDir = pixelDir(p[0], p[1]);
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
function rebuildSim() {
  lk.lk_free(sim);
  sim = newSim();
  for (const m of meshes) if (m) scene.remove(m);
  meshes = [];
  for (const v of catViews.values()) scene.remove(v.group);
  catViews.clear();
}
document.getElementById('reset').addEventListener('click', () => {
  rebuildSim();
  // reset the view too — a stranded look with no way home was a playtest trap
  lookYaw = HOME_YAW;
  lookPitch = HOME_PITCH;
  setZoom(1);
  applyLook();
});
document.getElementById('dbg').addEventListener('click', () => {
  debugLook = !debugLook;
  applyLookMode();
});
document.getElementById('toss').addEventListener('click', () => {
  lk.lk_cat_toss(sim); // edge-fall rescue: lob the cat back in over the front
});

// --- settings panel --------------------------------------------------------
const panel = document.getElementById('panel');
document.getElementById('gear').addEventListener('click', () => panel.classList.toggle('open'));
function bindSlider(id, key, fmt, onChange) {
  const el = document.getElementById('s-' + id);
  const val = document.getElementById('v-' + id);
  el.value = cfg[key];
  val.textContent = fmt(cfg[key]);
  el.addEventListener('input', () => {
    cfg[key] = parseFloat(el.value);
    val.textContent = fmt(cfg[key]);
    saveCfg();
    if (onChange) onChange(cfg[key]);
  });
}
const retune = () => lk.lk_tune(sim, cfg.strength, cfg.gravity, cfg.destruct);
bindSlider('cats', 'cats', (v) => `${v}`, () => rebuildSim());
bindSlider('weight', 'weight', (v) => `${v.toFixed(2)}x`, () => rebuildSim());
bindSlider('strength', 'strength', (v) => `${v.toFixed(2)}x`, retune);
bindSlider('gravity', 'gravity', (v) => `${v.toFixed(2)}x`, retune);
bindSlider('destruct', 'destruct', (v) => (v === 0 ? 'OFF' : `${v.toFixed(1)}x`), retune);
bindSlider('quality', 'quality', (v) => v.toFixed(2), (v) =>
  renderer.setPixelRatio(Math.min(devicePixelRatio, v))
);
const shadowsEl = document.getElementById('s-shadows');
shadowsEl.checked = cfg.shadows;
shadowsEl.addEventListener('change', () => {
  cfg.shadows = shadowsEl.checked;
  saveCfg();
  renderer.shadowMap.enabled = cfg.shadows;
  sun.castShadow = cfg.shadows;
  scene.traverse((o) => {
    if (o.isMesh) o.material.needsUpdate = true;
  });
});

// --- fixed-tick loop -------------------------------------------------------
let last = performance.now();
let acc = 0;
const DT = 1000 / 60;
function frame(now) {
  const frameDt = Math.min(now - last, 100);
  acc = Math.min(acc + frameDt, 100);
  last = now;
  updateLaserRay();
  while (acc >= DT) {
    lk.lk_step(sim, laserRay.ox, laserRay.oy, laserRay.oz, laserRay.dx, laserRay.dy, laserRay.dz, dotActive ? 1 : 0);
    const n = lk.lk_event_count(sim);
    for (let i = 0; i < n; i++) {
      const code = lk.lk_event(sim, i);
      const ev = code >>> 24;
      if (ev === 3 || ev === 4) {
        const chain = (code >> 20) & 0xf;
        const label = ev === 4 ? 'CRASH ' : '';
        popScore(`${label}+${code & 0xfff}${chain > 1 ? ` x${chain}` : ''}`);
        const prop = (code >>> 12) & 0xff;
        if (meshes[prop]) {
          burstPuffs(meshes[prop].position);
          if (ev === 4) burstPuffs(meshes[prop].position); // double burst for a break
        }
      } else if (ev === 5) {
        const piece = (code >>> 12) & 0xff;
        popScore('scratch!');
        if (meshes[piece]) burstPuffs(meshes[piece].position);
      }
    }
    acc -= DT;
  }

  const count = lk.lk_body_count(sim);
  const ptr = lk.lk_render_data(sim);
  const data = new Float32Array(lk.memory.buffer, ptr, count * FLOATS_PER_BODY);
  const catState = lk.lk_cat_state(sim);
  let catPos = null;
  let hudAct = -1;
  let catOrdinal = 0;
  for (let i = 0; i < count; i++) {
    const o = i * FLOATS_PER_BODY;
    if (data[o] === 3) {
      const k = catOrdinal++;
      let view = catViews.get(i);
      if (!view) {
        view = buildCat(k);
        catViews.set(i, view);
      }
      const x = data[o + 5], y = data[o + 6], z = data[o + 7];
      const f = data[o + 12] | 0; // per-cat: state in the low nibble, ambient act above
      const st = f & 15;
      const act = f >> 4;
      if (!catPos) {
        catPos = [x, y, z]; // cat 0: HUD + debug LOS line
        hudAct = st === 0 ? act : -1;
      }
      // ambient poses: idle cats live their act; bored cats sulk in a sit;
      // stalking cats with the creep hint drop into the hunt-walk crouch
      const pose = st === 6 ? 0 : st === 0 && act !== 3 ? act : -1;
      const crouch = st === 2 && act === 1;
      if (view.prev) {
        const vx = x - view.prev[0], vz = z - view.prev[2];
        const sp = Math.hypot(vx, vz) * 60;
        let leanTarget = 0;
        if (sp > 0.25) {
          const target = Math.atan2(vx, vz);
          let d = target - view.facing;
          while (d > Math.PI) d -= 2 * Math.PI;
          while (d < -Math.PI) d += 2 * Math.PI;
          view.facing += d * 0.2;
          leanTarget = Math.max(-0.32, Math.min(0.32, d * 2.2)); // bank into turns
        }
        view.lean = (view.lean ?? 0) + (leanTarget - (view.lean ?? 0)) * 0.15;
        const swing = Math.min(0.7, sp * 0.22);
        for (let li = 0; li < view.legs.length; li++) {
          const leg = view.legs[li];
          if (st === 9 && li < 2) {
            // swat flurry: front paws machine-gun forward, raised
            leg.rotation.x = -0.9 + Math.sin(now * 0.09 + (li ? Math.PI : 0)) * 0.7;
          } else if (st === 9) {
            leg.rotation.x = 0.25; // haunches planted
          } else if (crouch) {
            // hunt-walk: bent legs, slow deliberate steps
            leg.rotation.x = 0.35 + Math.sin(now * 0.008 + leg.userData.phase) * 0.25;
          } else if (pose === 0) {
            leg.rotation.x = li < 2 ? 0 : 1.3; // sit: haunches folded
          } else if (pose === 1) {
            leg.rotation.x = li === 0 ? -0.9 : li < 2 ? 0 : 1.3; // groom: one paw up
          } else if (pose === 2) {
            leg.rotation.x = 1.5; // loaf: everything tucked
          } else if (pose === 4) {
            leg.rotation.x = li < 2 ? -1.1 : 0; // stretch: front legs long
          } else {
            leg.rotation.x = Math.sin(now * 0.02 + leg.userData.phase) * swing;
          }
        }
        // tail: idle sway, hard lash during windup and swat
        const lash =
          st === 3 || st === 9 ? Math.sin(now * 0.05) * 0.9 : Math.sin(now * 0.004) * 0.3;
        for (let s = 0; s < view.tailSegs.length; s++) {
          const t = (s + 1) / view.tailSegs.length;
          view.tailSegs[s].position.set(
            Math.sin(lash * t) * 0.14 * t,
            0.1 * t * t + 0.02,
            -0.16 * t
          );
        }
        // groom head-bob; loaf hunkers down; hunt-walk slinks low
        view.head.position.y = pose === 1 ? 0.1 + Math.sin(now * 0.025) * 0.02 : crouch ? 0.06 : 0.11;
        view.head.position.z = pose === 1 ? 0.17 : crouch ? 0.24 : 0.2;
        view.body.position.y = pose === 2 || crouch ? -0.02 : 0.02;
      }
      view.prev = [x, y, z];
      view.group.position.set(x, y, z);
      view.group.rotation.x =
        pose === 0 || pose === 1 ? -0.2 : pose === 4 ? 0.26 : crouch ? 0.07 : st === 3 ? 0.14 : 0;
      // windup: butt up, wiggling — the pounce telegraph
      view.group.rotation.y = view.facing + (st === 3 ? Math.sin(now * 0.045) * 0.24 : 0);
      view.group.rotation.z = view.lean ?? 0;
      // debug: tint each cat by its own state so attention reads at a glance
      const tint = debugLook ? STATE_TINT[st] ?? 0xffffff : view.coat;
      view.mats[0].color.setHex(tint);
      continue;
    }
    if (data[o] === 4) {
      // tombstone: the body shattered — hide its mesh, shards have their own
      if (meshes[i]) meshes[i].visible = false;
      continue;
    }
    if (!meshes[i]) {
      meshes[i] = meshFor(i, data[o + 1], data[o + 2], data[o + 3], data[o + 4], data[o], data[o + 6], data[o + 13]);
      meshes[i].material.wireframe = debugLook;
    }
    const m = meshes[i];
    m.position.set(data[o + 5], data[o + 6], data[o + 7]);
    m.quaternion.set(data[o + 8], data[o + 9], data[o + 10], data[o + 11]);
    if (data[o] === 2 && data[o + 12]) m.material.emissive?.setHex(0x551111);
    if (data[o] === 1) {
      // scratch wear: each stage mats and darkens the fabric a little
      const wear = data[o + 12] | 0;
      if ((m.userData.wear | 0) !== wear) {
        for (let w = m.userData.wear | 0; w < wear; w++) m.material.color.multiplyScalar(0.8);
        m.userData.wear = wear;
      }
    }
  }

  tickPuffs(frameDt / 1000);
  applyLook(Math.sin(now * 0.0006) * 0.012);

  const L = new Float32Array(lk.memory.buffer, lk.lk_laser(sim), 10);
  const lit = dotActive && L[0] > 0.5;
  dot.visible = spill.visible = beam.visible = glow.visible = lit;
  if (lit) {
    const n = new THREE.Vector3(L[4], L[5], L[6]);
    dot.position.set(L[1], L[2], L[3]).addScaledVector(n, 0.012);
    // coherent shimmer: speckle-style flicker on the glow + jittering
    // sparkles inside the spill; a star glint blooms on glossy surfaces
    const flicker = 0.82 + Math.random() * 0.36;
    dot.scale.setScalar(0.94 + Math.random() * 0.12);
    glow.position.copy(dot.position).addScaledVector(n, 0.05);
    glow.material.opacity = (0.35 + 0.5 * L[8]) * flicker;
    spill.position.set(L[1], L[2], L[3]).addScaledVector(n, 0.006);
    spill.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    spill.scale.setScalar(L[7]);
    spill.material.opacity = (0.15 + 0.35 * L[8]) * (0.9 + 0.2 * flicker);
    const helper = Math.abs(n.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const t1 = new THREE.Vector3().crossVectors(n, helper).normalize();
    const t2 = new THREE.Vector3().crossVectors(n, t1);
    for (const s of sparkles) {
      if (Math.random() < 0.55) {
        const r = Math.random() * L[7] * 0.9;
        const a = Math.random() * Math.PI * 2;
        s.position
          .copy(dot.position)
          .addScaledVector(t1, Math.cos(a) * r)
          .addScaledVector(t2, Math.sin(a) * r)
          .addScaledVector(n, 0.02);
        s.scale.setScalar(0.02 + Math.random() * 0.045);
        s.material.opacity = 0.4 + Math.random() * 0.6;
        s.visible = true;
      } else {
        s.visible = false;
      }
    }
    // surface gloss back out of the sim's spill law: spill = 0.05 + (1-g)*0.15
    const surfGloss = Math.min(1, Math.max(0, 1 - (L[7] - 0.05) / 0.15));
    glint.visible = surfGloss > 0.55;
    if (glint.visible) {
      glint.position.copy(dot.position).addScaledVector(n, 0.03);
      glint.scale.setScalar((0.09 + 0.22 * surfGloss) * (0.8 + 0.4 * Math.random()));
      glint.material.rotation = now * 0.0012;
      glint.material.opacity = 0.6 + 0.4 * L[8];
    }
    placeBeam(beltWorld(), dot.position);
  } else {
    glint.visible = false;
    for (const s of sparkles) s.visible = false;
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
  const stName =
    catState === 0 && hudAct >= 0
      ? `IDLE·${AMB_NAMES[hudAct] ?? '?'}`
      : STATE_NAMES[catState] ?? '?';
  stateEl.textContent = debugLook ? `${stName} · vis ${(L[9] ?? 0).toFixed(2)}` : stName;
  meterEl.style.width = `${(lk.lk_interest(sim) * 100).toFixed(0)}%`;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
stateEl.textContent = 'PAD = LASER · DRAG ROOM = LOOK';
requestAnimationFrame(frame);

// test hook (PewPew pattern): lets an automated driver aim at world points
window.__lk = {
  aimPad(wx, wy, wz) {
    const v = new THREE.Vector3(wx, wy, wz).project(camera);
    const sx = ((v.x + 1) / 2) * innerWidth;
    const sy = ((-v.y + 1) / 2) * innerHeight;
    const r = pad.getBoundingClientRect();
    const fx = Math.max(0, Math.min(1, (sx - r.left) / r.width));
    const fy = Math.max(0, Math.min(1, (sy / innerHeight - 0.08) / 0.52));
    return [r.left + fx * r.width, r.top + fy * r.height];
  },
  score: () => lk.lk_score(sim),
  laser: () => [...new Float32Array(lk.memory.buffer, lk.lk_laser(sim), 10)],
  cat: () => {
    const count = lk.lk_body_count(sim);
    const ptr = lk.lk_render_data(sim);
    const d = new Float32Array(lk.memory.buffer, ptr, count * FLOATS_PER_BODY);
    for (let i = 0; i < count; i++) {
      const o = i * FLOATS_PER_BODY;
      if (d[o] === 3) return [d[o + 5], d[o + 6], d[o + 7], d[o + 12]];
    }
    return null;
  },
};
