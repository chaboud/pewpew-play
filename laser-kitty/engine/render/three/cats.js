// cats.js — the cat views. Each cat row carries its brain state and
// ambient act (flag), interest (gloss slot) and visibility (tint slot);
// the view turns that into a facing, a lean, a gait and a pose. The skinned
// rig is the demo's own catrig.js (v2, the CC-BY toon cat), shared rather
// than copied: it is already a pure render module. Until its glb loads a
// cat is drawn as main.js's v1 blob.
import * as THREE from 'three';
import { F, catState, catAct } from '../../seam.js?v=k62';
import { CatRig } from '../../../catrig.js?v=k62';
import { ramp } from './textures.js?v=k62';

const COATS = [0xff9d45, 0x8a8f9e, 0xf5f0e6, 0x3d3a45];
const DARKS = [0xd97f2e, 0x6b7080, 0xd8cfc0, 0x2a2830];
const ease = (c, t, a) => c + (t - c) * a;

/** sim brain state (+ ambient act) -> catrig pose name; null = locomote (main.js v2Pose) */
function v2Pose(st, act, crouch) {
  if (st === 3) return 'windup';
  if (st === 4) return 'pounce';
  if (st === 9) return 'swat';
  if (st === 6) return 'sit';
  if (crouch) return 'crouch';
  if (st === 0) return [null, 'groom', 'loaf', null, 'stretch'][act] ?? (act === 0 ? 'sit' : null);
  return null;
}

function blob(k) {
  const toon = (c) => new THREE.MeshToonMaterial({ color: c, gradientMap: ramp });
  const fur = toon(COATS[k % 4]), dark = toon(DARKS[k % 4]), white = toon(0xfff4e6);
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 12), fur);
  body.scale.set(1.05, 0.92, 1.5);
  body.position.y = 0.02;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.088, 14, 10), fur);
  head.position.set(0, 0.11, 0.2);
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), white);
  muzzle.position.set(0, 0.085, 0.265);
  g.add(body, head, muzzle);
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.075, 4), dark);
    ear.position.set(0.053 * sx, 0.2, 0.185);
    ear.rotation.z = -0.25 * sx;
    g.add(ear);
  }
  const legs = [];
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.14, 0.035), dark);
    leg.position.set(0.065 * sx, -0.12, 0.11 * sz);
    leg.userData.phase = sz > 0 ? (sx > 0 ? 0 : Math.PI) : (sx > 0 ? Math.PI : 0);
    g.add(leg);
    legs.push(leg);
  }
  const tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.2, 4, 8), fur);
  tail.position.set(0, 0.1, -0.24);
  tail.rotation.x = -0.9;
  g.add(tail);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { group: g, body, legs, tail };
}

export class Cats {
  constructor(scene) {
    this.scene = scene;
    this.views = new Map();
    this.gltf = null;
    CatRig.source(2).then((g) => { this.gltf = g; }).catch((e) => console.warn('cat rig failed; blob cats', e));
  }

  clear() {
    for (const v of this.views.values()) {
      this.scene.remove(v.blob.group);
      if (v.rig) v.rig.dispose();
    }
    this.views.clear();
  }

  /** one cat row; k = the cat's ordinal; dot = laser dot position or null */
  update(i, k, rows, o, dt, now, dot) {
    let v = this.views.get(i);
    if (!v) {
      v = { k, blob: blob(k), rig: null, prev: null, smooth: null, facing: 0, lean: 0 };
      this.scene.add(v.blob.group);
      this.views.set(i, v);
    }
    const x = rows[o + F.PX], y = rows[o + F.PY], z = rows[o + F.PZ];
    const flag = rows[o + F.FLAG];
    const st = catState(flag), act = catAct(flag);
    const crouch = st === 2 && act === 1;
    let sp = 0, vy = 0;
    if (v.prev && dt > 0) {
      const vx = (x - v.prev[0]) / dt, vz = (z - v.prev[2]) / dt;
      vy = (y - v.prev[1]) / dt;
      sp = Math.hypot(vx, vz);
      let leanT = 0;
      if (sp > 0.25) {
        let d = Math.atan2(vx, vz) - v.facing;
        while (d > Math.PI) d -= 2 * Math.PI;
        while (d < -Math.PI) d += 2 * Math.PI;
        v.facing += d * 0.2;
        leanT = Math.max(-0.32, Math.min(0.32, d * 2.2)); // bank into turns
      }
      v.lean += (leanT - v.lean) * 0.15;
    }
    v.prev = [x, y, z];
    // temporal smoothing, tau 28 ms: the sim ticks at 60 Hz, frames don't; real teleports snap
    if (!v.smooth || Math.hypot(x - v.smooth[0], y - v.smooth[1], z - v.smooth[2]) > 0.5) v.smooth = [x, y, z];
    else {
      const sa = 1 - Math.exp(-(dt * 1000) / 28);
      for (let a = 0; a < 3; a++) v.smooth[a] += ([x, y, z][a] - v.smooth[a]) * sa;
    }
    const yaw = v.facing + (st === 3 ? Math.sin(now * 45) * 0.24 : 0); // windup wiggle
    if (!v.rig && this.gltf) v.rig = new CatRig(this.gltf, this.scene, v.k);
    if (v.rig) {
      v.blob.group.visible = false;
      const rg = v.rig.group;
      rg.position.set(v.smooth[0], v.smooth[1], v.smooth[2]);
      rg.rotation.y = yaw;
      rg.rotation.z = v.lean;
      v.rig.setVisible(true);
      v.rig.update(dt, { speed: sp, pose: v2Pose(st, act, crouch), dot, tumble01: null, airborne: st === 4 || Math.abs(vy) > 0.8 });
      return;
    }
    const b = v.blob;
    b.group.position.set(v.smooth[0], v.smooth[1], v.smooth[2]);
    b.group.rotation.set(0, yaw, v.lean);
    const swing = Math.min(0.7, sp * 0.22);
    for (const leg of b.legs) leg.rotation.x = ease(leg.rotation.x, Math.sin(now * 20 + leg.userData.phase) * swing, 0.28);
    b.tail.rotation.z = Math.sin(now * (st === 3 || st === 9 ? 50 : 4)) * (st === 3 || st === 9 ? 0.9 : 0.3);
    const stretch = Math.min(1.38, 1 + sp * 0.13);
    b.body.scale.z = ease(b.body.scale.z, 1.5 * stretch, 0.15);
  }

  /** cats whose rows are gone (room rebuilt with fewer) */
  prune(alive) {
    for (const [i, v] of this.views) {
      if (alive.has(i)) continue;
      this.scene.remove(v.blob.group);
      if (v.rig) v.rig.dispose();
      this.views.delete(i);
    }
  }
}
