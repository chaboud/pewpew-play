// backdrop.js — the world a room sits in. Today's look is the soundstage:
// an open-fronted diorama floating in a dark void, which is the absence of
// a backdrop. The others (backdrops/*.js) put the same room on an evidence
// table in a courtroom, on a lawn under a sky, on a wet street at night.
//
// A backdrop is render-only dressing outside the room shell: the sim knows
// nothing of it and nothing in it collides. The game camera only ever
// looks into the open front from a short way back, so what a backdrop has
// to fill is the band above the roof line and the ground in front and to
// the sides — a handful of large meshes and painted canvases. Anything
// near the model is toon-lit like the room; anything far is self-lit paint
// with fog off, because it is meant to be seen out of focus.
//
// Builders are authored at living-room size and get R, the model's scale
// against that room, so the tower and the bathroom frame alike.
import * as THREE from 'three';
import * as court from './backdrops/court.js?v=k64';
import * as yard from './backdrops/yard.js?v=k64';
import * as night from './backdrops/night.js?v=k64';

export const BACKDROP_KINDS = [
  ['stage', 'Soundstage'],
  ['court', 'Courtroom exhibit'],
  ['yard', 'Open air'],
  ['night', 'Night street'],
];
const BUILDERS = { court, yard, night };
const NONE = [];

// Free Play has no docket: every room is an exhibit by its index (A, B...
// then AA). Story mode names its own through setPresentation({ exhibit }).
export function exhibitLetter(room) {
  let n = Math.max(0, room | 0), s = '';
  do { s = String.fromCharCode(65 + (n % 26)) + s; n = Math.floor(n / 26) - 1; } while (n >= 0);
  return s;
}

function tools(kit) {
  const { toonMat, makeCanvas } = kit;
  const t = {
    THREE, toonMat, canvas: makeCanvas,
    rnd(seed) { let s = seed | 0; return () => { s = (s + 0x6d2b79f5) | 0; let x = Math.imul(s ^ (s >>> 15), 1 | s); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; }; },
    // self-lit paint: no fog, no lights, no shadow
    basic(map, opts = {}) { return new THREE.MeshBasicMaterial({ map: map && map.isTexture ? map : null, color: map && map.isTexture ? 0xffffff : map, fog: false, ...opts }); },
    // a painted flat facing the camera (which looks along +z): the plane
    // is turned to face -z so its canvas reads unmirrored, left to right
    card(tex, w, h, { cut = false, ...opts } = {}) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), t.basic(tex, cut ? { alphaTest: 0.5, ...opts } : opts));
      m.rotation.y = Math.PI;
      return m;
    },
    // half a cylinder of painted sky behind everything. The canvas is laid
    // out in screen terms: x = 0.5 + azimuth / pi (right of centre is
    // positive), y from the top.
    skyWall(tex, radius, height, yc) {
      tex.wrapS = THREE.RepeatWrapping; tex.repeat.x = -1; tex.offset.x = 1;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 40, 1, true, -Math.PI / 2, Math.PI), t.basic(tex, { side: THREE.BackSide }));
      m.position.y = yc;
      return m;
    },
    mesh(geo, mat, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); return m; },
  };
  return t;
}

export class Backdrop {
  constructor(kit, scene) {
    this.scene = scene;
    this.tools = tools(kit);
    this.built = null;
    this.env = null; // null = the soundstage's own light and void
    this.kind = 'stage';
  }

  set(kind, geo, opts = {}) {
    this.clear();
    this.kind = kind;
    const b = BUILDERS[kind];
    if (!b) return;
    this.built = b.build(this.tools, geo, opts);
    this.scene.add(this.built.group);
    this.env = this.built.env;
  }

  setExhibit(label) { if (this.built && this.built.setExhibit) this.built.setExhibit(label); }
  // world points the tilt-shift must keep sharp: [{ x, y, z, size }]
  focus() { return (this.built && this.built.focus) || NONE; }
  update(t) { if (this.built && this.built.update) this.built.update(t); }

  clear() {
    if (!this.built) { this.env = null; return; }
    this.scene.remove(this.built.group);
    this.built.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      for (const m of ms) { if (m.map) m.map.dispose(); m.dispose(); }
    });
    this.built = null;
    this.env = null;
  }
}
