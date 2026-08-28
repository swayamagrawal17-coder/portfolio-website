import { useEffect } from 'react';

export function useStatsCountUp(containerRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('[data-count-to]');
    
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
    });
  }, [containerRef]);
}
