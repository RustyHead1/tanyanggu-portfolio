import React from 'react';

/**
 * Button — Tan Yanggu design system
 *
 * Quiet, gallery-formal action. Three variants:
 *  - solid   : light fill (#f3f3f3) + black text; inverts to electric blue on hover
 *  - outline : hairline off-white border; fills blue on hover
 *  - ghost   : text-only; cross-fades to blue
 * The accent (#007fff) only appears on interaction — never at rest.
 */
export function Button({
  children,
  variant = 'outline',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '9px 18px', font: '13px' },
    md: { padding: '13px 30px', font: '16px' },
    lg: { padding: '16px 38px', font: '17px' },
  };
  const s = sizes[size] || sizes.md;
  const hot = hover && !disabled;

  const palette = {
    solid: {
      bg: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      color: hot ? '#fff' : '#000',
      border: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
    },
    outline: {
      bg: hot ? 'var(--tyg-accent)' : 'transparent',
      color: hot ? '#fff' : 'var(--tyg-fg)',
      border: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
    },
    ghost: {
      bg: 'transparent',
      color: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      border: 'transparent',
    },
  }[variant] || {};

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55em',
    width: fullWidth ? '100%' : 'auto',
    padding: s.padding,
    fontFamily: 'var(--tyg-font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--tyg-w-medium)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    color: palette.color,
    background: palette.bg,
    border: `1px solid ${palette.border}`,
    borderRadius: 'var(--tyg-radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    transform: active && !disabled ? 'translateY(0.5px)' : 'none',
    transition: 'background-color var(--tyg-dur-fast) var(--tyg-ease), color var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease)',
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: disabled ? undefined : onClick,
  };

  if (href && !disabled) {
    return (
      <a href={href} style={base} {...handlers} {...rest}>{children}</a>
    );
  }
  return (
    <button type={type} disabled={disabled} style={base} {...handlers} {...rest}>
      {children}
    </button>
  );
}
