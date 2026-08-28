import { useEffect } from 'react';

export function useNavScramble(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const links = containerRef.current.querySelectorAll('.nav-scramble');
    
    links.forEach((link) => {
      const originalText = link.getAttribute('data-original') || link.textContent || '';

      link.addEventListener('mouseenter', () => {
        const text = link.textContent || '';
        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
          scrambled += text.charCodeAt(i) > 32 ? String.fromCharCode(Math.random() * 26 + 65) : ' ';
        }
        link.textContent = scrambled;
      });

      link.addEventListener('mouseleave', () => {
        link.textContent = originalText;
      });
    });
  }, [containerRef]);
}
