import { useEffect, useRef } from 'react';

export function useWorkCoverflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let currentIndex = 0;
    const cards = containerRef.current.querySelectorAll('.coverflow-card');
    const autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCoverflow(cards, currentIndex);
    }, 5000);
    
    return () => clearInterval(autoplayInterval);
  }, []);
  
  return containerRef;
}

function updateCoverflow(cards: NodeListOf<Element>, index: number) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('is-expanded');
    } else {
      card.classList.remove('is-expanded');
    }
  });
}
