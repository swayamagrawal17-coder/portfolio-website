'use client';

import { useEffect } from 'react';
import { gsap } from '@/lib/gsap';

/**
 * Hero entrance: the letters of the name rise out of a mask, "researcher"
 * writes itself in, then the tagline and buttons follow. The parts start
 * hidden in CSS ([data-hero-part]) with a CSS failsafe that shows them anyway
 * if this never runs. Reduced motion skips all of it.
 */
export function useHeroIntro() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('[data-era-hero]');
    if (!hero) return;

    const parts = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-part]'));
    // Hand the parts over from the CSS failsafe to script control.
    parts.forEach((p) => (p.style.animation = 'none'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => parts.forEach((p) => (p.style.animation = ''));
    }

    const words = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-word]'));
    const script = hero.querySelector<HTMLElement>('[data-hero-script]');
    const tagline = hero.querySelector<HTMLElement>('[data-hero-tagline]');
    const actions = hero.querySelector<HTMLElement>('[data-hero-actions]');
    const actionKids = actions ? Array.from(actions.children) : [];

    // Split each word into masked letters; the original markup comes back on cleanup.
    const originals = words.map((w) => [w, w.innerHTML] as const);
    const chars: HTMLElement[] = [];
    words.forEach((w) => {
      const text = w.textContent ?? '';
      w.textContent = '';
      for (const ch of text) {
        const mask = document.createElement('span');
        mask.className = 'hero-ch';
        const inner = document.createElement('span');
        inner.className = 'hero-ch-in';
        inner.textContent = ch;
        mask.appendChild(inner);
        w.appendChild(mask);
        chars.push(inner);
      }
    });

    gsap.set(chars, { yPercent: 115 });
    gsap.set(tagline, { opacity: 0, y: 14 });
    gsap.set(actionKids, { opacity: 0, y: 18 });
    if (script) gsap.set(script, { clipPath: 'inset(-30% 105% -50% -10%)' });

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(chars, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.045 });
    if (script) {
      tl.to(script, { clipPath: 'inset(-30% -10% -50% -10%)', duration: 0.9, ease: 'power2.inOut' }, 0.75);
    }
    tl.to(tagline, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 1.1);
    tl.to(actionKids, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08 }, 1.25);

    return () => {
      tl.kill();
      originals.forEach(([w, html]) => (w.innerHTML = html));
      gsap.set([tagline, ...actionKids, script].filter(Boolean), { clearProps: 'all' });
      parts.forEach((p) => (p.style.animation = ''));
    };
  }, []);
}
