"use client";

import type { Field } from "@/lib/forms/schema";

/**
 * One form field (brief Update 8) — accessible (label tied to input, aria-invalid
 * / aria-describedby), monochrome. Errors are shown in ink + a solid border (the
 * brand is monochrome — never the prototype's red); the message itself, not
 * colour, carries the signal.
 */
const INPUT_BASE =
  "w-full bg-transparent text-base text-ink outline-none transition-colors placeholder:text-muted/70";

export default function FormField({
  field: f,
  value,
  error,
  onChange,
}: {
  field: Field;
  value: string | string[];
  error?: string;
  onChange: (v: string | string[]) => void;
}) {
  const descId = `${f.id}-hint`;
  const errId = `${f.id}-err`;
  const describedBy = [f.hint ? descId : null, error ? errId : null].filter(Boolean).join(" ") || undefined;
  const optional = f.optional ? f.optionalLabel ?? "(tuỳ bạn)" : null;
  const edge = error ? "border-ink" : "border-hairline";

  return (
    <div className="mb-6">
      <label
        htmlFor={f.type === "chips" ? undefined : f.id}
        className="mb-2 block text-sm text-ink/85"
      >
        {f.label}
        {optional ? <span className="ml-1 text-xs italic text-muted">{optional}</span> : null}
      </label>

      {f.type === "textarea" ? (
        <>
          <textarea
            id={f.id}
            rows={f.rows ?? 4}
            value={value as string}
            placeholder={f.placeholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            onChange={(e) => onChange(e.target.value)}
            className={`${INPUT_BASE} rounded-[3px] border ${edge} p-3 leading-relaxed focus:border-ink`}
          />
          {f.wordCount ? (
            <div className="mt-1 text-right font-mono text-[0.72rem] text-muted">
              {typeof value === "string" && value.trim() ? value.trim().split(/\s+/).length : 0} từ
            </div>
          ) : null}
        </>
      ) : f.type === "select" ? (
        <select
          id={f.id}
          value={value as string}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={(e) => onChange(e.target.value)}
          className={`${INPUT_BASE} cursor-pointer appearance-none rounded-[2px] border ${edge} px-3 py-2.5 focus:border-ink`}
        >
          <option value="">— chọn nếu bạn muốn —</option>
          {f.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : f.type === "chips" ? (
        <div role="group" aria-label={f.label} className="flex flex-wrap gap-2">
          {f.options?.map((o) => {
            const arr = Array.isArray(value) ? value : [];
            const on = arr.includes(o);
            return (
              <button
                type="button"
                key={o}
                aria-pressed={on}
                onClick={() => onChange(on ? arr.filter((x) => x !== o) : [...arr, o])}
                className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
                  on ? "border-ink bg-ink text-paper" : "border-hairline text-ink/85 hover:border-ink"
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
      ) : (
        <input
          id={f.id}
          type={f.type}
          value={value as string}
          placeholder={f.placeholder}
          autoComplete={f.type === "email" ? "email" : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={(e) => onChange(e.target.value)}
          className={`${INPUT_BASE} border-0 border-b-[1.5px] ${edge} py-2 focus:border-ink`}
        />
      )}

      {f.hint ? (
        <p id={descId} className="mt-1.5 text-xs italic text-muted">
          {f.hint}
        </p>
      ) : null}
      {error ? (
        <p id={errId} role="alert" className="mt-1.5 text-xs italic text-ink/70">
          {error}
        </p>
      ) : null}
    </div>
  );
}
