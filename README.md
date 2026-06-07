# W4GZ — Writing4GenZ

The production marketing site for **W4GZ**, a Vietnamese writing community. The
site is itself a story: a visitor walks in from the noise, sees what a
self-authored life looks like, and picks up the pen. Motto — _"Creates narratives
worth living."_ — is the operating principle, not a tagline.

Built section-by-section from the authoritative brief in
[`docs/brief.md`](docs/brief.md) (extracted from `docs/W4GZ_Website_Script.docx`).

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4** (CSS-first `@theme`)
- Fonts via `next/font/google`: **Cormorant Garamond** (display, italic) ·
  **Be Vietnam Pro** (body) · **IBM Plex Mono** (mono/tech layer)
- No backend: forms post to a stubbed, configurable handler (`lib/submit.ts`)

> **Font note:** the brief specified Outfit (body) and DM Mono (mono), but neither
> ships a Vietnamese subset on Google Fonts — Vietnamese diacritics (ọ, ệ, ữ, …)
> would fall back to a system font. They were swapped for Be Vietnam Pro and
> IBM Plex Mono (full Vietnamese) to keep rendering consistent. Cormorant Garamond
> is unchanged.

## Getting started

Requires **Node.js ≥ 20.9** (Next.js 16).

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
npm run typecheck
npm run lint
```

Google Fonts are fetched and self-hosted at build time, so the first build needs
network access.

## Routes (one per chapter)

| Route           | Chapter | Beat |
| --------------- | ------- | ---- |
| `/`             | I · Home — Narratives Worth Living | recognition |
| `/why-writing`  | II · Why Writing — the last human act | illumination |
| `/courses`      | III · Courses — The Practice | method |
| `/community`    | IV · Community — The Living Community | desire |
| `/ecosystem`    | V · Ecosystem — The -4GZ Ecosystem | scale |
| `/people`       | VI · People — softer Hall of Fame | identification |
| `/join`         | VII · Join — The Covenant | commitment |

## Structure

```
app/            # routes (one folder per chapter) + layout, template, sitemap, robots, OG/icon
components/
  layout/       # Nav, Footer
  motion/       # Reveal, HeroStagger, Ticker (all reduced-motion aware)
  ui/           # SectionLabel, EpigraphQuote, PullQuote, GhostWord, CTAButton,
                # SketchSlot, StatBlock/CountUp, SpecTable, EntryCard, CourseCard,
                # PersonCard, ChapterTransition, Container, Section, Wordmark
  forms/        # StubForm
content/        # ALL copy — typed, i18n-ready (vi filled, en stubbed)
lib/            # config (+ placeholder constants), i18n, submit, seo
public/sketches # drop real kí họa here → SketchSlot swaps to next/image
docs/           # brief.md + the source .docx
```

## Design system

Monochrome only — black ink on warm paper. Boldness comes from **structure and
typography**, never color. Tokens (CSS vars + Tailwind `@theme` in
`app/globals.css`):

`--ink #141414` · `--paper #F4F1EB` · `--paper-dark #EDE9E0` · `--muted #7A7872`
· `--hairline rgba(20,20,20,.12)`

Grids are divided by 0.5px hairlines (`hr-*` utilities), sections breathe with
~1.5× vertical padding, and giant stroked-serif "ghost" words break the grid.
Motion: staggered hero fade-up, scroll reveals, subtle hovers, route-change fade
— all disabled under `prefers-reduced-motion`.

## Motion system

A "living manuscript" motion layer (GSAP + Lenis + View Transitions) sits on top of the
server-rendered site as pure progressive enhancement:

- **Lenis** smooth scroll (one instance, GSAP-ticker driven) · **View Transitions** route
  morphs (shared-element chapter mark + ink wipe) · session **preloader** ·
  **scroll-velocity** variable-font weight · **ghost-word parallax** · **scramble** decode
  (Why-Writing labels) · sketch **ink-in** wipes · **magnetic** CTAs · blinking **caret cursor**.
- **Guardrails:** a visible "Chuyển động" toggle (footer) and `prefers-reduced-motion` both
  hard-disable Lenis + all choreography (native scroll, instant cuts). All copy is
  server-rendered, visible without JS, and crawlable; the preloader is skippable and never
  blocks first paint; a lite path (mobile / low-power / Save-Data) is detected for the WebGL layer.
- **Deferred (need a browser to tune):** the optional WebGL layer (OGL paper-grain /
  ink-diffusion / halftone), the horizontal-scroll galley, SVG stroke-draw ink-in, and the
  hero per-line mask reveal — intentionally not shipped without visual QA.

Motion deps: `lenis`, `gsap` (free plugins), `@gsap/react`, `next-view-transitions`.

## Content & editing

All copy lives in `/content/<page>.ts` as a `Localized<T>` dict (`vi` filled now,
`en` stubbed). Components never hard-code copy. To translate later, add the `en`
key and a locale switch; `lib/i18n.ts`'s `pick()` already falls back to `vi`.

## Imagery (kí họa)

All imagery is member hand-sketch. Until real assets exist, `SketchSlot` renders
an intentional empty frame captioned with the brief's IMAGE description. Drop
files into `/public/sketches/` and set `sketch.src` in the content files.

## Privacy — Law III (non-negotiable)

On `/people` and anywhere members appear: **sketch portraits + single-initial
aliases + cohort number only. Never real names, never photos.** This is enforced
structurally — `PersonCard` has no `name`/`photo` field.

## Forms

`StubForm` posts through `lib/submit.ts`, which `console.info`s the payload and, if
`SUBMIT_ENDPOINT` (in `lib/config.ts`) is set, POSTs JSON to it. Wire that constant
to a real backend before launch.

## Before launch

See [`PLACEHOLDERS.md`](PLACEHOLDERS.md) — a checklist of every NOTE from the brief
(real data, links, address, testimonials, sketches, domain, form endpoint).
