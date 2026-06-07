# GAPS — dev step-in list

Anything that can't be fully executed here renders as a visible `<Gap>` on the page
(amber `DEV STEP-IN` marker) and is logged below, so the right specialist drops in
exactly there. Set `NEXT_PUBLIC_HIDE_GAPS=1` to hide all markers in production.

> Rule: **prefer a `<Gap>` over a fake.** A labelled empty frame is honest.

| id | location | what's needed | who / tool |
| --- | --- | --- | --- |
| `webgl/ink-field` | Home hero background | OGL ink-diffusion + paper-grain shader (monochrome). Static paper shown until then. | graphics dev (GLSL) |
| `webgl/halftone-transition` | between sketches | grayscale displacement + halftone dither transition | graphics dev |
| `symbols/production-set` | all pages (`SymbolModule`) | redraw the specimen (`public/symbols/W4GZ_Symbol_System.svg`) to production grade — consistent grid/stroke, animated variants per module. First-pass specimen marks are wired in now. | designer |
| `art/sketches` | Hub, member portraits, hand-writing, etc. (`SketchSlot`) | real ink illustrations in one consistent hand | illustrator |
| `art/concepts` | Why-Writing (machine-text flood), Community (rings reconnect), Ecosystem (-4GZ branch map) (`ArtSlot`) | concept graphics matching each sector | designer / motion |
| `motion/why-writing-scrub` | `/why-writing` | refined pinned + scrubbed self-typesetting movement sequence | motion dev (first pass shipped: scramble-on-view) |
| `content/data` | site-wide (Master Spec Appendix D) | STAT verification + sources, course details (duration/fee/schedule), onboarding cadence + graduation-essay criteria + Advanced review, Hub address, Discord/Blog/Fanpage links, 6–9 anonymized member entries | Hex |

_Add a row whenever you place a new `<Gap id=… />`._
