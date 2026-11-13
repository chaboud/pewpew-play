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
| `look` | haze setup, room layout | hints, all optional — see below |
| `cloth(kit, patch, tint)` | once per cloth patch, the first frame it is skinned (optional) | `true` if it dressed the patch (`patch.mesh` is the skinned sheet: uv spans it, u along the top row in particle order, v down); otherwise the patch takes its tint's hue |

`look` hints (anything left out takes the house default in brackets):

| hint | what it sets |
|---|---|
| `haze` | haze density per metre [0.01] |
| `sun` | how much sun shaft the haze shows [1] |
| `sunLight` | the directional sun's intensity [1.35] — bring it down for a room lit by its own fixtures |
| `ambient` | the hemisphere fill's intensity [1.2] |
| `eyeBack`, `eyeY` | how far in front of the open face the camera stands [2.6 m] and its height [2.0 m]; a deep or tall room steps back |
| `panX` | sideways pan limit as a fraction of the room's half-width [0.55] |
| `stops` | `[{ x, name }]`, left to right as seen (+x first): the rooms of a wide building. The viewer names the neighbours of the one in view on chips at the screen edges; a tap pans to that `x` [none] |
| `zoomTall` | starting zoom on a portrait screen, for a low wide room that would otherwise be a strip across a phone [1] |
| `panY` | `[min, max]` vertical pan limits in metres [-1.3, 1.7] |
| `ceil` | the room's height for the light volume and the haze [3.6 m] |
| `voxelScale` | multiplies the light volume's voxel size [1]; a big room asks for 1.5–2 to keep the grid affordable |
| `key` | how dim the room keeps itself, as a fraction of a house-lit room [1]. The drawn styles (sketch, ink) divide their input by it, as they do for a dim backdrop — without it a room lit by its own fixtures is hatched edge to edge |

Sun and hemisphere *colours* belong to the active backdrop (`looks.js`
applies its environment after the room lays out, scaling these two
intensities), so a room colours its light with fixtures and emitters.

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
