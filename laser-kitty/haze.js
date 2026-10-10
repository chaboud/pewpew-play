// haze.js — volumetric light for the toy room (founder: "volumetric
// lighting and effects more like splinecraft"). The shape is Splinecraft's
// volumetric pass, cut down for a 4 m diorama: a half-resolution ray march
// from the camera to the depth buffer through a thin, drifting haze,
// gathering (a) sun where the VSM shadow map says the ray is lit — dust
// shafts between the furniture shadows — and (b) local light from the
// room's emitters: every neon sign and budgeted point light, with a knee
// so a sign is a glow, not a sun. Output is in-scatter in rgb and
// transmittance in a, composited over the frame in one more quad.
//
// Depth comes from N8AO's beauty target when AO is on (it already rendered
// the scene with a depth texture); with AO off this pass renders the scene
// itself into a target that carries one. Either way: no extra scene render
// beyond what the frame already pays for.
import * as THREE from 'three';
import { Pass, FullScreenQuad } from './vendor/Pass.js';
import { LIGHTVOL_GLSL } from './lightvol.js?v=k61';

// objects on this layer are the glow pass's sources: neon tube faces,
// fixture glow sprites, the laser dot
export const GLOW_LAYER = 3;

const VERT = `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const VERT3 = `out vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const MARCH = `
  precision highp float;
  precision highp sampler3D;
  uniform sampler2D tDepth;
  uniform sampler2D shadowMap;
  uniform mat4 shadowMatrix, invProj, invView;
  uniform vec3 camPos, sunDir, sunColor, ambient;
  uniform float sunOn, uSun, uDensity, uTime, uFloor, uCeil;
  uniform vec3 laserA, laserB, laserCol;
  uniform float laserOn;
  uniform vec3 uRoom; // half extents (x, ceiling, z): the haze lives inside the shell
  uniform int uSteps;
  uniform float uLocal;
  in vec2 vUv;
  out vec4 outColor;
  ${LIGHTVOL_GLSL}

  float ign(vec2 p) { return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y)); }
  vec3 worldFromDepth(vec2 uv, float depth) {
    vec4 clip = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec4 view = invProj * clip;
    view /= view.w;
    return (invView * view).xyz;
  }
  float density(vec3 p) {
    // only inside the room (the diorama floats in a void: no haze out there)
    if (abs(p.x) > uRoom.x + 0.2 || abs(p.z) > uRoom.z + 0.2 || p.y < uFloor - 0.1 || p.y > uRoom.y + 0.3) return 0.0;
    // smoke hangs high in a bar: a little thicker toward the ceiling, with
    // a slow drift so the haze isn't a static gradient
    float h = clamp((p.y - uFloor) / max(uCeil - uFloor, 0.1), 0.0, 1.0);
    float layer = mix(0.75, 1.25, h);
    float drift = 0.85 + 0.15 * sin(p.x * 1.3 + uTime * 0.21) * sin(p.z * 1.1 - uTime * 0.17);
    return uDensity * layer * drift;
  }
  // VSM moments (three's blurred soft-shadow map): Chebyshev visibility
  float sunVisible(vec3 p) {
    vec4 sc = shadowMatrix * vec4(p, 1.0);
    sc.xyz /= sc.w;
    if (any(lessThan(sc.xy, vec2(0.0))) || any(greaterThan(sc.xy, vec2(1.0)))) return 1.0;
    vec2 m = texture(shadowMap, sc.xy).rg;
    float d = sc.z;
    if (d <= m.x + 0.002) return 1.0;
    float v = max(m.y - m.x * m.x, 2e-5);
    float t = d - m.x;
    float pmax = clamp(v / (v + t * t), 0.0, 1.0);
    return smoothstep(0.2, 1.0, pmax); // light-bleed trim
  }
  void main() {
    float depth = texture(tDepth, vUv).r;
    vec3 target = worldFromDepth(vUv, min(depth, 0.9999));
    vec3 ro = camPos;
    vec3 seg = target - ro;
    float len = length(seg);
    float maxLen = 16.0;
    if (len > maxLen) { seg *= maxLen / len; len = maxLen; }
    vec3 rd = len > 1e-4 ? seg / len : vec3(0.0, 0.0, 1.0);
    float cosT = dot(rd, sunDir);
    // half forward-scattering, half isotropic: the sun sits behind the
    // camera here, and pure HG would hide the shafts
    const float g = 0.45;
    float hg = mix(1.0 / (4.0 * 3.14159), (1.0 - g * g) / (4.0 * 3.14159 * pow(1.0 + g * g - 2.0 * g * cosT, 1.5)), 0.5);
    float jitter = ign(gl_FragCoord.xy);
    float dt = len / float(uSteps);
    float T = 1.0;
    vec3 acc = vec3(0.0);
    for (int i = 0; i < 24; i++) {
      if (i >= uSteps) break;
      float t = (float(i) + jitter) * dt;
      vec3 p = ro + rd * t;
      float dens = density(p);
      vec3 sun = sunColor * (hg * sunVisible(p)) * sunOn * uSun;
      // the room's light volume: signs, lamps and the dot, flooded
      // around the furniture — one trilinear read per step
      vec3 loc = lkLight(p) * uLocal;
      // the laser: a thin red beam from the belt to the dot, and a hot
      // point at the dot — the beam only shows where the haze is thick
      if (laserOn > 0.5) {
        vec3 ab = laserB - laserA;
        float tt = clamp(dot(p - laserA, ab) / max(dot(ab, ab), 1e-4), 0.0, 1.0);
        vec3 q = laserA + ab * tt - p;
        vec3 qd = laserB - p;
        loc += laserCol * (2.5 / (1.0 + dot(q, q) * 900.0) + 6.0 / (1.0 + dot(qd, qd) * 80.0));
      }
      loc = loc / (1.0 + loc * 0.6); // the knee: a sign is a glow, not a sun
      vec3 S = (sun + loc + ambient) * dens;
      acc += T * S * dt;
      T *= exp(-dens * dt);
    }
    if (any(isnan(acc)) || isnan(T)) { acc = vec3(0.0); T = 1.0; }
    outColor = vec4(acc, T);
  }`;

const COMPOSITE = `
  precision highp float;
  uniform sampler2D tDiffuse, tHaze, tGlow;
  uniform float uMode; // 0: both linear (this pass drew the scene) · 1: colour already display-encoded (N8AO)
  uniform float uGlow;
  varying vec2 vUv;
  uniform vec2 uTexel; // one haze-buffer texel
  vec3 oetf(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }
  vec3 eotf(vec3 c) { return pow(max(c, 0.0), vec3(2.2)); }
  void main() {
    vec4 c = texture2D(tDiffuse, vUv);
    // four bilinear taps a texel out soften the march's jitter dither
    vec4 h = (texture2D(tHaze, vUv + uTexel * vec2(0.75, 0.75)) + texture2D(tHaze, vUv + uTexel * vec2(-0.75, 0.75))
            + texture2D(tHaze, vUv + uTexel * vec2(0.75, -0.75)) + texture2D(tHaze, vUv + uTexel * vec2(-0.75, -0.75))) * 0.25;
    // composite in linear light either way: an encoded frame is decoded
    // first (adding encoded in-scatter lifted every black by a gamma floor)
    vec3 lin = uMode < 0.5 ? c.rgb : eotf(c.rgb);
    // the sources are small on screen (a 30 cm tube at 9 m is a few texels
    // at half res) and the blur spreads them thin: a fixed gain makes a tube
    // read as HOT, the slider scales from there
    vec3 glow = texture2D(tGlow, vUv).rgb * uGlow * 4.0;
    gl_FragColor = vec4(oetf(lin * h.a + h.rgb + glow), c.a);
  }`;

// separable 9-tap gaussian over the quarter-res glow source; run twice
// with a widened radius for a soft halo shaped like the tubes
const BLUR = `
  precision highp float;
  uniform sampler2D tSrc;
  uniform vec2 uDir; // texel step along the blur axis
  varying vec2 vUv;
  void main() {
    float w0 = 0.227027, w1 = 0.1945946, w2 = 0.1216216, w3 = 0.054054, w4 = 0.016216;
    vec3 acc = texture2D(tSrc, vUv).rgb * w0;
    acc += (texture2D(tSrc, vUv + uDir).rgb + texture2D(tSrc, vUv - uDir).rgb) * w1;
    acc += (texture2D(tSrc, vUv + uDir * 2.0).rgb + texture2D(tSrc, vUv - uDir * 2.0).rgb) * w2;
    acc += (texture2D(tSrc, vUv + uDir * 3.0).rgb + texture2D(tSrc, vUv - uDir * 3.0).rgb) * w3;
    acc += (texture2D(tSrc, vUv + uDir * 4.0).rgb + texture2D(tSrc, vUv - uDir * 4.0).rgb) * w4;
    gl_FragColor = vec4(acc, 1.0);
  }`;

export class HazePass extends Pass {
  constructor(scene, camera, sun, volumeUniforms, { steps = 12, scale = 0.5 } = {}) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.sun = sun;
    this.scale = scale;
    this.needsSwap = true;
    this.depthSource = null; // () => DepthTexture from an earlier pass, or null
    this.w = 1; this.h = 1;
    this.sceneTarget = null;
    this.target = new THREE.WebGLRenderTarget(1, 1, {
      type: THREE.HalfFloatType, depthBuffer: false,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    });
    this.uniforms = {
      tDepth: { value: null }, shadowMap: { value: null }, shadowMatrix: { value: new THREE.Matrix4() },
      invProj: { value: new THREE.Matrix4() }, invView: { value: new THREE.Matrix4() },
      camPos: { value: new THREE.Vector3() }, sunDir: { value: new THREE.Vector3(0, 1, 0) },
      sunColor: { value: new THREE.Vector3(1.6, 1.4, 1.05) }, ambient: { value: new THREE.Vector3(0.025, 0.02, 0.035) },
      sunOn: { value: 1 }, uSun: { value: 1 }, laserA: { value: new THREE.Vector3() }, laserB: { value: new THREE.Vector3() },
      laserCol: { value: new THREE.Vector3(1.0, 0.16, 0.1) }, laserOn: { value: 0 }, uDensity: { value: 0.08 }, uTime: { value: 0 }, uFloor: { value: 0 }, uCeil: { value: 3.0 },
      uSteps: { value: steps }, uRoom: { value: new THREE.Vector3(4, 3.2, 3) }, uLocal: { value: 1.6 },
      ...volumeUniforms,
    };
    this.mat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: VERT3, fragmentShader: MARCH, depthTest: false, depthWrite: false, glslVersion: THREE.GLSL3 });
    this.quad = new FullScreenQuad(this.mat);
    this.compMat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, tHaze: { value: this.target.texture }, tGlow: { value: null }, uGlow: { value: 1 }, uMode: { value: 0 }, uTexel: { value: new THREE.Vector2(1 / 360, 1 / 600) } },
      vertexShader: VERT, fragmentShader: COMPOSITE, depthTest: false, depthWrite: false,
    });
    this.compQuad = new FullScreenQuad(this.compMat);
    // glow pass: the GLOW_LAYER objects rendered alone at half res,
    // blurred twice (the second pass at a wider radius)
    const gopt = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    this.glowA = new THREE.WebGLRenderTarget(1, 1, gopt);
    this.glowB = new THREE.WebGLRenderTarget(1, 1, gopt);
    this.blurMat = new THREE.ShaderMaterial({ uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } }, vertexShader: VERT, fragmentShader: BLUR, depthTest: false, depthWrite: false });
    this.blurQuad = new FullScreenQuad(this.blurMat);
    this.glowOn = true;
    this.glowStrength = 1;
    this.compMat.uniforms.tGlow.value = this.glowA.texture;
  }

  setSize(w, h) {
    this.w = Math.max(1, w | 0); this.h = Math.max(1, h | 0);
    this.target.setSize(Math.max(1, Math.floor(this.w * this.scale)), Math.max(1, Math.floor(this.h * this.scale)));
    this.compMat.uniforms.uTexel.value.set(1 / this.target.width, 1 / this.target.height);
    this.glowA.setSize(Math.max(1, this.w >> 1), Math.max(1, this.h >> 1));
    this.glowB.setSize(Math.max(1, this.w >> 1), Math.max(1, this.h >> 1));
    if (this.sceneTarget) this.sceneTarget.setSize(this.w, this.h);
  }

  render(renderer, writeBuffer, readBuffer) {
    const u = this.uniforms;
    let depth = this.depthSource ? this.depthSource() : null;
    let color;
    if (depth) {
      color = readBuffer.texture;
      this.compMat.uniforms.uMode.value = 1;
    } else {
      if (!this.sceneTarget) {
        const dt = new THREE.DepthTexture(this.w, this.h, THREE.UnsignedIntType);
        this.sceneTarget = new THREE.WebGLRenderTarget(this.w, this.h, { depthTexture: dt, type: THREE.HalfFloatType });
      }
      renderer.setRenderTarget(this.sceneTarget);
      renderer.clear();
      renderer.render(this.scene, this.camera);
      depth = this.sceneTarget.depthTexture;
      color = this.sceneTarget.texture;
      this.compMat.uniforms.uMode.value = 0;
    }
    u.tDepth.value = depth;
    u.invProj.value.copy(this.camera.projectionMatrixInverse);
    u.invView.value.copy(this.camera.matrixWorld);
    u.camPos.value.copy(this.camera.position);
    const sm = this.sun.shadow && this.sun.shadow.map ? this.sun.shadow.map.texture : null;
    u.shadowMap.value = sm;
    u.sunOn.value = sm && this.sun.castShadow ? 1 : 0;
    if (sm) u.shadowMatrix.value.copy(this.sun.shadow.matrix);
    u.sunDir.value.copy(this.sun.position).sub(this.sun.target.position).normalize();
    renderer.setRenderTarget(this.target);
    this.quad.render(renderer);
    if (this.glowOn) this.renderGlow(renderer);
    this.compMat.uniforms.uGlow.value = this.glowOn ? this.glowStrength : 0;
    this.compMat.uniforms.tDiffuse.value = color;
    this.compMat.uniforms.tHaze.value = this.target.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    if (this.clear) renderer.clear();
    this.compQuad.render(renderer);
  }

  renderGlow(renderer) {
    // sources only: swap the camera to the glow layer, no fog, no
    // background, and no shadow re-render for this extra pass
    const cam = this.camera, sc = this.scene;
    const mask = cam.layers.mask;
    const fog = sc.fog, bg = sc.background;
    const au = renderer.shadowMap.autoUpdate;
    const oldClear = new THREE.Color();
    renderer.getClearColor(oldClear);
    const oldAlpha = renderer.getClearAlpha();
    cam.layers.set(GLOW_LAYER);
    sc.fog = null; sc.background = null;
    renderer.shadowMap.autoUpdate = false;
    renderer.setClearColor(0x000000, 1);
    renderer.setRenderTarget(this.glowA);
    renderer.clear();
    renderer.render(sc, cam);
    renderer.setClearColor(oldClear, oldAlpha);
    renderer.shadowMap.autoUpdate = au;
    sc.fog = fog; sc.background = bg;
    cam.layers.mask = mask;
    const tw = 1 / this.glowA.width, th = 1 / this.glowA.height;
    for (const r of [1.5, 4]) {
      this.blurMat.uniforms.tSrc.value = this.glowA.texture;
      this.blurMat.uniforms.uDir.value.set(tw * r, 0);
      renderer.setRenderTarget(this.glowB);
      this.blurQuad.render(renderer);
      this.blurMat.uniforms.tSrc.value = this.glowB.texture;
      this.blurMat.uniforms.uDir.value.set(0, th * r);
      renderer.setRenderTarget(this.glowA);
      this.blurQuad.render(renderer);
    }
  }

  dispose() {
    this.glowA.dispose();
    this.glowB.dispose();
    this.blurMat.dispose();
    this.blurQuad.dispose();
    this.target.dispose();
    if (this.sceneTarget) this.sceneTarget.dispose();
    this.mat.dispose();
    this.compMat.dispose();
    this.quad.dispose();
    this.compQuad.dispose();
  }
}
