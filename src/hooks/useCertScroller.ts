import { useEffect } from 'react';

export function useCertScroller() {
  useEffect(() => {
    const scroller = document.getElementById('cert-scroller');
    if (!scroller) return;
    
    const handleScroll = () => {
      const progress = window.scrollY / (scroller.offsetHeight - window.innerHeight);
      const certIndex = Math.floor(progress * 5) % 5;
      updateCerts(certIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

function updateCerts(index: number) {
  const tiles = document.querySelectorAll('.cert-tile');
  const listItems = document.querySelectorAll('#cert-list li');
  
  tiles.forEach((tile, i) => {
    if (i === index) {
      (tile as HTMLElement).style.opacity = '1';
      (tile as HTMLElement).style.zIndex = '2';
    } else {
      (tile as HTMLElement).style.opacity = '0';
      (tile as HTMLElement).style.zIndex = '1';
    }
  });
  
  listItems.forEach((item, i) => {
    if (i === index) {
      (item as HTMLElement).style.transform = 'scale(1)';
    } else {
      (item as HTMLElement).style.transform = 'scale(.96)';
    }
  });
}
