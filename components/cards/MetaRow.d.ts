import React from 'react';

export interface MetaTag { label: string; href?: string; }

export interface MetaRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Date stamp, e.g. "2025.12" */
  date?: string;
  /** Tool/medium tags — strings or {label, href} */
  tags?: Array<string | MetaTag>;
  /** DateCode tone. Default: 'dim' */
  dateTone?: 'dim' | 'muted' | 'fg';
  style?: React.CSSProperties;
}

/** A work's metadata line: DateCode + wrapping row of tool/medium Tags. */
export function MetaRow(props: MetaRowProps): JSX.Element;
