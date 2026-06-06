import type { SpecRow } from "@/content/types";

/** Spec table (brief III.3): hairline-divided rows, mono labels. `dark` adapts
 *  it for the inverse (ink-background) course card. */
export default function SpecTable({
  rows,
  head,
  dark = false,
  className = "",
}: {
  rows: SpecRow[];
  head?: { label: string; value: string };
  dark?: boolean;
  className?: string;
}) {
  const rule = dark ? "hr-b-inv" : "hr-b";
  const labelColor = dark ? "text-paper/55" : "text-muted";

  return (
    <table className={`w-full text-left ${className}`}>
      {head ? (
        <thead>
          <tr className={rule}>
            <th
              scope="col"
              className={`py-2 pr-4 font-mono text-[0.66rem] font-normal uppercase tracking-[0.2em] ${labelColor}`}
            >
              {head.label}
            </th>
            <th
              scope="col"
              className="py-2 text-right font-mono text-[0.66rem] font-normal uppercase tracking-[0.2em]"
            >
              {head.value}
            </th>
          </tr>
        </thead>
      ) : null}
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={rule}>
            <th
              scope="row"
              className={`w-2/5 py-3 pr-4 align-top font-mono text-[0.7rem] font-normal uppercase tracking-[0.16em] ${labelColor}`}
            >
              {row.label}
            </th>
            <td className="py-3 align-top text-sm leading-relaxed md:text-base">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
