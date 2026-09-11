import { useEffect } from 'react';

/**
 * Drives the "the ledger writes itself" demo in the Side projects section.
 *
 * Same mechanism as useCertScroller: no GSAP pin (the codebase has none), just a
 * CSS `position: sticky` stage over a tall runway plus a scroll-progress reader.
 * As the pinned panel is scrolled through, rows gain `.is-recorded` one at a
 * time, the counter ticks up, and the panel gets `.is-complete` (reveals the CTA).
 *
 * Reduced motion opts out entirely: the CSS then unpins the stage and shows every
 * row as a static, fully readable ledger.
 */
export function useBuildsLedger() {
  useEffect(() => {
    const outer = document.getElementById('builds-ledger');
    const rowsWrap = document.getElementById('builds-rows');
    const rows = rowsWrap ? Array.from(rowsWrap.children) : [];
    const countEl = document.getElementById('builds-count');
    const panel = document.getElementById('builds-panel');

    if (!outer || !rows.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let recorded = -1;

    const render = (n: number) => {
      const next = Math.max(0, Math.min(rows.length, n));
      if (next === recorded) return;
      recorded = next;

      rows.forEach((row, i) => {
        (row as HTMLElement).classList.toggle('is-recorded', i < next);
      });
      if (countEl) countEl.textContent = String(next).padStart(2, '0');
      if (panel) panel.classList.toggle('is-complete', next >= rows.length);
    };

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      // Not measurable yet (e.g. first paint while the tab is hidden, so the
      // viewport reads 0). Leave the ledger empty; a later pass corrects it.
      if (scrollable <= 0) {
        render(0);
        return;
      }

      let progress = -rect.top / scrollable;
      progress = Math.max(0, Math.min(1, progress));
      // A slight over-count so the first row records almost immediately and the
      // last one settles a touch before the pin releases.
      render(Math.round(progress * (rows.length + 0.5)));
    };

    render(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Re-measure once the tab becomes visible / finishes loading — same reason
    // useEraReveals refreshes ScrollTrigger on these events.
    window.addEventListener('load', onScroll);
    document.addEventListener('visibilitychange', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      document.removeEventListener('visibilitychange', onScroll);
    };
  }, []);
}
