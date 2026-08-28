'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useScrollExpandHero } from '@/hooks/useScrollExpandHero';
import { useParallax } from '@/hooks/useParallax';

export default function Home() {
  const { boxRef, overlayRef, revealRef } = useScrollExpandHero();
  useParallax();
  const navRef = useRef<HTMLElement>(null);

  return (
    <div style={{ background: 'var(--paper-1)', fontFamily: 'var(--font-ui)', color: 'var(--ink-2)' }}>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          zIndex: 100,
          padding: '12px 20px',
          background: 'var(--ink-1)',
          color: 'var(--paper-1)',
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--size-small)',
          fontWeight: 700,
          textDecoration: 'none',
          borderRadius: '0 0 4px 0',
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '0px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
        }}
      >
        Skip to content
      </a>

      <header
        ref={navRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px 32px',
          padding: '22px 56px',
          background: 'var(--surface-page)',
        }}
      >
        <a
          href="#"
          aria-label="Swayam Agrawal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '19px',
              letterSpacing: '-.01em',
              textTransform: 'uppercase',
              color: 'var(--ink-1)',
            }}
          >
            Swayam Agrawal
          </span>
        </a>

        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }} aria-label="Primary">
          <a
            href="#work"
            className="nav-scramble"
            data-scroll-target="work"
            data-original="Work"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--size-meta)',
              fontWeight: 600,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-1)',
              textDecoration: 'none',
              paddingBottom: '4px',
              borderBottom: '2px solid transparent',
            }}
          >
            Work
          </a>
          <a
            href="#about"
            className="nav-scramble"
            data-scroll-target="about"
            data-original="About"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--size-meta)',
              fontWeight: 600,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-1)',
              textDecoration: 'none',
              paddingBottom: '4px',
              borderBottom: '2px solid transparent',
            }}
          >
            About
          </a>
          <a
            href="#certifications"
            className="nav-scramble"
            data-scroll-target="certifications"
            data-original="Certifications"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--size-meta)',
              fontWeight: 600,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-1)',
              textDecoration: 'none',
              paddingBottom: '4px',
              borderBottom: '2px solid transparent',
            }}
          >
            Certifications
          </a>
          <a
            href="#toolkit"
            className="nav-scramble"
            data-scroll-target="toolkit"
            data-original="Toolkit"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--size-meta)',
              fontWeight: 600,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-1)',
              textDecoration: 'none',
              paddingBottom: '4px',
              borderBottom: '2px solid transparent',
            }}
          >
            Toolkit
          </a>
          <a
            href="#contact"
            className="nav-scramble"
            data-scroll-target="contact"
            data-original="Contact"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--size-meta)',
              fontWeight: 600,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-1)',
              textDecoration: 'none',
              paddingBottom: '4px',
              borderBottom: '2px solid transparent',
            }}
          >
            Contact
          </a>
        </nav>

        <Button variant="primary" size="sm" href="mailto:swayamagrawal17@gmail.com">
          Get in touch
        </Button>
      </header>

      <main id="main-content">
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'calc(100vh - 84px)',
            boxSizing: 'border-box',
            background: 'var(--paper-1)',
          }}
        >
          <div
            id="seh-bg"
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--ink-1) url(/assets/hero-bg.jpg) center center / cover no-repeat',
            }}
          />

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'calc(100vh - 84px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              ref={boxRef}
              id="seh-box"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '300px',
                height: '400px',
                maxWidth: '95vw',
                maxHeight: '85vh',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(17,17,17,.35)',
              }}
            >
              <img
                src="/assets/hero-landscape.jpg"
                alt="Illustrated portrait of Swayam Agrawal taking a mirror selfie against a creative collage background"
                width={300}
                height={400}
                fetchPriority="high"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                ref={overlayRef}
                id="seh-overlay"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--ink-1)',
                  opacity: 0.72,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  right: '16px',
                  bottom: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'center',
                }}
              >
                <span
                  id="seh-eyebrow"
                  style={{
                    margin: 0,
                    fontSize: 'var(--size-eyebrow)',
                    letterSpacing: 'var(--ls-eyebrow)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'var(--marigold-soft)',
                  }}
                >
                  Finance & Analytics
                </span>
                <span
                  id="seh-hint"
                  style={{
                    margin: 0,
                    fontSize: 'var(--size-small)',
                    color: 'rgba(248,246,240,.75)',
                  }}
                >
                  Scroll to explore
                </span>
              </div>
            </div>

            <h1
              style={{
                margin: 0,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                pointerEvents: 'none',
                fontWeight: 400,
              }}
            >
              <span
                id="seh-word-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(34px,6vw,72px)',
                  lineHeight: 1,
                  backgroundImage: 'linear-gradient(90deg, var(--marigold), var(--vermilion), var(--marigold))',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradientPan 10s linear infinite alternate',
                }}
              >
                Swayam
              </span>
              <span
                id="seh-word-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(34px,6vw,72px)',
                  lineHeight: 1,
                  backgroundImage: 'linear-gradient(90deg, var(--marigold), var(--vermilion), var(--marigold))',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradientPan 10s linear -1.5s infinite alternate',
                }}
              >
                Agrawal
              </span>
            </h1>
          </div>

          <div
            ref={revealRef}
            id="seh-reveal"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1240px',
              margin: '0 auto',
              padding: '0 56px 96px',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 500ms ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                margin: '0 0 22px',
                maxWidth: '56ch',
                fontSize: 'var(--size-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--text-body)',
              }}
            >
              Field research, financial analysis and go-to-market work, with the numbers attached.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <Button variant="primary" size="lg" arrow href="#work">
                View my work
              </Button>
              <Button variant="outlineLight" size="lg" href="mailto:swayamagrawal17@gmail.com">
                Email me
              </Button>
            </div>
          </div>
        </section>

        <section
          style={{
            background: 'var(--surface-inverse)',
            color: 'var(--text-on-dark)',
            padding: '36px 0',
            overflow: 'hidden',
          }}
          aria-label="Key numbers"
        >
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div
              id="stats-slider-track"
              style={{
                display: 'flex',
                width: 'max-content',
                gap: '32px',
                animation: 'statsSlide 38s linear infinite',
              }}
            >
              <div style={{ flex: '0 0 auto', width: '160px' }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(24px,2.4vw,32px)',
                    lineHeight: 'var(--lh-display)',
                    letterSpacing: 'var(--ls-display)',
                    color: 'var(--marigold)',
                  }}
                >
                  <span data-count-to="9.27" data-decimals="2">
                    9.27
                  </span>
                </p>
                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: 'var(--size-eyebrow)',
                    lineHeight: 1.4,
                    color: 'rgba(247,240,223,.7)',
                  }}
                >
                  SGPA, B.Com from Indira College of Commerce and Science, Pune University
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          aria-label="Work"
          style={{
            position: 'relative',
            background: 'var(--surface-inverse)',
            color: 'var(--text-on-dark)',
            padding: '96px 56px',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto' }}>
            <SectionHeading
              eyebrow="Selected work"
              title="Five projects, five results"
              tone="light"
              scribbleColor="var(--marigold)"
              headingId="work-heading"
            />
            <p style={{ marginTop: '32px', color: 'rgba(247,240,223,.86)' }}>Work section coming soon...</p>
          </div>
        </section>

        <section
          id="toolkit"
          aria-label="Toolkit"
          style={{
            position: 'relative',
            padding: '96px 56px',
            overflow: 'hidden',
          }}
        >
          <SectionHeading eyebrow="Toolkit" title="What I can do for you" headingId="toolkit-heading" />
          <p style={{ marginTop: '32px' }}>Toolkit section coming soon...</p>
        </section>

        <section
          id="contact"
          style={{
            position: 'relative',
            background: 'var(--surface-accent-alt)',
            color: 'var(--ink-1)',
            padding: '110px 56px 40px',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto' }}>
            <Eyebrow mark color="var(--ink-1)">
              Contact
            </Eyebrow>
            <h2
              id="contact-heading"
              style={{
                margin: '30px 0 0',
                maxWidth: '26ch',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px,5vw,64px)',
                lineHeight: 'var(--lh-h1)',
                letterSpacing: '-.01em',
                color: 'var(--ink-1)',
              }}
            >
              Have a role in mind? I&apos;d <em style={{ fontStyle: 'italic' }}>love</em> to hear about it.
            </h2>
            <Button variant="primary" size="lg" href="mailto:swayamagrawal17@gmail.com" style={{ marginTop: '30px' }}>
              Email me
            </Button>
          </div>
        </section>
      </main>

      <footer style={{ background: 'var(--marigold)', padding: '36px 56px 32px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <a href="#" aria-label="Swayam Agrawal" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '19px',
                  textTransform: 'uppercase',
                  letterSpacing: '-.01em',
                  color: 'var(--ink-1)',
                }}
              >
                Swayam Agrawal
              </span>
            </a>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.linkedin.com/in/swayam-agrawal-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-stamp)',
                  border: '1px solid var(--border-hairline)',
                  color: 'var(--ink-1)',
                  fontSize: 'var(--size-small)',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                in
              </a>
              <a
                href="mailto:swayamagrawal17@gmail.com"
                aria-label="Email"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-stamp)',
                  border: '1px solid var(--border-hairline)',
                  color: 'var(--ink-1)',
                  fontSize: 'var(--size-small)',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                @
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
