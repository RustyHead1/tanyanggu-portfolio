import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional label set into the rule */
  label?: React.ReactNode;
  /** Label position. Default: 'center' */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/** A quiet hairline rule, optionally with an uppercase label set into it. */
export function Divider(props: DividerProps): JSX.Element;
