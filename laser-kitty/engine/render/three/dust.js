// dust.js — puffs at breaks, severs, topples and scratches, flown on the
// GPU (Strollzilla render/dust.ts, cut down to room scale). One instanced
// quad per mote in a ring buffer; a mote is written once, at birth (where,
// how fast, when, how long, how big, colour, drag/rise/gravity) and the
// vertex shader flies it in closed form, so the CPU does nothing per mote
// per frame. Renderer-side only: Math.random and wall-clock time by design.
import * as THREE from 'three';

const KIND = {
  // a puff of broken matter: out, up a little, hangs, thins
  puff: { drag: 3.0, rise: 0.12, grav: 0, life: [0.7, 1.5], a: 0.55, grow: [0.5, 1.8] },
  // a heavier cloud off a collapse: slower to thin
  cloud: { drag: 2.0, rise: 0.08, grav: 0, life: [1.4, 2.6], a: 0.42, grow: [0.6, 2.0] },
  // stuffing / fabric fluff off a scratch: floats down
  fluff: { drag: 4.0, rise: -0.05, grav: 0, life: [1.2, 2.2], a: 0.8, grow: [0.8, 1.0] },
};

export class Dust {
  constructor(scene, cap = 1024) {
    this.cap = cap;
    this.cursor = 0;
    this.now = 0;
    this.lastDeath = -1;
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], 3));
    geo.setIndex([0, 1, 2, 0, 2, 3]);
    const attr = (n) => new THREE.InstancedBufferAttribute(new Float32Array(cap * n), n).setUsage(THREE.DynamicDrawUsage);
    this.aPos = attr(4); this.aVel = attr(4); this.aLife = attr(4); this.aCol = attr(4); this.aMove = attr(4);
    geo.setAttribute('aPos', this.aPos); geo.setAttribute('aVel', this.aVel); geo.setAttribute('aLife', this.aLife);
    geo.setAttribute('aCol', this.aCol); geo.setAttribute('aMove', this.aMove);
    geo.instanceCount = cap;
    this.lo = Infinity; this.hi = -1;
    this.c = new THREE.Color();
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, depthTest: true,
      // a room's light, not daylight: the dust should sit in the scene, not glow over it
      uniforms: { uTime: { value: 0 }, uLight: { value: new THREE.Color(0.72, 0.68, 0.66) } },
      vertexShader: /* glsl */ `
        attribute vec4 aPos; attribute vec4 aVel; attribute vec4 aLife; attribute vec4 aCol; attribute vec4 aMove;
        uniform float uTime;
        varying vec2 vUv; varying vec4 vCol; varying float vSeed;
        void main() {
          float t = uTime - aLife.x, u = t / max(aLife.y, 1e-3);
          if (u < 0.0 || u > 1.0 || aLife.y <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
          float k = max(aMove.x, 1e-3), e = (1.0 - exp(-k * t)) / k;
          vec3 p = aPos.xyz + aVel.xyz * e;
          p.y += aMove.y * (t - e) - 0.5 * aMove.z * t * t;
          p.y = max(p.y, aPos.w + 0.3 * aLife.z);
          float size = mix(aLife.z, aLife.w, sqrt(u));
          float a = aCol.a * smoothstep(0.0, 0.08, u) * pow(1.0 - u, 1.3);
          vCol = vec4(aCol.rgb, a); vUv = position.xy; vSeed = aVel.w;
          vec4 c = modelViewMatrix * vec4(p, 1.0);
          c.xy += position.xy * size;
          gl_Position = projectionMatrix * c;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform vec3 uLight;
        varying vec2 vUv; varying vec4 vCol; varying float vSeed;
        float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
        void main() {
          float d = length(vUv) * 2.0;
          vec2 q = vUv * 3.0 + vSeed * 17.0;
          float n = vnoise(q + uTime * 0.2) * 0.6 + vnoise(q * 2.3 - uTime * 0.1) * 0.4;
          float edge = 1.0 - smoothstep(0.2, 1.0, d + (n - 0.5) * 0.7);
          float a = vCol.a * edge;
          if (a < 0.004) discard;
          // lit as a ball from above: a cloud reads as a volume by its dark core and lit top
          float top = 0.72 + 0.28 * (vUv.y + 0.5);
          gl_FragColor = vec4(vCol.rgb * uLight * top * (0.85 + 0.3 * n), a);
          #include <colorspace_fragment>
        }`,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 10;
    this.mesh.visible = false;
    scene.add(this.mesh);
  }

  spawn(kind, x, y, z, size, color, vel, floor = -10) {
    const K = KIND[kind];
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.cap;
    const life = K.life[0] + Math.random() * (K.life[1] - K.life[0]);
    const [vx, vy, vz] = vel || [(Math.random() - 0.5) * 1.6, 0.3 + Math.random() * 0.9, (Math.random() - 0.5) * 1.6];
    this.aPos.setXYZW(i, x, y, z, floor);
    this.aVel.setXYZW(i, vx, vy, vz, Math.random() * 10);
    this.aLife.setXYZW(i, this.now, life, size * K.grow[0], size * K.grow[1] * (0.85 + Math.random() * 0.3));
    this.c.set(color);
    this.aCol.setXYZW(i, this.c.r, this.c.g, this.c.b, K.a);
    this.aMove.setXYZW(i, K.drag, K.rise, K.grav, 0);
    this.lo = Math.min(this.lo, i);
    this.hi = Math.max(this.hi, i);
    this.lastDeath = Math.max(this.lastDeath, this.now + life);
  }

  /** a break's puff: `n` motes round a point, sized to what broke, in its colour greyed */
  burst(x, y, z, size, color, n = 8, floor = -10, kind = 'puff') {
    const grey = new THREE.Color(color).lerp(new THREE.Color(0xb8b0a4), 0.55);
    for (let k = 0; k < n; k++) {
      const th = Math.random() * Math.PI * 2, sp = (0.4 + Math.random() * 1.0) * Math.min(1.5, 0.5 + size * 4);
      this.spawn(kind, x + Math.cos(th) * size * 0.4, y + (Math.random() - 0.3) * size * 0.5, z + Math.sin(th) * size * 0.4,
        Math.max(0.06, size * (0.8 + Math.random() * 0.7)), grey, [Math.cos(th) * sp, 0.25 + Math.random() * 0.8, Math.sin(th) * sp], floor);
    }
  }

  update(time) {
    this.now = time;
    this.mat.uniforms.uTime.value = time;
    for (const a of [this.aPos, this.aVel, this.aLife, this.aCol, this.aMove]) {
      if (this.hi >= this.lo) {
        a.clearUpdateRanges();
        a.addUpdateRange(this.lo * a.itemSize, (this.hi - this.lo + 1) * a.itemSize);
        a.needsUpdate = true;
      }
    }
    this.lo = Infinity; this.hi = -1;
    this.mesh.visible = time < this.lastDeath;
  }
}
