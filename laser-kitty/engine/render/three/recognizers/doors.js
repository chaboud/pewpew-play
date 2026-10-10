// hinged doors (main.js meshFor @1821, @1833): the sim's first revolute
// joints. Fridge / freezer door: enamel slab, a long handle on the free
// (-x) edge, a gasket line. Cabinet door: wood panel, a raised field and a
// knob near the free edge (guessed from the door's place in the kitchen,
// as main.js does — the stream does not say which side the hinge is).
import { CLS } from '../../../seam.js?v=k62';
import { part, near } from '../kit.js?v=k62';

export const fridgeDoor = {
  name: 'fridge-door',
  order: 1821,
  match: (r) => r.cls === CLS.FURNITURE && r.shape === 0 && near(r.c, 0.015, 0.003) && near(r.a, 0.35, 0.01) && (near(r.b, 0.78, 0.01) || near(r.b, 0.22, 0.01)) && r.gloss >= 0.6,
  build: (r, k) => ({
    parts: [
      part(k.box(r.a * 2, r.b * 2, r.c * 2), k.phong({ shininess: 90, specular: 0xccd6dd }), 0xeceae4),
      part(k.box(0.02, Math.min(r.b * 1.4, 0.5), 0.025), k.phong({ shininess: 120, specular: 0xffffff }), 0x9aa0aa, { p: [-r.a + 0.05, 0, -r.c - 0.016] }),
      part(k.box(r.a * 1.92, r.b * 1.92, 0.004), k.toon(), 0x4a4a52, { p: [0, 0, r.c + 0.001] }),
    ],
  }),
};

export const cabinetDoor = {
  name: 'cabinet-door',
  order: 1833,
  match: (r) => r.cls === CLS.FURNITURE && r.shape === 0 && near(r.c, 0.012, 0.003) && ((near(r.a, 0.19, 0.01) && near(r.b, 0.36, 0.01)) || (near(r.a, 0.24, 0.01) && near(r.b, 0.29, 0.01))) && near(r.gloss, 0.3, 0.05),
  build(r, k) {
    const leftHinged = r.px < -2.4 || Math.abs(r.px + 1.0) < 0.05 || (r.px > 1.2 && r.px < 1.6);
    return {
      parts: [
        part(k.box(r.a * 2, r.b * 2, r.c * 2), k.wood(), 0xa08056),
        part(k.box(r.a * 1.5, r.b * 1.6, 0.006), k.wood(), 0x8c6c48, { p: [0, 0, -r.c - 0.002] }),
        part(k.sphere(0.012, 8, 6), k.phong({ shininess: 100, specular: 0xffffff }), 0xc8b070, { p: [leftHinged ? r.a - 0.03 : -r.a + 0.03, 0, -r.c - 0.012] }),
      ],
    };
  },
};
