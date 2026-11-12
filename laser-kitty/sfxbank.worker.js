// sfxbank.worker.js — builds the procedural sample bank off the main
// thread and hands each buffer back as it's done (transferred, not copied).
// 'ready' goes out when the core set is built (the catalog marks where it
// ends); the instrument voices and the courtroom keep arriving after it.
import { catalog } from './sfxbank.js?v=k64';

self.onmessage = (ev) => {
  const { sr } = ev.data;
  const list = catalog(sr);
  list.forEach(([key, gen], i) => {
    if (i === list.core) self.postMessage({ type: 'ready', count: i });
    const data = gen();
    self.postMessage({ type: 'buf', key, data }, [data.buffer]);
  });
  self.postMessage({ type: 'done', count: list.length });
};
