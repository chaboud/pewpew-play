// textures.js — the procedural canvas textures the material table and the
// recognizers share, moved from main.js (same pixels: the two viewers
// should differ in structure, not in look). Each is made once per page.
import * as THREE from 'three';

// toon look: the shared band ramp
export const ramp = new THREE.DataTexture(new Uint8Array([96, 160, 222, 255]), 4, 1, THREE.RedFormat);
ramp.minFilter = ramp.magFilter = THREE.NearestFilter;
ramp.needsUpdate = true;

export function makeCanvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'));
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
// wood plank floor
export const floorTex = makeCanvas(512, 512, (g) => {
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
export const concreteTex = makeCanvas(512, 512, (g) => {
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
export const checkerTex = makeCanvas(256, 256, (g) => {
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
export const woodTex = makeCanvas(256, 256, (g) => {
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
export const fabricTex = makeCanvas(128, 128, (g) => {
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

// small deterministic canvas "paintings" keyed by body index
export function artTex(i) {
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


// soft additive billboard (fixture glows, sparks)
let glowTexCache = null;
export function glowTex() {
  if (!glowTexCache) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    const g = cv.getContext('2d');
    const grad = g.createRadialGradient(32, 32, 2, 32, 32, 31);
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.32)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    glowTexCache = new THREE.CanvasTexture(cv);
  }
  return glowTexCache;
}
