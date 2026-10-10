// cloth.js — the sim's particle grids (curtains, the shower curtain) draw
// as one continuous sheet each, vertices on the particles; curtain rings
// are brass tori parked on their particles (main.js rebuildCloths/Rings).
import * as THREE from 'three';
import { ROW, F } from '../../seam.js?v=k62';

export class Cloths {
  constructor(scene) {
    this.scene = scene;
    this.patches = [];
    this.rings = [];
    this.members = new Set();
    this.ringMat = new THREE.MeshPhongMaterial({ color: 0xc9a542, shininess: 110, specular: 0xfff0c0 });
    this.ringGeo = new THREE.TorusGeometry(0.02, 0.0045, 6, 12);
  }

  room(info) {
    for (const p of this.patches) { this.scene.remove(p.mesh); p.mesh.geometry.dispose(); p.mesh.material.dispose(); }
    for (const r of this.rings) this.scene.remove(r.mesh);
    this.patches = [];
    this.rings = [];
    this.members = new Set();
    for (const { first, cols, rows } of info.cloths) {
      for (let k = 0; k < cols * rows; k++) this.members.add(first + k);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(cols * rows * 3), 3));
      const idx = [];
      for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
        const a = j * cols + i;
        idx.push(a, a + cols, a + 1, a + 1, a + cols, a + cols + 1);
      }
      geo.setIndex(idx);
      const mesh = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 25, specular: 0x555555, side: THREE.DoubleSide }));
      mesh.receiveShadow = true;
      mesh.frustumCulled = false;
      this.scene.add(mesh);
      this.patches.push({ first, n: cols * rows, mesh, tinted: false });
    }
    for (const rec of info.rings) {
      const mesh = new THREE.Mesh(this.ringGeo, this.ringMat);
      mesh.rotation.y = Math.PI / 2;
      this.scene.add(mesh);
      this.rings.push({ mesh, rec });
    }
  }

  has(i) { return this.members.has(i); }

  update(rows) {
    for (const p of this.patches) {
      if (!p.tinted) {
        p.mesh.material.color.setHSL((rows[p.first * ROW + F.TINT] * 2.83) % 1, 0.42, 0.55);
        p.tinted = true;
      }
      const attr = p.mesh.geometry.attributes.position;
      for (let k = 0; k < p.n; k++) {
        const o = (p.first + k) * ROW;
        attr.setXYZ(k, rows[o + F.PX], rows[o + F.PY], rows[o + F.PZ]);
      }
      attr.needsUpdate = true;
      p.mesh.geometry.computeVertexNormals();
    }
    for (const r of this.rings) {
      const o = r.rec * ROW;
      r.mesh.position.set(rows[o + F.PX], rows[o + F.PY] + 0.032, rows[o + F.PZ]);
    }
  }
}
