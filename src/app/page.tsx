'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ServiceItem } from '@/components/ui/ServiceItem';
import { RandomLetterSwap } from '@/components/ui/RandomLetterSwap';
import { EraChrome, type ChromeSection } from '@/components/chrome/EraChrome';
import { useEraReveals } from '@/hooks/useEraReveals';
import { useStatsCountUp } from '@/hooks/useStatsCountUp';
import { useWorkCoverflow } from '@/hooks/useWorkCoverflow';
import { useCertScroller } from '@/hooks/useCertScroller';
import { useBuildsLedger } from '@/hooks/useBuildsLedger';
import { useHorizonDemo } from '@/hooks/useHorizonDemo';
import { scrollTo, scrollToTop } from '@/hooks/useScrollTo';
import { projects } from '@/lib/projects';
import { certifications } from '@/lib/certifications';
import { stats } from '@/lib/stats';
import { experience } from '@/lib/experience';
import { builds } from '@/lib/builds';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/site';

const CHROME_SECTIONS: ChromeSection[] = [
  { id: 'hero', label: 'Intro', tone: 'light' },
  { id: 'proof', label: 'By the numbers', tone: 'dark' },
  { id: 'about', label: 'About', tone: 'light', primary: true, navOrder: 3 },
  { id: 'work', label: 'Selected work', tone: 'dark', primary: true, navOrder: 1, navLabel: 'Work' },
  { id: 'builds', label: 'Side projects', tone: 'dark', primary: true, navOrder: 2, navLabel: 'Projects' },
  { id: 'experience', label: 'Track record', tone: 'light' },
  { id: 'certifications', label: 'Certifications', tone: 'dark', primary: true, navOrder: 4 },
  { id: 'toolkit', label: 'Toolkit', tone: 'dark', primary: true, navOrder: 5 },
  { id: 'contact', label: 'Contact', tone: 'light', primary: true, navOrder: 6 },
];

const BAND_X = 'clamp(28px, 6vw, 96px)';

export default function Home() {
  const { containerRef: workContainer, stageRef: workStage } = useWorkCoverflow();
  useCertScroller();
  useBuildsLedger();
  useHorizonDemo();
  useEraReveals();

  const statsRef = useRef<HTMLDivElement>(null);
  useStatsCountUp(statsRef);

  return (
    <div style={{ background: 'var(--paper)', fontFamily: 'var(--font-ui)', color: 'var(--ink)' }}>
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const m = document.getElementById('main-content');
          if (m) {
            m.focus();
            m.scrollIntoView();
          }
        }}
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          zIndex: 100,
          padding: '12px 20px',
          background: 'var(--ink)',
          color: 'var(--paper)',
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--size-small)',
          fontWeight: 700,
          textDecoration: 'none',
          borderRadius: '0 0 4px 0',
        }}
        onFocus={(e) => (e.currentTarget.style.left = '0px')}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
      >
        Skip to content
      </a>

      <EraChrome sections={CHROME_SECTIONS} />

      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        {/* ---------- Hero ---------- */}
        <section
          id="hero"
          data-era-hero
          aria-labelledby="hero-heading"
          style={{
            position: 'relative',
            minHeight: '100vh',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: `120px ${BAND_X} 88px`,
            background: 'var(--paper)',
            overflow: 'hidden',
          }}
        >
          <div
            data-era-hero-lockup
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '10px' }}
          >
            <h1
              id="hero-heading"
              className="era-display"
              style={{ fontSize: 'clamp(58px, 15vw, 190px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span>Swayam</span>
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Agrawal
                <span
                  className="era-script"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: 'clamp(-14px, -1.1vw, -2px)',
                    bottom: 'clamp(-24px, -2.6vw, -12px)',
                    fontSize: 'clamp(30px, 6vw, 76px)',
                    color: 'var(--accent-on-light)',
                  }}
                >
                  researcher
                </span>
              </span>
            </h1>

            <p
              style={{
                margin: '34px 0 0',
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
              }}
            >
              Field research · Financial analysis · Go-to-market
            </p>
          </div>

          <div
            style={{
              position: 'relative',
              marginTop: '56px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '14px',
              justifyContent: 'flex-start',
              maxWidth: 'var(--content-max)',
              width: '100%',
              marginInline: 'auto',
            }}
          >
            <Button variant="dark" size="lg" arrow onClick={() => scrollTo('work')}>
              View my work
            </Button>
            <Button variant="outline" size="lg" href={`mailto:${CONTACT_EMAIL}`}>
              Email me
            </Button>
          </div>

          <div
            data-era-hero-cue
            aria-hidden="true"
            style={{ position: 'absolute', left: '50%', bottom: '22px', transform: 'translateX(-50%)', pointerEvents: 'none' }}
          >
          <div
            className="era-hero-cue"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--ink-soft)',
                whiteSpace: 'nowrap',
              }}
            >
              Scroll to view the site
            </span>
            <span style={{ position: 'relative', display: 'block', width: '1px', height: '46px', background: 'var(--rule-ink-strong)', overflow: 'hidden' }}>
              <span
                className="era-hero-cue-dot"
                style={{ position: 'absolute', top: 0, left: '-1px', width: '3px', height: '10px', borderRadius: '2px', background: 'var(--accent-on-light)' }}
              />
            </span>
          </div>
          </div>
        </section>

        {/* ---------- Proof / by the numbers ---------- */}
        <section
          id="proof"
          data-era-proof
          aria-labelledby="proof-heading"
          style={{ position: 'relative', background: 'var(--ink)', color: 'var(--paper)' }}
        >
          <h2
            id="proof-heading"
            style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}
          >
            Key numbers
          </h2>
          <div data-era-proof-runway style={{ position: 'relative', height: '220vh' }}>
            <div
              ref={statsRef}
              data-era-proof-stage
              style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
            >
              <div
                data-era-proof-track
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 'clamp(48px, 7vw, 120px)',
                  width: 'max-content',
                  padding: `0 ${BAND_X}`,
                }}
              >
                <span
                  className="era-eyebrow"
                  style={{ writingMode: 'vertical-rl', color: 'var(--paper-on-dark)', flexShrink: 0, alignSelf: 'center' }}
                >
                  By the numbers
                </span>
                {stats.map((stat, idx) => (
                <div key={idx} data-era-stat style={{ flexShrink: 0, ['--d' as string]: [0, 14, -8, 18, 4, -12, 10, -4, 16][idx % 9] }}>
                  <p
                    className="era-stat-num"
                    style={{
                      margin: 0,
                      whiteSpace: 'nowrap',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 400,
                      fontSize: 'clamp(52px, 8vw, 108px)',
                      lineHeight: 0.95,
                      letterSpacing: '-0.02em',
                      color: 'var(--paper)',
                    }}
                  >
                    <span data-count-to={stat.value} data-decimals={stat.decimals} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {stat.value.toFixed(stat.decimals)}
                    </span>
                    <span style={{ fontSize: '0.42em', color: 'var(--bougainvillea)' }}>{stat.suffix}</span>
                  </p>
                  <p
                    className="era-stat-label"
                    style={{
                      margin: '18px 0 0',
                      maxWidth: '34ch',
                      fontSize: 'var(--size-small)',
                      lineHeight: 1.5,
                      color: 'var(--paper-on-dark)',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section
          id="about"
          aria-labelledby="about-heading"
          style={{ position: 'relative', padding: `clamp(90px, 12vw, 150px) ${BAND_X}`, background: 'var(--paper)' }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <span className="era-eyebrow">About</span>
            <h2
              id="about-heading"
              data-era-scrub
              className="era-display"
              style={{ margin: '18px 0 0', fontSize: 'clamp(40px, 8vw, 116px)', maxWidth: '14ch' }}
            >
              The work behind the numbers
            </h2>

            <div
              style={{
                marginTop: 'clamp(48px, 7vw, 88px)',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.7fr) minmax(190px, 0.58fr)',
                gap: 'clamp(36px, 6vw, 72px)',
                alignItems: 'end',
              }}
              className="responsive-grid-2col"
            >
              <div data-era-reveal style={{ alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '60ch' }}>
                <p data-era-ink style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h3)', lineHeight: 'var(--lh-h3)', color: 'var(--ink)' }}>
                  Most of my work starts the same way: a claim someone believes, with no data behind it. I go and collect it.
                </p>
                <p data-era-ink style={{ margin: 0, fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--ink-soft)' }}>
                  The UPI survey put me in nine of Pimpri-Chinchwad&apos;s markets with a questionnaire and 51 street vendors, working out what actually happens to one of them when a payment fails. The Ind AS 10 review was quieter: a company&apos;s PP&amp;E disclosures, read line by line until the gaps showed. And at the consulting firm I interned with, a client was paying far more for its leads than they were worth, so I traced the funnel until the reason was obvious.
                </p>
                <p data-era-ink style={{ margin: 0, fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--ink-soft)' }}>
                  The analysis mostly happens in Excel. The UPI survey turned into a 33-page report that named seven barriers to financial inclusion. A prize-distribution process that used to tie up a 35-person team for days now runs off a tracker in about half the time. There is coordination work in the background too: placement drives for 100+ students across 30+ companies, and the logistics for a 130-person college fest, which nobody notices until something slips.
                </p>
                <p data-era-ink style={{ margin: 0, fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--ink-soft)' }}>
                  I did my first year at Narsee Monjee in Mumbai, then moved back to Pune for the rest. I graduate in 2027 and I&apos;m looking for a management role in finance.
                </p>
                <p className="era-script" style={{ margin: '10px 0 0', fontSize: '44px', color: 'var(--bougainvillea)' }}>
                  Swayam
                </p>
              </div>

              <figure data-era-portrait style={{ margin: 0, position: 'relative', alignSelf: 'end', marginTop: 'clamp(-140px, -8vw, -48px)' }}>
                <Image
                  src="/swayam-portrait.jpg"
                  alt="Illustrated portrait of Swayam Agrawal"
                  width={700}
                  height={1244}
                  sizes="(max-width: 900px) 100vw, 45vw"
                  loading="eager"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    border: '1px solid var(--rule-ink-strong)',
                    padding: '10px',
                    background: 'var(--paper-deep)',
                    boxSizing: 'border-box',
                  }}
                />
                <figcaption
                  style={{
                    marginTop: '12px',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-soft)',
                  }}
                >
                  Pune · India
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---------- Work: ERA arch reveal, then the coverflow ---------- */}
        <section id="work" aria-labelledby="work-heading" style={{ position: 'relative', background: 'var(--paper)' }}>
          {/* Arch reveal: a navy dome sweeps up from the foot of the screen and fills it.
              A tall runway + a position:sticky stage does the "pinning" (no ScrollTrigger
              pin), and GSAP only scrubs the dome/title transforms. */}
          <div data-era-arch-reveal style={{ position: 'relative', height: '140vh', background: 'var(--paper)' }}>
            <div
              data-era-arch-stage
              style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'var(--paper)' }}
            >
            {/* navy panel, revealed through a growing bottom-anchored ellipse so it
                reads as a dome rising out of the cream. GSAP scrubs the clip-path. */}
            <div
              data-era-arch-panel
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--ink)',
                clipPath: 'ellipse(88% 15% at 50% 100%)',
              }}
            />

            {/* heading + intro, sitting on the navy panel — fades in once the dome
                has filled the frame */}
            <div
              data-era-arch-inner
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                textAlign: 'center',
                padding: `0 ${BAND_X} clamp(56px, 9vh, 120px)`,
                color: 'var(--paper)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: 'var(--content-max)' }}>
                <h2
                  id="work-heading"
                  className="era-display"
                  style={{ margin: 0, fontSize: 'clamp(40px, 8vw, 120px)', maxWidth: '11ch', color: 'var(--paper)' }}
                >
                  Findings, not opinions
                </h2>
                <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--paper-on-dark)' }}>
                  Field research, compliance, CRM and go-to-market. Each entry states what I did and what it produced.
                </p>
              </div>
            </div>

            <svg
              data-era-arch-label
              aria-hidden="true"
              viewBox="0 0 1200 240"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: 'absolute', left: '50%', top: '10%', width: 'min(1180px, 132vw)', transform: 'translateX(-50%)', pointerEvents: 'none', overflow: 'visible', zIndex: 3 }}
            >
              <defs>
                <path id="work-arc" d="M 40,232 Q 600,26 1160,232" fill="none" />
              </defs>
              <text
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fill: 'var(--ink)' }}
                fontSize="34"
              >
                <textPath href="#work-arc" startOffset="50%" textAnchor="middle">
                  Selected work · Five projects
                </textPath>
              </text>
            </svg>
            </div>
          </div>

          {/* The coverflow, in normal flow on the same navy field */}
          <div style={{ position: 'relative', background: 'var(--ink)', color: 'var(--paper)', padding: `clamp(16px, 3vw, 40px) ${BAND_X} clamp(90px, 12vw, 140px)` }}>
            <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto' }}>
              <div style={{ position: 'relative', zIndex: 61, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', paddingBottom: 'clamp(24px, 4vw, 40px)' }}>
                <span className="era-eyebrow" style={{ color: 'var(--paper-on-dark)' }}>
                  The work
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0 }}>
                  <span
                    id="work-coverflow-counter-current"
                    className="era-display"
                    aria-hidden="true"
                    style={{ fontSize: '46px', color: 'var(--accent-on-dark)' }}
                  >
                    01
                  </span>
                  <span aria-hidden="true" style={{ fontSize: 'var(--size-small)', letterSpacing: '.04em', color: 'var(--paper-on-dark)' }}>/ 05</span>
                </div>
              </div>

            <div ref={workContainer} id="work-coverflow" data-era-work-stage style={{ position: 'relative' }}>
              <div ref={workStage} id="work-coverflow-stage" style={{ position: 'relative', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1400px' }}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="coverflow-card"
                    role="group"
                    tabIndex={0}
                    aria-roledescription="slide"
                    aria-label={`Project: ${project.title}`}
                    style={{
                      position: 'absolute',
                      width: '280px',
                      height: '400px',
                      borderRadius: 'var(--radius-card)',
                      overflow: 'hidden',
                      background: 'var(--ink)',
                      border: '1px solid var(--border-hairline-inverse)',
                      transformOrigin: 'center center',
                      boxShadow: '0 20px 45px rgba(0,0,0,.55)',
                      transition: 'transform 600ms cubic-bezier(.25,1,.5,1), opacity 600ms cubic-bezier(.25,1,.5,1), filter 600ms ease-out, width 500ms cubic-bezier(.25,1,.5,1), height 500ms cubic-bezier(.25,1,.5,1), box-shadow 400ms ease-out',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      className="coverflow-content"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        padding: '28px 24px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '22px',
                        transition: 'opacity 400ms ease',
                        overflowY: 'auto',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, lineHeight: 1.15, color: 'var(--accent-on-dark)' }}>
                        {project.category}
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '19px', lineHeight: 1.25, minHeight: '47.5px', color: 'var(--paper)' }}>
                          {project.title}
                        </p>
                        <p style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.5, minHeight: '75px', color: 'var(--paper-on-dark)' }}>
                          {project.shortDescription}
                        </p>
                        <button
                          type="button"
                          className="coverflow-cta"
                          aria-expanded="false"
                          style={{
                            alignSelf: 'flex-start',
                            marginTop: '4px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '9px 16px',
                            borderRadius: 'var(--radius-pill)',
                            background: 'var(--accent-on-dark)',
                            color: 'var(--ink)',
                            fontSize: '10.5px',
                            fontWeight: 700,
                            letterSpacing: '.08em',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            boxShadow: '0 10px 24px -10px rgba(216, 31, 122, 0.65)',
                          }}
                        >
                          {project.readMoreCtaText}
                        </button>
                        <div className="coverflow-expanded" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          <span style={{ fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--paper-on-dark)' }}>
                            {project.expandedDate}
                          </span>
                          <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.55, color: 'var(--paper-on-dark)' }}>
                            {project.fullDescription}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  fontSize: '9.5px',
                                  fontWeight: 700,
                                  letterSpacing: '.08em',
                                  textTransform: 'uppercase',
                                  padding: '6px 11px',
                                  borderRadius: 'var(--radius-pill)',
                                  border: '1px solid var(--border-hairline-inverse)',
                                  color: 'var(--paper)',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div
                            style={{
                              background: 'var(--card)',
                              color: 'var(--ink)',
                              padding: '18px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                            }}
                          >
                            <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent-on-light)' }}>
                              Outcome
                            </span>
                            <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'var(--size-body)', lineHeight: 1.3 }}>
                              {project.outcome.highlight}
                            </p>
                            {project.outcome.details && (
                              <p style={{ margin: 0, fontSize: 'var(--size-eyebrow)', lineHeight: 1.5, color: 'var(--ink-soft)' }}>
                                {project.outcome.details}
                              </p>
                            )}
                          </div>
                          {project.reportUrl && (
                            <a
                              href={project.reportUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ alignSelf: 'flex-start', fontSize: '10.5px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-on-dark)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
                            >
                              View full report →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div role="group" aria-label="Project carousel controls" style={{ position: 'relative', zIndex: 61, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px 18px', marginTop: '24px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center', gap: 'clamp(8px, 3vw, 18px)' }}>
                  <button type="button" id="coverflow-prev" aria-label="Previous project" style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: 'var(--radius-stamp)', border: '1px solid var(--border-hairline-inverse)', background: 'transparent', color: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', boxShadow: '0 10px 26px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(242, 239, 230, 0.08)' }}>
                    &lt;
                  </button>
                  <div role="tablist" aria-label="Choose a project" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    {projects.map((project, i) => (
                      <button key={i} type="button" className="coverflow-dot" role="tab" aria-label={`Project ${i + 1}: ${project.title}`} aria-selected={i === 0} style={{ height: '44px', width: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                        <span style={{ display: 'block', flexShrink: 0, height: '8px', width: '8px', borderRadius: 'var(--radius-pill)', background: 'var(--rule-on-dark)', transition: 'all 300ms cubic-bezier(.25,1,.5,1)' }} />
                      </button>
                    ))}
                  </div>
                  <button type="button" id="coverflow-next" aria-label="Next project" style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: 'var(--radius-stamp)', border: '1px solid var(--border-hairline-inverse)', background: 'transparent', color: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', boxShadow: '0 10px 26px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(242, 239, 230, 0.08)' }}>
                    &gt;
                  </button>
                </div>
                <button
                  type="button"
                  id="coverflow-toggle"
                  aria-label="Pause automatic project rotation"
                  aria-pressed="false"
                  style={{
                    height: '44px',
                    padding: '0 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-hairline-inverse)',
                    background: 'transparent',
                    color: 'var(--paper-on-dark)',
                    cursor: 'pointer',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'inherit',
                    boxShadow: '0 10px 26px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(242, 239, 230, 0.08)',
                  }}
                >
                  Pause
                </button>
              </div>

              <p style={{ margin: '24px 0 0', textAlign: 'center', fontSize: 'var(--size-small)', color: 'var(--paper-on-dark)' }}>
                Full reports available on request, just{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontWeight: 700, color: 'var(--accent-on-dark)' }}>
                  ask for a copy
                </a>
                .
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* ---------- Side projects (Bahi Khaata live demo + EMI teaser) ---------- */}
        <section
          id="builds"
          aria-labelledby="builds-heading"
          style={{
            position: 'relative',
            padding: `clamp(90px, 12vw, 150px) ${BAND_X}`,
            background: 'var(--burgundy)',
            color: 'var(--paper)',
            borderTop: '1px solid var(--rule-on-dark)',
          }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <span className="era-eyebrow" style={{ color: 'var(--paper-on-dark)' }}>
              Side projects
            </span>
            <h2
              id="builds-heading"
              data-era-scrub
              className="era-display"
              style={{ margin: '18px 0 0', fontSize: 'clamp(40px, 8vw, 116px)', maxWidth: '16ch', color: 'var(--paper)' }}
            >
              Things I make{' '}
              <br />
              with AI
            </h2>
            <p style={{ margin: '22px 0 0', maxWidth: '58ch', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--paper-on-dark)' }}>
              I don&apos;t write code. I&apos;m from a commerce background, so I design these sites and
              build them with AI tools. The part that&apos;s mine is what goes inside: the research,
              the numbers, and the writing.
            </p>
          </div>

          {/* Bahi Khaata — the ledger writes itself as you scroll */}
          {builds
            .filter((b) => b.status === 'live' && b.entries?.length)
            .slice(0, 1)
            .map((build) => (
              <div key={build.id} id="builds-ledger" style={{ position: 'relative', height: '220vh', marginTop: 'clamp(40px, 6vw, 72px)' }}>
                <div
                  id="builds-ledger-pin"
                  style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(20px, 4vw, 48px)',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    id="builds-panel"
                    className="demo-panel"
                    style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '900px',
                      // Safety net, not the primary fix: whatever the visible
                      // viewport actually is once a mobile browser's address bar
                      // has eaten into it, the card can never grow taller than
                      // its own pinned stage and bleed into what's next — it
                      // scrolls internally instead.
                      maxHeight: 'calc(100dvh - 40px)',
                      overflowY: 'auto',
                      background: '#141210',
                      border: '1px solid var(--rule-on-dark)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
                      padding: 'clamp(18px, 3vw, 40px)',
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* header — mirrors bahi-khaata.vercel.app */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <rect x="1" y="1" width="20" height="24" rx="1.5" fill="var(--accent-on-light)" />
                        <line x1="6" y1="1" x2="6" y2="25" stroke="#141210" strokeWidth="1" />
                        <line x1="10" y1="7" x2="17" y2="7" stroke="#141210" strokeWidth="1" />
                        <line x1="10" y1="11" x2="17" y2="11" stroke="#141210" strokeWidth="1" />
                      </svg>
                      <div>
                        <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--size-h3)', color: 'var(--paper)' }}>
                          {build.name}
                        </p>
                        <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--size-small)', color: 'var(--paper-on-dark)' }}>
                          {build.tagline}
                        </p>
                      </div>
                    </div>

                    <p style={{ margin: 'clamp(12px, 2vw, 18px) 0 0', maxWidth: '58ch', fontSize: 'var(--size-small)', lineHeight: 'var(--lh-body)', color: 'var(--paper-on-dark)' }}>
                      {build.summary}
                    </p>

                    {/* column headers + rule that draws on scroll */}
                    <div data-era-draw-trigger style={{ marginTop: 'clamp(14px, 2.2vw, 24px)' }}>
                      <div
                        className="builds-cols"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '92px 1fr auto auto',
                          gap: '18px',
                          fontFamily: 'var(--font-ui)',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'rgba(242, 239, 230, 0.45)',
                        }}
                      >
                        <span>Date</span>
                        <span>Entry</span>
                        <span>Section</span>
                        <span>Length</span>
                      </div>
                      <svg
                        viewBox="0 0 100 1"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        style={{ display: 'block', width: '100%', height: '1px', marginTop: '10px', overflow: 'visible' }}
                      >
                        <path
                          className="era-draw-path"
                          d="M0,0.5 L100,0.5"
                          fill="none"
                          stroke="var(--rule-on-dark)"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>

                    {/* the rows */}
                    <ol id="builds-rows" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {build.entries!.map((entry, i) => (
                        <li key={i} className="builds-row">
                          <span className="builds-row-date">{entry.date}</span>
                          <span className="builds-row-title">{entry.title}</span>
                          <span className="builds-row-section">{entry.section}</span>
                          <span className="builds-row-len">{entry.readTime}</span>
                        </li>
                      ))}
                    </ol>

                    {/* running count */}
                    <div aria-hidden="true" style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: 'clamp(12px, 2.2vw, 22px)' }}>
                      <span id="builds-count" className="era-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--paper)', opacity: 0.22 }}>
                        00
                      </span>
                      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: 'var(--paper-on-dark)' }}>
                        / {String(build.entries!.length).padStart(2, '0')} ENTRIES RECORDED
                      </span>
                    </div>

                    {/* CTA — revealed once every row is recorded */}
                    <div className="demo-reveal" style={{ marginTop: 'clamp(14px, 2.2vw, 22px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 20px' }}>
                      <Button variant="primary" arrow href={build.url} target="_blank" rel="noopener noreferrer">
                        Read the ledger
                      </Button>
                      {build.note && (
                        <span style={{ fontSize: 'var(--size-small)', color: 'var(--paper-on-dark)' }}>{build.note}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Horizon — the loan pays itself down as you scroll */}
          {builds
            .filter((b) => b.status === 'live' && b.demo)
            .map((build) => {
              const demo = build.demo!;
              return (
                <div key={build.id} id="horizon-demo" style={{ position: 'relative', height: '200vh', marginTop: 'clamp(56px, 8vw, 96px)' }}>
                  <div
                    id="horizon-demo-pin"
                    style={{
                      position: 'sticky',
                      top: 0,
                      height: '100vh',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'clamp(20px, 4vw, 48px)',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      id="horizon-panel"
                      className="demo-panel"
                      style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '900px',
                        // Same safety net as the Bahi Khaata card above.
                        maxHeight: 'calc(100dvh - 40px)',
                        overflowY: 'auto',
                        background: 'var(--horizon-paper)',
                        border: '1px solid var(--horizon-rule)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
                        padding: 'clamp(18px, 3vw, 40px)',
                        boxSizing: 'border-box',
                        color: 'var(--horizon-ink)',
                      }}
                    >
                      {/* header — mirrors horizon-calc.vercel.app's mark: a half-sun over a horizon rule */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true" style={{ flexShrink: 0 }}>
                          <line x1="1" y1="15" x2="25" y2="15" stroke="var(--horizon-ink)" strokeWidth="1.4" />
                          <path d="M6,15 A7,7 0 0 1 20,15 Z" fill="var(--horizon-accent)" />
                        </svg>
                        <div>
                          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--size-h3)', color: 'var(--horizon-ink)' }}>
                            {build.name}
                          </p>
                          <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--size-small)', color: 'var(--horizon-ink-2)' }}>
                            {build.tagline}
                          </p>
                        </div>
                      </div>

                      <p style={{ margin: 'clamp(10px, 2vw, 16px) 0 0', maxWidth: '58ch', fontSize: 'var(--size-small)', lineHeight: 'var(--lh-body)', color: 'var(--horizon-ink-2)' }}>
                        {build.summary}
                      </p>

                      {/* the worked example — a real default state from the calculator */}
                      <div style={{ marginTop: 'clamp(14px, 2.5vw, 24px)' }}>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--horizon-label)' }}>
                          Monthly EMI
                        </span>
                        <p style={{ margin: '4px 0 0' }}>
                          <span
                            id="horizon-emi"
                            data-target={demo.emi}
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 400,
                              fontSize: 'clamp(22px, 3.6vw, 44px)',
                              lineHeight: 0.95,
                              letterSpacing: '-0.02em',
                              color: 'var(--horizon-ink)',
                            }}
                          >
                            {demo.emiLabel}
                          </span>
                        </p>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11.5px', color: 'var(--horizon-ink-2)' }}>
                          {demo.principalLabel} · {demo.rateLabel} · {demo.tenureLabel}
                        </span>
                      </div>

                      {/* balance / interest chart, drawn on scroll */}
                      <div style={{ marginTop: 'clamp(12px, 2.2vw, 20px)' }}>
                        <svg
                          viewBox="0 0 400 152"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          style={{ display: 'block', width: '100%', height: 'clamp(64px, 12vw, 130px)', overflow: 'visible' }}
                        >
                          <line x1="0" y1="151" x2="400" y2="151" stroke="var(--horizon-rule)" strokeWidth="1" />
                          <path id="horizon-balance-path" d="M0,10 C220,18 300,70 400,152" fill="none" stroke="var(--horizon-ink)" strokeWidth="2" />
                          <path
                            id="horizon-interest-path"
                            d="M0,152 C60,128 150,127 400,127"
                            fill="none"
                            stroke="var(--horizon-accent)"
                            strokeWidth="1.6"
                            strokeDasharray="5 4"
                          />
                          <circle id="horizon-dot" cx="0" cy="10" r="3.5" fill="var(--horizon-ink)" style={{ opacity: 0 }} />
                        </svg>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '4px',
                            fontFamily: 'var(--font-ui)',
                            fontSize: '10px',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--horizon-label)',
                          }}
                        >
                          <span>0</span>
                          <span>{demo.tenureLabel}</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '10px', fontSize: 'var(--size-small)', color: 'var(--horizon-ink-2)' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '14px', height: '2px', background: 'var(--horizon-ink)', display: 'inline-block' }} />
                            Outstanding balance
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '14px', height: '2px', background: 'var(--horizon-accent)', display: 'inline-block' }} />
                            Interest paid so far
                          </span>
                        </div>
                      </div>

                      {/* principal / interest split */}
                      <div style={{ marginTop: 'clamp(12px, 2.2vw, 20px)' }}>
                        <div className="horizon-split-bar">
                          <span id="horizon-split-black" data-target={demo.principalPct} style={{ width: `${demo.principalPct}%` }} />
                          <span id="horizon-split-red" data-target={demo.interestPct} style={{ width: `${demo.interestPct}%` }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontFamily: 'var(--font-ui)', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--horizon-ink-2)' }}>
                          <span>Principal · <span id="horizon-split-black-pct">{demo.principalPct}</span>%</span>
                          <span>Interest · <span id="horizon-split-red-pct">{demo.interestPct}</span>%</span>
                        </div>
                      </div>

                      {/* stats + CTA — revealed once the demo finishes drawing */}
                      <div className="demo-reveal" style={{ marginTop: 'clamp(14px, 2.5vw, 24px)' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', paddingTop: 'clamp(12px, 2vw, 18px)', borderTop: '1px solid var(--horizon-rule)' }}>
                          {[
                            ['Total interest', demo.totalInterestLabel],
                            ['Total repayment', demo.totalRepaymentLabel],
                            ['Effective tenure', demo.tenureLabel],
                          ].map(([label, value]) => (
                            <div key={label}>
                              <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--horizon-label)' }}>
                                {label}
                              </p>
                              <p
                                style={{
                                  margin: '2px 0 0',
                                  fontFamily: 'var(--font-display)',
                                  fontWeight: 400,
                                  fontSize: 'var(--size-h4)',
                                  lineHeight: 0.95,
                                  letterSpacing: '-0.02em',
                                  color: 'var(--horizon-ink)',
                                }}
                              >
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div style={{ marginTop: 'clamp(14px, 2.2vw, 20px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 20px' }}>
                          <Button variant="dark" arrow href={build.url} target="_blank" rel="noopener noreferrer">
                            Open the calculator
                          </Button>
                          {build.note && <span style={{ fontSize: 'var(--size-small)', color: 'var(--horizon-ink-2)' }}>{build.note}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* EMI calculator — in development */}
          {builds
            .filter((b) => b.status === 'in-development')
            .map((build) => (
              <div key={build.id} style={{ maxWidth: 'var(--content-max)', margin: 'clamp(20px, 4vw, 40px) auto 0' }}>
                <div style={{ borderTop: '1px solid var(--rule-on-dark)', paddingTop: 'clamp(28px, 4vw, 44px)', display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '10px 18px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-on-dark)',
                      border: '1px solid var(--accent-on-dark)',
                      borderRadius: '2px',
                      padding: '4px 8px',
                    }}
                  >
                    In development
                  </span>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--size-h3)', color: 'var(--paper)' }}>
                    {build.name}
                  </h3>
                </div>
                <p style={{ margin: '14px 0 0', maxWidth: '54ch', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--paper-on-dark)' }}>
                  {build.summary}
                </p>
              </div>
            ))}
        </section>

        {/* ---------- Experience & education (wavy timeline) ---------- */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          style={{ position: 'relative', padding: `clamp(90px, 12vw, 150px) ${BAND_X}`, background: 'var(--paper-deep)', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <span className="era-eyebrow">Track record</span>
            <h2
              id="experience-heading"
              data-era-scrub
              className="era-display"
              style={{ margin: '18px 0 0', fontSize: 'clamp(40px, 8vw, 116px)', maxWidth: '14ch' }}
            >
              Experience &amp; education
            </h2>

            <div className="era-timeline" style={{ marginTop: 'clamp(56px, 8vw, 96px)' }}>
              <svg
                className="era-timeline-line"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="era-wave-path"
                  d="M0,60 C 40,20 80,20 120,60 C 200,100 280,100 360,60 C 440,20 520,20 600,60 C 680,100 760,100 840,60 C 920,20 1000,20 1080,60 C 1120,90 1160,90 1200,60"
                  fill="none"
                  stroke="var(--bougainvillea)"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Phones: the horizontal wave above is hidden (see globals.css) and this
                  single vertical line takes over, drawing top-to-bottom in sync with
                  the same node pops — see useEraReveals. */}
              <div className="era-timeline-line-mobile" aria-hidden="true" />

              {experience.map((item, idx) => (
                <div key={idx} className={`era-timeline-item ${idx % 2 === 0 ? 'is-above' : 'is-below'}`}>
                  <span data-era-node className="era-timeline-dot" aria-hidden="true" />
                  <div className="era-timeline-card">
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: 'var(--size-meta)',
                        letterSpacing: 'var(--ls-meta)',
                        textTransform: 'uppercase',
                        color: 'var(--accent-on-light)',
                      }}
                    >
                      {item.period}
                    </span>
                    <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h4)', fontWeight: 700, color: 'var(--ink)' }}>
                      {item.title}
                    </p>
                    <p style={{ margin: '4px 0 0', fontSize: 'var(--size-small)', color: 'var(--ink-soft)' }}>
                      {item.org}
                    </p>
                    <p style={{ margin: '10px 0 0', fontSize: 'var(--size-small)', lineHeight: 'var(--lh-body)', color: 'var(--ink-soft)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Certifications (scroll gallery kept, ERA treatment added) ---------- */}
        <section
          id="certifications"
          data-era-arch
          aria-labelledby="certifications-heading"
          style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '-70px',
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderTopLeftRadius: '150px',
            borderTopRightRadius: '150px',
          }}
        >
          <h2 id="certifications-heading" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
            Certifications
          </h2>
          <div id="cert-scroller" style={{ position: 'relative', height: '360vh' }}>
            <div id="cert-scroller-pin" style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: `clamp(28px, 5vw, 64px)`, boxSizing: 'border-box' }}>
              <div
                aria-hidden="true"
                className="era-cert-progress"
                style={{ position: 'absolute', top: 'clamp(24px, 5vh, 56px)', left: BAND_X, display: 'flex', alignItems: 'baseline', gap: '8px' }}
              >
                <span id="cert-progress-num" className="era-display" style={{ fontSize: 'clamp(44px, 6vw, 88px)', color: 'var(--paper)', opacity: 0.16 }}>
                  01
                </span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', color: 'var(--paper-on-dark)' }}>
                  / 05
                </span>
              </div>
              <div
                aria-hidden="true"
                className="era-cert-progressbar"
                style={{ position: 'absolute', bottom: 'clamp(24px, 5vh, 56px)', left: BAND_X, right: BAND_X, height: '2px', background: 'rgba(242, 239, 230, 0.16)' }}
              >
                <div id="cert-progress-bar" style={{ height: '100%', width: '20%', background: 'var(--bougainvillea)', transition: 'width 600ms cubic-bezier(.25,1,.5,1)' }} />
              </div>
              <div
                id="cert-gallery-card"
                data-era-cert-card
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1160px',
                  height: 'min(640px,82vh)',
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr',
                  background: 'var(--paper-0)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: '0 24px 60px rgba(0,0,0,.3)',
                  overflow: 'hidden',
                }}
              >
                <div className="cert-gallery-list-col" style={{ padding: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', borderRight: '1px solid var(--border-hairline)' }}>
                  <Eyebrow mark color="var(--accent-on-light)">
                    Certifications
                  </Eyebrow>
                  <div id="cert-list-viewport" style={{ position: 'relative', height: '280px', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)' }}>
                    <ul id="cert-list" style={{ position: 'absolute', left: 0, top: '50%', width: '100%', margin: 0, padding: 0, listStyle: 'none', transition: 'transform 700ms cubic-bezier(.25,1,.5,1)' }}>
                      {certifications.map((cert, idx) => (
                        <li
                          key={cert.id}
                          data-cert-index={idx}
                          style={{
                            height: '64px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transform: idx === 0 ? 'scale(1)' : 'scale(.96)',
                            transition: 'transform 500ms var(--ease-out)',
                          }}
                        >
                          <p className="cert-list-title" style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.2, color: idx === 0 ? 'var(--ink)' : 'var(--ink-soft)', opacity: idx === 0 ? 1 : 0.55, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'color 400ms,opacity 400ms' }}>
                            {cert.title}
                          </p>
                          <p className="cert-list-meta" style={{ margin: '3px 0 0', fontSize: '10.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', opacity: idx === 0 ? 0.85 : 0.4, transition: 'opacity 400ms' }}>
                            {cert.providerMeta}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p style={{ margin: 0, fontSize: 'var(--size-small)', color: 'var(--ink-soft)' }}>
                    Select a credential to see its certificate.
                  </p>
                </div>

                <div id="cert-media-viewport" style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink-1)' }}>
                  <div id="cert-media-track" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {certifications.map((cert, idx) => (
                      <div
                        key={cert.id}
                        className="cert-tile"
                        data-cert-index={idx}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '14px',
                          padding: '32px',
                          boxSizing: 'border-box',
                          opacity: idx === 0 ? 1 : 0,
                          transform: idx === 0 ? 'scale(1)' : 'scale(.97)',
                          zIndex: idx === 0 ? 2 : 1,
                          pointerEvents: idx === 0 ? 'auto' : 'none',
                          transition: 'opacity 600ms var(--ease-out),transform 600ms var(--ease-out)',
                        }}
                      >
                        <div className="cert-tile-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '10.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(247,240,223,.65)' }}>
                            {cert.provider}
                          </span>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', fontWeight: 700, color: 'var(--accent-on-dark)' }}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {/* Plain <img>: the tiles are an absolutely-positioned crossfade stack of
                              mixed-aspect-ratio scans, all lazy and off the critical path, which the
                              fixed-box model of next/image does not fit. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={cert.image} alt={cert.imageAlt} loading="lazy" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', background: 'var(--paper-0)', border: '1px solid rgba(247,240,223,.15)', boxShadow: '0 12px 30px rgba(0,0,0,.35)' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <p style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.55, color: 'rgba(247,240,223,.8)' }}>
                            {cert.description}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {cert.tags.map((tag) => (
                              <span key={tag} style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '5px 11px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-hairline-inverse)', color: 'var(--paper-1)' }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
                          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '20px', lineHeight: 1.25, color: 'var(--paper-1)', maxWidth: '70%' }}>
                            {cert.title}
                          </p>
                          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, fontSize: 'var(--size-meta)', fontWeight: 700, color: 'var(--accent-on-dark)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
                            Verify →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Toolkit (burgundy) ---------- */}
        <section
          id="toolkit"
          aria-labelledby="toolkit-heading"
          style={{ position: 'relative', padding: `clamp(90px, 12vw, 150px) ${BAND_X}`, background: 'var(--burgundy)', color: 'var(--paper)', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <span className="era-eyebrow" style={{ color: 'var(--paper-on-dark)' }}>
              Toolkit
            </span>
            <h2
              id="toolkit-heading"
              data-era-scrub
              className="era-display"
              style={{ margin: '18px 0 0', fontSize: 'clamp(40px, 8vw, 116px)', maxWidth: '14ch', color: 'var(--paper)' }}
            >
              What I can do for you
            </h2>

            <div data-era-toolkit style={{ position: 'relative', marginTop: 'clamp(48px, 7vw, 88px)' }}>
            <div
              data-era-rule
              aria-hidden="true"
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--rule-ink-strong)', transformOrigin: 'left center' }}
            />
            <div
              data-era-toolkit-grid
              className="responsive-grid-2col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '40px 0',
                paddingTop: '40px',
              }}
            >
              <ServiceItem tone="light" divider={false} icon="•" title="Finance" description="Financial modeling, cost accounting, quantitative analysis, valuation fundamentals." />
              <ServiceItem tone="light" icon="•" title="Analytics" description="Excel with pivot tables, VLOOKUP and models, plus data interpretation." />
              <ServiceItem tone="light" icon="•" title="Management" description="Project planning, Agile methods, risk tracking, operations management, team coordination." />
              <ServiceItem tone="light" icon="•" title="Certified" description="Google Project Management, Google AI Essentials, UPenn Finance & Quantitative Modeling, Citi and Deloitte simulations." />
            </div>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          style={{ position: 'relative', background: 'var(--paper)', color: 'var(--ink)', padding: `clamp(90px, 12vw, 150px) ${BAND_X} clamp(70px, 9vw, 110px)`, overflow: 'hidden' }}
        >
          <div data-era-reveal style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'flex-start' }}>
            <span className="era-eyebrow">Contact</span>
            <h2
              id="contact-heading"
              style={{
                margin: 0,
                maxWidth: '26ch',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 5vw, 64px)',
                lineHeight: 'var(--lh-h1)',
                letterSpacing: '-.01em',
                color: 'var(--ink)',
              }}
            >
              Have a role in mind? I&apos;d <em>love</em> to hear about it.
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Button variant="dark" size="lg" href={`mailto:${CONTACT_EMAIL}`}>
                Email me directly
              </Button>
              <button
                type="button"
                aria-label={`Copy email address, ${CONTACT_EMAIL}`}
                onClick={async (e) => {
                  const btn = e.currentTarget;
                  const label = btn.querySelector('[data-copy-label]') as HTMLElement | null;
                  const icon = btn.querySelector('[data-copy-icon]') as HTMLElement | null;
                  const check = btn.querySelector('[data-check-icon]') as HTMLElement | null;
                  const status = document.getElementById('copy-email-status');
                  try {
                    await navigator.clipboard.writeText(CONTACT_EMAIL);
                    if (label) label.textContent = 'Copied!';
                    if (icon) icon.style.display = 'none';
                    if (check) check.style.display = 'block';
                    btn.style.borderColor = 'var(--accent-on-light)';
                    btn.style.color = 'var(--accent-on-light)';
                    if (status) status.textContent = 'Email address copied.';
                    window.setTimeout(() => {
                      if (label) label.textContent = 'Copy email';
                      if (icon) icon.style.display = 'block';
                      if (check) check.style.display = 'none';
                      btn.style.borderColor = 'var(--ink)';
                      btn.style.color = 'var(--ink)';
                      if (status) status.textContent = '';
                    }, 2200);
                  } catch {
                    // Clipboard API unavailable (e.g. insecure context) — the
                    // mailto button above still works on its own.
                    if (status) status.textContent = 'Could not copy automatically — use the email button instead.';
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '52px',
                  padding: '0 22px',
                  flexShrink: 0,
                  background: 'transparent',
                  border: '2px solid var(--ink)',
                  borderRadius: 'var(--radius-pill)',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 200ms var(--ease-out), border-color 200ms var(--ease-out)',
                }}
              >
                <svg data-copy-icon width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <rect x="6" y="6" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6V3.5A1.5 1.5 0 0 0 10.5 2h-7A1.5 1.5 0 0 0 2 3.5v7A1.5 1.5 0 0 0 3.5 12H6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg data-check-icon width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ display: 'none', flexShrink: 0 }}>
                  <path d="M3.5 9.5L7 13L14.5 5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span data-copy-label>Copy email</span>
              </button>
            </div>
            <p
              aria-live="polite"
              id="copy-email-status"
              style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}
            />
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer data-era-footer style={{ background: 'var(--paper-deep)', padding: `64px ${BAND_X} 44px`, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px 32px' }}>
            <button
              type="button"
              onClick={() => scrollToTop()}
              aria-label="Back to top"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <span
                data-era-footer-mark
                className="era-display"
                style={{ fontSize: '20px', color: 'var(--ink)' }}
              >
                Swayam Agrawal
              </span>
            </button>

            <nav aria-label="Footer">
              <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', margin: 0, padding: 0, gap: '28px' }}>
                {[
                  ['Work', 'work'],
                  ['Projects', 'builds'],
                  ['About', 'about'],
                  ['Toolkit', 'toolkit'],
                  ['Contact', 'contact'],
                ].map(([label, target]) => (
                  <li key={target}>
                    <a
                      href={`#${target}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(target);
                      }}
                      style={{ fontSize: 'var(--size-small)', fontWeight: 600, color: 'var(--ink-soft)', textDecoration: 'none' }}
                    >
                      <RandomLetterSwap label={label} staggerDuration={0.03} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={LINKEDIN_URL}
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
                  border: '1px solid var(--rule-ink-strong)',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px -10px rgba(27, 42, 58, 0.4)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: '40px',
              paddingTop: '26px',
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '8px 20px',
            }}
          >
            <div
              data-era-footer-rule
              aria-hidden="true"
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--rule-ink)', transformOrigin: 'left center' }}
            />
            <span style={{ fontSize: 'var(--size-eyebrow)', color: 'var(--ink-soft)' }}>© {new Date().getFullYear()} Swayam Agrawal</span>
            <span style={{ fontSize: 'var(--size-eyebrow)', color: 'var(--ink-soft)' }}>No cookies. Anonymous page-view analytics only.</span>
            <span style={{ fontSize: 'var(--size-eyebrow)', color: 'var(--ink-soft)' }}>Pune, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
