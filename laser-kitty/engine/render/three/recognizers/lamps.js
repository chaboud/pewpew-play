// lamps (main.js meshFor @2155 floor-lamp shade, @2165 table lamp): a
// shade over a glowing core, and a pool of real light from the budget.
import { CLS } from '../../../seam.js?v=k62';
import { part, near } from '../kit.js?v=k62';

const shadeMat = (k) => k.phong({ side: 2, shininess: 30 }); // DoubleSide

export const floorLampShade = {
  name: 'floor-lamp',
  order: 2155,
  match: (r) => r.cls === CLS.FURNITURE && r.shape === 0 && near(r.b, 0.1, 0.014) && Math.abs(r.a - r.c) < 0.005 && r.a >= 0.1 && r.a <= 0.13,
  build: (r, k) => ({
    parts: [
      part(k.cyl(r.a * 0.55, r.a * 1.05, r.b * 2.1, 14, true), shadeMat(k), 0xe8ddc4, { cast: false }),
      part(k.sphere(0.03, 8, 6), k.basic(), 0xfff2d8, { p: [0, -0.02, 0], cast: false }),
    ],
    light: { color: 0xffd9a0, intensity: 2.4, distance: 3.8 },
  }),
};

export const tableLamp = {
  name: 'table-lamp',
  order: 2165,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && near(r.a, 0.05, 0.0025) && near(r.b, 0.09, 0.0035) && near(r.c, 0.05, 0.0025) && r.gloss < 0.6,
  build: (r, k) => ({
    parts: [
      part(k.cyl(0.028, 0.034, 0.02, 10), k.toon(), 0x6e5230, { p: [0, -r.b + 0.01, 0] }),
      part(k.cyl(0.007, 0.009, 0.08, 8), k.toon(), 0x6e5230, { p: [0, -0.02, 0] }),
      part(k.cyl(0.026, 0.046, 0.065, 12, true), shadeMat(k), 0xe8ddc4, { p: [0, r.b - 0.04, 0] }),
      part(k.sphere(0.016, 8, 6), k.basic(), 0xfff2d8, { p: [0, r.b - 0.05, 0], cast: false }),
    ],
    light: { color: 0xffd9a0, intensity: 1.4, distance: 3 },
  }),
};
