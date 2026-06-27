import React from 'react';

export interface LangSwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Active language code. Default: 'JA' */
  value?: string;
  /** Available codes. Default: ['JA', 'EN'] */
  options?: string[];
  onChange?: (lang: string) => void;
  style?: React.CSSProperties;
}

/** The bilingual JA / EN language toggle from the site header. */
export function LangSwitch(props: LangSwitchProps): JSX.Element;
