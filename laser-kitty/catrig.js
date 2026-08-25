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
// Rig forward matches the game's +z at yaw 0 — no flip. (The first guess
// was PI; the founder's phone caught every cat moonwalking mid-pounce.)
const YAW_OFFSET = 0;

let gltfPromise = null;

// contact points for the measured-ground pass: bone -> how far the skin
// hangs below that bone (lab-measured at stand: ankles ride 0.009 above
// the paw pads; the torso bone sits 0.178 over the floor with the belly
// skin ~0.09 below it; thighs carry the haunches). The lowest of these
// is planted on the floor every grounded frame.
const CONTACTS = [
  ['footfl', 0.01], ['footfr', 0.01], ['footbl', 0.01], ['footbr', 0.01],
  ['torso', 0.09], ['thighbl', 0.075], ['thighbr', 0.075],
];

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
// _pitch rotates the whole carriage (x, radians). Carriage HEIGHT is
// never in the tables: the measured-contact pass plants the pose's
// lowest point (paw/belly/haunch) on the floor each frame.
export const POSES = {
  // hunt crouch (founder spec): the spine shifts DOWN with the legs low
  // but VISIBLE — rear legs cant forward, fronts extend to afford the
  // spinal shift. Tucked-invisible legs belong to loaf, not crouch.
  // (angles picked from a numeric span sweep: rear leg vertical span
  // 0.12 -> 0.061, front 0.096 -> 0.052 — body at half height, chest a
  // touch below the hips, every joint still readable from the side)
  crouch: {
    thighbl: [-0.85, 0, 0], thighbr: [-0.85, 0, 0],
    legupperbl: [0.5, 0, 0], legupperbr: [0.5, 0, 0],
    leglowerbl: [-0.55, 0, 0], leglowerbr: [-0.55, 0, 0],
    legupperfl: [-1.0, 0, 0], legupperfr: [-1.0, 0, 0],
    leglowerfl: [0.4, 0, 0], leglowerfr: [0.4, 0, 0],
    spine01: [0.1, 0, 0], spine02: [0.05, 0, 0],
    neck: [-0.35, 0, 0], head: [-0.15, 0, 0],
    tail: [0.5, 0, 0], tail01: [0.25, 0, 0], tail02: [0.2, 0, 0],
    _pitch: -0.1,
  },
  // sit: haunches folded, front legs straight, chest up
  sit: {
    thighbl: [-1.2, 0, 0], thighbr: [-1.2, 0, 0],
    legupperbl: [1.3, 0, 0], legupperbr: [1.3, 0, 0],
    leglowerbl: [-0.6, 0, 0], leglowerbr: [-0.6, 0, 0],
    legupperfl: [-0.08, 0, 0], legupperfr: [-0.08, 0, 0],
    leglowerfl: [0.08, 0, 0], leglowerfr: [0.08, 0, 0],
    spine01: [-0.25, 0, 0], spine02: [-0.15, 0, 0],
    neck: [-0.3, 0, 0], head: [-0.1, 0, 0],
    tail: [0.8, 0, 0.5], tail01: [0.4, 0, 0.4], tail02: [0.3, 0, 0.3],
    _pitch: -0.1,
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
    neck: [0.3, 0, -0.1], head: [0.25, 0, -0.08],
    tail: [0.8, 0, 0.5], tail01: [0.35, 0, 0.4],
    _pitch: -0.15,
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
    _pitch: 0.35,
  },
  // swat stance: haunches down like sit, chest low, front paws striking
  // (the strike cycle overrides front-leg pitch in update())
  swat: {
    thighbl: [-1.1, 0, 0], thighbr: [-1.1, 0, 0],
    legupperbl: [1.2, 0, 0], legupperbr: [1.2, 0, 0],
    leglowerbl: [-0.55, 0, 0], leglowerbr: [-0.55, 0, 0],
    spine01: [0.12, 0, 0], spine02: [0.06, 0, 0],
    neck: [0.1, 0, 0], head: [0.05, 0, 0],
  },
  // windup: butt up, chest down, the pounce telegraph (wiggle in update())
  windup: {
    thighbl: [0.45, 0, 0], thighbr: [0.45, 0, 0],
    legupperfl: [0.85, 0, 0], legupperfr: [0.85, 0, 0],
    leglowerfl: [-0.9, 0, 0], leglowerfr: [-0.9, 0, 0],
    spine01: [0.3, 0, 0], spine02: [0.15, 0, 0],
    neck: [-0.5, 0, 0], head: [-0.25, 0, 0],
    tail: [-0.35, 0, 0], tail01: [-0.2, 0, 0],
  },
  // pounce: airborne superman — rear swept back, front reaching
  pounce: {
    thighbl: [0.9, 0, 0], thighbr: [0.9, 0, 0],
    legupperbl: [-0.3, 0, 0], legupperbr: [-0.3, 0, 0],
    legupperfl: [-1.0, 0, 0], legupperfr: [-1.0, 0, 0],
    leglowerfl: [0.3, 0, 0], leglowerfr: [0.3, 0, 0],
    spine01: [-0.2, 0, 0], neck: [-0.25, 0, 0],
    tail: [-0.4, 0, 0],
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
    this.restPos = {};
    this.inner.traverse((o) => {
      if (o.isBone) {
        const key = canonical(o.name);
        if (!this.bones[key]) {
          this.bones[key] = o;
          this.rest[key] = o.quaternion.clone();
          this.restPos[key] = o.position.clone();
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

    // standing root height (reference only; carriage height is measured)
    const root = this.bones.root || this.bones.torso;
    this.rootRestY = root ? root.position.y : 0;

    // level the rest baseline: the bind pose ships with one front paw
    // raised (Sketchfab preview frame), and that asymmetry is in the rest
    // quaternions — every pose built on raw rest hung crooked (one pad
    // 7cm below its twin; the cat hung on it and clipped the floor).
    // Numerically rotate each leg's top joint until all four pads sit at
    // the same height, and bake that into the stored rest pose.
    this.#levelRestPose();

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

  #levelRestPose() {
    const pairs = [
      ['footfl', 'legupperfl'], ['footfr', 'legupperfr'],
      ['footbl', 'thighbl'], ['footbr', 'thighbr'],
    ];
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const applyRest = () => {
      for (const k in this.bones) {
        if (this.rest[k]) {
          this.bones[k].quaternion.copy(this.rest[k]);
          this.bones[k].position.copy(this.restPos[k]);
        }
      }
      this.inner.updateMatrixWorld(true);
    };
    const padY = (foot) => {
      this.bones[foot].getWorldPosition(v);
      return v.y;
    };
    applyRest();
    const target = Math.min(...pairs.map(([f]) => padY(f)));
    for (const [foot, joint] of pairs) {
      for (let it = 0; it < 4; it++) {
        applyRest();
        const err = padY(foot) - target;
        if (Math.abs(err) < 0.002) break;
        // numeric sensitivity of this pad to the joint's local x
        const probe = 0.08;
        this.rest[joint] = this.rest[joint].clone().multiply(q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), probe));
        applyRest();
        const sens = (padY(foot) - (err + target)) / probe;
        // revert the probe, then take the corrective step
        this.rest[joint] = this.rest[joint].clone().multiply(q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -probe));
        if (Math.abs(sens) < 0.005) break;
        const step = Math.max(-0.35, Math.min(0.35, -err / sens));
        this.rest[joint] = this.rest[joint].clone().multiply(q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), step));
      }
    }
    applyRest();

    // mirrored-rig signs: the pose tables are authored in left-side
    // semantics, but this rig's right legs have mirrored local frames
    // (the same +x delta drove the two shoulders apart — one paw rose 7cm
    // while its twin planted). Measure each joint's pad response and
    // store the sign that makes right behave like left.
    this.sign = {};
    const chains = [
      ['footfl', ['legupperfl', 'leglowerfl', 'footfl']],
      ['footfr', ['legupperfr', 'leglowerfr', 'footfr']],
      ['footbl', ['thighbl', 'legupperbl', 'leglowerbl', 'footbl']],
      ['footbr', ['thighbr', 'legupperbr', 'leglowerbr', 'footbr']],
    ];
    // probe the pad's VERTICAL response to a +x rotation on each joint;
    // twins that answer in opposite directions get a compensating sign.
    // (A forward-response probe was tried and reported "no mirror" while
    // the poses split 7cm left/right — the rig's right frames are not a
    // pure axis flip; the vertical map is the one that makes the same
    // table read symmetrically, lab-measured.)
    const sens = {};
    for (const [foot, joints] of chains) {
      for (const joint of joints) {
        applyRest();
        const h0 = padY(foot);
        this.bones[joint].quaternion.copy(this.rest[joint]).multiply(q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), 0.3));
        this.inner.updateMatrixWorld(true);
        sens[joint] = padY(foot) - h0;
      }
    }
    for (const [l, r] of [
      ['legupperfl', 'legupperfr'], ['leglowerfl', 'leglowerfr'], ['footfl', 'footfr'],
      ['thighbl', 'thighbr'], ['legupperbl', 'legupperbr'], ['leglowerbl', 'leglowerbr'], ['footbl', 'footbr'],
    ]) {
      this.sign[r] = sens[l] * sens[r] < 0 ? -1 : 1;
    }
    applyRest();
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

    // procedural layer over the mixer result. Poses override EVERY bone —
    // rotations and translations — back to the rest baseline plus their
    // deltas: the walk/stand clip writes bone TRANSLATIONS too, and its
    // frozen frame is asymmetric (one planted paw sat 5.6cm below the
    // other and the whole cat hung on it — the founder's floor-clipping
    // report). Nothing from the clip may leak through a held pose.
    const a = this.alpha;
    if (table && a > 0.005) {
      for (const key in this.bones) {
        const bone = this.bones[key];
        const rest = this.rest[key];
        if (!rest) continue;
        const d = table[key];
        let dx = d ? d[0] : 0, dy = d ? d[1] : 0, dz = d ? d[2] : 0;
        // living cycles inside held poses
        if (s.pose === 'groom') {
          if (key === 'head') dx += Math.sin(this.phase * 5.5) * 0.16;
          if (key === 'legupperfl') dx += Math.sin(this.phase * 5.5 + 1.2) * 0.12;
        } else if (s.pose === 'windup') {
          if (key === 'spine01') dz = Math.sin(this.phase * 9) * 0.1;
        } else if (s.pose === 'crouch') {
          if (key === 'tail') dz = Math.sin(this.phase * 2.2) * 0.3;
        }
        if (d || dx || dz) {
          const sg = this.sign[key] ?? 1; // mirrored right-side frames
          this._q.setFromEuler(this._e.set(dx * sg, dy, dz));
          this._q.premultiply(rest);
        } else {
          this._q.copy(rest);
        }
        bone.quaternion.slerp(this._q, a);
        bone.position.lerp(this.restPos[key], a);
      }
      // swat flurry: alternating front-paw strikes over the stance
      if (s.pose === 'swat') {
        for (const [key, ph] of [['legupperfl', 0], ['legupperfr', Math.PI]]) {
          const bone = this.bones[key];
          if (!bone) continue;
          const sg = this.sign[key] ?? 1;
          this._q.setFromEuler(this._e.set((-1.0 + Math.sin(this.phase * 16 + ph) * 0.8) * sg, 0, 0));
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
      // clamps halved from +/-0.9 / -0.6..0.8 — the founder met the
      // Exorcist cat ("head turn distances way too extreme")
      const cy = Math.max(-0.45, Math.min(0.45, yaw));
      const cp = Math.max(-0.3, Math.min(0.4, pitch));
      for (const [key, share] of [['neck', 0.45], ['head', 0.55]]) {
        const bone = this.bones[key];
        if (!bone) continue;
        this._q.setFromEuler(this._e.set(-cp * share, cy * share, 0));
        this._q.premultiply(bone.quaternion);
        bone.quaternion.slerp(this._q, Math.min(1, dt * 10));
      }
    }

    // carriage attitude: each pose's _pitch is baked from a lab sweep
    // that balances the front and rear contact heights (a runtime
    // leveling loop was tried and retired — with the height clamp active
    // it has many resting attitudes and wandered into meerkats); tumble
    // overrides everything
    const pitch = (table && table._pitch ? table._pitch * a : 0) + (s.pitch || 0);
    const grounded = s.pose !== 'pounce' && !s.airborne && s.tumble01 == null;
    this.inner.rotation.x = pitch;
    this.inner.rotation.y = YAW_OFFSET;
    if (s.tumble01 != null) this.inner.rotation.x = -Math.PI * 2 * s.tumble01;

    // measured contact (founder: "a big part of this game is physicality
    // and contact"): posed FK moves the feet, so the carriage height is
    // computed, never tuned — find the lowest contact point (paw pads,
    // belly under the torso bone, haunches under the thigh bones) in
    // group space and plant it exactly on the floor. Bidirectional: a
    // pose can neither float nor punch through. Skipped while airborne —
    // the sim owns the flight.
    this.inner.position.y = GROUND_Y;
    let adjTarget = 0;
    if (grounded) {
      this.inner.updateMatrixWorld(true); // bake this frame's pose first
      let lowest = Infinity;
      for (const [key, dropOff] of CONTACTS) {
        const bone = this.bones[key];
        if (!bone) continue;
        bone.getWorldPosition(this._look);
        this.group.worldToLocal(this._look);
        lowest = Math.min(lowest, this._look.y - dropOff);
      }
      if (lowest < Infinity) adjTarget = GROUND_Y - lowest;
    }
    this.groundAdj = (this.groundAdj ?? 0) + (adjTarget - (this.groundAdj ?? 0)) * Math.min(1, dt * 12);
    this.inner.position.y = GROUND_Y + this.groundAdj;
  }

  setVisible(v) {
    this.group.visible = v;
  }

  dispose() {
    this.group.parent?.remove(this.group);
  }
}

export const CAT_POSE_NAMES = Object.keys(POSES);
