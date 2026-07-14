# Deprecated — landing-burn-and-build

This repository is **deprecated**. Do not edit landing content here.

| Item | Value |
|------|--------|
| **Canonical repo** | [pwa-burn-and-build](https://github.com/koryedwards-del/pwa-burn-and-build) |
| **Canonical site** | https://gettheburnandbuildapp.com |
| **This domain** | burnandbuilddiet.com → redirects to canonical |

## What to do

1. **Landing edits** — only in `pwa-burn-and-build/landing/`. Push to `main` deploys via GitHub Actions.
2. **Delete this repo** — after moving `burnandbuilddiet.com` DNS to `pwa-burn-and-build` (or setting a registrar redirect):
   - GitHub → **landing-burn-and-build** → Settings → Pages → remove custom domain
   - Settings → Danger zone → Delete repository

## Optional: host both domains on one repo

In **pwa-burn-and-build** → Settings → Pages, add `burnandbuilddiet.com` as a second custom domain (DNS must point to GitHub Pages). Then delete this repo.

See `docs/DOMAINS.md` in **pwa-burn-and-build** for full steps (add that file when merging domain coordination PR).
