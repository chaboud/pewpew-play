// Red Dot Rampage (room 10): the design-furniture store. The sim side is core/src/room_reddot.rs;
// this module is how its bodies look. Contract: rooms/README.md.
//
// Two ways a body is recognized (the sim file states the same contract):
//   * hero pieces by their exact dims, unique in this room (the HERO table
//     at the bottom of mesh());
//   * everything else by a vocabulary riding the laser optics:
//       gloss = FINISH + 0.002 * FORM, tint = a PALETTE slot.
//     A form is only read off a body whose dims are whole millimetres:
//     shards inherit gloss and tint but are cut at random, so they fall
//     through to material() and come out as plain chunks of their parent's
//     stuff.

// bright, clean, a little gallery dust in the air
export const look = { haze: 0.007, sun: 0.85 };

const FINISHES = [[0.1, 'matte'], [0.3, 'satin'], [0.5, 'lacq'], [0.66, 'stone'], [0.78, 'metal'], [0.9, 'glass']];
const BOX = 0, CYL = 1, CYL_X = 2, EGG = 4, CONE = 5, BOWL = 6, PUFF = 7, ROD_DOWN = 11, ROD_UP = 12;
// palette slots, by the sim's tint (red reflectance)
const PALETTE = [
  [0.96, 0xf4f1ea, 'white'], [0.93, 0xe5352b, 'red'], [0.9, 0xf5c531, 'yellow'], [0.87, 0xf4a3bd, 'pink'],
  [0.84, 0xf07f2e, 'orange'], [0.81, 0xddd0b8, 'beige'], [0.78, 0xe9e3d8, 'terrazzo'], [0.75, 0xc9a542, 'brass'],
  [0.72, 0xd8b684, 'oak'], [0.69, 0xc9ced6, 'chrome'], [0.63, 0xa9a59e, 'concrete'], [0.57, 0x6b4a35, 'walnut'],
  [0.51, 0xb8a4e3, 'lilac'], [0.45, 0x8fd6b3, 'mint'], [0.39, 0x2a4fd0, 'cobalt'], [0.33, 0x1f8f8c, 'teal'],
  [0.24, 0x26252c, 'black'],
];
const RED = 0xe5352b, INK = 0x26252c, PAPER = 0xf4f1ea, BRASS = 0xc9a542, WARM = 0xfff0d6;

function decode(gloss) {
  for (const [base, name] of FINISHES) {
    const d = gloss - base;
    if (d < -0.0007 || d > 0.0257) continue;
    const form = Math.round(d / 0.002);
    if (Math.abs(d - form * 0.002) < 0.0007) return { fin: name, form };
  }
  return null;
}
function slot(tint) {
  let best = null, err = 0.016;
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
let S = { group: null, plinths: [], labelled: new Set(), rug: [], ceil: 3.5 };

// --- textures (built once) ---------------------------------------------------
let tex = null;
function textures(kit) {
  if (tex) return tex;
  const { THREE, makeCanvas } = kit;
  let s = 20261111;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const chips = (g, n, size, cols) => {
    for (let k = 0; k < n; k++) {
      const x = rnd() * 256, y = rnd() * 256, r = size * (0.5 + rnd());
      g.fillStyle = cols[(rnd() * cols.length) | 0];
      g.beginPath();
      const sides = 3 + ((rnd() * 3) | 0), a0 = rnd() * 6.28;
      for (let i = 0; i < sides; i++) {
        const a = a0 + (i / sides) * 6.28, rr = r * (0.6 + rnd() * 0.5);
        g[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
      }
      g.fill();
    }
  };
  // plinth terrazzo: loud Memphis chips in cream
  const terrazzo = makeCanvas(256, 256, (g) => {
    g.fillStyle = '#ece6da';
    g.fillRect(0, 0, 256, 256);
    chips(g, 46, 11, ['#e5352b', '#2a4fd0', '#f5c531', '#26252c', '#f4a3bd', '#8fd6b3']);
    chips(g, 80, 4, ['#a9a59e', '#c9c2b4', '#26252c']);
  });
  // the floor: polished concrete with a quiet scatter of the same chips
  const floor = makeCanvas(256, 256, (g) => {
    g.fillStyle = '#aab0b8';
    g.fillRect(0, 0, 256, 256);
    for (let k = 0; k < 900; k++) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,255' : '120,116,110'},${0.05 + rnd() * 0.07})`;
      g.fillRect(rnd() * 256, rnd() * 256, 2 + rnd() * 5, 2 + rnd() * 5);
    }
    chips(g, 34, 5.5, ['#e5352b', '#2a4fd0', '#f5c531', '#26252c', '#f4f1ea', '#f4f1ea']);
    // saw-cut joints
    g.strokeStyle = 'rgba(90,86,80,0.35)';
    g.lineWidth = 1.5;
    g.strokeRect(0.75, 0.75, 254.5, 254.5);
  });
  // boucle: the cat tree's wool
  const boucle = makeCanvas(128, 128, (g) => {
    g.fillStyle = '#e4d9c4';
    g.fillRect(0, 0, 128, 128);
    for (let k = 0; k < 700; k++) {
      g.strokeStyle = `rgba(${rnd() < 0.5 ? '255,250,238' : '176,160,132'},0.55)`;
      g.lineWidth = 1.4;
      g.beginPath();
      g.arc(rnd() * 128, rnd() * 128, 1.5 + rnd() * 2.5, rnd() * 6.28, rnd() * 6.28 + 3);
      g.stroke();
    }
  });
  // "Field (Beige on Beige)": the whole rug; each tile shows its quarter
  const rug = makeCanvas(512, 380, (g) => {
    g.fillStyle = '#d9cbb0';
    g.fillRect(0, 0, 512, 380);
    g.fillStyle = '#cfc0a3';
    g.fillRect(26, 26, 460, 328);
    g.fillStyle = '#ddd0b6';
    g.fillRect(52, 52, 408, 276);
    g.fillStyle = '#d3c5a9';
    g.fillRect(150, 110, 212, 160);
    for (let k = 0; k < 2600; k++) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '255,248,230' : '150,134,104'},0.13)`;
      g.fillRect(rnd() * 512, rnd() * 380, 3, 1.5);
    }
    // fringe at both short ends
    g.strokeStyle = '#efe6d2';
    g.lineWidth = 2;
    for (let y = 4; y < 380; y += 7) {
      g.beginPath(); g.moveTo(0, y); g.lineTo(11, y); g.stroke();
      g.beginPath(); g.moveTo(501, y); g.lineTo(512, y); g.stroke();
    }
  });
  for (const t of [terrazzo, floor, boucle]) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(6, 4.4);
  tex = { terrazzo, floor, boucle, rug };
  return tex;
}

// --- materials ---------------------------------------------------------------
// shared: only for children of a Group. A body's own top-level material gets
// mutated by main.js (scratch wear, the scored tint, shard recolouring), so
// anything returned bare or from material() is built fresh.
const shared = new Map();
function freshMat(kit, fin, hex, opts = {}) {
  const { THREE, toonMat } = kit;
  if (fin === 'glass') {
    return new THREE.MeshPhongMaterial({ color: hex, transparent: true, opacity: 0.5, shininess: 180, specular: 0xffffff, side: THREE.DoubleSide, depthWrite: false, ...opts });
  }
  if (fin === 'metal') return new THREE.MeshPhongMaterial({ color: hex, shininess: 110, specular: 0xfff4d8, ...opts });
  if (fin === 'stone') {
    if (hex === 0xe9e3d8) return toonMat(0xffffff, { map: textures(kit).terrazzo, ...opts });
    return new THREE.MeshPhongMaterial({ color: hex, shininess: 45, specular: 0x8a8f96, ...opts });
  }
  return toonMat(hex, opts);
}
function M(kit, fin, hex) {
  const key = `${fin}:${hex}`;
  if (!shared.has(key)) shared.set(key, freshMat(kit, fin, hex));
  return shared.get(key);
}
const basic = (kit, hex) => new kit.THREE.MeshBasicMaterial({ color: hex });

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
function redDot(kit, r, filled = true) {
  const { THREE } = kit;
  const d = new THREE.Mesh(filled ? new THREE.CircleGeometry(r, 18) : new THREE.RingGeometry(r * 0.72, r, 18), new THREE.MeshBasicMaterial({ color: RED, side: THREE.DoubleSide }));
  return d;
}

// --- price tags and plinth plaques: names and prices come from the sim -------
function labelTex(kit, ex, plaque) {
  const sold = /\(sold/.test(ex.name);
  const name = ex.name.replace(/\s*\(sold[^)]*\)/, '');
  return text(kit, 320, plaque ? 190 : 210, (g) => {
    const H = plaque ? 190 : 210;
    g.fillStyle = '#fbfaf6';
    g.fillRect(0, 0, 320, H);
    g.strokeStyle = '#26252c';
    g.lineWidth = 3;
    g.strokeRect(1.5, 1.5, 317, H - 3);
    // the red dot: a sticker if it is sold, the house mark otherwise
    g.fillStyle = '#e5352b';
    g.beginPath();
    g.arc(sold ? 276 : 286, sold ? 44 : 34, sold ? 30 : 16, 0, 6.3);
    g.fill();
    g.fillStyle = '#26252c';
    g.font = `bold 62px ${FONT}`;
    g.textAlign = 'left';
    g.fillText(dollars(ex.price), 16, H - 46);
    g.font = `25px ${FONT}`;
    const lines = wrap(g, name, sold ? 232 : 256).slice(0, 3);
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
  const t = new THREE.Group();
  const card = board(kit, w, h, labelTex(kit, ex, false), true);
  card.position.y = -h * 0.5 - 0.02;
  card.rotation.z = 0.08;
  t.add(card);
  const str = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0015, 0.03, 4), M(kit, 'matte', RED));
  str.position.y = -0.012;
  t.add(str);
  // hook high enough that the card clears whatever the piece stands on
  const p = at ?? [Math.min(body.a * 0.55, 0.3), Math.max(Math.min(body.b * 0.7, 0.5), h + 0.025 - body.b), -body.c - 0.012];
  t.position.set(p[0], p[1], p[2]);
  t.rotation.y = ry;
  t.userData.tag = true;
  m.add(t);
}
// exhibits with no label of their own: ropes and posts are fittings, the
// rug's label lies on its corner (built with the rug)
const NO_TAG = new Set([1029, 1030, 1031]);
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
function generic(kit, body, fin, form, hex) {
  const { THREE } = kit;
  const { a, b, c } = body;
  // upholstery (boucle, the cast-resin sofa): main.js darkens the body's own
  // material per wear stage, so these get one each and go out as a bare mesh
  const soft = body.cls === 1 && (fin === 'matte' || form === PUFF);
  const mat = soft ? freshMat(kit, fin, hex) : M(kit, fin, hex);
  let geo = null, rot = null, scale = null;
  if (form === BOX) geo = new THREE.BoxGeometry(a * 2, b * 2, c * 2);
  else if (form === CYL) {
    geo = new THREE.CylinderGeometry(a, a, b * 2, a > 0.05 ? 28 : 12);
    if (Math.abs(a - c) > 0.001) scale = [1, 1, c / a];
  } else if (form === CYL_X) {
    geo = new THREE.CapsuleGeometry(b, Math.max(0.001, 2 * (a - b)), 4, 10);
    rot = [0, 0, Math.PI / 2];
  } else if (form === EGG) {
    geo = new THREE.SphereGeometry(1, 18, 14);
    if (fin === 'stone') kit.roughen(geo, 0.05);
    scale = [a, b, c];
  } else if (form === CONE) geo = new THREE.ConeGeometry(a, b * 2, 12);
  else if (form === BOWL) {
    geo = b > a
      // tall: a goblet — foot, stem, a bowl that flares
      ? lathe(kit, [[a * 0.75, -b], [a * 0.72, -b + 0.006], [0.006, -b + 0.012], [0.006, -b * 0.1], [a * 0.55, b * 0.25], [a * 0.95, b * 0.7], [a, b]])
      // squat: a bowl
      : lathe(kit, [[a * 0.35, -b], [a * 0.42, -b + 0.004], [a * 0.8, 0], [a * 0.97, b * 0.7], [a, b]], 24);
  } else if (form === PUFF) {
    // inflated: a capsule along the longest axis, squashed to the box
    const long = Math.max(a, b, c), ax = long === a ? 0 : long === b ? 1 : 2;
    const oth = [a, b, c].filter((_, k) => k !== ax);
    const r = Math.min(oth[0], oth[1]);
    geo = new THREE.CapsuleGeometry(r, Math.max(0.001, 2 * (long - r)), 6, 16);
    if (ax === 0) geo.rotateZ(Math.PI / 2);
    else if (ax === 2) geo.rotateX(Math.PI / 2);
    geo.scale(ax === 0 ? 1 : a / r, ax === 1 ? 1 : b / r, ax === 2 ? 1 : c / r);
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

// --- hero pieces ------------------------------------------------------------
function vessel(kit, pts, fin, hex, segs = 20) {
  const { THREE } = kit;
  const mat = fin === 'glass' ? M(kit, fin, hex) : freshMat(kit, fin, hex, { side: THREE.DoubleSide });
  return new THREE.Mesh(lathe(kit, pts, segs), mat);
}
// A lit thing: an emitter into the haze and the light volume, and (with
// `bloom`) a source for the glow pass. Bloom scales with how much screen the
// source covers, so it is for bulbs and tubes — a window or a 30 cm globe on
// the glow layer whites out its whole corner of the room (seen, and undone).
function glow(kit, m, mesh, hex, strength, radius, sprite = 0, bloom = true) {
  if (bloom) mesh.layers.enable(kit.GLOW_LAYER);
  if (strength > 0) m.userData.emitter = { color: new kit.THREE.Color(hex), strength, radius };
  if (sprite) m.add(kit.glowSprite(hex, sprite));
}
const lit = (kit, hex, warm) => new kit.THREE.MeshPhongMaterial({ color: hex, emissive: warm, emissiveIntensity: 0.9, shininess: 30 });

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
      // "Five Moons, Balanced": opal globes, lit from inside
      const globe = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), lit(kit, 0xfffaf0, 0xffe6bf));
      m.add(globe);
      // the top and bottom globes carry the stack's light into the room
      glow(kit, m, globe, 0xffe2b4, near(0.15) || near(0.07) ? 0.45 : 0, 1.2, 0, false);
    } else if (near(0.115)) {
      // "Moon, on a Stem It Did Not Choose"
      const globe = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), lit(kit, 0xfff3c8, 0xffd772));
      m.add(globe);
      glow(kit, m, globe, 0xffd36b, 0.7, 1.6, 0.42, false);
    } else if (near(0.13)) {
      // the coffee table's marble spheres
      const ball = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), M(kit, 'stone', 0xf1eee7));
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
    if (is(body, 1.3, 0.3, 0.012)) {
      // the shop sign: the dot is a lightbox, the letters are paint
      const face = new THREE.Group();
      face.rotation.y = Math.PI;
      face.position.z = -0.014;
      const tx = text(kit, 1040, 240, (g) => {
        g.fillStyle = '#26252c';
        g.font = `900 168px ${FONT}`;
        g.textAlign = 'left';
        g.fillText('RED DOT', 268, 102);
        g.font = `600 31px ${FONT}`;
        g.fillText('O B J E C T S     L I G H T I N G     R E G R E T', 274, 208);
      });
      face.add(new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.6), new THREE.MeshBasicMaterial({ map: tx, transparent: true })));
      const dot = new THREE.Mesh(new THREE.CircleGeometry(0.27, 40), basic(kit, 0xff3a2c));
      dot.position.set(-0.98, 0.03, 0.004);
      face.add(dot);
      m.add(face);
      glow(kit, m, dot, RED, 0.9, 2.6, 0);
      m.userData.noShadow = true;
      return m;
    }
    if (Math.abs(body.gloss - 0.92) < 0.004 && Math.min(a, c) < 0.02 && b > 0.5) {
      // the shop window: black steel frame, the street's daylight
      const along = Math.max(a, c);
      const side = c > a;
      const face = new THREE.Group();
      face.rotation.y = side ? (body.px < 0 ? Math.PI / 2 : -Math.PI / 2) : Math.PI;
      const sky = kit.makeCanvas(256, 256, (g) => {
        const gr = g.createLinearGradient(0, 0, 0, 256);
        gr.addColorStop(0, '#bfe0ff');
        gr.addColorStop(0.62, '#eef7ff');
        gr.addColorStop(1, '#fffbe9');
        g.fillStyle = gr;
        g.fillRect(0, 0, 256, 256);
        // the far side of the street
        g.fillStyle = 'rgba(150,170,196,0.55)';
        for (const [x, w, h] of [[0, 46, 96], [44, 38, 132], [80, 52, 84], [130, 34, 150], [162, 58, 104], [218, 40, 124]]) g.fillRect(x, 256 - h, w, h);
      });
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(along * 2, b * 2), new THREE.MeshBasicMaterial({ map: sky, side: THREE.DoubleSide }));
      face.add(pane);
      const steel = M(kit, 'satin', INK);
      for (const [w, h, x, y] of [[along * 2 + 0.1, 0.05, 0, b + 0.025], [along * 2 + 0.1, 0.05, 0, -b - 0.025], [0.05, b * 2, -along - 0.025, 0], [0.05, b * 2, along + 0.025, 0], [0.03, b * 2, -along / 3, 0], [0.03, b * 2, along / 3, 0]]) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.05), steel);
        bar.position.set(x, y, 0.005);
        face.add(bar);
      }
      // the name, in vinyl, read from the street
      const vinyl = new THREE.Mesh(new THREE.PlaneGeometry(along * 1.1, along * 0.22), new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: text(kit, 512, 100, (g) => {
        g.fillStyle = '#e5352b';
        g.beginPath(); g.arc(50, 50, 34, 0, 6.3); g.fill();
        g.fillStyle = '#26252c';
        g.font = `900 76px ${FONT}`;
        g.textAlign = 'left';
        g.fillText('RED DOT', 100, 54);
      }) }));
      vinyl.rotation.y = Math.PI; // faces the street; the shop reads it backwards
      vinyl.position.set(0, -b * 0.62, 0.012);
      face.add(vinyl);
      m.add(face);
      glow(kit, m, pane, 0xdcebff, 0.7, 3.2, 0, false);
      m.userData.noShadow = true;
      return m;
    }
    if (Math.abs(body.gloss - 0.86) < 0.004) {
      // a track spot: can, lens, and its stub of track
      const black = M(kit, 'satin', INK);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 6), black);
      stem.position.y = 0.14;
      m.add(stem);
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.13, 14), black);
      can.rotation.x = body.pz > 1.5 ? -0.5 : 0.35;
      m.add(can);
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.048, 14), basic(kit, WARM));
      lens.rotation.x = Math.PI / 2 + can.rotation.x;
      lens.position.set(0, -0.066 * Math.cos(can.rotation.x), -0.066 * Math.sin(can.rotation.x));
      m.add(lens);
      kit.pendingLights.push({ node: m, color: 0xfff8ee, intensity: 3.2, distance: 7.5 });
      m.userData.noShadow = true;
      return m;
    }
    if (is(body, 0.03, 0.01, 0.03)) {
      // a ceiling rose and its drop rod
      const chrome = M(kit, 'metal', 0xc9ced6);
      m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.02, 12), chrome));
      const L = Math.max(0.05, S.ceil - body.py);
      const drop = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, L, 5), chrome);
      drop.position.y = L / 2;
      m.add(drop);
      m.userData.noShadow = true;
      return m;
    }
    if (is(body, 0.65, 0.005, 0.475)) {
      // a quarter of the rug; the four work out who is who when all are in
      const tx = textures(kit).rug.clone();
      tx.needsUpdate = true;
      tx.repeat.set(0.5, 0.5);
      const tile = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xffffff, { map: tx }));
      S.rug.push({ tx, x: body.px, z: body.pz });
      if (S.rug.length === 4) {
        const cx = S.rug.reduce((t, r) => t + r.x, 0) / 4, cz = S.rug.reduce((t, r) => t + r.z, 0) / 4;
        // box top: u runs with +x, v runs toward -z
        for (const r of S.rug) r.tx.offset.set(r.x < cx ? 0 : 0.5, r.z < cz ? 0.5 : 0);
        // its label lies on the front corner nearest the door
        const ex = kit.exhibit?.(body.i);
        if (ex && S.group) {
          const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.2), new THREE.MeshBasicMaterial({ map: labelTex(kit, ex, false) }));
          lab.rotation.set(-Math.PI / 2, 0, Math.PI);
          lab.position.set(cx + a * 2 - 0.26, 0.0125, cz - c * 2 + 0.2);
          S.group.add(lab);
        }
      }
      tile.userData.noShadow = true;
      return tile;
    }
    if (is(body, 0.85, 0.45, 0.27)) {
      // the checkout: terrazzo, with the house mark on its face
      m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'stone', 0xe9e3d8)));
      const dot = redDot(kit, 0.2);
      dot.rotation.y = Math.PI;
      dot.position.set(0.42, 0.02, -c - 0.003);
      m.add(dot);
      const words = board(kit, 0.86, 0.2, text(kit, 640, 150, (g) => {
        g.fillStyle = '#26252c';
        g.font = `800 58px ${FONT}`;
        g.textAlign = 'left';
        g.fillText('ALL SALES', 8, 44);
        g.fillText('EXTREMELY FINAL', 8, 108);
      }));
      words.position.set(-0.34, 0.02, -c - 0.004);
      m.add(words);
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
    const wart = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), M(kit, 'lacq', 0x8fd6b3));
    wart.position.set(0.05, -0.02, 0.01);
    spin.add(wart);
    const ear = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.009, 6, 14, Math.PI), M(kit, 'lacq', 0xf5c531));
    ear.rotation.z = Math.PI / 2;
    ear.position.set(-0.045, 0.045, 0);
    spin.add(ear);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.09, 0.05), M(kit, 'lacq', 0x2a4fd0));
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
  } else if (is(body, 0.04, 0.08, 0.04)) {
    // "Tuesday's Flowers" (the sim keeps the water in it)
    m.add(vessel(kit, [[0.024, -b], [0.04, -b * 0.35], [0.034, b * 0.2], [0.018, b * 0.65], [0.028, b]], 'lacq', hex, 18));
    const stem = M(kit, 'matte', 0x4d8f4a);
    [[0.03, 0.1, 0.01, 0xe5352b], [-0.035, 0.12, -0.012, 0xf5c531], [0.005, 0.15, 0.03, 0xf4a3bd], [-0.012, 0.09, -0.032, 0xf4f1ea]].forEach(([x, y, z, col]) => {
      m.add(rod(kit, [0, b - 0.02, 0], [x, b + y, z], 0.003, stem));
      const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), M(kit, 'matte', col));
      bloom.position.set(x, b + y, z);
      m.add(bloom);
    });
  } else if (is(body, 0.017, 0.07, 0.017)) {
    // "One of Twelve"
    m.add(vessel(kit, [[0.012, -b], [0.017, -b * 0.4], [0.014, 0], [0.006, b * 0.5], [0.006, b * 0.85], [0.01, b]], 'lacq', hex, 12));
    const dot = redDot(kit, 0.006);
    dot.rotation.y = Math.PI;
    dot.position.set(0, -b * 0.35, -0.0175);
    m.add(dot);
  } else if (is(body, 0.035, 0.09, 0.035)) {
    // "Decant"
    m.add(vessel(kit, [[0.03, -b], [0.035, -b * 0.5], [0.031, 0.01], [0.013, b * 0.55], [0.012, b * 0.85], [0.021, b]], 'glass', hex, 16));
    m.userData.noShadow = true;
  } else if (is(body, 0.03, 0.04, 0.03)) {
    // "Almost Round": the candle shares these dims but not this finish
    const d = decode(body.gloss);
    if (d && d.fin === 'glass') {
      m.add(vessel(kit, [[0.001, -b + 0.004], [0.023, -b + 0.004], [0.024, -b], [0.031, b * 0.4], [0.029, b]], 'glass', hex, 16));
      m.userData.noShadow = true;
    } else {
      // "Concrete After Rain"
      m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.028, b * 2, 16), M(kit, 'stone', 0xa9a59e)));
      const wax = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.004, 14), M(kit, 'matte', 0xf2ead8));
      wax.position.y = b - 0.001;
      m.add(wax);
      const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0015, 0.012, 4), M(kit, 'matte', INK));
      wick.position.y = b + 0.006;
      m.add(wick);
      m.userData.voice = 'stone';
      const lab = new THREE.Mesh(new THREE.CylinderGeometry(0.0305, 0.0305, 0.034, 16, 1, true, Math.PI * 0.7, Math.PI * 0.6), M(kit, 'matte', PAPER));
      lab.position.y = -0.004;
      m.add(lab);
      const dot = redDot(kit, 0.007);
      dot.rotation.y = Math.PI;
      dot.position.set(0, -0.004, -0.0312);
      m.add(dot);
    }
  } else if (is(body, 0.075, 0.085, 0.075)) {
    // "Plumb": a pendant shaped like the thing that proves it hangs straight
    const bob = new THREE.Mesh(lathe(kit, [[0.004, -b], [0.04, -b * 0.35], [0.075, b * 0.35], [0.06, b * 0.6], [0.022, b * 0.82], [0.02, b]], 22), lit(kit, 0xffb46a, 0xff8a2e));
    m.add(bob);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.02, 12), M(kit, 'metal', BRASS));
    cap.position.y = b - 0.004;
    m.add(cap);
    glow(kit, m, bob, 0xff9a3c, 0.6, 1.5, 0.3);
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
    glow(kit, m, tubes.children[0], 0xff3a2c, 1.1, 2.0, 0.5);
    label(kit, m, body, { at: [-0.2, -b + 0.012, -c - 0.016] }); // under the sign, not across it
    return m;
  } else if (is(body, 0.085, 0.11, 0.03)) {
    // the register: a tablet on a brass stalk
    const tablet = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.115, 0.012), M(kit, 'lacq', 0x1c1b22));
    tablet.position.y = b - 0.062;
    tablet.rotation.x = 0.35;
    m.add(tablet);
    const screen = board(kit, 0.155, 0.1, text(kit, 310, 200, (g) => {
      g.fillStyle = '#fbfaf6';
      g.fillRect(0, 0, 310, 200);
      g.fillStyle = '#e5352b';
      g.beginPath(); g.arc(40, 40, 18, 0, 6.3); g.fill();
      g.fillStyle = '#26252c';
      g.font = `bold 24px ${FONT}`;
      g.fillText('TOTAL', 155, 44);
      g.font = `bold 66px ${FONT}`;
      g.fillText('$0.00', 155, 112);
      g.font = `20px ${FONT}`;
      g.fillText('so far', 155, 166);
    }));
    screen.position.set(0, 0, -0.0065);
    tablet.add(screen);
    const brass = M(kit, 'metal', BRASS);
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.13, 8), brass);
    stalk.position.y = -b + 0.07;
    m.add(stalk);
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.012, 16), brass);
    foot.position.y = -b + 0.006;
    m.add(foot);
    glow(kit, m, screen.children[0], 0xfff4e0, 0.35, 0.8, 0);
  } else if (is(body, 0.075, 0.011, 0.105)) {
    // the autumn catalogue
    const cover = toonMat(0xffffff, { map: text(kit, 150, 210, (g) => {
      g.fillStyle = '#e5352b';
      g.fillRect(0, 0, 150, 210);
      g.fillStyle = '#fbfaf6';
      g.beginPath(); g.arc(75, 84, 42, 0, 6.3); g.fill();
      g.font = `bold 19px ${FONT}`;
      g.fillText('AUTUMN', 75, 170);
    }) });
    const red = M(kit, 'satin', RED), page = M(kit, 'matte', PAPER);
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), [page, red, cover, red, page, page]));
  } else if (is(body, 0.13, 0.022, 0.17)) {
    // a first edition: boards, and the pages showing on three sides
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'matte', hex)));
    const pages = new THREE.Mesh(new THREE.BoxGeometry(a * 2 - 0.006, b * 2 - 0.012, c * 2 + 0.002), M(kit, 'matte', 0xefe8d6));
    pages.position.x = 0.006;
    m.add(pages);
  } else if (is(body, 0.006, 0.05, 0.006)) {
    // a stem out of a broken vase
    m.add(new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, b * 2, 5), M(kit, 'matte', 0x4d8f4a)));
    const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), M(kit, 'matte', body.tint < 0.5 ? RED : 0xf5c531));
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
    const glassMat = new THREE.MeshPhongMaterial({ color: 0xd3e6f0, shininess: 300, specular: 0xffffff, map: kit.makeCanvas(64, 128, (g) => {
      const gr = g.createLinearGradient(0, 0, 64, 128);
      gr.addColorStop(0, '#f4fbff');
      gr.addColorStop(0.45, '#bcd6e4');
      gr.addColorStop(0.55, '#e8f6fd');
      gr.addColorStop(1, '#a8c6d6');
      g.fillStyle = gr;
      g.fillRect(0, 0, 64, 128);
    }) });
    const face = new THREE.Mesh(new THREE.PlaneGeometry(c * 2 - 0.06, b * 2 - 0.06), glassMat);
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
    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.97, 24, 16, -Math.PI * 0.22, Math.PI * 1.44), new THREE.MeshToonMaterial({ color: 0xf5c531, side: THREE.BackSide }));
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
    glow(kit, m, bulb, 0xffe2b4, 0.8, 1.8, 0); // the light-budget pass adds its own halo
    kit.pendingLights.push({ node: m, color: 0xffe2b4, intensity: 2.2, distance: 4 });
    return m;
  } else if (is(body, 0.09, 0.07, 0.09)) {
    // the larger lamp's head: a shade tipped at the room
    const tip = new THREE.Group();
    tip.rotation.z = -0.75;
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.1, 0.15, 20, 1, true), freshMat(kit, 'lacq', hex, { side: THREE.DoubleSide }));
    tip.add(shade);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), M(kit, 'lacq', hex));
    cap.position.y = 0.075;
    tip.add(cap);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 10), basic(kit, WARM));
    bulb.position.y = -0.03;
    tip.add(bulb);
    m.add(tip);
    glow(kit, m, bulb, 0xffe2b4, 0.8, 1.8, 0.3);
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
    // the mobile's red disc
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(a, a, c * 2, 30), freshMat(kit, 'lacq', hex));
    disc.rotation.x = Math.PI / 2;
    m.add(disc);
    m.userData.voice = 'chime';
    label(kit, m, body, { at: [0, -0.1, -0.012] });
    return m;
  } else if (is(body, 0.09, 0.09, 0.006)) {
    // the mobile's yellow triangle
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
  } else if (is(body, 0.13, 0.085, 0.008)) {
    // PLEASE DO NOT TOUCH
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', PAPER)));
    const tx = text(kit, 390, 255, (g) => {
      g.fillStyle = '#fbfaf6';
      g.fillRect(0, 0, 390, 255);
      g.strokeStyle = '#e5352b';
      g.lineWidth = 12;
      g.strokeRect(6, 6, 378, 243);
      g.fillStyle = '#26252c';
      g.font = `900 64px ${FONT}`;
      g.fillText('PLEASE', 195, 62);
      g.fillText('DO NOT', 195, 128);
      g.fillStyle = '#e5352b';
      g.fillText('TOUCH', 195, 196);
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
    m.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'lacq', PAPER)));
    const tx = text(kit, 340, 520, (g) => {
      g.fillStyle = '#fbfaf6';
      g.fillRect(0, 0, 340, 520);
      g.fillStyle = '#e5352b';
      g.beginPath(); g.arc(170, 86, 54, 0, 6.3); g.fill();
      g.fillStyle = '#26252c';
      g.font = `900 66px ${FONT}`;
      ['YOU', 'BREAK IT,', 'YOU', 'BOUGHT IT.'].forEach((l, k) => {
        g.font = `900 ${k === 3 ? 56 : 62}px ${FONT}`;
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
  } else return null;
  label(kit, m, body);
  return m;
}

// a recognized body -> a THREE.Object3D (usually a Group), or null to let
// main.js's own chain / default box-sphere-capsule handle it
export function mesh(kit, body) {
  if (body.cls === 3 || body.cls === 4) return null;
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
  if (cls === 1 && d.fin === 'matte' && d.form === BOX && pal[2] === 'beige') {
    // the Ziggurat: boucle tiers on walnut plinth-lines, a cave in the widest.
    // Bare mesh with its own material — main.js mats the wool as it is clawed.
    const tier = new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), toonMat(0xffffff, { map: textures(kit).boucle }));
    const band = new THREE.Mesh(new THREE.BoxGeometry(a * 2 + 0.012, 0.022, c * 2 + 0.012), M(kit, 'satin', 0x6b4a35));
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
  if (cls === 2 && d.fin === 'satin' && d.form === BOX && pal[2] === 'white') {
    // a wrapped purchase: white paper, red ribbon, a bow
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.BoxGeometry(a * 2, b * 2, c * 2), M(kit, 'satin', PAPER)));
    const ribbon = M(kit, 'satin', RED);
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
  const g = generic(kit, body, d.fin, d.form, hex);
  if (!g) return null;
  if (cls === 0 && d.fin === 'stone' && d.form === BOX && Math.abs(a - c) < 0.001 && a <= 0.2 && b > 0.1) {
    S.plinths.push({ x: body.px, z: body.pz, half: a, top: body.py + b });
  }
  if (cls !== 0) label(kit, g, body, labelSpot(body, d));
  return g;
}

// where the swing tag hangs on pieces whose first body is not a good hook
function labelSpot(body, d) {
  // "Consequences": the seat is turned a quarter to face the table
  if (is(body, 0.2, 0.02, 0.2)) return { at: [-0.215, 0.2, -0.12], ry: Math.PI / 2 };
  // table tops and slabs: hang it off the front edge
  if (d.form === BOX && body.b < 0.03 && body.a > 0.15) return { at: [body.a * 0.6, -body.b, -body.c - 0.006] };
  return {};
}

// a plain body's material (floor slab, walls, shards), or null
export function material(kit, body) {
  const { toonMat } = kit;
  if (body.cls === 0 && body.a > 2 && body.b < 0.2) return toonMat(0xffffff, { map: textures(kit).floor });
  if (body.cls === 0 && body.b >= 1.5) return toonMat(0xf8f7f4); // gallery white
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
  S = { group, plinths: [], labelled: new Set(), rug: [], ceil: 3.5 };
  const ink = M(kit, 'satin', INK);
  // the lighting track: two runs wall to wall, over the spots the sim hangs
  for (const z of [0.2, 2.2]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(hx * 2, 0.03, 0.045), ink);
    rail.position.set(0, S.ceil - 0.06, z);
    group.add(rail);
  }
  // THE red dot: two metres of it, painted on the wall behind the lamps
  const big = new THREE.Mesh(new THREE.CircleGeometry(1.05, 56), toonMat(RED));
  big.rotation.y = -Math.PI / 2;
  big.position.set(hx - 0.012, 1.75, 0.75);
  group.add(big);
  // Memphis on the far wall: a squiggle, a triangle, a quarter-circle
  const far = hz - 0.012;
  const squig = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3([0, 1, 2, 3, 4, 5, 6].map((k) => new THREE.Vector3(k * 0.16 - 0.48, k % 2 ? 0.09 : -0.09, 0))), 40, 0.022, 6),
    toonMat(0x2a4fd0)
  );
  squig.position.set(-3.5, 2.75, far - 0.02);
  group.add(squig);
  const tri = new THREE.Mesh(new THREE.CircleGeometry(0.26, 3), toonMat(0xf5c531));
  tri.rotation.set(0, Math.PI, 0.5);
  tri.position.set(3.2, 2.5, far);
  group.add(tri);
  const quarter = new THREE.Mesh(new THREE.CircleGeometry(0.42, 20, 0, Math.PI / 2), toonMat(0xf4a3bd));
  quarter.rotation.y = Math.PI;
  quarter.position.set(2.5, 2.9, far);
  group.add(quarter);
  // the awards wall behind the checkout: four identical certificates
  const cert = text(kit, 160, 200, (g) => {
    g.fillStyle = '#fbfaf6';
    g.fillRect(0, 0, 160, 200);
    g.strokeStyle = '#26252c';
    g.lineWidth = 8;
    g.strokeRect(4, 4, 152, 192);
    g.fillStyle = '#e5352b';
    g.beginPath(); g.arc(80, 78, 36, 0, 6.3); g.fill();
    g.fillStyle = '#26252c';
    g.font = `bold 17px ${FONT}`;
    g.fillText('BEST', 80, 140);
    g.fillText('OF OUR OWN', 80, 162);
  });
  for (let k = 0; k < 4; k++) {
    const c = board(kit, 0.24, 0.3, cert);
    c.position.set(2.6 + k * 0.34, 1.62, far);
    group.add(c);
  }
  // the rules, in vinyl, above the glass
  const rules = board(kit, 1.9, 0.19, text(kit, 950, 95, (g) => {
    g.fillStyle = '#26252c';
    g.font = `800 50px ${FONT}`;
    g.fillText('GLASS  ·  HANDLE WITH MONEY', 475, 50);
  }));
  rules.position.set(-1.4, 2.12, far);
  group.add(rules);
  // the mat inside the door
  const matTex = text(kit, 512, 256, (g) => {
    g.fillStyle = '#26252c';
    g.fillRect(0, 0, 512, 256);
    g.fillStyle = '#e5352b';
    g.beginPath(); g.arc(256, 76, 40, 0, 6.3); g.fill();
    g.fillStyle = '#f4f1ea';
    g.font = `800 44px ${FONT}`;
    g.fillText('BROWSE CAREFULLY', 256, 170);
    g.font = `26px ${FONT}`;
    g.fillText('no pets', 256, 218);
  });
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.75), toonMat(0xffffff, { map: matTex }));
  mat.rotation.set(-Math.PI / 2, 0, Math.PI);
  mat.position.set(0, 0.004, -hz + 0.55);
  mat.receiveShadow = true;
  group.add(mat);
}
