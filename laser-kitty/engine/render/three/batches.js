// batches.js — every drawn part of every body is an instance. One
// InstancedMesh per (geometry, material, shadow flags); a body view holds
// slots in the batches its parts use. This is the engine's main departure
// from main.js, which builds a Mesh (or a Group of them) per body: there a
// room's draw count is its part count, times every pass (shadow, AO,
// main); here it is the number of distinct (geometry, material) pairs.
//
// Built from what Strollzilla learned (its CLAUDE.md "Things that bit"):
// the per-instance colour buffer exists from construction (a buffer made
// at the first setColorAt changes the shader variant and recompiles), and
// a freed slot is parked at zero scale rather than compacted.
import * as THREE from 'three';

const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);

export class Batch {
  constructor(scene, geom, mat, cast, recv, cap = 8) {
    this.scene = scene;
    // a material may declare per-instance attributes ({ name: itemSize });
    // they live on the geometry, so such a batch draws its own copy of it
    this.attrs = mat.userData.instanceAttrs || null;
    this.geom = this.attrs ? geom.clone() : geom;
    this.mat = mat;
    this.cast = cast;
    this.recv = recv;
    this.mesh = null;
    this.cap = 0;
    this.hi = 0; // slots [0, hi) have been handed out at least once
    this.free = [];
    this.dirtyM = false;
    this.dirtyC = false;
    this.alloc(cap);
  }

  alloc(cap) {
    const m = new THREE.InstancedMesh(this.geom, this.mat, cap);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3).fill(1), 3);
    m.instanceColor.setUsage(THREE.DynamicDrawUsage);
    m.castShadow = this.cast;
    m.receiveShadow = this.recv;
    // the room is always in view; instance bounds go stale as bodies move
    m.frustumCulled = false;
    if (this.mesh) {
      m.instanceMatrix.array.set(this.mesh.instanceMatrix.array.subarray(0, this.cap * 16));
      m.instanceColor.array.set(this.mesh.instanceColor.array.subarray(0, this.cap * 3));
      this.scene.remove(this.mesh);
      this.mesh.dispose();
    }
    for (let s = this.cap; s < cap; s++) m.setMatrixAt(s, ZERO);
    if (this.attrs) {
      for (const [name, size] of Object.entries(this.attrs)) {
        const a = new THREE.InstancedBufferAttribute(new Float32Array(cap * size), size);
        const was = this.geom.getAttribute(name);
        if (was) a.array.set(was.array.subarray(0, this.cap * size));
        this.geom.setAttribute(name, a);
      }
    }
    m.count = this.hi;
    this.scene.add(m);
    this.mesh = m;
    this.cap = cap;
    this.dirtyM = this.dirtyC = true;
  }

  take() {
    if (this.free.length) return this.free.pop();
    if (this.hi === this.cap) this.alloc(this.cap * 2);
    return this.hi++;
  }

  give(slot) {
    this.mesh.setMatrixAt(slot, ZERO);
    this.free.push(slot);
    this.dirtyM = true;
  }

  set(slot, m4) { this.mesh.setMatrixAt(slot, m4); this.dirtyM = true; }

  color(slot, c) { this.mesh.setColorAt(slot, c); this.dirtyC = true; }

  attr(slot, name, values) {
    const a = this.geom.getAttribute(name);
    for (let k = 0; k < a.itemSize; k++) a.array[slot * a.itemSize + k] = values[k];
    a.needsUpdate = true;
  }

  flush() {
    const m = this.mesh;
    m.count = this.hi;
    // a batch whose bodies all died costs nothing (its slots stay parked)
    m.visible = this.hi > this.free.length;
    if (this.dirtyM) { m.instanceMatrix.needsUpdate = true; this.dirtyM = false; }
    if (this.dirtyC) { m.instanceColor.needsUpdate = true; this.dirtyC = false; }
  }

  live() { return this.hi - this.free.length; }

  dispose() { this.scene.remove(this.mesh); this.mesh.dispose(); }
}

export class Batches {
  constructor(scene) {
    this.scene = scene;
    this.map = new Map();
  }

  get(geom, mat, cast, recv) {
    const key = `${geom.uuid}|${mat.uuid}|${cast ? 1 : 0}${recv ? 1 : 0}`;
    let b = this.map.get(key);
    if (!b) {
      b = new Batch(this.scene, geom, mat, cast, recv);
      this.map.set(key, b);
    }
    return b;
  }

  flush() { for (const b of this.map.values()) b.flush(); }

  clear() {
    for (const b of this.map.values()) b.dispose();
    this.map.clear();
  }

  census() {
    let batches = 0, instances = 0;
    for (const b of this.map.values()) {
      if (!b.live()) continue;
      batches++;
      instances += b.live();
    }
    return { batches, instances };
  }
}
