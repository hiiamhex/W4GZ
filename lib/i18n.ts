/**
 * Minimal i18n scaffolding. The site ships Vietnamese-first; English is stubbed
 * for later. Content is authored as a `Localized<T>` dict with `vi` filled and
 * `en` optional, so a locale switch can be added without restructuring content.
 */

export type Locale = "vi" | "en";

export const DEFAULT_LOCALE: Locale = "vi";
export const LOCALES: readonly Locale[] = ["vi", "en"] as const;

/** A localized value: `vi` is authoritative now; `en` is a stub to fill later. */
export type Localized<T> = { vi: T; en?: T };

/** Resolve a localized entry for a locale, falling back to Vietnamese. */
export function pick<T>(entry: Localized<T>, locale: Locale = DEFAULT_LOCALE): T {
  return entry[locale] ?? entry.vi;
}
