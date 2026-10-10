// input.js — the laser pad and the look drag, app-side. Touches become a
// world ray (through the app's camera rig, plain math), never anything an
// engine sees: the engine only gets the laser state the sim answers with.
// The mapping is main.js's compact pad (its default): a centered island
// whose near edge is an arc swept from a belly button below the screen.
import { norm } from './camera.js?v=k62';

export class LaserInput {
  /** @param {HTMLElement} pad @param {HTMLElement} thumb @param {import('./camera.js?v=k62').RoomCamera} cam */
  constructor(pad, thumb, cam, { padScale = 0.5 } = {}) {
    this.pad = pad;
    this.thumb = thumb;
    this.cam = cam;
    this.active = false;
    this.aim = null; // screen px
    this.override = null; // test hook: a world target
    this.roomHZ = 3;
    this.ray = { ox: 0, oy: 0, oz: 0, dx: 0, dy: 0, dz: 1 };
    pad.style.width = `${padScale * 100}%`;
    pad.style.left = `${(1 - padScale) * 50}%`;
    pad.style.height = `${padScale * 33}vh`;
    for (const [ev, on] of [['pointerdown', true], ['pointermove', null], ['pointerup', false], ['pointercancel', false]]) {
      pad.addEventListener(ev, (e) => {
        if (on !== null) this.active = on;
        if (this.active && on !== false) this.padPoint(e);
        e.preventDefault();
      }, { passive: false });
    }
  }

  padPoint(e) {
    const r = this.pad.getBoundingClientRect();
    const fx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    const fy = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    const { w, h } = this.cam;
    const u = (fx - 0.5) * 2;
    // the arc's middle is the stage front's screen line: nearer aims pass under the diorama
    const lipY = this.cam.project([0, 0, -this.roomHZ])[1] + 24;
    const midY = Math.min(r.top, lipY);
    const nearY = midY + (h - midY) * u * u;
    this.aim = [fx * w, h * 0.08 + (nearY - h * 0.08) * fy];
    this.thumb.style.left = `${fx * r.width}px`;
    this.thumb.style.top = `${fy * r.height}px`;
  }

  /** the ray for this frame; null aim keeps the last one */
  update() {
    let p = null;
    if (this.override) p = this.override;
    else if (this.aim) p = this.cam.focusPoint(this.aim[0], this.aim[1]);
    if (!p) return this.ray;
    const o = this.cam.bellyOrigin();
    const d = norm([p[0] - o[0], p[1] - o[1], p[2] - o[2]]);
    this.ray = { ox: o[0], oy: o[1], oz: o[2], dx: d[0], dy: d[1], dz: d[2] };
    return this.ray;
  }

  get on() { return this.active || !!this.override; }
}

/** drag the room to look, wheel to zoom (no pinch/pan yet) */
export function bindLook(el, cam, padEl) {
  let prev = null;
  el.addEventListener('pointerdown', (e) => { prev = [e.clientX, e.clientY]; el.setPointerCapture?.(e.pointerId); });
  el.addEventListener('pointermove', (e) => {
    if (!prev) return;
    cam.look(-(e.clientX - prev[0]) * 0.004, (e.clientY - prev[1]) * 0.004);
    prev = [e.clientX, e.clientY];
  });
  const end = () => { prev = null; };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
  addEventListener('wheel', (e) => {
    if (padEl && e.clientY >= padEl.getBoundingClientRect().top) return;
    cam.zoomBy(e.deltaY < 0 ? 1.08 : 1 / 1.08);
  }, { passive: true });
}
