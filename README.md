# pewpew-play

Built output of several private game repos, served by GitHub Pages from this
branch (`gh-pages`) at https://chaboud.github.io/pewpew-play/. Unlisted:
`robots.txt` disallows everything and each page is `noindex`. No source
lives here.

## One folder per game

| Folder | Game | Published by |
|---|---|---|
| `pewpew/` | PewPew | `scripts/publish-play.sh` in the PewPew repo |
| `strollzilla/` | Strollzilla | its sessions, by hand |
| `laser-kitty/` | Laser Kitty | its sessions, by hand (also `chaboud/laser-kitty-play`) |
| `splinecraft/` | Splinecraft | its sessions, by hand |

The root holds only `index.html` (the list of games), `robots.txt`,
`.nojekyll` and this file.

## Rules for anything that publishes here

1. **Touch only your own folder.** Replace its contents; leave every other
   path as you found it.
2. **Commit on top of the branch as it stands.** Never an orphan commit,
   never a force push: either one deletes everybody else's game.
3. If a push is rejected because another game landed first, pull with
   rebase and push again.
4. Built output only: no source, no sourcemaps.
5. Commit subject: `<game> <source sha>: <what changed>`, so a build on a
   phone can be matched to its code.
6. A new game adds its folder, a row above, and a link in `index.html`.
