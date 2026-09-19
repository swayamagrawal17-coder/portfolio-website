import { useEffect } from 'react';

/**
 * One quote at a time inside a CSS `position: sticky` stage over a tall runway
 * (same mechanism as useCertScroller). Scroll progress picks the active quote;
 * the others sit invisible in the same grid cell, so every quote is always real
 * text in the DOM. Reduced motion and phones skip this entirely: the CSS stacks
 * every quote as a plain readable list.
 */
export function useTestimonials() {
  useEffect(() => {
    const outer = document.getElementById('testimonial-runway');
    if (!outer) return;
    const items = Array.from(outer.querySelectorAll<HTMLElement>('[data-testimonial]'));
    const ticks = Array.from(outer.querySelectorAll<HTMLElement>('[data-testimonial-tick]'));
    if (items.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 640px)').matches) return;

    let active = -1;
    const setActive = (index: number) => {
      if (index === active) return;
      active = index;
      items.forEach((el, i) => {
        const on = i === index;
        el.style.opacity = on ? '1' : '0';
        el.style.transform = on ? 'translateY(0)' : i < index ? 'translateY(-28px)' : 'translateY(28px)';
        el.style.pointerEvents = on ? 'auto' : 'none';
      });
      ticks.forEach((t, i) => {
        t.style.background = i === index ? 'var(--bougainvillea)' : 'var(--rule-ink-strong)';
        t.style.transform = i === index ? 'scaleX(1)' : 'scaleX(0.55)';
      });
    };

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setActive(0);
        return;
      }
      const progress = Math.max(0, Math.min(0.9999, -rect.top / scrollable));
      setActive(Math.floor(progress * items.length));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
