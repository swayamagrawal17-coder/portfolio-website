import { useEffect } from 'react';

export function useScrollScrub() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-scrub-number]');
    
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        (el as HTMLElement).style.transform = `scaleX(${progress})`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
