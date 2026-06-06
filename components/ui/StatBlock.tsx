import type { Stat } from "@/content/types";
import CountUp from "./CountUp";

/** Hero stat (brief I.1): large serif value over a small mono label. */
export default function StatBlock({
  stat,
  className = "",
}: {
  stat: Stat;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="font-display text-4xl leading-none text-ink md:text-5xl">
        <CountUp value={stat.value} />
      </span>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
        {stat.label}
      </span>
    </div>
  );
}
