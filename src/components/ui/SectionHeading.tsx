import React from 'react';
import { Eyebrow } from './Eyebrow';
import { Scribble } from './Scribble';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  face?: 'serif' | 'display';
  tone?: 'dark' | 'light';
  scribble?: boolean;
  scribbleColor?: string;
  align?: 'left' | 'center';
  headingId?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  face = 'serif',
  tone = 'dark',
  scribble = true,
  scribbleColor,
  align = 'left',
  headingId,
  children,
  style,
  ...rest
}: SectionHeadingProps) {
  const onDark = tone === 'light';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && <Eyebrow color={onDark ? 'var(--marigold)' : 'var(--vermilion-deep)'}>{eyebrow}</Eyebrow>}
      <h2
        id={headingId}
        style={{
          margin: 0,
          fontFamily: face === 'display' ? 'var(--font-display)' : 'var(--font-serif)',
          fontWeight: 400,
          textTransform: face === 'display' ? 'uppercase' : 'none',
          fontSize: face === 'display' ? 'var(--size-display)' : 'var(--size-h1)',
          lineHeight: face === 'display' ? 'var(--lh-display)' : 'var(--lh-h1)',
          letterSpacing: face === 'display' ? 'var(--ls-display)' : '-0.01em',
          color: onDark ? 'var(--paper-1)' : 'var(--text-display)',
        }}
      >
        {title}
      </h2>
      {scribble && (
        <Scribble
          variant="squiggle"
          width={112}
          color={scribbleColor || (onDark ? 'var(--marigold)' : 'var(--vermilion)')}
        />
      )}
      {children}
    </div>
  );
}
