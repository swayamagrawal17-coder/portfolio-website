import React from 'react';

type ScribbleVariant = 'squiggle' | 'rule' | 'dots' | 'zigzag';

interface ScribbleProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ScribbleVariant;
  color?: string;
  width?: number;
}

export function Scribble({
  variant = 'squiggle',
  color = 'var(--vermilion)',
  width = 120,
  style,
  ...rest
}: ScribbleProps) {
  const common: React.CSSProperties = {
    display: 'block',
    width,
    ...style,
  };

  if (variant === 'rule') {
    return (
      <span
        aria-hidden="true"
        style={{
          ...common,
          height: 4,
          background: color,
          borderRadius: 2,
        }}
        {...rest}
      />
    );
  }

  if (variant === 'dots') {
    return (
      <span
        aria-hidden="true"
        style={{
          ...common,
          height: 34,
          backgroundImage: 'var(--halftone)',
          backgroundSize: 'var(--halftone-size)',
          opacity: 0.9,
        }}
        {...rest}
      />
    );
  }

  const amp = variant === 'zigzag' ? '4px' : '3px';

  return (
    <span
      aria-hidden="true"
      style={{
        ...common,
        height: 14,
        color,
        textDecorationLine: 'underline',
        textDecorationStyle: 'wavy',
        textDecorationThickness: amp,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        lineHeight: '10px',
      }}
      {...rest}
    >
      {' '.repeat(60)}
    </span>
  );
}
