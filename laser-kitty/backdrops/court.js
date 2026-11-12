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
// the room; the far set (bench, judge, counsel, walls, windows) is painted
// and self-lit, authored to be seen soft.

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

// a bust: shoulders, head, the suggestion of a face looking down. Drawn
// plain and friendly — these are seen as soft giants, not portraits.
function paintPerson(g, w, h, o) {
  const cx = w / 2;
  g.clearRect(0, 0, w, h);
  if (o.hair && o.long) { g.fillStyle = o.hair; g.beginPath(); g.ellipse(cx, h * 0.30, w * 0.20, h * 0.24, 0, 0, 7); g.fill(); }
  g.fillStyle = o.suit;
  g.beginPath(); g.moveTo(0, h);
  g.bezierCurveTo(0, h * 0.64, w * 0.08, h * 0.52, w * 0.36, h * 0.48);
  g.lineTo(w * 0.64, h * 0.48);
  g.bezierCurveTo(w * 0.92, h * 0.52, w, h * 0.64, w, h);
  g.closePath(); g.fill();
  if (o.robe) {
    g.fillStyle = '#f4f1e8';
    g.beginPath(); g.moveTo(cx - w * 0.07, h * 0.47); g.lineTo(cx + w * 0.07, h * 0.47); g.lineTo(cx + w * 0.035, h * 0.60); g.lineTo(cx, h * 0.56); g.lineTo(cx - w * 0.035, h * 0.60); g.closePath(); g.fill();
  } else {
    g.fillStyle = o.shirt || '#f1eee6';
    g.beginPath(); g.moveTo(cx - w * 0.10, h * 0.475); g.lineTo(cx + w * 0.10, h * 0.475); g.lineTo(cx, h * 0.74); g.closePath(); g.fill();
    if (o.tie) {
      g.fillStyle = o.tie;
      g.beginPath(); g.moveTo(cx - w * 0.03, h * 0.50); g.lineTo(cx + w * 0.03, h * 0.50); g.lineTo(cx + w * 0.045, h * 0.70); g.lineTo(cx, h * 0.76); g.lineTo(cx - w * 0.045, h * 0.70); g.closePath(); g.fill();
    }
    g.strokeStyle = 'rgba(0,0,0,0.28)'; g.lineWidth = w * 0.02;
    g.beginPath(); g.moveTo(cx - w * 0.11, h * 0.47); g.lineTo(cx - w * 0.02, h * 0.80); g.moveTo(cx + w * 0.11, h * 0.47); g.lineTo(cx + w * 0.02, h * 0.80); g.stroke();
  }
  g.fillStyle = o.skin2; g.fillRect(cx - w * 0.065, h * 0.36, w * 0.13, h * 0.125);
  g.fillStyle = o.skin;
  g.beginPath(); g.ellipse(cx - w * 0.15, h * 0.275, w * 0.025, h * 0.04, 0, 0, 7); g.ellipse(cx + w * 0.15, h * 0.275, w * 0.025, h * 0.04, 0, 0, 7); g.fill();
  g.beginPath(); g.ellipse(cx, h * 0.26, w * 0.145, h * 0.175, 0, 0, 7); g.fill();
  if (o.hair) {
    g.fillStyle = o.hair;
    g.beginPath(); g.ellipse(cx, h * 0.19, w * 0.155, h * 0.115, 0, Math.PI, 0); g.fill();
    if (o.bun) { g.beginPath(); g.arc(cx, h * 0.075, w * 0.07, 0, 7); g.fill(); }
    if (o.bald) { g.fillStyle = o.skin; g.beginPath(); g.ellipse(cx, h * 0.185, w * 0.105, h * 0.10, 0, 0, 7); g.fill(); }
  }
  // eyes cast down at the model, brows, the hint of a nose and mouth
  g.strokeStyle = 'rgba(40,24,20,0.75)'; g.lineCap = 'round'; g.lineWidth = w * 0.014;
  for (const s of [-1, 1]) {
    g.fillStyle = 'rgba(40,24,20,0.85)'; g.beginPath(); g.ellipse(cx + s * w * 0.06, h * 0.272, w * 0.016, h * 0.014, 0, 0, 7); g.fill();
    g.beginPath(); g.arc(cx + s * w * 0.06, h * 0.268, w * 0.03, 1.12 * Math.PI, 1.88 * Math.PI); g.stroke();
    g.beginPath(); g.moveTo(cx + s * w * 0.03, h * 0.236); g.lineTo(cx + s * w * 0.095, h * 0.228); g.stroke();
  }
  g.beginPath(); g.moveTo(cx, h * 0.285); g.lineTo(cx - w * 0.012, h * 0.33); g.stroke();
  g.beginPath(); g.arc(cx, h * 0.355, w * 0.04, 0.2 * Math.PI, 0.8 * Math.PI); g.stroke();
  if (o.glasses) {
    g.strokeStyle = '#2a2622'; g.lineWidth = w * 0.012; g.fillStyle = 'rgba(214,236,255,0.38)';
    for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * w * 0.06, h * 0.268, w * 0.046, h * 0.036, 0, 0, 7); g.fill(); g.stroke(); }
    g.beginPath(); g.moveTo(cx - w * 0.014, h * 0.266); g.lineTo(cx + w * 0.014, h * 0.266); g.stroke();
  }
  // one soft light from the windows, upper left
  g.globalCompositeOperation = 'source-atop';
  const lg = g.createLinearGradient(0, 0, w, h);
  lg.addColorStop(0, 'rgba(255,240,210,0.22)'); lg.addColorStop(0.5, 'rgba(255,240,210,0)'); lg.addColorStop(1, 'rgba(20,10,30,0.30)');
  g.fillStyle = lg; g.fillRect(0, 0, w, h);
  g.globalCompositeOperation = 'source-over';
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
  const people = [];
  const addPerson = (o, w, h, x, y, z, lean, roll) => {
    const tex = canvas(256, 320, (g) => paintPerson(g, 256, 320, o));
    const pivot = new THREE.Group();
    const c = card(tex, w, h, { cut: true }); c.position.y = h / 2; pivot.add(c);
    pivot.position.set(x, y, z); pivot.rotation.x = -lean; pivot.rotation.z = roll;
    far.add(pivot);
    people.push({ pivot, lean, roll, ph: people.length * 2.1 });
  };
  addPerson({ robe: true, suit: '#1c1a22', skin: '#e2b08c', skin2: '#c4906c', hair: '#d8d6d2', glasses: true }, 17 * R, 21 * R, 0, benchTop - 2.5 * R, zBench + 4 * R, 0.12, 0);
  // the gavel, held up and now and then brought down
  const gavelTex = canvas(160, 160, (g) => {
    g.clearRect(0, 0, 160, 160);
    g.fillStyle = '#1c1a22'; g.beginPath(); g.moveTo(96, 160); g.lineTo(150, 160); g.lineTo(118, 96); g.lineTo(88, 108); g.closePath(); g.fill();
    g.strokeStyle = '#6b4026'; g.lineWidth = 9; g.lineCap = 'round'; g.beginPath(); g.moveTo(104, 104); g.lineTo(52, 44); g.stroke();
    g.fillStyle = '#e2b08c'; g.beginPath(); g.ellipse(101, 101, 17, 14, -0.6, 0, 7); g.fill();
    g.save(); g.translate(50, 42); g.rotate(-0.86);
    g.fillStyle = '#5c3620'; g.fillRect(-36, -16, 72, 32); g.fillStyle = '#c9a24a'; g.fillRect(-24, -16, 6, 32); g.fillRect(18, -16, 6, 32);
    g.restore();
  });
  const gavelArm = new THREE.Group();
  const gavelCard = card(gavelTex, 12 * R, 12 * R, { cut: true }); gavelCard.position.set(sr(-4.4 * R), 4.4 * R, 0); gavelArm.add(gavelCard);
  gavelArm.position.set(sr(-6.5 * R), benchTop - 1 * R, zBench + 3 * R);
  far.add(gavelArm);
  // counsel, leaning in from either side of the table
  addPerson({ suit: '#27344f', shirt: '#eef0f4', tie: '#a8323a', skin: '#8d5a3c', skin2: '#734630', hair: '#1c1512' }, 15 * R, 19 * R, sr(-7.4 * R), yT - 3 * R, hz + 16 * R, 0.44, -0.10);
  addPerson({ suit: '#6b5a66', shirt: '#f2ede2', skin: '#f0c7a4', skin2: '#d3a585', hair: '#7a3b22', long: true, bun: true, glasses: true }, 15 * R, 19 * R, sr(9.4 * R), yT - 3 * R, hz + 18 * R, 0.40, 0.09);
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
  // the jury, a rail and two rows of heads along the screen-right wall
  const juryTex = canvas(512, 256, (g) => {
    g.clearRect(0, 0, 512, 256);
    const skins = ['#e9bf9c', '#8d5a3c', '#c98f66', '#f0cfb0', '#6b4630', '#d9a67c'];
    const tops = ['#3d5a80', '#7a4a5a', '#4f6b4a', '#8a6a3a', '#5a4a7a', '#a0563c'];
    for (let row = 0; row < 2; row++) for (let i = 0; i < 6; i++) {
      const x = 46 + i * 84 + row * 30, y = 80 + row * 46;
      g.fillStyle = tops[(i + row * 2) % 6]; g.beginPath(); g.ellipse(x, y + 62, 40, 46, 0, 0, 7); g.fill();
      g.fillStyle = skins[(i * 2 + row) % 6]; g.beginPath(); g.ellipse(x, y, 22, 27, 0, 0, 7); g.fill();
      g.fillStyle = ['#2a1c14', '#d8d2c8', '#6a3a1c', '#1a1a1a'][(i + row) % 4]; g.beginPath(); g.ellipse(x, y - 12, 23, 17, 0, Math.PI, 0); g.fill();
    }
    g.fillStyle = '#573722'; g.fillRect(0, 176, 512, 80); g.fillStyle = '#7a5334'; g.fillRect(0, 170, 512, 12);
  });
  const jury = card(juryTex, 46 * R, 23 * R, { cut: true }); jury.position.set(sr(46 * R), yFloor + 26 * R + 2 * R, hz + 26 * R); jury.rotation.y = Math.PI - 0.5; far.add(jury);
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
        p.pivot.rotation.x = -p.lean + Math.sin(t * 0.33 + p.ph) * 0.018;
        p.pivot.rotation.z = p.roll + Math.sin(t * 0.21 + p.ph * 1.7) * 0.012;
      }
      const beat = (t % 11) / 11;
      gavelArm.rotation.z = 0.06 * Math.sin(t * 0.5) + (beat < 0.06 ? 0.45 * Math.sin((beat / 0.06) * Math.PI) : 0);
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
