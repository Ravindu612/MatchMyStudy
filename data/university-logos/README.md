# University logos

`manifest.json` is the batch tracker for authentic logos on university cards. One entry per university in `data/universities`.

## Status

- `completed` — a local file is wired up and should be left in place. Pre-batch Canadian PNGs are `completed` even though their licence was not recorded.
- `pending` — no logo yet. This is the pool for the next batch.
- `blocked` — a source was reviewed and rejected. Do not retry that source unless the note says the evidence changed.

## Next batch

Take `nextPendingSlugs` (the five pending universities with the lowest `prominenceRank`). `prominenceRank` follows a parsed QS-style `#N` in `ranking`, then country file name, then order in that file. Skip anything `completed` or `blocked`.

After a batch, update each handled entry (`logoSourceUrl`, `assetPath`, `license`, `attribution`, `restrictions`, `status`, `batch`, `notes`) and refresh `audit` plus `nextPendingSlugs`. Point `logo` in the university data at `public` + `assetPath` only when status is `completed`.

## Rules for a new asset

Use an official file whose terms allow this directory to show the mark, or a Wikimedia Commons file with a public-domain, CC0, CC BY, or CC BY-SA licence. Record the file page, licence URL, attribution, and any trademark limit. If permission is unclear, set `blocked` and move on. Do not draw, generate, or swap in a generic icon.

Optimize to a small SVG, WebP, or PNG. SVG logos go through `UniversityLogo`, which serves them with `unoptimized` and does not enable `dangerouslyAllowSVG`.

## Where logos render

`components/UniversityLogo.tsx` is the shared renderer (64×64 card slot, fixed hero slot, `object-contain`, lazy `next/image`, alt text "`Name` logo"). It is used on country university cards, country search results, homepage search results, and the university profile hero. Missing logos leave the card unchanged. A failed image keeps the same box and shows initials.

Attribution required by the licence is printed under the hero mark. Cards stay uncluttered; the full credit stays in this manifest.
