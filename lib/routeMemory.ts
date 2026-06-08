/**
 * Tiny route memory (no browser storage): tracks the visitor's current in-app
 * route so a destination page can show where they came FROM — powering the
 * dynamic breadcrumb on /power-of-narrative. A `RouteMemory` client component
 * records each navigation; consumers read via `useSyncExternalStore`.
 */
let current: string | null = null;
let previous: string | null = null;
const listeners = new Set<() => void>();

export function recordPath(path: string) {
  if (path === current) return;
  previous = current;
  current = path;
  listeners.forEach((l) => l());
}

export function subscribePath(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

/** The route the visitor was on before the current one (null on first entry). */
export function getPreviousPath(): string | null {
  return previous;
}
