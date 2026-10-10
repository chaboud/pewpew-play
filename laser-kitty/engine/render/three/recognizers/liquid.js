// the sim's liquid colour bands (main.js liquidStyle): tint >= 0.975 milk,
// 0.94..0.975 clear (water, gin), else the paint hue wheel (coffee ~0.0265).
import * as THREE from 'three';

export function liquidColor(tint) {
  if (tint >= 0.975) return { color: new THREE.Color(0xf2efe6), clear: false };
  if (tint >= 0.94) return { color: new THREE.Color(0xc3dde4), clear: true };
  return { color: new THREE.Color().setHSL((tint * 2.83) % 1, 0.8, tint < 0.05 ? 0.3 : 0.42), clear: false };
}
