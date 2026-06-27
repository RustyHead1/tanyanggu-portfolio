import React from 'react';

/**
 * Divider — a quiet hairline rule, optionally with a centered or
 * leading label. Uses the soft 14%-opacity off-white line.
 */
export function Divider({ label, align = 'center', style, ...rest }) {
  const line = { flex: 1, height: 1, background: 'var(--tyg-line-soft)', border: 0 };

  if (!label) {
    return <hr style={{ ...line, width: '100%', margin: 'var(--tyg-space-6) 0', ...style }} {...rest} />;
  }

  const lbl = (
    <span style={{
      fontFamily: 'var(--tyg-font-sans)',
      fontSize: 'var(--tyg-text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tyg-tracking-wide)',
      color: 'var(--tyg-fg-faint)',
      whiteSpace: 'nowrap',
    }}>{label}</span>
  );

  return (
    <div
      role="separator"
      style={{ display: 'flex', alignItems: 'center', gap: 'var(--tyg-space-4)', margin: 'var(--tyg-space-6) 0', ...style }}
      {...rest}
    >
      {align !== 'left' && <span style={line} />}
      {lbl}
      <span style={line} />
    </div>
  );
}
