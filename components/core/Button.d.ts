import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label / contents */
  children?: React.ReactNode;
  /** Visual style. Default: 'outline' */
  variant?: 'solid' | 'outline' | 'ghost';
  /** Size. Default: 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor to this href instead of a <button> */
  href?: string;
  /** Native button type. Default: 'button' */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
  /** Stretch to container width */
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Quiet, gallery-formal button. The electric-blue accent only appears on
 * hover/focus — never at rest. Use sparingly; this brand favors plain links.
 *
 * @startingPoint section="Core" subtitle="Buttons — solid / outline / ghost" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
