// The museum (room 11). The sim side is core/src/room_museum.rs;
// this module is how its bodies look. Contract: rooms/README.md.
//
// Recognition follows the builder's rule: GLOSS names the family, TINT the
// variant inside it (which picture, which bone). Brittle families are also
// matched on dims, because a shard inherits its parent's gloss and tint —
// a shard falls through to `shard()` and is drawn as a chip of the same
// stuff. Everything a visitor would look at faces -z, toward the open
// front; seen from there +x is on the LEFT.

// atmosphere: a hushed room with a little dust in the light
export const look = { haze: 0.014, sun: 0.85 };

// room_museum.rs: where the skeleton's compound origin stands (ribs need
// to know which side of the spine they are on)
const REX_Z = 1.95;
const RAIL_Y = 3.05;

// gloss families (room_museum.rs G_*)
const G = {
  stone: 0.61, pillar: 0.62, light: 0.64, counter: 0.59, canvas: 0.52, frame: 0.53, wire: 0.77, hook: 0.76,
  glass: 0.88, bone: 0.44, armature: 0.71, ceramic: 0.56, marble: 0.57, terracotta: 0.46, treasure: 0.78,
  crown: 0.79, brass: 0.70, rope: 0.07, armour: 0.72, meteorite: 0.68, geode: 0.48, globe: 0.42, wood: 0.41,
  leather: 0.08, cushion: 0.09, chair: 0.36, paper: 0.16, card: 0.17, carousel: 0.69, thermos: 0.67,
  sign: 0.38, extinguisher: 0.66, acrylic: 0.89, snowGlobe: 0.90, plush: 0.06,
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

function paintHaystacks(g, W, H) {
  const sky = g.createLinearGradient(0, 0, 0, H * 0.6);
  sky.addColorStop(0, '#9db9d6');
  sky.addColorStop(1, '#f3d3b0');
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#7f8fb4';
  poly(g, [0, H * 0.5, W * 0.3, H * 0.42, W * 0.6, H * 0.47, W, H * 0.4, W, H * 0.58, 0, H * 0.58]);
  g.fillStyle = '#c7b56a';
  g.fillRect(0, H * 0.56, W, H * 0.44);
  const r = rng(29);
  const dab = (x, y, w, h, c) => {
    g.fillStyle = c;
    g.save();
    g.translate(x, y);
    g.rotate(-0.5 + r());
    g.fillRect(-w / 2, -h / 2, w, h);
    g.restore();
  };
  for (let k = 0; k < 260; k++) dab(r() * W, H * (0.57 + r() * 0.43), 10 + r() * 14, 3 + r() * 3, ['#d9c46f', '#b9a654', '#e6d894', '#a9b46a', '#d6a86a'][(r() * 5) | 0]);
  for (let k = 0; k < 90; k++) dab(r() * W, r() * H * 0.45, 12 + r() * 16, 3 + r() * 3, ['#b9cde2', '#f6e3c8', '#e9c9c0', '#a9c0dc'][(r() * 4) | 0]);
  // the haystacks. Possibly.
  for (const [cx, cy, s] of [[0.33, 0.66, 1], [0.7, 0.62, 0.72]]) {
    g.fillStyle = 'rgba(90,80,120,0.35)';
    ell(g, W * (cx + 0.07 * s), H * (cy + 0.11 * s), W * 0.2 * s, H * 0.05 * s);
    g.fillStyle = '#c98a45';
    g.beginPath();
    g.moveTo(W * (cx - 0.16 * s), H * (cy + 0.1 * s));
    g.quadraticCurveTo(W * (cx - 0.15 * s), H * (cy - 0.14 * s), W * cx, H * (cy - 0.2 * s));
    g.quadraticCurveTo(W * (cx + 0.15 * s), H * (cy - 0.14 * s), W * (cx + 0.16 * s), H * (cy + 0.1 * s));
    g.closePath();
    g.fill();
    for (let k = 0; k < 60; k++) {
      const a = r() * Math.PI;
      const rr = r();
      dab(W * (cx + Math.cos(a) * 0.14 * s * rr), H * (cy + 0.08 * s - Math.sin(a) * 0.26 * s * rr), 9 * s + r() * 8, 3, ['#e6b05c', '#b9743a', '#f0c878', '#8f6a8a', '#d9944a'][(r() * 5) | 0]);
    }
  }
}

function paintAdmiral(g, W, H) {
  g.fillStyle = '#3a2a22';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#4c382c';
  g.fillRect(W * 0.68, 0, W * 0.2, H);
  // coat, epaulettes, a great deal of braid
  g.fillStyle = '#1d2a4a';
  poly(g, [W * 0.08, H, W * 0.16, H * 0.62, W * 0.4, H * 0.54, W * 0.6, H * 0.54, W * 0.84, H * 0.62, W * 0.92, H]);
  g.fillStyle = '#e9e2d0';
  poly(g, [W * 0.42, H * 0.55, W * 0.58, H * 0.55, W * 0.54, H * 0.78, W * 0.46, H * 0.78]);
  g.fillStyle = '#d6aa3c';
  for (const sx of [-1, 1]) {
    ell(g, W * (0.5 + sx * 0.3), H * 0.63, W * 0.11, H * 0.035);
    for (let k = 0; k < 5; k++) g.fillRect(W * (0.5 + sx * 0.3) - W * 0.09 + k * W * 0.04, H * 0.64, W * 0.02, H * 0.05);
    for (let k = 0; k < 4; k++) ell(g, W * (0.5 + sx * 0.12), H * (0.66 + k * 0.08), W * 0.02, W * 0.02);
  }
  // the face: florid, and not pleased
  g.fillStyle = '#e2a98c';
  ell(g, W * 0.5, H * 0.38, W * 0.17, H * 0.16);
  g.fillStyle = '#d98f7a';
  ell(g, W * 0.39, H * 0.42, W * 0.045, H * 0.03);
  ell(g, W * 0.61, H * 0.42, W * 0.045, H * 0.03);
  g.fillStyle = '#e9e6de';
  ell(g, W * 0.33, H * 0.4, W * 0.04, H * 0.06);
  ell(g, W * 0.67, H * 0.4, W * 0.04, H * 0.06);
  g.fillStyle = '#2a2420';
  ell(g, W * 0.43, H * 0.36, W * 0.02, H * 0.012);
  ell(g, W * 0.57, H * 0.36, W * 0.02, H * 0.012);
  g.strokeStyle = '#e9e6de';
  g.lineWidth = W * 0.03;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(W * 0.36, H * 0.31);
  g.lineTo(W * 0.47, H * 0.335);
  g.moveTo(W * 0.64, H * 0.31);
  g.lineTo(W * 0.53, H * 0.335);
  g.stroke();
  g.fillStyle = '#c98a72';
  poly(g, [W * 0.49, H * 0.37, W * 0.53, H * 0.44, W * 0.47, H * 0.44]);
  g.strokeStyle = '#7a3a30';
  g.lineWidth = W * 0.018;
  g.beginPath();
  g.moveTo(W * 0.42, H * 0.5);
  g.quadraticCurveTo(W * 0.5, H * 0.465, W * 0.58, H * 0.5);
  g.stroke();
  // the hat
  g.fillStyle = '#15151c';
  g.beginPath();
  g.moveTo(W * 0.14, H * 0.27);
  g.quadraticCurveTo(W * 0.5, H * -0.02, W * 0.86, H * 0.27);
  g.quadraticCurveTo(W * 0.5, H * 0.2, W * 0.14, H * 0.27);
  g.fill();
  g.strokeStyle = '#d6aa3c';
  g.lineWidth = W * 0.014;
  g.beginPath();
  g.moveTo(W * 0.16, H * 0.265);
  g.quadraticCurveTo(W * 0.5, H * 0.2, W * 0.84, H * 0.265);
  g.stroke();
  g.fillStyle = '#b3262a';
  ell(g, W * 0.5, H * 0.15, W * 0.035, W * 0.035);
  varnish(g, W, H, 0.45);
}

function paintSunflowers(g, W, H) {
  g.fillStyle = '#d9b63c';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#c59a2c';
  g.fillRect(0, H * 0.72, W, H * 0.28);
  g.fillStyle = '#8a8f4a';
  poly(g, [W * 0.36, H * 0.92, W * 0.33, H * 0.62, W * 0.67, H * 0.62, W * 0.64, H * 0.92]);
  g.fillStyle = '#b9b56a';
  g.fillRect(W * 0.33, H * 0.62, W * 0.34, H * 0.1);
  // every head has given up
  const heads = [[0.22, 0.5, 1.9], [0.42, 0.3, 0.3], [0.62, 0.36, -0.5], [0.8, 0.56, -1.9], [0.5, 0.52, 3.1]];
  for (const [hx, hy, droop] of heads) {
    g.strokeStyle = '#5f6a2a';
    g.lineWidth = W * 0.025;
    g.beginPath();
    g.moveTo(W * 0.5, H * 0.64);
    g.quadraticCurveTo(W * (0.5 + (hx - 0.5) * 0.6), H * (hy - 0.16), W * hx, H * hy);
    g.stroke();
    g.save();
    g.translate(W * hx, H * hy);
    g.rotate(droop);
    g.fillStyle = '#d98a1c';
    for (let k = 0; k < 9; k++) {
      g.save();
      g.rotate((k / 9) * Math.PI * 2);
      if (k % 3 !== 1) ell(g, 0, -W * 0.1, W * 0.028, W * 0.06);
      g.restore();
    }
    g.fillStyle = '#4a3418';
    ell(g, 0, 0, W * 0.07, W * 0.065);
    g.restore();
  }
  g.fillStyle = '#d98a1c';
  for (const [px, py, a] of [[0.2, 0.86, 0.4], [0.75, 0.9, -0.6], [0.84, 0.8, 1.2], [0.14, 0.76, -1]]) ell(g, W * px, H * py, W * 0.035, W * 0.014, a);
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
    walnut: toonMat(0x4a3024, { map: kit.woodTex }),
    gilt: phong(0xc79a35, 60, 0xffe9a8),
    giltPale: phong(0xe9cb6a, 80, 0xfff3c8),
    brass: kit.ringMat,
    bone: toonMat(0xe9dec2),
    boneShade: toonMat(0xc7b792),
    steel: phong(0xaab2bd, 120, 0xe8eef5),
    iron: phong(0x3f3d42, 50, 0x8f9aa8),
    velvet: toonMat(0x8f1d2a),
    black: toonMat(0x1b1a1e),
    dark: new THREE.MeshBasicMaterial({ color: 0x14110f }),
    glow: new THREE.MeshBasicMaterial({ color: 0xfff0d2 }),
    marble: toonMat(0xf1eee6),
    terracotta: toonMat(0xb5673f),
    jade: phong(0x4fa67c, 110, 0xdff5e8),
    gold: phong(0xe0b03a, 110, 0xfff0b0),
    enamel: phong(0x1f3f9a, 130),
    pictures: {
      90: pic(256, 320, paintPortrait),
      91: pic(256, 256, paintRedDot),
      92: pic(320, 216, paintHaystacks),
      93: pic(224, 288, paintAdmiral),
      94: pic(200, 260, paintSunflowers),
    },
  };
  L.cards = [L.pictures[90], L.pictures[91], L.pictures[92], L.pictures[93], L.pictures[94], pic(160, 224, paintRexCard)];
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
// a small flat sign facing -z
function plaque(kit, w, h, tex, x, y, z) {
  const { THREE } = kit;
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), kit.toonMat(0xffffff, { map: tex }));
  p.rotation.y = Math.PI;
  p.position.set(x, y, z);
  return p;
}
const labelCache = new Map();
function labelTex(kit, key, title, lines, ink, paper) {
  if (!labelCache.has(key)) labelCache.set(key, kit.makeCanvas(256, 128, (g) => paintLabel(g, 256, 128, title, lines, ink, paper)));
  return labelCache.get(key);
}
const brassLabel = (kit, key, title, lines) => labelTex(kit, key, title, lines, '#2a1d08', '#d2ad55');

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

// ------------------------------------------------------------ the recognizer ---
export function mesh(kit, b) {
  const { THREE, toonMat } = kit;
  const lb = lib(kit);
  const v = variant(b);
  let m = null;

  // ---- the building ----
  if (b.cls === 0 && fam(b, G.stone)) {
    m = new THREE.Group();
    if (b.shape === 2) {
      // a plinth's round shaft: drum, base ring, and its brass label
      const r = b.b, H = 2 * b.a + 2 * b.b;
      const wood = v === 92;
      add(THREE, m, new THREE.CylinderGeometry(r * 0.94, r * 0.98, H - 0.024, 20), wood ? lb.walnut : lb.stone, 0, -0.012, 0);
      add(THREE, m, new THREE.CylinderGeometry(r * 1.06, r * 1.12, 0.05, 20), wood ? lb.walnut : lb.stoneShade, 0, -H / 2 + 0.025, 0);
      if (wood) {
        add(THREE, m, new THREE.CylinderGeometry(r * 0.99, r * 0.99, 0.014, 20), lb.brass, 0, H / 2 - 0.07, 0);
        // the vitrine's own light: a warm strip under the lid of the base.
        // Lit, but not on the glow layer: bloomed through the glass above
        // it, it whited out the whole case in the haze pass (seen).
        add(THREE, m, new THREE.CylinderGeometry(r * 1.0, r * 1.0, 0.008, 20), lb.glow, 0, H / 2 - 0.03, 0);
        m.userData.emitter = { color: new THREE.Color(0xffe2b0), strength: 0.12, radius: 0.4 };
      } else {
        m.add(plaque(kit, 0.13, 0.065, brassLabel(kit, 'plinth', 'PLEASE', ['do not touch']), 0, H * 0.14, -(r * 0.99)));
      }
    } else if (v === 80) {
      // the dais: stone step, a red runner on top, the name on the riser
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.stoneShade);
      add(THREE, m, new THREE.BoxGeometry(b.a * 2 - 0.12, 0.006, b.c * 2 - 0.12), lb.velvet, 0, b.b + 0.002, 0);
      m.add(plaque(kit, 0.62, 0.085, brassLabel(kit, 'rex', 'FELIS REX', ['Late Cretaceous · identification disputed']), 0.2, 0, -(b.c + 0.002)));
    } else if (v === 81) {
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.stone);
      add(THREE, m, new THREE.BoxGeometry(b.a * 2 + 0.03, 0.03, b.c * 2 + 0.03), lb.stoneShade, 0, -b.b + 0.015, 0);
      m.add(plaque(kit, 0.36, 0.1, brassLabel(kit, 'attendants', 'EIGHT ATTENDANTS', ['terracotta · in procession']), 0, 0.02, -(b.c + 0.002)));
    } else {
      // a cap slab: stone on a plinth, walnut on a vitrine base
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), v >= 96 ? lb.walnut : lb.stoneShade);
    }
  } else if (b.cls === 0 && fam(b, G.light)) {
    // picture light: a brass tube on two arms off the wall, glowing down
    m = new THREE.Group();
    const tube = add(THREE, m, new THREE.CylinderGeometry(0.02, 0.02, b.a * 2, 10), lb.brass);
    tube.rotation.z = Math.PI / 2;
    for (const s of [-1, 1]) {
      const arm = add(THREE, m, new THREE.CylinderGeometry(0.006, 0.006, 0.15, 6), lb.brass, s * b.a * 0.6, 0.02, 0.07);
      arm.rotation.x = Math.PI / 2 - 0.25;
    }
    const lamp = add(THREE, m, new THREE.BoxGeometry(b.a * 1.9, 0.008, 0.022), lb.glow, 0, -0.02, 0);
    lamp.layers.enable(kit.GLOW_LAYER);
    const star = v >= 94;
    m.userData.emitter = { color: new THREE.Color(0xffe0a8), strength: star ? 1.5 : 0.9, radius: star ? 1.8 : 1.3 };
    kit.pendingLights.push({ node: m, color: 0xffe2b4, intensity: star ? 3.4 : 2.1, distance: star ? 3.6 : 3.0 });
    m.userData.noShadow = true;
  } else if (b.cls === 0 && fam(b, G.counter)) {
    m = new THREE.Group();
    add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.walnut);
    add(THREE, m, new THREE.BoxGeometry(b.a * 2 + 0.04, 0.02, b.c * 2 + 0.04), toonMat(0x2f5a4e), 0, b.b - 0.008, 0);
    m.add(plaque(kit, 0.6, 0.2, labelTex(kit, 'shop', 'GIFT SHOP', ['exit through here', 'all breakages must be paid for'], '#efe6cf', '#2f5a4e'), 0, -0.02, -(b.c + 0.002)));
  } else if (b.cls === 0 && fam(b, G.wood)) {
    // the tapestry's rod
    m = new THREE.Group();
    const rod = add(THREE, m, new THREE.CylinderGeometry(0.012, 0.012, b.a * 2 + 0.1, 8), lb.brass);
    rod.rotation.z = Math.PI / 2;
    for (const s of [-1, 1]) add(THREE, m, new THREE.SphereGeometry(0.022, 8, 6), lb.brass, s * (b.a + 0.06), 0, 0);
  } else if (fam(b, G.pillar) && b.cls !== 0) {
    // a loose pillar: square base, fluted shaft, capital
    m = new THREE.Group();
    m.userData.voice = 'stone';
    if (v === 91) {
      add(THREE, m, facet(new THREE.CylinderGeometry(b.a * 0.86, b.a * 0.98, b.b * 2, 12)), lb.stone);
      add(THREE, m, new THREE.CylinderGeometry(b.a * 1.08, b.a * 1.12, 0.03, 14), lb.stoneShade, 0, -b.b + 0.015, 0);
      m.add(plaque(kit, 0.12, 0.06, brassLabel(kit, 'plinth', 'PLEASE', ['do not touch']), 0, b.b * 0.25, -(b.a * 0.99)));
    } else if (v === 92) {
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.stoneShade);
      add(THREE, m, new THREE.CylinderGeometry(b.a * 0.98, b.a * 0.7, 0.04, 14), lb.stone, 0, -b.b - 0.02, 0);
    } else {
      add(THREE, m, new THREE.BoxGeometry(b.a * 2, b.b * 2, b.c * 2), lb.stoneShade);
    }
  }

  // ---- pictures ----
  else if (fam(b, G.canvas)) {
    const loose = v === 94; // the easel picture: one brittle panel, frame and all
    if (loose && !dims(b, 0.2, 0.26, 0.012)) return shard(kit, b, 0xd9b63c);
    m = new THREE.Group();
    const edge = toonMat(0xcfc3a4);
    const face = toonMat(0xffffff, { map: lb.pictures[v] || lb.pictures[91] });
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
      const st = add(THREE, m, new THREE.PlaneGeometry(b.a * 2, b.b * 2), new THREE.MeshBasicMaterial({ map: lb.streak, transparent: true, opacity: glazing ? 0.22 : 0.5, depthWrite: false }), 0, 0, -b.c - 0.001);
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
    m.add(plaque(kit, 0.12, 0.06, labelTex(kit, 'give', 'DONATIONS', ['suggested: generous']), 0, 0.02, -(b.c + 0.001)));
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
  return m;
}

// a plain body's material (floor slab, walls, unrecognized props), or null.
// Fresh every call: main.js tints these per body (wear, the scored glow).
let floorTex = null;
export function material(kit, b) {
  const { toonMat } = kit;
  if (b.cls === 0 && b.shape === 0 && b.a > 2 && b.b < 0.2) {
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
      t.repeat.set(3.6, 2.7);
      return t;
    })();
    return toonMat(0xffffff, { map: floorTex });
  }
  if (b.cls === 0 && b.shape === 0 && b.b > 1.5) return toonMat(0x2f5148); // gallery green
  return null;
}

// the tapestry is the room's one cloth: main.js hands the skinned patch
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

// render-only dressing with no collision, added to the decor group
export function decor(kit, group, hx, hz) {
  const { THREE, toonMat } = kit;
  const lb = lib(kit);
  const put = (geo, mat, x, y, z) => add(THREE, group, geo, mat, x, y, z);
  const cream = toonMat(0xe6dcc4);
  const dado = toonMat(0x223a34);
  // the far wall: dado, chair rail, picture rail, cornice
  put(new THREE.BoxGeometry(hx * 2, 0.56, 0.012), dado, 0, 0.42, hz - 0.012);
  put(new THREE.BoxGeometry(hx * 2, 0.035, 0.03), lb.gilt, 0, 0.715, hz - 0.02);
  put(new THREE.BoxGeometry(hx * 2, 0.05, 0.05), cream, 0, RAIL_Y + 0.03, hz - 0.03);
  put(new THREE.BoxGeometry(hx * 2, 0.16, 0.1), cream, 0, 3.72, hz - 0.05);
  for (const s of [-1, 1]) {
    put(new THREE.BoxGeometry(0.012, 0.56, hz * 2), dado, s * (hx - 0.012), 0.42, 0);
    put(new THREE.BoxGeometry(0.03, 0.035, hz * 2), lb.gilt, s * (hx - 0.02), 0.715, 0);
    put(new THREE.BoxGeometry(0.05, 0.05, hz * 2), cream, s * (hx - 0.03), RAIL_Y + 0.03, 0);
    put(new THREE.BoxGeometry(0.1, 0.16, hz * 2), cream, s * (hx - 0.05), 3.72, 0);
  }
  // the name of the place, in the frieze
  const frieze = kit.makeCanvas(1024, 96, (g) => {
    g.fillStyle = '#2f5148';
    g.fillRect(0, 0, 1024, 96);
    g.fillStyle = '#d9b45a';
    g.font = 'bold 54px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('MVSEVM  OF  FINE  &  FRAGILE  ARTS', 512, 66);
  });
  group.add(plaque(kit, 5.2, 0.42, frieze, 0, 3.36, hz - 0.012));
  // the wall cards: title, medium, and what the insurers said
  const cards = [
    [-0.55, 1.0, 'card0', 'Portrait of a Cat, Smiling', ['oil on poplar · artist unknown', 'the smile is unexplained']],
    [-2.62, 1.0, 'card1', 'Untitled (Red Dot)', ['acrylic on canvas, 1974', 'please do not chase']],
    [-4.24, 0.95, 'card2', 'Landscape with Haystacks,', ['Possibly', 'oil on canvas']],
    [1.52, 1.0, 'card3', 'The Admiral, Disapproving', ['oil on canvas', 'gift of the Admiral']],
  ];
  for (const [x, y, key, title, lines] of cards) group.add(plaque(kit, 0.2, 0.1, labelTex(kit, key, title, lines), x, y, hz - 0.011));
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
  group.add(plaque(kit, 0.62, 0.9, banner, 3.15, 2.52, hz - 0.012));
  put(new THREE.CylinderGeometry(0.012, 0.012, 0.7, 6), lb.brass, 3.15, 2.985, hz - 0.02).rotation.z = Math.PI / 2;
  // the visitor path: a runner from the door to the rope
  const runner = put(new THREE.PlaneGeometry(1.15, 5.0), toonMat(0x7a1f26, { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), 0, 0.0012, -0.72);
  runner.rotation.x = -Math.PI / 2;
  runner.receiveShadow = true;
  for (const s of [-1, 1]) {
    const edge = put(new THREE.PlaneGeometry(0.05, 5.0), toonMat(0xd9b45a, { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), s * 0.5, 0.0016, -0.72);
    edge.rotation.x = -Math.PI / 2;
  }
}
