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
//
// Over the bank sits a layer of recordings (sounds/manifest.json, loaded
// after the first tap; wiki/research/sound-samples.md): real cats, real
// breaks, real knocks. Nothing waits for them and nothing needs them: every
// call that can use a recording falls through to the bank when its pool is
// empty, so with the files missing, refused or undecodable the game sounds
// exactly as it did before there were any.
import { roomIR, ROOM_ACOUSTICS, COURT_ACOUSTICS, catalog, make, objKey, contactHz, STRIKE_V, MODELLED, SIZES, CAT_KINDS } from './sfxbank.js?v=k68';

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const jit = (p) => 1 + (Math.random() * 2 - 1) * p;
// which recordings sit over a struck thing of each material
const KNOCK_POOL = { wood: 'wood', metal: 'metal', ceramic: 'clink', glass: 'clink', soft: 'thud', cardboard: 'thud' };
// How a character plays, on top of how the bank builds it (CAT_CHARS there):
//   rate  playback rate for recordings, and for the bank's standard voice
//         until this character's own buffers arrive
//   talk  how talkative: the viewer divides its gaps between calls by this
//   pick  0..1, which recorded cat it takes: voices are sorted low to high
//   mix   what it actually says when the game asks for a kind of call
// A cat is given a character with setCat(k, name): from its kind where the
// kind has one (Le Chonk is 'chonk'), else from its ordinal.
export const CAT_VOICES = {
  std: { rate: 1, talk: 1, pick: 0.5, mix: { meow: { meow: 0.6, mew: 0.2, chirrup: 0.12, squeak: 0.08 }, trill: { trill: 0.6, chirrup: 0.4 }, chatter: { chatter: 0.6, chirp: 0.4 } } },
  chonk: { rate: 0.84, talk: 0.7, pick: 0, mix: { meow: { meow: 0.75, mrrow: 0.25 }, trill: { trill: 0.8, chirrup: 0.2 }, chatter: { chatter: 0.8, chirp: 0.2 } } },
  kitten: { rate: 1.14, talk: 1.3, pick: 1, mix: { meow: { mew: 0.5, squeak: 0.3, meow: 0.2 }, trill: { chirrup: 0.7, trill: 0.3 }, chatter: { chirp: 0.7, chatter: 0.3 } } },
  talker: { rate: 0.97, talk: 1.8, pick: 0.3, mix: { meow: { meow: 0.7, mrrow: 0.2, chirrup: 0.1 }, trill: { trill: 0.5, chirrup: 0.5 }, chatter: { chatter: 0.5, chirp: 0.5 } } },
  shy: { rate: 1.06, talk: 0.5, pick: 0.75, mix: { meow: { squeak: 0.5, mew: 0.3, chirrup: 0.2 }, trill: { chirrup: 0.6, trill: 0.4 }, chatter: { chirp: 0.6, chatter: 0.4 } } },
};
// the characters a standard cat takes, by its ordinal. 'chonk' is not among
// them: that one belongs to the kind (the viewer's sfx.catChar)
export const CAT_ORDER = ['std', 'talker', 'kitten', 'shy'];
// which recordings can stand in for a kind of call, and how long a cut may be
const CALL_POOL = { meow: ['meow', 0.5, 9], mew: ['meow', 0, 0.56], trill: ['trill', 0, 9], chirrup: ['trill', 0, 0.5], mrrow: ['trill', 0.5, 9], chirp: ['chatter', 0, 9] };

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
    this.samples = {};       // pool -> [{ buf, voice, f0, i }] recordings, in manifest order
    this.sampleState = 'off'; // off | loading | ready | failed
    this.cats = {};          // cat ordinal -> { char, voices: { pool: voice } }
    this.catReal = 1;        // how often a call is a recording when one fits (0 = the bank's voices only)
    this.recLevel = 1;       // recorded breaks, knocks and splashes against the bank under them (0 = bank only)
    this.objects = new Map(); // obj:* keys in the bank, oldest first; asked: keys requested, not yet in
    this.asked = new Set();
    this.maxObjects = 96;
    this.worker = null;
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

  busOf(key) { return /^ui:/.test(key) ? 'ui' : /^(cat:|rec:(purr|meow|trill|chatter|paws)|paw|land|whoosh)/.test(key) ? 'cats' : 'fx'; }

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
    this.asked.delete(key); // it is in: no longer pending
    if (key.startsWith('obj:') && !this.objects.has(key)) {
      this.objects.set(key, 1);
      // a room has a few dozen distinct objects; past the cap the one
      // struck longest ago goes, and can be asked for again
      if (this.objects.size > this.maxObjects) {
        const old = this.objects.keys().next().value;
        this.objects.delete(old);
        this.asked.delete(old);
        delete this.bank[old];
        this.worker?.postMessage({ forget: [old] });
      }
    }
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
      // the worker stays up after 'done': objects and cat characters are
      // built when a room or a cat asks for them (want)
      else if (m.type === 'done') this.ready = this.complete = true;
    };
    w.onerror = (e) => console.error('sfx bank worker', e.message || e);
    this.worker = w;
    w.postMessage({ sr: this.ctx.sampleRate, want: [...this.asked] });
  }

  // offline / fallback: build here
  loadSync() {
    for (const [key, gen] of catalog(this.ctx.sampleRate)) this.addBuffer(key, gen());
    this.ready = this.complete = true;
    for (const key of this.asked) for (const data of make(key, this.ctx.sampleRate)) this.addBuffer(key, data);
  }

  // ask for keys the catalog does not hold (obj:*, cat:<kind>@<char>).
  // They arrive like any other buffer; has(key) says when
  want(keys) {
    const fresh = keys.filter((k) => !this.asked.has(k) && !this.has(k));
    if (!fresh.length) return;
    for (const k of fresh) this.asked.add(k);
    if (this.worker) this.worker.postMessage({ want: fresh });
    else if (this.ready) for (const k of fresh) for (const data of make(k, this.ctx.sampleRate)) this.addBuffer(k, data);
  }

  has(key) { return !!(this.bank[key] && this.bank[key].length); }

  // play one variant of `key`. pan -1..1, rate scales pitch and speed,
  // when is seconds from now (or absolute on an offline context via at).
  // loop: true hands the key to loop() and keeps it going until
  // loop(key, false) — that is how ui:murmur is meant to be played
  // lp: a low-pass in Hz on this one voice — how a softer blow than the one
  // a hit was built at is played (see knock)
  play(key, { pan = 0, gain = 1, rate = 1, when = 0, wet, at, bus, loop = false, lp } = {}) {
    const pool = this.bank[key];
    if (!pool || !pool.length) return false;
    if (loop) return this.loop(key, true, { gain, rate, bus, wet });
    // never the variant this key played last: the same buffer twice running
    // is the repeat an ear catches
    let v = (Math.random() * pool.length) | 0;
    if (pool.length > 1 && v === this.last[key]) v = (v + 1 + ((Math.random() * (pool.length - 1)) | 0)) % pool.length;
    this.last[key] = v;
    return this.start(pool[v], key, { pan, gain, rate, when, wet, at, bus, lp });
  }

  // one voice from one buffer, through pan, bus and send; counted under `key`
  start(buffer, key, { pan = 0, gain = 1, rate = 1, when = 0, wet, at, bus, lp } = {}) {
    const busName = bus ?? this.busOf(key), ui = busName === 'ui';
    if (ui ? this.uiVoices >= this.maxUiVoices : this.voices >= this.maxVoices) {
      this.stats['dropped'] = (this.stats['dropped'] || 0) + 1;
      return false;
    }
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = rate;
    const g = ctx.createGain();
    g.gain.value = gain;
    if (lp && lp < 16000) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = Math.max(120, lp); f.Q.value = 0.5;
      src.connect(f).connect(g);
    } else src.connect(g);
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
  loop(key, on, { gain = 0.5, rate = 1, bus, wet, fade = 0.6, variant = 0 } = {}) {
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
      src.buffer = this.bank[key][Math.min(this.bank[key].length - 1, variant | 0)];
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

  // ------------------------------------------------------- recordings ---
  // Fetch and decode the sample set, a few files at a time, without holding
  // anything up. Any failure — no manifest, a 404, a codec this browser
  // lacks — leaves the pools it touches empty and the bank plays instead.
  async loadSamples(base = 'sounds/') {
    if (this.sampleState !== 'off') return;
    this.sampleState = 'loading';
    let ok = 0;
    try {
      const r = await fetch(base + 'manifest.json');
      if (!r.ok) throw new Error('no manifest');
      const man = await r.json();
      // cats first (the founder's first complaint), then breaks, then the rest
      const first = ['meow', 'trill', 'glass', 'ceramic', 'clink', 'wood', 'metal', 'thud'];
      const pools = Object.keys(man.pools).sort((a, b) => ((first.indexOf(a) + 1) || 99) - ((first.indexOf(b) + 1) || 99));
      const jobs = [];
      for (const p of pools) man.pools[p].forEach((e, i) => jobs.push([p, e, i]));
      let n = 0;
      const lane = async () => {
        while (n < jobs.length) {
          const [p, e, i] = jobs[n++];
          try {
            const res = await fetch(base + e.f);
            if (!res.ok) continue;
            const buf = this.trimmed(await this.decode(await res.arrayBuffer()), p === 'purr');
            const list = (this.samples[p] ||= []);
            list.push({ buf, voice: e.voice, f0: e.f0, i });
            list.sort((x, y) => x.i - y.i);
            // a purr is a loop: it lives in the bank under its own key
            if (p === 'purr') (this.bank['rec:purr'] ||= []).push(buf);
            ok++;
          } catch { /* this one is missing or will not decode: the bank covers it */ }
        }
      };
      await Promise.all([0, 1, 2, 3].map(lane));
    } catch { /* no set at all */ }
    this.sampleState = ok ? 'ready' : 'failed';
    this.stats['samples'] = ok;
    for (const k of Object.keys(this.cats)) this.cats[k].voices = null; // re-cast the cats over the recorded voices
  }

  decode(ab) { return new Promise((res, rej) => { const p = this.ctx.decodeAudioData(ab, res, rej); if (p && p.catch) p.catch(rej); }); }

  // A lossy decode pads both ends by an amount that differs between
  // browsers: cut to the sound itself (2 ms before the first sample over 2%
  // of the peak), so an onset is where the event is. A loop is made here,
  // after the decode, for the same reason: its last 0.3 s crossfaded into
  // its first, equal power
  trimmed(buf, loop) {
    const x = buf.getChannelData(0), sr = buf.sampleRate;
    let pk = 0;
    for (let i = 0; i < x.length; i++) { const v = Math.abs(x[i]); if (v > pk) pk = v; }
    let a = 0, b = x.length;
    while (a < b && Math.abs(x[a]) < 0.02 * pk) a++;
    while (b > a && Math.abs(x[b - 1]) < 0.003 * pk) b--;
    a = Math.max(0, a - Math.round(0.002 * sr));
    b = Math.min(x.length, b + Math.round(0.004 * sr));
    const X = loop ? Math.min(Math.round(0.3 * sr), (b - a) >> 2) : 0, n = Math.max(1, b - a - X);
    const out = this.ctx.createBuffer(1, n, sr), y = out.getChannelData(0);
    for (let i = 0; i < n; i++) y[i] = x[a + i];
    for (let i = 0; i < X; i++) { const w = i / X; y[i] = x[a + i] * Math.sqrt(w) + x[a + n + i] * Math.sqrt(1 - w); }
    return out;
  }

  // play one recording from a pool: never the one it played last, from one
  // recorded cat if `voice` names it, within a length if asked. False when
  // the pool has nothing that fits — the caller plays the bank instead
  sample(pool, { voice, min = 0, max = 99, ...opts } = {}) {
    const all = this.samples[pool];
    if (!all || !all.length) return false;
    // the settings' level for recorded destruction: at 0 the caller's
    // false sends it to the bank, as if the set had never loaded
    const level = opts.bus === 'cats' ? 1 : this.recLevel;
    if (level <= 0) return false;
    if (level !== 1) opts = { ...opts, gain: (opts.gain ?? 1) * level };
    let c = all.filter((e) => (!voice || e.voice === voice) && e.buf.duration >= min && e.buf.duration <= max);
    if (!c.length) c = all.filter((e) => e.buf.duration >= min && e.buf.duration <= max);
    if (!c.length) return false;
    const key = 'rec:' + pool;
    let e = c[(Math.random() * c.length) | 0];
    if (c.length > 1 && e.i === this.last[key]) e = c[(c.indexOf(e) + 1 + ((Math.random() * (c.length - 1)) | 0)) % c.length];
    this.last[key] = e.i;
    return this.start(e.buf, key, opts);
  }

  // ------------------------------------------------------------ knocks ---
  // the key of this object's own buffers, or null while they are being
  // built (the first blow on a new thing plays its material's stock hit)
  object(mat, dims) {
    if (!MODELLED.includes(mat)) return null; // soft things, boxes and balls have recipes, not modes
    const key = objKey(mat, dims);
    if (this.has(key)) {
      if (this.objects.has(key)) { this.objects.delete(key); this.objects.set(key, 1); }
      return key;
    }
    this.want([key]);
    return null;
  }

  // A blow on a thing at v m/s. snd = { mat, size, dims } as the viewer
  // classes a body. The bank renders every hit as a hard blow (STRIKE_V); a
  // softer one is the same sound through a low-pass at the contact's own
  // corner (Hertz: a slower blow is a longer push, and a mode above 1/tau
  // is not rung) and quieter. `layer` puts a recording of that material
  // being struck on top — for the blow that matters, not every rattle
  knock(snd, v, { pan = 0, gain = 1, layer = false, when = 0 } = {}) {
    const mat = snd.mat, g = gain * clamp(Math.pow(v / STRIKE_V, 0.8), 0.06, 1.25) * clamp(0.45 + snd.size * 1.4, 0.45, 1.1);
    let key, rate = 1, lp;
    if (MODELLED.includes(mat)) {
      key = snd.dims && this.object(mat, snd.dims);
      if (!key) {
        let si = 0;
        for (let k = 1; k < SIZES.length; k++) if (Math.abs(Math.log(SIZES[k] / snd.size)) < Math.abs(Math.log(SIZES[si] / snd.size))) si = k;
        key = `hit:${mat}:${si}`;
        rate = clamp(Math.sqrt(SIZES[si] / Math.max(0.01, snd.size)), 0.8, 1.25);
      }
      if (v < STRIKE_V * 0.85) lp = contactHz(mat, snd.size, v) * 1.3;
    } else {
      key = mat === 'ball' ? 'hit:ball:0' : `hit:${mat}:${clamp(Math.round(Math.log(snd.size / 0.03) / Math.log(2.7)), 0, 3)}`;
      if (v < STRIKE_V * 0.85) lp = 500 + 900 * v;
    }
    const ok = this.play(key, { pan, gain: g, rate: rate * jit(0.04), lp, when });
    if (layer && KNOCK_POOL[mat]) {
      // a bigger thing is the same recording slower (the sampler's trick)
      // (glass has one cut of its own, a bottle set down on glass; mostly it borrows china's)
      this.sample(mat === 'glass' && this.samples.glasshit && Math.random() < 0.25 ? 'glasshit' : KNOCK_POOL[mat], { pan, gain: g * 0.8, rate: clamp(Math.pow(0.12 / Math.max(0.02, snd.size), 0.3), 0.7, 1.3) * jit(0.06), lp, when });
    }
    return ok;
  }

  // -------------------------------------------------------------- cats ---
  // give cat k a character (a CAT_VOICES name). Its own bank voices are
  // asked for; until they arrive it speaks in the standard voice, shifted
  setCat(k, char = CAT_ORDER[k % CAT_ORDER.length]) {
    if (!CAT_VOICES[char]) char = 'std';
    if (this.cats[k]?.char === char) return this.cats[k];
    this.cats[k] = { char, voices: null };
    if (char !== 'std') this.want(CAT_KINDS.map((kind) => `cat:${kind}@${char}`));
    return this.cats[k];
  }
  catTalk(k) { return CAT_VOICES[(this.cats[k] || this.setCat(k)).char].talk; }

  // which recorded cat each cat is: the pool's voices sorted low to high,
  // this cat's `pick` along them, the next free one if another cat has it —
  // so three cats are three animals. Only voices with two or more cuts
  cast(k, pool) {
    const c = this.cats[k] || this.setCat(k);
    c.voices ||= {};
    if (c.voices[pool] !== undefined) return c.voices[pool];
    const by = {};
    for (const e of this.samples[pool] || []) if (e.voice) (by[e.voice] ||= []).push(e.f0 || 0);
    const names = Object.keys(by).filter((v) => by[v].length >= 2).sort((a, b) => Math.min(...by[a]) - Math.min(...by[b]));
    if (!names.length) return (c.voices[pool] = null);
    const taken = new Set(Object.values(this.cats).map((o) => o !== c && o.voices && o.voices[pool]).filter(Boolean));
    let i = Math.round(CAT_VOICES[c.char].pick * (names.length - 1));
    for (let n = 0; n < names.length && taken.has(names[i]); n++) i = (i + 1) % names.length;
    return (c.voices[pool] = names[i]);
  }

  // cat k says something of this kind. The character decides what exactly
  // (a kitten asked to meow may squeak), a recording of its own recorded
  // cat is used when one fits, else the bank's voice for its character
  catCall(k, kind, { pan = 0, gain = 0.5, wet = 0.8, when = 0 } = {}) {
    const c = this.cats[k] || this.setCat(k), V = CAT_VOICES[c.char];
    const mix = V.mix[kind];
    if (mix) {
      let r = Math.random();
      for (const [name, w] of Object.entries(mix)) { if ((r -= w) <= 0) { kind = name; break; } }
    }
    const rec = CALL_POOL[kind];
    if (rec && Math.random() < this.catReal
      && this.sample(rec[0], { voice: this.cast(k, rec[0]), min: rec[1], max: rec[2], pan, gain: gain * 1.1, rate: V.rate * jit(0.03), wet, when, bus: 'cats' })) {
      this.stats['cat:' + kind] = (this.stats['cat:' + kind] || 0) + 1;
      return true;
    }
    const own = `cat:${kind}@${c.char}`;
    if (c.char !== 'std' && this.has(own)) return this.play(own, { pan, gain, rate: jit(0.04), wet, when });
    return this.play(`cat:${kind}`, { pan, gain, rate: V.rate * jit(0.04), wet, when });
  }
}
