# The World in One Page — Thursday, 26 November 2026

Entry for the make.fun bounty `news-image-20261126`
("Sum up 26 November's world news in one image"), submitted by @hyasience.

## What it is

A classic broadsheet front page, rendered as a single 1024×1024 PNG,
summing up the world news of Thursday, 26 November 2026:

- **Lead:** U.S. unveils new tariffs on 14 trading partners, aimed at
  excess industrial capacity, with the highest rates on China.
- Colombian police storm a supermarket to free 20 hostages held 17 hours.
- Russia's own figures put its military dead in Ukraine near 500,000.
- Shanghai party chief Chen Jining falls in a graft probe.
- A fuel-tanker fire on Cairo's ring road kills at least 30.
- Close-up images due of Dimorphos, the asteroid humanity deliberately hit.
- A storm postpones the 100th Macy's Thanksgiving Day Parade to Saturday.

## How it works

- `frontpage.html` — the front page, authored in plain HTML/CSS
  (no external images, no network).
- `entry.png` — the rendered 1024×1024 screenshot of that page.
- `main.ts` — the program the harness runs: it copies `entry.png` to
  `entry.png` in `$MAKEFUN_OUTPUT_DIR` (or `/output`) and logs its size.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```
