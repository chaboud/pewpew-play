// run.js — the visit both game modes play. Career (career.js: score and
// medals) and Story (story.js: a civil trial, dollars of damage) are the
// same thing underneath: one locked room, fixed tuning, a three-minute
// clock, an in-run menu. That part lives here once; each mode supplies its
// own screens around it and decides what a finished run means.
//
// Free Play never constructs a RunShell, so none of this costs it anything.

export const RUN_SECONDS = 180;

const css = `
#panel.open { z-index: 45; }
#ck-overlay { position: fixed; inset: 0; z-index: 40; display: flex;
  align-items: center; justify-content: center; flex-direction: column;
  background: rgba(14,12,20,0.86); color: #e6e2f0;
  font: 500 14px system-ui, sans-serif; padding: 18px; text-align: center; }
#ck-overlay h1 { font-size: 26px; margin: 0 0 4px; color: #ffe86b; letter-spacing: 0.04em; }
#ck-overlay .sub { color: #9ad; font-size: 12px; letter-spacing: 0.12em; margin-bottom: 18px; }
.ck-btn { margin-top: 14px; padding: 10px 22px; border-radius: 10px; border: 1px solid #53c8d8;
  background: rgba(40,80,90,0.5); color: #bff2fa; font: 700 15px system-ui, sans-serif; }
.ck-btn.dim { border-color: #3a3644; color: #8a8798; background: rgba(30,27,38,0.8); }
#ck-timer { position: fixed; top: calc(env(safe-area-inset-top, 8px) + 52px); left: 0; right: 0;
  text-align: center; z-index: 5; pointer-events: none;
  font: 700 17px ui-monospace, monospace; color: #7dffd0; text-shadow: 0 2px 5px #000; }
#ck-timer.low { color: #ff7d6b; }

/* the coach: where the laser goes, how to look around, and a nudge when
   the pad has been left alone. Never in the way: no pointer events. */
.ck-coach { position: fixed; z-index: 6; pointer-events: none; text-align: center; color: #fff;
  font: 800 13px system-ui, sans-serif; letter-spacing: 0.14em; text-shadow: 0 2px 6px #000, 0 0 2px #000;
  opacity: 0; transition: opacity 0.35s ease, transform 0.35s cubic-bezier(.2,.9,.3,1); }
.ck-coach.on { opacity: 1; }
.ck-coach small { display: block; margin-top: 3px; font: 600 11.5px system-ui, sans-serif; letter-spacing: 0.04em; color: #e6e2f0; }
#ck-coach-laser { transform: translate(-50%, 10px); color: #ff8a8a; padding: 8px 14px 5px; border-radius: 12px; white-space: nowrap;
  background: rgba(24,21,32,0.9); border: 1px solid #ff5a5a; text-shadow: none; }
#ck-coach-laser.on { transform: translate(-50%, 0); }
#ck-coach-laser i, #ck-nudge i { display: block; font: 400 20px/1 system-ui, sans-serif; letter-spacing: 0; margin-top: 2px; animation: ck-bounce 0.7s ease-in-out infinite alternate; }
#ck-coach-look { left: 50%; top: 32%; transform: translate(-50%, -6px); width: min(300px, 84vw); padding: 9px 12px 10px; border-radius: 12px;
  background: rgba(24,21,32,0.72); border: 1px solid rgba(154,170,221,0.5); color: #cfe0ff; text-shadow: none; }
#ck-coach-look.on { transform: translate(-50%, 0); }
#ck-coach-look b { display: inline-block; font: 400 17px/1 system-ui, sans-serif; letter-spacing: 0; margin: 0 6px; animation: ck-sway 1.3s ease-in-out infinite alternate; }
#ck-nudge { transform: translate(-50%, 26px); padding: 7px 13px 6px; border-radius: 12px; white-space: nowrap;
  background: rgba(24,21,32,0.9); border: 1px solid #ff5a5a; color: #ffd9d9; text-shadow: none;
  font: 700 13px system-ui, sans-serif; letter-spacing: 0.02em; }
#ck-nudge.on { transform: translate(-50%, 0); }
#ck-nudge i { font-size: 15px; color: #ff8a8a; }
@keyframes ck-bounce { from { transform: translateY(-2px); } to { transform: translateY(4px); } }
@keyframes ck-sway { from { transform: translateX(-5px); } to { transform: translateX(5px); } }
@media (prefers-reduced-motion: reduce) { .ck-coach i, .ck-coach b { animation: none !important; } }
`;

// THE COACH (founder, 2026-11-25: "the first level should probably have a
// 'laser here' and 'control the screen with swipes and pinches' or
// something, and linger lack of laser should slide in the little tooltip
// as a helper, sort of a 'yo dawg, play?'"). Three small things over the
// run, none of them a tutorial screen and none of them in the way:
//   * LASER HERE, over the pad, until the pad has been used;
//   * how to move the view, until the view has been moved (or a while
//     has passed: looking around is optional, the laser is not);
//   * a nudge that slides up over the pad whenever the laser has been off
//     for a while, on any level, for as long as the game is played.
// The first two are shown until each has been done once, ever
// (localStorage 'lk-coach'), so a player who quit the first level before
// touching the pad meets them again.
const COACH_KEY = 'lk-coach';
const NUDGE_AFTER = 7; // seconds of a dark pad before the nudge
const NUDGES = [
  'Psst. The laser goes here.',
  'The cat is waiting. Touch here.',
  'No dot, no damages.',
  'Still there? Touch and drag.',
];
class Coach {
  constructor(input) {
    this.input = input; // () => { laser: bool, looks: count }
    this.seen = {};
    try { this.seen = JSON.parse(localStorage.getItem(COACH_KEY) || '{}') || {}; } catch {}
    const touch = matchMedia('(pointer: coarse)').matches;
    const mk = (id, html) => {
      const el = document.createElement('div');
      el.id = id;
      el.className = 'ck-coach';
      el.innerHTML = html;
      document.body.appendChild(el);
      return el;
    };
    this.laserEl = mk('ck-coach-laser', `LASER HERE<small>${touch ? 'touch' : 'press'} and drag: the cat follows the dot</small><i>&#9662;</i>`);
    this.lookEl = mk('ck-coach-look', touch
      ? '<b>&#8596;</b>DRAG UP HERE TO LOOK AROUND<small>pinch to zoom &middot; two fingers to slide the view</small>'
      : '<b>&#8596;</b>DRAG UP HERE TO LOOK AROUND<small>scroll to zoom &middot; drag the &#10021; handle to slide the view</small>');
    this.nudgeEl = mk('ck-nudge', '');
    this.active = false;
    this.nudges = 0;
  }

  // a run begins
  start() {
    this.active = true;
    this.dark = 0; // seconds the laser has been off
    this.lit = 0; // seconds it has been on, this run
    this.age = 0;
    this.looks0 = this.input().looks;
    this.lookAge = 0;
    this.place();
    this.laserEl.classList.toggle('on', !this.seen.laser);
    this.lookEl.classList.toggle('on', !this.seen.look);
  }

  // the pad is an island whose size the player can change: sit on top of it
  place() {
    const pad = document.getElementById('pad');
    if (!pad) return;
    const r = pad.getBoundingClientRect(), vh = document.documentElement.clientHeight || innerHeight;
    for (const el of [this.laserEl, this.nudgeEl]) {
      el.style.left = `${r.left + r.width / 2}px`;
      el.style.bottom = `${Math.max(0, vh - r.top) + 6}px`;
    }
  }

  mark(k) {
    this.seen[k] = 1;
    try { localStorage.setItem(COACH_KEY, JSON.stringify(this.seen)); } catch {}
  }

  tick(dtMs) {
    if (!this.active) return;
    const dt = dtMs / 1000, inp = this.input();
    this.age += dt;
    if (inp.laser) {
      this.lit += dt;
      this.dark = 0;
      this.nudgeEl.classList.remove('on');
      // long enough to have been on purpose
      if (!this.seen.laser && this.lit > 0.6) { this.mark('laser'); this.laserEl.classList.remove('on'); }
    } else {
      this.dark += dt;
      // the nudge waits its turn behind LASER HERE, which says the same thing
      if (this.seen.laser && this.dark > NUDGE_AFTER && !this.nudgeEl.classList.contains('on')) {
        this.place();
        this.nudgeEl.innerHTML = `${NUDGES[this.nudges++ % NUDGES.length]}<i>&#9662;</i>`;
        this.nudgeEl.classList.add('on');
      }
    }
    if (!this.seen.look && this.lookEl.classList.contains('on')) {
      // it leaves once the view has really been moved, or, having had its
      // say, a while after the laser is in use
      if (this.seen.laser) this.lookAge += dt;
      const moved = inp.looks - this.looks0 > 6;
      if (moved) this.mark('look');
      if (moved || this.lookAge > 14) this.lookEl.classList.remove('on');
    }
  }

  // paused, quit, or time up
  stop() {
    this.active = false;
    for (const el of [this.laserEl, this.lookEl, this.nudgeEl]) el.classList.remove('on');
  }
}


export class RunShell {
  // api:  { setRoom(room, cats) } from main.js
  // host: { pauseTitle(): string, quitLabel: string, onQuit(), onTimeUp() }
  constructor(api, host) {
    this.api = api;
    this.host = host;
    this.state = 'idle'; // idle | run | paused | end (hosts add their own screens on top)
    this.timeLeft = 0;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    this.timerEl = document.createElement('div');
    this.timerEl.id = 'ck-timer';
    document.body.appendChild(this.timerEl);
    // a run hides the sandbox chrome: no tuning, no debug, no free reset
    for (const id of ['gear', 'dbg', 'reset']) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    }
    // the settings panel doubles as the in-run graphics menu: gameplay
    // tuning rows are hidden, render rows stay (founder: "a menu that
    // allows for graphics settings change and a return to main menu")
    for (const id of ['s-room', 's-cats', 's-chonks', 's-weight', 's-strength', 's-gravity', 's-destruct']) {
      const el = document.getElementById(id);
      const row = el && el.closest('.row');
      if (row) {
        row.style.display = 'none';
        if (row.previousElementSibling && row.previousElementSibling.tagName === 'LABEL') row.previousElementSibling.style.display = 'none';
      }
    }
    this.menuBtn = document.createElement('button');
    this.menuBtn.id = 'ck-menu';
    this.menuBtn.className = 'ctl';
    this.menuBtn.innerHTML = '&#9776;';
    this.menuBtn.style.left = '10px';
    this.menuBtn.style.display = 'none';
    this.menuBtn.onclick = () => this.showMenu();
    document.body.appendChild(this.menuBtn);
    this.coach = api.input ? new Coach(api.input) : null;
  }

  // the translucent overlay (room visible behind): menus and end cards
  overlay() {
    if (!this.ov) {
      this.ov = document.createElement('div');
      this.ov.id = 'ck-overlay';
      document.body.appendChild(this.ov);
    }
    this.ov.style.display = 'flex';
    return this.ov;
  }

  hideOverlay() { if (this.ov) this.ov.style.display = 'none'; }

  // build the room with the run's fixed tuning; the clock is not running yet
  load(room, cats) { this.api.setRoom(room, cats); }

  go() {
    this.timeLeft = RUN_SECONDS;
    this.state = 'run';
    this.hideOverlay();
    this.menuBtn.style.display = '';
    this.coach?.start();
  }

  // leave a run without finishing it (the host shows its own screen next)
  stop() {
    this.state = 'idle';
    this.coach?.stop();
    this.menuBtn.style.display = 'none';
    this.timerEl.textContent = '';
    const panel = document.getElementById('panel');
    if (panel) panel.classList.remove('open');
  }

  // in-run menu: pauses the clock (the overlay also blocks the pad)
  showMenu() {
    if (this.state !== 'run') return;
    this.state = 'paused';
    if (this.coach) for (const el of [this.coach.laserEl, this.coach.lookEl, this.coach.nudgeEl]) el.style.visibility = 'hidden';
    const panel = document.getElementById('panel');
    const ov = this.overlay();
    ov.innerHTML = `<h1>PAUSED</h1>
      <div class="sub">${this.host.pauseTitle()} &middot; ${this.timerEl.textContent} left</div>
      <div style="display:flex;flex-direction:column;gap:8px;width:min(300px,80vw)">
        <button class="ck-btn" id="ck-resume">Resume</button>
        <button class="ck-btn dim" id="ck-gfx">Graphics settings</button>
        <button class="ck-btn dim" id="ck-quit">${this.host.quitLabel}</button>
      </div>`;
    ov.querySelector('#ck-resume').onclick = () => {
      if (panel) panel.classList.remove('open');
      ov.style.display = 'none';
      this.state = 'run';
      if (this.coach) for (const el of [this.coach.laserEl, this.coach.lookEl, this.coach.nudgeEl]) el.style.visibility = '';
    };
    ov.querySelector('#ck-gfx').onclick = () => {
      if (panel) panel.classList.toggle('open');
    };
    ov.querySelector('#ck-quit').onclick = () => {
      this.stop();
      this.host.onQuit();
    };
  }

  // per frame while a mode is up; returns true while the clock is running
  tick(dtMs) {
    if (this.state !== 'run') return false;
    this.timeLeft -= dtMs / 1000;
    const t = Math.max(0, this.timeLeft);
    this.timerEl.textContent = `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
    this.timerEl.classList.toggle('low', t < 30);
    this.coach?.tick(dtMs);
    if (this.timeLeft <= 0) {
      this.state = 'end';
      this.coach?.stop();
      this.menuBtn.style.display = 'none';
      this.host.onTimeUp();
      return false;
    }
    return true;
  }

  // test hook: fast-forward the clock
  skip(seconds = RUN_SECONDS) { this.timeLeft -= seconds; }
}
