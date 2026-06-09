"use client";

import { useState } from "react";
import type { EcoCardItem } from "@/content/ecosystem";

/**
 * Ecosystem cards (Patch G): each card shows a base (kind + name); on hover
 * (desktop, CSS) or tap (mobile, one open at a time) a banner slides in with an
 * image placeholder + title + short description. Real <button>s, keyboard-
 * accessible; monochrome; styles + reduced-motion in globals.css (`.eco-*`).
 * Content is placeholder for now (founder edits); image reads "hình ảnh · cập nhật sau".
 */
export default function EcoGrid({ items }: { items: EcoCardItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <button
          key={`${it.name}-${i}`}
          type="button"
          aria-expanded={open === i}
          onClick={() => setOpen((cur) => (cur === i ? null : i))}
          className={`eco-card ${open === i ? "is-open" : ""}`}
        >
          <span aria-hidden className="eco-dot" />
          <span className="eco-base">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">{it.kind}</span>
            <span className="font-display text-2xl font-semibold leading-tight text-ink">{it.name}</span>
          </span>
          <span className="eco-banner" aria-hidden={open === i ? undefined : true}>
            <span className="eco-banner-img font-display text-3xl italic">{it.mark}</span>
            <span className="flex-1 px-4 py-3">
              <span className="block font-display text-xl font-semibold leading-tight text-ink">{it.name}</span>
              <span className="mt-1 block text-sm leading-relaxed text-ink/80">{it.desc}</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
