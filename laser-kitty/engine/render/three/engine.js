// engine.js — the three.js render engine behind the seam (../../seam.js).
// It is handed a canvas, a RoomInfo per room and a FrameState per frame,
// and renders any room from the stream generically: recognized props as
// their modules build them, everything else as its collider in the
// material table's look, all of it instanced; cats, the laser, cloth;
// destruction that crumbles instead of popping.
import * as THREE from 'three';
import { EffectComposer } from '../../../vendor/EffectComposer.js?v=k62';
import { N8AOPass } from '../../../vendor/N8AO.js?v=k62';
import { ROW, F, CLS, LASER } from '../../seam.js?v=k62';
import { makeKit } from './kit.js?v=k62';
import { Batches } from './batches.js?v=k62';
import { Bodies } from './bodies.js?v=k62';
import { Lighting } from './lights.js?v=k62';
import { Dust } from './dust.js?v=k62';
import { Debris } from './debris.js?v=k62';
import { Laser } from './laser.js?v=k62';
import { Cats } from './cats.js?v=k62';
import { Cloths } from './cloth.js?v=k62';
import { floorTex, concreteTex, checkerTex } from './textures.js?v=k62';
import { recognizers } from './recognizers/index.js?v=k62';

export function createEngine() { return new ThreeEngine(); }

class ThreeEngine {
  constructor() {
    this.name = 'three';
    this.info = null;
    this.last = { calls: 0, triangles: 0 };
    this.effects = { breaks: 0, severs: 0 };
    this.tmp = new THREE.Matrix4();
    this.alive = new Set();
    this.lightsBudgeted = false;
  }

  /** opts: { quality (max dpr), coarse (phone tier), ao (bool), shadows 'soft'|'light'|'off', lite } */
  async init(canvas, opts = {}) {
    this.opts = { quality: 2, coarse: false, ao: true, shadows: 'soft', lite: false, ...opts };
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true }));
    r.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, this.opts.quality));
    r.shadowMap.enabled = this.opts.shadows !== 'off';
    r.shadowMap.type = THREE.VSMShadowMap;
    r.info.autoReset = false; // one frame's cost summed over every pass
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color(0x272138);
    scene.fog = new THREE.Fog(0x272138, 13, 26);
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 50);
    this.kit = makeKit();
    this.batches = new Batches(scene);
    this.lighting = new Lighting(scene, { budget: this.opts.lite ? 2 : this.opts.coarse ? 4 : 8, shadows: this.opts.shadows });
    this.dust = new Dust(scene);
    this.debris = new Debris(scene);
    this.cloths = new Cloths(scene);
    this.bodies = new Bodies({ scene, kit: this.kit, batches: this.batches, lighting: this.lighting, dust: this.dust, debris: this.debris, cloths: this.cloths });
    this.laser = new Laser(scene);
    this.cats = new Cats(scene);
    this.composer = null;
    this.n8ao = null;
    if (this.opts.debug) globalThis.__threeEngine = this; // test drivers only
  }

  setupPost(w, h) {
    if (!this.opts.ao) return;
    const pr = this.renderer.getPixelRatio();
    if (!this.composer) {
      this.composer = new EffectComposer(this.renderer);
      this.n8ao = new N8AOPass(this.scene, this.camera, w * pr, h * pr);
      const c = this.n8ao.configuration;
      c.gammaCorrection = true;
      c.aoRadius = 0.45; // room-scale reach: props are centimetres, the room is metres
      c.distanceFalloff = 0.45;
      c.intensity = 4;
      c.color = new THREE.Color(0x181226); // occlusion tinted toward the fog purple, not dead black
      this.n8ao.setQualityMode(this.opts.coarse ? 'Low' : 'Medium');
      c.halfRes = this.opts.coarse;
      this.composer.addPass(this.n8ao);
    }
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);
  }

  loadRoom(info) {
    this.room = info;
    this.batches.clear();
    this.bodies.room(info);
    this.lighting.room(info);
    this.debris.room(info.hx, info.hz);
    this.cloths.room(info);
    this.cats.clear();
    this.lightsBudgeted = false;
    const { hx, hz } = info;
    floorTex.repeat.set(Math.max(2, Math.round(hx)), Math.max(2, Math.round(hz)));
    concreteTex.repeat.set(Math.max(1, Math.round(hx * 0.6)), Math.max(1, Math.round(hz * 0.6)));
    checkerTex.repeat.set(Math.max(2, Math.round(hx * 1.2)), Math.max(2, Math.round(hz * 1.2)));
  }

  resize(w, h, dpr) {
    if (dpr) this.renderer.setPixelRatio(Math.min(dpr, this.opts.quality));
    this.renderer.setSize(w, h, false);
    this.setupPost(w, h);
  }

  frame(fs) {
    const r = this.renderer;
    r.info.reset();
    const cam = this.camera, C = fs.camera;
    cam.position.set(C.pos[0], C.pos[1], C.pos[2]);
    cam.lookAt(C.pos[0] + C.fwd[0], C.pos[1] + C.fwd[1], C.pos[2] + C.fwd[2]);
    if (cam.fov !== C.fovY || cam.aspect !== C.aspect) {
      cam.fov = C.fovY; cam.aspect = C.aspect; cam.near = C.near; cam.far = C.far;
      cam.updateProjectionMatrix();
    }
    const dt = Math.min(fs.dt, 0.5);
    this.bodies.events(fs, this.effects);
    this.bodies.update(fs, dt, fs.time);
    // cats
    const dot = this.laser.on ? this.laser.dot.position : null;
    this.alive.clear();
    let k = 0;
    for (let i = 0; i < fs.count; i++) {
      if (fs.rows[i * ROW] !== CLS.CAT) continue;
      this.cats.update(i, k++, fs.rows, i * ROW, dt, fs.time, dot);
      this.alive.add(i);
    }
    this.cats.prune(this.alive);
    if (!this.lightsBudgeted && fs.count > 0) {
      this.lighting.budget();
      this.lightsBudgeted = true;
      // compile what draws late (debris, dust, the laser) now, not at the first break
      this.renderer.compile(this.scene, cam);
    }
    this.lighting.update(this.tmp);
    this.cloths.update(fs.rows);
    this.debris.update(dt, fs.rows, fs.count);
    this.dust.update(fs.time);
    this.laser.update(fs, fs.time);
    this.batches.flush();
    if (this.composer) this.composer.render();
    else r.render(this.scene, cam);
    this.last = { calls: r.info.render.calls, triangles: r.info.render.triangles };
  }

  /** what the frame is made of: visible drawables by kind, and how many cast (each is drawn again in the shadow pass) */
  census() {
    const c = { instanced: 0, sprite: 0, skinned: 0, mesh: 0, other: 0, casters: 0, transparent: 0 };
    this.scene.traverseVisible((o) => {
      if (!o.isMesh && !o.isSprite && !o.isLine && !o.isPoints) return;
      const k = o.isInstancedMesh ? 'instanced' : o.isSprite ? 'sprite' : o.isSkinnedMesh ? 'skinned' : o.isMesh ? 'mesh' : 'other';
      c[k]++;
      if (o.castShadow) c.casters++;
      if (o.material && o.material.transparent) c.transparent++;
    });
    return c;
  }

  stats() {
    const i = this.renderer.info;
    return {
      calls: this.last.calls,
      triangles: this.last.triangles,
      programs: i.programs ? i.programs.length : -1,
      geometries: i.memory.geometries,
      textures: i.memory.textures,
      extra: {
        batches: this.batches.census(),
        bodies: this.bodies.census(),
        debris: this.debris.census(),
        kit: this.kit.count(),
        recognizers: recognizers(),
        effects: { ...this.effects },
        ao: !!this.composer,
        census: this.census(),
      },
    };
  }

  dispose() {
    this.batches.clear();
    this.cats.clear();
    this.renderer.dispose();
  }
}
