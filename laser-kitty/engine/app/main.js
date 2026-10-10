// app/main.js — the engine preview's app layer. It owns the sim (through
// sim.js, the only door to the wasm), the input, the camera rig and the
// fixed-tick loop, and hands the render engine one FrameState a frame.
// It never imports three and never reaches into render/: it picks an
// engine from the registry by name (scripts/check-engine-deps.mjs).
import { loadCore, SimHost } from './sim.js?v=k62';
import { RoomCamera } from './camera.js?v=k62';
import { LaserInput, bindLook } from './input.js?v=k62';
import { createEngine, ENGINES } from '../engines.js?v=k62';
import { EV, evType, evChain, evScore } from '../seam.js?v=k62';
import { mountNav } from '../../nav.js?v=k62';

// the app's room table: engine-neutral art hints a frontend may use
const ROOMS = ['Living room', 'Great room', 'Bathroom', 'Kitchen', 'Mansion entry', 'Garage', 'Family home', 'Apartments', 'Bar & grill', 'Café'];
function roomLook(r) {
  return {
    floor: r === 5 ? 'concrete' : r === 9 ? 'checker' : 'wood',
    sun: r === 7 ? 0.9 : 1.35,
    hemi: r === 7 ? 1.45 : 1.2,
    sunShadow: r !== 7, // the tower: one map over a 23 m facade smears
    ceiling: r === 7 ? 24 : r === 6 ? 4.6 : 3.6,
  };
}
const STATE_NAMES = ['IDLE', 'ALERT', 'STALK', 'WINDUP', 'POUNCE', 'RECOVER', 'BORED', 'ZOOMIES!', 'SEARCH', 'SWAT!'];

const qs = new URLSearchParams(location.search);
const TEST = qs.has('test');
let saved = {};
try { saved = JSON.parse(localStorage.getItem('lk-engine') || '{}'); } catch {}
const cfg = {
  room: qs.has('room') ? +qs.get('room') : saved.room ?? 0,
  engine: qs.get('engine') || saved.engine || 'three',
  cats: +(qs.get('cats') || 1),
  destruct: +(qs.get('destruct') || 0.3),
};
const save = () => { try { localStorage.setItem('lk-engine', JSON.stringify({ room: cfg.room, engine: cfg.engine })); } catch {} };

const coarse = matchMedia('(pointer: coarse)').matches;
const lite = qs.has('lite');
const engineOpts = {
  quality: 2,
  coarse,
  lite,
  ao: (qs.get('ao') ?? (lite ? '0' : '1')) !== '0',
  shadows: qs.get('shadows') || (coarse || lite ? 'light' : 'soft'),
  debug: TEST,
};

const canvas = document.getElementById('scene');
const lk = await loadCore(new URL('../../lk_core.wasm?v=k62', import.meta.url));
const sim = new SimHost(lk);
const cam = new RoomCamera();
const input = new LaserInput(document.getElementById('pad'), document.getElementById('thumb'), cam);
bindLook(canvas, cam, document.getElementById('pad'));
const engine = await createEngine(cfg.engine);
await engine.init(canvas, engineOpts);

function viewSize() {
  // the layout viewport, never the canvas's own size (it follows the buffer and feeds back)
  const de = document.documentElement;
  return { w: de.clientWidth || innerWidth, h: de.clientHeight || innerHeight };
}
function resize() {
  const { w, h } = viewSize();
  cam.setViewport(w, h);
  engine.resize(w, h, devicePixelRatio || 1);
}
addEventListener('resize', resize);

function buildRoom() {
  sim.build({ room: cfg.room, cats: cfg.cats, destruct: cfg.destruct });
  const r = sim.room();
  const info = { id: cfg.room, name: ROOMS[cfg.room], hx: r.hx, hz: r.hz, look: roomLook(cfg.room), cloths: r.cloths, rings: r.rings };
  cam.layout(cfg.room, r.hx, r.hz);
  input.roomHZ = r.hz;
  engine.loadRoom(info);
  resize();
}
buildRoom();

// --- HUD -------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const roomSel = $('room'), engSel = $('engine');
roomSel.innerHTML = ROOMS.map((n, i) => `<option value="${i}">${n}</option>`).join('');
roomSel.value = String(cfg.room);
roomSel.onchange = () => { cfg.room = +roomSel.value; save(); buildRoom(); };
engSel.innerHTML = Object.entries(ENGINES).map(([k, e]) => `<option value="${k}">${e.label}</option>`).join('');
engSel.value = cfg.engine;
// a canvas that has held a WebGL context cannot give a 2D one: switching engines reloads
engSel.onchange = () => { cfg.engine = engSel.value; save(); const u = new URL(location.href); u.searchParams.set('engine', cfg.engine); location.href = u.href; };
$('reset').onclick = () => { buildRoom(); cam.home(); };
mountNav({ left: '10px' });
const scoreEl = $('score'), stateEl = $('state'), meterEl = $('meterfill'), statsEl = $('stats');

// --- the fixed-tick loop ---------------------------------------------------
const DT = 1000 / 60;
const ACC_CAP = TEST ? 400 : 100; // headless software GL runs ~2 fps
let last = performance.now(), acc = 0, paused = false, frames = 0, lastEvents = [];
let clock = 0;

function runFrame(frameDtMs, nowMs, forcedTicks = -1) {
  const prev = { ...input.ray };
  cam.update(frameDtMs, nowMs);
  const ray = input.update();
  let nTicks;
  if (forcedTicks >= 0) nTicks = forcedTicks;
  else { acc = Math.min(acc + frameDtMs, ACC_CAP); nTicks = Math.floor(acc / DT); acc -= nTicks * DT; }
  // a slow frame's catch-up ticks sweep the ray from last frame's aim to this one's,
  // so the cat sees continuous dot motion, not park-then-teleport
  for (let k = 1; k <= nTicks; k++) {
    const f = nTicks > 1 ? k / nTicks : 1;
    let dx = prev.dx + (ray.dx - prev.dx) * f, dy = prev.dy + (ray.dy - prev.dy) * f, dz = prev.dz + (ray.dz - prev.dz) * f;
    const dl = Math.hypot(dx, dy, dz) || 1;
    sim.step(prev.ox + (ray.ox - prev.ox) * f, prev.oy + (ray.oy - prev.oy) * f, prev.oz + (ray.oz - prev.oz) * f, dx / dl, dy / dl, dz / dl, input.on);
  }
  const count = sim.count();
  const fs = {
    rows: sim.rows(count),
    count,
    events: sim.events,
    eventCount: sim.eventCount,
    materials: sim.materials(count),
    laser: sim.laser(),
    laserOn: input.on,
    beamFrom: cam.belt(),
    camera: cam.pose(),
    dt: frameDtMs / 1000,
    // a render clock, not the wall's: it advances by the frames' dt, so a
    // stepped driver (advance) and a real phone see the same effect timing
    time: (clock += frameDtMs / 1000),
    ticks: nTicks,
  };
  feedback(fs);
  lastEvents = Array.from(fs.events.subarray(0, fs.eventCount), (c) => ({ type: c >>> 28, prop: (c >>> 12) & 0x1fff, score: c & 0xfff }));
  engine.frame(fs);
  sim.clearEvents();
  frames++;
  hud(fs);
}

// app-side punctuation: the camera shake (the rig is the app's)
let calm = false; // test drivers hold the camera still for frame-by-frame shots
function feedback(fs) {
  if (calm) return;
  for (let e = 0; e < fs.eventCount; e++) {
    const code = fs.events[e], t = evType(code), chain = evChain(code);
    if (t === EV.TOPPLED || t === EV.BROKE) {
      if (chain >= 4) cam.kick(0.5 + chain * 0.06);
      if (t === EV.BROKE && evScore(code) > 0) cam.kick(0.5);
    } else if (t === EV.SEVERED) cam.kick(1.0);
  }
}

function hud(fs) {
  scoreEl.textContent = sim.score();
  const st = sim.catState();
  stateEl.textContent = STATE_NAMES[st & 15] ?? '?';
  meterEl.style.width = `${(sim.interest() * 100).toFixed(0)}%`;
  if (frames % 20 === 1) {
    const s = engine.stats();
    statsEl.textContent = `${engine.name} · ${s.calls} draws · ${(s.triangles / 1000).toFixed(1)}k tris · ${fs.count} bodies`;
  }
}

function loop(now) {
  const dt = Math.min(now - last, ACC_CAP);
  last = now;
  if (!paused) runFrame(dt, now);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// test hooks (the PewPew pattern): a driver can pause the wall clock and
// step exact ticks, so a crumble can be shot frame by frame at any fps
window.__lke = {
  engine: () => engine.name,
  pause: (p = true) => { paused = p; last = performance.now(); },
  advance(ticks = 1) {
    const now = performance.now();
    runFrame((ticks * 1000) / 60, now, ticks);
    return engine.stats();
  },
  stats: () => ({ ...engine.stats(), bodies: sim.count(), frames }),
  room: (n) => { cfg.room = n; buildRoom(); },
  aimAt: (x, y, z) => { input.override = [x, y, z]; },
  release: () => { input.override = null; },
  fling: (rec, x, y, z) => sim.fling(rec, x, y, z),
  spin: (rec, x, y, z) => sim.spin(rec, x, y, z),
  tune: (s, g, d) => sim.tune(s, g, d),
  score: () => sim.score(),
  hash: () => sim.hash(),
  bodies() {
    const n = sim.count(), r = sim.rows(n), m = sim.materials(n), out = [];
    for (let i = 0; i < n; i++) {
      const o = i * 15;
      out.push({ i, cls: r[o], shape: r[o + 1], a: r[o + 2], b: r[o + 3], c: r[o + 4], p: [r[o + 5], r[o + 6], r[o + 7]], flag: r[o + 12], gloss: r[o + 13], tint: r[o + 14], mat: m[i] });
    }
    return out;
  },
  screenOf: (x, y, z) => cam.project([x, y, z]),
  lookAt: (x, y, z, zoom) => cam.aimAt([x, y, z], zoom),
  home: () => cam.home(),
  calm: (c = true) => { calm = c; },
  /** this frame's event codes (decoded) — the driver reads what the sim said */
  lastEvents: () => lastEvents,
};
