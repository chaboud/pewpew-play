// lit fixtures (main.js meshFor @2108): the reserved gloss 0.86 says "this
// is a light"; the dims pick the style — flush ceiling dome, pendant, shop
// tube, wall sconce — and every one is a light candidate for the budget.
import * as THREE from 'three';
import { CLS } from '../../../seam.js?v=k62';
import { part, near } from '../kit.js?v=k62';

const WARM = 0xffd9a0;

export default {
  name: 'fixture',
  order: 2108,
  match: (r) => r.cls === CLS.STATIC && r.shape === 0 && near(r.gloss, 0.86, 0.005),
  build(r, k) {
    const glow = k.basic();
    const nc = { cast: false };
    if (near(r.b, 0.02, 0.008) && near(r.a, 0.09, 0.01) && near(r.c, 0.09, 0.01)) {
      const dome = k.custom('fixture:dome', () => new THREE.SphereGeometry(0.075, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2));
      return {
        parts: [part(k.cyl(0.09, 0.095, 0.018, 14), k.toon(), 0xcfc8ba, nc), part(dome, glow, 0xfff2d8, { p: [0, -0.005, 0], cast: false })],
        light: { color: WARM, intensity: 3, distance: 5 },
      };
    }
    if (near(r.b, 0.045, 0.008) && near(Math.max(r.a, r.c), 0.055, 0.01)) {
      return {
        parts: [
          part(k.cyl(0.004, 0.004, 0.5, 6), k.toon(), 0x3a3644, { p: [0, 0.29, 0], cast: false }),
          part(k.cyl(0.02, 0.062, 0.075, 14, true), k.phong({ side: 2, shininess: 60 }), 0x9a4a3a, { p: [0, 0.02, 0], cast: false }),
          part(k.sphere(0.022, 8, 6), glow, 0xfff2d8, { p: [0, -0.02, 0], cast: false }),
        ],
        light: { color: WARM, intensity: 2, distance: 4 },
      };
    }
    if (Math.max(r.a, r.c) > 0.3) {
      const len = Math.max(r.a, r.c) * 1.9;
      return {
        parts: [
          part(k.box(r.a * 2, r.b * 2, r.c * 2), k.toon(), 0x8a8f98, nc),
          part(k.cyl(0.016, 0.016, len, 8), glow, 0xeef4ff, { p: [0, -r.b - 0.012, 0], r: r.c > r.a ? [Math.PI / 2, 0, 0] : [0, 0, Math.PI / 2], cast: false }),
        ],
        light: { color: 0xdfe8ff, intensity: 5.5, distance: 5.5 },
      };
    }
    return {
      parts: [
        part(k.box(r.a * 2, r.b * 2, r.c * 2), k.toon(), 0x6e5230, nc),
        part(k.cyl(0.034, 0.018, 0.05, 10, true), k.phong({ side: 2, shininess: 40 }), 0xd9c9a8, { p: [0, 0.045, 0], cast: false }),
        part(k.sphere(0.016, 8, 6), glow, 0xfff2d8, { p: [0, 0.055, 0], cast: false }),
      ],
      light: { color: WARM, intensity: 1.2, distance: 2.8 },
    };
  },
};
