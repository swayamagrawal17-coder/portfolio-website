import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const layers = Array.from(document.querySelectorAll('[data-px]')).map((el) => ({
      el: el as HTMLElement,
      speed: parseFloat(el.getAttribute('data-px') || '0'),
    }));

    if (!layers.length) return;

    const strength = 1;
    let raf: number | null = null;

    const apply = () => {
      raf = null;
      const vh = window.innerHeight;
      const mid = window.scrollY + vh / 2;

      layers.forEach((l) => {
        const r = l.el.getBoundingClientRect();
        const center = r.top + window.scrollY + r.height / 2;
        const raw = (mid - center) * l.speed * strength;
        const y = Math.max(-110, Math.min(110, raw));

        l.el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`;
        l.el.style.willChange = 'transform';
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
