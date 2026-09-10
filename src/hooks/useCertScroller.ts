import { useEffect } from 'react';
import { scrollToY } from './useScrollTo';

export function useCertScroller() {
  useEffect(() => {
    const outer = document.getElementById('cert-scroller');
    const list = document.getElementById('cert-list');
    const items = list ? Array.from(list.children) : [];
    const tiles = Array.from(document.querySelectorAll('#cert-media-track .cert-tile'));

    if (!outer || !items.length || !tiles.length) return;
    // Only reduced motion opts out: there the CSS stacks every credential into a
    // static, fully readable list. On phones the pinned scroll gallery runs the
    // same as on desktop (single column, see globals.css).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ITEM_HEIGHT = 64;
    let activeIndex = 0;

    const setActive = (index: number) => {
      if (index === activeIndex && list?.getAttribute('data-cert-init')) return;
      activeIndex = index;
      if (list) list.setAttribute('data-cert-init', '1');

      if (list) list.style.transform = `translateY(-${index * ITEM_HEIGHT}px)`;

      items.forEach((li, i) => {
        const isActive = i === index;
        const title = li.querySelector('.cert-list-title') as HTMLElement | null;
        const meta = li.querySelector('.cert-list-meta') as HTMLElement | null;

        if (title) {
          title.style.color = isActive ? 'var(--ink)' : 'var(--ink-soft)';
          title.style.opacity = isActive ? '1' : '.55';
        }
        if (meta) meta.style.opacity = isActive ? '.85' : '.4';
        (li as HTMLElement).style.transform = isActive ? 'scale(1)' : 'scale(.96)';
      });

      tiles.forEach((tile, i) => {
        const isActive = i === index;
        const el = tile as HTMLElement;
        el.style.opacity = isActive ? '1' : '0';
        el.style.transform = isActive ? 'scale(1)' : 'scale(.97)';
        el.style.pointerEvents = isActive ? 'auto' : 'none';
        el.style.zIndex = isActive ? '2' : '1';
      });

      const num = document.getElementById('cert-progress-num');
      if (num) num.textContent = String(index + 1).padStart(2, '0');
      const bar = document.getElementById('cert-progress-bar');
      if (bar) bar.style.width = `${((index + 1) / items.length) * 100}%`;
    };

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;

      if (scrollable <= 0) {
        setActive(0);
        return;
      }

      let progress = -rect.top / scrollable;
      progress = Math.max(0, Math.min(1, progress));
      setActive(Math.round(progress * (items.length - 1)));
    };

    const onItemClick = (i: number) => {
      const rect = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const targetProgress = i / (items.length - 1);
      const absoluteTop = window.scrollY + rect.top;

      scrollToY(absoluteTop + targetProgress * scrollable);
    };

    const cleanups: Array<() => void> = [];

    items.forEach((li, i) => {
      const handler = () => onItemClick(i);
      (li as HTMLElement).addEventListener('click', handler);
      cleanups.push(() => (li as HTMLElement).removeEventListener('click', handler));

      (li as HTMLElement).setAttribute('tabindex', '0');
      (li as HTMLElement).setAttribute('role', 'button');

      const titleEl = li.querySelector('.cert-list-title');
      (li as HTMLElement).setAttribute(
        'aria-label',
        `Jump to ${titleEl ? titleEl.textContent?.trim() || 'credential' : 'credential ' + (i + 1)}`
      );

      const onKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onItemClick(i);
        }
      };

      (li as HTMLElement).addEventListener('keydown', onKeydown);
      cleanups.push(() => (li as HTMLElement).removeEventListener('keydown', onKeydown));
    });

    setActive(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
