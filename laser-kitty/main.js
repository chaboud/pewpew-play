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
const DEFAULTS = { cats: 1, weight: 1, strength: 1, gravity: 1, destruct: 0.3, room: 0, quality: 2, shadows: true, sound: true, pops: false };
let cfg = { ...DEFAULTS };
try { cfg = { ...DEFAULTS, ...JSON.parse(localStorage.getItem('lk-settings') || '{}') }; } catch {}
function saveCfg() { try { localStorage.setItem('lk-settings', JSON.stringify(cfg)); } catch {} }
function newSim() {
  const s = lk.lk_new_cfg(SEED, 0, cfg.cats, cfg.weight, cfg.room | 0);
  lk.lk_tune(s, cfg.strength, cfg.gravity, cfg.destruct);
  return s;
}
let sim = newSim();
let roomHX = 3, roomHZ = 3;

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
// bare concrete for the garage: mottle, hairline cracks, expansion joints
const concreteTex = makeCanvas(512, 512, (g) => {
  g.fillStyle = '#9a968f';
  g.fillRect(0, 0, 512, 512);
  let s = 12345;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let k = 0; k < 900; k++) {
    g.fillStyle = `rgba(${110 + Math.floor(rnd() * 40)},${106 + Math.floor(rnd() * 38)},${100 + Math.floor(rnd() * 36)},0.25)`;
    g.fillRect(rnd() * 512, rnd() * 512, 2 + rnd() * 9, 2 + rnd() * 9);
  }
  g.strokeStyle = 'rgba(70,66,62,0.55)';
  g.lineWidth = 3;
  for (const q of [170, 340]) {
    g.beginPath(); g.moveTo(q, 0); g.lineTo(q, 512); g.stroke();
    g.beginPath(); g.moveTo(0, q); g.lineTo(512, q); g.stroke();
  }
  g.strokeStyle = 'rgba(80,76,70,0.35)';
  g.lineWidth = 1;
  for (let k = 0; k < 7; k++) {
    g.beginPath();
    let x = rnd() * 512, y = rnd() * 512;
    g.moveTo(x, y);
    for (let j = 0; j < 5; j++) { x += (rnd() - 0.5) * 90; y += (rnd() - 0.5) * 90; g.lineTo(x, y); }
    g.stroke();
  }
});
concreteTex.wrapS = concreteTex.wrapT = THREE.RepeatWrapping;
// cafe checkerboard: cream and charcoal marble checks
const checkerTex = makeCanvas(256, 256, (g) => {
  for (let r = 0; r < 8; r++) {
    for (let c2 = 0; c2 < 8; c2++) {
      g.fillStyle = (r + c2) % 2 ? '#2e2b33' : '#e8e2d4';
      g.fillRect(c2 * 32, r * 32, 32, 32);
      g.fillStyle = (r + c2) % 2 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
      g.fillRect(c2 * 32 + 4 * ((r * 7 + c2) % 5), r * 32 + 6, 10, 5);
    }
  }
});
checkerTex.wrapS = checkerTex.wrapT = THREE.RepeatWrapping;
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
// crystal optics: a STATIC procedural cubemap with refraction mapping —
// live CubeCamera refraction would cost six extra scene renders a frame,
// which phones don't have; a tiny baked "room impression" (warm floor,
// dim walls, one bright window streak) bent through CubeRefractionMapping
// reads as glass interior for free. Glint stays on the specular highlight.
const envCube = (() => {
  const faces = [];
  for (let f = 0; f < 6; f++) {
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, 32);
    if (f === 2) {
      grad.addColorStop(0, '#8d84a8'); // up: ceiling haze
      grad.addColorStop(1, '#6b6288');
    } else if (f === 3) {
      grad.addColorStop(0, '#7a5a40'); // down: warm floor
      grad.addColorStop(1, '#5a4130');
    } else {
      grad.addColorStop(0, '#6e6590'); // walls
      grad.addColorStop(1, '#4a4260');
    }
    g.fillStyle = grad;
    g.fillRect(0, 0, 32, 32);
    if (f === 0) {
      g.fillStyle = '#ffe7c2'; // the window streak, one face only
      g.fillRect(18, 6, 9, 14);
    }
    faces.push(c);
  }
  const t = new THREE.CubeTexture(faces);
  t.mapping = THREE.CubeRefractionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
})();
function crystalMat() {
  return new THREE.MeshPhongMaterial({
    color: 0xeef4ff, envMap: envCube, refractionRatio: 0.92,
    combine: THREE.MixOperation, reflectivity: 0.75,
    shininess: 160, specular: 0xffffff, transparent: true, opacity: 0.88,
  });
}
// Tiffany stained-glass shade: jewel panes with leaded lines, lit warm
const tiffanyTex = makeCanvas(128, 64, (g) => {
  const jewels = ['#c94f3f', '#3f7ac9', '#3fa060', '#d8a03a', '#8a4fc9', '#c9743f'];
  for (let p = 0; p < 8; p++) {
    g.fillStyle = jewels[p % jewels.length];
    g.fillRect(p * 16, 0, 16, 40);
    g.fillStyle = jewels[(p + 3) % jewels.length];
    g.fillRect(p * 16, 40, 16, 24);
  }
  g.strokeStyle = '#3a3430';
  g.lineWidth = 3;
  for (let p = 0; p <= 8; p++) {
    g.beginPath(); g.moveTo(p * 16, 0); g.lineTo(p * 16, 64); g.stroke();
  }
  g.beginPath(); g.moveTo(0, 40); g.lineTo(128, 40); g.stroke();
  g.strokeRect(0, 1, 128, 62);
});
tiffanyTex.wrapS = THREE.RepeatWrapping;
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
// screen shake: feedback punctuation, not camera motion — decays fast
let shake = 0;
// position-hashed radial displacement: cheap fur/fuzz/foliage. Hashing on
// position (not index) keeps UV-seam vertices together — no cracks.
function roughen(geo, amt) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const h = Math.sin(p.getX(i) * 93.9 + p.getY(i) * 47.2 + p.getZ(i) * 71.7) * 43758.55;
    const s = 1 + ((h - Math.floor(h)) * 2 - 1) * amt;
    p.setXYZ(i, p.getX(i) * s, p.getY(i) * s, p.getZ(i) * s);
  }
  geo.computeVertexNormals();
  return geo;
}
const ease = (c, t, a) => c + (t - c) * a;
function eachMat(m, fn) {
  m.traverse((o) => {
    if (o.isMesh && o.material) fn(o.material);
  });
}
// Materials derive from the sim's optics: gloss (the value the laser's
// spill/glint math uses) picks the family — shiny phong, matte fabric, or
// toon wood/plastic. One source of truth for how surfaces behave.
function meshFor(i, shape, a, b, c, cls, py, gloss) {
  const h = ((i * 2654435761) >>> 0) / 4294967296;
  const color = bodyColor(i, cls, [a, b, c], py);
  let m = null;
  // decorated bodies: recognized by their sim dims, built as Groups (the
  // render loop drives position/quaternion the same way)
  if (cls === 2 && shape === 0 && Math.abs(a - 0.09) < 0.005 && Math.abs(b - 0.16) < 0.005) {
    // floor speaker: cabinet + woofer/tweeter cones on the front face
    m = new THREE.Group();
    const cab = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x3a3540));
    m.add(cab);
    for (const [r, y] of [[0.055, -0.06], [0.028, 0.06]]) {
      const cone = new THREE.Mesh(new THREE.CircleGeometry(r, 16), toonMat(0x181520));
      cone.position.set(0, y, -c - 0.002);
      cone.rotation.y = Math.PI;
      m.add(cone);
      const rim = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.008, 16), toonMat(0x6b6572));
      rim.position.set(0, y, -c - 0.003);
      rim.rotation.y = Math.PI;
      m.add(rim);
    }
  } else if (cls === 2 && a < 0.06 && b > 0.2) {
    // TV: bezel + inset glossy screen
    m = new THREE.Group();
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x2a2732));
    m.add(bezel);
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(c * 1.8, b * 1.8),
      new THREE.MeshPhongMaterial({ color: 0x101a26, emissive: 0x11323e, shininess: 130, specular: 0xaaccdd })
    );
    screen.position.x = a + 0.002;
    screen.rotation.y = Math.PI / 2;
    m.add(screen);
  } else if (cls === 0 && shape === 0 && py > 2 && Math.abs(a - 0.32) < 0.01) {
    // chandelier: the sim's hub slab becomes a brass ring, arms, candles
    m = new THREE.Group();
    const brass = new THREE.MeshPhongMaterial({ color: 0xb08d3e, shininess: 90, specular: 0xffe8b0 });
    const flame = new THREE.MeshBasicMaterial({ color: 0xffd98a });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(a * 0.85, 0.022, 8, 24), brass);
    ring.rotation.x = Math.PI / 2;
    m.add(ring);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 1.0, 8), brass);
    stem.position.y = 0.52;
    m.add(stem);
    for (let k = 0; k < 6; k++) {
      const ang = (k / 6) * Math.PI * 2;
      const ax = Math.cos(ang) * a * 0.85, az = Math.sin(ang) * a * 0.85;
      const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.09, 6), toonMat(0xf2ead8));
      candle.position.set(ax, 0.07, az);
      m.add(candle);
      const fl = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5), flame);
      fl.position.set(ax, 0.13, az);
      m.add(fl);
      const drop = new THREE.Mesh(new THREE.OctahedronGeometry(0.022), crystalMat());
      drop.position.set(ax, -0.06, az);
      m.add(drop);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.148) < 0.003 && Math.abs(b - 0.019) < 0.003 && Math.abs(c - 0.118) < 0.004) {
    // turntable plinth: brushed-silver deck, pitch strip, start button
    m = new THREE.Group();
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      new THREE.MeshPhongMaterial({ color: 0x9ea4ad, shininess: 70, specular: 0xdde4ee })
    );
    m.add(deck);
    const pitch = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.004, 0.05), toonMat(0x2a2730));
    pitch.position.set(0.115, b + 0.002, 0.055);
    m.add(pitch);
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 8), toonMat(0xc0c6cf));
    btn.position.set(-0.12, b + 0.002, 0.095);
    m.add(btn);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.072) < 0.003 && Math.abs(b - 0.013) < 0.002) {
    // turntable platter: strobe-dotted rim, record, label, spindle
    m = new THREE.Group();
    const platter = new THREE.Mesh(
      new THREE.CylinderGeometry(a, a, b * 2, 24),
      new THREE.MeshPhongMaterial({ color: 0xb9bfc8, shininess: 80, specular: 0xe8eef8 })
    );
    m.add(platter);
    const record = new THREE.Mesh(
      new THREE.CylinderGeometry(a * 0.94, a * 0.94, 0.004, 24),
      new THREE.MeshPhongMaterial({ color: 0x17151c, shininess: 120, specular: 0x8890a0 })
    );
    record.position.y = b + 0.002;
    m.add(record);
    const label = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.3, a * 0.3, 0.005, 16), toonMat(0xd8a03a));
    label.position.y = b + 0.003;
    m.add(label);
    const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.014, 8), toonMat(0xc0c6cf));
    spindle.position.y = b + 0.007;
    m.add(spindle);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.013) < 0.002 && Math.abs(c - 0.053) < 0.003) {
    // tonearm: S-arm tube, headshell, counterweight
    m = new THREE.Group();
    const armMat = new THREE.MeshPhongMaterial({ color: 0xaab0ba, shininess: 90, specular: 0xe8eef8 });
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, c * 1.8, 8), armMat);
    tube.rotation.x = Math.PI / 2;
    m.add(tube);
    const shell = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.008, 0.02), toonMat(0x2a2730));
    shell.position.set(0, -0.002, -c * 0.9);
    m.add(shell);
    const weight = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.014, 10), armMat);
    weight.rotation.x = Math.PI / 2;
    weight.position.z = c * 0.85;
    m.add(weight);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.055) < 0.003 && Math.abs(b - 0.11) < 0.004) {
    // Tiffany lamp: bronze base + stem, stained-glass cone shade, warm glow
    m = new THREE.Group();
    const bronze = new THREE.MeshPhongMaterial({ color: 0x6e5230, shininess: 50, specular: 0xc9a86a });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.036, 0.02, 12), bronze);
    base.position.y = -b + 0.01;
    m.add(base);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.009, 0.1, 8), bronze);
    stem.position.y = -b + 0.07;
    m.add(stem);
    const shade = new THREE.Mesh(
      new THREE.CylinderGeometry(0.014, 0.062, 0.075, 16, 1, true),
      new THREE.MeshPhongMaterial({
        map: tiffanyTex, emissive: 0xa87848, emissiveMap: tiffanyTex,
        emissiveIntensity: 0.55, shininess: 60, specular: 0xfff0d0, side: THREE.DoubleSide,
      })
    );
    shade.position.y = b - 0.045;
    m.add(shade);
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), bronze);
    finial.position.y = b - 0.004;
    m.add(finial);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.02, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xffe2b0 })
    );
    glow.position.y = b - 0.06;
    m.add(glow);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.05) < 0.0025 && Math.abs(b - 0.014) < 0.0025) {
    // game controller: body, angled grips, four face buttons, d-pad
    m = new THREE.Group();
    const shellMat = toonMat(0x2e2b36);
    const body = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 1.6), shellMat);
    m.add(body);
    for (const gx of [-1, 1]) {
      const grip = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.02, 3, 8), shellMat);
      grip.position.set(gx * a * 0.72, 0, c * 0.45);
      grip.rotation.x = 1.1;
      grip.rotation.z = gx * 0.35;
      m.add(grip);
    }
    const btnCols = [0x58c470, 0xd8534f, 0x4f7ed8, 0xd8b04f];
    for (let k = 0; k < 4; k++) {
      const ang = (k / 4) * Math.PI * 2;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.0045, 6, 5), new THREE.MeshBasicMaterial({ color: btnCols[k] }));
      dot.position.set(a * 0.55 + Math.cos(ang) * 0.009, b, -c * 0.25 + Math.sin(ang) * 0.009);
      m.add(dot);
    }
    const dpad = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.004, 0.014), toonMat(0x4a4655));
    dpad.position.set(-a * 0.55, b, -c * 0.25);
    m.add(dpad);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.025) < 0.002 && Math.abs(b - 0.03) < 0.002 && Math.abs(c - 0.025) < 0.002) {
    // chandelier crystal bauble: refractive glass teardrop
    m = new THREE.Group();
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.032), crystalMat());
    m.add(gem);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.72) < 0.005 && Math.abs(b - 0.2) < 0.005) {
    // car body: cherry paint, chrome bumpers, lights, grille
    m = new THREE.Group();
    const paint = new THREE.MeshPhongMaterial({ color: 0xb03028, shininess: 120, specular: 0xffd8cc });
    const chrome = new THREE.MeshPhongMaterial({ color: 0xc8ccd4, shininess: 140, specular: 0xffffff });
    const body = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), paint);
    m.add(body);
    for (const bz of [c, -c]) {
      const bump = new THREE.Mesh(new THREE.BoxGeometry(a * 1.9, 0.05, 0.03), chrome);
      bump.position.set(0, -b + 0.06, bz + 0.012 * Math.sign(bz));
      m.add(bump);
    }
    for (const sx of [-0.45, 0.45]) {
      const head = new THREE.Mesh(new THREE.CircleGeometry(0.045, 10), new THREE.MeshBasicMaterial({ color: 0xffeebb }));
      head.position.set(sx, 0.02, c + 0.002);
      m.add(head);
      const tail = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.04), new THREE.MeshBasicMaterial({ color: 0xc22b22 }));
      tail.rotation.y = Math.PI;
      tail.position.set(sx, 0.02, -c - 0.002);
      m.add(tail);
    }
    const grille = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.07), toonMat(0x3a3630));
    grille.position.set(0, 0.0, c + 0.001);
    m.add(grille);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.55) < 0.005 && Math.abs(b - 0.16) < 0.005 && Math.abs(c - 0.45) < 0.005) {
    // car cabin: painted roof, wrap-around glass
    m = new THREE.Group();
    const paint = new THREE.MeshPhongMaterial({ color: 0xb03028, shininess: 120, specular: 0xffd8cc });
    const cab = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), paint);
    m.add(cab);
    const glassMat = new THREE.MeshPhongMaterial({ color: 0x2b3644, shininess: 150, specular: 0xaaccee });
    for (const [w, h, x, z, ry] of [
      [a * 1.7, b * 1.5, 0, c + 0.002, 0], [a * 1.7, b * 1.5, 0, -c - 0.002, Math.PI],
      [c * 1.7, b * 1.5, a + 0.002, 0, Math.PI / 2], [c * 1.7, b * 1.5, -a - 0.002, 0, -Math.PI / 2],
    ]) {
      const gl = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glassMat);
      gl.position.set(x, 0.01, z);
      gl.rotation.y = ry;
      m.add(gl);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.06) < 0.004 && Math.abs(b - 0.16) < 0.004 && Math.abs(c - 0.16) < 0.004) {
    // car wheel: rubber cylinder + hubcap, axis along x
    m = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(b, b, a * 2, 18), toonMat(0x2b2926));
    tire.rotation.z = Math.PI / 2;
    m.add(tire);
    for (const hx of [a + 0.002, -a - 0.002]) {
      const cap = new THREE.Mesh(
        new THREE.CircleGeometry(b * 0.55, 12),
        new THREE.MeshPhongMaterial({ color: 0xc8ccd4, shininess: 120, specular: 0xffffff })
      );
      cap.rotation.y = hx > 0 ? Math.PI / 2 : -Math.PI / 2;
      cap.position.x = hx;
      m.add(cap);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.11) < 0.004 && Math.abs(b - 0.045) < 0.004) {
    // toolbox: red steel chest with a latch
    m = new THREE.Group();
    const red = new THREE.MeshPhongMaterial({ color: 0xa8322a, shininess: 60, specular: 0xddc0b8 });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), red));
    const latch = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.006), toonMat(0xc8ccd4));
    latch.position.set(0, 0, -c - 0.004);
    m.add(latch);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.07) < 0.003 && Math.abs(c - 0.05) < 0.003) {
    // paint can: steel cylinder, colored lid, a drip down the side
    m = new THREE.Group();
    const canCol = new THREE.Color().setHSL(h, 0.6, 0.5);
    const tin = new THREE.Mesh(
      new THREE.CylinderGeometry(a, a, b * 2, 14),
      new THREE.MeshPhongMaterial({ color: 0x9aa0a8, shininess: 70, specular: 0xdde4ee })
    );
    m.add(tin);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.86, a * 0.86, 0.008, 14), toonMat(canCol));
    lid.position.y = b + 0.003;
    m.add(lid);
    const drip = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 0.05), toonMat(canCol));
    drip.position.set(0.014, b - 0.032, a + 0.002);
    m.add(drip);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.19) < 0.004 && Math.abs(b - 0.055) < 0.004) {
    // spare tire: fat torus with a hub hole
    m = new THREE.Group();
    const t = new THREE.Mesh(new THREE.TorusGeometry(a * 0.62, b * 0.95, 10, 20), toonMat(0x2b2926));
    t.rotation.x = Math.PI / 2;
    m.add(t);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.028) < 0.003 && Math.abs(b - 0.52) < 0.01 && Math.abs(c - 0.26) < 0.01) {
    // apartment door: panels + brass knob (break it down; knobs later)
    m = new THREE.Group();
    const slab = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x8a6a48, { map: woodTex }));
    m.add(slab);
    for (const py2 of [0.16, -0.2]) {
      for (const sx2 of [-1, 1]) {
        const panel = new THREE.Mesh(new THREE.PlaneGeometry(c * 1.6, py2 > 0 ? 0.3 : 0.36), toonMat(0x76583a));
        panel.rotation.y = sx2 > 0 ? Math.PI / 2 : -Math.PI / 2;
        panel.position.set(sx2 * (a + 0.002), py2, 0);
        m.add(panel);
      }
    }
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 6), new THREE.MeshPhongMaterial({ color: 0xc9a227, shininess: 120, specular: 0xffe8b0 }));
    knob.position.set(a + 0.014, -0.03, c * 0.7);
    m.add(knob);
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.016) < 0.002 && Math.abs(b - 0.035) < 0.004) {
    // light switch: wall plate + rocker
    m = new THREE.Group();
    const plate = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xe8e4da));
    m.add(plate);
    const rocker = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.02, 0.012), toonMat(0xcfc9bc));
    rocker.position.x = a + 0.004;
    m.add(rocker);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.24) < 0.008 && Math.abs(b - 0.42) < 0.01) {
    // jukebox: arch, glowing lights arc, grille
    m = new THREE.Group();
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), new THREE.MeshPhongMaterial({ color: 0x5a2e22, shininess: 70, specular: 0xcc9977 }));
    m.add(bodyM);
    const arch = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.98, a * 0.98, c * 1.6, 20, 1, false, 0, Math.PI), new THREE.MeshPhongMaterial({ color: 0x6a3628, shininess: 70, specular: 0xcc9977 }));
    arch.rotation.x = Math.PI / 2;
    arch.position.y = b;
    m.add(arch);
    for (let k2 = 0; k2 < 5; k2++) {
      const ang = Math.PI * (0.15 + 0.175 * k2);
      const cols = [0xff5a4a, 0xffc84a, 0x62e08a, 0x5ab8ff, 0xc98aff];
      const lt = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5), new THREE.MeshBasicMaterial({ color: cols[k2] }));
      lt.position.set(Math.cos(ang) * a * 0.8, b + Math.sin(ang) * a * 0.75, -c - 0.004);
      m.add(lt);
    }
    const grille = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.4, 0.22), toonMat(0x2c2018));
    grille.rotation.y = Math.PI;
    grille.position.set(0, -0.12, -c - 0.002);
    m.add(grille);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.3, 0.12), new THREE.MeshBasicMaterial({ color: 0x3a4c66 }));
    win.rotation.y = Math.PI;
    win.position.set(0, 0.22, -c - 0.003);
    m.add(win);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.025) < 0.003 && Math.abs(b - 0.16) < 0.004 && Math.abs(c - 0.16) < 0.004) {
    // bicycle wheel: rim, tire, spokes
    m = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.TorusGeometry(b * 0.92, 0.014, 8, 22), toonMat(0x2b2926));
    rim.rotation.y = Math.PI / 2;
    m.add(rim);
    for (let k2 = 0; k2 < 5; k2++) {
      const sp2 = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0025, b * 1.7, 4), toonMat(0x9aa0a8));
      sp2.rotation.z = (k2 / 5) * Math.PI;
      m.add(sp2);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, a * 1.6, 8), toonMat(0x9aa0a8));
    hub.rotation.z = Math.PI / 2;
    m.add(hub);
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.02) < 0.003 && Math.abs(b - 0.06) < 0.008 && Math.abs(c - 0.75) < 0.02) {
    // wall-hung ladder: rails + rungs
    m = new THREE.Group();
    const railMat = toonMat(0xb08a56, { map: woodTex });
    for (const ry of [-0.05, 0.05]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, c * 2), railMat);
      rail.position.y = ry;
      m.add(rail);
    }
    for (let k2 = 0; k2 < 6; k2++) {
      const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.1, 6), railMat);
      rung.position.z = -c + 0.12 + k2 * 0.25;
      m.add(rung);
    }
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.015) < 0.002 && Math.abs(b - 0.5) < 0.02) {
    // garden tools on the wall: rake / shovel / broom by body index
    m = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, b * 1.9, 6), toonMat(0x9a7548, { map: woodTex }));
    m.add(pole);
    const v2 = i % 3;
    if (v2 === 0) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.14), toonMat(0x8a8f9e));
      head.position.y = -b * 0.92;
      m.add(head);
      for (let k2 = 0; k2 < 5; k2++) {
        const tine = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.05, 4), toonMat(0x8a8f9e));
        tine.position.set(0, -b * 0.92 - 0.03, -0.06 + k2 * 0.03);
        m.add(tine);
      }
    } else if (v2 === 1) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.12, 0.09), toonMat(0x8a8f9e));
      blade.position.y = -b * 0.95;
      m.add(blade);
    } else {
      const brush = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.1, 0.11), toonMat(0xc9a86a));
      brush.position.y = -b * 0.95;
      m.add(brush);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.13) < 0.004 && Math.abs(b - 0.035) < 0.004 && Math.abs(c - 0.13) < 0.004) {
    // coiled garden hose
    m = new THREE.Group();
    for (const hy2 of [-0.015, 0.012]) {
      const loop = new THREE.Mesh(new THREE.TorusGeometry(a * 0.75, 0.018, 8, 20), toonMat(0x3e7a4e));
      loop.rotation.x = Math.PI / 2;
      loop.position.y = hy2;
      m.add(loop);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.12) < 0.004 && Math.abs(b - 0.09) < 0.004 && Math.abs(c - 0.08) < 0.004) {
    // espresso machine: chrome body, group head, cups on top
    m = new THREE.Group();
    const chrome = new THREE.MeshPhongMaterial({ color: 0xc8ccd4, shininess: 130, specular: 0xffffff });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), chrome));
    const head2 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.03, 10), toonMat(0x2b2926));
    head2.position.set(0, -b * 0.4, -c - 0.014);
    m.add(head2);
    const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.07, 6), chrome);
    lever.position.set(0.05, b + 0.03, 0);
    m.add(lever);
    for (const cx3 of [-0.06, -0.015, 0.035]) {
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.009, 0.018, 8), toonMat(0xf2ead8));
      cup.position.set(cx3, b + 0.012, 0.02);
      m.add(cup);
    }
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.028) < 0.003) {
    // croissant: golden crescent
    m = new THREE.Group();
    const gold = toonMat(0xc98d3f);
    const tor = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.013, 8, 14, Math.PI * 1.4), gold);
    tor.rotation.x = Math.PI / 2;
    m.add(tor);
    for (const tx2 of [-1, 1]) {
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.011, 6, 5), gold);
      const ang = Math.PI * 0.7 * tx2;
      tip.position.set(Math.cos(ang) * 0.02, 0, Math.sin(ang) * 0.02);
      m.add(tip);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.09) < 0.004 && Math.abs(b - 0.018) < 0.003 && Math.abs(c - 0.018) < 0.003) {
    // baguette: golden loaf with score marks
    m = new THREE.Group();
    const loaf = new THREE.Mesh(roughen(new THREE.SphereGeometry(0.05, 12, 8), 0.05), toonMat(0xc99a52));
    loaf.scale.set(1.9, 0.42, 0.42);
    m.add(loaf);
    for (let k2 = 0; k2 < 3; k2++) {
      const score2 = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.02, 0.016), toonMat(0xf2e0b8));
      score2.rotation.y = 0.5;
      score2.position.set(-0.04 + k2 * 0.04, 0.014, 0);
      m.add(score2);
    }
  } else if (cls === 2 && Math.abs(a - 0.22) < 0.01 && Math.abs(b - 0.05) < 0.01) {
    // stereo: glossy slab + knobs + display strip on the front
    m = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      new THREE.MeshPhongMaterial({ color: 0x23202b, shininess: 110, specular: 0xbbccdd })
    );
    m.add(body);
    for (const kx of [-0.14, -0.08]) {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.01, 10), toonMat(0x8a8494));
      knob.rotation.x = Math.PI / 2;
      knob.position.set(kx, 0, -c - 0.004);
      m.add(knob);
    }
    const disp = new THREE.Mesh(
      new THREE.PlaneGeometry(0.12, 0.025),
      new THREE.MeshBasicMaterial({ color: 0x2fe0a8 })
    );
    disp.position.set(0.08, 0.005, -c - 0.002);
    disp.rotation.y = Math.PI;
    m.add(disp);
  }
  if (m) {
    m.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    scene.add(m);
    return m;
  }
  let geo;
  const fuzzy = cls === 2 && shape === 1 && gloss <= 0.1;
  if (shape === 1) geo = new THREE.SphereGeometry(a, fuzzy ? 18 : 14, fuzzy ? 14 : 12);
  else if (shape === 2) geo = new THREE.CapsuleGeometry(b, a * 2, 4, 10);
  else geo = new THREE.BoxGeometry(a * 2, b * 2, c * 2);
  if (fuzzy) roughen(geo, 0.14); // yarn, plush toys, foliage
  let mat;
  const painting = cls === 0 && (a < 0.025 || c < 0.025) && Math.max(a, b, c) < 0.6 && py > 0.9;
  const book =
    cls === 2 && shape === 0 && gloss < 0.4 && b >= 0.06 && b <= 0.12 &&
    Math.min(a, c) <= 0.035 && Math.max(a, c) <= 0.07;
  if (cls === 0 && a > 2 && b < 0.2) {
    // the floor slab: wood by default, concrete in the garage,
    // checkerboard in the cafe
    const fr2 = cfg.room | 0;
    mat = toonMat(0xffffff, { map: fr2 === 5 ? concreteTex : fr2 === 9 ? checkerTex : floorTex });
  } else if (painting) {
    mat = toonMat(0xffffff, { map: artTex(i) });
  } else if (book) {
    // book spines: deep saturated library colors
    mat = toonMat(new THREE.Color().setHSL(h, 0.55, 0.34 + ((i * 7) % 5) * 0.035));
  } else if (cls === 1 && gloss >= 0.6) {
    // porcelain fixtures (tub, toilet, sink, fridge)
    mat = new THREE.MeshPhongMaterial({
      color: 0xeceae4, shininess: 90, specular: 0xccd6dd,
    });
  } else if (cls === 0 && gloss >= 0.55) {
    // marble / stone (pillars, counter tops)
    mat = new THREE.MeshPhongMaterial({
      color: 0xd8d4cc, shininess: 60, specular: 0xbbc4cc,
    });
  } else if (cls === 0 && gloss >= 0.15 && b < 1.2) {
    mat = toonMat(0xa08056, { map: woodTex }); // built-ins: counters, shelves, steps
  } else if (cls !== 0 && gloss >= 0.5) {
    mat = new THREE.MeshPhongMaterial({
      color, shininess: 20 + gloss * 100, specular: 0xbbccdd,
    });
  } else if (cls !== 0 && gloss <= 0.1) {
    mat = fuzzy ? toonMat(color) : toonMat(color, { map: fabricTex });
  } else if (cls === 1) {
    mat = toonMat(color, { map: woodTex });
  } else {
    mat = toonMat(color);
  }
  m = new THREE.Mesh(geo, mat);
  m.castShadow = cls !== 0;
  m.receiveShadow = true;
  scene.add(m);
  return m;
}

// --- render-side room dressing (no collision, pure decor) ------------------
let decor = null;
let lightOverlays = []; // per-zone darkness boxes (apartments)
function buildDecor(hx, hz, kind) {
  if (decor) scene.remove(decor);
  decor = new THREE.Group();
  const trimMat = toonMat(0x4a3a55);
  for (const [x, z, w, d] of [
    [0, hz - 0.025, hx * 2 + 0.1, 0.05],
    [hx - 0.025, 0, 0.05, hz * 2 - 0.05],
    [-hx + 0.025, 0, 0.05, hz * 2 - 0.05],
  ]) {
    const bb = new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, d), trimMat);
    bb.position.set(x, 0.07, z);
    decor.add(bb);
  }
  // front edge of the diorama floor slab: make the cut look intentional
  const lip = new THREE.Mesh(new THREE.BoxGeometry(hx * 2 + 0.1, 0.06, 0.05), trimMat);
  lip.position.set(0, 0.03, -hz + 0.005);
  decor.add(lip);
  if (kind <= 1) {
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
    win.position.set(-hx - 0.02, 2.05, 0.6);
    decor.add(win);
    const rug = new THREE.Mesh(new THREE.CircleGeometry(1.15, 28), toonMat(0x7a4258));
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.006, 0.2);
    rug.receiveShadow = true;
    decor.add(rug);
  }
  if (kind === 4) {
    // grand runner up the mansion stairs
    const run = new THREE.Mesh(new THREE.PlaneGeometry(1.2, hz * 1.1), toonMat(0x8a3a4a));
    run.rotation.x = -Math.PI / 2;
    run.position.set(0, 0.007, -hz * 0.4 + 1.2);
    run.receiveShadow = true;
    decor.add(run);
  }
  if (kind === 2) {
    const mat = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.55), toonMat(0x9ab8c8));
    mat.rotation.x = -Math.PI / 2;
    mat.position.set(-1.35, 0.006, 0.55);
    mat.receiveShadow = true;
    decor.add(mat);
  }
  if (kind === 5) {
    // roll-up garage door filling the far wall: panels, seams, handle
    const door = new THREE.Group();
    const slab = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.2), toonMat(0xb8b4ac));
    slab.rotation.y = Math.PI;
    door.add(slab);
    for (let k = 0; k < 4; k++) {
      const seam = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.03, 0.01), toonMat(0x8a867e));
      seam.position.set(0, -0.83 + k * 0.55, -0.012);
      door.add(seam);
    }
    for (const wx of [-1.2, -0.4, 0.4, 1.2]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.22), new THREE.MeshBasicMaterial({ color: 0x394050 }));
      win.rotation.y = Math.PI;
      win.position.set(wx, 0.72, -0.014);
      door.add(win);
    }
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.03), toonMat(0x6b6760));
    handle.position.set(0, -0.9, -0.02);
    door.add(handle);
    door.position.set(0.6, 1.12, hz - 0.005);
    decor.add(door);
    // old oil stain where the car drips
    const oil = new THREE.Mesh(
      new THREE.CircleGeometry(0.42, 20),
      new THREE.MeshBasicMaterial({ color: 0x2c2a28, transparent: true, opacity: 0.35 })
    );
    oil.rotation.x = -Math.PI / 2;
    oil.scale.y = 0.7;
    oil.position.set(1.5, 0.005, 0.55);
    decor.add(oil);
    // pegboard over the workbench with painted-on tools
    const peg = new THREE.Group();
    const board = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.8), toonMat(0x8a6f4d));
    board.rotation.y = Math.PI;
    peg.add(board);
    const toolMat = new THREE.MeshBasicMaterial({ color: 0x4a4640 });
    for (const [tx, w, h] of [[-0.55, 0.05, 0.4], [-0.32, 0.1, 0.28], [-0.05, 0.05, 0.45], [0.24, 0.14, 0.2], [0.52, 0.06, 0.34]]) {
      const t = new THREE.Mesh(new THREE.PlaneGeometry(w, h), toolMat);
      t.rotation.y = Math.PI;
      t.position.set(tx, -0.05, -0.01);
      peg.add(t);
    }
    peg.position.set(-2.6, 1.35, hz - 0.005);
    decor.add(peg);
  }
  if (kind === 7) {
    // per-floor darkness: a smoked box swallows a zone whose lights are
    // off (toggled by cat-swat on the wall switches; polled each frame)
    lightOverlays = [];
    for (const [cy, hh] of [[0.63, 1.22], [1.92, 1.2], [3.26, 1.28]]) {
      const ov = new THREE.Mesh(
        new THREE.BoxGeometry(7.2, hh, 3.95),
        new THREE.MeshBasicMaterial({ color: 0x05040a, transparent: true, opacity: 0.62, depthWrite: false })
      );
      ov.position.set(0, cy, -0.425);
      ov.renderOrder = 5;
      ov.visible = false;
      decor.add(ov);
      lightOverlays.push(ov);
    }
  } else {
    lightOverlays = [];
  }
  if (kind === 8) {
    // the bar: neon sign, pendant lamps over the counter, a dartboard
    const neon = new THREE.Group();
    const tube = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 8, 24), new THREE.MeshBasicMaterial({ color: 0xff4fa0 }));
    neon.add(tube);
    const tube2 = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.015, 8, 20), new THREE.MeshBasicMaterial({ color: 0x53e0d8 }));
    neon.add(tube2);
    neon.position.set(-1.4, 2.15, hz - 0.03);
    decor.add(neon);
    for (const px of [-2.4, -1.4, -0.4]) {
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.5, 6), toonMat(0x2a2530));
      cord.position.set(px, 2.35, 2.35);
      decor.add(cord);
      const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.11, 0.1, 12, 1, true), new THREE.MeshPhongMaterial({ color: 0x2f5a3e, shininess: 60, specular: 0x9adfb0, side: THREE.DoubleSide }));
      shade.position.set(px, 2.06, 2.35);
      decor.add(shade);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe2a8 }));
      bulb.position.set(px, 2.02, 2.35);
      decor.add(bulb);
    }
    const board = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.16, 20), toonMat(0x2c2018));
    board.add(disc);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.05, 0.09, 20), toonMat(0xc94f3f));
    ring.position.z = 0.002;
    board.add(ring);
    const bull = new THREE.Mesh(new THREE.CircleGeometry(0.02, 12), toonMat(0x62e08a));
    bull.position.z = 0.004;
    board.add(bull);
    board.rotation.y = -Math.PI / 2;
    board.position.set(hx - 0.02, 1.7, -1.2);
    decor.add(board);
  }
  if (kind === 9) {
    // striped awning over the counter, string lights, window boxes
    const awn = new THREE.Group();
    const canvas9 = makeCanvas(128, 32, (g) => {
      for (let k2 = 0; k2 < 8; k2++) {
        g.fillStyle = k2 % 2 ? '#f2ead8' : '#b03040';
        g.fillRect(k2 * 16, 0, 16, 32);
      }
    });
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.55), toonMat(0xffffff, { map: canvas9, side: THREE.DoubleSide }));
    cloth.rotation.x = Math.PI - 0.5;
    cloth.position.set(-1.1, 1.62, hz - 0.35);
    decor.add(cloth);
    const hem = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.06, 0.02), toonMat(0xb03040));
    hem.position.set(-1.1, 1.48, hz - 0.6);
    decor.add(hem);
    for (let k2 = 0; k2 < 9; k2++) {
      const bx = -hx + 0.5 + (k2 * (hx * 2 - 1)) / 8;
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 6, 5),
        new THREE.MeshBasicMaterial({ color: k2 % 2 ? 0xffe2a8 : 0xffc9de })
      );
      bulb.position.set(bx, 2.35 - Math.sin((k2 / 8) * Math.PI) * 0.12, hz - 0.15);
      decor.add(bulb);
    }
    for (const wx2 of [-hx + 0.02, hx - 0.02]) {
      const box9 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.7), toonMat(0x6a4a30, { map: woodTex }));
      box9.position.set(wx2, 1.0, 0.6);
      decor.add(box9);
      for (let k2 = 0; k2 < 4; k2++) {
        const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), toonMat([0xd85a6a, 0xe8b04a, 0xd85a6a, 0x9a6ac9][k2]));
        bloom.position.set(wx2, 1.06, 0.32 + k2 * 0.18);
        decor.add(bloom);
      }
    }
  }
  scene.add(decor);
}

// --- the cats: render-side bodies (physics stays capsules) -----------------
const catViews = new Map(); // body index -> {group, legs, tailSegs, mats, prev, facing}
const CAT_COATS = [0xff9d45, 0x8a8f9e, 0xf5f0e6, 0x3d3a45]; // orange, grey, cream, black
const CAT_DARKS = [0xd97f2e, 0x6b7080, 0xd8cfc0, 0x2a2830];
function buildCat(k) {
  const view = { k, legs: [], tailSegs: [], prev: null, facing: 0, coat: CAT_COATS[k % 4] };
  const g = new THREE.Group();
  const fur = toonMat(view.coat);
  const dark = toonMat(CAT_DARKS[k % 4]);
  const white = toonMat(0xfff4e6);
  const body = new THREE.Mesh(roughen(new THREE.SphereGeometry(0.115, 20, 16), 0.05), fur);
  body.scale.set(1.05, 0.92, 1.5);
  body.position.y = 0.02;
  g.add(body);
  view.body = body;
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), white);
  chest.position.set(0, -0.03, 0.13);
  g.add(chest);
  const head = new THREE.Mesh(roughen(new THREE.SphereGeometry(0.088, 16, 12), 0.045), fur);
  head.position.set(0, 0.11, 0.2);
  g.add(head);
  view.head = head;
  // whiskers: six thin white slivers off the muzzle
  for (const sx of [-1, 1]) {
    for (const [ang, dy] of [[0.25, 0.005], [0, 0], [-0.22, -0.006]]) {
      const wh = new THREE.Mesh(
        new THREE.BoxGeometry(0.085, 0.0018, 0.0018),
        new THREE.MeshBasicMaterial({ color: 0xf5efe4 })
      );
      wh.position.set(0.055 * sx, 0.08 + dy, 0.27);
      wh.rotation.z = ang * sx;
      wh.rotation.y = -0.5 * sx;
      g.add(wh);
    }
  }
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
    const seg = new THREE.Mesh(
      roughen(new THREE.SphereGeometry(0.026 - s * 0.003, 10, 8), 0.09),
      s === 3 ? dark : fur
    );
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
  // per-cat debug gear: eye->dot LOS line + a floating state tag
  view.losGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
  view.los = new THREE.Line(view.losGeo, new THREE.LineBasicMaterial({ color: 0x44ff66 }));
  view.los.visible = false;
  scene.add(view.los);
  view.tag = document.createElement('div');
  view.tag.className = 'cattag';
  view.tag.style.marginTop = `${-k * 15}px`; // clustered cats stack, not overprint
  document.getElementById('tags').appendChild(view.tag);
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
const EYE = new THREE.Vector3(0, 2.0, -5.6); // z re-derived per room
const HOME_YAW = 0, HOME_PITCH = -0.26;
let lookYaw = HOME_YAW;
let lookPitch = HOME_PITCH;
const YAW_LIM = 0.9;
const PITCH_MIN = -0.8, PITCH_MAX = 0.15;
// bounded pinch zoom: scales the FOV. <1 = step back a little.
const ZOOM_MIN = 0.7, ZOOM_MAX = 2.4;
let zoom = 1;
// bounded two-finger pan: translates the vantage on its own x/y plane —
// the user stays set back from the diorama (z never changes), so this is
// sliding a window across the front of the dollhouse, not orbiting into
// it. Look clamps still forbid oblique views. This is the navigation for
// the coming multi-room / multi-floor structures; on single rooms the
// range is just "translation friendliness".
let panX = 0, panY = 0;
let panYMin = -1.3, panYMax = 1.7; // widened per room in layoutRoom
function panLimX() { return roomHX * 0.55; }
function clampPan() {
  panX = Math.max(-panLimX(), Math.min(panLimX(), panX));
  panY = Math.max(panYMin, Math.min(panYMax, panY));
}
function applyLook(bob = 0) {
  camera.position.set(
    EYE.x + panX + (Math.random() - 0.5) * shake * 0.06,
    EYE.y + panY + bob + (Math.random() - 0.5) * shake * 0.05,
    EYE.z
  );
  const f = new THREE.Vector3(
    Math.sin(lookYaw) * Math.cos(lookPitch),
    Math.sin(lookPitch),
    Math.cos(lookYaw) * Math.cos(lookPitch)
  );
  camera.lookAt(camera.position.clone().add(f));
}
function viewSize() {
  // One source of truth: the LAYOUT viewport (what iOS sizes fixed elements
  // against; innerWidth/Height can disagree around the Safari URL bar).
  // Never the canvas's own clientWidth — that follows the buffer attributes
  // renderer.setSize writes, which feeds back exponentially.
  const de = document.documentElement;
  return { w: de.clientWidth || innerWidth, h: de.clientHeight || innerHeight };
}
function resize() {
  const { w, h } = viewSize();
  renderer.setSize(w, h, false);
  const aspect = w / h;
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
let pinchMid = null; // [x, y] centroid of the two-finger grip
function pixelDir(x, y) {
  const { w, h } = viewSize();
  lookRay.setFromCamera(new THREE.Vector2((x / w) * 2 - 1, -(y / h) * 2 + 1), camera);
  return lookRay.ray.direction.clone();
}
function pinchSpan() {
  const [a, b] = [...lookPts.values()];
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}
function pinchCentroid() {
  const [a, b] = [...lookPts.values()];
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}
addEventListener('pointerdown', (e) => {
  if (e.target.closest && e.target.closest('button, #panel')) return;
  if (e.clientY >= pad.getBoundingClientRect().top) return;
  if (lookPts.size >= 2) return;
  lookPts.set(e.pointerId, [e.clientX, e.clientY]);
  if (lookPts.size === 1) {
    grabDir = pixelDir(e.clientX, e.clientY);
  } else {
    grabDir = null; // second finger: pinch-zoom + plane-pan, one gesture
    pinchDist = pinchSpan();
    pinchMid = pinchCentroid();
  }
});
addEventListener('pointermove', (e) => {
  if (!lookPts.has(e.pointerId)) return;
  lookPts.set(e.pointerId, [e.clientX, e.clientY]);
  if (lookPts.size === 2) {
    // no modes, no bifurcation: every move decomposes into a zoom term
    // (span ratio) and a pan term (centroid delta). The scene follows the
    // fingers — drag right, the room slides right, so the eye goes left.
    const span = pinchSpan();
    if (pinchDist > 20) setZoom(zoom * (span / pinchDist));
    pinchDist = span;
    const mid = pinchCentroid();
    if (pinchMid) {
      const { h } = viewSize();
      const wpp = (2 * Math.tan((camera.fov * Math.PI) / 360) * FOCUS_D) / h;
      // camera-right is world -x from this vantage, and clientY grows
      // downward — both flips cancel into straight += here
      panX += (mid[0] - pinchMid[0]) * wpp;
      panY += (mid[1] - pinchMid[1]) * wpp;
      clampPan();
      applyLook();
    }
    pinchMid = mid;
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
let FOCUS_D = 5.5; // re-derived per room
const laserRay = { ox: 0, oy: 0, oz: 0, dx: 0, dy: 0, dz: 1 };
function beltWorld() {
  return camera.position.clone().add(BELT_LOCAL.clone().applyQuaternion(camera.quaternion));
}
function layoutRoom() {
  roomHX = lk.lk_room_hx(sim);
  roomHZ = lk.lk_room_hz(sim);
  // multi-level structures (home, apartments) are tall: step back and up
  // so the dollhouse face reads whole instead of edge-on plate slices
  const r = cfg.room | 0;
  const tall = r === 6 || r === 7;
  EYE.z = -(roomHZ + (tall ? 4.6 : 2.6));
  EYE.y = tall ? 2.6 : 2.0;
  FOCUS_D = roomHZ + (tall ? 4.5 : 2.5);
  panYMin = tall ? -1.9 : -1.3;
  panYMax = tall ? 3.2 : 1.7;
  panX = 0;
  panY = 0;
  const b = Math.max(roomHX, roomHZ) + 1.2;
  sun.shadow.camera.left = -b;
  sun.shadow.camera.right = b;
  sun.shadow.camera.top = b;
  sun.shadow.camera.bottom = -b;
  sun.shadow.camera.updateProjectionMatrix();
  floorTex.repeat.set(Math.max(2, Math.round(roomHX)), Math.max(2, Math.round(roomHZ)));
  concreteTex.repeat.set(Math.max(1, Math.round(roomHX * 0.6)), Math.max(1, Math.round(roomHZ * 0.6)));
  checkerTex.repeat.set(Math.max(2, Math.round(roomHX * 1.2)), Math.max(2, Math.round(roomHZ * 1.2)));
  buildDecor(roomHX, roomHZ, cfg.room | 0);
  applyLook();
}

function updateLaserRay() {
  if (!aimScreen) return;
  const { w, h } = viewSize();
  const ndc = new THREE.Vector2((aimScreen[0] / w) * 2 - 1, -(aimScreen[1] / h) * 2 + 1);
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
  const sy = viewSize().h * (0.08 + fy * 0.52);
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

// --- SFX: synthesized in Web Audio — authored, so license-free by
// construction; zero asset bytes; mickey-moused per the audio research.
// (CC0 sample packs are the later richness pass.)
let ac = null;
let sfxGain = null;
let noiseBuf = null;
const sfxLast = {};
// sample rack: drop CC0 files in sfx/ and list them in sfx/manifest.json
// ({"impact": ["file.ogg", ...], "crash": [...], "meow": [...], ...});
// every voice prefers a random pooled sample and falls back to synthesis.
const samplePools = {};
let sampleMan = null;
fetch('sfx/manifest.json')
  .then((r) => (r.ok ? r.json() : null))
  .then((m) => {
    sampleMan = m;
    if (ac && m) loadSamples();
  })
  .catch(() => {});
async function loadSamples() {
  for (const [name, urls] of Object.entries(sampleMan)) {
    samplePools[name] = samplePools[name] ?? [];
    for (const u of urls) {
      try {
        const ab = await (await fetch('sfx/' + u)).arrayBuffer();
        samplePools[name].push(await ac.decodeAudioData(ab));
      } catch {}
    }
  }
}
function playSample(name, pan, rateJitter = 0.15, gain = 0.55, when = 0) {
  const pool = samplePools[name];
  if (!pool || !pool.length) return false;
  const src = ac.createBufferSource();
  src.buffer = pool[(Math.random() * pool.length) | 0];
  src.playbackRate.value = 1 + (Math.random() * 2 - 1) * rateJitter;
  const g = ac.createGain();
  g.gain.value = gain;
  src.connect(g).connect(outNode(pan));
  src.start(ac.currentTime + when);
  return true;
}
function sfxInit() {
  if (ac) return;
  ac = new (window.AudioContext || window.webkitAudioContext)();
  sfxGain = ac.createGain();
  sfxGain.gain.value = cfg.sound ? 0.5 : 0;
  sfxGain.connect(ac.destination);
  noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  if (sampleMan) loadSamples();
}
addEventListener('pointerdown', () => {
  sfxInit();
  if (ac.state === 'suspended') ac.resume();
});
function throttled(name, ms) {
  const t = performance.now();
  if (sfxLast[name] && t - sfxLast[name] < ms) return true;
  sfxLast[name] = t;
  return false;
}
function outNode(pan) {
  if (pan === undefined || !ac.createStereoPanner) return sfxGain;
  const p = ac.createStereoPanner();
  p.pan.value = Math.max(-1, Math.min(1, pan));
  p.connect(sfxGain);
  return p;
}
function tone(freq0, freq1, dur, type, gain, when = 0, pan) {
  const o = ac.createOscillator();
  const g = ac.createGain();
  const t0 = ac.currentTime + when;
  o.type = type;
  o.frequency.setValueAtTime(freq0, t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, freq1), t0 + dur);
  g.gain.setValueAtTime(gain, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g).connect(outNode(pan));
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}
function noise(dur, freq, q, gain, when = 0, type = 'bandpass', pan) {
  const src = ac.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;
  const f = ac.createBiquadFilter();
  f.type = type;
  f.frequency.value = freq;
  f.Q.value = q;
  const g = ac.createGain();
  const t0 = ac.currentTime + when;
  g.gain.setValueAtTime(gain, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  src.connect(f).connect(g).connect(outNode(pan));
  src.start(t0, Math.random());
  src.stop(t0 + dur + 0.02);
}
// world x -> stereo: the camera looks +z, so +x is screen-left
const panOf = (mesh) => (mesh ? -mesh.position.x / 3 : 0);
// cluster sense: many falls inside a beat get a rumble bed under the clatter
const recentHits = [];
function hitCluster() {
  const t = performance.now();
  recentHits.push(t);
  while (recentHits.length && t - recentHits[0] > 300) recentHits.shift();
  return recentHits.length;
}
// cat vocal: sawtooth through parallel formant filters with vibrato —
// deliberately cartoon (realistic cat recordings are the uncanny risk
// per research/audio.md)
function vocal({ f0, peak, end, dur, gain, when = 0 }) {
  const t0 = ac.currentTime + when;
  const o = ac.createOscillator();
  o.type = 'sawtooth';
  const de = 0.95 + Math.random() * 0.1;
  o.frequency.setValueAtTime(f0 * de, t0);
  o.frequency.exponentialRampToValueAtTime(peak * de, t0 + dur * 0.35);
  o.frequency.exponentialRampToValueAtTime(end * de, t0 + dur);
  const vib = ac.createOscillator();
  vib.frequency.value = 6.5;
  const vibG = ac.createGain();
  vibG.gain.value = 14;
  vib.connect(vibG).connect(o.frequency);
  const g = ac.createGain();
  g.gain.setValueAtTime(0.001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.07);
  g.gain.setValueAtTime(gain, t0 + dur * 0.55);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  for (const [ff, fq, fg] of [[1050, 5, 0.9], [2500, 8, 0.5]]) {
    const f = ac.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.setValueAtTime(ff, t0);
    f.frequency.exponentialRampToValueAtTime(ff * 0.75, t0 + dur);
    f.Q.value = fq;
    const fgain = ac.createGain();
    fgain.gain.value = fg;
    o.connect(f).connect(fgain).connect(g);
  }
  g.connect(sfxGain);
  o.start(t0);
  o.stop(t0 + dur + 0.05);
  vib.start(t0);
  vib.stop(t0 + dur);
}
// purr: AM'd low triangle while a cat loafs
let purr = null;
function setPurr(on) {
  if (!ac) return;
  if (on && !purr) {
    const o = ac.createOscillator();
    o.type = 'triangle';
    o.frequency.value = 46;
    const pg = ac.createGain();
    pg.gain.setValueAtTime(0.001, ac.currentTime);
    pg.gain.linearRampToValueAtTime(0.06, ac.currentTime + 0.4);
    const am = ac.createOscillator();
    am.frequency.value = 21;
    const amG = ac.createGain();
    amG.gain.value = 0.04;
    am.connect(amG).connect(pg.gain);
    o.connect(pg).connect(sfxGain);
    o.start();
    am.start();
    purr = { o, am, pg };
  } else if (!on && purr) {
    const p = purr;
    purr = null;
    p.pg.gain.linearRampToValueAtTime(0.001, ac.currentTime + 0.3);
    p.o.stop(ac.currentTime + 0.35);
    p.am.stop(ac.currentTime + 0.35);
  }
}
const sfx = {
  // one voice PER falling object: pitch from its size, timbre from its
  // shape, stereo position from where it fell, micro-delay so a bookcase
  // avalanche mixes into clatter instead of one Atari click
  impact(mesh) {
    if (!ac) return;
    const n = hitCluster();
    if (n > 12) return; // voice budget: the bed carries the excess
    const pan = panOf(mesh);
    const prm = mesh?.geometry?.parameters ?? {};
    const sphere = prm.radius !== undefined;
    const size = prm.radius ?? Math.max(prm.width ?? 0.1, prm.height ?? 0.1, prm.depth ?? 0.1) / 2;
    const f0 = Math.min(260, Math.max(58, 26 / (size + 0.05)));
    const j = 0.92 + Math.random() * 0.16;
    const w = Math.random() * 0.06;
    if (!playSample('impact', pan, 0.22, 0.5, w)) {
      tone(f0 * j, f0 * 0.55 * j, 0.16, 'triangle', 0.38, w, pan);
      tone(f0 * 1.48 * j, f0 * 0.8, 0.11, 'triangle', 0.18, w + 0.006, pan); // detuned body
      noise(0.04, 1100 + Math.random() * 700, 1.4, 0.22, w, 'bandpass', pan);
      if (sphere) tone(f0 * 5.2, f0 * 4.5, 0.26, 'sine', 0.11, w + 0.01, pan); // hollow ring
    }
    if (n >= 3 && !throttled('rumble', 1200)) {
      // the "whole bookcase came down" bed
      noise(0.55, 240, 0.6, 0.45, 0, 'lowpass');
      tone(58, 36, 0.55, 'triangle', 0.3, 0.02);
    }
  },
  crash(pan) {
    if (!ac || throttled('crash', 90)) return;
    if (playSample('crash', pan, 0.1, 0.6)) return;
    // real shatter shape: bright splash, a body clunk, then a shower of
    // sparse shard tinkles scattering over ~half a second
    noise(0.18, 3500, 0.6, 0.5, 0, 'highpass', pan);
    tone(180, 85, 0.12, 'sine', 0.28, 0.01, pan);
    for (let k = 0; k < 12; k++) {
      const f = 2600 * (1 + Math.random() * 1.9);
      const when = 0.03 + Math.random() * 0.45;
      tone(f, f * 0.92, 0.06 + Math.random() * 0.1, 'sine', 0.16 * (1 - when), when, pan);
    }
    noise(0.4, 5200, 0.5, 0.12, 0.05, 'highpass', pan); // glittery tail
  },
  chirp() {
    if (!ac || throttled('chirp', 900)) return;
    // lock-on trill: fast FM warble, rising
    const t0 = ac.currentTime;
    const o = ac.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(720, t0);
    o.frequency.exponentialRampToValueAtTime(980, t0 + 0.16);
    const tr = ac.createOscillator();
    tr.frequency.value = 27;
    const trG = ac.createGain();
    trG.gain.value = 110;
    tr.connect(trG).connect(o.frequency);
    const g = ac.createGain();
    g.gain.setValueAtTime(0.22, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18);
    o.connect(g).connect(sfxGain);
    o.start(t0); o.stop(t0 + 0.2);
    tr.start(t0); tr.stop(t0 + 0.2);
  },
  chatter() {
    if (!ac || throttled('chatter', 1600)) return;
    for (let k = 0; k < 6; k++) tone(430 * (0.95 + Math.random() * 0.1), 380, 0.045, 'square', 0.09, k * 0.065);
  },
  meow() {
    if (!ac || throttled('meow', 4000)) return;
    if (playSample('meow', 0, 0.12, 0.6)) return;
    vocal({ f0: 340, peak: 520, end: 230, dur: 0.55, gain: 0.5 });
  },
  mrrow() {
    if (!ac || throttled('mrrow', 700)) return;
    if (playSample('mrrow', 0, 0.12, 0.65)) return;
    vocal({ f0: 560, peak: 640, end: 170, dur: 0.4, gain: 0.6 });
  },
  scratch(pan) {
    if (!ac || throttled('scratch', 120)) return;
    if (playSample('scratch', pan, 0.15, 0.5)) return;
    for (let k = 0; k < 3; k++) noise(0.07, 1400 + k * 300, 3.5, 0.3, k * 0.07, 'bandpass', pan);
  },
  boing() {
    if (!ac || throttled('boing', 150)) return;
    tone(240 * (0.9 + Math.random() * 0.2), 90, 0.22, 'sine', 0.3);
  },
};

// --- comedy layer: mickey-mousing (research/audio.md — sound is half the
// physics joke) ------------------------------------------------------------
// dizzy stars for the post-tumble compose-yourself beat
const starTex = new THREE.CanvasTexture(
  (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const g = c.getContext('2d');
    g.translate(16, 16);
    g.fillStyle = '#ffe86b';
    g.beginPath();
    for (let k = 0; k < 10; k++) {
      const r = k % 2 ? 5 : 12;
      const a = (k * Math.PI) / 5 - Math.PI / 2;
      g[k ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r);
    }
    g.fill();
    return c;
  })()
);
function makeStars() {
  const grp = new THREE.Group();
  for (let k = 0; k < 3; k++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, depthWrite: false }));
    s.scale.setScalar(0.055);
    grp.add(s);
  }
  grp.visible = false;
  scene.add(grp);
  return grp;
}
// --- HUD + buttons ---------------------------------------------------------
const scoreEl = document.getElementById('score');
const stateEl = document.getElementById('state');
const meterEl = document.getElementById('meterfill');
const popsEl = document.getElementById('pops');
function popScore(text, big = false) {
  // score call-outs cover the carnage mid-chaos — off unless asked for
  if (!cfg.pops) return;
  const div = document.createElement('div');
  div.className = big ? 'pop big' : 'pop';
  div.textContent = text;
  div.style.left = `${30 + Math.random() * 40}%`;
  div.style.top = '28%';
  popsEl.appendChild(div);
  setTimeout(() => div.remove(), big ? 1200 : 900);
}

function applyLookMode() {
  for (const m of meshes) {
    if (!m) continue;
    eachMat(m, (mat) => (mat.wireframe = debugLook));
  }
  document.getElementById('dbg').classList.toggle('on', debugLook);
}
function rebuildSim() {
  lk.lk_free(sim);
  sim = newSim();
  layoutRoom();
  for (const m of meshes) if (m) scene.remove(m);
  meshes = [];
  for (const v of catViews.values()) {
    if (v.stars) scene.remove(v.stars);
    scene.remove(v.los);
    v.tag.remove();
    scene.remove(v.group);
  }
  catViews.clear();
}
document.getElementById('reset').addEventListener('click', () => {
  rebuildSim();
  // reset the view too — a stranded look with no way home was a playtest trap
  lookYaw = HOME_YAW;
  lookPitch = HOME_PITCH;
  panX = 0;
  panY = 0;
  setZoom(1);
  applyLook();
});
document.getElementById('dbg').addEventListener('click', () => {
  debugLook = !debugLook;
  applyLookMode();
});
document.getElementById('toss').addEventListener('click', () => {
  lk.lk_cat_toss(sim); // edge-fall rescue: lob the cat back in over the front
  sfx.mrrow(); // startled protest
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
const roomEl = document.getElementById('s-room');
roomEl.value = String(cfg.room | 0);
roomEl.addEventListener('change', () => {
  cfg.room = parseInt(roomEl.value, 10);
  saveCfg();
  rebuildSim();
});
const retune = () => lk.lk_tune(sim, cfg.strength, cfg.gravity, cfg.destruct);
bindSlider('cats', 'cats', (v) => `${v}`, () => rebuildSim());
bindSlider('weight', 'weight', (v) => `${v.toFixed(2)}x`, () => rebuildSim());
bindSlider('strength', 'strength', (v) => `${v.toFixed(2)}x`, retune);
bindSlider('gravity', 'gravity', (v) => `${v.toFixed(2)}x`, retune);
bindSlider('destruct', 'destruct', (v) => (v === 0 ? 'OFF' : `${v.toFixed(1)}x`), retune);
bindSlider('quality', 'quality', (v) => v.toFixed(2), (v) =>
  renderer.setPixelRatio(Math.min(devicePixelRatio, v))
);
const soundEl = document.getElementById('s-sound');
soundEl.checked = cfg.sound;
soundEl.addEventListener('change', () => {
  cfg.sound = soundEl.checked;
  saveCfg();
  if (sfxGain) sfxGain.gain.value = cfg.sound ? 0.5 : 0;
});
const popsCk = document.getElementById('s-pops');
popsCk.checked = cfg.pops;
popsCk.addEventListener('change', () => {
  cfg.pops = popsCk.checked;
  saveCfg();
});
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
      if (ev === 1) {
        // cat vocals ride the brain's state changes
        const to = code & 0xff;
        if (to === 1) sfx.chirp(); // lock-on
        if (to === 3) sfx.chatter(); // windup excitement
        if (to === 6) sfx.meow(); // bored: "hey, keep playing"
      }
      if (ev === 2) sfx.boing();
      if (ev === 3) sfx.impact(meshes[(code >>> 12) & 0xff]);
      if (ev === 4) sfx.crash(panOf(meshes[(code >>> 12) & 0xff]));
      if (ev === 5) sfx.scratch(panOf(meshes[(code >>> 12) & 0xff]));
      if (ev === 3 || ev === 4) {
        const chain = (code >> 20) & 0xf;
        const label = ev === 4 ? 'CRASH ' : '';
        popScore(`${label}+${code & 0xfff}${chain > 1 ? ` x${chain}` : ''}`, chain >= 4 || ev === 4);
        if (chain >= 4) shake = Math.max(shake, 0.5 + chain * 0.06);
        if (ev === 4) shake = Math.max(shake, 0.5);
        const prop = (code >>> 12) & 0xff;
        if (meshes[prop]) {
          burstPuffs(meshes[prop].position);
          if (ev === 4) burstPuffs(meshes[prop].position); // double burst for a break
        }
      } else if (ev === 5) {
        const piece = (code >>> 12) & 0xff;
        popScore('scratch!');
        if (meshes[piece]) burstPuffs(meshes[piece].position);
      } else if (ev === 6) {
        // structural collapse: the compound fell apart into its members
        const prop = (code >>> 12) & 0xff;
        const chain = (code >> 20) & 0xf;
        popScore(`CRUNCH +${code & 0xfff}${chain > 1 ? ` x${chain}` : ''}`, true);
        shake = Math.max(shake, 1.0);
        const m = meshes[prop];
        if (m) {
          burstPuffs(m.position);
          burstPuffs(m.position);
          for (let k = 0; k < 4; k++) sfx.impact(m); // many-parts clatter (+ rumble bed)
        }
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
  let anyLoaf = false;
  const debugCats = [];
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
      if (pose === 2) anyLoaf = true;
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
          // targets, then eased: cats are continuous, poses tween
          let lt;
          if (st === 9 && li < 2) {
            lt = -0.9 + Math.sin(now * 0.09 + (li ? Math.PI : 0)) * 0.7; // swat flurry
          } else if (st === 9) {
            lt = 0.25; // haunches planted
          } else if (crouch) {
            lt = 0.35 + Math.sin(now * 0.008 + leg.userData.phase) * 0.25; // hunt-walk
          } else if (pose === 0) {
            lt = li < 2 ? 0 : 1.3; // sit: haunches folded
          } else if (pose === 1) {
            lt = li === 0 ? -0.9 : li < 2 ? 0 : 1.3; // groom: one paw up
          } else if (pose === 2) {
            lt = 1.5; // loaf: everything tucked
          } else if (pose === 4) {
            lt = li < 2 ? -1.1 : 0; // stretch: front legs long
          } else {
            lt = Math.sin(now * 0.02 + leg.userData.phase) * swing;
          }
          leg.rotation.x = ease(leg.rotation.x, lt, 0.28);
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
        // groom head-bob; loaf hunkers down; hunt-walk slinks low (tweened)
        view.head.position.y = ease(
          view.head.position.y,
          pose === 1 ? 0.1 + Math.sin(now * 0.025) * 0.02 : crouch ? 0.06 : 0.11,
          0.2
        );
        view.head.position.z = ease(view.head.position.z, pose === 1 ? 0.17 : crouch ? 0.24 : 0.2, 0.2);
        view.body.position.y = ease(view.body.position.y, pose === 2 || crouch ? -0.02 : 0.02, 0.2);
      }
      // slinky stretch: the torso lengthens with speed (fast cats pour)
      const spd = view.prev
        ? Math.hypot(x - view.prev[0], z - view.prev[2]) * 60
        : 0;
      const stretch = Math.min(1.38, 1 + spd * 0.13);
      view.body.scale.z = ease(view.body.scale.z, 1.5 * stretch, 0.15);
      view.body.scale.y = ease(view.body.scale.y, 0.92 / Math.sqrt(stretch), 0.15);
      // --- comedy beats -------------------------------------------------
      const vy = view.prev ? (y - view.prev[1]) * 60 : 0;
      if (st !== 4 && view.lastSt === 4 && (view.lastVy ?? 0) < -2.0) {
        // hard landing: tumble roll, dizzy stars, a bonk
        view.tumbleT = 0;
        view.starT = 2.0;
        sfx.impact(view.group);
      }
      if (st === 7 && now - (view.lastPuff ?? 0) > 110) {
        // zoomies kick up dust
        view.lastPuff = now;
        burstPuffs(new THREE.Vector3(x, y - 0.15, z));
      }
      if (view.tumbleT != null) {
        view.tumbleT += frameDt / 450;
        if (view.tumbleT >= 1) view.tumbleT = null;
      }
      if (!view.stars) view.stars = makeStars();
      if (view.starT > 0) {
        view.starT -= frameDt / 1000;
        view.stars.visible = true;
        view.stars.position.set(x, y + 0.3, z);
        view.stars.children.forEach((s, k) => {
          const a = now * 0.006 + (k * Math.PI * 2) / 3;
          s.position.set(Math.cos(a) * 0.16, Math.sin(now * 0.01 + k) * 0.02, Math.sin(a) * 0.16);
        });
      } else {
        view.stars.visible = false;
      }
      debugCats.push({ view, x, y, z, st, act, interest: data[o + 13], vis: data[o + 14] });
      view.lastSt = st;
      view.lastVy = vy;
      view.prev = [x, y, z];
      view.group.position.set(x, y, z);
      view.group.rotation.x =
        view.tumbleT != null
          ? -Math.PI * 2 * view.tumbleT // full forward roll on a botched landing
          : ease(
              view.group.rotation.x,
              pose === 0 || pose === 1 ? -0.2 : pose === 4 ? 0.26 : crouch ? 0.07 : st === 3 ? 0.14 : 0,
              0.18
            );
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
      eachMat(meshes[i], (mat) => (mat.wireframe = debugLook));
    }
    const m = meshes[i];
    m.position.set(data[o + 5], data[o + 6], data[o + 7]);
    m.quaternion.set(data[o + 8], data[o + 9], data[o + 10], data[o + 11]);
    if (data[o] === 2 && data[o + 12] && m.material) m.material.emissive?.setHex(0x551111);
    if (data[o] === 1 && m.material) {
      // scratch wear: each stage mats and darkens the fabric a little
      const wear = data[o + 12] | 0;
      if ((m.userData.wear | 0) !== wear) {
        for (let w = m.userData.wear | 0; w < wear; w++) m.material.color.multiplyScalar(0.8);
        m.userData.wear = wear;
      }
    }
  }

  setPurr(anyLoaf); // a loafing cat purrs
  shake *= 0.85;
  if (shake < 0.02) shake = 0;
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
  // debug: per-cat LOS lines (eye -> dot, green = that cat sees it).
  // (tags update after render, below, so they use this frame's matrices)
  for (const d of debugCats) {
    d.view.los.visible = debugLook && lit;
    if (d.view.los.visible) {
      d.view.losGeo.setFromPoints([
        new THREE.Vector3(d.x, d.y + 0.16, d.z),
        dot.position,
      ]);
      d.view.los.material.color.setHex(d.vis > 0.05 ? 0x44ff66 : 0xff4455);
    }
  }

  scoreEl.textContent = lk.lk_score(sim);
  if (lightOverlays.length) {
    const off = lk.lk_lights_off(sim);
    lightOverlays.forEach((ov, zi) => (ov.visible = (off & (1 << zi)) !== 0));
  }
  const stName =
    catState === 0 && hudAct >= 0
      ? `IDLE·${AMB_NAMES[hudAct] ?? '?'}`
      : STATE_NAMES[catState] ?? '?';
  stateEl.textContent = debugLook ? `${stName} · vis ${(L[9] ?? 0).toFixed(2)}` : stName;
  meterEl.style.width = `${(lk.lk_interest(sim) * 100).toFixed(0)}%`;

  renderer.render(scene, camera);

  // floating per-cat state tags — projected AFTER render so the camera
  // matrices match the drawn frame exactly, with a view-space front test
  // (points outside the frustum otherwise produce plausible-looking NDC
  // and the tags float over empty space)
  const v3 = new THREE.Vector3();
  for (const d of debugCats) {
    if (!debugLook) {
      d.view.tag.style.display = 'none';
      continue;
    }
    v3.set(d.x, d.y + 0.42, d.z).applyMatrix4(camera.matrixWorldInverse);
    const front = v3.z < 0;
    v3.applyMatrix4(camera.projectionMatrix);
    const on = front && Math.abs(v3.x) < 1.02 && Math.abs(v3.y) < 1.02;
    d.view.tag.style.display = on ? 'block' : 'none';
    if (on) {
      const { w, h } = viewSize();
      d.view.tag.style.left = `${((v3.x + 1) / 2) * w}px`;
      d.view.tag.style.top = `${((-v3.y + 1) / 2) * h}px`;
      const name = d.st === 0 ? `IDLE·${AMB_NAMES[d.act] ?? '?'}` : STATE_NAMES[d.st] ?? '?';
      d.view.tag.textContent = `${name} i${d.interest.toFixed(2)} v${d.vis.toFixed(2)}`;
    }
  }
  requestAnimationFrame(frame);
}
layoutRoom();
stateEl.textContent = 'PAD = LASER · DRAG ROOM = LOOK';
requestAnimationFrame(frame);

// test hook (PewPew pattern): lets an automated driver aim at world points
window.__lk = {
  aimPad(wx, wy, wz) {
    const { w, h } = viewSize();
    const v = new THREE.Vector3(wx, wy, wz).project(camera);
    const sx = ((v.x + 1) / 2) * w;
    const sy = ((-v.y + 1) / 2) * h;
    const r = pad.getBoundingClientRect();
    const fx = Math.max(0, Math.min(1, (sx - r.left) / r.width));
    const fy = Math.max(0, Math.min(1, (sy / h - 0.08) / 0.52));
    return [r.left + fx * r.width, r.top + fy * r.height];
  },
  score: () => lk.lk_score(sim),
  sfx,
  setPurr,
  pan: () => [panX, panY],
  zoom: () => zoom,
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
