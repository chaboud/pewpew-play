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

export function cat(kind, seed, sr) {
  const rnd = mulberry32(seed);
  const j = (x, p = 0.08) => x * (1 + (rnd() - 0.5) * 2 * p);
  if (kind === 'purr') return purr(seed, sr);
  const d = new Float32Array(Math.ceil(sr * 1.6));
  const common = () => ({
    scale: j(1, 0.07), wobble: j(22, 0.3), jitter: j(9, 0.3), hnr: j(25, 0.08), contrast: 1.4,
    tilt: (rnd() - 0.5) * 5, // some cats are brighter than the median, some duller
    breathy: rnd() < 0.35 ? 16 + rnd() * 6 : 0,
    sub: rnd() < 0.3 ? { u0: 0.25 + rnd() * 0.2, u1: 0.5 + rnd() * 0.25, d: 0.25 + rnd() * 0.25 } : null,
  });
  if (kind === 'meow') {
    // "hey, keep playing": A or B shape, sometimes the questioning C
    const r = rnd(), s = r < 0.5 ? 'A' : r < 0.8 ? 'B' : 'C';
    vox(d, sr, 0.005, {
      ...common(), dur: clamp(logn(rnd, 0.8, 0.22), 0.55, 1.15), f0: j(s === 'C' ? 640 : 575, 0.1),
      f0p: bendPath(F0P[s], rnd), lev: LEV[s], env: shapePath(s),
    }, rnd);
  } else if (kind === 'mew') {
    // short and higher: an A shape squeezed into a third of a second
    vox(d, sr, 0.005, {
      ...common(), dur: j(0.4, 0.15), f0: j(740, 0.1), f0p: bendPath(F0P.A, rnd, 0.09, 0.04),
      lev: LEV.A, env: [[0, 'A', 0.05], [0.3, 'A', 0.35], [1, 'A', 1]], sub: null,
    }, rnd);
  } else if (kind === 'mrrow') {
    // a rolled "mrrr" (measured trills: 24-31 Hz, f0 380-430, dark) that
    // opens into an "-ow" arch, as in the real mrrows we looked at
    const tr = j(0.36, 0.12);
    vox(d, sr, 0.005, {
      ...common(), dur: clamp(logn(rnd, 0.75, 0.15), 0.6, 0.95), f0: j(470, 0.08),
      f0p: [0.86, 0.87, 0.88, 0.9, 0.97, 1.06, 1.08, 1.05, 0.99, 0.93, 0.88].map((v) => v * j(1, 0.02)),
      lev: [-14, -7, -6, -6, -4, -2, -2, -3, -5, -10, -20],
      env: [[0, 'C', 0.1], [tr, 'C', 0.4], [tr + 0.15, 'A', 0.35], [1, 'A', 1]],
      am: { rate: j(28, 0.08), depth: 0.85, deep: true, irr: 0.12, u0: 0, u1: tr + 0.05 }, sub: null,
    }, rnd);
  } else if (kind === 'trill') {
    // the lock-on "brrrp?": low, dark, rolled, rising at the end (C)
    const deep = rnd() < 0.4;
    vox(d, sr, 0.005, {
      ...common(), dur: j(0.42, 0.15), f0: j(415, 0.07), f0p: bendPath(F0P.C, rnd, 0.03, 0.02),
      lev: [-12, -5, -4, -4, -3, -3, -3, -4, -5, -9, -20], env: shapePath('C'), tilt: -4,
      am: { rate: j(27.5, 0.1), depth: deep ? 0.92 : 0.38, deep, u0: 0, u1: 1 }, sub: null, breathy: 0,
    }, rnd);
  } else if (kind === 'mrp') {
    // the pounce chirp: ~0.15 s, a fast rise then a little fall (published
    // chirp means: 0.15 s, F0 223-1190 Hz, mean 661 — Schötz 2013)
    vox(d, sr, 0.004, {
      ...common(), dur: j(0.15, 0.15), f0: j(980, 0.1), f0p: [0.48, 0.7, 0.88, 0.98, 1, 0.98, 0.95, 0.92, 0.9, 0.88, 0.86],
      lev: [-16, -6, -2, 0, 0, -1, -2, -3, -5, -8, -16], env: [[0, 'B', 0], [1, 'A', 1]], sub: null,
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
        vox(d, sr, t + 0.004, {
          dur: j(0.032, 0.2), f0: j(820, 0.12), f0p: [1.08, 1.04, 0.98, 0.92, 0.88],
          lev: [-8, 0, -2, -7, -16], env: [[0, 'B', 0.05], [1, 'B', 0.5]], scale: j(1, 0.05),
          wobble: 8, jitter: 6, jitP: 25, shimP: 1.5, hnr: 14, breathy: 8, gain: 0.5 * g,
        }, rnd);
      } else {
        // voiceless "kh": breath through a closing mouth
        vox(d, sr, t + 0.003, {
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
