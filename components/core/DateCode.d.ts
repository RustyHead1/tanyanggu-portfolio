import React from 'react';

export interface DateCodeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Dot-separated date, e.g. "2025.12" */
  children?: React.ReactNode;
  /** Color tone. Default: 'dim' */
  tone?: 'dim' | 'muted' | 'fg';
  /** Override font-size (CSS length) */
  size?: string;
  style?: React.CSSProperties;
}

/**
 * The brand's YYYY.MM date stamp — quiet, mono, the connective texture
 * of every work's metadata line.
 */
export function DateCode(props: DateCodeProps): JSX.Element;
