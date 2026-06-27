import React from 'react';

export interface NavLinkItem {
  label: string;
  href: string;
  current?: boolean;
}

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark primary text. Default: 'Tan Yanggu' */
  brand?: string;
  /** Wordmark suffix after the pipe. Default: 'Portfolio' */
  brandSuffix?: string;
  brandHref?: string;
  /** Nav items */
  links?: NavLinkItem[];
  /** Active language. Default: 'JA' */
  lang?: string;
  onLangChange?: (lang: string) => void;
  /** Stick to top. Default: true */
  sticky?: boolean;
  /** Full-bleed inner row — drops the centered max-width container so the
   *  nav hugs the viewport's right edge at any resolution. Default: false */
  fluid?: boolean;
  style?: React.CSSProperties;
}

/**
 * The site's minimal sticky header: text wordmark + terse uppercase nav
 * with grow-in underline + LangSwitch, on the void.
 *
 * @startingPoint section="Navigation" subtitle="NavBar — minimal site header" viewport="1240x80"
 */
export function NavBar(props: NavBarProps): JSX.Element;
