import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Tone. Default: 'soft' */
  tone?: 'soft' | 'line' | 'accent' | 'invert';
  style?: React.CSSProperties;
}

/**
 * Small uppercase status / category marker. Softer than Tag; 'accent'
 * is the one place a resting blue fill is permitted.
 */
export function Badge(props: BadgeProps): JSX.Element;
