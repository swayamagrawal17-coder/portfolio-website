import { useEffect, useRef } from 'react';
import { setSehForceExpand } from './useScrollTo';

export function useScrollExpandHero() {
  const boxRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const overlay = overlayRef.current;
    const reveal = revealRef.current;

    if (!box || !overlay || !reveal) return;

    let scrollLocked = false;
    let expandProgress = 0;

    const forceExpand = () => {
      expandProgress = 1;
      updateUI();
      scrollLocked = false;
    };

    setSehForceExpand(forceExpand);

    const updateUI = () => {
      const maxHeight = 600;
      const targetHeight = 400 + (maxHeight - 400) * expandProgress;
      box.style.height = `${targetHeight}px`;
      overlay.style.opacity = `${0.72 * (1 - expandProgress * 0.5)}`;
      reveal.style.opacity = `${expandProgress}`;
      reveal.style.pointerEvents = expandProgress > 0.5 ? 'auto' : 'none';
    };

    const onWheel = (e: WheelEvent) => {
      if (!scrollLocked && expandProgress < 1) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        expandProgress = Math.max(0, Math.min(1, expandProgress + delta * 0.05));
        updateUI();
        if (expandProgress === 1) {
          scrollLocked = false;
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!scrollLocked && expandProgress < 1) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      setSehForceExpand(null);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return { boxRef, overlayRef, revealRef };
}
