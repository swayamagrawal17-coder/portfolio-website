import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-px]');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-px') || '0');
        const yPos = window.scrollY * speed;
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
