// seam.js — the one contract between the app and a render engine
// (wiki/decisions/0002-three-render-engine.md).
//
// The app owns the sim (wasm, through the C ABI in core/src/abi.rs), the
// input and the camera rig. A render engine owns nothing but pixels: it is
// handed a RoomInfo when a room is built and a FrameState every frame, and
// it may not reach for anything else — not the wasm, not the DOM's input,
// not the settings. scripts/check-engine-deps.mjs enforces it. A Unity (or
// Godot) frontend implements the same five calls over the same rows.
//
// This file is engine-neutral on purpose: no three, no DOM, no wasm. It is
// constants, pure decoders and the JSDoc shapes of the contract.

/** floats per body in the sim's render stream (lk_render_data) */
export const ROW = 15;
/** field offsets inside a row */
export const F = {
  CLASS: 0, SHAPE: 1, A: 2, B: 3, C: 4,
  PX: 5, PY: 6, PZ: 7,
  QX: 8, QY: 9, QZ: 10, QW: 11,
  // cats: brain state (low nibble) | ambient act << 4; furniture: scratch
  // wear stage 0..3; props: bit0 scored, bits 1.. = parent rec + 1
  FLAG: 12,
  // cats: interest and last visibility; everything else: optics
  GLOSS: 13, TINT: 14,
};
/** body classes. 4 is a tombstone (the record died: shattered, burnt out) — its row is zeroed */
export const CLS = { STATIC: 0, FURNITURE: 1, PROP: 2, CAT: 3, TOMBSTONE: 4 };
/** shape 0 box half-extents a,b,c; 1 sphere r=a; 2 capsule half-length a, radius b */
export const SHAPE = { BOX: 0, SPHERE: 1, CAPSULE: 2 };
/** lk_body_material bits */
export const MAT = { PLAIN: 0, BRITTLE: 1, SOFT: 2, KIND_MASK: 3, ELECTRIC: 4, LIQUID: 8, PLUMBED: 16 };
/** event types (code >>> 28) */
export const EV = { CAT_STATE: 1, POUNCE: 2, TOPPLED: 3, BROKE: 4, SCRATCHED: 5, SEVERED: 6, LIGHT: 7, BONUS: 8 };
/** lk_laser: [active, px,py,pz, nx,ny,nz, spill_r, intensity, visibility] */
export const LASER = { ACTIVE: 0, PX: 1, PY: 2, PZ: 3, NX: 4, NY: 5, NZ: 6, SPILL: 7, INTENSITY: 8, VIS: 9 };

export const evType = (code) => code >>> 28;
/** score events (3 4 5 6 8): the prop / piece record */
export const evProp = (code) => (code >>> 12) & 0x1fff;
export const evScore = (code) => code & 0xfff;
export const evChain = (code) => (code >> 25) & 0x7;
/** a spawned piece's parent record, or -1 (props only) */
export const bornOf = (flag) => ((flag | 0) >> 1) - 1;
export const catState = (flag) => (flag | 0) & 15;
export const catAct = (flag) => (flag | 0) >> 4;

/**
 * @typedef {Object} ClothPatch  a particle grid the engine draws as one sheet
 * @property {number} first  first particle record
 * @property {number} cols
 * @property {number} rows
 */
/**
 * @typedef {Object} RoomLook  engine-neutral art hints the app's room table carries
 * @property {'wood'|'concrete'|'checker'} floor
 * @property {number} sun       key light intensity
 * @property {number} hemi      ambient intensity
 * @property {boolean} sunShadow
 * @property {number} ceiling   metres (light volumes, haze)
 */
/**
 * @typedef {Object} RoomInfo
 * @property {number} id
 * @property {string} name
 * @property {number} hx   room half-extent x (lk_room_hx)
 * @property {number} hz   room half-extent z (lk_room_hz)
 * @property {RoomLook} look
 * @property {ClothPatch[]} cloths
 * @property {number[]} rings  particle records that carry a curtain ring
 */
/**
 * @typedef {Object} CameraPose  the app's camera rig, already eased
 * @property {number[]} pos   [x,y,z]
 * @property {number[]} fwd   unit forward [x,y,z]; up is +y
 * @property {number} fovY    degrees
 * @property {number} aspect
 * @property {number} near
 * @property {number} far
 */
/**
 * @typedef {Object} FrameState  everything a frame of the sim gives the engine
 * @property {Float32Array} rows   count*ROW floats; a view into wasm memory, valid only during frame()
 * @property {number} count
 * @property {Uint32Array} events  codes emitted by the ticks run since the last frame (first eventCount valid)
 * @property {number} eventCount
 * @property {Uint8Array} materials  lk_body_material per body (first count valid)
 * @property {Float32Array} laser  lk_laser's 10 floats
 * @property {boolean} laserOn     the player is pointing (pad held) and the sim found a surface
 * @property {number[]} beamFrom   where the beam leaves the player, world [x,y,z]
 * @property {CameraPose} camera
 * @property {number} dt       wall seconds since the last frame (clamped)
 * @property {number} time     wall seconds since boot
 * @property {number} ticks    sim ticks run for this frame
 */
/**
 * @typedef {Object} EngineStats  one frame's cost, summed over every pass
 * @property {number} calls
 * @property {number} triangles
 * @property {number} [programs]
 * @property {Object} [extra]
 */
/**
 * @typedef {Object} RenderEngine
 * @property {string} name
 * @property {(canvas: HTMLCanvasElement, opts: Object) => Promise<void>} init
 * @property {(info: RoomInfo) => void} loadRoom
 * @property {(fs: FrameState) => void} frame
 * @property {(w: number, h: number, dpr: number) => void} resize
 * @property {() => void} dispose
 * @property {() => EngineStats} stats
 */

/** @param {any} e @returns {RenderEngine} */
export function assertEngine(e) {
  for (const k of ['init', 'loadRoom', 'frame', 'resize', 'dispose', 'stats']) {
    if (typeof e[k] !== 'function') throw new Error(`render engine '${e && e.name}' lacks ${k}()`);
  }
  return e;
}
