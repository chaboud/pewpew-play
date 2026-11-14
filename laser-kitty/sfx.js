// sfx.js — the sound engine: plays the procedural bank (sfxbank.js) on a
// small mixing graph — a dry bus and a room-reverb send into a gentle
// compressor so a bookcase avalanche doesn't clip. Two input buses sit in
// front of it, cats and destruction, each with its own level (the settings
// sliders), and each feeds both the dry bus and the room send. A third bus,
// ui, carries the courtroom (keys ui:*): it has its own small room, joins
// after the compressor so a pile-up cannot duck a gavel, and answers to
// neither slider. Works on a live AudioContext (the bank is built in a
// worker) or an OfflineAudioContext (the bank is built synchronously —
// that's how the reel test renders).
import { roomIR, ROOM_ACOUSTICS, COURT_ACOUSTICS, catalog } from './sfxbank.js?v=k66';

// how much of each courtroom sound goes to the courtroom's reverb when the
// caller does not say: a gavel is in the room, a ka-ching over gameplay is
// on the HUD and stays close
const UI_WET = { 'ui:register': 0.15, 'ui:tick': 0.08, 'ui:steno': 0.5, 'ui:page': 0.5, 'ui:murmur': 0.6 };

export class SfxEngine {
  constructor(ctx) {
    this.ctx = ctx;
    this.bank = {};          // key -> AudioBuffer[]
    this.ready = false;      // the core set is in (voices and ui:* may trail it)
    this.complete = false;   // every key is in
    this.stats = {};         // key -> plays (test hook)
    this.voices = 0;
    this.maxVoices = 28;
    this.uiVoices = 0;       // the courtroom has its own budget: a mass break
    this.maxUiVoices = 48;   // must not be able to starve a ka-ching
    this.last = {};          // key -> variant last played (no immediate repeats)
    this.master = ctx.createGain();
    this.master.gain.value = 0.5;
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -14;
    this.comp.knee.value = 8;
    this.comp.ratio.value = 5;
    this.comp.attack.value = 0.003;
    this.comp.release.value = 0.2;
    this.dry = ctx.createGain();
    this.wetSend = ctx.createGain();
    this.wetSend.gain.value = 0.22;
    this.conv = ctx.createConvolver();
    this.conv.normalize = false;
    this.dry.connect(this.comp);
    this.wetSend.connect(this.conv).connect(this.comp);
    this.comp.connect(this.master).connect(ctx.destination);
    this.room = -1;
    this.loops = {};         // key -> { src, g }
    // input buses: voices and the cat's own body (paws, landings, the pounce
    // whoosh) on 'cats'; everything that breaks, falls or spills on 'fx'
    this.bus = {};
    for (const name of ['cats', 'fx']) {
      const d = ctx.createGain(), w = ctx.createGain();
      d.connect(this.dry);
      w.connect(this.wetSend);
      this.bus[name] = { d, w };
    }
    // the courtroom: wood panelling and a high ceiling, whatever room the
    // flashback is in
    {
      const d = ctx.createGain(), w = ctx.createGain(), send = ctx.createGain(), conv = ctx.createConvolver();
      conv.normalize = false;
      const [l, r] = roomIR(COURT_ACOUSTICS[0], COURT_ACOUSTICS[1], ctx.sampleRate, 99);
      const b = ctx.createBuffer(2, l.length, ctx.sampleRate);
      b.copyToChannel(l, 0);
      b.copyToChannel(r, 1);
      conv.buffer = b;
      send.gain.value = 0.3;
      // its own limiter: a shelf of exhibits can ring up twenty ka-chings in
      // a second, and they add. A DynamicsCompressorNode applies make-up
      // gain by itself (+3.4 dB at these settings, measured through the
      // reel); the trim takes it back out so quiet sounds pass at unity
      const lim = ctx.createDynamicsCompressor(), trim = ctx.createGain();
      lim.threshold.value = -8; lim.knee.value = 4; lim.ratio.value = 8; lim.attack.value = 0.002; lim.release.value = 0.12;
      trim.gain.value = 0.676;
      d.connect(lim);
      w.connect(send).connect(conv).connect(lim);
      lim.connect(trim).connect(this.master);
      this.bus.ui = { d, w };
    }
  }

  busOf(key) { return /^ui:/.test(key) ? 'ui' : /^(cat:|paw|land|whoosh)/.test(key) ? 'cats' : 'fx'; }

  // input level for one bus, 0..2 (1 = as mixed)
  setLevel(name, v) {
    const b = this.bus[name];
    if (!b) return;
    const t = this.ctx.currentTime;
    for (const g of [b.d.gain, b.w.gain]) { g.cancelScheduledValues(t); g.setTargetAtTime(Math.max(0, v), t, 0.03); }
  }

  setRoom(room) {
    if (room === this.room) return;
    this.room = room;
    const [rt, br] = ROOM_ACOUSTICS[room] ?? [0.6, 0.5];
    const [l, r] = roomIR(rt, br, this.ctx.sampleRate, 7 + room);
    const b = this.ctx.createBuffer(2, l.length, this.ctx.sampleRate);
    b.copyToChannel(l, 0);
    b.copyToChannel(r, 1);
    this.conv.buffer = b;
    // bigger, livelier rooms send a little more
    this.wetSend.gain.value = 0.16 + Math.min(0.14, rt * 0.08);
  }

  addBuffer(key, data) {
    const b = this.ctx.createBuffer(1, data.length, this.ctx.sampleRate);
    b.copyToChannel(data, 0);
    (this.bank[key] ||= []).push(b);
  }

  // live: build in a worker, buffers arrive one by one. 'ready' comes when
  // the core set is in — the first tap waits for that and no longer; the
  // instrument voices and the courtroom follow, and has(key) says which
  loadWorker(url) {
    const w = new Worker(url, { type: 'module' });
    w.onmessage = (ev) => {
      const m = ev.data;
      if (m.type === 'buf') this.addBuffer(m.key, m.data);
      else if (m.type === 'ready') this.ready = true;
      else if (m.type === 'done') { this.ready = this.complete = true; w.terminate(); }
    };
    w.onerror = (e) => console.error('sfx bank worker', e.message || e);
    w.postMessage({ sr: this.ctx.sampleRate });
  }

  // offline / fallback: build here
  loadSync() {
    for (const [key, gen] of catalog(this.ctx.sampleRate)) this.addBuffer(key, gen());
    this.ready = this.complete = true;
  }

  has(key) { return !!(this.bank[key] && this.bank[key].length); }

  // play one variant of `key`. pan -1..1, rate scales pitch and speed,
  // when is seconds from now (or absolute on an offline context via at).
  // loop: true hands the key to loop() and keeps it going until
  // loop(key, false) — that is how ui:murmur is meant to be played
  play(key, { pan = 0, gain = 1, rate = 1, when = 0, wet, at, bus, loop = false } = {}) {
    const pool = this.bank[key];
    if (!pool || !pool.length) return false;
    if (loop) return this.loop(key, true, { gain, rate, bus, wet });
    const busName = bus ?? this.busOf(key), ui = busName === 'ui';
    if (ui ? this.uiVoices >= this.maxUiVoices : this.voices >= this.maxVoices) {
      this.stats['dropped'] = (this.stats['dropped'] || 0) + 1;
      return false;
    }
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    // never the variant this key played last: the same buffer twice running
    // is the repeat an ear catches
    let v = (Math.random() * pool.length) | 0;
    if (pool.length > 1 && v === this.last[key]) v = (v + 1 + ((Math.random() * (pool.length - 1)) | 0)) % pool.length;
    this.last[key] = v;
    src.buffer = pool[v];
    src.playbackRate.value = rate;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    let out = g;
    if (ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = Math.max(-1, Math.min(1, pan));
      g.connect(p);
      out = p;
    }
    const b = this.bus[busName];
    out.connect(b.d);
    const send = wet ?? (ui ? UI_WET[key] ?? 1 : 1);
    if (send > 0) {
      const ws = ctx.createGain();
      ws.gain.value = send;
      out.connect(ws).connect(b.w);
    }
    if (ui) { this.uiVoices++; src.onended = () => { this.uiVoices--; }; }
    else { this.voices++; src.onended = () => { this.voices--; }; }
    src.start(at ?? ctx.currentTime + when);
    this.stats[key] = (this.stats[key] || 0) + 1;
    return true;
  }

  // the debris bed (the compound crash's floor): two loops of trickling
  // grains of different lengths, their level following how much just broke
  bed(level) {
    const ctx = this.ctx;
    if (!this.bedG) {
      if (!this.has('bed:0') || !this.has('bed:1')) return;
      this.bedG = ctx.createGain();
      this.bedG.gain.value = 0;
      this.bedG.connect(this.bus.fx.d);
      const ws = ctx.createGain();
      ws.gain.value = 0.8;
      this.bedG.connect(ws).connect(this.bus.fx.w);
      for (const k of ['bed:0', 'bed:1']) {
        const src = ctx.createBufferSource();
        src.buffer = this.bank[k][0];
        src.loop = true;
        src.playbackRate.value = 0.94 + Math.random() * 0.12;
        src.connect(this.bedG);
        src.start();
      }
      this.bedLevel = 0;
    }
    if (Math.abs(level - this.bedLevel) < 0.01) return;
    this.bedLevel = level;
    this.bedG.gain.setTargetAtTime(level, ctx.currentTime, level > this.bedG.gain.value ? 0.05 : 0.35);
  }

  // a looping voice, one per key, faded in and out: the purr, the
  // courtroom's murmur. loop(key, true) on a loop already running only
  // moves its level; loop(key, false) fades it away. Returns whether the
  // loop is running after the call
  loop(key, on, { gain = 0.5, rate = 1, bus, wet, fade = 0.6 } = {}) {
    const ctx = this.ctx, cur = this.loops[key];
    if (on && cur) {
      if (cur.gain !== gain) {
        cur.gain = gain;
        cur.g.gain.cancelScheduledValues(ctx.currentTime);
        cur.g.gain.setTargetAtTime(gain, ctx.currentTime, fade / 3);
      }
      return true;
    }
    if (on && this.has(key)) {
      const src = ctx.createBufferSource();
      src.buffer = this.bank[key][0];
      src.loop = true;
      src.playbackRate.value = rate;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), ctx.currentTime + fade);
      const busName = bus ?? this.busOf(key), b = this.bus[busName];
      src.connect(g).connect(b.d);
      // the purr stays dry (it is at your ear); the murmur is the room
      const send = wet ?? (busName === 'ui' ? UI_WET[key] ?? 1 : 0);
      if (send > 0) {
        const ws = ctx.createGain();
        ws.gain.value = send;
        g.connect(ws).connect(b.w);
      }
      src.start();
      this.loops[key] = { src, g, gain };
      this.stats[key] = (this.stats[key] || 0) + 1;
      return true;
    }
    if (!on && cur) {
      delete this.loops[key];
      cur.g.gain.cancelScheduledValues(ctx.currentTime);
      cur.g.gain.setValueAtTime(Math.max(0.0001, cur.g.gain.value), ctx.currentTime);
      cur.g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      cur.src.stop(ctx.currentTime + 0.55);
    }
    return false;
  }
}
