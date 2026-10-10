// materials.js — the generic look: any body the recognizers don't claim is
// drawn as its own collider (box / sphere / capsule) in a material picked
// from the stream by an ordered rule table keyed on class, gloss, tint and
// the material bits. The rules are main.js meshFor's fallback, in its
// order; the material bits (lk_body_material) are new and only speak
// where gloss is silent (rule 'glaze': a brittle prop with no optics of its
// own reads glazed). One source of truth for how surfaces behave: the sim's optics.
import * as THREE from 'three';
import { CLS, SHAPE, MAT } from '../../seam.js?v=k62';
import { part, hash01 } from './kit.js?v=k62';
import { floorTex, concreteTex, checkerTex, artTex } from './textures.js?v=k62';

/** main.js bodyColor: deterministic variety within each class palette */
export function bodyColor(i, cls) {
  const h = hash01(i);
  if (cls === CLS.CAT) return new THREE.Color(0xff9d45);
  if (cls === CLS.STATIC) return new THREE.Color(0x6b5f85);
  if (cls === CLS.FURNITURE) return new THREE.Color().setHSL(0.06 + h * 0.07, 0.42, 0.42 + h * 0.14);
  return new THREE.Color().setHSL((0.42 + h * 0.55) % 1, 0.62, 0.58);
}

/** sim tint -> upholstery / paint hue (the sim's hue wheel) */
export const tintHue = (tint) => (tint * 2.83) % 1;

const FLOORS = { wood: floorTex, concrete: concreteTex, checker: checkerTex };

/** position-hashed radial displacement: yarn, plush, foliage (main.js roughen) */
function roughen(geo, amt) {
  const p = geo.attributes.position;
  for (let k = 0; k < p.count; k++) {
    const h = Math.sin(p.getX(k) * 93.9 + p.getY(k) * 47.2 + p.getZ(k) * 71.7) * 43758.55;
    const s = 1 + ((h - Math.floor(h)) * 2 - 1) * amt;
    p.setXYZ(k, p.getX(k) * s, p.getY(k) * s, p.getZ(k) * s);
  }
  geo.computeVertexNormals();
  return geo;
}

/**
 * The rule table. Each rule: when(row) -> bool, look(row, kit) -> {mat, color}.
 * Geometry is the collider's, built from a unit primitive scaled per instance.
 */
export const RULES = [
  { name: 'floor', when: (r) => r.cls === CLS.STATIC && r.a > 2 && r.b < 0.2,
    look: (r, k, room) => ({ mat: k.own(`floor:${room.look.floor}`, () => new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: k.toon().gradientMap, map: FLOORS[room.look.floor] || floorTex })), color: 0xffffff }) },
  { name: 'painting', when: (r) => r.cls === CLS.STATIC && (r.a < 0.025 || r.c < 0.025) && Math.max(r.a, r.b, r.c) < 0.6 && r.py > 0.9,
    look: (r, k) => ({ mat: k.own(`art:${r.i}`, () => new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: k.toon().gradientMap, map: artTex(r.i) })), color: 0xffffff }) },
  // book spines: deep saturated library colours (a bookcase is boards + books: no recognizer of its own)
  { name: 'book', when: (r) => r.cls === CLS.PROP && r.shape === SHAPE.BOX && r.gloss < 0.4 && r.b >= 0.06 && r.b <= 0.12 && Math.min(r.a, r.c) <= 0.035 && Math.max(r.a, r.c) <= 0.07,
    look: (r, k) => ({ mat: k.toon(), color: new THREE.Color().setHSL(hash01(r.i), 0.55, 0.34 + ((r.i * 7) % 5) * 0.035) }) },
  // porcelain fixtures (tub, toilet, sink, fridge)
  { name: 'porcelain', when: (r) => r.cls === CLS.FURNITURE && r.gloss >= 0.6,
    look: (r, k) => ({ mat: k.phong({ shininess: 90, specular: 0xccd6dd }), color: 0xeceae4 }) },
  // marble / stone (pillars, counter tops)
  { name: 'marble', when: (r) => r.cls === CLS.STATIC && r.gloss >= 0.55,
    look: (r, k) => ({ mat: k.phong({ shininess: 60, specular: 0xbbc4cc }), color: 0xd8d4cc }) },
  // built-ins: counters, shelves, steps
  { name: 'built-in', when: (r) => r.cls === CLS.STATIC && r.gloss >= 0.15 && r.b < 1.2,
    look: (r, k) => ({ mat: k.wood(), color: 0xa08056 }) },
  // glossy props and furniture: shininess from gloss, bucketed so they batch
  { name: 'gloss', when: (r) => r.cls !== CLS.STATIC && r.gloss >= 0.5,
    look: (r, k) => ({ mat: k.phong({ shininess: 20 + Math.round(r.gloss * 5) * 20, specular: 0xbbccdd }), color: bodyColor(r.i, r.cls) }) },
  // soft furniture reads its hue from the sim tint. (The soft material bit is
  // not a fabric key: wooden chairs are scratchable too — tried, they went green.)
  { name: 'fabric', when: (r) => r.cls !== CLS.STATIC && r.gloss <= 0.1,
    look: (r, k) => ({ mat: fuzzy(r) ? k.toon() : k.fabric(), color: new THREE.Color().setHSL(tintHue(r.tint), 0.42, 0.46) }) },
  // brittle props with no optics of their own: a glaze (new: the material bit)
  { name: 'glaze', when: (r) => r.cls === CLS.PROP && (r.mat & MAT.KIND_MASK) === MAT.BRITTLE,
    look: (r, k) => ({ mat: k.phong({ shininess: 60, specular: 0x8899aa }), color: bodyColor(r.i, r.cls) }) },
  { name: 'wood', when: (r) => r.cls === CLS.FURNITURE,
    look: (r, k) => ({ mat: k.wood(), color: bodyColor(r.i, r.cls) }) },
  { name: 'toon', when: () => true,
    look: (r, k) => ({ mat: k.toon(), color: bodyColor(r.i, r.cls) }) },
];

const fuzzy = (r) => r.cls === CLS.PROP && r.shape === SHAPE.SPHERE && r.gloss <= 0.1;

/** the collider's own geometry as a unit primitive + per-instance scale */
function colliderPart(r, k, mat, color) {
  // tall thin statics (walls, partitions) neither cast nor receive: VSM at
  // grazing incidence paints variance blobs on big flat walls
  const cast = r.cls !== CLS.STATIC;
  const recv = !(r.cls === CLS.STATIC && r.b >= 0.8 && Math.min(r.a, r.c) <= 0.35);
  if (r.shape === SHAPE.SPHERE) {
    const geom = fuzzy(r)
      ? k.custom('sph1:fuzzy', () => roughen(new THREE.SphereGeometry(1, 18, 14), 0.14))
      : k.unitSphere(14, 12);
    return part(geom, mat, color, { s: [r.a, r.a, r.a], cast, recv });
  }
  if (r.shape === SHAPE.CAPSULE) return part(k.capsule(r.b, r.a * 2), mat, color, { cast, recv });
  return part(k.unitBox(), mat, color, { s: [r.a * 2, r.b * 2, r.c * 2], cast, recv });
}

/** generic view: one part, the collider, in the first matching rule's material */
export function genericParts(r, k, room) {
  for (const rule of RULES) {
    if (!rule.when(r)) continue;
    const { mat, color } = rule.look(r, k, room);
    const p = colliderPart(r, k, mat, color);
    p.rule = rule.name;
    return [p];
  }
  return [];
}

/** a spawned piece wears its parent's dominant material and colour (shards look like what broke) */
export function inheritedParts(r, k, parentMain) {
  const p = colliderPart(r, k, parentMain.mat, parentMain.color);
  p.rule = 'inherited';
  return [p];
}
