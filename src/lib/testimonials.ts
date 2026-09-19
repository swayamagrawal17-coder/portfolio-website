export interface Testimonial {
  id: number;
  /** Exact words, with the person's permission. `null` marks a placeholder that only exists in development. */
  quote: string | null;
  name: string;
  role: string;
  org: string;
  /** Optional link to the original (e.g. the LinkedIn post). */
  sourceUrl?: string;
}

/**
 * Real, approved testimonials go here. Add one by filling in `quote`, `name`,
 * `role` and `org`. Nothing outside this array can ever reach the live site.
 */
const realTestimonials: Testimonial[] = [];

/**
 * Development-only stand-ins so the layout can be reviewed with the people
 * being asked. The `NODE_ENV` check is replaced at build time, so in a
 * production build this list (names included) is removed from the bundle.
 * When a person's real quote arrives, move them into `realTestimonials`.
 */
const devPlaceholders: Testimonial[] =
  process.env.NODE_ENV === 'development'
    ? [
        { id: 100, quote: null, name: 'CEO name to be added', role: 'CEO', org: 'BIIOS Startup Consulting LLP' },
        { id: 101, quote: null, name: 'Bharat Nagargoje', role: 'Faculty', org: '' },
        { id: 102, quote: null, name: 'Sheetal Deshmukh', role: 'Faculty', org: '' },
        { id: 103, quote: null, name: 'Yogita Sutar', role: 'Faculty', org: '' },
      ]
    : [];

export const visibleTestimonials: Testimonial[] = [...realTestimonials, ...devPlaceholders];
