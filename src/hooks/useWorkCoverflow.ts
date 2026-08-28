import { useEffect, useRef } from 'react';

export function useWorkCoverflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;

    if (!container || !stage) return;

    const cards = Array.from(container.querySelectorAll('.coverflow-card')) as HTMLElement[];
    const buttons = Array.from(container.querySelectorAll('.coverflow-dot button')) as HTMLButtonElement[];
    const ctaBtns = Array.from(container.querySelectorAll('.coverflow-cta')) as HTMLButtonElement[];
    const prevBtn = container.querySelector('#coverflow-prev') as HTMLButtonElement | null;
    const nextBtn = container.querySelector('#coverflow-next') as HTMLButtonElement | null;
    const counterEl = document.getElementById('work-coverflow-counter-current');

    if (!cards.length) return;

    const CARD_COUNT = cards.length;
    let currentIndex = 0;
    let expandedIdx: number | null = null;
    let autoplayTimer: NodeJS.Timeout | null = null;

    const updateUI = () => {
      cards.forEach((card, i) => {
        const isActive = i === currentIndex;
        const isExpanded = i === expandedIdx;

        if (isExpanded) {
          card.classList.add('is-expanded');
        } else {
          card.classList.remove('is-expanded');
        }

        if (isExpanded) {
          card.style.zIndex = '40';
        } else if (isActive) {
          card.style.zIndex = '20';
        } else {
          card.style.zIndex = String(10 + Math.abs(i - currentIndex));
        }
      });

      buttons.forEach((btn, i) => {
        const dot = btn.querySelector('span');
        if (dot) {
          if (i === currentIndex) {
            dot.style.background = 'var(--paper-1)';
            dot.style.width = '32px';
          } else {
            dot.style.background = 'rgba(247,240,223,.3)';
            dot.style.width = '8px';
          }
        }
      });

      if (counterEl) {
        counterEl.textContent = String(currentIndex + 1).padStart(2, '0');
      }
    };

    const setActive = (index: number) => {
      currentIndex = Math.max(0, Math.min(index, CARD_COUNT - 1));
      updateUI();
    };

    const toggleExpanded = (index: number) => {
      if (expandedIdx === index) {
        expandedIdx = null;
        resume();
      } else {
        expandedIdx = index;
        pause();
      }
      updateUI();
    };

    const next = () => setActive(currentIndex + 1);
    const prev = () => setActive(currentIndex - 1);
    const pause = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = null;
    };
    const resume = () => {
      if (!autoplayTimer && expandedIdx === null) {
        autoplayTimer = setInterval(next, 5000);
      }
    };

    stage.addEventListener('mouseenter', pause);
    stage.addEventListener('mouseleave', resume);

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => setActive(i));
    });

    ctaBtns.forEach((btn, cardIndex) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleExpanded(cardIndex);
      });
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    updateUI();
    autoplayTimer = setInterval(next, 5000);

    return () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
      stage.removeEventListener('mouseenter', pause);
      stage.removeEventListener('mouseleave', resume);
      if (prevBtn) prevBtn.removeEventListener('click', prev);
      if (nextBtn) nextBtn.removeEventListener('click', next);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return { containerRef, stageRef };
}
