import { dictionary, library } from "@/content/ecosystem";
import DictStele from "./DictStele";
import LibraryGame from "./LibraryGame";

/**
 * Ecosystem strategic projects — exactly two enlarged feature cards. Card chrome
 * and copy are unchanged from Patch 6; the stages are Patch 8:
 *
 *  • Dictionary4GenZ — a levitating ink-stone "tech stele" whose entry dissolves
 *    to dust and is re-engraved by a carving beam (DictStele).
 *  • Library4GenZ — an archive box hosting a 3-level drag-and-drop
 *    shelf-stacking mini-game (LibraryGame).
 *
 * Both stages handle their own reduced-motion / toggle-off paths.
 */
export default function FeatureProjects() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Dictionary4GenZ — tech stele */}
      <article className="eco-feat">
        <div className="eco-feat-head">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
            {dictionary.kind}
          </div>
          <h3 className="mt-1 mb-2 font-display text-[2rem] font-semibold leading-[1.02] text-ink">
            {dictionary.name}
          </h3>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/80">{dictionary.desc}</p>
        </div>
        <DictStele />
      </article>

      {/* Library4GenZ — shelf-stacking mini-game */}
      <article className="eco-feat">
        <div className="eco-feat-head">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
            {library.kind}
          </div>
          <h3 className="mt-1 mb-2 font-display text-[2rem] font-semibold leading-[1.02] text-ink">
            {library.name}
          </h3>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/80">{library.desc}</p>
        </div>
        <LibraryGame />
      </article>
    </div>
  );
}
