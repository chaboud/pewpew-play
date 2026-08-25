// catrig.js — the V2 skinned cat: Omabuarts "Toon Cat FREE" (CC-BY-4.0,
// see assets/cat/LICENSE.txt) driven by the sim's brain-state stream.
// One baked clip (a 0.83s walk cycle) carries locomotion; everything else
// — crouch, sit, loaf, groom, stretch, swat, windup — is a procedural
// pose layer: per-bone rotation deltas applied over the captured rest
// pose and eased, with the walk clip cross-faded by actual ground speed.
// The head (and ears) track the laser dot post-mix, which is most of what
// makes it read as a cat rather than a puppet.
//
// Shared by the game (main.js, cat version v2) and the cat lab
// (catlab.html) so poses tuned in the lab ARE the shipping poses.

import * as THREE from 'three';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { clone as skClone } from './vendor/SkeletonUtils.js';

const MODEL_URL = './assets/cat/toon_cat_free.glb';
// The Sketchfab FBX wrapper leaves the rig ~365 raw units tall (cm-ish
// scale baked into the node tree, lab-measured); game cats stand ~0.35m
// to the ear tips with paws at group-local -0.19 (v1 blob ground).
const SCALE = 0.00095;
const GROUND_Y = -0.19;
// Rig forward is -z in model space after Sketchfab's wrapper; the game
// faces +z at yaw 0. Tuned in the lab (flip if the cat moonwalks).
const YAW_OFFSET = Math.PI;

let gltfPromise = null;

function canonical(name) {
  // "leg.lower.FL_015" -> "leglowerfl", "tail.CTRL_030" -> "tailctrl"
  return name.split('_').slice(0, -1).join('_').replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    || name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Pose tables: canonical bone -> [x, y, z] euler delta (radians) applied
// on top of the rest pose in bone-local space. Signs are FK-probed in the
// lab, not guessed: rear leg fold-under is thigh x- / legupper x+ /
// leglower x-; front paw raise-forward is legupperf x- / leglowerf x-;
// neck/head x+ pitches down; tail rests curled up, x+ flattens it.
// _drop sinks the root (meters) so folded legs land back on the floor;
// _pitch rotates the whole carriage (x, radians).
export const POSES = {
  // deep hunt crouch: belly to the floor, head level, tail flat
  crouch: {
    thighbl: [-0.85, 0, 0], thighbr: [-0.85, 0, 0],
    legupperbl: [0.9, 0, 0], legupperbr: [0.9, 0, 0],
    leglowerbl: [-0.5, 0, 0], leglowerbr: [-0.5, 0, 0],
    legupperfl: [0.75, 0, 0], legupperfr: [0.75, 0, 0],
    leglowerfl: [-0.8, 0, 0], leglowerfr: [-0.8, 0, 0],
    spine01: [0.15, 0, 0], spine02: [0.08, 0, 0],
    neck: [-0.35, 0, 0], head: [-0.15, 0, 0],
    tail: [0.5, 0, 0], tail01: [0.25, 0, 0], tail02: [0.2, 0, 0],
    _drop: 0.085,
  },
  // sit: haunches folded, front legs straight, chest up
  sit: {
    thighbl: [-1.2, 0, 0], thighbr: [-1.2, 0, 0],
    legupperbl: [1.3, 0, 0], legupperbr: [1.3, 0, 0],
    leglowerbl: [-0.6, 0, 0], leglowerbr: [-0.6, 0, 0],
    legupperfl: [-0.2, 0, 0], legupperfr: [-0.2, 0, 0],
    leglowerfl: [0.15, 0, 0], leglowerfr: [0.15, 0, 0],
    spine01: [-0.25, 0, 0], spine02: [-0.15, 0, 0],
    neck: [-0.3, 0, 0], head: [-0.1, 0, 0],
    tail: [0.8, 0, 0.5], tail01: [0.4, 0, 0.4], tail02: [0.3, 0, 0.3],
    _drop: 0.05, _pitch: -0.32,
  },
  // loaf: everything tucked, low, chin slightly in
  loaf: {
    thighbl: [-1.1, 0, 0], thighbr: [-1.1, 0, 0],
    legupperbl: [1.3, 0, 0], legupperbr: [1.3, 0, 0],
    leglowerbl: [-0.7, 0, 0], leglowerbr: [-0.7, 0, 0],
    legupperfl: [1.0, 0, 0], legupperfr: [1.0, 0, 0],
    leglowerfl: [-1.2, 0, 0], leglowerfr: [-1.2, 0, 0],
    spine01: [0.1, 0, 0], neck: [-0.15, 0, 0], head: [0.12, 0, 0],
    tail: [0.6, 0, 0.9], tail01: [0.25, 0, 0.7], tail02: [0.15, 0, 0.4],
    _drop: 0.11,
  },
  // groom: sitting, one front paw raised, head bowed to it (lick cycle
  // animates head pitch + paw height in update())
  groom: {
    thighbl: [-1.2, 0, 0], thighbr: [-1.2, 0, 0],
    legupperbl: [1.3, 0, 0], legupperbr: [1.3, 0, 0],
    leglowerbl: [-0.6, 0, 0], leglowerbr: [-0.6, 0, 0],
    legupperfl: [-0.9, 0, 0.2], leglowerfl: [-0.6, 0, 0],
    legupperfr: [-0.3, 0, 0], leglowerfr: [0.15, 0, 0],
    spine01: [-0.1, 0, 0], spine02: [-0.05, 0, 0],
    neck: [0.3, 0, -0.2], head: [0.25, 0, -0.15],
    tail: [0.8, 0, 0.5], tail01: [0.35, 0, 0.4],
    _drop: 0.05, _pitch: -0.25,
  },
  // reach-up stretch: rear planted, carriage pitched skyward, front legs
  // long and high — the "reaching for the dot on the wall" pose
  stretch: {
    thighbl: [-0.3, 0, 0], thighbr: [-0.3, 0, 0],
    legupperbl: [0.4, 0, 0], legupperbr: [0.4, 0, 0],
    leglowerbl: [-0.2, 0, 0], leglowerbr: [-0.2, 0, 0],
    legupperfl: [-1.5, 0, 0], legupperfr: [-1.5, 0, 0],
    leglowerfl: [-0.3, 0, 0], leglowerfr: [-0.3, 0, 0],
    spine01: [-0.55, 0, 0], spine02: [-0.5, 0, 0],
    neck: [-0.3, 0, 0], head: [-0.15, 0, 0],
    tail: [0.3, 0, 0], tail01: [0.15, 0, 0],
    _drop: 0.03, _pitch: -0.35,
  },
  // swat stance: haunches down like sit, chest low, front paws striking
  // (the strike cycle overrides front-leg pitch in update())
  swat: {
    thighbl: [-1.1, 0, 0], thighbr: [-1.1, 0, 0],
    legupperbl: [1.2, 0, 0], legupperbr: [1.2, 0, 0],
    leglowerbl: [-0.55, 0, 0], leglowerbr: [-0.55, 0, 0],
    spine01: [0.12, 0, 0], spine02: [0.06, 0, 0],
    neck: [0.1, 0, 0], head: [0.05, 0, 0],
    _drop: 0.075,
  },
  // windup: butt up, chest down, the pounce telegraph (wiggle in update())
  windup: {
    thighbl: [0.45, 0, 0], thighbr: [0.45, 0, 0],
    legupperfl: [0.85, 0, 0], legupperfr: [0.85, 0, 0],
    leglowerfl: [-0.9, 0, 0], leglowerfr: [-0.9, 0, 0],
    spine01: [0.3, 0, 0], spine02: [0.15, 0, 0],
    neck: [-0.5, 0, 0], head: [-0.25, 0, 0],
    tail: [-0.35, 0, 0], tail01: [-0.2, 0, 0],
    _drop: 0.045,
  },
  // pounce: airborne superman — rear swept back, front reaching
  pounce: {
    thighbl: [0.9, 0, 0], thighbr: [0.9, 0, 0],
    legupperbl: [-0.3, 0, 0], legupperbr: [-0.3, 0, 0],
    legupperfl: [-1.0, 0, 0], legupperfr: [-1.0, 0, 0],
    leglowerfl: [0.3, 0, 0], leglowerfr: [0.3, 0, 0],
    spine01: [-0.2, 0, 0], neck: [-0.25, 0, 0],
    tail: [-0.4, 0, 0],
    _drop: 0,
  },
};

export class CatRig {
  static load() {
    if (!gltfPromise) {
      gltfPromise = new GLTFLoader().loadAsync(MODEL_URL);
    }
    return gltfPromise;
  }

  constructor(gltf, parent, coatHex) {
    this.group = new THREE.Group(); // world placement (game sets pos/yaw)
    this.inner = skClone(gltf.scene); // scaled model, feet on GROUND_Y
    this.inner.scale.setScalar(SCALE);
    this.group.add(this.inner);
    parent.add(this.group);

    this.bones = {};
    this.rest = {};
    this.inner.traverse((o) => {
      if (o.isBone) {
        const key = canonical(o.name);
        if (!this.bones[key]) {
          this.bones[key] = o;
          this.rest[key] = o.quaternion.clone();
        }
      }
      if (o.isMesh || o.isSkinnedMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = false; // skinned bounds lag the pose
        if (coatHex != null && o.material && o.material.color) {
          o.material = o.material.clone();
          o.material.color.multiply(new THREE.Color(coatHex));
        }
      }
    });

    // standing root height: measured so _drop can sink poses proportionally
    const root = this.bones.root || this.bones.torso;
    this.rootRestY = root ? root.position.y : 0;

    this.mixer = new THREE.AnimationMixer(this.inner);
    this.walk = this.mixer.clipAction(gltf.animations[0]);
    this.walk.play();
    this.walk.setEffectiveWeight(0);
    // the bind pose holds a paw in the air (Sketchfab preview frame), so
    // "standing" is the walk clip frozen at a feet-planted passing frame
    const standClip = gltf.animations[0].clone();
    standClip.name = 'stand';
    this.stand = this.mixer.clipAction(standClip);
    this.stand.play();
    this.stand.paused = true;
    this.stand.time = 0.21; // lab-picked planted frame of the 0.83s cycle
    this.stand.setEffectiveWeight(1);

    this.pose = null; // canonical pose name or null (= stand/locomote)
    this.alpha = 0; // current pose blend 0..1
    this.phase = 0; // cycle clock for groom/swat/windup wiggles
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._look = new THREE.Vector3();
  }

  // s: {speed, pose, dot (THREE.Vector3 world | null), pitch, tumble01}
  // pose one of: null|crouch|sit|loaf|groom|stretch|swat|windup|pounce
  update(dt, s) {
    this.phase += dt;
    const table = POSES[s.pose] || null;
    const wantAlpha = table ? 1 : 0;
    this.alpha += (wantAlpha - this.alpha) * Math.min(1, dt * 7);

    // locomotion: walk clip weight and rate ride real ground speed.
    // The clip's stride reads right at ~1.4x rate per m/s (lab-measured
    // against the 0.83s cycle); pose blend suppresses it.
    const locoW = Math.min(1, (s.speed || 0) / 0.5) * (1 - this.alpha);
    this.walk.setEffectiveWeight(locoW);
    this.walk.timeScale = 0.6 + (s.speed || 0) * 1.1;
    // stand layer fills whatever locomotion doesn't claim; pose deltas
    // then ride on top of a fully planted cat instead of the bind pose
    this.stand.setEffectiveWeight(1 - locoW);
    this.mixer.update(dt);

    // procedural layer over the mixer result
    const a = this.alpha;
    if (table && a > 0.005) {
      for (const key in table) {
        if (key[0] === '_') continue;
        const bone = this.bones[key];
        if (!bone) continue;
        const d = table[key];
        let dx = d[0], dy = d[1], dz = d[2];
        // living cycles inside held poses
        if (s.pose === 'groom') {
          if (key === 'head') dx += Math.sin(this.phase * 5.5) * 0.16;
          if (key === 'legupperfl') dx += Math.sin(this.phase * 5.5 + 1.2) * 0.12;
        } else if (s.pose === 'windup') {
          if (key === 'spine01') dz = Math.sin(this.phase * 9) * 0.1;
        } else if (s.pose === 'crouch') {
          if (key === 'tail') dz = Math.sin(this.phase * 2.2) * 0.3;
        }
        this._q.setFromEuler(this._e.set(dx, dy, dz));
        this._q.premultiply(this.rest[key]);
        bone.quaternion.slerp(this._q, a);
      }
      // swat flurry: alternating front-paw strikes over the stance
      if (s.pose === 'swat') {
        for (const [key, ph] of [['legupperfl', 0], ['legupperfr', Math.PI]]) {
          const bone = this.bones[key];
          if (!bone) continue;
          this._q.setFromEuler(this._e.set(-1.0 + Math.sin(this.phase * 16 + ph) * 0.8, 0, 0));
          this._q.premultiply(this.rest[key]);
          bone.quaternion.slerp(this._q, a);
        }
      }
    }
    // idle micro-life when standing still with no pose: breathing, tail sway
    if (!table && locoW < 0.2) {
      const idleA = (1 - locoW / 0.2) * 0.6;
      for (const [key, amt, rate, off] of [
        ['spine02', 0.035, 1.6, 0], ['tail', 0.25, 0.9, 0], ['tail01', 0.2, 0.9, 0.8],
        ['tail02', 0.16, 0.9, 1.6], ['earl', 0.08, 0.35, 2], ['earr', 0.08, 0.41, 5],
      ]) {
        const bone = this.bones[key];
        if (!bone) continue;
        const isTail = key.startsWith('tail');
        this._q.setFromEuler(this._e.set(
          isTail ? 0 : Math.sin(this.phase * rate + off) * amt,
          0,
          isTail ? Math.sin(this.phase * rate + off) * amt : 0
        ));
        this._q.premultiply(this.rest[key]);
        bone.quaternion.slerp(this._q, idleA);
      }
    }

    // head tracking: neck+head chain yaws/pitches toward the dot, always
    // post-mix so the cat watches the laser through every pose but pounce
    if (s.dot && s.pose !== 'pounce') {
      this.group.worldToLocal(this._look.copy(s.dot));
      const yaw = Math.atan2(this._look.x, this._look.z);
      const flat = Math.hypot(this._look.x, this._look.z);
      const pitch = Math.atan2(this._look.y - 0.12, flat);
      const cy = Math.max(-0.9, Math.min(0.9, yaw));
      const cp = Math.max(-0.6, Math.min(0.8, pitch));
      for (const [key, share] of [['neck', 0.45], ['head', 0.55]]) {
        const bone = this.bones[key];
        if (!bone) continue;
        this._q.setFromEuler(this._e.set(-cp * share, cy * share, 0));
        this._q.premultiply(bone.quaternion);
        bone.quaternion.slerp(this._q, Math.min(1, dt * 10));
      }
    }

    // root carriage: sink for low poses (meters — folded legs lift the
    // feet, the drop puts them back on the floor), pitch for sit/stretch
    const drop = table ? (table._drop || 0) * a : 0;
    const pitch = (table && table._pitch ? table._pitch * a : 0) + (s.pitch || 0);
    this.inner.position.y = GROUND_Y - drop;
    this.inner.rotation.x = pitch;
    this.inner.rotation.y = YAW_OFFSET;
    if (s.tumble01 != null) this.inner.rotation.x = -Math.PI * 2 * s.tumble01;
  }

  setVisible(v) {
    this.group.visible = v;
  }

  dispose() {
    this.group.parent?.remove(this.group);
  }
}

export const CAT_POSE_NAMES = Object.keys(POSES);
