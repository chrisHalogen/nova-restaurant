# NOVA Restaurant

Website for NOVA Restaurant, a modern luxury restaurant and bar at RP Nexus Centre, Jakande, Lekki,
Lagos.

## Status

Phase A: the public pages are built as static HTML templates in `html-templates/`, for review
before they are converted into the WordPress theme (phase B). Online ordering is phase 2.

## What is here

| Path | Holds |
|---|---|
| `html-templates/` | 13 static pages, shared chrome, CSS, JS, fonts, icon sprite, images |
| `html-templates/PLACEHOLDERS.md` | every piece of sample content waiting for real client material |
| `CLAUDE.md` | working rules for this repo |

## Content warning

The dishes, prices, opening hours, phone number and address on these pages are **placeholder
content**, and the food and cocktail photography is stock imagery. Nothing here is final.

## Run it locally

```sh
cd html-templates
python3 -m http.server 8790
```

Then open http://localhost:8790/.

## Build notes

- No JS libraries except Slim Select (self-hosted) on the two form pages.
- Fonts (Cormorant Garamond, Montserrat) and icons (Phosphor sprite) are self-hosted.
- Lighthouse on the built pages: accessibility 100, best practices 100, SEO 100.
