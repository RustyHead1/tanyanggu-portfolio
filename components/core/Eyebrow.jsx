import React from 'react';

/**
 * Eyebrow — small uppercase, wide-tracked structural label.
 *
 * Used above section titles ("Selected Works", "Profile"). One of the
 * few places the brand uses uppercase; tracking does the work.
 */
export function Eyebrow({ children, tone = 'dim', as = 'div', style, ...rest }) {
  const tones = {
    dim: 'var(--tyg-fg-dim)',
    faint: 'var(--tyg-fg-faint)',
    accent: 'var(--tyg-accent)',
    fg: 'var(--tyg-fg)',
  };
  const Cmp = as;
  return (
    <Cmp
      style={{
        fontFamily: 'var(--tyg-font-sans)',
        fontSize: 'var(--tyg-text-xs)',
        fontWeight: 'var(--tyg-w-semi)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tyg-tracking-wider)',
        color: tones[tone] || tones.dim,
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Cmp>
  );
}
