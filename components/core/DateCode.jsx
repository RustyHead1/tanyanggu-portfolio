import React from 'react';

/**
 * DateCode — the brand's date stamp (e.g. "2025.12").
 *
 * Dot-separated YYYY.MM, set in a quiet tone. The connective texture
 * of the portfolio; pairs with TagRow in a work's metadata line.
 */
export function DateCode({ children, tone = 'dim', size, style, ...rest }) {
  const tones = {
    dim: 'var(--tyg-fg-dim)',
    muted: 'var(--tyg-fg-muted)',
    fg: 'var(--tyg-fg)',
  };
  return (
    <span
      style={{
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: size || 'var(--tyg-text-xs)',
        fontWeight: 'var(--tyg-w-semi)',
        letterSpacing: '0.04em',
        color: tones[tone] || tones.dim,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
