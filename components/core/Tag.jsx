import React from 'react';

/**
 * Tag — the signature brand atom, redesigned as a terminal token.
 *
 * A geek/minimal metadata token for tool & medium names (UnrealEngine,
 * TouchDesigner, VJ…). The default sheds the old bordered capsule for a
 * borderless mono token with a faint leading sigil; on hover the sigil
 * brightens, the label crosses to electric blue, and a hairline accent
 * underline wipes in from the left — like a focused terminal entry.
 *
 *   variant="hash"     #UnrealEngine     (default — the tag cloud token)
 *   variant="bracket"  [UnrealEngine]
 *   variant="angle"    <UnrealEngine>
 *   variant="outline"  ▍hairline chip — for filters / selectable states
 *
 * Renders as an <a> when href is given (the site's tags are taxonomy links).
 */

const SIGILS = {
  hash:    ['#', ''],
  bracket: ['[', ']'],
  angle:   ['<', '>'],
};

export function Tag({ children, href, active = false, variant = 'hash', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const on = hover || active;

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
  };
  const Cmp = href ? 'a' : 'span';

  const common = {
    fontFamily: 'var(--tyg-font-mono)',
    fontSize: 'var(--tyg-text-xs)',
    fontWeight: 'var(--tyg-w-medium)',
    lineHeight: 1,
    letterSpacing: 'var(--tyg-tracking-mono)',
    whiteSpace: 'nowrap',
    cursor: href || onClick ? 'pointer' : 'default',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  /* ── Outline: a quiet hairline chip for filters / selectable states ── */
  if (variant === 'outline') {
    const chip = {
      ...common,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 9px',
      color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      background: 'transparent',
      border: `1px solid ${on ? 'var(--tyg-accent)' : 'var(--tyg-line-soft)'}`,
      borderRadius: 'var(--tyg-radius)',
      transition: 'color var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease)',
      ...style,
    };
    return (
      <Cmp href={href} style={chip} {...handlers} {...rest}>
        <span style={{ color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg-faint)', marginRight: 6, transition: 'color var(--tyg-dur-fast) var(--tyg-ease)' }}>▍</span>
        {children}
      </Cmp>
    );
  }

  /* ── Default: borderless terminal token with sigil + underline wipe ── */
  const [pre, post] = SIGILS[variant] || SIGILS.hash;

  const token = {
    ...common,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    paddingBottom: 3,
    color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
    transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
    ...style,
  };
  const sigil = {
    color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg-faint)',
    transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
  };
  const underline = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 1,
    width: '100%',
    background: 'var(--tyg-accent)',
    transform: on ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left center',
    transition: 'transform var(--tyg-dur-fast) var(--tyg-ease)',
    pointerEvents: 'none',
  };

  return (
    <Cmp href={href} style={token} {...handlers} {...rest}>
      <span style={sigil}>{pre}</span>
      {children}
      {post && <span style={sigil}>{post}</span>}
      <span style={underline}></span>
    </Cmp>
  );
}

/**
 * TagRow — a wrapping, gap-spaced cluster of Tags.
 */
export function TagRow({ children, style, ...rest }) {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--tyg-space-3)', ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
