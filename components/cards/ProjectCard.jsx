import React from 'react';
import { MetaRow } from './MetaRow.jsx';

/**
 * ProjectCard — the home-grid unit.
 *
 * A 16:9 thumbnail (rounded 6px, clipped), a 20px title, and a MetaRow.
 * On hover the title cross-fades to electric blue and the thumbnail
 * gently nudges to scale(0.95) — the exact gesture from tanyanggu.com.
 */
export function ProjectCard({
  image,
  title,
  date,
  tags = [],
  href = '#',
  ratio = '16 / 9',
  tilt = false,
  objectPosition = 'center',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [t, setT] = React.useState({ rx: 0, ry: 0 });
  const thumbRef = React.useRef(null);
  const amplitude = 9;

  function handleMove(e) {
    if (!tilt || !thumbRef.current) return;
    const rect = thumbRef.current.getBoundingClientRect();
    const ox = e.clientX - rect.left - rect.width / 2;
    const oy = e.clientY - rect.top - rect.height / 2;
    setT({
      rx: (oy / (rect.height / 2)) * -amplitude,
      ry: (ox / (rect.width / 2)) * amplitude,
    });
  }

  const resetTilt = () => { setHover(false); setT({ rx: 0, ry: 0 }); };

  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--tyg-space-2)',
        perspective: tilt ? '1000px' : undefined,
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={resetTilt}
      {...rest}
    >
      <a
        ref={thumbRef}
        href={href}
        onMouseMove={handleMove}
        style={{
          display: 'block',
          position: 'relative',
          aspectRatio: ratio,
          borderRadius: 'var(--tyg-radius-md)',
          overflow: 'hidden',
          background: 'var(--tyg-ink-900)',
          transformStyle: tilt ? 'preserve-3d' : undefined,
          transform: tilt
            ? `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${hover ? 1.035 : 1})`
            : undefined,
          boxShadow: tilt && hover ? '0 24px 50px -20px rgba(0,0,0,0.55)' : undefined,
          transition: tilt
            ? (hover
                ? 'transform 0.1s ease-out, box-shadow 0.2s var(--tyg-ease)'
                : 'transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s var(--tyg-ease)')
            : undefined,
          willChange: tilt ? 'transform' : undefined,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            display: 'block',
          }}
        />

        {/* Date panel — slides out from the thumbnail's top-left on hover. */}
        {date && (
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              zIndex: 2,
              fontFamily: 'var(--tyg-font-mono)',
              fontSize: 'var(--tyg-text-xs)',
              letterSpacing: 'var(--tyg-tracking-mono)',
              color: 'var(--tyg-fg)',
              background: 'rgba(10,10,11,0.66)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid var(--tyg-line-soft)',
              borderRadius: 'var(--tyg-radius)',
              padding: '4px 9px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              opacity: hover ? 1 : 0,
              transform: hover ? 'translateX(0)' : 'translateX(calc(-100% - 14px))',
              transition: 'transform 0.45s var(--tyg-ease), opacity 0.3s var(--tyg-ease)',
            }}
          >
            {date}
          </div>
        )}
      </a>

      <h4 style={{ margin: 0 }}>
        <a
          href={href}
          title={title}
          style={{
            fontFamily: 'var(--tyg-font-display)',
            fontSize: 'var(--tyg-text-md)',
            fontWeight: 'var(--tyg-w-regular)',
            lineHeight: 'var(--tyg-leading-tight)',
            color: hover ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
            transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
            // Clamp long titles to at most two lines (ellipsis) so the card
            // stays compact, without reserving an empty second line for
            // single-line titles.
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
          }}
        >
          {title}
        </a>
      </h4>

      <MetaRow tags={tags} />
    </article>
  );
}
