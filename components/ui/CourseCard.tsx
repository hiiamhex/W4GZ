import type { SpecRow, Cta } from "@/content/types";
import SpecTable from "./SpecTable";
import CTAButton from "./CTAButton";
import SectionLabel from "./SectionLabel";

/**
 * Course card (brief III.3). `light` = paper, hairline-framed (Introduction);
 * `dark` = ink fill, inverse spec table + inverse CTA (Advanced — stands out
 * because it is limited and forthcoming).
 */
export default function CourseCard({
  tone,
  status,
  title,
  positioning,
  specHead,
  spec,
  cta,
}: {
  tone: "light" | "dark";
  status: string;
  title: string;
  positioning: string;
  specHead?: { label: string; value: string };
  spec: SpecRow[];
  cta: Cta & { variant?: "filled" | "outline" | "inverse" };
}) {
  const dark = tone === "dark";

  return (
    <div
      className={`flex h-full flex-col gap-8 p-8 md:p-10 ${
        dark ? "bg-ink text-paper" : "hr-all bg-paper-dark/40"
      }`}
    >
      <SectionLabel muted={!dark} className={dark ? "text-paper/60" : ""}>
        {status}
      </SectionLabel>

      <div className="space-y-3">
        <h3 className="font-display text-3xl italic leading-tight md:text-4xl">
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed md:text-base ${
            dark ? "text-paper/70" : "text-muted"
          }`}
        >
          {positioning}
        </p>
      </div>

      <SpecTable head={specHead} rows={spec} dark={dark} />

      <div className="mt-auto pt-2">
        <CTAButton
          href={cta.href}
          external={cta.external}
          variant={cta.variant ?? (dark ? "inverse" : "filled")}
        >
          {cta.label}
        </CTAButton>
      </div>
    </div>
  );
}
