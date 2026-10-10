// sfxbank.worker.js — builds the procedural sample bank off the main
// thread and hands each buffer back as it's done (transferred, not copied).
import { catalog } from './sfxbank.js?v=k62';

self.onmessage = (ev) => {
  const { sr } = ev.data;
  const list = catalog(sr);
  for (const [key, gen] of list) {
    const data = gen();
    self.postMessage({ type: 'buf', key, data }, [data.buffer]);
  }
  self.postMessage({ type: 'done', count: list.length });
};
