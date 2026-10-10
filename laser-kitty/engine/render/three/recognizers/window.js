// windows (main.js meshFor @2039): frame, warm daylight panes, muntins; the
// thin axis picks the wall. Panes sit just outside the frame slab on both
// faces — centred inside it they vanish (screenshot-caught in main.js).
import { CLS } from '../../../seam.js?v=k62';
import { part } from '../kit.js?v=k62';

export default {
  name: 'window',
  order: 2039,
  match: (r) => r.cls === CLS.STATIC && r.shape === 0 && r.gloss > 0.85 && Math.min(r.a, r.c) < 0.02 && r.b >= 0.14 && r.b <= 0.5 && Math.max(r.a, r.c) >= 0.14 && Math.max(r.a, r.c) <= 0.6,
  build(r, k) {
    const along = Math.max(r.a, r.c);
    const side = r.c > r.a; // thin x = side-wall window
    const frame = k.toon();
    const parts = [part(side ? k.box(0.02, r.b * 2 + 0.03, along * 2 + 0.03) : k.box(along * 2 + 0.03, r.b * 2 + 0.03, 0.02), frame, 0x3a2c20, { cast: false })];
    const pane = k.basic({ side: 2 });
    for (const pd of [-0.014, 0.014]) {
      parts.push(part(k.plane(along * 1.9, r.b * 1.9), pane, 0xffe7c2, { p: [side ? pd : 0, 0, side ? 0 : pd], r: [0, side ? Math.PI / 2 : 0, 0], cast: false }));
    }
    for (const mf of [-0.63, 0, 0.63]) {
      for (const md of [-0.016, 0.016]) {
        parts.push(part(side ? k.box(0.006, r.b * 1.9, 0.014) : k.box(0.014, r.b * 1.9, 0.006), frame, 0x3a2c20, { p: [side ? md : mf * along, 0, side ? mf * along : md], cast: false }));
      }
    }
    return { parts };
  },
};
