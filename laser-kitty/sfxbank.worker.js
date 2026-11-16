// sfxbank.worker.js — builds the procedural sample bank off the main
// thread and hands each buffer back as it's done (transferred, not copied).
// 'ready' goes out when the core set is built (the catalog marks where it
// ends); the instrument voices and the courtroom keep arriving after it.
// It then stays up: the engine asks for what no catalog can list ahead —
// this room's objects by their own dimensions, this run's cats by their
// characters ({ want: [keys] }, built by make()). Work is done one buffer
// per turn of the event loop so a request is not stuck behind the whole
// catalog: the core set first, then requests, then the rest.
import { catalog, make } from './sfxbank.js?v=k70';

let sr = 44100, list = [], next = 0, running = false;
const wants = [], seen = new Set();

function turn() {
  const core = list.core ?? list.length;
  if (wants.length && next >= core) {
    const key = wants.shift();
    for (const data of make(key, sr)) self.postMessage({ type: 'buf', key, data }, [data.buffer]);
    self.postMessage({ type: 'made', key });
  } else if (next < list.length) {
    if (next === core) self.postMessage({ type: 'ready', count: next });
    const [key, gen] = list[next++];
    const data = gen();
    self.postMessage({ type: 'buf', key, data }, [data.buffer]);
    if (next === list.length) self.postMessage({ type: 'done', count: list.length });
  } else {
    running = false;
    return;
  }
  setTimeout(turn, 0);
}

self.onmessage = (ev) => {
  const m = ev.data;
  if (m.sr) { sr = m.sr; list = catalog(sr); next = 0; }
  for (const key of m.forget || []) seen.delete(key); // the engine dropped it; it may ask again
  for (const key of m.want || []) if (!seen.has(key)) { seen.add(key); wants.push(key); }
  if (!running) { running = true; setTimeout(turn, 0); }
};
