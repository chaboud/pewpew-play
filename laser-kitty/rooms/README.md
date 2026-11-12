# rooms/ — one module per newer room

Rooms 0–9 are recognized inside `main.js`'s `meshFor` chain. Rooms from 10
up keep their look here, one file each, so a room can be authored without
editing the monolith. `main.js` consults `ROOM_ART[cfg.room]` at four
points:

| export | called | returns |
|---|---|---|
| `mesh(kit, body)` | first thing in `meshFor`, for every body | an `Object3D` (the render loop drives its position and quaternion from the sim body), or `null` to fall through to the shared chain |
| `material(kit, body)` | for bodies nothing recognized, before the default materials | a material for the default box / sphere / capsule, or `null` |
| `decor(kit, group, hx, hz)` | once per room build | nothing; add render-only dressing to `group` |
| `look` | haze setup | `{ haze, sun }`: haze density per metre, sun-shaft strength |
| `cloth(kit, patch, tint)` | once per cloth patch, the first frame it is skinned (optional) | `true` if it dressed the patch (`patch.mesh` is the skinned sheet: uv spans it, u along the top row in particle order, v down); otherwise the patch takes its tint's hue |

`body` is `{ i, shape, a, b, c, cls, px, py, pz, gloss, tint, h, color }`:

- `shape` 0 box (`a,b,c` = half-extents), 1 sphere (`a` = radius),
  2 capsule (`a` = half-height, `b` = radius);
- `cls` 0 static, 1 furniture piece (part of a compound), 2 loose prop,
  4 tombstone;
- `px,py,pz` the body's position at build time, `gloss` / `tint` the sim's
  laser optics (the recognition keys: a room builder gives each kind of
  thing a distinct dims + gloss + tint signature and this module matches
  on it with a small tolerance);
- `h` a stable 0..1 hash of the body index, `color` the default colour.

Recognition is by signature because the render stream carries no names:
pick dims that are unique within the room, and reserve a `gloss` value per
family when dims alone would collide.

`kit` is what a module may use from `main.js`: `THREE`, `toonMat(color,
opts)` (the shared cel ramp — use it for anything matte), `makeCanvas(w, h,
draw)` for canvas textures, `glowSprite(color, scale)`, `liquidStyle`,
`roughen(geo, amt)`, `artTex(i)`, `neonTex(k)`, `bodyColor`, the shared
textures (`woodTex`, `fabricTex`, `floorTex`, `concreteTex`, `checkerTex`),
`ringMat`, `NEON_GLOW`, `GLOW_LAYER`, and two registries:

- `animParts.push({ node, mode, host, ... })` for cosmetic motion
  (`'spin'`, `'yaw'`, `'flicker'` — see the frame loop in `main.js`);
- `pendingLights.push(...)` for fixtures that should cast real light (see
  the lit-fixture pass in `main.js` for the entry shape).

`kit.exhibit(i)` returns `{ id, name, price }` for a body the sim tagged as
part of a named exhibit (else `null`) — price tags and plaques read the
sim's catalogue rather than repeating it here.

A mesh that should glow into the haze and the light volume sets
`m.userData.emitter = { color: new THREE.Color(...), strength, radius }`
and puts its bright parts on `GLOW_LAYER`. Set `m.userData.noShadow = true`
for things that must not cast.

Sounds mostly need nothing here: the viewer classes every mesh from the
sim's material bits (brittle + high gloss = glass, brittle = ceramic, soft,
steel by gloss, else wood). A mesh that should sound like an instrument or
a particular material names its voice: `m.userData.voice = 'gong' | 'chime'
| 'bowl' | 'bead' | 'bone' | 'stone' | 'rubber'`. Its impacts then play
that voice (and `bone` / `stone` have their own break). An unknown name
falls back to the material class.
