import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '20px',
        padding: 'clamp(24px, 8vw, 96px)',
        background: 'var(--paper)',
        color: 'var(--ink)',
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-ui)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
        }}
      >
        Error 404
      </p>
      <h1 className="era-display" style={{ fontSize: 'clamp(40px, 10vw, 120px)', maxWidth: '12ch' }}>
        Page not found
      </h1>
      <p style={{ margin: 0, maxWidth: '44ch', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-body)', color: 'var(--ink-soft)' }}>
        That page does not exist. It may have moved, or the link was mistyped.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '16px 30px',
          background: 'var(--ink)',
          color: 'var(--paper)',
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: 'var(--radius-pill)',
          boxShadow: '0 12px 30px -12px rgba(27, 42, 58, 0.55), 0 2px 6px -2px rgba(27, 42, 58, 0.3)',
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
