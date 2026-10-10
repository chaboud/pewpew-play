// TVs (main.js meshFor @1123 and @1677): a bezel with an inset glossy
// screen. Two signatures: the old x-thin set and the z-thin flatscreen.
import { CLS } from '../../../seam.js?v=k62';
import { part } from '../kit.js?v=k62';

const screenMat = (k) => k.phong({ emissive: 0x11323e, shininess: 130, specular: 0xaaccdd });

export const tv = {
  name: 'tv',
  order: 1123,
  match: (r) => r.cls === CLS.PROP && r.a < 0.06 && r.b > 0.2,
  build: (r, k) => ({
    parts: [
      part(k.box(r.a * 2, r.b * 2, r.c * 2), k.toon(), 0x2a2732),
      part(k.plane(r.c * 1.8, r.b * 1.8), screenMat(k), 0x101a26, { p: [r.a + 0.002, 0, 0], r: [0, Math.PI / 2, 0] }),
    ],
  }),
};

export const flatscreen = {
  name: 'flatscreen',
  order: 1677,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && r.c < 0.035 && r.a >= 0.2 && r.b >= 0.14,
  build: (r, k) => ({
    parts: [
      part(k.box(r.a * 2, r.b * 2, r.c * 2), k.toon(), 0x2a2732),
      part(k.plane(r.a * 1.8, r.b * 1.8), screenMat(k), 0x101a26, { p: [0, 0, -r.c - 0.002], r: [0, Math.PI, 0] }),
    ],
  }),
};
