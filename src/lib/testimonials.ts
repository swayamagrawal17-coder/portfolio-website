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
const realTestimonials: Testimonial[] = [
  {
    id: 0,
    quote:
      'One of the most hardworking interns Biios had. It was great having you with us. All the best for your future endeavours!',
    name: 'Saartha Bhandari',
    role: 'CEO',
    org: 'BIIOS Startup Consulting LLP',
    sourceUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7505329951517151232/',
  },
];

/**
 * Development-only stand-ins so the layout can be reviewed with the people
 * being asked. The `NODE_ENV` check is replaced at build time, so in a
 * production build this list (names included) is removed from the bundle.
 * When a person's real quote arrives, move them into `realTestimonials`.
 */
const devPlaceholders: Testimonial[] =
  process.env.NODE_ENV === 'development'
    ? [
        { id: 101, quote: null, name: 'Bharat Nagargoje', role: 'Faculty', org: '' },
        { id: 102, quote: null, name: 'Sheetal Deshmukh', role: 'Faculty', org: '' },
        { id: 103, quote: null, name: 'Yogita Sutar', role: 'Faculty', org: '' },
      ]
    : [];

export const visibleTestimonials: Testimonial[] = [...realTestimonials, ...devPlaceholders];
