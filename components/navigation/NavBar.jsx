import React from 'react';
import { LangSwitch } from './LangSwitch.jsx';

function NavLink({ label, href, current }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        fontFamily: 'var(--tyg-font-sans)',
        fontSize: 'var(--tyg-text-sm)',
        letterSpacing: 'var(--tyg-tracking-wide)',
        textTransform: 'uppercase',
        color: hover ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
        transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
        paddingBottom: '3px',
      }}
    >
      {label}
      <span style={{
        position: 'absolute', left: 0, bottom: 0, height: 1, width: '100%',
        background: 'currentColor',
        transform: (hover || current) ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--tyg-dur) var(--tyg-ease)',
      }} />
    </a>
  );
}

/**
 * NavBar — the site's minimal sticky header.
 *
 * Text wordmark left, terse uppercase nav + LangSwitch right. Underline
 * grows in on hover (the Astra "underline" menu style). Sits on the void.
 */
export function NavBar({
  brand = 'Tan Yanggu',
  brandSuffix = 'Portfolio',
  brandHref = 'index.html',
  links = [
    { label: 'Works', href: 'works/index.html', current: true },
    { label: 'Profile', href: 'profile/index.html' },
    { label: 'Contact', href: 'contact/index.html' },
  ],
  lang = 'JA',
  onLangChange,
  sticky = true,
  fluid = false,
  style,
  ...rest
}) {
  return (
    <header
      style={{
        position: sticky ? 'sticky' : 'static', top: 0, zIndex: 50,
        background: 'var(--tyg-bg)',
        borderBottom: '1px solid var(--tyg-line-soft)',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        maxWidth: fluid ? 'none' : 'var(--tyg-container-wide)', margin: '0 auto',
        padding: '18px clamp(20px, 5vw, 72px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--tyg-space-5)',
      }}>
        <a href={brandHref} style={{
          fontFamily: 'var(--tyg-font-display)', fontSize: 'var(--tyg-text-xl)',
          fontWeight: 'var(--tyg-w-regular)', color: 'var(--tyg-fg-title)',
        }}>
          {brand}
          {brandSuffix && (
            <span style={{ color: 'var(--tyg-fg-faint)', fontWeight: 'var(--tyg-w-light)', margin: '0 8px' }}>|</span>
          )}
          {brandSuffix && <span style={{ color: 'var(--tyg-fg-title)' }}>{brandSuffix}</span>}
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--tyg-space-6)' }}>
          {links.map((l, i) => <NavLink key={i} {...l} />)}
          <LangSwitch value={lang} onChange={onLangChange} />
        </nav>
      </div>
    </header>
  );
}
