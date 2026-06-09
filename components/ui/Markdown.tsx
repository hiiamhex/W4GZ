import type { ReactNode } from "react";

/**
 * Minimal, dependency-free Markdown renderer for the founder's drafts
 * (docs/privacy.md, docs/terms.md) — a tiny subset: `#`/`##` headings, `-` lists,
 * paragraphs, `**bold**` and `*italic*`. `[bracketed]` placeholders are kept
 * literal. Monochrome, on-brand typography.
 */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) out.push(<strong key={k++} className="font-medium text-ink">{tok.slice(2, -2)}</strong>);
    else out.push(<em key={k++}>{tok.slice(1, -1)}</em>);
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="mt-12 mb-4 font-display text-2xl italic leading-tight text-ink md:text-3xl">
          {inline(line.slice(3))}
        </h2>,
      );
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={key++} className="mb-6 font-display text-[2.2rem] italic leading-[1.05] text-ink md:text-5xl">
          {inline(line.slice(2))}
        </h1>,
      );
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} className="my-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink/80 marker:text-muted">
          {items.map((it, j) => (
            <li key={j}>{inline(it)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("#") && !lines[i].startsWith("- ")) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className="my-4 text-lg leading-relaxed text-ink/80">
        {inline(para.join(" "))}
      </p>,
    );
  }

  return <div className="max-w-2xl">{blocks}</div>;
}
