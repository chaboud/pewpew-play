// sfx.js — the sound engine: plays the procedural bank (sfxbank.js) on a
// small mixing graph — a dry bus and a room-reverb send into a gentle
// compressor so a bookcase avalanche doesn't clip. Works on a live
// AudioContext (the bank is built in a worker) or an OfflineAudioContext
// (the bank is built synchronously — that's how the reel test renders).
import { roomIR, ROOM_ACOUSTICS, catalog } from './sfxbank.js?v=k60';

export class SfxEngine {
  constructor(ctx) {
    this.ctx = ctx;
    this.bank = {};          // key -> AudioBuffer[]
    this.ready = false;
    this.stats = {};         // key -> plays (test hook)
    this.voices = 0;
    this.maxVoices = 28;
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
    this.loopSrc = null;
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

  // live: build in a worker, buffers arrive one by one
  loadWorker(url) {
    const w = new Worker(url, { type: 'module' });
    w.onmessage = (ev) => {
      const m = ev.data;
      if (m.type === 'buf') this.addBuffer(m.key, m.data);
      else if (m.type === 'done') { this.ready = true; w.terminate(); }
    };
    w.onerror = (e) => console.error('sfx bank worker', e.message || e);
    w.postMessage({ sr: this.ctx.sampleRate });
  }

  // offline / fallback: build here
  loadSync() {
    for (const [key, gen] of catalog(this.ctx.sampleRate)) this.addBuffer(key, gen());
    this.ready = true;
  }

  has(key) { return !!(this.bank[key] && this.bank[key].length); }

  // play one variant of `key`. pan -1..1, rate scales pitch and speed,
  // when is seconds from now (or absolute on an offline context via at)
  play(key, { pan = 0, gain = 1, rate = 1, when = 0, wet = 1, at } = {}) {
    const pool = this.bank[key];
    if (!pool || !pool.length) return false;
    if (this.voices >= this.maxVoices) {
      this.stats['dropped'] = (this.stats['dropped'] || 0) + 1;
      return false;
    }
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = pool[(Math.random() * pool.length) | 0];
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
    out.connect(this.dry);
    if (wet > 0) {
      const ws = ctx.createGain();
      ws.gain.value = wet;
      out.connect(ws).connect(this.wetSend);
    }
    this.voices++;
    src.onended = () => { this.voices--; };
    src.start(at ?? ctx.currentTime + when);
    this.stats[key] = (this.stats[key] || 0) + 1;
    return true;
  }

  // the purr: one looping voice, faded in and out
  loop(key, on, { gain = 0.5, rate = 1 } = {}) {
    const ctx = this.ctx;
    if (on && !this.loopSrc && this.has(key)) {
      const src = ctx.createBufferSource();
      src.buffer = this.bank[key][0];
      src.loop = true;
      src.playbackRate.value = rate;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(gain, ctx.currentTime + 0.6);
      src.connect(g).connect(this.dry);
      src.start();
      this.loopSrc = { src, g };
      this.stats[key] = (this.stats[key] || 0) + 1;
    } else if (!on && this.loopSrc) {
      const { src, g } = this.loopSrc;
      this.loopSrc = null;
      g.gain.cancelScheduledValues(ctx.currentTime);
      g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      src.stop(ctx.currentTime + 0.55);
    }
  }
}
