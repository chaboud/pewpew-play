// career.js — the "actual game" (founder round: play link + progression +
// achievements; ladder living -> bathroom -> kitchen -> great room).
//
// Design stance: Free Play (index.html) stays the untouched toybox with
// every slider. Career is the same engine behind a locked door: fixed
// tuning, 3-minute visits, score = the damage you bank, stars gate the
// next room. All state in localStorage ('lk-career'); no server.
//
// The visit itself (the locked room, the clock, the in-run menu) is
// run.js, shared with Story (story.js) — the front door since the civil
// trial arrived. Career is what it always was: the arcade score ladder
// and the medals, reached from the docket.
//
// The medal bus consumes the SAME sim event stream the HUD does — pure
// counters over event codes plus two per-frame observations (puddle
// decals on screen, every-cat-loafing) — so the detection logic ports to
// the Unity build by re-implementing one small pure object.
//
// Thresholds are PROVISIONAL (marked in the wiki): tuned to feel, not
// measurement. The founder playtests them down or up.

import { RunShell } from './run.js?v=k65';

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
.ck-card { width: min(340px, 86vw); margin: 7px 0; padding: 12px 14px; border-radius: 12px;
  border: 1px solid #3a3644; background: rgba(30,27,38,0.95); text-align: left; }
.ck-card.locked { opacity: 0.45; }
.ck-card .nm { font-weight: 700; font-size: 16px; color: #fff; display: flex; justify-content: space-between; }
.ck-card .bl { color: #a9a4b8; font-size: 12px; margin-top: 2px; }
.ck-card .bst { color: #9ad; font-size: 11px; margin-top: 5px; }
.ck-stars { letter-spacing: 0.1em; color: #ffd75e; }
#ck-toasts { position: fixed; top: calc(env(safe-area-inset-top, 8px) + 52px); right: 10px; z-index: 41;
  pointer-events: none; display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.ck-toast { padding: 4px 9px; border-radius: 12px; border: 1px solid #ffd75e;
  background: rgba(30,26,20,0.9); color: #ffd75e; font: 700 11px system-ui, sans-serif;
  animation: cktoast 2.6s ease forwards; }
@keyframes cktoast { 0% { opacity: 0; transform: translateX(24px); }
  14% { opacity: 1; transform: none; } 80% { opacity: 1; } 100% { opacity: 0; } }
`;

function loadSave() {
  try { return { unlocked: 1, best: {}, medals: {}, total: 0, ...JSON.parse(localStorage.getItem('lk-career') || '{}') }; }
  catch { return { unlocked: 1, best: {}, medals: {}, total: 0 }; }
}

export class Career {
  // api: { setRoom(room, cats), score() } supplied by main.js
  constructor(api) {
    this.api = api;
    this.save = loadSave();
    this.runIdx = 0;
    this.stats = null;
    this.shell = new RunShell(api, {
      pauseTitle: () => ROOMS[this.runIdx].name,
      quitLabel: 'Return to main menu',
      onQuit: () => this.showMap(),
      onTimeUp: () => this.endRun(),
    });
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    this.toasts = document.createElement('div');
    this.toasts.id = 'ck-toasts';
    document.body.appendChild(this.toasts);
    this.showMap();
    window.__career = this; // test hook (skip(), state)
  }

  // 'map' | 'run' | 'paused' | 'end'
  get state() { return this.shell.state; }

  persist() { try { localStorage.setItem('lk-career', JSON.stringify(this.save)); } catch {} }

  freshStats() {
    return { score: 0, toppled: 0, severed: 0, maxChain: 0, sparkBursts: 0,
      prints: 0, maxPuddles: 0, potSpill: false, allLoaf: false };
  }

  starsFor(idx, score) {
    const s = ROOMS[idx].stars;
    return score >= s[2] ? 3 : score >= s[1] ? 2 : score >= s[0] ? 1 : 0;
  }

  showMap() {
    this.shell.state = 'map';
    this.shell.timerEl.textContent = '';
    const ov = this.shell.overlay();
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
    ov.innerHTML = `<h1>LASER v. KITTY</h1>
      <div class="sub">CAREER &middot; ${got}/${MEDALS.length} MEDALS &middot; LIFETIME ${this.save.total.toLocaleString()}</div>
      ${rows}
      <div style="display:flex;gap:8px"><button class="ck-btn dim" id="ck-story">Story</button>
      <button class="ck-btn dim" id="ck-free">Free Play</button>
      <button class="ck-btn dim" id="ck-lab">Cat Lab</button></div>`;
    ov.querySelectorAll('.ck-card').forEach((el) => {
      el.onclick = () => {
        const i = parseInt(el.dataset.i, 10);
        if (i < this.save.unlocked) this.startRun(i);
      };
    });
    ov.querySelector('#ck-story').onclick = () => { location.href = 'play.html'; };
    ov.querySelector('#ck-free').onclick = () => { location.href = 'index.html'; };
    ov.querySelector('#ck-lab').onclick = () => { location.href = 'catlab.html'; };
  }

  startRun(idx) {
    this.runIdx = idx;
    this.stats = this.freshStats();
    this.shell.load(ROOMS[idx].room, ROOMS[idx].cats);
    this.shell.go();
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
    this.stats.score = this.api.score();
    if (obs) {
      this.stats.maxPuddles = Math.max(this.stats.maxPuddles, obs.puddles || 0);
      if (obs.cats > 0 && obs.loafing === obs.cats) this.stats.allLoaf = true;
    }
    this.checkMedals();
    this.shell.tick(dtMs); // calls endRun when the clock runs out
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
        setTimeout(() => t.remove(), 2700);
        this.stats.newMedals = (this.stats.newMedals || 0) + 1;
      }
    }
  }

  endRun() {
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
    const nextUnlocked = idx + 1 < ROOMS.length && this.save.unlocked > idx + 1;
    const ov = this.shell.overlay();
    ov.innerHTML = `<h1>TIME!</h1>
      <div class="sub">${r.name}</div>
      <div style="font:800 40px system-ui;color:#ffe86b">${score.toLocaleString()}</div>
      <div class="ck-stars" style="font-size:28px;margin:6px 0">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <div class="bst" style="color:#9ad">${score > prevBest && prevBest > 0 ? 'new best!' : prevBest ? `best ${this.save.best[idx].toLocaleString()}` : ''}</div>
      ${this.stats.newMedals ? `<div class="bst" style="color:#ffd75e">+${this.stats.newMedals} medal${this.stats.newMedals > 1 ? 's' : ''}</div>` : ''}
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
  skip(seconds) { this.shell.skip(seconds); }
}
