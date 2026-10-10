// neon signs (main.js meshFor @2007): a glowing face on a near-black
// backing; tint picks the design (art/neon.js). DoubleSide, turned to face
// into the room or the text reads mirrored. A sign hung in the room (not on
// a wall) gets chains; every third sign flickers like a tired tube.
import * as THREE from 'three';
import { CLS } from '../../../seam.js?v=k62';
import { part } from '../kit.js?v=k62';
import { neonAtlas, NEON_GLOW, ATLAS } from '../art/neon.js?v=k62';

// every design in one atlas, one material, one batch: a sign picks its cell
// per instance (aCell), so twenty signs are one draw, not twenty
function atlasMaterial() {
  const mat = new THREE.MeshBasicMaterial({ map: neonAtlas(), transparent: true, side: THREE.DoubleSide, forceSinglePass: true });
  mat.userData.instanceAttrs = { aCell: 1 };
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aCell;')
      .replace('#include <uv_vertex>', `#include <uv_vertex>
  vMapUv = (vMapUv + vec2(mod(aCell, ${ATLAS.cols}.0), ${ATLAS.rows - 1}.0 - floor(aCell / ${ATLAS.cols}.0))) / vec2(${ATLAS.cols}.0, ${ATLAS.rows}.0);`);
  };
  mat.customProgramCacheKey = () => 'neon-atlas';
  return mat;
}

export default {
  name: 'neon',
  order: 2007,
  match: (r) => r.cls === CLS.STATIC && r.shape === 0 && r.gloss > 0.95 && Math.min(r.a, r.c) < 0.02 && r.b >= 0.1 && r.b <= 0.2 && Math.max(r.a, r.c) <= 0.45,
  build(r, k) {
    const along = Math.max(r.a, r.c);
    const n = Math.max(0, Math.min(19, Math.round(r.tint * 20)));
    const face = k.own('neon-atlas', atlasMaterial);
    const rotY = r.c > r.a ? (r.px < 0 ? Math.PI / 2 : -Math.PI / 2) : Math.PI;
    const parts = [part(k.plane(1, 1), face, 0xffffff, { r: [0, rotY, 0], s: [along * 2, r.b * 2, 1], cast: false, inst: { aCell: [n] } })];
    if (Math.abs(r.px) < 3.9 && Math.abs(r.pz) < 2.9) {
      for (const sx of [-along * 0.7, along * 0.7]) parts.push(part(k.cyl(0.004, 0.004, 0.36, 5), k.toon(), 0x6a6672, { p: [sx, r.b + 0.18, 0], cast: false }));
    }
    const col = NEON_GLOW[n] ?? 0xffb84f;
    return {
      parts,
      glows: [{ color: col, scale: Math.max(along * 2.6, r.b * 3.2) }],
      anim: n % 3 === 1 ? { mode: 'flicker', seed: n * 1.7 + r.px } : null,
    };
  },
};
