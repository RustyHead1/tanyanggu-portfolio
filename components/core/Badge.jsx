import React from 'react';

/**
 * Badge — a small status / category marker.
 *
 * Subtler and softer than Tag (no hairline capsule). Used for a single
 * highlighted medium or a state like "New". Three quiet tones plus an
 * 'accent' that's the only place a blue fill is allowed to rest.
 */
export function Badge({ children, tone = 'soft', style, ...rest }) {
  const tones = {
    soft:   { bg: 'var(--tyg-ink-600)', color: 'var(--tyg-fg)',    border: 'transparent' },
    line:   { bg: 'transparent',        color: 'var(--tyg-fg-dim)', border: 'var(--tyg-line-soft)' },
    accent: { bg: 'var(--tyg-accent)',  color: '#fff',             border: 'transparent' },
    invert: { bg: 'var(--tyg-fg)',      color: '#000',             border: 'transparent' },
  };
  const t = tones[tone] || tones.soft;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 8px',
        fontFamily: 'var(--tyg-font-sans)',
        fontSize: '11px',
        fontWeight: 'var(--tyg-w-semi)',
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tyg-tracking-wide)',
        color: t.color,
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: 'var(--tyg-radius-sm)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
