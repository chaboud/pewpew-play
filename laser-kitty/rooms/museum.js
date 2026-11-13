// The museum (room 11). The sim side is core/src/room_museum.rs;
// this module is how its bodies look. Contract: rooms/README.md.
//
// Six rooms in a row, 32 m of them. Recognition follows the builder's rule:
// GLOSS names the family, TINT the variant inside it (which picture, which
// limb). Brittle families are also matched on dims, because a shard
// inherits its parent's gloss and tint — a shard falls through to `shard()`
// and is drawn as a chip of the same stuff. Everything a visitor would look
// at faces -z, toward the open front; seen from there +x is on the LEFT.
//
// The works are the canon, redrawn here in code. The rule the builder
// applied (nobody checked it with a lawyer): only works whose maker died
// before 1955 or which were published before 1930, each drawn afresh and
// none sampled; nothing still in copyright is depicted or named.
//
// Draw calls are the budget: 530 bodies at five meshes each is more than a
// phone wants. So a body is built from primitives the old way and then
// FUSED (`fuse`): everything untextured in it becomes one vertex-coloured
// mesh, or two if some of it shines.

// framing and light: one room to a phone screen, the rest a pan away. Lit
// by its own lanterns and picture lights, so the sun and the fill come
// down; the grid of the light volume coarsens to cover 32 m.
export const look = {
  haze: 0.012, sun: 0.6,
  sunLight: 0.8, ambient: 1.0,
  eyeBack: 2.5, eyeY: 2.25,
  panX: 0.92, panY: [-1.0, 2.6],
  ceil: 5.8, voxelScale: 1.9,
  // each room's centre, left to right as the visitor sees them
  stops: [
    { x: 13, name: 'Moderns' }, { x: 6.7, name: 'Paintings' }, { x: 0, name: 'Great Hall' },
    { x: -6, name: 'Antiquities' }, { x: -10.9, name: 'Natural History' }, { x: -14.6, name: 'Shop' },
  ],
};

// room_museum.rs: where the walls stand, the skeleton's origin (ribs need
// to know which side of the spine they are on), the picture rail
const HX = 16, WALL_TOP = 5.6;
const REX_Z = 1.9;
const RAIL_Y = 3.3;
// left to right as the visitor sees them (+x first)
const ROOMS = [
  { name: 'MODERNS', x1: 16, x0: 10, wall: 0xe4e0d6, dado: 0xbdb8ac },
  { name: 'PAINTINGS', x1: 10, x0: 3.4, wall: 0x7a2630, dado: 0x4a161d },
  { name: 'THE GREAT HALL', x1: 3.4, x0: -3.4, wall: 0xd6c9a8, dado: 0xa8997a },
  { name: 'ANTIQUITIES', x1: -3.4, x0: -8.6, wall: 0x24505a, dado: 0x16343b },
  { name: 'NATURAL HISTORY', x1: -8.6, x0: -13.2, wall: 0x5f6a3a, dado: 0x3d4526 },
  { name: 'SHOP & CLOAKROOM', x1: -13.2, x0: -16, wall: 0xd9a441, dado: 0x9a6f22 },
];
const roomAt = (x) => ROOMS.find((r) => x <= r.x1 && x > r.x0) ?? ROOMS[2];

// gloss families (room_museum.rs G_*)
const G = {
  wall: 0.63, lantern: 0.60, stone: 0.61, pillar: 0.62, light: 0.64, counter: 0.59, canvas: 0.52, frame: 0.53,
  wire: 0.77, hook: 0.76, glass: 0.88, bone: 0.44, armature: 0.71, ceramic: 0.56, marble: 0.57, david: 0.54,
  venus: 0.55, thinker: 0.73, victory: 0.58, discobolus: 0.47, sphinx: 0.51, moai: 0.49, rosetta: 0.43,
  terracotta: 0.46, treasure: 0.78, crown: 0.79, brass: 0.70, rope: 0.07, armour: 0.72, meteorite: 0.68,
  geode: 0.48, globe: 0.42, wood: 0.41, leather: 0.08, cushion: 0.09, coat: 0.10, chair: 0.36, umbrella: 0.37,
  paper: 0.16, card: 0.17, carousel: 0.69, thermos: 0.67, sign: 0.38, extinguisher: 0.66, mobile: 0.75,
  acrylic: 0.89, snowGlobe: 0.90, plush: 0.06,
};
const near = (x, y, t = 0.004) => Math.abs(x - y) < t;
const fam = (b, g) => Math.abs(b.gloss - g) < 0.004;
const variant = (b) => Math.round(b.tint * 100);
const dims = (b, a, bb, c) => near(b.a, a) && near(b.b, bb) && near(b.c, c);

// --------------------------------------------------------------- pictures ---
// Painted in code: flat, a little naive, clearly ours. A seeded generator
// keeps every dab where it was on the last load.
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
function ell(g, x, y, rx, ry, rot = 0) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2);
  g.fill();
}
function poly(g, pts) {
  g.beginPath();
  g.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
  g.closePath();
  g.fill();
}
function varnish(g, W, H, a = 0.28) {
  const v = g.createRadialGradient(W / 2, H * 0.45, W * 0.2, W / 2, H / 2, W * 0.85);
  v.addColorStop(0, 'rgba(60,40,10,0)');
  v.addColorStop(1, `rgba(30,18,4,${a})`);
  g.fillStyle = v;
  g.fillRect(0, 0, W, H);
}

// the star: a cat, seated, hands folded, with a smile nobody can explain
function paintPortrait(g, W, H) {
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#93a98f');
  sky.addColorStop(0.5, '#b7b488');
  sky.addColorStop(1, '#6a6541');
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  // the dreamlike landscape: blue crags, a road that goes nowhere
  g.fillStyle = '#6f9191';
  poly(g, [0, H * 0.42, W * 0.1, H * 0.3, W * 0.2, H * 0.38, W * 0.3, H * 0.26, W * 0.42, H * 0.44, 0, H * 0.5]);
  poly(g, [W, H * 0.4, W * 0.88, H * 0.27, W * 0.76, H * 0.36, W * 0.66, H * 0.3, W * 0.58, H * 0.45, W, H * 0.52]);
  g.fillStyle = '#86907a';
  g.fillRect(0, H * 0.47, W, H * 0.2);
  g.strokeStyle = '#c9c39a';
  g.lineWidth = W * 0.022;
  g.beginPath();
  g.moveTo(W * 0.06, H * 0.62);
  g.bezierCurveTo(W * 0.2, H * 0.52, W * 0.08, H * 0.48, W * 0.22, H * 0.42);
  g.stroke();
  g.strokeStyle = '#8fb0a8';
  g.beginPath();
  g.moveTo(W * 0.95, H * 0.6);
  g.bezierCurveTo(W * 0.78, H * 0.55, W * 0.92, H * 0.5, W * 0.8, H * 0.46);
  g.stroke();
  // the sitter: dark gown, a veil of darker fur
  g.fillStyle = '#2b2622';
  ell(g, W * 0.5, H * 1.02, W * 0.46, H * 0.46);
  g.fillStyle = '#3d3229';
  ell(g, W * 0.5, H * 0.42, W * 0.27, H * 0.26);
  poly(g, [W * 0.25, H * 0.42, W * 0.2, H * 0.74, W * 0.8, H * 0.74, W * 0.75, H * 0.42]);
  // ears
  g.fillStyle = '#b98f58';
  poly(g, [W * 0.31, H * 0.26, W * 0.33, H * 0.1, W * 0.45, H * 0.2]);
  poly(g, [W * 0.69, H * 0.26, W * 0.67, H * 0.1, W * 0.55, H * 0.2]);
  g.fillStyle = '#d9a9a0';
  poly(g, [W * 0.345, H * 0.23, W * 0.35, H * 0.15, W * 0.41, H * 0.21]);
  poly(g, [W * 0.655, H * 0.23, W * 0.65, H * 0.15, W * 0.59, H * 0.21]);
  // the face and the bib
  g.fillStyle = '#cfa56c';
  ell(g, W * 0.5, H * 0.37, W * 0.2, H * 0.165);
  g.fillStyle = '#ecdcbc';
  ell(g, W * 0.5, H * 0.43, W * 0.115, H * 0.075);
  ell(g, W * 0.5, H * 0.62, W * 0.13, H * 0.1);
  g.strokeStyle = '#9a7240';
  g.lineWidth = W * 0.012;
  for (const dx of [-0.06, 0, 0.06]) {
    g.beginPath();
    g.moveTo(W * (0.5 + dx), H * 0.225);
    g.lineTo(W * (0.5 + dx * 0.8), H * 0.275);
    g.stroke();
  }
  // half-lidded eyes that follow you round the room
  for (const sx of [-1, 1]) {
    g.fillStyle = '#e9e2b8';
    ell(g, W * (0.5 + sx * 0.085), H * 0.355, W * 0.045, H * 0.02);
    g.fillStyle = '#3b3a1c';
    ell(g, W * (0.5 + sx * 0.085 - 0.012), H * 0.357, W * 0.016, H * 0.019);
    g.fillStyle = '#cfa56c';
    g.fillRect(W * (0.5 + sx * 0.085) - W * 0.05, H * 0.33, W * 0.1, H * 0.018);
  }
  g.fillStyle = '#b46a62';
  poly(g, [W * 0.48, H * 0.405, W * 0.52, H * 0.405, W * 0.5, H * 0.425]);
  // THE SMILE: up at one corner, level at the other
  g.strokeStyle = '#6b4a35';
  g.lineWidth = W * 0.011;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(W * 0.5, H * 0.425);
  g.lineTo(W * 0.5, H * 0.445);
  g.moveTo(W * 0.435, H * 0.452);
  g.bezierCurveTo(W * 0.47, H * 0.468, W * 0.53, H * 0.468, W * 0.575, H * 0.44);
  g.stroke();
  g.strokeStyle = 'rgba(245,238,214,0.7)';
  g.lineWidth = W * 0.005;
  for (const sx of [-1, 1]) {
    for (const dy of [-0.012, 0.004, 0.02]) {
      g.beginPath();
      g.moveTo(W * (0.5 + sx * 0.09), H * 0.44);
      g.lineTo(W * (0.5 + sx * 0.25), H * (0.44 + dy * 2));
      g.stroke();
    }
  }
  // folded paws
  g.fillStyle = '#d9b47c';
  ell(g, W * 0.43, H * 0.83, W * 0.15, H * 0.045, -0.12);
  ell(g, W * 0.57, H * 0.85, W * 0.15, H * 0.045, 0.1);
  g.strokeStyle = '#9a7240';
  g.lineWidth = W * 0.006;
  for (const [x, y] of [[0.33, 0.835], [0.37, 0.84], [0.63, 0.86], [0.67, 0.855]]) {
    g.beginPath();
    g.moveTo(W * x, H * (y - 0.015));
    g.lineTo(W * x, H * (y + 0.015));
    g.stroke();
  }
  varnish(g, W, H, 0.5);
}

// "Untitled (Red Dot)": seven figures of off-white and one red disc
function paintRedDot(g, W, H) {
  g.fillStyle = '#ece6d6';
  g.fillRect(0, 0, W, H);
  const r = rng(11);
  for (let k = 0; k < 900; k++) {
    g.fillStyle = `rgba(${150 + r() * 60},${140 + r() * 60},${110 + r() * 60},0.07)`;
    g.fillRect(r() * W, r() * H, 1 + r() * 3, 1);
  }
  g.fillStyle = '#d3231c';
  ell(g, W * 0.57, H * 0.46, W * 0.115, W * 0.115);
  g.fillStyle = 'rgba(255,255,255,0.12)';
  ell(g, W * 0.545, H * 0.435, W * 0.045, W * 0.04);
  g.strokeStyle = '#7a756a';
  g.lineWidth = 1.5;
  g.beginPath();
  g.moveTo(W * 0.78, H * 0.93);
  g.bezierCurveTo(W * 0.82, H * 0.9, W * 0.84, H * 0.96, W * 0.9, H * 0.92);
  g.stroke();
}

// --- the canon. Every one is redrawn here, by hand, in flat shapes: enough
// of each picture to know it across a room, nothing traced or sampled. ---
function stroke(g, w, col, pts) {
  g.strokeStyle = col;
  g.lineWidth = w;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
  g.stroke();
}
// the blue crags and the road that goes nowhere, behind both sitters
function dreamLandscape(g, W, H) {
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#93a98f');
  sky.addColorStop(0.5, '#b7b488');
  sky.addColorStop(1, '#6a6541');
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#6f9191';
  poly(g, [0, H * 0.42, W * 0.1, H * 0.3, W * 0.2, H * 0.38, W * 0.3, H * 0.26, W * 0.42, H * 0.44, 0, H * 0.5]);
  poly(g, [W, H * 0.4, W * 0.88, H * 0.27, W * 0.76, H * 0.36, W * 0.66, H * 0.3, W * 0.58, H * 0.45, W, H * 0.52]);
  g.fillStyle = '#86907a';
  g.fillRect(0, H * 0.47, W, H * 0.2);
  g.strokeStyle = '#c9c39a';
  g.lineWidth = W * 0.022;
  g.beginPath();
  g.moveTo(W * 0.06, H * 0.62);
  g.bezierCurveTo(W * 0.2, H * 0.52, W * 0.08, H * 0.48, W * 0.22, H * 0.42);
  g.stroke();
  g.strokeStyle = '#8fb0a8';
  g.beginPath();
  g.moveTo(W * 0.95, H * 0.6);
  g.bezierCurveTo(W * 0.78, H * 0.55, W * 0.92, H * 0.5, W * 0.8, H * 0.46);
  g.stroke();
}

function paintMona(g, W, H) {
  dreamLandscape(g, W, H);
  // the gown and the dark veil of hair
  g.fillStyle = '#262a22';
  ell(g, W * 0.5, H * 1.04, W * 0.5, H * 0.46);
  g.fillStyle = '#2a1c12';
  ell(g, W * 0.5, H * 0.34, W * 0.215, H * 0.2);
  poly(g, [W * 0.29, H * 0.34, W * 0.22, H * 0.7, W * 0.78, H * 0.7, W * 0.71, H * 0.34]);
  // throat and breast, the neckline cut straight across
  g.fillStyle = '#d8b582';
  poly(g, [W * 0.4, H * 0.46, W * 0.6, H * 0.46, W * 0.7, H * 0.68, W * 0.3, H * 0.68]);
  g.fillStyle = '#33301f';
  g.beginPath();
  g.moveTo(W * 0.24, H * 0.7);
  g.quadraticCurveTo(W * 0.5, H * 0.6, W * 0.76, H * 0.7);
  g.lineTo(W * 0.8, H * 0.82);
  g.lineTo(W * 0.2, H * 0.82);
  g.fill();
  // the face: a long pale oval, high forehead, no eyebrows to speak of
  g.fillStyle = '#e4c896';
  ell(g, W * 0.5, H * 0.345, W * 0.128, H * 0.155);
  g.fillStyle = 'rgba(120,84,40,0.28)';
  ell(g, W * 0.585, H * 0.36, W * 0.05, H * 0.13);
  g.fillStyle = '#3a2a1a';
  for (const sx of [-1, 1]) ell(g, W * (0.5 + sx * 0.058) - W * 0.008, H * 0.33, W * 0.024, H * 0.008);
  stroke(g, W * 0.008, '#b08e5c', [W * 0.5, H * 0.34, W * 0.488, H * 0.4, W * 0.505, H * 0.405]);
  // the smile
  g.strokeStyle = '#8a4a36';
  g.lineWidth = W * 0.01;
  g.beginPath();
  g.moveTo(W * 0.452, H * 0.438);
  g.quadraticCurveTo(W * 0.5, H * 0.456, W * 0.552, H * 0.43);
  g.stroke();
  // the hands, one over the other
  g.fillStyle = '#e0c28e';
  ell(g, W * 0.45, H * 0.86, W * 0.15, H * 0.04, -0.1);
  ell(g, W * 0.57, H * 0.885, W * 0.13, H * 0.036, 0.14);
  varnish(g, W, H, 0.5);
}

function paintPearl(g, W, H) {
  g.fillStyle = '#12110e';
  g.fillRect(0, 0, W, H);
  // the jacket, the white collar
  g.fillStyle = '#8a6a2c';
  poly(g, [W * 0.06, H, W * 0.18, H * 0.74, W * 0.48, H * 0.62, W * 0.8, H * 0.76, W * 0.94, H]);
  g.fillStyle = '#e9e4d6';
  poly(g, [W * 0.33, H * 0.67, W * 0.56, H * 0.63, W * 0.54, H * 0.72, W * 0.36, H * 0.75]);
  // the yellow tail of the turban, down her back
  g.fillStyle = '#d9b23c';
  poly(g, [W * 0.6, H * 0.16, W * 0.76, H * 0.26, W * 0.8, H * 0.72, W * 0.66, H * 0.68]);
  g.fillStyle = '#b9922c';
  poly(g, [W * 0.7, H * 0.3, W * 0.76, H * 0.3, W * 0.78, H * 0.7, W * 0.72, H * 0.69]);
  // the face, turned back over the shoulder
  g.fillStyle = '#e8c79c';
  ell(g, W * 0.44, H * 0.43, W * 0.18, H * 0.2);
  g.fillStyle = 'rgba(90,60,30,0.3)';
  ell(g, W * 0.56, H * 0.46, W * 0.07, H * 0.16);
  // the turban
  g.fillStyle = '#2f5fa8';
  ell(g, W * 0.5, H * 0.25, W * 0.225, H * 0.15);
  poly(g, [W * 0.27, H * 0.3, W * 0.62, H * 0.22, W * 0.66, H * 0.36, W * 0.3, H * 0.36]);
  g.fillStyle = '#6f97d6';
  ell(g, W * 0.42, H * 0.2, W * 0.09, H * 0.05, -0.3);
  // eyes that have just found you, and the mouth a little open
  g.fillStyle = '#f4efe2';
  ell(g, W * 0.345, H * 0.42, W * 0.034, H * 0.016);
  ell(g, W * 0.49, H * 0.42, W * 0.034, H * 0.016);
  g.fillStyle = '#2a2018';
  ell(g, W * 0.335, H * 0.42, W * 0.017, H * 0.015);
  ell(g, W * 0.48, H * 0.42, W * 0.017, H * 0.015);
  g.fillStyle = '#b8473a';
  ell(g, W * 0.4, H * 0.545, W * 0.04, H * 0.016);
  g.fillStyle = '#e9a79a';
  ell(g, W * 0.395, H * 0.54, W * 0.015, H * 0.006);
  // the pearl
  g.fillStyle = '#b9b4a6';
  ell(g, W * 0.6, H * 0.585, W * 0.04, W * 0.046);
  g.fillStyle = '#fbf8ee';
  ell(g, W * 0.59, H * 0.575, W * 0.022, W * 0.026);
  varnish(g, W, H, 0.25);
}

function paintBirth(g, W, H) {
  g.fillStyle = '#cfe0d6';
  g.fillRect(0, 0, W, H * 0.42);
  g.fillStyle = '#9cc2b4';
  g.fillRect(0, H * 0.42, W, H * 0.58);
  // the little V-shaped waves
  for (let j = 0; j < 7; j++) for (let i = 0; i < 12; i++) {
    const x = W * (0.04 + i * 0.085 + (j % 2) * 0.04), y = H * (0.48 + j * 0.065);
    stroke(g, 1.6, '#eef6ee', [x - 6, y - 3, x, y, x + 6, y - 3]);
  }
  // the shore and its dark trees, on the right
  g.fillStyle = '#6f8f5a';
  poly(g, [W * 0.78, H, W * 0.86, H * 0.7, W, H * 0.62, W, H]);
  g.fillStyle = '#2f4f34';
  for (const [x, y] of [[0.9, 0.2], [0.96, 0.3], [0.86, 0.34]]) {
    g.fillRect(W * x, H * y, W * 0.012, H * 0.45);
    ell(g, W * x, H * y, W * 0.06, H * 0.12);
  }
  // the winds, entwined, blowing from the left
  g.fillStyle = '#8fa6c9';
  ell(g, W * 0.17, H * 0.32, W * 0.13, H * 0.1, -0.5);
  g.fillStyle = '#4f6f9a';
  poly(g, [W * 0.02, H * 0.1, W * 0.2, H * 0.2, W * 0.1, H * 0.34]);
  g.fillStyle = '#e9c9a8';
  ell(g, W * 0.21, H * 0.27, W * 0.035, H * 0.06);
  ell(g, W * 0.26, H * 0.22, W * 0.03, H * 0.055);
  stroke(g, 2, '#f6f6ee', [W * 0.26, H * 0.3, W * 0.4, H * 0.36]);
  stroke(g, 2, '#f6f6ee', [W * 0.25, H * 0.34, W * 0.38, H * 0.42]);
  // the attendant, hurrying in with a red cloak
  g.fillStyle = '#f2ede0';
  poly(g, [W * 0.72, H * 0.34, W * 0.8, H * 0.34, W * 0.84, H * 0.9, W * 0.7, H * 0.9]);
  g.fillStyle = '#e9c9a8';
  ell(g, W * 0.76, H * 0.28, W * 0.028, H * 0.055);
  g.fillStyle = '#b8473a';
  poly(g, [W * 0.6, H * 0.3, W * 0.74, H * 0.36, W * 0.7, H * 0.62, W * 0.62, H * 0.5]);
  // the shell
  g.fillStyle = '#e9dcc6';
  g.beginPath();
  g.moveTo(W * 0.5, H * 0.97);
  g.bezierCurveTo(W * 0.26, H * 0.95, W * 0.3, H * 0.74, W * 0.5, H * 0.76);
  g.bezierCurveTo(W * 0.7, H * 0.74, W * 0.74, H * 0.95, W * 0.5, H * 0.97);
  g.fill();
  for (let k = -3; k <= 3; k++) stroke(g, 1.5, '#b9a686', [W * 0.5, H * 0.96, W * (0.5 + k * 0.055), H * 0.78]);
  // her: pale, weight on one foot, and a great deal of hair
  g.fillStyle = '#f0d8bc';
  ell(g, W * 0.5, H * 0.2, W * 0.032, H * 0.06);
  poly(g, [W * 0.465, H * 0.27, W * 0.535, H * 0.27, W * 0.55, H * 0.5, W * 0.53, H * 0.82, W * 0.49, H * 0.82, W * 0.455, H * 0.5]);
  g.fillStyle = '#c98a3c';
  g.beginPath();
  g.moveTo(W * 0.48, H * 0.15);
  g.bezierCurveTo(W * 0.56, H * 0.1, W * 0.6, H * 0.2, W * 0.57, H * 0.34);
  g.bezierCurveTo(W * 0.66, H * 0.42, W * 0.6, H * 0.56, W * 0.5, H * 0.58);
  g.bezierCurveTo(W * 0.46, H * 0.5, W * 0.56, H * 0.4, W * 0.53, H * 0.26);
  g.closePath();
  g.fill();
  stroke(g, W * 0.012, '#f0d8bc', [W * 0.47, H * 0.3, W * 0.44, H * 0.4, W * 0.5, H * 0.36]);
}

function paintStarry(g, W, H) {
  g.fillStyle = '#1f3f8a';
  g.fillRect(0, 0, W, H);
  const r = rng(61);
  // the sky is all short strokes, going round
  for (let k = 0; k < 420; k++) {
    const x = r() * W, y = r() * H * 0.72;
    const a = Math.sin(x * 0.02) + Math.cos(y * 0.03) + (r() - 0.5) * 0.5;
    g.strokeStyle = ['#2f5fb4', '#16306e', '#4f86d6', '#7fb0e6', '#24489a'][(r() * 5) | 0];
    g.lineWidth = 2.5;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + Math.cos(a) * 11, y + Math.sin(a) * 11);
    g.stroke();
  }
  // the great swirl through the middle
  for (let k = 0; k < 5; k++) {
    g.strokeStyle = k % 2 ? '#a8c8ee' : '#e9e6c0';
    g.lineWidth = 3;
    g.beginPath();
    g.arc(W * 0.47, H * 0.36, W * (0.03 + k * 0.022), 0.4 + k * 0.5, 5.2 + k * 0.5);
    g.stroke();
    g.beginPath();
    g.arc(W * 0.64, H * 0.42, W * (0.02 + k * 0.016), 3.4 + k * 0.4, 8.0 + k * 0.4);
    g.stroke();
  }
  // eleven stars and a moon, each in its own halo
  const star = (x, y, s, col) => {
    for (let k = 3; k >= 1; k--) {
      g.strokeStyle = ['#fff6c0', '#e9d86a', '#a8c8a0'][k - 1];
      g.lineWidth = 2.5;
      g.beginPath();
      g.arc(W * x, H * y, s * (0.4 + k * 0.32), 0, 6.3);
      g.stroke();
    }
    g.fillStyle = col;
    ell(g, W * x, H * y, s * 0.45, s * 0.45);
  };
  for (const [x, y, s] of [[0.3, 0.12, 9], [0.42, 0.07, 7], [0.55, 0.14, 8], [0.68, 0.08, 7], [0.2, 0.3, 8], [0.33, 0.44, 11], [0.76, 0.26, 7], [0.14, 0.08, 6]]) star(x, y, s, '#fff2a8');
  star(0.88, 0.14, 19, '#f2b23c');
  g.fillStyle = '#1f3f8a';
  ell(g, W * 0.865, H * 0.13, 10, 11);
  // the hills, the village, the steeple
  g.fillStyle = '#24407a';
  poly(g, [0, H * 0.74, W * 0.3, H * 0.62, W * 0.55, H * 0.7, W * 0.8, H * 0.58, W, H * 0.66, W, H, 0, H]);
  g.fillStyle = '#16264e';
  poly(g, [W * 0.2, H, W * 0.3, H * 0.78, W * 0.7, H * 0.76, W, H * 0.82, W, H]);
  for (let k = 0; k < 9; k++) {
    const x = W * (0.34 + k * 0.07), y = H * (0.8 + (k % 3) * 0.04);
    g.fillStyle = '#22335e';
    g.fillRect(x, y, W * 0.05, H * 0.07);
    g.fillStyle = '#f2c84a';
    g.fillRect(x + W * 0.015, y + H * 0.025, W * 0.014, H * 0.02);
  }
  g.fillStyle = '#16264e';
  poly(g, [W * 0.535, H * 0.84, W * 0.55, H * 0.6, W * 0.565, H * 0.84]);
  // the cypress, like a black flame
  g.fillStyle = '#10201c';
  g.beginPath();
  g.moveTo(W * 0.1, H);
  g.bezierCurveTo(W * 0.04, H * 0.7, W * 0.16, H * 0.5, W * 0.15, H * 0.14);
  g.bezierCurveTo(W * 0.2, H * 0.5, W * 0.27, H * 0.74, W * 0.25, H);
  g.fill();
  stroke(g, 2, '#2f5a3c', [W * 0.13, H * 0.9, W * 0.16, H * 0.6, W * 0.155, H * 0.3]);
}

function paintScream(g, W, H) {
  // the sky, in bands that will not lie flat
  for (let k = 0; k < 9; k++) {
    g.strokeStyle = ['#e2562a', '#f29a2c', '#f2c84a', '#d9401c', '#f2a03c'][k % 5];
    g.lineWidth = H * 0.05;
    g.beginPath();
    g.moveTo(-10, H * (0.03 + k * 0.042));
    g.bezierCurveTo(W * 0.3, H * (-0.01 + k * 0.042), W * 0.6, H * (0.08 + k * 0.042), W + 10, H * (0.02 + k * 0.042));
    g.stroke();
  }
  // the fjord and the far shore
  g.fillStyle = '#2f4f8a';
  g.fillRect(0, H * 0.38, W, H * 0.3);
  for (let k = 0; k < 4; k++) {
    g.strokeStyle = k % 2 ? '#1f2f5e' : '#5f86b8';
    g.lineWidth = H * 0.03;
    g.beginPath();
    g.moveTo(W * 0.5, H * (0.44 + k * 0.05));
    g.bezierCurveTo(W * 0.7, H * (0.4 + k * 0.05), W * 0.8, H * (0.56 + k * 0.04), W + 10, H * (0.48 + k * 0.05));
    g.stroke();
  }
  g.fillStyle = '#2a3a2a';
  poly(g, [W * 0.55, H * 0.62, W, H * 0.5, W, H, W * 0.75, H]);
  // the bridge, running away to the left, and the two who keep walking
  g.fillStyle = '#8a5a34';
  poly(g, [0, H * 0.4, W * 0.62, H, 0, H]);
  for (const t of [0, 0.3, 0.62]) stroke(g, H * 0.014, '#4a2c1a', [0, H * (0.4 - t * 0.12) + H * t * 0.5, W * (0.62 + t * 0.3), H]);
  stroke(g, H * 0.02, '#c98a4a', [0, H * 0.36, W * 0.72, H]);
  g.fillStyle = '#1a1a26';
  g.fillRect(W * 0.05, H * 0.3, W * 0.035, H * 0.12);
  g.fillRect(W * 0.11, H * 0.31, W * 0.035, H * 0.12);
  // the figure
  g.fillStyle = '#20202c';
  g.beginPath();
  g.moveTo(W * 0.38, H);
  g.bezierCurveTo(W * 0.36, H * 0.8, W * 0.5, H * 0.74, W * 0.5, H * 0.62);
  g.bezierCurveTo(W * 0.62, H * 0.74, W * 0.72, H * 0.84, W * 0.66, H);
  g.fill();
  g.fillStyle = '#e9d8a8';
  g.beginPath();
  g.ellipse(W * 0.52, H * 0.55, W * 0.085, H * 0.1, 0, 0, 6.3);
  g.fill();
  poly(g, [W * 0.46, H * 0.62, W * 0.58, H * 0.62, W * 0.55, H * 0.7, W * 0.49, H * 0.7]);
  // hands to the face
  ell(g, W * 0.42, H * 0.6, W * 0.03, H * 0.075, 0.2);
  ell(g, W * 0.62, H * 0.6, W * 0.03, H * 0.075, -0.2);
  g.fillStyle = '#2a2018';
  ell(g, W * 0.49, H * 0.53, W * 0.016, H * 0.014);
  ell(g, W * 0.55, H * 0.53, W * 0.016, H * 0.014);
  ell(g, W * 0.52, H * 0.6, W * 0.022, H * 0.036);
}

function paintKiss(g, W, H) {
  g.fillStyle = '#7a5a1c';
  g.fillRect(0, 0, W, H);
  const r = rng(77);
  for (let k = 0; k < 500; k++) {
    g.fillStyle = `rgba(${200 + r() * 50},${160 + r() * 50},${40 + r() * 40},${0.25 + r() * 0.4})`;
    g.fillRect(r() * W, r() * H, 2 + r() * 2, 2 + r() * 2);
  }
  // the meadow they kneel on, all flowers
  g.fillStyle = '#3f7a3c';
  g.beginPath();
  g.moveTo(0, H);
  g.lineTo(0, H * 0.82);
  g.bezierCurveTo(W * 0.3, H * 0.74, W * 0.6, H * 0.8, W * 0.8, H * 0.9);
  g.lineTo(W * 0.8, H);
  g.fill();
  for (let k = 0; k < 70; k++) {
    g.fillStyle = ['#e9d86a', '#d94f6a', '#8f6ad9', '#f2f2e6', '#e98a2c'][(r() * 5) | 0];
    ell(g, r() * W * 0.78, H * (0.8 + r() * 0.2), 3, 3);
  }
  // the one golden shape they make
  g.fillStyle = '#e2b53a';
  g.beginPath();
  g.moveTo(W * 0.3, H * 0.9);
  g.bezierCurveTo(W * 0.2, H * 0.5, W * 0.34, H * 0.16, W * 0.52, H * 0.1);
  g.bezierCurveTo(W * 0.76, H * 0.14, W * 0.8, H * 0.5, W * 0.7, H * 0.92);
  g.closePath();
  g.fill();
  // his side: black and white oblongs. Hers: rounds of colour.
  for (let k = 0; k < 26; k++) {
    g.fillStyle = k % 3 ? '#1b1a1e' : '#f2efe2';
    g.fillRect(W * (0.3 + r() * 0.18), H * (0.24 + r() * 0.5), W * 0.03, H * 0.045);
  }
  for (let k = 0; k < 30; k++) {
    g.fillStyle = ['#d94f3a', '#3f7ac9', '#8f4fa8', '#f2efe2', '#3f9a5a'][(r() * 5) | 0];
    const x = W * (0.52 + r() * 0.17), y = H * (0.36 + r() * 0.5);
    ell(g, x, y, W * 0.022, W * 0.022);
    g.fillStyle = '#e2b53a';
    ell(g, x, y, W * 0.008, W * 0.008);
  }
  // his head, bent over; her face, turned up and level, eyes closed
  g.fillStyle = '#2a1c14';
  ell(g, W * 0.49, H * 0.17, W * 0.085, H * 0.07, -0.3);
  g.fillStyle = '#c99a72';
  ell(g, W * 0.5, H * 0.21, W * 0.05, H * 0.04, -0.3);
  g.fillStyle = '#f0d8bc';
  ell(g, W * 0.58, H * 0.26, W * 0.07, H * 0.05, 0.25);
  stroke(g, 1.6, '#6a4a34', [W * 0.56, H * 0.25, W * 0.6, H * 0.262]);
  g.fillStyle = '#b8473a';
  ell(g, W * 0.6, H * 0.285, W * 0.014, H * 0.007);
  g.fillStyle = '#c9622c';
  ell(g, W * 0.64, H * 0.22, W * 0.06, H * 0.05, 0.3);
  for (let k = 0; k < 7; k++) {
    g.fillStyle = ['#d94f6a', '#3f7ac9', '#f2f2e6'][k % 3];
    ell(g, W * (0.6 + r() * 0.09), H * (0.19 + r() * 0.06), 3, 3);
  }
  // her hand at his neck, her feet over the edge of the flowers
  g.fillStyle = '#f0d8bc';
  ell(g, W * 0.46, H * 0.27, W * 0.03, H * 0.022, 0.6);
  ell(g, W * 0.68, H * 0.93, W * 0.03, H * 0.022);
}

function paintGrid(g, W, H) {
  g.fillStyle = '#f2efe6';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#d3231c';
  g.fillRect(W * 0.3, 0, W * 0.7, H * 0.62);
  g.fillStyle = '#1f3f9a';
  g.fillRect(0, H * 0.72, W * 0.3, H * 0.28);
  g.fillStyle = '#f2c21c';
  g.fillRect(W * 0.86, H * 0.86, W * 0.14, H * 0.14);
  g.fillStyle = '#15151a';
  const t = W * 0.035;
  g.fillRect(W * 0.3 - t / 2, 0, t, H);
  g.fillRect(0, H * 0.62 - t / 2, W, t);
  g.fillRect(0, H * 0.26 - t / 2, W * 0.3, t);
  g.fillRect(0, H * 0.72 - t / 2, W * 0.3, t);
  g.fillRect(W * 0.86 - t / 2, H * 0.62, t, H * 0.38);
  g.fillRect(W * 0.86, H * 0.86 - t / 2, W * 0.14, t);
}

function paintWave(g, W, H) {
  g.fillStyle = '#eadcb8';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#b9b29a';
  g.fillRect(0, 0, W, H * 0.3);
  g.fillStyle = '#eadcb8';
  ell(g, W * 0.6, H * 0.3, W * 0.5, H * 0.12);
  // the mountain, small, a long way off
  g.fillStyle = '#3f5f8a';
  poly(g, [W * 0.52, H * 0.7, W * 0.62, H * 0.5, W * 0.72, H * 0.7]);
  g.fillStyle = '#f6f2e6';
  poly(g, [W * 0.595, H * 0.555, W * 0.62, H * 0.5, W * 0.645, H * 0.555, W * 0.63, H * 0.57, W * 0.62, H * 0.555, W * 0.608, H * 0.57]);
  // the sea
  g.fillStyle = '#1f3f72';
  g.beginPath();
  g.moveTo(0, H);
  g.lineTo(0, H * 0.62);
  g.bezierCurveTo(W * 0.3, H * 0.9, W * 0.6, H * 0.6, W, H * 0.78);
  g.lineTo(W, H);
  g.fill();
  // the wave: rearing up on the left, curling over to the right
  g.fillStyle = '#24508f';
  g.beginPath();
  g.moveTo(0, H);
  g.lineTo(0, H * 0.3);
  g.bezierCurveTo(W * 0.14, H * 0.02, W * 0.5, H * 0.02, W * 0.58, H * 0.3);
  g.bezierCurveTo(W * 0.42, H * 0.2, W * 0.3, H * 0.34, W * 0.34, H * 0.6);
  g.bezierCurveTo(W * 0.36, H * 0.8, W * 0.5, H * 0.9, W * 0.5, H);
  g.fill();
  for (let k = 0; k < 5; k++) {
    g.strokeStyle = '#8fb0d6';
    g.lineWidth = 2.5;
    g.beginPath();
    g.moveTo(W * (0.03 + k * 0.045), H * 0.95);
    g.bezierCurveTo(W * (0.02 + k * 0.05), H * 0.5, W * (0.12 + k * 0.05), H * (0.2 + k * 0.03), W * (0.3 + k * 0.04), H * (0.14 + k * 0.035));
    g.stroke();
  }
  // the foam, and its claws
  g.fillStyle = '#f6f2e6';
  g.beginPath();
  g.moveTo(0, H * 0.32);
  g.bezierCurveTo(W * 0.14, H * 0.0, W * 0.5, H * 0.0, W * 0.6, H * 0.32);
  g.bezierCurveTo(W * 0.5, H * 0.12, W * 0.2, H * 0.1, 0, H * 0.4);
  g.fill();
  for (let k = 0; k < 9; k++) {
    const a = 0.2 + k * 0.33, x = W * (0.36 + 0.22 * Math.cos(a) * 0.9), y = H * (0.2 + 0.1 * Math.sin(a));
    ell(g, x + W * 0.05, y + H * 0.02, W * 0.035, H * 0.03, a);
    for (let c = 0; c < 3; c++) ell(g, x + W * (0.07 + c * 0.012), y + H * (0.06 + c * 0.02), W * 0.009, H * 0.014);
  }
  // the boats, low in the trough
  g.fillStyle = '#e2c88a';
  for (const [x, y, rot] of [[0.56, 0.84, -0.15], [0.84, 0.74, 0.1]]) {
    g.save();
    g.translate(W * x, H * y);
    g.rotate(rot);
    g.beginPath();
    g.ellipse(0, 0, W * 0.15, H * 0.035, 0, 0, Math.PI);
    g.fill();
    g.restore();
  }
  // the cartouche
  g.fillStyle = '#f6f2e6';
  g.fillRect(W * 0.05, H * 0.05, W * 0.05, H * 0.2);
  g.fillStyle = '#2a2a3a';
  for (let k = 0; k < 6; k++) g.fillRect(W * 0.062, H * (0.065 + k * 0.03), W * 0.026, H * 0.016);
}

function paintGothic(g, W, H) {
  g.fillStyle = '#b9d0e2';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#5f8a4f';
  for (const x of [0.06, 0.18, 0.9]) ell(g, W * x, H * 0.3, W * 0.1, H * 0.09);
  // the house, and the window the picture is named for
  g.fillStyle = '#efe9d9';
  poly(g, [W * 0.2, H * 0.48, W * 0.5, H * 0.1, W * 0.8, H * 0.48]);
  g.fillRect(W * 0.2, H * 0.44, W * 0.6, H * 0.3);
  g.fillStyle = '#8a8478';
  poly(g, [W * 0.16, H * 0.48, W * 0.5, H * 0.07, W * 0.84, H * 0.48, W * 0.8, H * 0.48, W * 0.5, H * 0.13, W * 0.2, H * 0.48]);
  g.fillStyle = '#3a4a5a';
  g.beginPath();
  g.moveTo(W * 0.45, H * 0.42);
  g.lineTo(W * 0.45, H * 0.27);
  g.quadraticCurveTo(W * 0.5, H * 0.17, W * 0.55, H * 0.27);
  g.lineTo(W * 0.55, H * 0.42);
  g.fill();
  stroke(g, 1.5, '#efe9d9', [W * 0.5, H * 0.2, W * 0.5, H * 0.42]);
  stroke(g, 1.5, '#efe9d9', [W * 0.45, H * 0.32, W * 0.55, H * 0.32]);
  // her: hair pulled back, a brown apron, a cameo at the collar
  g.fillStyle = '#4a3424';
  poly(g, [W * 0.04, H, W * 0.1, H * 0.66, W * 0.42, H * 0.66, W * 0.46, H]);
  g.fillStyle = '#1b1a1e';
  poly(g, [W * 0.14, H * 0.66, W * 0.38, H * 0.66, W * 0.3, H * 0.74, W * 0.22, H * 0.74]);
  g.fillStyle = '#efe9d9';
  poly(g, [W * 0.2, H * 0.64, W * 0.32, H * 0.64, W * 0.26, H * 0.7]);
  g.fillStyle = '#c9622c';
  ell(g, W * 0.26, H * 0.675, W * 0.014, H * 0.012);
  g.fillStyle = '#e6c3a0';
  ell(g, W * 0.26, H * 0.5, W * 0.085, H * 0.13);
  g.fillStyle = '#b9965a';
  ell(g, W * 0.26, H * 0.39, W * 0.085, H * 0.04);
  // him: bald, round glasses, a dark jacket over overalls
  g.fillStyle = '#1b1a1e';
  poly(g, [W * 0.5, H, W * 0.54, H * 0.62, W * 0.9, H * 0.62, W * 0.98, H]);
  g.fillStyle = '#3f5a7a';
  poly(g, [W * 0.63, H, W * 0.64, H * 0.7, W * 0.8, H * 0.7, W * 0.82, H]);
  g.fillStyle = '#efe9d9';
  poly(g, [W * 0.66, H * 0.6, W * 0.78, H * 0.6, W * 0.76, H * 0.7, W * 0.68, H * 0.7]);
  g.fillStyle = '#e6c3a0';
  ell(g, W * 0.72, H * 0.42, W * 0.085, H * 0.155);
  g.strokeStyle = '#3a3a3a';
  g.lineWidth = 1.6;
  for (const sx of [-1, 1]) {
    g.beginPath();
    g.arc(W * (0.72 + sx * 0.04), H * 0.41, W * 0.028, 0, 6.3);
    g.stroke();
  }
  stroke(g, 2, '#7a4a3a', [W * 0.69, H * 0.5, W * 0.75, H * 0.5]);
  stroke(g, 2, '#7a4a3a', [W * 0.23, H * 0.56, W * 0.29, H * 0.56]);
  g.fillStyle = '#2a2018';
  for (const x of [0.225, 0.295]) ell(g, W * x, H * 0.49, W * 0.012, H * 0.008);
  for (const x of [0.68, 0.76]) ell(g, W * x, H * 0.41, W * 0.01, H * 0.007);
  // the pitchfork, held like a verdict
  stroke(g, W * 0.018, '#6a4a30', [W * 0.5, H, W * 0.5, H * 0.56]);
  for (const dx of [-0.045, 0, 0.045]) stroke(g, W * 0.012, '#3a3a40', [W * (0.5 + dx), H * 0.6, W * (0.5 + dx), H * 0.34]);
  stroke(g, W * 0.012, '#3a3a40', [W * 0.455, H * 0.6, W * 0.545, H * 0.6]);
  g.fillStyle = '#e6c3a0';
  ell(g, W * 0.5, H * 0.8, W * 0.04, H * 0.03);
}

function paintWhistler(g, W, H) {
  g.fillStyle = '#8f8f88';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#5a4a3a';
  g.fillRect(0, H * 0.82, W, H * 0.18);
  g.fillStyle = '#6f6f68';
  g.fillRect(0, H * 0.78, W, H * 0.04);
  // the curtain, with its little flowers
  g.fillStyle = '#23242c';
  g.fillRect(0, 0, W * 0.22, H * 0.86);
  const r = rng(13);
  g.fillStyle = '#8f8a9a';
  for (let k = 0; k < 40; k++) ell(g, r() * W * 0.2 + 3, r() * H * 0.82, 2, 2);
  // the picture on the wall
  g.fillStyle = '#1b1a1e';
  g.fillRect(W * 0.36, H * 0.14, W * 0.24, H * 0.26);
  g.fillStyle = '#cfcabb';
  g.fillRect(W * 0.385, H * 0.175, W * 0.19, H * 0.19);
  g.fillStyle = '#8f8f88';
  g.fillRect(W * 0.42, H * 0.22, W * 0.12, H * 0.1);
  // the sitter, in profile, facing left: one black shape
  g.fillStyle = '#131318';
  g.beginPath();
  g.moveTo(W * 0.56, H * 0.36);
  g.bezierCurveTo(W * 0.74, H * 0.36, W * 0.8, H * 0.6, W * 0.86, H * 0.95);
  g.lineTo(W * 0.36, H * 0.95);
  g.bezierCurveTo(W * 0.42, H * 0.74, W * 0.56, H * 0.66, W * 0.56, H * 0.36);
  g.fill();
  // the chair's back leg, the footstool
  stroke(g, 3, '#3a2a1c', [W * 0.84, H * 0.7, W * 0.87, H * 0.97]);
  g.fillStyle = '#3a2a1c';
  g.fillRect(W * 0.26, H * 0.9, W * 0.16, H * 0.06);
  // the face and the lace cap, its ties hanging
  g.fillStyle = '#e2c8a8';
  ell(g, W * 0.6, H * 0.27, W * 0.045, H * 0.085);
  poly(g, [W * 0.555, H * 0.27, W * 0.535, H * 0.3, W * 0.56, H * 0.31]);
  g.fillStyle = '#f2efe6';
  ell(g, W * 0.64, H * 0.24, W * 0.05, H * 0.08);
  poly(g, [W * 0.63, H * 0.3, W * 0.67, H * 0.3, W * 0.66, H * 0.48, W * 0.62, H * 0.46]);
  g.fillStyle = '#2a2018';
  ell(g, W * 0.585, H * 0.255, W * 0.007, H * 0.006);
  // hands in her lap, on a handkerchief
  g.fillStyle = '#f2efe6';
  ell(g, W * 0.5, H * 0.62, W * 0.06, H * 0.035);
  g.fillStyle = '#e2c8a8';
  ell(g, W * 0.5, H * 0.61, W * 0.035, H * 0.02);
}

function paintSunflowers(g, W, H) {
  g.fillStyle = '#e9c93c';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#d9a82c';
  g.fillRect(0, H * 0.74, W, H * 0.26);
  stroke(g, 2, '#3f5a8a', [0, H * 0.74, W, H * 0.74]);
  // the vase, two yellows, signed
  g.fillStyle = '#f2df7a';
  poly(g, [W * 0.36, H * 0.74, W * 0.34, H * 0.62, W * 0.66, H * 0.62, W * 0.64, H * 0.74]);
  g.fillStyle = '#d9a82c';
  g.beginPath();
  g.moveTo(W * 0.36, H * 0.74);
  g.bezierCurveTo(W * 0.3, H * 0.94, W * 0.7, H * 0.94, W * 0.64, H * 0.74);
  g.fill();
  stroke(g, 1.5, '#3f5a8a', [W * 0.43, H * 0.8, W * 0.5, H * 0.79, W * 0.56, H * 0.81]);
  // a dozen or so heads, some full, some gone to seed
  const heads = [[0.5, 0.2, 1], [0.28, 0.3, 1], [0.72, 0.28, 0], [0.4, 0.42, 0], [0.62, 0.44, 1], [0.2, 0.5, 0], [0.8, 0.5, 1], [0.5, 0.56, 1], [0.33, 0.6, 1], [0.68, 0.62, 0]];
  for (const [hx, hy, full] of heads) {
    stroke(g, W * 0.02, '#5f7a2a', [W * 0.5, H * 0.64, W * hx, H * hy]);
    g.save();
    g.translate(W * hx, H * hy);
    g.fillStyle = full ? '#e98a1c' : '#c9a02c';
    const n = full ? 14 : 9;
    for (let k = 0; k < n; k++) {
      g.save();
      g.rotate((k / n) * Math.PI * 2);
      ell(g, 0, -W * (full ? 0.09 : 0.065), W * 0.022, W * (full ? 0.05 : 0.03));
      g.restore();
    }
    g.fillStyle = full ? '#6a4a1c' : '#8a7a2c';
    ell(g, 0, 0, W * (full ? 0.055 : 0.07), W * (full ? 0.055 : 0.07));
    g.fillStyle = '#3f5a2a';
    ell(g, 0, 0, W * 0.02, W * 0.02);
    g.restore();
  }
}

// the tapestry: mille-fleurs, three cats, and their quarry
function paintTapestry(g, W, H) {
  g.fillStyle = '#7a1f26';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#c9a23f';
  g.fillRect(W * 0.03, H * 0.022, W * 0.94, H * 0.956);
  g.fillStyle = '#1f3b3a';
  g.fillRect(W * 0.07, H * 0.05, W * 0.86, H * 0.9);
  const r = rng(7);
  for (let k = 0; k < 150; k++) {
    const x = W * (0.09 + r() * 0.82), y = H * (0.07 + r() * 0.86);
    g.fillStyle = '#2f5a45';
    g.fillRect(x - 1, y, 2, 9);
    g.fillStyle = ['#e9d7a0', '#d98a8a', '#9ab7d9', '#e9b44a'][(r() * 4) | 0];
    for (let p = 0; p < 5; p++) ell(g, x + Math.cos(p * 1.257) * 3.4, y + Math.sin(p * 1.257) * 3.4, 2.4, 2.4);
  }
  // a tree, because there is always a tree
  g.fillStyle = '#5a3d22';
  g.fillRect(W * 0.2, H * 0.3, W * 0.035, H * 0.3);
  g.fillStyle = '#3f7a4f';
  for (const [dx, dy] of [[0, 0], [-0.07, 0.04], [0.07, 0.04], [0, 0.08]]) ell(g, W * (0.218 + dx), H * (0.27 + dy), W * 0.09, H * 0.05);
  // the quarry, radiant
  g.strokeStyle = '#e9b44a';
  g.lineWidth = 2.5;
  for (let k = 0; k < 12; k++) {
    g.beginPath();
    g.moveTo(W * 0.74 + Math.cos(k * 0.524) * W * 0.06, H * 0.17 + Math.sin(k * 0.524) * W * 0.06);
    g.lineTo(W * 0.74 + Math.cos(k * 0.524) * W * 0.1, H * 0.17 + Math.sin(k * 0.524) * W * 0.1);
    g.stroke();
  }
  g.fillStyle = '#e02a20';
  ell(g, W * 0.74, H * 0.17, W * 0.045, W * 0.045);
  // the hunt: heraldic cats, rampant
  const cat = (cx, cy, s, col) => {
    g.save();
    g.translate(W * cx, H * cy);
    g.rotate(-0.5);
    g.fillStyle = col;
    ell(g, 0, 0, 44 * s, 20 * s);
    ell(g, 46 * s, -12 * s, 17 * s, 15 * s);
    poly(g, [38 * s, -24 * s, 42 * s, -40 * s, 50 * s, -25 * s]);
    poly(g, [50 * s, -25 * s, 58 * s, -40 * s, 60 * s, -22 * s]);
    g.fillRect(22 * s, 6 * s, 9 * s, 34 * s);
    g.fillRect(34 * s, 2 * s, 9 * s, 30 * s);
    g.fillRect(-34 * s, 8 * s, 9 * s, 30 * s);
    g.fillRect(-22 * s, 10 * s, 9 * s, 32 * s);
    g.strokeStyle = col;
    g.lineWidth = 8 * s;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(-42 * s, -4 * s);
    g.bezierCurveTo(-76 * s, -10 * s, -62 * s, -52 * s, -84 * s, -50 * s);
    g.stroke();
    g.fillStyle = '#1f3b3a';
    ell(g, 50 * s, -14 * s, 2.6 * s, 2.6 * s);
    g.restore();
  };
  cat(0.6, 0.42, 1.05, '#e9dcc0');
  cat(0.36, 0.62, 0.95, '#d9944a');
  cat(0.62, 0.8, 0.85, '#9aa3ad');
  g.fillStyle = '#e9dcc0';
  g.fillRect(W * 0.2, H * 0.895, W * 0.6, H * 0.04);
  g.fillStyle = '#7a1f26';
  g.font = `bold ${Math.round(H * 0.028)}px Georgia, serif`;
  g.textAlign = 'center';
  g.fillText('VENATIO PVNCTI RVBRI', W * 0.5, H * 0.925);
  // the weave
  g.fillStyle = 'rgba(0,0,0,0.07)';
  for (let y = 0; y < H; y += 4) g.fillRect(0, y, W, 1.5);
}

function paintRexCard(g, W, H) {
  g.fillStyle = '#d96a2a';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#f2e6c8';
  ell(g, W * 0.5, H * 0.45, W * 0.34, W * 0.34);
  g.fillStyle = '#231a14';
  ell(g, W * 0.52, H * 0.5, W * 0.17, H * 0.07, -0.2);
  ell(g, W * 0.3, H * 0.36, W * 0.1, H * 0.05);
  poly(g, [W * 0.26, H * 0.33, W * 0.28, H * 0.26, W * 0.32, H * 0.32]);
  poly(g, [W * 0.32, H * 0.32, W * 0.36, H * 0.26, W * 0.38, H * 0.33]);
  poly(g, [W * 0.66, H * 0.48, W * 0.9, H * 0.42, W * 0.68, H * 0.54]);
  g.fillRect(W * 0.47, H * 0.52, W * 0.035, H * 0.16);
  g.fillRect(W * 0.55, H * 0.52, W * 0.035, H * 0.16);
  g.fillStyle = '#231a14';
  g.font = `bold ${Math.round(H * 0.1)}px Georgia, serif`;
  g.textAlign = 'center';
  g.fillText('FELIS REX', W * 0.5, H * 0.9);
}

// a few lines of very small type
function paintLabel(g, W, H, title, lines, ink = '#2b2118', paper = '#efe6cf') {
  g.fillStyle = paper;
  g.fillRect(0, 0, W, H);
  g.fillStyle = ink;
  g.textAlign = 'center';
  g.font = `bold ${Math.round(H * 0.26)}px Georgia, serif`;
  g.fillText(title, W / 2, H * 0.36, W * 0.92);
  g.font = `${Math.round(H * 0.15)}px Georgia, serif`;
  lines.forEach((t, k) => g.fillText(t, W / 2, H * (0.6 + k * 0.2), W * 0.92));
}

// ------------------------------------------------------------- the library ---
// shared textures and the materials main.js never mutates (it recolours
// shards and plain-box materials, so those are always made fresh)
let L = null;
function lib(kit) {
  if (L) return L;
  const { THREE, toonMat, makeCanvas } = kit;
  const phong = (color, shininess, specular = 0xffffff, extra = {}) => new THREE.MeshPhongMaterial({ color, shininess, specular, ...extra });
  const pic = (w, h, fn) => makeCanvas(w, h, (g) => fn(g, w, h));
  L = {
    stone: toonMat(0xd9d2c2),
    stoneShade: toonMat(0xb7ae9c),
    walnut: toonMat(0x4a3024),
    gilt: phong(0xc79a35, 60, 0xffe9a8),
    giltPale: phong(0xe9cb6a, 80, 0xfff3c8),
    brass: phong(0xc9a542, 80, 0xfff0b0),
    bone: toonMat(0xe9dec2),
    boneShade: toonMat(0xc7b792),
    steel: phong(0xaab2bd, 120, 0xe8eef5),
    iron: phong(0x3f3d42, 50, 0x8f9aa8),
    velvet: toonMat(0x8f1d2a),
    black: toonMat(0x1b1a1e),
    dark: toonMat(0x14110f),
    glow: new THREE.MeshBasicMaterial({ color: 0xfff0d2 }),
    marble: toonMat(0xf1eee6),
    terracotta: toonMat(0xb5673f),
    jade: phong(0x4fa67c, 110, 0xdff5e8),
    gold: phong(0xe0b03a, 110, 0xfff0b0),
    enamel: phong(0x1f3f9a, 130),
    // what every fused body is drawn with: colour rides the vertices
    vtoon: toonMat(0xffffff, { vertexColors: true }),
    vphong: new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 70, specular: 0x8f8f80 }),
    pictures: {
      80: pic(256, 336, paintMona),
      81: pic(256, 320, paintPortrait),
      82: pic(224, 272, paintPearl),
      83: pic(384, 248, paintBirth),
      84: pic(384, 304, paintStarry),
      85: pic(224, 288, paintScream),
      86: pic(256, 256, paintKiss),
      87: pic(256, 256, paintGrid),
      88: pic(256, 256, paintRedDot),
      89: pic(352, 248, paintWave),
      90: pic(224, 280, paintGothic),
      91: pic(320, 264, paintWhistler),
      93: pic(200, 260, paintSunflowers),
    },
  };
  L.cards = [L.pictures[80], L.pictures[84], L.pictures[85], L.pictures[89], L.pictures[81], pic(160, 224, paintRexCard)];
  L.streak = makeCanvas(64, 64, (g) => {
    const s = g.createLinearGradient(0, 64, 64, 0);
    s.addColorStop(0.3, 'rgba(255,255,255,0)');
    s.addColorStop(0.42, 'rgba(255,255,255,0.55)');
    s.addColorStop(0.5, 'rgba(255,255,255,0.08)');
    s.addColorStop(0.58, 'rgba(255,255,255,0.3)');
    s.addColorStop(0.68, 'rgba(255,255,255,0)');
    g.fillStyle = s;
    g.fillRect(0, 0, 64, 64);
  });
  return L;
}
const glassMat = (kit, opacity = 0.2) => new kit.THREE.MeshPhongMaterial({
  color: 0xcfe8ec, shininess: 220, specular: 0xffffff, transparent: true, opacity, depthWrite: false, side: kit.THREE.DoubleSide,
});

// geometry helpers
const facet = (geo) => {
  const g = geo.toNonIndexed();
  g.computeVertexNormals();
  return g;
};
function add(THREE, m, geo, mat, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(geo, mat);
  o.position.set(x, y, z);
  m.add(o);
  return o;
}

// ------------------------------------------------------------------ labels ---
// Every card, plaque and sign is one cell of one texture: [title, lines,
// style]. One material for all of them, and the ones on the walls are one
// mesh.
const LABELS = {
  mona: ['Mona Lisa', ['oil on poplar · c. 1503', 'priceless; please do not ask'], 'card'],
  cat: ['Portrait of a Cat, Smiling', ['oil on poplar · artist unknown', 'the smile is also unexplained'], 'card'],
  pearl: ['Girl with a Pearl Earring', ['oil on canvas · c. 1665'], 'card'],
  birth: ['The Birth of Venus', ['tempera on canvas · c. 1485'], 'card'],
  starry: ['The Starry Night', ['oil on canvas · 1889'], 'card'],
  scream: ['The Scream', ['tempera and crayon · 1893', 'quiet, please'], 'card'],
  kiss: ['The Kiss', ['oil and gold leaf · 1908'], 'card'],
  grid: ['Composition', ['after Mondrian', 'this way up'], 'card'],
  reddot: ['Untitled (Red Dot)', ['acrylic on canvas · 1974', 'please do not chase'], 'card'],
  wave: ['The Great Wave', ['woodblock print · c. 1831', 'one of several thousand'], 'card'],
  gothic: ['American Gothic', ['oil on beaverboard · 1930'], 'card'],
  whistler: ['Arrangement in Grey', ['and Black No. 1', "(the artist's mother)"], 'card'],
  sunflowers: ['Sunflowers', ['1888 · awaiting a hook'], 'card'],
  give: ['DONATIONS', ['suggested: generous'], 'card'],
  notart: ['NOT AN EXHIBIT', ['fire extinguisher', 'please do not admire'], 'card'],
  david: ['DAVID', ['marble · 1504 · fig leaf later'], 'brass'],
  thinker: ['THE THINKER', ['bronze · still thinking'], 'brass'],
  venus: ['VENUS DE MILO', ['arms missing on arrival'], 'brass'],
  disco: ['DISCOBOLUS', ['Roman copy · do not catch'], 'brass'],
  victory: ['WINGED VICTORY', ['Samothrace · head not recovered'], 'brass'],
  nefertiti: ['NEFERTITI', ['limestone · c. 1345 BC'], 'brass'],
  rosetta: ['THE ROSETTA STONE', ['196 BC · previously broken'], 'brass'],
  sphinx: ['SPHINX', ['red granite · nose attached'], 'brass'],
  urn: ['CANOPIC URN', ['sealed · contents undisturbed'], 'brass'],
  jade: ['JADE CAT', ['Han dynasty'], 'brass'],
  meteorite: ['IRON METEORITE', ['61 kg · do not lift'], 'brass'],
  geode: ['AMETHYST GEODE', ['cathedral cut'], 'brass'],
  egg: ['IMPERIAL EGG', ['enamel and gold · surprise missing'], 'brass'],
  crown: ['CORONATION CROWN', ['of a duchy since dissolved'], 'brass'],
  touch: ['PLEASE', ['do not touch'], 'brass'],
  rex: ['FELIS REX', ['Late Cretaceous · identification disputed'], 'brass'],
  attendants: ['EIGHT ATTENDANTS', ['terracotta · in procession'], 'brass'],
  moai: ['MOAI', ['Rapa Nui · hat separate'], 'brass'],
  warriors: ['WARRIORS', ['terracotta · Qin dynasty', 'at attention'], 'brass'],
  shop: ['GIFT SHOP', ['exit through here', 'all breakages must be paid for'], 'sign'],
  cloak: ['CLOAKROOM', ["coats left at owner's risk"], 'sign'],
};
ROOMS.forEach((r, i) => {
  if (i > 0) LABELS[`left${i}`] = [`‹  ${ROOMS[i - 1].name}`, [], 'arrow'];
  if (i < ROOMS.length - 1) LABELS[`right${i}`] = [`${ROOMS[i + 1].name}  ›`, [], 'arrow'];
});
const LABEL_STYLE = { card: ['#2b2118', '#efe6cf'], brass: ['#2a1d08', '#d2ad55'], sign: ['#efe6cf', '#2f5a4e'], arrow: ['#f2e6c0', '#3a2a1c'] };
function atlas(kit) {
  const lb = lib(kit);
  if (lb.atlas) return lb.atlas;
  const keys = Object.keys(LABELS);
  const cols = 8, cw = 256, ch = 128, rows = Math.ceil(keys.length / cols);
  const uv = {};
  const tex = kit.makeCanvas(cols * cw, rows * ch, (g) => {
    keys.forEach((k, i) => {
      const cx = (i % cols) * cw, cy = Math.floor(i / cols) * ch;
      const [title, lines, style] = LABELS[k];
      const [ink, paper] = LABEL_STYLE[style];
      g.save();
      g.translate(cx, cy);
      g.beginPath();
      g.rect(0, 0, cw, ch);
      g.clip();
      if (style === 'arrow') {
        g.fillStyle = paper;
        g.fillRect(0, 0, cw, ch);
        g.strokeStyle = '#c9a542';
        g.lineWidth = 6;
        g.strokeRect(5, 5, cw - 10, ch - 10);
        g.fillStyle = ink;
        g.textAlign = 'center';
        g.font = 'bold 34px Georgia, serif';
        g.fillText(title, cw / 2, ch * 0.6, cw * 0.86);
      } else {
        paintLabel(g, cw, ch, title, lines, ink, paper);
      }
      g.restore();
      uv[k] = [cx / (cols * cw), 1 - (cy + ch) / (rows * ch), (cx + cw) / (cols * cw), 1 - cy / (rows * ch)];
    });
  });
  lb.atlas = { uv, mat: kit.toonMat(0xffffff, { map: tex }) };
  return lb.atlas;
}
// a label's quad, facing -z (or along x: `yaw` turns it)
function labelGeo(kit, key, w, h, yaw = Math.PI) {
  const [u0, v0, u1, v1] = atlas(kit).uv[key] ?? atlas(kit).uv.touch;
  const geo = new kit.THREE.PlaneGeometry(w, h).toNonIndexed();
  const src = new kit.THREE.PlaneGeometry(w, h);
  // PlaneGeometry's own uvs are 0..1: squeeze them into the cell
  const a = geo.attributes.uv;
  for (let i = 0; i < a.count; i++) a.setXY(i, u0 + a.getX(i) * (u1 - u0), v0 + a.getY(i) * (v1 - v0));
  src.dispose();
  geo.rotateY(yaw);
  return geo;
}
// a label on a body (kept out of the fuse: it is textured)
function plaque(kit, m, key, w, h, x, y, z) {
  const p = new kit.THREE.Mesh(labelGeo(kit, key, w, h), atlas(kit).mat);
  p.position.set(x, y, z);
  m.add(p);
  return p;
}

// --------------------------------------------------------------- sculpture ---
// Primitives poured into one vertex-coloured geometry: a statue's limb, a
// plinth, a wall's worth of mouldings, each one draw call.
class Sculpt {
  constructor(THREE) {
    this.T = THREE;
    this.p = [];
    this.n = [];
    this.c = [];
    this.M = new THREE.Matrix4();
    this.col = new THREE.Color();
  }
  get count() { return this.p.length; }
  // an already-placed, non-indexed geometry
  push(g, color) {
    const col = color.isColor ? color : this.col.set(color);
    const pos = g.attributes.position.array, nor = g.attributes.normal.array;
    for (let i = 0; i < pos.length; i += 3) {
      this.p.push(pos[i], pos[i + 1], pos[i + 2]);
      this.n.push(nor[i], nor[i + 1], nor[i + 2]);
      this.c.push(col.r, col.g, col.b);
    }
    g.dispose();
    return this;
  }
  put(geo, color, x = 0, y = 0, z = 0, rot = null, scale = null) {
    const T = this.T;
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (g !== geo) geo.dispose();
    const q = new T.Quaternion();
    if (rot) q.setFromEuler(new T.Euler(rot[0], rot[1], rot[2]));
    this.M.compose(new T.Vector3(x, y, z), q, scale ? new T.Vector3(scale[0], scale[1], scale[2]) : new T.Vector3(1, 1, 1));
    g.applyMatrix4(this.M);
    return this.push(g, color);
  }
  box(w, h, d, color, x = 0, y = 0, z = 0, rot = null) { return this.put(new this.T.BoxGeometry(w, h, d), color, x, y, z, rot); }
  ball(r, color, x = 0, y = 0, z = 0, scale = null, rot = null, seg = 10) { return this.put(new this.T.SphereGeometry(r, seg, Math.max(5, seg - 3)), color, x, y, z, rot, scale); }
  cyl(rt, rb, h, color, x = 0, y = 0, z = 0, rot = null, seg = 10) { return this.put(new this.T.CylinderGeometry(rt, rb, h, seg), color, x, y, z, rot); }
  cone(r, h, color, x = 0, y = 0, z = 0, rot = null, seg = 6) { return this.put(new this.T.ConeGeometry(r, h, seg), color, x, y, z, rot); }
  // a limb from a to b, ra thick at a and rb at b, a joint at each end
  tube(a, b, ra, rb, color, seg = 7, joints = true) {
    const T = this.T;
    const A = new T.Vector3(a[0], a[1], a[2]), B = new T.Vector3(b[0], b[1], b[2]);
    const d = B.clone().sub(A), len = d.length();
    const q = new T.Quaternion().setFromUnitVectors(new T.Vector3(0, 1, 0), d.normalize());
    const g = new T.CylinderGeometry(rb, ra, len, seg).toNonIndexed();
    this.M.compose(A.add(B).multiplyScalar(0.5), q, new T.Vector3(1, 1, 1));
    g.applyMatrix4(this.M);
    this.push(g, color);
    if (joints) {
      this.ball(ra * 1.03, color, a[0], a[1], a[2], null, null, 7);
      this.ball(rb * 1.03, color, b[0], b[1], b[2], null, null, 7);
    }
    return this;
  }
  mesh(mat) {
    const T = this.T;
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new T.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new T.Float32BufferAttribute(this.c, 3));
    return new T.Mesh(g, mat);
  }
  // as a body: a Group holding the one mesh
  group(kit, shiny = false) {
    const m = new this.T.Group();
    if (this.count) m.add(this.mesh(shiny ? lib(kit).vphong : lib(kit).vtoon));
    return m;
  }
}
// Fuse a Group built from separate meshes: whatever is plain (one colour,
// opaque, no texture, not on the glow layer) is poured into one matte mesh
// and one shiny one. Textured faces, glass and lamps stay as they are.
function fuse(kit, root) {
  if (!root || !root.isGroup) return root;
  const { THREE } = kit;
  const lb = lib(kit);
  root.updateMatrixWorld(true);
  const matte = new Sculpt(THREE), shiny = new Sculpt(THREE);
  const gone = [];
  root.traverse((o) => {
    if (!o.isMesh || o.userData.keep) return;
    const mt = o.material;
    if (Array.isArray(mt) || mt.map || mt.transparent || mt.vertexColors || o.layers.mask !== 1 || !mt.color) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    if (!g.attributes.normal) g.computeVertexNormals();
    g.applyMatrix4(o.matrixWorld);
    (mt.isMeshPhongMaterial ? shiny : matte).push(g, mt.color);
    gone.push(o);
  });
  for (const o of gone) {
    o.parent.remove(o);
    o.geometry.dispose();
  }
  if (matte.count) root.add(matte.mesh(lb.vtoon));
  if (shiny.count) root.add(shiny.mesh(lb.vphong));
  return root;
}

// a chip of whatever broke: plain box or ball, fresh material (main.js
// copies the parent's colour onto it)
function shard(kit, b, color, glass = false, voice = null) {
  const { THREE } = kit;
  const m = new THREE.Group();
  if (voice) m.userData.voice = voice;
  const geo = b.shape === 1 ? new THREE.SphereGeometry(b.a, 8, 6) : new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2);
  add(THREE, m, geo, glass ? glassMat(kit, 0.35) : kit.toonMat(color));
  if (glass) m.userData.noShadow = true;
  return m;
}

// ------------------------------------------------------------------ bones ---
// The sim's bones are axis-aligned boxes in one compound; the drawing is
// freer than the collision. Each piece is drawn about its own box centre
// (so it is still the right thing in the right place once the skeleton
// has severed and the piece is tumbling alone), but long bones lean and
// ribs arc beyond their boxes to meet the neighbours while it stands.
function longBone(THREE, m, mat, len, r, lean = 0, dx = 0) {
  const grp = new THREE.Group();
  add(THREE, grp, new THREE.CylinderGeometry(r * 0.55, r * 0.66, len, 7), mat);
  for (const s of [-1, 1]) {
    const k = add(THREE, grp, new THREE.SphereGeometry(r, 8, 6), mat, 0, s * len * 0.5, 0);
    k.scale.set(1.2, 0.8, 1.05);
  }
  grp.rotation.z = lean;
  grp.position.x = dx;
  m.add(grp);
}
// a run of vertebrae along x (or up y), each with its spine
function vertebrae(THREE, m, lb, half, r, vertical, spine = 1.5) {
  const n = Math.max(2, Math.round((half * 2) / (r * 1.25)));
  for (let k = 0; k < n; k++) {
    const t = (k / (n - 1)) * 2 - 1;
    const d = t * (half - r * 0.5);
    const v = add(THREE, m, new THREE.SphereGeometry(r, 7, 5), k % 2 ? lb.bone : lb.boneShade, vertical ? -Math.sin(t * 1.6) * r * 0.5 : d, vertical ? d : 0, 0);
    v.scale.set(vertical ? 1.05 : 0.7, vertical ? 0.7 : 1, 1);
    if (vertical) {
      add(THREE, m, new THREE.BoxGeometry(r * 1.2, r * 0.3, r * 0.3), lb.bone, r * 0.9 - Math.sin(t * 1.6) * r * 0.5, d, 0);
    } else {
      const sp = add(THREE, m, new THREE.BoxGeometry(r * 0.34, r * spine, r * 0.3), lb.bone, d + r * 0.2, r * (0.6 + spine * 0.5), 0);
      sp.rotation.z = -0.3;
    }
  }
}
function boneMesh(kit, b) {
  const { THREE } = kit;
  const lb = lib(kit);
  const m = new THREE.Group();
  const v = variant(b);
  if (v === 60) {
    // the skull, facing -x: deep snout, eye window, a jaw hinge, and the
    // two bony crests that started the argument about what it is
    const sk = new THREE.Group();
    const cran = add(THREE, sk, new THREE.SphereGeometry(0.075, 12, 9), lb.bone, 0.085, 0.005, 0);
    cran.scale.set(1.05, 1.0, 0.92);
    const snout = add(THREE, sk, new THREE.CylinderGeometry(0.04, 0.066, 0.24, 9), lb.bone, -0.07, -0.012, 0);
    snout.rotation.z = Math.PI / 2;
    snout.scale.set(1.05, 1, 0.82);
    for (const s of [-1, 1]) {
      add(THREE, sk, new THREE.SphereGeometry(0.027, 8, 6), lb.dark, 0.05, 0.022, s * 0.054);
      add(THREE, sk, new THREE.SphereGeometry(0.017, 7, 5), lb.dark, 0.112, -0.012, s * 0.058);
      add(THREE, sk, new THREE.SphereGeometry(0.01, 6, 5), lb.dark, -0.165, 0.02, s * 0.022);
      const crest = add(THREE, sk, new THREE.ConeGeometry(0.026, 0.075, 5), lb.bone, 0.1, 0.09, s * 0.042);
      crest.rotation.x = s * 0.22;
      for (let k = 0; k < 6; k++) {
        const tooth = add(THREE, sk, new THREE.ConeGeometry(0.0085, 0.034, 4), lb.bone, -0.175 + k * 0.034, -0.066, s * (0.024 + k * 0.004));
        tooth.rotation.x = Math.PI;
      }
    }
    sk.scale.setScalar(1.12);
    m.add(sk);
  } else if (v === 61) {
    const jaw = add(THREE, m, new THREE.CylinderGeometry(0.022, 0.046, 0.3, 7), lb.boneShade, 0.0, 0.004, 0);
    jaw.rotation.z = Math.PI / 2;
    jaw.scale.set(0.62, 1, 1.5);
    const hinge = add(THREE, m, new THREE.BoxGeometry(0.03, 0.07, 0.11), lb.boneShade, 0.15, 0.03, 0);
    hinge.rotation.z = -0.3;
    for (const s of [-1, 1]) for (let k = 0; k < 5; k++) add(THREE, m, new THREE.ConeGeometry(0.0075, 0.028, 4), lb.bone, -0.135 + k * 0.036, 0.03, s * (0.022 + k * 0.004));
  } else if (v === 62) {
    vertebrae(THREE, m, lb, b.b + 0.01, 0.04, true);
  } else if (v === 63) {
    vertebrae(THREE, m, lb, b.a + 0.01, 0.042, false, 1.9);
  } else if (v === 64) {
    // a rib: from the spine (above and inboard of its box) out, round and
    // back in. `s` is which flank it hangs on.
    const s = b.pz > REX_Z ? 1 : -1;
    const geo = new THREE.TorusGeometry(0.13, 0.012, 5, 12, 3.3);
    geo.rotateZ(-1.4);
    geo.scale(1, 1.32, 1);
    geo.rotateY(s > 0 ? -Math.PI / 2 : Math.PI / 2);
    add(THREE, m, geo, lb.bone, 0, 0.0, -s * 0.075).rotation.z = 0.28;
  } else if (v === 65) {
    // the pelvis: sacrum, two blades, the long pubis pointing down
    add(THREE, m, new THREE.BoxGeometry(0.24, 0.07, 0.12), lb.boneShade, 0, 0.04, 0);
    for (const s of [-1, 1]) {
      const blade = add(THREE, m, new THREE.SphereGeometry(0.1, 10, 8), lb.bone, 0.0, 0.03, s * 0.14);
      blade.scale.set(1.45, 0.62, 0.22);
      blade.rotation.z = -0.15;
      const pubis = add(THREE, m, new THREE.CylinderGeometry(0.013, 0.02, 0.2, 6), lb.bone, -0.08, -0.07, s * 0.07);
      pubis.rotation.z = -0.75;
      const ischium = add(THREE, m, new THREE.CylinderGeometry(0.011, 0.017, 0.15, 6), lb.boneShade, 0.1, -0.05, s * 0.07);
      ischium.rotation.z = 0.9;
    }
  } else if (v === 66) {
    // femur: hip back, knee forward
    longBone(THREE, m, lb.bone, 0.44, 0.045, 0.34, -0.035);
  } else if (v === 67) {
    // shin: knee forward, ankle back — the bird's leg
    longBone(THREE, m, lb.bone, 0.42, 0.034, -0.42, -0.06);
  } else if (v === 68) {
    // the foot: a short upright ankle bone, three splayed toes, claws
    const ankle = add(THREE, m, new THREE.CylinderGeometry(0.017, 0.022, 0.1, 6), lb.boneShade, 0.085, 0.04, 0);
    ankle.rotation.z = 0.5;
    for (const dz of [-0.04, 0, 0.04]) {
      const toe = add(THREE, m, new THREE.CylinderGeometry(0.012, 0.016, 0.15, 6), lb.bone, -0.02, -0.008, dz * 0.75);
      toe.rotation.z = Math.PI / 2;
      toe.rotation.y = dz * 5;
      const claw = add(THREE, m, new THREE.ConeGeometry(0.013, 0.05, 5), lb.boneShade, -0.115, -0.012, dz * 1.35);
      claw.rotation.z = Math.PI / 2;
    }
  } else if (v === 69) {
    // the famous arms
    const up = add(THREE, m, new THREE.CylinderGeometry(0.01, 0.012, 0.08, 6), lb.bone, 0.022, 0.012, 0);
    up.rotation.z = 0.9;
    const fore = add(THREE, m, new THREE.CylinderGeometry(0.008, 0.01, 0.07, 6), lb.bone, -0.03, -0.012, 0);
    fore.rotation.z = -0.9;
    for (const dz of [-0.009, 0.009]) {
      const claw = add(THREE, m, new THREE.ConeGeometry(0.007, 0.028, 4), lb.boneShade, -0.062, -0.046, dz);
      claw.rotation.z = Math.PI;
    }
  } else if (v === 70) {
    vertebrae(THREE, m, lb, b.a + 0.008, b.b * 1.05, false, 1.3);
    // chevrons under the tail
    const n = Math.max(2, Math.round(b.a / 0.045));
    for (let k = 0; k < n; k++) add(THREE, m, new THREE.BoxGeometry(b.b * 0.3, b.b * 1.2, b.b * 0.3), lb.boneShade, ((k + 0.5) / n * 2 - 1) * b.a, -b.b * 1.3, 0).rotation.z = 0.35;
  } else {
    return null;
  }
  return m;
}

// ------------------------------------------------- the building, the canon ---
const C = {
  marble: 0xf3f0e8, marbleShade: 0xd8d4c8, marbleDeep: 0xb4ae9e, leaf: 0x5a9a44,
  bronze: 0x55523a, bronzeLit: 0x72805a, bronzeDark: 0x3a3828,
  granite: 0xb06f5e, graniteDark: 0x8a5246, basalt: 0x6a665f, basaltDark: 0x4a4743, socket: 0x2a2826, scoria: 0x9a4332,
  terra: 0xa9714f, terraDark: 0x84563a, stone: 0xd9d2c2, stoneShade: 0xb7ae9c, walnut: 0x4a3024, walnutDark: 0x33201a,
  brass: 0xc9a542, gold: 0xe0b03a, lapis: 0x2f4f9a, skin: 0xc98a5e, slate: 0x3a3c42, cream: 0xe6dcc4,
};
// which piece stands on which plinth (room_museum.rs), for the brass label
const PLINTHS = [
  [0, 1.3, 'david'], [1.25, -0.45, 'thinker'], [2.5, 1.6, 'disco'], [-2.45, 1.6, 'venus'], [-6, 1.3, 'victory'],
  [-4.75, 0.5, 'nefertiti'], [-7.6, 0.9, 'rosetta'], [-5.4, -1.3, 'sphinx'], [-6.4, -1.3, 'urn'], [-7.3, -1.3, 'jade'],
  [-12.45, -0.5, 'meteorite'], [-12.55, 0.75, 'geode'], [-2.7, 0.3, 'egg'], [1.95, 0.75, 'crown'],
];
const plinthLabel = (x, z) => (PLINTHS.find(([px, pz]) => Math.abs(px - x) < 0.1 && Math.abs(pz - z) < 0.1) ?? [0, 0, 'touch'])[2];

function building(kit, b, lb, v) {
  const { THREE } = kit;
  if (b.cls !== 0) return null;
  const s = new Sculpt(THREE);
  if (fam(b, G.stone)) {
    if (b.shape === 2) {
      // a plinth's round shaft: drum, base ring, and its brass label
      const r = b.b, H = 2 * b.a + 2 * b.b;
      const wood = v === 92;
      s.cyl(r * 0.94, r * 0.98, H - 0.024, wood ? C.walnut : C.stone, 0, -0.012, 0, null, 18);
      s.cyl(r * 1.06, r * 1.12, 0.05, wood ? C.walnutDark : C.stoneShade, 0, -H / 2 + 0.025, 0, null, 18);
      if (wood) s.cyl(r, r, 0.014, C.brass, 0, H / 2 - 0.07, 0, null, 18);
      const m = s.group(kit);
      const w = Math.min(0.24, r * 1.15);
      plaque(kit, m, plinthLabel(b.px, b.pz), w, w / 2, 0, H * 0.12, -(r * 0.985));
      return m;
    }
    if (v === 80) {
      // the dais: stone step, a red runner on top, the name on the riser
      s.box(b.a * 2, b.b * 2, b.c * 2, C.stoneShade);
      s.box(b.a * 2 - 0.12, 0.006, b.c * 2 - 0.12, 0x8f1d2a, 0, b.b + 0.002, 0);
      const m = s.group(kit);
      plaque(kit, m, 'rex', 0.22, 0.11, 0.2, 0, -(b.c + 0.002));
      return m;
    }
    if (v === 81) {
      s.box(b.a * 2, b.b * 2, b.c * 2, C.stone);
      s.box(b.a * 2 + 0.03, 0.03, b.c * 2 + 0.03, C.stoneShade, 0, -b.b + 0.015, 0);
      const m = s.group(kit);
      plaque(kit, m, 'attendants', 0.36, 0.18, 0, 0.0, -(b.c + 0.002));
      return m;
    }
    // a cap slab: stone on a plinth, walnut on a vitrine base
    return s.box(b.a * 2, b.b * 2, b.c * 2, v >= 96 ? C.walnut : C.stoneShade).group(kit);
  }
  if (fam(b, G.light)) {
    // picture light: a brass tube on two arms off the wall, glowing down
    // (into the haze and the light volume; the lanterns are the real
    // lights, and a second one a hand from a star bleached its face)
    s.cyl(0.02, 0.02, b.a * 2, C.brass, 0, 0, 0, [0, 0, Math.PI / 2], 8);
    for (const sx of [-1, 1]) s.cyl(0.006, 0.006, 0.15, C.brass, sx * b.a * 0.6, 0.02, 0.07, [Math.PI / 2 - 0.25, 0, 0], 5);
    const m = s.group(kit, true);
    const lamp = add(THREE, m, new THREE.BoxGeometry(b.a * 1.9, 0.008, 0.022), lb.glow, 0, -0.02, 0);
    lamp.layers.enable(kit.GLOW_LAYER);
    const star = v >= 94;
    m.userData.emitter = { color: new THREE.Color(0xffe0a8), strength: star ? 1.4 : 0.8, radius: star ? 1.8 : 1.3 };
    m.userData.noShadow = true;
    return m;
  }
  if (fam(b, G.lantern)) {
    // a gallery's lantern: a brass frame round a box of light, on a rod
    // from wherever the ceiling is. These are the building's real lights.
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) s.box(0.02, b.b * 2 + 0.04, 0.02, C.brass, sx * b.a, 0, sz * b.c);
    s.box(b.a * 2 + 0.06, 0.02, b.c * 2 + 0.06, C.brass, 0, b.b + 0.02, 0);
    s.cyl(0.012, 0.012, 1.0, C.brass, 0, b.b + 0.52, 0, null, 6);
    const m = s.group(kit, true);
    const box = add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), new THREE.MeshBasicMaterial({ color: 0xfff1d6 }));
    box.layers.enable(kit.GLOW_LAYER);
    const hall = Math.abs(b.px) < 1;
    m.userData.emitter = { color: new THREE.Color(0xffe6bf), strength: hall ? 2.2 : 1.7, radius: 4.2 };
    kit.pendingLights.push({ node: m, color: 0xffe9c8, intensity: hall ? 20 : 15, distance: 9 });
    m.userData.noShadow = true;
    return m;
  }
  if (fam(b, G.counter)) {
    if (v === 70) {
      // the cloakroom's peg rail
      s.box(b.a * 2, b.b * 2, b.c * 2, C.walnut);
      for (let k = 0; k < 5; k++) s.cyl(0.008, 0.008, 0.07, C.brass, 0.04, 0, -b.c + 0.08 + k * ((b.c * 2 - 0.16) / 4), [0, 0, Math.PI / 2], 6);
      return s.group(kit);
    }
    s.box(b.a * 2, b.b * 2, b.c * 2, C.walnut);
    s.box(b.a * 2 + 0.04, 0.02, b.c * 2 + 0.04, 0x2f5a4e, 0, b.b - 0.008, 0);
    const m = s.group(kit);
    plaque(kit, m, 'shop', 0.56, 0.28, 0, -0.02, -(b.c + 0.002));
    return m;
  }
  if (fam(b, G.wall) && b.shape === 2) {
    // a doorway's jambs: the physics is a round post (a cat slides round
    // it), the look is a square stone pilaster with a base and a cap
    const H = 2 * b.a + 2 * b.b, w = b.b * 2 + (v === 93 ? 0.04 : 0.02);
    s.box(w, H, w, 0xd2c9b4);
    s.box(w + 0.06, 0.16, w + 0.06, 0xbfb6a0, 0, -H / 2 + 0.08, 0);
    s.box(w + 0.05, 0.08, w + 0.05, 0xbfb6a0, 0, H / 2 - 0.04, 0);
    return s.group(kit);
  }
  if (fam(b, G.wood)) {
    // the tapestry's rod
    s.cyl(0.012, 0.012, b.a * 2 + 0.1, C.brass, 0, 0, 0, [0, 0, Math.PI / 2], 8);
    for (const sx of [-1, 1]) s.ball(0.022, C.brass, sx * (b.a + 0.06), 0, 0);
    return s.group(kit, true);
  }
  return null;
}

// the Rosetta Stone's face: hieroglyphs, then a scribble, then Greek
function rosettaTex(kit) {
  const lb = lib(kit);
  lb.rosetta ??= kit.makeCanvas(256, 352, (g) => {
    g.fillStyle = '#34363c';
    g.fillRect(0, 0, 256, 352);
    const r = rng(196);
    g.fillStyle = '#b9b6aa';
    g.strokeStyle = '#b9b6aa';
    g.lineWidth = 1.2;
    for (let y = 10; y < 96; y += 14) for (let x = 8; x < 250; x += 12) {
      const k = (r() * 6) | 0;
      if (k === 0) ell(g, x + 4, y + 5, 3.5, 3.5);
      else if (k === 1) g.fillRect(x, y + 1, 7, 8);
      else if (k === 2) poly(g, [x, y + 9, x + 4, y, x + 8, y + 9]);
      else if (k === 3) stroke(g, 1.4, '#b9b6aa', [x, y + 6, x + 3, y + 2, x + 6, y + 6, x + 9, y + 2]);
      else if (k === 4) { g.fillRect(x + 3, y, 2, 10); g.fillRect(x, y + 3, 8, 2); }
      else ell(g, x + 4, y + 5, 4.5, 2);
    }
    g.fillRect(0, 100, 256, 1.5);
    for (let y = 110; y < 216; y += 8) {
      g.beginPath();
      g.moveTo(6, y);
      for (let x = 6; x < 250; x += 5) g.lineTo(x, y + (r() - 0.5) * 6);
      g.stroke();
    }
    g.fillRect(0, 220, 256, 1.5);
    g.font = '8px Georgia, serif';
    const greek = 'ΒΑΣΙΛΕΥΟΝΤΟΣΤΟΥΝΕΟΥΚΑΙΠΑΡΑΛΑΒΟΝΤΟΣΤΗΝΒΑΣΙΛΕΙΑΝΠΑΡΑΤΟΥΠΑΤΡΟΣΚΥΡΙΟΥΒΑΣΙΛΕΙΩΝΜΕΓΑΛΟΔΟΞΟΥ';
    for (let y = 232; y < 348; y += 9) g.fillText(greek.slice(((y * 7) % 30), ((y * 7) % 30) + 46), 6, y);
  });
  return lb.rosetta;
}

function statues(kit, b, lb, v) {
  const { THREE } = kit;
  const s = new Sculpt(THREE);
  const M = C.marble, Ms = C.marbleShade, Md = C.marbleDeep;
  const done = (voice, shiny = false) => {
    const m = s.group(kit, shiny);
    m.userData.voice = voice;
    return m;
  };

  // ---- DAVID: weight on one leg, one hand up at the shoulder with the
  // sling, curls, and (later) a leaf ----
  if (fam(b, G.david) && b.cls !== 0) {
    if (v === 60) {
      s.box(b.a * 2, b.b * 2, b.c * 2, Ms);
      s.box(b.a * 2 - 0.03, 0.012, b.c * 2 - 0.03, M, 0, b.b, 0);
      s.cyl(0.03, 0.04, 0.2, Md, 0.13, b.b + 0.1, 0.06, null, 7); // the stump at his heel
    } else if (v === 61) {
      s.tube([0, 0.31, 0], [0.005, 0.0, -0.012], 0.062, 0.046, M);
      s.tube([0.005, 0.0, -0.012], [0, -0.27, 0.0], 0.046, 0.03, M);
      s.box(0.075, 0.04, 0.16, M, 0, -0.29, -0.035);
    } else if (v === 62) {
      s.tube([0.012, 0.31, 0.01], [-0.012, 0.0, -0.035], 0.058, 0.043, M);
      s.tube([-0.012, 0.0, -0.035], [-0.03, -0.27, 0.02], 0.043, 0.028, M);
      s.box(0.07, 0.04, 0.15, M, -0.04, -0.29, -0.01, [0, 0.5, 0]);
    } else if (v === 63) {
      s.ball(0.1, M, 0.012, -0.2, 0, [1.36, 0.82, 0.86]);
      s.cyl(0.11, 0.098, 0.16, M, 0.004, -0.07, 0, null, 10);
      s.ball(0.12, M, -0.004, 0.1, 0, [1.28, 1.02, 0.8]);
      for (const sx of [-1, 1]) {
        s.ball(0.052, M, sx * 0.143, 0.2, 0);
        s.ball(0.05, M, sx * 0.06, 0.13, -0.062, [1.15, 0.85, 0.42]);
      }
      s.box(0.01, 0.15, 0.01, Ms, 0, -0.03, -0.09);
      s.box(0.13, 0.008, 0.01, Ms, 0, -0.06, -0.092);
      s.cyl(0.042, 0.046, 0.08, M, 0, 0.27, 0, null, 8);
      // the fig leaf
      s.ball(0.04, C.leaf, 0.008, -0.235, -0.085, [1.0, 1.35, 0.3]);
      for (const sx of [-1, 1]) s.ball(0.03, C.leaf, 0.008 + sx * 0.035, -0.215, -0.082, [1.0, 1.2, 0.3], [0, 0, -sx * 0.7]);
    } else if (v === 64) {
      s.tube([-0.02, 0.25, 0], [0.0, -0.01, 0.0], 0.046, 0.037, M);
      s.tube([0.0, -0.01, 0.0], [0.004, -0.215, -0.02], 0.037, 0.028, M);
      s.ball(0.036, M, 0.004, -0.245, -0.024);
    } else if (v === 65) {
      s.tube([0.03, 0.165, 0], [-0.02, -0.15, -0.01], 0.046, 0.038, M);
      s.tube([-0.02, -0.15, -0.01], [0.038, 0.125, -0.052], 0.037, 0.028, M);
      s.ball(0.034, M, 0.04, 0.14, -0.055);
      s.tube([0.04, 0.15, -0.05], [0.07, 0.19, 0.06], 0.009, 0.009, Md, 5, false);
    } else if (v === 66) {
      s.cyl(0.04, 0.044, 0.07, M, 0, -0.085, 0, null, 8);
      s.ball(0.078, M, 0, 0, 0, [0.92, 1.08, 1.0]);
      // turned to look past his raised hand
      s.cone(0.016, 0.04, M, -0.035, -0.005, -0.066, [-1.3, 0.5, 0], 4);
      s.box(0.085, 0.012, 0.02, Ms, -0.028, 0.02, -0.064, [0, 0.45, 0]);
      for (let k = 0; k < 16; k++) {
        const a = 0.2 + k * 0.42, up = (k % 3) * 0.028;
        if (Math.cos(a) < -0.2 && Math.sin(a) < -0.5) continue;
        s.ball(0.03, Ms, Math.cos(a) * (0.062 - up * 0.5), 0.03 + up, Math.sin(a) * (0.06 - up * 0.5) + 0.008, null, null, 6);
      }
      s.ball(0.04, Ms, 0, 0.07, 0.01, [1.2, 0.6, 1.2], null, 7);
    } else return null;
    return done('stone');
  }

  // ---- THE THINKER: all of it bronze, the chin on the back of a hand ----
  if (fam(b, G.thinker) && b.cls !== 0) {
    const B = C.bronze, Bl = C.bronzeLit, Bd = C.bronzeDark;
    if (v === 60) {
      s.put(facet(kit.roughen(new THREE.SphereGeometry(0.25, 9, 7), 0.1)), Bd, 0, -0.01, 0, null, [0.98, 0.72, 0.98]);
      s.box(0.36, 0.05, 0.36, Bd, 0, b.b - 0.03, 0);
    } else if (v === 61) {
      s.ball(0.1, B, 0, 0.0, 0.1, [1.35, 0.8, 0.9]);
      for (const sx of [-1, 1]) s.tube([sx * 0.07, 0.0, 0.08], [sx * 0.078, 0.012, -0.165], 0.062, 0.05, B);
    } else if (v === 62) {
      for (const sx of [-1, 1]) {
        s.tube([sx * 0.078, 0.2, 0.06], [sx * 0.07, -0.12, 0.01 + (sx > 0 ? 0.03 : 0)], 0.05, 0.034, B);
        s.box(0.075, 0.04, 0.13, B, sx * 0.07, -0.14, -0.02 + (sx > 0 ? 0.03 : 0));
      }
    } else if (v === 63) {
      s.ball(0.13, B, 0, 0.0, 0.0, [1.22, 1.12, 0.86], [-0.45, 0, 0]);
      s.ball(0.07, B, 0, 0.06, 0.06, [1.5, 1.0, 0.6]);
      for (const sx of [-1, 1]) s.ball(0.062, B, sx * 0.135, 0.09, -0.05);
      // the right arm goes down to the knee; the left lies across the lap
      s.tube([0.135, 0.09, -0.05], [0.07, -0.13, -0.14], 0.05, 0.04, B);
      s.tube([-0.135, 0.09, -0.05], [-0.1, -0.13, -0.12], 0.05, 0.04, B);
      s.tube([-0.1, -0.13, -0.12], [0.0, -0.17, -0.19], 0.04, 0.032, B);
    } else if (v === 64) {
      s.ball(0.07, B, 0, 0, 0, [0.95, 1.05, 1.08]);
      s.ball(0.07, Bd, 0, 0.014, 0.014, [0.98, 0.98, 1.02]);
      s.box(0.1, 0.014, 0.03, Bd, 0, 0.012, -0.062);
      s.cone(0.014, 0.04, Bl, 0, -0.012, -0.072, [-1.2, 0, 0], 4);
    } else if (v === 65) {
      s.tube([0.012, -0.11, 0.03], [-0.012, 0.125, 0.02], 0.037, 0.03, B);
      s.ball(0.044, B, -0.02, 0.15, 0.028);
    } else return null;
    return done('gong', true);
  }

  // ---- VENUS DE MILO: the drapery sliding off her hips, and no arms ----
  if (fam(b, G.venus) && b.cls !== 0) {
    if (v === 60) {
      s.box(b.a * 2, b.b * 2, b.c * 2, Ms);
    } else if (v === 61) {
      s.put(new THREE.CylinderGeometry(0.1, 0.13, 0.6, 12), M, 0, 0, 0, null, [1, 1, 0.82]);
      for (let k = 0; k < 7; k++) s.tube([-0.1 + k * 0.033, 0.26, -0.085 + Math.abs(k - 3) * 0.012], [-0.12 + k * 0.042, -0.29, -0.1 + Math.abs(k - 3) * 0.014], 0.012, 0.016, Ms, 4, false);
      s.put(new THREE.TorusGeometry(0.105, 0.034, 6, 14), M, 0, 0.27, 0, [Math.PI / 2 - 0.12, 0.25, 0], [1, 0.84, 1]);
      s.ball(0.055, M, -0.035, 0.02, -0.085);
    } else if (v === 62) {
      s.cyl(0.085, 0.092, 0.2, M, 0, -0.1, 0, null, 10);
      s.ball(0.1, M, 0, 0.07, 0, [1.08, 1.0, 0.8]);
      for (const sx of [-1, 1]) {
        s.ball(0.04, M, sx * 0.045, 0.085, -0.06, [1, 0.95, 0.75]);
        // where the arms were
        s.tube([sx * 0.095, 0.15, 0], [sx * 0.135, 0.12, 0.0], 0.042, 0.04, M, 8, false);
        s.cyl(0.036, 0.036, 0.008, Md, sx * 0.138, 0.118, 0, [0, 0, sx * 1.0], 8);
      }
      s.cyl(0.034, 0.04, 0.07, M, 0, 0.205, 0, null, 8);
    } else if (v === 63) {
      s.ball(0.062, M, 0, 0, 0, [0.92, 1.06, 1]);
      s.ball(0.064, Ms, 0, 0.014, 0.012, [0.96, 1.0, 1.0]);
      s.ball(0.03, Ms, 0, 0.012, 0.066);
      s.cone(0.012, 0.03, M, 0, -0.008, -0.062, [-1.3, 0, 0], 4);
    } else return null;
    return done('stone');
  }

  // ---- WINGED VICTORY: headless, striding into the wind on her prow ----
  if (fam(b, G.victory) && b.cls !== 0) {
    if (v === 60) {
      s.box(b.a * 2, b.b * 2, b.c * 2 - 0.1, Md, 0, 0, 0.05);
      s.box(0.24, b.b * 2, 0.24, Md, 0, 0, -0.1, [0, Math.PI / 4, 0]); // the prow
    } else if (v === 61) {
      s.put(new THREE.CylinderGeometry(0.085, 0.118, 0.54, 12), M, 0, 0, 0, null, [1, 1, 0.86]);
      s.tube([-0.03, 0.1, -0.05], [-0.045, -0.25, -0.1], 0.055, 0.036, M); // the leg under the wet cloth
      s.tube([0.0, -0.05, 0.03], [0.03, -0.25, 0.24], 0.09, 0.03, Ms, 7, false); // and the cloth behind
      for (let k = 0; k < 6; k++) s.tube([-0.08 + k * 0.032, 0.25, -0.075], [-0.04 + k * 0.03, -0.26, -0.06 + k * 0.03], 0.012, 0.016, Ms, 4, false);
    } else if (v === 62) {
      // the body leaning into the wind, the cloth blown flat against it
      s.put(new THREE.CylinderGeometry(0.085, 0.094, 0.2, 12), M, 0, -0.05, 0, [-0.15, 0, 0], [1, 1, 0.8]);
      s.ball(0.092, M, 0, 0.07, -0.015, [1.12, 0.9, 0.8]);
      s.cyl(0.094, 0.094, 0.028, Ms, 0, -0.03, -0.004, [-0.15, 0, 0], 10);
      for (let k = 0; k < 5; k++) s.tube([-0.07 + k * 0.035, 0.04, -0.074], [-0.05 + k * 0.03, -0.14, -0.082], 0.01, 0.012, Ms, 4, false);
      s.cyl(0.034, 0.042, 0.04, M, 0, 0.15, -0.015, null, 8);
      s.cyl(0.03, 0.03, 0.006, Md, 0, 0.172, -0.015, null, 8);
    } else if (v === 63 || v === 64) {
      // a wing: the bone edge rising from the shoulder blade and out, the
      // long feathers trailing from it
      const sx = v === 63 ? 1 : -1;
      const bone = [[-sx * 0.17, -0.2, -0.02], [-sx * 0.04, 0.14, 0.0], [sx * 0.15, 0.26, 0.01]];
      s.tube(bone[0], bone[1], 0.045, 0.034, M, 6);
      s.tube(bone[1], bone[2], 0.034, 0.016, M, 6);
      for (let k = 0; k < 9; k++) {
        const t = k / 8, seg = t < 0.5 ? 0 : 1, f = seg ? (t - 0.5) * 2 : t * 2;
        const from = [0, 1, 2].map((i) => bone[seg][i] + (bone[seg + 1][i] - bone[seg][i]) * f);
        const len = 0.2 + 0.24 * Math.sin(t * 2.6);
        s.tube(from, [from[0] + sx * len * (0.25 + t * 0.35), from[1] - len, from[2] + 0.012], 0.03, 0.009, k % 2 ? Ms : M, 4, false);
      }
    } else return null;
    return done('stone');
  }

  // ---- DISCOBOLUS: wound up, the discus at the top of the swing ----
  if (fam(b, G.discobolus) && b.cls !== 0) {
    if (v === 60) {
      s.box(b.a * 2, b.b * 2, b.c * 2, Ms);
    } else if (v === 61) {
      s.tube([0.05, 0.2, 0], [0.105, 0.0, -0.05], 0.058, 0.044, M);
      s.tube([0.105, 0.0, -0.05], [0.06, -0.19, 0.0], 0.044, 0.03, M);
      s.tube([-0.05, 0.2, 0], [-0.085, 0.03, 0.03], 0.056, 0.042, M);
      s.tube([-0.085, 0.03, 0.03], [-0.125, -0.18, 0.05], 0.042, 0.028, M);
      s.box(0.07, 0.035, 0.13, M, 0.06, -0.185, -0.03);
    } else if (v === 62) {
      s.ball(0.11, M, 0, 0, 0, [1.12, 1.25, 0.8], [0, 0, -0.5]);
      s.tube([0.09, 0.05, -0.05], [0.1, -0.22, -0.08], 0.036, 0.026, M);
    } else if (v === 63) {
      s.ball(0.058, M, 0, 0, 0);
      s.ball(0.06, Ms, 0, 0.012, 0.012, [0.98, 0.95, 1.0]);
    } else if (v === 64) {
      s.tube([0.1, -0.1, -0.02], [-0.01, 0.09, 0.01], 0.036, 0.028, M);
      s.cyl(0.08, 0.08, 0.02, Md, -0.03, 0.14, 0.01, [Math.PI / 2, 0, 0.3], 14);
    } else return null;
    return done('stone');
  }

  // ---- the sphinx: lion below, a pharaoh's striped headcloth above ----
  if (fam(b, G.sphinx) && b.cls !== 0) {
    const Gr = C.granite, Gd = C.graniteDark;
    if (v === 60) {
      s.ball(0.1, Gr, 0, 0.0, 0, [0.95, 0.8, 1.42]);
      for (const sx of [-1, 1]) s.ball(0.06, Gr, sx * 0.07, -0.02, 0.07, [0.9, 1, 1.2]);
      s.tube([0.06, -0.06, 0.13], [0.0, -0.06, 0.15], 0.014, 0.012, Gd, 5);
    } else if (v === 61) {
      for (const sx of [-1, 1]) {
        s.box(0.055, 0.055, 0.13, Gr, sx * 0.055, 0, 0.0);
        s.ball(0.03, Gr, sx * 0.055, 0.0, -0.065);
      }
    } else if (v === 62) {
      for (let k = 0; k < 6; k++) s.put(new THREE.CylinderGeometry(0.05 + k * 0.006, 0.056 + k * 0.006, 0.025, 10), k % 2 ? C.lapis : C.gold, 0, 0.075 - k * 0.025, 0.012, null, [1, 1, 0.75]);
      for (const sx of [-1, 1]) s.box(0.04, 0.1, 0.02, C.gold, sx * 0.058, -0.06, -0.03);
      s.ball(0.05, Gr, 0, 0.0, -0.03, [0.92, 1.1, 0.8]);
      s.box(0.022, 0.05, 0.02, Gd, 0, -0.075, -0.05);
      s.cone(0.012, 0.03, Gr, 0, -0.005, -0.072, [-1.3, 0, 0], 4);
    } else return null;
    return done('stone');
  }

  // ---- the moai: brow, long nose, long ears, no neck to speak of ----
  if (fam(b, G.moai)) {
    const Bs = C.basalt, Bd = C.basaltDark;
    if (v === 70) {
      if (!dims(b, 0.13, 0.08, 0.13)) return shard(kit, b, C.scoria, false, 'stone');
      s.cyl(0.135, 0.14, 0.15, C.scoria, 0, -0.005, 0, null, 14);
      s.cyl(0.06, 0.07, 0.035, C.scoria, 0, 0.08, 0, null, 10);
      return done('stone');
    }
    if (b.cls === 0) return null;
    if (v === 60) {
      s.box(b.a * 2, b.b * 2, b.c * 2 - 0.02, Bs);
      for (const sx of [-1, 1]) s.box(0.06, 0.32, 0.2, Bd, sx * (b.a - 0.01), -0.02, -0.02);
      s.box(0.3, 0.012, 0.012, Bd, 0, 0.1, -b.c + 0.005);
    } else if (v === 61) {
      s.put(new THREE.CylinderGeometry(0.19, 0.22, b.b * 2, 4), Bs, 0, 0, 0, [0, Math.PI / 4, 0], [1, 1, 0.98]);
      s.box(0.33, 0.075, 0.1, Bs, 0, 0.14, -0.125);
      for (const sx of [-1, 1]) {
        s.box(0.09, 0.05, 0.03, C.socket, sx * 0.075, 0.09, -0.152);
        s.box(0.045, 0.3, 0.085, Bd, sx * 0.168, -0.02, 0.0);
      }
      s.box(0.15, 0.03, 0.05, Bd, 0, -0.165, -0.15);
      s.box(0.21, 0.09, 0.07, Bs, 0, -0.245, -0.135);
    } else if (v === 62) {
      s.box(0.07, b.b * 2 - 0.04, 0.075, Bs, 0, 0.02, 0, [0.12, 0, 0]);
      s.box(0.115, 0.05, 0.085, Bs, 0, -0.14, -0.005);
    } else return null;
    return done('stone');
  }

  // ---- the Rosetta Stone: three fragments, one text ----
  if (fam(b, G.rosetta) && b.cls !== 0) {
    s.box(b.a * 2, b.b * 2, b.c * 2, C.slate);
    const m = done('stone');
    // each piece carries its own part of the whole face
    const [cx, cy] = v === 60 ? [0, 0.17] : v === 61 ? [0.11, 0.497] : [-0.133, 0.462];
    const geo = new THREE.PlaneGeometry(b.a * 2 - 0.01, b.b * 2 - 0.006);
    const u0 = (0.24 - (cx + b.a)) / 0.48, u1 = (0.24 - (cx - b.a)) / 0.48, v0 = (cy - b.b) / 0.652, v1 = (cy + b.b) / 0.652;
    const a = geo.attributes.uv;
    for (let i = 0; i < a.count; i++) a.setXY(i, u0 + a.getX(i) * (u1 - u0), v0 + a.getY(i) * (v1 - v0));
    geo.rotateY(Math.PI);
    add(THREE, m, geo, lb.rosettaMat ??= kit.toonMat(0xffffff, { map: rosettaTex(kit) }), 0, 0, -b.c - 0.002);
    return m;
  }

  // ---- terracotta: the eight small attendants, the three warriors ----
  if (fam(b, G.terracotta)) {
    const Tc = C.terra, Td = C.terraDark;
    if (v === 70) {
      if (!dims(b, 0.022, 0.085, 0.04)) return shard(kit, b, 0xb5673f);
      // an attendant, in profile, walking along the table
      s.box(0.044, 0.012, 0.08, Tc, 0, -0.079, 0);
      s.put(new THREE.CylinderGeometry(0.017, 0.03, 0.1, 8), Tc, 0, -0.023, 0, null, [0.7, 1, 1.1]);
      s.ball(0.02, Tc, -0.002, 0.048, 0, null, null, 7);
      s.ball(0.009, Td, 0.004, 0.071, 0, null, null, 5);
      s.box(0.014, 0.014, 0.05, Td, -0.014, 0.0, 0);
      return s.group(kit);
    }
    if (b.cls === 0) return null;
    if (v === 72) {
      for (const sx of [-1, 1]) {
        s.tube([sx * 0.045, 0.1, 0], [sx * 0.045, -0.17, 0], 0.042, 0.036, Tc, 7, false);
        s.box(0.07, 0.035, 0.13, Td, sx * 0.045, -0.182, -0.02);
      }
      s.put(new THREE.CylinderGeometry(0.085, 0.105, 0.16, 10), Tc, 0, 0.12, 0, null, [1, 1, 0.8]);
    } else if (v === 73) {
      s.put(new THREE.CylinderGeometry(0.092, 0.098, 0.26, 10), Tc, 0, 0, 0, null, [1, 1, 0.82]);
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) s.box(0.04, 0.045, 0.012, Td, -0.048 + i * 0.048, -0.07 + j * 0.055, -0.078);
      for (const sx of [-1, 1]) {
        s.ball(0.045, Td, sx * 0.105, 0.1, 0);
        s.tube([sx * 0.11, 0.09, 0], [sx * 0.118, -0.15, -0.02], 0.036, 0.03, Tc, 7);
      }
      s.cyl(0.05, 0.06, 0.035, Td, 0, 0.128, 0, null, 8);
    } else if (v === 74) {
      s.ball(0.055, Tc, 0, -0.005, 0, [0.95, 1.1, 1]);
      s.ball(0.056, Td, 0, 0.012, 0.012, [0.98, 0.9, 1.0]);
      s.ball(0.024, Td, 0.022, 0.068, 0.012, null, null, 6);
      s.box(0.05, 0.008, 0.012, Td, 0, -0.022, -0.052);
    } else return null;
    return done('stone');
  }

  // ---- Nefertiti: the tall flat crown, the long neck ----
  if (fam(b, G.treasure) && v === 70) {
    if (!dims(b, 0.065, 0.14, 0.07)) return shard(kit, b, C.lapis);
    s.box(0.11, 0.045, 0.1, 0x2a2420, 0, -0.118, 0);
    s.ball(0.062, C.skin, 0, -0.08, 0.005, [1.0, 0.5, 0.8]);
    s.cyl(0.044, 0.06, 0.03, C.gold, 0, -0.068, 0.0, null, 10);
    s.cyl(0.038, 0.046, 0.012, 0x2f8a6a, 0, -0.05, 0.0, null, 10);
    s.tube([0, -0.05, 0.008], [0, 0.03, -0.014], 0.021, 0.018, C.skin, 7, false);
    s.ball(0.034, C.skin, 0, 0.05, -0.02, [0.85, 1.12, 1.0]);
    s.put(new THREE.CylinderGeometry(0.056, 0.036, 0.09, 12), C.lapis, 0, 0.108, 0.012, [0.3, 0, 0]);
    s.put(new THREE.CylinderGeometry(0.05, 0.046, 0.014, 12), C.gold, 0, 0.108, 0.012, [0.3, 0, 0]);
    s.put(new THREE.CylinderGeometry(0.038, 0.037, 0.01, 12), C.gold, 0, 0.068, 0.0, [0.3, 0, 0]);
    s.box(0.02, 0.004, 0.008, 0xb8473a, 0, 0.036, -0.052);
    for (const sx of [-1, 1]) s.box(0.014, 0.004, 0.006, 0x1b1a1e, sx * 0.013, 0.058, -0.05);
    return s.group(kit);
  }

  // ---- the heavy case's steel sill ----
  if (fam(b, G.armature) && v === 80 && b.cls !== 0) {
    s.box(b.a * 2, b.b * 2, b.c * 2, 0x55585e);
    return s.group(kit, true);
  }

  // ---- the mobile ----
  if (fam(b, G.mobile)) {
    if (v === 90) {
      s.box(b.a * 2, 0.012, 0.012, 0x2a2a2e);
      s.put(new THREE.TorusGeometry(0.02, 0.005, 4, 8), 0x2a2a2e, 0, 0.03, 0);
      const m = s.group(kit, true);
      m.userData.noShadow = true;
      return m;
    }
    const [col, a, bb] = v === 80 ? [0xd3231c, 0.16, 0.1] : v === 81 ? [0xf2c21c, 0.1, 0.1] : [0x2a5fd0, 0.08, 0.11];
    if (!dims(b, a, bb, 0.006)) return shard(kit, b, col);
    s.put(new THREE.CylinderGeometry(1, 1, 0.012, 22), col, 0, 0, 0, [Math.PI / 2, 0, 0], [a, 1, bb]);
    return s.group(kit, true);
  }

  // ---- the cloakroom ----
  if (fam(b, G.coat) && b.cls !== 0) {
    const col = b.tint < 0.6 ? 0xb08a5a : 0x34425f;
    s.box(b.a * 2, b.b * 2, b.c * 2 - 0.04, col);
    for (const sz of [-1, 1]) s.tube([0, b.b - 0.03, sz * (b.c - 0.03)], [0.0, -b.b + 0.02, sz * (b.c + 0.005)], 0.036, 0.03, col, 6);
    s.box(b.a * 2 + 0.02, 0.05, 0.12, col, 0, b.b - 0.02, 0);
    return s.group(kit);
  }
  if (fam(b, G.umbrella) && b.cls !== 0) {
    if (v === 90) return s.box(b.a * 2, b.b * 2, b.c * 2, 0x2f4f44).group(kit, true);
    const col = [0x1b1a1e, 0xb3262a, 0x2f6b4f][v - 91] ?? 0x1b1a1e;
    s.cone(0.034, 0.5, col, 0, -0.1, 0, [Math.PI, 0, 0], 8);
    s.cyl(0.006, 0.006, 0.22, 0x6a4a30, 0, 0.24, 0, null, 5);
    s.put(new THREE.TorusGeometry(0.028, 0.008, 5, 8, Math.PI), 0x6a4a30, 0.028, 0.345, 0);
    return s.group(kit);
  }
  return null;
}

// ------------------------------------------------------------ the recognizer ---
export function mesh(kit, b) {
  const { THREE, toonMat } = kit;
  const lb = lib(kit);
  const v = variant(b);
  let m = building(kit, b, lb, v) ?? statues(kit, b, lb, v);
  if (m) return m;
  if (fam(b, G.pillar) && b.cls !== 0) {
    // a loose pillar: square base, fluted shaft, capital
    const s = new Sculpt(THREE);
    if (v === 91) {
      s.put(facet(new THREE.CylinderGeometry(b.a * 0.86, b.a * 0.98, b.b * 2, 12)), C.stone);
      s.cyl(b.a * 1.08, b.a * 1.12, 0.03, C.stoneShade, 0, -b.b + 0.015, 0, null, 12);
    } else if (v === 92) {
      s.box(b.a * 2, b.b * 2, b.c * 2, C.stoneShade);
      s.cyl(b.a * 0.98, b.a * 0.7, 0.04, C.stone, 0, -b.b - 0.02, 0, null, 12);
    } else {
      s.box(b.a * 2, b.b * 2, b.c * 2, C.stoneShade);
    }
    m = s.group(kit);
    m.userData.voice = 'stone';
    if (v === 91) plaque(kit, m, 'touch', 0.12, 0.06, 0, b.b * 0.25, -(b.a * 0.99));
    return m;
  }
  // ---- pictures ----
  if (fam(b, G.canvas)) {
    const loose = v === 93; // the easel picture: one brittle panel, frame and all
    if (loose && !dims(b, 0.2, 0.26, 0.012)) return shard(kit, b, 0xd9b63c);
    m = new THREE.Group();
    const edge = toonMat(0xcfc3a4);
    const face = toonMat(0xffffff, { map: lb.pictures[v] || lb.pictures[88] });
    const inset = loose ? 0.022 : 0;
    add(THREE, m, new THREE.BoxGeometry((b.a - inset) * 2, (b.b - inset) * 2, b.c * 2), [edge, edge, edge, edge, toonMat(0x8a7a5c), face]);
    if (loose) {
      const fr = toonMat(0x2b2420);
      for (const s of [-1, 1]) {
        add(THREE, m, new THREE.BoxGeometry(b.a * 2, 0.022, b.c * 2 + 0.006), fr, 0, s * (b.b - 0.011), 0);
        add(THREE, m, new THREE.BoxGeometry(0.022, b.b * 2, b.c * 2 + 0.006), fr, s * (b.a - 0.011), 0, 0);
      }
    }
  } else if (fam(b, G.frame)) {
    // a gilt rail: the moulding steps in toward the picture
    m = new THREE.Group();
    add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.gilt);
    const flat = b.a > b.b;
    add(THREE, m, new THREE.BoxGeometry(flat ? b.a * 2 - 0.03 : b.a * 0.9, flat ? b.b * 0.9 : b.b * 2 + 0.04, 0.014), lb.giltPale, 0, 0, -b.c - 0.003);
    add(THREE, m, new THREE.BoxGeometry(flat ? b.a * 2 - 0.09 : b.a * 0.3, flat ? b.b * 0.3 : b.b * 2 + 0.01, 0.012), lb.gilt, 0, 0, -b.c - 0.012);
  } else if (fam(b, G.wire)) {
    m = new THREE.Group();
    add(THREE, m, new THREE.CylinderGeometry(0.0035, 0.0035, b.b * 2 + 0.012, 5), lb.brass);
    m.userData.noShadow = true;
  } else if (fam(b, G.hook)) {
    if (!dims(b, 0.008, 0.018, 0.008)) return shard(kit, b, 0xc9a542);
    m = new THREE.Group();
    const s = add(THREE, m, new THREE.TorusGeometry(0.011, 0.0035, 5, 10, Math.PI * 1.4), lb.brass, 0, -0.006, 0);
    s.rotation.z = 2.2;
    add(THREE, m, new THREE.CylinderGeometry(0.003, 0.003, 0.02, 5), lb.brass, 0, 0.014, 0);
    m.userData.noShadow = true;
  } else if (fam(b, G.glass) && b.shape === 0) {
    // glass, whole or broken: a pane of its own dims, bright edges, and
    // a streak of reflection across the face that looks at the room
    m = new THREE.Group();
    const geo = new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2);
    // (a big thin pane is the glazing over a picture: nearly clear)
    const glazing = b.c < 0.006 && b.a > 0.25;
    add(THREE, m, geo, glassMat(kit, glazing ? 0.07 : 0.2));
    m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xeaf6f8, transparent: true, opacity: 0.55 })));
    if (b.c < 0.01 && b.a > 0.05 && b.b > 0.05) {
      const st = add(THREE, m, new THREE.PlaneGeometry(b.a * 2, b.b * 2), new THREE.MeshBasicMaterial({ map: lb.streak, transparent: true, opacity: glazing ? 0.1 : 0.5, depthWrite: false }), 0, 0, -b.c - 0.001);
      st.rotation.y = Math.PI;
    }
    m.userData.noShadow = true;
  }

  // ---- natural history ----
  else if (fam(b, G.bone)) {
    m = boneMesh(kit, b);
    // the sound bank's named voices (userData.voice): the viewer uses it
    // in place of the voice it would infer from the sim's material bits
    if (m) m.userData.voice = 'bone';
  } else if (fam(b, G.armature) && b.cls !== 0) {
    m = new THREE.Group();
    if (b.b > b.a * 3) add(THREE, m, new THREE.CylinderGeometry(b.a * 0.7, b.a * 0.7, b.b * 2, 8), lb.iron);
    else add(THREE, m, new THREE.CylinderGeometry(b.a, b.a * 1.05, b.b * 2, 14), lb.iron);
  } else if (fam(b, G.meteorite)) {
    m = new THREE.Group();
    m.userData.voice = 'stone';
    add(THREE, m, facet(kit.roughen(new THREE.SphereGeometry(b.a, 9, 7), 0.1)), new THREE.MeshPhongMaterial({ color: 0x45434a, shininess: 45, specular: 0x9aa6b4, flatShading: true }));
  } else if (fam(b, G.geode)) {
    if (!dims(b, 0.1, 0.085, 0.075)) return shard(kit, b, 0x8a5fc0);
    // a geode: dull rock outside, a cut face of amethyst toward the room
    m = new THREE.Group();
    const rock = add(THREE, m, facet(kit.roughen(new THREE.SphereGeometry(0.1, 9, 7), 0.1)), toonMat(0x8a8378));
    rock.scale.set(1, 0.85, 0.75);
    const amethyst = new THREE.MeshPhongMaterial({ color: 0x8a5fc0, shininess: 140, specular: 0xffffff, emissive: 0x24103c, flatShading: true });
    const cut = add(THREE, m, new THREE.CircleGeometry(0.068, 14), new THREE.MeshBasicMaterial({ color: 0x3a2260 }), 0, 0, -0.066);
    cut.rotation.y = Math.PI;
    cut.scale.y = 0.85;
    const r = rng(5);
    for (let k = 0; k < 11; k++) {
      const a = r() * 6.283, d = Math.sqrt(r()) * 0.05;
      const cr = add(THREE, m, new THREE.ConeGeometry(0.011 + r() * 0.008, 0.03 + r() * 0.03, 5), amethyst, Math.cos(a) * d, Math.sin(a) * d * 0.85, -0.07);
      cr.rotation.x = -Math.PI / 2 + (r() - 0.5) * 0.7;
    }
  } else if (fam(b, G.globe)) {
    if (b.shape !== 1 || !near(b.a, 0.12)) return shard(kit, b, 0xcdb98a);
    // 1790: parchment seas, umber land, a brass meridian, and a serpent
    m = new THREE.Group();
    add(THREE, m, new THREE.SphereGeometry(b.a, 18, 14), toonMat(0xcdb98a));
    const land = toonMat(0x8a6a3a);
    for (const [x, y, z, sx, sy] of [[0.4, 0.5, -0.7, 0.5, 0.36], [-0.6, 0.1, -0.7, 0.34, 0.5], [0.7, -0.4, -0.5, 0.3, 0.3], [-0.2, -0.6, 0.7, 0.5, 0.3], [0.3, 0.5, 0.8, 0.4, 0.4]]) {
      const blob = add(THREE, m, new THREE.SphereGeometry(b.a * 1.012, 10, 8), land);
      blob.scale.set(sx, sy, 0.35);
      const n = new THREE.Vector3(x, y, z).normalize();
      blob.position.copy(n.clone().multiplyScalar(b.a * 0.66));
      blob.lookAt(n.clone().multiplyScalar(2));
    }
    const ring = add(THREE, m, new THREE.TorusGeometry(b.a * 1.05, 0.006, 6, 24), lb.brass);
    ring.rotation.y = Math.PI / 2;
    const serpent = add(THREE, m, new THREE.TorusGeometry(0.022, 0.006, 5, 10, Math.PI), toonMat(0x3f7a5a), 0.02, -0.01, -b.a * 0.99);
    serpent.rotation.y = Math.PI;
  }

  // ---- antiquities ----
  else if (fam(b, G.ceramic)) {
    const urn = v === 80;
    if (!(urn ? dims(b, 0.07, 0.12, 0.07) : dims(b, 0.075, 0.13, 0.075))) return shard(kit, b, urn ? 0xd9c9a0 : 0xf2f4f8);
    m = new THREE.Group();
    if (urn) {
      // canopic jar: a stone jar with bands of script and a cat's head for a lid
      const tex = kit.makeCanvas(128, 128, (g) => {
        g.fillStyle = '#dccba0';
        g.fillRect(0, 0, 128, 128);
        g.fillStyle = '#7a5a2a';
        g.fillRect(0, 30, 128, 3);
        g.fillRect(0, 92, 128, 3);
        const r = rng(3);
        for (let x = 4; x < 124; x += 9) for (let y = 40; y < 88; y += 12) g.fillRect(x, y, 2 + r() * 5, 2 + r() * 7);
      });
      const pts = [[0.045, -0.12], [0.06, -0.08], [0.07, 0.0], [0.066, 0.04], [0.05, 0.06], [0.0, 0.062]].map(([x, y]) => new THREE.Vector2(x, y));
      add(THREE, m, new THREE.LatheGeometry(pts, 16), toonMat(0xffffff, { map: tex }));
      const head = add(THREE, m, new THREE.SphereGeometry(0.042, 12, 9), lb.black, 0, 0.085, 0);
      head.scale.set(1, 0.9, 1);
      for (const s of [-1, 1]) add(THREE, m, new THREE.ConeGeometry(0.014, 0.034, 4), lb.black, s * 0.024, 0.118, 0);
      add(THREE, m, new THREE.CylinderGeometry(0.043, 0.043, 0.008, 14), lb.gold, 0, 0.062, 0);
      for (const s of [-1, 1]) add(THREE, m, new THREE.SphereGeometry(0.006, 6, 5), lb.gold, s * 0.016, 0.09, -0.037);
    } else {
      // Ming, blue-and-white: the pair differ in the band round the belly
      const tex = kit.makeCanvas(256, 256, (g) => {
        g.fillStyle = '#f4f6fa';
        g.fillRect(0, 0, 256, 256);
        g.fillStyle = '#1f4fa8';
        g.strokeStyle = '#1f4fa8';
        for (const y of [18, 26, 196, 238, 246]) g.fillRect(0, y, 256, 4);
        g.lineWidth = 4;
        for (let x = 0; x < 256; x += 32) {
          g.beginPath();
          g.arc(x + 16, 212, 11, Math.PI, 0);
          g.stroke();
          g.beginPath();
          g.arc(x + 16, 52, 9, 0, Math.PI);
          g.stroke();
        }
        for (let k = 0; k < 4; k++) {
          const x = 32 + k * 64;
          if (v === 90) {
            // scrolling clouds
            g.beginPath();
            g.moveTo(x - 24, 130);
            g.bezierCurveTo(x - 10, 96, x + 14, 150, x + 24, 108);
            g.stroke();
            ell(g, x, 150, 7, 7);
          } else {
            // the other one: carp
            ell(g, x, 124, 20, 9);
            poly(g, [x + 18, 124, x + 32, 112, x + 32, 136]);
            g.fillStyle = '#f4f6fa';
            ell(g, x - 10, 122, 2.5, 2.5);
            g.fillStyle = '#1f4fa8';
          }
        }
      });
      const pts = [[0.036, -0.13], [0.042, -0.118], [0.07, -0.04], [0.075, 0.01], [0.062, 0.062], [0.034, 0.092], [0.03, 0.112], [0.044, 0.13], [0.036, 0.13]].map(([x, y]) => new THREE.Vector2(x, y));
      add(THREE, m, new THREE.LatheGeometry(pts, 20), toonMat(0xffffff, { map: tex }));
    }
  } else if (fam(b, G.marble)) {
    const senator = v === 90;
    if (!(senator ? dims(b, 0.09, 0.14, 0.07) : dims(b, 0.085, 0.135, 0.07))) return shard(kit, b, 0xe9e6de, false, 'stone');
    // a bust: socle, shoulders, neck, a head with opinions
    m = new THREE.Group();
    m.userData.voice = 'stone';
    const y0 = -b.b;
    add(THREE, m, new THREE.CylinderGeometry(0.04, 0.055, 0.05, 12), lb.marble, 0, y0 + 0.025, 0);
    const chest = add(THREE, m, new THREE.SphereGeometry(0.085, 12, 9), lb.marble, 0, y0 + 0.1, 0);
    chest.scale.set(1, 0.72, 0.72);
    add(THREE, m, new THREE.CylinderGeometry(0.026, 0.032, 0.06, 10), lb.marble, 0, y0 + 0.165, 0);
    const head = add(THREE, m, new THREE.SphereGeometry(0.05, 14, 11), lb.marble, 0, y0 + 0.225, -0.004);
    head.scale.set(0.9, 1.12, 1);
    for (const s of [-1, 1]) add(THREE, m, new THREE.SphereGeometry(0.008, 6, 5), toonMat(0xa9a59c), s * 0.019, y0 + 0.235, -0.046);
    add(THREE, m, new THREE.BoxGeometry(0.04, 0.006, 0.01), toonMat(0xa9a59c), 0, y0 + 0.248, -0.047);
    // nose: original on the senator, a later repair on the philosopher
    const nose = add(THREE, m, new THREE.ConeGeometry(0.01, 0.03, 4), senator ? lb.marble : toonMat(0xcdb694), 0, y0 + 0.222, -0.052);
    nose.rotation.x = -0.5;
    if (senator) {
      const wreath = add(THREE, m, new THREE.TorusGeometry(0.046, 0.008, 5, 14), toonMat(0x8a9a6a), 0, y0 + 0.262, 0);
      wreath.rotation.x = Math.PI / 2 - 0.25;
      const toga = add(THREE, m, new THREE.TorusGeometry(0.06, 0.016, 5, 12, Math.PI), lb.marble, 0.01, y0 + 0.12, -0.03);
      toga.rotation.z = 2.4;
    } else {
      const beard = add(THREE, m, new THREE.SphereGeometry(0.036, 10, 8), lb.marble, 0, y0 + 0.185, -0.022);
      beard.scale.set(0.9, 1.1, 0.7);
      const brow = add(THREE, m, new THREE.BoxGeometry(0.05, 0.008, 0.012), lb.marble, 0, y0 + 0.25, -0.046);
      brow.rotation.z = 0.12;
    }
  } else if (fam(b, G.terracotta)) {
    if (!dims(b, 0.022, 0.085, 0.04)) return shard(kit, b, 0xb5673f);
    // an attendant, in profile, walking toward the middle of the room
    m = new THREE.Group();
    add(THREE, m, new THREE.BoxGeometry(0.044, 0.012, 0.08), lb.terracotta, 0, -0.079, 0);
    const robe = add(THREE, m, new THREE.CylinderGeometry(0.017, 0.03, 0.1, 9), lb.terracotta, 0, -0.023, 0);
    robe.scale.set(0.7, 1, 1.1);
    add(THREE, m, new THREE.SphereGeometry(0.02, 9, 7), lb.terracotta, -0.002, 0.048, 0);
    add(THREE, m, new THREE.SphereGeometry(0.009, 6, 5), toonMat(0x8f4f30), 0.004, 0.071, 0);
    add(THREE, m, new THREE.BoxGeometry(0.014, 0.014, 0.05), toonMat(0x9a5634), -0.014, 0.0, 0);
  } else if (fam(b, G.treasure)) {
    if (v === 90) {
      if (!dims(b, 0.04, 0.06, 0.04)) return shard(kit, b, 0x1f3f9a);
      // the imperial egg on its stand: blue enamel in a gold cage
      m = new THREE.Group();
      add(THREE, m, new THREE.CylinderGeometry(0.02, 0.03, 0.012, 10), lb.gold, 0, -0.054, 0);
      add(THREE, m, new THREE.CylinderGeometry(0.006, 0.006, 0.018, 6), lb.gold, 0, -0.04, 0);
      const egg = add(THREE, m, new THREE.SphereGeometry(0.035, 16, 12), lb.enamel, 0, 0.008, 0);
      egg.scale.y = 1.32;
      for (const ry of [0, Math.PI / 2]) {
        const band = add(THREE, m, new THREE.TorusGeometry(0.0355, 0.0028, 5, 20), lb.gold, 0, 0.008, 0);
        band.rotation.y = ry;
        band.scale.y = 1.32;
      }
      const belt = add(THREE, m, new THREE.TorusGeometry(0.0355, 0.0035, 5, 20), lb.gold, 0, 0.008, 0);
      belt.rotation.x = Math.PI / 2;
      add(THREE, m, new THREE.SphereGeometry(0.008, 8, 6), new THREE.MeshPhongMaterial({ color: 0xd3231c, shininess: 150 }), 0, 0.057, 0);
    } else if (v === 80) {
      if (!dims(b, 0.07, 0.1, 0.035)) return shard(kit, b, 0xe0b03a);
      // the funerary mask: gold face, striped headcloth, a small false beard
      m = new THREE.Group();
      const tex = kit.makeCanvas(64, 64, (g) => {
        for (let y = 0; y < 64; y += 8) {
          g.fillStyle = (y / 8) % 2 ? '#1f3f9a' : '#e0b03a';
          g.fillRect(0, y, 64, 8);
        }
      });
      const cloth = add(THREE, m, new THREE.BoxGeometry(0.14, 0.17, 0.024), toonMat(0xffffff, { map: tex }), 0, 0.012, 0.012);
      cloth.userData.keep = true;
      const face = add(THREE, m, new THREE.SphereGeometry(0.052, 14, 11), lb.gold, 0, 0.012, -0.008);
      face.scale.set(0.85, 1.2, 0.5);
      for (const s of [-1, 1]) {
        add(THREE, m, new THREE.BoxGeometry(0.024, 0.008, 0.006), lb.dark, s * 0.02, 0.028, -0.031);
        add(THREE, m, new THREE.BoxGeometry(0.03, 0.004, 0.006), lb.enamel, s * 0.022, 0.04, -0.03);
      }
      add(THREE, m, new THREE.BoxGeometry(0.014, 0.036, 0.012), lb.enamel, 0, -0.07, -0.014);
      add(THREE, m, new THREE.BoxGeometry(0.02, 0.004, 0.006), lb.dark, 0, -0.022, -0.03);
    } else if (v === 60) {
      if (!dims(b, 0.04, 0.07, 0.055)) return shard(kit, b, 0x4fa67c);
      // the jade cat, seated
      m = new THREE.Group();
      add(THREE, m, new THREE.BoxGeometry(0.076, 0.01, 0.1), lb.black, 0, -0.065, 0);
      const body = add(THREE, m, new THREE.SphereGeometry(0.036, 12, 9), lb.jade, 0, -0.022, 0.008);
      body.scale.set(0.9, 1.15, 1.1);
      add(THREE, m, new THREE.SphereGeometry(0.026, 12, 9), lb.jade, 0, 0.034, -0.012);
      for (const s of [-1, 1]) {
        add(THREE, m, new THREE.ConeGeometry(0.01, 0.022, 4), lb.jade, s * 0.015, 0.061, -0.01);
        add(THREE, m, new THREE.CylinderGeometry(0.008, 0.009, 0.05, 6), lb.jade, s * 0.014, -0.035, -0.03);
      }
      const tail = add(THREE, m, new THREE.TorusGeometry(0.03, 0.007, 5, 10, Math.PI), lb.jade, 0.01, -0.052, 0.012);
      tail.rotation.x = Math.PI / 2;
    }
  } else if (fam(b, G.crown) && b.cls !== 0) {
    m = new THREE.Group();
    if (v === 90) {
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.gold);
      const along = b.a > b.c;
      const gems = [0xd3231c, 0x2a5fd0, 0x2f9a5a];
      for (let k = -1; k <= 1; k++) {
        for (const s of [-1, 1]) {
          const gem = add(THREE, m, new THREE.SphereGeometry(0.0065, 6, 5), new THREE.MeshPhongMaterial({ color: gems[(k + 1 + (b.i % 3)) % 3], shininess: 160 }));
          gem.position.set(along ? k * b.a * 0.6 : s * (b.a + 0.002), 0, along ? s * (b.c + 0.002) : k * b.c * 0.6);
        }
      }
    } else if (v === 91) {
      add(THREE, m, new THREE.ConeGeometry(0.011, b.b * 2, 4), lb.gold);
      add(THREE, m, new THREE.SphereGeometry(0.007, 6, 5), new THREE.MeshPhongMaterial({ color: 0xf4f0e6, shininess: 120 }), 0, b.b + 0.004, 0);
    } else if (v === 92) {
      const cap = add(THREE, m, new THREE.SphereGeometry(b.a * 1.05, 12, 9), toonMat(0x5a1f6a), 0, 0.004, 0);
      cap.scale.y = 0.85;
    } else {
      add(THREE, m, new THREE.SphereGeometry(b.a, 10, 8), lb.gold);
      add(THREE, m, new THREE.BoxGeometry(0.005, 0.03, 0.005), lb.gold, 0, b.a + 0.012, 0);
      add(THREE, m, new THREE.BoxGeometry(0.018, 0.005, 0.005), lb.gold, 0, b.a + 0.016, 0);
    }
  } else if (fam(b, G.cushion)) {
    m = new THREE.Group();
    const pillow = add(THREE, m, new THREE.SphereGeometry(1, 14, 10), toonMat(0x4a2466));
    pillow.scale.set(b.a * 1.22, b.b * 1.25, b.c * 1.22);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(THREE, m, new THREE.SphereGeometry(0.012, 6, 5), lb.gold, sx * b.a * 0.92, 0, sz * b.c * 0.92);
  } else if (fam(b, G.armour) && b.cls !== 0) {
    m = new THREE.Group();
    if (v === 90) {
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.walnut);
    } else if (v === 91) {
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.85, b.a * 0.7, b.b * 2, 10), lb.steel);
      add(THREE, m, new THREE.SphereGeometry(b.a * 0.95, 9, 7), lb.steel, 0, b.b * 0.1, -0.008);
      add(THREE, m, new THREE.BoxGeometry(b.a * 1.7, 0.05, b.c * 2.4), lb.steel, 0, -b.b + 0.025, -0.03);
    } else if (v === 92) {
      const plate = add(THREE, m, new THREE.SphereGeometry(1, 14, 10), lb.steel, 0, b.b * 0.15, 0);
      plate.scale.set(b.a * 1.05, b.b * 0.9, b.c * 1.25);
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.75, b.a * 1.05, b.b * 0.7, 12), lb.steel, 0, -b.b * 0.66, 0);
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.78, b.a * 0.78, 0.02, 12), lb.gold, 0, -b.b * 0.3, 0);
    } else if (v === 93) {
      add(THREE, m, new THREE.SphereGeometry(b.a * 1.35, 10, 8), lb.steel, 0, b.b - b.a, 0);
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.8, b.a * 0.7, b.b * 1.5, 9), lb.steel, 0, -b.b * 0.1, 0);
      add(THREE, m, new THREE.SphereGeometry(b.a * 0.95, 9, 7), lb.steel, 0, -b.b + b.a * 0.8, 0);
    } else if (v === 94) {
      const helm = add(THREE, m, new THREE.SphereGeometry(b.a, 14, 10), lb.steel);
      helm.scale.set(1, 1.15, 1.05);
      add(THREE, m, new THREE.BoxGeometry(b.a * 1.3, 0.012, 0.02), lb.dark, 0, 0.012, -b.c * 0.98);
      const beak = add(THREE, m, new THREE.ConeGeometry(b.a * 0.5, b.a * 0.9, 5), lb.steel, 0, -0.02, -b.c * 0.95);
      beak.rotation.x = -Math.PI / 2;
      const plume = add(THREE, m, new THREE.ConeGeometry(0.03, 0.16, 7), toonMat(0xb3262a), 0, b.b + 0.06, 0.03);
      plume.rotation.x = 0.5;
    } else {
      // the halberd: ash shaft, axe blade, spike
      add(THREE, m, new THREE.CylinderGeometry(0.011, 0.011, b.b * 2, 7), toonMat(0x6a4a30));
      const blade = add(THREE, m, new THREE.CylinderGeometry(0.09, 0.09, 0.008, 3), lb.steel, 0.045, b.b - 0.14, 0);
      blade.rotation.x = Math.PI / 2;
      blade.rotation.z = Math.PI;
      add(THREE, m, new THREE.ConeGeometry(0.014, 0.12, 5), lb.steel, 0, b.b + 0.05, 0);
    }
  }

  // ---- the barrier ----
  else if (fam(b, G.brass) && b.cls !== 0) {
    m = new THREE.Group();
    if (v === 90) {
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.9, b.a, b.b * 2, 18), lb.brass);
      add(THREE, m, new THREE.SphereGeometry(b.a * 0.55, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), lb.brass, 0, b.b - 0.002, 0).scale.y = 0.4;
    } else if (v === 91) {
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.85, b.a * 0.95, b.b * 2, 10), lb.brass);
    } else {
      add(THREE, m, new THREE.SphereGeometry(b.a * 0.95, 12, 9), lb.brass);
      add(THREE, m, new THREE.TorusGeometry(b.a * 0.75, 0.006, 5, 14), lb.brass, 0, -b.b * 1.4, 0).rotation.x = Math.PI / 2;
    }
  } else if (fam(b, G.rope) && b.shape === 0) {
    m = new THREE.Group();
    const link = add(THREE, m, new THREE.CylinderGeometry(b.b * 1.1, b.b * 1.1, b.a * 2 + 0.014, 7), lb.velvet);
    link.rotation.z = Math.PI / 2;
    m.userData.noShadow = true;
  }

  // ---- staff and shop ----
  else if (fam(b, G.paper)) {
    m = new THREE.Group();
    const tex = kit.makeCanvas(128, 96, (g) => {
      g.fillStyle = '#e9e4d6';
      g.fillRect(0, 0, 128, 96);
      g.fillStyle = '#26221e';
      g.fillRect(6, 6, 116, 12);
      for (let y = 26; y < 90; y += 6) g.fillRect(6, y, 54, 2);
      for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) if ((i * 5 + j * 3) % 4) g.strokeRect(68 + i * 9, 28 + j * 9, 9, 9);
        else g.fillRect(68 + i * 9, 28 + j * 9, 9, 9);
    });
    const side = toonMat(0xd9d4c6);
    add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), [side, side, toonMat(0xffffff, { map: tex }), side, side, side]);
  } else if (fam(b, G.thermos)) {
    m = new THREE.Group();
    add(THREE, m, new THREE.CylinderGeometry(b.a * 0.95, b.a * 0.95, b.b * 1.6, 12), new THREE.MeshPhongMaterial({ color: 0x2f6b4f, shininess: 70 }), 0, -b.b * 0.2, 0);
    add(THREE, m, new THREE.CylinderGeometry(b.a * 0.8, b.a, b.b * 0.4, 12), lb.steel, 0, b.b * 0.8, 0);
  } else if (fam(b, G.sign) && b.cls !== 0) {
    m = new THREE.Group();
    const yellow = toonMat(0xf2c21c);
    if (v === 90) {
      // the board: drawn as the A-frame it is, bilingual
      const tex = kit.makeCanvas(128, 256, (g) => {
        g.fillStyle = '#f2c21c';
        g.fillRect(0, 0, 128, 256);
        g.fillStyle = '#1b1a1e';
        g.font = 'bold 22px Arial, sans-serif';
        g.textAlign = 'center';
        g.fillText('CAUTION', 64, 34);
        g.fillText('CUIDADO', 64, 60);
        poly(g, [64, 78, 110, 160, 18, 160]);
        g.fillStyle = '#f2c21c';
        poly(g, [64, 94, 96, 152, 32, 152]);
        g.fillStyle = '#1b1a1e';
        // a figure, slipping, with ears
        ell(g, 72, 112, 7, 7);
        poly(g, [66, 108, 68, 100, 72, 106]);
        poly(g, [73, 106, 77, 100, 78, 108]);
        g.lineWidth = 5;
        g.strokeStyle = '#1b1a1e';
        g.beginPath();
        g.moveTo(68, 120);
        g.lineTo(56, 136);
        g.lineTo(44, 132);
        g.moveTo(56, 136);
        g.lineTo(62, 148);
        g.lineTo(76, 144);
        g.stroke();
        g.font = 'bold 18px Arial, sans-serif';
        g.fillText('WET FLOOR', 64, 196);
        g.fillText('PISO MOJADO', 64, 222);
      });
      for (const s of [-1, 1]) {
        const panel = add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2.04, 0.008), [yellow, yellow, yellow, yellow, toonMat(0xffffff, { map: tex }), toonMat(0xffffff, { map: tex })], 0, 0, s * 0.05);
        panel.rotation.x = s * 0.2;
      }
      add(THREE, m, new THREE.BoxGeometry(b.a * 1.6, 0.02, 0.03), yellow, 0, b.b, 0);
    } else {
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), yellow);
    }
  } else if (fam(b, G.extinguisher)) {
    m = new THREE.Group();
    const red = new THREE.MeshPhongMaterial({ color: 0xc9221c, shininess: 80 });
    add(THREE, m, new THREE.CylinderGeometry(b.a * 0.92, b.a * 0.92, b.b * 1.5, 14), red, 0, -b.b * 0.25, 0);
    add(THREE, m, new THREE.SphereGeometry(b.a * 0.92, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2), red, 0, b.b * 0.5, 0);
    add(THREE, m, new THREE.CylinderGeometry(0.016, 0.02, 0.05, 8), lb.black, 0, b.b * 0.5 + b.a * 0.92, 0);
    add(THREE, m, new THREE.BoxGeometry(0.09, 0.012, 0.02), lb.black, 0.02, b.b * 0.93, 0);
    const hose = add(THREE, m, new THREE.TorusGeometry(0.06, 0.008, 5, 10, Math.PI), lb.black, -b.a * 0.6, b.b * 0.45, 0);
    hose.rotation.z = Math.PI / 2;
    add(THREE, m, new THREE.CylinderGeometry(b.a * 0.94, b.a * 0.94, 0.07, 14), toonMat(0xefe6cf), 0, -b.b * 0.1, 0);
  } else if (fam(b, G.acrylic)) {
    if (!dims(b, 0.075, 0.085, 0.075)) return shard(kit, b, 0xcfe8ec, true);
    // the donation box: clear, with what has been given
    m = new THREE.Group();
    const geo = new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2);
    add(THREE, m, geo, glassMat(kit, 0.18));
    m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xeaf6f8, transparent: true, opacity: 0.6 })));
    const r = rng(41);
    for (let k = 0; k < 9; k++) {
      const coin = add(THREE, m, new THREE.CylinderGeometry(0.011, 0.011, 0.003, 8), k % 3 ? lb.gold : lb.steel, (r() - 0.5) * 0.11, -b.b + 0.006 + k * 0.0032, (r() - 0.5) * 0.11);
      coin.rotation.y = r() * 3;
    }
    const bill = add(THREE, m, new THREE.BoxGeometry(0.07, 0.002, 0.03), toonMat(0x6a9a6a), 0.01, -b.b + 0.04, 0.01);
    bill.rotation.set(0.3, 0.6, 0.2);
    plaque(kit, m, 'give', 0.12, 0.06, 0, 0.02, -(b.c + 0.001));
    m.userData.noShadow = true;
  } else if (fam(b, G.snowGlobe)) {
    if (b.shape !== 1 || !near(b.a, 0.04)) return shard(kit, b, 0xcfe8ec, true);
    // the souvenir: a very small Felis rex in a permanent blizzard
    m = new THREE.Group();
    add(THREE, m, new THREE.CylinderGeometry(0.03, 0.036, 0.022, 12), lb.black, 0, -0.029, 0);
    const snow = add(THREE, m, new THREE.CircleGeometry(0.03, 10), toonMat(0xf4f4f8), 0, -0.017, 0);
    snow.rotation.x = -Math.PI / 2;
    const rexBody = add(THREE, m, new THREE.SphereGeometry(0.012, 7, 5), lb.bone, 0, 0.0, 0);
    rexBody.scale.set(1.6, 0.8, 0.8);
    add(THREE, m, new THREE.SphereGeometry(0.008, 6, 5), lb.bone, -0.02, 0.01, 0);
    for (const dx of [-0.004, 0.006]) add(THREE, m, new THREE.BoxGeometry(0.004, 0.016, 0.004), lb.bone, dx, -0.011, 0);
    add(THREE, m, new THREE.SphereGeometry(b.a, 14, 11), glassMat(kit, 0.28));
    m.userData.noShadow = true;
  } else if (fam(b, G.card) && b.cls !== 0) {
    // a postcard: one of the collection, both sides
    m = new THREE.Group();
    const face = toonMat(0xffffff, { map: lb.cards[Math.max(0, Math.min(5, Math.round((b.tint - 0.6) / 0.02)))] });
    const edge = toonMat(0xefe6cf);
    const thinX = b.a < b.c;
    add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), thinX ? [face, face, edge, edge, edge, edge] : [edge, edge, edge, edge, face, face]);
    m.userData.noShadow = true;
  } else if (fam(b, G.carousel) && b.cls !== 0) {
    m = new THREE.Group();
    if (b.b > b.a * 3) {
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.7, b.a * 0.7, b.b * 2, 7), lb.black);
      // the wire tiers the cards sit in
      for (const y of [-0.125, 0.075, 0.275]) add(THREE, m, new THREE.TorusGeometry(0.078, 0.004, 4, 16), lb.black, 0, y - 0.06, 0).rotation.x = Math.PI / 2;
    } else if (b.a > 0.1) {
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.9, b.a, b.b * 2, 16), lb.black);
    } else {
      add(THREE, m, new THREE.SphereGeometry(b.a, 8, 6), lb.black);
    }
  } else if (fam(b, G.plush)) {
    // the plush: green, soft, anatomically hopeful
    m = new THREE.Group();
    const felt = toonMat(0x5fae5a);
    const body = add(THREE, m, kit.roughen(new THREE.SphereGeometry(0.05, 12, 9), 0.05), felt, 0, -0.012, 0.012);
    body.scale.set(0.95, 0.9, 1.25);
    add(THREE, m, kit.roughen(new THREE.SphereGeometry(0.03, 10, 8), 0.05), felt, 0, 0.034, -0.052);
    const tail = add(THREE, m, new THREE.ConeGeometry(0.022, 0.07, 7), felt, 0, -0.02, 0.085);
    tail.rotation.x = Math.PI / 2;
    for (const s of [-1, 1]) {
      add(THREE, m, new THREE.SphereGeometry(0.005, 5, 4), lb.dark, s * 0.016, 0.044, -0.076);
      add(THREE, m, new THREE.SphereGeometry(0.012, 6, 5), felt, s * 0.03, -0.045, -0.02);
    }
    for (let k = 0; k < 3; k++) add(THREE, m, new THREE.ConeGeometry(0.008, 0.02, 4), toonMat(0xe98a2a), 0, 0.036 - k * 0.004, -0.01 + k * 0.03);
    add(THREE, m, new THREE.BoxGeometry(0.026, 0.004, 0.004), toonMat(0xf4f0e6), 0, 0.022, -0.078);
  }
  // ---- plain boxes that are ours: claimed so the shared chain's dims
  // keys can't mistake a bench leg for something else. Returned as bare
  // meshes with their own material, so main.js can still darken worn
  // leather and tint what has been knocked over ----
  if (!m && b.cls !== 0 && b.shape === 0 && (fam(b, G.wood) || fam(b, G.leather) || fam(b, G.chair))) {
    const mat = fam(b, G.wood) ? toonMat(0x54382a, { map: kit.woodTex }) : fam(b, G.leather) ? toonMat(0x6e1f24) : toonMat(0x7f838c);
    m = new THREE.Mesh(new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), mat);
  }
  return fuse(kit, m);
}

// a plain body's material (floor slab, walls, unrecognized props), or null.
// Fresh every call: main.js tints these per body (wear, the scored glow).
let floorTex = null;
export function material(kit, b) {
  const { toonMat } = kit;
  if (b.cls !== 0) return null;
  if (b.shape === 0 && b.a > 2 && b.b < 0.2) {
    // stone flags, honed, the joints a shade darker
    floorTex ??= (() => {
      const t = kit.makeCanvas(512, 512, (g) => {
        g.fillStyle = '#8c8577';
        g.fillRect(0, 0, 512, 512);
        const r = rng(19);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            const s = 0.9 + r() * 0.16;
            g.fillStyle = `rgb(${Math.round(196 * s)},${Math.round(188 * s)},${Math.round(170 * s)})`;
            g.fillRect(i * 128 + 2, j * 128 + 2, 124, 124);
            g.fillStyle = 'rgba(120,110,95,0.12)';
            for (let k = 0; k < 14; k++) g.fillRect(i * 128 + 4 + r() * 110, j * 128 + 4 + r() * 118, 6 + r() * 22, 1.5);
          }
        }
      });
      t.wrapS = t.wrapT = kit.THREE.RepeatWrapping;
      t.repeat.set(12.5, 2.2);
      return t;
    })();
    return toonMat(0xffffff, { map: floorTex });
  }
  if (fam(b, G.wall)) {
    // a partition or its lintel: each face is the colour of the room it
    // looks into (BoxGeometry's faces come +x, -x, +y, -y, +z, -z)
    const edge = toonMat(0xcfc6b0);
    return [toonMat(roomAt(b.px + 0.3).wall), toonMat(roomAt(b.px - 0.3).wall), edge, edge, edge, edge];
  }
  // the shell: the far wall is dressed room by room in decor(); an end wall
  // is its room's colour
  if (b.shape === 0 && b.b > 1.5) return toonMat(b.a > 2 ? 0x8a8474 : roomAt(Math.sign(b.px) * (HX - 0.5)).wall);
  return null;
}

// the tapestry is the building's one cloth: main.js hands the skinned patch
// over once, and it gets its picture (flipped: the sheet's u runs +x,
// which is right-to-left from the door)
export function cloth(kit, patch) {
  const tex = kit.makeCanvas(384, 512, (g) => paintTapestry(g, 384, 512));
  tex.wrapS = kit.THREE.RepeatWrapping;
  tex.repeat.x = -1;
  tex.offset.x = 1;
  patch.mesh.material = kit.toonMat(0xffffff, { map: tex, side: kit.THREE.DoubleSide });
  return true;
}

// where each picture hangs (room_museum.rs): centre, half-size, its card
const HUNG = [
  [13.06, 1.34, 0.66, 0.53, 'starry'], [15.28, 1.2, 0.38, 0.38, 'reddot'], [14.31, 1.26, 0.34, 0.44, 'scream'],
  [11.75, 1.22, 0.4, 0.4, 'kiss'], [10.72, 1.2, 0.38, 0.38, 'grid'], [6.97, 1.44, 0.48, 0.64, 'mona'],
  [5.7, 1.36, 0.46, 0.56, 'cat'], [8.68, 1.33, 0.82, 0.53, 'birth'], [4.37, 1.3, 0.42, 0.5, 'pearl'],
  [-4.5, 1.24, 0.52, 0.37, 'wave'], [-15.12, 1.24, 0.5, 0.42, 'whistler'], [-13.95, 1.25, 0.35, 0.43, 'gothic'],
];

// render-only dressing with no collision, added to the decor group: the
// walls' colours and mouldings (one mesh), every card and sign on a wall
// (one mesh), the names over the rooms (one mesh), and the skylight
export function decor(kit, group, hx, hz) {
  const { THREE } = kit;
  const lb = lib(kit);
  const s = new Sculpt(THREE);
  const gilt = 0xc79a35;
  const doorZ = -1.0, plen = hz - doorZ, pz = (hz + doorZ) / 2;
  ROOMS.forEach((r, i) => {
    const w = r.x1 - r.x0, cx = (r.x1 + r.x0) / 2;
    // the far wall: colour, dado, chair rail, picture rail, cornice
    s.box(w, WALL_TOP - 0.7, 0.01, r.wall, cx, (WALL_TOP + 0.7) / 2, hz - 0.006);
    s.box(w, 0.7, 0.014, r.dado, cx, 0.35, hz - 0.008);
    s.box(w, 0.035, 0.03, gilt, cx, 0.715, hz - 0.02);
    s.box(w, 0.05, 0.05, C.cream, cx, RAIL_Y + 0.03, hz - 0.03);
    s.box(w, 0.05, 0.04, C.cream, cx, 4.02, hz - 0.03);
    // the clerestory: tall round-headed windows over the frieze
    const nw = Math.max(1, Math.floor(w / 1.7));
    for (let k = 0; k < nw; k++) {
      const x = r.x0 + (w * (k + 0.5)) / nw;
      s.box(0.78, 0.96, 0.012, C.cream, x, 4.62, hz - 0.014);
      s.cyl(0.39, 0.39, 0.012, C.cream, x, 5.1, hz - 0.014, [Math.PI / 2, 0, 0], 16);
      s.box(0.66, 0.9, 0.012, 0xbfdcec, x, 4.62, hz - 0.02);
      s.cyl(0.33, 0.33, 0.012, 0xbfdcec, x, 5.07, hz - 0.02, [Math.PI / 2, 0, 0], 16);
      s.box(0.03, 1.2, 0.012, C.cream, x, 4.75, hz - 0.026);
      s.box(0.66, 0.03, 0.012, C.cream, x, 4.62, hz - 0.026);
    }
    s.box(w, 0.16, 0.1, C.cream, cx, WALL_TOP - 0.08, hz - 0.05);
    // the side walls of the room, as far forward as they are solid
    for (const [x, sx, solid] of [[r.x1, -1, i > 0], [r.x0, 1, i < ROOMS.length - 1]]) {
      const face = x + sx * (solid ? 0.097 : 0.006);
      const [z0, len] = solid ? [pz, plen] : [0, hz * 2];
      s.box(0.012, 0.7, len, r.dado, face, 0.35, z0);
      s.box(0.03, 0.035, len, gilt, face + sx * 0.008, 0.715, z0);
      s.box(0.05, 0.16, len, C.cream, face + sx * 0.02, WALL_TOP - 0.08, z0);
    }
  });
  // the hall: an arched niche behind David and a runner up to his rope
  s.box(1.7, 1.8, 0.008, 0xbfb08a, 0, 0.7 + 0.9, hz - 0.016);
  s.cyl(0.85, 0.85, 0.008, 0xbfb08a, 0, 2.5, hz - 0.016, [Math.PI / 2, 0, 0], 24);
  s.box(1.3, 0.004, 2.75, 0x7a1f26, 0, 0.003, -1.3);
  for (const sx of [-1, 1]) s.box(0.05, 0.004, 2.75, 0xd9b45a, sx * 0.6, 0.0045, -1.3);
  // the banner's rod
  s.cyl(0.012, 0.012, 0.7, C.brass, -10.9, 3.2, hz - 0.03, [0, 0, Math.PI / 2], 6);
  const walls = s.mesh(lb.vtoon);
  walls.receiveShadow = true;
  group.add(walls);

  // cards and signs: the atlas, one mesh
  const quads = [];
  const card = (key, w, h, x, y, z, yaw = Math.PI) => {
    const g = labelGeo(kit, key, w, h, yaw);
    g.translate(x, y, z);
    quads.push(g);
  };
  for (const [x, y, w, h, key] of HUNG) card(key, 0.22, 0.11, x - w - 0.17, y - h + 0.1, hz - 0.017);
  card('notart', 0.3, 0.15, HX - 0.008, 0.85, -0.9, -Math.PI / 2);
  card('cloak', 0.6, 0.3, -HX + 0.008, 2.0, -0.9, Math.PI / 2);
  card('warriors', 0.36, 0.18, -3.4 - 0.1, 1.45, 0.75, -Math.PI / 2);
  card('moai', 0.3, 0.15, -8.6 - 0.1, 1.3, -0.3, Math.PI / 2);
  const n = quads.reduce((k, g) => k + g.attributes.position.count, 0);
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2);
  let o = 0;
  for (const g of quads) {
    pos.set(g.attributes.position.array, o * 3);
    nor.set(g.attributes.normal.array, o * 3);
    uv.set(g.attributes.uv.array, o * 2);
    o += g.attributes.position.count;
    g.dispose();
  }
  const cg = new THREE.BufferGeometry();
  cg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  cg.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  cg.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  group.add(new THREE.Mesh(cg, atlas(kit).mat));

  // over each room, in the frieze: its name, and which way the others are
  const PX = 190, ROW = 64, CW = 1408;
  const friezeGeo = [];
  const frieze = kit.makeCanvas(CW, ROW * ROOMS.length, (g) => {
    ROOMS.forEach((r, i) => {
      const w = r.x1 - r.x0 - 0.5, px = Math.min(CW, Math.round(w * PX));
      const y = i * ROW;
      g.fillStyle = `#${r.dado.toString(16).padStart(6, '0')}`;
      g.fillRect(0, y, px, ROW);
      g.fillStyle = '#e2c26a';
      g.fillRect(0, y + 3, px, 2);
      g.fillRect(0, y + ROW - 5, px, 2);
      g.textBaseline = 'middle';
      const small = px < 560;
      g.font = `bold ${small ? 26 : 38}px Georgia, serif`;
      g.textAlign = 'center';
      g.fillText(i === 2 ? 'MVSEVM · THE GREAT HALL' : r.name, px / 2, y + ROW / 2 + 1, px * (small ? 0.9 : 0.5));
      if (!small) {
        g.font = 'bold 22px Georgia, serif';
        g.fillStyle = '#f2e6c0';
        if (i > 0) {
          g.textAlign = 'left';
          g.fillText(`‹ ${ROOMS[i - 1].name}`, 16, y + ROW / 2 + 1, px * 0.23);
        }
        if (i < ROOMS.length - 1) {
          g.textAlign = 'right';
          g.fillText(`${ROOMS[i + 1].name} ›`, px - 16, y + ROW / 2 + 1, px * 0.23);
        }
      }
      const q = new THREE.PlaneGeometry(w, ROW / PX).toNonIndexed();
      const a = q.attributes.uv;
      for (let k = 0; k < a.count; k++) a.setXY(k, a.getX(k) * (px / CW), 1 - (i + 1 - a.getY(k)) / ROOMS.length);
      q.rotateY(Math.PI);
      q.translate((r.x1 + r.x0) / 2, 3.72, hz - 0.013);
      friezeGeo.push(q);
    });
  });
  const fp = [], fn = [], fu = [];
  for (const q of friezeGeo) {
    fp.push(...q.attributes.position.array);
    fn.push(...q.attributes.normal.array);
    fu.push(...q.attributes.uv.array);
    q.dispose();
  }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
  fg.setAttribute('normal', new THREE.Float32BufferAttribute(fn, 3));
  fg.setAttribute('uv', new THREE.Float32BufferAttribute(fu, 2));
  group.add(new THREE.Mesh(fg, kit.toonMat(0xffffff, { map: frieze })));

  // the banner over the skeleton
  const banner = kit.makeCanvas(256, 384, (g) => {
    g.fillStyle = '#7a1f26';
    g.fillRect(0, 0, 256, 384);
    g.fillStyle = '#d9b45a';
    g.fillRect(10, 10, 236, 4);
    g.fillRect(10, 370, 236, 4);
    g.textAlign = 'center';
    g.fillStyle = '#efe6cf';
    g.font = 'bold 50px Georgia, serif';
    g.fillText('FELIS', 128, 86);
    g.fillText('REX', 128, 140);
    g.font = 'italic 22px Georgia, serif';
    g.fillText('tyrant housecat', 128, 190);
    g.fillText('68 million years', 128, 262);
    g.fillText('of knocking things', 128, 290);
    g.fillText('off ledges', 128, 318);
  });
  const bn = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.9), kit.toonMat(0xffffff, { map: banner }));
  bn.rotation.y = Math.PI;
  bn.position.set(-10.9, 2.74, hz - 0.022);
  group.add(bn);

  // the skylight over David: a shaft of day, drawn (there is no roof to
  // let it in). Additive and unlit, so it costs one draw and no light.
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 1.35, 5.0, 20, 1, true),
    new THREE.MeshBasicMaterial({ color: 0xfff0cc, transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  );
  shaft.position.set(0, 2.5, 1.2);
  shaft.renderOrder = 2;
  group.add(shaft);
}
