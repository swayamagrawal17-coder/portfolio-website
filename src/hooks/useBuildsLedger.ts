import { useEffect } from 'react';

// Bahi Khaata and Horizon share one pinned stage (#builds-demos) and take
// the first/second half of its scroll range, crossfading between them in a
// narrow band in the middle. See useHorizonDemo.ts for the other half —
// the two files intentionally use the same constants.
const PHASE_SPLIT = 0.5;
const FADE_HALF_WIDTH = 0.04; // crossfade runs from PHASE_SPLIT ± this

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
    const outer = document.getElementById('builds-demos');
    const wrap = document.getElementById('builds-panel-wrap');
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

      let overall = -rect.top / scrollable;
      overall = Math.max(0, Math.min(1, overall));

      // This demo owns the first half of the shared stage.
      const local = Math.max(0, Math.min(1, overall / PHASE_SPLIT));
      // A slight over-count so the first row records almost immediately and the
      // last one settles a touch before the pin releases.
      render(Math.round(local * (rows.length + 0.5)));

      if (wrap) {
        const fadeStart = PHASE_SPLIT - FADE_HALF_WIDTH;
        const fadeEnd = PHASE_SPLIT + FADE_HALF_WIDTH;
        let opacity = 1;
        if (overall >= fadeEnd) opacity = 0;
        else if (overall > fadeStart) opacity = 1 - (overall - fadeStart) / (fadeEnd - fadeStart);
        wrap.style.opacity = String(opacity);
        wrap.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
      }
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
