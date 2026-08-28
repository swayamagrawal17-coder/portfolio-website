import React from 'react';

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: string;
  mark?: boolean;
}

export function Eyebrow({ children, color = 'var(--vermilion)', mark = false, style, ...rest }: EyebrowProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--size-eyebrow)',
        fontWeight: 700,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        ...style,
      }}
      {...rest}
    >
      {mark && (
        <span aria-hidden="true" style={{ fontSize: '1.3em', lineHeight: 0 }}>
          ✳
        </span>
      )}
      {children}
    </span>
  );
}
