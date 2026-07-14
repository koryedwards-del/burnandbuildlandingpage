# Burn & Build — domain coordination

**Canonical site:** `pwa-burn-and-build` → **https://gettheburnandbuildapp.com**

**This repo (`landing-burn-and-build`):** **deprecated** — `burnandbuilddiet.com` redirects to canonical.

## Domains

| Domain | Role | Host |
|--------|------|------|
| **gettheburnandbuildapp.com** | Primary marketing + app | `pwa-burn-and-build` (GitHub Actions Pages) |
| **burnandbuilddiet.com** | Legacy alias | This repo — redirect only until deleted |

## Single source of truth

Edit landing only in **`pwa-burn-and-build/landing/`**.

## Delete this repo (manual)

1. **pwa-burn-and-build** → Settings → Pages → add `burnandbuilddiet.com` if you want both domains on one site (update DNS first).
2. **landing-burn-and-build** → Settings → Pages → remove `burnandbuilddiet.com`.
3. **landing-burn-and-build** → Settings → Danger zone → Delete repository.

Or keep this repo as a redirect shell until DNS/registrar points `burnandbuilddiet.com` to `gettheburnandbuildapp.com` directly.
