import { useEffect, useRef } from 'react';

export function useWorkCoverflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;

    if (!container || !stage) return;

    const cards = Array.from(container.querySelectorAll('.coverflow-card')) as HTMLElement[];
    const buttons = Array.from(container.querySelectorAll('.coverflow-dot')) as HTMLButtonElement[];
    const ctaBtns = Array.from(container.querySelectorAll('.coverflow-cta')) as HTMLButtonElement[];
    const prevBtn = container.querySelector('#coverflow-prev') as HTMLButtonElement | null;
    const nextBtn = container.querySelector('#coverflow-next') as HTMLButtonElement | null;
    const toggleBtn = container.querySelector('#coverflow-toggle') as HTMLButtonElement | null;
    const counterEl = document.getElementById('work-coverflow-counter-current');

    if (!cards.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const CARD_COUNT = cards.length;
    let currentIndex = 0;
    let expandedIdx: number | null = null;
    let autoplayTimer: ReturnType<typeof setInterval> | null = null;
    let userPaused = reduceMotion; // reduced motion starts paused and stays paused

    const updateUI = () => {
      cards.forEach((card, i) => {
        const isActive = i === currentIndex;
        const isExpanded = i === expandedIdx;
        const distance = i - currentIndex;

        const opacity = isActive ? 1 : 0.35;
        const scale = isActive ? 1 : 0.85;
        const blur = isActive ? 0 : 3;
        const offset = distance * 260;

        card.style.transform = `translateX(${offset}px) scale(${scale})`;
        card.style.opacity = String(opacity);
        card.style.filter = `blur(${blur}px)`;
        card.style.boxShadow = isActive ? '0 30px 80px rgba(0,0,0,.6)' : '0 20px 45px rgba(0,0,0,.35)';
        card.setAttribute('aria-hidden', isActive || isExpanded ? 'false' : 'true');
        card.tabIndex = isActive ? 0 : -1;

        if (isExpanded) {
          card.classList.add('is-expanded');
          card.style.zIndex = '40';
        } else {
          card.classList.remove('is-expanded');
          if (isActive) {
            card.style.zIndex = '20';
          } else {
            card.style.zIndex = String(Math.max(1, 10 - Math.abs(distance)));
          }
        }
      });

      buttons.forEach((btn, i) => {
        const isCurrent = i === currentIndex;
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        btn.tabIndex = isCurrent ? 0 : -1;
        const dot = btn.querySelector('span');
        if (dot) {
          if (isCurrent) {
            dot.style.background = 'var(--accent-on-dark)';
            dot.style.width = '40px';
            dot.style.height = '10px';
            dot.style.boxShadow = '0 0 16px -2px rgba(240, 122, 180, 0.8)';
          } else {
            dot.style.background = 'rgba(247,240,223,.5)';
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.boxShadow = 'none';
          }
        }
      });

      if (counterEl) {
        counterEl.textContent = String(currentIndex + 1).padStart(2, '0');
      }

      ctaBtns.forEach((btn, idx) => {
        btn.setAttribute('aria-expanded', String(expandedIdx === idx));
        if (expandedIdx === idx) {
          btn.textContent = 'Close';
          btn.style.background = 'var(--paper)';
          btn.style.color = 'var(--ink)';
          btn.style.boxShadow = '0 10px 24px -12px rgba(0, 0, 0, 0.55)';
        } else {
          btn.textContent = 'Read more';
          btn.style.background = 'var(--accent-on-dark)';
          btn.style.color = 'var(--ink)';
          btn.style.boxShadow = '0 10px 24px -10px rgba(216, 31, 122, 0.65)';
        }
        btn.style.transition = 'background 200ms ease, color 200ms ease, box-shadow 200ms ease';
      });
    };

    const setActive = (index: number) => {
      currentIndex = Math.max(0, Math.min(index, CARD_COUNT - 1));
      updateUI();
    };

    const next = () => setActive((currentIndex + 1) % CARD_COUNT);
    const prev = () => setActive((currentIndex - 1 + CARD_COUNT) % CARD_COUNT);

    const stopTimer = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = null;
    };
    const startTimer = () => {
      if (autoplayTimer || userPaused || reduceMotion || expandedIdx !== null) return;
      autoplayTimer = setInterval(next, 5000);
    };

    const syncToggleLabel = () => {
      if (!toggleBtn) return;
      toggleBtn.setAttribute('aria-pressed', userPaused ? 'true' : 'false');
      toggleBtn.textContent = userPaused ? 'Play' : 'Pause';
      toggleBtn.setAttribute(
        'aria-label',
        userPaused ? 'Resume automatic project rotation' : 'Pause automatic project rotation'
      );
    };

    const toggleExpanded = (index: number) => {
      expandedIdx = expandedIdx === index ? null : index;
      if (expandedIdx === null) startTimer();
      else stopTimer();
      updateUI();
    };

    // Autoplay pauses while hovered or keyboard-focused, resumes on leave/blur
    // unless the user has explicitly paused it.
    const onPointerPause = () => stopTimer();
    const onPointerResume = () => startTimer();
    stage.addEventListener('mouseenter', onPointerPause);
    stage.addEventListener('mouseleave', onPointerResume);
    stage.addEventListener('focusin', onPointerPause);
    stage.addEventListener('focusout', onPointerResume);

    // Touch swipe: horizontal drags move to the next/previous card, same as
    // the arrow buttons. Vertical drags are left alone so the page still
    // scrolls normally.
    const SWIPE_THRESHOLD = 40;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchActive = false;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchActive = true;
      stopTimer();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!touchActive) return;
      touchActive = false;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) next();
        else prev();
      }
      if (expandedIdx === null) startTimer();
    };
    stage.addEventListener('touchstart', onTouchStart, { passive: true });
    stage.addEventListener('touchend', onTouchEnd);

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    const onToggle = () => {
      userPaused = !userPaused;
      if (userPaused) stopTimer();
      else startTimer();
      syncToggleLabel();
    };
    if (toggleBtn) {
      toggleBtn.addEventListener('click', onToggle);
      if (reduceMotion) toggleBtn.style.display = 'none';
      syncToggleLabel();
    }

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => setActive(i));
    });

    ctaBtns.forEach((btn, cardIndex) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleExpanded(cardIndex);
      });
    });

    const cardActivate = (cardIndex: number, e: Event) => {
      if ((e.target as Element).closest('.coverflow-cta')) return;
      setActive(cardIndex);
    };
    const cardHandlers: { el: HTMLElement; click: (e: Event) => void; key: (e: KeyboardEvent) => void }[] = [];
    cards.forEach((card, cardIndex) => {
      const click = (e: Event) => cardActivate(cardIndex, e);
      const key = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if ((e.target as Element).closest('.coverflow-cta')) return;
          e.preventDefault();
          setActive(cardIndex);
        }
      };
      card.addEventListener('click', click);
      card.addEventListener('keydown', key);
      cardHandlers.push({ el: card, click, key });
    });

    // Arrow keys only while focus is inside the carousel, so page scroll is
    // never hijacked.
    const onKeyDown = (e: KeyboardEvent) => {
      if (!container.contains(document.activeElement)) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    container.addEventListener('keydown', onKeyDown);

    updateUI();
    startTimer();

    return () => {
      stopTimer();
      stage.removeEventListener('mouseenter', onPointerPause);
      stage.removeEventListener('mouseleave', onPointerResume);
      stage.removeEventListener('focusin', onPointerPause);
      stage.removeEventListener('focusout', onPointerResume);
      stage.removeEventListener('touchstart', onTouchStart);
      stage.removeEventListener('touchend', onTouchEnd);
      if (prevBtn) prevBtn.removeEventListener('click', prev);
      if (nextBtn) nextBtn.removeEventListener('click', next);
      if (toggleBtn) toggleBtn.removeEventListener('click', onToggle);
      cardHandlers.forEach(({ el, click, key }) => {
        el.removeEventListener('click', click);
        el.removeEventListener('keydown', key);
      });
      container.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return { containerRef, stageRef };
}
