// Grey-box viewer: a thin adapter over the sim core's C ABI (ADR-0001
// thin-frontend discipline — no game logic lives here).
import * as THREE from './vendor/three.module.min.js';
// AO stack: three's EffectComposer + the vendored N8AO pass (an import
// map in index.html resolves their bare 'three' / 'postprocessing'
// specifiers to local vendor files — everything stays self-hosted)
import { EffectComposer } from './vendor/EffectComposer.js';
import { N8AOPass } from './vendor/N8AO.js';

const STATE_NAMES = ['IDLE', 'ALERT', 'STALK', 'WINDUP', 'POUNCE', 'RECOVER', 'BORED', 'ZOOMIES!', 'SEARCH', 'SWAT!'];
const AMB_NAMES = ['SIT', 'GROOM', 'LOAF', 'WANDER', 'STRETCH'];
const STATE_TINT = [0x9aa0b0, 0xffe86b, 0xffb347, 0xc792ea, 0xff5a5a, 0x8fd18f, 0x6f7480, 0x53c8d8, 0x4dd0e1, 0xff7ab8];
const FLOATS_PER_BODY = 15; // [.., flag, gloss, tint_r] — sim optics drive materials
const SEED = 42;

const wasm = await WebAssembly.instantiateStreaming(fetch('lk_core.wasm?v=k19'), {});
const lk = wasm.instance.exports;

// settings: build knobs (cats, weight) rebuild the sim; live knobs stream in
const DEFAULTS = { cats: 1, weight: 1, strength: 1, gravity: 1, destruct: 0.3, room: 0, quality: 2, shadows: 'auto', shadowStrength: 1, ao: 'auto', aoStrength: 4, laser: 'pad', padScale: 0.5, sound: true, pops: false };
let cfg = { ...DEFAULTS };
try { cfg = { ...DEFAULTS, ...JSON.parse(localStorage.getItem('lk-settings') || '{}') }; } catch {}
// older saves stored shadows as a boolean; fold into the mode string
if (typeof cfg.shadows === 'boolean') cfg.shadows = cfg.shadows ? 'auto' : 'off';
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
renderer.shadowMap.enabled = cfg.shadows !== 'off';
renderer.shadowMap.type = THREE.VSMShadowMap; // blurred soft pass
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x272138);
// fog kept far outside the room: camera sits ~5.6m out, far wall ~9m — the
// first pass started fog at 9 and drowned the back half on phone OLEDs.
scene.fog = new THREE.Fog(0x272138, 13, 26);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 50);
scene.add(new THREE.HemisphereLight(0xfff1de, 0x51436a, 1.45));
const sun = new THREE.DirectionalLight(0xffe3b8, 1.35);
sun.position.set(-2.5, 5.5, -2.0);
sun.castShadow = true;
// shadow mode lives in the gear menu (founder): auto = device-scaled
// (the 4096 VSM blur pass is a desktop luxury — it stuttered iPhone
// Chrome, so coarse-pointer devices take 2048 + a lighter blur, and
// ?lite=1 forces that path), soft/light pin it, off kills shadows.
function shadowLite() {
  if (cfg.shadows === 'soft') return false;
  if (cfg.shadows === 'light') return true;
  return matchMedia('(pointer: coarse)').matches || new URLSearchParams(location.search).has('lite');
}
function applyShadowMode() {
  const on = cfg.shadows !== 'off';
  const lite = shadowLite();
  renderer.shadowMap.enabled = on;
  sun.castShadow = on && (cfg.room | 0) !== 7; // the tower stays shadowless
  const sz = lite ? 2048 : 4096;
  if (sun.shadow.mapSize.x !== sz) {
    sun.shadow.mapSize.set(sz, sz);
    if (sun.shadow.map) {
      sun.shadow.map.dispose();
      sun.shadow.map = null;
    }
  }
  sun.shadow.radius = lite ? 5 : 9; // founder: "didn't end up very soft"
  sun.shadow.blurSamples = lite ? 8 : 16;
  sun.shadow.intensity = cfg.shadowStrength; // gear slider, live
  scene.traverse((o) => {
    if (o.isMesh && o.material) o.material.needsUpdate = true;
  });
}
applyShadowMode();
sun.shadow.camera.left = -4;
sun.shadow.camera.right = 4;
sun.shadow.camera.top = 4;
sun.shadow.camera.bottom = -4;
sun.shadow.camera.far = 14;
sun.shadow.bias = -0.0004; // VSM wants a much smaller bias
scene.add(sun);
// the living room's floor lamp is "on". Scoped to the rooms that have
// that lamp — left global once, it followed us into every room as a
// mystery orb roasting the nearest wall (both founder "coplanar
// shimmer" reports were this light at grazing incidence)
const lampGlow = new THREE.PointLight(0xffd9a0, 6, 6, 2);
lampGlow.position.set(2.2, 1.35, -1.6);
scene.add(lampGlow);

// --- ambient occlusion (founder: the VSM pass reads "real" more than
// soft, and does nothing for contact darkening — "a screen-space
// ambient occlusion pass would probably really richen the diorama
// look"). N8AO renders the scene itself, so the composer chain is just
// [N8AOPass]; gammaCorrection on the pass stands in for OutputPass.
// Auto = on for fine-pointer devices, off for phones and ?lite=1; the
// gear menu can force it either way (forced-on phones take the Low/
// half-res path).
let composer = null;
let n8ao = null;
let aoActive = false;
function aoWanted() {
  if (cfg.ao === 'on') return true;
  if (cfg.ao === 'off') return false;
  return !matchMedia('(pointer: coarse)').matches && !new URLSearchParams(location.search).has('lite');
}
function applyAO() {
  if (aoWanted() && !composer) {
    const pr = renderer.getPixelRatio();
    const { w, h } = viewSize();
    composer = new EffectComposer(renderer);
    composer.setPixelRatio(pr);
    composer.setSize(w, h);
    n8ao = new N8AOPass(scene, camera, w * pr, h * pr);
    n8ao.configuration.gammaCorrection = true;
    // room-scale reach: props are centimeters, the room is meters
    n8ao.configuration.aoRadius = 0.45;
    n8ao.configuration.distanceFalloff = 0.45;
    n8ao.configuration.intensity = cfg.aoStrength; // gear slider, live
    // occlusion tinted toward the fog purple, not dead black — keeps
    // the toon palette warm in the corners
    n8ao.configuration.color = new THREE.Color(0x181226);
    const coarse = matchMedia('(pointer: coarse)').matches;
    n8ao.setQualityMode(coarse ? 'Low' : 'Medium');
    n8ao.configuration.halfRes = coarse;
    composer.addPass(n8ao);
  }
  aoActive = aoWanted() && !!composer;
}

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
// cafe checkerboard — v2 (founder: the b/w version was "too high
// frequency spatially"): bigger tiles, neutral grey and off-white,
// gentle contrast
const checkerTex = makeCanvas(256, 256, (g) => {
  for (let r = 0; r < 4; r++) {
    for (let c2 = 0; c2 < 4; c2++) {
      g.fillStyle = (r + c2) % 2 ? '#9a958c' : '#ddd8cc';
      g.fillRect(c2 * 64, r * 64, 64, 64);
      g.fillStyle = (r + c2) % 2 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
      g.fillRect(c2 * 64 + 8 * ((r * 7 + c2) % 5), r * 64 + 12, 20, 9);
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
// soccer ball: white with black pentagon patches
const soccerTex = makeCanvas(128, 64, (g) => {
  g.fillStyle = '#eef0ee';
  g.fillRect(0, 0, 128, 64);
  g.fillStyle = '#22221f';
  for (const [px, py2, r] of [[16, 18, 9], [58, 40, 10], [98, 14, 9], [36, 54, 8], [82, 58, 8], [122, 44, 9], [4, 44, 8]]) {
    g.beginPath();
    for (let k = 0; k < 5; k++) {
      const a2 = (k / 5) * Math.PI * 2 - Math.PI / 2;
      g[k ? 'lineTo' : 'moveTo'](px + Math.cos(a2) * r, py2 + Math.sin(a2) * r);
    }
    g.closePath();
    g.fill();
  }
});
soccerTex.wrapS = THREE.RepeatWrapping;
// small deterministic canvas "paintings" keyed by body index
function artTex(i) {
  let s = (i * 2654435761) >>> 0;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  return makeCanvas(128, 96, (g) => {
    // geometric polygon cubism (founder): angular shards over a ground
    g.fillStyle = `hsl(${Math.round(rnd() * 360)},38%,70%)`;
    g.fillRect(0, 0, 128, 96);
    for (let k = 0; k < 9; k++) {
      g.fillStyle = `hsl(${Math.round(rnd() * 360)},${50 + Math.round(rnd() * 30)}%,${40 + Math.round(rnd() * 30)}%)`;
      const cx4 = rnd() * 128, cy4 = rnd() * 96, r4 = 10 + rnd() * 26;
      const n4 = 3 + Math.floor(rnd() * 3);
      const a0 = rnd() * Math.PI * 2;
      g.beginPath();
      for (let v = 0; v < n4; v++) {
        const av = a0 + (v / n4) * Math.PI * 2 + rnd() * 0.6;
        g[v ? 'lineTo' : 'moveTo'](cx4 + Math.cos(av) * r4, cy4 + Math.sin(av) * r4 * 0.8);
      }
      g.closePath();
      g.fill();
      if (rnd() < 0.4) {
        g.strokeStyle = 'rgba(30,22,18,0.7)';
        g.lineWidth = 2;
        g.stroke();
      }
    }
    g.strokeStyle = '#3a2c20';
    g.lineWidth = 8;
    g.strokeRect(0, 0, 128, 96);
  });
}

// keyboard key grid: shared by laptops and the desk keyboard
const keyTex = makeCanvas(96, 40, (g) => {
  g.fillStyle = '#23212b';
  g.fillRect(0, 0, 96, 40);
  for (let r = 0; r < 4; r++) {
    for (let k = 0; k < 12; k++) {
      g.fillStyle = '#3d3a48';
      g.fillRect(3 + k * 7.7 + (r % 2) * 2, 3 + r * 8, 6, 6);
    }
  }
  g.fillStyle = '#3d3a48';
  g.fillRect(28, 33, 40, 5); // spacebar
});
// a "someone was working" screen: dark editor, colored code lines
const codeTex = makeCanvas(128, 96, (g) => {
  g.fillStyle = '#141824';
  g.fillRect(0, 0, 128, 96);
  let s = 77777;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const cols = ['#7aa2f7', '#9ece6a', '#e0af68', '#bb9af7', '#7dcfff'];
  for (let y = 6; y < 92; y += 7) {
    let x = 6 + Math.floor(rnd() * 3) * 8;
    const segs = 1 + Math.floor(rnd() * 3);
    for (let k = 0; k < segs; k++) {
      const w = 10 + rnd() * 30;
      g.fillStyle = cols[Math.floor(rnd() * cols.length)];
      g.fillRect(x, y, w, 3);
      x += w + 6;
    }
  }
});
// grandfather-clock dial: cream face, brass ring, hands at ten past ten
const dialTex = makeCanvas(96, 96, (g) => {
  g.fillStyle = '#2c2018';
  g.fillRect(0, 0, 96, 96);
  g.fillStyle = '#b08d3e';
  g.beginPath(); g.arc(48, 48, 40, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#f2ead6';
  g.beginPath(); g.arc(48, 48, 35, 0, Math.PI * 2); g.fill();
  g.strokeStyle = '#3a2c20';
  g.lineWidth = 2;
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    g.beginPath();
    g.moveTo(48 + Math.cos(a) * 30, 48 + Math.sin(a) * 30);
    g.lineTo(48 + Math.cos(a) * 34, 48 + Math.sin(a) * 34);
    g.stroke();
  }
  g.lineWidth = 3;
  g.beginPath(); g.moveTo(48, 48); g.lineTo(48 + 16, 48 - 12); g.stroke();
  g.beginPath(); g.moveTo(48, 48); g.lineTo(48 - 20, 48 - 15); g.stroke();
  g.fillStyle = '#3a2c20';
  g.beginPath(); g.arc(48, 48, 3, 0, Math.PI * 2); g.fill();
});

// neon sign faces: glowing strokes on near-black, by design index
function neonTex(kind) {
  return makeCanvas(256, 128, (g) => {
    g.fillStyle = 'rgba(10,8,16,0.92)';
    g.fillRect(0, 0, 256, 128);
    g.lineCap = 'round';
    g.lineJoin = 'round';
    const stroke = (col, w, draw) => {
      g.strokeStyle = col;
      g.lineWidth = w;
      g.shadowColor = col;
      g.shadowBlur = 18;
      g.beginPath();
      draw();
      g.stroke();
    };
    if (kind === 0) {
      // BAR in hot pink script
      g.font = 'italic 700 72px Georgia, serif';
      g.shadowColor = '#ff4fa0';
      g.shadowBlur = 22;
      g.strokeStyle = '#ff9fce';
      g.lineWidth = 3;
      g.strokeText('BAR', 52, 88);
      g.shadowBlur = 0;
      g.fillStyle = '#ffd9ec';
      g.fillText('BAR', 52, 88);
    } else if (kind === 1) {
      // martini glass, cyan, with an olive
      stroke('#5ff0ff', 5, () => {
        g.moveTo(78, 30); g.lineTo(178, 30); g.lineTo(128, 78);
        g.lineTo(128, 104); g.moveTo(104, 108); g.lineTo(152, 108);
      });
      g.shadowColor = '#9fff5f';
      g.shadowBlur = 14;
      g.fillStyle = '#c8ff9a';
      g.beginPath();
      g.arc(112, 44, 7, 0, Math.PI * 2);
      g.fill();
    } else {
      // OPEN in warm amber block letters
      g.font = '700 56px system-ui, sans-serif';
      g.shadowColor = '#ffb84f';
      g.shadowBlur = 20;
      g.strokeStyle = '#ffd08a';
      g.lineWidth = 3;
      g.strokeText('OPEN', 44, 82);
      g.shadowBlur = 0;
      g.fillStyle = '#fff2d8';
      g.fillText('OPEN', 44, 82);
    }
  });
}

// recognition meshes can register locally-animated children (fan
// blades, oscillating heads); the frame loop drives them while the
// sim keeps owning the body transform
const animParts = [];
// deterministic per-body color variety within each class palette
function bodyColor(i, cls, dims, py) {
  const h = ((i * 2654435761) >>> 0) / 4294967296;
  if (cls === 3) return new THREE.Color(0xff9d45);
  if (cls === 0) return new THREE.Color(0x6b5f85);
  if (cls === 1) return new THREE.Color().setHSL(0.06 + h * 0.07, 0.42, 0.42 + h * 0.14);
  return new THREE.Color().setHSL((0.42 + h * 0.55) % 1, 0.62, 0.58);
}

let meshes = [];
// cloth patches: the sim's particle grids render as ONE fabric each
// (founder: "triangles, with meshed cross linking — one continuous
// fabric"). Particle bodies get a shared off-scene dummy; the sheet's
// vertices track them every frame.
let clothPatches = [];
let clothSet = new Set();
const clothDummy = new THREE.Object3D();
function rebuildCloths() {
  for (const cp of clothPatches) {
    scene.remove(cp.mesh);
    cp.mesh.geometry.dispose();
  }
  clothPatches = [];
  clothSet = new Set();
  const n = lk.lk_cloth_count(sim);
  for (let ci = 0; ci < n; ci++) {
    const info = lk.lk_cloth_info(sim, ci);
    const first = info >>> 8;
    const cols = (info >>> 4) & 0xf;
    const rows = info & 0xf;
    for (let k = 0; k < cols * rows; k++) clothSet.add(first + k);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(cols * rows * 3), 3));
    const idx = [];
    for (let j = 0; j < rows - 1; j++) {
      for (let i = 0; i < cols - 1; i++) {
        const a = j * cols + i;
        idx.push(a, a + cols, a + 1, a + 1, a + cols, a + cols + 1);
      }
    }
    geo.setIndex(idx);
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 25, specular: 0x555555, side: THREE.DoubleSide })
    );
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    scene.add(mesh);
    clothPatches.push({ first, cols, rows, mesh, tinted: false });
  }
}
rebuildCloths();
// shower-curtain rings: brass tori threaded on the curtain's top edge.
// The sim slides them on the rod (prismatic) and pops them off under
// tension; either way the ring rides its particle, so the viewer just
// parks a torus slightly above each ringed particle every frame.
let ringMeshes = [];
const ringMat = new THREE.MeshPhongMaterial({ color: 0xc9a542, shininess: 110, specular: 0xfff0c0 });
function rebuildRings() {
  for (const r of ringMeshes) scene.remove(r.mesh);
  ringMeshes = [];
  const n = lk.lk_ring_count(sim);
  for (let i = 0; i < n; i++) {
    const info = lk.lk_ring_info(sim, i) >>> 0;
    const rec = info & 0x7fffffff;
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.0045, 6, 12), ringMat);
    mesh.rotation.y = Math.PI / 2; // ring plane wraps the x-axis rod
    mesh.castShadow = false;
    scene.add(mesh);
    ringMeshes.push({ mesh, rec });
  }
}
rebuildRings();
function updateRings(data) {
  for (const r of ringMeshes) {
    const o = r.rec * 15;
    r.mesh.position.set(data[o + 5], data[o + 6] + 0.032, data[o + 7]);
  }
}
function updateCloths(data) {
  for (const cp of clothPatches) {
    if (!cp.tinted) {
      const tint = data[cp.first * 15 + 14];
      cp.mesh.material.color.setHSL((tint * 2.83) % 1, 0.42, 0.55);
      cp.tinted = true;
    }
    const attr = cp.mesh.geometry.attributes.position;
    const nP = cp.cols * cp.rows;
    for (let k = 0; k < nP; k++) {
      const o = (cp.first + k) * 15;
      attr.setXYZ(k, data[o + 5], data[o + 6], data[o + 7]);
    }
    attr.needsUpdate = true;
    cp.mesh.geometry.computeVertexNormals();
  }
}
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
function meshFor(i, shape, a, b, c, cls, py, gloss, tint) {
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
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.02) < 0.003 && Math.abs(b - 0.16) < 0.004 && Math.abs(c - 0.16) < 0.004) {
    // dartboard: rings and a bullseye on both faces (either wall)
    m = new THREE.Group();
    for (const fx of [a + 0.002, -a - 0.002]) {
      const face = new THREE.Group();
      const disc = new THREE.Mesh(new THREE.CircleGeometry(0.16, 20), toonMat(0x2c2018));
      face.add(disc);
      const r1 = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.13, 20), toonMat(0xc94f3f));
      r1.position.z = 0.002;
      face.add(r1);
      const r2 = new THREE.Mesh(new THREE.RingGeometry(0.045, 0.075, 20), toonMat(0x3f7ac9));
      r2.position.z = 0.002;
      face.add(r2);
      const bull = new THREE.Mesh(new THREE.CircleGeometry(0.018, 12), toonMat(0x62e08a));
      bull.position.z = 0.004;
      face.add(bull);
      face.rotation.y = fx > 0 ? Math.PI / 2 : -Math.PI / 2;
      face.position.x = fx;
      m.add(face);
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
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.075) < 0.003) {
    // basketball: pebbled orange with black seams
    m = new THREE.Group();
    const ball = new THREE.Mesh(new THREE.SphereGeometry(a, 16, 13), toonMat(0xd06a28));
    m.add(ball);
    for (const rx of [0, Math.PI / 2]) {
      const seam = new THREE.Mesh(new THREE.TorusGeometry(a, 0.0022, 6, 24), toonMat(0x2a231d));
      seam.rotation.x = rx;
      m.add(seam);
    }
    const seam3 = new THREE.Mesh(new THREE.TorusGeometry(a * 0.72, 0.0022, 6, 22), toonMat(0x2a231d));
    seam3.rotation.x = Math.PI / 2;
    seam3.position.y = a * 0.68;
    m.add(seam3);
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.068) < 0.003) {
    // soccer ball: white with pentagon patches
    m = new THREE.Mesh(new THREE.SphereGeometry(a, 16, 13), toonMat(0xffffff, { map: soccerTex }));
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.032) < 0.0025) {
    // tennis ball: fuzzy optic yellow
    m = new THREE.Mesh(roughen(new THREE.SphereGeometry(a, 14, 11), 0.1), toonMat(0xcfe04a));
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.021) < 0.002) {
    // golf ball: bright white, hard specular
    m = new THREE.Mesh(
      new THREE.SphereGeometry(a, 12, 10),
      new THREE.MeshPhongMaterial({ color: 0xf4f4ee, shininess: 130, specular: 0xffffff })
    );
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.016) < 0.002 && Math.abs(b - 0.48) < 0.02 && Math.abs(c - 0.035) < 0.004) {
    // leaning lawn implements: pole + rake/shovel/broom head by index
    // (dynamic cousins of the wall-rack statics — the group follows the
    // body quaternion, so the sim's spawn tilt reads as a lean for free)
    m = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, b * 1.9, 6), toonMat(0x9a7548, { map: woodTex }));
    m.add(pole);
    const v3 = i % 3;
    if (v3 === 0) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.14), toonMat(0x8a8f9e));
      head.position.y = -b * 0.92;
      m.add(head);
      for (let k2 = 0; k2 < 5; k2++) {
        const tine = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.05, 4), toonMat(0x8a8f9e));
        tine.position.set(0, -b * 0.92 - 0.03, -0.06 + k2 * 0.03);
        m.add(tine);
      }
    } else if (v3 === 1) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.12, 0.09), toonMat(0x8a8f9e));
      blade.position.y = -b * 0.95;
      m.add(blade);
    } else {
      const brush = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.1, 0.11), toonMat(0xc9a86a));
      brush.position.y = -b * 0.95;
      m.add(brush);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.012) < 0.0015 && Math.abs(b - 0.44) < 0.02 && Math.abs(c - 0.012) < 0.0015) {
    // golf club: steel shaft, grip, angled head at the floor end
    m = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, b * 1.9, 6), toonMat(0xb8bcc4));
    m.add(shaft);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.16, 6), toonMat(0x2a2732));
    grip.position.y = b * 0.8;
    m.add(grip);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, 0.055), toonMat(0x8a8f9e));
    head.position.set(0, -b * 0.95, 0.02);
    head.rotation.x = 0.3;
    m.add(head);
  } else if (shape === 0 && Math.abs(a - 0.085) < 0.004 && Math.abs(b - 0.004) < 0.0015 && Math.abs(c - 0.026) < 0.003) {
    // handsaw: tapered steel blade + wooden grip
    m = new THREE.Group();
    const blade = new THREE.Mesh(new THREE.BoxGeometry(a * 1.6, 0.004, c * 1.7), new THREE.MeshPhongMaterial({ color: 0xc4c8ce, shininess: 110, specular: 0xffffff }));
    blade.position.x = -a * 0.25;
    m.add(blade);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.014, 0.036), toonMat(0x8a5c34, { map: woodTex }));
    grip.position.set(a * 0.72, 0.004, 0);
    m.add(grip);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.24) < 0.005 && Math.abs(b - 0.07) < 0.005 && Math.abs(c - 0.3) < 0.005) {
    // riding mower deck: green enamel with a dark skirt
    m = new THREE.Group();
    const deck = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), new THREE.MeshPhongMaterial({ color: 0x2f7a34, shininess: 70, specular: 0xaaccaa }));
    m.add(deck);
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(a * 2.1, b * 0.8, c * 2.05), toonMat(0x24251f));
    skirt.position.y = -b * 0.7;
    m.add(skirt);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.13) < 0.004 && Math.abs(b - 0.08) < 0.004 && Math.abs(c - 0.14) < 0.004) {
    // riding mower hood: green with a grille stripe
    m = new THREE.Group();
    const hood = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), new THREE.MeshPhongMaterial({ color: 0x2f7a34, shininess: 70, specular: 0xaaccaa }));
    m.add(hood);
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.5, b * 1.1), toonMat(0xd8c93a));
    stripe.position.set(0, 0, -c - 0.002);
    stripe.rotation.y = Math.PI;
    m.add(stripe);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.055) < 0.003 && Math.abs(b - 0.21) < 0.01 && Math.abs(c - 0.055) < 0.003) {
    // golf bag: red barrel with a shoulder strap and top rim
    m = new THREE.Group();
    const bag = new THREE.Mesh(new THREE.CylinderGeometry(a * 1.05, a * 0.95, b * 2, 12), toonMat(0xb03a34));
    m.add(bag);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(a * 0.95, 0.008, 6, 14), toonMat(0x2a2732));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = b;
    m.add(rim);
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.012, b * 1.4, 0.03), toonMat(0x2a2732));
    strap.position.set(a + 0.008, 0, 0);
    strap.rotation.z = 0.12;
    m.add(strap);
  } else if (cls === 1 && shape === 0 && ((Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.11) < 0.004 && Math.abs(c - 0.11) < 0.004) || (Math.abs(a - 0.04) < 0.003 && Math.abs(b - 0.07) < 0.003 && Math.abs(c - 0.07) < 0.003) || (Math.abs(a - 0.018) < 0.002 && Math.abs(b - 0.1) < 0.004 && Math.abs(c - 0.1) < 0.004) || (Math.abs(a - 0.018) < 0.002 && Math.abs(b - 0.062) < 0.003 && Math.abs(c - 0.062) < 0.003))) {
    // riding mower / tricycle wheels: rubber cylinders with a hub
    m = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(b, b, a * 2, 14), toonMat(0x24221f));
    tire.rotation.z = Math.PI / 2;
    m.add(tire);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(b * 0.45, b * 0.45, a * 2.05, 10), toonMat(0xd8c93a));
    hub.rotation.z = Math.PI / 2;
    m.add(hub);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.06) < 0.003 && Math.abs(b - 0.012) < 0.002 && Math.abs(c - 0.06) < 0.003) {
    // riding mower steering wheel: black rim + spoke hub
    m = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.TorusGeometry(a * 0.85, 0.009, 6, 16), toonMat(0x24221f));
    rim.rotation.x = Math.PI / 2;
    m.add(rim);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.02, 8), toonMat(0x24221f));
    m.add(hub);
  } else if (cls === 2 && shape === 0 && c < 0.035 && a >= 0.2 && b >= 0.14) {
    // flatscreen TV, z-thin: bezel + glossy screen facing the couch
    m = new THREE.Group();
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x2a2732));
    m.add(bezel);
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(a * 1.8, b * 1.8),
      new THREE.MeshPhongMaterial({ color: 0x101a26, emissive: 0x11323e, shininess: 130, specular: 0xaaccdd })
    );
    screen.position.z = -c - 0.002;
    screen.rotation.y = Math.PI;
    m.add(screen);
  } else if (cls === 0 && shape === 0 && (cfg.room | 0) === 7 && ((Math.abs(a - 0.04) < 0.005 && Math.abs(b - 1.25) < 0.01) || (Math.abs(b - 0.55) < 0.01 && (Math.abs(c - 0.015) < 0.004 || Math.abs(a - 0.015) < 0.004)))) {
    // tower walls: every wall gets its own paint (hashed per body), so
    // each apartment reads as somebody's color choices
    m = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      toonMat(new THREE.Color().setHSL((0.04 + h * 0.96) % 1, 0.26, 0.64))
    );
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.085) < 0.004 && Math.abs(b - 0.11) < 0.006 && Math.abs(c - 0.006) < 0.0025) {
    // shower curtain strip: translucent cloth
    m = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      new THREE.MeshPhongMaterial({ color: 0xe8eef2, shininess: 40, specular: 0xccddee, transparent: true, opacity: 0.72 })
    );
    m.userData.noShadow = true;
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.035) < 0.003 && Math.abs(b - 0.04) < 0.004 && Math.abs(c - 0.035) < 0.003) {
    // toilet paper roll: white cylinder with a core
    m = new THREE.Group();
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(a, a, b * 2, 12), toonMat(0xf2f0ea));
    m.add(roll);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.4, a * 0.4, b * 2.02, 10), toonMat(0xb8a888));
    m.add(core);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.14) < 0.005 && Math.abs(b - 0.18) < 0.006 && Math.abs(c - 0.01) < 0.004 && gloss > 0.85) {
    // the hanging mirror: silvered glass in a gold frame, breakable
    m = new THREE.Group();
    const glassM = new THREE.Mesh(
      new THREE.BoxGeometry(a * 1.85, b * 1.85, 0.006),
      new THREE.MeshPhongMaterial({ color: 0xcfdde6, shininess: 200, specular: 0xffffff })
    );
    m.add(glassM);
    const frameM = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, 0.014), new THREE.MeshPhongMaterial({ color: 0xb08d3e, shininess: 90, specular: 0xffe8b0 }));
    frameM.position.z = 0.002;
    glassM.position.z = -0.006;
    m.add(frameM);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.07) < 0.004 && Math.abs(b - 0.07) < 0.004 && Math.abs(c - 0.05) < 0.004) {
    // oscillating fan head: cage, hub, spinning blades, slow yaw
    m = new THREE.Group();
    const face = new THREE.Group();
    const cage = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.004, 6, 20), toonMat(0x8a8f9e));
    face.add(cage);
    const spinner = new THREE.Group();
    for (let k2 = 0; k2 < 4; k2++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.022, 0.004), toonMat(0xb8bcc4));
      blade.position.set(Math.cos((k2 * Math.PI) / 2) * 0.032, Math.sin((k2 * Math.PI) / 2) * 0.032, 0);
      blade.rotation.z = (k2 * Math.PI) / 2;
      spinner.add(blade);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03, 8), toonMat(0x2a2732));
    hub.rotation.x = Math.PI / 2;
    face.add(hub);
    face.add(spinner);
    face.position.z = -0.03;
    m.add(face);
    animParts.push({ node: spinner, mode: 'spin' });
    animParts.push({ node: face, mode: 'yaw' });
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.11) < 0.005 && Math.abs(b - 0.33) < 0.015 && Math.abs(c - 0.03) < 0.006) {
    // guitar: waisted body, neck, headstock, strings
    m = new THREE.Group();
    const wood = toonMat(0xa5642c, { map: woodTex });
    const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.05, 18), wood);
    lower.rotation.x = Math.PI / 2;
    lower.position.y = -0.19;
    m.add(lower);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.078, 0.078, 0.05, 16), wood);
    upper.rotation.x = Math.PI / 2;
    upper.position.y = -0.045;
    m.add(upper);
    const hole = new THREE.Mesh(new THREE.CircleGeometry(0.032, 14), toonMat(0x241a10));
    hole.position.set(0, -0.12, -0.026);
    hole.rotation.y = Math.PI;
    m.add(hole);
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.34, 0.018), toonMat(0x6a4022));
    neck.position.y = 0.16;
    m.add(neck);
    const head3 = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.07, 0.016), toonMat(0x2a2732));
    head3.position.y = 0.36;
    m.add(head3);
    for (const sx2 of [-0.008, 0, 0.008]) {
      const str = new THREE.Mesh(new THREE.BoxGeometry(0.0015, 0.5, 0.0015), toonMat(0xd8dce4));
      str.position.set(sx2, 0.05, -0.027);
      m.add(str);
    }
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.32) < 0.005 && Math.abs(b - 0.42) < 0.005 && Math.abs(c - 0.28) < 0.005) {
    // stove body: enamel range with an oven door and handle
    m = new THREE.Group();
    const bodyS = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), new THREE.MeshPhongMaterial({ color: 0xd8d4cc, shininess: 70, specular: 0xccd6dd }));
    m.add(bodyS);
    const oven = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.5, b * 1.0), toonMat(0x2a2732));
    oven.position.set(0, -0.04, -c - 0.002);
    oven.rotation.y = Math.PI;
    m.add(oven);
    const handle3 = new THREE.Mesh(new THREE.BoxGeometry(a * 1.6, 0.02, 0.02), toonMat(0x8a8f9e));
    handle3.position.set(0, b * 0.55, -c - 0.02);
    m.add(handle3);
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.34) < 0.005 && Math.abs(b - 0.02) < 0.005 && Math.abs(c - 0.29) < 0.005) {
    // cooktop: dark top, four burners
    m = new THREE.Group();
    const top3 = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x2a2732));
    m.add(top3);
    for (const [bx3, bz3] of [[-0.15, -0.12], [0.15, -0.12], [-0.15, 0.12], [0.15, 0.12]]) {
      const burner = new THREE.Mesh(new THREE.CircleGeometry(0.055, 14), toonMat(0x14121a));
      burner.rotation.x = -Math.PI / 2;
      burner.position.set(bx3, b + 0.002, bz3);
      m.add(burner);
      const ring2 = new THREE.Mesh(new THREE.RingGeometry(0.04, 0.048, 14), toonMat(0x53c8d8));
      ring2.rotation.x = -Math.PI / 2;
      ring2.position.set(bx3, b + 0.003, bz3);
      m.add(ring2);
    }
  } else if (cls === 0 && shape === 0 && Math.abs(a - 0.16) < 0.004 && Math.abs(b - 0.06) < 0.004 && Math.abs(c - 0.14) < 0.004) {
    // kitchen sink: steel basin inset with a faucet arc
    m = new THREE.Group();
    const steel = new THREE.MeshPhongMaterial({ color: 0xc8ccd4, shininess: 120, specular: 0xffffff });
    const rim2 = new THREE.Mesh(new THREE.BoxGeometry(a * 2, 0.012, c * 2), steel);
    rim2.position.y = b;
    m.add(rim2);
    const bowl = new THREE.Mesh(new THREE.BoxGeometry(a * 1.7, 0.01, c * 1.7), toonMat(0x8a8f9e));
    bowl.position.y = b - 0.035;
    m.add(bowl);
    const spout = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.008, 6, 12, Math.PI), steel);
    spout.position.set(0, b + 0.045, c * 0.75);
    m.add(spout);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.055) < 0.003 && Math.abs(b - 0.045) < 0.004 && Math.abs(c - 0.055) < 0.003 && gloss > 0.5) {
    // steel pot: cylinder, rim, handle nubs
    m = new THREE.Group();
    const steelP = new THREE.MeshPhongMaterial({ color: 0xc8ccd4, shininess: 110, specular: 0xffffff });
    const potB = new THREE.Mesh(new THREE.CylinderGeometry(a * 1.05, a * 0.95, b * 2, 14), steelP);
    m.add(potB);
    for (const hx4 of [-1, 1]) {
      const nub = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.01, 0.03), toonMat(0x2a2732));
      nub.position.set(hx4 * (a + 0.012), b * 0.4, 0);
      m.add(nub);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(gloss - 0.12) < 0.005) {
    // cardboard: every box the sim marks with the 0.12-gloss signature
    // reads as kraft brown with a packing-tape seam, not party pastel
    m = new THREE.Group();
    const hcard = ((i * 2654435761) >>> 0) / 4294967296;
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      toonMat(new THREE.Color().setHSL(0.075 + hcard * 0.02, 0.42, 0.52 + hcard * 0.1))
    );
    m.add(box);
    const tape = new THREE.Mesh(new THREE.BoxGeometry(a * 0.36, b * 2.01, c * 2.01), toonMat(0xc2a06a));
    m.add(tape);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.027) < 0.004 && Math.abs(b - 0.078) < 0.012 && Math.abs(c - 0.027) < 0.004) {
    // liquor/wine bottle: colored glass cylinder, shoulder, neck, cap.
    // Palette keyed by body index so a packed shelf reads as a real
    // back-bar, not a row of clones; clear bottles get transparency.
    // Glass casts no shadow — 150 bottles painting hard ellipses on the
    // back wall read as a scalloped garland, measured and rejected
    m = new THREE.Group();
    m.userData.noShadow = true;
    const BOTTLE_GLASS = [0x8a4f1a, 0x2e6a38, 0x7a2530, 0x2f5a7a, 0xcfd8da, 0x4a2c12];
    const ci = ((i * 2654435761) >>> 0) % 6;
    const glassCol = BOTTLE_GLASS[ci];
    const glassMat = new THREE.MeshPhongMaterial({
      color: glassCol, shininess: 130, specular: 0xffffff,
      transparent: ci === 4, opacity: ci === 4 ? 0.55 : 1,
    });
    const body2 = new THREE.Mesh(new THREE.CylinderGeometry(a * 1.12, a * 1.12, b * 1.44, 10), glassMat);
    body2.position.y = -b * 0.28;
    m.add(body2);
    const shoulder = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, a * 1.05, b * 0.28, 10), glassMat);
    shoulder.position.y = b * 0.58;
    m.add(shoulder);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.0085, b * 0.5, 8), glassMat);
    neck.position.y = b * 0.78;
    m.add(neck);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.0095, 0.0095, 0.012, 8), toonMat([0xd8c93a, 0xb03a34, 0x2a2732, 0xc9c2b0][((i * 7) >>> 0) % 4]));
    cap.position.y = b;
    m.add(cap);
    const label = new THREE.Mesh(new THREE.CylinderGeometry(a * 1.13, a * 1.13, b * 0.5, 10), toonMat(ci % 2 ? 0xe8e2d0 : 0xd8cdb2));
    label.position.y = -b * 0.32;
    m.add(label);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.024) < 0.0025 && Math.abs(b - 0.045) < 0.004 && Math.abs(c - 0.024) < 0.0025) {
    // bar glass: clear tumbler (no shadow — glass)
    m = new THREE.Mesh(
      new THREE.CylinderGeometry(a * 1.1, a * 0.95, b * 2, 10),
      new THREE.MeshPhongMaterial({ color: 0xdfeaf0, shininess: 150, specular: 0xffffff, transparent: true, opacity: 0.5 })
    );
    m.userData.noShadow = true;
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.02) < 0.002 && Math.abs(b - 0.04) < 0.004 && Math.abs(c - 0.02) < 0.002) {
    // condiment squeeze bottle: ketchup red or mustard yellow by tint
    m = new THREE.Group();
    const col = tint !== undefined && tint > 0.85 ? 0xc9302a : 0xd8a622;
    const squeezeMat = new THREE.MeshPhongMaterial({ color: col, shininess: 70, specular: 0xccbbaa });
    const body3 = new THREE.Mesh(new THREE.CylinderGeometry(a * 1.05, a * 1.05, b * 1.6, 10), squeezeMat);
    body3.position.y = -b * 0.2;
    m.add(body3);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.004, a * 0.9, b * 0.5, 8), squeezeMat);
    tip.position.y = b * 0.75;
    m.add(tip);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.14) < 0.005 && Math.abs(b - 0.015) < 0.003 && Math.abs(c - 0.05) < 0.004) {
    // skateboard: kicked deck + trucks + four wheels
    m = new THREE.Group();
    const deckCol = [0xc94f3f, 0x3f7ac9][i % 2];
    const deck = new THREE.Mesh(new THREE.BoxGeometry(a * 1.9, 0.012, c * 1.9), toonMat(deckCol));
    deck.position.y = 0.006;
    m.add(deck);
    for (const kx of [-1, 1]) {
      const kick = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.01, c * 1.85), toonMat(deckCol));
      kick.position.set(kx * (a * 1.9 * 0.5 + 0.012), 0.016, 0);
      kick.rotation.z = kx * 0.45;
      m.add(kick);
    }
    for (const wx of [-a * 1.1, a * 1.1]) {
      for (const wz of [-c * 0.85, c * 0.85]) {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.012, 8), toonMat(0xe8dfc9));
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(wx, -0.008, wz);
        m.add(wheel);
      }
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.11) < 0.005 && Math.abs(b - 0.9) < 0.03 && Math.abs(c - 0.025) < 0.004) {
    // surfboard: squashed-sphere longboard, center stripe, tail fin
    m = new THREE.Group();
    const board = new THREE.Mesh(
      new THREE.SphereGeometry(1, 18, 12),
      new THREE.MeshPhongMaterial({ color: 0x3fb8b0, shininess: 90, specular: 0xdff2ee })
    );
    board.scale.set(a, b, c * 0.9);
    m.add(board);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(a * 0.36, b * 1.2, 0.004), toonMat(0xf2ead8));
    stripe.position.z = -c * 0.86;
    m.add(stripe);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.09, 0.05), toonMat(0x2a2732));
    fin.position.set(0, -b * 0.78, c * 1.4);
    m.add(fin);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.045) < 0.003 && Math.abs(b - 0.09) < 0.005 && Math.abs(c - 0.045) < 0.003) {
    // traffic cone: safety orange with a reflective band
    m = new THREE.Group();
    const cone = new THREE.Mesh(new THREE.ConeGeometry(a * 0.95, b * 2, 12), toonMat(0xe06428));
    m.add(cone);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.62, a * 0.72, b * 0.4, 12), toonMat(0xf2ede0));
    band.position.y = -b * 0.15;
    m.add(band);
    const base = new THREE.Mesh(new THREE.BoxGeometry(a * 2.2, 0.012, c * 2.2), toonMat(0xd85a20));
    base.position.y = -b + 0.006;
    m.add(base);
  } else if (cls === 1 && shape === 0 && ((Math.abs(a - 0.012) < 0.0015 && Math.abs(b - 0.012) < 0.0015 && Math.abs(c - 0.16) < 0.005) || (Math.abs(a - 0.012) < 0.0015 && Math.abs(b - 0.09) < 0.004 && Math.abs(c - 0.012) < 0.0015) || (Math.abs(a - 0.07) < 0.004 && Math.abs(b - 0.01) < 0.0015 && Math.abs(c - 0.01) < 0.0015) || (Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.012) < 0.0015 && Math.abs(c - 0.045) < 0.003) || (Math.abs(a - 0.12) < 0.004 && Math.abs(b - 0.012) < 0.0015 && Math.abs(c - 0.012) < 0.0015)) && py < 0.6) {
    // tricycle frame parts: little-red-trike enamel
    m = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      new THREE.MeshPhongMaterial({ color: 0xc9302a, shininess: 100, specular: 0xffccbb })
    );
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.008) < 0.0015 && Math.abs(b - 0.6) < 0.03 && Math.abs(c - 0.008) < 0.0015) {
    // fishing rod: tapered blank + reel + grip
    m = new THREE.Group();
    const blank = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.007, b * 2, 6), toonMat(0x6a5238));
    m.add(blank);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.18, 6), toonMat(0x2a2732));
    grip.position.y = -b * 0.82;
    m.add(grip);
    const reel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.012, 10), toonMat(0x8a8f9e));
    reel.rotation.z = Math.PI / 2;
    reel.position.set(0.015, -b * 0.62, 0);
    m.add(reel);
  } else if (cls === 0 && shape === 0 && gloss > 0.95 && Math.min(a, c) < 0.02 && b >= 0.1 && b <= 0.2 && Math.max(a, c) <= 0.45) {
    // NEON: glowing sign face on a near-black backing; tint picks the
    // design. DoubleSide so it reads from any camera angle.
    m = new THREE.Group();
    const along = Math.max(a, c);
    const kind2 = tint < 0.3 ? 0 : tint < 0.7 ? 1 : 2;
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(along * 2, b * 2),
      new THREE.MeshBasicMaterial({ map: neonTex(kind2), transparent: true, side: THREE.DoubleSide })
    );
    // face INTO the room or the text reads mirrored (screenshot-caught):
    // far wall looks -z; the right-wall sign looks -x
    face.rotation.y = c > a ? -Math.PI / 2 : Math.PI;
    m.add(face);
    m.userData.noShadow = true;
  } else if (cls === 0 && shape === 0 && gloss > 0.85 && Math.min(a, c) < 0.02 && b >= 0.14 && b <= 0.5 && Math.max(a, c) >= 0.14 && Math.max(a, c) <= 0.6) {
    // window: frame, warm daylight pane, muntins — thin axis picks the
    // wall (far wall = thin z, side wall = thin x); pane is DoubleSide
    // and centered so either side of the wall reads
    m = new THREE.Group();
    const along = Math.max(a, c);
    const side2 = c > a; // thin x = side-wall window
    const wframe = new THREE.Mesh(
      side2 ? new THREE.BoxGeometry(0.02, b * 2 + 0.03, along * 2 + 0.03) : new THREE.BoxGeometry(along * 2 + 0.03, b * 2 + 0.03, 0.02),
      toonMat(0x3a2c20)
    );
    m.add(wframe);
    // panes sit just OUTSIDE the frame slab on both faces — centered
    // inside it they vanish and the window reads as a dark board
    // (screenshot-caught)
    for (const pd of [-0.014, 0.014]) {
      const pane = new THREE.Mesh(
        new THREE.PlaneGeometry(along * 1.9, b * 1.9),
        new THREE.MeshBasicMaterial({ color: 0xffe7c2, side: THREE.DoubleSide })
      );
      if (side2) pane.rotation.y = Math.PI / 2;
      pane.position.set(side2 ? pd : 0, 0, side2 ? 0 : pd);
      m.add(pane);
    }
    for (const mf of [-0.63, 0, 0.63]) {
      for (const md of [-0.016, 0.016]) {
        const mull = new THREE.Mesh(
          side2 ? new THREE.BoxGeometry(0.006, b * 1.9, 0.014) : new THREE.BoxGeometry(0.014, b * 1.9, 0.006),
          toonMat(0x3a2c20)
        );
        mull.position.set(side2 ? md : mf * along, 0, side2 ? mf * along : md);
        m.add(mull);
      }
    }
    m.userData.noShadow = true;
  } else if (cls === 0 && shape === 0 && Math.abs(b - 0.012) < 0.004 && Math.max(a, c) >= 0.2 && Math.max(a, c) <= 0.36 && Math.min(a, c) <= 0.025) {
    // blind headrail: plain valance, not a painting
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xe8e2d2)));
  } else if (cls === 2 && shape === 0 && Math.abs(b - 0.004) < 0.0015 && Math.abs(Math.min(a, c) - 0.032) < 0.004 && Math.max(a, c) >= 0.2 && Math.max(a, c) <= 0.36) {
    // mini blind slat (either wall orientation): ivory with a soft
    // sheen and lift-cord dots at the ends of the long axis
    m = new THREE.Group();
    const slat = new THREE.Mesh(
      new THREE.BoxGeometry(a * 2, b * 2, c * 2),
      new THREE.MeshPhongMaterial({ color: 0xece6d6, shininess: 40, specular: 0x999080 })
    );
    m.add(slat);
    const along3 = Math.max(a, c);
    for (const ex of [-along3 * 0.85, along3 * 0.85]) {
      const cord = new THREE.Mesh(new THREE.BoxGeometry(0.004, b * 2 + 0.002, 0.004), toonMat(0xc9c2b0));
      cord.position.set(a > c ? ex : 0, 0, a > c ? 0 : ex);
      m.add(cord);
    }
    m.userData.noShadow = true; // ten slats of VSM shadow = noise
  } else if (cls === 0 && shape === 0 && b < 0.02 && Math.min(a, c) < 0.022 && Math.max(a, c) >= 0.36 && Math.max(a, c) <= 0.7) {
    // curtain rod / long towel rail: a brass cylinder along the long axis
    m = new THREE.Group();
    const rlen = Math.max(a, c);
    const rod2 = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, rlen * 2, 8), ringMat);
    rod2.rotation.z = a > c ? Math.PI / 2 : 0;
    if (c > a) rod2.rotation.x = Math.PI / 2;
    m.add(rod2);
    for (const ex of [-rlen, rlen]) {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 6), ringMat);
      cap.position.set(a > c ? ex : 0, 0, a > c ? 0 : ex);
      m.add(cap);
    }
    m.userData.noShadow = true;
  } else if (cls === 1 && Math.abs(gloss - 0.32) < 0.01 && Math.max(a, b, c) <= 0.1) {
    // terracotta planter pieces — gloss 0.32 is reserved as the clay
    // signature (material-signature-as-identity, like cardboard)
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xb26644)));
  } else if (cls === 2 && shape === 1 && a > 0.021 && a < 0.027 && gloss <= 0.1) {
    // dirt clod out of a planter
    m = new THREE.Group();
    const dg = new THREE.SphereGeometry(a, 8, 6);
    roughen(dg, 0.3);
    m.add(new THREE.Mesh(dg, toonMat(0x4a3626)));
  } else if (cls === 2 && shape === 1 && a > 0.024 && a < 0.028 && gloss > 0.1 && gloss < 0.25) {
    // crumpled paper out of the trash
    m = new THREE.Group();
    const pg = new THREE.SphereGeometry(a, 8, 6);
    roughen(pg, 0.45);
    m.add(new THREE.Mesh(pg, toonMat(0xe4ddca)));
  } else if (cls === 2 && shape === 1 && a > 0.026 && a < 0.03 && Math.abs(gloss - 0.35) < 0.03 && tint !== undefined && tint < 0.7) {
    // fruit: apple / orange / lime by index, with a stem
    m = new THREE.Group();
    const fcol = [0xc23b2e, 0xe08a2e, 0x8fba3c, 0xd8b13a][i % 4];
    m.add(new THREE.Mesh(new THREE.SphereGeometry(a, 12, 10), toonMat(fcol)));
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0035, 0.012, 5), toonMat(0x4a3626));
    stem.position.y = a + 0.004;
    m.add(stem);
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.038) < 0.002 && gloss > 0.9) {
    // snow globe: glass dome, white base, tiny tree inside
    m = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(a, 14, 12), crystalMat());
    m.add(dome);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.014, 12), toonMat(0x8a4a3a));
    base.position.y = -a + 0.009;
    m.add(base);
    const snow = new THREE.Mesh(new THREE.CircleGeometry(0.024, 10), toonMat(0xf4f4f8));
    snow.rotation.x = -Math.PI / 2;
    snow.position.y = -a + 0.017;
    m.add(snow);
    const tree = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.03, 7), toonMat(0x2e6b3a));
    tree.position.y = -a + 0.032;
    m.add(tree);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.014) < 0.0025 && Math.abs(b - 0.11) < 0.005 && Math.abs(c - 0.014) < 0.0025) {
    // the plant standing in a planter: trunk + leafy crown
    m = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.015, b * 2, 7), toonMat(0x5a4330));
    m.add(trunk);
    const leaf = toonMat(0x3e7a3a);
    for (const [lx, ly, lz, r] of [[0, b + 0.06, 0, 0.085], [0.06, b + 0.01, 0.02, 0.06], [-0.05, b + 0.03, -0.04, 0.065]]) {
      const fol = new THREE.Mesh(new THREE.SphereGeometry(r, 9, 7), leaf);
      fol.position.set(lx, ly, lz);
      m.add(fol);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.06) < 0.003 && Math.abs(b - 0.045) < 0.0035 && Math.abs(c - 0.06) < 0.003 && gloss < 0.5) {
    // hanging plant basket: pot, foliage dome, trailing vines
    m = new THREE.Group();
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.045, b * 2, 12), toonMat(0x8a4a3a));
    m.add(pot);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), toonMat(0x3e7a3a));
    dome.scale.y = 0.65;
    dome.position.y = b + 0.02;
    m.add(dome);
    const vine = toonMat(0x35683a, { side: THREE.DoubleSide });
    for (let k = 0; k < 5; k++) {
      const ang = (k / 5) * Math.PI * 2 + 0.4;
      const v = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 0.11), vine);
      v.position.set(Math.cos(ang) * 0.055, -0.02, Math.sin(ang) * 0.055);
      v.rotation.y = -ang;
      v.rotation.x = 0.35;
      m.add(v);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.155) < 0.004 && Math.abs(b - 0.78) < 0.012) {
    // grandfather clock case: walnut cabinet, glass door, brass columns
    m = new THREE.Group();
    const wood = new THREE.MeshPhongMaterial({ color: 0x5e4028, shininess: 55, specular: 0xc9a86a });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), wood));
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(a * 1.5, b * 1.7),
      new THREE.MeshPhongMaterial({ color: 0x1c1a22, shininess: 150, specular: 0xaabbcc, transparent: true, opacity: 0.5 })
    );
    glass.rotation.y = Math.PI;
    glass.position.z = -c - 0.002;
    m.add(glass);
    const brassCol = new THREE.MeshPhongMaterial({ color: 0xb08d3e, shininess: 90, specular: 0xffe8b0 });
    for (const ex of [-a + 0.012, a - 0.012]) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, b * 2, 8), brassCol);
      col.position.set(ex, 0, -c - 0.004);
      m.add(col);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.175) < 0.004 && Math.abs(b - 0.125) < 0.005 && Math.abs(c - 0.115) < 0.005) {
    // clock hood: dial face forward, carved crown
    m = new THREE.Group();
    const wood = new THREE.MeshPhongMaterial({ color: 0x5e4028, shininess: 55, specular: 0xc9a86a });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), wood));
    const dial = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.2), toonMat(0xffffff, { map: dialTex }));
    dial.rotation.y = Math.PI;
    dial.position.z = -c - 0.002;
    m.add(dial);
    const crown = new THREE.Mesh(new THREE.BoxGeometry(a * 2.15, 0.02, c * 2.15), wood);
    crown.position.y = b + 0.01;
    m.add(crown);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.012) < 0.002 && Math.abs(b - 0.1) < 0.005 && Math.abs(c - 0.012) < 0.002 && gloss > 0.7) {
    // clock pendulum: brass rod + bob, with a gentle visual sway (the
    // body itself is honest physics on its joint)
    m = new THREE.Group();
    const brassP = new THREE.MeshPhongMaterial({ color: 0xc9a542, shininess: 110, specular: 0xfff0c0 });
    const sway = new THREE.Group();
    sway.position.y = b; // pivot at the hanger point
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, b * 1.7, 6), brassP);
    rod.position.y = -b * 0.85;
    sway.add(rod);
    const bob = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.008, 14), brassP);
    bob.rotation.x = Math.PI / 2;
    bob.position.y = -b * 1.75;
    sway.add(bob);
    m.add(sway);
    animParts.push({ node: sway, mode: 'pend' });
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.08) < 0.003 && Math.abs(c - 0.05) < 0.003 && Math.abs(gloss - 0.6) < 0.12) {
    // marble bust: plinth, shoulders, head
    m = new THREE.Group();
    const marble = new THREE.MeshPhongMaterial({ color: 0xdcd8d0, shininess: 55, specular: 0xbbc4cc });
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(a * 1.9, 0.02, c * 1.9), marble);
    plinth.position.y = -b + 0.01;
    m.add(plinth);
    const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.014, a * 0.95, 0.06, 10), marble);
    chest.position.y = -b + 0.05;
    m.add(chest);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 9), marble);
    head.scale.set(0.85, 1.1, 0.9);
    head.position.y = b - 0.038;
    m.add(head);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.006, 0.014, 5), marble);
    nose.rotation.x = -Math.PI / 2;
    nose.position.set(0, b - 0.036, -0.03);
    m.add(nose);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.14) < 0.004 && Math.abs(c - 0.04) < 0.003) {
    // standing statue torso: a robed figure
    m = new THREE.Group();
    const marble = new THREE.MeshPhongMaterial({ color: 0xdcd8d0, shininess: 55, specular: 0xbbc4cc });
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.052, b * 2, 10), marble);
    m.add(robe);
    for (const ex of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.07, 3, 6), marble);
      arm.position.set(ex * 0.042, 0.03, 0);
      arm.rotation.z = ex * 0.35;
      m.add(arm);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.028) < 0.0025 && Math.abs(b - 0.032) < 0.0025 && Math.abs(c - 0.024) < 0.0025) {
    // statue head
    m = new THREE.Group();
    const marble = new THREE.MeshPhongMaterial({ color: 0xdcd8d0, shininess: 55, specular: 0xbbc4cc });
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 9), marble);
    head.scale.set(0.9, 1.08, 0.85);
    m.add(head);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.14) < 0.004 && Math.abs(b - 0.008) < 0.0025 && Math.abs(c - 0.1) < 0.004) {
    // TV tray top: faux-wood with a raised lip
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x8a5c38, { map: woodTex })));
    const lipM = toonMat(0x6e4426);
    for (const [w, d, x, z] of [[a * 2, 0.008, 0, c], [a * 2, 0.008, 0, -c], [0.008, c * 2, a, 0], [0.008, c * 2, -a, 0]]) {
      const lip = new THREE.Mesh(new THREE.BoxGeometry(w, 0.01, d), lipM);
      lip.position.set(x, b + 0.005, z);
      m.add(lip);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.012) < 0.002 && Math.abs(b - 0.205) < 0.005 && Math.abs(c - 0.09) < 0.004) {
    // TV tray legs: crossed folding tubes inside the panel volume
    m = new THREE.Group();
    const tube = new THREE.MeshPhongMaterial({ color: 0x8a8f98, shininess: 80, specular: 0xdde4ee });
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, b * 2.15, 8), tube);
      leg.rotation.x = s * 0.42;
      m.add(leg);
    }
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.115) < 0.004 && Math.abs(b - 0.009) < 0.003 && Math.abs(c - 0.078) < 0.004) {
    // open laptop base: aluminum deck, key grid, trackpad
    m = new THREE.Group();
    const alu = new THREE.MeshPhongMaterial({ color: 0x9aa0a8, shininess: 70, specular: 0xdde4ee });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), alu));
    const keys = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.7, c * 1.05), toonMat(0xffffff, { map: keyTex }));
    keys.rotation.x = -Math.PI / 2;
    keys.position.set(0, b + 0.001, 0.012);
    m.add(keys);
    const pad = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.032), toonMat(0x83888f));
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(0, b + 0.001, -c + 0.022);
    m.add(pad);
  } else if (cls === 1 && shape === 0 && Math.abs(a - 0.115) < 0.004 && Math.abs(b - 0.072) < 0.004 && Math.abs(c - 0.007) < 0.003) {
    // open laptop screen: dark bezel, glowing code
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x2a2732)));
    const scr = new THREE.Mesh(
      new THREE.PlaneGeometry(a * 1.85, b * 1.8),
      new THREE.MeshBasicMaterial({ map: codeTex })
    );
    scr.rotation.y = Math.PI;
    scr.position.z = -c - 0.001;
    m.add(scr);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.09) < 0.003 && Math.abs(b - 0.008) < 0.0025 && Math.abs(c - 0.07) < 0.003 && gloss > 0.7) {
    // closed laptop on the home desk: slim slab, glowing logo
    m = new THREE.Group();
    const alu = new THREE.MeshPhongMaterial({ color: 0x9aa0a8, shininess: 70, specular: 0xdde4ee });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), alu));
    const logo = new THREE.Mesh(new THREE.CircleGeometry(0.012, 12), new THREE.MeshBasicMaterial({ color: 0xcfe8ff }));
    logo.rotation.x = -Math.PI / 2;
    logo.position.y = b + 0.001;
    m.add(logo);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.025) < 0.003 && Math.abs(b - 0.115) < 0.005 && Math.abs(c - 0.165) < 0.005) {
    // desktop monitor: thin panel, code glow, facing into the room (+x)
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x2a2732)));
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(c * 1.85, b * 1.8), new THREE.MeshBasicMaterial({ map: codeTex }));
    scr.rotation.y = Math.PI / 2;
    scr.position.x = a + 0.001;
    m.add(scr);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.055) < 0.003 && Math.abs(b - 0.16) < 0.005 && Math.abs(c - 0.14) < 0.005 && gloss < 0.6) {
    // PC tower: dark case, vent slots, power LED
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x24222c)));
    for (let k = 0; k < 4; k++) {
      const vent = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.004), toonMat(0x3a3742));
      vent.rotation.y = Math.PI;
      vent.position.set(0, -0.02 - k * 0.014, -c - 0.001);
      m.add(vent);
    }
    const led = new THREE.Mesh(new THREE.CircleGeometry(0.004, 8), new THREE.MeshBasicMaterial({ color: 0x7fd4ff }));
    led.rotation.y = Math.PI;
    led.position.set(0.03, b - 0.03, -c - 0.001);
    m.add(led);
  } else if (cls === 2 && shape === 0 && Math.abs(b - 0.006) < 0.0015 && Math.abs(Math.max(a, c) - 0.085) < 0.004 && Math.abs(Math.min(a, c) - 0.032) < 0.004) {
    // desk keyboard
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x2c2a34)));
    const keys = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(a, c) * 1.85, Math.max(a, c) * 1.9), toonMat(0xffffff, { map: keyTex }));
    keys.rotation.x = -Math.PI / 2;
    keys.rotation.z = a > c ? 0 : Math.PI / 2;
    keys.position.y = b + 0.001;
    m.add(keys);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.016) < 0.002 && Math.abs(b - 0.011) < 0.0025 && Math.abs(c - 0.026) < 0.003) {
    // mouse: rounded shell + scroll wheel
    m = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.024, 10, 8), toonMat(0x34323e));
    shell.scale.set(0.68, 0.5, 1.1);
    m.add(shell);
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.004, 8), toonMat(0x83888f));
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(0, 0.009, -0.012);
    m.add(wheel);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.05) < 0.003 && b < 0.005 && Math.abs(c - 0.038) < 0.003) {
    // loose paper
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, 0.002, c * 2), toonMat(0xf0ecdd)));
    for (let k = 0; k < 4; k++) {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.5, 0.003), toonMat(0xb9b2a0));
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.002, -c * 0.55 + k * 0.018);
      m.add(line);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.019) < 0.0018 && Math.abs(b - 0.038) < 0.003 && Math.abs(c - 0.019) < 0.0018 && gloss < 0.6) {
    // pen cup with pens leaning out
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.016, b * 2, 10), toonMat(0x4a5a8a)));
    for (const [pa, col] of [[-0.18, 0xd8534f], [0.12, 0x3a3742], [0.3, 0xd8b04f]]) {
      const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0025, 0.055, 5), toonMat(col));
      pen.rotation.z = pa;
      pen.position.y = b + 0.012;
      m.add(pen);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.042) < 0.003 && Math.abs(b - 0.018) < 0.0025 && Math.abs(c - 0.058) < 0.003) {
    // corded phone base: wedge body, keypad, cradle rails
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x8a2f2a)));
    for (let r = 0; r < 4; r++) {
      for (let k = 0; k < 3; k++) {
        const btn = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.003, 0.007), toonMat(0xe8e2d2));
        btn.position.set(-0.02 + k * 0.014, b, 0.014 + r * 0.011);
        m.add(btn);
      }
    }
    for (const ex of [-0.026, 0.026]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.008, 0.03), toonMat(0x6e2521));
      rail.position.set(ex, b + 0.004, -0.03);
      m.add(rail);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.062) < 0.003 && Math.abs(b - 0.013) < 0.0022 && Math.abs(c - 0.02) < 0.003) {
    // phone handset: bar with rounded ear and mouth pieces
    m = new THREE.Group();
    const red = toonMat(0x8a2f2a);
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 1.4, b * 1.6, c * 1.6), red));
    for (const ex of [-1, 1]) {
      const cup = new THREE.Mesh(new THREE.SphereGeometry(0.016, 9, 7), red);
      cup.scale.y = 0.8;
      cup.position.set(ex * a * 0.78, -0.002, 0);
      m.add(cup);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.033) < 0.0025 && b < 0.006 && Math.abs(c - 0.068) < 0.003 && gloss > 0.8) {
    // mobile phone, face up and still glowing
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x1c1a22)));
    const scr = new THREE.Mesh(
      new THREE.PlaneGeometry(a * 1.8, c * 1.8),
      new THREE.MeshBasicMaterial({ color: 0x3a5a8f })
    );
    scr.rotation.x = -Math.PI / 2;
    scr.position.y = b + 0.001;
    m.add(scr);
    const cam = new THREE.Mesh(new THREE.CircleGeometry(0.004, 8), toonMat(0x101018));
    cam.rotation.x = -Math.PI / 2;
    cam.position.set(0.018, b + 0.0015, -c + 0.012);
    m.add(cam);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.007) < 0.0015 && Math.abs(b - 0.007) < 0.0015 && Math.abs(c - 0.007) < 0.0015) {
    // phone cord link
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.SphereGeometry(0.009, 6, 5), toonMat(0x5e2521)));
  } else if (cls === 2 && shape === 0 && Math.abs(b - 0.0035) < 0.0012 && Math.abs(a - 0.009) < 0.002 && Math.abs(c - 0.048) < 0.004) {
    // silverware: fork / knife / spoon by index
    m = new THREE.Group();
    const steel = new THREE.MeshPhongMaterial({ color: 0xb9bfc8, shininess: 120, specular: 0xf0f4fa });
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.011, 0.005, 0.055), steel);
    handle.position.z = 0.015;
    m.add(handle);
    const kind3 = i % 3;
    if (kind3 === 0) {
      for (const tx3 of [-0.006, 0, 0.006]) {
        const tine = new THREE.Mesh(new THREE.BoxGeometry(0.0028, 0.004, 0.03), steel);
        tine.position.set(tx3, 0, -0.032);
        m.add(tine);
      }
    } else if (kind3 === 1) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.003, 0.042), steel);
      blade.position.z = -0.026;
      m.add(blade);
    } else {
      const bowl2 = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), steel);
      bowl2.scale.set(1, 0.32, 1.35);
      bowl2.position.z = -0.033;
      m.add(bowl2);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.019) < 0.0018 && Math.abs(b - 0.052) < 0.003 && Math.abs(c - 0.019) < 0.0018 && gloss > 0.9) {
    // stemware: foot, stem, tulip bowl
    m = new THREE.Group();
    const glassM = new THREE.MeshPhongMaterial({
      color: 0xdfe8ee, shininess: 150, specular: 0xffffff, transparent: true, opacity: 0.45,
    });
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, 0.004, 12), glassM);
    foot.position.y = -b + 0.002;
    m.add(foot);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0035, 0.045, 8), glassM);
    stem.position.y = -b + 0.026;
    m.add(stem);
    const bowl3 = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.009, 0.05, 12), glassM);
    bowl3.position.y = b - 0.026;
    m.add(bowl3);
    const wine2 = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.008, 0.02, 10), toonMat(0x6e1830));
    wine2.position.y = b - 0.04;
    m.add(wine2);
    m.userData.noShadow = true;
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.032) < 0.003 && Math.abs(b - 0.05) < 0.004 && Math.abs(c - 0.024) < 0.003 && gloss < 0.7) {
    // hair dryer: body barrel + nozzle + handle
    m = new THREE.Group();
    const shell = toonMat(0x8a4a8f);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.055, 10), shell);
    barrel.rotation.z = Math.PI / 2;
    barrel.position.y = 0.02;
    m.add(barrel);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.017, 0.025, 10), toonMat(0x3a3742));
    nozzle.rotation.z = Math.PI / 2;
    nozzle.position.set(-0.038, 0.02, 0);
    m.add(nozzle);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.013, 0.05, 8), shell);
    grip.rotation.x = 0.25;
    grip.position.set(0.012, -0.022, 0.004);
    m.add(grip);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.014) < 0.0018 && Math.abs(b - 0.026) < 0.0025 && Math.abs(c - 0.014) < 0.0018 && gloss > 0.8) {
    // perfume bottle: tinted glass + gold cap + atomizer bulb
    m = new THREE.Group();
    const scent = new THREE.MeshPhongMaterial({
      color: [0xd8a0b8, 0xa8c8e0, 0xd8cc90][i % 3], shininess: 140, specular: 0xffffff, transparent: true, opacity: 0.7,
    });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 1.6, c * 2), scent));
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.012, 8), ringMat);
    cap.position.y = b - 0.005;
    m.add(cap);
    if (i % 2 === 0) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.007, 7, 6), toonMat(0xc45a6a));
      bulb.position.set(0.014, b - 0.004, 0);
      m.add(bulb);
    }
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.045) < 0.003 && Math.abs(b - 0.028) < 0.0025 && Math.abs(c - 0.032) < 0.003 && gloss < 0.6) {
    // tissue box with a tissue puffing out
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0x7aa8b8)));
    const slot = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.014), toonMat(0x4a7484));
    slot.rotation.x = -Math.PI / 2;
    slot.position.y = b + 0.001;
    m.add(slot);
    const puff = new THREE.Mesh(new THREE.PlaneGeometry(0.034, 0.028), toonMat(0xf4f2ea, { side: THREE.DoubleSide }));
    puff.rotation.x = -0.5;
    puff.rotation.y = 0.4;
    puff.position.y = b + 0.016;
    m.add(puff);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.006) < 0.0015 && Math.abs(c - 0.032) < 0.003 && gloss > 0.8) {
    // hand mirror: glass disc in a frame, stub handle
    m = new THREE.Group();
    const frame = toonMat(0x8a6a4a);
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.008, 14), frame);
    back.position.x = -0.012;
    m.add(back);
    const glass = new THREE.Mesh(
      new THREE.CircleGeometry(0.025, 14),
      new THREE.MeshPhongMaterial({ color: 0xc8d4dc, shininess: 160, specular: 0xffffff })
    );
    glass.rotation.x = -Math.PI / 2;
    glass.position.set(-0.012, 0.006, 0);
    m.add(glass);
    const hndl = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.04, 8), frame);
    hndl.rotation.z = Math.PI / 2;
    hndl.position.x = 0.032;
    m.add(hndl);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.014) < 0.0018 && Math.abs(b - 0.012) < 0.0025 && Math.abs(c - 0.045) < 0.003 && gloss < 0.6) {
    // hairbrush: paddle + bristle pad + handle
    m = new THREE.Group();
    const body2 = toonMat(0x6a4a8f);
    const paddle = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.01, 0.05), body2);
    paddle.position.z = -0.014;
    m.add(paddle);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.008, 0.044), toonMat(0x2c2a34));
    pad.position.set(0, 0.008, -0.014);
    m.add(pad);
    const hndl2 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.007, 0.036, 8), body2);
    hndl2.rotation.x = Math.PI / 2;
    hndl2.position.z = 0.026;
    m.add(hndl2);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.018) < 0.0015 && Math.abs(b - 0.038) < 0.003 && Math.abs(c - 0.018) < 0.0015 && gloss > 0.8) {
    // mouthwash: blue liquid bottle, white cap
    m = new THREE.Group();
    const liquid = new THREE.MeshPhongMaterial({ color: 0x3a9ac8, shininess: 130, specular: 0xdff4ff, transparent: true, opacity: 0.85 });
    m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.018, b * 1.7, 10), liquid));
    const cap2 = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.014, 8), toonMat(0xf0ece0));
    cap2.position.y = b - 0.007;
    m.add(cap2);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.026) < 0.0025 && Math.abs(b - 0.008) < 0.002 && Math.abs(c - 0.011) < 0.002) {
    // toothpaste tube: white body, colored cap, crimped end
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 1.8, b * 1.6, c * 1.8), toonMat(0xf0ece0)));
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.6, 0.006), toonMat(0xc0392b));
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.y = b * 0.82;
    m.add(stripe);
    const cap3 = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.01, 8), toonMat(0x3a7ac8));
    cap3.rotation.z = Math.PI / 2;
    cap3.position.x = a - 0.002;
    m.add(cap3);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.05) < 0.003 && Math.abs(b - 0.004) < 0.0012 && Math.abs(c - 0.065) < 0.003) {
    // magazine: glossy cover art
    m = new THREE.Group();
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xe8e2d4)));
    const cover = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.9, c * 1.9), new THREE.MeshPhongMaterial({ map: artTex(i), shininess: 90, specular: 0x888888 }));
    cover.rotation.x = -Math.PI / 2;
    cover.position.y = b + 0.001;
    m.add(cover);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.032) < 0.0025 && Math.abs(b - 0.032) < 0.0025 && Math.abs(c - 0.06) < 0.004 && gloss <= 0.1) {
    // rolled towel: cylinder along z with a visible roll seam
    m = new THREE.Group();
    const tcol = new THREE.Color().setHSL(((tint ?? 0.9) * 2.83) % 1, 0.4, 0.6);
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(a, a, c * 2, 12), toonMat(tcol));
    roll.rotation.x = Math.PI / 2;
    m.add(roll);
    const seam = new THREE.Mesh(new THREE.PlaneGeometry(0.008, c * 2), toonMat(tcol.clone().multiplyScalar(0.8)));
    seam.rotation.x = Math.PI / 2;
    seam.position.set(0.006, a + 0.0005, 0);
    seam.rotation.z = 0.2;
    m.add(seam);
  } else if (cls === 2 && shape === 0 && Math.abs(a - 0.035) < 0.0025 && Math.abs(b - 0.045) < 0.002 && Math.abs(c - 0.035) < 0.0025 && gloss >= 0.5) {
    // mug: cylinder + handle — every mug in every room upgrades at once
    m = new THREE.Group();
    const mcol = new THREE.Color().setHSL(((i * 2654435761) >>> 0) / 4294967296, 0.45, 0.55);
    const cup2 = new THREE.Mesh(new THREE.CylinderGeometry(0.033, 0.03, b * 2, 12), toonMat(mcol));
    m.add(cup2);
    const hnd = new THREE.Mesh(new THREE.TorusGeometry(0.016, 0.005, 6, 10, Math.PI), toonMat(mcol));
    hnd.position.set(0.036, 0.004, 0);
    hnd.rotation.z = -Math.PI / 2;
    m.add(hnd);
  } else if (cls === 2 && shape === 0 && Math.abs(a - c) < 0.002 && a >= 0.04 && a <= 0.085 && b >= 0.006 && b <= 0.016 && gloss >= 0.6) {
    // the plate family: any squat square ceramic/steel reads as a disc
    // with a rim (kitchen stacks, TV-tray dinner, the trash-can lid)
    m = new THREE.Group();
    const pcol = tint !== undefined && tint < 0.7 ? 0xb9bfc8 : 0xeceae4;
    const pmat = new THREE.MeshPhongMaterial({ color: pcol, shininess: 85, specular: 0xccd6dd });
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(a, a * 0.7, b * 2, 18), pmat);
    m.add(disc);
    const well = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.62, a * 0.62, 0.002, 16), toonMat(0xd8d4c8));
    well.position.y = b;
    m.add(well);
  } else if (cls === 2 && shape === 1 && Math.abs(a - 0.09) < 0.004) {
    // r 0.09 spheres split by gloss: the mansion globe vs the beach ball
    m = new THREE.Group();
    if (gloss < 0.45) {
      const sea = new THREE.Mesh(new THREE.SphereGeometry(a, 16, 13), toonMat(0x3a6a9a));
      m.add(sea);
      for (const [ly, lz, s] of [[0.35, 0.2, 0.045], [-0.25, -0.3, 0.055], [0.1, -0.55, 0.035]]) {
        const land = new THREE.Mesh(new THREE.SphereGeometry(a * 1.005, 8, 6), toonMat(0x5a9a4e));
        land.scale.set(0.6, 0.5, 0.6);
        land.position.set(s, ly * a, lz * a);
        m.add(land);
      }
    } else {
      const ball = new THREE.Mesh(new THREE.SphereGeometry(a, 18, 14), toonMat(0xf2ede0));
      m.add(ball);
      for (let k2 = 0; k2 < 3; k2++) {
        const panel = new THREE.Mesh(new THREE.SphereGeometry(a * 1.004, 18, 14, (k2 * 2 * Math.PI) / 3, Math.PI / 3), toonMat([0xc94f3f, 0x3f7ac9, 0xd8a622][k2]));
        m.add(panel);
      }
    }
  }
  if (m) {
    const noShadow = m.userData.noShadow === true;
    m.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = !noShadow;
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
    // soft furniture reads its hue from the sim tint: one upholstery
    // library, thirty-six differently dressed apartments (and every
    // older couch inherits a color too)
    const fabCol = tint !== undefined
      ? new THREE.Color().setHSL((tint * 2.83) % 1, 0.42, 0.46)
      : color;
    mat = fuzzy ? toonMat(fabCol) : toonMat(fabCol, { map: fabricTex });
  } else if (cls === 1) {
    mat = toonMat(color, { map: woodTex });
  } else {
    mat = toonMat(color);
  }
  m = new THREE.Mesh(geo, mat);
  m.castShadow = cls !== 0;
  // tall thin statics (walls, partitions) neither cast nor receive:
  // VSM at grazing incidence paints variance blobs on big flat walls
  // (founder's bathroom shimmer), and nothing casts onto them anyway
  m.receiveShadow = !(cls === 0 && b >= 0.8 && Math.min(a, c) <= 0.35);
  scene.add(m);
  return m;
}

// --- render-side room dressing (no collision, pure decor) ------------------
let decor = null;
let lightOverlays = []; // per-zone darkness boxes (apartments)
let floorLights = []; // per-floor switchable point lights (apartments)
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
    // the tower: nine floors of darkness overlays, windows, sconces, and
    // exit signs over each stairwell doorway
    lightOverlays = [];
    const FLOORS = 9;
    const PITCH = 2.6;
    const exitTex = makeCanvas(64, 24, (g) => {
      g.fillStyle = '#0c2a14';
      g.fillRect(0, 0, 64, 24);
      g.fillStyle = '#6cf2a0';
      g.font = 'bold 15px system-ui, sans-serif';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('EXIT', 32, 13);
    });
    for (let f = 0; f < FLOORS; f++) {
      const fy = f * PITCH;
      // darkness: a smoked box swallows a floor whose lights are off
      // (toggled by cat-swat on the wall switches; polled each frame)
      const ov = new THREE.Mesh(
        new THREE.BoxGeometry(hx * 2 - 0.12, 2.5, 3.86),
        new THREE.MeshBasicMaterial({ color: 0x05040a, transparent: true, opacity: 0.62, depthWrite: false })
      );
      ov.position.set(0, fy + 1.27, -0.425);
      ov.renderOrder = 5;
      ov.visible = false;
      decor.add(ov);
      lightOverlays.push(ov);
      // windows: two on the far wall, one on each side wall; some lit
      // warm, some night-slate — an occupied building, not a grid
      const winSpots = [
        [-5.0, fy + 1.55, hz - 0.05, 0],
        [5.0, fy + 1.55, hz - 0.05, 0],
        [-hx + 0.05, fy + 1.55, -0.8, 1],
        [hx - 0.05, fy + 1.55, -0.8, 2],
      ];
      for (let w = 0; w < winSpots.length; w++) {
        const [wx, wy, wz, side] = winSpots[w];
        const win = new THREE.Group();
        const frame = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.94, 0.04), toonMat(0x3a2c20));
        win.add(frame);
        const lit = (f * 3 + w * 2 + f) % 3 !== 0;
        const pane = new THREE.Mesh(
          new THREE.PlaneGeometry(0.6, 0.8),
          new THREE.MeshBasicMaterial({ color: lit ? 0xffe0a8 : 0x2a3a4e })
        );
        pane.position.z = 0.026;
        win.add(pane);
        for (const my of [-0.2, 0.2]) {
          const mull = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.04, 0.012), toonMat(0x3a2c20));
          mull.position.set(0, my, 0.027);
          win.add(mull);
        }
        if (side === 0) win.rotation.y = Math.PI;
        if (side === 1) win.rotation.y = Math.PI / 2;
        if (side === 2) win.rotation.y = -Math.PI / 2;
        win.position.set(wx, wy, wz);
        decor.add(win);
      }
      // hallway sconces flanking the stair strip on the far wall
      for (const sx of [-1.2, 1.2]) {
        const shade = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.028, 0.09, 10, 1, true),
          new THREE.MeshPhongMaterial({ color: 0x6a5a40, shininess: 50, specular: 0xffe8b0, side: THREE.DoubleSide })
        );
        shade.position.set(sx, fy + 1.95, hz - 0.06);
        decor.add(shade);
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffdf9a }));
        glow.position.set(sx, fy + 1.99, hz - 0.06);
        decor.add(glow);
      }
      // a rug per cell: color says whose home this is
      for (let c2 = 0; c2 < 4; c2++) {
        const rug = new THREE.Mesh(
          new THREE.CircleGeometry(0.62, 22),
          toonMat(new THREE.Color().setHSL(((f * 4 + c2) * 0.083 + 0.02) % 1, 0.38, 0.42))
        );
        rug.rotation.x = -Math.PI / 2;
        rug.position.set(-5.4 + 3.6 * c2, fy + 0.008, 0.35);
        rug.receiveShadow = true;
        decor.add(rug);
      }
      // exit sign on the departure stairwell's back wall, visible down
      // the open bay from the front
      const gx = (f % 2 === 0 ? -1 : 1) * 7.65;
      const sign = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.09, 0.03),
        new THREE.MeshBasicMaterial({ color: 0xffffff, map: exitTex })
      );
      sign.position.set(gx, fy + 1.5, hz - 0.07);
      decor.add(sign);
    }
    // interior light: one warm shadowless point per floor, wired to that
    // floor's switch zone — a cat swatting the lights out actually takes
    // the light with it. Founder direction for scale: replace N dynamic
    // lights with a Minecraft-style volume light map (one texture sample
    // per fragment) once cell counts climb further.
    floorLights = [];
    for (let f = 0; f < FLOORS; f++) {
      const fl = new THREE.PointLight(0xffd9a8, 0.6, 5.5);
      fl.position.set(0, f * PITCH + 1.7, -0.4);
      decor.add(fl);
      floorLights.push(fl);
    }
  } else {
    lightOverlays = [];
    floorLights = [];
  }
  if (kind === 8) {
    // the bar: neon sign, pendant lamps over the counter, a dartboard
    const neon = new THREE.Group();
    const tube = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 8, 24), new THREE.MeshBasicMaterial({ color: 0xff4fa0 }));
    neon.add(tube);
    const tube2 = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.015, 8, 20), new THREE.MeshBasicMaterial({ color: 0x53e0d8 }));
    neon.add(tube2);
    neon.position.set(-1.4, 3.18, hz - 0.03); // above the top back-bar tier
    decor.add(neon);
    for (const px of [-2.4, -1.4, -0.4]) {
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.4, 6), toonMat(0x2a2530));
      cord.position.set(px, 2.8, 2.35);
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
// camera smoothing (founder): inputs write targets, the frame loop
// eases actuals toward them (~110ms critical damp). Every path — look
// drag, two-finger pan/zoom, wheel, handle, arrows — inherits it.
let yawT = HOME_YAW;
let pitchT = HOME_PITCH;
const YAW_LIM = 0.9;
const PITCH_MIN = -0.8, PITCH_MAX = 0.15;
// bounded pinch zoom: scales the FOV. <1 = step back a little.
const ZOOM_MIN = 0.7, ZOOM_MAX = 2.4;
let zoom = 1;
let zoomT = 1;
// bounded two-finger pan: translates the vantage on its own x/y plane —
// the user stays set back from the diorama (z never changes), so this is
// sliding a window across the front of the dollhouse, not orbiting into
// it. Look clamps still forbid oblique views. This is the navigation for
// the coming multi-room / multi-floor structures; on single rooms the
// range is just "translation friendliness".
let panX = 0, panY = 0;
let panXT = 0, panYT = 0;
let panYMin = -1.3, panYMax = 1.7; // widened per room in layoutRoom
function panLimX() { return roomHX * ((cfg.room | 0) === 7 ? 0.8 : 0.55); }
function clampPan() {
  panXT = Math.max(-panLimX(), Math.min(panLimX(), panXT));
  panYT = Math.max(panYMin, Math.min(panYMax, panYT));
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
  if (composer) composer.setSize(w, h);
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
  zoomT = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
}
addEventListener('resize', resize);
addEventListener(
  'wheel',
  (e) => {
    if (e.clientY >= pad.getBoundingClientRect().top) return;
    if (e.target.closest && e.target.closest('#panel')) return; // menu scrolls, not zoom
    setZoom(zoomT * (e.deltaY < 0 ? 1.08 : 1 / 1.08));
    e.preventDefault();
  },
  { passive: false }
);
resize();
applyLook();

// desktop pan handle: mice have no second finger. Dragging the handle
// feeds the exact same pan math as the two-finger gesture; wheel zoom
// already covers the pinch half.
const panhand = document.getElementById('panhand');
let phPrev = null;
panhand.addEventListener('pointerdown', (e) => {
  panhand.setPointerCapture(e.pointerId);
  phPrev = [e.clientX, e.clientY];
  e.stopPropagation();
  e.preventDefault();
});
panhand.addEventListener('pointermove', (e) => {
  if (!phPrev) return;
  const { h } = viewSize();
  const wpp = (2 * Math.tan((camera.fov * Math.PI) / 360) * FOCUS_D) / h;
  panXT += (e.clientX - phPrev[0]) * wpp;
  panYT += (e.clientY - phPrev[1]) * wpp;
  clampPan();
  applyLook();
  phPrev = [e.clientX, e.clientY];
  e.stopPropagation();
});
for (const ev of ['pointerup', 'pointercancel']) {
  panhand.addEventListener(ev, (e) => {
    phPrev = null;
    e.stopPropagation();
  });
}

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
  if (e.target.closest && e.target.closest('button, #panel, #panhand')) return;
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
    if (pinchDist > 20) setZoom(zoomT * (span / pinchDist));
    pinchDist = span;
    const mid = pinchCentroid();
    if (pinchMid) {
      const { h } = viewSize();
      const wpp = (2 * Math.tan((camera.fov * Math.PI) / 360) * FOCUS_D) / h;
      // camera-right is world -x from this vantage, and clientY grows
      // downward — both flips cancel into straight += here
      panXT += (mid[0] - pinchMid[0]) * wpp;
      panYT += (mid[1] - pinchMid[1]) * wpp;
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
  pitchT = Math.max(PITCH_MIN, Math.min(PITCH_MAX, Math.asin(Math.max(-0.99, Math.min(0.99, f.y)))));
  yawT = Math.max(-YAW_LIM, Math.min(YAW_LIM, Math.atan2(f.x, f.z)));
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
  // multi-story rooms frame farther back and pan much higher — the
  // apartment tower is 7.8 tall, the home 4.4
  const tall = r === 6 || r === 7;
  EYE.z = -(roomHZ + (r === 7 ? 10.5 : tall ? 5.4 : 2.6));
  EYE.y = r === 7 ? 3.6 : tall ? 2.8 : 2.0;
  FOCUS_D = roomHZ + (r === 7 ? 10.4 : tall ? 5.3 : 2.5);
  panYMin = tall ? -2.4 : -1.3;
  panYMax = r === 7 ? 21.6 : tall ? 3.6 : r === 8 ? 2.6 : 1.7; // tower: pan to floor 9
  // per-room light, first slice (founder: area/point lights, not a
  // per-room sun): in the tower the global sun drops its shadow (one
  // 2048 map over a 23m facade = smears) and dims, and per-floor point
  // lights wired to the switch zones carry the interior instead
  applyShadowMode();
  sun.intensity = r === 7 ? 0.9 : 1.35;
  // the sun stays inside the room's x-span and out past the open front:
  // a thin side wall backlit from outside bleeds through the VSM blur
  sun.position.set(-Math.min(roomHX * 0.55, 2.5), 5.5, -(roomHZ + 2.0));
  lampGlow.intensity = r <= 1 ? 6 : 0; // only where that lamp exists
  panX = panXT = 0;
  panY = panYT = 0;
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
  let origin;
  if (cfg.laser === 'compact') {
    // compact mode: the ray leaves a point ~1.5in BELOW the screen's
    // bottom edge (screen-space belly button), so the beam fans at an
    // angle instead of rising near-vertically — unproject that anchor
    // a half-meter in front of the camera to get a world origin
    const andc = new THREE.Vector2(0, -(((h + 144) / h) * 2 - 1));
    raycaster.setFromCamera(andc, camera);
    origin = camera.position.clone().add(raycaster.ray.direction.clone().multiplyScalar(0.5));
  } else {
    origin = beltWorld();
  }
  const d = p.sub(origin).normalize();
  laserRay.ox = origin.x; laserRay.oy = origin.y; laserRay.oz = origin.z;
  laserRay.dx = d.x; laserRay.dy = d.y; laserRay.dz = d.z;
}
function padPoint(e) {
  const r = pad.getBoundingClientRect();
  const t = e.touches ? e.touches[0] : e;
  const fx = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width));
  const fy = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
  const { w, h } = viewSize();
  if (cfg.laser === 'compact') {
    // classic aim math from a smaller pad, but the NEAR boundary is an
    // arc (founder): thumb at pad-bottom-middle puts the dot at the top
    // of the pad; thumb at a bottom corner reaches the screen's bottom
    // corner — the near range bows down toward the sides like a fan
    // swept from the belly button
    const u = (fx - 0.5) * 2;
    // the arc's middle is "the top of the pad" — clamped to the stage
    // front's screen line, else near-middle aims pass under the diorama
    // and hit nothing (probe-caught): the nearest USEFUL aim straight
    // ahead is the floor's front lip
    const lip = new THREE.Vector3(0, 0, -roomHZ).project(camera);
    const lipY = ((-lip.y + 1) / 2) * h + 24;
    const midY = Math.min(r.top, lipY);
    const nearY = midY + (h - midY) * u * u;
    aimScreen = [fx * w, h * 0.08 + (nearY - h * 0.08) * fy];
  } else if (cfg.laser === 'wand') {
    // wand mode (founder): the tail of the laser is tied to the belly
    // button and the hand steers the head — the belt's screen
    // projection is the pivot, pad x swings the wand (~±54°), pad y
    // runs the tip out along it (pad top = full reach). Same ray
    // machinery downstream; the CONTROL is polar instead of positional.
    // the belt rides the camera at camera-space z +0.15 — BEHIND the
    // near plane, so projecting it yields garbage NDC (probe-caught).
    // Its apparent anchor is simply bottom-center of the frame.
    const nx = 0.5 * w;
    const ny = 1.02 * h;
    // angular gain (founder: "the entire room should be hittable from
    // the middle 3rd of the laser space"): a tanh compressor makes the
    // center hot — ~96% of full swing by a third off center — with the
    // outer thirds easing into saturation instead of going dead
    const u = (fx - 0.5) * 2;
    const sw = Math.tanh(6 * u) / Math.tanh(6);
    const th = sw * 0.95;
    const reach = 1 - fy * 0.8;
    // elliptical fan: the width budget caps the sideways swing so the
    // tip stays on a portrait screen; straight ahead at full reach hits
    // the same top line the classic mapping uses
    // vertical pays only half the tilt (cos(th/2)): a full sideways
    // swing must still clear the stage front, or edge shots aim at the
    // apron and hit nothing (probe-caught)
    aimScreen = [
      nx + (Math.sin(th) / Math.sin(0.95)) * w * 0.47,
      ny - Math.cos(th * 0.5) * (ny - h * 0.08) * reach,
    ];
  } else {
    aimScreen = [r.left + fx * r.width, h * (0.08 + fy * 0.52)];
  }
  thumbEl.style.left = `${fx * r.width}px`;
  thumbEl.style.top = `${fy * r.height}px`;
}
function applyLaserMode() {
  // pad geometry per mode: classic = full-width 33vh strip; wand =
  // full-width 22vh; compact = a centered island scaled by the Pad
  // size slider (0.5 = half size each way, double influence)
  pad.classList.toggle('short', cfg.laser === 'wand');
  if (cfg.laser === 'compact') {
    const sc = cfg.padScale;
    pad.style.width = `${sc * 100}%`;
    pad.style.left = `${(1 - sc) * 50}%`;
    pad.style.right = 'auto';
    pad.style.height = `${sc * 33}vh`;
    pad.style.borderRadius = '14px 14px 0 0';
  } else {
    pad.style.width = '';
    pad.style.left = '';
    pad.style.right = '';
    pad.style.height = '';
    pad.style.borderRadius = '';
  }
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
  animParts.length = 0; // registered by recognition branches per build
  rebuildCloths();
  rebuildRings();
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
  lookYaw = yawT = HOME_YAW;
  lookPitch = pitchT = HOME_PITCH;
  panX = panXT = 0;
  panY = panYT = 0;
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
bindSlider('quality', 'quality', (v) => v.toFixed(2), (v) => {
  renderer.setPixelRatio(Math.min(devicePixelRatio, v));
  if (composer) {
    composer.setPixelRatio(renderer.getPixelRatio());
    const { w, h } = viewSize();
    composer.setSize(w, h);
  }
});
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
shadowsEl.value = cfg.shadows;
shadowsEl.addEventListener('change', () => {
  cfg.shadows = shadowsEl.value;
  saveCfg();
  applyShadowMode();
});
const aoEl = document.getElementById('s-ao');
aoEl.value = cfg.ao;
aoEl.addEventListener('change', () => {
  cfg.ao = aoEl.value;
  saveCfg();
  applyAO();
});
applyAO();
bindSlider('shstr', 'shadowStrength', (v) => v.toFixed(2), (v) => {
  sun.shadow.intensity = v;
});
bindSlider('aostr', 'aoStrength', (v) => v.toFixed(1), (v) => {
  if (n8ao) n8ao.configuration.intensity = v;
});
const laserEl = document.getElementById('s-laser');
laserEl.value = cfg.laser;
laserEl.addEventListener('change', () => {
  cfg.laser = laserEl.value;
  saveCfg();
  applyLaserMode();
});
bindSlider('padscale', 'padScale', (v) => `${(v * 100).toFixed(0)}%`, () => applyLaserMode());
applyLaserMode();

// arrow keys pan too (founder): held arrows glide the vantage. Signs
// follow view intent (right arrow reveals what's to the right), which
// is the opposite of the drag gestures' content-follows-finger signs
// because camera-right is world -x from this vantage.
const heldArrows = new Set();
addEventListener('keydown', (e) => {
  if (e.key.startsWith('Arrow') && !e.target.closest?.('input, select')) {
    heldArrows.add(e.key);
    e.preventDefault();
  }
});
addEventListener('keyup', (e) => heldArrows.delete(e.key));
addEventListener('blur', () => heldArrows.clear());
function arrowPan(dtMs) {
  if (!heldArrows.size) return;
  const s = (dtMs / 1000) * Math.max(2.2, FOCUS_D * 0.28);
  if (heldArrows.has('ArrowRight')) panXT -= s;
  if (heldArrows.has('ArrowLeft')) panXT += s;
  if (heldArrows.has('ArrowUp')) panYT += s;
  if (heldArrows.has('ArrowDown')) panYT -= s;
  clampPan();
  applyLook();
}

// --- fixed-tick loop -------------------------------------------------------
let last = performance.now();
let acc = 0;
const DT = 1000 / 60;
// catch-up cap: 100ms guards the death spiral in production; ?test=1
// raises it so headless playtests on software GL (~3fps) still run
// real-time sim seconds per wall second
const ACC_CAP = new URLSearchParams(location.search).has('test') ? 400 : 100;
function frame(now) {
  const frameDt = Math.min(now - last, ACC_CAP);
  acc = Math.min(acc + frameDt, ACC_CAP);
  last = now;
  arrowPan(frameDt);
  const prevRay = { ...laserRay };
  updateLaserRay();
  // when a slow frame catches up several ticks at once, sweep the ray
  // from last frame's aim to this frame's across them — the cat's
  // perception sees continuous dot motion, not a park-then-teleport
  // (matters at ~20fps on a struggling phone, and for the headless
  // playtest driver at software-GL frame rates)
  const nTicks = Math.floor(acc / DT);
  let tickK = 0;
  while (acc >= DT) {
    tickK++;
    const f = nTicks > 1 ? tickK / nTicks : 1;
    const rx = prevRay.ox + (laserRay.ox - prevRay.ox) * f;
    const ry = prevRay.oy + (laserRay.oy - prevRay.oy) * f;
    const rz = prevRay.oz + (laserRay.oz - prevRay.oz) * f;
    let dx = prevRay.dx + (laserRay.dx - prevRay.dx) * f;
    let dy = prevRay.dy + (laserRay.dy - prevRay.dy) * f;
    let dz = prevRay.dz + (laserRay.dz - prevRay.dz) * f;
    const dl = Math.hypot(dx, dy, dz) || 1;
    dx /= dl; dy /= dl; dz /= dl;
    lk.lk_step(sim, rx, ry, rz, dx, dy, dz, dotActive ? 1 : 0);
    const n = lk.lk_event_count(sim);
    for (let i = 0; i < n; i++) {
      const code = lk.lk_event(sim, i);
      const ev = code >>> 28; // type moved up when prop grew to 13 bits
      if (ev === 1) {
        // cat vocals ride the brain's state changes
        const to = code & 0xff;
        if (to === 1) sfx.chirp(); // lock-on
        if (to === 3) sfx.chatter(); // windup excitement
        if (to === 6) sfx.meow(); // bored: "hey, keep playing"
      }
      if (ev === 2) sfx.boing();
      if (ev === 3) sfx.impact(meshes[(code >>> 12) & 0x1fff]);
      if (ev === 4) sfx.crash(panOf(meshes[(code >>> 12) & 0x1fff]));
      if (ev === 5) sfx.scratch(panOf(meshes[(code >>> 12) & 0x1fff]));
      if (ev === 3 || ev === 4) {
        const chain = (code >> 25) & 0x7;
        const label = ev === 4 ? 'CRASH ' : '';
        popScore(`${label}+${code & 0xfff}${chain > 1 ? ` x${chain}` : ''}`, chain >= 4 || ev === 4);
        if (chain >= 4) shake = Math.max(shake, 0.5 + chain * 0.06);
        if (ev === 4) shake = Math.max(shake, 0.5);
        const prop = (code >>> 12) & 0x1fff;
        if (meshes[prop]) {
          burstPuffs(meshes[prop].position);
          if (ev === 4) burstPuffs(meshes[prop].position); // double burst for a break
        }
      } else if (ev === 5) {
        const piece = (code >>> 12) & 0x1fff;
        popScore('scratch!');
        if (meshes[piece]) burstPuffs(meshes[piece].position);
      } else if (ev === 6) {
        // structural collapse: the compound fell apart into its members
        const prop = (code >>> 12) & 0x1fff;
        const chain = (code >> 25) & 0x7;
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
  // the single HUD meter follows the MOST ENGAGED cat (founder), not
  // cat 0: rank states by how engaged they read, break ties on interest
  const CAT_PRIORITY = [0, 6, 7, 8, 9, 4, 1, 3, 5, 9]; // idx = state
  let hudEng = -1;
  let hudSt = 0;
  let hudAct = -1;
  let hudInterest = 0;
  let catPos = null;
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
      if (!catPos) catPos = [x, y, z]; // cat 0: debug LOS line
      const eng = (CAT_PRIORITY[st] ?? 0) * 10 + data[o + 13];
      if (eng > hudEng) {
        hudEng = eng;
        hudSt = st;
        hudAct = st === 0 ? act : -1;
        hudInterest = data[o + 13];
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
      if (clothSet.has(i)) {
        meshes[i] = clothDummy; // skinned by its patch, not per-particle
      } else {
        meshes[i] = meshFor(i, data[o + 1], data[o + 2], data[o + 3], data[o + 4], data[o], data[o + 6], data[o + 13], data[o + 14]);
        eachMat(meshes[i], (mat) => (mat.wireframe = debugLook));
      }
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
  {
    const ea = 1 - Math.exp(-frameDt / 110);
    panX += (panXT - panX) * ea;
    panY += (panYT - panY) * ea;
    lookYaw += (yawT - lookYaw) * ea;
    lookPitch += (pitchT - lookPitch) * ea;
    if (Math.abs(zoomT - zoom) > 0.0004) {
      zoom += (zoomT - zoom) * ea;
      resize();
    }
  }
  for (const p of animParts) {
    if (p.mode === 'spin') p.node.rotation.z = now * 0.03;
    else if (p.mode === 'pend') p.node.rotation.z = Math.sin(now * 0.0021) * 0.22;
    else p.node.rotation.y = Math.sin(now * 0.0011) * 0.7;
  }
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
    floorLights.forEach((fl, zi) => (fl.intensity = (off & (1 << zi)) !== 0 ? 0.06 : 0.6));
  }
  const stName =
    hudSt === 0 && hudAct >= 0
      ? `IDLE·${AMB_NAMES[hudAct] ?? '?'}`
      : STATE_NAMES[hudSt] ?? '?';
  stateEl.textContent = debugLook ? `${stName} · vis ${(L[9] ?? 0).toFixed(2)}` : stName;
  meterEl.style.width = `${(hudInterest * 100).toFixed(0)}%`;

  updateCloths(data);
  updateRings(data);
  if (aoActive) composer.render();
  else renderer.render(scene, camera);

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
    // the laser leaves the BELT, not the camera: aiming exactly at a
    // world point means finding where the belt->target line crosses the
    // focus plane, and pressing the pad spot whose ray goes through
    // THAT — projecting the raw target only works for points already on
    // the plane (playtest-caught: floor lures landed short)
    const { w, h } = viewSize();
    const T = new THREE.Vector3(wx, wy, wz);
    const belt = beltWorld();
    const fwd = new THREE.Vector3();
    camera.getWorldDirection(fwd);
    const s = (FOCUS_D - belt.clone().sub(camera.position).dot(fwd)) /
      Math.max(0.05, T.clone().sub(belt).dot(fwd));
    const p = belt.clone().add(T.sub(belt).multiplyScalar(s));
    const v = p.project(camera);
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
  rings: () => {
    const n = lk.lk_ring_count(sim);
    return Array.from({ length: n }, (_, i) => lk.lk_ring_info(sim, i) >>> 0).map((v) => ({
      rec: v & 0x7fffffff,
      attached: !!(v >>> 31),
    }));
  },
  body: (rec) => {
    const d = new Float32Array(lk.memory.buffer, lk.lk_render_data(sim), lk.lk_body_count(sim) * FLOATS_PER_BODY);
    const o = rec * FLOATS_PER_BODY;
    return [d[o + 5], d[o + 6], d[o + 7]];
  },
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
