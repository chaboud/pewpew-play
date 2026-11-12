// storycourt.js — the courtroom, drawn in code. The game has no image
// assets, so the trial's cast is inline SVG in the flat style of the UI
// (dark purples, one warm wood, the laser's red): bench and judge, the
// witness stand with this case's claimant, counsel at the lectern, the
// reporter at her machine, and the cats at the defense table being cats.
//
// Everything is a function of data: a witness is a handful of colours and
// a hair style (storycases.js), a cat is a pose and a coat. Motion is CSS
// keyframes on a few groups — no per-frame script, nothing that costs a
// phone anything while a line of testimony sits on screen.
//
// The tone invariant in picture form: the cats are at ease. They sleep on
// the exhibits, wash, and push a glass of water toward the edge of the
// table one line of testimony at a time.

export const COURT_CSS = `
.sc-svg { display: block; width: 100%; height: auto; }
.sc-svg .eye { transform-box: fill-box; transform-origin: 50% 50%; animation: sc-blink 4.6s infinite; }
.sc-svg .who:nth-of-type(2n) .eye { animation-delay: -1.7s; }
.sc-svg .mo { display: none; }
.sc-svg .sp .mo { display: block; transform-box: fill-box; transform-origin: 50% 0%; animation: sc-talk 0.24s infinite alternate; }
.sc-svg .sp .mc { display: none; }
.sc-svg .sp { animation: sc-bob 0.42s ease-in-out infinite alternate; }
.sc-svg .tick { opacity: 0; }
.sc-svg .lit path.tick { opacity: 1; }
.sc-svg .lit circle.tick { opacity: 0.2; }
.sc-svg .tail { transform-box: fill-box; transform-origin: 0% 100%; animation: sc-tail 3.1s ease-in-out infinite; }
.sc-svg .tail.b { animation-duration: 4.3s; animation-delay: -1.2s; }
.sc-svg .ceye { transform-box: fill-box; transform-origin: 50% 50%; animation: sc-blink 5.3s infinite; animation-delay: -2.1s; }
.sc-svg .zz { animation: sc-zz 3.2s ease-in-out infinite; }
.sc-svg .wash { transform-box: fill-box; transform-origin: 50% 100%; animation: sc-wash 1.1s ease-in-out infinite alternate; }
.sc-svg .hand { animation: sc-type 0.22s infinite alternate; }
.sc-svg .hand.r { animation-delay: -0.11s; }
.sc-svg.quiet .hand { animation-play-state: paused; }
.sc-svg .tape { transform-box: fill-box; transform-origin: 50% 100%; animation: sc-tape 2.4s ease-in-out infinite alternate; }
.sc-svg .paw { transform-box: fill-box; transform-origin: 100% 50%; }
.sc-svg .paw.go { animation: sc-paw 0.5s ease-out 1; }
.sc-svg .glass { transform-box: fill-box; transform-origin: 50% 100%; transition: transform 0.45s cubic-bezier(.3,1.4,.5,1); }
.sc-svg .glass.gone { transition: transform 0.7s cubic-bezier(.5,0,1,.6), opacity 0.2s linear 0.6s; opacity: 0; }
.sc-svg .dot { animation: sc-dot 1.6s ease-in-out infinite alternate; }
@keyframes sc-blink { 0%, 94%, 100% { transform: scaleY(1); } 96.5% { transform: scaleY(0.1); } }
@keyframes sc-talk { from { transform: scaleY(0.35); } to { transform: scaleY(1); } }
@keyframes sc-bob { from { transform: translateY(0); } to { transform: translateY(-1.2px); } }
@keyframes sc-tail { 0%, 100% { transform: rotate(0deg); } 40% { transform: rotate(14deg); } 55% { transform: rotate(-6deg); } }
@keyframes sc-zz { 0% { opacity: 0; transform: translate(0, 0); } 30% { opacity: 0.9; } 100% { opacity: 0; transform: translate(5px, -11px); } }
@keyframes sc-wash { from { transform: rotate(-7deg); } to { transform: rotate(9deg); } }
@keyframes sc-type { from { transform: translateY(0); } to { transform: translateY(1.6px); } }
@keyframes sc-tape { from { transform: rotate(-3deg); } to { transform: rotate(4deg); } }
@keyframes sc-paw { 0% { transform: rotate(0deg); } 40% { transform: rotate(-16deg); } 100% { transform: rotate(0deg); } }
@keyframes sc-dot { from { opacity: 0.75; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .sc-svg * { animation: none !important; } }
`;

const INK = '#1c1826';
const WOOD = '#6a4838', WOOD_HI = '#86604a', WOOD_LO = '#4c3229', BRASS = '#d9b45a';

// --- people ------------------------------------------------------------------
const HAIR = {
  short: 'M-11.5 -1 Q-13 -14.5 0 -14.5 Q13 -14.5 11.5 -1 Q7 -8 0 -8.5 Q-7 -8 -11.5 -1Z',
  side: 'M-11.5 0 Q-13.5 -14.5 2 -14.5 Q13 -13.5 11.5 -1 Q9 -7.5 -3 -8.5 Q-8 -7 -11.5 0Z',
  bob: 'M-12.5 9 Q-15.5 -15 0 -15 Q15.5 -15 12.5 9 L8.2 9 L8.6 -3 Q0 -9 -8.6 -3 L-8.2 9Z',
  long: 'M-13 17 Q-16 -15 0 -15 Q16 -15 13 17 L8.4 17 L8.6 -3 Q0 -9 -8.6 -3 L-8.4 17Z',
};
function hair(style, c) {
  switch (style) {
    case 'bald': return `<ellipse cx="-11" cy="-1" rx="2.6" ry="4.5" fill="${c}"/><ellipse cx="11" cy="-1" rx="2.6" ry="4.5" fill="${c}"/>`;
    case 'bun': return `<circle cx="0" cy="-16.5" r="5" fill="${c}"/><path d="${HAIR.short}" fill="${c}"/>`;
    case 'pony': return `<ellipse cx="12.5" cy="3" rx="3.6" ry="8.5" transform="rotate(-14 12.5 3)" fill="${c}"/><path d="${HAIR.short}" fill="${c}"/>`;
    case 'curly': return [[-9.5, -6, 5], [-4.5, -11.5, 5.6], [4.5, -11.5, 5.6], [9.5, -6, 5], [-11.5, 1, 4], [11.5, 1, 4], [0, -13, 5]]
      .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('');
    case 'cap': return `<path d="${HAIR.short}" fill="${c}"/><path d="M-12 -5.5 Q-12 -16 0 -16 Q12 -16 12 -5.5Z" fill="#3d5a80"/><path d="M-12 -6.5 H17 Q18 -4.5 16 -4 H-12Z" fill="#2f4666"/>`;
    default: return `<path d="${HAIR[style] || HAIR.short}" fill="${c}"/>`;
  }
}
function accessory(acc) {
  switch (acc) {
    case 'glasses': return `<g fill="none" stroke="${INK}" stroke-width="1.1"><rect x="-8" y="-4.2" width="6.6" height="5.4" rx="1.6"/><rect x="1.4" y="-4.2" width="6.6" height="5.4" rx="1.6"/><path d="M-1.4 -2 H1.4"/></g>`;
    case 'roundglasses': return `<g fill="none" stroke="${INK}" stroke-width="1.7"><circle cx="-4.4" cy="-1.4" r="3.7"/><circle cx="4.4" cy="-1.4" r="3.7"/><path d="M-0.8 -1.6 H0.8"/></g>`;
    case 'chain': return `<g fill="none" stroke="${BRASS}" stroke-width="0.8"><path d="M-8.4 -1 Q-13 8 -9 15"/><path d="M8.4 -1 Q13 8 9 15"/></g><g fill="none" stroke="${INK}" stroke-width="1.1"><rect x="-8" y="-4.2" width="6.6" height="5.4" rx="2.6"/><rect x="1.4" y="-4.2" width="6.6" height="5.4" rx="2.6"/><path d="M-1.4 -2 H1.4"/></g>`;
    case 'tie': return `<path d="M-5 11.5 L0 16 L5 11.5 L5 14 L0 19 L-5 14Z" fill="#efe6d2"/><path d="M-1.6 16 L1.6 16 L2.6 30 L0 33 L-2.6 30Z" fill="#b8434e"/>`;
    case 'bowtie': return `<path d="M-5 11.5 L0 15.5 L5 11.5 L5 13.5 L0 18 L-5 13.5Z" fill="#efe6d2"/><path d="M0 16.5 L-5.5 13.8 V19.4Z M0 16.5 L5.5 13.8 V19.4Z" fill="#d9b45a"/>`;
    case 'wingcollar': return `<path d="M-6 11 L0 15 L6 11 L6 15 L0 21 L-6 15Z" fill="#f4eee0"/><path d="M0 16.5 L-5 14.2 V18.8Z M0 16.5 L5 14.2 V18.8Z" fill="${INK}"/>`;
    case 'apron': return `<path d="M-9 20 H9 V46 H-9Z" fill="#d7ccb4"/><path d="M-9 20 L-5 11.5 M9 20 L5 11.5" stroke="#d7ccb4" stroke-width="2" fill="none"/>`;
    case 'scarf': return `<path d="M-8 9.5 Q0 15 8 9.5 L8.5 14 Q0 19.5 -8.5 14Z" fill="#e8943a"/><path d="M3 14 L7 25 L2.5 25 L0.5 15Z" fill="#c9742a"/>`;
    case 'headband': return `<path d="M-11.6 -6.6 Q0 -10.6 11.6 -6.6 L11.4 -3.8 Q0 -7.6 -11.4 -3.8Z" fill="#ff8fb1"/>`;
    case 'pearls': return [-6, -3.2, 0, 3.2, 6].map((x) => `<circle cx="${x}" cy="${12.6 + (1 - Math.abs(x) / 6) * 2.4}" r="1.25" fill="#f4eee0"/>`).join('');
    case 'mustache': return `<path d="M-5 4.2 Q-2.5 2.2 0 3.8 Q2.5 2.2 5 4.2 Q2.5 5.6 0 4.8 Q-2.5 5.6 -5 4.2Z" fill="#6f6a7c"/>`;
    case 'stubble': return `<path d="M-9.5 3 Q-8 12.5 0 12.5 Q8 12.5 9.5 3 Q5 8 0 8 Q-5 8 -9.5 3Z" fill="${INK}" opacity="0.16"/>`;
    case 'jabot': return `<path d="M-4.5 11 H4.5 L3.4 21 L0 24 L-3.4 21Z" fill="#f4eee0"/><path d="M0 12 V22" stroke="#cfc6b2" stroke-width="0.8"/>`;
    default: return '';
  }
}
// a figure from the chest up; origin at the centre of the face. `who` is
// the speaker key the dialogue lights up.
function person({ x, y, s = 1, who, skin, hair: hc, style, top, acc }) {
  const mouthY = acc === 'mustache' ? 7.6 : 6.2;
  return `<g transform="translate(${x} ${y}) scale(${s})"><g class="who" data-who="${who}">
    <circle class="tick" r="17.5" fill="#ffe86b" opacity="0.2"/><path class="tick" d="M-4 -24 H4 L0 -19Z" fill="#ffe86b"/>
    <path d="M-20 48 V25 Q-20 12.5 -7.5 11.5 H7.5 Q20 12.5 20 25 V48Z" fill="${top}"/>
    <rect x="-4" y="7" width="8" height="7" fill="${skin}"/><rect x="-4" y="9.5" width="8" height="2.6" fill="${INK}" opacity="0.14"/>
    ${acc === 'apron' || acc === 'tie' || acc === 'bowtie' || acc === 'wingcollar' || acc === 'jabot' || acc === 'scarf' || acc === 'pearls' ? accessory(acc) : ''}
    <circle cx="-11.2" cy="1" r="2.4" fill="${skin}"/><circle cx="11.2" cy="1" r="2.4" fill="${skin}"/>
    <ellipse cx="0" cy="0" rx="11" ry="12" fill="${skin}"/>
    ${acc === 'stubble' ? accessory(acc) : ''}
    ${hair(style, hc)}
    ${acc === 'headband' ? accessory(acc) : ''}
    <ellipse class="eye" cx="-4.3" cy="-1.3" rx="1.35" ry="1.9" fill="${INK}"/><ellipse class="eye" cx="4.3" cy="-1.3" rx="1.35" ry="1.9" fill="${INK}"/>
    <path class="mc" d="M-2.6 ${mouthY} Q0 ${mouthY + 1.5} 2.6 ${mouthY}" fill="none" stroke="${INK}" stroke-width="1.1" stroke-linecap="round" opacity="0.75"/>
    <ellipse class="mo" cx="0" cy="${mouthY + 0.8}" rx="2.2" ry="1.9" fill="#5a2a33"/>
    ${acc === 'glasses' || acc === 'roundglasses' || acc === 'chain' || acc === 'mustache' ? accessory(acc) : ''}
  </g></g>`;
}

// --- cats --------------------------------------------------------------------
// coats: base, markings, bib/belly. Flat, three colours, no outlines.
const COATS = [
  { b: '#e8943a', m: '#c26d22', w: '#f7e3c4' }, // orange tabby
  { b: '#8d8aa3', m: '#6b6880', w: '#d9d6e6' }, // grey
  { b: '#efe1c8', m: '#7a5a48', w: '#fff8ea' }, // siamese
  { b: '#2b2733', m: '#18151f', w: '#f4eee0' }, // tuxedo
  { b: '#f4eee0', m: '#e8943a', w: '#ffffff' }, // white, ginger ears
  { b: '#5b4a43', m: '#3b2f2b', w: '#cbb9a6' }, // brown tabby
];
const EARS = (hx, hy, c, inner) => `<path d="M${hx - 7.6} ${hy - 3} L${hx - 6.4} ${hy - 12.5} L${hx - 0.8} ${hy - 7}Z M${hx + 7.6} ${hy - 3} L${hx + 6.4} ${hy - 12.5} L${hx + 0.8} ${hy - 7}Z" fill="${c}"/><path d="M${hx - 6.4} ${hy - 5} L${hx - 5.8} ${hy - 10} L${hx - 2.6} ${hy - 7}Z M${hx + 6.4} ${hy - 5} L${hx + 5.8} ${hy - 10} L${hx + 2.6} ${hy - 7}Z" fill="${inner}"/>`;
const SHUT = (hx, hy) => `<path d="M${hx - 5.2} ${hy - 0.4} q1.7 1.7 3.4 0 M${hx + 1.8} ${hy - 0.4} q1.7 1.7 3.4 0" fill="none" stroke="${INK}" stroke-width="1" stroke-linecap="round"/>`;
const OPEN = (hx, hy, look = 0) => `<ellipse class="ceye" cx="${hx - 3.4}" cy="${hy - 0.6}" rx="1.9" ry="2.2" fill="#ffe86b"/><ellipse class="ceye" cx="${hx + 3.4}" cy="${hy - 0.6}" rx="1.9" ry="2.2" fill="#ffe86b"/><ellipse class="ceye" cx="${hx - 3.4 + look}" cy="${hy - 0.6}" rx="0.7" ry="1.9" fill="${INK}"/><ellipse class="ceye" cx="${hx + 3.4 + look}" cy="${hy - 0.6}" rx="0.7" ry="1.9" fill="${INK}"/>`;
const NOSE = (hx, hy) => `<path d="M${hx - 1.2} ${hy + 2.2} H${hx + 1.2} L${hx} ${hy + 3.6}Z" fill="#e58a9a"/>`;

// origin: where the cat meets the surface it is on (bottom centre)
function cat(pose, x, y, coat, s = 1, flip = false) {
  const c = COATS[coat % COATS.length];
  const inner = '#e9a3ad';
  let g = '';
  if (pose === 'loaf') {
    g = `<path class="tail" d="M16 -4 Q25 -3 23 -13" fill="none" stroke="${c.m}" stroke-width="4.2" stroke-linecap="round"/>
      <path d="M-19 0 Q-21 -15 -7 -16 H8 Q21 -15 19 0Z" fill="${c.b}"/>
      <path d="M-2 -15.6 v5 M5 -15.8 v5.4 M12 -14.6 v4.6" stroke="${c.m}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M-15 0 q3 -4 6 0Z M-7 0 q3 -4 6 0Z" fill="${c.w}"/>
      ${EARS(-11, -17, c.b, inner)}<circle cx="-11" cy="-17" r="8.6" fill="${c.b}"/>${SHUT(-11, -17)}${NOSE(-11, -17)}`;
  } else if (pose === 'sleep') {
    g = `<ellipse cx="1" cy="-8" rx="17" ry="8.6" fill="${c.b}"/>
      <path d="M17 -6 Q16 2 2 0.4 Q-8 0 -15 -3" fill="none" stroke="${c.m}" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M2 -16 v4.4 M9 -15 v4.2" stroke="${c.m}" stroke-width="2.2" stroke-linecap="round"/>
      ${EARS(-9, -9.5, c.b, inner)}<circle cx="-9" cy="-9.5" r="7.8" fill="${c.b}"/>${SHUT(-9, -9)}${NOSE(-9, -9.5)}
      <text class="zz" x="-1" y="-21" font-size="7" font-weight="700" fill="#cfd4e6" font-family="system-ui, sans-serif">z</text>`;
  } else if (pose === 'tail') {
    // somebody is behind the furniture
    g = `<path class="tail b" d="M0 0 Q-2 -14 6 -20 Q11 -23 9 -28" fill="none" stroke="${c.b}" stroke-width="4.4" stroke-linecap="round"/>`;
  } else {
    // sitting up: 'sit' watches the room, 'wash' is busy, 'bat' has found the glass
    const look = pose === 'bat' ? -0.9 : 0;
    g = `<path class="tail${coat % 2 ? ' b' : ''}" d="M8 -3 Q22 -2 20 -15" fill="none" stroke="${c.m}" stroke-width="4.2" stroke-linecap="round"/>
      <path d="M-9.5 0 Q-12.5 -23 0 -25 Q12.5 -23 9.5 0Z" fill="${c.b}"/>
      <ellipse cx="0" cy="-10" rx="4.8" ry="8.5" fill="${c.w}"/>
      <ellipse cx="${pose === 'bat' ? 3.4 : -3.6}" cy="-1.6" rx="3" ry="2" fill="${c.w}"/><ellipse cx="3.6" cy="-1.6" rx="3" ry="2" fill="${c.w}"/>
      ${pose === 'bat' ? `<g class="paw"><path d="M-5 -11 L-16 -7.5" stroke="${c.b}" stroke-width="4.6" stroke-linecap="round"/><circle cx="-17" cy="-7.2" r="2.9" fill="${c.w}"/></g>` : ''}
      <g${pose === 'wash' ? ' class="wash"' : ''}>${EARS(0, -32, c.b, inner)}<circle cx="0" cy="-32" r="8.6" fill="${c.b}"/>
      ${pose === 'wash' ? SHUT(0, -32) : OPEN(0, -32, look)}${NOSE(0, -32)}
      ${pose === 'wash' ? `<path d="M5 -14 Q9 -22 4.5 -27.5" fill="none" stroke="${c.b}" stroke-width="4.4" stroke-linecap="round"/><circle cx="4.4" cy="-28" r="2.8" fill="${c.w}"/>` : ''}</g>`;
  }
  return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})">${g}</g>`;
}

// where each cat of a case sits, by head count. The first is at the
// defense table; later ones spread through the room the way cats do.
const SPOTS = {
  1: ['exhibit'],
  2: ['bat', 'loaf'],
  3: ['bat', 'loaf', 'bench'],
  4: ['bat', 'loaf', 'bench', 'rail'],
  5: ['bat', 'loaf', 'bench', 'rail', 'floor'],
  6: ['bat', 'loaf', 'bench', 'rail', 'floor', 'hidden'],
};

/**
 * Build the scene. `witness` is a case's witness look, `cats` its cat
 * count, `exhibit` its letter (the tag on what the lone cat sleeps on). Returns { el, speak(who, talking), nudge(k, n) }.
 */
export function buildCourt({ witness, cats = 2, exhibit = 'A' }) {
  const spots = SPOTS[Math.max(1, Math.min(6, cats))];
  const has = (k) => spots.includes(k);
  const ci = (k) => spots.indexOf(k);
  const W = 400, H = 320, FLOOR = 224;
  const parts = [];
  // -- the room --
  parts.push(`<rect width="${W}" height="${FLOOR}" fill="#2a2340"/>`);
  for (const x of [40, 120, 280, 360]) parts.push(`<rect x="${x - 1}" y="0" width="2" height="${FLOOR}" fill="#332b4d"/>`);
  parts.push(`<rect y="148" width="${W}" height="${FLOOR - 148}" fill="#241d38"/><rect y="146" width="${W}" height="3" fill="#3a3158"/>`);
  for (const x of [8, 48, 128, 288, 368]) parts.push(`<rect x="${x}" y="158" width="${x === 128 || x === 48 ? 64 : 24}" height="54" rx="2" fill="none" stroke="#2f2747" stroke-width="2"/>`);
  // sconces
  for (const x of [80, 320]) parts.push(`<circle cx="${x}" cy="62" r="20" fill="#ffd9a0" opacity="0.06"/><circle cx="${x}" cy="62" r="11" fill="#ffd9a0" opacity="0.09"/><path d="M${x - 5} 58 H${x + 5} L${x + 3} 68 H${x - 3}Z" fill="#ffe2b0"/><rect x="${x - 1}" y="68" width="2" height="7" fill="${BRASS}"/>`);
  // the seal: scales, with a red dot resting in one pan
  parts.push(`<g transform="translate(200 40)"><circle r="25" fill="#231c36" stroke="${BRASS}" stroke-width="2"/><circle r="20.5" fill="none" stroke="${BRASS}" stroke-width="0.7" opacity="0.6"/>
    <g fill="none" stroke="${BRASS}" stroke-width="1.5" stroke-linecap="round"><path d="M0 -13 V12 M-6 12 H6 M-12 -9 H12"/><path d="M-12 -9 L-16 2 M-12 -9 L-8 2 M12 -9 L8 4 M12 -9 L16 4"/></g>
    <path d="M-17 2 Q-12 8 -7 2Z M7 4 Q12 10 17 4Z" fill="${BRASS}"/><circle class="dot" cx="12" cy="3" r="2.3" fill="#ff5a5a"/><circle cx="12" cy="3" r="4.6" fill="#ff5a5a" opacity="0.25"/></g>`);
  // the sign nobody read
  parts.push(`<g transform="translate(40 98)"><rect x="-17" y="-13" width="34" height="26" rx="2" fill="#efe6d2"/><circle r="8.6" fill="none" stroke="#c8454f" stroke-width="2.2"/>
    <rect x="-5.5" y="-1.6" width="9" height="3.2" rx="1.2" fill="#3a3350"/><circle cx="5.4" cy="0" r="1.3" fill="#ff5a5a"/><path d="M-6 6 L6 -6" stroke="#c8454f" stroke-width="2.2"/></g>`);
  parts.push(`<rect y="${FLOOR}" width="${W}" height="${H - FLOOR}" fill="#19142a"/><path d="M150 ${FLOOR} H250 L290 ${H} H110Z" fill="#211a35"/>`);
  // -- the bench --
  parts.push(person({ x: 200, y: 77, s: 1.12, who: 'court', skin: '#e3b38d', hair: '#cfcbd8', style: 'bob', top: '#1b1826', acc: 'jabot' }));
  parts.push(`<g transform="translate(200 76) scale(1.12)">${accessory('glasses')}</g>`);
  parts.push(`<rect x="112" y="124" width="176" height="${FLOOR - 124}" fill="${WOOD}"/><rect x="104" y="116" width="192" height="10" rx="2" fill="${WOOD_HI}"/>
    <rect x="124" y="138" width="68" height="70" rx="2" fill="${WOOD_LO}" opacity="0.55"/><rect x="208" y="138" width="68" height="70" rx="2" fill="${WOOD_LO}" opacity="0.55"/>
    <rect x="181" y="128" width="38" height="8" rx="1.5" fill="${BRASS}"/><rect x="186" y="131" width="28" height="2" fill="#8b6f2b"/>
    <g transform="translate(140 113) rotate(-14)"><rect x="-9" y="-5" width="18" height="9" rx="2" fill="${WOOD_LO}"/><rect x="-2" y="-1" width="24" height="3" rx="1.5" fill="${WOOD_HI}"/></g>`);
  if (has('bench')) parts.push(cat('loaf', 256, 116, ci('bench'), 0.86, true));
  // -- the witness --
  parts.push(person({ x: 334, y: 119, s: 1.0, who: 'witness', ...witness }));
  if (has('hidden')) parts.push(cat('tail', 301, 153, ci('hidden'), 0.9));
  parts.push(`<rect x="302" y="158" width="68" height="${FLOOR - 158}" fill="${WOOD}"/><rect x="296" y="151" width="80" height="9" rx="2" fill="${WOOD_HI}"/><rect x="311" y="170" width="50" height="42" rx="2" fill="${WOOD_LO}" opacity="0.55"/>
    <path d="M314 151 Q313 141 320 137" fill="none" stroke="#8a8798" stroke-width="1.4"/><circle cx="321" cy="136.4" r="2.2" fill="#cfd4e6"/>`);
  if (has('rail')) parts.push(cat('wash', 362, 151, ci('rail'), 0.74));
  // -- the reporter --
  parts.push(person({ x: 62, y: 154, s: 0.94, who: 'reporter', skin: '#c89472', hair: '#3a2a3a', style: 'bun', top: '#4f6f8f', acc: 'glasses' }));
  parts.push(`<path d="M52 ${FLOOR} L62 196 L72 ${FLOOR}" fill="none" stroke="#6f6a86" stroke-width="2"/><rect x="45" y="184" width="34" height="12" rx="2.5" fill="#8a8798"/><rect x="48" y="186.5" width="28" height="3" rx="1" fill="#55506a"/>
    <path class="tape" d="M77 185 Q81 176 77 171 Q74 167 78 163" fill="none" stroke="#f4eee0" stroke-width="3.2"/>
    <circle class="hand" cx="55" cy="184" r="3.1" fill="#c89472"/><circle class="hand r" cx="66" cy="184" r="3.1" fill="#c89472"/>`);
  // -- counsel, at the lectern --
  parts.push(person({ x: 124, y: 214, s: 1.3, who: 'counsel', skin: '#a8704c', hair: '#1f1a24', style: 'short', top: '#39507d', acc: 'tie' }));
  parts.push(`<path d="M100 262 H150 L146 ${H} H104Z" fill="${WOOD}"/><rect x="96" y="254" width="58" height="10" rx="2" fill="${WOOD_HI}"/><rect x="109" y="247" width="26" height="8" rx="1" fill="#efe6d2" transform="rotate(-4 122 251)"/>`);
  if (has('floor')) parts.push(cat('sit', 182, 300, ci('floor'), 0.9, true));
  // -- the defense table --
  parts.push(person({ x: 364, y: 236, s: 1.22, who: 'defense', skin: '#f0c9a8', hair: '#a8583a', style: 'curly', top: '#5c4a70', acc: 'glasses' }));
  parts.push(`<rect x="212" y="276" width="190" height="${H - 276}" fill="${WOOD_LO}"/><rect x="204" y="268" width="200" height="10" rx="2" fill="${WOOD_HI}"/>`);
  // a laser pointer, left on the table. Nobody says whose (who "Laser"
  // is in Laser v. Kitty is an open question); the cats are ignoring it
  parts.push(`<g transform="translate(334 264)"><rect x="-9" y="-1.4" width="15" height="4.6" rx="1.8" fill="#55506a"/><rect x="-9" y="-1.4" width="4" height="4.6" rx="1.6" fill="#3a3350"/><circle cx="7" cy="0.9" r="1.5" fill="#ff5a5a"/><circle cx="7" cy="0.9" r="3.2" fill="#ff5a5a" opacity="0.25"/></g>`);
  if (has('exhibit')) {
    // one cat, asleep on the exhibit
    parts.push(`<g transform="translate(262 268)"><rect x="-22" y="-6" width="44" height="6" rx="1" fill="#efe6d2"/><rect x="-20" y="-9" width="42" height="4" rx="1" fill="#e2d7bd"/><rect x="14" y="-17" width="12" height="9" rx="1" fill="#ffe86b"/><text x="20" y="-10.2" font-size="6.4" font-weight="800" text-anchor="middle" fill="${INK}" font-family="system-ui, sans-serif">${exhibit}</text></g>`);
    parts.push(cat('sleep', 258, 259, 0, 1.0));
  }
  if (has('loaf')) parts.push(cat('loaf', 292, 268, ci('loaf'), 0.95, true));
  if (has('bat')) {
    parts.push(`<g class="glass" data-glass><path d="M222 256 H232 L230.6 268 H223.4Z" fill="#9adfee" opacity="0.35" stroke="#cfeff6" stroke-width="0.9"/><path d="M223 261 H231 L230.6 267.4 H223.4Z" fill="#7fd0e6" opacity="0.8"/></g>`);
    parts.push(cat('bat', 250, 268, ci('bat'), 0.95));
  }
  const el = document.createElement('div');
  el.className = 'sc-wrap';
  el.innerHTML = `<svg class="sc-svg quiet" viewBox="0 0 ${W} ${H}" role="img" aria-label="A courtroom. The cats are at the defense table.">${parts.join('')}</svg>`;
  const svg = el.firstChild;
  const glass = svg.querySelector('[data-glass]');
  const paw = svg.querySelector('.paw');
  return {
    el,
    // whoever has the floor is lit; while `talking` their mouth moves and
    // the reporter types (a finished line leaves the speaker lit, at rest)
    speak(who, talking = true) {
      svg.querySelectorAll('.who').forEach((g) => {
        g.classList.toggle('lit', g.dataset.who === who);
        g.classList.toggle('sp', talking && g.dataset.who === who);
      });
      svg.classList.toggle('quiet', !talking);
    },
    // line k of n: the glass gets a little closer to the edge; on the last
    // line it goes over
    nudge(k, n) {
      if (!glass) return;
      if (paw && k > 0) { paw.classList.remove('go'); void paw.getBoundingClientRect(); paw.classList.add('go'); }
      if (k >= n - 1) {
        glass.classList.add('gone');
        glass.style.transform = 'translate(-22px, 70px) rotate(-70deg)';
      } else {
        glass.style.transform = `translate(${-3.2 * k}px, 0)`;
      }
    },
  };
}
