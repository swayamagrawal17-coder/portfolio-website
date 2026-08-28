import React from 'react';

interface ServiceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
  divider?: boolean;
}

export function ServiceItem({
  icon,
  title,
  description,
  tone = 'light',
  divider = true,
  style,
  ...rest
}: ServiceItemProps) {
  const onDark = tone === 'light';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        padding: divider ? '0 30px' : '0 30px 0 0',
        borderLeft: divider ? `1px solid ${onDark ? 'var(--border-hairline-inverse)' : 'var(--border-hairline)'}` : 'none',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          color: 'var(--marigold)',
          fontSize: '22px',
          lineHeight: 1,
          display: 'flex',
          height: 26,
          alignItems: 'center',
        }}
      >
        {icon}
      </span>
      <h3
        style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: 'var(--size-h4)',
          color: onDark ? 'var(--paper-1)' : 'var(--ink-1)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--size-small)',
          lineHeight: 1.65,
          color: onDark ? 'rgba(247,240,223,.7)' : 'var(--text-muted)',
        }}
      >
        {description}
      </p>
    </div>
  );
}
