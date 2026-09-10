import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

// Next.js dev mode (React Refresh / webpack HMR runtime) evaluates code with
// eval(), so the dev CSP must allow 'unsafe-eval'. Production builds never eval,
// so the deployed CSP stays locked down. `phase` is the reliable dev signal
// (process.env.NODE_ENV is not yet set when this file is first evaluated).
const buildCsp = (isDev: boolean) =>
  [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');

const securityHeaders = (isDev: boolean) => [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: buildCsp(isDev) },
];

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    poweredByHeader: false,
    eslint: {
      dirs: ['src'],
    },
    images: {
      formats: ['image/avif', 'image/webp'],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders(isDev),
        },
      ];
    },
  };
};

export default nextConfig;
