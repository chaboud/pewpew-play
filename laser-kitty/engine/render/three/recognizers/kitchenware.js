// kitchenware (main.js meshFor @1871 steel pot, @2663 mug, @2673 plates):
// the cylinder family the kitchen and the bar are full of. Every mug in
// every room upgrades at once — that is the point of a signature.
import * as THREE from 'three';
import { CLS } from '../../../seam.js?v=k62';
import { part, near, hash01 } from '../kit.js?v=k62';

export const steelPot = {
  name: 'steel-pot',
  order: 1871,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && near(r.a, 0.055, 0.003) && near(r.b, 0.045, 0.004) && near(r.c, 0.055, 0.003) && r.gloss > 0.5,
  build(r, k) {
    const parts = [part(k.cyl(r.a * 1.05, r.a * 0.95, r.b * 2, 14), k.phong({ shininess: 110, specular: 0xffffff }), 0xc8ccd4)];
    for (const sx of [-1, 1]) parts.push(part(k.box(0.016, 0.01, 0.03), k.toon(), 0x2a2732, { p: [sx * (r.a + 0.012), r.b * 0.4, 0] }));
    return { parts };
  },
};

export const mug = {
  name: 'mug',
  order: 2663,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && near(r.a, 0.035, 0.0025) && near(r.b, 0.045, 0.002) && near(r.c, 0.035, 0.0025) && r.gloss >= 0.5,
  build(r, k) {
    const col = new THREE.Color().setHSL(hash01(r.i), 0.45, 0.55);
    return {
      parts: [
        part(k.cyl(0.033, 0.03, r.b * 2, 12), k.toon(), col),
        part(k.torus(0.016, 0.005, 6, 10, Math.PI), k.toon(), col, { p: [0.036, 0.004, 0], r: [0, 0, -Math.PI / 2] }),
      ],
    };
  },
};

export const plate = {
  name: 'plate',
  order: 2673,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && Math.abs(r.a - r.c) < 0.002 && r.a >= 0.04 && r.a <= 0.085 && r.b >= 0.006 && r.b <= 0.016 && r.gloss >= 0.6,
  build(r, k) {
    const pcol = r.tint !== undefined && r.tint < 0.7 ? 0xb9bfc8 : 0xeceae4;
    return {
      parts: [
        part(k.cyl(r.a, r.a * 0.7, r.b * 2, 18), k.phong({ shininess: 85, specular: 0xccd6dd }), pcol),
        part(k.cyl(r.a * 0.62, r.a * 0.62, 0.002, 16), k.toon(), 0xd8d4c8, { p: [0, r.b, 0] }),
      ],
    };
  },
};
