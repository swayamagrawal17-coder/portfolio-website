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
    const undoSplits: Array<() => void> = [];

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Phones and tablets skip the effects that make the browser re-lay-out or
      // repaint big areas every frame (blur, letter-spacing, corner radius).
      const light = window.matchMedia('(pointer: coarse), (max-width: 900px)').matches;
      const phone = window.matchMedia('(max-width: 640px)').matches;

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

      // Hero scroll cue: gone within the first stretch of scrolling
      const heroCue = document.querySelector('[data-era-hero-cue]');
      if (heroCue && heroSection) {
        gsap.to(heroCue, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: { trigger: heroSection, start: 'top top', end: '+=180', scrub: true },
        });
      }

      // Big section headlines: rise + settle. immediateRender:false so a headline
      // is never left stranded dim if its trigger can't measure.
      gsap.utils.toArray<HTMLElement>('[data-era-scrub]').forEach((el) => {
        gsap.fromTo(
          el,
          light ? { yPercent: 16, opacity: 0.3 } : { yPercent: 16, opacity: 0.3, letterSpacing: '0.04em' },
          {
            yPercent: 0,
            opacity: 1,
            ...(light ? {} : { letterSpacing: '-0.02em' }),
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

      // Scroll-progress hairline across the top of the viewport
      const progress = document.querySelector<HTMLElement>('[data-era-progress]');
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: 'max',
            scrub: 0.3,
          },
        });
      }

      // Ink-fill: words go from faint to full as the paragraph crosses the
      // viewport. Words are wrapped in spans for the effect and the original
      // markup is restored on cleanup.
      gsap.utils.toArray<HTMLElement>('[data-era-ink]').forEach((el) => {
        if (phone) {
          // ~200 individually fading words is too much for a phone: fade the paragraph as one.
          gsap.fromTo(
            el,
            { opacity: 0.2 },
            {
              opacity: 1,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 55%', scrub: true },
            }
          );
          return;
        }
        const original = el.innerHTML;
        const words = (el.textContent ?? '').trim().split(/\s+/);
        el.innerHTML = words.map((w) => `<span data-ink-word>${w.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span>`).join(' ');
        undoSplits.push(() => {
          el.innerHTML = original;
        });
        gsap.fromTo(
          el.querySelectorAll('[data-ink-word]'),
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              end: 'bottom 50%',
              scrub: true,
            },
          }
        );
      });

      // Portrait: wipes up from its base as it enters, then drifts slowly
      // against the scroll for a touch of depth.
      gsap.utils.toArray<HTMLElement>('[data-era-portrait]').forEach((fig) => {
        gsap.fromTo(
          fig,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            immediateRender: false,
            scrollTrigger: { trigger: fig, start: 'top 95%', end: 'top 50%', scrub: true },
          }
        );
        gsap.fromTo(
          fig,
          { y: 36 },
          {
            y: -36,
            ease: 'none',
            immediateRender: false,
            scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });

      // Footer: plays once when it comes into view. Wordmark letters rise out
      // of a mask, links and the LinkedIn mark stagger in, the bottom rule draws.
      const footer = document.querySelector<HTMLElement>('[data-era-footer]');
      if (footer) {
        const mark = footer.querySelector<HTMLElement>('[data-era-footer-mark]');
        let chars: HTMLElement[] = [];
        if (mark) {
          const original = mark.innerHTML;
          const text = mark.textContent ?? '';
          mark.innerHTML = Array.from(text)
            .map((c) =>
              c === ' '
                ? '<span style="display:inline-block;width:0.3em"></span>'
                : `<span style="display:inline-block;overflow:hidden;vertical-align:top"><span data-footer-char style="display:inline-block">${c.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span></span>`
            )
            .join('');
          undoSplits.push(() => {
            mark.innerHTML = original;
          });
          chars = Array.from(mark.querySelectorAll<HTMLElement>('[data-footer-char]'));
        }
        const links = footer.querySelectorAll('nav li');
        const social = footer.querySelectorAll('a[aria-label="LinkedIn"]');
        const rule = footer.querySelector<HTMLElement>('[data-era-footer-rule]');
        const meta = rule?.parentElement ? Array.from(rule.parentElement.children).filter((c) => c !== rule) : [];
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out', immediateRender: false },
          scrollTrigger: { trigger: footer, start: 'top 94%', toggleActions: 'play none none reverse' },
        });
        if (chars.length) tl.fromTo(chars, { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.035 }, 0);
        tl.fromTo(links, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.07 }, 0.15);
        tl.fromTo(social, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(2)' }, 0.45);
        if (rule) tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0.3);
        if (meta.length) tl.fromTo(meta, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.09 }, 0.6);
      }

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
        if (light) return; // fixed, smaller radius in CSS on phones
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
          light ? { scale: 0.78, autoAlpha: 0.25 } : { scale: 0.78, autoAlpha: 0.25, filter: 'blur(6px)' },
          {
            scale: 1,
            autoAlpha: 1,
            ...(light ? {} : { filter: 'blur(0px)' }),
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

    // Toolkit (desktop / tablet): rule draws, columns rise in sequence.
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 641px)', () => {
      // Toolkit: the top rule draws across, then the four columns rise in
      // one after another with their markers spinning into place, all tied
      // to the scroll so it follows your hand.
      const toolkit = document.querySelector<HTMLElement>('[data-era-toolkit]');
      if (toolkit) {
        const rule = toolkit.querySelector<HTMLElement>('[data-era-rule]');
        const items = Array.from(
          toolkit.querySelector<HTMLElement>('[data-era-toolkit-grid]')?.children ?? []
        ) as HTMLElement[];
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: toolkit, start: 'top 88%', end: 'top 32%', scrub: 0.6 },
        });
        if (rule) tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0);
        items.forEach((item, i) => {
          const at = 0.15 + i * 0.14;
          tl.fromTo(item, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, at);
          const mark = item.children[0];
          if (mark) {
            tl.fromTo(
              mark,
              { scale: 0, rotation: -120 },
              { scale: 1, rotation: 0, duration: 0.3, ease: 'back.out(2)' },
              at + 0.1
            );
          }
        });
      }

      ScrollTrigger.refresh();
    });

    // Phones: numbers as a stack of cards, toolkit items that wipe in and
    // dim behind you.
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 640px)', () => {
      // Numbers: a scattered pile. Cards are tossed on, pin near the top and
      // stack up crooked; each figure counts up as its card lands.
      const cards = gsap.utils.toArray<HTMLElement>('[data-era-stat]');
      const finals: Array<() => void> = [];
      // Each card lands on the pile with its own tilt and sideways drift.
      const tilt = [-3.5, 2.5, -1.5, 4, -2.5, 3, -4, 1.5, -2];
      const drift = [-10, 12, -6, 10, -12, 6, -8, 12, -4];
      cards.forEach((card, i) => {
        const rot = tilt[i % tilt.length];
        const dx = drift[i % drift.length];
        gsap.set(card, { rotation: rot, x: dx });
        gsap.fromTo(
          card,
          { y: 150, rotation: rot * 3.2, x: dx * 2.5, opacity: 0 },
          {
            y: 0,
            rotation: rot,
            x: dx,
            opacity: 1,
            ease: 'none',
            immediateRender: false,
            scrollTrigger: { trigger: card, start: 'top 100%', end: 'top 74%', scrub: true },
          }
        );
        const el = card.querySelector<HTMLElement>('[data-count-to]');
        if (!el) return;
        const target = parseFloat(el.getAttribute('data-count-to') || '0');
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        el.textContent = (0).toFixed(decimals);
        finals.push(() => {
          el.textContent = target.toFixed(decimals);
        });
        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            const o = { v: 0 };
            gsap.to(o, {
              v: target,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = o.v.toFixed(decimals);
              },
              onComplete: () => {
                el.textContent = target.toFixed(decimals);
              },
            });
          },
        });
      });

      // Toolkit: title wipes in, marker spins, copy rises; the item then
      // dims as it leaves so the one you are reading holds the light.
      gsap.utils.toArray<HTMLElement>('[data-era-toolkit-grid] > div').forEach((item) => {
        const mark = item.children[0];
        const title = item.children[1];
        const desc = item.children[2];
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: item, start: 'top 90%', end: 'top 50%', scrub: 0.5 },
        });
        tl.fromTo(item, { opacity: 0.15 }, { opacity: 1, duration: 0.5 }, 0);
        if (mark) tl.fromTo(mark, { scale: 0, rotation: -120 }, { scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2)' }, 0);
        if (title) tl.fromTo(title, { clipPath: 'inset(0 100% 0 0)', x: -22 }, { clipPath: 'inset(0 0% 0 0)', x: 0, duration: 0.7 }, 0.1);
        if (desc) tl.fromTo(desc, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.3);
        gsap.fromTo(
          item,
          { opacity: 1 },
          {
            opacity: 0.3,
            ease: 'none',
            immediateRender: false,
            scrollTrigger: { trigger: item, start: 'bottom 34%', end: 'bottom 6%', scrub: true },
          }
        );
      });

      ScrollTrigger.refresh();
      return () => {
        finals.forEach((f) => f());
      };
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
      const nodes = gsap.utils.toArray<HTMLElement>('[data-era-node]');
      gsap.set(lineEl, { scaleY: 0 });
      gsap.set(nodes, { scale: 0, opacity: 0 });

      // Each dot pops at the exact moment the drawing line reaches it. Cards on
      // a phone have different heights, so a dot's real position along the
      // line is measured (on every layout refresh) instead of assumed to be
      // evenly spaced, which used to make dots appear after the line had passed.
      let fractions: number[] = [];
      const shown = nodes.map(() => false);
      const pops = nodes.map((node) =>
        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2.2)', paused: true, immediateRender: false }
        )
      );
      const measure = () => {
        const line = timelineEl.getBoundingClientRect();
        fractions = nodes.map((n) => {
          const r = n.getBoundingClientRect();
          return (r.top + r.height / 2 - line.top) / Math.max(line.height, 1);
        });
      };
      const apply = (progress: number) => {
        gsap.set(lineEl, { scaleY: progress });
        nodes.forEach((_, i) => {
          const reached = progress >= fractions[i];
          if (reached && !shown[i]) {
            shown[i] = true;
            pops[i].play();
          } else if (!reached && shown[i]) {
            shown[i] = false;
            pops[i].reverse();
          }
        });
      };
      ScrollTrigger.create({
        trigger: timelineEl,
        start: 'top 80%',
        end: 'bottom 70%',
        onRefresh: (self) => {
          measure();
          apply(self.progress);
        },
        onUpdate: (self) => apply(self.progress),
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
      undoSplits.forEach((undo) => undo());
    };
  }, []);
}
