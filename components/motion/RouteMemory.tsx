"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { recordPath } from "@/lib/routeMemory";

/**
 * Records each in-app navigation into the route memory (no storage), so a
 * destination page (e.g. /power-of-narrative) can show a dynamic "↩ {source}"
 * breadcrumb. Renders nothing.
 */
export default function RouteMemory() {
  const pathname = usePathname();
  useEffect(() => {
    recordPath(pathname);
  }, [pathname]);
  return null;
}
