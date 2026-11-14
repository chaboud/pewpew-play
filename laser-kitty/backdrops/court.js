// backdrops/court.js — the room as an exhibit. Founder: "whimsical tilt
// shift backgrounding to suggest that these levels are 'exhibit a, exhibit
// b, etc.' in a courtroom setting, being reviewed in the context of the
// case." The room is a scale model on a plywood base, on the evidence
// table, tagged; the courtroom around it is built at about 35 times the
// model's scale, so a coffee mug stands as tall as the living room wall
// and the people leaning in to look are weather.
//
// Screen terms: the game camera looks along +z, so screen-right is world
// -x. Near things (base, tags, mug, gavel, pad, pencil) are toon-lit with
// the room; the far set (bench, walls, windows) is painted and self-lit,
// authored to be seen soft, and the people in it are stuffed felt.

const INK = '#1b1a1c';

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
  g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
  g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y); g.closePath();
}
function fitText(g, text, maxW, px, font) {
  let s = px;
  do { g.font = font.replace('#', s); s -= 4; } while (g.measureText(text).width > maxW && s > 10);
}
// "EXHIBIT B" or "b" or "12-C" all name the same thing: the part after the word
export function exhibitId(label) {
  const m = /^\s*(?:exhibit\s+)?(.+?)\s*$/i.exec(String(label ?? 'A'));
  return (m ? m[1] : 'A').toUpperCase().slice(0, 6);
}

// the clerk's yellow sticker on the model's base
function paintSticker(g, w, h, id) {
  g.clearRect(0, 0, w, h);
  g.fillStyle = '#f3c531'; roundRect(g, 2, 2, w - 4, h - 4, 16); g.fill();
  g.strokeStyle = INK; g.lineWidth = 5; roundRect(g, 10, 10, w - 20, h - 20, 10); g.stroke();
  g.fillStyle = INK; g.textBaseline = 'alphabetic'; g.textAlign = 'left';
  g.font = '700 27px Georgia, "Times New Roman", serif'; g.fillText('PLAINTIFF’S', 30, 56);
  g.font = '900 74px Georgia, "Times New Roman", serif'; g.fillText('EXHIBIT', 27, 124);
  g.font = '600 21px Georgia, "Times New Roman", serif'; g.fillText('LASER v. KITTY', 31, 160);
  const bx = w - 172, bw = 144;
  g.fillStyle = '#fffdf4'; g.fillRect(bx, 26, bw, h - 52);
  g.lineWidth = 4; g.strokeRect(bx, 26, bw, h - 52);
  g.fillStyle = '#b3202a'; g.textAlign = 'center'; g.textBaseline = 'middle';
  fitText(g, id, bw - 18, 118, '900 #px Georgia, "Times New Roman", serif');
  g.fillText(id, bx + bw / 2, h / 2 + 6);
}
// the tent card standing on the model's back wall
function paintTent(g, w, h, id) {
  g.fillStyle = '#f3c531'; g.fillRect(0, 0, w, h);
  g.strokeStyle = INK; g.lineWidth = 6; g.strokeRect(7, 7, w - 14, h - 14);
  g.fillStyle = INK; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  g.font = '800 30px Georgia, "Times New Roman", serif'; g.fillText('EXHIBIT', w / 2, 46);
  g.textBaseline = 'middle';
  fitText(g, id, w - 40, 104, '900 #px Georgia, "Times New Roman", serif');
  g.fillText(id, w / 2, h * 0.63);
}

// --- the people in the room. Founder: "a little more deep, like sackboy or
// little big planet background". They were painted flats; they are now
// stuffed felt, a sewn head with button eyes on a soft body, with real
// arms: seen blurred, what reads as depth is form (a head is a ball with a
// nose and ears and hair standing off it), overlap that shifts when the
// view pans, and a hand that reaches most of the way to the model and so
// is nearly in focus while its owner is not.
//
// Felt is shaded by one matcap, not the scene's lights: the far set is
// self-lit paint so that a room which turns its own sun down (the
// showroom) does not put the court in the dark, and the giants belong to
// that set.
const fxOf = (w) => (a) => w * (0.75 - a / 6.2832);     // yaw (rad, + = screen-left) to canvas x on a sphere's map
const fyOf = (h) => (b) => h * (0.5 - b / Math.PI);     // pitch up from the equator to canvas y
function weaveOver(g, w, h, rnd, n = 1500) {
  g.lineWidth = 1; g.setLineDash([]);
  for (let i = 0; i < n; i++) {
    const x = rnd() * w, y = rnd() * h, l = 3 + rnd() * 9, v = rnd() > 0.5;
    g.strokeStyle = rnd() > 0.5 ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (v ? 0 : l), y + (v ? l : 0)); g.stroke();
  }
}
// a head's map: cheeks, felt brows, a mouth stitched on. The eyes, nose,
// ears and hair are sewn on as geometry.
function paintFace(g, w, h, o, rnd) {
  const fx = fxOf(w), fy = fyOf(h);
  g.fillStyle = o.skin; g.fillRect(0, 0, w, h);
  const sg = g.createLinearGradient(0, 0, 0, h);
  sg.addColorStop(0.5, 'rgba(70,24,34,0)'); sg.addColorStop(1, 'rgba(70,24,34,0.3)');
  g.fillStyle = sg; g.fillRect(0, 0, w, h);
  for (const s of [-1, 1]) {
    const cx = fx(s * 0.7), cy = fy(-0.2), rg = g.createRadialGradient(cx, cy, 1, cx, cy, w * 0.05);
    rg.addColorStop(0, 'rgba(208,84,84,0.5)'); rg.addColorStop(1, 'rgba(208,84,84,0)');
    g.fillStyle = rg; g.fillRect(cx - w * 0.06, cy - w * 0.06, w * 0.12, w * 0.12);
  }
  g.lineCap = 'round'; g.strokeStyle = o.brow || o.hair; g.lineWidth = h * 0.034;
  for (const s of [-1, 1]) { g.beginPath(); g.moveTo(fx(s * 0.2), fy(0.34 + (o.browIn || 0))); g.lineTo(fx(s * 0.56), fy(0.34 + (o.browOut || 0))); g.stroke(); }
  g.strokeStyle = '#4a2a2c'; g.lineWidth = h * 0.02; g.setLineDash([h * 0.034, h * 0.02]);
  const mw = o.mouthW || 0.24, my = fy(-0.5);
  g.beginPath(); g.moveTo(fx(mw), my); g.quadraticCurveTo(fx(0), my + h * (o.smile ?? 0.04), fx(-mw), my); g.stroke();
  // the seam where the head was closed, up the back
  g.strokeStyle = 'rgba(50,30,24,0.6)'; g.lineWidth = h * 0.012; g.setLineDash([h * 0.03, h * 0.022]);
  g.beginPath(); g.moveTo(w * 0.25, 0); g.lineTo(w * 0.25, h); g.stroke();
  weaveOver(g, w, h, rnd);
}
// a body's map: the cut of a suit (or a robe) in sewn-on pieces
function paintTorso(g, w, h, o, rnd) {
  const fx = fxOf(w), fy = fyOf(h);
  g.fillStyle = o.suit; g.fillRect(0, 0, w, h);
  g.lineCap = 'round'; g.lineJoin = 'round';
  if (o.robe) {
    g.fillStyle = '#f2efe6';
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(fx(s * 0.03), fy(1.3)); g.lineTo(fx(s * 0.5), fy(1.3)); g.lineTo(fx(s * 0.2), fy(0.5)); g.lineTo(fx(s * 0.03), fy(0.58)); g.closePath(); g.fill(); }
    g.strokeStyle = 'rgba(236,226,200,0.3)'; g.lineWidth = 3; g.setLineDash([9, 7]);
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(fx(s * 1.5), fy(1.0)); g.quadraticCurveTo(fx(s * 0.7), fy(0.5), fx(s * 0.3), fy(-0.4)); g.stroke(); }
  } else {
    g.fillStyle = o.shirt || '#f1eee6';
    g.beginPath(); g.moveTo(fx(1.0), fy(1.3)); g.lineTo(fx(-1.0), fy(1.3)); g.lineTo(fx(0), fy(0.15)); g.closePath(); g.fill();
    if (o.tie) {
      g.fillStyle = o.tie;
      g.beginPath(); g.moveTo(fx(0.16), fy(1.3)); g.lineTo(fx(-0.16), fy(1.3)); g.lineTo(fx(-0.1), fy(0.5)); g.lineTo(fx(0), fy(0.36)); g.lineTo(fx(0.1), fy(0.5)); g.closePath(); g.fill();
    }
    // lapels, a shade off the cloth, each with its row of stitches
    g.strokeStyle = 'rgba(255,255,255,0.13)'; g.lineWidth = h * 0.07; g.setLineDash([]);
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(fx(s * 1.12), fy(1.3)); g.lineTo(fx(s * 0.06), fy(0.08)); g.stroke(); }
    g.strokeStyle = 'rgba(20,14,20,0.55)'; g.lineWidth = 2; g.setLineDash([7, 6]);
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(fx(s * 1.3), fy(1.26)); g.lineTo(fx(s * 0.2), fy(0.02)); g.stroke(); }
    g.setLineDash([]); g.fillStyle = 'rgba(16,12,18,0.8)';
    for (const b of [-0.12, -0.42]) { g.beginPath(); g.arc(fx(0), fy(b), h * 0.026, 0, 7); g.fill(); }
    if (o.square) { g.fillStyle = o.square; g.fillRect(fx(-0.62), fy(0.5), w * 0.035, h * 0.045); }
  }
  weaveOver(g, w, h, rnd);
}

function plushKit(k, rnd) {
  const { THREE, canvas, mesh } = k;
  // one soft light from the windows, upper left, falling off into violet,
  // and the pale fuzz felt shows at a grazing edge
  const cap = canvas(256, 256, (g) => {
    const im = g.createImageData(256, 256), d = im.data, L = [-0.42, 0.56, 0.71];
    for (let j = 0; j < 256; j++) for (let i = 0; i < 256; i++) {
      let x = (i + 0.5) / 128 - 1, y = 1 - (j + 0.5) / 128;
      const r = Math.hypot(x, y); if (r > 0.995) { x *= 0.995 / r; y *= 0.995 / r; }
      const z = Math.sqrt(Math.max(0, 1 - x * x - y * y));
      const wl = Math.max(0, Math.min(1, (x * L[0] + y * L[1] + z * L[2] + 0.42) / 1.42));
      const s = 0.38 + 0.7 * Math.pow(wl, 1.15), fz = Math.pow(1 - z, 2.6) * 0.3, o = (j * 256 + i) * 4;
      d[o] = 255 * Math.min(1, s * (0.68 + 0.32 * wl) + fz);
      d[o + 1] = 255 * Math.min(1, s * (0.6 + 0.38 * wl) + fz * 0.94);
      d[o + 2] = 255 * Math.min(1, s * (0.8 + 0.12 * wl) + fz * 0.9);
      d[o + 3] = 255;
    }
    g.putImageData(im, 0, 0);
  });
  // a button: dark, with the window in it
  const gloss = canvas(64, 64, (g) => {
    g.fillStyle = '#17141b'; g.fillRect(0, 0, 64, 64);
    const rg = g.createRadialGradient(32, 32, 20, 32, 32, 32); rg.addColorStop(0, 'rgba(120,110,150,0)'); rg.addColorStop(1, 'rgba(150,140,180,0.55)');
    g.fillStyle = rg; g.fillRect(0, 0, 64, 64);
    const hl = g.createRadialGradient(21, 19, 1, 21, 19, 10); hl.addColorStop(0, 'rgba(255,255,255,1)'); hl.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = hl; g.fillRect(0, 0, 64, 64);
  });
  const weave = canvas(128, 128, (g) => { g.fillStyle = '#f4f2ee'; g.fillRect(0, 0, 128, 128); weaveOver(g, 128, 128, rnd, 700); });
  weave.wrapS = weave.wrapT = THREE.RepeatWrapping; weave.repeat.set(5, 3);
  const felt = (hex, map) => new THREE.MeshMatcapMaterial({ color: hex, matcap: cap, map: map || weave, fog: false });
  const button = new THREE.MeshMatcapMaterial({ color: 0xffffff, matcap: gloss, fog: false });
  const wire = new THREE.MeshBasicMaterial({ color: 0x2a2622, fog: false });
  // heads and bodies get the round ball; everything sewn onto them, and
  // the jury across the room, a coarse one (the lot is seen out of focus)
  const ball = new THREE.SphereGeometry(1, 26, 18), bead = new THREE.SphereGeometry(1, 14, 10);
  const UP = new THREE.Vector3(0, 1, 0), FWD = new THREE.Vector3(0, 0, 1);
  const blob = (mat, x, y, z, sx, sy = sx, sz = sx, geo = bead) => { const m = mesh(geo, mat, x, y, z); m.scale.set(sx, sy, sz); return m; };
  // a stuffed limb between two points
  const limb = (a, b, r, mat) => {
    const d = new THREE.Vector3().subVectors(b, a), len = d.length();
    const m = mesh(new THREE.CapsuleGeometry(r, len, 4, 12), mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    m.quaternion.setFromUnitVectors(UP, d.normalize());
    return m;
  };
  // a head and shoulders, facing the camera (-z), origin at the waist.
  // o: { scale, suit, shirt, tie, robe, skin, hair, style: 'short' | 'wig' | 'bun', glasses, ... }
  const person = (o, R) => {
    const s = (o.scale || 1) * R, g = new THREE.Group();
    const cloth = felt(o.suit), skin = felt(o.skin), hairMat = felt(o.hair);
    g.add(blob(felt(0xffffff, canvas(512, 256, (c) => paintTorso(c, 512, 256, o, rnd))), 0, 5.2 * s, 0, 6.0 * s, 5.6 * s, 3.6 * s, ball));
    for (const sx of [-1, 1]) g.add(blob(cloth, sx * 5.0 * s, 8.2 * s, 0, 2.3 * s));
    const head = new THREE.Group(), hr = 3.3 * s, hx = hr * 1.06, hz = hr * 0.96;
    head.position.set(0, 13.4 * s, -0.5 * s);
    head.add(blob(felt(0xffffff, canvas(512, 256, (c) => paintFace(c, 512, 256, o, rnd))), 0, 0, 0, hx, hr, hz, ball));
    for (const sx of [-1, 1]) head.add(blob(skin, sx * hx * 0.99, 0.1 * s, 0.3 * s, 0.5 * s, 0.85 * s, 0.7 * s));
    head.add(blob(skin, 0, -0.13 * hr, -hz * 0.98, 0.5 * s, 0.44 * s, 0.52 * s)); // the nose
    const on = (a, b, lift) => new THREE.Vector3(Math.sin(a) * Math.cos(b) * hx, Math.sin(b) * hr, -Math.cos(a) * Math.cos(b) * hz).multiplyScalar(lift);
    const rims = [];
    for (const sx of [-1, 1]) {
      const p = on(sx * 0.37, 0.06, 0.975), n = p.clone().normalize();
      const eye = blob(button, p.x, p.y, p.z, 0.5 * s, 0.5 * s, 0.22 * s); eye.quaternion.setFromUnitVectors(FWD, n); head.add(eye);
      if (o.glasses) {
        const q = on(sx * 0.37, 0.06, 1.1);
        const rim = mesh(new THREE.TorusGeometry(0.92 * s, 0.1 * s, 6, 20), wire, q.x, q.y, q.z); rim.quaternion.setFromUnitVectors(FWD, n); head.add(rim); rims.push(q);
      }
    }
    if (rims.length) head.add(limb(rims[0].clone().setX(rims[0].x * 0.34), rims[1].clone().setX(rims[1].x * 0.34), 0.08 * s, wire));
    // hair stands off the head: a felt cap, and whatever the style adds
    const capGeo = new THREE.SphereGeometry(1, 20, 8, 0, Math.PI * 2, 0, o.style === 'bun' ? 1.5 : 1.3);
    const hc = mesh(capGeo, hairMat); hc.scale.set(hx * 1.06, hr * 1.07, hz * 1.08); hc.rotation.x = o.style === 'bun' ? 0.62 : 0.5; head.add(hc);
    if (o.style === 'wig') for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) head.add(blob(hairMat, sx * hx * (1.02 - 0.04 * i), hr * (0.42 - 0.44 * i), hz * 0.2, 0.95 * s, 0.8 * s, 0.95 * s));
    if (o.style === 'bun') {
      head.add(blob(hairMat, 0, hr * 1.12, hz * 0.5, 1.5 * s));
      for (const sx of [-1, 1]) head.add(blob(hairMat, sx * hx * 0.98, -0.5 * s, hz * 0.3, 1.0 * s, 2.5 * s, 1.7 * s));
    }
    g.add(head);
    return { group: g, head, s, cloth, skin };
  };
  return { felt, button, wire, bead, blob, limb, person };
}

function paintWall(g, w, h, rnd) {
  // upper wall, darker toward the ceiling
  const ug = g.createLinearGradient(0, 0, 0, h);
  ug.addColorStop(0, '#8f8a74'); ug.addColorStop(0.3, '#c6bfa4'); ug.addColorStop(0.7, '#d2cbb0');
  g.fillStyle = ug; g.fillRect(0, 0, w, h);
  g.fillStyle = '#6a4a30'; g.fillRect(0, h * 0.20, w, h * 0.025); // cornice
  // tall windows with the afternoon in them
  for (const u of [0.10, 0.30, 0.70, 0.90]) {
    const ww = w * 0.085, x = w * u - ww / 2, y0 = h * 0.36, y1 = h * 0.69;
    g.save();
    g.shadowColor = 'rgba(255,236,190,0.9)'; g.shadowBlur = 36;
    g.beginPath(); g.moveTo(x, y1); g.lineTo(x, y0 + ww / 2); g.arc(x + ww / 2, y0 + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y1); g.closePath();
    const wg = g.createLinearGradient(0, y0, 0, y1);
    wg.addColorStop(0, '#dff0ff'); wg.addColorStop(0.6, '#fff8e2'); wg.addColorStop(1, '#ffe9b8');
    g.fillStyle = wg; g.fill();
    g.restore();
    g.strokeStyle = '#5a3d27'; g.lineWidth = 5;
    g.beginPath(); g.moveTo(x + ww / 2, y0); g.lineTo(x + ww / 2, y1);
    for (const f of [0.35, 0.6, 0.82]) { g.moveTo(x, y0 + (y1 - y0) * f); g.lineTo(x + ww, y0 + (y1 - y0) * f); }
    g.stroke();
    g.lineWidth = 9; g.beginPath(); g.moveTo(x, y1); g.lineTo(x, y0 + ww / 2); g.arc(x + ww / 2, y0 + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y1); g.closePath(); g.stroke();
    // a shaft of dusty light falling into the room
    const sg = g.createLinearGradient(x, y0, x + ww * 2.2, h);
    sg.addColorStop(0, 'rgba(255,244,214,0.22)'); sg.addColorStop(1, 'rgba(255,244,214,0)');
    g.fillStyle = sg; g.beginPath(); g.moveTo(x, y0 + ww / 2); g.lineTo(x + ww, y0 + ww / 2); g.lineTo(x + ww * 3.0, h); g.lineTo(x + ww * 1.2, h); g.closePath(); g.fill();
  }
  // the seal over the bench
  g.fillStyle = '#b8923f'; g.beginPath(); g.arc(w * 0.5, h * 0.50, h * 0.085, 0, 7); g.fill();
  g.fillStyle = '#d9b860'; g.beginPath(); g.arc(w * 0.5, h * 0.50, h * 0.066, 0, 7); g.fill();
  g.strokeStyle = '#8a6a26'; g.lineWidth = 4;
  // scales of justice, in a few strokes
  g.beginPath(); g.moveTo(w * 0.5, h * 0.455); g.lineTo(w * 0.5, h * 0.545); g.moveTo(w * 0.47, h * 0.475); g.lineTo(w * 0.53, h * 0.475);
  g.moveTo(w * 0.47, h * 0.475); g.lineTo(w * 0.462, h * 0.51); g.moveTo(w * 0.47, h * 0.475); g.lineTo(w * 0.478, h * 0.51);
  g.moveTo(w * 0.53, h * 0.475); g.lineTo(w * 0.522, h * 0.51); g.moveTo(w * 0.53, h * 0.475); g.lineTo(w * 0.538, h * 0.51); g.stroke();
  // walnut wainscot, panelled
  const y = h * 0.705;
  g.fillStyle = '#573722'; g.fillRect(0, y, w, h - y);
  g.fillStyle = '#7a5334'; g.fillRect(0, y, w, h * 0.018);
  for (let k = 0; k < 24; k++) {
    const px = (k + 0.12) * (w / 24), pw = (w / 24) * 0.76;
    g.fillStyle = k % 2 ? '#654128' : '#6b462b'; g.fillRect(px, y + h * 0.045, pw, h * 0.2);
    g.strokeStyle = 'rgba(30,16,8,0.5)'; g.lineWidth = 2; g.strokeRect(px, y + h * 0.045, pw, h * 0.2);
  }
  for (let k = 0; k < 400; k++) { g.fillStyle = `rgba(${rnd() > 0.5 ? '255,235,200' : '20,10,0'},0.035)`; g.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 60, 1 + rnd() * 2); }
}

function paintBench(g, w, h) {
  g.fillStyle = '#4b2c19'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#7b5232'; g.fillRect(0, 0, w, h * 0.05);
  g.fillStyle = '#3a2112'; g.fillRect(0, h * 0.05, w, h * 0.02);
  for (let k = 0; k < 5; k++) {
    const px = w * (0.04 + k * 0.188), pw = w * 0.168;
    g.fillStyle = '#5a3620'; g.fillRect(px, h * 0.12, pw, h * 0.3);
    g.strokeStyle = '#2c180c'; g.lineWidth = 4; g.strokeRect(px, h * 0.12, pw, h * 0.3);
    g.strokeStyle = 'rgba(255,220,170,0.18)'; g.lineWidth = 2; g.strokeRect(px + 8, h * 0.12 + 8, pw - 16, h * 0.3 - 16);
  }
}

function paintTable(g, s, rnd) {
  g.fillStyle = '#93623a'; g.fillRect(0, 0, s, s);
  // long grain: every streak closes on itself across the tile
  for (let k = 0; k < 340; k++) {
    const y = rnd() * s, dark = rnd() > 0.45, a = 0.04 + rnd() * 0.13, amp = 1 + rnd() * 5, f = 1 + Math.floor(rnd() * 3), ph = rnd() * 6.3;
    g.strokeStyle = dark ? `rgba(58,30,12,${a})` : `rgba(226,170,110,${a})`;
    g.lineWidth = 0.6 + rnd() * 2.4;
    g.beginPath();
    for (let x = 0; x <= s; x += 16) { const yy = y + Math.sin((x / s) * 6.283 * f + ph) * amp; if (x === 0) g.moveTo(x, yy); else g.lineTo(x, yy); }
    g.stroke();
  }
  g.fillStyle = 'rgba(40,20,8,0.45)';
  for (const y of [0, s / 2]) g.fillRect(0, y, s, 2.5); // board seams
}

function paintPad(g, w, h, rnd) {
  g.fillStyle = '#efd766'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#8a6a3a'; g.fillRect(0, 0, w, h * 0.07);
  g.strokeStyle = 'rgba(70,110,170,0.5)'; g.lineWidth = 1;
  for (let y = h * 0.14; y < h; y += h * 0.058) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
  g.strokeStyle = 'rgba(190,60,60,0.6)'; g.beginPath(); g.moveTo(w * 0.16, h * 0.07); g.lineTo(w * 0.16, h); g.stroke();
  g.strokeStyle = '#2b2f55'; g.lineWidth = 1.6; g.lineCap = 'round';
  for (let r = 0; r < 6; r++) { // counsel's notes
    const y = h * (0.19 + r * 0.058), len = w * (0.3 + rnd() * 0.45);
    g.beginPath(); g.moveTo(w * 0.2, y);
    for (let x = w * 0.2; x < w * 0.2 + len; x += 5) g.lineTo(x, y - 2 + Math.sin(x * 0.9 + r) * 2.4 * rnd());
    g.stroke();
  }
  // a cat, doodled during testimony, and a figure underlined twice
  const cx = w * 0.62, cy = h * 0.72, r = w * 0.11;
  g.lineWidth = 2.2; g.beginPath(); g.arc(cx, cy, r, 0, 7);
  g.moveTo(cx - r * 0.85, cy - r * 0.5); g.lineTo(cx - r * 0.75, cy - r * 1.45); g.lineTo(cx - r * 0.2, cy - r * 0.95);
  g.moveTo(cx + r * 0.85, cy - r * 0.5); g.lineTo(cx + r * 0.75, cy - r * 1.45); g.lineTo(cx + r * 0.2, cy - r * 0.95);
  g.moveTo(cx - r * 0.45, cy - r * 0.1); g.lineTo(cx - r * 0.2, cy - r * 0.1); g.moveTo(cx + r * 0.2, cy - r * 0.1); g.lineTo(cx + r * 0.45, cy - r * 0.1);
  g.moveTo(cx - r * 0.2, cy + r * 0.35); g.quadraticCurveTo(cx, cy + r * 0.6, cx + r * 0.2, cy + r * 0.35); g.stroke();
  g.fillStyle = '#2b2f55'; g.font = `700 ${Math.round(w * 0.11)}px Georgia, serif`; g.textAlign = 'left'; g.fillText('$ ? ? ?', w * 0.2, h * 0.93);
  g.beginPath(); g.moveTo(w * 0.19, h * 0.95); g.lineTo(w * 0.62, h * 0.95); g.moveTo(w * 0.19, h * 0.965); g.lineTo(w * 0.62, h * 0.965); g.stroke();
}

export function build(k, geo, opts = {}) {
  const { THREE, toonMat, canvas, basic, card, mesh } = k;
  const { hx, hz, top, R } = geo;
  const stand = geo.back ?? 2.6; // how far in front of the open face the camera stands
  const rnd = k.rnd(11);
  const group = new THREE.Group();
  const yBase = -0.2;                         // underside of the room's floor slab
  const baseH = 0.56 * R, lip = 0.26 * R;      // the model's plywood base
  const yT = yBase - baseH;                   // the table top
  const bx = hx + 0.2 + lip, bz = hz + 0.2 + lip;
  const yFloor = yT - 26 * R;                 // the courtroom floor, a table-height below
  const sr = (v) => -v;                       // screen-right to world x

  // --- the model's base, and its tags (in focus, lit with the room)
  const ply = canvas(16, 64, (g) => {
    for (let i = 0; i < 16; i++) { g.fillStyle = i % 2 ? '#c3a67c' : '#d9c4a0'; g.fillRect(0, i * 4, 16, 4); }
  });
  group.add(mesh(new THREE.BoxGeometry(bx * 2, baseH - 0.05 * R, bz * 2), toonMat(0xffffff, { map: ply }), 0, yT + (baseH - 0.05 * R) / 2, 0));
  group.add(mesh(new THREE.BoxGeometry(bx * 2 + 0.02, 0.05 * R, bz * 2 + 0.02), toonMat(0xd6cfc0), 0, yBase - 0.025 * R - 0.002, 0));

  let id = exhibitId(opts.exhibit);
  const stickerTex = canvas(512, 192, (g) => paintSticker(g, 512, 192, id));
  // sized and placed by where the camera stands, not by the model: it has
  // to sit inside a phone's narrow frame, left of the laser pad
  const sw = Math.min(0.48 * stand, baseH * 2.3);
  const sticker = mesh(new THREE.PlaneGeometry(sw, sw * 0.375), toonMat(0xffffff, { map: stickerTex, transparent: true }), 0.13 * stand, yT + baseH * 0.48, -bz - 0.004);
  sticker.rotation.y = Math.PI; sticker.rotation.z = 0.035;
  group.add(sticker);
  const tentTex = canvas(256, 192, (g) => paintTent(g, 256, 192, id));
  const tent = new THREE.Group();
  const tw = 0.95 * R, th = 0.7 * R;
  for (const s of [1, -1]) {
    const leaf = new THREE.Group();
    const face = mesh(new THREE.PlaneGeometry(tw, th), s > 0 ? toonMat(0xffffff, { map: tentTex }) : toonMat(0xd9ae2a, { side: THREE.DoubleSide }), 0, th / 2, 0);
    face.rotation.y = Math.PI;
    leaf.add(face);
    leaf.rotation.x = s * 0.24; leaf.position.z = -s * th * 0.24;
    tent.add(leaf);
  }
  tent.position.set(hx * 0.5, top - 0.01, hz + 0.1);
  group.add(tent);

  // --- the evidence table: oak far past the frame, a pool of light on the model
  const zFar = hz + 13 * R, zNear = -(hz + 46 * R);
  const wood = canvas(512, 512, (g) => paintTable(g, 512, rnd));
  wood.wrapS = wood.wrapT = THREE.RepeatWrapping; wood.repeat.set(9, 4);
  const tableD = zFar - zNear, tableW = 150 * R;
  group.add(mesh(new THREE.BoxGeometry(tableW, 1.4 * R, tableD), toonMat(0xffffff, { map: wood }), 0, yT - 0.7 * R, (zFar + zNear) / 2));
  const pool = canvas(256, 256, (g) => {
    const cx = 128, cy = 256 * ((zFar - 0) / tableD); // the model's spot on the table, canvas top = far edge
    const rg = g.createRadialGradient(cx, cy, 10, cx, cy, 190);
    rg.addColorStop(0, 'rgba(30,14,6,0)'); rg.addColorStop(0.3, 'rgba(30,14,6,0.06)'); rg.addColorStop(1, 'rgba(24,10,4,0.6)');
    g.fillStyle = rg; g.fillRect(0, 0, 256, 256);
    // the model's own soft shadow
    g.shadowColor = 'rgba(20,8,2,0.85)'; g.shadowBlur = 7; g.fillStyle = 'rgba(20,8,2,0.55)';
    const fw = (bx * 2 / tableW) * 256, fd = (bz * 2 / tableD) * 256;
    g.fillRect(cx - fw / 2 - 1, cy - fd / 2 - 1, fw + 2, fd + 3);
  });
  const poolMesh = mesh(new THREE.PlaneGeometry(tableW, tableD), basic(pool, { transparent: true, depthWrite: false }), 0, yT + 0.012, (zFar + zNear) / 2);
  poolMesh.rotation.x = -Math.PI / 2; poolMesh.rotation.z = Math.PI; // canvas top to the far edge, unmirrored
  group.add(poolMesh);

  // --- on the table, at the courtroom's scale
  // a juror's mug, set down behind the model: wider than the sofa, its
  // rim and its steam standing over the back wall
  const mr = 2.2 * R, mh = 5.7 * R, mx = sr(hx * 0.72), mz = bz + 2.9 * R;
  const mugTex = canvas(512, 256, (g) => {
    g.fillStyle = '#efe8d8'; g.fillRect(0, 0, 512, 256);
    g.fillStyle = '#b33a3f'; g.fillRect(0, 8, 512, 12); g.fillRect(0, 84, 512, 10);
    g.fillStyle = '#2c2a33'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '800 15px Georgia, serif'; g.fillText('WORLD’S OKAYEST', 256, 38);
    g.font = '900 32px Georgia, serif'; g.fillText('JUROR', 256, 62);
  });
  const mug = new THREE.Group();
  mug.add(mesh(new THREE.CylinderGeometry(mr, mr * 0.9, mh, 28, 1, true), toonMat(0xffffff, { map: mugTex, side: THREE.DoubleSide }), 0, mh / 2, 0));
  const coffee = mesh(new THREE.CircleGeometry(mr * 0.97, 24), toonMat(0x3a2216), 0, mh * 0.86, 0);
  coffee.rotation.x = -Math.PI / 2; mug.add(coffee);
  const handle = mesh(new THREE.TorusGeometry(mh * 0.27, mr * 0.13, 8, 14, Math.PI), toonMat(0xefe8d8), -mr * 0.98, mh * 0.7, 0);
  handle.rotation.z = Math.PI / 2; mug.add(handle);
  mug.position.set(mx, yT, mz);
  group.add(mug);
  const puffTex = canvas(64, 64, (g) => {
    const rg = g.createRadialGradient(32, 32, 2, 32, 32, 31);
    rg.addColorStop(0, 'rgba(255,255,255,0.9)'); rg.addColorStop(0.5, 'rgba(255,255,255,0.35)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = rg; g.fillRect(0, 0, 64, 64);
  });
  const steam = [];
  for (let i = 0; i < 3; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex, transparent: true, depthWrite: false, fog: false, opacity: 0 }));
    group.add(sp); steam.push(sp);
  }
  // the gavel on its block, screen-left
  const walnut = toonMat(0x5c3620), gx = sr(-(bx + 2.9 * R)), gz = hz * 0.45;
  group.add(mesh(new THREE.CylinderGeometry(1.1 * R, 1.2 * R, 0.42 * R, 24), walnut, gx, yT + 0.21 * R, gz));
  const head = mesh(new THREE.CylinderGeometry(0.55 * R, 0.55 * R, 1.7 * R, 16), toonMat(0x6b4026), gx, yT + 0.42 * R + 0.55 * R, gz);
  head.rotation.z = Math.PI / 2; head.rotation.y = 0.5; group.add(head);
  const shaft = mesh(new THREE.CylinderGeometry(0.12 * R, 0.15 * R, 4.6 * R, 8), walnut, gx - Math.sin(0.5) * 2.3 * R, yT + 0.97 * R, gz - Math.cos(0.5) * 2.3 * R);
  shaft.rotation.x = Math.PI / 2; shaft.rotation.z = -0.5; group.add(shaft);
  // counsel's legal pad and pencil, in front of the model
  const padTex = canvas(192, 256, (g) => paintPad(g, 192, 256, rnd));
  const pad = new THREE.Group();
  pad.add(mesh(new THREE.BoxGeometry(3.3 * R, 0.14 * R, 4.4 * R), toonMat(0xe3c95a), 0, 0.07 * R, 0));
  const sheet = mesh(new THREE.PlaneGeometry(3.3 * R, 4.4 * R), toonMat(0xffffff, { map: padTex }), 0, 0.142 * R, 0);
  sheet.rotation.x = -Math.PI / 2; sheet.rotation.z = Math.PI; pad.add(sheet);
  pad.position.set(sr(-(hx * 0.2 + 2.0 * R)), yT, -(bz + 3.0 * R)); pad.rotation.y = -0.22;
  group.add(pad);
  const pencilTex = canvas(8, 128, (g) => {
    g.fillStyle = '#e8b62e'; g.fillRect(0, 0, 8, 128);
    g.fillStyle = '#b9bcc2'; g.fillRect(0, 116, 8, 12); g.fillStyle = '#e58a8f'; g.fillRect(0, 122, 8, 6);
  });
  const pencil = new THREE.Group();
  const pl = 4.6 * R, pr = 0.12 * R;
  const body = mesh(new THREE.CylinderGeometry(pr, pr, pl, 6), toonMat(0xffffff, { map: pencilTex }));
  body.rotation.z = Math.PI / 2; pencil.add(body);
  const tip = mesh(new THREE.ConeGeometry(pr, pr * 3.2, 6), toonMat(0xd9b88a), -pl / 2 - pr * 1.6, 0, 0);
  tip.rotation.z = Math.PI / 2; pencil.add(tip);
  pencil.position.set(sr(hx * 0.25 + 1.2 * R), yT + pr, -(bz + 1.5 * R)); pencil.rotation.y = 0.3;
  group.add(pencil);

  // --- the courtroom, far and soft
  const far = new THREE.Group();
  const wallTex = canvas(1024, 640, (g) => paintWall(g, 1024, 640, rnd));
  const zWall = hz + 62 * R, wallH = 150 * R;
  const back = card(wallTex, 250 * R, wallH); back.position.set(0, yFloor + wallH / 2, zWall); far.add(back);
  for (const s of [-1, 1]) {
    const side = card(wallTex, 170 * R, wallH);
    side.rotation.y = Math.PI + s * Math.PI / 2; side.position.set(s * 125 * R, yFloor + wallH / 2, zWall - 85 * R); far.add(side);
  }
  const floor = mesh(new THREE.PlaneGeometry(250 * R, 175 * R), basic(0x40262a), 0, yFloor, zWall - 87 * R);
  floor.rotation.x = -Math.PI / 2; far.add(floor);
  // the bench, and the judge over it
  const benchTop = 11 * R, benchH = benchTop - yFloor, zBench = hz + 34 * R;
  const benchTex = canvas(512, 256, (g) => paintBench(g, 512, 256));
  far.add(mesh(new THREE.BoxGeometry(52 * R, benchH, 9 * R), basic(benchTex), 0, yFloor + benchH / 2, zBench));
  const P = plushKit(k, rnd), V = (x, y, z) => new THREE.Vector3(x, y, z);
  const people = [];
  // seat a person: where the waist is, how far they lean in over the table
  // (toward the camera) and roll, and which way the head turns
  const seat = (o, x, y, z, lean, roll, turn = 0) => {
    const p = P.person(o, R);
    p.group.position.set(x, y, z); p.group.rotation.set(-lean, 0, roll); p.group.updateMatrix();
    p.head.rotation.set(-0.12, turn, 0);
    p.at = (lx, ly, lz) => V(lx * p.s, ly * p.s, lz * p.s).applyMatrix4(p.group.matrix); // a point on them, in the room
    far.add(p.group);
    people.push({ ...p, lean, roll, turn, ph: people.length * 2.1 });
    return p;
  };
  const mitt = (mat, at, s) => P.blob(mat, at.x, at.y, at.z, 1.5 * s, 1.2 * s, 1.9 * s);

  // the judge, behind the bench
  const judge = seat({ scale: 1.12, robe: true, suit: '#23202b', skin: '#e2b08c', hair: '#dedcd8', brow: '#b9b6b0', style: 'wig', glasses: true, smile: -0.012, browIn: -0.05 },
    0, benchTop - 2.5 * R, zBench + 4 * R, 0.12, 0);
  // one hand flat on the bench
  { const sh = judge.at(-5.0, 8.2, -0.3), el = V(-8.4 * R, benchTop + 1.6 * R, zBench + 0.4 * R), hd = V(-5.2 * R, benchTop + 1.0 * R, zBench - 2.6 * R);
    far.add(P.limb(sh, el, 1.5 * R, judge.cloth), P.limb(el, hd, 1.35 * R, judge.cloth), mitt(judge.skin, hd, R)); }
  // the other holds the gavel up, and now and then brings it down on its
  // block at the front of the bench: the whole arm, from the shoulder,
  // toward the camera
  const gavelArm = new THREE.Group();
  { const sh = judge.at(5.0, 8.2, -0.3), L = 7.6 * R, out = 0.3;
    gavelArm.position.copy(sh);
    const dir = V(Math.sin(out), Math.cos(out), 0), tip = (f) => dir.clone().multiplyScalar(f * L);
    gavelArm.add(P.limb(V(0, 0, 0), tip(0.6), 1.4 * R, judge.cloth), P.blob(judge.skin, tip(0.66).x, tip(0.66).y, 0, 1.45 * R));
    const walnutFelt = P.felt(0x7a4a2c), brass = P.felt(0xd9b45a);
    gavelArm.add(P.limb(tip(0.58), tip(1.0), 0.3 * R, walnutFelt));
    const gh = mesh(new THREE.CylinderGeometry(1.15 * R, 1.15 * R, 3.6 * R, 18), walnutFelt, tip(1).x, tip(1).y, 0); gh.rotation.z = Math.PI / 2 + out; gavelArm.add(gh);
    for (const e of [-1.1, 1.1]) { const band = mesh(new THREE.CylinderGeometry(1.2 * R, 1.2 * R, 0.32 * R, 18), brass, tip(1).x + Math.cos(out) * e * R, tip(1).y - Math.sin(out) * e * R, 0); band.rotation.z = Math.PI / 2 + out; gavelArm.add(band); }
    // where it lands: the swing that brings the head down to block height, and the block under it
    const strike = -Math.acos(Math.max(-1, Math.min(1, (benchTop + 2.15 * R - sh.y) / (Math.cos(out) * L))));
    far.add(mesh(new THREE.CylinderGeometry(1.3 * R, 1.4 * R, 1.0 * R, 20), walnutFelt, sh.x + Math.sin(out) * L, benchTop + 0.5 * R, sh.z + Math.cos(out) * L * Math.sin(strike)));
    gavelArm.userData.strike = strike;
  }
  far.add(gavelArm);

  // counsel, leaning in from either side of the table. Screen-left makes
  // his point: the arm comes forward over the model's back wall, so the
  // hand is nearly in focus and the face behind it is not.
  const c1 = seat({ suit: '#2c3b5c', shirt: '#eef0f4', tie: '#b23740', square: '#e8e2d2', skin: '#96603f', hair: '#211814', style: 'short', smile: 0.05, browIn: -0.03 },
    sr(-7.4 * R), yT - 3 * R, hz + 16 * R, 0.44, -0.10, 0.22);
  const pointArm = new THREE.Group();
  { const sh = c1.at(-5.0, 8.2, -0.3), el = V(sr(-5.2 * R), top + 2.0 * R, hz + 8.6 * R), hd = V(sr(-2.3 * R), top + 2.4 * R, hz + 2.8 * R);
    far.add(P.limb(sh, el, 1.5 * R, c1.cloth));
    pointArm.position.copy(el);
    // down at the exhibit card on the back wall, and a little toward the room
    const h = hd.clone().sub(el), aim = V(-0.3, -0.78, -0.55).normalize();
    // (a capsule's cap runs a radius past its end: the sleeve stops short of the hand)
    pointArm.add(P.limb(V(0, 0, 0), h.clone().multiplyScalar(0.62), 1.3 * R, c1.cloth));
    const cuff = h.clone().multiplyScalar(0.84); pointArm.add(P.blob(P.felt(0xeef0f4), cuff.x, cuff.y, cuff.z, 1.36 * R));
    const hand = P.blob(c1.skin, h.x, h.y, h.z, 1.2 * R, 1.0 * R, 1.5 * R); hand.quaternion.setFromUnitVectors(V(0, 0, -1), aim); pointArm.add(hand);
    pointArm.add(P.limb(h.clone().addScaledVector(aim, 1.1 * R), h.clone().addScaledVector(aim, 2.6 * R), 0.44 * R, c1.skin));
    pointArm.add(P.blob(c1.skin, h.x - 1.0 * R, h.y - 0.1 * R, h.z - 0.5 * R, 0.55 * R)); // the thumb
  }
  far.add(pointArm);
  { const sh = c1.at(5.0, 8.2, -0.3), hd = V(sr(-13.5 * R), yT + 1.0 * R, hz + 9.5 * R);
    far.add(P.limb(sh, hd, 1.45 * R, c1.cloth), mitt(c1.skin, hd, R)); }
  // screen-right is thinking about it: chin in hand, elbow on the table
  const c2 = seat({ suit: '#76627a', shirt: '#f2ede2', skin: '#f0c7a4', hair: '#8a4225', style: 'bun', glasses: true, smile: 0.0, mouthW: 0.15, browOut: 0.04 },
    sr(9.4 * R), yT - 3 * R, hz + 18 * R, 0.40, 0.09, -0.24);
  { const s = c2.s, sh = V(5.0 * s, 8.2 * s, -0.3 * s), el = V(5.4 * s, 4.6 * s, -3.8 * s), hd = V(1.5 * s, 10.0 * s, -3.9 * s);
    c2.group.add(P.limb(sh, el, 1.45 * s, c2.cloth), P.limb(el, hd, 1.3 * s, c2.cloth), P.blob(c2.skin, hd.x, hd.y + 0.5 * s, hd.z, 1.5 * s, 1.3 * s, 1.4 * s));
    const sh2 = c2.at(-5.0, 8.2, -0.3), hd2 = V(sr(15.5 * R), yT + 1.0 * R, hz + 10 * R);
    far.add(P.limb(sh2, hd2, 1.45 * R, c2.cloth), mitt(c2.skin, hd2, R)); }
  // the flag by the bench
  far.add(mesh(new THREE.BoxGeometry(0.5 * R, 46 * R, 0.5 * R), basic(0xb89a50), sr(-33 * R), yFloor + 23 * R + 20 * R, zBench + 6 * R));
  const flagTex = canvas(128, 256, (g) => {
    for (let i = 0; i < 9; i++) { g.fillStyle = i % 2 ? '#efe9dc' : '#a83038'; g.beginPath(); g.moveTo(i * 15, 0); g.lineTo(i * 15 + 15, 0); g.lineTo(i * 12 + 30, 256); g.lineTo(i * 12 + 15, 256); g.closePath(); g.fill(); }
    g.fillStyle = '#27365f'; g.beginPath(); g.moveTo(0, 0); g.lineTo(70, 0); g.lineTo(60, 96); g.lineTo(0, 110); g.closePath(); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.8)'; for (let i = 0; i < 12; i++) g.fillRect(8 + (i % 4) * 15, 12 + Math.floor(i / 4) * 26, 4, 4);
    const sh = g.createLinearGradient(0, 0, 128, 0); sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(0.45, 'rgba(0,0,0,0.25)'); sh.addColorStop(0.6, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,0.3)');
    g.fillStyle = sh; g.fillRect(0, 0, 128, 256);
  });
  const flag = card(flagTex, 8 * R, 17 * R); flag.position.set(sr(-29.2 * R), benchTop + 17 * R, zBench + 6 * R); flag.rotation.z = 0.06; far.add(flag);
  // the jury, a rail and two rows along the screen-right wall, turned
  // toward the bench: twelve of the same stuffing in instanced batches
  const jury = new THREE.Group();
  jury.position.set(sr(46 * R), yFloor + 15 * R, hz + 26 * R); jury.rotation.y = -0.5;
  {
    const skins = [0xe9bf9c, 0x8d5a3c, 0xc98f66, 0xf0cfb0, 0x6b4630, 0xd9a67c], tops = [0x3d5a80, 0x7a4a5a, 0x4f6b4a, 0x8a6a3a, 0x5a4a7a, 0xa0563c], hairs = [0x2a1c14, 0xd8d2c8, 0x6a3a1c, 0x1a1a1a];
    const n = 12, plain = P.felt(0xffffff), M = new THREE.Matrix4(), Q = new THREE.Quaternion(), C = new THREE.Color(), one = V(1, 1, 1);
    const bodies = new THREE.InstancedMesh(P.bead, plain, n), heads = new THREE.InstancedMesh(P.bead, plain, n);
    const caps = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, 1.35), plain, n), eyes = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), P.button, n * 2);
    const tilt = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.5, 0, 0));
    for (let row = 0; row < 2; row++) for (let i = 0; i < 6; i++) {
      const q = row * 6 + i, x = (i - 2.5 + row * 0.36) * 7.2 * R, y = (1.2 + row * 3.6) * R, z = (2.4 + row * 4.6) * R;
      const hy = y + 7.3 * R + (rnd() - 0.5) * 0.7 * R;
      bodies.setMatrixAt(q, M.compose(V(x, y + 2.6 * R, z), Q.identity(), V(3.4 * R, 3.8 * R, 2.5 * R))); bodies.setColorAt(q, C.setHex(tops[(i + row * 2) % 6]));
      heads.setMatrixAt(q, M.compose(V(x, hy, z - 0.3 * R), Q.identity(), V(2.3 * R, 2.2 * R, 2.1 * R))); heads.setColorAt(q, C.setHex(skins[(i * 2 + row) % 6]));
      caps.setMatrixAt(q, M.compose(V(x, hy, z - 0.3 * R), tilt, V(2.45 * R, 2.36 * R, 2.27 * R))); caps.setColorAt(q, C.setHex(hairs[(i + row) % 4]));
      for (const sx of [-1, 1]) eyes.setMatrixAt(q * 2 + (sx > 0 ? 1 : 0), M.compose(V(x + sx * 0.8 * R, hy + 0.15 * R, z - 2.3 * R), Q.identity(), V(0.34 * R, 0.34 * R, 0.16 * R)));
    }
    jury.add(bodies, heads, caps, eyes);
    // the box they sit in: a panelled front and a rail
    jury.add(mesh(new THREE.BoxGeometry(48 * R, 13 * R, 1.2 * R), basic(0x573722), 0, -5.5 * R, -0.6 * R));
    jury.add(mesh(new THREE.BoxGeometry(49 * R, 1.1 * R, 2.2 * R), basic(0x7a5334), 0, 1.4 * R, -0.6 * R));
  }
  far.add(jury);
  group.add(far);

  const dCam = hz + 12 * R; // the camera stands at most about this far in front
  return {
    group,
    env: {
      bg: 0x241812, fog: [0x241812, 90 * R, 600 * R],
      hemi: [0xfff0dc, 0x6b4c3a, 1], sun: [0xffe3b8, 1], hazeSun: [1, 1, 1],
      far: dCam + 240 * R,
    },
    setExhibit(label) {
      id = exhibitId(label);
      paintSticker(stickerTex.image.getContext('2d'), 512, 192, id); stickerTex.needsUpdate = true;
      paintTent(tentTex.image.getContext('2d'), 256, 192, id); tentTex.needsUpdate = true;
    },
    focus: [
      { x: sticker.position.x, y: sticker.position.y, z: sticker.position.z, size: sw * 0.75 },
      { x: tent.position.x, y: tent.position.y + th / 2, z: tent.position.z, size: 0.8 * R },
    ],
    // the giants breathe and shift their weight; the gavel comes down
    // every so often; the coffee is still hot
    update(t) {
      for (const p of people) {
        p.group.rotation.x = -p.lean + Math.sin(t * 0.33 + p.ph) * 0.018;
        p.group.rotation.z = p.roll + Math.sin(t * 0.21 + p.ph * 1.7) * 0.012;
        // heads are loosely sewn on: they nod and tip a little on their own
        p.head.rotation.x = -0.12 + Math.sin(t * 0.47 + p.ph * 1.3) * 0.045;
        p.head.rotation.z = Math.sin(t * 0.29 + p.ph * 0.7) * 0.04;
      }
      const beat = (t % 11) / 11, hit = beat < 0.07 ? Math.pow(Math.sin((beat / 0.07) * Math.PI), 2) : 0;
      gavelArm.rotation.x = 0.1 + 0.05 * Math.sin(t * 0.5) + (gavelArm.userData.strike - 0.1) * hit;
      // counsel taps the air over the exhibit as he makes the point
      pointArm.rotation.x = 0.05 * Math.sin(t * 1.3) + 0.1 * Math.max(0, Math.sin(t * 0.37)) * Math.sin(t * 5.1);
      for (let i = 0; i < steam.length; i++) {
        const p = (t * 0.11 + i / steam.length) % 1;
        const s = (1.6 + 2.6 * p) * R;
        steam[i].position.set(mx + Math.sin(t * 0.4 + i * 2.1 + p * 3) * 0.5 * R, yT + mh + (0.3 + 4.2 * p) * R, mz - 0.4 * R);
        steam[i].scale.set(s, s * 1.25, 1);
        steam[i].material.opacity = 0.5 * Math.sin(Math.PI * p);
      }
    },
  };
}
