// crumble.js — a body that dies does not pop (Strollzilla render/crumble.ts;
// founder there, 2026-10-05: "it needs to not pop... smooth progressive").
// When the sim tombstones a record (a shatter, a spark burning out, a
// liquid spent) its view shrinks to nothing about its centre over
// CRUMBLE_S, sagging as it goes, and fades to the colour of its own dust
// while the puff and the crumbs fly. Pieces that leave whole (a severed
// board, a shard) are not crumbled: their own views draw them on.
//
// The fade is a colour fade, not alpha: every part is an instance in a
// shared opaque batch, and a per-instance alpha would need a dithered
// variant of every material. Under the dust it reads the same.
export const CRUMBLE_S = 0.35;

/** how far a crumbling body has gone at t seconds: scale (eased slow-fast), sag (m), fade 0..1 */
export function crumbleAt(t, size) {
  const u = Math.min(1, Math.max(0, t / CRUMBLE_S));
  return { scale: 1 - u * u * (3 - 2 * u), sag: Math.min(size * 0.6, 4.9 * t * t), fade: u };
}

/** a spawned piece grows the last of the way into place, so a shard set does not appear in a frame */
export const GROW_S = 0.16;
export function growAt(t) {
  const u = Math.min(1, Math.max(0, t / GROW_S));
  return 0.55 + 0.45 * (1 - (1 - u) * (1 - u));
}
