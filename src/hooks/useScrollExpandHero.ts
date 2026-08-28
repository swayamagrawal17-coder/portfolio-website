import { useEffect, useRef } from 'react';
import { setSehForceExpand } from './useScrollTo';

export function useScrollExpandHero() {
  const boxRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const heroEl = box?.closest('[data-screen-label]');
    if (!box || !heroEl || heroEl.getAttribute('data-seh-built')) return;
    heroEl.setAttribute('data-seh-built', '1');

    const bg = box.parentElement?.querySelector('#seh-bg') as HTMLElement | null;
    const overlay = overlayRef.current;
    const word1 = word1Ref.current;
    const word2 = word2Ref.current;
    const eyebrow = eyebrowRef.current;
    const hint = hintRef.current;
    const reveal = revealRef.current;

    const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
    let scrollProgress = 0;
    let mediaFullyExpanded = false;
    let showContent = false;
    let touchStartY = 0;
    let isMobile = window.innerWidth < 768;

    const apply = () => {
      const maxW = isMobile ? 650 : 1250;
      const maxH = isMobile ? 200 : 400;
      const shift = scrollProgress * (isMobile ? 180 : 150);

      box.style.width = `${300 + scrollProgress * maxW}px`;
      box.style.height = `${400 + scrollProgress * maxH}px`;

      if (overlay) overlay.style.opacity = String(0.72 - scrollProgress * 0.3);
      if (bg) bg.style.opacity = String(1 - scrollProgress);
      if (word1) word1.style.transform = `translateX(-${shift}vw)`;
      if (word2) word2.style.transform = `translateX(${shift}vw)`;
      if (eyebrow) eyebrow.style.transform = `translateX(-${shift}vw)`;
      if (hint) hint.style.transform = `translateX(${shift}vw)`;

      if (reveal) {
        reveal.style.opacity = showContent ? '1' : '0';
        reveal.style.pointerEvents = showContent ? 'auto' : 'none';
      }
    };

    const forceExpand = () => {
      scrollProgress = 1;
      mediaFullyExpanded = true;
      showContent = true;
      apply();
    };

    setSehForceExpand(forceExpand);

    // Handle reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      forceExpand();
      return;
    }

    apply();

    const setProgress = (delta: number) => {
      scrollProgress = clamp01(scrollProgress + delta);
      if (scrollProgress >= 1) {
        mediaFullyExpanded = true;
        showContent = true;
      } else if (scrollProgress < 0.75) {
        showContent = false;
      }
      apply();
    };

    const onWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        mediaFullyExpanded = false;
        e.preventDefault();
        apply();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        setProgress(e.deltaY * 0.0009);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY || 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0]?.clientY || 0;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        mediaFullyExpanded = false;
        e.preventDefault();
        apply();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        setProgress(deltaY * (deltaY < 0 ? 0.008 : 0.005));
        touchStartY = touchY;
      }
    };

    const onTouchEnd = () => {
      touchStartY = 0;
    };

    const onScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    const onResize = () => {
      isMobile = window.innerWidth < 768;
      apply();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll);
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    return () => {
      setSehForceExpand(null);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { boxRef, overlayRef, revealRef, word1Ref, word2Ref, eyebrowRef, hintRef };
}
