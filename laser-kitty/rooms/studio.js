// The studio (room 12): "Inner Stillness", a boutique yoga studio.
// The sim side is core/src/room_studio.rs; this module is how its bodies
// look. Contract: rooms/README.md.
//
// Recognition: room_studio.rs gives every KIND of piece its own gloss (its
// G_* table), so the key here is round(gloss * 1000). Dims then separate a
// whole piece from its own shards — a shard keeps the parent's gloss but
// not its size, and is drawn as a plain chunk of the same stuff.

// atmosphere: incense in the air, so the window's shafts read
export const look = { haze: 0.02, sun: 1.35 };

let T = null; // kit.THREE, set on first use
const cache = new Map();
const memo = (key, make) => {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
};
const near = (v, t, e = 0.004) => Math.abs(v - t) < e;
const dims = (b, a, h, c, e = 0.004) => near(b.a, a, e) && near(b.b, h, e) && near(b.c, c, e);

// soft goods share one palette, picked by the sim tint (nearest key)
const SOFT = [
  [0.9, 0xd2694f], [0.87, 0xdba63f], [0.84, 0xe08a3c], [0.78, 0x8a4f86], [0.72, 0xd58a9b],
  [0.66, 0x8fae84], [0.62, 0x9d8fc4], [0.6, 0x3d9690], [0.54, 0x4a5a99], [0.48, 0x4b4a57], [0.8, 0xb98a5a],
];
const pick = (tint, table) => {
  let best = table[0];
  for (const e of table) if (Math.abs(e[0] - tint) < Math.abs(best[0] - tint)) best = e;
  return best[1];
};
// canvas colours come straight from the sRGB hex (THREE.Color holds linear
// values, which paint dark and oversaturated on a 2d canvas)
const shade = (hex, k) => `rgb(${[16, 8, 0].map((s) => Math.min(255, Math.round(((hex >> s) & 255) * k))).join(',')})`;
// the hue the sim's liquids pour in (main.js liquidStyle uses the same map)
const hueOf = (tint) => (tint * 2.83) % 1;

// --- geometry: many small shapes, one draw ---------------------------------
// part = [geometry, x, y, z, colour, sx, sy, sz, rx, ry, rz]
function merged(parts) {
  const pos = [], nor = [], col = [];
  const m4 = new T.Matrix4(), q = new T.Quaternion(), e = new T.Euler(), c = new T.Color();
  for (const [g, x = 0, y = 0, z = 0, colour = 0xffffff, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0] of parts) {
    const gg = (g.index ? g.toNonIndexed() : g.clone());
    q.setFromEuler(e.set(rx, ry, rz));
    gg.applyMatrix4(m4.compose(new T.Vector3(x, y, z), q, new T.Vector3(sx, sy, sz)));
    const p = gg.attributes.position, n = gg.attributes.normal;
    c.set(colour);
    for (let i = 0; i < p.count; i++) {
      pos.push(p.getX(i), p.getY(i), p.getZ(i));
      nor.push(n.getX(i), n.getY(i), n.getZ(i));
      col.push(c.r, c.g, c.b);
    }
    gg.dispose();
  }
  const out = new T.BufferGeometry();
  out.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  out.setAttribute('normal', new T.Float32BufferAttribute(nor, 3));
  out.setAttribute('color', new T.Float32BufferAttribute(col, 3));
  return out;
}
const geo = {
  sph: (r, w = 10, h = 8) => memo(`sph${r}|${w}|${h}`, () => new T.SphereGeometry(r, w, h)),
  cyl: (rt, rb, h, seg = 12, open = false) => memo(`cyl${rt}|${rb}|${h}|${seg}|${open}`, () => new T.CylinderGeometry(rt, rb, h, seg, 1, open)),
  box: (w, h, d) => memo(`box${w}|${h}|${d}`, () => new T.BoxGeometry(w, h, d)),
  cone: (r, h, seg = 8) => memo(`cone${r}|${h}|${seg}`, () => new T.ConeGeometry(r, h, seg)),
  tor: (r, t, a = 6, b = 16, arc = Math.PI * 2) => memo(`tor${r}|${t}|${a}|${b}|${arc}`, () => new T.TorusGeometry(r, t, a, b, arc)),
};
// matte, cel-shaded, coloured per vertex: the workhorse
const vcToon = (kit) => memo('vcToon', () => kit.toonMat(0xffffff, { vertexColors: true }));
const vcToon2 = (kit) => memo('vcToon2', () => kit.toonMat(0xffffff, { vertexColors: true, side: T.DoubleSide }));
const toon = (kit, colour, opts) => memo(`toon${colour}|${opts ? JSON.stringify(Object.keys(opts)) : ''}`, () => kit.toonMat(colour, opts));
const metal = (colour, shininess = 90, specular = 0xffe9c0) => memo(`metal${colour}|${shininess}`, () => new T.MeshPhongMaterial({ color: colour, shininess, specular }));
const glass = (colour, opacity = 0.45, shininess = 200) => memo(`glass${colour}|${opacity}`, () => new T.MeshPhongMaterial({ color: colour, shininess, specular: 0xffffff, transparent: true, opacity, side: T.DoubleSide, depthWrite: false }));
const glowMat = (colour) => memo(`glow${colour}`, () => new T.MeshBasicMaterial({ color: colour }));
const group = (...kids) => {
  const g = new T.Group();
  for (const k of kids) if (k) g.add(k);
  return g;
};
const mesh3 = (g, m, x = 0, y = 0, z = 0) => {
  const o = new T.Mesh(g, m);
  o.position.set(x, y, z);
  return o;
};
const lit = (kit, o) => {
  o.layers.enable(kit.GLOW_LAYER);
  return o;
};
// a plain box in the piece's own dims
const slab = (b, m) => new T.Mesh(new T.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), m);
// a broken-off chunk: whatever shape the sim cut, in the family's stuff
// (its own copy of the material: main.js repaints a spawned piece in its
// parent's colour, and must not repaint a cached material every whole
// piece of that kind is sharing)
function chunk(b, shared) {
  const m = shared.clone();
  if (b.shape === 1) return new T.Mesh(new T.IcosahedronGeometry(b.a, 0), m);
  if (b.shape === 2) return new T.Mesh(new T.CapsuleGeometry(b.b, b.a * 2, 3, 8), m);
  return slab(b, m);
}

// --- textures --------------------------------------------------------------
function woodTex(kit, key, base, dark, planks = 0) {
  return memo(`wood${key}`, () => {
    const t = kit.makeCanvas(256, 256, (g) => {
      g.fillStyle = base;
      g.fillRect(0, 0, 256, 256);
      let s = 7 + key.length * 31;
      const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
      g.strokeStyle = dark;
      for (let i = 0; i < 46; i++) {
        g.globalAlpha = 0.1 + rnd() * 0.22;
        g.lineWidth = 0.6 + rnd() * 1.6;
        const y = rnd() * 256;
        g.beginPath();
        g.moveTo(0, y);
        g.bezierCurveTo(80, y + (rnd() - 0.5) * 9, 170, y + (rnd() - 0.5) * 9, 256, y + (rnd() - 0.5) * 5);
        g.stroke();
      }
      g.globalAlpha = 0.5;
      for (let p = 1; p < planks; p++) g.fillRect(0, (p * 256) / planks, 256, 1.5);
      g.globalAlpha = 1;
    });
    t.wrapS = t.wrapT = T.RepeatWrapping;
    return t;
  });
}
const WOODS = {
  273: ['#cfae72', '#8c6c36'], // bamboo
  283: ['#e2cfa6', '#a98d5c'], // birch ply
  293: ['#a5673c', '#5c331a'], // mango
  303: ['#8f6a45', '#4f3520'], // elm
  343: ['#6b452d', '#2f1b10'], // walnut
  353: ['#9a6a3a', '#5a3818'], // teak
  363: ['#c9a777', '#8a6a3e'], // ash stand
  373: ['#cfae72', '#8c6c36'], // bamboo shoe rack
  383: ['#d8bf94', '#9a7c4e'], // ball rail
  403: ['#5d3d28', '#2c1a0e'], // doorway
  413: ['#b98d5c', '#6e4c28'], // wall shelves
  423: ['#3c2f28', '#1c1512'], // lantern frame
  233: ['#6a4a30', '#3a2616'], // fig trunk
};
const woodMat = (kit, k) => memo(`woodMat${k}`, () => kit.toonMat(0xffffff, { map: woodTex(kit, `w${k}`, WOODS[k][0], WOODS[k][1]) }));

function matTexture(kit, colour, wide) {
  return memo(`mat${colour}|${wide}`, () => kit.makeCanvas(wide ? 256 : 128, wide ? 128 : 256, (g) => {
    if (wide) {
      g.translate(256, 0);
      g.rotate(Math.PI / 2);
    }
    const css = (k) => shade(colour, k);
    g.fillStyle = css(1);
    g.fillRect(0, 0, 128, 256);
    // the weave, a border, and the alignment marks a good mat has
    g.strokeStyle = css(0.86);
    g.lineWidth = 1;
    for (let y = 4; y < 256; y += 6) {
      g.beginPath();
      g.moveTo(0, y);
      g.lineTo(128, y);
      g.stroke();
    }
    g.strokeStyle = css(1.22);
    g.lineWidth = 2;
    g.strokeRect(5, 5, 118, 246);
    g.beginPath();
    g.moveTo(64, 30);
    g.lineTo(64, 226);
    g.stroke();
    g.beginPath();
    g.arc(64, 128, 16, 0, Math.PI * 2);
    g.stroke();
    g.fillStyle = css(1.3);
    for (let p = 0; p < 6; p++) {
      g.save();
      g.translate(64, 236);
      g.rotate((p - 2.5) * 0.42);
      g.beginPath();
      g.ellipse(0, -7, 2.4, 7, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  }));
}
const spiralTex = (kit, colour) => memo(`spiral${colour}`, () => kit.makeCanvas(64, 64, (g) => {
  const css = (k) => shade(colour, k);
  g.fillStyle = css(0.8);
  g.fillRect(0, 0, 64, 64);
  g.strokeStyle = css(0.42);
  g.lineWidth = 2.2;
  g.beginPath();
  for (let a = 0; a < Math.PI * 11; a += 0.12) {
    const r = 1.5 + a * 0.82;
    g.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r);
  }
  g.stroke();
}));
const stripeTex = (kit, colour) => memo(`stripe${colour}`, () => kit.makeCanvas(128, 64, (g) => {
  const css = (k) => shade(colour, k);
  g.fillStyle = css(1);
  g.fillRect(0, 0, 128, 64);
  const bands = [[8, 6, '#f1e6cf'], [18, 3, css(0.6)], [30, 10, css(1.3)], [46, 3, '#f1e6cf'], [58, 8, css(0.7)], [74, 4, '#f1e6cf'], [86, 12, css(1.25)], [104, 3, css(0.6)], [112, 8, '#f1e6cf']];
  for (const [x, w, col] of bands) {
    g.fillStyle = col;
    g.fillRect(x, 0, w, 64);
  }
}));
const corkTex = (kit, base, speck) => memo(`cork${base}`, () => kit.makeCanvas(64, 64, (g) => {
  g.fillStyle = base;
  g.fillRect(0, 0, 64, 64);
  let s = 99;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < 150; i++) {
    g.fillStyle = speck[i % speck.length];
    g.globalAlpha = 0.5;
    g.fillRect(rnd() * 64, rnd() * 64, 1 + rnd() * 2.5, 1 + rnd() * 2);
  }
  g.globalAlpha = 1;
}));
const gongTex = (kit) => memo('gong', () => kit.makeCanvas(256, 256, (g) => {
  const grad = g.createRadialGradient(128, 128, 6, 128, 128, 128);
  grad.addColorStop(0, '#5a3a17');
  grad.addColorStop(0.16, '#8c5d22');
  grad.addColorStop(0.2, '#e0ab52');
  grad.addColorStop(0.62, '#c98d3a');
  grad.addColorStop(0.84, '#a66b25');
  grad.addColorStop(0.9, '#4a2c12');
  grad.addColorStop(1, '#2e1a0b');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  let s = 4242;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  // hammer marks, denser toward the rim, and the lathe rings
  for (let i = 0; i < 520; i++) {
    const a = rnd() * Math.PI * 2, r = 30 + Math.sqrt(rnd()) * 82;
    g.fillStyle = rnd() > 0.5 ? 'rgba(255,226,150,0.28)' : 'rgba(70,38,10,0.3)';
    g.beginPath();
    g.ellipse(128 + Math.cos(a) * r, 128 + Math.sin(a) * r, 2 + rnd() * 3.5, 1.5 + rnd() * 2.5, a, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = 'rgba(60,32,8,0.35)';
  for (const r of [44, 70, 96]) {
    g.lineWidth = 1.5;
    g.beginPath();
    g.arc(128, 128, r, 0, Math.PI * 2);
    g.stroke();
  }
}));
const mirrorTex = (kit) => memo('mirror', () => kit.makeCanvas(128, 256, (g) => {
  // not a reflection, the idea of one: the room's warm wall over its floor,
  // a few soft mat-coloured shapes, and two hard glints
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#f3ead8');
  grad.addColorStop(0.55, '#e3d3b6');
  grad.addColorStop(0.6, '#b9966a');
  grad.addColorStop(1, '#9a7a52');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 256);
  for (const [x, y, w, h, col] of [[14, 196, 50, 16, '#3d9690'], [70, 214, 46, 14, '#d2694f'], [40, 176, 36, 10, '#8a4f86']]) {
    g.fillStyle = col;
    g.globalAlpha = 0.5;
    g.fillRect(x, y, w, h);
  }
  g.globalAlpha = 0.55;
  g.fillStyle = '#ffffff';
  for (const x of [30, 52]) {
    g.beginPath();
    g.moveTo(x, 0);
    g.lineTo(x + (x === 30 ? 16 : 6), 0);
    g.lineTo(x - 60 + (x === 30 ? 16 : 6), 256);
    g.lineTo(x - 60, 256);
    g.fill();
  }
  g.globalAlpha = 1;
}));
const rattanTex = (kit) => memo('rattan', () => {
  const t = kit.makeCanvas(64, 64, (g) => {
    g.fillStyle = '#c59a5c';
    g.fillRect(0, 0, 64, 64);
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        g.fillStyle = (x + y) % 2 ? '#a87b42' : '#dab574';
        g.fillRect(x * 8 + 1, y * 8 + 1, 6, 6);
      }
    }
  });
  t.wrapS = t.wrapT = T.RepeatWrapping;
  t.repeat.set(6, 3);
  return t;
});
const windowTex = (kit) => memo('window', () => kit.makeCanvas(256, 256, (g) => {
  const sky = g.createLinearGradient(0, 0, 0, 256);
  sky.addColorStop(0, '#ffe9b8');
  sky.addColorStop(0.5, '#fff6dc');
  sky.addColorStop(1, '#ffdca0');
  g.fillStyle = sky;
  g.fillRect(0, 0, 256, 256);
  const sun = g.createRadialGradient(172, 92, 4, 172, 92, 120);
  sun.addColorStop(0, 'rgba(255,255,255,1)');
  sun.addColorStop(0.2, 'rgba(255,250,220,0.9)');
  sun.addColorStop(1, 'rgba(255,240,190,0)');
  g.fillStyle = sun;
  g.fillRect(0, 0, 256, 256);
  // garden beyond: hills, a bamboo stand
  g.fillStyle = 'rgba(150,190,130,0.75)';
  g.beginPath();
  g.moveTo(0, 256);
  g.lineTo(0, 196);
  g.bezierCurveTo(70, 160, 130, 214, 256, 176);
  g.lineTo(256, 256);
  g.fill();
  g.strokeStyle = 'rgba(96,148,92,0.8)';
  g.lineWidth = 5;
  for (const x of [26, 44, 58]) {
    g.beginPath();
    g.moveTo(x, 256);
    g.lineTo(x + 8, 70);
    g.stroke();
  }
}));
function signTex(kit, key, w, h, draw) {
  return memo(`sign${key}`, () => kit.makeCanvas(w, h, draw));
}
const tabletTex = (kit) => memo('tablet', () => kit.makeCanvas(128, 96, (g) => {
  g.fillStyle = '#f6f1e6';
  g.fillRect(0, 0, 128, 96);
  g.fillStyle = '#3d9690';
  g.fillRect(0, 0, 128, 22);
  g.fillStyle = '#ffffff';
  g.font = 'bold 13px Georgia, serif';
  g.textAlign = 'center';
  g.fillText('WELCOME', 64, 16);
  g.fillStyle = '#5a5046';
  g.font = '10px Georgia, serif';
  g.fillText('sign in to breathe', 64, 38);
  g.fillStyle = '#d2694f';
  g.fillRect(34, 50, 60, 18);
  g.fillStyle = '#ffffff';
  g.font = 'bold 10px Georgia, serif';
  g.fillText('CHECK IN', 64, 63);
  g.fillStyle = '#9a8f80';
  g.font = '8px Georgia, serif';
  g.fillText('drop-in $38', 64, 84);
}));
const clipTex = (kit) => memo('clip', () => kit.makeCanvas(96, 128, (g) => {
  g.fillStyle = '#7a5a3a';
  g.fillRect(0, 0, 96, 128);
  g.fillStyle = '#fbf8ef';
  g.fillRect(8, 14, 80, 106);
  g.fillStyle = '#9aa0a8';
  g.fillRect(30, 4, 36, 14);
  g.strokeStyle = '#8a8f9a';
  g.lineWidth = 1;
  for (let y = 34; y < 116; y += 10) {
    g.beginPath();
    g.moveTo(14, y);
    g.lineTo(82, y);
    g.stroke();
  }
  g.strokeStyle = '#2a3a7a';
  g.lineWidth = 1.6;
  for (const [y, w] of [[31, 40], [41, 52], [51, 30], [61, 46]]) {
    g.beginPath();
    g.moveTo(16, y);
    g.bezierCurveTo(16 + w * 0.3, y - 5, 16 + w * 0.6, y + 4, 16 + w, y - 2);
    g.stroke();
  }
}));

// --- the pieces ------------------------------------------------------------
function yogaMat(kit, b) {
  if (!near(b.b, 0.006, 0.002)) return chunk(b, toon(kit, pick(b.tint, SOFT)));
  const colour = pick(b.tint, SOFT);
  return slab(b, memo(`matM${colour}|${b.a > b.c}`, () => kit.toonMat(0xffffff, { map: matTexture(kit, colour, b.a > b.c) })));
}

function rolledMat(kit, b) {
  const colour = pick(b.tint, SOFT);
  if (b.shape !== 2) return chunk(b, toon(kit, colour));
  const r = b.b, len = b.a * 2 + r * 1.3;
  const dark = new T.Color(colour).multiplyScalar(0.55).getHex();
  const body = new T.Mesh(memo(`rollG${colour}`, () => merged([
    [geo.cyl(r, r, len, 16, true), 0, 0, 0, colour],
    [geo.cyl(r * 1.03, r * 1.03, 0.018, 16, true), 0, len * 0.27, 0, dark],
    [geo.cyl(r * 1.03, r * 1.03, 0.018, 16, true), 0, -len * 0.27, 0, dark],
  ])), vcToon(kit));
  // the spiral ends are what says "rolled mat"
  const ends = new T.Mesh(memo(`rollE${r}|${len}`, () => merged([
    [new T.CircleGeometry(r, 16), 0, len / 2, 0, 0xffffff, 1, 1, 1, -Math.PI / 2],
    [new T.CircleGeometry(r, 16), 0, -len / 2, 0, 0xffffff, 1, 1, 1, Math.PI / 2],
  ])), memo(`rollEM${colour}`, () => kit.toonMat(0xffffff, { map: spiralTex(kit, colour) })));
  return group(body, ends);
}

function zafu(kit, b) {
  const colour = pick(b.tint, SOFT);
  if (!dims(b, 0.13, 0.055, 0.13)) return chunk(b, toon(kit, colour));
  const light = new T.Color(colour).lerp(new T.Color(0xffffff), 0.25).getHex();
  const dark = new T.Color(colour).multiplyScalar(0.62).getHex();
  // a pleated puck: plump top and bottom, a gathered band between
  const parts = [
    [geo.sph(0.13, 14, 10), 0, 0.012, 0, colour, 1, 0.34, 1],
    [geo.sph(0.13, 14, 10), 0, -0.012, 0, colour, 1, 0.34, 1],
    [geo.cyl(0.128, 0.128, 0.046, 16, true), 0, 0, 0, dark],
    [geo.sph(0.016, 6, 5), 0, 0.054, 0, light],
  ];
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    parts.push([geo.box(0.006, 0.05, 0.004), Math.cos(a) * 0.13, 0, Math.sin(a) * 0.13, light, 1, 1, 1, 0, -a, 0]);
  }
  return new T.Mesh(memo(`zafu${colour}`, () => merged(parts)), vcToon(kit));
}

function bolster(kit, b) {
  const colour = pick(b.tint, SOFT);
  const long = Math.max(b.a, b.c), short = Math.min(b.a, b.c);
  if (!near(long, 0.24) || !near(short, 0.075) || !near(b.b, 0.07)) return chunk(b, toon(kit, colour));
  const cream = 0xf1e6cf;
  const m = new T.Mesh(memo(`bolster${colour}`, () => merged([
    [geo.cyl(0.071, 0.071, 0.42, 14, true), 0, 0, 0, colour, 1, 1, 1, Math.PI / 2],
    [geo.sph(0.071, 14, 8), 0, 0, 0.21, colour, 1, 1, 0.32],
    [geo.sph(0.071, 14, 8), 0, 0, -0.21, colour, 1, 1, 0.32],
    [geo.cyl(0.073, 0.073, 0.012, 14, true), 0, 0, 0.205, cream, 1, 1, 1, Math.PI / 2],
    [geo.cyl(0.073, 0.073, 0.012, 14, true), 0, 0, -0.205, cream, 1, 1, 1, Math.PI / 2],
    [geo.cyl(0.0725, 0.0725, 0.05, 14, true), 0, 0, 0, cream, 1, 1, 1, Math.PI / 2],
  ])), vcToon(kit));
  if (b.a > b.c) m.rotation.y = Math.PI / 2;
  return group(m);
}

function block(kit, b) {
  const cork = b.tint > 0.7;
  const m = memo(`block${cork}`, () => kit.toonMat(0xffffff, {
    map: cork ? corkTex(kit, '#b98a5a', ['#8a6238', '#d8b07a', '#6e4a28']) : corkTex(kit, '#9d8fc4', ['#b6aad6', '#8478ac']),
  }));
  return slab(b, m);
}

function blanket(kit, b) {
  const colour = pick(b.tint, SOFT);
  if (!dims(b, 0.16, 0.022, 0.12)) return chunk(b, toon(kit, colour));
  const m = memo(`blanketM${colour}`, () => kit.toonMat(0xffffff, { map: stripeTex(kit, colour) }));
  // two folds and the fringe along one edge
  const g = group(mesh3(geo.box(0.32, 0.02, 0.24), m, 0, -0.011, 0), mesh3(geo.box(0.315, 0.02, 0.235), m, 0.002, 0.011, 0.002));
  const fr = [];
  for (let k = 0; k < 12; k++) fr.push([geo.box(0.004, 0.004, 0.02), -0.15 + k * 0.027, -0.016, -0.128, 0xf1e6cf]);
  g.add(new T.Mesh(memo('fringe', () => merged(fr)), vcToon(kit)));
  return g;
}

const eyePillow = (kit, b) => (dims(b, 0.045, 0.012, 0.022)
  ? mesh3(memo('eyeG', () => merged([[geo.sph(0.045, 10, 6), 0, 0, 0, 0x9d8fc4, 1, 0.27, 0.5], [geo.box(0.03, 0.002, 0.008), 0, 0.0115, 0, 0xcfc6e6]])), vcToon(kit))
  : chunk(b, toon(kit, 0x9d8fc4)));

const bowlRing = (kit, b) => (dims(b, 0.085, 0.018, 0.085)
  ? mesh3(memo('ringG', () => new T.TorusGeometry(0.058, 0.02, 8, 18).rotateX(Math.PI / 2)), toon(kit, 0xb5493a))
  : chunk(b, toon(kit, 0xb5493a)));

// paper lanterns: the hanging globe and the floor column share a glow
function paperGlow(kit, m, strength, radius, light) {
  m.userData.emitter = { color: new T.Color(0xffd9a0), strength, radius };
  kit.pendingLights.push({ node: m, color: 0xffd9a0, intensity: light, distance: 4 });
  m.userData.noShadow = true;
  return m;
}
function lantern(kit, b) {
  const paper = glowMat(0xfff0cf);
  if (b.shape === 1 && near(b.a, 0.14)) {
    // (the paper is bright but stays off the glow layer: a whole lantern
    // in the glow pass blooms into a white blob, seen with haze on)
    const g = group(mesh3(geo.sph(0.14, 16, 12), paper));
    g.children[0].scale.y = 0.92;
    const ribs = [];
    for (let k = -3; k <= 3; k++) {
      const y = k * 0.034, r = Math.sqrt(Math.max(0.0004, 0.14 * 0.14 - (y / 0.92) * (y / 0.92)));
      ribs.push([new T.TorusGeometry(r + 0.001, 0.0022, 4, 20), 0, y, 0, 0x9a7a52, 1, 1, 1, Math.PI / 2]);
    }
    ribs.push([geo.cyl(0.03, 0.03, 0.012, 10), 0, 0.128, 0, 0x4a3828], [geo.cyl(0.03, 0.03, 0.012, 10), 0, -0.128, 0, 0x4a3828]);
    g.add(new T.Mesh(memo('lanternRibs', () => merged(ribs)), vcToon(kit)));
    return paperGlow(kit, g, 1.5, 2.6, 1.9);
  }
  if (b.cls === 1 && dims(b, 0.085, 0.26, 0.085)) {
    const g = group(mesh3(geo.box(0.16, 0.5, 0.16), paper));
    const ribs = [];
    for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) ribs.push([geo.box(0.012, 0.52, 0.012), x * 0.082, 0, z * 0.082, 0x3c2f28]);
    for (let k = -2; k <= 2; k++) {
      ribs.push([geo.box(0.17, 0.006, 0.006), 0, k * 0.1, -0.082, 0x3c2f28], [geo.box(0.17, 0.006, 0.006), 0, k * 0.1, 0.082, 0x3c2f28]);
      ribs.push([geo.box(0.006, 0.006, 0.17), -0.082, k * 0.1, 0, 0x3c2f28], [geo.box(0.006, 0.006, 0.17), 0.082, k * 0.1, 0, 0x3c2f28]);
    }
    g.add(new T.Mesh(memo('floorLanternRibs', () => merged(ribs)), vcToon(kit)));
    return paperGlow(kit, g, 1.8, 3, 2.2);
  }
  return chunk(b, toon(kit, 0xf3e6c8));
}

function cord(kit, b) {
  const m = mesh3(new T.CylinderGeometry(0.003, 0.003, b.b * 2, 5), toon(kit, 0x5a4a3a));
  m.userData.noShadow = true;
  return group(m);
}

// bead strands: each sim link is a run of beads on a thread, one draw
function beads(kit, b) {
  const g = new T.Group();
  g.userData.noShadow = true;
  if (!near(b.b, 0.085)) {
    g.add(chunk(b, b.gloss > 0.5 ? glass(seaGlass(b.tint), 0.7) : toon(kit, 0xb07a44)));
    return g;
  }
  if (b.gloss > 0.5) {
    // sea glass: three fat tumbled beads between wooden spacers
    const colour = seaGlass(b.tint);
    g.add(new T.Mesh(memo('seaBeadG', () => merged([
      [geo.sph(0.024, 9, 7), 0, 0.055, 0, 0xffffff, 1, 1.1, 1],
      [geo.sph(0.027, 9, 7), 0, 0, 0, 0xffffff, 1, 0.95, 1],
      [geo.sph(0.022, 9, 7), 0, -0.056, 0, 0xffffff, 1, 1.15, 1],
    ])), memo(`seaBeadM${colour}`, () => new T.MeshPhongMaterial({ color: colour, shininess: 160, specular: 0xffffff, transparent: true, opacity: 0.82 }))));
    g.add(new T.Mesh(memo('seaSpacerG', () => merged([
      [geo.sph(0.009, 6, 5), 0, 0.028, 0, 0x7a5230],
      [geo.sph(0.009, 6, 5), 0, -0.028, 0, 0x7a5230],
      [geo.cyl(0.002, 0.002, 0.182, 4), 0, 0, 0, 0x4a3828],
    ])), vcToon(kit)));
    return g;
  }
  // sandalwood: five beads, round and barrel, in the strand's own shade
  const base = new T.Color(b.tint > 0.85 ? 0xd2a05e : b.tint > 0.75 ? 0xb07a44 : 0x7c4f2a);
  const k = Math.round(b.tint * 100);
  g.add(new T.Mesh(memo(`woodBeadG${k}`, () => {
    const parts = [[geo.cyl(0.002, 0.002, 0.182, 4), 0, 0, 0, 0x4a3828]];
    for (let i = 0; i < 5; i++) {
      const y = 0.068 - i * 0.034;
      const c = base.clone().multiplyScalar(i % 2 ? 0.78 : 1.06).getHex();
      if ((i + k) % 3 === 0) parts.push([geo.cyl(0.011, 0.011, 0.026, 7), 0, y, 0, c]);
      else parts.push([geo.sph(0.0145, 7, 6), 0, y, 0, c]);
    }
    return merged(parts);
  }), vcToon(kit)));
  return g;
}
const seaGlass = (tint) => pick(tint, [[0.6, 0x4fb8b0], [0.88, 0x9fe0c8], [0.5, 0x3f8fc0], [0.7, 0xb8dfa0]]);

function gong(kit, b) {
  const bronze = memo('gongM', () => new T.MeshPhongMaterial({ map: gongTex(kit), shininess: 70, specular: 0xffd890 }));
  if (!dims(b, 0.34, 0.34, 0.012)) return chunk(b, metal(0xc98d3a, 70));
  const r = b.a;
  const g = new T.Group();
  // both faces carry the hammered texture (two discs, uvs kept)
  for (const s of [-1, 1]) {
    const face = mesh3(memo('gongFace', () => new T.CircleGeometry(r, 40)), bronze, 0, 0, s * 0.0125);
    if (s < 0) face.rotation.y = Math.PI;
    g.add(face);
  }
  g.add(new T.Mesh(memo('gongRim', () => merged([
    [geo.cyl(r, r, 0.03, 40, true), 0, 0, 0, 0x4a2c12, 1, 1, 1, Math.PI / 2],
    [geo.sph(0.07, 14, 8), 0, 0, -0.012, 0x6a4418, 1, 1, 0.3],
    // the two chains up to the bar: the sim hangs the disc from these points
    ...[-0.22, 0.22].flatMap((x) => [0, 1, 2, 3].map((k) => [geo.tor(0.012, 0.0035, 5, 8), x, r - 0.012 + 0.014 + k * 0.026, 0, 0xb9a070, 1, 1, 1, 0, k % 2 ? Math.PI / 2 : 0, 0])),
  ])), memo('gongRimM', () => new T.MeshPhongMaterial({ vertexColors: true, shininess: 60, specular: 0xffd890 }))));
  return g;
}

function mallet(kit, b) {
  if (!dims(b, 0.018, 0.1, 0.018)) return chunk(b, toon(kit, 0x7a5230));
  return mesh3(memo('malletG', () => merged([
    [geo.cyl(0.006, 0.007, 0.15, 6), 0, 0.03, 0, 0x7a5230],
    [geo.sph(0.034, 10, 8), 0, -0.066, 0, 0xf1e9d8, 1, 1.05, 1],
    [geo.cyl(0.0015, 0.0015, 0.03, 4), 0, 0.115, 0, 0x4a3828],
  ])), vcToon(kit));
}

const bowlProfile = (r, h, lip) => {
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    pts.push(new T.Vector2(r * (0.35 + 0.65 * Math.sin(t * Math.PI * 0.5)) * (1 + lip * t * t), -h + 2 * h * t * t * 0.9 + 2 * h * 0.1 * t));
  }
  return pts;
};
function singingBowl(kit, b) {
  if (!dims(b, 0.075, 0.04, 0.075)) return chunk(b, metal(0xc9a24a));
  const brass = memo('bowlM', () => new T.MeshPhongMaterial({ color: 0xc9a24a, shininess: 110, specular: 0xfff0c0, side: T.DoubleSide }));
  const g = group(mesh3(memo('bowlG', () => new T.LatheGeometry(bowlProfile(0.075, 0.04, 0.02), 20)), brass));
  g.add(mesh3(memo('bowlBase', () => new T.CircleGeometry(0.03, 14).rotateX(-Math.PI / 2)), metal(0x6a5220, 40), 0, -0.039, 0));
  return g;
}
const striker = (kit, b) => (dims(b, 0.07, 0.008, 0.008)
  ? mesh3(memo('strikerG', () => merged([
    [geo.cyl(0.007, 0.007, 0.14, 7), 0, 0, 0, 0x8a5a30, 1, 1, 1, 0, 0, Math.PI / 2],
    [geo.cyl(0.0095, 0.0095, 0.05, 8), 0.04, 0, 0, 0x7a2f2a, 1, 1, 1, 0, 0, Math.PI / 2],
  ])), vcToon(kit))
  : chunk(b, toon(kit, 0x8a5a30)));

function quartzBowl(kit, b) {
  const frost = memo('frost', () => new T.MeshPhongMaterial({ color: 0xffffff, emissive: 0x8a9098, shininess: 60, specular: 0xffffff, transparent: true, opacity: 0.9, side: T.DoubleSide }));
  if (!dims(b, 0.11, 0.095, 0.11)) return chunk(b, frost);
  const g = group(
    mesh3(geo.cyl(0.11, 0.092, 0.18, 24, true), frost, 0, 0.005, 0),
    mesh3(memo('qbLip', () => new T.TorusGeometry(0.11, 0.004, 5, 24).rotateX(Math.PI / 2)), frost, 0, 0.095, 0),
    mesh3(memo('qbBase', () => new T.CircleGeometry(0.1, 24).rotateX(-Math.PI / 2)), frost, 0, -0.083, 0),
    mesh3(memo('qbRing', () => new T.TorusGeometry(0.1, 0.012, 6, 20).rotateX(Math.PI / 2)), toon(kit, 0x2f2f36), 0, -0.085, 0),
  );
  g.userData.noShadow = true;
  return g;
}

// crystals: the tint names the mineral
const MINERALS = [
  [0.62, { c: 0x8a4fc9, name: 'amethyst' }], [0.96, { c: 0xeef4fa, name: 'quartz' }], [0.9, { c: 0xf2a7b8, name: 'rose' }],
  [0.82, { c: 0xe9a53a, name: 'citrine' }], [0.99, { c: 0xfaf8f0, name: 'selenite' }], [0.55, { c: 0x4a8fc0, name: 'geode' }],
  [0.76, { c: 0xc9b25a, name: 'pyrite' }],
];
const facet = (colour, opacity = 1, shininess = 140) => memo(`facet${colour}|${opacity}`, () => new T.MeshPhongMaterial({
  color: colour, shininess, specular: 0xffffff, flatShading: true, transparent: opacity < 1, opacity,
}));
const facetVC = () => memo('facetVC', () => new T.MeshPhongMaterial({ vertexColors: true, shininess: 120, specular: 0xffffff, flatShading: true }));
function point(r, h, colour, x = 0, y = 0, z = 0, rx = 0, rz = 0) {
  // a six-sided prism with its termination, base at (x, y, z)
  return [
    [geo.cyl(r, r * 1.05, h * 0.7, 6), x - Math.sin(rz) * h * 0.35, y + Math.cos(rz) * Math.cos(rx) * h * 0.35, z + Math.cos(rz) * Math.sin(rx) * h * 0.35, colour, 1, 1, 1, rx, 0, rz],
    [geo.cone(r, h * 0.3, 6), x - Math.sin(rz) * h * 0.85, y + Math.cos(rz) * Math.cos(rx) * h * 0.85, z + Math.cos(rz) * Math.sin(rx) * h * 0.85, colour, 1, 1, 1, rx, 0, rz],
  ];
}
function crystal(kit, b) {
  const mn = pick(b.tint, MINERALS);
  if (b.shape === 1) {
    if (near(b.a, 0.04)) return mesh3(geo.sph(0.04, 16, 12), memo('roseSphere', () => new T.MeshPhongMaterial({ color: 0xf2a7b8, shininess: 180, specular: 0xffffff })));
    // tumbled stones and round shards
    const s = mesh3(memo(`tumble${b.a}`, () => new T.IcosahedronGeometry(b.a, 1)), facet(mn.c, 1, 90).clone());
    s.scale.set(1, 0.72, 0.9);
    return group(s);
  }
  if (mn.name === 'amethyst' && dims(b, 0.07, 0.11, 0.055)) {
    // the cathedral: a rough shell split open toward the room, lined with points
    const shell = mesh3(memo('cathShell', () => {
      // phi 0..pi is the +z half: the cut face looks toward -z, the room
      const g = new T.SphereGeometry(1, 12, 10, 0, Math.PI);
      g.scale(0.07, 0.11, 0.055);
      return kit.roughen(g, 0.06);
    }), memo('cathShellM', () => new T.MeshPhongMaterial({ color: 0x5a4f4a, shininess: 10, flatShading: true, side: T.DoubleSide })));
    const parts = [];
    let s = 31;
    const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
    for (let i = 0; i < 26; i++) {
      const x = (rnd() - 0.5) * 0.1, y = (rnd() - 0.5) * 0.17;
      if ((x / 0.062) ** 2 + (y / 0.1) ** 2 > 1) continue;
      const h = 0.016 + rnd() * 0.022;
      const col = new T.Color(0x8a4fc9).lerp(new T.Color(rnd() > 0.5 ? 0xd9b8ff : 0x4a1f8a), rnd() * 0.6).getHex();
      const z0 = 0.004 + 0.03 * (1 - (x / 0.062) ** 2 - (y / 0.1) ** 2);
      parts.push(...point(0.007 + rnd() * 0.005, h, col, x, y, z0, -Math.PI / 2 + (rnd() - 0.5) * 0.5, (rnd() - 0.5) * 0.5));
    }
    const g = group(mesh3(memo('cathPoints', () => merged(parts)), facet(0x8a4fc9, 1, 160)), shell);
    g.children[0].material = facetVC();
    // first material found carries the mineral's colour for the shards
    return group(mesh3(geo.box(0.001, 0.001, 0.001), facet(0x8a4fc9)), g);
  }
  if (mn.name === 'quartz' && dims(b, 0.028, 0.065, 0.028)) {
    const g = group(mesh3(memo('quartzPt', () => merged([...point(0.024, 0.13, 0xffffff, 0, -0.065, 0), ...point(0.011, 0.07, 0xffffff, 0.016, -0.065, 0.006, 0.1, -0.35)])), facet(0xeef4fa, 0.78, 220)));
    g.userData.noShadow = true;
    return g;
  }
  if (mn.name === 'citrine' && dims(b, 0.05, 0.035, 0.04)) {
    const parts = [[new T.IcosahedronGeometry(0.036, 0), 0, -0.02, 0, 0x8a7a66, 1.25, 0.42, 1]];
    for (const [x, z, h, rz, rx] of [[0, 0, 0.055, 0, 0], [-0.022, 0.008, 0.042, 0.45, 0.1], [0.024, -0.006, 0.046, -0.4, -0.15], [0.006, 0.02, 0.034, 0.1, 0.5], [-0.008, -0.02, 0.038, 0.15, -0.45]]) {
      parts.push(...point(0.0095, h, 0xe9a53a, x, -0.018, z, rx, rz));
    }
    return group(mesh3(geo.box(0.001, 0.001, 0.001), facet(0xe9a53a)), mesh3(memo('citrineG', () => merged(parts)), facetVC()));
  }
  if (mn.name === 'selenite' && dims(b, 0.018, 0.075, 0.018)) {
    return mesh3(memo('seleniteG', () => merged([
      [geo.cyl(0.011, 0.017, 0.125, 5), 0, -0.012, 0, 0xfaf8f0],
      [geo.cone(0.011, 0.026, 5), 0, 0.063, 0, 0xfaf8f0],
    ])), facet(0xfaf8f0, 1, 60));
  }
  if (mn.name === 'geode' && dims(b, 0.05, 0.04, 0.045)) {
    // a rock cut in half, the banded face tipped up toward the room
    const half = mesh3(memo('geodeRock', () => kit.roughen(new T.SphereGeometry(0.046, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI), 0.07)), memo('geodeRockM', () => new T.MeshPhongMaterial({ color: 0x6a5f58, shininess: 8, flatShading: true })));
    const faceM = memo('geodeFaceM', () => kit.toonMat(0xffffff, {
      map: kit.makeCanvas(64, 64, (g) => {
        const rings = ['#5a4f4a', '#dfe8f0', '#4a8fc0', '#9fd0e8', '#2f6aa0', '#e8f2f8', '#6ab0d8', '#1f3f6a'];
        rings.forEach((c, i) => {
          g.fillStyle = c;
          g.beginPath();
          g.ellipse(32, 32, 32 - i * 3.8, 32 - i * 3.6, 0, 0, Math.PI * 2);
          g.fill();
        });
      }),
    }));
    const face = mesh3(memo('geodeFace', () => new T.CircleGeometry(0.046, 18).rotateX(-Math.PI / 2)), faceM, 0, 0.001, 0);
    const g = group(face, half);
    g.rotation.x = -0.75; // sim body stays level; only the look leans
    g.position.y = 0.004;
    return group(mesh3(geo.box(0.001, 0.001, 0.001), facet(0x4a8fc0)), g);
  }
  if (mn.name === 'pyrite' && dims(b, 0.03, 0.03, 0.03)) {
    return mesh3(memo('pyriteG', () => merged([
      [geo.box(0.044, 0.044, 0.044), -0.006, -0.008, 0, 0xffffff],
      [geo.box(0.026, 0.026, 0.026), 0.016, 0.004, 0.012, 0xffffff, 1, 1, 1, 0.3, 0.5, 0.2],
      [geo.box(0.018, 0.018, 0.018), -0.004, 0.02, -0.01, 0xffffff, 1, 1, 1, 0.2, 0.3, 0.6],
    ])), memo('pyriteM', () => new T.MeshPhongMaterial({ color: 0xc9b25a, shininess: 140, specular: 0xfff6c8, flatShading: true })));
  }
  // a shard of any of them: a faceted chunk squeezed into the sim's piece
  const s = mesh3(memo('shardG', () => new T.OctahedronGeometry(1, 0)), facet(mn.c, mn.name === 'quartz' ? 0.8 : 1).clone());
  s.scale.set(b.a * 1.2, b.b * 1.2, b.c * 1.2);
  return group(s);
}

function lavaLamp(kit, b) {
  const col = new T.Color().setHSL(hueOf(b.tint), 0.9, 0.56);
  const hex = col.getHex();
  if (!dims(b, 0.05, 0.15, 0.05)) return chunk(b, glass(hex, 0.6));
  const g = new T.Group();
  g.scale.setScalar(1.3); // modelled at 23 cm, sold at 30
  // the liquid first: shards and the spill take their colour from it
  const vessel = mesh3(memo('lavaVessel', () => new T.LatheGeometry([
    new T.Vector2(0.03, -0.045), new T.Vector2(0.037, 0.0), new T.Vector2(0.03, 0.05), new T.Vector2(0.02, 0.085), new T.Vector2(0.016, 0.095),
  ], 14)), memo(`lavaLiq${hex}`, () => new T.MeshBasicMaterial({ color: col.clone().multiplyScalar(0.8), transparent: true, opacity: 0.8, depthWrite: false })));
  g.add(lit(kit, vessel));
  const waxM = memo(`lavaWax${hex}`, () => new T.MeshBasicMaterial({ color: col.clone().lerp(new T.Color(0xfff6d0), 0.7) }));
  for (const [y, r, ph] of [[-0.02, 0.018, 0], [0.025, 0.013, 2.1], [0.06, 0.009, 4.0]]) {
    const blob = lit(kit, mesh3(geo.sph(1, 10, 8), waxM, 0, y, 0));
    blob.scale.setScalar(r);
    blob.userData.lava = { r, ph: ph + b.h * 6 };
    // the wax drifts: cosmetic, clocked off the frame, nothing the sim knows
    blob.onBeforeRender = () => {
      const t = performance.now() * 0.00035 + blob.userData.lava.ph;
      blob.position.y = 0.02 + Math.sin(t) * 0.05;
      const s = blob.userData.lava.r * (1 + 0.25 * Math.sin(t * 1.7));
      blob.scale.set(s, s * (1.15 + 0.25 * Math.cos(t)), s);
    };
    g.add(blob);
  }
  g.add(mesh3(memo('lavaMetal', () => merged([
    [geo.cyl(0.03, 0.04, 0.07, 14), 0, -0.08, 0, 0xffffff],
    [geo.cyl(0.02, 0.03, 0.012, 14), 0, -0.04, 0, 0xffffff],
    [geo.cone(0.018, 0.022, 14), 0, 0.104, 0, 0xffffff],
  ])), metal(0x8a8f9a, 120, 0xffffff)));
  // no point light of its own: 11 cm over a shelf, inverse-square falloff
  // burns the shelf white (seen). The emitter feeds the light volume and
  // the haze; the halo is the lamp's own and goes dark with it.
  g.userData.emitter = { color: col.clone(), strength: 1.3, radius: 1.8 };
  const halo = kit.glowSprite(hex, 0.34);
  halo.material.opacity = 0.55;
  g.add(halo);
  g.userData.noShadow = true;
  return g;
}

function saltLamp(kit, b) {
  if (!dims(b, 0.055, 0.07, 0.055)) return chunk(b, facet(0xf08a4a, 0.9));
  const rock = lit(kit, mesh3(memo('saltRock', () => {
    const g = new T.IcosahedronGeometry(0.05, 1);
    g.scale(1, 1.25, 1);
    return kit.roughen(g, 0.12);
  }), memo('saltM', () => new T.MeshBasicMaterial({ color: 0xff9a52 })), 0, 0.008, 0));
  const g = group(rock, mesh3(geo.cyl(0.045, 0.05, 0.018, 12), toon(kit, 0x5a3a22), 0, -0.061, 0));
  g.userData.emitter = { color: new T.Color(0xff8a40), strength: 1.0, radius: 1.6 };
  const halo = kit.glowSprite(0xff8a40, 0.3);
  halo.material.opacity = 0.5;
  g.add(halo);
  g.userData.noShadow = true;
  return g;
}

function candle(kit, b) {
  if (!dims(b, 0.022, 0.04, 0.022)) return chunk(b, toon(kit, 0xf0e2b8));
  const g = group(
    mesh3(memo('candleG', () => merged([
      [geo.cyl(0.021, 0.022, 0.074, 12), 0, -0.003, 0, 0xf0e2b8],
      [geo.cyl(0.0015, 0.0015, 0.01, 4), 0, 0.039, 0, 0x2a2420],
    ])), vcToon(kit)),
    lit(kit, mesh3(memo('flameG', () => new T.SphereGeometry(0.007, 6, 6).scale(1, 1.9, 1)), glowMat(0xffc860), 0, 0.054, 0)),
  );
  const halo = kit.glowSprite(0xffb050, 0.09);
  halo.position.y = 0.055;
  g.add(halo);
  g.userData.emitter = { color: new T.Color(0xffb050), strength: 0.35, radius: 0.9 };
  return g;
}

const figPot = (kit, b) => (dims(b, 0.11, 0.11, 0.11)
  ? mesh3(memo('figPotG', () => merged([
    [geo.cyl(0.11, 0.085, 0.2, 16), 0, -0.01, 0, 0xe9e2d2],
    [geo.cyl(0.115, 0.115, 0.022, 16), 0, 0.099, 0, 0xf4eee0],
    [geo.cyl(0.1, 0.1, 0.004, 16), 0, 0.109, 0, 0x4a3524],
    [geo.cyl(0.111, 0.1, 0.03, 16, true), 0, -0.02, 0, 0x3d9690],
  ])), vcToon(kit))
  : chunk(b, toon(kit, 0xe9e2d2)));

function figLeaves(kit, b) {
  if (!dims(b, 0.14, 0.16, 0.14)) return chunk(b, toon(kit, 0x3f7a3a));
  // the fiddle leaves: big paddles, each on its own lean
  const parts = [[geo.cyl(0.012, 0.014, 0.2, 6), 0, -0.07, 0, 0x6a4a30]];
  let s = 77;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < 13; i++) {
    const a = i * 2.4, y = -0.12 + i * 0.022, lean = 0.5 + rnd() * 0.5, len = 0.1 + rnd() * 0.035;
    const col = new T.Color(0x3f7a3a).lerp(new T.Color(i % 3 ? 0x5a9a48 : 0x2c5a2e), rnd()).getHex();
    parts.push([geo.sph(1, 8, 6), Math.cos(a) * len * 0.75, y + 0.03, Math.sin(a) * len * 0.75, col, len, 0.012, len * 0.62, 0, -a, lean * 0.5]);
  }
  return mesh3(memo('figLeavesG', () => merged(parts)), vcToon2(kit));
}

function diffuser(kit, b) {
  if (!dims(b, 0.036, 0.05, 0.036)) return chunk(b, toon(kit, 0xf4f1ea));
  const g = group(
    mesh3(memo('diffG', () => merged([
      [geo.cyl(0.034, 0.036, 0.026, 14), 0, -0.037, 0, 0x7a5236],
      [geo.sph(0.034, 14, 10), 0, -0.012, 0, 0xf4f1ea, 1, 1.5, 1],
    ])), vcToon(kit)),
    lit(kit, mesh3(geo.cyl(0.0345, 0.0345, 0.004, 14), glowMat(0x9fe8ff), 0, -0.024, 0)),
  );
  const mist = kit.glowSprite(0xdfeff5, 0.16);
  mist.material.opacity = 0.3;
  mist.position.y = 0.11;
  g.add(mist);
  return g;
}

const teaTin = (kit, b) => (dims(b, 0.03, 0.04, 0.03)
  ? mesh3(memo(`tinG${Math.round(b.tint * 10)}`, () => merged([
    [geo.cyl(0.029, 0.029, 0.07, 14), 0, -0.004, 0, pick(b.tint, [[0.5, 0x2f5a4a], [0.9, 0xb5493a], [0.7, 0x2a2a30]])],
    [geo.cyl(0.03, 0.03, 0.012, 14), 0, 0.034, 0, 0xc9b25a],
    [geo.cyl(0.0295, 0.0295, 0.026, 14, true), 0, -0.006, 0, 0xf1e6cf],
  ])), vcToon(kit))
  : chunk(b, toon(kit, 0x2f5a4a)));

function teapot(kit, b) {
  const iron = memo('ironM', () => new T.MeshPhongMaterial({ vertexColors: true, shininess: 50, specular: 0x8a8f9a, flatShading: false }));
  if (!dims(b, 0.058, 0.048, 0.058)) return chunk(b, metal(0x2a2c30, 50, 0x8a8f9a));
  return group(
    mesh3(geo.box(0.001, 0.001, 0.001), metal(0x2a2c30, 50, 0x8a8f9a)),
    mesh3(memo('teapotG', () => {
      const parts = [
        [geo.sph(0.056, 16, 12), 0, -0.006, 0, 0x2a2c30, 1, 0.72, 1],
        [geo.cyl(0.03, 0.034, 0.008, 14), 0, 0.034, 0, 0x34363c],
        [geo.sph(0.009, 8, 6), 0, 0.044, 0, 0xc9a24a],
        [geo.cyl(0.007, 0.012, 0.045, 8), -0.06, 0.004, 0, 0x2a2c30, 1, 1, 1, 0, 0, 1.0],
        [geo.tor(0.046, 0.004, 5, 14, Math.PI), 0, 0.03, 0, 0x34363c],
      ];
      for (let k = 0; k < 14; k++) {
        const a = (k / 14) * Math.PI * 2;
        parts.push([geo.sph(0.004, 5, 4), Math.cos(a) * 0.055, -0.004, Math.sin(a) * 0.055, 0x3c3e46]);
      }
      return merged(parts);
    }), iron),
  );
}

function ceramicCat(kit, b) {
  const glaze = memo('catGlaze', () => new T.MeshPhongMaterial({ color: 0xf6f1e6, shininess: 120, specular: 0xffffff }));
  if (!dims(b, 0.075, 0.13, 0.06)) return chunk(b, glaze);
  // seated, eyes closed, facing the room. Calm. Decorative. Doomed.
  const body = mesh3(memo('catBodyG', () => merged([
    [geo.sph(0.04, 14, 10), 0, -0.04, 0.004, 0xffffff, 1.05, 1.15, 0.9],
    [geo.sph(0.031, 14, 10), 0, 0.03, -0.004, 0xffffff, 1.08, 0.95, 0.95],
    [geo.cone(0.012, 0.024, 4), -0.02, 0.064, -0.002, 0xffffff, 1, 1, 0.6],
    [geo.cone(0.012, 0.024, 4), 0.02, 0.064, -0.002, 0xffffff, 1, 1, 0.6],
    [geo.sph(0.012, 8, 6), -0.018, -0.076, -0.03, 0xffffff, 1, 0.7, 1.2],
    [geo.sph(0.012, 8, 6), 0.018, -0.076, -0.03, 0xffffff, 1, 0.7, 1.2],
    [geo.tor(0.03, 0.008, 5, 10, Math.PI * 1.2), 0.03, -0.062, 0.016, 0xffffff, 1, 1, 1, Math.PI / 2, 0, 0.6],
  ])), glaze);
  const paint = mesh3(memo('catPaintG', () => merged([
    [geo.tor(0.029, 0.004, 5, 14), 0, 0.003, -0.002, 0xc9a24a, 1.02, 1, 0.92, Math.PI / 2],
    [geo.sph(0.006, 6, 5), 0, -0.004, -0.031, 0xc9a24a],
    [geo.tor(0.007, 0.0016, 4, 8, Math.PI), -0.012, 0.034, -0.032, 0x2a2420, 1, 1, 1, 0, 0, Math.PI],
    [geo.tor(0.007, 0.0016, 4, 8, Math.PI), 0.012, 0.034, -0.032, 0x2a2420, 1, 1, 1, 0, 0, Math.PI],
    [geo.sph(0.003, 5, 4), 0, 0.024, -0.034, 0xd58a9b],
    [geo.cone(0.008, 0.016, 4), -0.02, 0.063, -0.006, 0xd58a9b, 1, 1, 0.4],
    [geo.cone(0.008, 0.016, 4), 0.02, 0.063, -0.006, 0xd58a9b, 1, 1, 0.4],
  ])), vcToon(kit));
  const g = group(body, paint);
  g.scale.setScalar(1.5);
  return g;
}

function teaBowl(kit, b) {
  const celadon = memo('celadon', () => new T.MeshPhongMaterial({ color: 0x9fb8a0, shininess: 90, specular: 0xffffff, side: T.DoubleSide }));
  if (!dims(b, 0.024, 0.02, 0.024)) return chunk(b, celadon);
  return group(
    mesh3(memo('teaBowlG', () => new T.LatheGeometry(bowlProfile(0.024, 0.02, 0.05), 14)), celadon),
    mesh3(memo('teaG', () => new T.CircleGeometry(0.02, 12).rotateX(-Math.PI / 2)), toon(kit, 0x8a5a1c), 0, 0.01, 0),
  );
}

function crock(kit, b) {
  const stone = memo('stoneware', () => new T.MeshPhongMaterial({ color: 0xe6dcc6, shininess: 50, specular: 0xbbbbbb }));
  if (!dims(b, 0.085, 0.11, 0.085)) return chunk(b, stone);
  return group(
    mesh3(geo.cyl(0.085, 0.08, 0.2, 18), stone, 0, -0.01, 0),
    mesh3(memo('crockTrim', () => merged([
      [geo.cyl(0.0855, 0.0845, 0.03, 18, true), 0, 0.02, 0, 0x34508a],
      [geo.cyl(0.0853, 0.0848, 0.008, 18, true), 0, -0.03, 0, 0x34508a],
      // the muslin cover, tied down
      [geo.cyl(0.092, 0.089, 0.03, 18), 0, 0.097, 0, 0xe9dcc0],
      [geo.cyl(0.091, 0.091, 0.005, 18, true), 0, 0.086, 0, 0x8a6a48],
      // a wooden spigot toward the room
      [geo.cyl(0.008, 0.008, 0.04, 8), 0, -0.07, -0.095, 0x8a5a30, 1, 1, 1, Math.PI / 2],
      [geo.cyl(0.005, 0.005, 0.03, 6), 0, -0.058, -0.105, 0x6a4424],
    ])), vcToon(kit)),
  );
}

const burner = (kit, b) => (dims(b, 0.05, 0.01, 0.03)
  ? mesh3(memo('burnerG', () => merged([
    [geo.sph(1, 12, 6), 0, 0.004, 0, 0xffffff, 0.052, 0.012, 0.03],
    [geo.cyl(0.012, 0.016, 0.008, 10), 0, -0.006, 0, 0xffffff],
  ])), metal(0xc9a24a, 100))
  : chunk(b, metal(0xc9a24a, 100)));

function incense(kit, b) {
  if (!dims(b, 0.004, 0.06, 0.004)) return chunk(b, toon(kit, 0x6a4a34));
  const g = group(
    mesh3(geo.cyl(0.0022, 0.0022, 0.12, 5), toon(kit, 0x6a4a34)),
    lit(kit, mesh3(geo.sph(0.004, 6, 5), glowMat(0xff7a30), 0, 0.06, 0)),
  );
  // a thread of smoke: a soft sprite, stretched; the room's haze does the rest
  const smoke = kit.glowSprite(0xe8e4dc, 0.05);
  smoke.material.opacity = 0.2;
  smoke.scale.set(0.035, 0.22, 1);
  smoke.position.y = 0.17;
  smoke.layers.disable(kit.GLOW_LAYER);
  g.add(smoke);
  g.userData.noShadow = true;
  return g;
}

function chimeWood(kit, b) {
  // crown, clapper and sail are all the same oiled wood; dims say which
  const g = new T.Group();
  g.userData.noShadow = true;
  if (dims(b, 0.06, 0.008, 0.06)) g.add(mesh3(geo.cyl(0.06, 0.06, 0.016, 16), toon(kit, 0x8a5a30)));
  else if (dims(b, 0.02, 0.008, 0.02)) {
    g.add(mesh3(memo('clapperG', () => merged([
      [geo.cyl(0.02, 0.02, 0.016, 12), 0, 0, 0, 0x8a5a30],
      [geo.cyl(0.0012, 0.0012, 0.16, 4), 0, 0.088, 0, 0x4a3828],
    ])), vcToon(kit)));
  } else if (dims(b, 0.03, 0.045, 0.003)) {
    g.add(mesh3(memo('sailG', () => merged([
      [geo.cyl(0.03, 0.03, 0.006, 14), 0, -0.012, 0, 0xa87444, 1, 1, 1.25, Math.PI / 2],
      [geo.cyl(0.0012, 0.0012, 0.14, 4), 0, 0.09, 0, 0x4a3828],
    ])), vcToon(kit)));
  } else g.add(chunk(b, toon(kit, 0x8a5a30)));
  return g;
}
function chimeTube(kit, b) {
  const g = group(mesh3(new T.CylinderGeometry(0.009, 0.009, b.b * 2, 8), metal(0xd8dce4, 160, 0xffffff)), mesh3(geo.cyl(0.0012, 0.0012, 0.03, 4), toon(kit, 0x4a3828), 0, b.b + 0.015, 0));
  g.userData.noShadow = true;
  return g;
}

const copperBottle = (kit, b) => (dims(b, 0.022, 0.06, 0.022)
  ? mesh3(memo('bottleG', () => merged([
    [geo.cyl(0.022, 0.022, 0.085, 12), 0, -0.017, 0, 0xffffff],
    [geo.cyl(0.011, 0.022, 0.018, 12), 0, 0.034, 0, 0xffffff],
    [geo.cyl(0.012, 0.012, 0.016, 10), 0, 0.051, 0, 0xffffff],
  ])), metal(0xc8743c, 130, 0xffd0a0))
  : chunk(b, metal(0xc8743c, 130, 0xffd0a0)));

function tablet(kit, b) {
  if (!dims(b, 0.012, 0.075, 0.1)) return chunk(b, metal(0x2a2c30, 80, 0x8a8f9a));
  const g = group(
    mesh3(geo.box(0.012, 0.15, 0.2), metal(0x2a2c30, 80, 0x8a8f9a)),
    mesh3(memo('tabletStand', () => merged([[geo.box(0.05, 0.012, 0.12), 0.012, -0.069, 0, 0xcfae72], [geo.box(0.01, 0.09, 0.05), 0.016, -0.03, 0, 0xcfae72, 1, 1, 1, 0, 0, -0.3]])), vcToon(kit)),
  );
  // the screen looks into the room (-x from the desk on the right wall)
  const screen = lit(kit, mesh3(geo.box(0.001, 0.134, 0.184), memo('tabletScreen', () => new T.MeshBasicMaterial({ map: tabletTex(kit) })), -0.0066, 0, 0));
  g.add(screen);
  g.userData.emitter = { color: new T.Color(0xdff0ee), strength: 0.4, radius: 1.0 };
  return g;
}

const clipboard = (kit, b) => (dims(b, 0.06, 0.004, 0.085)
  ? (() => {
    const mats = [toon(kit, 0x7a5a3a), toon(kit, 0x7a5a3a), memo('clipTop', () => kit.toonMat(0xffffff, { map: clipTex(kit) })), toon(kit, 0x7a5a3a), toon(kit, 0x7a5a3a), toon(kit, 0x7a5a3a)];
    const g = group(mesh3(geo.box(0.12, 0.008, 0.17), mats), mesh3(geo.cyl(0.004, 0.004, 0.1, 6), toon(kit, 0x1f3f8a), 0.045, 0.008, 0.01));
    g.children[1].rotation.x = Math.PI / 2;
    return g;
  })()
  : chunk(b, toon(kit, 0x7a5a3a)));

const journal = (kit, b) => (dims(b, 0.06, 0.012, 0.045)
  ? mesh3(memo(`journalG${Math.round(b.tint * 100)}`, () => merged([
    [geo.box(0.12, 0.024, 0.09), 0, 0, 0, pick(b.tint, SOFT)],
    [geo.box(0.114, 0.018, 0.086), 0.004, 0, 0, 0xf6f1e6],
    [geo.box(0.012, 0.0245, 0.091), 0.03, 0, 0, 0x4a3828],
  ])), vcToon(kit))
  : chunk(b, toon(kit, pick(b.tint, SOFT))));

function sandals(kit, b) {
  if (!dims(b, 0.085, 0.018, 0.07)) return chunk(b, toon(kit, 0xb98a5a));
  const strap = pick(b.tint, [[0.8, 0x6a4424], [0.6, 0x2f5a5a], [0.9, 0xb5493a], [0.7, 0x2a2a30], [0.75, 0x8a4f86]]);
  const parts = [];
  for (const z of [-0.034, 0.034]) {
    parts.push([geo.sph(1, 10, 6), 0, -0.008, z, 0xc59a5c, 0.082, 0.01, 0.03]);
    parts.push([geo.box(0.16, 0.004, 0.058), 0, -0.016, z, 0x3a2c20, 0.98, 1, 1]);
    parts.push([geo.tor(0.026, 0.006, 5, 10, Math.PI), 0.02, -0.004, z, strap, 1, 1, 1, 0, Math.PI / 2, 0]);
    parts.push([geo.tor(0.024, 0.006, 5, 10, Math.PI), -0.028, -0.004, z, strap, 1, 1, 1, 0, Math.PI / 2, 0]);
  }
  return mesh3(memo(`sandalG${strap}`, () => merged(parts)), vcToon(kit));
}

function seaGlassPiece(kit, b) {
  const colour = seaGlass(b.tint);
  const g = new T.Group();
  g.userData.noShadow = true;
  if (!dims(b, 0.022, 0.03, 0.006)) {
    g.add(chunk(b, glass(colour, 0.75)));
    return g;
  }
  const p = mesh3(memo('seaPieceG', () => kit.roughen(new T.IcosahedronGeometry(1, 1), 0.1)), memo(`seaPieceM${colour}`, () => new T.MeshPhongMaterial({ color: colour, shininess: 120, specular: 0xffffff, transparent: true, opacity: 0.8, flatShading: true })));
  p.scale.set(0.024, 0.032, 0.007);
  g.add(p, mesh3(geo.cyl(0.001, 0.001, 0.07, 4), toon(kit, 0x4a3828), 0, 0.065, 0));
  return g;
}

const driftwood = (kit, b) => (dims(b, 0.17, 0.01, 0.012)
  ? mesh3(memo('driftG', () => {
    const g = new T.CylinderGeometry(0.011, 0.014, 0.36, 7, 4).rotateZ(Math.PI / 2);
    return kit.roughen(g, 0.1);
  }), toon(kit, 0xcfc2ac))
  : chunk(b, toon(kit, 0xcfc2ac)));

function dispenser(kit, b) {
  if (!dims(b, 0.12, 0.17, 0.12)) return chunk(b, glass(0xcfe6ee, 0.45));
  const g = new T.Group();
  g.scale.setScalar(0.12 / 0.105);
  // glass first (the shards read as glass), then the water it holds
  g.add(mesh3(geo.cyl(0.103, 0.103, 0.24, 20, true), glass(0xcfe6ee, 0.28), 0, -0.012, 0));
  g.add(mesh3(geo.cyl(0.097, 0.097, 0.17, 20), memo('waterM', () => new T.MeshPhongMaterial({ color: 0x9fd4e6, shininess: 200, specular: 0xffffff, transparent: true, opacity: 0.5, depthWrite: false })), 0, -0.045, 0));
  // the water line, and what is infusing
  g.add(mesh3(memo('dispBits', () => merged([
    [geo.cyl(0.098, 0.098, 0.003, 20, true), 0, 0.04, 0, 0xeaf7fb],
    ...[[0.03, -0.02, 0.05, 0.2], [-0.045, 0.0, 0.02, 1.1], [0.01, -0.07, -0.05, 2.0], [-0.02, -0.05, 0.06, 0.6], [0.05, -0.09, 0.0, 1.5]].map(([x, y, z, r]) => [geo.cyl(0.02, 0.02, 0.004, 10), x, y, z, 0x8fc46a, 1, 1, 1, r, 0, r * 0.7]),
    ...[[-0.04, -0.03, -0.04, 0.9], [0.04, -0.06, 0.04, 0.3]].map(([x, y, z, r]) => [geo.cyl(0.022, 0.022, 0.004, 10), x, y, z, 0xf2d24a, 1, 1, 1, r, 0, r]),
  ])), vcToon(kit)));
  g.add(mesh3(memo('dispMetal', () => merged([
    [geo.cyl(0.106, 0.106, 0.016, 20), 0, 0.116, 0, 0xffffff],
    [geo.sph(0.016, 8, 6), 0, 0.136, 0, 0xffffff],
    [geo.cyl(0.108, 0.108, 0.022, 20), 0, -0.139, 0, 0xffffff],
    [geo.cyl(0.009, 0.009, 0.05, 8), 0, -0.105, -0.115, 0xffffff, 1, 1, 1, Math.PI / 2],
    [geo.cyl(0.005, 0.005, 0.03, 6), 0, -0.118, -0.135, 0xffffff],
    [geo.box(0.008, 0.026, 0.008), 0, -0.09, -0.13, 0xffffff],
  ])), metal(0xc8ccd4, 150, 0xffffff)));
  g.userData.noShadow = true;
  return g;
}

function oilBottle(kit, b) {
  if (!dims(b, 0.012, 0.026, 0.012)) return chunk(b, glass(0x7a4a1c, 0.8));
  const label = new T.Color().setHSL(hueOf(b.tint), 0.6, 0.6).getHex();
  const g = group(
    mesh3(geo.cyl(0.011, 0.011, 0.034, 8), memo('amberM', () => new T.MeshPhongMaterial({ color: 0x7a4a1c, shininess: 180, specular: 0xffffff, transparent: true, opacity: 0.88 })), 0, -0.009, 0),
    mesh3(memo(`oilTrim${label}`, () => merged([
      [geo.cyl(0.0115, 0.0115, 0.016, 8, true), 0, -0.01, 0, label],
      [geo.cyl(0.007, 0.007, 0.014, 8), 0, 0.015, 0, 0x1c1c20],
      [geo.sph(0.006, 6, 5), 0, 0.024, 0, 0x1c1c20],
    ])), vcToon(kit)),
  );
  g.userData.noShadow = true;
  return g;
}

function mirror(kit, b) {
  const silver = memo('mirrorM', () => new T.MeshPhongMaterial({ map: mirrorTex(kit), shininess: 220, specular: 0xffffff }));
  if (!dims(b, 0.012, 0.6, 0.25)) return chunk(b, metal(0xdfe6ea, 220, 0xffffff));
  const edge = metal(0xdfe6ea, 220, 0xffffff);
  // a silver speck first: a broken mirror's pieces take the first colour
  // found, and they should be silver, not frame-brown
  const g = group(mesh3(geo.box(0.001, 0.001, 0.001), edge));
  // the face that looks into the room is -x (the mirrors hang on the +x wall)
  g.add(mesh3(geo.box(0.004, 1.16, 0.46), [edge, silver, edge, edge, edge, edge], -0.009, 0, 0));
  g.add(mesh3(memo('mirrorFrame', () => merged([
    [geo.box(0.02, 1.2, 0.5), 0.003, 0, 0, 0xcfae72],
    [geo.box(0.026, 1.2, 0.022), -0.002, 0, -0.239, 0xb98d5c],
    [geo.box(0.026, 1.2, 0.022), -0.002, 0, 0.239, 0xb98d5c],
    [geo.box(0.026, 0.022, 0.5), -0.002, 0.589, 0, 0xb98d5c],
    [geo.box(0.026, 0.022, 0.5), -0.002, -0.589, 0, 0xb98d5c],
  ])), vcToon(kit)));
  return g;
}

function ball(kit, b) {
  const colour = pick(b.tint, SOFT);
  const vinyl = memo(`vinyl${colour}`, () => new T.MeshPhongMaterial({ color: colour, shininess: 45, specular: 0x777777 }));
  if (b.shape !== 1 || !near(b.a, 0.21)) return chunk(b, vinyl);
  const r = b.a;
  const g = group(mesh3(geo.sph(r, 24, 18), vinyl));
  const dark = new T.Color(colour).multiplyScalar(0.72).getHex();
  // the moulded ribs every gym ball has, and the plug
  g.add(mesh3(memo('ballRibs', () => merged([
    ...[-0.5, -0.25, 0, 0.25, 0.5].map((t) => [new T.TorusGeometry(Math.cos(t) * r * 1.002, 0.003, 4, 28), 0, Math.sin(t) * r, 0, 0xffffff, 1, 1, 1, Math.PI / 2]),
    [geo.cyl(0.012, 0.012, 0.004, 8), 0, r, 0, 0xffffff],
  ])), toon(kit, dark)));
  return g;
}

function plainWood(kit, b, k) {
  return slab(b, woodMat(kit, k));
}
function bench(kit, b) {
  return slab(b, memo('rattanM', () => kit.toonMat(0xffffff, { map: rattanTex(kit) })));
}
function stoneDish(kit, b) {
  return slab(b, memo('dishM', () => new T.MeshPhongMaterial({ color: 0x9fb8a0, shininess: 80, specular: 0xdddddd })));
}

function windowPane(kit, b) {
  // the sim's glowing pane (lib.rs add_window), taller than main.js's
  // window key accepts, so it is dressed here
  const g = new T.Group();
  const w = b.a * 2, h = b.b * 2;
  g.add(mesh3(new T.BoxGeometry(w + 0.1, h + 0.1, 0.03), toon(kit, 0x5d3d28)));
  // unlit and bright, but not in the glow pass (it blooms to pure white)
  const pane = mesh3(new T.PlaneGeometry(w, h), memo('windowM', () => new T.MeshBasicMaterial({ map: windowTex(kit) })), 0, 0, -0.017);
  pane.rotation.y = Math.PI;
  g.add(pane);
  const bars = [];
  for (const x of [-w / 4, 0, w / 4]) bars.push([geo.box(0.022, h, 0.014), x, 0, -0.022, 0x5d3d28]);
  for (const y of [-h / 6, h / 6]) bars.push([geo.box(w, 0.022, 0.014), 0, y, -0.022, 0x5d3d28]);
  bars.push([geo.box(w + 0.16, 0.03, 0.09), 0, -h / 2 - 0.05, -0.04, 0x6a452d]);
  g.add(new T.Mesh(merged(bars), vcToon(kit)));
  g.userData.emitter = { color: new T.Color(0xffe2a8), strength: 2.2, radius: 3.5 };
  g.userData.noShadow = true;
  return g;
}

// gloss key -> builder
const PIECES = {
  53: yogaMat, 57: rolledMat, 61: zafu, 67: bolster, 73: block, 77: blanket, 81: eyePillow, 83: bowlRing,
  91: lantern, 97: cord, 43: figLeaves, 213: beads, 853: beads,
  433: mallet, 443: clipboard, 453: journal, 463: sandals, 473: striker, 483: incense, 493: driftwood,
  503: chimeWood, 513: chimeWood, 553: ball, 563: candle, 573: saltLamp, 583: figPot, 593: diffuser, 613: teaTin,
  643: stoneDish, 663: teapot, 703: ceramicCat, 713: teaBowl, 723: crock, 733: burner,
  783: gong, 793: singingBowl, 803: chimeTube, 813: copperBottle, 843: tablet, 857: seaGlassPiece,
  883: lavaLamp, 893: dispenser, 903: oilBottle, 913: crystal, 933: quartzBowl, 953: mirror,
  393: bench,
};

// a recognized body -> a THREE.Object3D (usually a Group), or null to let
// main.js's own chain / default box-sphere-capsule handle it
export function mesh(kit, body) {
  T = kit.THREE;
  const k = Math.round(body.gloss * 1000);
  // the shared helpers this room also uses keep their own looks (sconces,
  // hanging plants, the planter, puddles, sparks): only the studio's own
  // glosses are claimed here
  if (body.cls === 0 && k === 920 && body.c < 0.02) return windowPane(kit, body);
  if (WOODS[k]) return plainWood(kit, body, k);
  const make = PIECES[k];
  if (!make) return null;
  const m = make(kit, body);
  if (VOICES[k]) m.userData.voice = VOICES[k];
  return m;
}

// named voices from the sound bank, for the pieces whose impact should not
// be the generic one the viewer infers from the sim's material bits: the
// gong, the chime tubes, both singing bowls, every bead link (wood and sea
// glass), the balance balls, and the crystal family (they clack)
const VOICES = { 783: 'gong', 803: 'chime', 793: 'bowl', 933: 'bowl', 213: 'bead', 853: 'bead', 553: 'rubber', 913: 'stone' };

// a plain body's material (floor slab, walls, unrecognized props), or null
export function material(kit, body) {
  T = kit.THREE;
  if (body.cls !== 0) return null;
  if (body.a > 2 && body.b < 0.2) {
    // sprung maple, pale and long-boarded
    return memo('floorM', () => {
      const t = woodTex(kit, 'floor', '#d9b98a', '#a8824e', 8).clone();
      t.wrapS = t.wrapT = T.RepeatWrapping;
      t.repeat.set(2, 5);
      t.rotation = Math.PI / 2;
      t.needsUpdate = true;
      return kit.toonMat(0xffffff, { map: t });
    });
  }
  if (body.b >= 1.2) {
    // limewash: warm plaster over a sage dado
    return memo('wallM', () => kit.toonMat(0xffffff, {
      map: kit.makeCanvas(64, 256, (g) => {
        g.fillStyle = '#efe0c4';
        g.fillRect(0, 0, 64, 256);
        g.fillStyle = '#a9b99a';
        g.fillRect(0, 176, 64, 80);
        g.fillStyle = '#8a9a7c';
        g.fillRect(0, 172, 64, 5);
      }),
    }));
  }
  return null;
}

// where the three long cords meet the ceiling (room_studio.rs: chimes,
// mobile, tea-corner lantern) — the beams they are tied to are decor
const CORD_Z = [2.3, -1.2];

// render-only dressing with no collision, added to the decor group
export function decor(kit, group, hx, hz) {
  T = kit.THREE;
  const beamM = woodMat(kit, 403);
  for (const z of [...CORD_Z, 0.55]) {
    const beam = new T.Mesh(new T.BoxGeometry(hx * 2, 0.12, 0.14), beamM);
    beam.position.set(0, 3.06, z);
    group.add(beam);
  }
  // fairy lights swagged along the far wall and down both sides
  const bulbs = [], wire = [];
  const swag = (x0, z0, x1, z1, n) => {
    for (let k = 0; k <= n; k++) {
      const t = k / n, sag = Math.sin(t * Math.PI * 3) ** 2 * 0.14;
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t, y = 2.78 - sag;
      bulbs.push([geo.sph(0.016, 6, 5), x, y - 0.02, z, k % 3 === 0 ? 0xffd9a0 : k % 3 === 1 ? 0xfff0cf : 0xffc9a8]);
      wire.push([geo.sph(0.004, 4, 3), x, y, z, 0x3a3028]);
    }
  };
  swag(-hx + 0.06, hz - 0.06, hx - 0.06, hz - 0.06, 44);
  swag(-hx + 0.06, hz - 0.06, -hx + 0.06, -1.6, 30);
  swag(hx - 0.06, hz - 0.06, hx - 0.06, -1.6, 30);
  const bm = new T.Mesh(merged(bulbs), new T.MeshBasicMaterial({ vertexColors: true }));
  bm.layers.enable(kit.GLOW_LAYER);
  group.add(bm, new T.Mesh(merged(wire), vcToon(kit)));

  const board = (tex, w, h, x, y, z, ry, frame = 0x6b452d) => {
    const g = new T.Group();
    g.add(new T.Mesh(new T.BoxGeometry(w + 0.06, h + 0.06, 0.02), toon(kit, frame)));
    const face = new T.Mesh(new T.PlaneGeometry(w, h), kit.toonMat(0xffffff, { map: tex }));
    face.position.z = 0.011;
    g.add(face);
    g.position.set(x, y, z);
    g.rotation.y = ry;
    group.add(g);
  };
  // the name, over the tea corner (far wall faces -z: turn the board round)
  board(signTex(kit, 'name', 512, 160, (g) => {
    g.fillStyle = '#f3e8d2';
    g.fillRect(0, 0, 512, 160);
    g.fillStyle = '#3d6f6a';
    g.textAlign = 'center';
    g.font = 'italic 64px Georgia, serif';
    g.fillText('Inner Stillness', 256, 78);
    g.fillStyle = '#b5493a';
    g.font = '24px Georgia, serif';
    g.fillText('YOGA  ·  SOUND BATH  ·  TEA', 256, 124);
  }), 1.3, 0.4, 2.55, 2.28, hz - 0.02, Math.PI);
  // today's classes, on the storage wall (faces +x)
  board(signTex(kit, 'classes', 256, 320, (g) => {
    g.fillStyle = '#2c332f';
    g.fillRect(0, 0, 256, 320);
    g.fillStyle = '#f1ead8';
    g.textAlign = 'center';
    g.font = 'bold 26px Georgia, serif';
    g.fillText('TODAY', 128, 40);
    g.font = '19px Georgia, serif';
    g.textAlign = 'left';
    [['6:00', 'Sunrise Flow'], ['9:30', 'Yin + Gong'], ['12:00', 'Sound Bath'], ['4:00', 'Cat-Cow Basics'], ['6:30', 'Restorative']].forEach(([t, n], i) => {
      g.fillStyle = '#e9b44c';
      g.fillText(t, 22, 86 + i * 44);
      g.fillStyle = '#f1ead8';
      g.fillText(n, 82, 86 + i * 44);
    });
    g.fillStyle = '#d58a9b';
    g.font = 'italic 16px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('please silence everything', 128, 304);
  }), 0.62, 0.78, -hx + 0.02, 1.95, -0.6, Math.PI / 2, 0x8a6a48);
  // house rule, over the retail shelf (faces -x)
  board(signTex(kit, 'shoes', 256, 128, (g) => {
    g.fillStyle = '#f3e8d2';
    g.fillRect(0, 0, 256, 128);
    g.fillStyle = '#5a4636';
    g.textAlign = 'center';
    g.font = 'bold 34px Georgia, serif';
    g.fillText('SHOES OFF', 128, 56);
    g.font = 'italic 24px Georgia, serif';
    g.fillStyle = '#3d6f6a';
    g.fillText('ego off', 128, 98);
  }), 0.56, 0.28, hx - 0.02, 1.62, -0.15, -Math.PI / 2);
  // a print over the crystal shelf: the house pose
  board(signTex(kit, 'pose', 192, 256, (g) => {
    g.fillStyle = '#f6efe0';
    g.fillRect(0, 0, 192, 256);
    g.fillStyle = '#e9b44c';
    g.beginPath();
    g.arc(96, 100, 62, 0, Math.PI * 2);
    g.fill();
    // a seated cat in silhouette, tail wrapped
    g.fillStyle = '#3a3340';
    g.beginPath();
    g.ellipse(96, 150, 40, 46, 0, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(96, 92, 27, 0, Math.PI * 2);
    g.fill();
    for (const s of [-1, 1]) {
      g.beginPath();
      g.moveTo(96 + s * 8, 74);
      g.lineTo(96 + s * 26, 50);
      g.lineTo(96 + s * 28, 84);
      g.fill();
    }
    g.lineWidth = 9;
    g.strokeStyle = '#3a3340';
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(132, 180);
    g.bezierCurveTo(160, 196, 120, 208, 76, 200);
    g.stroke();
    g.fillStyle = '#5a4636';
    g.font = 'italic 20px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('be here meow', 96, 240);
  }), 0.5, 0.66, -2.85, 1.72, hz - 0.02, Math.PI);
}

// the mandala on the tapestry: main.js skins the sim's cloth grid as one
// sheet and calls this once with that mesh, so the room can dress it
export function cloth(kit, patch) {
  T = kit.THREE;
  const { cols, rows, mesh: sheet } = patch;
  const uv = new Float32Array(cols * rows * 2);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      // the sheet hangs on the far wall facing -z, where +x is screen-left
      uv[(j * cols + i) * 2] = 1 - i / (cols - 1);
      uv[(j * cols + i) * 2 + 1] = 1 - j / (rows - 1);
    }
  }
  sheet.geometry.setAttribute('uv', new T.BufferAttribute(uv, 2));
  const tex = kit.makeCanvas(384, 320, (g) => {
    g.fillStyle = '#2f4a6a';
    g.fillRect(0, 0, 384, 320);
    g.strokeStyle = '#e9b44c';
    g.lineWidth = 6;
    g.strokeRect(10, 10, 364, 300);
    g.strokeStyle = '#d2694f';
    g.lineWidth = 2;
    g.strokeRect(20, 20, 344, 280);
    g.translate(192, 160);
    const ring = (n, r0, r1, w, fill, stroke) => {
      for (let k = 0; k < n; k++) {
        g.save();
        g.rotate((k / n) * Math.PI * 2);
        g.beginPath();
        g.moveTo(0, -r0);
        g.bezierCurveTo(w, -r0 - (r1 - r0) * 0.4, w * 0.7, -r1 + 6, 0, -r1);
        g.bezierCurveTo(-w * 0.7, -r1 + 6, -w, -r0 - (r1 - r0) * 0.4, 0, -r0);
        g.fillStyle = fill;
        g.fill();
        g.strokeStyle = stroke;
        g.lineWidth = 1.5;
        g.stroke();
        g.restore();
      }
    };
    ring(24, 96, 138, 16, '#3d9690', '#f1e6cf');
    ring(16, 62, 108, 20, '#d2694f', '#f1e6cf');
    ring(12, 30, 74, 18, '#e9b44c', '#8a4f86');
    ring(8, 8, 40, 13, '#f1e6cf', '#d2694f');
    g.fillStyle = '#8a4f86';
    g.beginPath();
    g.arc(0, 0, 10, 0, Math.PI * 2);
    g.fill();
  });
  sheet.material = kit.toonMat(0xffffff, { map: tex, side: T.DoubleSide });
  return true; // dressed: main.js must not tint it
}
