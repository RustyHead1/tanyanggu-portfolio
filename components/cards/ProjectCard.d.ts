import React from 'react';
import { MetaTag } from './MetaRow';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Thumbnail image URL */
  image: string;
  /** Work title (may be mixed-script) */
  title: string;
  /** Date stamp, e.g. "2025.12" */
  date?: string;
  /** Tool/medium tags — strings or {label, href} */
  tags?: Array<string | MetaTag>;
  /** Link target for thumbnail + title */
  href?: string;
  /** Thumbnail aspect ratio. Default: '16 / 9' */
  ratio?: string;
  /** Enable mouse-tracked 3D tilt on the thumbnail (image only; text stays put). Default: false */
  tilt?: boolean;
  /** CSS object-position for the cover crop, e.g. '50% 35%' (lower the 2nd value to reveal more of the top). Default: 'center' */
  objectPosition?: string;
  style?: React.CSSProperties;
}

/**
 * The home-grid unit: 16:9 thumbnail + title + MetaRow. Title fades to
 * blue on hover — the brand gesture. Opt into `tilt` for a mouse-tracked
 * 3D parallax on the thumbnail (image only; title and meta stay still).
 *
 * @startingPoint section="Cards" subtitle="ProjectCard — home-grid work tile" viewport="560x420"
 */
export function ProjectCard(props: ProjectCardProps): JSX.Element;
