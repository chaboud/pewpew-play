// lights.js — the room's key light and ambient, and the fixtures' budget.
// Recognizers mark lit fixtures (lamps, chandeliers); after a room's first
// full frame the strongest K become real point lights (K by device: 8 fine
// pointer, 4 coarse, 2 lite). The K lights exist from init and stay in the
// scene, dark when idle: a light that appears recompiles every lit shader
// (Strollzilla, "Things that bit"). A broken fixture goes dark.
import * as THREE from 'three';

export class Lighting {
  constructor(scene, { budget = 8, shadows = 'soft' } = {}) {
    this.scene = scene;
    this.hemi = new THREE.HemisphereLight(0xfff1de, 0x51436a, 1.2);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffe3b8, 1.35);
    this.shadowsOn = shadows !== 'off';
    this.sun.castShadow = this.shadowsOn;
    const lite = shadows === 'light';
    this.sun.shadow.mapSize.set(lite ? 2048 : 4096, lite ? 2048 : 4096);
    this.sun.shadow.radius = lite ? 5 : 9;
    this.sun.shadow.blurSamples = lite ? 8 : 16;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.camera.far = 14;
    scene.add(this.sun);
    scene.add(this.sun.target);
    this.pool = [];
    for (let k = 0; k < budget; k++) {
      const pl = new THREE.PointLight(0xffd9a0, 0, 3, 2);
      scene.add(pl);
      this.pool.push({ light: pl, view: null, off: new THREE.Vector3(), base: 0 });
    }
    this.candidates = [];
    this.dirty = true;
  }

  room(info) {
    const { hx, hz, look } = info;
    this.sun.position.set(-Math.min(hx * 0.55, 2.5), 5.5, -(hz + 2.0));
    this.sun.target.position.set(0, 0, 0);
    this.sun.intensity = look.sun;
    this.sun.castShadow = this.shadowsOn && look.sunShadow;
    this.hemi.intensity = look.hemi;
    const b = Math.max(hx, hz) + 1.2;
    Object.assign(this.sun.shadow.camera, { left: -b, right: b, top: b, bottom: -b });
    this.sun.shadow.camera.updateProjectionMatrix();
    for (const p of this.pool) { p.view = null; p.light.intensity = 0; }
    this.candidates = [];
    this.dirty = true;
  }

  candidate(view, light) { this.candidates.push({ view, ...light }); this.dirty = true; }

  /** after the room's views exist: light the strongest K, pulled off their mounting surface */
  budget() {
    if (!this.dirty) return;
    this.dirty = false;
    const picks = [...this.candidates].sort((a, b) => b.intensity - a.intensity).slice(0, this.pool.length);
    this.pool.forEach((p, k) => {
      const c = picks[k];
      p.view = c ? c.view : null;
      p.light.intensity = 0;
      if (!c) return;
      p.light.color.set(c.color);
      p.light.distance = c.distance;
      p.base = c.intensity;
      // flush against a wall or ceiling, inverse-square blows the surface out into a halo
      const wp = c.view.last.p, hl = Math.hypot(wp[0], wp[2]);
      p.off.set(0, 0.06, 0);
      if (hl > 0.4) p.off.set(-(wp[0] / hl) * 0.28, 0.06, -(wp[2] / hl) * 0.28);
      if (wp[1] > 2.2) p.off.y = -0.35;
    });
  }

  update(tmpM) {
    for (const p of this.pool) {
      const v = p.view;
      if (!v) continue;
      if (v.dead || v.broken) { p.light.intensity = 0; continue; }
      p.light.intensity = p.base;
      v.world(tmpM);
      p.light.position.copy(p.off).applyMatrix4(tmpM);
    }
  }
}
