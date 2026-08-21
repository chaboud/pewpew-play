# sfx/ — the CC sample rack

The viewer looks for `sfx/manifest.json`. If it exists, every voice
plays a random sample from its pool (with playback-rate jitter and
stereo panning) instead of the synthesized fallback. No manifest = all
synthesis. No code changes needed to add sounds.

## How to fill this folder (needs a normal internet connection)

1. **Kenney Impact Sounds** (CC0, no login): https://kenney.nl/assets/impact-sounds
   — wood/glass/ceramic/soft impacts. Unzip the `Audio/` files you like
   into `sfx/kenney/`.
2. **freesound.org** — filter search by license = **Creative Commons 0**
   (plain CC-BY requires in-game credit; avoid NC/ND). Good queries:
   "glass shatter", "cat meow short", "cat trill".
3. **OpenGameArt.org** — filter CC0.

Then write `sfx/manifest.json`:

```json
{
  "impact": ["kenney/impactWood_medium_000.ogg", "kenney/impactWood_medium_001.ogg"],
  "crash":  ["kenney/impactGlass_heavy_000.ogg", "glass_shatter_cc0.ogg"],
  "scratch": ["fabric_rip_cc0.ogg"],
  "meow":   ["meow1.ogg", "meow2.ogg"],
  "mrrow":  ["mrrow1.ogg"]
}
```

Pool names: `impact`, `crash`, `scratch`, `meow`, `mrrow` (chirp,
chatter, boing, purr stay synthesized until pools are added for them —
ask and we wire more). 3–5 variants per pool is the sweet spot; the
player hears repeats fast with fewer. OGG or WAV both decode; keep
files mono and short.

Keep ONLY CC0 files in here, and note the source URL per file in
`sfx/SOURCES.md` when you add them — future-you (and any storefront
review) will want the provenance list.
