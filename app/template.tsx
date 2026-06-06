/**
 * Re-mounts on every navigation, so the entrance fade re-runs on route change
 * (brief 2.4: "fade nhẹ nội dung mới"). Reduced-motion disables it via globals.css.
 * Scroll-to-top on navigation is handled by Next.js defaults + the
 * `data-scroll-behavior="smooth"` attribute on <html>.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-fade">{children}</div>;
}
