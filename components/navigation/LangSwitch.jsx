import React from 'react';

/**
 * LangSwitch — the bilingual JA / EN toggle.
 *
 * The portfolio is JA-default and bilingual; this is the language pill.
 * Active language is plain off-white; the other fades to blue on hover.
 */
export function LangSwitch({ value = 'JA', options = ['JA', 'EN'], onChange, style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--tyg-space-2)', ...style }} {...rest}>
      {options.map((opt, i) => {
        const isActive = opt === value;
        const isHot = hover === opt && !isActive;
        return (
          <React.Fragment key={opt}>
            {i > 0 && <span style={{ color: 'var(--tyg-fg-faint)', fontSize: '12px' }}>/</span>}
            <button
              onClick={() => onChange && onChange(opt)}
              onMouseEnter={() => setHover(opt)}
              onMouseLeave={() => setHover(null)}
              style={{
                appearance: 'none', background: 'none', border: 0, padding: '2px 1px',
                cursor: 'pointer',
                fontFamily: 'var(--tyg-font-sans)', fontSize: 'var(--tyg-text-xs)',
                fontWeight: isActive ? 'var(--tyg-w-semi)' : 'var(--tyg-w-regular)',
                textTransform: 'uppercase', letterSpacing: 'var(--tyg-tracking-wide)',
                color: isActive ? 'var(--tyg-fg)' : (isHot ? 'var(--tyg-accent)' : 'var(--tyg-fg-dim)'),
                transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
              }}
            >
              {opt}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}
