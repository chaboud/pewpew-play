// backdrops/yard.js — open air. The room sits on a slab on a lawn under a
// summer sky, so the sun that was always in the scene (and its shafts in
// the haze) finally comes from somewhere. With no roof on the model the
// band above the back wall is sky, treetops, far hills and one hot-air
// balloon that has no business being there.
//
// Screen terms as in court.js: the camera looks along +z, screen-right is
// world -x. Trees, slab, stones and lawn are toon-lit with the room and
// take the fog; the sky wall, hills and balloon are paint.

function paintSky(g, w, h, horizon, yOf, rnd) {
  const sg = g.createLinearGradient(0, 0, 0, h);
  sg.addColorStop(0, '#3d8bd6'); sg.addColorStop(horizon * 0.55, '#86c0ec'); sg.addColorStop(horizon, '#dcedf4'); sg.addColorStop(1, '#dcedf4');
  g.fillStyle = sg; g.fillRect(0, 0, w, h);
  // fair-weather cumulus: stacks of soft puffs with flat-ish bottoms
  for (let c = 0; c < 13; c++) {
    const az = -1.45 + (c / 12) * 2.9 + (rnd() - 0.5) * 0.14, el = 0.17 + rnd() * 0.52;
    const cx = (0.5 + az / Math.PI) * w, cy = yOf(el) * h, s = (0.6 + rnd() * 0.9) * (w / 1024) * (1.3 - el);
    for (let p = 0; p < 8; p++) {
      const px = cx + (rnd() - 0.5) * 70 * s, py = cy - rnd() * 16 * s, r = (12 + rnd() * 20) * s;
      const rg = g.createRadialGradient(px, py - r * 0.2, r * 0.1, px, py, r);
      rg.addColorStop(0, 'rgba(255,255,255,0.95)'); rg.addColorStop(0.6, 'rgba(250,252,255,0.75)'); rg.addColorStop(1, 'rgba(240,246,252,0)');
      g.fillStyle = rg; g.beginPath(); g.ellipse(px, py, r * 1.25, r * 0.8, 0, 0, 7); g.fill();
    }
  }
}

function paintHills(g, w, h, fill, seed) {
  g.clearRect(0, 0, w, h);
  g.fillStyle = fill; g.beginPath(); g.moveTo(0, h);
  for (let x = 0; x <= w; x += 4) {
    const t = x / w;
    const y = h * (0.52 - 0.2 * Math.sin(t * 5.1 + seed) - 0.13 * Math.sin(t * 11.7 + seed * 2.3) - 0.06 * Math.sin(t * 27 + seed));
    g.lineTo(x, y);
  }
  g.lineTo(w, h); g.closePath(); g.fill();
}

function paintBalloon(g, w, h) {
  g.clearRect(0, 0, w, h);
  const cx = w / 2, cy = h * 0.36, rx = w * 0.42, ry = h * 0.34;
  const cols = ['#d8433f', '#f4e7c4', '#f0b83a', '#f4e7c4', '#d8433f', '#f4e7c4', '#f0b83a'];
  g.save();
  g.beginPath(); g.moveTo(cx - rx, cy);
  g.bezierCurveTo(cx - rx, cy - ry * 1.35, cx + rx, cy - ry * 1.35, cx + rx, cy);
  g.bezierCurveTo(cx + rx, cy + ry * 0.9, cx + w * 0.09, cy + ry * 1.25, cx + w * 0.07, cy + ry * 1.5);
  g.lineTo(cx - w * 0.07, cy + ry * 1.5);
  g.bezierCurveTo(cx - w * 0.09, cy + ry * 1.25, cx - rx, cy + ry * 0.9, cx - rx, cy); g.closePath(); g.clip();
  for (let i = 0; i < 7; i++) { g.fillStyle = cols[i]; g.fillRect(cx - rx + (i * 2 * rx) / 7, 0, (2 * rx) / 7 + 1, h); }
  const sh = g.createLinearGradient(cx - rx, 0, cx + rx, 0);
  sh.addColorStop(0, 'rgba(255,255,255,0.25)'); sh.addColorStop(0.5, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(30,20,60,0.35)');
  g.fillStyle = sh; g.fillRect(0, 0, w, h);
  g.restore();
  g.strokeStyle = '#5a4630'; g.lineWidth = 2;
  g.beginPath(); g.moveTo(cx - w * 0.07, cy + ry * 1.5); g.lineTo(cx - w * 0.055, h * 0.9); g.moveTo(cx + w * 0.07, cy + ry * 1.5); g.lineTo(cx + w * 0.055, h * 0.9); g.stroke();
  g.fillStyle = '#8a6238'; g.fillRect(cx - w * 0.07, h * 0.89, w * 0.14, h * 0.09);
}

export function build(k, geo) {
  const { THREE, toonMat, canvas, basic, card, mesh } = k;
  const { hx, hz, R } = geo;
  const rnd = k.rnd(23);
  const group = new THREE.Group();
  const slabH = 0.3 * R, yG = -0.2 - slabH; // the lawn
  const sr = (v) => -v;

  // --- sky: a painted half-cylinder, canvas laid out by azimuth and height
  const SR = 300 * R, SH = 440 * R, syc = yG + SH / 2 - 24 * R;
  const yOf = (el) => (syc + SH / 2 - (2 + SR * Math.tan(el))) / SH;
  const skyTex = canvas(1024, 512, (g) => paintSky(g, 1024, 512, yOf(0), yOf, rnd));
  group.add(k.skyWall(skyTex, SR, SH, syc));

  // --- lawn, mown in stripes, out to the fog
  const grass = canvas(256, 256, (g) => {
    g.fillStyle = '#6a9c47'; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#76a950'; g.fillRect(0, 0, 128, 256);
    for (let i = 0; i < 1400; i++) { g.fillStyle = rnd() > 0.5 ? 'rgba(40,80,20,0.16)' : 'rgba(190,230,120,0.14)'; g.fillRect(rnd() * 256, rnd() * 256, 1.5, 2 + rnd() * 4); }
  });
  grass.wrapS = grass.wrapT = THREE.RepeatWrapping; grass.repeat.set(54, 54);
  const lawn = mesh(new THREE.CircleGeometry(SR * 1.02, 40), toonMat(0xffffff, { map: grass }), 0, yG, 0);
  lawn.rotation.x = -Math.PI / 2; group.add(lawn);

  // --- the slab the room stands on, a step, stones to the door
  const stone = toonMat(0x9d988c);
  const sl = 0.22 * R;
  group.add(mesh(new THREE.BoxGeometry((hx + 0.2 + sl) * 2, slabH, (hz + 0.2 + sl) * 2), stone, 0, yG + slabH / 2, 0));
  const flag = toonMat(0x8f8a7e);
  for (let i = 0; i < 7; i++) {
    const st = mesh(new THREE.CylinderGeometry(0.4 * R, 0.44 * R, 0.06 * R, 9), flag, (i % 2 ? 0.2 : -0.18) * R, yG + 0.03 * R, -(hz + 0.2 + sl + 0.6 * R + i * 1.05 * R));
    st.rotation.y = i * 1.3; st.scale.x = 1.2; group.add(st);
  }

  // --- a hedge and a picket fence along the back of the garden
  const picket = canvas(64, 64, (g) => {
    g.clearRect(0, 0, 64, 64); g.fillStyle = '#f3efe4';
    g.beginPath(); g.moveTo(12, 64); g.lineTo(12, 14); g.lineTo(26, 2); g.lineTo(40, 14); g.lineTo(40, 64); g.closePath(); g.fill();
    g.fillRect(0, 26, 64, 7); g.fillRect(0, 48, 64, 7);
  });
  picket.wrapS = THREE.RepeatWrapping; picket.repeat.set(80, 1);
  const fence = card(picket, 150 * R, 3.0 * R, { cut: true }); fence.position.set(0, yG + 1.5 * R, hz + 13 * R); group.add(fence);
  group.add(mesh(new THREE.BoxGeometry(150 * R, 4.6 * R, 3 * R), toonMat(0x4c7a3a), 0, yG + 2.3 * R, hz + 16.5 * R));

  // --- trees: a trunk and three faceted clumps
  const bark = toonMat(0x6d4b2f);
  const leaves = [toonMat(0x5d9645), toonMat(0x4f8a3c), toonMat(0x6ea64f)];
  // faceted: a non-indexed solid given face normals
  const clump = (r) => { const g = new THREE.IcosahedronGeometry(r, 1); g.computeVertexNormals(); return g; };
  const tree = (sx, z, s) => {
    const t = new THREE.Group();
    t.add(mesh(new THREE.CylinderGeometry(0.42 * s, 0.7 * s, 6 * s, 7), bark, 0, 3 * s, 0));
    t.add(mesh(clump(3.6 * s), leaves[0], 0, 8.4 * s, 0));
    t.add(mesh(clump(2.7 * s), leaves[1], -2.3 * s, 7.0 * s, 0.6 * s));
    t.add(mesh(clump(2.9 * s), leaves[2], 2.4 * s, 7.3 * s, -0.5 * s));
    t.position.set(sr(sx), yG, z); t.rotation.y = sx;
    group.add(t);
  };
  tree(-9.4 * R, hz + 12 * R, 0.85 * R);
  tree(11.5 * R, hz + 15 * R, 0.95 * R);
  tree(2.6 * R, hz + 28 * R, 1.75 * R);
  tree(-31 * R, hz + 24 * R, 1.5 * R);
  tree(31 * R, hz + 31 * R, 1.6 * R);

  // --- far hills, already hazed in the paint
  const h1 = card(canvas(512, 128, (g) => paintHills(g, 512, 128, '#86b08a', 1.3)), 820 * R, 80 * R, { cut: true });
  h1.position.set(0, yG + 22 * R, hz + 200 * R); group.add(h1);
  const h2 = card(canvas(512, 128, (g) => paintHills(g, 512, 128, '#a6c7c0', 4.1)), 900 * R, 130 * R, { cut: true });
  h2.position.set(0, yG + 36 * R, hz + 255 * R); group.add(h2);

  // --- the balloon
  const balloon = card(canvas(128, 160, (g) => paintBalloon(g, 128, 160)), 11 * R, 13.75 * R, { cut: true });
  const b0 = [sr(-27 * R), 66 * R, hz + 120 * R];
  balloon.position.set(b0[0], b0[1], b0[2]); group.add(balloon);

  return {
    group,
    env: {
      bg: 0xdcedf4, fog: [0xd6e8ee, 50 * R, 330 * R],
      hemi: [0xeef6ff, 0x86a05e, 1.1], sun: [0xfff1d6, 1.08], hazeSun: [1, 1, 1],
      far: hz + 12 * R + 330 * R,
    },
    update(t) {
      balloon.position.y = b0[1] + Math.sin(t * 0.17) * 1.6 * R;
      balloon.position.x = b0[0] + Math.sin(t * 0.05) * 5 * R;
      balloon.rotation.z = Math.sin(t * 0.23) * 0.03;
    },
  };
}
