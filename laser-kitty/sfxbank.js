// sfxbank.js — the procedural sample bank (founder: "better cat and
// destruction sounds"). Pure math: no Web Audio, no three.js, so it runs
// in a worker at load (sfxbank.worker.js) and in Node for offline renders.
// Every sound is authored here, so the bank is license-free by
// construction and ships zero asset bytes.
//
// Destruction is MODAL: a hit excites a handful of decaying sinusoids
// whose ratios, decays and click hardness come from the material (wood,
// metal, glass, ceramic, soft, cardboard, ball), pitched by size, with a
// bounce. Breaks layer a crack transient over a shower of shard hits.
// Cat voices are ADDITIVE FORMANT synthesis: a harmonic source on a pitch
// contour, each harmonic weighted by three resonances that move through
// a vowel path (m-i-a-ow), with vibrato, jitter, trill AM and breath —
// cartoon-readable, never a distressed animal (research/audio.md).

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
// modes: [ratio, amp, tau (s)]; k / (size + 0.02) is the fundamental,
// clamped to [lo, hi]; tauScale(size) stretches the ring for bigger things;
// click: the contact transient (shorter + brighter = harder)
const MATS = {
  wood: { k: 32, lo: 60, hi: 900, modes: [[1, 1, 0.05], [2.57, 0.45, 0.03], [4.1, 0.25, 0.02], [6.3, 0.12, 0.012]],
    tauScale: (s) => clamp(0.7 + s * 2, 0.7, 2), click: { dur: 0.004, f: 1700, amp: 0.7 }, bounce: 0.35, body: 1 },
  metal: { k: 70, lo: 220, hi: 2600, modes: [[1, 1, 0.5], [2.76, 0.7, 0.38], [5.4, 0.5, 0.28], [8.93, 0.32, 0.2], [13.3, 0.2, 0.14]],
    tauScale: (s) => clamp(0.5 + s * 4, 0.5, 1.8), click: { dur: 0.002, f: 7000, amp: 0.3 }, bounce: 0.45, beat: 0.004 },
  glass: { k: 120, lo: 700, hi: 5200, modes: [[1, 1, 0.32], [2.32, 0.6, 0.22], [4.25, 0.4, 0.14], [6.63, 0.25, 0.09]],
    tauScale: (s) => clamp(0.8 + s * 2, 0.8, 1.6), click: { dur: 0.0015, f: 8000, amp: 0.3 }, bounce: 0.3 },
  ceramic: { k: 85, lo: 450, hi: 3600, modes: [[1, 1, 0.16], [2.1, 0.6, 0.11], [3.9, 0.4, 0.07], [5.7, 0.25, 0.045]],
    tauScale: (s) => clamp(0.8 + s * 2, 0.8, 1.6), click: { dur: 0.0025, f: 5500, amp: 0.45 }, bounce: 0.35 },
};

function hit(d, sr, t0, mat, size, amp, rnd) {
  const M = MATS[mat];
  const f0 = clamp(M.k / (size + 0.02), M.lo, M.hi) * (0.96 + 0.08 * rnd());
  const ts = M.tauScale(size);
  for (const [ratio, a, tau] of M.modes) {
    const f = f0 * ratio * (1 + 0.025 * (rnd() - 0.5));
    const aa = amp * a * (0.75 + 0.5 * rnd());
    addMode(d, sr, t0, f, aa, tau * ts, rnd() * TAU);
    if (M.beat && ratio < 3) addMode(d, sr, t0, f * (1 + M.beat), aa * 0.5, tau * ts, rnd() * TAU);
  }
  addNoise(d, sr, t0, M.click.dur * 3, amp * M.click.amp, { type: 'bp', f: M.click.f, q: 0.7, tau: M.click.dur }, rnd);
  // a knock is mostly the board's damped noise, not its ring
  if (M.body) addNoise(d, sr, t0, 0.06, amp * 0.9, { type: 'bp', f: f0 * 1.3, q: 1.2, tau: 0.018 }, rnd);
}

function floorThud(d, sr, t0, size, amp, rnd) {
  addMode(d, sr, t0, 52 + rnd() * 22, amp * 0.8, 0.09 + size * 0.15);
  addMode(d, sr, t0, 110 + rnd() * 30, amp * 0.3, 0.05);
  addNoise(d, sr, t0, 0.12, amp * 0.5, { type: 'lp', f: 320, q: 0.7, tau: 0.03 }, rnd);
}

export function impact(mat, size, seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * (mat === 'metal' ? 2.2 : mat === 'glass' ? 1.0 : 0.7)));
  if (mat === 'soft') {
    // a cushion, a towel, a cat bed: no ring, a fwump and a pat
    addNoise(d, sr, 0, 0.07, 1, { type: 'lp', f: 520 + 300 / (size + 0.2), q: 0.7, env: 'bell' }, rnd);
    addMode(d, sr, 0.004, 85 + 40 * rnd() + 10 / (size + 0.05), 0.6, 0.045);
    addNoise(d, sr, 0.09 + rnd() * 0.04, 0.05, 0.35, { type: 'lp', f: 700, q: 0.7, env: 'bell' }, rnd);
    if (size > 0.25) floorThud(d, sr, 0.0, size, 0.7, rnd);
  } else if (mat === 'cardboard') {
    // a hollow box: low boom of the air inside, a papery flap
    const fb = clamp(60 / (size + 0.08), 110, 600) * (0.95 + 0.1 * rnd());
    addNoise(d, sr, 0, 0.06, 1, { type: 'bp', f: fb * 2.2, q: 1.2, tau: 0.018 }, rnd);
    addMode(d, sr, 0, fb, 0.7, 0.05);
    addMode(d, sr, 0, fb * 2.4, 0.3, 0.03);
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
    hit(d, sr, 0, mat, size, 1, rnd);
    const M = MATS[mat];
    if (rnd() < 0.85) hit(d, sr, 0.055 + rnd() * 0.09, mat, size, M.bounce * (0.6 + 0.4 * rnd()), rnd);
    if (rnd() < 0.4) hit(d, sr, 0.17 + rnd() * 0.1, mat, size, M.bounce * 0.3, rnd);
    if (size > 0.25 && mat !== 'glass') floorThud(d, sr, 0.002, size, 0.9, rnd);
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
  const d = new Float32Array(Math.ceil(sr * 1.5));
  const big = clamp(size / 0.3, 0, 1);
  if (kind === 'ceramic') {
    // a mug, a plate, a vase: a mid crack, chunky pieces, a gritty crumble
    addNoise(d, sr, 0, 0.03, 1, { type: 'bp', f: 2200, q: 0.6, tau: 0.006 }, rnd);
    addNoise(d, sr, 0, 0.05, 0.55, { type: 'bp', f: 520, q: 0.8, tau: 0.014 }, rnd); // the body meets the floor
    for (let i = 0; i < 4 + Math.round(big * 4); i++) addMode(d, sr, 0.01 + rnd() * 0.25, 1400 + 1800 * rnd(), 0.25 * (1 - i * 0.08), 0.02 + 0.02 * rnd(), rnd() * TAU);
    crumbleInto(d, sr, 0.004, Math.round(90 + big * 260), 1200, 7000, 0.004, 0.016, 0.6, 0.1, 0.3, rnd);
    if (size > 0.08) floorThud(d, sr, 0, size, 0.5, rnd);
  } else {
    // glass: a broadband crack, one or two short pings, a dense crunch of
    // shards (2.5-12 kHz, rings of a few ms) thinning out, shards landing,
    // a glitter tail. Electric gear adds the zap and the buzz dying.
    addNoise(d, sr, 0, 0.02, 1, { type: 'hp', f: 1800, q: 0.7, tau: 0.004 }, rnd);
    addNoise(d, sr, 0, 0.06, 0.7, { type: 'bp', f: 450, q: 0.5, tau: 0.018 }, rnd); // what it lands on
    for (let i = 0; i < 1 + (rnd() < 0.5 ? 1 : 0); i++) addMode(d, sr, 0.002 * i, 4000 + 3000 * rnd(), 0.17, 0.03 + 0.03 * rnd(), rnd() * TAU);
    crumbleInto(d, sr, 0.003, Math.round(160 + big * 380), 3000, 16000, 0.0015, 0.007, 0.7, 0.11, 0.28, rnd);
    for (let i = 0; i < 6 + Math.round(big * 6); i++) {
      const t = 0.08 + rnd() * 0.6;
      addMode(d, sr, t, 4500 + 6500 * rnd(), 0.07 * Math.exp(-t / 0.4), 0.01 + 0.012 * rnd(), rnd() * TAU);
    }
    addNoise(d, sr, 0.02, 0.6, 0.05, { type: 'hp', f: 7000, q: 0.7, tau: 0.12 }, rnd);
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
  if (mat === 'glass') crumbleInto(d, sr, 0, 140, 3000, 11000, 0.002, 0.007, 0.5, 0.25, 0.5, rnd);
  else if (mat === 'ceramic') crumbleInto(d, sr, 0, 120, 1200, 6000, 0.004, 0.014, 0.6, 0.22, 0.5, rnd);
  else {
    // wood: splinters and bits, lower and duller, a few knocks of pieces
    crumbleInto(d, sr, 0, 110, 350, 3200, 0.005, 0.02, 0.6, 0.25, 0.55, rnd);
    for (let i = 0; i < 4; i++) hit(d, sr, 0.05 + rnd() * 0.8, 'wood', 0.04 + 0.06 * rnd(), 0.25, rnd);
  }
  return normalize(d);
}

// the debris bed: grains trickling at a steady density, loopable, mixed
// materials; two lengths so their sum seldom repeats
export function bed(len, seed, sr) {
  const rnd = mulberry32(seed);
  const n = Math.round(len * sr), d = new Float32Array(n);
  const count = Math.round(len * 55);
  for (let i = 0; i < count; i++) {
    const t = rnd() * (len - 0.03);
    const m = rnd();
    const [lo, hi, rl, rh] = m < 0.5 ? [350, 3000, 0.005, 0.02] : m < 0.8 ? [1200, 6000, 0.004, 0.014] : [3000, 11000, 0.002, 0.007];
    grain(d, sr, t, lo * Math.pow(hi / lo, rnd()), rl + (rh - rl) * rnd(), 0.3 + 0.7 * rnd(), rnd, 0.001 + 0.002 * rnd());
  }
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
  floorThud(d, sr, 0.14 + 0.06 * rnd(), 0.5, 1, rnd);
  for (let i = 0; i < 3; i++) hit(d, sr, 0.25 + 0.3 * rnd(), 'wood', 0.08 + 0.1 * rnd(), 0.35, rnd);
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
  for (let s = 0; s < strokes; s++) {
    const t0 = s * (0.1 + 0.02 * rnd());
    const fr = 170 + 90 * rnd(), jph = rnd() * TAU;
    addNoise(d, sr, t0, 0.085, 0.8 + 0.2 * rnd(), {
      type: 'bp', f: 3400 - 400 * rnd(), f1: 2000 + 300 * rnd(), q: 1.4, env: 'bell',
      am: (t) => 0.35 + 0.65 * Math.abs(Math.sin(TAU * fr * t + jph + 2 * Math.sin(t * 90))) ** 2,
    }, rnd);
  }
  if (stage >= 1) {
    const t0 = strokes * 0.1;
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
  }
  addNoise(d, sr, 0.01, 0.06, 0.15, { type: 'bp', f: 2500, q: 0.8, env: 'bell' }, rnd); // fur
  return normalize(d, 0.7);
}

// the air a pouncing cat moves
export function whoosh(seed, sr) {
  const rnd = mulberry32(seed);
  const d = new Float32Array(Math.ceil(sr * 0.32));
  addNoise(d, sr, 0, 0.3, 1, { type: 'bp', f: 450 + 150 * rnd(), f1: 2200 + 600 * rnd(), q: 1.1, env: 'bell' }, rnd);
  return normalize(d, 0.6);
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

const BW = [260, 340, 480];
const FG = [1, 0.75, 0.4];
function voice(d, sr, t0, sp, rnd) {
  const n = Math.floor(sp.dur * sr);
  const i0 = Math.round(t0 * sr);
  const maxK = 28;
  const amps = new Float32Array(maxK + 1);
  let ph = 0, K = 1, f = sp.f0[0][1], env = 0, am = 1, jit = 0;
  // breath: noise through a band-pass that rides F2
  let bk = coef('bp', 2400, 2.5, sr), bx1 = 0, bx2 = 0, by1 = 0, by2 = 0;
  const tilt = sp.tilt ?? 0.75;
  const vibPh = rnd() * TAU;
  for (let i = 0; i < n && i0 + i < d.length; i++) {
    const u = i / n, t = i / sr;
    if ((i & 31) === 0) {
      jit = jit * 0.9 + (rnd() - 0.5) * 0.006;
      let vib = 1;
      if (sp.vib) vib = 1 + sp.vib[1] * Math.sin(TAU * sp.vib[0] * t + vibPh) * clamp((u - (sp.vib[2] ?? 0.2)) * 4, 0, 1);
      f = at(sp.f0, u, 1) * (sp.pitch ?? 1) * vib * (1 + jit);
      env = at(sp.amp, u, 1) * (1 + (rnd() - 0.5) * 0.06);
      am = 1;
      if (sp.trill && u >= sp.trill[2] && u <= sp.trill[3]) am = 1 - sp.trill[1] * (0.5 + 0.5 * Math.cos(TAU * sp.trill[0] * t));
      const F = [at(sp.form, u, 1), at(sp.form, u, 2), at(sp.form, u, 3)];
      K = Math.max(1, Math.min(maxK, Math.floor((0.45 * sr) / f), Math.floor(9500 / f)));
      for (let k = 1; k <= K; k++) {
        const fk = k * f;
        let h = 0.02;
        for (let j = 0; j < 3; j++) { const x = (fk - F[j]) / (BW[j] * 0.5); h += FG[j] / (1 + x * x); }
        amps[k] = h * Math.pow(k, -tilt);
      }
      bk = coef('bp', F[1], 2.5, sr);
    }
    ph += (TAU * f) / sr;
    if (ph > TAU) ph -= TAU;
    const cp = Math.cos(ph);
    let s2 = 0, s1 = Math.sin(ph), acc = amps[1] * s1;
    for (let k = 2; k <= K; k++) { const s = 2 * cp * s1 - s2; acc += amps[k] * s; s2 = s1; s1 = s; }
    const x = rnd() * 2 - 1;
    const y = bk[0] * x + bk[1] * bx1 + bk[2] * bx2 - bk[3] * by1 - bk[4] * by2;
    bx2 = bx1; bx1 = x; by2 = by1; by1 = y;
    d[i0 + i] += (acc + y * (sp.breath ?? 0.05) * 6) * env * am * (sp.gain ?? 1);
  }
}

// vowel paths: [u, F1, F2, F3]. "m" is nasal and closed; "i/e" bright;
// "a" open; "ow" rounded
// cat vocal tracts are short: formants sit above a person's (measured
// against ESC-50 cat clips: centroid ~1.7 kHz, energy 1-4 kHz)
const V = {
  m: [520, 1500, 3200], i: [950, 2900, 4100], a: [1350, 2400, 3900], o: [1050, 1800, 3500], u: [780, 1350, 3300],
  closed: [620, 1700, 3400], ek: [1250, 2500, 3800],
};
const F = (u, v) => [u, ...v];

export function cat(kind, seed, sr) {
  const rnd = mulberry32(seed);
  const j = (x, p = 0.08) => x * (1 + (rnd() - 0.5) * 2 * p);
  if (kind === 'purr') return purr(seed, sr);
  const d = new Float32Array(Math.ceil(sr * 1.4));
  if (kind === 'meow') {
    // plaintive "hey, keep playing": m - i - a - ow, rising then falling
    const dur = j(0.82, 0.12);
    voice(d, sr, 0.005, {
      dur, f0: [[0, j(400)], [0.18, j(510)], [0.38, j(640)], [0.62, j(590)], [1, j(360)]],
      form: [F(0, V.m), F(0.12, V.i), F(0.42, V.a), F(0.72, V.o), F(1, V.u)],
      amp: [[0, 0], [0.08, 0.45], [0.16, 1], [0.6, 0.9], [0.86, 0.45], [1, 0]],
      vib: [5.5, 0.012, 0.3], breath: 0.05, tilt: 0.7,
    }, rnd);
  } else if (kind === 'mew') {
    const dur = j(0.32, 0.1);
    voice(d, sr, 0.005, {
      dur, f0: [[0, j(700)], [0.3, j(880)], [1, j(640)]],
      form: [F(0, V.closed), F(0.28, V.i), F(1, V.a)],
      amp: [[0, 0], [0.12, 1], [0.7, 0.8], [1, 0]], breath: 0.04,
    }, rnd);
  } else if (kind === 'mrrow') {
    // startled protest: a rolled "mrr" opening into "-row"
    const dur = j(0.6, 0.1);
    voice(d, sr, 0.005, {
      dur, f0: [[0, j(420)], [0.3, j(480)], [0.55, j(790)], [1, j(510)]],
      form: [F(0, V.m), F(0.3, V.closed), F(0.55, V.a), F(1, V.o)],
      amp: [[0, 0], [0.06, 0.8], [0.3, 0.85], [0.5, 1], [0.85, 0.6], [1, 0]],
      trill: [27, 0.85, 0, 0.32], vib: [6, 0.01, 0.55], breath: 0.06,
    }, rnd);
  } else if (kind === 'trill') {
    // the lock-on "brrrp?": closed mouth, rolled, rising like a question
    const dur = j(0.24, 0.1);
    voice(d, sr, 0.005, {
      dur, f0: [[0, j(560)], [1, j(920)]],
      form: [F(0, V.closed), F(1, [620, 1750, 3200])],
      amp: [[0, 0], [0.1, 1], [0.8, 0.85], [1, 0]],
      trill: [j(28, 0.06), 0.9, 0, 1], breath: 0.03, tilt: 0.9,
    }, rnd);
  } else if (kind === 'chatter') {
    // the prey chatter at a dot: fast "ek-ek-ek" with teeth clicks
    const nS = 6 + Math.floor(rnd() * 3), gap = j(0.1, 0.06);
    for (let s = 0; s < nS; s++) {
      const t0 = 0.005 + s * gap;
      addNoise(d, sr, t0, 0.004, 0.25, { type: 'hp', f: 4000, q: 0.7, tau: 0.001 }, rnd);
      voice(d, sr, t0 + 0.002, {
        dur: j(0.045, 0.1), f0: [[0, j(950, 0.05)], [1, j(1080, 0.05)]],
        form: [F(0, [500, 1800, 3400]), F(1, V.ek)],
        amp: [[0, 0], [0.25, 1], [1, 0]], breath: 0.12, gain: 0.8 - 0.3 * (s / nS),
      }, rnd);
    }
  } else if (kind === 'mrp') {
    // a little effort chirp on the pounce
    voice(d, sr, 0.003, {
      dur: j(0.13, 0.1), f0: [[0, j(600)], [1, j(740)]],
      form: [F(0, V.m), F(1, [700, 1700, 3200])],
      amp: [[0, 0], [0.2, 1], [1, 0]], breath: 0.06,
    }, rnd);
  }
  return normalize(d);
}

// purr: a loopable 2.4 s breath cycle — exhale pulses at ~26 Hz, a softer
// inhale at ~22 Hz, quiet gaps at both ends so the loop seam is silent
export function purr(seed, sr) {
  const rnd = mulberry32(seed);
  const len = Math.round(2.4 * sr);
  const d = new Float32Array(len);
  const phases = [[0.08, 1.2, 26, 1], [1.38, 2.3, 22, 0.55]];
  for (const [a, b, rate, amp] of phases) {
    let t = a;
    while (t < b) {
      const u = (t - a) / (b - a);
      const e = amp * Math.sin(Math.PI * u) ** 0.6;
      addMode(d, sr, t, 125 + 15 * rnd(), e * 0.8, 0.011);
      addMode(d, sr, t, 250 + 30 * rnd(), e * 0.35, 0.007);
      addNoise(d, sr, t, 0.006, e * 0.25, { type: 'lp', f: 700, q: 0.7, tau: 0.002 }, rnd);
      t += (1 / rate) * (0.94 + 0.12 * rnd());
    }
  }
  let m = 0;
  for (let i = 0; i < len; i++) m = Math.max(m, Math.abs(d[i]));
  for (let i = 0; i < len; i++) d[i] *= 0.8 / (m || 1);
  return d; // full length: the loop needs the exact cycle
}

// ---------------------------------------------------------------- rooms ---
// a stereo impulse response: early reflections then a decaying tail that
// darkens as it goes (rt60 s, bright 0..1)
export function roomIR(rt60, bright, sr, seed = 1) {
  const rnd = mulberry32(seed);
  const len = Math.ceil(sr * Math.min(1.9, rt60 * 1.1));
  const out = [new Float32Array(len), new Float32Array(len)];
  for (let ch = 0; ch < 2; ch++) {
    const d = out[ch];
    for (let e = 0; e < 7; e++) {
      const t = 0.004 + rnd() * 0.035;
      const i = Math.round(t * sr);
      if (i < len) d[i] += (rnd() < 0.5 ? -1 : 1) * (0.5 - e * 0.05);
    }
    let lp = 0;
    const pre = Math.round(0.012 * sr);
    for (let i = pre; i < len; i++) {
      const t = i / sr;
      const fc = 1200 + 9000 * bright * Math.exp(-t / (rt60 * 0.35));
      const a = 1 - Math.exp((-TAU * fc) / sr);
      lp += a * ((rnd() * 2 - 1) - lp);
      const ramp = Math.min(1, (i - pre) / (0.01 * sr));
      d[i] += lp * Math.exp((-6.9 * t) / rt60) * 0.35 * ramp;
    }
    let e2 = 0;
    for (let i = 0; i < len; i++) e2 += d[i] * d[i];
    const k = 1 / Math.sqrt(e2 || 1);
    for (let i = 0; i < len; i++) d[i] *= k;
  }
  return out;
}
// room index -> [rt60, brightness]: tiles ring, carpet and couches eat it
export const ROOM_ACOUSTICS = [[0.45, 0.45], [0.75, 0.5], [1.0, 0.9], [0.6, 0.7], [1.5, 0.65], [1.25, 0.75], [0.55, 0.5], [0.55, 0.5], [0.75, 0.45], [0.6, 0.6]];

// ---------------------------------------------------------- the catalog ---
// every bank entry: [key, generator()]; 3 variants of most things
export function catalog(sr) {
  const L = [];
  const V3 = (key, gen) => { for (let v = 0; v < 3; v++) L.push([key, () => gen(1000 + v * 7919 + L.length * 31)]); };
  for (const mat of ['wood', 'metal', 'glass', 'ceramic']) {
    SIZES.forEach((s, si) => V3(`hit:${mat}:${si}`, (seed) => impact(mat, s, seed, sr)));
  }
  for (const mat of ['soft', 'cardboard']) {
    SIZES.forEach((s, si) => V3(`hit:${mat}:${si}`, (seed) => impact(mat, s, seed, sr)));
  }
  V3('hit:ball:0', (seed) => impact('ball', 0.035, seed, sr));
  for (const [kind, sizes] of Object.entries(SHATTER_SIZES)) {
    sizes.forEach((s, si) => V3(`shatter:${kind}:${si}`, (seed) => shatter(kind, s, seed, sr)));
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
  for (const kind of ['meow', 'mew', 'mrrow', 'trill', 'chatter', 'mrp']) {
    V3(`cat:${kind}`, (seed) => cat(kind, seed, sr));
    if (kind === 'meow' || kind === 'trill') V3(`cat:${kind}`, (seed) => cat(kind, seed + 17, sr));
  }
  L.push(['cat:purr', () => purr(4242, sr)]);
  return L;
}
