// career.js — the "actual game" (founder round: play link + progression +
// achievements; ladder living -> bathroom -> kitchen -> great room).
//
// Design stance: Free Play (index.html) stays the untouched toybox with
// every slider. Career is the same engine behind a locked door: fixed
// tuning, 3-minute visits, score = the damage you bank, stars gate the
// next room. All state in localStorage ('lk-career'); no server.
//
// The medal bus consumes the SAME sim event stream the HUD does — pure
// counters over event codes plus two per-frame observations (puddle
// decals on screen, every-cat-loafing) — so the detection logic ports to
// the Unity build by re-implementing one small pure object.
//
// Thresholds are PROVISIONAL (marked in the wiki): tuned to feel, not
// measurement. The founder playtests them down or up.

const ROOMS = [
  { room: 0, name: 'Living Room', cats: 1, stars: [2000, 5000, 10000],
    blurb: 'One cat. A TV, a bookcase, and a lot of regret waiting to happen.' },
  { room: 2, name: 'Bathroom', cats: 2, stars: [1500, 4000, 8000],
    blurb: 'Two cats. Porcelain, perfume, and a very grabbable shower curtain.' },
  { room: 3, name: 'Kitchen', cats: 2, stars: [2500, 6000, 12000],
    blurb: 'Two cats. The stock pot is full and the plates are stacked high.' },
  { room: 1, name: 'Great Room', cats: 3, stars: [3000, 8000, 16000],
    blurb: 'Three cats. The piano, the bar cart, the heirloom clock. Good luck.' },
];
const RUN_SECONDS = 180;

const MEDALS = [
  { id: 'deposit', name: 'Security Deposit', desc: 'Bank 1,000 in one visit',
    test: (s) => s.score >= 1000 },
  { id: 'redecorated', name: 'Redecorated', desc: 'Topple 25 things in one visit',
    test: (s) => s.toppled >= 25 },
  { id: 'chain7', name: 'Kessler Syndrome', desc: 'Ride a x7 chain',
    test: (s) => s.maxChain >= 7 },
  { id: 'crunch', name: 'Demolition Crew', desc: 'Sever 3 pieces of furniture in one visit',
    test: (s) => s.severed >= 3 },
  { id: 'sparkjoy', name: 'Spark Joy', desc: '3 electrical send-offs in one visit',
    test: (s) => s.sparkBursts >= 3 },
  { id: 'wetfloor', name: 'Wet Floor Sign', desc: '8 paw prints tracked in one visit',
    test: (s) => s.prints >= 8 },
  { id: 'slippery', name: 'Slippery When Wet', desc: '3 puddles on the floor at once',
    test: (s) => s.maxPuddles >= 3 },
  { id: 'chef', name: "Chef's Special", desc: 'Dump the stock pot',
    test: (s) => s.potSpill },
  { id: 'freshbread', name: 'Fresh Bread', desc: 'Every cat loafing at the same time',
    test: (s) => s.allLoaf },
  { id: 'goldrush', name: 'Gold Rush', desc: 'Take gold in any room',
    test: (s, run) => run && s.score >= run.stars[2] },
];

const css = `
#panel.open { z-index: 45; }
#ck-overlay { position: fixed; inset: 0; z-index: 40; display: flex;
  align-items: center; justify-content: center; flex-direction: column;
  background: rgba(14,12,20,0.86); color: #e6e2f0;
  font: 500 14px system-ui, sans-serif; padding: 18px; text-align: center; }
#ck-overlay h1 { font-size: 26px; margin: 0 0 4px; color: #ffe86b; letter-spacing: 0.04em; }
#ck-overlay .sub { color: #9ad; font-size: 12px; letter-spacing: 0.12em; margin-bottom: 18px; }
.ck-card { width: min(340px, 86vw); margin: 7px 0; padding: 12px 14px; border-radius: 12px;
  border: 1px solid #3a3644; background: rgba(30,27,38,0.95); text-align: left; }
.ck-card.locked { opacity: 0.45; }
.ck-card .nm { font-weight: 700; font-size: 16px; color: #fff; display: flex; justify-content: space-between; }
.ck-card .bl { color: #a9a4b8; font-size: 12px; margin-top: 2px; }
.ck-card .bst { color: #9ad; font-size: 11px; margin-top: 5px; }
.ck-stars { letter-spacing: 0.1em; color: #ffd75e; }
.ck-btn { margin-top: 14px; padding: 10px 22px; border-radius: 10px; border: 1px solid #53c8d8;
  background: rgba(40,80,90,0.5); color: #bff2fa; font: 700 15px system-ui, sans-serif; }
.ck-btn.dim { border-color: #3a3644; color: #8a8798; background: rgba(30,27,38,0.8); }
#ck-timer { position: fixed; top: calc(env(safe-area-inset-top, 8px) + 52px); left: 0; right: 0;
  text-align: center; z-index: 5; pointer-events: none;
  font: 700 17px ui-monospace, monospace; color: #7dffd0; text-shadow: 0 2px 5px #000; }
#ck-timer.low { color: #ff7d6b; }
#ck-toasts { position: fixed; top: 32%; left: 0; right: 0; z-index: 41; pointer-events: none; text-align: center; }
.ck-toast { display: inline-block; margin: 4px; padding: 8px 16px; border-radius: 20px;
  border: 1px solid #ffd75e; background: rgba(30,26,20,0.92); color: #ffd75e;
  font: 700 13px system-ui, sans-serif; animation: cktoast 3s ease forwards; }
@keyframes cktoast { 0% { opacity: 0; transform: translateY(12px); }
  12% { opacity: 1; transform: none; } 82% { opacity: 1; } 100% { opacity: 0; } }
.ck-medals { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; max-width: 360px; margin-top: 10px; }
.ck-medal { padding: 5px 10px; border-radius: 14px; font-size: 11px; border: 1px solid #3a3644; color: #8a8798; }
.ck-medal.got { border-color: #ffd75e; color: #ffd75e; }
`;

function loadSave() {
  try { return { unlocked: 1, best: {}, medals: {}, total: 0, ...JSON.parse(localStorage.getItem('lk-career') || '{}') }; }
  catch { return { unlocked: 1, best: {}, medals: {}, total: 0 }; }
}

export class Career {
  // api: { setRoom(room, cats), score(), pause(on) } supplied by main.js
  constructor(api) {
    this.api = api;
    this.save = loadSave();
    this.state = 'map';
    this.runIdx = 0;
    this.timeLeft = 0;
    this.stats = null;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    this.toasts = document.createElement('div');
    this.toasts.id = 'ck-toasts';
    document.body.appendChild(this.toasts);
    this.timerEl = document.createElement('div');
    this.timerEl.id = 'ck-timer';
    document.body.appendChild(this.timerEl);
    // career hides the sandbox chrome: no tuning, no debug, no free reset
    for (const id of ['gear', 'dbg', 'reset']) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    }
    // the settings panel doubles as career's graphics menu: gameplay
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
    this.showMap();
    window.__career = this; // test hook (skip(), state)
  }

  persist() { try { localStorage.setItem('lk-career', JSON.stringify(this.save)); } catch {} }

  freshStats() {
    return { score: 0, toppled: 0, severed: 0, maxChain: 0, sparkBursts: 0,
      prints: 0, maxPuddles: 0, potSpill: false, allLoaf: false };
  }

  starsFor(idx, score) {
    const s = ROOMS[idx].stars;
    return score >= s[2] ? 3 : score >= s[1] ? 2 : score >= s[0] ? 1 : 0;
  }

  overlay() {
    if (!this.ov) {
      this.ov = document.createElement('div');
      this.ov.id = 'ck-overlay';
      document.body.appendChild(this.ov);
    }
    this.ov.style.display = 'flex';
    return this.ov;
  }

  showMap() {
    this.state = 'map';
    this.timerEl.textContent = '';
    const ov = this.overlay();
    const rows = ROOMS.map((r, i) => {
      const locked = i >= this.save.unlocked;
      const best = this.save.best[i] || 0;
      const stars = this.starsFor(i, best);
      return `<div class="ck-card${locked ? ' locked' : ''}" data-i="${i}">
        <div class="nm"><span>${locked ? '&#128274; ' : ''}${r.name}</span>
        <span class="ck-stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</span></div>
        <div class="bl">${locked ? 'Earn a star in the room above.' : r.blurb}</div>
        ${best ? `<div class="bst">best ${best.toLocaleString()}</div>` : ''}
      </div>`;
    }).join('');
    const got = Object.keys(this.save.medals).length;
    ov.innerHTML = `<h1>LASER KITTY</h1>
      <div class="sub">CAREER &middot; ${got}/${MEDALS.length} MEDALS &middot; LIFETIME ${this.save.total.toLocaleString()}</div>
      ${rows}
      <button class="ck-btn dim" id="ck-free">Free Play &amp; the Lab &rarr;</button>`;
    ov.querySelectorAll('.ck-card').forEach((el) => {
      el.onclick = () => {
        const i = parseInt(el.dataset.i, 10);
        if (i < this.save.unlocked) this.startRun(i);
      };
    });
    ov.querySelector('#ck-free').onclick = () => { location.href = 'index.html'; };
  }

  startRun(idx) {
    this.runIdx = idx;
    this.stats = this.freshStats();
    this.timeLeft = RUN_SECONDS;
    this.state = 'run';
    this.ov.style.display = 'none';
    this.menuBtn.style.display = '';
    this.api.setRoom(ROOMS[idx].room, ROOMS[idx].cats);
  }

  // in-run menu: pauses the clock (the overlay also blocks the pad)
  showMenu() {
    if (this.state !== 'run') return;
    this.state = 'paused';
    const panel = document.getElementById('panel');
    const ov = this.overlay();
    ov.innerHTML = `<h1>PAUSED</h1>
      <div class="sub">${ROOMS[this.runIdx].name} &middot; ${this.timerEl.textContent} left</div>
      <div style="display:flex;flex-direction:column;gap:8px;width:min(300px,80vw)">
        <button class="ck-btn" id="ck-resume">Resume</button>
        <button class="ck-btn dim" id="ck-gfx">Graphics settings</button>
        <button class="ck-btn dim" id="ck-quit">Return to main menu</button>
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
      if (panel) panel.classList.remove('open');
      this.menuBtn.style.display = 'none';
      this.showMap();
    };
  }

  // -- feeds from main.js ------------------------------------------------
  event(code, dims) {
    if (this.state !== 'run' || !this.stats) return;
    const ev = code >>> 28;
    const chain = (code >> 25) & 0x7;
    if (ev === 3) { this.stats.toppled += 1; }
    if (ev === 6) { this.stats.severed += 1; }
    if (ev === 3 || ev === 4 || ev === 6) this.stats.maxChain = Math.max(this.stats.maxChain, chain);
    if (ev === 8) {
      const kind = (code >> 25) & 0x7;
      if (kind === 0) this.stats.prints += 1;
      else this.stats.sparkBursts += 1;
    }
    // the stock pot announces its spill as a Broke on the pot itself
    if (ev === 4 && dims && Math.abs(dims[0] - 0.055) < 0.004 && Math.abs(dims[1] - 0.045) < 0.004) {
      this.stats.potSpill = true;
    }
    this.checkMedals();
  }

  frame(dtMs, obs) {
    if (this.state !== 'run' || !this.stats) return;
    this.timeLeft -= dtMs / 1000;
    this.stats.score = this.api.score();
    if (obs) {
      this.stats.maxPuddles = Math.max(this.stats.maxPuddles, obs.puddles || 0);
      if (obs.cats > 0 && obs.loafing === obs.cats) this.stats.allLoaf = true;
    }
    this.checkMedals();
    const t = Math.max(0, this.timeLeft);
    this.timerEl.textContent = `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
    this.timerEl.classList.toggle('low', t < 30);
    if (this.timeLeft <= 0) this.endRun();
  }

  checkMedals() {
    for (const m of MEDALS) {
      if (this.save.medals[m.id]) continue;
      if (m.test(this.stats, ROOMS[this.runIdx])) {
        this.save.medals[m.id] = Date.now();
        this.persist();
        const t = document.createElement('div');
        t.className = 'ck-toast';
        t.textContent = `★ ${m.name}`;
        this.toasts.appendChild(t);
        setTimeout(() => t.remove(), 3100);
      }
    }
  }

  endRun() {
    this.state = 'end';
    this.menuBtn.style.display = 'none';
    const idx = this.runIdx;
    const score = this.stats.score;
    const stars = this.starsFor(idx, score);
    const prevBest = this.save.best[idx] || 0;
    this.save.best[idx] = Math.max(prevBest, score);
    this.save.total += score;
    if (stars >= 1 && this.save.unlocked === idx + 1 && this.save.unlocked < ROOMS.length) {
      this.save.unlocked = idx + 2 <= ROOMS.length ? idx + 2 : this.save.unlocked;
    }
    this.persist();
    const r = ROOMS[idx];
    const medalRows = MEDALS.map((m) =>
      `<span class="ck-medal${this.save.medals[m.id] ? ' got' : ''}" title="${m.desc}">${m.name}</span>`).join('');
    const nextUnlocked = idx + 1 < ROOMS.length && this.save.unlocked > idx + 1;
    const ov = this.overlay();
    ov.innerHTML = `<h1>TIME!</h1>
      <div class="sub">${r.name}</div>
      <div style="font:800 40px system-ui;color:#ffe86b">${score.toLocaleString()}</div>
      <div class="ck-stars" style="font-size:28px;margin:6px 0">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <div class="bst" style="color:#9ad">${score > prevBest && prevBest > 0 ? 'new best!' : prevBest ? `best ${this.save.best[idx].toLocaleString()}` : ''}</div>
      <div class="ck-medals">${medalRows}</div>
      <div style="display:flex;gap:10px">
        <button class="ck-btn" id="ck-retry">Retry</button>
        ${nextUnlocked ? '<button class="ck-btn" id="ck-next">Next Room</button>' : ''}
        <button class="ck-btn dim" id="ck-map">Rooms</button>
      </div>`;
    ov.querySelector('#ck-retry').onclick = () => this.startRun(idx);
    ov.querySelector('#ck-map').onclick = () => this.showMap();
    const nx = ov.querySelector('#ck-next');
    if (nx) nx.onclick = () => this.startRun(idx + 1);
  }

  // test hook: fast-forward the clock
  skip(seconds = RUN_SECONDS) { this.timeLeft -= seconds; }
}
