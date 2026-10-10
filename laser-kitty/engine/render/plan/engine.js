// plan/engine.js — a second engine behind the same seam, with no three.js
// at all: the room from above on a Canvas 2D, every body its footprint,
// cats as dots with a heading, the laser, and the events as rings. It is a
// debugging view, and the proof that the seam is engine-neutral: the app
// does not know which engine it is driving.
import { ROW, F, CLS, SHAPE, LASER, EV, evType, evProp } from '../../seam.js?v=k62';

export function createEngine() { return new PlanEngine(); }

const CLASS_FILL = ['#4a4060', '#a07850', '#5fb8a8', '#ff9d45'];

class PlanEngine {
  constructor() {
    this.name = 'plan';
    this.rings = [];
    this.draws = 0;
    this.seen = new Float32Array(0); // last live x,z per body: a tombstone's row is zeroed
  }

  async init(canvas) {
    this.canvas = canvas;
    this.g = canvas.getContext('2d');
    this.w = canvas.width; this.h = canvas.height; this.dpr = 1;
  }

  loadRoom(info) { this.room = info; this.rings = []; this.seen = new Float32Array(0); }

  resize(w, h, dpr = 1) {
    this.dpr = Math.min(dpr, 2);
    this.canvas.width = Math.round(w * this.dpr);
    this.canvas.height = Math.round(h * this.dpr);
    this.w = w; this.h = h;
  }

  frame(fs) {
    const g = this.g, { rows, count } = fs;
    const hx = this.room ? this.room.hx : 4, hz = this.room ? this.room.hz : 3;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    g.fillStyle = '#14121a';
    g.fillRect(0, 0, this.w, this.h);
    // fit the room as the camera sees it from the open front: the far wall
    // (+z) up the screen, and -x on the right (the 3D view's screen-right)
    const s = Math.min((this.w - 32) / (hx * 2), (this.h * 0.62) / (hz * 2));
    const cx = this.w / 2, cy = this.h * 0.38;
    const X = (x) => cx - x * s, Y = (z) => cy - z * s;
    g.strokeStyle = '#3a3644';
    g.strokeRect(X(-hx), Y(hz), hx * 2 * s, hz * 2 * s);
    this.draws = 0;
    for (let i = 0; i < count; i++) {
      const o = i * ROW, cls = rows[o];
      if (cls === CLS.TOMBSTONE) continue;
      const px = rows[o + F.PX], py = rows[o + F.PY], pz = rows[o + F.PZ];
      if (cls === CLS.CAT) continue;
      const a = rows[o + F.A], b = rows[o + F.B], c = rows[o + F.C];
      if (cls === CLS.STATIC && a > 2 && b < 0.2) continue; // the floor slab
      // yaw of the body's x axis, from its quaternion
      const qx = rows[o + F.QX], qy = rows[o + F.QY], qz = rows[o + F.QZ], qw = rows[o + F.QW];
      const yaw = Math.atan2(2 * (qw * qy + qx * qz), 1 - 2 * (qy * qy + qz * qz));
      g.save();
      g.translate(X(px), Y(pz));
      g.rotate(Math.PI - yaw); // the x flip mirrors the turn
      g.globalAlpha = 0.35 + Math.min(0.6, py / 3);
      g.fillStyle = CLASS_FILL[cls] || '#888';
      if (rows[o + F.SHAPE] === SHAPE.BOX) g.fillRect(-a * s, -c * s, a * 2 * s, c * 2 * s);
      else { g.beginPath(); g.arc(0, 0, Math.max(1, (rows[o + F.SHAPE] === SHAPE.SPHERE ? a : b) * s), 0, Math.PI * 2); g.fill(); }
      g.restore();
      this.draws++;
    }
    g.globalAlpha = 1;
    for (let i = 0; i < count; i++) {
      const o = i * ROW;
      if (rows[o] !== CLS.CAT) continue;
      const x = X(rows[o + F.PX]), y = Y(rows[o + F.PZ]);
      g.fillStyle = CLASS_FILL[3];
      g.beginPath(); g.arc(x, y, Math.max(4, 0.12 * s), 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffe86b';
      g.font = '600 10px ui-monospace, monospace';
      g.fillText(`i${rows[o + F.GLOSS].toFixed(2)}`, x + 8, y - 6);
      this.draws++;
    }
    for (let e = 0; e < fs.eventCount; e++) {
      const t = evType(fs.events[e]);
      if (t !== EV.BROKE && t !== EV.SEVERED && t !== EV.TOPPLED) continue;
      const p = evProp(fs.events[e]);
      if (p * 2 + 1 >= this.seen.length) continue;
      this.rings.push({ x: this.seen[p * 2], z: this.seen[p * 2 + 1], t: 0, col: t === EV.BROKE ? '#ff5a5a' : t === EV.SEVERED ? '#ffb347' : '#9ad' });
    }
    if (this.seen.length < count * 2) { const n = new Float32Array(count * 2); n.set(this.seen); this.seen = n; }
    for (let i = 0; i < count; i++) {
      const o = i * ROW;
      if (rows[o] !== CLS.TOMBSTONE) { this.seen[i * 2] = rows[o + F.PX]; this.seen[i * 2 + 1] = rows[o + F.PZ]; }
    }
    this.rings = this.rings.filter((r) => (r.t += fs.dt) < 0.8);
    for (const r of this.rings) {
      g.strokeStyle = r.col;
      g.globalAlpha = 1 - r.t / 0.8;
      g.beginPath(); g.arc(X(r.x), Y(r.z), 6 + r.t * 50, 0, Math.PI * 2); g.stroke();
    }
    g.globalAlpha = 1;
    const L = fs.laser;
    if (fs.laserOn && L[LASER.ACTIVE] > 0.5) {
      g.fillStyle = '#ff3b30';
      g.beginPath(); g.arc(X(L[LASER.PX]), Y(L[LASER.PZ]), 4, 0, Math.PI * 2); g.fill();
    }
    // the camera, as a wedge at its plan position
    const C = fs.camera;
    g.strokeStyle = '#53c8d8';
    g.beginPath();
    g.moveTo(X(C.pos[0]), Y(C.pos[2]));
    g.lineTo(X(C.pos[0] + C.fwd[0] * 0.8), Y(C.pos[2] + C.fwd[2] * 0.8));
    g.stroke();
  }

  stats() { return { calls: this.draws, triangles: 0, extra: { engine: 'canvas2d' } }; }

  dispose() {}
}
