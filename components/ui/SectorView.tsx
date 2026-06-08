import type { Sector } from "@/content/model";
import Container from "./Container";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import Epigraph from "./Epigraph";
import SketchSlot from "./SketchSlot";
import ArtSlot from "./ArtSlot";
import CTAButton from "./CTAButton";
import SymbolModule from "@/components/symbols/SymbolModule";
import Reveal from "@/components/motion/Reveal";
import { NarrativeHeading } from "@/lib/narrativeLink";

/**
 * Generic renderer for a prose sector (brief v2 §5 Section). Heroes and card
 * grids are rendered bespoke by their pages; this handles the uniform
 * kicker → heading → sub → body → quote → stat → art → cta sectors, with the
 * page's symbol module as the column motif.
 */
export default function SectorView({
  sector: s,
  topRule = true,
}: {
  sector: Sector;
  topRule?: boolean;
}) {
  const hasAside = Boolean(s.art?.length || s.module);

  return (
    <Section id={s.id} topRule={topRule}>
      <Container>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className={hasAside ? "lg:col-span-7" : "lg:col-span-9"}>
            {s.kicker ? (
              <SectionLabel className="mb-6">{s.kicker}</SectionLabel>
            ) : null}

            {s.quote ? (
              <Reveal className="mb-10">
                <Epigraph quote={s.quote} />
              </Reveal>
            ) : null}

            {s.heading ? (
              <Reveal>
                <NarrativeHeading
                  as="h2"
                  text={s.heading}
                  className="mb-6 font-display text-3xl italic leading-tight text-ink md:text-4xl"
                />
              </Reveal>
            ) : null}

            {s.sub ? (
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                {s.sub}
              </p>
            ) : null}

            <div className="max-w-2xl space-y-5">
              {s.body?.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </div>

            {s.stat?.length ? (
              <ul className="mt-8 max-w-2xl space-y-4">
                {s.stat.map((st, i) => (
                  <li key={i} className="hr-l pl-4">
                    <p className="text-base leading-relaxed text-ink/80">
                      {st.value}
                    </p>
                    <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                      {st.source} · cần xác minh
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}

            {s.cta?.length ? (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {s.cta.map((c, i) => (
                  <CTAButton
                    key={i}
                    href={c.href}
                    external={c.external}
                    variant={c.variant ?? (i === 0 ? "filled" : "outline")}
                  >
                    {c.label}
                  </CTAButton>
                ))}
              </div>
            ) : null}
          </div>

          {hasAside ? (
            <div className="lg:col-span-4 lg:col-start-9">
              {s.art?.map((a) =>
                a.kind === "sketch" ? (
                  <SketchSlot
                    key={a.id}
                    className="mb-6 w-full"
                    sketch={{ caption: a.brief, alt: a.brief, aspect: a.ratio ?? "4 / 5" }}
                  />
                ) : (
                  <ArtSlot
                    key={a.id}
                    id={a.id}
                    brief={a.brief}
                    ratio={a.ratio}
                    module={a.module}
                    className="mb-6"
                  />
                ),
              )}
              {s.module && !s.art?.length ? (
                <div className="hidden justify-center lg:flex">
                  <SymbolModule name={s.module} size={180} className="text-ink/15" />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
