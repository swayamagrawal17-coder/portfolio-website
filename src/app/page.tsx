'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceItem } from '@/components/ui/ServiceItem';
import { useScrollExpandHero } from '@/hooks/useScrollExpandHero';
import { useParallax } from '@/hooks/useParallax';
import { useStatsCountUp } from '@/hooks/useStatsCountUp';
import { useWorkCoverflow } from '@/hooks/useWorkCoverflow';
import { useCertScroller } from '@/hooks/useCertScroller';
import { useScrollScrub } from '@/hooks/useScrollScrub';
import { useNavScramble } from '@/hooks/useNavScramble';
import { scrollTo } from '@/hooks/useScrollTo';
import { projects } from '@/lib/projects';
import { certifications } from '@/lib/certifications';
import { stats } from '@/lib/stats';

export default function Home() {
  const { boxRef, overlayRef, revealRef, word1Ref, word2Ref, eyebrowRef, hintRef } = useScrollExpandHero();
  const { containerRef: workContainer, stageRef: workStage } = useWorkCoverflow();
  useCertScroller();
  useScrollScrub();
  useParallax();
  const navRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useNavScramble(navRef);
  useNavScramble(footerRef);
  useStatsCountUp(statsRef);

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
        onFocus={(e) => (e.currentTarget.style.left = '0px')}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
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
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Swayam Agrawal"
          style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
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
          {['Work', 'About', 'Certifications', 'Toolkit', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="nav-scramble"
              data-original={label}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(label.toLowerCase());
              }}
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
                cursor: 'pointer',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <Button variant="primary" size="sm" href="mailto:swayamagrawal17@gmail.com">
          Get in touch
        </Button>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section
          data-screen-label="Hero"
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
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div ref={overlayRef} id="seh-overlay" aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--ink-1)', opacity: 0.72 }} />
              <div style={{ position: 'absolute', left: '16px', right: '16px', bottom: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', textAlign: 'center' }}>
                <span ref={eyebrowRef} id="seh-eyebrow" style={{ margin: 0, fontSize: 'var(--size-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 700, color: 'var(--marigold-soft)' }}>
                  Finance & Analytics
                </span>
                <span ref={hintRef} id="seh-hint" style={{ margin: 0, fontSize: 'var(--size-small)', color: 'rgba(248,246,240,.75)' }}>
                  Scroll to explore
                </span>
              </div>
            </div>

            <h1 style={{ margin: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', pointerEvents: 'none', fontWeight: 400 }}>
              <span
                ref={word1Ref}
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
                ref={word2Ref}
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

          <div ref={revealRef} id="seh-reveal" style={{ position: 'relative', width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 56px 96px', opacity: 0, pointerEvents: 'none', transition: 'opacity 500ms ease', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{ margin: '0 0 22px', maxWidth: '56ch', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>
              Field research, financial analysis and go-to-market work, with the numbers attached.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <Button variant="primary" size="lg" arrow onClick={() => scrollTo('work')}>
                View my work
              </Button>
              <Button variant="outlineLight" size="lg" href="mailto:swayamagrawal17@gmail.com">
                Email me
              </Button>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section aria-labelledby="proof-heading" style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-dark)', padding: '36px 0', overflow: 'hidden' }}>
          <h2 id="proof-heading" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
            Key numbers
          </h2>
          <div ref={statsRef} style={{ width: '100%', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)' }}>
            <div id="stats-slider-track" style={{ display: 'flex', width: 'max-content', gap: '32px', animation: 'statsSlide 38s linear infinite' }}>
              {[...stats, ...stats].map((stat, idx) => (
                <div key={idx} style={{ flex: '0 0 auto', width: '160px' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,2.4vw,32px)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)', color: 'var(--marigold)' }}>
                    <span data-count-to={stat.value} data-decimals={stat.decimals}>
                      {stat.value.toFixed(stat.decimals)}
                    </span>
                    <span style={{ fontSize: '0.42em', color: 'rgba(247,240,223,.6)' }}>{stat.suffix}</span>
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: 'var(--size-eyebrow)', lineHeight: 1.4, color: 'rgba(247,240,223,.7)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" aria-labelledby="work-heading" style={{ position: 'relative', background: 'var(--surface-inverse)', color: 'var(--text-on-dark)', padding: '96px 56px', overflow: 'hidden' }}>
          <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '56px', alignItems: 'end', paddingBottom: '48px' }}>
              <SectionHeading eyebrow="Selected work" title="Five projects, five results" tone="light" scribbleColor="var(--marigold)" headingId="work-heading" />
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
                <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'rgba(247,240,223,.86)' }}>
                  Field research, compliance, CRM and go-to-market. Each entry states what I did and what it produced.
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0 }}>
                  <span id="work-coverflow-counter-current" style={{ fontFamily: 'var(--font-display)', fontSize: '40px', lineHeight: 1, color: 'var(--marigold)' }}>
                    01
                  </span>
                  <span style={{ fontSize: 'var(--size-small)', letterSpacing: '.04em', color: 'rgba(247,240,223,.5)' }}>/ 05</span>
                </div>
              </div>
            </div>

            <div ref={workContainer} id="work-coverflow" style={{ position: 'relative' }}>
              <div ref={workStage} id="work-coverflow-stage" style={{ position: 'relative', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1400px' }}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="coverflow-card"
                    style={{
                      position: 'absolute',
                      width: '280px',
                      height: '400px',
                      borderRadius: 'var(--radius-card)',
                      overflow: 'hidden',
                      background: 'var(--ink-1)',
                      border: '1px solid var(--border-hairline-inverse)',
                      transformOrigin: 'center center',
                      boxShadow: '0 20px 45px rgba(0,0,0,.55)',
                      transition: 'transform 700ms cubic-bezier(.25,1,.5,1),opacity 700ms cubic-bezier(.25,1,.5,1),filter 700ms cubic-bezier(.25,1,.5,1),width 500ms cubic-bezier(.25,1,.5,1),height 500ms cubic-bezier(.25,1,.5,1)',
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
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, lineHeight: 1.15, color: 'var(--marigold)' }}>
                        {project.category}
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '19px', lineHeight: 1.25, color: 'var(--paper-1)' }}>
                          {project.title}
                        </p>
                        <p style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.5, color: 'rgba(247,240,223,.78)' }}>
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
                            padding: '8px 16px',
                            borderRadius: 'var(--radius-pill)',
                            background: 'var(--marigold)',
                            color: 'var(--ink-1)',
                            fontSize: '10.5px',
                            fontWeight: 700,
                            letterSpacing: '.08em',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                          }}
                        >
                          {project.readMoreCtaText}
                        </button>
                        <div className="coverflow-expanded" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          <span style={{ fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(247,240,223,.78)' }}>
                            {project.expandedDate}
                          </span>
                          <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.55, color: 'rgba(247,240,223,.86)' }}>
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
                                  color: 'var(--paper-1)',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div
                            style={{
                              background: project.outcomeBg === 'marigold' ? 'var(--marigold)' : 'var(--paper-1)',
                              color: project.outcomeBg === 'marigold' ? 'var(--ink-1)' : 'var(--ink-1)',
                              padding: '18px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                            }}
                          >
                            <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: project.outcomeBg === 'marigold' ? 'var(--ink-1)' : 'var(--vermilion-deep)' }}>
                              Outcome
                            </span>
                            <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'var(--size-body)', lineHeight: 1.3 }}>
                              {project.outcome.highlight}
                            </p>
                            {project.outcome.details && (
                              <p style={{ margin: 0, fontSize: 'var(--size-eyebrow)', lineHeight: 1.5, color: project.outcomeBg === 'marigold' ? 'var(--ink-3)' : 'var(--text-muted)' }}>
                                {project.outcome.details}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '24px' }}>
                <button id="coverflow-prev" aria-label="Previous project" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-stamp)', border: '1px solid var(--border-hairline-inverse)', background: 'transparent', color: 'var(--paper-1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                  ‹
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {projects.map((_, i) => (
                    <button key={i} className="coverflow-dot" aria-label={`Go to project ${i + 1}`} style={{ height: '28px', width: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                      <span style={{ display: 'block', flexShrink: 0, height: '8px', width: '8px', borderRadius: 'var(--radius-pill)', background: 'rgba(247,240,223,.3)', transition: 'all 300ms ease' }} />
                    </button>
                  ))}
                </div>
                <button id="coverflow-next" aria-label="Next project" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-stamp)', border: '1px solid var(--border-hairline-inverse)', background: 'transparent', color: 'var(--paper-1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                  ›
                </button>
              </div>

              <p style={{ margin: '24px 0 0', textAlign: 'center', fontSize: 'var(--size-small)', color: 'rgba(247,240,223,.7)' }}>
                Full reports available on request, just{' '}
                <a href="mailto:swayamagrawal17@gmail.com" style={{ color: 'var(--marigold)' }}>
                  ask for a copy
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section aria-labelledby="experience-heading" style={{ position: 'relative', padding: '96px 56px', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ paddingBottom: '40px' }}>
              <SectionHeading eyebrow="Track record" title="Experience & education" headingId="experience-heading" />
            </div>
            <div ref={experienceRef} data-reveal="16" style={{ animation: 'revealIn 640ms var(--ease-out) both', animationTimeline: 'view', animationRange: 'entry 6% cover 28%' }}>
              {[
                {
                  period: 'Jul–Oct 2026',
                  title: 'HR & Market Research Intern',
                  org: 'BIIOS Startup Consulting LLP',
                  desc: 'Screened 100+ resumes and ran end-to-end HR operations while delivering market research, GTM and digital audit work for four clients.',
                },
                {
                  period: '2025–26',
                  title: 'Placement Coordinator',
                  org: 'Indira College of Commerce and Science',
                  desc: 'Coordinated drives for 100+ students with 30+ companies, owning scheduling, communication and applicant records.',
                },
                {
                  period: '2026',
                  title: 'Core Team: YUVAAN',
                  org: 'Indira College of Commerce and Science',
                  desc: 'Tracked 16 events with 8 faculty reps over two weeks with zero scheduling conflicts; built an Excel tracker for 35+ members that halved prize distribution time.',
                },
                {
                  period: '2027',
                  title: 'B.Com',
                  org: 'Indira College of Commerce and Science, Pune University',
                  desc: 'SGPA 9.27. First year at Narsee Monjee College of Commerce and Economics, Mumbai University.',
                },
                {
                  period: '2025',
                  title: 'CMA Foundation',
                  org: 'Institute of Cost Accountants of India',
                  desc: 'Cleared with 276/400 and exemptions in all four papers. Class XII: 88.6%, with the school\'s highest Economics mark at 94%.',
                },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 2fr', gap: '16px 44px', padding: '26px 0', borderTop: '1px solid var(--border-hairline)', borderBottom: idx === 4 ? '1px solid var(--border-hairline)' : 'none' }}>
                  <span data-scrub-number="e" style={{ display: 'inline-block', transformOrigin: 'left center', fontSize: 'var(--size-meta)', letterSpacing: 'var(--ls-meta)', textTransform: 'uppercase', color: 'var(--vermilion-deep)' }}>
                    {item.period}
                  </span>
                  <div>
                    <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h4)', fontWeight: 700, color: 'var(--ink-1)' }}>
                      {item.title}
                    </p>
                    <p style={{ margin: '5px 0 0', fontSize: 'var(--size-small)', color: 'var(--text-muted)' }}>
                      {item.org}
                    </p>
                  </div>
                  <p style={{ margin: 0, fontSize: 'var(--size-small)', lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          aria-labelledby="certifications-heading"
          style={{
            position: 'relative',
            background: 'var(--surface-inverse)',
            color: 'var(--text-on-dark)',
          }}
        >
          <h2 id="certifications-heading" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
            Certifications
          </h2>
          <div id="cert-scroller" style={{ position: 'relative', height: '360vh' }}>
            <div id="cert-scroller-pin" style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px', boxSizing: 'border-box' }}>
              <div
                id="cert-gallery-card"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1160px',
                  height: 'min(640px,82vh)',
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr',
                  background: 'var(--paper-0)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: '0 24px 60px rgba(17,17,17,.14)',
                  overflow: 'hidden',
                }}
              >
                <div className="cert-gallery-list-col" style={{ padding: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', borderRight: '1px solid var(--border-hairline)' }}>
                  <Eyebrow mark color="var(--vermilion-soft)">
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
                          <p className="cert-list-title" style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: 1.2, color: idx === 0 ? 'var(--ink-1)' : 'var(--text-muted)', opacity: idx === 0 ? 1 : 0.45, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'color 400ms,opacity 400ms' }}>
                            {cert.title}
                          </p>
                          <p className="cert-list-meta" style={{ margin: '3px 0 0', fontSize: '10.5px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', opacity: idx === 0 ? 0.85 : 0.4, transition: 'opacity 400ms' }}>
                            {cert.providerMeta}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p style={{ margin: 0, fontSize: 'var(--size-small)', color: 'var(--text-muted)' }}>
                    Scroll to move through each credential, or click a name to jump.
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
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '10.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(247,240,223,.65)' }}>
                            {cert.provider}
                          </span>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', color: 'var(--marigold)' }}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, fontSize: 'var(--size-meta)', fontWeight: 700, color: 'var(--marigold)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
                            Verify ↗
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

        {/* Toolkit Section */}
        <section id="toolkit" aria-labelledby="toolkit-heading" style={{ position: 'relative', padding: '96px 56px', overflow: 'hidden' }}>
          <span data-px="-0.14" aria-hidden="true" style={{ position: 'absolute', left: '-70px', top: '24%', width: '260px', height: '260px', background: 'var(--vermilion)', opacity: 0.12, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto' }}>
            <div style={{ paddingBottom: '48px' }}>
              <SectionHeading eyebrow="Toolkit" title="What I can do for you" headingId="toolkit-heading" />
            </div>
            <div data-reveal="10" style={{ animation: 'revealIn 640ms var(--ease-out) both', animationTimeline: 'view', animationRange: 'entry 6% cover 28%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '36px 0', borderTop: '2px solid var(--ink-1)', paddingTop: '36px' }}>
              <ServiceItem tone="dark" divider={false} icon="✳" title="Finance" description="Financial modeling, cost accounting, quantitative analysis, valuation fundamentals." />
              <ServiceItem tone="dark" icon="✳" title="Analytics" description="Excel with pivot tables, VLOOKUP and models, plus data interpretation." />
              <ServiceItem tone="dark" icon="✳" title="Management" description="Project planning, Agile methods, risk tracking, operations management, team coordination." />
              <ServiceItem tone="dark" icon="✳" title="Certified" description="Google Project Management, Google AI Essentials, UPenn Finance & Quantitative Modeling, Citi and Deloitte simulations." />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ position: 'relative', background: 'var(--surface-accent-alt)', color: 'var(--ink-1)', padding: '110px 56px 40px', overflow: 'hidden' }}>
          <span data-px="0.2" aria-hidden="true" style={{ position: 'absolute', right: '8%', top: '-30px', width: '200px', height: '200px', backgroundImage: 'var(--halftone)', backgroundSize: 'var(--halftone-size)', opacity: 0.28, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'flex-start' }}>
            <Eyebrow mark color="var(--ink-1)">
              Contact
            </Eyebrow>
            <h2
              id="contact-heading"
              style={{
                margin: 0,
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
            <Button variant="primary" size="lg" href="mailto:swayamagrawal17@gmail.com">
              Email me
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer ref={footerRef} style={{ background: 'var(--marigold)', padding: '36px 56px 32px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div data-reveal="17" style={{ animation: 'revealIn 640ms var(--ease-out) both', animationTimeline: 'view', animationRange: 'entry 6% cover 28%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Swayam Agrawal" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '19px', textTransform: 'uppercase', letterSpacing: '-.01em', color: 'var(--ink-1)' }}>
                Swayam Agrawal
              </span>
            </a>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.linkedin.com/in/swayam-agrawal-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-scramble" data-original="in" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: 'var(--radius-stamp)', border: '1px solid var(--border-hairline)', color: 'var(--ink-1)', fontSize: 'var(--size-small)', fontWeight: 700, textDecoration: 'none', cursor: 'pointer' }}>
                in
              </a>
              <a href="mailto:swayamagrawal17@gmail.com" aria-label="Email" className="nav-scramble" data-original="@" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: 'var(--radius-stamp)', border: '1px solid var(--border-hairline)', color: 'var(--ink-1)', fontSize: 'var(--size-small)', fontWeight: 700, textDecoration: 'none', cursor: 'pointer' }}>
                @
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
