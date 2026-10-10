// sim.js — the app's adapter over the sim core's C ABI (core/src/abi.rs).
// The only module in engine/ allowed to hold the wasm instance or call an
// lk_* export (scripts/check-engine-deps.mjs). Everything it hands out is
// rows, codes and numbers: the FrameState a render engine is given.
import { ROW } from '../seam.js?v=k62';

export async function loadCore(url) {
  const w = await WebAssembly.instantiateStreaming(fetch(url), {});
  return w.instance.exports;
}

export class SimHost {
  /** @param {any} lk wasm exports */
  constructor(lk) {
    this.lk = lk;
    this.sim = 0;
    this.events = new Uint32Array(256);
    this.eventCount = 0;
    this.mats = new Uint8Array(1024);
    this.matsKnown = 0;
  }

  /** (re)build the room: cats 1..64, weight, room id, live knobs */
  build({ seed = 42, cats = 1, weight = 1, room = 0, strength = 1, gravity = 1, destruct = 0.3 }) {
    const lk = this.lk;
    if (this.sim) lk.lk_free(this.sim);
    this.sim = lk.lk_new_cfg(seed, 0, cats, weight, room | 0);
    lk.lk_tune(this.sim, strength, gravity, destruct);
    this.matsKnown = 0;
    this.eventCount = 0;
  }

  tune(strength, gravity, destruct) { this.lk.lk_tune(this.sim, strength, gravity, destruct); }

  room() {
    const lk = this.lk, s = this.sim;
    const cloths = [];
    for (let i = 0, n = lk.lk_cloth_count(s); i < n; i++) {
      const info = lk.lk_cloth_info(s, i);
      cloths.push({ first: info >>> 8, cols: (info >>> 4) & 0xf, rows: info & 0xf });
    }
    const rings = [];
    for (let i = 0, n = lk.lk_ring_count(s); i < n; i++) rings.push((lk.lk_ring_info(s, i) >>> 0) & 0x7fffffff);
    return { hx: lk.lk_room_hx(s), hz: lk.lk_room_hz(s), cloths, rings };
  }

  /** one fixed tick; events append to this frame's list */
  step(ox, oy, oz, dx, dy, dz, active) {
    const lk = this.lk, s = this.sim;
    lk.lk_step(s, ox, oy, oz, dx, dy, dz, active ? 1 : 0);
    const n = lk.lk_event_count(s);
    if (this.eventCount + n > this.events.length) {
      const grown = new Uint32Array(Math.max(this.events.length * 2, this.eventCount + n));
      grown.set(this.events.subarray(0, this.eventCount));
      this.events = grown;
    }
    for (let i = 0; i < n; i++) this.events[this.eventCount++] = lk.lk_event(s, i) >>> 0;
  }

  /** the frame's event list is consumed once per frame */
  clearEvents() { this.eventCount = 0; }

  count() { return this.lk.lk_body_count(this.sim); }

  /** a view into wasm memory: valid until the next step or memory growth */
  rows(count = this.count()) {
    return new Float32Array(this.lk.memory.buffer, this.lk.lk_render_data(this.sim), count * ROW);
  }

  laser() { return new Float32Array(this.lk.memory.buffer, this.lk.lk_laser(this.sim), 10); }

  /** per-body material bits; a record's bits are fixed at its birth, so only new records are asked */
  materials(count) {
    if (count > this.mats.length) {
      const grown = new Uint8Array(Math.max(this.mats.length * 2, count));
      grown.set(this.mats);
      this.mats = grown;
    }
    for (let i = this.matsKnown; i < count; i++) this.mats[i] = this.lk.lk_body_material(this.sim, i) & 0xff;
    this.matsKnown = Math.max(this.matsKnown, count);
    return this.mats;
  }

  score() { return this.lk.lk_score(this.sim); }
  catState() { return this.lk.lk_cat_state(this.sim); }
  interest() { return this.lk.lk_interest(this.sim); }
  tossCat() { this.lk.lk_cat_toss(this.sim); }
  fling(rec, vx, vy, vz) { this.lk.lk_fling(this.sim, rec, vx, vy, vz); }
  spin(rec, wx, wy, wz) { this.lk.lk_spin(this.sim, rec, wx, wy, wz); }
  hash() { return [this.lk.lk_hash_lo(this.sim) >>> 0, this.lk.lk_hash_hi(this.sim) >>> 0]; }
}
