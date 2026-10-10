// chandelier (main.js meshFor @1135): the sim's hub slab becomes a brass
// ring, a stem, six candles with flames and crystal drops; it is lit.
// The crystal is a plain glassy phong here (main.js bends a baked cubemap).
import { CLS } from '../../../seam.js?v=k62';
import { part, near } from '../kit.js?v=k62';

export default {
  name: 'chandelier',
  order: 1135,
  match: (r) => r.cls === CLS.STATIC && r.shape === 0 && r.py > 2 && near(r.a, 0.32, 0.01),
  build(r, k) {
    const brass = k.phong({ shininess: 90, specular: 0xffe8b0 });
    const flame = k.basic();
    const crystal = k.phong({ shininess: 160, specular: 0xffffff, transparent: true, opacity: 0.8 });
    const parts = [
      part(k.torus(r.a * 0.85, 0.022, 8, 24), brass, 0xb08d3e, { r: [Math.PI / 2, 0, 0] }),
      part(k.cyl(0.014, 0.014, 1.0, 8), brass, 0xb08d3e, { p: [0, 0.52, 0] }),
    ];
    for (let n = 0; n < 6; n++) {
      const ang = (n / 6) * Math.PI * 2;
      const ax = Math.cos(ang) * r.a * 0.85, az = Math.sin(ang) * r.a * 0.85;
      parts.push(part(k.cyl(0.013, 0.013, 0.09, 6), k.toon(), 0xf2ead8, { p: [ax, 0.07, az] }));
      parts.push(part(k.sphere(0.016, 6, 5), flame, 0xffd98a, { p: [ax, 0.13, az], cast: false }));
      parts.push(part(k.octa(0.022), crystal, 0xeef4ff, { p: [ax, -0.06, az], cast: false }));
    }
    return { parts, light: { color: 0xffd9a0, intensity: 4, distance: 6 } };
  },
};
