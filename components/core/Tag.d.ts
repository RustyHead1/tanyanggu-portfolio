import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Tag text — a tool or medium name, e.g. "UnrealEngine" */
  children?: React.ReactNode;
  /** Render as a taxonomy link */
  href?: string;
  /** Force the active (electric-blue) state */
  active?: boolean;
  /**
   * Token treatment. Default `hash` is the borderless terminal token
   * (`#UnrealEngine`) with an accent underline wipe on hover.
   * `outline` is a quiet hairline chip for filters / selectable states.
   */
  variant?: 'hash' | 'bracket' | 'angle' | 'outline';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export interface TagRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * The signature brand atom: a geek/minimal terminal token for tool/medium
 * metadata. Borderless mono with a faint leading sigil that brightens and
 * underlines in electric blue on hover. Capitalize tool names as written
 * (UnrealEngine, TouchDesigner, AfterEffects).
 *
 * @startingPoint section="Core" subtitle="Tag — the terminal metadata token" viewport="700x180"
 */
export function Tag(props: TagProps): JSX.Element;

/** Wrapping, gap-spaced cluster of Tags. */
export function TagRow(props: TagRowProps): JSX.Element;
