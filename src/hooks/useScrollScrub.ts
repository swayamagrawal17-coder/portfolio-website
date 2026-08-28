import { useEffect } from 'react';

export function useScrollScrub() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-scrub-number]')) as HTMLElement[];

    if (!elements.length) return;

    let raf: number | null = null;

    const apply = () => {
      raf = null;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        const origin = el.getAttribute('data-scrub-number') || 'center';
        el.style.transformOrigin = origin === 'left' ? 'left center' : 'center center';
        el.style.transform = `scaleX(${progress})`;
      });
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(apply);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    apply();

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
