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
`;

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
    for (const id of ['s-room', 's-cats', 's-weight', 's-strength', 's-gravity', 's-destruct']) {
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
  }

  // leave a run without finishing it (the host shows its own screen next)
  stop() {
    this.state = 'idle';
    this.menuBtn.style.display = 'none';
    this.timerEl.textContent = '';
    const panel = document.getElementById('panel');
    if (panel) panel.classList.remove('open');
  }

  // in-run menu: pauses the clock (the overlay also blocks the pad)
  showMenu() {
    if (this.state !== 'run') return;
    this.state = 'paused';
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
    if (this.timeLeft <= 0) {
      this.state = 'end';
      this.menuBtn.style.display = 'none';
      this.host.onTimeUp();
      return false;
    }
    return true;
  }

  // test hook: fast-forward the clock
  skip(seconds = RUN_SECONDS) { this.timeLeft -= seconds; }
}
