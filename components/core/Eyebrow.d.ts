import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Color tone. Default: 'dim' */
  tone?: 'dim' | 'faint' | 'accent' | 'fg';
  /** Element tag. Default: 'div' */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/**
 * Small uppercase, wide-tracked structural label above section titles.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
