// welder spark (main.js meshFor @922): the sim bounces tiny dense spheres
// off an electric break; the view is a white-hot core in an additive glow.
// Reserved signature: gloss 0.99, r 0.008.
import { CLS, SHAPE } from '../../../seam.js?v=k62';
import { part } from '../kit.js?v=k62';

export default {
  name: 'spark',
  order: 922,
  match: (r) => r.cls === CLS.PROP && r.shape === SHAPE.SPHERE && r.a < 0.011 && r.gloss > 0.985,
  build: (r, k) => ({
    parts: [part(k.sphere(0.009, 6, 5), k.basic(), 0xfff3c4, { cast: false })],
    glows: [{ color: 0xffb45f, scale: 0.11 }],
  }),
};
