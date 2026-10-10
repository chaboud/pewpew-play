// laser.js — the dot, its oriented spill, a glow, the beam from the belt,
// speckle sparkles in the spill and a star glint on glossy surfaces
// (main.js's laser visuals). Everything it draws comes from lk_laser: the
// sim says where the dot is, which way the surface faces, how wide the
// spill is (its gloss law) and how bright.
import * as THREE from 'three';
import { LASER } from '../../seam.js?v=k62';

function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'));
  return new THREE.CanvasTexture(c);
}

export class Laser {
  constructor(scene) {
    this.dot = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff3b30 }));
    this.spill = new THREE.Mesh(new THREE.CircleGeometry(1, 20),
      new THREE.MeshBasicMaterial({ color: 0xff5545, transparent: true, opacity: 0.35, depthWrite: false }));
    const glowMap = canvasTex(64, (g) => {
      const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255,80,64,0.9)');
      grad.addColorStop(1, 'rgba(255,80,64,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
    });
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowMap, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.glow.scale.setScalar(0.4);
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 1, 6, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.sparkles = [];
    for (let k = 0; k < 6; k++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowMap, blending: THREE.AdditiveBlending, depthWrite: false }));
      s.visible = false;
      this.sparkles.push(s);
    }
    const glintMap = canvasTex(64, (g) => {
      g.translate(32, 32);
      const ray = g.createLinearGradient(0, -30, 0, 30);
      ray.addColorStop(0, 'rgba(255,120,100,0)');
      ray.addColorStop(0.5, 'rgba(255,200,180,0.95)');
      ray.addColorStop(1, 'rgba(255,120,100,0)');
      g.fillStyle = ray;
      for (let k = 0; k < 2; k++) { g.fillRect(-1.6, -30, 3.2, 60); g.rotate(Math.PI / 2); }
    });
    this.glint = new THREE.Sprite(new THREE.SpriteMaterial({ map: glintMap, blending: THREE.AdditiveBlending, depthWrite: false }));
    for (const o of [this.dot, this.spill, this.glow, this.beam, this.glint, ...this.sparkles]) { o.visible = false; scene.add(o); }
    this.n = new THREE.Vector3();
    this.t1 = new THREE.Vector3();
    this.t2 = new THREE.Vector3();
    this.from = new THREE.Vector3();
    this.Z = new THREE.Vector3(0, 0, 1);
    this.Y = new THREE.Vector3(0, 1, 0);
  }

  get on() { return this.dot.visible; }

  update(fs, time) {
    const L = fs.laser;
    const lit = fs.laserOn && L[LASER.ACTIVE] > 0.5;
    this.dot.visible = this.spill.visible = this.beam.visible = this.glow.visible = lit;
    if (!lit) {
      this.glint.visible = false;
      for (const s of this.sparkles) s.visible = false;
      return;
    }
    const n = this.n.set(L[LASER.NX], L[LASER.NY], L[LASER.NZ]);
    const spillR = L[LASER.SPILL], inten = L[LASER.INTENSITY];
    this.dot.position.set(L[LASER.PX], L[LASER.PY], L[LASER.PZ]).addScaledVector(n, 0.012);
    const flicker = 0.82 + Math.random() * 0.36;
    this.dot.scale.setScalar(0.94 + Math.random() * 0.12);
    this.glow.position.copy(this.dot.position).addScaledVector(n, 0.05);
    this.glow.material.opacity = (0.35 + 0.5 * inten) * flicker;
    this.spill.position.set(L[LASER.PX], L[LASER.PY], L[LASER.PZ]).addScaledVector(n, 0.006);
    this.spill.quaternion.setFromUnitVectors(this.Z, n);
    this.spill.scale.setScalar(spillR);
    this.spill.material.opacity = (0.15 + 0.35 * inten) * (0.9 + 0.2 * flicker);
    const helper = Math.abs(n.y) < 0.9 ? this.Y : this.t2.set(1, 0, 0);
    this.t1.crossVectors(n, helper).normalize();
    this.t2.crossVectors(n, this.t1);
    for (const s of this.sparkles) {
      if (Math.random() < 0.55) {
        const r = Math.random() * spillR * 0.9, a = Math.random() * Math.PI * 2;
        s.position.copy(this.dot.position).addScaledVector(this.t1, Math.cos(a) * r).addScaledVector(this.t2, Math.sin(a) * r).addScaledVector(n, 0.02);
        s.scale.setScalar(0.02 + Math.random() * 0.045);
        s.material.opacity = 0.4 + Math.random() * 0.6;
        s.visible = true;
      } else s.visible = false;
    }
    // surface gloss back out of the sim's spill law: spill = 0.05 + (1-g)*0.15
    const g = Math.min(1, Math.max(0, 1 - (spillR - 0.05) / 0.15));
    this.glint.visible = g > 0.55;
    if (this.glint.visible) {
      this.glint.position.copy(this.dot.position).addScaledVector(n, 0.03);
      this.glint.scale.setScalar((0.09 + 0.22 * g) * (0.8 + 0.4 * Math.random()));
      this.glint.material.rotation = time * 1.2;
      this.glint.material.opacity = 0.6 + 0.4 * inten;
    }
    const from = this.from.set(fs.beamFrom[0], fs.beamFrom[1], fs.beamFrom[2]);
    const d = this.dot.position.clone().sub(from);
    const len = d.length();
    this.beam.position.copy(from).addScaledVector(d, 0.5);
    this.beam.quaternion.setFromUnitVectors(this.Y, d.normalize());
    this.beam.scale.set(1, len, 1);
  }
}
