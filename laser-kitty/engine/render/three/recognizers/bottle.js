// liquor / wine bottles (main.js meshFor @1894): coloured glass body,
// shoulder, neck, cap and label. The palette is keyed by body index so a
// packed back-bar reads as a real one, not a row of clones; clear bottles
// are translucent. Glass casts no shadow (150 bottles painted a scalloped
// garland on the back wall — measured and rejected in main.js). Body,
// label and neck are unit cylinders scaled per instance and only the
// shoulder's taper is quantized (2 mm), so a mixed shelf shares a few
// batches instead of one set per bottle size (measured: +15 in the kitchen).
import { CLS } from '../../../seam.js?v=k62';
import { part, near } from '../kit.js?v=k62';

const GLASS = [0x8a4f1a, 0x2e6a38, 0x7a2530, 0x2f5a7a, 0xcfd8da, 0x4a2c12];
const CAPS = [0xd8c93a, 0xb03a34, 0x2a2732, 0xc9c2b0];
const q2 = (v) => Math.round(v / 0.002) * 0.002;

export default {
  name: 'bottle',
  order: 1894,
  match: (r) => r.cls === CLS.PROP && r.shape === 0 && near(r.a, 0.027, 0.004) && near(r.b, 0.078, 0.012) && near(r.c, 0.027, 0.004),
  build(r, k) {
    const a = r.a, b = r.b;
    const ci = ((r.i * 2654435761) >>> 0) % 6;
    const glass = ci === 4
      ? k.phong({ shininess: 130, specular: 0xffffff, transparent: true, opacity: 0.55 })
      : k.phong({ shininess: 130, specular: 0xffffff });
    const nc = { cast: false };
    return {
      parts: [
        part(k.cyl(1, 1, 1, 10), glass, GLASS[ci], { p: [0, -b * 0.28, 0], s: [a * 1.12, b * 1.44, a * 1.12], ...nc }),
        part(k.cyl(0.0085, q2(a) * 1.05, 1, 10), glass, GLASS[ci], { p: [0, b * 0.58, 0], s: [1, b * 0.28, 1], ...nc }),
        part(k.cyl(0.0085, 0.0085, 1, 8), glass, GLASS[ci], { p: [0, b * 0.78, 0], s: [1, b * 0.5, 1], ...nc }),
        part(k.cyl(0.0095, 0.0095, 0.012, 8), k.toon(), CAPS[((r.i * 7) >>> 0) % 4], { p: [0, b, 0], ...nc }),
        part(k.cyl(1, 1, 1, 10), k.toon(), ci % 2 ? 0xe8e2d0 : 0xd8cdb2, { p: [0, -b * 0.32, 0], s: [a * 1.13, b * 0.5, a * 1.13], ...nc }),
      ],
    };
  },
};
