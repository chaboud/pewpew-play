// cardboard (main.js meshFor @1882): every box the sim marks with the
// 0.12-gloss signature reads as kraft brown with a packing-tape seam.
import * as THREE from 'three';
import { CLS } from '../../../seam.js?v=k62';
import { part, near, hash01 } from '../kit.js?v=k62';

export default {
  name: 'cardboard',
  order: 1882,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && near(r.gloss, 0.12, 0.005),
  build(r, k) {
    const h = hash01(r.i);
    return {
      parts: [
        part(k.unitBox(), k.toon(), new THREE.Color().setHSL(0.075 + h * 0.02, 0.42, 0.52 + h * 0.1), { s: [r.a * 2, r.b * 2, r.c * 2] }),
        part(k.unitBox(), k.toon(), 0xc2a06a, { s: [r.a * 0.36, r.b * 2.01, r.c * 2.01] }),
      ],
    };
  },
};
