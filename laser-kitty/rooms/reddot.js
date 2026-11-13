// Red Dot Rampage (room 10): the fashion-furniture showroom, "Design Within Scratch".
// The sim side is core/src/room_reddot.rs; this module is how its bodies look.
// Contract: rooms/README.md.
//
// Two ways a body is recognized (the sim file states the same contract):
//   * hero pieces by their exact dims, unique in this room (hero() below);
//   * everything else by a vocabulary riding the laser optics:
//       gloss = FINISH + 0.002 * FORM, tint = a PALETTE slot.
//     A form is only read off a body whose dims are whole millimetres:
//     shards inherit gloss and tint but are cut at random, so they fall
//     through to material() and come out as plain chunks of their parent's
//     stuff.
//
// The light. The store is lit by what it sells: the sun and the fill are
// turned well down (look, below) and every lamp, shade, neon, lit shelf and
// wall cove is an emitter into main.js's light volume, which shades every
// lit material and reaches about a metre and a half. The volume is a coarse
// field, so each fixture also lays a soft additive pool on the floor under
// itself: that is what reads as a pool of light on a phone. Red is kept for
// the dots (sold stickers, the mobile's disc, the "sold" neon, the laser).

import { mergeGeometries } from '../vendor/BufferGeometryUtils.js';

// dim, warm, a little showroom dust in the air; a shop window the player
// pans along, so the pan limit is most of the half-width
export const look = {
  haze: 0.009, sun: 0.3, sunLight: 0.22, ambient: 0.34, eyeBack: 2.0, eyeY: 2.15, panX: 0.82, ceil: 4.2, key: 0.5, zoomTall: 1.4,
  // the bays between the fins, left to right as the shopper sees them
  stops: [
    { x: 9.6, name: 'Lighting' }, { x: 5.2, name: 'Living' }, { x: 0, name: 'Dining' },
    { x: -5.1, name: 'Checkout' }, { x: -9.7, name: 'Gallery' },
  ],
};

const FINISHES = [[0.1, 'matte'], [0.3, 'satin'], [0.5, 'lacq'], [0.66, 'stone'], [0.78, 'metal'], [0.9, 'glass']];
const BOX = 0, CYL = 1, CYL_X = 2, CYL_Z = 3, EGG = 4, CONE = 5, BOWL = 6, PUFF = 7, PILLOW = 8, SHADE = 9,
  ROD_DOWN = 11, ROD_UP = 12, TRIPOD = 13, TUFT = 14, LED = 16;
// palette slots, by the sim's tint (red reflectance)
const PALETTE = [
  [0.96, 0xf2ede2, 'chalk'], [0.93, 0xe5352b, 'red'], [0.9, 0xd9a13b, 'ochre'], [0.87, 0xe6b5a4, 'blush'],
  [0.84, 0xc0603a, 'rust'], [0.81, 0xddd2bd, 'oat'], [0.78, 0xd9c9ae, 'trav'], [0.75, 0xc9a04a, 'brass'],
  [0.72, 0xc9a273, 'oak'], [0.69, 0xc9ced6, 'chrome'], [0.66, 0xb497ad, 'mauve'], [0.63, 0xa9a59e, 'concrete'],
  [0.6, 0xa9683c, 'caramel'], [0.57, 0x5e4030, 'walnut'], [0.54, 0x5c2e4c, 'plum'], [0.48, 0x7c2331, 'oxblood'],
  [0.45, 0x9db39a, 'sage'], [0.42, 0x767a45, 'olive'], [0.39, 0x57504a, 'smoke'], [0.36, 0x22335c, 'ink'],
  [0.33, 0x1d6268, 'teal'], [0.3, 0x27503f, 'forest'], [0.27, 0x38373d, 'charcoal'], [0.24, 0x1c1b22, 'black'],
];
const HEX = Object.fromEntries(PALETTE.map((p) => [p[2], p[1]]));
// the colour a slot gives off when the thing is a light: a shade, a strip
const LIGHT = { chalk: 0xfff0d6, oat: 0xffe6c4, ochre: 0xffb45e, blush: 0xffb9a4, rust: 0xff8a4a, oxblood: 0xff6e5c, teal: 0x58e0d0, ink: 0x7f8cff, forest: 0xa8e890 };
const RED = 0xe5352b, INK = 0x1c1b22, PAPER = 0xf2ede2, BRASS = 0xc9a04a, WARM = 0xfff0d6;
const NAME = 'DESIGN WITHIN SCRATCH';

function decode(gloss) {
  for (const [base, name] of FINISHES) {
    const d = gloss - base;
    if (d < -0.0007 || d > 0.0377) continue;
    const form = Math.round(d / 0.002);
    if (Math.abs(d - form * 0.002) < 0.0007) return { fin: name, form };
  }
  return null;
}
function slot(tint) {
  let best = null, err = 0.014;
  for (const p of PALETTE) {
    const e = Math.abs(p[0] - tint);
    if (e < err) { err = e; best = p; }
  }
  return best;
}
const mm = (v) => Math.abs(v * 1000 - Math.round(v * 1000)) < 0.03;
const authored = (b) => mm(b.a) && mm(b.b) && mm(b.c);
const is = (b, a, bb, c) => Math.abs(b.a - a) < 0.0015 && Math.abs(b.b - bb) < 0.0015 && Math.abs(b.c - c) < 0.0015;

// --- per-build state: reset in decor(), which main.js calls before any mesh
let S = { group: null, plinths: [], labelled: new Set(), rugs: [], spots: 0, ceil: 4.0, hx: 12, hz: 4.7 };
// the lighting stage (sim: x 7.65..11.85, z 1.15..4.55, 0.16 high): a pool
// of light under a lamp lies on whichever floor the lamp is over
const floorAt = (x, z) => (x > 7.65 && x < 11.85 && z > 1.15 && z < 4.55 ? 0.16 : 0);

// --- textures (built once) ---------------------------------------------------
let tex = null;
function textures(kit) {
  if (tex) return tex;
  const { THREE, makeCanvas } = kit;
  let s = 20261113;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  // travertine: warm bands, pits, a few open veins
  const trav = makeCanvas(256, 256, (g) => {
    g.fillStyle = '#e4d6bd';
    g.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 3) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '196,170,130' : '246,236,214'},${0.1 + rnd() * 0.22})`;
      g.fillRect(0, y + rnd() * 2, 256, 1 + rnd() * 3);
    }
    for (let k = 0; k < 150; k++) {
      g.fillStyle = `rgba(120,96,66,${0.2 + rnd() * 0.4})`;
      g.fillRect(rnd() * 256, rnd() * 256, 2 + rnd() * 9, 1 + rnd() * 1.5);
    }
  });
  // the floor: smoked oak, laid herringbone
  const floor = makeCanvas(256, 256, (g) => {
    g.fillStyle = '#6a574a';
    g.fillRect(0, 0, 256, 256);
    const plank = (x, y, w, h) => {
      const l = 80 + rnd() * 26;
      g.fillStyle = `rgb(${l + 22},${l},${l - 14})`;
      g.fillRect(x, y, w, h);
      g.strokeStyle = 'rgba(30,22,18,0.6)';
      g.lineWidth = 1;
      g.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    };
    for (let j = -1; j < 5; j++) for (let i = -1; i < 5; i++) {
      plank(i * 64, j * 64 + (i % 2 ? 32 : 0), 16, 64);
      plank(i * 64 + 16, j * 64 + (i % 2 ? 32 : 0) + 48, 48, 16);
    }
    for (let k = 0; k < 500; k++) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '255,236,210' : '20,14,10'},${0.03 + rnd() * 0.05})`;
      g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 14, 1);
    }
  });
  // boucle: loops of wool, light on light
  const boucle = makeCanvas(128, 128, (g) => {
    g.fillStyle = '#f1ebe0';
    g.fillRect(0, 0, 128, 128);
    for (let k = 0; k < 700; k++) {
      g.strokeStyle = `rgba(${rnd() < 0.5 ? '255,252,244' : '186,172,150'},0.55)`;
      g.lineWidth = 1.4;
      g.beginPath();
      g.arc(rnd() * 128, rnd() * 128, 1.5 + rnd() * 2.5, rnd() * 6.28, rnd() * 6.28 + 3);
      g.stroke();
    }
  });
  // velvet: a nap that catches the light in soft streaks
  const velvet = makeCanvas(128, 128, (g) => {
    g.fillStyle = '#e9e6e6';
    g.fillRect(0, 0, 128, 128);
    for (let k = 0; k < 260; k++) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,255' : '120,116,124'},${0.06 + rnd() * 0.1})`;
      g.fillRect(rnd() * 128, rnd() * 128, 10 + rnd() * 30, 1 + rnd() * 2);
    }
  });
  // buttoned: a diamond of pulls, each a dimple with a button in it
  const tuft = makeCanvas(128, 128, (g) => {
    g.fillStyle = '#ecebee';
    g.fillRect(0, 0, 128, 128);
    g.strokeStyle = 'rgba(40,30,40,0.35)';
    g.lineWidth = 3;
    for (let k = -2; k < 4; k++) {
      g.beginPath(); g.moveTo(k * 64, 0); g.lineTo(k * 64 + 128, 128); g.stroke();
      g.beginPath(); g.moveTo(k * 64 + 128, 0); g.lineTo(k * 64, 128); g.stroke();
    }
    for (const [x, y] of [[0, 0], [64, 0], [128, 0], [32, 32], [96, 32], [0, 64], [64, 64], [128, 64], [32, 96], [96, 96], [0, 128], [64, 128], [128, 128]]) {
      const gr = g.createRadialGradient(x, y, 1, x, y, 15);
      gr.addColorStop(0, 'rgba(30,20,30,0.75)');
      gr.addColorStop(1, 'rgba(30,20,30,0)');
      g.fillStyle = gr;
      g.fillRect(x - 15, y - 15, 30, 30);
      g.fillStyle = 'rgba(255,255,255,0.75)';
      g.beginPath(); g.arc(x - 1, y - 1, 2.6, 0, 6.3); g.fill();
    }
  });
  for (const t of [trav, floor, boucle, velvet, tuft]) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(34, 13);
  // a soft disc of light for the floor under a fixture
  const pool = makeCanvas(128, 128, (g) => {
    const gr = g.createRadialGradient(64, 64, 2, 64, 64, 62);
    gr.addColorStop(0, 'rgba(255,255,255,0.95)');
    gr.addColorStop(0.35, 'rgba(255,255,255,0.5)');
    gr.addColorStop(0.7, 'rgba(255,255,255,0.14)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
  });
  tex = { trav, floor, boucle, velvet, tuft, pool, rugs: new Map(), rnd };
  return tex;
}
const css = (hex) => '#' + hex.toString(16).padStart(6, '0');
// One canvas per rug design, keyed by the rug's colour. Drawn for the whole
// rug; each tile shows its half.
function rugTex(kit, name) {
  const T = textures(kit);
  if (T.rugs.has(name)) return T.rugs.get(name);
  const rnd = T.rnd;
  // a loose weave takes its colour from its material, so its canvas is white
  const base = name === 'weave' ? '#ffffff' : css(HEX[name] ?? 0xddd2bd);
  const t = kit.makeCanvas(512, 384, (g) => {
    const W = 512, H = 384;
    g.fillStyle = base;
    g.fillRect(0, 0, W, H);
    const speck = (n, a, light = '255,248,232', dark = '40,30,24') => {
      for (let k = 0; k < n; k++) {
        g.fillStyle = `rgba(${rnd() < 0.5 ? light : dark},${a})`;
        g.fillRect(rnd() * W, rnd() * H, 3, 1.5);
      }
    };
    if (name === 'oat') {
      // "Field (Beige on Beige)"
      g.fillStyle = '#d2c5aa'; g.fillRect(26, 26, W - 52, H - 52);
      g.fillStyle = '#e1d6bf'; g.fillRect(52, 52, W - 104, H - 104);
      g.fillStyle = '#d6c9ae'; g.fillRect(150, 110, W - 300, H - 220);
      speck(2600, 0.13);
    } else if (name === 'oxblood') {
      // "Heirloom (Pre-Distressed)": borders, a medallion, and the wear put in at the factory
      for (const [inset, col] of [[10, '#1f2d4f'], [22, '#d2a84f'], [30, '#7c2331'], [44, '#e6d3b0'], [50, '#8a2a38']]) {
        g.fillStyle = col;
        g.fillRect(inset, inset, W - 2 * inset, H - 2 * inset);
      }
      g.fillStyle = '#1f2d4f';
      g.beginPath(); g.ellipse(W / 2, H / 2, 120, 84, 0, 0, 6.3); g.fill();
      g.fillStyle = '#d2a84f';
      g.beginPath(); g.ellipse(W / 2, H / 2, 92, 62, 0, 0, 6.3); g.fill();
      g.fillStyle = '#7c2331';
      g.beginPath(); g.ellipse(W / 2, H / 2, 60, 38, 0, 0, 6.3); g.fill();
      g.fillStyle = '#e6d3b0';
      for (const [x, y] of [[96, 88], [W - 96, 88], [96, H - 88], [W - 96, H - 88]]) {
        g.beginPath(); g.moveTo(x, y - 22); g.lineTo(x + 22, y); g.lineTo(x, y + 22); g.lineTo(x - 22, y); g.closePath(); g.fill();
      }
      for (let k = 0; k < 9; k++) {
        g.fillStyle = `rgba(214,196,170,${0.25 + rnd() * 0.25})`;
        g.beginPath(); g.ellipse(60 + rnd() * (W - 120), 60 + rnd() * (H - 120), 20 + rnd() * 46, 8 + rnd() * 18, rnd() * 3, 0, 6.3); g.fill();
      }
      speck(1800, 0.14);
    } else if (name === 'blush') {
      // "Spill (Pre-Stained)": one confident stain and the ring of the glass that made it
      g.fillStyle = '#eec4b4'; g.fillRect(18, 18, W - 36, H - 36);
      g.fillStyle = '#7c2331';
      g.beginPath();
      for (let k = 0; k <= 40; k++) {
        const a = (k / 40) * 6.283, r = 92 + 30 * Math.sin(a * 3 + 1) + 16 * Math.sin(a * 7);
        g[k ? 'lineTo' : 'moveTo'](200 + Math.cos(a) * r * 1.25, 200 + Math.sin(a) * r * 0.8);
      }
      g.fill();
      for (const [x, y, r] of [[330, 250, 14], [352, 224, 8], [96, 132, 10], [306, 288, 6]]) { g.beginPath(); g.arc(x, y, r, 0, 6.3); g.fill(); }
      g.strokeStyle = '#7c2331'; g.lineWidth = 7;
      g.beginPath(); g.arc(390, 120, 34, 0, 6.3); g.stroke();
      speck(1500, 0.1);
    } else if (name === 'olive') {
      // "Lawn": a shag, mown in stripes
      for (let x = 0; x < W; x += 64) { g.fillStyle = (x / 64) % 2 ? '#6d7340' : '#7f8549'; g.fillRect(x, 0, 64, H); }
      for (let k = 0; k < 5200; k++) {
        g.strokeStyle = `rgba(${rnd() < 0.5 ? '176,186,110' : '54,62,30'},0.5)`;
        g.lineWidth = 1.3;
        const x = rnd() * W, y = rnd() * H;
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - 0.5) * 5, y - 4 - rnd() * 5); g.stroke();
      }
    } else if (name === 'sage') {
      // "Landing Strip": a runway, for getting out of bed
      g.fillStyle = '#8fa68d'; g.fillRect(0, 0, W, H);
      g.fillStyle = '#f2ede2';
      for (let x = 30; x < W - 40; x += 74) g.fillRect(x, H / 2 - 7, 44, 14);
      for (const y of [26, H - 34]) g.fillRect(16, y, W - 32, 8);
      for (const x of [22, W - 70]) for (let k = 0; k < 4; k++) g.fillRect(x, 62 + k * 70, 48, 26);
      speck(1500, 0.1);
    } else {
      // a flat-weave from the stack, or a sample on the rack: bands of the colour and chalk
      const bands = [0.08, 0.14, 0.2, 0.5, 0.8, 0.86, 0.92];
      g.fillStyle = 'rgba(40,34,30,0.42)';
      bands.forEach((b, k) => g.fillRect(b * W - (k === 3 ? 26 : 6), 0, k === 3 ? 52 : 12, H));
      g.fillStyle = 'rgba(28,27,34,0.7)';
      for (const b of [0.11, 0.17, 0.83, 0.89]) g.fillRect(b * W - 2, 0, 4, H);
      g.strokeStyle = 'rgba(40,34,30,0.5)'; g.lineWidth = 3;
      for (let y = 6; y < H; y += 8) { g.beginPath(); g.moveTo(0, y); g.lineTo(10, y); g.stroke(); g.beginPath(); g.moveTo(W - 10, y); g.lineTo(W, y); g.stroke(); }
      speck(1400, 0.1);
    }
  });
  T.rugs.set(name, t);
  return t;
}

// --- materials ---------------------------------------------------------------
// shared: only for children of a Group. A body's own top-level material gets
// mutated by main.js (scratch wear, the scored tint, shard recolouring), so
// anything returned bare or from material() is built fresh.
const shared = new Map();
function freshMat(kit, fin, hex, opts = {}) {
  const { THREE, toonMat } = kit;
  if (fin === 'glass') {
    const smoked = hex === HEX.smoke;
    return new THREE.MeshPhongMaterial({ color: smoked ? 0x3a3532 : hex, transparent: true, opacity: smoked ? 0.62 : 0.46, shininess: 180, specular: 0xffffff, side: THREE.DoubleSide, depthWrite: false, ...opts });
  }
  if (fin === 'metal') return new THREE.MeshPhongMaterial({ color: hex, shininess: 110, specular: 0xfff4d8, ...opts });
  if (fin === 'stone') {
    if (hex === HEX.trav) return toonMat(0xffffff, { map: textures(kit).trav, ...opts });
    return new THREE.MeshPhongMaterial({ color: hex, shininess: 45, specular: 0x8a8f96, ...opts });
  }
  if (fin === 'lacq') return new THREE.MeshPhongMaterial({ color: hex, shininess: 70, specular: 0x666058, ...opts });
  return toonMat(hex, opts);
}
function M(kit, fin, hex) {
  const key = `${fin}:${hex}`;
  if (!shared.has(key)) shared.set(key, freshMat(kit, fin, hex));
  return shared.get(key);
}
const basic = (kit, hex) => new kit.THREE.MeshBasicMaterial({ color: hex });
// upholstery by what it is made of
function fabric(kit, form, name, hex) {
  const T = textures(kit);
  const map = form === TUFT ? T.tuft : name === 'oat' || name === 'chalk' ? T.boucle : T.velvet;
  return kit.toonMat(hex, { map });
}

// --- geometry helpers -------------------------------------------------------
function lathe(kit, pts, segs = 20) {
  const { THREE } = kit;
  return new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(Math.max(r, 0.0005), y)), segs);
}
function rod(kit, from, to, r, mat) {
  const { THREE } = kit;
  const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, a.distanceTo(b), 8), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  return m;
}
// Many small meshes of one material, as one draw call: every body here is
// drawn twice (once into the shadow map), so a vase of flowers built from
// nine meshes costs what five sofas do.
function fuse(kit, meshes, mat) {
  const geos = meshes.map((m) => {
    m.updateMatrix();
    return m.geometry.applyMatrix4(m.matrix);
  });
  return new kit.THREE.Mesh(mergeGeometries(geos), mat);
}
// main.js sets castShadow on every mesh a body's group holds when mesh()
// returns. Paper tags and pools of light must not cast (a pool would shadow
// itself), so they join their group a moment later.
const later = (m, child) => queueMicrotask(() => m.add(child));
// A box with its corners gone soft (a superellipsoid): `e` near 0 is a box,
// 1 a ball. Sized in metres with planar uvs, so a fabric keeps its grain
// whatever the cushion's proportions.
function softGeo(kit, a, b, c, e = 0.5, grain = 3.2) {
  const { THREE } = kit;
  const geo = new THREE.SphereGeometry(1, 18, 12);
  const p = geo.attributes.position, uv = geo.attributes.uv;
  const sq = (v) => Math.sign(v) * Math.pow(Math.abs(v), e);
  for (let k = 0; k < p.count; k++) {
    const x = sq(p.getX(k)) * a, y = sq(p.getY(k)) * b, z = sq(p.getZ(k)) * c;
    p.setXYZ(k, x, y, z);
    const ax = Math.abs(x / a), ay = Math.abs(y / b), az = Math.abs(z / c);
    if (ay >= ax && ay >= az) uv.setXY(k, x * grain, z * grain);
    else if (az >= ax) uv.setXY(k, x * grain, y * grain);
    else uv.setXY(k, z * grain, y * grain);
  }
  geo.computeVertexNormals();
  return geo;
}
function text(kit, w, h, draw) {
  return kit.makeCanvas(w, h, (g) => {
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    draw(g);
  });
}
const FONT = 'Helvetica, Arial, sans-serif';
const dollars = (n) => '$' + Math.round(n).toLocaleString('en-US');
function wrap(g, str, maxW) {
  const out = [];
  let line = '';
  for (const word of str.split(' ')) {
    const t = line ? line + ' ' + word : word;
    if (line && g.measureText(t).width > maxW) { out.push(line); line = word; } else line = t;
  }
  if (line) out.push(line);
  return out;
}
// the house mark: three claw strokes
function mark(g, x, y, s, col) {
  g.strokeStyle = col;
  g.lineWidth = s * 0.16;
  g.lineCap = 'round';
  for (const k of [-1, 0, 1]) {
    g.beginPath();
    g.moveTo(x + k * s * 0.34 + s * 0.2, y - s * 0.5);
    g.lineTo(x + k * s * 0.34 - s * 0.2, y + s * 0.5);
    g.stroke();
  }
}
// a flat sign: text on the -z face (toward the customer) and, optionally, the back
function board(kit, w, h, tx, both = false) {
  const { THREE } = kit;
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ map: tx, transparent: true });
  const front = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  front.rotation.y = Math.PI;
  g.add(front);
  if (both) g.add(new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat));
  return g;
}
function redDot(kit, r) {
  const { THREE } = kit;
  return new THREE.Mesh(new THREE.CircleGeometry(r, 18), new THREE.MeshBasicMaterial({ color: RED, side: THREE.DoubleSide }));
}

// --- light -------------------------------------------------------------------
// A lit thing: an emitter into the haze and the light volume, and (with
// `bloom`) a source for the glow pass. Bloom scales with how much screen the
// source covers, so it is for bulbs, tubes and strips — a window or a 30 cm
// globe on the glow layer whites out its whole corner of the room (seen, and
// undone in the first build).
function glow(kit, m, mesh, hex, strength, sprite = 0, bloom = true) {
  if (bloom) mesh.layers.enable(kit.GLOW_LAYER);
  if (strength > 0) m.userData.emitter = { color: new kit.THREE.Color(hex), strength, radius: 1.5 };
  if (sprite) m.add(kit.glowSprite(hex, sprite));
}
const lit = (kit, hex, warm, k = 0.9) => new kit.THREE.MeshPhongMaterial({ color: hex, emissive: warm, emissiveIntensity: k, shininess: 30 });
function poolMesh(kit, hex, r, opacity) {
  const { THREE } = kit;
  const p = new THREE.Mesh(new THREE.CircleGeometry(r, 28), new THREE.MeshBasicMaterial({ map: textures(kit).pool, color: hex, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  p.renderOrder = 2;
  p.userData.pool = true;
  return p;
}
// The pool of light a movable fixture lays on the floor. It is a child of
// the fixture (so it is gone the moment the fixture is), re-seated flat on
// the floor under it every frame: a lamp that falls takes its light across
// the room with it. `gone()` says the fixture has stopped being one (a lamp
// knocked apart is still there, in pieces, and dark).
function carryPool(kit, m, watch, hex, r, opacity, gone = null, onGone = null) {
  const { THREE } = kit;
  const pool = poolMesh(kit, hex, r, opacity);
  pool.matrixAutoUpdate = false;
  later(m, pool);
  const q = new THREE.Quaternion(), flat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
  const v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  let dead = false;
  watch.onBeforeRender = () => {
    if (dead) return;
    if (gone && gone()) {
      dead = true;
      pool.visible = false;
      m.userData.emitter = null;
      onGone?.();
      return;
    }
    q.copy(m.quaternion).invert();
    v.set(0, floorAt(m.position.x, m.position.z) + 0.014 - m.position.y, 0).applyQuaternion(q);
    pool.matrix.compose(v, q.clone().multiply(flat), one);
  };
  watch.onBeforeRender();
}
// main.js gives every fixture registered in pendingLights a glow sprite and
// hides it once the body is shattered or knocked apart; that flag is the
// only word a module gets that a compound has come apart.
const litOut = (m) => () => m.children.some((c) => c.isSprite && c.userData.wasClass !== undefined && !c.visible);

// --- price tags and plinth plaques: names and prices come from the sim -------
function labelTex(kit, ex, plaque) {
  const sold = /\(sold/.test(ex.name);
  const name = ex.name.replace(/\s*\(sold[^)]*\)/, '');
  return text(kit, 320, plaque ? 190 : 210, (g) => {
    const H = plaque ? 190 : 210;
    g.fillStyle = '#fbfaf6';
    g.fillRect(0, 0, 320, H);
    g.strokeStyle = '#1c1b22';
    g.lineWidth = 3;
    g.strokeRect(1.5, 1.5, 317, H - 3);
    // a red dot is a sticker: the piece is sold. Otherwise, the house mark.
    if (sold) {
      g.fillStyle = '#e5352b';
      g.beginPath(); g.arc(276, 44, 30, 0, 6.3); g.fill();
    } else mark(g, 288, 30, 30, '#c9a04a');
    g.fillStyle = '#1c1b22';
    g.font = `bold 62px ${FONT}`;
    g.textAlign = 'left';
    g.fillText(dollars(ex.price), 16, H - 46);
    g.font = `25px ${FONT}`;
    const lines = wrap(g, name, sold ? 232 : 250).slice(0, 3);
    lines.forEach((l, k) => g.fillText(l, 16, 28 + k * 29));
    if (sold) {
      g.font = `bold 20px ${FONT}`;
      g.fillStyle = '#e5352b';
      g.fillText('SOLD', 248, 92);
    }
  });
}
// a swing tag tied to the piece itself: it goes where the piece goes
function tag(kit, m, body, ex, at = null, ry = 0) {
  const { THREE } = kit;
  const big = Math.max(body.a, body.b, body.c) > 0.12;
  const w = big ? 0.15 : 0.085, h = w * 0.66;
  const card = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: labelTex(kit, ex, false), side: THREE.DoubleSide }));
  // hook high enough that the card clears whatever the piece stands on
  const p = at ?? [Math.min(body.a * 0.55, 0.3), Math.max(Math.min(body.b * 0.7, 0.5), h + 0.025 - body.b), -body.c - 0.012];
  card.position.set(p[0], p[1] - h * 0.5 - 0.02, p[2]);
  card.rotation.set(0, Math.PI + ry, 0.08);
  card.userData.tag = true;
  later(m, card);
}
// exhibits with no swing tag: ropes and posts are fittings; a rug's label
// lies on its corner (built with the rug); what hangs has nowhere to hang one
const NO_TAG = new Set([1029, 1030, 1031, 1059, 1076, 1077, 1078, 1079, 1080]);
function label(kit, m, body, opts = {}) {
  const ex = kit.exhibit?.(body.i);
  if (!ex || S.labelled.has(ex.id) || NO_TAG.has(ex.id)) return;
  if (Math.min(body.a, body.b, body.c) < 0.0055 || Math.max(body.a, body.b, body.c) < 0.03) return; // chain links, wires
  S.labelled.add(ex.id);
  // on a plinth: a plaque on the plinth's front face, where it stays put
  const p = S.plinths.find((q) => Math.abs(q.x - body.px) < q.half && Math.abs(q.z - body.pz) < q.half && body.py - body.b - q.top < 0.08 && body.py > q.top);
  if (p && S.group) {
    const w = Math.min(0.3, p.half * 1.7);
    const pl = board(kit, w, w * 0.6, labelTex(kit, ex, true));
    pl.position.set(p.x, Math.max(p.top - w * 0.3 - 0.05, w * 0.3 + 0.02), p.z - p.half - 0.004);
    S.group.add(pl);
    return;
  }
  tag(kit, m, body, ex, opts.at, opts.ry);
}

// --- the generic vocabulary -------------------------------------------------
function generic(kit, body, fin, form, pal) {
  const { THREE } = kit;
  const { a, b, c } = body;
  const hex = pal[1];
  if (form >= LED && form <= LED + 2) return led(kit, body, form - LED, pal);
  if (form === SHADE) return shade(kit, body, pal);
  // upholstery: main.js darkens the body's own material per wear stage, so
  // these get one each and go out as a bare mesh
  const cloth = fin === 'matte' && (form === PILLOW || form === TUFT || form === CYL_Z || form === CYL);
  const soft = body.cls === 1 && (cloth || form === PUFF || (fin === 'satin' && form === PILLOW));
  const mat = cloth ? fabric(kit, form, pal[2], hex) : soft ? freshMat(kit, fin, hex) : M(kit, fin, hex);
  let geo = null, rot = null, scale = null;
  if (form === BOX) geo = new THREE.BoxGeometry(a * 2, b * 2, c * 2);
  else if (form === CYL) {
    geo = new THREE.CylinderGeometry(a, a, b * 2, a > 0.05 ? 28 : 10);
    if (Math.abs(a - c) > 0.001) geo.scale(1, 1, c / a);
  } else if (form === CYL_X) {
    geo = new THREE.CapsuleGeometry(b, Math.max(0.001, 2 * (a - b)), 4, 10);
    geo.rotateZ(Math.PI / 2);
  } else if (form === CYL_Z) {
    // a bolster, a scroll arm: a cylinder on its side, squashed to the box
    geo = new THREE.CylinderGeometry(1, 1, c * 2, 18);
    geo.rotateX(Math.PI / 2);
    geo.scale(a, b, 1);
  } else if (form === EGG) {
    geo = new THREE.SphereGeometry(1, 18, 14);
    if (fin === 'stone') kit.roughen(geo, 0.05);
    scale = [a, b, c];
  } else if (form === CONE) geo = new THREE.ConeGeometry(a, b * 2, 14);
  else if (form === BOWL) {
    geo = b > a
      // tall: a goblet — foot, stem, a bowl that flares
      ? lathe(kit, [[a * 0.75, -b], [a * 0.72, -b + 0.006], [0.006, -b + 0.012], [0.006, -b * 0.1], [a * 0.55, b * 0.25], [a * 0.95, b * 0.7], [a, b]], 14)
      // squat: a bowl
      : lathe(kit, [[a * 0.35, -b], [a * 0.42, -b + 0.004], [a * 0.8, 0], [a * 0.97, b * 0.7], [a, b]], 20);
  } else if (form === PUFF) {
    // inflated: a capsule along the longest axis, squashed to the box
    const long = Math.max(a, b, c), ax = long === a ? 0 : long === b ? 1 : 2;
    const oth = [a, b, c].filter((_, k) => k !== ax);
    const r = Math.min(oth[0], oth[1]);
    geo = new THREE.CapsuleGeometry(r, Math.max(0.001, 2 * (long - r)), 6, 16);
    if (ax === 0) geo.rotateZ(Math.PI / 2);
    else if (ax === 2) geo.rotateX(Math.PI / 2);
    geo.scale(ax === 0 ? 1 : a / r, ax === 1 ? 1 : b / r, ax === 2 ? 1 : c / r);
  } else if (form === PILLOW) geo = softGeo(kit, a * 1.03, b * 1.04, c * 1.03, Math.max(a, c) > 0.7 ? 0.24 : 0.5);
  else if (form === TUFT) geo = softGeo(kit, a * 1.02, b * 1.02, c * 1.02, 0.32, 5);
  else if (form === TRIPOD) {
    // three legs from a hub under the top to a stance as wide as the box
    const g = new THREE.Group();
    const hub = [0, b - 0.03, 0];
    for (let k = 0; k < 3; k++) {
      const an = Math.PI / 2 + (k * Math.PI * 2) / 3;
      g.add(rod(kit, hub, [Math.cos(an) * a * 0.95, -b, Math.sin(an) * c * 0.95], 0.013, mat));
    }
    const boss = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.05, 12), M(kit, 'metal', BRASS));
    boss.position.set(0, b - 0.03, 0);
    g.add(boss);
    return g;
  } else if (form === ROD_DOWN || form === ROD_UP) {
    // a rod on the box's x-y diagonal; ball ends close the joints
    const sgn = form === ROD_DOWN ? 1 : -1;
    const g = new THREE.Group();
    g.add(rod(kit, [a, sgn * (b - c), 0], [-a, -sgn * (b - c), 0], c, mat));
    for (const e of [1, -1]) {
      const ball = new THREE.Mesh(new THREE.SphereGeometry(c * 1.25, 8, 6), mat);
      ball.position.set(e * a, e * sgn * (b - c), 0);
      g.add(ball);
    }
    return g;
  } else return null;
  const mesh = new THREE.Mesh(geo, mat);
  if (rot) mesh.rotation.set(...rot);
  if (scale) mesh.scale.set(...scale);
  // bare when it is upholstery, so wear shows
  const g = soft && !rot && !scale ? mesh : new THREE.Group().add(mesh);
  if (fin === 'glass') g.userData.noShadow = true;
  // impact voices the sim's material bits can't tell apart (main.js reads
  // userData.voice): stone lands like stone, the blown-up sofa like rubber
  if (body.cls !== 0 && fin === 'stone') g.userData.voice = 'stone';
  if (form === PUFF) g.userData.voice = 'rubber';
  return g;
}

// a glowing static: a strip of LED, a lightbox cap, a lit shelf
function led(kit, body, level, pal) {
  const { THREE } = kit;
  const { a, b, c } = body;
  const hex = LIGHT[pal[2]] ?? WARM;
  const m = new THREE.Group();
  const strip = Math.min(a, b, c) < 0.02 && Math.max(a, b, c) > 0.3 && Math.min(a, c) < 0.02;
  const bar = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), basic(kit, strip ? hex : new THREE.Color(hex).lerp(new THREE.Color(0xffffff), 0.35)));
  m.add(bar);
  // a strip blooms; a lit shelf or a plinth cap is too big a source to
  glow(kit, m, bar, hex, [0.9, 1.6, 2.4][level], 0, strip);
  m.userData.noShadow = true;
  return m;
}

// a lampshade, lit: a part of a lamp the sim holds together until it falls
function shade(kit, body, pal) {
  const { THREE } = kit;
  const { a, b } = body;
  const warm = LIGHT[pal[2]] ?? WARM;
  const m = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: pal[1], emissive: warm, emissiveIntensity: 0.85, shininess: 10, side: THREE.DoubleSide });
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(a * 0.8, a, b * 2, 22, 1, true), mat);
  m.add(drum);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(a * 0.8, 22), mat);
  cap.rotation.x = -Math.PI / 2;
  cap.position.y = b * 0.98;
  m.add(cap);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(Math.min(0.035, a * 0.3), 8, 6), basic(kit, 0xfff6e4));
  bulb.position.y = -b * 0.3;
  m.add(bulb);
  glow(kit, m, bulb, warm, 0.9 + a * 2.2, 0, true);
  // the light-budget pass adds a halo and, where the device can afford it,
  // a real light; lamps rank below the track spots
  kit.pendingLights.push({ node: m, color: warm, intensity: 1.3, distance: 4 });
  carryPool(kit, m, drum, warm, 0.85 + a * 2.5, 0.34, litOut(m), () => { mat.emissiveIntensity = 0.04; bulb.material.color.setHex(0x55504a); bulb.layers.disable(kit.GLOW_LAYER); });
  m.userData.noShadow = true;
  label(kit, m, body, { at: [a * 0.7, -b - 0.02, -a * 0.7] });
  return m;
}

// --- hero pieces ------------------------------------------------------------
function vessel(kit, pts, fin, hex, segs = 20) {
  const { THREE } = kit;
  const mat = fin === 'glass' ? M(kit, fin, hex) : freshMat(kit, fin, hex, { side: THREE.DoubleSide });
  return new THREE.Mesh(lathe(kit, pts, segs), mat);
}
// a globe lit from inside: loose glass, so it goes dark by breaking
function globe(kit, m, r, hex, warm, strength, poolR, poolA = 0.32) {
  const { THREE } = kit;
  const g = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 16), lit(kit, hex, warm));
  m.add(g);
  glow(kit, m, g, warm, strength, r < 0.09 ? r * 4.5 : 0, false);
  if (poolR) carryPool(kit, m, g, warm, poolR, poolA);
  m.userData.noShadow = true;
}

function hero(kit, body) {
  const { THREE, toonMat } = kit;
  const { a, b, c, cls, shape } = body;
  const pal = slot(body.tint);
  const hex = pal ? pal[1] : PAPER;
  const m = new THREE.Group();

  // ---- spheres ----
  if (shape === 1) {
    if (cls !== 2) return null;
    const r = a;
    const near = (v) => Math.abs(r - v) < 0.0006; // tight: sphere shards are 0.63 r of these
    if (near(0.15) || near(0.125) || near(0.105) || near(0.085) || near(0.07)) {
      // "Five Moons, Balanced": opal globes; the top and bottom ones carry
      // the stack's light into the room
      const ends = near(0.15) || near(0.07);
      globe(kit, m, r, 0xfffaf0, 0xffe6bf, ends ? 0.9 : 0, near(0.15) ? 1.2 : 0);
    } else if (near(0.115)) {
      // "Moon, on a Stem It Did Not Choose"
      globe(kit, m, r, 0xfff3c8, 0xffd772, 1.1, 1.1);
    } else if (near(0.1)) {
      // "Stem Cell": the torchiere's globe
      globe(kit, m, r, 0xfff6e2, 0xffdca6, 1.25, 1.25);
      return m; // its tag hangs on the stem
    } else if (near(0.08)) {
      // "Drip": a drop of amber glass on a chain
      const drop = new THREE.Mesh(lathe(kit, [[0.004, -r], [r * 0.7, -r * 0.62], [r, -r * 0.05], [r * 0.74, r * 0.5], [r * 0.22, r * 0.98], [0.012, r * 1.2]], 18), lit(kit, 0xffc777, 0xff9a3c, 0.95));
      m.add(drop);
      glow(kit, m, drop, 0xffa850, 1.0, 0.34, false);
      carryPool(kit, m, drop, 0xffa850, 0.9, 0.24);
      m.userData.noShadow = true;
      m.userData.voice = 'chime';
    } else if (near(0.13)) {
      // the coffee table's marble spheres
      const ball = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 16), M(kit, 'stone', 0xf1eee7));
      m.add(ball);
      const vein = new THREE.Mesh(new THREE.TorusGeometry(r * 1.001, 0.004, 4, 30), M(kit, 'matte', 0x9a968f));
      vein.rotation.set(1.1, 0.4, 0);
      m.add(vein);
      m.userData.voice = 'stone';
    } else if (near(0.055) || near(0.04)) {
      // the cairn's round pebbles
      const geo = new THREE.SphereGeometry(r, 16, 12);
      kit.roughen(geo, 0.05);
      const pebble = new THREE.Mesh(geo, M(kit, 'stone', hex));
      pebble.scale.y = 0.96;
      m.add(pebble);
      m.userData.voice = 'stone';
    } else if (near(0.09)) {
      // "For Larger Papers"
      m.add(new THREE.Mesh(new THREE.SphereGeometry(r, 26, 20), new THREE.MeshPhongMaterial({ color: 0xd4d9e0, shininess: 240, specular: 0xffffff })));
    } else if (near(0.06)) {
      m.add(new THREE.Mesh(new THREE.SphereGeometry(r, 18, 14), M(kit, 'lacq', hex))); // the mobile's ball
      m.userData.voice = 'chime';
    } else if (near(0.012)) {
      // a mint
      const mint = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), M(kit, 'lacq', hex));
      mint.scale.y = 0.6;
      m.add(mint);
      return m;
    } else return null;
    label(kit, m, body);
    return m;
  }
  if (shape !== 0) return null;

  // ---- statics ----
  if (cls === 0) {
    if (is(body, 2.7, 0.34, 0.012)) {
      // the shop sign: back-lit letters on a dark fascia
      m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'satin', 0x26242b)));
      const tx = text(kit, 1620, 204, (g) => {
        g.fillStyle = '#fff3dc';
        g.font = `800 112px ${FONT}`;
        g.textAlign = 'left';
        const w = g.measureText(NAME).width;
        g.fillText(NAME, 810 - w / 2 + 62, 92);
        mark(g, 810 - w / 2 - 20, 88, 104, '#ffb45e');
        g.font = `600 27px ${FONT}`;
        g.textAlign = 'center';
        g.fillStyle = '#e8cfa0';
        g.fillText('S O F A S     L I G H T I N G     O B J E C T S     R E G R E T', 810, 178);
      });
      const face = new THREE.Mesh(new THREE.PlaneGeometry(a * 2, b * 2), new THREE.MeshBasicMaterial({ map: tx, transparent: true }));
      face.rotation.y = Math.PI;
      face.position.z = -c - 0.003;
      m.add(face);
      glow(kit, m, face, 0xffd9a0, 1.5, 0, false); // lettering this size on the glow layer fogs the whole wall
      m.userData.noShadow = true;
      return m;
    }
    if (Math.abs(body.gloss - 0.92) < 0.004 && Math.min(a, c) < 0.02 && b > 0.5) {
      // the shop window: black steel frame, the street's last daylight
      const along = Math.max(a, c);
      const side = c > a;
      const face = new THREE.Group();
      face.rotation.y = side ? (body.px < 0 ? Math.PI / 2 : -Math.PI / 2) : Math.PI;
      const sky = kit.makeCanvas(256, 256, (g) => {
        const gr = g.createLinearGradient(0, 0, 0, 256);
        gr.addColorStop(0, '#5f7fb4');
        gr.addColorStop(0.5, '#b9c7e2');
        gr.addColorStop(0.82, '#ffd9b0');
        gr.addColorStop(1, '#ffb98a');
        g.fillStyle = gr;
        g.fillRect(0, 0, 256, 256);
        // the far side of the street, windows lit
        g.fillStyle = 'rgba(52,58,84,0.78)';
        for (const [x, w, h] of [[0, 46, 106], [44, 38, 142], [80, 52, 94], [130, 34, 160], [162, 58, 114], [218, 40, 134]]) {
          g.fillRect(x, 256 - h, w, h);
          g.fillStyle = 'rgba(255,214,150,0.9)';
          for (let wy = 256 - h + 10; wy < 246; wy += 16) for (let wx = x + 6; wx < x + w - 6; wx += 11) if ((wx * 7 + wy * 3) % 5 < 2) g.fillRect(wx, wy, 5, 7);
          g.fillStyle = 'rgba(52,58,84,0.78)';
        }
      });
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(along * 2, b * 2), new THREE.MeshBasicMaterial({ map: sky, side: THREE.DoubleSide }));
      face.add(pane);
      const steel = M(kit, 'satin', INK);
      const bars = [[along * 2 + 0.1, 0.05, 0, b + 0.025], [along * 2 + 0.1, 0.05, 0, -b - 0.025], [0.05, b * 2, -along - 0.025, 0], [0.05, b * 2, along + 0.025, 0]];
      for (const k of [-0.5, 0, 0.5]) bars.push([0.03, b * 2, along * k, 0]);
      for (const [w, h, x, y] of bars) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.05), steel);
        bar.position.set(x, y, 0.005);
        face.add(bar);
      }
      // the name, in vinyl, read from the street
      const vinyl = new THREE.Mesh(new THREE.PlaneGeometry(along * 1.5, along * 0.16), new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: text(kit, 900, 96, (g) => {
        g.fillStyle = '#f2ede2';
        g.font = `800 60px ${FONT}`;
        g.fillText(NAME, 470, 50);
        mark(g, 40, 48, 60, '#f2ede2');
      }) }));
      vinyl.rotation.y = Math.PI; // faces the street; the shop reads it backwards
      vinyl.position.set(0, -b * 0.7, 0.012);
      face.add(vinyl);
      m.add(face);
      glow(kit, m, pane, 0xbcd0ff, 1.5, 0, false);
      m.userData.noShadow = true;
      return m;
    }
    if (Math.abs(body.gloss - 0.86) < 0.004) {
      // a dropped track spot: a rod from the ceiling, a can, a lens. The
      // strongest few become real lights; all of them lay a pool.
      const black = M(kit, 'satin', INK);
      const L = Math.max(0.1, S.ceil - body.py);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, L, 6), black);
      stem.position.y = L / 2 + 0.05;
      m.add(stem);
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.065, 0.16, 14), black);
      m.add(can);
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.058, 14), basic(kit, WARM));
      lens.rotation.x = Math.PI / 2;
      lens.position.y = -0.082;
      m.add(lens);
      lens.layers.enable(kit.GLOW_LAYER);
      kit.pendingLights.push({ node: m, color: 0xffe9cc, intensity: 3.4 - 0.06 * S.spots++, distance: 8.5 });
      if (S.group) {
        const pool = poolMesh(kit, 0xffe2b8, 2.0, 0.3);
        pool.rotation.x = -Math.PI / 2;
        pool.position.set(body.px, floorAt(body.px, body.pz) + 0.016, body.pz);
        S.group.add(pool);
      }
      m.userData.noShadow = true;
      return m;
    }
    if (is(body, 0.03, 0.01, 0.03)) {
      // a ceiling rose and its drop rod
      const chrome = M(kit, 'metal', 0x3a3a40);
      m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.02, 10), chrome));
      const L = Math.max(0.05, S.ceil - body.py);
      const drop = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, L, 5), chrome);
      drop.position.y = L / 2;
      m.add(drop);
      m.userData.noShadow = true;
      return m;
    }
    const d = decode(body.gloss);
    if (b < 0.008 && d && d.fin === 'matte' && d.form === BOX && pal && a > 0.3) {
      // half a rug; the two work out who is who when both are in
      const tx = rugTex(kit, pal[2]).clone();
      tx.needsUpdate = true;
      tx.repeat.set(0.5, 1);
      const tile = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xffffff, { map: tx }));
      const mate = S.rugs.find((r) => !r.done && r.name === pal[2] && Math.abs(r.z - body.pz) < 0.01 && Math.abs(Math.abs(r.x - body.px) - a * 2) < 0.01);
      if (mate) {
        mate.done = true;
        // box top: u runs with +x
        mate.tx.offset.x = mate.x < body.px ? 0 : 0.5;
        tx.offset.x = mate.x < body.px ? 0.5 : 0;
        // its label lies on the front corner nearest the door
        const ex = kit.exhibit?.(body.i);
        if (ex && S.group) {
          const cx = (mate.x + body.px) / 2;
          const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.2), new THREE.MeshBasicMaterial({ map: labelTex(kit, ex, false) }));
          lab.rotation.set(-Math.PI / 2, 0, Math.PI);
          lab.position.set(cx + a * 2 - 0.24, 0.0125, body.pz - c + 0.18);
          S.group.add(lab);
        }
      } else S.rugs.push({ tx, x: body.px, z: body.pz, name: pal[2], done: false });
      tile.userData.noShadow = true;
      return tile;
    }
    if (is(body, 1.5, 0.45, 0.3)) {
      // the checkout: fluted travertine, and the terms of sale
      const block = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'stone', HEX.trav));
      m.add(block);
      const flutes = [];
      for (let k = 0; k < 30; k++) {
        if (k >= 9 && k <= 20) continue;
        const flute = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, b * 2 - 0.1, 8, 1, false, Math.PI / 2, Math.PI));
        flute.position.set(-a + 0.05 + k * 0.1, -0.02, -c);
        flutes.push(flute);
      }
      m.add(fuse(kit, flutes, M(kit, 'stone', HEX.trav)));
      const words = board(kit, 1.02, 0.34, text(kit, 612, 204, (g) => {
        g.fillStyle = '#3a3026';
        g.font = `800 50px ${FONT}`;
        g.fillText('ALL SALES', 306, 52);
        g.fillText('EXTREMELY FINAL', 306, 112);
        mark(g, 306, 168, 40, '#b0823a');
      }));
      words.position.set(0, 0.02, -c - 0.004);
      m.add(words);
      return m;
    }
    if (is(body, 0.62, 0.16, 0.02)) {
      // "pay here", in amber neon, on the wall behind the counter
      const tubes = board(kit, a * 2, b * 2, text(kit, 620, 160, (g) => {
        g.lineJoin = g.lineCap = 'round';
        g.font = `italic 700 118px Georgia, 'Times New Roman', serif`;
        for (const [w, col] of [[20, 'rgba(255,170,60,0.35)'], [11, '#ffab3d'], [4, '#fff0cf']]) {
          g.strokeStyle = col;
          g.lineWidth = w;
          g.strokeText('pay here', 310, 74);
        }
      }));
      tubes.position.z = -c - 0.002;
      m.add(tubes);
      glow(kit, m, tubes.children[0], 0xffab3d, 1.4, 0.6);
      m.userData.noShadow = true;
      return m;
    }
    return null;
  }

  // ---- vases and vessels ----
  if (is(body, 0.075, 0.13, 0.075)) {
    // "Vessel (Refusal)": open at both ends
    m.add(vessel(kit, [[0.05, -b], [0.062, -b * 0.45], [0.075, b * 0.1], [0.052, b * 0.68], [0.07, b]], 'lacq', hex, 26));
    const hole = new THREE.Mesh(new THREE.RingGeometry(0.03, 0.05, 20), M(kit, 'matte', INK));
    hole.rotation.x = -Math.PI / 2;
    hole.position.y = -b + 0.002;
    m.add(hole);
  } else if (is(body, 0.06, 0.115, 0.06)) {
    // "No Good Side": the plinth's motor turns it until it leaves the plinth
    const spin = new THREE.Group();
    const bodyMesh = vessel(kit, [[0.03, -b], [0.05, -b * 0.6], [0.06, -b * 0.15], [0.038, b * 0.3], [0.055, b * 0.62], [0.03, b * 0.9], [0.04, b]], 'lacq', hex, 22);
    spin.add(bodyMesh);
    const wart = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), M(kit, 'lacq', HEX.sage));
    wart.position.set(0.05, -0.02, 0.01);
    spin.add(wart);
    const ear = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.009, 6, 14, Math.PI), M(kit, 'lacq', HEX.ochre));
    ear.rotation.z = Math.PI / 2;
    ear.position.set(-0.045, 0.045, 0);
    spin.add(ear);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.09, 0.05), M(kit, 'lacq', HEX.ink));
    fin.position.set(0, 0.0, -0.06);
    spin.add(fin);
    m.add(spin);
    const home = new THREE.Vector3(body.px, body.py, body.pz);
    bodyMesh.onBeforeRender = () => {
      if (m.position.distanceToSquared(home) < 0.0004) spin.rotation.y = performance.now() * 0.0007;
    };
  } else if (is(body, 0.022, 0.15, 0.022)) {
    // "En Pointe": 150 mm at the lip, standing on 6
    m.add(vessel(kit, [[0.003, -b], [0.012, -b * 0.8], [0.034, -b * 0.2], [0.058, b * 0.45], [0.075, b * 0.9], [0.07, b]], 'lacq', hex, 26));
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.047, 0.005, 5, 26), M(kit, 'lacq', INK));
    band.rotation.x = Math.PI / 2;
    band.position.y = b * 0.2;
    m.add(band);
  } else if (is(body, 0.11, 0.13, 0.11)) {
    // "Absence": a dome over nothing
    const glass = M(kit, 'glass', 0xe8f2f6);
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.15, 28, 1, true), glass);
    wall.position.y = -b + 0.085;
    m.add(wall);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.105, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), glass);
    dome.position.y = -b + 0.16;
    m.add(dome);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.016, 10, 8), glass);
    knob.position.y = b - 0.012;
    m.add(knob);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.012, 28), M(kit, 'lacq', INK));
    base.position.y = -b + 0.006;
    m.add(base);
    m.userData.noShadow = true;
  } else if (is(body, 0.1, 0.1, 0.034)) {
    // "Knot": cannot be filled
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.056, 0.02, 80, 10, 2, 3), freshMat(kit, 'lacq', hex));
    knot.scale.z = 0.62;
    m.add(knot);
  } else if (is(body, 0.035, 0.14, 0.035)) {
    // "Italic": the lean is the glaze's; it stands on a level foot
    const geo = lathe(kit, [[0.03, -b], [0.035, -b * 0.55], [0.03, -b * 0.05], [0.012, b * 0.35], [0.011, b * 0.85], [0.019, b]], 18);
    const p = geo.attributes.position;
    for (let k = 0; k < p.count; k++) p.setX(k, p.getX(k) + (p.getY(k) + b) * 0.24 - 0.02);
    geo.computeVertexNormals();
    m.add(new THREE.Mesh(geo, freshMat(kit, 'lacq', hex, { side: THREE.DoubleSide })));
  } else if (is(body, 0.19, 0.42, 0.19)) {
    // "Thirst": the floor amphora, with its sticker
    m.add(vessel(kit, [[0.07, -b], [0.08, -b + 0.02], [0.05, -b + 0.07], [0.12, -0.2], [0.19, 0.02], [0.17, 0.16], [0.07, 0.27], [0.058, 0.36], [0.095, b]], 'lacq', hex, 28));
    for (const sx of [-1, 1]) {
      const h = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.016, 7, 16, Math.PI), M(kit, 'lacq', hex));
      h.rotation.z = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
      h.position.set(sx * 0.085, 0.27, 0);
      m.add(h);
    }
    const dot = redDot(kit, 0.05);
    dot.rotation.y = Math.PI;
    dot.position.set(0.02, 0.02, -0.192);
    m.add(dot);
  } else if (is(body, 0.11, 0.45, 0.11)) {
    // "Sentinel": a floor vase a metre tall, all shoulder
    m.add(vessel(kit, [[0.07, -b], [0.085, -b + 0.03], [0.06, -b + 0.12], [0.075, -0.1], [0.11, 0.16], [0.1, 0.27], [0.045, 0.36], [0.04, 0.41], [0.062, b]], 'lacq', hex, 24));
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.109, 0.006, 5, 26), M(kit, 'metal', BRASS));
    band.rotation.x = Math.PI / 2;
    band.position.y = 0.17;
    m.add(band);
  } else if (is(body, 0.04, 0.08, 0.04)) {
    // "Tuesday's Flowers" (the sim keeps the water in it)
    m.add(vessel(kit, [[0.024, -b], [0.04, -b * 0.35], [0.034, b * 0.2], [0.018, b * 0.65], [0.028, b]], 'lacq', hex, 16));
    const stem = M(kit, 'matte', 0x4d7a4a);
    const stems = [], blooms = [];
    for (const [x, y, z] of [[0.03, 0.1, 0.01], [-0.035, 0.12, -0.012], [0.005, 0.15, 0.03], [-0.012, 0.09, -0.032]]) {
      stems.push(rod(kit, [0, b - 0.02, 0], [x, b + y, z], 0.003, stem));
      const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6));
      bloom.position.set(x, b + y, z);
      blooms.push(bloom);
    }
    m.add(fuse(kit, stems, stem));
    // one bunch, one colour: whatever the vase is not
    m.add(fuse(kit, blooms, M(kit, 'matte', [HEX.rust, HEX.ochre, HEX.blush, PAPER, HEX.mauve].filter((c) => c !== hex)[body.i % 4])));
  } else if (is(body, 0.017, 0.07, 0.017)) {
    // "One of Twelve": every one of them sold
    m.add(vessel(kit, [[0.012, -b], [0.017, -b * 0.4], [0.014, 0], [0.006, b * 0.5], [0.006, b * 0.85], [0.01, b]], 'lacq', hex, 12));
    const dot = redDot(kit, 0.006);
    dot.rotation.y = Math.PI;
    dot.position.set(0, -b * 0.35, -0.0175);
    m.add(dot);
  } else if (is(body, 0.035, 0.09, 0.035)) {
    // "Decant"
    m.add(vessel(kit, [[0.03, -b], [0.035, -b * 0.5], [0.031, 0.01], [0.013, b * 0.55], [0.012, b * 0.85], [0.021, b]], 'glass', hex, 14));
    m.userData.noShadow = true;
  } else if (is(body, 0.03, 0.04, 0.03)) {
    // "Almost Round": the candle shares these dims but not this finish
    const d = decode(body.gloss);
    if (d && d.fin === 'glass') {
      m.add(vessel(kit, [[0.001, -b + 0.004], [0.023, -b + 0.004], [0.024, -b], [0.031, b * 0.4], [0.029, b]], 'glass', hex, 14));
      m.userData.noShadow = true;
    } else {
      // "Concrete After Rain"
      m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.028, b * 2, 14), M(kit, 'stone', 0xa9a59e)));
      const wax = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.004, 12), M(kit, 'matte', 0xf2ead8));
      wax.position.y = b - 0.001;
      m.add(wax);
      const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0015, 0.012, 4), M(kit, 'matte', INK));
      wick.position.y = b + 0.006;
      m.add(wick);
      m.userData.voice = 'stone';
    }
  } else if (is(body, 0.075, 0.085, 0.075)) {
    // "Plumb": a pendant shaped like the thing that proves it hangs straight
    const bob = new THREE.Mesh(lathe(kit, [[0.004, -b], [0.04, -b * 0.35], [0.075, b * 0.35], [0.06, b * 0.6], [0.022, b * 0.82], [0.02, b]], 20), lit(kit, 0xffb46a, 0xff8a2e));
    m.add(bob);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.02, 10), M(kit, 'metal', BRASS));
    cap.position.y = b - 0.004;
    m.add(cap);
    glow(kit, m, bob, 0xff9a3c, 1.1, 0.3);
    carryPool(kit, m, bob, 0xff9a3c, 0.9, 0.22);
    m.userData.voice = 'chime'; // three of them, close enough to clack
  } else if (is(body, 0.27, 0.1, 0.022)) {
    // the neon: "sold", in red, for sale
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', 0x1c1b22)));
    const tubes = board(kit, a * 2, b * 2, text(kit, 432, 160, (g) => {
      g.lineJoin = g.lineCap = 'round';
      g.font = `italic 700 128px Georgia, 'Times New Roman', serif`;
      for (const [w, col] of [[20, 'rgba(255,40,30,0.35)'], [11, '#ff3a2c'], [4, '#ffd9d2']]) {
        g.strokeStyle = col;
        g.lineWidth = w;
        g.strokeText('sold', 216, 74);
      }
    }));
    tubes.position.z = -c - 0.002;
    m.add(tubes);
    glow(kit, m, tubes.children[0], 0xff3a2c, 1.3, 0.5);
    label(kit, m, body, { at: [-0.2, -b + 0.012, -c - 0.016] }); // under the sign, not across it
    return m;
  } else if (is(body, 0.14, 0.1, 0.12)) {
    // "Till Tomorrow": a brass register — a stepped case, a bank of keys, a crank
    const brass = M(kit, 'metal', BRASS);
    const low = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 1.1, c * 2), brass);
    low.position.y = -b * 0.45;
    m.add(low);
    const top = new THREE.Mesh(new THREE.BoxGeometry(a * 1.7, b * 0.9, c * 1.1), brass);
    top.position.set(0, b * 0.55, c * 0.4);
    m.add(top);
    const keys = [];
    for (let r = 0; r < 3; r++) for (let k = 0; k < 6; k++) {
      const key = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.012, 8));
      key.position.set(-0.1 + k * 0.04, b * 0.1 + 0.008 + r * 0.012, -c + 0.03 + r * 0.035);
      keys.push(key);
    }
    m.add(fuse(kit, keys, M(kit, 'lacq', PAPER)));
    m.add(rod(kit, [a, -0.01, 0.02], [a + 0.05, -0.01, 0.02], 0.007, brass));
    m.add(rod(kit, [a + 0.05, -0.01, 0.02], [a + 0.05, 0.05, 0.02], 0.007, brass));
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.05), new THREE.MeshBasicMaterial({ map: text(kit, 288, 80, (g) => {
      g.fillStyle = '#2a2018';
      g.fillRect(0, 0, 288, 80);
      g.fillStyle = '#e8c878';
      g.font = `bold 26px Georgia, serif`;
      g.fillText('DESIGN WITHIN SCRATCH', 144, 26);
      g.font = `18px Georgia, serif`;
      g.fillText('amount due · all of it', 144, 58);
    }) }));
    plate.rotation.y = Math.PI;
    plate.position.set(0, -b * 0.55, -c - 0.002);
    m.add(plate);
    label(kit, m, body, { at: [-a - 0.01, 0.02, -c * 0.5] });
    return m;
  } else if (is(body, 0.12, 0.03, 0.07)) {
    // its drawer, open, in four compartments
    const brass = M(kit, 'metal', BRASS);
    const tray = new THREE.Mesh(new THREE.BoxGeometry(a * 2, 0.008, c * 2), brass);
    tray.position.y = b - 0.012;
    m.add(tray);
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2 - 0.016, c * 2), M(kit, 'lacq', 0x2a2018)).translateY(-0.008));
    for (const [w, d, x, z] of [[a * 2, 0.006, 0, -c + 0.003], [0.006, c * 2, -a + 0.003, 0], [0.006, c * 2, a - 0.003, 0], [0.006, c * 2, -0.04, 0], [0.006, c * 2, 0.04, 0]]) {
      const lip = new THREE.Mesh(new THREE.BoxGeometry(w, 0.014, d), brass);
      lip.position.set(x, b - 0.003, z);
      m.add(lip);
    }
    return m;
  } else if (is(body, 0.07, 0.035, 0.01)) {
    // and its flag: what it rang up last
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', PAPER)));
    const tx = text(kit, 280, 140, (g) => {
      g.fillStyle = '#fbfaf6';
      g.fillRect(0, 0, 280, 140);
      g.fillStyle = '#1c1b22';
      g.font = `bold 34px Georgia, serif`;
      g.fillText('NO SALE', 140, 44);
      g.font = `bold 46px Georgia, serif`;
      g.fillStyle = '#e5352b';
      g.fillText('$0.00', 140, 100);
    });
    for (const s of [-1, 1]) {
      const f = new THREE.Mesh(new THREE.PlaneGeometry(a * 2 - 0.006, b * 2 - 0.006), new THREE.MeshBasicMaterial({ map: tx }));
      f.rotation.y = s < 0 ? Math.PI : 0;
      f.position.z = s * (c + 0.001);
      m.add(f);
    }
    return m;
  } else if (is(body, 0.035, 0.012, 0.055)) {
    // the card reader: a slab with a lit screen
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', 0x1c1b22)));
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(a * 1.6, c * 0.8), basic(kit, 0x9fe6c8));
    scr.rotation.x = -Math.PI / 2;
    scr.position.set(0, b + 0.001, c * 0.4);
    m.add(scr);
    glow(kit, m, scr, 0x9fe6c8, 0.25, 0);
  } else if (is(body, 0.04, 0.02, 0.04)) {
    // the service bell
    const brass = M(kit, 'metal', BRASS);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.04, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), brass);
    dome.position.y = -b + 0.004;
    dome.scale.y = 0.8;
    m.add(dome);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.044, 0.006, 16), M(kit, 'lacq', INK));
    base.position.y = -b + 0.003;
    m.add(base);
    const pip = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.014, 6), brass);
    pip.position.y = b - 0.002;
    m.add(pip);
    m.userData.voice = 'chime';
  } else if (is(body, 0.12, 0.15, 0.05)) {
    // a shopping bag: kraft paper, rope handles, the house mark
    const kraft = toonMat(0xffffff, { map: text(kit, 192, 240, (g) => {
      g.fillStyle = '#d8c7a6';
      g.fillRect(0, 0, 192, 240);
      mark(g, 96, 96, 70, '#1c1b22');
      g.fillStyle = '#1c1b22';
      g.font = `800 15px ${FONT}`;
      g.fillText(NAME, 96, 176);
    }) });
    const side = M(kit, 'matte', 0xcdbb98);
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), [side, side, side, side, kraft, kraft]));
    for (const s of [-1, 1]) {
      const h = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.004, 4, 12, Math.PI), M(kit, 'matte', INK));
      h.position.set(0, b, s * c * 0.8);
      m.add(h);
    }
    return m;
  } else if (is(body, 0.09, 0.12, 0.09)) {
    // "Mushroom": a glass table lamp, lit
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), lit(kit, 0xffd2c0, 0xff9c84, 0.9));
    cap.position.y = b - 0.095;
    cap.scale.y = 0.95;
    m.add(cap);
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, b * 2 - 0.09, 14), lit(kit, 0xffe9df, 0xffb9a4, 0.45));
    stalk.position.y = -0.045;
    m.add(stalk);
    glow(kit, m, cap, 0xffb09a, 1.0, 0.36, false);
    carryPool(kit, m, cap, 0xffb09a, 0.8, 0.26);
    m.userData.noShadow = true;
  } else if (is(body, 0.075, 0.011, 0.105)) {
    // the autumn catalogue
    const cover = toonMat(0xffffff, { map: text(kit, 150, 210, (g) => {
      g.fillStyle = '#26242b';
      g.fillRect(0, 0, 150, 210);
      mark(g, 75, 80, 64, '#d9a13b');
      g.fillStyle = '#f2ede2';
      g.font = `bold 17px ${FONT}`;
      g.fillText('AUTUMN', 75, 160);
    }) });
    const dark = M(kit, 'satin', 0x26242b), page = M(kit, 'matte', PAPER);
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), [page, dark, cover, dark, page, page]));
  } else if (is(body, 0.13, 0.022, 0.17)) {
    // a first edition: boards, and the pages showing on three sides
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'matte', hex)));
    const pages = new THREE.Mesh(new THREE.BoxGeometry(a * 2 - 0.006, b * 2 - 0.012, c * 2 + 0.002), M(kit, 'matte', 0xefe8d6));
    pages.position.x = 0.006;
    m.add(pages);
  } else if (is(body, 0.006, 0.05, 0.006)) {
    // a stem out of a broken vase
    m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, b * 2, 5), M(kit, 'matte', 0x4d7a4a)));
    const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), M(kit, 'matte', body.tint < 0.5 ? HEX.rust : HEX.ochre));
    bloom.position.y = b;
    m.add(bloom);
    return m;
  } else if (is(body, 0.3, 0.17, 0.3)) {
    // "Slump"
    const geo = new THREE.SphereGeometry(1, 20, 14);
    const p = geo.attributes.position;
    for (let k = 0; k < p.count; k++) {
      const y = p.getY(k);
      // sat-in: the top sags, the bottom spreads flat
      const sag = y > 0.3 ? 1 - 0.28 * Math.exp(-(p.getX(k) ** 2 + p.getZ(k) ** 2) * 5) : 1;
      p.setY(k, Math.max(y * sag, -0.94));
    }
    kit.roughen(geo, 0.035);
    const bag = new THREE.Mesh(geo, toonMat(hex));
    bag.scale.set(a * 1.08, b * 1.06, c * 1.08);
    m.add(bag);
  } else if (is(body, 0.03, 0.75, 0.38)) {
    // "Narcissus (Large)": glass toward the room
    const face = new THREE.Mesh(new THREE.PlaneGeometry(c * 2 - 0.06, b * 2 - 0.06), mirrorMat(kit));
    face.rotation.y = Math.PI / 2;
    face.position.x = a + 0.001;
    m.add(face);
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'metal', BRASS)));
  } else if (is(body, 0.34, 0.42, 0.32)) {
    // "Yolk": an egg with its front cut away (the sim turns it to the room)
    const shell = freshMat(kit, 'lacq', PAPER, { side: THREE.DoubleSide });
    const egg = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 20, -Math.PI * 0.22, Math.PI * 1.44), shell);
    egg.scale.set(a, b, c);
    m.add(egg);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.97, 24, 16, -Math.PI * 0.22, Math.PI * 1.44), new THREE.MeshToonMaterial({ color: HEX.ochre, side: THREE.BackSide }));
    inner.scale.set(a, b, c);
    m.add(inner);
    const eye = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.008, 6, 14), M(kit, 'metal', 0xc9ced6));
    eye.position.y = b + 0.012;
    m.add(eye);
    label(kit, m, body, { at: [0.22, 0.05, -0.3] });
    return m;
  } else if (is(body, 0.06, 0.045, 0.06)) {
    // the arc lamp's head: a chrome dome the size of a grapefruit
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.068, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhongMaterial({ color: 0xc9ced6, shininess: 160, specular: 0xffffff, side: THREE.DoubleSide }));
    dome.position.y = -b + 0.01;
    m.add(dome);
    const bulb = new THREE.Mesh(new THREE.CircleGeometry(0.058, 16), basic(kit, WARM));
    bulb.rotation.x = Math.PI / 2;
    bulb.position.y = -b + 0.014;
    m.add(bulb);
    glow(kit, m, bulb, 0xffe2b4, 1.3, 0); // the light-budget pass adds its own halo
    kit.pendingLights.push({ node: m, color: 0xffe2b4, intensity: 2.2, distance: 4 });
    carryPool(kit, m, dome, 0xffe2b4, 1.2, 0.34, litOut(m), () => bulb.material.color.setHex(0x55504a));
    return m;
  } else if (is(body, 0.09, 0.07, 0.09)) {
    // the larger lamp's head: a shade tipped at the room
    const tip = new THREE.Group();
    tip.rotation.z = -0.75;
    const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.1, 0.15, 20, 1, true), freshMat(kit, 'lacq', hex, { side: THREE.DoubleSide }));
    tip.add(sh);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), M(kit, 'lacq', hex));
    cap.position.y = 0.075;
    tip.add(cap);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 10), basic(kit, WARM));
    bulb.position.y = -0.03;
    tip.add(bulb);
    m.add(tip);
    glow(kit, m, bulb, 0xffe2b4, 1.2, 0);
    kit.pendingLights.push({ node: m, color: 0xffe2b4, intensity: 1.4, distance: 4 });
    carryPool(kit, m, sh, 0xffe2b4, 1.0, 0.3, litOut(m), () => bulb.material.color.setHex(0x55504a));
    return m;
  } else if (is(body, 0.45, 0.005, 0.005) || is(body, 0.005, 0.005, 0.26)) {
    // a mobile's bar: a sprung wire, arched up to its hook
    const alongX = a > c, half = alongX ? a : c, rise = alongX ? 0.12 : 0.03;
    const end = (s) => (alongX ? new THREE.Vector3(s * half, 0, 0) : new THREE.Vector3(0, 0, s * half));
    const curve = new THREE.QuadraticBezierCurve3(end(-1), new THREE.Vector3(0, rise * 2, 0), end(1));
    m.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 18, 0.004, 5), M(kit, 'satin', INK)));
    m.userData.noShadow = true;
    m.userData.voice = 'chime';
    return m;
  } else if (is(body, 0.14, 0.14, 0.006)) {
    // the mobile's disc: the one red dot in the shop that is not a sticker
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(a, a, c * 2, 30), freshMat(kit, 'lacq', hex));
    disc.rotation.x = Math.PI / 2;
    m.add(disc);
    m.userData.voice = 'chime';
    label(kit, m, body, { at: [0, -0.1, -0.012] });
    return m;
  } else if (is(body, 0.09, 0.09, 0.006)) {
    // the mobile's triangle
    const tri = new THREE.Shape();
    tri.moveTo(-a, -b);
    tri.lineTo(a, -b);
    tri.lineTo(0, b);
    tri.closePath();
    const geo = new THREE.ExtrudeGeometry(tri, { depth: c * 2, bevelEnabled: false });
    geo.translate(0, 0, -c);
    m.add(new THREE.Mesh(geo, freshMat(kit, 'lacq', hex)));
    m.userData.voice = 'chime';
    return m;
  } else if (is(body, 0.13, 0.085, 0.008) || is(body, 0.15, 0.1, 0.008)) {
    // a standing sign's board: PLEASE DO NOT TOUCH, or the sale
    const sale = a > 0.14;
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', sale ? 0x26242b : PAPER)));
    const tx = text(kit, 390, 255, (g) => {
      if (sale) {
        g.fillStyle = '#26242b';
        g.fillRect(0, 0, 390, 255);
        g.fillStyle = '#f2ede2';
        g.font = `900 50px ${FONT}`;
        g.fillText('FINAL', 195, 46);
        g.fillText('REDUCTIONS', 195, 100);
        g.fillStyle = '#d9a13b';
        g.font = `900 78px ${FONT}`;
        g.fillText('5% OFF', 195, 186);
      } else {
        g.fillStyle = '#fbfaf6';
        g.fillRect(0, 0, 390, 255);
        g.strokeStyle = '#1c1b22';
        g.lineWidth = 12;
        g.strokeRect(6, 6, 378, 243);
        g.fillStyle = '#1c1b22';
        g.font = `900 64px ${FONT}`;
        g.fillText('PLEASE', 195, 62);
        g.fillText('DO NOT', 195, 128);
        g.fillStyle = '#e5352b';
        g.fillText('TOUCH', 195, 196);
      }
    });
    for (const s of [-1, 1]) {
      const f = new THREE.Mesh(new THREE.PlaneGeometry(a * 2, b * 2), new THREE.MeshBasicMaterial({ map: tx }));
      f.rotation.y = s < 0 ? Math.PI : 0;
      f.position.z = s * (c + 0.001);
      m.add(f);
    }
    return m;
  } else if (is(body, 0.17, 0.26, 0.012)) {
    // the pavement sign
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', 0x26242b)));
    const tx = text(kit, 340, 520, (g) => {
      g.fillStyle = '#26242b';
      g.fillRect(0, 0, 340, 520);
      mark(g, 170, 84, 96, '#d9a13b');
      g.fillStyle = '#f2ede2';
      ['YOU', 'BREAK IT,', 'YOU', 'BOUGHT IT.'].forEach((l, k) => {
        g.font = `900 ${k === 3 ? 54 : 60}px ${FONT}`;
        g.fillText(l, 170, 206 + k * 78);
      });
    });
    for (const s of [-1, 1]) {
      const f = new THREE.Mesh(new THREE.PlaneGeometry(a * 2 - 0.02, b * 2 - 0.02), new THREE.MeshBasicMaterial({ map: tx }));
      f.rotation.y = s < 0 ? Math.PI : 0;
      f.position.z = s * (c + 0.001);
      m.add(f);
    }
    label(kit, m, body, { at: [0.2, 0.1, -0.02] });
    return m;
  } else if (is(body, 0.035, 0.035, 0.035) && cls === 2) {
    // an alphabet block, in marble
    const letter = 'SCRATCH'[body.i % 7];
    const face = toonMat(0xffffff, { map: text(kit, 64, 64, (g) => {
      g.fillStyle = css(hex);
      g.fillRect(0, 0, 64, 64);
      g.strokeStyle = 'rgba(128,120,110,0.5)';
      g.lineWidth = 4;
      g.strokeRect(4, 4, 56, 56);
      g.fillStyle = (hex & 0xff) > 0x90 ? '#3a3026' : '#f2ede2';
      g.font = `900 44px Georgia, serif`;
      g.fillText(letter, 32, 35);
    }) });
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), face));
    m.userData.voice = 'stone';
  } else return null;
  label(kit, m, body);
  return m;
}

let mirrorCache = null;
function mirrorMat(kit) {
  mirrorCache ??= new kit.THREE.MeshPhongMaterial({ color: 0xd3e2ea, shininess: 300, specular: 0xffffff, emissive: 0x1a2630, map: kit.makeCanvas(64, 128, (g) => {
    const gr = g.createLinearGradient(0, 0, 64, 128);
    gr.addColorStop(0, '#f4fbff');
    gr.addColorStop(0.45, '#9fb8c8');
    gr.addColorStop(0.55, '#e8f6fd');
    gr.addColorStop(1, '#7f9cb0');
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 128);
  }) });
  return mirrorCache;
}

// a recognized body -> a THREE.Object3D (usually a Group), or null to let
// main.js's own chain / default box-sphere-capsule handle it
export function mesh(kit, body) {
  if (body.cls === 3 || body.cls === 4) return null;
  // the shell (floor slab, walls) is dressed by material()
  if (body.cls === 0 && (body.a > 5 || body.c > 4) && (body.b <= 0.11 || body.b >= 1.5)) return null;
  // things main.js already draws well: the bar's bottles, the house mug
  if (body.cls === 2 && body.shape === 0 && (is(body, 0.028, 0.08, 0.028) || is(body, 0.035, 0.045, 0.035))) return null;
  const { THREE, toonMat } = kit;
  const h = hero(kit, body);
  if (h) return h;
  if (body.shape !== 0 || !authored(body)) return null;
  const d = decode(body.gloss);
  const pal = slot(body.tint);
  if (!d || !pal) return null;
  const { a, b, c, cls } = body;
  const hex = pal[1];
  // families on the vocabulary that want more than the bare form
  if (cls === 1 && d.fin === 'matte' && d.form === BOX && pal[2] === 'oat') {
    // the Ziggurat: boucle tiers on walnut plinth-lines, a cave in the widest.
    // Bare mesh with its own material — main.js mats the wool as it is clawed.
    const tier = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xffffff, { map: textures(kit).boucle }));
    const band = new THREE.Mesh(new THREE.BoxGeometry(a * 2 + 0.012, 0.022, c * 2 + 0.012), M(kit, 'satin', HEX.walnut));
    band.position.y = -b + 0.011;
    tier.add(band);
    if (a > 0.3) {
      const cave = new THREE.Mesh(new THREE.CircleGeometry(0.085, 20), M(kit, 'matte', 0x191820));
      cave.rotation.y = Math.PI;
      cave.position.set(-0.08, -0.01, -c - 0.002);
      tier.add(cave);
      label(kit, tier, body, { at: [0.2, 0.06, -c - 0.014] });
    }
    return tier;
  }
  if (cls === 2 && d.fin === 'satin' && d.form === BOX && pal[2] === 'chalk') {
    // a wrapped purchase: white paper, black ribbon, a bow
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'satin', PAPER)));
    const ribbon = M(kit, 'satin', HEX.ochre);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2 + 0.004, b * 2 + 0.004, c * 0.3), ribbon));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(a * 0.3, b * 2 + 0.004, c * 2 + 0.004), ribbon));
    for (const s of [-1, 1]) {
      const loop = new THREE.Mesh(new THREE.TorusGeometry(a * 0.2, a * 0.06, 5, 10), ribbon);
      loop.position.set(s * a * 0.2, b + a * 0.12, 0);
      loop.rotation.y = Math.PI / 2 + s * 0.6;
      g.add(loop);
    }
    label(kit, g, body);
    return g;
  }
  if (cls === 2 && d.fin === 'matte' && d.form === BOX && Math.min(b, c) < 0.02 && Math.max(a, b, c) > 0.4) {
    // a loose rug: one from the stack, a sample on the rack, the throw
    const g = new THREE.Group();
    const tx = rugTex(kit, 'weave');
    const cloth = toonMat(hex, { map: tx });
    g.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), cloth));
    if (c < 0.02) {
      // on the rack: the clip rail it hangs from
      const rail = new THREE.Mesh(new THREE.BoxGeometry(a * 2 + 0.04, 0.03, 0.03), M(kit, 'satin', INK));
      rail.position.y = b;
      g.add(rail);
    }
    return g;
  }
  const g = generic(kit, body, d.fin, d.form, pal);
  if (!g) return null;
  if (cls === 0 && d.fin === 'stone' && d.form === BOX && Math.abs(a - c) < 0.001 && a <= 0.2 && b > 0.1) {
    S.plinths.push({ x: body.px, z: body.pz, half: a, top: body.py + b });
  }
  if (cls !== 0 && d.form !== SHADE) label(kit, g, body, labelSpot(body, d));
  // chain links, rope links, coins, glassware: too small for a shadow to read
  if (cls !== 0 && Math.max(a, b, c) < 0.07) g.userData.noShadow = true;
  return g;
}

// where the swing tag hangs on pieces whose first body is not a good hook
function labelSpot(body, d) {
  // "Consequences": the seat is turned a quarter to face the table
  if (is(body, 0.2, 0.02, 0.2)) return { at: [-0.215, 0.2, -0.12], ry: Math.PI / 2 };
  // table tops and slabs: hang it off the front edge
  if ((d.form === BOX || d.form === CYL) && body.b < 0.03 && body.a > 0.15) return { at: [body.a * 0.6, -body.b, -body.c - 0.006] };
  // upholstery: off the front, low, where a customer would turn it over
  if (d.form === PILLOW || d.form === TUFT || d.form === PUFF) return { at: [Math.min(body.a * 0.6, 0.3), -body.b * 0.2, -body.c - 0.02] };
  return {};
}

// a plain body's material (floor slab, walls, shards), or null
export function material(kit, body) {
  const { toonMat } = kit;
  if (body.cls === 0 && body.a > 2 && body.b < 0.2) return toonMat(0xffffff, { map: textures(kit).floor });
  if (body.cls === 0 && body.b >= 1.5) return toonMat(0xcfc3b0); // warm plaster, where no bay has drenched it
  if (body.cls !== 2) return null;
  // a shard, or anything the vocabulary names but mesh() left as a plain
  // solid: its parent's finish and colour, on a material of its own
  const d = decode(body.gloss);
  const pal = slot(body.tint);
  if (!d || !pal || body.gloss > 0.985) return null;
  return freshMat(kit, d.fin, pal[1]);
}

// render-only dressing with no collision, added to the decor group
export function decor(kit, group, hx, hz) {
  const { THREE, toonMat } = kit;
  S = { group, plinths: [], labelled: new Set(), rugs: [], spots: 0, ceil: 4.0, hx, hz };
  const ink = M(kit, 'satin', INK);
  const H = S.ceil;
  // --- the bays: each stretch of wall drenched in one colour, floor to top ---
  // The wash is painted: main.js's light volume is too coarse a field (22 cm
  // texels in a room this wide) to draw a scallop on a wall, so each bay's
  // paint carries its own light — a row of soft scallops falling from the
  // cove line, the colour deepening toward the floor and the ceiling.
  const far = hz - 0.006;
  const COVE = 2.62;
  const washTex = (col, light, metres, scallops = true) => text(kit, 512, 256, (g) => {
    const c = new THREE.Color(col);
    const shade = (k) => `rgb(${Math.round(c.r * 255 * k)},${Math.round(c.g * 255 * k)},${Math.round(c.b * 255 * k)})`;
    const gr = g.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, shade(0.5));
    gr.addColorStop(0.3, shade(0.78));
    gr.addColorStop(0.75, shade(0.7));
    gr.addColorStop(1, shade(0.46));
    g.fillStyle = gr;
    g.fillRect(0, 0, 512, 256);
    if (!scallops) return;
    g.globalCompositeOperation = 'lighter';
    const y0 = (1 - COVE / H) * 256;
    const n = Math.max(2, Math.round(metres / 1.1));
    const L = new THREE.Color(light);
    const rgb = `${Math.round(L.r * 255)},${Math.round(L.g * 255)},${Math.round(L.b * 255)}`;
    for (let k = 0; k < n; k++) {
      const x = ((k + 0.5) / n) * 512;
      g.save();
      g.translate(x, y0);
      g.scale((512 / n) * 0.0062, 1);
      const rg = g.createRadialGradient(0, 30, 2, 0, 46, 124);
      rg.addColorStop(0, `rgba(${rgb},0.62)`);
      rg.addColorStop(0.45, `rgba(${rgb},0.24)`);
      rg.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = rg;
      g.fillRect(-200, 0, 400, 180);
      const up = g.createRadialGradient(0, -6, 1, 0, -6, 40);
      up.addColorStop(0, `rgba(${rgb},0.4)`);
      up.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = up;
      g.fillRect(-200, -60, 400, 60);
      g.restore();
    }
  });
  const wall = (x0, x1, col, light) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, H), toonMat(0xffffff, { map: washTex(col, light, x1 - x0) }));
    p.rotation.y = Math.PI;
    p.position.set((x0 + x1) / 2, H / 2, far);
    group.add(p);
  };
  wall(7.46, hx, 0x2c3f72, 0x8f9cff);
  wall(3.06, 7.34, 0x237a80, 0x7cf0e0);
  wall(-2.94, 2.94, 0xd8c8ae, 0xffd9a0);
  wall(-7.34, -3.06, 0x74222f, 0xffa07a);
  wall(-hx, -7.46, 0xcfc4b2, 0xfff0d6);
  const sideWall = (x, z0, z1, col, light, scallops = true) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(z1 - z0, H), toonMat(0xffffff, { map: washTex(col, light, z1 - z0, scallops) }));
    p.rotation.y = x > 0 ? -Math.PI / 2 : Math.PI / 2;
    p.position.set(x > 0 ? x - 0.006 : x + 0.006, H / 2, (z0 + z1) / 2);
    group.add(p);
  };
  sideWall(hx, 1.0, hz, 0x2c3f72, 0x8f9cff, false);
  sideWall(hx, -hz, 1.0, 0x2f5e4a, 0xb8f0a0);
  sideWall(-hx, -hz, hz, 0xcfc4b2, 0xfff0d6, false);
  // the fins take their bay's colour on each face (the sim paints one; this is the other)
  const finFace = (x, side, col) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 2.6), toonMat(0xffffff, { map: washTex(col, 0, 2.3, false) }));
    p.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
    p.position.set(x + side * 0.062, 1.3, hz - 1.15);
    group.add(p);
  };
  finFace(7.4, -1, 0x237a80);
  finFace(3.0, -1, 0xd8c8ae);
  finFace(-3.0, 1, 0xd8c8ae);
  finFace(-7.4, -1, 0xcfc4b2);
  // --- the ceiling: black rails the spots and pendants drop from ---
  for (const z of [-1.6, 2.4]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(hx * 2, 0.04, 0.06), ink);
    rail.position.set(0, H - 0.04, z);
    group.add(rail);
  }
  // --- wayfinding, in vinyl, high on each bay ---
  const way = (str, x, col = '#f2ede2', w = 1.6) => {
    const b = board(kit, w, w * 0.14, text(kit, 800, 112, (g) => {
      g.fillStyle = col;
      g.font = `600 64px ${FONT}`;
      g.fillText(str.split('').join(' '), 400, 58);
    }));
    b.position.set(x, 3.45, far - 0.004);
    group.add(b);
  };
  way('LIGHTING', 9.7);
  way('LIVING', 5.2);
  way('PAY', -5.1, '#f2ede2', 1.0);
  way('OBJECTS', -9.7, '#3a3026');
  // the rules, above the glass
  const rules = board(kit, 1.9, 0.19, text(kit, 950, 95, (g) => {
    g.fillStyle = '#3a3026';
    g.font = `800 50px ${FONT}`;
    g.fillText('GLASS  ·  HANDLE WITH MONEY', 475, 50);
  }));
  rules.position.set(-1.3, 2.12, far - 0.004);
  group.add(rules);
  // --- a wall of mirrors over the chesterfield (they are not for sale; the one that is, leans) ---
  const brass = M(kit, 'metal', BRASS);
  for (const [x, y, w, h, round] of [[4.1, 1.75, 0.5, 0.9, 0], [4.85, 2.0, 0.62, 0.62, 1], [5.6, 1.7, 0.44, 1.0, 0], [6.3, 1.95, 0.5, 0.5, 1], [5.2, 1.2, 0.9, 0.34, 0]]) {
    const geo = round ? new THREE.CircleGeometry(w / 2, 28) : new THREE.PlaneGeometry(w, h);
    const frame = new THREE.Mesh(round ? new THREE.CircleGeometry(w / 2 + 0.03, 28) : new THREE.PlaneGeometry(w + 0.06, h + 0.06), brass);
    frame.rotation.y = Math.PI;
    frame.position.set(x, y, far - 0.012);
    group.add(frame);
    const glass = new THREE.Mesh(geo, mirrorMat(kit));
    glass.rotation.y = Math.PI;
    glass.position.set(x, y, far - 0.016);
    group.add(glass);
  }
  // --- behind the counter: shelves of things already wrapped, and the awards ---
  const boxes = [[], [], [], []];
  for (const y of [1.25, 1.75]) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.03, 0.24), M(kit, 'satin', HEX.walnut));
    shelf.position.set(-5.1, y, hz - 0.13);
    group.add(shelf);
    for (let k = 0; k < 8; k++) {
      const w = 0.1 + ((k * 7 + y * 10) % 5) * 0.022;
      const box = new THREE.Mesh(new THREE.BoxGeometry(w * 2, w * 1.3, 0.16));
      box.position.set(-6.3 + k * 0.345, y + 0.015 + w * 0.65, hz - 0.13);
      boxes[(k + (y > 1.5 ? 1 : 0)) % 4].push(box);
    }
  }
  boxes.forEach((list, k) => group.add(fuse(kit, list, M(kit, 'satin', [PAPER, HEX.ochre, HEX.blush, 0x26242b][k]))));
  const cert = text(kit, 160, 200, (g) => {
    g.fillStyle = '#fbfaf6';
    g.fillRect(0, 0, 160, 200);
    g.strokeStyle = '#1c1b22';
    g.lineWidth = 8;
    g.strokeRect(4, 4, 152, 192);
    g.fillStyle = '#e5352b';
    g.beginPath(); g.arc(80, 78, 36, 0, 6.3); g.fill();
    g.fillStyle = '#1c1b22';
    g.font = `bold 17px ${FONT}`;
    g.fillText('BEST', 80, 140);
    g.fillText('OF OUR OWN', 80, 162);
  });
  for (let k = 0; k < 4; k++) {
    const c = board(kit, 0.24, 0.3, cert);
    c.position.set(-6.75 + k * 0.3, 2.95, far - 0.004);
    group.add(c);
  }
  // --- the rug rack's arms, off the -x wall ---
  for (let k = 0; k < 4; k++) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.025, 0.025), ink);
    arm.position.set(-hx + 0.525, 1.43, -3.4 + 0.36 * k);
    group.add(arm);
  }
  // --- the mat inside the door ---
  const matTex = text(kit, 512, 256, (g) => {
    g.fillStyle = '#26242b';
    g.fillRect(0, 0, 512, 256);
    mark(g, 256, 70, 72, '#d9a13b');
    g.fillStyle = '#f2ede2';
    g.font = `800 34px ${FONT}`;
    g.fillText(NAME, 256, 162);
    g.font = `24px ${FONT}`;
    g.fillText('browse carefully  ·  no pets', 256, 212);
  });
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.85), toonMat(0xffffff, { map: matTex }));
  mat.rotation.set(-Math.PI / 2, 0, Math.PI);
  mat.position.set(0, 0.004, -hz + 0.5);
  mat.receiveShadow = true;
  group.add(mat);
}
