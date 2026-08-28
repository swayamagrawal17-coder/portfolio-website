import { useEffect } from 'react';

export function useStatsCountUp(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!containerRef.current) return;

    const elements = Array.from(containerRef.current.querySelectorAll('[data-count-to]')) as HTMLElement[];

    if (!elements.length) return;

    const intervals: NodeJS.Timeout[] = [];
    let hasStarted = false;

    const startCountUp = () => {
      if (hasStarted) return;
      hasStarted = true;

      elements.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-count-to') || '0');
        const decimals = parseInt(el.getAttribute('data-decimals') || '0');
        let current = 0;
        const step = target / 50;

        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          el.textContent = current.toFixed(decimals);
        }, 30);

        intervals.push(interval);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountUp();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const container = containerRef.current.closest('section');
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);
}
