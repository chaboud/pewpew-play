// camera.js — the room camera rig as plain math (no three): the app owns
// the vantage, the engine renders from the pose it is handed. The numbers
// are main.js's (layoutRoom, resize, applyLook) so both viewers frame a
// room identically: a fixed diorama vantage set back past the open front,
// a bounded look, eased targets.
const H_FOV = 62 * (Math.PI / 180);
const HOME_YAW = 0, HOME_PITCH = -0.26;
const YAW_LIM = 0.9, PITCH_MIN = -0.8, PITCH_MAX = 0.15;
const ZOOM_MIN = 0.7, ZOOM_MAX = 2.4;
// the laser leaves the belt: camera-local offset (main.js BELT_LOCAL)
const BELT = [0, -0.75, 0.15];

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

export class RoomCamera {
  constructor() {
    this.eye = [0, 2, -5.6];
    this.focusD = 5.5;
    this.yaw = this.yawT = HOME_YAW;
    this.pitch = this.pitchT = HOME_PITCH;
    this.zoom = this.zoomT = 1;
    this.w = 1; this.h = 1;
    this.shake = 0;
    this.bob = 0;
    this.pos = [0, 2, -5.6];
    this.fwd = [0, 0, 1];
    this.fovY = 55;
  }

  /** main.js layoutRoom: multi-storey rooms step back and up */
  layout(roomId, hx, hz) {
    const r = roomId | 0;
    const tall = r === 6 || r === 7;
    this.eye = [0, r === 7 ? 3.6 : tall ? 2.8 : 2.0, -(hz + (r === 7 ? 10.5 : tall ? 5.4 : 2.6))];
    this.focusD = hz + (r === 7 ? 10.4 : tall ? 5.3 : 2.5);
    this.home();
  }

  home() {
    this.yaw = this.yawT = HOME_YAW;
    this.pitch = this.pitchT = HOME_PITCH;
    this.zoom = this.zoomT = 1;
    this.fov();
  }

  setViewport(w, h) { this.w = w; this.h = h; this.fov(); }

  fov() {
    const aspect = this.w / this.h;
    const vfov = 2 * Math.atan(Math.tan(H_FOV / 2) / Math.min(aspect, 1.2));
    const base = Math.min((105 * Math.PI) / 180, vfov);
    const vz = 2 * Math.atan(Math.tan(base / 2) / this.zoom);
    this.fovY = Math.min(120, (vz * 180) / Math.PI);
  }

  look(dyaw, dpitch) {
    this.yawT = Math.max(-YAW_LIM, Math.min(YAW_LIM, this.yawT + dyaw));
    this.pitchT = Math.max(PITCH_MIN, Math.min(PITCH_MAX, this.pitchT + dpitch));
  }

  /** aim the rig at a world point (snapping, for test drivers and replays) */
  aimAt(p, zoom = this.zoomT) {
    const d = [p[0] - this.eye[0], p[1] - this.eye[1], p[2] - this.eye[2]];
    this.yaw = this.yawT = Math.max(-YAW_LIM, Math.min(YAW_LIM, Math.atan2(d[0], d[2])));
    this.pitch = this.pitchT = Math.max(PITCH_MIN, Math.min(PITCH_MAX, Math.atan2(d[1], Math.hypot(d[0], d[2]))));
    this.zoom = this.zoomT = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoom));
    this.fov();
  }

  zoomBy(f) { this.zoomT = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, this.zoomT * f)); }

  kick(s) { this.shake = Math.max(this.shake, s); }

  /** ease toward targets (~110 ms), the idle bob, shake decay; `rnd` is the app's jitter source */
  update(dtMs, nowMs, rnd = Math.random) {
    const ea = 1 - Math.exp(-dtMs / 110);
    this.yaw += (this.yawT - this.yaw) * ea;
    this.pitch += (this.pitchT - this.pitch) * ea;
    if (Math.abs(this.zoomT - this.zoom) > 0.0004) { this.zoom += (this.zoomT - this.zoom) * ea; this.fov(); }
    this.bob = Math.sin(nowMs * 0.0006) * 0.012;
    const s = this.shake;
    this.pos = [this.eye[0] + (rnd() - 0.5) * s * 0.06, this.eye[1] + this.bob + (rnd() - 0.5) * s * 0.05, this.eye[2]];
    this.fwd = [Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), Math.cos(this.yaw) * Math.cos(this.pitch)];
    this.shake *= 0.85;
    if (this.shake < 0.02) this.shake = 0;
  }

  /** right / up of a lookAt camera with world up +y (three's Matrix4.lookAt) */
  basis() {
    const r = norm(cross(this.fwd, [0, 1, 0]));
    const u = cross(r, this.fwd);
    return { r, u, f: this.fwd };
  }

  pose() {
    return { pos: [...this.pos], fwd: [...this.fwd], fovY: this.fovY, aspect: this.w / this.h, near: 0.1, far: 50 };
  }

  /** world ray through a screen pixel */
  ray(sx, sy) {
    const { r, u, f } = this.basis();
    const t = Math.tan((this.fovY * Math.PI) / 360);
    const nx = (sx / this.w) * 2 - 1, ny = -(sy / this.h) * 2 + 1;
    const d = norm([f[0] + r[0] * nx * t * (this.w / this.h) + u[0] * ny * t,
      f[1] + r[1] * nx * t * (this.w / this.h) + u[1] * ny * t,
      f[2] + r[2] * nx * t * (this.w / this.h) + u[2] * ny * t]);
    return { o: [...this.pos], d };
  }

  /** world point -> screen pixel (and whether it is in front) */
  project(p) {
    const { r, u, f } = this.basis();
    const v = sub(p, this.pos);
    const z = dot(v, f);
    const t = Math.tan((this.fovY * Math.PI) / 360);
    const nx = dot(v, r) / (z * t * (this.w / this.h));
    const ny = dot(v, u) / (z * t);
    return [((nx + 1) / 2) * this.w, ((-ny + 1) / 2) * this.h, z > 0];
  }

  belt() {
    const { r, u, f } = this.basis();
    // camera-local +z is backward
    return [0, 1, 2].map((k) => this.pos[k] + r[k] * BELT[0] + u[k] * BELT[1] - f[k] * BELT[2]);
  }

  /** the point a screen aim lands on at the focus plane (main.js updateLaserRay) */
  focusPoint(sx, sy) {
    const { o, d } = this.ray(sx, sy);
    const t = this.focusD / Math.max(0.2, dot(d, this.fwd));
    return [o[0] + d[0] * t, o[1] + d[1] * t, o[2] + d[2] * t];
  }

  /** compact-pad origin: a point ~144 px below the screen's bottom edge, half a metre out */
  bellyOrigin() {
    const { o, d } = this.ray(this.w / 2, this.h + 144);
    return [o[0] + d[0] * 0.5, o[1] + d[1] * 0.5, o[2] + d[2] * 0.5];
  }
}

export { sub, dot, norm };
