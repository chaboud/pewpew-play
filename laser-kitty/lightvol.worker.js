// lightvol.worker.js — the light grid's refinement loop, off the main
// thread. Messages in: setup / solid / step; out: result (the packed
// bytes, transferred back for reuse).
import { LightGrid } from './lightgrid.js?v=k61';

const grid = new LightGrid();
let rows = null, rowCount = 0, solidDirty = false;

self.onmessage = (ev) => {
  const m = ev.data;
  if (m.type === 'setup') {
    grid.setup(m.nx, m.ny, m.nz, m.texel, m.origin);
    if (rows) grid.voxelize(rows, rowCount);
  } else if (m.type === 'solid') {
    rows = m.rows; rowCount = m.count;
    grid.voxelize(rows, rowCount);
  } else if (m.type === 'step') {
    if (!grid.light) return;
    const t0 = performance.now();
    grid.step(m.emitters, m.rounds, m.decay);
    const out = m.out.length === grid.nx * grid.ny * grid.nz * 4 ? m.out : new Uint8Array(grid.nx * grid.ny * grid.nz * 4);
    grid.pack(out, m.gain);
    self.postMessage({ type: 'result', out, ms: performance.now() - t0, rounds: m.rounds }, [out.buffer]);
  }
};
