// bodies.js — one view per sim record, built the first frame its row is
// seen and kept by index (records are never reused: a shattered body is a
// tombstone row forever, a severed board keeps its record and its view).
// A view is a list of instanced parts; its transform comes from the row.
//
// Destruction, renderer-side only (the sim is never asked or changed):
//   Broke (4) on a body now tombstoned — a shatter: the body crumbles over
//     CRUMBLE_S (crumble.js), dust puffs at the break, crumbs fly and
//     settle (debris.js); the sim's own pieces wear the parent's material
//     and grow the last of the way in. Broke on a live body is a spill.
//   Severed (6) — a compound came apart: its boards leave whole (they are
//     real sim bodies and their views draw on), splinters fly off every
//     member, a cloud rolls off the wreck, its fixtures go dark.
//   Any other tombstone (a spark burning out, a spent drop) crumbles too.
import * as THREE from 'three';
import { ROW, F, CLS, SHAPE, EV, evType, evProp, bornOf } from '../../seam.js?v=k62';
import { recognize } from './recognizers/index.js?v=k62';
import { genericParts, inheritedParts } from './materials.js?v=k62';
import { crumbleAt, growAt, CRUMBLE_S, GROW_S } from './crumble.js?v=k62';
import { part } from './kit.js?v=k62';

const _m = new THREE.Matrix4(), _w = new THREE.Matrix4(), _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3();
const _c = new THREE.Color();
const DUST = new THREE.Color(0xb8b0a4);
const SCORED = new THREE.Color(0.09, 0.006, 0.006); // main.js's 0x551111 emissive, as a colour lift
const GLOW_A = 0.85; // a glow's opacity (main.js's sprites), folded into its additive colour

function rowOf(rows, o, i, mat) {
  return {
    i, cls: rows[o + F.CLASS], shape: rows[o + F.SHAPE], a: rows[o + F.A], b: rows[o + F.B], c: rows[o + F.C],
    px: rows[o + F.PX], py: rows[o + F.PY], pz: rows[o + F.PZ], flag: rows[o + F.FLAG], gloss: rows[o + F.GLOSS], tint: rows[o + F.TINT], mat,
  };
}

class View {
  constructor(i, r) {
    this.i = i;
    this.cls0 = r.cls;
    this.kind = 'generic';
    this.parts = [];
    this.main = null;
    this.anim = null;
    this.grow = null;
    this.generic = false;
    this.inherited = false;
    this.dims = [r.a, r.b, r.c];
    this.ext = [r.shape === SHAPE.CAPSULE ? r.b : r.a, r.shape === SHAPE.CAPSULE ? r.a + r.b : r.b, r.shape === SHAPE.CAPSULE ? r.b : r.c];
    this.size = Math.max(...this.ext);
    this.shape = r.shape;
    this.last = { p: [r.px, r.py, r.pz], q: [0, 0, 0, 1] };
    this.vscale = [1, 1, 1];
    this.dying = -1; // seconds into the crumble, -1 alive
    this.born = -1; // seconds into a spawned piece's grow-in, -1 done
    this.dead = false;
    this.broken = false;
    this.flagSeen = -1;
    this.flicker = 1;
    this.dirty = true;
  }

  /** the body's world matrix (with crumble / grow / puddle scale) into m */
  world(m) {
    let s = 1, sag = 0;
    if (this.dying >= 0) { const k = crumbleAt(this.dying, this.size); s = k.scale; sag = k.sag; }
    else if (this.born >= 0) s = growAt(this.born);
    _p.set(this.last.p[0], this.last.p[1] - sag, this.last.p[2]);
    _q.set(this.last.q[0], this.last.q[1], this.last.q[2], this.last.q[3]);
    _s.set(this.vscale[0] * s, this.vscale[1] * s, this.vscale[2] * s);
    return m.compose(_p, _q, _s);
  }
}

export class Bodies {
  constructor({ scene, kit, batches, lighting, dust, debris, cloths }) {
    Object.assign(this, { scene, kit, batches, lighting, dust, debris, cloths });
    this.views = [];
    this.roomInfo = null;
    this.claims = new Map(); // recognizer / rule name -> bodies (the coverage audit)
  }

  room(info) {
    this.views = [];
    this.roomInfo = info;
    this.claims = new Map();
  }

  build(i, rows, o, mats) {
    const r = rowOf(rows, o, i, mats[i]);
    const v = new View(i, r);
    const parent = r.cls === CLS.PROP ? bornOf(r.flag) : -1;
    const pv = parent >= 0 ? this.views[parent] : null;
    let made = null;
    const rec = pv && pv.main ? null : recognize(r);
    if (pv && pv.main) {
      made = { parts: inheritedParts(r, this.kit, pv.main) };
      v.kind = 'inherited';
      v.inherited = true;
      v.born = 0;
    } else if (rec) {
      made = rec.build(r, this.kit, this.roomInfo);
      v.kind = rec.name;
    } else {
      made = { parts: genericParts(r, this.kit, this.roomInfo) };
      v.kind = made.parts[0] ? made.parts[0].rule : 'none';
      v.generic = true;
    }
    this.claims.set(v.kind, (this.claims.get(v.kind) || 0) + 1);
    // glows are parts too: additive billboards in one instanced batch
    const parts = [...made.parts];
    for (const g of made.glows || []) parts.push(part(this.kit.glowQuad(), this.kit.glow(), g.color, { p: g.p, s: [g.scale, g.scale, g.scale], cast: false, recv: false }));
    if (made.light) {
      // every lit fixture glows; the budget decides which also light the room
      const sc = 0.22 + Math.min(0.25, made.light.intensity * 0.06);
      parts.push(part(this.kit.glowQuad(), this.kit.glow(), made.light.color, { s: [sc, sc, sc], cast: false, recv: false }));
      this.lighting.candidate(v, made.light);
    }
    let best = -1;
    for (const p of parts) {
      const batch = this.batches.get(p.geom, p.mat, p.cast, p.recv);
      const slot = batch.take();
      const pt = { batch, slot, local: p.local, base: p.color.clone(), cur: new THREE.Color(-1, -1, -1), glow: !!p.mat.userData.glow };
      v.parts.push(pt);
      if (p.inst) for (const [name, val] of Object.entries(p.inst)) batch.attr(slot, name, val);
      if (pt.glow) continue;
      if (!p.geom.boundingBox) p.geom.computeBoundingBox();
      const bb = p.geom.boundingBox;
      const vol = (bb.max.x - bb.min.x) * (bb.max.y - bb.min.y) * (bb.max.z - bb.min.z) * Math.abs(p.local.determinant());
      if (vol > best && !p.mat.transparent) { best = vol; v.main = { mat: p.mat, color: p.color.clone() }; }
    }
    if (!v.main && made.parts[0]) v.main = { mat: made.parts[0].mat, color: made.parts[0].color.clone() };
    v.anim = made.anim || null;
    v.grow = made.grow || null;
    if (v.grow === 'puddle') v.vscale = [r.a, 1, r.a];
    this.views[i] = v;
    return v;
  }

  /** this frame's events, before the rows move the views on */
  events(fs, effects) {
    const { rows, count } = fs;
    for (let e = 0; e < fs.eventCount; e++) {
      const code = fs.events[e];
      const t = evType(code);
      if (t !== EV.BROKE && t !== EV.SEVERED && t !== EV.TOPPLED && t !== EV.SCRATCHED) continue;
      const p = evProp(code);
      const v = this.views[p];
      if (!v || p >= count) continue;
      const o = p * ROW;
      if (t === EV.BROKE && rows[o] === CLS.TOMBSTONE) {
        // a shatter: the body is gone from the sim this tick; draw its going
        const vol = v.ext[0] * v.ext[1] * v.ext[2] * 8;
        const n = Math.max(8, Math.min(26, Math.round(8 + Math.cbrt(vol) * 90)));
        this.debris.throwFrom(rows, count, v.last.p, _q.fromArray(v.last.q), v.ext, v.main.color, n, 0, p, 1);
        this.dust.burst(v.last.p[0], v.last.p[1], v.last.p[2], Math.min(0.25, Math.max(0.06, v.size * 0.8)), v.main.color, 10);
        effects.breaks++;
      } else if (t === EV.BROKE) {
        this.dust.burst(rows[o + F.PX], rows[o + F.PY], rows[o + F.PZ], 0.06, 0xc8d6dc, 3); // a spill
      } else if (t === EV.SEVERED) {
        // members: furniture views whose rows turned prop this tick
        let cx = 0, cy = 0, cz = 0, n = 0, big = 0;
        for (let j = 0; j < count; j++) {
          const w = this.views[j];
          if (!w || w.broken || w.cls0 !== CLS.FURNITURE || rows[j * ROW] !== CLS.PROP) continue;
          const q = j * ROW;
          w.broken = true;
          this.recolor(w, CLS.PROP, rows[q + F.FLAG]); // its glows go dark
          const pos = [rows[q + F.PX], rows[q + F.PY], rows[q + F.PZ]];
          _q.set(rows[q + F.QX], rows[q + F.QY], rows[q + F.QZ], rows[q + F.QW]);
          const k = Math.max(2, Math.min(7, Math.round(w.size * 14)));
          this.debris.throwFrom(rows, count, pos, _q, w.ext, w.main.color, k, 1, j, 0.7);
          cx += pos[0]; cy += pos[1]; cz += pos[2]; n++;
          big = Math.max(big, w.size);
        }
        // sized to the boards, not the bookcase: a cloud the size of the wreck reads as fog
        if (n) this.dust.burst(cx / n, cy / n, cz / n, Math.min(0.3, Math.max(0.12, big * 0.3)), 0x9a8a74, 10, -10, 'cloud');
        effects.severs++;
      } else if (t === EV.TOPPLED) {
        this.dust.burst(rows[o + F.PX], rows[o + F.PY], rows[o + F.PZ], Math.max(0.05, v.size * 0.6), 0xd8cfc0, 4);
      } else if (t === EV.SCRATCHED) {
        this.dust.burst(rows[o + F.PX], rows[o + F.PY] + v.ext[1] * 0.5, rows[o + F.PZ], 0.05, v.main ? v.main.color : 0xeeeeee, 4, -10, 'fluff');
      }
    }
  }

  update(fs, dt, time) {
    const { rows, count, materials } = fs;
    for (let i = 0; i < count; i++) {
      const o = i * ROW;
      const cls = rows[o];
      let v = this.views[i];
      if (cls === CLS.TOMBSTONE) {
        if (v && v.dying < 0 && !v.dead) { v.dying = 0; v.dead = true; }
        if (v && v.dying >= 0) this.crumbleStep(v, dt);
        continue;
      }
      if (cls === CLS.CAT || this.cloths.has(i)) continue;
      if (!v) v = this.build(i, rows, o, materials);
      if (v.cls0 === CLS.FURNITURE && cls === CLS.PROP && !v.broken) { v.broken = true; this.recolor(v, cls, rows[o + F.FLAG]); }
      const L = v.last;
      const px = rows[o + F.PX], py = rows[o + F.PY], pz = rows[o + F.PZ];
      const qx = rows[o + F.QX], qy = rows[o + F.QY], qz = rows[o + F.QZ], qw = rows[o + F.QW];
      if (px !== L.p[0] || py !== L.p[1] || pz !== L.p[2] || qx !== L.q[0] || qy !== L.q[1] || qz !== L.q[2] || qw !== L.q[3]) {
        L.p[0] = px; L.p[1] = py; L.p[2] = pz; L.q[0] = qx; L.q[1] = qy; L.q[2] = qz; L.q[3] = qw;
        v.dirty = true;
      }
      const a = rows[o + F.A], b = rows[o + F.B], c = rows[o + F.C];
      if (a !== v.dims[0] || b !== v.dims[1] || c !== v.dims[2]) this.redim(v, a, b, c);
      if (v.born >= 0) { v.born += dt; if (v.born >= GROW_S) v.born = -1; v.dirty = true; }
      const flag = rows[o + F.FLAG];
      if (flag !== v.flagSeen) { v.flagSeen = flag; this.recolor(v, cls, flag); }
      if (v.anim) this.animate(v, time);
      if (v.dirty) this.write(v);
    }
    // views beyond count (room rebuilt smaller) are dropped with the room; crumbles finish there too
  }

  redim(v, a, b, c) {
    v.dims = [a, b, c];
    if (v.grow === 'puddle') v.vscale = [a, 1, a];
    else if (v.generic && v.parts[0]) {
      const s = v.shape === SHAPE.SPHERE ? [a, a, a] : v.shape === SHAPE.CAPSULE ? [1, 1, 1] : [a * 2, b * 2, c * 2];
      v.parts[0].local.makeScale(s[0], s[1], s[2]);
    }
    v.dirty = true;
  }

  /** wear (furniture), scored lift (plain props), crumble fade, flicker */
  recolor(v, cls, flag) {
    const wear = cls === CLS.FURNITURE ? Math.min(3, flag | 0) : 0;
    const scored = cls === CLS.PROP && v.generic && !v.inherited && ((flag | 0) & 1) === 1;
    const fade = v.dying >= 0 ? crumbleAt(v.dying, v.size).fade : 0;
    for (const p of v.parts) {
      if (p.glow) {
        // a glow is light: it dims to nothing as its fixture breaks or crumbles
        _c.copy(p.base).multiplyScalar(v.broken ? 0 : GLOW_A * v.flicker * (1 - fade));
        if (!_c.equals(p.cur)) { p.cur.copy(_c); p.batch.color(p.slot, _c); }
        continue;
      }
      _c.copy(p.base).multiplyScalar(Math.pow(0.8, wear) * v.flicker);
      if (scored) _c.add(SCORED);
      if (fade > 0) _c.lerp(DUST, fade * 0.7);
      if (!_c.equals(p.cur)) { p.cur.copy(_c); p.batch.color(p.slot, _c); }
    }
  }

  animate(v, time) {
    if (v.anim.mode !== 'flicker') return;
    // a tired tube: mostly on, with a stutter every few seconds
    const t = time + v.anim.seed;
    const on = Math.sin(t * 7.3) * Math.sin(t * 13.1) * Math.sin(t * 0.37) > 0.55 ? 0.35 : 1;
    if (on !== v.flicker) {
      v.flicker = on;
      this.recolor(v, v.cls0, v.flagSeen);
    }
  }

  write(v) {
    v.world(_w);
    for (const p of v.parts) {
      _m.multiplyMatrices(_w, p.local);
      p.batch.set(p.slot, _m);
    }
    v.dirty = false;
  }

  crumbleStep(v, dt) {
    v.dying += dt;
    if (v.dying >= CRUMBLE_S) {
      for (const p of v.parts) p.batch.give(p.slot);
      v.parts = [];
      v.dying = -1;
      return;
    }
    this.recolor(v, v.cls0, v.flagSeen);
    this.write(v);
  }

  census() {
    let live = 0, dying = 0;
    for (const v of this.views) { if (!v) continue; if (v.dying >= 0) dying++; else if (!v.dead) live++; }
    return { live, dying, claims: Object.fromEntries([...this.claims].sort((a, b) => b[1] - a[1])) };
  }
}
