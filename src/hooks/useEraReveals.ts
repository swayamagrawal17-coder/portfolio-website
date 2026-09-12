'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Master scroll choreography for the ERA-style redesigned sections.
 * Everything lives inside gsap.matchMedia(); the reduced-motion branch is a
 * no-op so sections render fully static (see globals.css for the CSS fallback).
 */
export function useEraReveals() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero lockup: drift + fade as it leaves
      const heroLockup = document.querySelector('[data-era-hero-lockup]');
      const heroSection = document.querySelector('[data-era-hero]');
      if (heroLockup && heroSection) {
        gsap.to(heroLockup, {
          yPercent: -12,
          scale: 0.86,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Big section headlines: rise + settle. immediateRender:false so a headline
      // is never left stranded dim if its trigger can't measure.
      gsap.utils.toArray<HTMLElement>('[data-era-scrub]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 16, opacity: 0.3, letterSpacing: '0.04em' },
          {
            yPercent: 0,
            opacity: 1,
            letterSpacing: '-0.02em',
            ease: 'none',
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 48%',
              scrub: true,
            },
          }
        );
      });

      // Staggered content reveals
      gsap.utils.toArray<HTMLElement>('[data-era-reveal]').forEach((group) => {
        const kids = group.children.length ? Array.from(group.children) : [group];
        gsap.from(kids, {
          y: 26,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          immediateRender: false,
          scrollTrigger: { trigger: group, start: 'top 85%' },
        });
      });

      // SVG line draw-in (any remaining .era-draw-path elements)
      gsap.utils.toArray<SVGPathElement>('.era-draw-path').forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: path.closest('[data-era-draw-trigger]') || path,
            start: 'top 78%',
            end: 'bottom 55%',
            scrub: true,
          },
        });
      });

      // ERA arch reveal (Work): a navy dome sweeps up from the foot of the frame
      // to fill it, carrying the "Five projects" title. The "pinning" is a
      // position:sticky stage (see page.tsx) — NO ScrollTrigger pin — and GSAP
      // just scrubs transforms/opacity against the tall runway. If this never
      // runs, the dome sits at its resting (full) CSS state and the section reads
      // fine (immediateRender:false keeps nothing stranded).
      const archRunway = document.querySelector<HTMLElement>('[data-era-arch-reveal]');
      const archPanel = archRunway?.querySelector<HTMLElement>('[data-era-arch-panel]');
      const archLabel = archRunway?.querySelector<SVGElement>('[data-era-arch-label]');
      const archInner = archRunway?.querySelector<HTMLElement>('[data-era-arch-inner]');
      if (archRunway && archPanel) {
        const archTl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: archRunway,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
        archTl.fromTo(
          archPanel,
          { clipPath: 'ellipse(88% 15% at 50% 100%)' },
          { clipPath: 'ellipse(150% 175% at 50% 100%)' },
          0,
        );
        // the curved label drifts further up and fades as the navy rises
        if (archLabel) archTl.to(archLabel, { yPercent: -120, opacity: 0 }, 0.02);
        // the heading isn't animated — it sits centred and the rising navy panel
        // uncovers it, so by the time the blue has filled the frame it's fully there
        if (archInner) archTl.from(archInner, { y: 26 }, 0.12);
      }

      // Arched "docking" of the Certifications section: the big top radius
      // flattens to a straight edge as the section reaches the top
      gsap.utils.toArray<HTMLElement>('[data-era-arch]').forEach((el) => {
        gsap.fromTo(
          el,
          { borderTopLeftRadius: 150, borderTopRightRadius: 150 },
          {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'top 45%',
              scrub: true,
            },
          }
        );
      });

      // Work coverflow: the whole stage rises + fades in once
      const workStage = document.querySelector<HTMLElement>('[data-era-work-stage]');
      if (workStage) {
        gsap.from(workStage, {
          y: 90,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: workStage, start: 'top 80%' },
        });
      }

      // Certifications: the gallery card zooms into place as the pinned zone
      // is entered, then useCertScroller takes over the per-credential crossfade
      const certCard = document.querySelector<HTMLElement>('[data-era-cert-card]');
      const certSection = document.getElementById('certifications');
      if (certCard && certSection) {
        gsap.fromTo(
          certCard,
          { scale: 0.78, autoAlpha: 0.25, filter: 'blur(6px)' },
          {
            scale: 1,
            autoAlpha: 1,
            filter: 'blur(0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: certSection,
              start: 'top bottom',
              end: 'top 25%',
              scrub: true,
            },
          }
        );
      }

      ScrollTrigger.refresh();
    });

    // Proof "by the numbers": desktop / tablet only. A position:sticky stage
    // (see page.tsx) holds the row centred; GSAP scrubs it left across the tall
    // runway. No ScrollTrigger pin — that keeps the About section a clean beat
    // between this and the Work arch reveal.
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 641px)', () => {
      const proofRunway = document.querySelector<HTMLElement>('[data-era-proof-runway]');
      const proofTrack = document.querySelector<HTMLElement>('[data-era-proof-track]');
      if (!proofRunway || !proofTrack) return;
      const dist = () => Math.max(0, proofTrack.scrollWidth - window.innerWidth + 140);
      gsap.fromTo(
        proofTrack,
        { x: 0 },
        {
          x: () => -dist(),
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: proofRunway,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        }
      );
      ScrollTrigger.refresh();
    });

    // Experience timeline wave — desktop/tablet: draws itself left-to-right as
    // you scroll the section, and each node pops the moment the drawing line
    // reaches it. Width-gated so it doesn't fight the phone version below for
    // control of the same [data-era-node] dots.
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 901px)', () => {
      const wavePath = document.querySelector<SVGPathElement>('.era-wave-path');
      if (!wavePath) return;
      const waveSection = wavePath.closest('section') || wavePath;
      const len = wavePath.getTotalLength();
      gsap.set(wavePath, { strokeDasharray: len, strokeDashoffset: len });
      const nodes = gsap.utils.toArray<HTMLElement>('[data-era-node]');

      const waveTl = gsap.timeline({
        defaults: { ease: 'none', immediateRender: false },
        scrollTrigger: {
          trigger: waveSection,
          start: 'top 72%',
          end: 'bottom 78%',
          scrub: 0.5,
        },
      });
      waveTl.to(wavePath, { strokeDashoffset: 0, duration: 1 }, 0);
      nodes.forEach((node, i) => {
        // nodes sit at 10/30/50/70/90% along the line → pop at the matching
        // point of the draw
        const at = (i + 0.5) / Math.max(nodes.length, 1);
        waveTl.fromTo(
          node,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.07, ease: 'back.out(2.2)' },
          at,
        );
      });
      ScrollTrigger.refresh();
    });

    // Experience timeline "string" — phones: the stacked-card layout swaps the
    // horizontal wave for a single vertical line running the length of the
    // list. It now draws top-to-bottom as the list scrolls by (it used to be
    // a plain always-visible CSS border), with the same nodes popping in step.
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 900px)', () => {
      const lineEl = document.querySelector<HTMLElement>('.era-timeline-line-mobile');
      const timelineEl = document.querySelector<HTMLElement>('.era-timeline');
      if (!lineEl || !timelineEl) return;
      gsap.set(lineEl, { scaleY: 0 });
      const nodes = gsap.utils.toArray<HTMLElement>('[data-era-node]');

      const waveTl = gsap.timeline({
        defaults: { ease: 'none', immediateRender: false },
        scrollTrigger: {
          trigger: timelineEl,
          start: 'top 80%',
          end: 'bottom 70%',
          scrub: 0.5,
        },
      });
      waveTl.to(lineEl, { scaleY: 1, duration: 1 }, 0);
      nodes.forEach((node, i) => {
        const at = (i + 0.5) / Math.max(nodes.length, 1);
        waveTl.fromTo(
          node,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.07, ease: 'back.out(2.2)' },
          at,
        );
      });
      ScrollTrigger.refresh();
    });

    // Recompute once everything has settled (fonts, images) and whenever the
    // tab returns to the foreground. The latter is load-bearing: if the page
    // first renders while hidden (background tab, hidden preview pane) the
    // viewport measures wrong and every pin/scrub is computed with a zero
    // range, so it must re-measure when it becomes visible.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.addEventListener('visibilitychange', refresh);
    const settle = window.setTimeout(refresh, 600);

    return () => {
      window.clearTimeout(settle);
      window.removeEventListener('load', refresh);
      document.removeEventListener('visibilitychange', refresh);
      mm.revert();
    };
  }, []);
}
