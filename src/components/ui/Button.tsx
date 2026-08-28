import React from 'react';

type ButtonVariant =
  | 'primary'
  | 'navy'
  | 'outlineNavy'
  | 'outlineLight'
  | 'dark'
  | 'accent'
  | 'outline'
  | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const base: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontWeight: 700,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
  textDecoration: 'none',
  lineHeight: 1,
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    fontSize: '10.5px',
    padding: '10px 18px',
  },
  md: {
    fontSize: '11.5px',
    padding: '14px 26px',
  },
  lg: {
    fontSize: '13px',
    padding: '18px 34px',
  },
};

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--marigold)',
    color: 'var(--ink-1)',
    borderRadius: 'var(--radius-pill)',
  },
  navy: {
    background: 'var(--navy)',
    color: 'var(--cream-2)',
    borderRadius: 'var(--radius-lg)',
  },
  outlineNavy: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '2px solid var(--navy)',
    borderRadius: 'var(--radius-lg)',
  },
  outlineLight: {
    background: 'transparent',
    color: 'var(--paper-1)',
    border: '2px solid var(--paper-1)',
    borderRadius: 'var(--radius-pill)',
  },
  dark: {
    background: 'var(--ink-1)',
    color: 'var(--paper-1)',
    borderRadius: 'var(--radius-pill)',
  },
  accent: {
    background: 'var(--vermilion)',
    color: 'var(--paper-1)',
    borderRadius: 'var(--radius-pill)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-1)',
    border: '2px solid var(--ink-1)',
    borderRadius: 'var(--radius-pill)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-1)',
    padding: 0,
    borderBottom: '2px solid var(--vermilion)',
    borderRadius: 0,
  },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  disabled = false,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: ButtonProps) {
  const Tag = href ? 'a' : 'button';
  const s: React.CSSProperties = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(variant === 'ghost' ? { padding: '0 0 6px' } : {}),
    ...(disabled ? { opacity: 0.38, pointerEvents: 'none' } : {}),
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    (e.currentTarget as any).style.transform = 'var(--hover-lift)';
    onMouseEnter?.(e as any);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    (e.currentTarget as any).style.transform = 'none';
    onMouseLeave?.(e as any);
  };

  const props = {
    style: s,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...(href ? { href } : {}),
    ...(!href ? { disabled } : {}),
    ...rest,
  };

  return React.createElement(
    Tag,
    props,
    children,
    arrow && (
      <span key="arrow" style={{ fontSize: '1.15em', lineHeight: 0, transform: 'translateY(1px)' }}>
        →
      </span>
    )
  );
}
