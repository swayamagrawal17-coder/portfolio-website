/**
 * Canonical public origin for the site. Set NEXT_PUBLIC_SITE_URL in the
 * deployment environment; the fallback is only for local development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://swayam-agrawal.vercel.app'
).replace(/\/$/, '');

export const CONTACT_EMAIL = 'swayamagrawal17@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/swayam-agrawal-';
