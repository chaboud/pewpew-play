// kit.js — the factories recognizers and the material table build with.
// Geometry and materials are cached by their parameters, so two mugs share
// one cylinder and one toon material and therefore one batch; colour is
// per instance (materials are white and the instance colour tints them,
// which is what main.js's `map * color` did per mesh).
import * as THREE from 'three';
import { ramp, woodTex, fabricTex, glowTex } from './textures.js?v=k62';

const q = (x) => Math.round(x * 1e4) / 1e4;

export function makeKit() {
  const geoms = new Map();
  const mats = new Map();
  const g = (key, make) => {
    let v = geoms.get(key);
    if (!v) { v = make(); geoms.set(key, v); }
    return v;
  };
  const m = (key, make) => {
    let v = mats.get(key);
    if (!v) { v = make(); mats.set(key, v); }
    return v;
  };
  const optKey = (o) => JSON.stringify(o, (k, v) => (v && v.isTexture ? v.uuid : v));
  const kit = {
    // --- geometry ---------------------------------------------------------
    box: (w, h, d) => g(`box:${q(w)}:${q(h)}:${q(d)}`, () => new THREE.BoxGeometry(w, h, d)),
    unitBox: () => g('box:1', () => new THREE.BoxGeometry(1, 1, 1)),
    unitSphere: (ws = 14, hs = 12) => g(`sph1:${ws}:${hs}`, () => new THREE.SphereGeometry(1, ws, hs)),
    sphere: (r, ws = 12, hs = 10) => g(`sph:${q(r)}:${ws}:${hs}`, () => new THREE.SphereGeometry(r, ws, hs)),
    cyl: (rt, rb, h, seg = 12, open = false) => g(`cyl:${q(rt)}:${q(rb)}:${q(h)}:${seg}:${open}`, () => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open)),
    plane: (w, h) => g(`pl:${q(w)}:${q(h)}`, () => new THREE.PlaneGeometry(w, h)),
    torus: (r, t, rs, ts, arc = Math.PI * 2) => g(`tor:${q(r)}:${q(t)}:${rs}:${ts}:${q(arc)}`, () => new THREE.TorusGeometry(r, t, rs, ts, arc)),
    octa: (r) => g(`oct:${q(r)}`, () => new THREE.OctahedronGeometry(r)),
    capsule: (r, len) => g(`cap:${q(r)}:${q(len)}`, () => new THREE.CapsuleGeometry(r, len, 4, 10)),
    custom: (key, make) => g(key, make),
    // --- materials (white: the instance colour carries the hue) -----------
    toon: (opts = {}) => m(`toon:${optKey(opts)}`, () => new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: ramp, ...opts })),
    wood: () => kit.toon({ map: woodTex }),
    fabric: () => kit.toon({ map: fabricTex }),
    phong: (opts = {}) => m(`phong:${optKey(opts)}`, () => new THREE.MeshPhongMaterial({ color: 0xffffff, ...opts })),
    basic: (opts = {}) => m(`basic:${optKey(opts)}`, () => new THREE.MeshBasicMaterial({ color: 0xffffff, ...opts })),
    // additive billboards (fixture glows, neon halos, sparks): instanced like
    // everything else; the instance colour is colour x opacity
    glowQuad: () => g('glowquad', () => new THREE.PlaneGeometry(1, 1)),
    glow: () => m('glow', () => glowMaterial()),
    // a material that must stay unique (a per-body texture)
    own: (key, make) => m(key, make),
    count: () => ({ geometries: geoms.size, materials: mats.size }),
  };
  return kit;
}

function glowMaterial() {
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { map: { value: glowTex() } },
    vertexShader: /* glsl */ `
      varying vec2 vUv; varying vec3 vCol;
      void main() {
        vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        c.xy += position.xy * length(instanceMatrix[0].xyz);
        vUv = uv;
        vCol = instanceColor;
        gl_Position = projectionMatrix * c;
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D map; varying vec2 vUv; varying vec3 vCol;
      void main() {
        vec4 t = texture2D(map, vUv);
        gl_FragColor = vec4(vCol * t.rgb, t.a);
        #include <colorspace_fragment>
      }`,
  });
  mat.userData.glow = true;
  return mat;
}

const _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _e = new THREE.Euler();
/**
 * A part: geometry + material + instance colour + local transform
 * (position, euler rotation, scale) in the body's frame.
 */
export function part(geom, mat, color, { p = null, r = null, s = null, cast = true, recv = true, inst = null } = {}) {
  const local = new THREE.Matrix4();
  _p.set(p ? p[0] : 0, p ? p[1] : 0, p ? p[2] : 0);
  _q.setFromEuler(_e.set(r ? r[0] : 0, r ? r[1] : 0, r ? r[2] : 0));
  _s.set(s ? s[0] : 1, s ? s[1] : 1, s ? s[2] : 1);
  local.compose(_p, _q, _s);
  // unlit materials ignore shadows; under VSM a receiver is drawn into the shadow map too
  if (mat.isMeshBasicMaterial || mat.isShaderMaterial) { recv = false; cast = cast && !mat.transparent; }
  return { geom, mat, color: new THREE.Color(color), local, cast, recv, inst };
}

/** deterministic per-body hash in [0,1) (main.js: i * 2654435761) */
export const hash01 = (i) => ((i * 2654435761) >>> 0) / 4294967296;
export const near = (v, t, tol) => Math.abs(v - t) < tol;
