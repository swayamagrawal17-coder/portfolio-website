import { useEffect } from 'react';

/** Indian digit grouping (2,2,3), e.g. 1173969 -> "11,73,969". */
function formatINR(n: number): string {
  const s = Math.round(Math.max(0, n)).toString();
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return `${rest},${last3}`;
}

// Bahi Khaata and Horizon share one pinned stage (#builds-demos) and take
// the first/second half of its scroll range, crossfading between them in a
// narrow band in the middle. See useBuildsLedger.ts for the other half —
// the two files intentionally use the same constants.
const PHASE_SPLIT = 0.5;
const FADE_HALF_WIDTH = 0.04; // crossfade runs from PHASE_SPLIT ± this

/**
 * Drives the "the loan pays itself down" demo in the Side projects section.
 *
 * Same mechanism as useBuildsLedger / useCertScroller: a CSS `position: sticky`
 * stage over a tall runway plus a scroll-progress reader, no GSAP pin. Over the
 * first 85% of this demo's own half of the scroll, the balance and
 * cumulative-interest lines draw in, a valuation dot rides the balance line,
 * the EMI figure counts up, and the principal/interest split bar fills. The
 * last stretch settles the panel and reveals the stats + CTA.
 *
 * Reduced motion opts out entirely: nothing here runs, so the SVG paths render
 * fully drawn and the JSX's static final values (the EMI figure, the split bar
 * widths) are what's shown, unpinned by the matching CSS fallback.
 */
export function useHorizonDemo() {
  useEffect(() => {
    const outer = document.getElementById('builds-demos');
    const wrap = document.getElementById('horizon-panel-wrap');
    const panel = document.getElementById('horizon-panel');
    const balancePath = document.getElementById('horizon-balance-path') as SVGPathElement | null;
    const interestPath = document.getElementById('horizon-interest-path') as SVGPathElement | null;
    const dot = document.getElementById('horizon-dot');
    const emiEl = document.getElementById('horizon-emi');
    const blackBar = document.getElementById('horizon-split-black');
    const redBar = document.getElementById('horizon-split-red');

    if (!outer || !balancePath || !interestPath) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const emiTarget = Number(emiEl?.dataset.target || 0);
    const principalPct = Number(blackBar?.dataset.target || 0);
    const interestPct = Number(redBar?.dataset.target || 0);

    const balanceLen = balancePath.getTotalLength();
    const interestLen = interestPath.getTotalLength();
    balancePath.style.strokeDasharray = String(balanceLen);
    interestPath.style.strokeDasharray = String(interestLen);

    const render = (local: number) => {
      // Draw over the first 85% of this demo's own half; the rest settles the panel.
      const draw = Math.min(1, local / 0.85);

      balancePath.style.strokeDashoffset = String(balanceLen * (1 - draw));
      interestPath.style.strokeDashoffset = String(interestLen * (1 - draw));

      if (dot) {
        const pt = balancePath.getPointAtLength(balanceLen * draw);
        dot.setAttribute('cx', String(pt.x));
        dot.setAttribute('cy', String(pt.y));
        dot.style.opacity = draw > 0.02 ? '1' : '0';
      }

      if (emiEl) emiEl.textContent = `₹${formatINR(emiTarget * draw)}`;
      if (blackBar) blackBar.style.width = `${principalPct * draw}%`;
      if (redBar) redBar.style.width = `${interestPct * draw}%`;

      if (panel) panel.classList.toggle('is-complete', local >= 0.92);
    };

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      if (scrollable <= 0) {
        render(0);
        return;
      }

      let overall = -rect.top / scrollable;
      overall = Math.max(0, Math.min(1, overall));

      // This demo owns the second half of the shared stage.
      const local = Math.max(0, Math.min(1, (overall - PHASE_SPLIT) / (1 - PHASE_SPLIT)));
      render(local);

      if (wrap) {
        const fadeStart = PHASE_SPLIT - FADE_HALF_WIDTH;
        const fadeEnd = PHASE_SPLIT + FADE_HALF_WIDTH;
        let opacity = 0;
        if (overall >= fadeEnd) opacity = 1;
        else if (overall > fadeStart) opacity = (overall - fadeStart) / (fadeEnd - fadeStart);
        wrap.style.opacity = String(opacity);
        wrap.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
      }
    };

    render(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
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
