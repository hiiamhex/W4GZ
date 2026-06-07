import { whyWriting } from "@/content/why-writing";
import { community } from "@/content/community";
import { ecosystem, projects } from "@/content/ecosystem";
import type { Page } from "@/content/model";

/**
 * STAT guardrail (brief v2 §4): every `verify` stat logs a build/SSR console
 * warning so unverified numbers can't ship silently. Runs once per process.
 */
const PAGES: Page[] = [whyWriting, community, ecosystem];
let done = false;

export function warnUnverifiedStats(): void {
  if (done) return;
  done = true;

  const items: string[] = [];
  for (const page of PAGES) {
    for (const s of page.sectors) {
      for (const st of s.stat ?? []) {
        if (st.verify) items.push(`Ch.${page.chapter} ${s.id} · ${st.source}`);
      }
    }
  }
  if (projects.stat?.verify) {
    items.push(`Ch.${ecosystem.chapter} V.4 · ${projects.stat.source}`);
  }

  if (items.length) {
    console.warn(
      `\n[W4GZ] ${items.length} STAT(s) need verification before publish (Master Spec Appendix D):`,
    );
    for (const i of items) console.warn(`  · ${i}`);
    console.warn("");
  }
}
