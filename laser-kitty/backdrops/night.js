// backdrops/night.js — the street at night, made for the bar: the room on
// a kerbed slab of pavement, asphalt in front, two streetlamps over the
// back wall, a skyline with its windows on, a moon, and a cat on a roof
// who is not involved. The scene's sun becomes moonlight and the
// hemisphere dims and cools, so the room's own lamps and neon carry it.
//
// Screen terms as in court.js: the camera looks along +z, screen-right is
// world -x.

function paintSky(g, w, h, horizon, yOf, rnd, moon) {
  const sg = g.createLinearGradient(0, 0, 0, h);
  sg.addColorStop(0, '#04051a'); sg.addColorStop(horizon * 0.6, '#131a40'); sg.addColorStop(horizon * 0.92, '#41305c'); sg.addColorStop(horizon, '#7a4a5e'); sg.addColorStop(1, '#7a4a5e');
  g.fillStyle = sg; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 620; i++) {
    const y = rnd() * horizon * 0.86 * h, a = 0.35 + rnd() * 0.65;
    g.fillStyle = `rgba(${rnd() > 0.8 ? '255,226,190' : '226,236,255'},${a * (1 - y / (horizon * h)) + 0.1})`;
    g.beginPath(); g.arc(rnd() * w, y, 0.5 + rnd() * rnd() * 1.6, 0, 7); g.fill();
  }
  const mx = (0.5 + moon.az / Math.PI) * w, my = yOf(moon.el) * h, mr = (moon.size / Math.PI) * w;
  const halo = g.createRadialGradient(mx, my, mr * 0.8, mx, my, mr * 5);
  halo.addColorStop(0, 'rgba(210,225,255,0.42)'); halo.addColorStop(1, 'rgba(210,225,255,0)');
  g.fillStyle = halo; g.fillRect(mx - mr * 5, my - mr * 5, mr * 10, mr * 10);
  g.fillStyle = '#f3f1e2'; g.beginPath(); g.arc(mx, my, mr, 0, 7); g.fill();
  g.fillStyle = 'rgba(170,176,190,0.5)';
  for (const [dx, dy, r] of [[-0.3, -0.2, 0.2], [0.25, 0.1, 0.27], [-0.1, 0.42, 0.14], [0.4, -0.4, 0.1]]) { g.beginPath(); g.arc(mx + dx * mr, my + dy * mr, r * mr, 0, 7); g.fill(); }
}

function paintSkyline(g, w, h, o, rnd) {
  g.clearRect(0, 0, w, h);
  let x = -10;
  while (x < w) {
    const forced = o.cat && x <= o.cat.x - 26 && x + 70 > o.cat.x;
    const bw = forced ? 64 : 22 + rnd() * 50, bh = forced ? o.cat.h : h * (o.minH + rnd() * (o.maxH - o.minH));
    const y = h - bh;
    g.fillStyle = o.base; g.fillRect(x, y, bw, bh);
    const cols = Math.floor((bw - 6) / 9), rows = Math.floor((bh - 8) / 12);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      if (rnd() > o.lit) continue;
      const p = rnd();
      g.fillStyle = p < 0.62 ? o.warm : p < 0.9 ? o.cool : o.pink;
      g.fillRect(x + 5 + c * 9, y + 7 + r * 12, 5, 7);
    }
    g.fillStyle = o.base;
    const p = rnd();
    if (!forced && p < 0.2) g.fillRect(x + bw * 0.5, y - 14 - rnd() * 14, 2, 30);
    else if (!forced && p < 0.32) { // a water tower
      g.fillRect(x + bw * 0.3, y - 18, bw * 0.34, 12); g.fillRect(x + bw * 0.33, y - 8, 2, 8); g.fillRect(x + bw * 0.6, y - 8, 2, 8);
      g.beginPath(); g.moveTo(x + bw * 0.28, y - 18); g.lineTo(x + bw * 0.47, y - 25); g.lineTo(x + bw * 0.66, y - 18); g.fill();
    }
    if (forced) { // the cat on the roof, against the moon
      const cx = o.cat.x, cy = y;
      g.beginPath(); g.ellipse(cx, cy - 8, 7, 9, 0, 0, 7); g.fill();
      g.beginPath(); g.arc(cx + 1, cy - 20, 5.5, 0, 7); g.fill();
      g.beginPath(); g.moveTo(cx - 4, cy - 22); g.lineTo(cx - 3, cy - 30); g.lineTo(cx + 1, cy - 24); g.lineTo(cx + 5, cy - 30); g.lineTo(cx + 6, cy - 22); g.fill();
      g.strokeStyle = o.base; g.lineWidth = 2.6; g.lineCap = 'round';
      g.beginPath(); g.moveTo(cx - 6, cy - 3); g.quadraticCurveTo(cx - 17, cy - 4, cx - 15, cy - 14); g.stroke();
    }
    x += bw + (rnd() < 0.18 ? 6 + rnd() * 16 : 0);
  }
  for (const s of o.signs || []) {
    g.save();
    g.font = `900 ${s.px}px system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = s.color; g.shadowBlur = 14; g.fillStyle = s.color;
    [...s.text].forEach((ch, i) => { for (let k = 0; k < 2; k++) g.fillText(ch, s.x, s.y + i * s.px * 1.02); });
    g.restore();
  }
}

export function build(k, geo) {
  const { THREE, toonMat, canvas, basic, card, mesh } = k;
  const { hx, hz, R } = geo;
  const rnd = k.rnd(37);
  const group = new THREE.Group();
  const slabH = 0.3 * R, yG = -0.2 - slabH; // the street
  const sr = (v) => -v;

  // --- sky
  const SR = 300 * R, SH = 440 * R, syc = yG + SH / 2 - 24 * R;
  const yOf = (el) => (syc + SH / 2 - (2 + SR * Math.tan(el))) / SH;
  const moon = { az: 0.21, el: 0.5, size: 0.036 };
  const skyTex = canvas(2048, 512, (g) => paintSky(g, 2048, 512, yOf(0), yOf, rnd, moon));
  group.add(k.skyWall(skyTex, SR, SH, syc));

  // --- asphalt
  const tar = canvas(128, 128, (g) => {
    g.fillStyle = '#3a3b47'; g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 900; i++) { g.fillStyle = rnd() > 0.5 ? 'rgba(120,124,150,0.22)' : 'rgba(8,8,16,0.3)'; g.fillRect(rnd() * 128, rnd() * 128, 1 + rnd() * 2, 1 + rnd() * 2); }
  });
  tar.wrapS = tar.wrapT = THREE.RepeatWrapping; tar.repeat.set(70, 70);
  const street = mesh(new THREE.CircleGeometry(SR * 1.02, 40), toonMat(0xffffff, { map: tar }), 0, yG, 0);
  street.rotation.x = -Math.PI / 2; group.add(street);
  const zKerb = -(hz + 0.2 + 0.4 * R);

  // --- the pavement the room stands on, with its kerb
  group.add(mesh(new THREE.BoxGeometry((hx + 0.2 + 1.1 * R) * 2, slabH, (hz + 0.2 + 0.4 * R) * 2), toonMat(0x77747f), 0, yG + slabH / 2, 0));
  group.add(mesh(new THREE.BoxGeometry((hx + 0.2 + 1.1 * R) * 2 + 0.02, slabH * 1.02, 0.22 * R), toonMat(0x6d6a75), 0, yG + slabH * 0.51, zKerb));

  // --- two streetlamps standing over the back wall
  const glowTex = canvas(64, 64, (g) => {
    const rg = g.createRadialGradient(32, 32, 1, 32, 32, 31);
    rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(0.3, 'rgba(255,255,255,0.4)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = rg; g.fillRect(0, 0, 64, 64);
  });
  const iron = toonMat(0x24252d);
  const halos = [];
  for (const s of [-1, 1]) {
    const lx = sr(s * hx * 0.66), lz = hz + 3.2 * R, lh = 7.0 * R;
    group.add(mesh(new THREE.CylinderGeometry(0.1 * R, 0.16 * R, lh, 7), iron, lx, yG + lh / 2, lz));
    group.add(mesh(new THREE.BoxGeometry(0.14 * R, 0.14 * R, 1.7 * R), iron, lx, yG + lh, lz - 0.8 * R));
    group.add(mesh(new THREE.BoxGeometry(0.5 * R, 0.16 * R, 0.9 * R), basic(0xffe6ad), lx, yG + lh - 0.14 * R, lz - 1.5 * R));
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffc070, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6, fog: false }));
    halo.scale.set(4.6 * R, 4.6 * R, 1); halo.position.set(lx, yG + lh - 0.3 * R, lz - 1.5 * R);
    group.add(halo); halos.push(halo);
  }

  // --- the skyline: a near row with its lights on, a far paler one behind
  const nearW = 230 * R, nearH = 50 * R, zNear = hz + 36 * R;
  // put a roof, and the cat on it, under the moon as seen from the usual vantage
  const dist = hz + 2.6 + zNear, catX = (0.5 + (Math.tan(moon.az) * dist) / nearW) * 1024;
  const catH = (((2 + dist * Math.tan(moon.el - 0.085)) - yG) / nearH) * 256;
  const near = card(canvas(1024, 256, (g) => paintSkyline(g, 1024, 256, {
    base: '#0e1026', warm: '#ffd58a', cool: '#9fe6ff', pink: '#ff8ac0', lit: 0.3, minH: 0.16, maxH: 0.36,
    cat: { x: catX, h: catH },
    signs: [{ text: 'BAR', x: 372, y: 150, px: 17, color: '#ff5fb0' }, { text: 'EAT', x: 700, y: 156, px: 16, color: '#5fe8f0' }, { text: 'HOTEL', x: 498, y: 142, px: 13, color: '#ffb35f' }],
  }, rnd)), nearW, nearH, { cut: true });
  near.position.set(0, yG + nearH / 2, zNear); group.add(near);
  const farS = card(canvas(1024, 256, (g) => paintSkyline(g, 1024, 256, { base: '#232a58', warm: '#c9b48a', cool: '#8fb6d8', pink: '#c98ab0', lit: 0.14, minH: 0.3, maxH: 0.8 }, rnd)), 470 * R, 62 * R, { cut: true });
  farS.position.set(0, yG + 62 * R / 2, hz + 100 * R); group.add(farS);

  return {
    group,
    env: {
      bg: 0x0a0c1e, fog: [0x141a36, 55 * R, 360 * R],
      hemi: [0xb4bef4, 0x2c2644, 0.8], sun: [0xb9caff, 0.55], hazeSun: [0.4, 0.5, 0.85],
      key: 0.62, // drawn styles lift their input by this: a sketch of a dark room is not a dark sketch
      far: hz + 12 * R + 330 * R,
    },
    // sodium lamps hum: a slow uneven breath, never a strobe
    update(t) {
      for (let i = 0; i < halos.length; i++) halos[i].material.opacity = 0.56 + 0.05 * Math.sin(t * 1.7 + i * 2.2) * Math.sin(t * 0.37 + i);
    },
  };
}
