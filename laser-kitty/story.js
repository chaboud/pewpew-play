// story.js — story mode: a civil trial (founder, 2026-11-11: "a civil
// trial in which people are litigating damages to locations. We're looking
// retrospectively, playing the flashbacks, and our three stars of
// completion are basically dollars of damage"). Design and what is
// measured: wiki/game/story.md.
//
// The game is called "Laser v. Kitty": the title is the caption of the
// consolidated proceeding, and each location's claim is heard under it.
// The trial is the menu and every level is testimony:
//   docket -> testimony (the courtroom) -> flashback (the run)
//          -> statement of damages -> stars -> the next case
//
// What lives where:
//   * the cases — who sues, where, what is said — are data: storycases.js
//   * the courtroom is drawn in storycourt.js
//   * the run itself (locked room, three-minute clock, in-run menu) is
//     run.js, shared with Career
//   * every dollar comes from the sim's ledger (core/src/damages.rs) via
//     the `damages` reader main.js hands in. This file only decides how a
//     claim form READS: which heading an unnamed thing is filed under,
//     how one exhibit's several claims collapse to a line.
//
// Story does not run Career's medal bus: the corner of the screen the
// medal toasts use is where exhibits call themselves out, and the two
// modes keep separate saves ('lk-story' here, 'lk-career' there).

import { RunShell } from './run.js?v=k64';
import { CASES, PROCEEDING, COURT, SPEAKERS, NO_STARS, EMPTY_ROOM } from './storycases.js?v=k64';
import { buildCourt, COURT_CSS } from './storycourt.js?v=k64';

const SAVE_KEY = 'lk-story';

// --- how an unnamed claim is filed --------------------------------------------
// Presentation only: the sim says what the body is made of and why the
// claim was filed; the form picks a heading. Services (fees that are not
// any object's value) are told apart by cause.
const HEADINGS = {
  glass: 'Glassware and mirrors',
  ceramics: 'Ceramics and breakables',
  electronics: 'Electronics and appliances',
  soft: 'Upholstery and soft furnishings',
  furniture: 'Furniture',
  pantry: 'Food and beverages',
  goods: 'Household goods',
  clean: 'Cleaning and refinishing',
  plumb: 'Emergency plumbing',
  paws: 'Spot cleaning',
};
const SERVICES = { clean: ['spill', 'spills'], plumb: ['call-out', 'call-outs'], paws: ['paw print', 'paw prints'] };
const ORDER = ['furniture', 'electronics', 'glass', 'ceramics', 'soft', 'pantry', 'goods', 'clean', 'plumb', 'paws'];

function heading(row) {
  if (row.cause === 'spill') return 'clean';
  if (row.cause === 'plumbing') return 'plumb';
  if (row.cause === 'pawprint') return 'paws';
  const kind = row.material & 3;
  if (row.material & 4) return 'electronics';
  if (kind === 1) return row.gloss >= 0.84 ? 'glass' : 'ceramics';
  if (kind === 2) return 'soft';
  if (row.cause === 'severed' || row.cls === 1) return 'furniture';
  if (row.material & 8) return 'pantry';
  return 'goods';
}

// how each speaker is set down in the transcript
const RECORD = { counsel: 'Q.', witness: 'A.', court: 'THE COURT:', defense: 'DEFENSE:', reporter: 'REPORTER:' };

// SOUND. The bank's courtroom cues (a `ui:` family — gavel, gavel2,
// register, tick, stamp, page, steno, murmur) are being built alongside
// this file and their keys may still move, so every cue in story mode goes
// through these two helpers and nowhere else. Both are harmless no-ops
// until the page exposes a player at window.__sfx.
const cue = (k, o) => window.__sfx?.play?.(`ui:${k}`, o);
// ui: keys are baked at their intended level, so loops play at gain 1
const cueLoop = (k, on) => window.__sfx?.loop?.(`ui:${k}`, on, { gain: 1 });

// a line of copy with the case's exhibit letter filled in
const lettered = (text, c) => text.replace(/\{X\}/g, c.exhibit);

// the title as a caption: Laser <i>v.</i> Kitty
const TITLE_HTML = `${PROCEEDING.parties[0]} <i>v.</i> ${PROCEEDING.parties[1]}`;

const usd = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
const cents = (n) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const starRow = (n) => `${'★'.repeat(n)}${'☆'.repeat(3 - n)}`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// what happened to a named exhibit, in claim-form English
function causeText(causes) {
  const out = [];
  if (causes.moved) out.push('knocked out of place');
  if (causes.toppled) out.push('knocked over');
  if (causes.scratched) out.push(causes.scratched > 1 ? `clawed (${causes.scratched} times)` : 'clawed');
  if (causes.severed) out.push('knocked apart');
  if (causes.broken) out.push('broken');
  return out.join(', ');
}

const css = `
#st-ov { position: fixed; inset: 0; z-index: 41; display: none; flex-direction: column; align-items: center;
  background: #14121a; color: #e6e2f0; font: 500 14px system-ui, sans-serif;
  overflow-y: auto; overflow-x: hidden; touch-action: pan-y; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
  padding: calc(env(safe-area-inset-top, 8px) + 10px) 0 calc(env(safe-area-inset-bottom, 0px) + 14px); box-sizing: border-box; }
#st-ov button { font-family: inherit; cursor: pointer; }
.st-col { width: min(560px, 100vw); padding: 0 14px; box-sizing: border-box; }

/* the docket */
.st-court { font: 700 10px ui-monospace, monospace; letter-spacing: 0.16em; color: #8a8798; text-align: center; }
.st-h1 { font: 700 38px Georgia, 'Times New Roman', serif; color: #ffe86b; text-align: center; margin: 6px 0 4px; letter-spacing: 0.01em; line-height: 1.05; }
.st-h1 i { font-weight: 400; font-size: 0.72em; color: #ff5a5a; padding: 0 0.08em; }
.st-sub { text-align: center; color: #9ad; font-size: 11px; letter-spacing: 0.16em; }
.st-sum { text-align: center; color: #8a8798; font: 600 11px ui-monospace, monospace; margin: 5px 0 14px; }
.st-case { display: block; width: 100%; text-align: left; margin: 0 0 9px; padding: 11px 13px 12px; border-radius: 12px;
  border: 1px solid #3a3644; background: #1e1b26; color: inherit; position: relative; }
.st-case.next { border-color: #ffe86b; background: #231f2c; }
.st-case.locked { opacity: 0.5; }
.st-no { display: flex; justify-content: space-between; align-items: baseline; font: 600 10.5px ui-monospace, monospace; color: #8a8798; letter-spacing: 0.08em; }
.st-stars { color: #ffd75e; font: 400 15px system-ui, sans-serif; letter-spacing: 0.12em; }
.st-tag { display: inline-block; margin-top: 5px; padding: 1px 7px; border-radius: 9px; background: #ff5a5a; color: #1c1826; font: 800 9.5px system-ui, sans-serif; letter-spacing: 0.12em; }
.st-tag.nx { background: #ffe86b; }
.st-cap { font: 400 17px Georgia, 'Times New Roman', serif; color: #fff; margin-top: 4px; line-height: 1.25; }
.st-seal { font: 700 9.5px ui-monospace, monospace; letter-spacing: 0.18em; color: #8a8798; border: 1px solid #3a3644; border-radius: 4px; padding: 1px 6px; }
.st-meta { color: #9ad; font-size: 11.5px; margin-top: 3px; letter-spacing: 0.04em; }
.st-claim { color: #cfc9dc; font: italic 400 13.5px Georgia, 'Times New Roman', serif; margin-top: 6px; }
.st-best { margin-top: 7px; font: 600 11px ui-monospace, monospace; color: #7dffd0; display: flex; flex-wrap: wrap; gap: 2px 12px; }
.st-best span { color: #8a8798; }
.st-foot { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin: 8px 0 4px; }
.st-btn { padding: 11px 18px; border-radius: 10px; border: 1px solid #53c8d8; background: rgba(40,80,90,0.5); color: #bff2fa; font: 700 15px system-ui, sans-serif; }
.st-btn.dim { border-color: #3a3644; color: #a9a4b8; background: #1e1b26; }
.st-btn.sm { padding: 8px 14px; font-size: 13px; }

/* testimony */
.st-bar { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 8px; }
.st-bar .st-no { display: block; font-size: 10.5px; line-height: 1.5; }
.st-bar b { color: #cfc9dc; font: 400 13px Georgia, 'Times New Roman', serif; letter-spacing: 0; }
.st-wide { width: min(760px, 100vw, calc(60vh * 1.25)); padding: 0 10px; box-sizing: border-box; cursor: pointer; }
.st-stage { border-radius: 12px; overflow: hidden; border: 1px solid #3a3644; background: #19142a; }
.st-dlg { margin-top: 10px; padding: 12px 14px 14px; border-radius: 12px; border: 1px solid #3a3644; background: #1e1b26; min-height: 118px; box-sizing: border-box; position: relative; }
.st-who { font: 800 10.5px system-ui, sans-serif; letter-spacing: 0.14em; color: #9ad; }
.st-who.witness { color: #ffe86b; } .st-who.court { color: #c9b8ff; } .st-who.defense { color: #ff8fb1; } .st-who.reporter { color: #8a8798; }
.st-line { font: 400 18px/1.4 Georgia, 'Times New Roman', serif; color: #f2eefb; margin-top: 6px; min-height: 2.8em; }
.st-more { position: absolute; right: 12px; bottom: 8px; color: #8a8798; font-size: 11px; letter-spacing: 0.1em; }
.st-more.ready { color: #ffe86b; animation: st-pulse 0.9s ease-in-out infinite alternate; }
.st-pips { position: absolute; left: 14px; bottom: 11px; display: flex; gap: 4px; }
.st-pips i { width: 5px; height: 5px; border-radius: 50%; background: #3a3644; } .st-pips i.on { background: #9ad; }
.st-log { margin: 12px 4px 0; }
.st-log p { margin: 0 0 7px; font: 400 13px/1.4 Georgia, 'Times New Roman', serif; color: #8a8798; animation: st-ink 0.3s ease both; }
.st-log b { font: 700 10px ui-monospace, monospace; letter-spacing: 0.08em; color: #6f6a86; margin-right: 3px; }
@media (max-height: 640px) { .st-log { display: none; } }
@keyframes st-pulse { from { opacity: 0.45; } to { opacity: 1; } }

/* the cut to the evening in question */
#st-flash { position: fixed; inset: 0; z-index: 42; display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: #0d0b12; color: #f2eefb; text-align: center; padding: 20px; opacity: 0; transition: opacity 0.45s ease; }
#st-flash.in { opacity: 1; }
#st-flash.out { opacity: 0; transition: opacity 1s ease 0.1s; pointer-events: none; }
#st-flash.out .st-fl-in { transform: scale(1.12); filter: blur(5px); transition: transform 1.1s ease-in, filter 1.1s ease-in; }
.st-fl-k { font: 700 11px ui-monospace, monospace; letter-spacing: 0.3em; color: #8a8798; }
.st-fl-t { font: italic 400 32px Georgia, 'Times New Roman', serif; margin: 10px 0 12px; color: #ffe86b; }
.st-fl-d { font: 600 15px ui-monospace, monospace; letter-spacing: 0.08em; }
.st-fl-p { color: #a9a4b8; font-size: 13px; margin-top: 6px; }
.st-fl-rule { width: 46px; height: 1px; background: #3a3644; margin: 16px auto; }
.st-fl-s { font: 600 12px ui-monospace, monospace; color: #9ad; line-height: 1.8; }
.st-fl-s b { color: #ffd75e; font-weight: 600; }

/* during the run: a caption, and exhibits calling themselves out */
#st-frame { position: fixed; left: 12px; top: calc(env(safe-area-inset-top, 8px) + 54px); z-index: 5; pointer-events: none; display: none;
  font: 700 9px ui-monospace, monospace; letter-spacing: 0.16em; color: #c9b8ff; opacity: 0.8; text-shadow: 0 1px 3px #000; line-height: 1.6; }
#st-frame b { color: #ffe86b; font-weight: 700; }
#st-calls { position: fixed; right: 8px; top: calc(env(safe-area-inset-top, 8px) + 54px); z-index: 6; pointer-events: none;
  display: flex; flex-direction: column; align-items: flex-end; gap: 4px; width: min(calc(50vw - 36px), 230px); }
.st-call { width: 100%; box-sizing: border-box; padding: 4px 7px 5px; border-radius: 8px; border-left: 3px solid #ffe86b;
  background: rgba(24,21,32,0.88); color: #f2eefb; font: 500 10.5px/1.25 system-ui, sans-serif;
  transform: translateX(110%); opacity: 0; transition: transform 0.28s cubic-bezier(.2,.9,.3,1), opacity 0.28s; }
.st-call.in { transform: none; opacity: 1; }
.st-call .k { font: 800 8.5px ui-monospace, monospace; letter-spacing: 0.16em; color: #ffe86b; display: flex; justify-content: space-between; }
.st-call .k b { color: #7dffd0; font: 700 11px ui-monospace, monospace; letter-spacing: 0; }
.st-call .n { margin-top: 1px; }

/* the statement of damages */
#st-ov.pinned { overflow: hidden; }
.st-stmt { width: min(1040px, 100vw); height: 100%; min-height: 0; padding: 0 10px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px; align-items: center; }
.st-scroll { flex: 1 1 auto; min-height: 0; width: min(560px, 100%); overflow-y: auto; touch-action: pan-y; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
  border-radius: 3px; box-shadow: 0 6px 22px rgba(0,0,0,0.5); background: #f1e9d6; }
.st-paper { box-sizing: border-box; min-height: 100%; background: #f1e9d6; color: #2a2530; padding: 16px 16px 0; display: flex; flex-direction: column;
  font: 400 13px/1.35 Georgia, 'Times New Roman', serif; position: relative; }
.st-p-top { display: flex; justify-content: space-between; font: 700 9.5px ui-monospace, monospace; letter-spacing: 0.1em; color: #6b6472; }
.st-p-cap { text-align: center; font-size: 16px; margin: 9px 0 0; letter-spacing: 0.06em; text-transform: uppercase; }
.st-p-cap i { text-transform: none; }
.st-p-in { text-align: center; font-size: 12.5px; color: #5a5360; margin-bottom: 2px; }
.st-paper h2 { text-align: center; font: 700 17px Georgia, 'Times New Roman', serif; letter-spacing: 0.14em; margin: 8px 0 2px; }
.st-p-re { text-align: center; font-style: italic; color: #5a5360; font-size: 12px; padding-bottom: 9px; border-bottom: 2px solid #2a2530; }
.st-p-sec { font: 700 9.5px ui-monospace, monospace; letter-spacing: 0.14em; color: #6b6472; margin: 11px 0 3px; }
.st-row { display: grid; grid-template-columns: 36px 1fr auto; gap: 0 6px; padding: 4px 0; border-bottom: 1px dotted #b9ae96; align-items: baseline;
  animation: st-ink 0.3s ease both; }
.st-row .l { font: 700 11px ui-monospace, monospace; color: #8a2f38; }
.st-row .d small { display: block; color: #6b6472; font-style: italic; font-size: 11.5px; }
.st-row .a { font: 600 12.5px ui-monospace, monospace; white-space: nowrap; }
.st-none { text-align: center; font-style: italic; color: #5a5360; padding: 22px 0 16px; }
.st-p-end { flex: 1 1 auto; min-height: 10px; }
.st-foot2 { position: sticky; bottom: 0; background: #f1e9d6; padding-bottom: 10px; box-shadow: 0 -10px 10px -8px rgba(42,37,48,0.28); }
.st-total { display: flex; justify-content: space-between; align-items: baseline; padding-top: 8px; border-top: 2px solid #2a2530;
  font: 700 11px ui-monospace, monospace; letter-spacing: 0.1em; animation: st-ink 0.3s ease both; }
.st-total b { font-size: 19px; letter-spacing: 0; }
.st-filed { display: flex; justify-content: space-between; align-items: center; margin-top: 7px; min-height: 30px;
  font: italic 400 10.5px/1.35 Georgia, 'Times New Roman', serif; color: #6b6472; text-align: right; }
.st-stamp { display: inline-block; padding: 2px 8px; border: 3px double #b8323f; color: #b8323f; border-radius: 4px; margin-left: 6px;
  font: 800 12px ui-monospace, monospace; letter-spacing: 0.16em; transform: rotate(-5deg); opacity: 0; animation: st-stamp 0.35s cubic-bezier(.2,1.6,.4,1) both; }
.st-stamp.no { color: #5a5360; border-color: #5a5360; }
@keyframes st-ink { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }
@keyframes st-stamp { from { opacity: 0; transform: rotate(-5deg) scale(1.9); } to { opacity: 0.86; transform: rotate(-5deg) scale(1); } }
.st-verdict { flex: none; width: min(560px, 100%); text-align: center; }
.st-v-stars { font-size: 34px; letter-spacing: 0.12em; color: #3a3644; line-height: 1; }
.st-v-stars i { font-style: normal; display: inline-block; }
.st-v-stars i.on { color: #ffd75e; animation: st-star 0.45s cubic-bezier(.2,1.7,.4,1) both; }
@keyframes st-star { from { transform: scale(0.2) rotate(-40deg); opacity: 0; } to { transform: none; opacity: 1; } }
.st-v-thr { font: 600 11px ui-monospace, monospace; color: #8a8798; margin-top: 6px; }
.st-v-thr b { color: #ffd75e; font-weight: 600; }
.st-v-new { color: #7dffd0; font: 700 11px ui-monospace, monospace; letter-spacing: 0.12em; margin-top: 5px; min-height: 14px; }
.st-v-judge { margin: 10px auto 0; padding: 10px 13px 12px; border-radius: 12px; border: 1px solid #3a3644; background: #1e1b26; text-align: left;
  animation: st-ink 0.4s ease both; }
.st-v-judge .st-line { font-size: 16px; min-height: 0; margin-top: 4px; }
.st-v-btns { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 10px; }
.st-v-btns .st-btn { padding: 11px 14px; }
@media (min-width: 940px) and (min-height: 520px) {
  .st-stmt { flex-direction: row; align-items: stretch; justify-content: center; gap: 34px; }
  .st-scroll { flex: 0 1 560px; }
  .st-verdict { width: 380px; align-self: center; }
  .st-v-stars { font-size: 44px; }
}
@media (prefers-reduced-motion: reduce) { .st-row, .st-total, .st-stamp, .st-v-stars i.on, .st-v-judge { animation: none; opacity: 1; } }
`;

function loadSave() {
  const base = { v: 1, best: {}, stars: {}, tries: {} };
  try { return { ...base, ...JSON.parse(localStorage.getItem(SAVE_KEY) || '{}') }; } catch { return base; }
}

export class Story {
  // api: { setRoom(room, cats), damages, appraise(room, cats) } from main.js
  constructor(api) {
    this.api = api;
    this.cases = CASES; // (test hook: a driver may move a case's thresholds)
    this.save = loadSave();
    this.screen = 'docket'; // docket | testimony | flashback | run | statement
    this.frozen = true; // main.js parks sim and renderer behind an opaque screen
    this.ci = 0;
    this.dollars = 0;
    this.shown = 0;
    this.inventories = new Map();
    this.cardMs = 1500; // how long the flashback card holds before the dissolve
    this.shell = new RunShell(api, {
      pauseTitle: () => this.claimOf(this.cases[this.ci]),
      quitLabel: 'Return to the docket',
      onQuit: () => { this.endFraming(); this.showDocket(); },
      onTimeUp: () => this.showStatement(),
    });
    const style = document.createElement('style');
    style.textContent = css + COURT_CSS;
    document.head.appendChild(style);
    const mk = (id) => { const el = document.createElement('div'); el.id = id; document.body.appendChild(el); return el; };
    this.ov = mk('st-ov');
    this.frameEl = mk('st-frame');
    this.callsEl = mk('st-calls');
    this.calls = new Map(); // exhibit id -> live call-out chip
    this.timers = [];
    // a keyboard advances testimony too (desktop)
    addEventListener('keydown', (e) => {
      if (this.screen !== 'testimony' || (e.key !== ' ' && e.key !== 'Enter')) return;
      e.preventDefault();
      this.advance();
    });
    document.title = PROCEEDING.title;
    this.showDocket();
    window.__story = this; // test hook (skip(), screen, cases)
  }

  persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)); } catch {} }

  // "Claim of Halvorsen" — one matter under the consolidated caption
  claimOf(c) {
    return `Claim of ${c.claimant.replace(/^The /, 'the ')}${c.classAction ? ', a class' : ''}`;
  }

  unlocked(i) { return i === 0 || (this.save.stars[this.cases[i - 1].id] || 0) >= 1; }

  // three dollar thresholds, or null for a room with nothing in it
  thresholds(c) {
    if (c.stars) return c.stars;
    if (!this.inventories.has(c.id)) this.inventories.set(c.id, this.api.appraise(c.room, c.cats));
    const inv = this.inventories.get(c.id);
    if (!(inv >= 1)) return null;
    // to the nearest fifty: a threshold should read like a figure someone chose
    return c.starsOf.map((f) => Math.max(50, Math.round((f * inv) / 50) * 50));
  }

  starsFor(c, dollars) {
    const t = this.thresholds(c);
    if (!t) return 1; // an empty room is taken as heard (see EMPTY_ROOM)
    return dollars >= t[2] ? 3 : dollars >= t[1] ? 2 : dollars >= t[0] ? 1 : 0;
  }

  thresholdHTML(c) {
    const t = this.thresholds(c);
    return t ? `<b>★</b> ${usd(t[0])} &nbsp;<b>★★</b> ${usd(t[1])} &nbsp;<b>★★★</b> ${usd(t[2])}` : '';
  }

  // `pinned`: the screen lays itself out to the viewport and scrolls a
  // part of itself (the claim form) instead of the whole page
  show(html, pinned = false) {
    for (const t of this.timers) clearTimeout(t);
    this.timers.length = 0;
    this.ov.innerHTML = html;
    this.ov.classList.toggle('pinned', pinned);
    this.ov.style.display = 'flex';
    this.ov.scrollTop = 0;
    this.frozen = true;
  }

  // a timed beat (a sound cue) that is dropped if the screen changes first
  later(ms, fn) { this.timers.push(setTimeout(fn, ms)); }

  // -- the docket ---------------------------------------------------------------
  showDocket() {
    this.screen = 'docket';
    cueLoop('murmur', false);
    const next = this.cases.findIndex((c, i) => this.unlocked(i) && !(this.save.stars[c.id] >= 1));
    let total = 0, stars = 0;
    for (const c of this.cases) { total += this.save.best[c.id] || 0; stars += this.save.stars[c.id] || 0; }
    const cards = this.cases.map((c, i) => {
      const locked = !this.unlocked(i);
      const best = this.save.best[c.id] || 0;
      const st = this.save.stars[c.id] || 0;
      const thr = locked ? '' : this.thresholdHTML(c);
      return `<button class="st-case${locked ? ' locked' : ''}${i === next ? ' next' : ''}" data-i="${i}"${locked ? ' aria-disabled="true"' : ''}>
        <div class="st-no"><span>No. ${c.no}</span>${locked ? '<span class="st-seal">SEALED</span>' : `<span class="st-stars">${starRow(st)}</span>`}</div>
        ${c.title ? `<span class="st-tag">${esc(c.title.toUpperCase())}</span> ` : ''}${i === next ? '<span class="st-tag nx">NEXT HEARING</span>' : ''}
        <div class="st-cap"><i>Claim of</i> ${esc(this.claimOf(c).replace(/^Claim of /, ''))}</div>
        <div class="st-meta">Exhibit ${c.exhibit} &middot; ${esc(c.place)} &middot; ${c.cats} cat${c.cats > 1 ? 's' : ''}${c.classAction ? ' &middot; class action' : ''}</div>
        ${locked ? (this.unlocked(i - 1) ? '<div class="st-claim">Establish damages in the case above to unseal this one.</div>' : '') : `<div class="st-claim">&ldquo;${esc(c.claim)}&rdquo;</div>
        <div class="st-best">${best ? `established ${usd(best)}` : 'not yet heard'}<span>${thr}</span></div>`}
      </button>`;
    }).join('');
    this.show(`<div class="st-col">
      <div class="st-court">${COURT.name.toUpperCase()} &middot; ${COURT.division.toUpperCase()} &middot; ${COURT.dept.toUpperCase()}</div>
      <div class="st-h1">${TITLE_HTML}</div>
      <div class="st-sub">THE DOCKET &middot; ${PROCEEDING.kind.toUpperCase()}</div>
      <div class="st-sum">${usd(total)} established &middot; ★ ${stars} of ${this.cases.length * 3}</div>
      ${cards}
      <div class="st-foot"><button class="st-btn dim sm" id="st-career">Career</button>
        <button class="st-btn dim sm" id="st-free">Free Play</button><button class="st-btn dim sm" id="st-lab">Cat Lab</button></div>
    </div>`);
    this.ov.querySelectorAll('.st-case').forEach((el) => {
      el.onclick = () => { const i = +el.dataset.i; if (this.unlocked(i)) this.showTestimony(i); };
    });
    this.ov.querySelector('#st-career').onclick = () => { location.href = 'career.html'; };
    this.ov.querySelector('#st-free').onclick = () => { location.href = 'index.html'; };
    this.ov.querySelector('#st-lab').onclick = () => { location.href = 'catlab.html'; };
    const nx = this.ov.querySelector('.st-case.next');
    if (nx && next > 1) nx.scrollIntoView({ block: 'center' });
  }

  // -- testimony ----------------------------------------------------------------
  showTestimony(i) {
    this.ci = i;
    this.screen = 'testimony';
    const c = this.cases[i];
    const lines = c.testimony;
    this.show(`<div class="st-wide" id="st-tap">
      <div class="st-bar"><div class="st-no">${PROCEEDING.parties[0].toUpperCase()} v. ${PROCEEDING.parties[1].toUpperCase()} &middot; No. ${c.no}<br><b>${esc(this.claimOf(c))}</b></div>
        <button class="st-btn dim sm" id="st-skip">Skip &#9656;&#9656;</button></div>
      <div class="st-stage"></div>
      <div class="st-dlg"><div class="st-who"></div><div class="st-line"></div>
        <div class="st-pips">${lines.map(() => '<i></i>').join('')}</div><div class="st-more">TAP</div></div>
      <div class="st-log"></div>
    </div>`);
    cue('gavel'); // court is in session
    cueLoop('murmur', true);
    const court = buildCourt({ witness: c.witness, cats: c.cats, exhibit: c.exhibit });
    this.ov.querySelector('.st-stage').appendChild(court.el);
    const who = this.ov.querySelector('.st-who'), line = this.ov.querySelector('.st-line');
    const more = this.ov.querySelector('.st-more'), pips = this.ov.querySelectorAll('.st-pips i');
    const log = this.ov.querySelector('.st-log');
    let k = -1, typing = null, full = '';
    const finish = () => {
      clearInterval(typing);
      typing = null;
      line.textContent = full;
      more.classList.add('ready');
      court.speak(lines[k][0], false);
    };
    const advance = () => {
      if (this.screen !== 'testimony') return;
      if (typing) return finish();
      // what was just said goes into the record, the way a transcript reads
      if (k >= 0) {
        const p = document.createElement('p');
        p.innerHTML = `<b>${RECORD[lines[k][0]]}</b> ${esc(lettered(lines[k][1], c))}`;
        log.appendChild(p);
      }
      k += 1;
      if (k >= lines.length) return this.flashback();
      const [speaker, text] = lines[k];
      who.className = `st-who ${speaker}`;
      who.textContent = speaker === 'witness' ? c.witnessName : SPEAKERS[speaker];
      pips.forEach((p, j) => p.classList.toggle('on', j <= k));
      more.classList.remove('ready');
      more.textContent = k === lines.length - 1 ? 'TAP · THE EVENING IN QUESTION ▸' : 'TAP ▸';
      court.speak(speaker);
      court.nudge(k, lines.length);
      // a line types itself out; a tap finishes it, the next tap moves on
      full = lettered(text, c);
      let n = 0;
      line.textContent = '';
      typing = setInterval(() => {
        n += 2;
        if (n % 12 === 0) cue('steno'); // the reporter keeps up
        line.textContent = full.slice(0, n);
        if (n >= full.length) finish();
      }, 26);
    };
    this.advance = advance;
    this.ov.querySelector('#st-tap').onclick = advance;
    this.ov.querySelector('#st-skip').onclick = (e) => { e.stopPropagation(); clearInterval(typing); this.flashback(); };
    this.stopTestimony = () => clearInterval(typing);
    advance();
  }

  // -- the flashback --------------------------------------------------------------
  // A title card covers the cut: the room is rebuilt behind it (a hitch on
  // a phone, hidden here), then the card dissolves into the evening. The
  // cut is a caption and a dissolve and assumes nothing about what is
  // under it — the room alone in the dark, or staged as a model on the
  // evidence table (the presentation hook below).
  flashback() {
    if (this.stopTestimony) this.stopTestimony();
    cueLoop('murmur', false);
    cue('page');
    this.screen = 'flashback';
    const c = this.cases[this.ci];
    this.resetRun();
    if (this.flash) this.flash.remove();
    const card = document.createElement('div');
    card.id = 'st-flash';
    this.flash = card;
    const thr = this.thresholdHTML(c);
    card.innerHTML = `<div class="st-fl-in">
      <div class="st-fl-k">${esc(c.witnessName)} RECALLS</div>
      <div class="st-fl-t">${c.title ? esc(c.title) : 'The evening in question'}</div>
      <div class="st-fl-d">${esc(c.when)} &middot; ${esc(c.time)}</div>
      <div class="st-fl-p">Exhibit ${c.exhibit} &middot; ${esc(c.place)}, ${esc(c.address)}</div>
      <div class="st-fl-rule"></div>
      <div class="st-fl-s">${thr ? `${thr}<br>` : ''}three minutes &middot; ${c.cats} cat${c.cats > 1 ? 's' : ''}</div>
    </div>`;
    document.body.appendChild(card);
    void card.offsetWidth;
    card.classList.add('in');
    setTimeout(() => {
      if (this.flash !== card || this.screen !== 'flashback') return;
      this.ov.style.display = 'none';
      this.shell.load(c.room, c.cats);
      // HOOK (presentation), start of a flashback: how the level is staged
      // — e.g. the room as a scale model on the evidence table, tagged
      // with this case's exhibit letter. A no-op until main.js passes a
      // `presentation` function in the api; endFraming() is the restore.
      this.api.presentation?.({ backdrop: 'court', exhibit: c.exhibit });
      this.frozen = false; // the room builds and draws behind the card
      this.framesUp = 0;
      this.flashAt = performance.now();
    }, 480);
  }

  resetRun() {
    this.dollars = 0;
    this.shown = 0;
    this.cursor = 0;
    this.base = 0;
    this.exhibits = new Map(); // exhibit id -> { id, name, letter, dollars, causes }
    this.other = new Map(); // heading key -> { dollars, recs:Set, events }
    for (const chip of this.calls.values()) chip.el.remove();
    this.calls.clear();
  }

  beginRun() {
    const c = this.cases[this.ci], d = this.api.damages;
    this.inventories.set(c.id, d.inventory());
    // anything a wandering cat did while the card was up is not on the record
    this.cursor = d.count();
    this.base = d.total();
    this.screen = 'run';
    this.shell.go();
    const card = this.flash;
    card.classList.add('out');
    setTimeout(() => { card.remove(); if (this.flash === card) this.flash = null; }, 1300);
    const [, mon, day] = c.when.match(/, (\w{3})\w* (\d+)/) || [];
    this.frameEl.innerHTML = `FLASHBACK<br>EXHIBIT ${c.exhibit}<br><b>${mon ? `${mon.toUpperCase()} ${day} · ` : ''}${esc(c.time.toUpperCase())}</b>`;
    this.frameEl.style.display = 'block';
  }

  endFraming() {
    // HOOK (presentation), end of a flashback: back to the plain staging
    this.api.presentation?.(null);
    this.frameEl.style.display = 'none';
    for (const chip of this.calls.values()) chip.el.remove();
    this.calls.clear();
    if (this.flash) { this.flash.remove(); this.flash = null; }
  }

  // -- feeds from main.js ---------------------------------------------------------
  event() {} // story reads the ledger, not the score events

  hudScore(dtMs) {
    const gap = this.dollars - this.shown;
    this.shown = Math.abs(gap) < 1 ? this.dollars : this.shown + gap * (1 - Math.exp(-dtMs / 160));
    // called every frame: only format when the figure moved
    const whole = Math.round(this.shown);
    if (whole !== this.hudWhole) { this.hudWhole = whole; this.hudText = usd(whole); }
    return this.hudText;
  }

  frame(dtMs) {
    if (this.screen === 'flashback' && !this.frozen) {
      // hold the card until the room has had frames to build its meshes
      this.framesUp += 1;
      if (this.framesUp >= 3 && performance.now() - this.flashAt > this.cardMs) this.beginRun();
      return;
    }
    if (this.shell.state !== 'run') return;
    const d = this.api.damages;
    const rows = d.rows(this.cursor);
    if (rows.length) {
      this.cursor += rows.length;
      for (const row of rows) this.file(row);
      this.dollars = d.total() - this.base;
    }
    this.shell.tick(dtMs); // calls showStatement when the clock runs out
  }

  // one ledger row onto the claim form
  file(row) {
    const key = heading(row);
    if (row.exhibit && !SERVICES[key]) {
      let ex = this.exhibits.get(row.exhibit);
      if (!ex) {
        // the room is Exhibit C; the things in it are C-1, C-2 ... in the order they are damaged
        ex = { id: row.exhibit, name: row.name, letter: `${this.cases[this.ci].exhibit}-${this.exhibits.size + 1}`, dollars: 0, causes: {}, price: this.api.damages.exhibitPrice(row.exhibit) };
        this.exhibits.set(row.exhibit, ex);
      }
      ex.dollars += row.dollars;
      ex.causes[row.cause] = (ex.causes[row.cause] || 0) + 1;
      this.callOut(ex);
      return;
    }
    let h = this.other.get(key);
    if (!h) { h = { dollars: 0, recs: new Set(), events: 0 }; this.other.set(key, h); }
    h.dollars += row.dollars;
    h.recs.add(row.rec);
    h.events += 1;
  }

  // "EXHIBIT D-3 · Grandfather clock, eight-day movement · $816", small, in
  // the corner (founder's standing rule: nothing covers the view). One
  // chip per exhibit while it is live, so a shelf of bottles going over is
  // one line counting up, not forty.
  callOut(ex) {
    let chip = this.calls.get(ex.id);
    if (!chip) {
      if (this.calls.size >= 3) {
        const [oldId, old] = this.calls.entries().next().value;
        clearTimeout(old.timer);
        old.el.remove();
        this.calls.delete(oldId);
      }
      const el = document.createElement('div');
      el.className = 'st-call';
      el.innerHTML = `<div class="k"><span>EXHIBIT ${ex.letter}</span><b></b></div><div class="n">${esc(ex.name)}</div>`;
      this.callsEl.appendChild(el);
      void el.offsetWidth;
      el.classList.add('in');
      chip = { el, amt: el.querySelector('b'), timer: 0 };
      cue('register');
      this.calls.set(ex.id, chip);
    }
    chip.amt.textContent = usd(ex.dollars);
    clearTimeout(chip.timer);
    chip.timer = setTimeout(() => {
      chip.el.classList.remove('in');
      setTimeout(() => { chip.el.remove(); if (this.calls.get(ex.id) === chip) this.calls.delete(ex.id); }, 300);
    }, 3200);
  }

  // -- the statement of damages -----------------------------------------------------
  showStatement() {
    const c = this.cases[this.ci];
    this.screen = 'statement';
    this.endFraming();
    this.shell.timerEl.textContent = '';
    const total = this.dollars;
    const thr = this.thresholds(c);
    const stars = this.starsFor(c, total);
    const prevBest = this.save.best[c.id] || 0, prevStars = this.save.stars[c.id] || 0;
    const tries = this.save.tries[c.id] || 0;
    this.save.best[c.id] = Math.max(prevBest, Math.round(total));
    this.save.stars[c.id] = Math.max(prevStars, stars);
    this.save.tries[c.id] = tries + 1;
    this.persist();
    const nextCase = this.cases[this.ci + 1];
    const opened = nextCase && stars >= 1 && prevStars < 1;

    // Schedule 1: named exhibits, in the order they were damaged. A long
    // evening keeps its dozen largest and rolls the rest into one line.
    let named = [...this.exhibits.values()];
    let rest = null;
    if (named.length > 14) {
      const keep = new Set([...named].sort((a, b) => b.dollars - a.dollars).slice(0, 12).map((e) => e.id));
      const cut = named.filter((e) => !keep.has(e.id));
      rest = { n: cut.length, dollars: cut.reduce((s, e) => s + e.dollars, 0) };
      named = named.filter((e) => keep.has(e.id));
    }
    // the form's total is the sum of its printed lines, to the cent (the
    // sim's own total is whole dollars; a claim form has to add up)
    let delay = 0, formCents = 0;
    const beats = []; // when each line inks in: the adding machine keeps time
    const row = (l, d, small, a) => {
      formCents += Math.round(a * 100);
      beats.push(delay + 70);
      return `<div class="st-row" style="animation-delay:${(delay += 70)}ms"><span class="l">${l}</span><span class="d">${d}${small ? `<small>${small}</small>` : ''}</span><span class="a">${cents(a)}</span></div>`;
    };
    const schedA = named.map((e) => {
      // several of the same thing (three perfume bottles) share an exhibit:
      // more than one list price claimed means more than one of them
      const qty = e.price > 0 ? Math.max(1, Math.ceil(e.dollars / e.price - 0.02)) : 1;
      const totalLoss = e.price > 0 && e.dollars >= e.price * qty - 0.5;
      // a total loss prints the list price: the sim splits a compound's
      // price across its pieces in f32, and the pieces add back a cent off
      return row(e.letter, `${esc(e.name)}${qty > 1 ? ` &times;${qty}` : ''}`,
        `${causeText(e.causes)}${totalLoss ? ' &mdash; a total loss' : ` &middot; list ${cents(e.price)}`}`, totalLoss ? e.price * qty : e.dollars);
    }).join('') + (rest ? row('&hellip;', `Further named exhibits (${rest.n})`, 'itemized in the record', rest.dollars) : '');
    const keys = ORDER.filter((k) => this.other.has(k));
    const line = (k) => {
      const h = this.other.get(k), sv = SERVICES[k];
      const n = sv ? h.events : h.recs.size;
      const unit = sv ? sv[n === 1 ? 0 : 1] : n === 1 ? 'item' : 'items';
      return row('', HEADINGS[k], `${n} ${unit}`, h.dollars);
    };
    const schedB = keys.filter((k) => !SERVICES[k]).map(line).join('');
    const schedC = keys.filter((k) => SERVICES[k]).map(line).join('');
    const nothing = !schedA && !schedB && !schedC;
    const ruling = lettered(!thr ? EMPTY_ROOM : stars ? c.ruling[stars - 1] : NO_STARS[tries % NO_STARS.length], c);
    const day = c.when;
    this.show(`<div class="st-stmt">
      <div class="st-scroll"><div class="st-paper">
        <div class="st-p-top"><span>${COURT.name.toUpperCase()} &middot; ${COURT.division.toUpperCase()}</span><span>No. ${c.no}</span></div>
        <div class="st-p-cap">${TITLE_HTML}</div>
        <div class="st-p-in">${esc(this.claimOf(c))}</div>
        <h2>STATEMENT OF DAMAGES</h2>
        <div class="st-p-re">Exhibit ${c.exhibit}: ${esc(c.place.replace(/^The /, 'the '))}, ${esc(c.address)} &middot; ${esc(day)}</div>
        ${nothing ? '<div class="st-none">No damages were established on this record.</div>' : ''}
        ${schedA ? `<div class="st-p-sec">SCHEDULE 1 &middot; NAMED EXHIBITS</div>${schedA}` : ''}
        ${schedB ? `<div class="st-p-sec">SCHEDULE 2 &middot; OTHER PROPERTY</div>${schedB}` : ''}
        ${schedC ? `<div class="st-p-sec">SCHEDULE 3 &middot; SERVICES</div>${schedC}` : ''}
        <div class="st-p-end"></div>
        <div class="st-foot2">
          <div class="st-total" style="animation-delay:${(delay += 160)}ms"><span>TOTAL DAMAGES ESTABLISHED</span><b>${cents(formCents / 100)}</b></div>
          <div class="st-filed"><span class="st-stamp${stars && thr ? '' : ' no'}" style="animation-delay:${(delay += 320)}ms">${!thr ? 'TAKEN AS HEARD' : stars ? 'ESTABLISHED' : 'NOT ESTABLISHED'}</span>
            <span>Entered in open court<br>${COURT.dept} &middot; the Clerk</span></div>
        </div>
      </div></div>
      <div class="st-verdict">
        <div class="st-v-stars">${[0, 1, 2].map((k) => `<i${k < stars ? ` class="on" style="animation-delay:${delay + 260 + k * 240}ms"` : ''}>★</i>`).join('')}</div>
        <div class="st-v-thr">${this.thresholdHTML(c)}</div>
        <div class="st-v-new">${total > prevBest && prevBest > 0 ? 'A NEW HIGH FOR THIS CASE' : prevBest > total ? `BEST ON RECORD ${usd(prevBest)}` : ''}${opened ? `${total > prevBest && prevBest > 0 ? ' · ' : ''}NEXT CASE UNSEALED` : ''}</div>
        <div class="st-v-judge" style="animation-delay:${delay + 900}ms"><div class="st-who court">${SPEAKERS.court}</div><div class="st-line">${esc(ruling)}</div></div>
        <div class="st-v-btns">
          <button class="st-btn${stars && nextCase ? ' dim' : ''}" id="st-again">Play it again</button>
          ${nextCase && this.unlocked(this.ci + 1) ? '<button class="st-btn" id="st-next">Next case &#9656;</button>' : ''}
          <button class="st-btn dim" id="st-docket">Docket</button>
        </div>
      </div>
    </div>`, true);
    // back in court: a double rap, the form, the adding machine down the
    // lines, the stamp as the stars land
    cue('gavel2');
    cue('page');
    for (const t of beats.slice(0, 24)) this.later(t, () => cue('tick'));
    this.later(delay, () => cue('stamp'));
    this.ov.querySelector('#st-again').onclick = () => this.flashback(); // the testimony was heard already
    this.ov.querySelector('#st-docket').onclick = () => this.showDocket();
    const nx = this.ov.querySelector('#st-next');
    if (nx) nx.onclick = () => this.showTestimony(this.ci + 1);
  }

  // test hook: fast-forward the clock
  skip(seconds) { this.shell.skip(seconds); }
}
