import React from 'react';

type StampTone = 'marigold' | 'accent' | 'outline' | 'outlineLight';

interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: StampTone;
  size?: number;
  rotate?: number;
}

const tones: Record<StampTone, React.CSSProperties> = {
  marigold: {
    background: 'var(--marigold)',
    color: 'var(--ink-1)',
    border: 'none',
  },
  accent: {
    background: 'var(--vermilion)',
    color: 'var(--paper-1)',
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-1)',
    border: '2px solid var(--ink-1)',
  },
  outlineLight: {
    background: 'transparent',
    color: 'var(--paper-1)',
    border: '2px solid var(--paper-1)',
  },
};

export function Stamp({ children, tone = 'marigold', size = 118, rotate = -6, style, ...rest }: StampProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 'var(--radius-stamp)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '6px',
        padding: '14px',
        transform: `rotate(${rotate}deg)`,
        fontFamily: 'var(--font-ui)',
        fontSize: '9.5px',
        fontWeight: 700,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        lineHeight: 1.45,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
