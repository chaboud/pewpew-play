// engines.js — the registry of render engines behind the seam. The app
// imports this and nothing under render/ (scripts/check-engine-deps.mjs);
// an engine is picked by name (?engine=three|plan) and loaded on demand.
// A Unity frontend would be another implementation of the same contract,
// living in its own project rather than in this list.
import { assertEngine } from './seam.js?v=k62';

export const ENGINES = {
  three: { label: 'three.js (WebGL2)', load: () => import('./render/three/engine.js?v=k62') },
  plan: { label: 'Plan view (Canvas 2D)', load: () => import('./render/plan/engine.js?v=k62') },
};

export async function createEngine(name) {
  const entry = ENGINES[name] || ENGINES.three;
  const mod = await entry.load();
  return assertEngine(mod.createEngine());
}
