"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile (brief Update 8) — privacy-friendly spam challenge, the
 * only third-party script on the form pages and only when configured. Renders
 * nothing unless `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set (so dev/local works with
 * no challenge; the server then skips verification too). Token is verified
 * server-side in the Route Handler.
 */
declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          theme?: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        },
      ) => string;
    };
  }
}

export default function Turnstile({ onToken }: { onToken: (token: string | null) => void }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!siteKey || !el) return;
    let cancelled = false;
    const render = () => {
      if (cancelled || !window.turnstile || el.dataset.rendered) return;
      el.dataset.rendered = "1";
      window.turnstile.render(el, {
        sitekey: siteKey,
        theme: "light",
        callback: (t) => onToken(t),
        "expired-callback": () => onToken(null),
      });
    };
    const ID = "cf-turnstile-api";
    const existing = document.getElementById(ID);
    if (window.turnstile) render();
    else if (existing) existing.addEventListener("load", render);
    else {
      const s = document.createElement("script");
      s.id = ID;
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      s.addEventListener("load", render);
      document.head.appendChild(s);
    }
    return () => {
      cancelled = true;
    };
  }, [siteKey, onToken]);

  if (!siteKey) return null;
  return <div ref={ref} className="mt-5" />;
}
