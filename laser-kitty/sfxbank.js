// sfxbank.js — the procedural sample bank (founder: "better cat and
// destruction sounds"). Pure math: no Web Audio, no three.js, so it runs
// in a worker at load (sfxbank.worker.js) and in Node for offline renders.
// Every sound here is authored, so the bank is license-free by
// construction. Recordings are a separate layer the engine plays over it
// (sounds/manifest.json, wiki/research/sound-samples.md); with none loaded
// the game sounds as this file says.
//
// Struck things are OBJECTS: modes worked out from a material, a shape and
// a size (wood, metal, glass, ceramic; soft, cardboard and a billiard ball
// have their own recipes), rung by a Hertz contact pulse and re-struck as
// the thing bounces and settles. The engine can ask for any one object by
// its own dimensions (make(), obj:* keys) and for a cat of a given
// character (cat:<kind>@<character>). Breaks layer a crack, a wash of fragments,
// pieces landing, shards ringing and grains thinning out. Some things are
// instruments and have their own voices (gong, chime, bowl, bead, bone,
// stone, rubber), and story mode's courtroom is the ui:* family.
// Cat voices are ADDITIVE: a harmonic source on a pitch contour, each
// harmonic's level read off spectral envelopes measured on real meows —
// never a distressed animal. What every voice was measured against, and
// what is only designed: wiki/research/sound-audit.md, cat-voice.md; the
// bank and engine as a whole: wiki/research/audio.md.

export const SIZES = [0.03, 0.08, 0.2, 0.6];
export const SHATTER_SIZES = { glass: [0.03, 0.1, 0.3], ceramic: [0.03, 0.1, 0.3], electric: [0.15, 0.4] };

export function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const TAU = Math.PI * 2;

// ---------------------------------------------------------- primitives ---
// exponentially decaying sinusoid via the two-pole recurrence; a short
// raised-cosine attack keeps it from clicking
function addMode(d, sr, t0, f, amp, tau, phase = 0, attack = 0.0006) {
  if (!(f > 20) || f >= sr * 0.45 || !amp) return;
  const i0 = Math.max(0, Math.round(t0 * sr));
  const n = Math.min(d.length - i0, Math.ceil(tau * 7 * sr));
  if (n <= 2) return;
  const w = (TAU * f) / sr, r = Math.exp(-1 / (tau * sr));
  const c = 2 * r * Math.cos(w), r2 = r * r;
  let y1 = (amp * Math.sin(phase - w)) / r;
  let y2 = (amp * Math.sin(phase - 2 * w)) / r2;
  const na = Math.max(1, Math.round(attack * sr));
  for (let i = 0; i < n; i++) {
    const y = c * y1 - r2 * y2;
    y2 = y1; y1 = y;
    d[i0 + i] += i < na ? y * (0.5 - 0.5 * Math.cos((Math.PI * i) / na)) : y;
  }
}

// RBJ biquad coefficients
function coef(type, f, q, sr) {
  const w = (TAU * clamp(f, 10, sr * 0.45)) / sr, cs = Math.cos(w), sn = Math.sin(w), al = sn / (2 * q);
  let b0, b1, b2;
  const a0 = 1 + al, a1 = -2 * cs, a2 = 1 - al;
  if (type === 'lp') { b0 = (1 - cs) / 2; b1 = 1 - cs; b2 = (1 - cs) / 2; }
  else if (type === 'hp') { b0 = (1 + cs) / 2; b1 = -(1 + cs); b2 = (1 + cs) / 2; }
  else { b0 = al; b1 = 0; b2 = -al; } // band-pass, 0 dB peak
  return [b0 / a0, b1 / a0, b2 / a0, a1 / a0, a2 / a0];
}

// filtered noise burst. env: 'exp' (tau) | 'bell' | 'flat'; f1 sweeps the
// filter centre exponentially from f to f1 over the burst
function addNoise(d, sr, t0, dur, amp, o, rnd) {
  const i0 = Math.max(0, Math.round(t0 * sr));
  const n = Math.min(d.length - i0, Math.ceil(dur * sr));
  if (n <= 0) return;
  const type = o.type || 'bp', q = o.q || 0.8;
  let k = coef(type, o.f, q, sr);
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  const tau = o.tau || dur / 4;
  const att = Math.max(1, Math.round((o.attack ?? 0.0004) * sr));
  for (let i = 0; i < n; i++) {
    if (o.f1 && (i & 31) === 0) k = coef(type, o.f * Math.pow(o.f1 / o.f, i / n), q, sr);
    const x = rnd() * 2 - 1;
    const y = k[0] * x + k[1] * x1 + k[2] * x2 - k[3] * y1 - k[4] * y2;
    x2 = x1; x1 = x; y2 = y1; y1 = y;
    const u = i / n;
    let e = o.env === 'bell' ? Math.sin(Math.PI * u) ** 1.5 : o.env === 'flat' ? 1 : Math.exp(-(i / sr) / tau);
    if (i < att) e *= i / att;
    if (o.am) e *= o.am(i / sr);
    d[i0 + i] += y * e * amp;
  }
}

// a grain: a few samples of noise exciting a two-pole resonator at f that
// rings for `ring` s (60 dB down) — a stone on a stone, a shard on tile.
// Breaking matter is thousands of these at a density that thins (Strollzilla
// audio/bank.ts; its measurement: tuned modes ring like chimes, recordings
// of breaking glass are 2-12 kHz crunch, ~40% tonal at most)
function grain(d, sr, t, f, ring, amp, rnd, burst = 0.002) {
  const at = Math.max(0, Math.round(t * sr));
  const w = (TAU * Math.min(f, sr * 0.45)) / sr;
  const rad = Math.exp(-1 / ((ring * sr) / 6.9));
  const a1 = 2 * rad * Math.cos(w), a2 = -rad * rad, g = (1 - rad) * 2;
  const nb = Math.max(1, Math.round(burst * sr)), len = Math.min(d.length - at, Math.round(ring * sr) + nb);
  let y1 = 0, y2 = 0;
  for (let i = 0; i < len; i++) {
    const x = i < nb ? (rnd() * 2 - 1) * (1 - i / nb) : 0;
    const y = g * x + a1 * y1 + a2 * y2;
    y2 = y1; y1 = y;
    d[at + i] += y * amp;
  }
}
// a crumble: n grains between fLo..fHi (log-uniform), arriving with an
// exponential density of mean `mean` s that thins as the pile settles
function crumbleInto(d, sr, t0, n, fLo, fHi, ringLo, ringHi, amp, mean, fall, rnd) {
  for (let i = 0; i < n; i++) {
    const t = t0 + Math.min(1.6, -Math.log(1 - rnd() * 0.997) * mean);
    const f = fLo * Math.pow(fHi / fLo, rnd());
    grain(d, sr, t, f, ringLo + (ringHi - ringLo) * rnd(), amp * Math.exp(-(t - t0) / fall) * (0.3 + 0.7 * rnd()), rnd, 0.0008 + 0.002 * rnd());
  }
}

// a click: a burst of noise, not a resonance (Strollzilla's `snap`, from its
// audio/bank.ts, the founder's own: "part of what makes a crunch a crunch is
// distribution over high energy with percussive sprinkles"). White noise
// through a one-pole low-pass at fc and, from hp, a one-pole high-pass,
// under an envelope up in 0.2 ms and 60 dB down after dur. Its measurement:
// a crumble of tuned grains was a third narrow peaks; recorded breakage is
// clicks. Ours, same test: tools/sound/README.md
function click(d, sr, t, dur, amp, fc, rnd, hp = 0) {
  const at = Math.max(0, Math.round(t * sr)), len = Math.min(d.length - at, Math.round(dur * sr)), att = Math.max(1, Math.round(0.0002 * sr));
  const a = 1 - Math.exp((-TAU * Math.min(fc, sr * 0.45)) / sr), h = hp > 0 ? Math.exp((-TAU * hp) / sr) : 0;
  const k = Math.exp(-6.9 / Math.max(1, dur * sr));
  let lp = 0, hx = 0, hy = 0, env = amp;
  for (let i = 0; i < len; i++) {
    lp += a * (rnd() * 2 - 1 - lp);
    let y = lp;
    if (h) { hy = h * (hy + y - hx); hx = y; y = hy; }
    d[at + i] += y * env * (i < att ? i / att : 1);
    env *= k;
  }
}
// pieces settling: snaps arriving at rate0 a second and thinning by
// exp(-t/thin), loud ones rare (amplitude ~ u^3: the big pieces are few),
// each one's brightness log-uniform in lo..hi; one in six is a piece's own
// knock (a resonance gone in milliseconds: a body, no pitch) and a big one
// lands with a low thump. steady: a constant rate, for a loop
function settle(d, sr, t0, secs, rate0, thin, lo, hi, amp, rnd, steady = false) {
  let t = 0;
  while (t < secs) {
    const rate = steady ? rate0 : rate0 * Math.exp(-t / thin);
    t += -Math.log(1 - rnd() * 0.999) / Math.max(rate, 2);
    if (t >= secs) break;
    const u = rnd(), big = u * u * u, f = lo * Math.pow(hi / lo, rnd());
    if (rnd() < 0.16) grain(d, sr, t0 + t, Math.min(f, 3000), 0.004 + 0.006 * rnd(), amp * (0.3 + 0.5 * big), rnd, 0.0008);
    else click(d, sr, t0 + t, 0.003 + 0.012 * rnd() + 0.03 * big, amp * (0.15 + 0.85 * big), f * (1 - 0.5 * big), rnd, 150);
    if (big > 0.4) click(d, sr, t0 + t, 0.03 + 0.03 * rnd(), amp * 0.6 * big, 250 * Math.pow(2.4, rnd()), rnd);
  }
}

// a partial rung by a few ms of noise instead of an impulse: every strike
// gets its own phase and a broadband onset, where an impulse-started sine is
// a ruled line on the spectrogram. t60 is the fall to -60 dB; the ringing
// level comes out near `amp` whatever the damping (grain()'s falls with it)
function res(d, sr, t0, f, t60, amp, rnd, burst = 0.0015) {
  if (!(f > 20) || f >= sr * 0.45 || !amp) return;
  const at = Math.max(0, Math.round(t0 * sr));
  const w = (TAU * f) / sr, rad = Math.exp(-6.908 / (t60 * sr));
  const a1 = 2 * rad * Math.cos(w), a2 = -rad * rad;
  const nb = Math.max(2, Math.round(burst * sr));
  const g = (amp * Math.sin(w) * 3) / Math.sqrt(nb);
  // ring until ~50 dB under full scale and no further: a quiet partial is
  // inaudible sooner, and these loops are most of what the bank costs
  const keep = clamp(0.85 + Math.log10(Math.abs(amp) + 1e-6) / 3, 0.15, 0.85);
  const len = Math.min(d.length - at, Math.round(t60 * keep * sr) + nb), fo = len - 48;
  let y1 = 0, y2 = 0;
  for (let i = 0; i < len; i++) {
    const y = (i < nb ? g * (rnd() * 2 - 1) * (1 - i / nb) : 0) + a1 * y1 + a2 * y2;
    y2 = y1; y1 = y;
    d[at + i] += i > fo ? (y * (len - i)) / 48 : y;
  }
}
// a cluster of modes too dense to resolve — a woodblock, a knuckle on a
// door, a rock — is a band of noise that decays (measured: a real woodblock
// is ~15 peaks inside 1.2-1.45 kHz, all gone in a quarter second)
function band(d, sr, t0, f, q, t60, amp, rnd, attack = 0.0005) {
  // white noise through a 0 dB band-pass comes out at an RMS that depends on
  // the band's width; undo that so `amp` means about the same as a mode's
  const g = 0.866 * Math.sqrt((q * sr) / (Math.PI * f));
  addNoise(d, sr, t0, t60 * 1.1, amp * g, { type: 'bp', f, q, tau: t60 / 6.908, attack }, rnd);
}
// a partial that swells after the strike (a gong's upper partials are fed
// by its lower ones for a second or so): sin * (e^-t/td - (1-s0) e^-t/rise),
// two-thirds risen after `rise` s. Two impulse-started modes in phase; s0
// is the share present at the strike itself
function swell(d, sr, t0, f, amp, t60, rise, s0, phase) {
  addMode(d, sr, t0, f, amp, t60 / 6.908, phase, 0.004);
  addMode(d, sr, t0, f, -amp * (1 - s0), Math.max(0.004, rise), phase, 0.004);
}

// a gliding sine (bubbles rise in pitch as they close)
function addChirp(d, sr, t0, f0, f1, dur, amp, tau) {
  const i0 = Math.max(0, Math.round(t0 * sr));
  const n = Math.min(d.length - i0, Math.ceil(dur * sr));
  let ph = 0;
  const na = Math.max(1, Math.round(0.0015 * sr));
  for (let i = 0; i < n; i++) {
    const f = f0 * Math.pow(f1 / f0, i / n);
    ph += (TAU * f) / sr;
    let e = Math.exp(-(i / sr) / tau);
    if (i < na) e *= i / na;
    d[i0 + i] += Math.sin(ph) * amp * e;
  }
}

function normalize(d, peak = 0.9) {
  // anything still ringing at the buffer's end fades over its last 25%
  // instead of being cut (the first metal and glass bakes clipped off mid-ring)
  const fo = Math.floor(d.length * 0.25);
  for (let i = 0; i < fo; i++) d[d.length - 1 - i] *= (i / fo) ** 1.5;
  let m = 0;
  for (let i = 0; i < d.length; i++) { const v = Math.abs(d[i]); if (v > m) m = v; }
  if (m > 1e-9) { const k = peak / m; for (let i = 0; i < d.length; i++) d[i] *= k; }
  // trim the silent tail (keeps the bank small)
  let end = d.length;
  // -60 dB under the peak counts as silence: inaudible under a room tail
  while (end > 64 && Math.abs(d[end - 1]) < 1e-3 * peak) end--;
  const out = d.subarray(0, Math.min(d.length, end + 32));
  // 3 ms fade at the cut
  const fl = Math.min(out.length, 132);
  for (let i = 0; i < fl; i++) out[out.length - 1 - i] *= i / fl;
  return out.slice();
}

// ----------------------------------------------------------- materials ---
// A struck thing is modelled from what it IS: its material, its shape and
// its size give it a set of modes, and the blow that rings them is a
// contact force whose length depends on how hard it was hit.
//
//   modes     from the geometry: a bar's bending series, a plate's (m,n)
//             lattice, a hollow vessel's bell modes, a box's panels. The
//             formulas are the textbook thin-bar / thin-plate / thin-shell
//             ones (Fletcher & Rossing, The Physics of Musical Instruments,
//             ch. 2-3, from memory; van den Doel & Pai 1998 use the same
//             idea for arbitrary shapes). c is sqrt(E/rho), the speed of
//             compression waves in the material.
//   damping   one law per material: a mode at f rings T60 = 2.2 / (f*eta +
//             rest), where eta is the material's internal friction (what
//             lets an ear tell glass from wood; Klatzky, Pai & Krotkov
//             2000) and `rest` is what the thing stands on taking energy
//             out at every frequency. Constants are set so each material's
//             k64 hit, which was fitted to recordings, keeps its measured
//             decay (wiki/research/sound-audit.md).
//   contact   Hertz: the force is one smooth push lasting tau ~ size^0.25 *
//             speed^-0.2 (Hertz gives speed^-1/5 exactly, and tau
//             proportional to size for a sphere; things land on edges and
//             corners, so the size power is cut to a quarter — with 1/2 a
//             cabinet's blow was all under 600 Hz). It is fed to every mode as the excitation, so a
//             mode above ~1/tau is simply not rung: a hard, fast blow is
//             bright and a soft or slow one is dull, with no table of
//             brightness anywhere. T0 is tau in ms for a 10 cm thing at
//             1 m/s; the values are estimates, not measurements.
//   position  where it was struck weights each mode by its shape there, so
//             two blows on one object differ the way they do on a real one.
//   radiation a body small against the wavelength radiates its low modes
//             poorly (6 dB an octave under ka = 1); nothing finer.
// What is NOT modelled: the object's true shape past bar/plate/vessel/box,
// what it lands on (one `rest` per material), and nonlinear contact (a
// rattle against the floor is added by hand).
const PHYS = {
  wood: { c: 3800, eta: 0.008, rest: 7, T0: 0.55, wall: [0.07, 0.008, 0.03], click: [1300, 0.4, 'bp'], bounce: 0.35, rattle: 2, spread: 0.06, cluster: 3, modal: 0.3 },
  metal: { c: 5100, eta: 0.0012, rest: 1.5, T0: 0.1, wall: [0.03, 0.0008, 0.003], click: [4500, 0.5, 'hp'], bounce: 0.5, rattle: 4, spread: 0.02, beat: 0.006, wash: 0.5, cluster: 0.35 },
  glass: { c: 5300, eta: 0.0025, rest: 2.8, T0: 0.09, wall: [0.06, 0.0012, 0.006], click: [8000, 0.3, 'bp'], bounce: 0.3, rattle: 3, spread: 0.015, beat: 0.004 },
  ceramic: { c: 4200, eta: 0.006, rest: 8, T0: 0.13, wall: [0.11, 0.003, 0.009], click: [5500, 0.45, 'bp'], bounce: 0.35, rattle: 3, spread: 0.03, cluster: 0.25 },
};
const ARCH_DEFAULT = { wood: 'box', metal: 'vessel', glass: 'vessel', ceramic: 'vessel' };
// full extents [a >= b >= c] in metres -> what kind of body it is
export function archOf(mat, dims) {
  const [a, b, c] = dims;
  if (a > 2.6 * b) return 'bar';
  if (c < 0.3 * b) return 'plate';
  return ARCH_DEFAULT[mat] || 'box';
}
// the dims a bare size (largest half-extent) stands for, per material: what
// the pre-built hit:<mat>:<size> keys are
const dimsOf = (mat, size) => (mat === 'wood' ? [2 * size, 1.3 * size, 0.9 * size] : [2 * size, 1.5 * size, 1.5 * size]);

// modes of a body: [[f, weight, family]], lowest first, at most `max` under fmax
function modesOf(M, arch, dims, fmax, max = 26) {
  const [a, b, c] = dims, out = [];
  const wall = Math.min(clamp(M.wall[0] * b, M.wall[1], M.wall[2]), 0.35 * c);
  if (arch === 'bar') {
    // free-free bending: f1 = 1.028 c t / L^2, then 2.756, 5.404, 8.933...
    // about both cross-axes (a round or square bar gives near-twins)
    for (const [t, w] of [[c, 1], [b, 0.6]]) {
      [1, 2.756, 5.404, 8.933, 13.34, 18.64, 24.8].forEach((r, i) => out.push([(1.028 * M.c * t * r) / (a * a), w / (1 + 0.15 * i), i]));
      if (b / c < 1.08) break;
    }
  } else if (arch === 'plate') {
    // thin plate: f(m,n) = 0.453 c t [(m/a)^2 + (n/b)^2]
    for (let m = 0; m <= 7; m++) for (let n = 0; n <= 7; n++) {
      if (m + n < 2) continue;
      out.push([0.453 * M.c * c * ((m / a) ** 2 + (n / b) ** 2), 1 / (1 + 0.1 * (m + n - 2)), m * 8 + n]);
    }
  } else if (arch === 'vessel') {
    // a mug, a vase, a pot, a lampshade: the bell modes of a thin cylinder,
    // f(n) = c h n(n^2-1) / (2 pi sqrt(12) R^2 sqrt(n^2+1)), each stiffened
    // a little more by the base and the rim the further up it is counted
    const R = 0.25 * (b + c), k = (M.c * wall) / (TAU * Math.sqrt(12) * R * R);
    for (let n = 2; n <= 7; n++) for (let m = 0; m < 3; m++) {
      out.push([k * ((n * (n * n - 1)) / Math.sqrt(n * n + 1)) * Math.sqrt(1 + 0.9 * m * m * (R / a) ** 2 * (n + 1)), (1 / (1 + 0.15 * (n - 2))) / (1 + 0.8 * m), n * 4 + m]);
    }
  } else {
    // a box of panels (a cabinet, a book, a crate): each pair of faces is a
    // plate of the wall's thickness; its first few modes
    for (const [x, y, w] of [[a, b, 1], [a, c, 0.7], [b, c, 0.5]]) {
      for (let m = 1; m <= 3; m++) for (let n = 1; n <= 3; n++) out.push([0.453 * M.c * wall * ((m / x) ** 2 + (n / y) ** 2), w / (m + n - 1), m * 4 + n]);
    }
  }
  // a body much smaller than the wavelength moves air poorly: below ka = 1
  // (f = 109 / a Hz) a mode is heard less, 6 dB an octave. This is why a
  // small thing's lowest modes do not dominate it
  const fr = 109 / a;
  return out.filter((p) => p[0] > 45 && p[0] < fmax).sort((p, q) => p[0] - q[0]).slice(0, max).map(([f, w, fam]) => [f, (w * (f / fr)) / Math.sqrt(1 + (f / fr) ** 2), fam]);
}
const t60Of = (M, f) => 2.2 / (f * M.eta + M.rest);
// contact time (s) of a blow at v m/s on a thing `size` m across
const tauOf = (M, size, v) => M.T0 * 1e-3 * Math.pow(clamp(size, 0.01, 1.5) / 0.1, 0.25) * Math.pow(clamp(v, 0.2, 12), -0.2);
// where the Hertz pulse stops ringing things: its spectrum is down 6 dB
// here. The engine low-passes a hard-struck buffer at this for a softer blow
export const contactHz = (mat, size, v) => 0.6 / tauOf(PHYS[mat] || PHYS.wood, size, v);
export const STRIKE_V = 3; // m/s: the blow every pre-built hit is rendered at
export const MODELLED = Object.keys(PHYS);

// an object: its modes, drawn once. dims are full extents, any order
export function objectOf(mat, dims, rnd, sr = 44100) {
  const M = PHYS[mat], d = (typeof dims === 'number' ? dimsOf(mat, dims) : [...dims]).sort((x, y) => y - x);
  const arch = archOf(mat, d), parts = [];
  for (const [f0, w, fam] of modesOf(M, arch, d, Math.min(15000, sr * 0.45))) {
    const f = f0 * (1 + M.spread * (rnd() * 2 - 1));
    parts.push([f, w, t60Of(M, f) * (0.8 + 0.4 * rnd()), fam]);
    // nothing is perfectly round or square: half the modes are split pairs
    if (M.beat && rnd() < 0.5) parts.push([f * (1 + M.beat * (0.5 + rnd())), w * 0.6, t60Of(M, f) * (0.8 + 0.4 * rnd()), fam + 0.5]);
  }
  return { M, mat, arch, dims: d, size: d[0] / 2, parts, f0: parts.length ? parts[0][0] : 200 };
}
// the contact force: one smooth push of tau seconds (Hertz's is close to a
// half sine to the 3/2), roughened a little, because no two surfaces meet
// the same way twice. Returned with its area so a mode far below 1/tau
// comes out at the level asked for
function pulseOf(tau, sr, rnd) {
  const n = Math.max(2, Math.round(tau * sr)), p = new Float32Array(n);
  let area = 0;
  for (let i = 0; i < n; i++) { p[i] = Math.sin((Math.PI * (i + 0.5)) / n) ** 1.5 * (1 + 0.35 * (rnd() * 2 - 1)); area += p[i]; }
  p.area = area;
  return p;
}
// a mode rung by a force pulse: the two-pole resonator is driven with the
// pulse itself, so what a mode gets is the pulse's spectrum at its own
// frequency. No table says "harder is brighter"; the convolution does
function ring(d, sr, t0, f, t60, amp, pulse) {
  if (!(f > 20) || f >= sr * 0.45 || !amp) return;
  const at = Math.max(0, Math.round(t0 * sr));
  const w = (TAU * f) / sr, rad = Math.exp(-6.908 / (t60 * sr));
  const a1 = 2 * rad * Math.cos(w), a2 = -rad * rad, nb = pulse.length, g = (amp * Math.sin(w)) / pulse.area;
  const keep = clamp(0.85 + Math.log10(Math.abs(amp) + 1e-6) / 3, 0.15, 0.85);
  const len = Math.min(d.length - at, Math.round(t60 * keep * sr) + nb), fo = len - 48;
  let y1 = 0, y2 = 0;
  for (let i = 0; i < len; i++) {
    const y = (i < nb ? g * pulse[i] : 0) + a1 * y1 + a2 * y2;
    y2 = y1; y1 = y;
    d[at + i] += i > fo ? (y * (len - i)) / 48 : y;
  }
}
// one blow on an object at v m/s. `at` (0..1 along it, and around it) is
// where: each mode is weighted by its shape there
function strike(d, sr, t0, o, amp, rnd, v = STRIKE_V, at = [rnd(), rnd()]) {
  const M = o.M, tau = tauOf(M, o.size, v), pulse = pulseOf(tau, sr, rnd), fc = 0.6 / tau;
  for (const [f, a, t60, fam] of o.parts) {
    const i = Math.floor(fam), j = o.arch === 'plate' ? [i >> 3, i & 7] : o.arch === 'vessel' ? [i >> 2, i & 3] : [i + 1, 0];
    // mode shape at the strike point (a floor of 0.15: nothing is struck at an exact node)
    const shape = Math.abs(Math.cos(Math.PI * j[0] * at[0] + (fam % 1 ? 1.2 : 0))) * (j[1] ? Math.abs(Math.cos(Math.PI * j[1] * at[1])) : 1);
    ring(d, sr, t0, f, t60, amp * a * (M.modal ?? 1) * (0.15 + 0.85 * shape), pulse);
  }
  // mode clusters too dense to resolve (a board, a panel, a mug's body) are
  // decaying noise in the band of the lowest modes; the pulse dulls them too
  const soft = (f) => 1 / (1 + (f / fc) ** 2);
  if (M.cluster) {
    const f1 = clamp(o.f0 * 1.3, 90, 2400), f2 = clamp(o.f0 * 3.1, 200, 5200);
    band(d, sr, t0, f1, 1.2, t60Of(M, f1) * 0.8, amp * 0.22 * M.cluster * soft(f1), rnd);
    band(d, sr, t0, f2, 2.2, t60Of(M, f2) * 0.8, amp * 0.09 * M.cluster * soft(f2), rnd);
  }
  // the contact itself: surfaces meeting, as long as the push and no longer
  addNoise(d, sr, t0, Math.max(0.002, tau * 3), amp * M.click[1] * soft(M.click[0] * 0.5), { type: M.click[2], f: Math.min(M.click[0], fc * 2.5), q: 0.7, tau: Math.max(0.0006, tau) }, rnd);
  if (M.wash) addNoise(d, sr, t0, 0.12, amp * M.wash * soft(4000), { type: 'bp', f: clamp(o.f0 * 6, 3000, 7000), q: 0.5, tau: 0.02 }, rnd);
}
const hit = (d, sr, t0, mat, size, amp, rnd) => strike(d, sr, t0, objectOf(mat, size, rnd, sr), amp, rnd);

// what a struck object plays: the blow at STRIKE_V, then (settles) it rocks
// and comes to rest — the same object struck again, softer each time and
// somewhere else. dims as for objectOf. The stock hit:* keys of the four
// modelled materials settle: they are one sound for a whole fall. An
// object's own obj:* keys do not: the sim reports every bounce as a blow of
// its own, and a baked rattle under each would double them
export function knock(mat, dims, seed, sr, settles = true) {
  const rnd = mulberry32(seed), o = objectOf(mat, dims, rnd, sr), M = o.M;
  const d = new Float32Array(Math.ceil(sr * clamp(t60Of(M, o.f0) * 0.9 + 0.35, 0.4, 1.8)));
  strike(d, sr, 0, o, 1, rnd);
  let gap = 0.05 + rnd() * 0.1, t = gap, a = M.bounce * (0.6 + 0.4 * rnd());
  const nb = settles && rnd() < 0.85 ? 1 + Math.floor(rnd() * M.rattle) : 0;
  for (let b = 0; b < nb && a > 0.04; b++) {
    // a bounce is a slower blow: by Hertz it is longer, so duller
    strike(d, sr, t, o, a, rnd, STRIKE_V * a);
    gap *= 0.5 + 0.25 * rnd(); t += gap; a *= 0.45 + 0.25 * rnd();
  }
  if (o.size > 0.25 && mat !== 'glass') floorThud(d, sr, 0.002, o.size, 0.6, rnd);
  return normalize(d);
}

// the floor taking a heavy thing. A phone's speaker plays nothing under
// ~150 Hz, so the weight goes through a soft clip (tanh(2.5x)/2.5, unity
// for a quiet signal): the harmonics it makes are in the speaker's range
// and the ear hears the fundamental they imply (Strollzilla, ADR-0027,
// "weight a phone can play"; measured there, not here)
function floorThud(d, sr, t0, size, amp, rnd) {
  const n = Math.min(d.length - Math.round(t0 * sr), Math.ceil(sr * (0.7 + size))), w = new Float32Array(Math.max(1, n));
  addMode(w, sr, 0, 52 + rnd() * 22, 0.8, 0.09 + size * 0.15);
  addMode(w, sr, 0, 110 + rnd() * 30, 0.3, 0.05);
  addNoise(w, sr, 0, 0.12, 0.5, { type: 'lp', f: 320, q: 0.7, tau: 0.03 }, rnd);
  const i0 = Math.round(t0 * sr);
  for (let i = 0; i < n; i++) d[i0 + i] += (amp * Math.tanh(2.5 * 1.4 * w[i])) / 2.5;
}

export function impact(mat, size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * (mat === 'metal' ? 1.7 : mat === 'glass' ? 0.95 : 0.7)));
  if (mat === 'soft') {
    // a cushion, a towel, a cat bed: no ring, a fwump and a pat
    addNoise(d, sr, 0, 0.07, 1, { type: 'lp', f: 520 + 300 / (size + 0.2), q: 0.7, env: 'bell' }, rnd);
    addMode(d, sr, 0.004, 85 + 40 * rnd() + 10 / (size + 0.05), 0.6, 0.045);
    addNoise(d, sr, 0.09 + rnd() * 0.04, 0.05, 0.35, { type: 'lp', f: 700, q: 0.7, env: 'bell' }, rnd);
    if (size > 0.25) floorThud(d, sr, 0.0, size, 0.7, rnd);
  } else if (mat === 'cardboard') {
    // a hollow box: low boom of the air inside, a papery flap
    const fb = clamp(60 / (size + 0.08), 110, 600) * (0.95 + 0.1 * rnd());
    // (the boom was two pure modes — a tom-tom; a box's panels are mode
    // clusters, so most of it is decaying noise in those bands now)
    addNoise(d, sr, 0, 0.06, 1, { type: 'bp', f: fb * 2.2, q: 1.2, tau: 0.018 }, rnd);
    band(d, sr, 0, fb, 3, 0.16, 0.55, rnd);
    band(d, sr, 0, fb * 2.4, 2.5, 0.1, 0.3, rnd);
    addMode(d, sr, 0, fb, 0.25, 0.03);
    addNoise(d, sr, 0.006, 0.03, 0.25, { type: 'hp', f: 3000, q: 0.7, tau: 0.008 }, rnd);
    addNoise(d, sr, 0.1 + rnd() * 0.05, 0.04, 0.3, { type: 'bp', f: fb * 2, q: 1.2, tau: 0.012 }, rnd);
  } else if (mat === 'ball') {
    // billiard / bocce: a hard clack, then bounces closing in
    let t = 0, a = 1;
    for (let b = 0; b < 4; b++) {
      addMode(d, sr, t, 2700 + 500 * rnd(), a * 0.8, 0.012);
      addMode(d, sr, t, 1100 + 200 * rnd(), a * 0.5, 0.03);
      addNoise(d, sr, t, 0.004, a * 0.5, { type: 'hp', f: 3000, q: 0.7, tau: 0.001 }, rnd);
      t += 0.17 * Math.pow(0.62, b) * (0.9 + 0.2 * rnd());
      a *= 0.5;
    }
  } else {
    return knock(mat, size, seed, sr);
  }
  return normalize(d);
}

// --------------------------------------------------------------- breaks ---
function shardShower(d, sr, t0, n, fLo, fHi, mean, ratios, tauLo, tauHi, amp, fall, rnd) {
  for (let i = 0; i < n; i++) {
    const t = t0 + 0.012 + Math.min(0.9, -Math.log(1 - rnd() * 0.995) * mean);
    const f = fLo * Math.pow(fHi / fLo, rnd());
    const a = amp * Math.exp(-(t - t0) / fall) * (0.35 + 0.65 * rnd());
    const tau = tauLo + (tauHi - tauLo) * rnd();
    for (let r = 0; r < ratios.length; r++) addMode(d, sr, t, f * ratios[r], a / (1 + r * 1.4), tau / (1 + r * 0.6), rnd() * TAU);
  }
}

export function shatter(kind, size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 2.4));
  const big = clamp(size / 0.3, 0, 1);
  {
    // glass, rebuilt to 40 real breaks (sound-audit.md). What they show and
    // the grain-only version lacked: the first 100-300 ms is a WASH — so many
    // fragments at once that it is noise, not countable grains; then pieces
    // land as sharp broadband bursts; and a handful of big shards ring as
    // thin lines for a few tenths of a second. Real breaks also differ a lot
    // from one to the next (0.6-2.0 s, centroid 4.6-7.9 kHz), so `long` and
    // `tone` move each variant instead of every break being the same break.
    // Ceramic: seven recorded breaks (vases, a mug, plates; CC0, shipped as
    // samples) measure like glass, not like the low crack-and-crumble this
    // was: centroid 6.4 kHz against its 1.1, 1% of the energy under 200 Hz
    // against 52%. So a plate breaks by the glass recipe, a little lower
    // and shorter, with fewer long rings and chunkier pieces landing.
    const cer = kind === 'ceramic';
    const long = (0.55 + 1.1 * rnd() * rnd() + big * 0.35) * (cer ? 0.8 : 1), tone = (0.8 + 0.45 * rnd()) * (cer ? 0.85 : 1);
    addNoise(d, sr, 0, 0.02, 1, { type: 'hp', f: 1800, q: 0.7, tau: 0.004 }, rnd);
    addNoise(d, sr, 0, 0.06, 0.7, { type: 'bp', f: 450, q: 0.5, tau: 0.018 }, rnd); // what it lands on
    addNoise(d, sr, 0.001, 1.1 * long, 0.75, { type: 'bp', f: 4900 * tone, q: 0.35, tau: 0.1 * long }, rnd);
    addNoise(d, sr, 0.001, 0.5 * long, 0.24, { type: 'hp', f: 8500, q: 0.7, tau: 0.05 * long }, rnd);
    // the big shards: thin rings, the lines in every real spectrogram
    const nr = (cer ? 2 : 4) + Math.floor(rnd() * (cer ? 3 : 5));
    for (let i = 0; i < nr; i++) res(d, sr, 0.002 + rnd() * 0.03, (1300 + 8500 * rnd() * rnd()) * tone, (0.2 + 0.5 * rnd()) * long, 0.07 + 0.13 * rnd(), rnd, 0.001);
    // pieces landing: each a burst with its own short ring
    const nl = (cer ? 3 : 2) + Math.floor(rnd() * 3 + big * 2);
    for (let i = 0; i < nl; i++) {
      const t = (0.07 + 0.75 * rnd()) * long * 0.8, a = (0.25 + 0.4 * rnd()) * Math.exp(-t / (0.5 * long));
      addNoise(d, sr, t, 0.2 * long, a, { type: 'bp', f: (2800 + 3500 * rnd()) * tone, q: 0.45, tau: (0.012 + 0.03 * rnd()) * long }, rnd);
      for (let k = 0; k < 3; k++) res(d, sr, t, (1800 + 7000 * rnd()) * tone, 0.12 + 0.3 * rnd(), a * 0.3, rnd, 0.001);
    }
    crumbleInto(d, sr, 0.003, Math.round(220 + big * 420), 2600 * tone, 15000, 0.0015, 0.006, 0.45, 0.16 * long, 0.4 * long, rnd);
    if (cer && size > 0.08) floorThud(d, sr, 0, size, 0.3, rnd);
    if (kind === 'electric') {
      // the zap: a 120 Hz buzz gated by crackle, a pop, and fizzing
      const n = Math.ceil(0.5 * sr);
      let gate = 1, until = 0;
      for (let i = 0; i < n; i++) {
        if (i >= until) { gate = rnd() < 0.55 ? 1 : 0; until = i + Math.round((0.002 + rnd() * 0.012) * sr); }
        const t = i / sr;
        let v = 0;
        for (let k = 1; k <= 18; k += 2) v += Math.sin(TAU * 120 * k * t) / k;
        d[i] += v * 0.32 * gate * Math.exp(-t / 0.16);
      }
      addMode(d, sr, 0, 70, 0.7, 0.06);
      for (let i = 0; i < 40; i++) {
        const t = rnd() * 0.4;
        addNoise(d, sr, t, 0.002, 0.5 * Math.exp(-t / 0.15), { type: 'hp', f: 4000, q: 0.7, tau: 0.0006 }, rnd);
      }
    }
  }
  return normalize(d);
}

// what a break leaves behind: the pieces settling, a grainy tail by
// material (the compound crash's last layer)
export function crumble(mat, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 1.6));
  // (these were showers of tuned grains: every piece a small bell. Pieces
  // settling are clicks; see click())
  if (mat === 'glass') settle(d, sr, 0, 1.4, 190, 0.3, 2500, 15000, 0.6, rnd);
  else if (mat === 'ceramic') settle(d, sr, 0, 1.3, 150, 0.28, 1200, 9000, 0.7, rnd);
  else {
    // wood: splinters and bits, lower and duller, a few knocks of pieces
    settle(d, sr, 0, 1.4, 130, 0.3, 400, 5000, 0.7, rnd);
    for (let i = 0; i < 4; i++) hit(d, sr, 0.05 + rnd() * 0.8, 'wood', 0.04 + 0.06 * rnd(), 0.25, rnd);
  }
  return normalize(d);
}

// the debris bed: grains trickling at a steady density, loopable, mixed
// materials; two lengths so their sum seldom repeats
export function bed(len, seed, sr) {
  const rnd = mulberry32(seed);
  const n = Math.round(len * sr), d = new Float32Array(n);
  settle(d, sr, 0, len - 0.05, 55, 1, 350, 9000, 1, rnd, true);
  let m = 0;
  for (let i = 0; i < n; i++) m = Math.max(m, Math.abs(d[i]));
  for (let i = 0; i < n; i++) d[i] *= 0.7 / (m || 1);
  // 10 ms crossfade of the loop seam
  const fl = Math.round(0.01 * sr);
  for (let i = 0; i < fl; i++) { const w = i / fl; d[i] *= w; d[n - 1 - i] *= w; }
  return d;
}

// furniture breaking apart (Severed): splinters, the crack, a groan, the
// pieces hitting the floor
export function snap(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 1.3));
  // the splintering: a fast burst of wood grains, then the crack
  crumbleInto(d, sr, 0, 70, 700, 4500, 0.003, 0.012, 0.8, 0.025, 0.06, rnd);
  hit(d, sr, 0.01, 'wood', 0.35, 1, rnd);
  // the crack itself: wood letting go is a 1-4 kHz report (the thud alone
  // was 94% of the energy and under 200 Hz, where a phone has no speaker)
  band(d, sr, 0.008, 1500 + 500 * rnd(), 0.8, 0.07, 0.9, rnd, 0.0003);
  band(d, sr, 0.008, 3300 + 900 * rnd(), 1, 0.04, 0.5, rnd, 0.0003);
  if (rnd() < 0.6) {
    // the groan of fibres letting go
    const t0 = 0.04, dur = 0.28, f0 = 85 + 30 * rnd();
    const i0 = Math.round(t0 * sr), n = Math.round(dur * sr);
    let ph = 0;
    for (let i = 0; i < n; i++) {
      const u = i / n;
      ph += (TAU * f0 * (1 - 0.3 * u) * (1 + 0.04 * Math.sin(i * 0.002 + rnd() * 0.2))) / sr;
      let v = 0;
      for (let k = 1; k <= 10; k++) v += Math.sin(k * ph) / k;
      d[i0 + i] += v * 0.18 * Math.sin(Math.PI * u);
    }
  }
  floorThud(d, sr, 0.14 + 0.06 * rnd(), 0.2, 0.5, rnd);
  for (let i = 0; i < 3; i++) hit(d, sr, 0.25 + 0.3 * rnd(), 'wood', 0.08 + 0.1 * rnd(), 0.45, rnd);
  crumbleInto(d, sr, 0.2, 80, 350, 3200, 0.005, 0.02, 0.35, 0.3, 0.5, rnd); // bits settling
  return normalize(d);
}

// ------------------------------------------------- the rest of the room ---
// claws in fabric: strokes whose fibres catch (grainy AM); deep wear
// adds a tearing rip
export function scratch(stage, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.8));
  const strokes = 3 + (stage >= 1 ? 1 : 0);
  // a cat rakes in a rhythm, not to a metronome: each stroke's gap, length
  // and weight is its own (they were 0.1 s apart to the millisecond)
  let t0 = 0;
  for (let s = 0; s < strokes; s++) {
    const fr = 170 + 90 * rnd(), jph = rnd() * TAU;
    addNoise(d, sr, t0, 0.07 + 0.035 * rnd(), 0.6 + 0.4 * rnd(), {
      type: 'bp', f: 3400 - 400 * rnd(), f1: 2000 + 300 * rnd(), q: 1.4, env: 'bell',
      am: (t) => 0.35 + 0.65 * Math.abs(Math.sin(TAU * fr * t + jph + 2 * Math.sin(t * 90))) ** 2,
    }, rnd);
    t0 += 0.085 + 0.05 * rnd();
  }
  if (stage >= 1) {
    let g = 1, until = 0, idx = 0;
    addNoise(d, sr, t0, 0.32, 0.7, {
      type: 'bp', f: 1600, f1: 1100, q: 0.8, env: 'bell',
      am: (t) => { idx++; if (idx >= until) { g = 0.3 + 0.7 * rnd(); until = idx + Math.round(sr * (0.004 + 0.01 * rnd())); } return g; },
    }, rnd);
  }
  return normalize(d);
}

// a spill reaching the floor: a plap, bubbles, spray
export function splash(sizeIdx, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.9));
  const s = [0.5, 1, 1.6][sizeIdx] ?? 1;
  addNoise(d, sr, 0, 0.08, 1, { type: 'bp', f: 800 / Math.sqrt(s), q: 0.9, tau: 0.02 }, rnd);
  addMode(d, sr, 0, 170 / Math.sqrt(s), 0.5, 0.04);
  const nb = Math.round(5 + 6 * s);
  for (let i = 0; i < nb; i++) {
    const t = 0.02 + rnd() * 0.45 * Math.sqrt(s);
    const f = 500 + 1100 * rnd();
    addChirp(d, sr, t, f, f * (1.4 + 0.4 * rnd()), 0.03, 0.35 * Math.exp(-t / 0.3), 0.012);
  }
  addNoise(d, sr, 0.005, 0.3, 0.14, { type: 'hp', f: 4200, q: 0.7, tau: 0.07 }, rnd);
  return normalize(d);
}

// an electrical send-off: crackle, fizz, a dying buzz
export function spark(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.55));
  for (let i = 0; i < 70; i++) {
    const t = -Math.log(1 - rnd() * 0.99) * 0.1;
    if (t > 0.45) continue;
    addNoise(d, sr, t, 0.0025, 0.9 * Math.exp(-t / 0.15) * (0.4 + 0.6 * rnd()), { type: 'hp', f: 3000, q: 0.7, tau: 0.0006 }, rnd);
  }
  addNoise(d, sr, 0, 0.25, 0.25, { type: 'bp', f: 6500, q: 2, tau: 0.08 }, rnd);
  const n = Math.ceil(0.3 * sr);
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    let v = 0;
    for (let k = 1; k <= 9; k += 2) v += Math.sin(TAU * 120 * k * t) / k;
    d[i] += v * 0.12 * Math.exp(-t / 0.08);
  }
  return normalize(d);
}

// a paw in a puddle: a soft pat with a wet edge
export function paw(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.2));
  addMode(d, sr, 0, 100 + 30 * rnd(), 0.5, 0.025);
  addNoise(d, sr, 0, 0.03, 0.6, { type: 'lp', f: 600, q: 0.7, env: 'bell' }, rnd);
  band(d, sr, 0, 480, 1, 0.09, 0.9, rnd, 0.002); // the part of a pat a phone speaker can play
  addChirp(d, sr, 0.008, 800 + 300 * rnd(), 1300 + 300 * rnd(), 0.025, 0.25, 0.01);
  return normalize(d, 0.6);
}

// a cat landing: front paws, back paws, the body settling
export function land(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.3));
  for (const [t, a] of [[0, 1], [0.04 + 0.02 * rnd(), 0.8], [0.09 + 0.02 * rnd(), 0.45]]) {
    addMode(d, sr, t, 90 + 40 * rnd(), a * 0.6, 0.035);
    addNoise(d, sr, t, 0.035, a * 0.5, { type: 'lp', f: 650, q: 0.7, env: 'bell' }, rnd);
    // 98% of this sat under 200 Hz, where a phone has no speaker: the pads'
    // own soft knock carries the landing there
    band(d, sr, t, 380 + 140 * rnd(), 0.9, 0.05, a * 1.1, rnd, 0.002);
  }
  addNoise(d, sr, 0.01, 0.06, 0.25, { type: 'bp', f: 2500, q: 0.8, env: 'bell' }, rnd); // fur
  return normalize(d, 0.7);
}

// the air a pouncing cat moves
export function whoosh(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.32));
  addNoise(d, sr, 0, 0.3, 1, { type: 'bp', f: 450 + 150 * rnd(), f1: 2200 + 600 * rnd(), q: 1.1, env: 'bell' }, rnd);
  return normalize(d, 0.6);
}

// ------------------------------------------------- voices a mesh can name ---
// Some things are instruments, not materials. A room sets
// mesh.userData.voice to one of these names and the viewer plays
// hit:<voice>:<size index> for its impacts (sizes below, metres) and
// break:<voice> for its breaks where one exists (bone, stone). What each
// was measured against, and what is only designed:
// wiki/research/sound-audit.md.
export const VOICE_SIZES = { gong: [0.5], chime: [0.06, 0.3], bowl: [0.07, 0.16], bead: [0.01], bone: [0.07, 0.3], stone: [0.06, 0.22], rubber: [0.3] };

// a gong on chains, from six strikes of a real one (VCSL "Gong 1", CC0 —
// measured, not sampled): some 25 partials packed between 1x and 20x the
// fundamental, beating against close neighbours, under a bloom — the band
// from 1.5 to 3 kHz climbs 20 dB over the first second of a hard strike
// and 3-6 kHz climbs 25, then they fall at 6-10 dB a second while the
// bottom falls at 3. The real one rings for half a minute; this one is
// faded out inside its seven seconds.
const GONG = [[1, 0], [1.47, -13], [2.04, -8], [2.2, -6], [2.32, -13], [2.42, -6], [2.58, -11], [2.77, -9], [2.95, -4], [3.09, -12], [3.19, -13],
  [3.36, -13], [3.73, -13], [3.97, -5], [4.21, -15], [4.7, -19], [5.03, -16], [6.15, -13], [6.92, -16], [8.34, -19], [9.4, -17], [11.2, -20],
  [13.15, -18], [16, -22], [19.6, -24]];
export function gong(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 7));
  const f0 = 128 * (0.96 + 0.08 * rnd()), hard = 0.65 + 0.35 * rnd();
  for (const [r, dB] of GONG) {
    const f = f0 * r * (1 + 0.012 * (rnd() - 0.5));
    const a = 10 ** ((dB + (r > 2.5 ? 5 * hard : 0) - 4 * rnd()) / 20);
    const t60 = clamp(20 / Math.sqrt(r), 8, 20) * (0.75 + 0.5 * rnd());
    // the fundamental speaks at once; the higher the partial, the later it
    // peaks and the less of it is there at the strike
    const rise = (0.08 + 0.1 * Math.log2(r)) * (0.6 + 0.8 * rnd());
    const s0 = clamp(0.6 - 0.25 * Math.log2(r), 0.08, 1);
    if (r < 1.3) addMode(d, sr, 0, f, a, t60 / 6.908, rnd() * TAU, 0.004);
    else swell(d, sr, 0, f, a, t60, rise, s0, rnd() * TAU);
    // the shimmer: a twin a few Hz off
    if (r > 1.9 && rnd() < 0.6) swell(d, sr, 0, f + (rnd() < 0.5 ? -1 : 1) * (0.8 + 3.2 * rnd()), a * 0.6, t60, rise * (0.8 + 0.4 * rnd()), s0, rnd() * TAU);
  }
  // the bloom: on the real spectrogram the strike is a narrow band under
  // 500 Hz that spreads upward into a dense haze reaching 4-5 kHz within a
  // second, then sinks back as the top dies first. Too many partials to
  // tabulate, so: ninety scattered from 0.6 to 5.6 kHz, each arriving late
  // and beating with its neighbours — filtered noise would hiss where this
  // shimmers
  for (let i = 0; i < 90; i++) {
    const u = rnd(), f = f0 * 4.5 + (5600 - f0 * 4.5) * Math.pow(u, 1.4);
    swell(d, sr, 0, f, 10 ** ((-18 - 7 * u - 5 * rnd()) / 20) * hard, 2.5 + 11 * (1 - u) ** 2 + rnd(), (0.2 + 0.4 * u) * (0.7 + 0.6 * rnd()), 0.02, rnd() * TAU);
  }
  // the beater: felt on bronze, a low thump and no click
  addNoise(d, sr, 0, 0.09, 0.9, { type: 'lp', f: 420, q: 0.7, tau: 0.022, attack: 0.002 }, rnd);
  addNoise(d, sr, 0, 0.05, 0.2, { type: 'bp', f: 1600, q: 0.6, tau: 0.01, attack: 0.001 }, rnd);
  return normalize(d);
}

// wind chimes brushed: three to six tubes struck inside a third of a second,
// some swinging back for a second, softer touch. Each tube is a free bar
// (partials 1 : 2.76 : 5.40 : 8.93); the tuning is a loose pentatonic so a
// cluster is pretty without being a chord. Decays follow the bell-tree and
// mark-tree recordings: seconds at 1-3 kHz, a few tenths by 9 kHz.
const BAR = [[1, 0], [2.756, -3], [5.404, -8], [8.933, -14]];
const PENTA = [1, 1.125, 1.25, 1.5, 1.6875, 2, 2.25, 2.5];
export function chime(size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 2.8));
  const small = size < 0.15, base = (small ? 2100 : 880) * (0.92 + 0.16 * rnd());
  const n = 3 + Math.floor(rnd() * 4);
  let t = 0;
  for (let i = 0; i < n; i++) {
    const f = base * PENTA[Math.floor(rnd() * PENTA.length)] * (1 + 0.006 * (rnd() - 0.5));
    const tube = (tt, a) => {
      for (const [r, dB] of BAR) res(d, sr, tt, f * r, clamp(2.6 * Math.pow(r, -0.85) * (small ? 0.7 : 1), 0.2, 2.6), a * 10 ** (dB / 20) * (0.6 + 0.4 * rnd()), rnd, 0.0008);
      addNoise(d, sr, tt, 0.012, a * 0.45, { type: 'bp', f: 7500, q: 0.6, tau: 0.003 }, rnd);
    };
    tube(t, i === 0 ? 1 : 0.45 + 0.55 * rnd());
    if (rnd() < 0.35) tube(t + 0.25 + 0.5 * rnd(), 0.2 + 0.3 * rnd());
    t += 0.03 + 0.11 * rnd();
  }
  return normalize(d);
}

// a singing bowl struck with a padded mallet: long and almost pure. Ratios,
// levels and decays are from five strikes of one real bowl (a public-domain
// recording, measured late in k74): 1 : 2.78 : 4.94 : 7.39, the second
// partial 2-9 dB under the first and ringing 6-8 s, the fourth gone in
// 0.6 s; the fundamental rings 20-45 s there and is faded here. Each
// partial is a pair a hair apart — no bowl is round — so it beats: the real
// strikes dip 6-8 dB a quarter second in and come back, about 2 Hz.
export function bowl(size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 4.6));
  const f0 = clamp(42 / (size + 0.02), 180, 700) * (0.96 + 0.08 * rnd());
  [[1, 0, 10], [2.78, -6, 6.5], [4.94, -15, 3], [7.39, -32, 0.6], [10.1, -40, 0.4]].forEach(([r, dB, t60], i) => {
    const f = f0 * r * (1 + 0.01 * (rnd() - 0.5)), a = 10 ** ((dB - 3 * rnd()) / 20), ph = rnd() * TAU;
    const beat = (0.5 + 2.2 * rnd()) * (1 + i * 0.6);
    addMode(d, sr, 0, f, a, t60 / 6.908, ph, 0.003);
    addMode(d, sr, 0, f + beat, a * (0.25 + 0.25 * rnd()), (t60 * (0.85 + 0.3 * rnd())) / 6.908, ph + rnd(), 0.003);
  });
  addNoise(d, sr, 0, 0.03, 0.2, { type: 'bp', f: f0 * 3, q: 0.8, tau: 0.006, attack: 0.001 }, rnd);
  return normalize(d);
}

// a bead curtain brushed: wooden and glass beads ticking against each
// other, a handful per buffer so the game can pile buffers into a flurry
export function bead(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.5));
  const n = 4 + Math.floor(rnd() * 5), glassy = rnd() < 0.4;
  for (let i = 0; i < n; i++) {
    const t = i === 0 ? 0 : Math.min(0.38, -Math.log(1 - rnd() * 0.95) * 0.09);
    const a = (i === 0 ? 1 : 0.35 + 0.65 * rnd()) * Math.exp(-t / 0.25);
    const g = rnd() < (glassy ? 0.7 : 0.2);
    const f = g ? 4200 + 4500 * rnd() : 1700 + 1900 * rnd();
    res(d, sr, t, f, g ? 0.03 + 0.03 * rnd() : 0.012 + 0.015 * rnd(), a, rnd, 0.0007);
    res(d, sr, t, f * (1.5 + 0.4 * rnd()), 0.01, a * 0.4, rnd, 0.0006);
    addNoise(d, sr, t, 0.003, a * 0.5, { type: 'hp', f: 3500, q: 0.7, tau: 0.0007 }, rnd);
  }
  return normalize(d, 0.7);
}

// a bone: dry, hollow, woody. The xylophone has stood in for bones since
// Saint-Saëns, and claves and a woodblock are what could be measured
// (resonance at 1.2-2.4 kHz, 16-22 dB down in 100 ms): a bar tone that dies
// in a fifth of a second over a dense knock
function boneHit(d, sr, t, f0, t60, amp, rnd) {
  res(d, sr, t, f0, t60, amp, rnd, 0.002);
  res(d, sr, t, f0 * 2.95, t60 * 0.55, amp * 0.35, rnd, 0.0015);
  res(d, sr, t, f0 * 5.8, t60 * 0.3, amp * 0.15, rnd, 0.001);
  band(d, sr, t, f0 * 1.05, 4, t60 * 0.6, amp * 0.8, rnd);
  addNoise(d, sr, t, 0.006, amp * 0.5, { type: 'bp', f: 3200, q: 0.7, tau: 0.0015 }, rnd);
}
const boneF = (size, rnd) => clamp(150 / (size + 0.03), 420, 2300) * (0.9 + 0.2 * rnd());
const boneT = (size) => clamp(0.12 + size * 0.5, 0.14, 0.3);
export function bone(size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.7));
  const f0 = boneF(size, rnd), t60 = boneT(size);
  boneHit(d, sr, 0, f0, t60, 1, rnd);
  // it rattles down: the same bone, a few more knocks closing in
  let gap = 0.07 + 0.07 * rnd(), t = gap, a = 0.45 + 0.2 * rnd();
  for (let b = 0, nb = 1 + Math.floor(rnd() * 3); b < nb; b++) {
    boneHit(d, sr, t, f0 * (0.97 + 0.06 * rnd()), t60, a, rnd);
    gap *= 0.5 + 0.2 * rnd(); t += gap; a *= 0.5;
  }
  if (size > 0.2) floorThud(d, sr, 0.002, size, 0.5, rnd);
  return normalize(d);
}
// a skeleton coming down: two dozen bones of every size knocking each other
// and the floor, thinning out, the big ones last — so it falls in pitch,
// which is the cartoon's xylophone run without being one
export function boneFall(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 1.9));
  const n = 18 + Math.floor(rnd() * 10);
  for (let i = 0; i < n; i++) {
    const t = i === 0 ? 0 : Math.min(1.35, -Math.log(1 - rnd() * 0.97) * 0.32);
    const size = 0.04 + 0.34 * rnd() * rnd() * (0.4 + t);
    boneHit(d, sr, t, boneF(size, rnd), boneT(size), Math.exp(-t / 0.7) * (0.4 + 0.6 * rnd()), rnd);
  }
  for (let i = 0; i < 3; i++) floorThud(d, sr, 0.08 + 0.6 * rnd(), 0.4, 0.5, rnd);
  crumbleInto(d, sr, 0.05, 50, 900, 4200, 0.004, 0.014, 0.5, 0.3, 0.5, rnd);
  return normalize(d);
}

// stone on stone: all contact and no ring — a hard bright tick over a dull
// dense tock, gone in 60 ms. Designed; no recording of rocks was reachable.
function stoneHit(d, sr, t, size, amp, rnd) {
  const f0 = clamp(140 / (size + 0.04), 500, 1900) * (0.85 + 0.3 * rnd());
  band(d, sr, t, f0, 2.2, 0.05 + size * 0.1, amp, rnd);
  band(d, sr, t, f0 * 2.7, 1.6, 0.03, amp * 0.5, rnd);
  addNoise(d, sr, t, 0.006, amp * 0.8, { type: 'hp', f: 2800, q: 0.7, tau: 0.0012 }, rnd);
  if (size > 0.12) {
    addMode(d, sr, t, 70 + 30 * rnd(), amp * 0.7, 0.04);
    addNoise(d, sr, t, 0.08, amp * 0.5, { type: 'lp', f: 260, q: 0.7, tau: 0.02 }, rnd);
  }
}
export function stone(size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.5));
  stoneHit(d, sr, 0, size, 1, rnd);
  if (rnd() < 0.8) stoneHit(d, sr, 0.06 + 0.08 * rnd(), size, 0.4 + 0.2 * rnd(), rnd);
  if (rnd() < 0.5) {
    // it grinds to rest: grit catching for a few hundredths
    let g = 1, until = 0, idx = 0;
    addNoise(d, sr, 0.03 + 0.05 * rnd(), 0.12, 0.25, { type: 'bp', f: 1500, q: 0.8, env: 'bell',
      am: () => { idx++; if (idx >= until) { g = rnd() < 0.6 ? 0.2 + 0.8 * rnd() : 0; until = idx + Math.round(sr * (0.002 + 0.006 * rnd())); } return g; } }, rnd);
  }
  return normalize(d);
}
// a balanced stack going over: rocks landing on rocks and the floor, grit after
export function stoneFall(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 1.5));
  const n = 6 + Math.floor(rnd() * 5);
  for (let i = 0; i < n; i++) {
    const t = i === 0 ? 0 : Math.min(1, -Math.log(1 - rnd() * 0.97) * 0.26);
    stoneHit(d, sr, t, 0.07 + 0.25 * rnd(), Math.exp(-t / 0.6) * (0.45 + 0.55 * rnd()), rnd);
  }
  crumbleInto(d, sr, 0.03, 70, 400, 3200, 0.004, 0.012, 0.45, 0.25, 0.45, rnd);
  return normalize(d);
}

// an exercise ball: the skin slaps, the air inside booms, and the pitch sags
// as it leaves the floor — a boing by way of a thud. Designed, unmeasured.
export function rubber(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.8));
  const f = 82 + 26 * rnd();
  const bounce = (t, a, k) => {
    addChirp(d, sr, t, f * 1.9 * k, f * k, 0.22, a, 0.07);
    // a phone speaker has nothing under ~300 Hz: the skin's own overtones
    // carry the boing there, the fundamental is for everything else
    addChirp(d, sr, t, f * 3.9 * k, f * 2.6 * k, 0.16, a * 0.9, 0.05);
    addChirp(d, sr, t, f * 6.3 * k, f * 4.4 * k, 0.12, a * 0.6, 0.035);
    addMode(d, sr, t, f * 0.75 * k, a * 0.8, 0.07);
    band(d, sr, t, 700, 0.8, 0.07, a * 0.8, rnd);
    band(d, sr, t + 0.002, 2400, 1, 0.04, a * 0.15, rnd);
  };
  bounce(0, 1, 1);
  if (rnd() < 0.7) bounce(0.27 + 0.1 * rnd(), 0.3 + 0.15 * rnd(), 1.05);
  return normalize(d);
}

// ---------------------------------------------------------- the courtroom ---
// Story mode's own sounds (wiki/game/story.md), keys ui:*. Each is baked at
// the level it should play at with gain 1; the engine keeps them on their
// own bus, outside the cats and destruction sliders and past the compressor.

// a hardwood head on a sounding block on a bench. The block is a woodblock
// lower and deader (measured woodblock: a 1.2-1.45 kHz cluster, 22 dB down
// in 100 ms); the bench answers underneath
function gavelRap(d, sr, t, amp, rnd, tune) {
  const f = 760 * tune;
  band(d, sr, t, f, 5, 0.14, amp, rnd);
  band(d, sr, t, f * 2.35, 4, 0.08, amp * 0.45, rnd);
  res(d, sr, t, f * 0.93, 0.18, amp * 0.55, rnd, 0.003);
  res(d, sr, t, f * 1.62, 0.11, amp * 0.3, rnd, 0.003);
  addNoise(d, sr, t, 0.008, amp * 0.6, { type: 'bp', f: 3000, q: 0.6, tau: 0.002 }, rnd);
  addMode(d, sr, t, 175 * (0.95 + 0.1 * rnd()), amp * 0.3, 0.035);
  band(d, sr, t, 240, 1, 0.12, amp * 0.3, rnd);
}
export function gavel(raps, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * (0.5 + 0.3 * (raps - 1))));
  const tune = 0.94 + 0.12 * rnd();
  let t = 0;
  for (let r = 0; r < raps; r++) {
    gavelRap(d, sr, t, r === 0 ? 1 : 0.8 + 0.15 * rnd(), rnd, tune * (1 + 0.02 * (rnd() - 0.5)));
    t += 0.19 + 0.05 * rnd();
  }
  return normalize(d, 0.9);
}

// "ka-ching" for a named exhibit: the key lever clacks, a small bell
// answers, the drawer's coins settle. The bell's partials are a bell-tree
// cup's, measured (1 : 2.2-2.3 : 3.4-3.9 : 4.7-5.7; T60 seconds at the
// bottom, 0.4 s by 11 kHz) and shortened so twenty in a row do not smear;
// each variant sits on its own note of a pentatonic, so a run of them is a
// small tune and not one sample repeating.
export function register(note, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.9));
  band(d, sr, 0, 1900 * (0.9 + 0.2 * rnd()), 2.5, 0.03, 0.55, rnd);
  addMode(d, sr, 0, 210 + 40 * rnd(), 0.4, 0.012);
  addNoise(d, sr, 0, 0.004, 0.4, { type: 'hp', f: 4000, q: 0.7, tau: 0.001 }, rnd);
  const t = 0.055 + 0.02 * rnd(), f = 2093 * PENTA[note % PENTA.length] * (1 + 0.004 * (rnd() - 0.5));
  for (const [r, dB, t60] of [[1, -4, 0.55], [2.25, 0, 0.6], [3.6, -5, 0.4], [5.2, -12, 0.25], [6.9, -20, 0.15]]) {
    const a = 10 ** ((dB - 3 * rnd()) / 20), fr = f * r * (1 + 0.012 * (rnd() - 0.5));
    res(d, sr, t, fr, t60, a, rnd, 0.0006);
    if (r < 3) res(d, sr, t, fr * (1 + 0.0015 + 0.002 * rnd()), t60 * 0.9, a * 0.5, rnd, 0.0006);
  }
  addNoise(d, sr, t, 0.004, 0.3, { type: 'hp', f: 6000, q: 0.7, tau: 0.0008 }, rnd);
  for (let i = 0, n = 3 + Math.floor(rnd() * 3); i < n; i++) res(d, sr, t + 0.09 + 0.22 * rnd(), 5000 + 4500 * rnd(), 0.02 + 0.04 * rnd(), 0.07 + 0.08 * rnd(), rnd, 0.0006);
  return normalize(d, 0.5);
}

// the adding machine printing a line of the total: a solenoid tick and the
// platen's knock, short enough to retrigger at 20 a second. Anchored on
// ESC-50's mouse clicks and typing (centroid 2.6-4.2 kHz, 20 dB down in
// ~20 ms)
export function tick(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.09));
  const k = (t, a) => {
    band(d, sr, t, 2600 * (0.85 + 0.3 * rnd()), 1.8, 0.035, a, rnd);
    res(d, sr, t, 900 * (0.9 + 0.2 * rnd()), 0.03, a * 0.5, rnd, 0.001);
    addNoise(d, sr, t, 0.003, a * 0.7, { type: 'hp', f: 5000, q: 0.7, tau: 0.0006 }, rnd);
  };
  k(0, 1);
  k(0.012 + 0.008 * rnd(), 0.35 + 0.2 * rnd());
  return normalize(d, 0.32);
}

// a stenotype chord: two or three padded keys bottoming out together,
// softer and lower than typing
export function steno(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.1));
  for (let i = 0, n = 2 + Math.floor(rnd() * 2); i < n; i++) {
    const t = i === 0 ? 0 : 0.008 * rnd(), a = i === 0 ? 1 : 0.5 + 0.4 * rnd();
    band(d, sr, t, 1300 * (0.8 + 0.4 * rnd()), 1.5, 0.03, a, rnd);
    addNoise(d, sr, t, 0.03, a * 0.6, { type: 'lp', f: 420, q: 0.7, tau: 0.008 }, rnd);
    addNoise(d, sr, t, 0.002, a * 0.25, { type: 'hp', f: 4000, q: 0.7, tau: 0.0005 }, rnd);
  }
  return normalize(d, 0.25);
}

// the verdict: a rubber stamp brought down on paper on a desk — the
// handle's knock, the pad's slap, the desk booming under it, and the tacky
// lift a moment later
export function stamp(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.5));
  addMode(d, sr, 0, 140 * (0.92 + 0.16 * rnd()), 0.4, 0.03);
  addMode(d, sr, 0, 260 * (0.92 + 0.16 * rnd()), 0.35, 0.022);
  band(d, sr, 0, 420, 0.9, 0.12, 0.8, rnd);
  band(d, sr, 0, 760 * (0.9 + 0.2 * rnd()), 1.5, 0.09, 0.9, rnd);
  band(d, sr, 0, 1900 * (0.9 + 0.2 * rnd()), 1.5, 0.04, 0.45, rnd);
  addNoise(d, sr, 0, 0.012, 0.12, { type: 'hp', f: 3000, q: 0.7, tau: 0.004 }, rnd);
  addNoise(d, sr, 0.17 + 0.04 * rnd(), 0.03, 0.08, { type: 'bp', f: 2500, q: 1, env: 'bell' }, rnd);
  return normalize(d, 0.85);
}

// a page turned: the sheet's edge hissing through the air and crackling as
// it bends, a soft flap as it lands
export function page(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.6));
  const dur = 0.26 + 0.14 * rnd();
  let g = 1, until = 0, idx = 0;
  const crackle = () => { idx++; if (idx >= until) { g = rnd() < 0.45 ? 0.04 : 0.2 + 0.8 * rnd() * rnd(); until = idx + Math.round(sr * (0.002 + 0.014 * rnd())); } return g; };
  addNoise(d, sr, 0, dur, 0.5, { type: 'bp', f: 1500 + 400 * rnd(), f1: 3000 + 800 * rnd(), q: 1, env: 'bell', am: crackle }, rnd);
  for (let i = 0, n = 8 + Math.floor(rnd() * 8); i < n; i++) addNoise(d, sr, dur * rnd(), 0.01, 0.4 + 0.6 * rnd(), { type: 'bp', f: 1500 + 2200 * rnd(), q: 1.3, tau: 0.0025, attack: 0.001 }, rnd);
  addNoise(d, sr, dur - 0.03, 0.05, 0.45, { type: 'lp', f: 700, q: 0.7, env: 'bell' }, rnd);
  band(d, sr, dur - 0.02, 1500, 1, 0.04, 0.3, rnd);
  return normalize(d, 0.35);
}

// the gallery: ten people talking low at once, no word of it legible. Each
// voice is a buzz through two moving formants, switched on and off in
// syllables, phrases and silences, then all of it rolled off the way speech
// is across a room. Designed from how speech is built; no recording of a
// crowd was reachable. One loop: the tail is crossfaded into the head.
export function murmur(seed, sr) {
  const rnd = mulberry32(seed);
  const L = Math.round(7.4 * sr), X = Math.round(0.6 * sr), N = L + X, B = 64;
  const acc = new Float32Array(N);
  for (let v = 0; v < 10; v++) {
    const f0b = rnd() < 0.6 ? 95 + 40 * rnd() : 170 + 50 * rnd(), level = 0.45 + 0.55 * rnd();
    let ph = rnd(), talking = rnd() < 0.6, left = rnd() * 1.5, syl = 0;
    let F1 = 500, F2 = 1500, tF1 = 500, tF2 = 1500, A = 0, tA = 0, bend = 1, cons = 0, into = 1, tInto = 1;
    let a1 = 0, a2 = 0, b1 = 0, b2 = 0, c1 = 0, c2 = 0, e1 = 0, e2 = 0;
    for (let i = 0; i < N; i += B) {
      const dt = B / sr;
      left -= dt; syl -= dt;
      if (left <= 0) { talking = !talking; left = talking ? 0.8 + 2.4 * rnd() : 0.4 + 2.2 * rnd(); bend = 1.08 + 0.1 * rnd(); }
      if (syl <= 0) {
        syl = 0.12 + 0.14 * rnd();
        tF1 = 300 + 450 * rnd(); tF2 = 900 + 1300 * rnd();
        tA = talking && rnd() < 0.85 ? 0.35 + 0.65 * rnd() : 0;
        tInto = 0.88 + 0.27 * rnd(); // each syllable has its own pitch: a held one is a hum, not talk
        cons = talking && rnd() < 0.3 ? 0.03 : 0;
      }
      const k = 1 - Math.exp(-dt / 0.03);
      F1 += (tF1 - F1) * k; F2 += (tF2 - F2) * k; A += (tA - A) * (1 - Math.exp(-dt / 0.025)); into += (tInto - into) * k;
      if (talking) bend += (0.9 - bend) * dt * 0.5; // a phrase's pitch sinks as it goes
      const f = f0b * bend * into, k1 = coef('bp', F1, 4, sr), k2 = coef('bp', F2, 6, sr);
      cons -= dt;
      for (let s = 0; s < B && i + s < N; s++) {
        ph += f / sr; if (ph >= 1) ph -= 1;
        const x = (2 * ph - 1) * A + (cons > 0 ? (rnd() * 2 - 1) * 0.5 * A : 0);
        const y = k1[0] * x + k1[1] * a1 + k1[2] * a2 - k1[3] * b1 - k1[4] * b2;
        a2 = a1; a1 = x; b2 = b1; b1 = y;
        const z = k2[0] * x + k2[1] * c1 + k2[2] * c2 - k2[3] * e1 - k2[4] * e2;
        c2 = c1; c1 = x; e2 = e1; e1 = z;
        acc[i + s] += (y + 0.45 * z) * level;
      }
    }
  }
  // across the room: nothing under 110 Hz, little over 1.6 kHz
  const hp = coef('hp', 110, 0.7, sr), lp = coef('lp', 1600, 0.6, sr);
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0, p1 = 0, p2 = 0, q1 = 0, q2 = 0;
  for (let i = 0; i < N; i++) {
    const x = acc[i], y = hp[0] * x + hp[1] * x1 + hp[2] * x2 - hp[3] * y1 - hp[4] * y2;
    x2 = x1; x1 = x; y2 = y1; y1 = y;
    const z = lp[0] * y + lp[1] * p1 + lp[2] * p2 - lp[3] * q1 - lp[4] * q2;
    p2 = p1; p1 = y; q2 = q1; q1 = z;
    acc[i] = z;
  }
  const d = new Float32Array(L);
  let m = 0;
  for (let i = 0; i < L; i++) {
    d[i] = i < X ? acc[i] * Math.sqrt(i / X) + acc[L + i] * Math.sqrt(1 - i / X) : acc[i];
    m = Math.max(m, Math.abs(d[i]));
  }
  for (let i = 0; i < L; i++) d[i] *= 0.3 / (m || 1);
  return d; // full length: the loop needs the exact cycle
}

// ------------------------------------------------------------ cat voice ---
// pts: [[u, v...]] piecewise over normalized time u in [0,1]
function at(pts, u, j) {
  if (u <= pts[0][0]) return pts[0][j];
  for (let i = 1; i < pts.length; i++) {
    if (u <= pts[i][0]) {
      const a = pts[i - 1], b = pts[i];
      const w = (u - a[0]) / Math.max(1e-6, b[0] - a[0]);
      const s = w * w * (3 - 2 * w); // eased
      return a[j] + (b[j] - a[j]) * s;
    }
  }
  return pts[pts.length - 1][j];
}

// ------------------------------------------------------------ cat voices ---
// Fitted to real cats, not guessed (k63). Every table and target below was
// measured from recordings: ESC-50's cat class plus a public animal-sound
// set on GitHub, 232 clips, analysis only — no recording ships, and the
// tables are medians over 20-38 calls, so no single cat is in here. Method
// and numbers: wiki/research/cat-voice.md.
//
// Real meows sort into three shapes (k-means on pitch + brightness paths,
// 85 clean calls from 49 recordings):
//   A "mee-ow"  45%  starts dark, opens bright by u~0.3, closes from u~0.8
//   B "yeow"    26%  starts open and closes all the way through
//   C "mrr-ow?" 24%  dark throughout, pitch rising at the end
// ENV rows are u = 0, .1 ... 1; columns are harmonic level in dB re the
// frame's loudest, on a 0.19-octave grid from 513 Hz to 6.56 kHz.
const ENV_LO = 300 * 25 ** (4 / 24), ENV_STEP = Math.log2(25) / 24, ENV_N = 20;
const ENV = {
  A: [
    [0, -1, -2, -2, -3, -4, -6, -8, -11, -15, -18, -22, -25, -28, -29, -30, -34, -38, -40, -41],
    [0, -2, -4, -2, -1, -2, -3, -4, -5, -6, -9, -14, -17, -20, -23, -27, -30, -33, -37, -42],
    [-2, -3, -3, -2, -1, -1, -1, -1, 0, 0, -2, -7, -11, -14, -19, -24, -28, -31, -34, -40],
    [-3, -4, -5, -4, -3, -3, -2, -2, -1, 0, -1, -4, -9, -14, -19, -24, -28, -32, -34, -36],
    [-4, -4, -4, -3, -2, -2, -2, -1, -1, 0, -1, -4, -9, -14, -19, -25, -30, -33, -34, -36],
    [-4, -4, -4, -4, -4, -4, -2, -1, 0, 0, -1, -6, -11, -15, -20, -26, -32, -34, -35, -37],
    [-4, -4, -5, -6, -5, -4, -2, -1, 0, 0, -2, -6, -12, -17, -23, -29, -34, -36, -37, -39],
    [-2, -3, -4, -4, -4, -3, -2, 0, 0, -1, -4, -8, -13, -19, -26, -32, -37, -39, -38, -39],
    [0, -1, -2, -2, -2, -2, -2, -2, -2, -4, -6, -11, -16, -21, -27, -33, -37, -38, -41, -47],
    [0, -1, -3, -3, -4, -4, -4, -6, -8, -11, -14, -18, -21, -25, -29, -31, -34, -38, -42, -46],
    [0, -2, -3, -4, -5, -5, -6, -8, -11, -14, -16, -18, -20, -23, -25, -28, -31, -36, -40, -41],
  ],
  B: [
    [-6, -5, -3, -1, 0, 0, -2, -3, -2, -1, -2, -4, -8, -12, -14, -20, -27, -30, -36, -46],
    [-15, -12, -4, 0, -1, -1, 0, 0, 0, 0, 0, -1, -5, -9, -13, -21, -29, -33, -37, -44],
    [-17, -13, -8, -5, -4, -2, -1, 0, 0, 0, -1, -4, -10, -14, -17, -24, -31, -37, -41, -42],
    [-18, -16, -10, -6, -3, -1, 0, 0, 0, -1, -3, -7, -14, -20, -23, -29, -35, -40, -44, -43],
    [-13, -12, -8, -4, -1, 0, 0, -1, -2, -4, -8, -13, -20, -24, -27, -31, -34, -36, -40, -47],
    [-9, -8, -6, -3, -1, 0, 0, -1, -2, -4, -9, -16, -22, -26, -28, -32, -35, -35, -37, -42],
    [-8, -7, -6, -3, -1, 0, -1, -2, -5, -9, -13, -19, -25, -28, -30, -35, -37, -36, -39, -47],
    [-6, -5, -4, -2, -1, 0, -1, -4, -7, -11, -15, -22, -27, -30, -32, -37, -42, -41, -40, -41],
    [-5, -3, -2, -1, 0, 0, -2, -4, -7, -10, -15, -21, -26, -29, -33, -38, -42, -42, -43, -48],
    [0, 0, 0, 0, 0, -1, -4, -7, -10, -13, -16, -21, -25, -28, -32, -37, -38, -38, -39, -40],
    [-1, 0, -1, -2, -2, -4, -6, -9, -12, -14, -16, -19, -22, -25, -29, -34, -37, -36, -33, -34],
  ],
  C: [
    [0, -3, -4, -6, -9, -11, -12, -11, -12, -16, -23, -28, -32, -37, -38, -40, -44, -46, -47, -46],
    [-1, 0, 0, -1, -3, -4, -5, -7, -9, -14, -22, -30, -38, -43, -45, -48, -52, -55, -55, -52],
    [-1, 0, 0, -2, -3, -4, -6, -8, -12, -19, -26, -32, -40, -46, -47, -46, -49, -51, -51, -50],
    [-1, 0, 0, 0, -1, -2, -3, -4, -8, -15, -24, -32, -39, -44, -49, -51, -52, -52, -50, -52],
    [0, 0, 0, -1, -1, -1, -2, -4, -9, -15, -21, -28, -35, -40, -42, -45, -49, -50, -51, -53],
    [-2, -2, -1, 0, 0, -1, -2, -5, -9, -16, -23, -31, -37, -41, -43, -44, -45, -48, -50, -50],
    [-2, -1, -1, 0, 0, -1, -3, -6, -10, -17, -25, -31, -36, -41, -45, -47, -49, -50, -50, -50],
    [0, 0, 0, -1, 0, 0, -1, -3, -6, -10, -16, -26, -37, -44, -44, -44, -46, -50, -51, -50],
    [-1, -1, 0, 0, 0, 0, -1, -2, -4, -8, -13, -21, -32, -39, -40, -40, -44, -49, -48, -47],
    [0, 0, 0, 0, -1, -3, -4, -6, -8, -11, -15, -22, -29, -34, -36, -35, -36, -38, -39, -42],
    [0, 0, -1, -1, -1, -1, -3, -5, -8, -10, -13, -19, -24, -27, -30, -30, -30, -32, -33, -37],
  ],
};
const LEV = { A: [-19, -6, -4, -4, -3, -3, -4, -4, -8, -13, -21], B: [-14, -6, -6, -6, -7, -9, -5, -7, -10, -18, -24], C: [-12, -7, -6, -6, -4, -4, -5, -7, -8, -14, -27] };
const F0P = { A: [0.975, 0.983, 1.0, 1.014, 1.01, 1.004, 1.002, 0.993, 0.968, 0.944, 0.898], B: [1.038, 1.012, 1.0, 0.999, 1.0, 0.99, 0.969, 0.981, 0.969, 0.951, 0.942], C: [0.995, 0.998, 0.983, 0.96, 0.964, 0.995, 1.031, 1.061, 1.096, 1.079, 1.07] };
// what the old formant voice got wrong, by measurement: pitch swung 1.8x
// inside a call (real median 1.25x), a sine vibrato (real: irregular
// 4-8 Hz drift, ~15 cents, plus ~5 cents of jitter), breath hiss ~18 dB
// under the harmonics (real HNR ~38 dB), formants at 2.4-3.9 kHz (real
// energy sits at 0.9-2 kHz and falls ~25 dB/octave above it)

function envRow(r, x) {
  if (x <= 0) return r[0];
  if (x >= ENV_N - 1) return r[ENV_N - 1] - 4 * (x - (ENV_N - 1));
  const j = Math.floor(x), w = x - j;
  return r[j] + (r[j + 1] - r[j]) * w;
}
// each shape's time-mean row: the vowel's motion is measured against it.
// A median over 20-38 calls blurs each call's opening and closing (their
// timing differs), so a single call plays the motion back at `contrast`
// (1.4 puts our brightness path on the real calls' median path)
const ENV_MEAN = Object.fromEntries(Object.entries(ENV).map(([k, t]) => [k, t[0].map((_, j) => t.reduce((a, r) => a + r[j], 0) / t.length)]));
function envDb(tab, u, f, mean, contrast = 1) {
  const x = Math.log2(f / ENV_LO) / ENV_STEP;
  const tu = clamp(u, 0, 1) * 10, t0 = Math.min(9, Math.floor(tu)), w = tu - t0;
  const v = envRow(tab[t0], x) * (1 - w) + envRow(tab[t0 + 1], x) * w;
  if (contrast === 1) return v;
  const m = envRow(mean, x);
  return m + (v - m) * contrast;
}
// env path: [[u, shape, uInShape], ...] blends shapes over the call (a
// mrrow is a C-dark trill that opens into an A body)
function envAt(path, u, f, c = 1) {
  let i = 0;
  while (i < path.length - 2 && u > path[i + 1][0]) i++;
  const a = path[i], b = path[i + 1];
  const w = clamp((u - a[0]) / Math.max(1e-6, b[0] - a[0]), 0, 1);
  const uu = a[2] + (b[2] - a[2]) * w;
  const da = envDb(ENV[a[1]], uu, f, ENV_MEAN[a[1]], c);
  return a[1] === b[1] ? da : da + (envDb(ENV[b[1]], uu, f, ENV_MEAN[b[1]], c) - da) * w;
}
const lerpPath = (p, u) => {
  const x = clamp(u, 0, 1) * (p.length - 1), i = Math.min(p.length - 2, Math.floor(x)), w = x - i;
  return p[i] + (p[i + 1] - p[i]) * w;
};

// additive voice: each harmonic is a phasor whose level is read off the
// measured envelope at its own frequency, so the vowel moves the way real
// mouths move it. sp: {dur, f0, f0p, lev, env, scale, hnr, breathy,
// wobble, jitter, tilt, am:{rate,depth,deep,u0,u1}, sub:{u0,u1,d},
// voiced, noiseAmp, gain}
const KM = 40;
function vox(d, sr, t0, sp, rnd) {
  const n = Math.floor(sp.dur * sr), i0 = Math.round(t0 * sr);
  if (n <= 0 || i0 >= d.length) return;
  const B = 32, fmax = Math.min(9500, sr * 0.45);
  const re = new Float64Array(KM + 1), im = new Float64Array(KM + 1), amp = new Float64Array(KM + 1);
  const da = new Float64Array(KM + 1), cr = new Float64Array(KM + 1), ci = new Float64Array(KM + 1);
  for (let k = 1; k <= KM; k++) { const p = rnd() * TAU; re[k] = Math.cos(p); im[k] = Math.sin(p); }
  // this call's own timbre: a gentle ripple over log-frequency, the formant
  // detail the medians average away
  // (single real calls stripe +-4-6 dB across frequency; the medians are smooth)
  const rip = [0, 1, 2].map(() => [2.2 + rnd() * 1.8, 0.45 + rnd() * 0.55, rnd() * TAU, (rnd() - 0.5) * 3]);
  const ripple = (f, u) => { let s = 0; for (const [a, p, ph, dr] of rip) s += a * Math.sin((TAU * Math.log2(f)) / p + ph + dr * u); return s; };
  const wobs = [0, 1, 2].map(() => [3 + rnd() * 5, rnd() * TAU]);
  const scale = sp.scale ?? 1, voiced = sp.voiced ?? 1, tilt = sp.tilt ?? 0, contrast = sp.contrast ?? 1;
  const env = sp.env, wobC = sp.wobble ?? 12, jitC = sp.jitter ?? 4;
  const am = sp.am, sub = sp.sub, gain = sp.gain ?? 1;
  // aspiration filter: band-pass at the voice's brightness, then two
  // low-passes an octave up — real cat noise falls as steeply as the
  // harmonics do (a lone band-pass left a flat hiss over 3 kHz)
  let nk = coef('bp', 1500, 0.7, sr), lk = coef('lp', 3000, 0.7, sr), x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  let p1 = 0, p2 = 0, q1 = 0, q2 = 0, r1 = 0, r2 = 0, s1 = 0, s2 = 0;
  let amJ = 1, ph1 = 0, amPh = rnd() * TAU, shim = 0, nA = 0, dnA = 0, L = 0, dL = 0, f = sp.f0, jv = 0;
  // jitter: white noise one-pole'd to ~25 Hz, scaled to jitC cents RMS
  const jA = Math.exp((-TAU * 25 * B) / sr), jN = Math.sqrt((3 * (1 + jA)) / (1 - jA));
  // and cycle-to-cycle irregularity: a fresh period jitter (cents) and
  // shimmer (dB) every glottal cycle. This is what blurs real cats' upper
  // harmonics; without it every harmonic is a ruled line
  const jitP = sp.jitP ?? 9, shimP = sp.shimP ?? 0.7;
  let cyc = 0, pj = 0, ps = 0;
  const fade = Math.max(1, Math.round(0.004 * sr)), subPh = rnd() * TAU;
  for (let i = 0; i < n && i0 + i < d.length; i += B) {
    const u = i / n, tt = i / sr;
    let wc = 0;
    for (const [r, p] of wobs) wc += Math.sin(TAU * r * tt + p);
    jv = jv * jA + (rnd() * 2 - 1) * (1 - jA);
    if (ph1 >= cyc) { cyc = ph1 + TAU; pj = (rnd() + rnd() + rnd() - 1.5) * 2 * jitP; ps = (rnd() + rnd() + rnd() - 1.5) * 2 * shimP; }
    const cents = wc * wobC * 0.8165 + jv * jN * jitC + pj;
    f = sp.f0 * lerpPath(sp.f0p, u) * 2 ** (cents / 1200);
    shim = shim * 0.92 + (rnd() - 0.5) * 0.15;
    const Lt = 10 ** ((lerpPath(sp.lev, u) + shim + ps) / 20);
    const KK = Math.min(KM, Math.floor(fmax / f));
    let pw = 0, cen = 0;
    for (let k = 1; k <= KM; k++) {
      let a = 0;
      if (k <= KK) {
        const fk = k * f, fe = fk / scale;
        a = voiced * 10 ** ((envAt(env, u, fe, contrast) + ripple(fe, u) + tilt * Math.log2(fe / 1000)) / 20);
        const w = (TAU * fk) / sr;
        cr[k] = Math.cos(w); ci[k] = Math.sin(w);
        pw += a * a; cen += a * a * fk;
      }
      da[k] = (a - amp[k]) / B;
    }
    // aspiration: noise centred on the voice's own brightness, HNR ~33 dB
    // in the body; a breathy onset starts ~20 dB noisier
    const fc = clamp(pw > 0 ? cen / pw : 2000, 700, 4000);
    nk = coef('bp', fc, 0.7, sr); lk = coef('lp', fc * 2, 0.7, sr);
    const gN = 1 / Math.sqrt((1 / 3) * (Math.PI / 2) * (fc / 0.9) / (sr / 2));
    let hnr = sp.hnr ?? 33;
    if (sp.breathy) hnr -= sp.breathy * clamp(1 - u / 0.14, 0, 1);
    const nT = gN * (voiced ? Math.sqrt(pw / 2) * 10 ** (-hnr / 20) : (sp.noiseAmp ?? 0.3));
    dnA = (nT - nA) / B; dL = (Lt - L) / B;
    for (let s = 0; s < B; s++) {
      const ii = i + s;
      if (ii >= n || i0 + ii >= d.length) break;
      let acc = 0;
      for (let k = 1; k <= KM; k++) {
        if (amp[k] === 0 && da[k] === 0) continue;
        const r = re[k] * cr[k] - im[k] * ci[k];
        im[k] = re[k] * ci[k] + im[k] * cr[k]; re[k] = r;
        amp[k] += da[k];
        acc += amp[k] * im[k];
      }
      ph1 += (TAU * f) / sr;
      let g = 1;
      if (sub && u >= sub.u0 && u <= sub.u1) {
        // period doubling, the roughness real cats slip into mid-call
        const w = Math.sin((Math.PI * (u - sub.u0)) / (sub.u1 - sub.u0));
        g *= 1 + sub.d * w * Math.cos(ph1 / 2 + subPh);
      }
      if (am && u >= am.u0 && u <= am.u1) {
        if (amPh >= TAU) { amPh -= TAU; amJ = 1 + (rnd() - 0.5) * 2 * (am.irr ?? 0.04); }
        amPh += (TAU * am.rate * amJ) / sr;
        const edge = Math.min(1, (u - am.u0) / 0.06, (am.u1 - u) / 0.06);
        const c = 0.5 + 0.5 * Math.cos(amPh);
        g *= 1 - am.depth * edge * (1 - (am.deep ? c * c * c : c));
      }
      const x = rnd() * 2 - 1;
      const y0 = nk[0] * x + nk[1] * x1 + nk[2] * x2 - nk[3] * y1 - nk[4] * y2;
      x2 = x1; x1 = x; y2 = y1; y1 = y0;
      const y3 = lk[0] * y0 + lk[1] * p1 + lk[2] * p2 - lk[3] * q1 - lk[4] * q2;
      p2 = p1; p1 = y0; q2 = q1; q1 = y3;
      const y = lk[0] * y3 + lk[1] * r1 + lk[2] * r2 - lk[3] * s1 - lk[4] * s2;
      r2 = r1; r1 = y3; s2 = s1; s1 = y;
      nA += dnA; L += dL;
      const e = Math.min(1, ii / fade, (n - ii) / fade);
      d[i0 + ii] += (acc * g + y * nA * (am && am.deep ? g : 1)) * L * e * gain;
    }
    for (let k = 1; k <= KM; k++) { const m = Math.hypot(re[k], im[k]) || 1; re[k] /= m; im[k] /= m; }
  }
}

const shapePath = (s) => [[0, s, 0], [1, s, 1]];
// a per-call pitch path: the shape's measured median, bent by one slow arch
// and one wiggle (individual meows range ~1.25x; the median is flatter)
function bendPath(p, rnd, a1 = 0.17, a2 = 0.06) {
  // the arch leans rise-then-fall (most single calls do), rarely a dip
  const b1 = (rnd() * 1.3 - 0.3) * a1, b2 = (rnd() * 2 - 1) * a2, ph = rnd() * TAU;
  return p.map((v, i) => { const u = i / (p.length - 1); return v * (1 + b1 * Math.sin(Math.PI * u) + b2 * Math.sin(TAU * u + ph)); });
}
const logn = (rnd, m, s) => m * Math.exp(s * (rnd() + rnd() + rnd() - 1.5) * 1.15);

// A cat's character: what makes three cats three voices. f0 scales pitch,
// tract the vocal tract (under 1 = a longer throat: every formant lower, so
// "rounder"), tilt is dB/octave of brightness, len stretches calls, breath
// and rough move how often a call starts breathy or slips into roughness,
// shapes is the A/B/C mix of meows. Rate-shifting one voice (what the
// viewer did) moves pitch, formants and length together, which is a tape
// speed, not another cat. The numbers are designed, inside what the 85
// measured meows span (f0 p10-p90 401-843 Hz); no cat here was fitted to a
// real individual. A chonk is lower, rounder, slower and breathier.
export const CAT_CHARS = {
  std: { f0: 1, tract: 1, tilt: 0, len: 1, breath: 0, rough: 0 },
  chonk: { f0: 0.76, tract: 0.86, tilt: -2.5, len: 1.18, breath: 0.25, rough: 0.15 },
  kitten: { f0: 1.32, tract: 1.16, tilt: 1.5, len: 0.8, breath: 0.1, rough: -0.2 },
  talker: { f0: 0.94, tract: 1.04, tilt: 3, len: 1.15, breath: -0.2, rough: 0.25, shapes: [0.2, 0.7] },
  shy: { f0: 1.13, tract: 1.06, tilt: -1.5, len: 0.85, breath: 0.4, rough: -0.3 },
};

export function cat(kind, seed, sr, ch = CAT_CHARS.std) {
  const rnd = mulberry32(seed);
  const j = (x, p = 0.08) => x * (1 + (rnd() - 0.5) * 2 * p);
  if (kind === 'purr') return purr(seed, sr);
  const d = new Float32Array(Math.ceil(sr * 1.9));
  const common = () => ({
    scale: j(1, 0.07) * ch.tract, wobble: j(22, 0.3), jitter: j(9, 0.3), hnr: j(25, 0.08), contrast: 1.4,
    tilt: (rnd() - 0.5) * 5 + ch.tilt, // some cats are brighter than the median, some duller
    breathy: rnd() < 0.35 + ch.breath ? 16 + rnd() * 6 : 0,
    sub: rnd() < 0.3 + ch.rough ? { u0: 0.25 + rnd() * 0.2, u1: 0.5 + rnd() * 0.25, d: 0.25 + rnd() * 0.25 } : null,
  });
  // every call of this cat: its pitch and its pace
  const vox0 = vox;
  // eslint-disable-next-line no-shadow
  const voxC = (dd, srr, t0, sp, r) => vox0(dd, srr, t0, { ...sp, f0: sp.f0 * ch.f0, dur: sp.dur * ch.len }, r);
  if (kind === 'meow') {
    // "hey, keep playing": A or B shape, sometimes the questioning C
    const mix = ch.shapes || [0.5, 0.3], r = rnd(), s = r < mix[0] ? 'A' : r < mix[0] + mix[1] ? 'B' : 'C';
    voxC(d, sr, 0.005, {
      ...common(), dur: clamp(logn(rnd, 0.8, 0.22), 0.55, 1.15), f0: j(s === 'C' ? 640 : 575, 0.1),
      f0p: bendPath(F0P[s], rnd), lev: LEV[s], env: shapePath(s),
    }, rnd);
  } else if (kind === 'mew') {
    // short and higher: an A shape squeezed into a third of a second
    voxC(d, sr, 0.005, {
      ...common(), dur: j(0.4, 0.15), f0: j(740, 0.1), f0p: bendPath(F0P.A, rnd, 0.09, 0.04),
      lev: LEV.A, env: [[0, 'A', 0.05], [0.3, 'A', 0.35], [1, 'A', 1]], sub: null,
    }, rnd);
  } else if (kind === 'mrrow') {
    // a rolled "mrrr" (measured trills: 24-31 Hz, f0 380-430, dark) that
    // opens into an "-ow" arch, as in the real mrrows we looked at
    const tr = j(0.36, 0.12);
    voxC(d, sr, 0.005, {
      ...common(), dur: clamp(logn(rnd, 0.75, 0.15), 0.6, 0.95), f0: j(470, 0.08),
      f0p: [0.86, 0.87, 0.88, 0.9, 0.97, 1.06, 1.08, 1.05, 0.99, 0.93, 0.88].map((v) => v * j(1, 0.02)),
      lev: [-14, -7, -6, -6, -4, -2, -2, -3, -5, -10, -20],
      env: [[0, 'C', 0.1], [tr, 'C', 0.4], [tr + 0.15, 'A', 0.35], [1, 'A', 1]],
      am: { rate: j(28, 0.08), depth: 0.85, deep: true, irr: 0.12, u0: 0, u1: tr + 0.05 }, sub: null,
    }, rnd);
  } else if (kind === 'trill') {
    // the lock-on "brrrp?": low, dark, rolled, rising at the end (C)
    const deep = rnd() < 0.4;
    voxC(d, sr, 0.005, {
      ...common(), dur: j(0.42, 0.15), f0: j(415, 0.07), f0p: bendPath(F0P.C, rnd, 0.03, 0.02),
      lev: [-12, -5, -4, -4, -3, -3, -3, -4, -5, -9, -20], env: shapePath('C'), tilt: -4,
      am: { rate: j(27.5, 0.1), depth: deep ? 0.92 : 0.38, deep, u0: 0, u1: 1 }, sub: null, breathy: 0,
    }, rnd);
  } else if (kind === 'mrp') {
    // the pounce chirp: ~0.15 s, a fast rise then a little fall (published
    // chirp means: 0.15 s, F0 223-1190 Hz, mean 661 — Schötz 2013)
    voxC(d, sr, 0.004, {
      ...common(), dur: j(0.15, 0.15), f0: j(980, 0.1), f0p: [0.48, 0.7, 0.88, 0.98, 1, 0.98, 0.95, 0.92, 0.9, 0.88, 0.86],
      lev: [-16, -6, -2, 0, 0, -1, -2, -3, -5, -8, -16], env: [[0, 'B', 0], [1, 'A', 1]], sub: null,
    }, rnd);
  } else if (kind === 'chirp') {
    // the chirp at something out of reach: two to four voiced "ek"s. From
    // the one recording of it there is (a cat at a window, sound-samples.md):
    // 4-5 syllables a second, each about 90 ms, voiced near 700 Hz, bright
    // (centroid 1.6-2.3 kHz). Six syllables measured; treat as a sketch
    const nS = 2 + Math.floor(rnd() * 3), f = j(700, 0.06);
    let t = 0.005;
    for (let s = 0; s < nS; s++) {
      voxC(d, sr, t, {
        ...common(), dur: j(0.09, 0.15), f0: f * j(1, 0.04), f0p: [0.82, 0.95, 1.02, 1.04, 1.0, 0.94, 0.86],
        lev: [-14, -4, 0, 0, -2, -6, -16], env: [[0, 'B', 0.05], [1, 'B', 0.6]], tilt: 2 + ch.tilt, sub: null, breathy: 0,
        gain: 0.75 + 0.25 * rnd(),
      }, rnd);
      t += j(0.22, 0.12) * ch.len;
    }
  } else if (kind === 'chirrup') {
    // "mrrp?": the greeting — a short rolled trill that rises and opens
    // (the measured trill's pulse rate and darkness, a quarter second, the
    // pitch climbing a fifth). Designed from the trill; not measured as its
    // own call
    voxC(d, sr, 0.005, {
      ...common(), dur: j(0.26, 0.15), f0: j(470, 0.07), f0p: [0.86, 0.88, 0.92, 0.98, 1.06, 1.16, 1.27, 1.36, 1.42, 1.45, 1.44],
      lev: [-12, -5, -4, -3, -2, -1, 0, -1, -3, -8, -18], env: [[0, 'C', 0.2], [0.55, 'C', 0.6], [1, 'A', 0.4]],
      am: { rate: j(27, 0.1), depth: 0.7, deep: true, u0: 0, u1: 0.6 }, sub: null, breathy: 0,
    }, rnd);
  } else if (kind === 'squeak') {
    // the almost-silent mew: a fifth of a second, high, mostly breath
    voxC(d, sr, 0.005, {
      ...common(), dur: j(0.19, 0.15), f0: j(930, 0.08), f0p: bendPath(F0P.A, rnd, 0.06, 0.03),
      lev: [-16, -8, -5, -4, -4, -5, -6, -8, -11, -15, -22], env: [[0, 'A', 0.1], [1, 'A', 0.9]], hnr: 15, breathy: 18, sub: null,
    }, rnd);
  } else if (kind === 'chatter') {
    // the prey chatter at a dot. No recording of it was reachable (none in
    // either set), so this one is built from the published description —
    // "very quick stuttering or clicking sounds with the jaws juddering",
    // low-amplitude, mostly voiceless (Schötz 2013; Tavernier et al. 2020) —
    // with the voiced bits drawn from the measured chirp and B shape.
    // Unmeasured: syllable rate (8-11/s here) and the voiced share.
    const nS = 7 + Math.floor(rnd() * 6), ioi = j(0.1, 0.12), voicedShare = 0.45 + rnd() * 0.35;
    let t = 0.005;
    for (let s = 0; s < nS; s++) {
      const ph = s / (nS - 1), g = (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, ph * 1.6))) * j(1, 0.15);
      // the jaw clack: a short tick and a tooth "tock"
      addNoise(d, sr, t, 0.004, 0.45 * g, { type: 'bp', f: j(3000, 0.2), q: 1.1, tau: 0.0007 }, rnd);
      addMode(d, sr, t, j(1350, 0.15), 0.14 * g, 0.005);
      const r = rnd();
      if (r < 0.15) {
        // clack only: the jaw juddering shut on nothing
      } else if (r < 0.15 + voicedShare * 0.85) {
        voxC(d, sr, t + 0.004, {
          dur: j(0.032, 0.2), f0: j(820, 0.12), f0p: [1.08, 1.04, 0.98, 0.92, 0.88],
          lev: [-8, 0, -2, -7, -16], env: [[0, 'B', 0.05], [1, 'B', 0.5]], scale: j(1, 0.05),
          wobble: 8, jitter: 6, jitP: 25, shimP: 1.5, hnr: 14, breathy: 8, gain: 0.5 * g,
        }, rnd);
      } else {
        // voiceless "kh": breath through a closing mouth
        voxC(d, sr, t + 0.003, {
          dur: j(0.028, 0.2), f0: 700, f0p: [1, 1], lev: [-6, 0, -3, -12], env: shapePath('B'),
          voiced: 0, noiseAmp: 0.09 * g, wobble: 0, jitter: 0,
        }, rnd);
      }
      t += ioi * (0.88 + rnd() * 0.24);
    }
  }
  return normalize(d);
}

// purr: one loopable breath cycle, rebuilt from five real purrs. Measured:
// pulse rate 27-30 Hz; 85-96% of the energy under 60 Hz, harmonics of the
// pulse rate falling [0,-11,-7,-15,-20,-27,-31,-32] dB; the audible part
// is pulse-synced breath flutter, modulated only 3-5x (p90/p10 — soft, not
// gated); breath cycle 0.3-0.9 Hz. The old purr put 71% of its energy at
// 60-150 Hz in hard-gated 125 Hz buzzes — a motor, not a cat.
// Phone speakers drop the sub-60 Hz rumble, so the flutter sits at the
// bright end of the measured range (the recording with the most 60-400 Hz).
export function purr(seed, sr) {
  const rnd = mulberry32(seed);
  const L = Math.round(2.6 * sr), X = Math.round(0.06 * sr);
  const d = new Float32Array(L);
  const H = [0, -11, -7, -15, -20, -27, -31, -32, -35, -38, -41, -44].map((v) => 10 ** (v / 20));
  // near-coherent phases: each period is one soft pulse, as in the recordings
  const hp = H.map(() => (rnd() - 0.5) * 0.8);
  // exhale 0-1.5 s (louder, faster), inhale 1.56-2.54 s
  const bound = [0, 1.5, 1.56, 2.54, 2.6];
  const phaseAt = (t) => (t < 1.53 || t >= 2.57 ? 0 : 1);
  const level = (t) => {
    // dips (not silence) at the two breath turns
    const dist = Math.min(Math.abs(t - 1.53), Math.abs(t - 2.57), Math.abs(t + 0.03));
    const dip = 0.3 + 0.7 * clamp((dist - 0.01) / 0.07, 0, 1) ** 1.5;
    return (phaseAt(t) === 0 ? 1 : 0.62) * dip;
  };
  // pulse times: provisional periods, then scaled so the cycle closes exactly
  const T = [];
  let t = 0;
  while (t < 2.6) { const r = (phaseAt(t) === 0 ? 28.6 : 26.4) * (1 + (rnd() - 0.5) * 0.06); T.push(1 / r); t += 1 / r; }
  const k = 2.6 / T.reduce((a, b) => a + b, 0);
  const put = (i, v) => { d[((i % L) + L) % L] += v; };
  t = 0;
  for (const p0 of T) {
    const P = p0 * k, e = level(t);
    // the rumble: one period-long wavelet per pulse, Hann over two periods
    // (overlap-add of those is flat), harmonics at the measured levels
    const a = Math.round((t - P) * sr), b = Math.round((t + P) * sr);
    for (let i = a; i < b; i++) {
      const tau = i / sr - t, w = 0.5 + 0.5 * Math.cos((Math.PI * tau) / P);
      let s = 0;
      for (let h = 0; h < H.length; h++) s += H[h] * Math.cos((TAU * (h + 1) * tau) / P + hp[h]);
      put(i, s * w * e * 0.5);
    }
    t += P;
  }
  // the flutter: breath noise, pulse-synced but soft (p90/p10 ~4); rendered
  // past the cycle end and crossfaded into its head so the seam is silent
  const nz = new Float32Array(L + X);
  const bLo = coef('bp', 260, 0.55, sr), bHi = coef('bp', 800, 0.7, sr), lp = coef('lp', 1300, 0.6, sr);
  let a1 = 0, a2 = 0, c1 = 0, c2 = 0, e1 = 0, e2 = 0, f1 = 0, f2 = 0, g1 = 0, g2 = 0, h1 = 0, h2 = 0, k1 = 0, k2 = 0, l1 = 0, l2 = 0;
  // the breath noise goes quiet for ~0.3 s at each turn (the recordings
  // show it); the rumble only dips
  const turn = (t) => { const dd = Math.min(Math.abs(t - 1.53), Math.abs(t - 2.57), Math.abs(t + 0.03)); return 0.08 + 0.92 * clamp((dd - 0.05) / 0.14, 0, 1) ** 2; };
  const pulses = [];
  t = 0;
  for (const p0 of T) { pulses.push(t); t += p0 * k; }
  let pi = 0;
  for (let i = 0; i < L + X; i++) {
    const tt = (i / sr) % 2.6;
    while (pi + 1 < pulses.length && pulses[pi + 1] <= tt) pi++;
    if (tt < pulses[pi]) pi = 0;
    const P = (pi + 1 < pulses.length ? pulses[pi + 1] : 2.6) - pulses[pi];
    const ph = (tt - pulses[pi]) / P;
    const m = 0.1 + 0.9 * (0.5 + 0.5 * Math.cos(TAU * ph)) ** 4;
    const x = rnd() * 2 - 1;
    const y = bLo[0] * x + bLo[1] * a1 + bLo[2] * a2 - bLo[3] * c1 - bLo[4] * c2;
    a2 = a1; a1 = x; c2 = c1; c1 = y;
    const z = bHi[0] * x + bHi[1] * e1 + bHi[2] * e2 - bHi[3] * f1 - bHi[4] * f2;
    e2 = e1; e1 = x; f2 = f1; f1 = z;
    const inh = phaseAt(tt) === 1 ? 1.5 : 1; // the inhale is breathier
    // the recordings are dim over 1.5 kHz (4th-order low-pass on the sum)
    // with faint breath left to ~3 kHz
    const v = y * 1.5 + z * 0.14;
    const v1 = lp[0] * v + lp[1] * g1 + lp[2] * g2 - lp[3] * h1 - lp[4] * h2;
    g2 = g1; g1 = v; h2 = h1; h1 = v1;
    const v2 = lp[0] * v1 + lp[1] * k1 + lp[2] * k2 - lp[3] * l1 - lp[4] * l2;
    k2 = k1; k1 = v1; l2 = l1; l1 = v2;
    nz[i] = (v2 + z * 0.012) * m * level(tt) * turn(tt) * inh;
  }
  for (let i = 0; i < L; i++) {
    if (i < X) { const w = i / X; d[i] += nz[i] * Math.sqrt(w) + nz[L + i] * Math.sqrt(1 - w); }
    else d[i] += nz[i];
  }
  let mx = 0;
  for (let i = 0; i < L; i++) mx = Math.max(mx, Math.abs(d[i]));
  for (let i = 0; i < L; i++) d[i] *= 0.8 / (mx || 1);
  return d; // full length: the loop needs the exact cycle
}

// ---------------------------------------------------------------- rooms ---
// a stereo impulse response: early reflections, then a tail in three bands
// that decay at their own rates. rt60 (s) is the mid band's; bright 0..1 is
// how much of that the top keeps. Rooms hold their lows longest and lose
// their highs first, and by more the softer the room: the one-filter tail
// this replaces measured a median of 17% shorter at 8 kHz than at 125 Hz
// whatever the room (tools/sound/ir.mjs), where furnished rooms lose a
// third to a half; this one measures 26%, least in the tiled bathroom
export function roomIR(rt60, bright, sr, seed = 1) {
  const rnd = mulberry32(seed);
  const rtLo = rt60 * 1.2, rtHi = rt60 * (0.4 + 0.5 * bright), gHi = 0.5 + 0.5 * bright;
  const len = Math.ceil(sr * Math.min(2.2, rtLo));
  const out = [new Float32Array(len), new Float32Array(len)];
  const aLo = 1 - Math.exp((-TAU * 350) / sr), aHi = 1 - Math.exp((-TAU * 2500) / sr);
  for (let ch = 0; ch < 2; ch++) {
    const d = out[ch];
    for (let e = 0; e < 7; e++) {
      const t = 0.004 + rnd() * 0.035;
      const i = Math.round(t * sr);
      if (i < len) d[i] += (rnd() < 0.5 ? -1 : 1) * (0.5 - e * 0.05);
    }
    let lo = 0, lm = 0;
    const pre = Math.round(0.012 * sr);
    for (let i = pre; i < len; i++) {
      const t = i / sr, x = rnd() * 2 - 1;
      lo += aLo * (x - lo); lm += aHi * (x - lm);
      const ramp = Math.min(1, (i - pre) / (0.01 * sr));
      d[i] += (lo * Math.exp((-6.9 * t) / rtLo) + (lm - lo) * Math.exp((-6.9 * t) / rt60) + (x - lm) * gHi * Math.exp((-6.9 * t) / rtHi)) * 0.35 * ramp;
    }
    let e2 = 0;
    for (let i = 0; i < len; i++) e2 += d[i] * d[i];
    const k = 1 / Math.sqrt(e2 || 1);
    for (let i = 0; i < len; i++) d[i] *= k;
  }
  return out;
}
// room index -> [rt60, brightness]: tiles ring, carpet and couches eat it
export const ROOM_ACOUSTICS = [[0.45, 0.45], [0.75, 0.5], [1.0, 0.9], [0.6, 0.7], [1.5, 0.65], [1.25, 0.75], [0.55, 0.5], [0.55, 0.5], [0.75, 0.45], [0.6, 0.6],
  [1.15, 0.6], // 10 Red Dot Rampage: a big showroom, but wood underfoot and a floor full of upholstery
  [1.9, 0.72], // 11 museum: six stone rooms under a high ceiling
  [0.65, 0.5], // 12 studio: sprung wood, mats and cushions
];
// the courtroom the ui:* sounds sit in: panelled, high, a carpeted aisle
export const COURT_ACOUSTICS = [0.9, 0.55];

// ---------------------------------------------------------- the catalog ---
// every bank entry: [key, generator()]; 3 variants of most things, 4 of
// the hits and breaks a pile-up plays over and over
export function catalog(sr) {
  const L = [];
  // the seed's last term was the catalog's length read when a buffer was
  // built, so adding a key re-rolled every sound in the bank. Frozen at the
  // k66 catalog's 256 entries: what did not change still sounds as it did
  const VN = (n, key, gen) => { for (let v = 0; v < n; v++) L.push([key, () => gen(1000 + v * 7919 + 256 * 31)]); };
  const V3 = (key, gen) => VN(3, key, gen);
  for (const mat of ['wood', 'metal', 'glass', 'ceramic']) {
    SIZES.forEach((s, si) => VN(4, `hit:${mat}:${si}`, (seed) => impact(mat, s, seed, sr)));
  }
  for (const mat of ['soft', 'cardboard']) {
    SIZES.forEach((s, si) => V3(`hit:${mat}:${si}`, (seed) => impact(mat, s, seed, sr)));
  }
  V3('hit:ball:0', (seed) => impact('ball', 0.035, seed, sr));
  for (const [kind, sizes] of Object.entries(SHATTER_SIZES)) {
    sizes.forEach((s, si) => VN(kind === 'electric' ? 3 : 4, `shatter:${kind}:${si}`, (seed) => shatter(kind, s, seed, sr)));
  }
  V3('snap', (seed) => snap(seed, sr));
  for (const mat of ['wood', 'ceramic', 'glass']) V3(`crumble:${mat}`, (seed) => crumble(mat, seed, sr));
  L.push(['bed:0', () => bed(2.7, 77, sr)]);
  L.push(['bed:1', () => bed(3.6, 78, sr)]);
  V3('scratch:0', (seed) => scratch(0, seed, sr));
  V3('scratch:1', (seed) => scratch(2, seed, sr));
  for (let i = 0; i < 3; i++) V3(`splash:${i}`, (seed) => splash(i, seed, sr));
  V3('spark', (seed) => spark(seed, sr));
  V3('paw', (seed) => paw(seed, sr));
  V3('land', (seed) => land(seed, sr));
  V3('whoosh', (seed) => whoosh(seed, sr));
  for (const kind of ['meow', 'mew', 'mrrow', 'trill', 'chatter', 'mrp', 'chirp', 'chirrup', 'squeak']) {
    V3(`cat:${kind}`, (seed) => cat(kind, seed, sr));
    if (kind === 'meow' || kind === 'trill') V3(`cat:${kind}`, (seed) => cat(kind, seed + 17, sr));
  }
  L.push(['cat:purr', () => purr(4242, sr)]);
  // everything above is the core set: the worker reports 'ready' once it is
  // built, so the first tap waits no longer than it did before the entries
  // below existed. Those trail in behind it, the two slow ones last
  L.core = L.length;
  // the voices a mesh names for itself (userData.voice)
  VOICE_SIZES.chime.forEach((s, si) => V3(`hit:chime:${si}`, (seed) => chime(s, seed, sr)));
  VOICE_SIZES.bowl.forEach((s, si) => { for (let v = 0; v < 2; v++) L.push([`hit:bowl:${si}`, () => bowl(s, 6000 + si * 101 + v * 7919, sr)]); });
  for (let v = 0; v < 5; v++) L.push(['hit:bead:0', () => bead(7000 + v * 7919, sr)]);
  VOICE_SIZES.bone.forEach((s, si) => V3(`hit:bone:${si}`, (seed) => bone(s, seed, sr)));
  VOICE_SIZES.stone.forEach((s, si) => V3(`hit:stone:${si}`, (seed) => stone(s, seed, sr)));
  V3('hit:rubber:0', (seed) => rubber(seed, sr));
  V3('break:bone', (seed) => boneFall(seed, sr));
  V3('break:stone', (seed) => stoneFall(seed, sr));
  // the courtroom
  V3('ui:gavel', (seed) => gavel(1, seed, sr));
  V3('ui:gavel2', (seed) => gavel(2, seed, sr));
  for (let v = 0; v < 5; v++) L.push(['ui:register', () => register(v, 8000 + v * 7919, sr)]);
  for (let v = 0; v < 6; v++) L.push(['ui:tick', () => tick(8100 + v * 7919, sr)]);
  V3('ui:stamp', (seed) => stamp(seed, sr));
  for (let v = 0; v < 4; v++) L.push(['ui:page', () => page(8200 + v * 7919, sr)]);
  for (let v = 0; v < 6; v++) L.push(['ui:steno', () => steno(8300 + v * 7919, sr)]);
  L.push(['ui:murmur', () => murmur(8400, sr)]);
  for (let v = 0; v < 2; v++) L.push(['hit:gong:0', () => gong(5000 + v * 7919, sr)]);
  return L;
}

// ------------------------------------------------------------ on demand ---
// What the catalog cannot know ahead: this room's objects and this run's
// cats. The engine asks the worker for a key and gets its buffers back.
//   obj:<mat>:<a>:<b>:<c>   one object by its own full extents in mm
//                           (largest first): three blows at different points
//   cat:<kind>@<character>  a call kind in one of CAT_CHARS' voices
// Returns [] for a key it does not know.
export const CAT_KINDS = ['meow', 'mew', 'mrrow', 'trill', 'chatter', 'mrp', 'chirp', 'chirrup', 'squeak'];
const hashOf = (str) => { let h = 2166136261; for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619); return h >>> 0; };
export function make(key, sr) {
  const seed = hashOf(key) % 1000003;
  let m = /^obj:(\w+):(\d+):(\d+):(\d+)$/.exec(key);
  if (m && PHYS[m[1]]) return [0, 1, 2].map((v) => knock(m[1], [m[2] / 1000, m[3] / 1000, m[4] / 1000], seed + v * 7919, sr, false));
  m = /^cat:(\w+)@(\w+)$/.exec(key);
  if (m && CAT_KINDS.includes(m[1]) && CAT_CHARS[m[2]]) return [0, 1, 2].map((v) => cat(m[1], seed + v * 7919, sr, CAT_CHARS[m[2]]));
  return [];
}
// the key of an object: dims in any order, metres. Quantised to 15% steps
// so a shelf of near-identical mugs is one object, not thirty buffers
export function objKey(mat, dims) {
  const q = (x) => Math.round(1000 * Math.pow(1.15, Math.round(Math.log(clamp(x, 0.004, 4)) / Math.log(1.15))));
  const d = [...dims].sort((x, y) => y - x).map(q);
  return `obj:${mat}:${d[0]}:${d[1]}:${d[2]}`;
}
