// looks.js — how a level is presented: which world the room sits in (the
// backdrop), how the frame is drawn (the style), and whether it is shot
// like a miniature (tilt-shift). Founder: "take us out of 'soundstage'
// mode... whimsical tilt shift backgrounding to suggest that these levels
// are 'exhibit a, exhibit b' in a courtroom... cell shading to make it more
// courtroom sketchy... try building alternative rendering mechanics."
//
// Everything here is presentation: the sim never hears about it. Story
// mode drives it through setPresentation(); Free Play through the gear
// menu. With every option at its default the pass is not in the chain at
// all and the frame is the old one.
//
// One pass does the lot, last in the composer chain ([N8AO?] -> [haze?] ->
// [look]). It reads the frame and the depth buffer an earlier pass already
// paid for (or renders the scene itself when it is alone), and from those:
//   - contour lines: the second difference of raw depth, which is exactly
//     zero on any plane (depth is affine in 1/z), so a floor at a grazing
//     angle draws no false lines and both silhouettes and creases fall out
//     of five taps with no normal buffer;
//   - a half-resolution blurred copy (separable 9-tap, the house habit from
//     haze.js) that serves three masters: the tilt-shift's out-of-focus
//     image, the sketch style's loose colour wash, and the highlight bloom;
//   - the style itself (classic / courtroom sketch / comic ink) and a grade.
import * as THREE from 'three';
import { Pass, FullScreenQuad } from './vendor/Pass.js';
import { Backdrop, BACKDROP_KINDS, exhibitLetter } from './backdrop.js?v=k64';

export { BACKDROP_KINDS };
export const STYLE_KINDS = [
  ['classic', 'Classic'],
  ['sketch', 'Courtroom sketch'],
  ['ink', 'Comic ink'],
];

const VERT = `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

// shared by the downsample and the final pass: where a pixel is in the
// world, and from that how far out of focus it is
const COMMON = `
  precision highp float;
  uniform sampler2D tColor, tDepth;
  uniform float uMode; // 0: tColor is linear · 1: display-encoded (an earlier pass wrote it)
  uniform mat4 invProj, invView;
  uniform vec3 uBoxC, uBoxH; // the model: everything inside this box is in focus
  uniform float uRamp;       // metres outside the box to fully out of focus
  uniform vec3 uBand;        // screen-space focus band: centre y, half height, ramp
  uniform float uBandAmt, uAspect;
  uniform vec4 uFocus[8];    // subjects (cats, the dot): uv.xy, radius, weight
  uniform int uFocusN;
  varying vec2 vUv;
  vec3 oetf(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }
  vec3 eotf(vec3 c) { return pow(max(c, 0.0), vec3(2.2)); }
  vec3 worldAt(vec2 uv, float depth) {
    vec4 clip = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 view = invProj * clip;
    view /= view.w;
    return (invView * view).xyz;
  }
  // 0 inside the model's box, saturating toward 1 with distance outside
  // it (63% at one ramp-length): the room is the subject, the world it
  // sits in is not, and the far wall is softer than the mug beside it
  float outsideAt(vec2 uv, float depth) {
    if (depth >= 0.99999) return 1.0;
    vec3 q = max(abs(worldAt(uv, depth) - uBoxC) - uBoxH, 0.0);
    return 1.0 - exp(-length(q) / uRamp);
  }
  float focusMask(vec2 uv) {
    float m = 0.0;
    for (int i = 0; i < 8; i++) {
      if (i >= uFocusN) break;
      float r = length((uv - uFocus[i].xy) * vec2(uAspect, 1.0));
      m = max(m, uFocus[i].w * (1.0 - smoothstep(uFocus[i].z * 0.5, uFocus[i].z, r)));
    }
    return m;
  }
  // circle of confusion, 0..1. Two terms: real distance from the model
  // (what blurs the backdrop), and the lens-tilt fake — a sharp band across
  // the screen with blur growing above and below — which is what reads as
  // "miniature" inside the room. The band never touches a cat or the dot.
  float cocFrom(float outside, vec2 uv, float fm) {
    float band = smoothstep(uBand.y, uBand.y + uBand.z, abs(uv.y - uBand.x)) * uBandAmt * (1.0 - fm);
    return clamp(max(outside, band), 0.0, 1.0);
  }`;

// half-res copy in linear light, premultiplied by a focus weight carried in
// alpha: in-focus pixels weigh little, so the sharp room does not smear a
// halo of itself into the blurred courtroom behind it
const DOWN = `
  ${COMMON}
  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    vec3 lin = min(uMode < 0.5 ? c : eotf(c), vec3(8.0));
    float w = 1.0;
    #ifdef USE_TILT
      float d = texture2D(tDepth, vUv).r;
      w = 0.12 + cocFrom(outsideAt(vUv, d), vUv, focusMask(vUv));
    #endif
    gl_FragColor = vec4(lin * w, w);
  }`;

const BLUR = `
  precision highp float;
  uniform sampler2D tSrc;
  uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    float w0 = 0.227027, w1 = 0.1945946, w2 = 0.1216216, w3 = 0.054054, w4 = 0.016216;
    vec4 acc = texture2D(tSrc, vUv) * w0;
    acc += (texture2D(tSrc, vUv + uDir) + texture2D(tSrc, vUv - uDir)) * w1;
    acc += (texture2D(tSrc, vUv + uDir * 2.0) + texture2D(tSrc, vUv - uDir * 2.0)) * w2;
    acc += (texture2D(tSrc, vUv + uDir * 3.0) + texture2D(tSrc, vUv - uDir * 3.0)) * w3;
    acc += (texture2D(tSrc, vUv + uDir * 4.0) + texture2D(tSrc, vUv - uDir * 4.0)) * w4;
    gl_FragColor = acc;
  }`;

const FINAL = `
  ${COMMON}
  uniform sampler2D tBlurA, tBlurB, tNoise;
  uniform vec2 uRes;
  uniform float uPx;      // device pixels per "paper pixel": strokes keep their size across DPRs
  uniform float uA, uB;   // depth = uA - uB / z
  uniform float uTilt, uOutline, uPunch, uTime;
  uniform vec3 uPaper;
  uniform vec2 uZ;        // view distance to the model's front lip and its back wall
  uniform vec4 uDot;      // the laser dot on screen: uv.xy, radius, lit
  uniform float uKey;     // how dim the backdrop keeps the scene (night < 1): a drawing is made by adapted eyes

  float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
  vec2 rot(vec2 p, float a) { float s = sin(a), c = cos(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }

  // relative depth step across r pixels. Raw depth is affine in 1/z, so
  // its second difference vanishes on planes; over (uA - depth), which is
  // uB / z, it is roughly dz/z at a silhouette and the change of slope at
  // a crease. The taps sit on texel centres a whole number of texels
  // apart: depth cannot be filtered, and an off-centre tap on a sloped
  // plane (the floor, a side wall) reads as an edge everywhere.
  float edge(vec2 uv, float r) {
    vec2 px = 1.0 / uRes;
    vec2 p = (floor(uv * uRes) + 0.5) * px;
    vec2 o = max(1.0, floor(r + 0.5)) * px;
    float c = texture2D(tDepth, p).r;
    float l = texture2D(tDepth, p - vec2(o.x, 0.0)).r, rr = texture2D(tDepth, p + vec2(o.x, 0.0)).r;
    float u = texture2D(tDepth, p + vec2(0.0, o.y)).r, dn = texture2D(tDepth, p - vec2(0.0, o.y)).r;
    float lap = abs(l + rr - 2.0 * c) + abs(u + dn - 2.0 * c);
    return lap / max(uA - c, 1e-7);
  }

  #if STYLE == 1
  // --- courtroom sketch. What the real thing looks like: toned paper;
  // fast charcoal contour, restated where the artist was unsure; pastel
  // dragged on with the side of the stick in broad strokes that ignore
  // the outlines and stop short of the edge of the sheet; shadow as a few
  // hatched strokes, not as darker colour; white chalk on the lights; the
  // subjects worked up and everything behind them barely indicated.
  vec3 sketch(vec3 sharp, vec2 uv, float bg, float sky, float subj, float zr) {
    vec2 pp = gl_FragCoord.xy / uPx;
    vec2 px1 = uPx / uRes;
    // the contour is redrawn a few times a second (line boil); the paper
    // and the colour stay put
    float boil = floor(uTime * 3.0);
    // two scales of the grain channel, off-register: a finer, less regular tooth
    float tooth = 0.6 * texture2D(tNoise, pp / 128.0).r + 0.4 * texture2D(tNoise, pp.yx / 311.0 + 0.4).r;
    vec4 nA = texture2D(tNoise, pp / 520.0 + vec2(boil * 0.37, boil * 0.61));
    vec4 nB = texture2D(tNoise, pp / 1400.0 + 0.31);
    vec2 wob = (nA.gb - 0.5) * 2.0;

    // strokes: bands laid side by side across one direction, each with its
    // own pressure, each dragging its colour a little way along itself,
    // each broken into lengths
    vec2 dir = vec2(0.82, 0.57), nrm = vec2(-0.57, 0.82);
    float ac = dot(pp, nrm);
    // (a field that only varies across the strokes makes them uneven widths)
    float sc = ac / 10.0 + (nB.g - 0.5) * 3.0 + texture2D(tNoise, vec2(ac / 330.0, 0.37)).b * 3.5;
    float band = floor(sc), across = fract(sc);
    vec4 rb = texture2D(tNoise, vec2(band * 0.137, band * 0.071) + 0.5);
    float seg = fract(dot(pp, dir) / (90.0 + 80.0 * rb.b) + rb.a * 7.0);
    float lay = mix(0.5, 1.0, smoothstep(0.0, 0.08, seg) * smoothstep(1.0, 0.86, seg))
              * mix(0.86, 1.0, smoothstep(0.0, 0.3, across) * smoothstep(1.0, 0.7, across));
    vec4 ta = texture2D(tBlurA, uv + (dir * (rb.r - 0.5) * 22.0 + wob * 2.0) * px1);
    vec3 soft = min(oetf(ta.rgb / max(ta.a, 1e-4)) / uKey, 1.0);

    vec3 c = mix(sharp, soft, 0.7 - 0.5 * subj);
    float L = luma(c);
    float mx = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
    float chroma = mx - mn;
    vec3 pastel = (0.24 + 0.80 * mix(vec3(L), c, 1.3)) * (0.93 + 0.14 * rb.g);
    vec3 paper = uPaper * (0.93 + 0.10 * nB.b + 0.05 * tooth);
    vec2 vg = uv - 0.5;
    float vign = smoothstep(0.30, 0.75, length(vg * vec2(1.0, 1.15)) + (nB.g - 0.5) * 0.25);
    float bias = 0.34 * subj + chroma * 0.6 - bg * 0.32 - vign * 0.3 + (nB.b - 0.5) * 0.5;
    float cov0 = clamp(0.8 + bias, 0.0, 1.0) * lay * (1.0 - sky);
    float cov = cov0 * smoothstep(0.0, 0.35, tooth + cov0 * 0.8 - 0.25); // thin pigment sits on the tooth
    vec3 col = mix(paper, pastel, cov);
    float hl = smoothstep(0.72, 0.93, luma(sharp)) * smoothstep(0.3, 0.6, tooth + lay * 0.3);
    col = mix(col, vec3(0.99, 0.98, 0.95), hl * 0.7 * (1.0 - 0.5 * bg) * (1.0 - sky));

    vec3 coal = vec3(0.16, 0.13, 0.14);
    float sh = (1.0 - smoothstep(0.08, 0.30, L)) * (1.0 - sky) * (1.0 - 0.7 * bg);
    float t1 = dot(pp, vec2(0.60, 0.80)) / 6.0 + wob.x * 0.8;
    float t2 = dot(pp, vec2(-0.78, 0.62)) / 6.6 + wob.y * 0.8;
    float w1 = 0.5 * sh, w2 = 0.45 * smoothstep(0.7, 1.0, sh);
    float h1 = (1.0 - smoothstep(w1 - 0.12, w1 + 0.12, abs(fract(t1) - 0.5) * 2.0)) * smoothstep(0.15, 0.35, sh);
    float h2 = (1.0 - smoothstep(w2 - 0.12, w2 + 0.12, abs(fract(t2) - 0.5) * 2.0)) * step(0.01, w2);
    float lift = smoothstep(0.2, 0.5, tooth + 0.35 * lay); // the stick skips on the paper's tooth
    col = mix(col, coal, max(h1, h2) * lift * 0.72);

    float line = smoothstep(0.0012, 0.0045, edge(uv + wob * 1.4 * px1, uPx));
    #ifndef LITE
      line += 0.4 * smoothstep(0.0025, 0.008, edge(uv - wob.yx * 2.6 * px1 + 1.2 * px1, 1.5 * uPx));
    #endif
    // on the subjects the artist also draws what is ON the surface — a
    // cat's markings and eyes, the lettering on a tag — which depth cannot
    // see: the same second difference, of brightness
    vec3 lw = vec3(0.299, 0.587, 0.114);
    float l0 = dot(texture2D(tColor, uv).rgb, lw);
    float dl = abs(dot(texture2D(tColor, uv - vec2(px1.x, 0.0)).rgb, lw) + dot(texture2D(tColor, uv + vec2(px1.x, 0.0)).rgb, lw) - 2.0 * l0)
             + abs(dot(texture2D(tColor, uv - vec2(0.0, px1.y)).rgb, lw) + dot(texture2D(tColor, uv + vec2(0.0, px1.y)).rgb, lw) - 2.0 * l0);
    line += smoothstep(0.05, 0.2, dl / (l0 + 0.15)) * subj * 0.8;
    float pressure = 0.6 + 0.8 * nB.g;
    float la = clamp(line, 0.0, 1.0) * pressure * (0.8 + 0.2 * subj) * (1.0 - 0.45 * bg) * mix(1.0, 0.66, zr);
    col = mix(col, coal, clamp(la, 0.0, 1.0) * smoothstep(0.12, 0.45, tooth + 0.22));

    // neon, lamps and the laser dot are a marker accent, not chalk: the
    // dot must stay the brightest red thing in the frame
    float smx = max(sharp.r, max(sharp.g, sharp.b)), smn = min(sharp.r, min(sharp.g, sharp.b));
    float hot = smoothstep(0.45, 0.8, (smx - smn) * smx);
    return mix(col, sharp, hot * 0.85);
  }
  #endif

  #if STYLE == 2
  // --- comic ink, toward the key art: a heavy black line whose weight
  // breathes, flat colour in three values, shadows spotted solid with a
  // halftone shoulder, off-white stock
  vec3 inked(vec3 sharp, vec2 uv, float bg, float subj, float zr) {
    vec2 pp = gl_FragCoord.xy / uPx;
    float tooth = texture2D(tNoise, pp / 256.0).r;
    vec4 nA = texture2D(tNoise, pp / 600.0);
    vec2 wob = (nA.gb - 0.5) * 2.0;
    vec3 c = sharp;
    float L = luma(c);
    float mx = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
    float v = 0.34 + 0.34 * smoothstep(0.24, 0.28, mx) + 0.34 * smoothstep(0.56, 0.61, mx);
    vec3 flatc = mix(mix(vec3(L), c, 1.45), c / max(mx, 0.06) * v, 0.55);
    vec3 black = vec3(0.07, 0.05, 0.09);
    vec2 hp = rot(pp, 0.785) / 3.4;
    float r = 0.50 * (1.0 - smoothstep(0.09, 0.25, L));
    float ht = 1.0 - smoothstep(r - 0.09, r + 0.09, length(fract(hp) - 0.5));
    // (a dark cat is not a shadow: the subjects keep their own colour)
    vec3 col = mix(flatc, flatc * vec3(0.30, 0.16, 0.34), ht * 0.85 * step(0.02, r) * (1.0 - 0.7 * subj));
    float spot = 1.0 - smoothstep(0.07, 0.11, L + (tooth - 0.5) * 0.05);
    col = mix(col, black, spot * (1.0 - 0.85 * subj));
    col *= vec3(1.0, 0.985, 0.94) * (0.95 + 0.07 * tooth);

    // line weight breathes: two whole-texel radii, blended by a slow field
    vec2 px1 = uPx / uRes;
    float wt = uPx * (0.9 + 1.3 * texture2D(tNoise, pp / 900.0 + 0.7).g) * (0.85 + 0.35 * subj) * mix(1.0, 0.7, zr);
    float r0 = max(1.0, floor(wt));
    vec2 q = uv + wob * 0.8 * px1;
    float heavy = smoothstep(0.0022, 0.0042, edge(q, r0));
    #ifndef LITE
      heavy = mix(heavy, smoothstep(0.0022, 0.0042, edge(q, r0 + 1.0)), clamp(wt - r0, 0.0, 1.0));
    #endif
    col = mix(col, black, heavy * (1.0 - 0.75 * bg));

    float hot = smoothstep(0.45, 0.8, (mx - mn) * mx);
    return mix(col, sharp, hot * 0.7);
  }
  #endif

  void main() {
    vec2 uv = vUv;
    float d = texture2D(tDepth, uv).r;
    float outside = outsideAt(uv, d);
    float fm = focusMask(uv);
    vec4 c0 = texture2D(tColor, uv);
    vec3 lin = uMode < 0.5 ? c0.rgb : eotf(c0.rgb);
    float coc = 0.0;
    #ifdef USE_BLUR
      vec4 ta = texture2D(tBlurA, uv);
      vec3 ba = ta.rgb / max(ta.a, 1e-4);
    #endif
    #ifdef USE_BLURB
      vec4 tb = texture2D(tBlurB, uv);
      vec3 bb = tb.rgb / max(tb.a, 1e-4);
    #endif
    #ifdef USE_TILT
      coc = cocFrom(outside, uv, fm);
      lin = mix(lin, ba, smoothstep(0.0, 0.45, coc));
      lin = mix(lin, bb, smoothstep(0.35, 1.0, coc));
    #endif
    #ifdef USE_PUNCH
      // the lights that already glow bloom a touch: the wide blur, thresholded
      lin += max(bb - 0.5, 0.0) * (0.6 * uPunch);
    #endif
    vec3 col = oetf(lin);
    // how deep into the model this pixel is, front lip 0 to back wall 1:
    // lines thin with distance, as a hand would draw them
    float zr = clamp((uB / max(uA - d, 1e-7) - uZ.x) / (uZ.y - uZ.x), 0.0, 1.0);
    #if STYLE == 1
      col = sketch(min(col / uKey, 1.0), uv, outside, step(0.99999, d), fm, zr);
    #elif STYLE == 2
      col = inked(min(col / mix(1.0, uKey, 0.5), 1.0), uv, outside, fm, zr);
    #else
      if (uOutline > 0.0) {
        float line = smoothstep(0.0014, 0.0045, edge(uv, 0.8 * uPx));
        col = mix(col, col * vec3(0.20, 0.15, 0.24), line * uOutline * mix(1.0, 0.55, zr) * (1.0 - 0.8 * max(coc, outside)));
      }
    #endif
    #if STYLE != 0
      // a drawn style turns the dot's glow into pigment: put the light back,
      // on top of the drawing, so the thing the player steers never dims
      vec2 dd = (uv - uDot.xy) * vec2(uAspect, 1.0);
      float dk = uDot.w * exp(-dot(dd, dd) / (uDot.z * uDot.z));
      col = mix(col, vec3(1.0, 0.16, 0.12), min(1.0, dk * 1.6)) + vec3(0.35, 0.3, 0.25) * dk * dk;
    #endif
    // the grade: tilt-shift brings the toy-photo saturation and contrast
    // with it; Punch is the same idea as its own dial, plus a vignette
    float tg = min(uTilt, 1.5);
    float sat = 1.0 + 0.20 * tg + 0.25 * uPunch;
    float con = 0.12 * tg + 0.34 * uPunch;
    col *= 1.0 + 0.07 * uPunch + 0.03 * tg;
    col = mix(vec3(luma(col)), col, sat);
    col = clamp(col, 0.0, 1.0);
    col = mix(col, col * col * (3.0 - 2.0 * col), con);
    vec2 vg = uv - 0.5;
    col *= 1.0 - (0.5 * uPunch + 0.22 * tg) * dot(vg, vg);
    gl_FragColor = vec4(col, c0.a);
  }`;

// one small tiling texture carries every random thing the styles need, so
// the per-pixel cost on a phone is a few lookups rather than hash
// arithmetic: R paper tooth (2 px), G and B two independent slow fields
// (wobble, pressure, blotch), A long streaks (the direction of a stroke)
function makeNoiseTexture(size = 256) {
  let s = 0x9e3779b9;
  const rnd = () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const lattice = (nx, ny) => { const g = new Float32Array(nx * ny); for (let i = 0; i < g.length; i++) g[i] = rnd(); return { g, nx, ny }; };
  const sample = (l, x, y) => {
    const fx = x * l.nx, fy = y * l.ny;
    const x0 = Math.floor(fx) % l.nx, y0 = Math.floor(fy) % l.ny, x1 = (x0 + 1) % l.nx, y1 = (y0 + 1) % l.ny;
    let tx = fx - Math.floor(fx), ty = fy - Math.floor(fy);
    tx = tx * tx * (3 - 2 * tx); ty = ty * ty * (3 - 2 * ty);
    const a = l.g[y0 * l.nx + x0], b = l.g[y0 * l.nx + x1], c = l.g[y1 * l.nx + x0], d = l.g[y1 * l.nx + x1];
    return a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty;
  };
  const R = [[lattice(128, 128), 0.6], [lattice(64, 64), 0.4]];
  const G = [[lattice(6, 6), 0.5], [lattice(12, 12), 0.3], [lattice(24, 24), 0.2]];
  const B = [[lattice(6, 6), 0.5], [lattice(12, 12), 0.3], [lattice(24, 24), 0.2]];
  const A = [[lattice(3, 48), 0.6], [lattice(6, 96), 0.4]];
  const data = new Uint8Array(size * size * 4);
  const fbm = (ls, x, y) => { let v = 0; for (const [l, w] of ls) v += sample(l, x, y) * w; return v; };
  // value noise bunches around 0.5: stretch it so thresholds have room
  const out = (v) => Math.max(0, Math.min(255, Math.round(((v - 0.5) * 1.9 + 0.5) * 255)));
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, o = (y * size + x) * 4;
    data[o] = out(fbm(R, u, v)); data[o + 1] = out(fbm(G, u, v)); data[o + 2] = out(fbm(B, u, v)); data[o + 3] = out(fbm(A, u, v));
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

const STYLE_ID = { classic: 0, sketch: 1, ink: 2 };

export class LookPass extends Pass {
  constructor(scene, camera, { coarse = false } = {}) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.coarse = coarse;
    this.needsSwap = true;
    this.depthSource = null; // () => DepthTexture an earlier pass rendered, or null
    this.hasInput = false;   // an earlier pass wrote the frame into readBuffer (display-encoded)
    this.w = 1; this.h = 1;
    this.sceneTarget = null;
    const opt = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    this.halfA = new THREE.WebGLRenderTarget(1, 1, opt);
    this.halfB = new THREE.WebGLRenderTarget(1, 1, opt);
    this.quarterA = new THREE.WebGLRenderTarget(1, 1, opt);
    this.quarterB = new THREE.WebGLRenderTarget(1, 1, opt);
    this.noise = makeNoiseTexture();
    const focus = [];
    for (let i = 0; i < 8; i++) focus.push(new THREE.Vector4());
    // one uniform object per value, shared by the materials that need it
    this.uniforms = {
      tColor: { value: null }, tDepth: { value: null }, uMode: { value: 0 },
      invProj: { value: new THREE.Matrix4() }, invView: { value: new THREE.Matrix4() },
      uBoxC: { value: new THREE.Vector3() }, uBoxH: { value: new THREE.Vector3(4, 3, 4) }, uRamp: { value: 12 },
      uBand: { value: new THREE.Vector3(0.5, 0.17, 0.24) }, uBandAmt: { value: 0 }, uAspect: { value: 1 },
      uFocus: { value: focus }, uFocusN: { value: 0 },
      tBlurA: { value: this.halfA.texture }, tBlurB: { value: this.quarterA.texture }, tNoise: { value: this.noise },
      uRes: { value: new THREE.Vector2(1, 1) }, uPx: { value: 1 }, uA: { value: 1 }, uB: { value: 0.1 },
      uTilt: { value: 0 }, uOutline: { value: 0 }, uPunch: { value: 0 }, uTime: { value: 0 },
      uPaper: { value: new THREE.Vector3(0.87, 0.82, 0.72) }, uZ: { value: new THREE.Vector2(2.6, 8.6) }, uDot: { value: new THREE.Vector4(0, 0, 0.01, 0) }, uKey: { value: 1 },
    };
    this.downMat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: VERT, fragmentShader: DOWN, defines: {}, depthTest: false, depthWrite: false });
    this.blurMat = new THREE.ShaderMaterial({ uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } }, vertexShader: VERT, fragmentShader: BLUR, depthTest: false, depthWrite: false });
    this.finalMat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: VERT, fragmentShader: FINAL, defines: { STYLE: 0 }, depthTest: false, depthWrite: false });
    this.quad = new FullScreenQuad(this.finalMat);
    this.state = { style: 'classic', tilt: 0, outline: 0, punch: 0 };
    this.configure(this.state);
  }

  // style and switches become shader defines (a phone only pays for the
  // branch it is in); strengths are uniforms and move freely
  configure({ style, tilt, outline, punch }) {
    this.state = { style, tilt, outline, punch };
    const sid = STYLE_ID[style] ?? 0;
    const useTilt = tilt > 0;
    this.useA = useTilt || sid === 1 || punch > 0;
    this.useB = useTilt || punch > 0;
    const fd = { STYLE: sid };
    if (this.useA) fd.USE_BLUR = 1;
    if (this.useB) fd.USE_BLURB = 1;
    if (useTilt) fd.USE_TILT = 1;
    if (punch > 0) fd.USE_PUNCH = 1;
    if (this.coarse) fd.LITE = 1;
    const key = JSON.stringify(fd);
    if (key !== this.defKey) {
      this.defKey = key;
      this.finalMat.defines = fd;
      this.finalMat.needsUpdate = true;
      this.downMat.defines = useTilt ? { USE_TILT: 1 } : {};
      this.downMat.needsUpdate = true;
    }
    this.sizeTargets();
    const u = this.uniforms;
    u.uTilt.value = tilt;
    u.uBandAmt.value = Math.min(0.45, 0.3 * tilt);
    u.uOutline.value = outline;
    u.uPunch.value = punch;
  }

  setSize(w, h) {
    this.w = Math.max(1, w | 0); this.h = Math.max(1, h | 0);
    this.sizeTargets();
    if (this.sceneTarget) this.sceneTarget.setSize(this.w, this.h);
    this.uniforms.uRes.value.set(this.w, this.h);
    this.uniforms.uAspect.value = this.w / this.h;
    // a paper pixel is a CSS pixel on a 420-wide phone: strokes and grain
    // stay the size a hand would draw them whatever the buffer is
    this.uniforms.uPx.value = Math.max(1, Math.min(this.w, this.h) / 420);
  }

  // the blur buffers only take memory while an option that reads them is on
  sizeTargets() {
    const hw = this.useA ? Math.max(1, this.w >> 1) : 1, hh = this.useA ? Math.max(1, this.h >> 1) : 1;
    if (this.halfA.width !== hw || this.halfA.height !== hh) { this.halfA.setSize(hw, hh); this.halfB.setSize(hw, hh); }
    const qw = this.useB ? Math.max(1, this.w >> 2) : 1, qh = this.useB ? Math.max(1, this.h >> 2) : 1;
    if (this.quarterA.width !== qw || this.quarterA.height !== qh) { this.quarterA.setSize(qw, qh); this.quarterB.setSize(qw, qh); }
  }

  blur(renderer, src, tmp, dst, step) {
    const b = this.blurMat.uniforms;
    b.tSrc.value = src.texture; b.uDir.value.set(step / tmp.width, 0);
    renderer.setRenderTarget(tmp); this.quad.render(renderer);
    b.tSrc.value = tmp.texture; b.uDir.value.set(0, step / tmp.height);
    renderer.setRenderTarget(dst); this.quad.render(renderer);
  }

  render(renderer, writeBuffer, readBuffer) {
    const u = this.uniforms;
    let depth = this.depthSource ? this.depthSource() : null;
    let color;
    if (depth && this.hasInput) {
      color = readBuffer.texture;
      u.uMode.value = 1;
    } else {
      // alone in the chain: this pass draws the scene, with the depth
      // texture it needs and the multisampling the bare canvas had
      if (!this.sceneTarget) {
        const dt = new THREE.DepthTexture(this.w, this.h, THREE.UnsignedIntType);
        this.sceneTarget = new THREE.WebGLRenderTarget(this.w, this.h, { depthTexture: dt, type: THREE.HalfFloatType, samples: this.coarse ? 0 : 4 });
      }
      renderer.setRenderTarget(this.sceneTarget);
      renderer.clear();
      renderer.render(this.scene, this.camera);
      depth = this.sceneTarget.depthTexture;
      color = this.sceneTarget.texture;
      u.uMode.value = 0;
    }
    const cam = this.camera;
    u.tColor.value = color;
    u.tDepth.value = depth;
    u.invProj.value.copy(cam.projectionMatrixInverse);
    u.invView.value.copy(cam.matrixWorld);
    u.uA.value = cam.far / (cam.far - cam.near);
    u.uB.value = (cam.far * cam.near) / (cam.far - cam.near);
    if (this.useA) {
      const px = u.uPx.value, t = this.state.tilt;
      this.quad.material = this.downMat;
      renderer.setRenderTarget(this.halfA);
      this.quad.render(renderer);
      this.quad.material = this.blurMat;
      // half-res texel steps: a loose wash for the sketch at rest, widening with the tilt
      this.blur(renderer, this.halfA, this.halfB, this.halfA, px * (0.5 + 0.35 * Math.min(t, 1.5)));
      if (this.useB) {
        const k = px * (0.35 + 0.3 * Math.min(Math.max(t, 0.6), 1.5));
        this.blur(renderer, this.halfA, this.quarterB, this.quarterA, k);
        if (!this.coarse) this.blur(renderer, this.quarterA, this.quarterB, this.quarterA, k * 2.4);
      }
    }
    this.quad.material = this.finalMat;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    if (this.clear) renderer.clear();
    this.quad.render(renderer);
  }

  dispose() {
    for (const t of [this.halfA, this.halfB, this.quarterA, this.quarterB, this.sceneTarget]) if (t) t.dispose();
    this.noise.dispose();
    this.downMat.dispose(); this.blurMat.dispose(); this.finalMat.dispose();
    this.quad.dispose();
  }
}

// --- the presentation: state, the backdrop in the scene, the pass ----------
const KEYS = ['backdrop', 'style', 'tiltShift', 'outline', 'punch', 'exhibit'];
const STAGE_ENV = { bg: 0x272138, fog: [0x272138, 13, 26], hemi: [0xfff1de, 0x51436a, 1], sun: [0xffe3b8, 1], hazeSun: [1, 1, 1], far: 50 };

export class Presentation {
  constructor({ scene, camera, hemi, sun, kit, coarse = false, base = null, onChain = null }) {
    this.scene = scene; this.camera = camera; this.hemi = hemi; this.sun = sun;
    this.coarse = coarse;
    this.onChain = onChain; // rebuild the composer chain (the pass came or went)
    // the settings' say, in lk-settings terms on the way in
    this.base = { backdrop: 'stage', style: 'classic', tiltShift: 0, outline: 0, punch: 0, exhibit: null };
    if (base) this.base = { backdrop: base.backdrop, style: base.style, tiltShift: base.tilt, outline: base.outline, punch: base.punch, exhibit: null };
    this.over = null;       // story mode's say, laid over the settings
    this.backdrop = new Backdrop(kit, scene);
    this.pass = null;
    this.geo = null;        // the room as last laid out
    this.lightBase = { sun: sun.intensity, hemi: hemi.intensity };
    this.v = new THREE.Vector3();
    this.fwd = new THREE.Vector3();
  }

  get state() {
    const s = { ...this.base };
    if (this.over) for (const k of KEYS) if (this.over[k] !== undefined && this.over[k] !== null) s[k] = this.over[k];
    if (!BACKDROP_KINDS.some(([id]) => id === s.backdrop)) s.backdrop = 'stage';
    if (!(s.style in STYLE_ID)) s.style = 'classic';
    for (const k of ['tiltShift', 'outline', 'punch']) s[k] = Math.max(0, Math.min(k === 'tiltShift' ? 1.5 : 1, +s[k] || 0));
    return s;
  }

  // the settings panel's values (Free Play)
  setBase(cfg) {
    const was = this.snapshot();
    this.base = { backdrop: cfg.backdrop, style: cfg.style, tiltShift: cfg.tilt, outline: cfg.outline, punch: cfg.punch, exhibit: null };
    this.apply(was);
  }

  // story mode's seam: any subset of { backdrop, style, tiltShift, exhibit,
  // outline, punch } overrides the settings until set(null) hands the look
  // back to them. Nothing here is saved.
  set(opts) {
    const was = this.snapshot();
    if (opts === null || opts === undefined) this.over = null;
    else {
      this.over = { ...(this.over || {}) };
      for (const k of KEYS) if (k in opts) this.over[k] = opts[k];
    }
    this.apply(was);
    return this.state;
  }

  snapshot() { return { s: this.state, want: this.wantsPass() }; }

  wantsPass() {
    const s = this.state;
    return s.style !== 'classic' || s.tiltShift > 0 || s.outline > 0 || s.punch > 0;
  }

  exhibitLabel() {
    const s = this.state;
    return s.exhibit ? String(s.exhibit) : exhibitLetter(this.geo ? this.geo.room : 0);
  }

  apply(was) {
    const s = this.state;
    if (!was || was.s.backdrop !== s.backdrop) this.rebuildBackdrop();
    else if (was.s.exhibit !== s.exhibit) this.backdrop.setExhibit(this.exhibitLabel());
    if (this.pass) this.pass.configure({ style: s.style, tilt: s.tiltShift, outline: s.outline, punch: s.punch });
    if ((!was || was.want !== this.wantsPass()) && this.onChain) this.onChain();
  }

  makePass() {
    const s = this.state;
    this.pass = new LookPass(this.scene, this.camera, { coarse: this.coarse });
    this.pass.configure({ style: s.style, tilt: s.tiltShift, outline: s.outline, punch: s.punch });
    this.syncBox();
    return this.pass;
  }
  dropPass() { this.pass = null; }

  // a room was built: { room, hx, hz, top (highest static surface), back
  // (how far in front of the open face the camera stands) }.
  // Called at the end of layoutRoom, after it set the sun and hemisphere.
  layout(geo) {
    // the backdrop is authored at living-room size and scaled to the model
    const R = Math.max(geo.hx / 3, geo.hz / 3, geo.top / 3.6);
    this.geo = { ...geo, R };
    this.lightBase = { sun: this.sun.intensity, hemi: this.hemi.intensity };
    this.rebuildBackdrop();
  }

  rebuildBackdrop() {
    if (!this.geo) return;
    this.backdrop.set(this.state.backdrop, this.geo, { exhibit: this.exhibitLabel() });
    this.applyEnv();
    this.syncBox();
  }

  applyEnv() {
    const e = this.backdrop.env || STAGE_ENV;
    const { scene, hemi, sun, camera } = this;
    scene.background.setHex(e.bg);
    scene.fog.color.setHex(e.fog[0]); scene.fog.near = e.fog[1]; scene.fog.far = e.fog[2];
    hemi.color.setHex(e.hemi[0]); hemi.groundColor.setHex(e.hemi[1]); hemi.intensity = this.lightBase.hemi * e.hemi[2];
    sun.color.setHex(e.sun[0]); sun.intensity = this.lightBase.sun * e.sun[1];
    if (camera.far !== e.far) { camera.far = e.far; camera.updateProjectionMatrix(); }
  }

  syncBox() {
    if (!this.pass || !this.geo) return;
    const { hx, hz, top, R } = this.geo, u = this.pass.uniforms;
    // the model, its base and its exhibit tags are the subject
    const y0 = -0.2 - 0.8 * R, y1 = top + 0.9 * R;
    u.uBoxC.value.set(0, (y0 + y1) / 2, -0.4 * R);
    u.uBoxH.value.set(hx + 0.2 + 0.9 * R, (y1 - y0) / 2, hz + 0.3 + 0.7 * R);
    u.uRamp.value = 18 * R;
    u.uKey.value = (this.backdrop.env && this.backdrop.env.key) || 1;
  }

  // once a frame, before the render: cats = [{x, y, z}], dot = Vector3|null
  frame(now, { cats = [], dot = null, haze = null } = {}) {
    const t = now * 0.001;
    this.backdrop.update(t);
    if (haze) {
      const m = (this.backdrop.env || STAGE_ENV).hazeSun;
      haze.uniforms.sunColor.value.set(1.6 * m[0], 1.4 * m[1], 1.05 * m[2]);
    }
    const p = this.pass;
    if (!p) return;
    const u = p.uniforms, cam = this.camera, v = this.v;
    u.uTime.value = t;
    const tanH = Math.tan((cam.fov * Math.PI) / 360);
    cam.getWorldDirection(this.fwd);
    let n = 0;
    const put = (x, y, z, size, w) => {
      if (n >= 8) return;
      v.set(x, y, z);
      const dist = (x - cam.position.x) * this.fwd.x + (y - cam.position.y) * this.fwd.y + (z - cam.position.z) * this.fwd.z;
      if (dist < 0.2) return;
      v.project(cam);
      if (Math.abs(v.x) > 1.3 || Math.abs(v.y) > 1.3) return;
      u.uFocus.value[n++].set(v.x * 0.5 + 0.5, v.y * 0.5 + 0.5, Math.max(0.05, (size / (2 * dist * tanH)) * 2.2), w);
    };
    u.uDot.value.w = 0;
    if (dot) {
      put(dot.x, dot.y, dot.z, 0.45, 1);
      // n > 0 here means the dot is on screen; its focus entry carries a
      // radius 2.2x a 0.45 m subject, and the marker is a 7 cm spot
      if (n > 0) { const f = u.uFocus.value[0]; u.uDot.value.set(f.x, f.y, Math.max(0.006, f.z * 0.07), 1); }
    }
    // the exhibit tags are read, not glanced at
    for (const f of this.backdrop.focus()) put(f.x, f.y, f.z, f.size, 1);
    for (const c of cats) put(c.x, c.y + 0.12, c.z, 0.6, 1);
    u.uFocusN.value = n;
    // the focus band is fitted to the model as it sits on screen — back
    // wall top to the front of its base — so a phone, where the room is
    // the middle third, keeps all of it sharp, and a wide window, where
    // the room overfills the frame, softens only its top and bottom edge
    if (this.geo) {
      const { hz, top, R } = this.geo;
      const yAt = (y, z) => Math.max(0.02, Math.min(0.98, v.set(cam.position.x, y, z).project(cam).y * 0.5 + 0.5));
      const a = yAt(top, hz), b = yAt(-0.2 - (this.backdrop.env ? 0.6 * R : 0), -(hz + 0.5 * R));
      u.uBand.value.x = (a + b) / 2;
      const dz = Math.abs(cam.position.z);
      u.uZ.value.set(Math.max(0.5, dz - hz), dz + hz);
      u.uBand.value.y = Math.min(0.27, Math.abs(a - b) / 2 + 0.015);
      // zoomed right in, the room is the whole frame and there is no
      // miniature to sell: the band lets go rather than blur what is aimed at
      const fill = Math.min(1, Math.max(0, (Math.abs(a - b) - 0.86) / 0.11));
      u.uBandAmt.value = Math.min(0.45, 0.3 * p.state.tilt) * (1 - fill * fill * (3 - 2 * fill));
    }
  }
}

let active = null;
export function installPresentation(deps) {
  active = new Presentation(deps);
  return active;
}
// the seam story mode calls. See Presentation.set.
export function setPresentation(opts) { return active ? active.set(opts) : null; }
export function getPresentation() { return active ? active.state : null; }
