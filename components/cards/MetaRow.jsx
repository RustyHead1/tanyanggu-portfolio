import React from 'react';
import { DateCode } from '../core/DateCode.jsx';
import { Tag } from '../core/Tag.jsx';

/**
 * MetaRow — a work's metadata line: a DateCode followed by a wrapping
 * row of tool/medium Tags. The brand's connective texture.
 *
 * Pass `date` (string) and `tags` (array of strings, or {label, href}).
 */
export function MetaRow({ date, tags = [], dateTone = 'dim', style, ...rest }) {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--tyg-space-2)', ...style }}
      {...rest}
    >
      {date && (
        <>
          <DateCode tone={dateTone}>{date}</DateCode>
          {tags.length > 0 && (
            <span style={{ color: 'var(--tyg-fg-faint)', margin: '0 2px' }}>·</span>
          )}
        </>
      )}
      {/* Tags are direct children of this wrapping row (not wrapped in a
          single TagRow item) so they flow from the date and wrap one by one,
          rather than the whole tag group dropping to its own line. */}
      {tags.map((t, i) => {
        const label = typeof t === 'string' ? t : t.label;
        const href = typeof t === 'string' ? undefined : t.href;
        return <Tag key={i} href={href}>{label}</Tag>;
      })}
    </div>
  );
}
