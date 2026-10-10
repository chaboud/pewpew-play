// paint decals and puddles (main.js meshFor @968): each sits on its own
// sim-assigned micro-layer so no two are ever coplanar. Puddles (gloss
// 0.82) flood by growing their stream dims, so the view rescales every
// frame (`grow`); paw prints (0.74) are a separate reserved signature —
// never inferred from dims (a puddle spawns print-sized and floods).
import * as THREE from 'three';
import { CLS, SHAPE } from '../../../seam.js?v=k62';
import { part } from '../kit.js?v=k62';
import { liquidColor } from './liquid.js?v=k62';

export default {
  name: 'paint',
  order: 968,
  match: (r) => r.cls === CLS.STATIC && r.shape === SHAPE.BOX && r.b < 0.004 && r.gloss > 0.7,
  build(r, k) {
    const { color, clear } = liquidColor(r.tint);
    const mat = clear
      ? k.phong({ shininess: 220, specular: 0x99bbcc, transparent: true, opacity: 0.55 })
      : k.phong({ shininess: 140, specular: 0x99bbcc });
    const parts = [];
    if (r.gloss < 0.78) {
      // paw print: pad + three toes, +z along the stride
      parts.push(part(k.cyl(1, 1, 0.001, 10), mat, color, { s: [0.012, 1, 0.009], cast: false }));
      for (const tx of [-0.0085, 0, 0.0085]) {
        parts.push(part(k.cyl(0.0045, 0.0045, 0.001, 8), mat, color, { p: [tx, 0.0002, 0.013 + (tx === 0 ? 0.003 : 0)], cast: false }));
      }
      return { parts };
    }
    // a puddle: four overlapping discs, built at unit radius and scaled by the live dims
    for (const [rr, ox, oz, oy] of [[1, 0, 0, 0.0004], [0.62, 0.55, 0.35, 0.0002], [0.5, -0.5, -0.45, 0], [0.34, 0.2, -0.75, -0.0002]]) {
      parts.push(part(k.cyl(rr, rr, 0.001, 14), mat, color, { p: [ox, oy, oz], cast: false }));
    }
    return { parts, grow: 'puddle' };
  },
};
