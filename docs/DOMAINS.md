# Burn & Build — domain coordination

## Primary marketing site

**https://burnandbuilddiet.com** — this repo (`landing-burn-and-build`)

All landing page edits happen here. Push to `main` deploys via GitHub Pages.

## App domain

**https://gettheburnandbuildapp.com** — `pwa-burn-and-build` (creator, myplan, API)

| Path | Purpose |
|------|---------|
| `/` | Redirect to burnandbuilddiet.com (GoDaddy) |
| `/createyourfoodplan/` | Program creator / checkout |
| `/myplan/` | Daily app |

## GoDaddy setup (Kory)

Redirect **gettheburnandbuildapp.com** → **burnandbuilddiet.com** for the marketing homepage only.

**Important:** Do not redirect these app paths — they must keep working on gettheburnandbuildapp.com:

- `gettheburnandbuildapp.com/createyourfoodplan/`
- `gettheburnandbuildapp.com/myplan/`
- `gettheburnandbuildapp.com/support`
- `gettheburnandbuildapp.com/privacypolicy`

If GoDaddy only offers a whole-domain forward, use **forwarding with path exceptions** or redirect only `www` + apex while leaving app paths on GitHub Pages. When unsure, forward only `gettheburnandbuildapp.com` (no path) and test creator links from the landing CTAs.

## CTAs on this site

**Create Your Diet** buttons link to:

`https://gettheburnandbuildapp.com/createyourfoodplan/?browse=1`

That is correct — checkout runs on the app domain.

## Deprecated

The duplicate landing in `pwa-burn-and-build/landing/` should not be the marketing source of truth once GoDaddy redirect is live. Long term, consider removing `landing/` from the PWA repo or replacing it with a redirect to burnandbuilddiet.com.

## Support email

**support@burnandbuilddiet.com** on this site.
