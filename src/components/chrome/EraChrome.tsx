'use client';

import { useEffect, useRef, useState } from 'react';
import { RandomLetterSwap } from '@/components/ui/RandomLetterSwap';
import { scrollTo } from '@/hooks/useScrollTo';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { CONTACT_EMAIL } from '@/lib/site';

export interface ChromeSection {
  id: string;
  label: string;
  tone: 'light' | 'dark';
  /** Included in the desktop corner nav (a deliberately short list). Every
   * section always appears in the mobile sheet's full sitemap regardless. */
  primary?: boolean;
  /** Position within the corner nav, since its curated order (Work first)
   * deliberately differs from page/section order (About first). Required
   * when `primary` is set. */
  navOrder?: number;
  /** Shorter label for the corner nav when `label` is too long for it
   * (e.g. mobile's "Selected work" becomes desktop's "Work"). Falls back
   * to `label` when omitted. */
  navLabel?: string;
}

interface EraChromeProps {
  sections: ChromeSection[];
}

export function EraChrome({ sections }: EraChromeProps) {
  const NAV = sections
    .filter((s) => s.primary)
    .sort((a, b) => (a.navOrder ?? 0) - (b.navOrder ?? 0))
    .map((s) => ({ label: s.navLabel ?? s.label, target: s.id }));
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sheetMounted, setSheetMounted] = useState(false);
  const observerTargets = useRef<HTMLElement[]>([]);
  const markRef = useRef<SVGSVGElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLButtonElement>(null);

  // The circular mark idles with a slow spin and speeds up with scroll velocity
  // (and reverses when you scroll up), easing back to idle when you stop.
  useEffect(() => {
    const el = markRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const spin = gsap.to(el, { rotation: 360, duration: 24, ease: 'none', repeat: -1 });
    let decay: ReturnType<typeof setTimeout>;

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const v = Math.abs(self.getVelocity());
        const boost = gsap.utils.clamp(-18, 18, self.direction * (1 + v / 120));
        gsap.to(spin, { timeScale: boost, duration: 0.25, overwrite: true });
        clearTimeout(decay);
        decay = setTimeout(() => {
          gsap.to(spin, { timeScale: 1, duration: 1.1, ease: 'power2.out', overwrite: true });
        }, 180);
      },
    });

    return () => {
      clearTimeout(decay);
      st.kill();
      spin.kill();
      gsap.set(el, { clearProps: 'rotation,transform' });
    };
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    observerTargets.current = els;
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  // Mobile menu: close on Escape, lock scroll, move focus in and back out,
  // and trap Tab/Shift+Tab inside the dialog while it's open — aria-modal
  // only tells assistive tech the rest of the page is inert, it doesn't
  // actually stop keyboard focus from leaving, so this does that part.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const dialog = document.getElementById('era-mobile-nav');
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>('button, a[href]')
      ).filter((el) => !el.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    // Scroll-lock and focus are held back until the reveal is under way so
    // the layout work doesn't land on the first animation frames.
    const lockTimer = window.setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 1000);
    const focusTimer = window.setTimeout(() => {
      firstMenuLinkRef.current?.focus({ preventScroll: true });
    }, 800);
    const toggle = menuButtonRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(lockTimer);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // Keep the sheet mounted long enough for its closing animation to finish.
  useEffect(() => {
    if (menuOpen) {
      setSheetMounted(true);
      return;
    }
    const t = window.setTimeout(() => setSheetMounted(false), 700);
    return () => window.clearTimeout(t);
  }, [menuOpen]);

  const dark = sections[active]?.tone === 'dark';
  const c = {
    primary: dark ? 'var(--paper)' : 'var(--ink)',
    soft: dark ? 'var(--paper-on-dark)' : 'var(--ink-soft)',
    rule: dark ? 'var(--rule-on-dark)' : 'var(--rule-ink-strong)',
    accent: dark ? 'var(--accent-on-dark)' : 'var(--accent-on-light)',
    cardBg: dark ? 'var(--ink)' : 'var(--paper)',
  };

  const total = String(sections.length).padStart(2, '0');
  const current = String(Math.min(active + 1, sections.length)).padStart(2, '0');
  const next = sections[active + 1];

  const jump = (id: string) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      {/* Rotating circular mark, top-left */}
      <div
        className="era-rotating-mark"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '24px',
          left: '24px',
          zIndex: 60,
          width: '104px',
          height: '104px',
          pointerEvents: 'none',
          visibility: sheetMounted ? 'hidden' : 'visible',
          mixBlendMode: dark ? 'normal' : 'multiply',
        }}
      >
        <svg
          ref={markRef}
          viewBox="0 0 104 104"
          width="104"
          height="104"
          style={{ transformOrigin: '50% 50%' }}
        >
          <defs>
            <path id="era-mark-circle" d="M52,52 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '8px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fill: c.primary,
              transition: 'fill 400ms ease',
            }}
          >
            {/* textLength = the circle's circumference (2·π·38) so the label
                fills the ring exactly and never clips as it rotates */}
            <textPath
              href="#era-mark-circle"
              startOffset="0"
              textLength="238"
              lengthAdjust="spacingAndGlyphs"
            >
              Swayam Agrawal · Research &amp; Finance ·
            </textPath>
          </text>
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{ position: 'absolute', top: '40px', left: '40px' }}
        >
          <g fill="var(--bougainvillea)">
            {Array.from({ length: 6 }).map((_, i) => (
              <ellipse
                key={i}
                cx="12"
                cy="6"
                rx="3"
                ry="5.5"
                transform={`rotate(${i * 60} 12 12)`}
                opacity="0.85"
              />
            ))}
            <circle cx="12" cy="12" r="2.4" fill={c.primary} style={{ transition: 'fill 400ms ease' }} />
          </g>
        </svg>
      </div>

      {/* Section counter, left edge */}
      <div
        className="era-section-counter"
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '26px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 55,
          fontFamily: 'var(--font-ui)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: c.soft,
          writingMode: 'vertical-rl',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transition: 'color 400ms ease',
        }}
      >
        <span style={{ color: c.primary, fontSize: '13px' }}>{current}</span>
        <span style={{ width: '1px', height: '34px', background: c.rule }} />
        <span>{total}</span>
      </div>

      {/* Scroll rail, bottom-left */}
      <div
        className="era-scroll-rail"
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '26px',
          bottom: '28px',
          zIndex: 55,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: active === 0 ? 1 : 0.35,
          transition: 'opacity 400ms ease',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: c.soft,
            writingMode: 'vertical-rl',
            transition: 'color 400ms ease',
          }}
        >
          Scroll
        </span>
        <svg width="10" height="26" viewBox="0 0 10 26" style={{ animation: 'arrowBob 1.8s ease-in-out infinite' }}>
          <path d="M5 0 V22 M1 18 L5 24 L9 18" stroke={c.soft} strokeWidth="1.4" fill="none" />
        </svg>
      </div>

      {/* Corner nav, top-right (desktop / tablet) */}
      <nav
        className="era-corner-cta"
        aria-label="Sections"
        style={{
          position: 'fixed',
          top: '26px',
          right: '26px',
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '7px',
        }}
      >
        {NAV.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => scrollTo(item.target)}
            style={{
              background: 'none',
              border: 'none',
              padding: '2px 0',
              cursor: 'pointer',
              fontFamily: 'var(--font-ui)',
              fontSize: '10.5px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: c.primary,
              transition: 'color 400ms ease',
            }}
          >
            <RandomLetterSwap label={item.label} staggerDuration={0.03} />
          </button>
        ))}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{
            marginTop: '4px',
            fontFamily: 'var(--font-ui)',
            fontSize: '10.5px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: c.accent,
            textDecoration: 'none',
            transition: 'color 400ms ease',
          }}
        >
          Email me
        </a>
      </nav>

      {/* Mobile menu toggle (phones only) */}
      <button
        ref={menuButtonRef}
        type="button"
        className="era-mobile-nav-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="era-mobile-nav"
        onClick={() => setMenuOpen((v) => !v)}
        style={{
          position: 'fixed',
          top: '18px',
          right: '18px',
          zIndex: 70,
          width: '44px',
          height: '44px',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-stamp)',
          border: `1px solid ${menuOpen ? 'var(--rule-on-dark)' : c.rule}`,
          background: menuOpen ? 'var(--ink)' : c.cardBg,
          color: menuOpen ? 'var(--paper)' : c.primary,
          cursor: 'pointer',
          boxShadow: dark || menuOpen
            ? '0 10px 26px -10px rgba(0, 0, 0, 0.55)'
            : '0 10px 26px -12px rgba(27, 42, 58, 0.4)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line
            x1="2" y1="5" x2="16" y2="5"
            style={{
              transformOrigin: '9px 5px',
              transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              transition: 'transform 520ms cubic-bezier(.22,1,.36,1)',
            }}
          />
          <line
            x1="2" y1="9" x2="16" y2="9"
            style={{
              transformOrigin: '9px 9px',
              transform: menuOpen ? 'scaleX(0)' : 'none',
              opacity: menuOpen ? 0 : 1,
              transition: 'transform 360ms cubic-bezier(.22,1,.36,1), opacity 280ms ease',
            }}
          />
          <line
            x1="2" y1="13" x2="16" y2="13"
            style={{
              transformOrigin: '9px 13px',
              transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
              transition: 'transform 520ms cubic-bezier(.22,1,.36,1)',
            }}
          />
        </svg>
      </button>

      {/* Mobile navigation sheet */}
      {sheetMounted && (
        <div
          id="era-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="era-mobile-nav"
          data-state={menuOpen ? 'open' : 'closed'}
          style={{
            pointerEvents: menuOpen ? 'auto' : 'none',
            position: 'fixed',
            inset: 0,
            zIndex: 65,
            color: 'var(--paper)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflowY: 'auto',
            gap: '4px',
            padding: 'clamp(28px, 9vw, 56px)',
          }}
        >
          <div className="era-mobile-nav-bg" aria-hidden="true" />
          <span
            className="era-mobile-nav-item"
            style={{
              ['--i' as string]: 0,
              fontFamily: 'var(--font-ui)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--paper-on-dark)',
              marginBottom: '18px',
            }}
          >
            Sections
          </span>
          {sections.map((s, i) => (
            <button
              key={s.id}
              ref={i === 0 ? firstMenuLinkRef : undefined}
              type="button"
              className="era-mobile-nav-item"
              onClick={() => jump(s.id)}
              style={{
                ['--i' as string]: i,
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--rule-on-dark)',
                padding: '11px 0',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(17px, 5vw, 21px)',
                fontWeight: 700,
                color: i === active ? 'var(--accent-on-dark)' : 'var(--paper)',
              }}
            >
              {s.label}
            </button>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="era-mobile-nav-item"
            style={{
              ['--i' as string]: sections.length + 1,
              display: 'block',
              marginTop: '10px',
              padding: '16px 0',
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent-on-dark)',
              textDecoration: 'none',
            }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      )}

      {/* Preview card, bottom-right */}
      <button
        type="button"
        className="era-preview-card"
        onClick={() => next && scrollTo(next.id)}
        disabled={!next}
        style={{
          position: 'fixed',
          right: '26px',
          bottom: '26px',
          zIndex: 55,
          width: '210px',
          textAlign: 'left',
          padding: '14px 16px',
          background: c.cardBg,
          border: `1px solid ${c.rule}`,
          cursor: next ? 'pointer' : 'default',
          opacity: next ? 1 : 0,
          transition: 'opacity 400ms ease, background 400ms ease, border-color 400ms ease',
          fontFamily: 'var(--font-ui)',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: c.soft,
            marginBottom: '6px',
          }}
        >
          Next
        </span>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: c.primary,
          }}
        >
          {next ? next.label : ''}
        </span>
      </button>
    </>
  );
}
