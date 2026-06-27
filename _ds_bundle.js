/* @ds-bundle: {"format":3,"namespace":"TanYangguDesignSystem_bf6778","components":[{"name":"MetaRow","sourcePath":"components/cards/MetaRow.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DateCode","sourcePath":"components/core/DateCode.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TagRow","sourcePath":"components/core/Tag.jsx"},{"name":"LangSwitch","sourcePath":"components/navigation/LangSwitch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/cards/MetaRow.jsx":"f350b5f350ed","components/cards/ProjectCard.jsx":"57b3ebc2f3cd","components/core/Badge.jsx":"e9cd0179aaed","components/core/Button.jsx":"811dbbe246dc","components/core/DateCode.jsx":"2be5021e9ce8","components/core/Divider.jsx":"333b2355d2fb","components/core/Eyebrow.jsx":"7961b8cab07a","components/core/Tag.jsx":"340e14e05473","components/navigation/LangSwitch.jsx":"dc55b213aac4","components/navigation/NavBar.jsx":"02aee7efdfc6","ui_kits/portfolio/HomeScreen.jsx":"715ce0965e62","ui_kits/portfolio/HomeSections.jsx":"680836fe1686","ui_kits/portfolio/LandingScreen.jsx":"5c0c1e11b1dc","ui_kits/portfolio/ProfileScreen.jsx":"0545809c3ffe","ui_kits/portfolio/ProjectScreen.jsx":"006cb95467b0","ui_kits/portfolio/data.js":"566cae59bcc2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TanYangguDesignSystem_bf6778 = window.TanYangguDesignSystem_bf6778 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status / category marker.
 *
 * Subtler and softer than Tag (no hairline capsule). Used for a single
 * highlighted medium or a state like "New". Three quiet tones plus an
 * 'accent' that's the only place a blue fill is allowed to rest.
 */
function Badge({
  children,
  tone = 'soft',
  style,
  ...rest
}) {
  const tones = {
    soft: {
      bg: 'var(--tyg-ink-600)',
      color: 'var(--tyg-fg)',
      border: 'transparent'
    },
    line: {
      bg: 'transparent',
      color: 'var(--tyg-fg-dim)',
      border: 'var(--tyg-line-soft)'
    },
    accent: {
      bg: 'var(--tyg-accent)',
      color: '#fff',
      border: 'transparent'
    },
    invert: {
      bg: 'var(--tyg-fg)',
      color: '#000',
      border: 'transparent'
    }
  };
  const t = tones[tone] || tones.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 8px',
      fontFamily: 'var(--tyg-font-sans)',
      fontSize: '11px',
      fontWeight: 'var(--tyg-w-semi)',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tyg-tracking-wide)',
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--tyg-radius-sm)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Tan Yanggu design system
 *
 * Quiet, gallery-formal action. Three variants:
 *  - solid   : light fill (#f3f3f3) + black text; inverts to electric blue on hover
 *  - outline : hairline off-white border; fills blue on hover
 *  - ghost   : text-only; cross-fades to blue
 * The accent (#007fff) only appears on interaction — never at rest.
 */
function Button({
  children,
  variant = 'outline',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 18px',
      font: '13px'
    },
    md: {
      padding: '13px 30px',
      font: '16px'
    },
    lg: {
      padding: '16px 38px',
      font: '17px'
    }
  };
  const s = sizes[size] || sizes.md;
  const hot = hover && !disabled;
  const palette = {
    solid: {
      bg: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      color: hot ? '#fff' : '#000',
      border: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)'
    },
    outline: {
      bg: hot ? 'var(--tyg-accent)' : 'transparent',
      color: hot ? '#fff' : 'var(--tyg-fg)',
      border: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)'
    },
    ghost: {
      bg: 'transparent',
      color: hot ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      border: 'transparent'
    }
  }[variant] || {};
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55em',
    width: fullWidth ? '100%' : 'auto',
    padding: s.padding,
    fontFamily: 'var(--tyg-font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--tyg-w-medium)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    color: palette.color,
    background: palette.bg,
    border: `1px solid ${palette.border}`,
    borderRadius: 'var(--tyg-radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    transform: active && !disabled ? 'translateY(0.5px)' : 'none',
    transition: 'background-color var(--tyg-dur-fast) var(--tyg-ease), color var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease)',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: disabled ? undefined : onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DateCode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DateCode — the brand's date stamp (e.g. "2025.12").
 *
 * Dot-separated YYYY.MM, set in a quiet tone. The connective texture
 * of the portfolio; pairs with TagRow in a work's metadata line.
 */
function DateCode({
  children,
  tone = 'dim',
  size,
  style,
  ...rest
}) {
  const tones = {
    dim: 'var(--tyg-fg-dim)',
    muted: 'var(--tyg-fg-muted)',
    fg: 'var(--tyg-fg)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--tyg-font-mono)',
      fontSize: size || 'var(--tyg-text-xs)',
      fontWeight: 'var(--tyg-w-semi)',
      letterSpacing: '0.04em',
      color: tones[tone] || tones.dim,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DateCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DateCode.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a quiet hairline rule, optionally with a centered or
 * leading label. Uses the soft 14%-opacity off-white line.
 */
function Divider({
  label,
  align = 'center',
  style,
  ...rest
}) {
  const line = {
    flex: 1,
    height: 1,
    background: 'var(--tyg-line-soft)',
    border: 0
  };
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        ...line,
        width: '100%',
        margin: 'var(--tyg-space-6) 0',
        ...style
      }
    }, rest));
  }
  const lbl = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tyg-font-sans)',
      fontSize: 'var(--tyg-text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tyg-tracking-wide)',
      color: 'var(--tyg-fg-faint)',
      whiteSpace: 'nowrap'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--tyg-space-4)',
      margin: 'var(--tyg-space-6) 0',
      ...style
    }
  }, rest), align !== 'left' && /*#__PURE__*/React.createElement("span", {
    style: line
  }), lbl, /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small uppercase, wide-tracked structural label.
 *
 * Used above section titles ("Selected Works", "Profile"). One of the
 * few places the brand uses uppercase; tracking does the work.
 */
function Eyebrow({
  children,
  tone = 'dim',
  as = 'div',
  style,
  ...rest
}) {
  const tones = {
    dim: 'var(--tyg-fg-dim)',
    faint: 'var(--tyg-fg-faint)',
    accent: 'var(--tyg-accent)',
    fg: 'var(--tyg-fg)'
  };
  const Cmp = as;
  return /*#__PURE__*/React.createElement(Cmp, _extends({
    style: {
      fontFamily: 'var(--tyg-font-sans)',
      fontSize: 'var(--tyg-text-xs)',
      fontWeight: 'var(--tyg-w-semi)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tyg-tracking-wider)',
      color: tones[tone] || tones.dim,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — the signature brand atom, redesigned as a terminal token.
 *
 * A geek/minimal metadata token for tool & medium names (UnrealEngine,
 * TouchDesigner, VJ…). The default sheds the old bordered capsule for a
 * borderless mono token with a faint leading sigil; on hover the sigil
 * brightens, the label crosses to electric blue, and a hairline accent
 * underline wipes in from the left — like a focused terminal entry.
 *
 *   variant="hash"     #UnrealEngine     (default — the tag cloud token)
 *   variant="bracket"  [UnrealEngine]
 *   variant="angle"    <UnrealEngine>
 *   variant="outline"  ▍hairline chip — for filters / selectable states
 *
 * Renders as an <a> when href is given (the site's tags are taxonomy links).
 */

const SIGILS = {
  hash: ['#', ''],
  bracket: ['[', ']'],
  angle: ['<', '>']
};
function Tag({
  children,
  href,
  active = false,
  variant = 'hash',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = hover || active;
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  const Cmp = href ? 'a' : 'span';
  const common = {
    fontFamily: 'var(--tyg-font-mono)',
    fontSize: 'var(--tyg-text-xs)',
    fontWeight: 'var(--tyg-w-medium)',
    lineHeight: 1,
    letterSpacing: 'var(--tyg-tracking-mono)',
    whiteSpace: 'nowrap',
    cursor: href || onClick ? 'pointer' : 'default',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent'
  };

  /* ── Outline: a quiet hairline chip for filters / selectable states ── */
  if (variant === 'outline') {
    const chip = {
      ...common,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 9px',
      color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      background: 'transparent',
      border: `1px solid ${on ? 'var(--tyg-accent)' : 'var(--tyg-line-soft)'}`,
      borderRadius: 'var(--tyg-radius)',
      transition: 'color var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease)',
      ...style
    };
    return /*#__PURE__*/React.createElement(Cmp, _extends({
      href: href,
      style: chip
    }, handlers, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg-faint)',
        marginRight: 6,
        transition: 'color var(--tyg-dur-fast) var(--tyg-ease)'
      }
    }, "\u258D"), children);
  }

  /* ── Default: borderless terminal token with sigil + underline wipe ── */
  const [pre, post] = SIGILS[variant] || SIGILS.hash;
  const token = {
    ...common,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    paddingBottom: 3,
    color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
    transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
    ...style
  };
  const sigil = {
    color: on ? 'var(--tyg-accent)' : 'var(--tyg-fg-faint)',
    transition: 'color var(--tyg-dur-fast) var(--tyg-ease)'
  };
  const underline = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 1,
    width: '100%',
    background: 'var(--tyg-accent)',
    transform: on ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left center',
    transition: 'transform var(--tyg-dur-fast) var(--tyg-ease)',
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement(Cmp, _extends({
    href: href,
    style: token
  }, handlers, rest), /*#__PURE__*/React.createElement("span", {
    style: sigil
  }, pre), children, post && /*#__PURE__*/React.createElement("span", {
    style: sigil
  }, post), /*#__PURE__*/React.createElement("span", {
    style: underline
  }));
}

/**
 * TagRow — a wrapping, gap-spaced cluster of Tags.
 */
function TagRow({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--tyg-space-3)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag, TagRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/MetaRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetaRow — a work's metadata line: a DateCode followed by a wrapping
 * row of tool/medium Tags. The brand's connective texture.
 *
 * Pass `date` (string) and `tags` (array of strings, or {label, href}).
 */
function MetaRow({
  date,
  tags = [],
  dateTone = 'dim',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--tyg-space-2)',
      ...style
    }
  }, rest), date && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.DateCode, {
    tone: dateTone
  }, date), tags.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tyg-fg-faint)',
      margin: '0 2px'
    }
  }, "\xB7")), tags.map((t, i) => {
    const label = typeof t === 'string' ? t : t.label;
    const href = typeof t === 'string' ? undefined : t.href;
    return /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      key: i,
      href: href
    }, label);
  }));
}
Object.assign(__ds_scope, { MetaRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MetaRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — the home-grid unit.
 *
 * A 16:9 thumbnail (rounded 6px, clipped), a 20px title, and a MetaRow.
 * On hover the title cross-fades to electric blue and the thumbnail
 * gently nudges to scale(0.95) — the exact gesture from tanyanggu.com.
 */
function ProjectCard({
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
  const [t, setT] = React.useState({
    rx: 0,
    ry: 0
  });
  const thumbRef = React.useRef(null);
  const amplitude = 9;
  function handleMove(e) {
    if (!tilt || !thumbRef.current) return;
    const rect = thumbRef.current.getBoundingClientRect();
    const ox = e.clientX - rect.left - rect.width / 2;
    const oy = e.clientY - rect.top - rect.height / 2;
    setT({
      rx: oy / (rect.height / 2) * -amplitude,
      ry: ox / (rect.width / 2) * amplitude
    });
  }
  const resetTilt = () => {
    setHover(false);
    setT({
      rx: 0,
      ry: 0
    });
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--tyg-space-2)',
      perspective: tilt ? '1000px' : undefined,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: resetTilt
  }, rest), /*#__PURE__*/React.createElement("a", {
    ref: thumbRef,
    href: href,
    onMouseMove: handleMove,
    style: {
      display: 'block',
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: 'var(--tyg-radius-md)',
      overflow: 'hidden',
      background: 'var(--tyg-ink-900)',
      transformStyle: tilt ? 'preserve-3d' : undefined,
      transform: tilt ? `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${hover ? 1.035 : 1})` : undefined,
      boxShadow: tilt && hover ? '0 24px 50px -20px rgba(0,0,0,0.55)' : undefined,
      transition: tilt ? hover ? 'transform 0.1s ease-out, box-shadow 0.2s var(--tyg-ease)' : 'transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s var(--tyg-ease)' : undefined,
      willChange: tilt ? 'transform' : undefined
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition,
      display: 'block'
    }
  }), date && /*#__PURE__*/React.createElement("div", {
    style: {
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
      transition: 'transform 0.45s var(--tyg-ease), opacity 0.3s var(--tyg-ease)'
    }
  }, date)), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    title: title,
    style: {
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
      overflow: 'hidden'
    }
  }, title)), /*#__PURE__*/React.createElement(__ds_scope.MetaRow, {
    tags: tags
  }));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangSwitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LangSwitch — the bilingual JA / EN toggle.
 *
 * The portfolio is JA-default and bilingual; this is the language pill.
 * Active language is plain off-white; the other fades to blue on hover.
 */
function LangSwitch({
  value = 'JA',
  options = ['JA', 'EN'],
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--tyg-space-2)',
      ...style
    }
  }, rest), options.map((opt, i) => {
    const isActive = opt === value;
    const isHot = hover === opt && !isActive;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: opt
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tyg-fg-faint)',
        fontSize: '12px'
      }
    }, "/"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onChange && onChange(opt),
      onMouseEnter: () => setHover(opt),
      onMouseLeave: () => setHover(null),
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        padding: '2px 1px',
        cursor: 'pointer',
        fontFamily: 'var(--tyg-font-sans)',
        fontSize: 'var(--tyg-text-xs)',
        fontWeight: isActive ? 'var(--tyg-w-semi)' : 'var(--tyg-w-regular)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tyg-tracking-wide)',
        color: isActive ? 'var(--tyg-fg)' : isHot ? 'var(--tyg-accent)' : 'var(--tyg-fg-dim)',
        transition: 'color var(--tyg-dur-fast) var(--tyg-ease)'
      }
    }, opt));
  }));
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  label,
  href,
  current
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      fontFamily: 'var(--tyg-font-sans)',
      fontSize: 'var(--tyg-text-sm)',
      letterSpacing: 'var(--tyg-tracking-wide)',
      textTransform: 'uppercase',
      color: hover ? 'var(--tyg-accent)' : 'var(--tyg-fg)',
      transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
      paddingBottom: '3px'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 1,
      width: '100%',
      background: 'currentColor',
      transform: hover || current ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--tyg-dur) var(--tyg-ease)'
    }
  }));
}

/**
 * NavBar — the site's minimal sticky header.
 *
 * Text wordmark left, terse uppercase nav + LangSwitch right. Underline
 * grows in on hover (the Astra "underline" menu style). Sits on the void.
 */
function NavBar({
  brand = 'Tan Yanggu',
  brandSuffix = 'Portfolio',
  brandHref = 'index.html',
  links = [{
    label: 'Works',
    href: 'works/index.html',
    current: true
  }, {
    label: 'Profile',
    href: 'profile/index.html'
  }, {
    label: 'Contact',
    href: 'contact/index.html'
  }],
  lang = 'JA',
  onLangChange,
  sticky = true,
  fluid = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 50,
      background: 'var(--tyg-bg)',
      borderBottom: '1px solid var(--tyg-line-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: fluid ? 'none' : 'var(--tyg-container-wide)',
      margin: '0 auto',
      padding: '18px clamp(20px, 5vw, 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--tyg-space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: brandHref,
    style: {
      fontFamily: 'var(--tyg-font-display)',
      fontSize: 'var(--tyg-text-xl)',
      fontWeight: 'var(--tyg-w-regular)',
      color: 'var(--tyg-fg-title)'
    }
  }, brand, brandSuffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tyg-fg-faint)',
      fontWeight: 'var(--tyg-w-light)',
      margin: '0 8px'
    }
  }, "|"), brandSuffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tyg-fg-title)'
    }
  }, brandSuffix)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--tyg-space-6)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: i
  }, l))), /*#__PURE__*/React.createElement(__ds_scope.LangSwitch, {
    value: lang,
    onChange: onLangChange
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
// HomeScreen — the canonical landing view: a calm two-up grid of works.
(function () {
  const {
    NavBar,
    ProjectCard,
    Eyebrow
  } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // FadeCard — staggered reveal on first paint: rises from below while
  // blurring from soft (feathered, diffuse edges) to sharp. Both image and
  // text blur together. `filter` is dropped to 'none' once settled so it
  // doesn't flatten the thumbnail's 3D tilt. Pure CSS, no motion lib.
  function FadeCard({
    index = 0,
    children
  }) {
    const [shown, setShown] = React.useState(REDUCED);
    const [done, setDone] = React.useState(REDUCED);
    const base = 60 + index * 120;
    React.useEffect(() => {
      if (REDUCED) return;
      const t1 = setTimeout(() => setShown(true), base);
      const t2 = setTimeout(() => setDone(true), base + 850);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, [base]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        transform: `translateY(${shown ? 0 : 28}px)`,
        opacity: shown ? 1 : 0,
        filter: done ? 'none' : shown ? 'blur(0px)' : 'blur(16px)',
        transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease, filter 0.8s ease',
        willChange: 'transform, filter, opacity'
      }
    }, children);
  }
  function HomeScreen({
    lang,
    setLang
  }) {
    const works = window.TYG_DATA.works;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
      lang: lang,
      onLangChange: setLang,
      brand: "Tan Yanggu",
      brandSuffix: "Portfolio",
      links: [{
        label: 'Home',
        href: '#/'
      }, {
        label: 'Works',
        href: '#/works',
        current: true
      }, {
        label: 'Profile',
        href: '#/profile'
      }, {
        label: 'Contact',
        href: '#/contact'
      }]
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--tyg-container)',
        margin: '0 auto',
        padding: '48px clamp(20px, 5vw, 72px) 96px'
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        marginBottom: 'var(--tyg-space-7)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, lang === 'JA' ? '作品' : 'Selected Works'), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 12,
        fontSize: 'var(--tyg-text-5xl)',
        fontWeight: 300,
        lineHeight: 1.1
      }
    }, lang === 'JA' ? 'リアルタイムCGと' : 'Real-time CG &', /*#__PURE__*/React.createElement("br", null), lang === 'JA' ? 'オーディオビジュアル' : 'audiovisual performance')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '28px 28px'
      }
    }, works.map((w, i) => /*#__PURE__*/React.createElement(FadeCard, {
      key: w.slug,
      index: i
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      tilt: true,
      image: window.__IMG(w.image),
      title: w.title,
      date: w.date,
      tags: w.tags,
      href: '#/work/' + w.slug
    }))))));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeSections.jsx
try { (() => {
// HomeSections — everything below the cinematic hero on the Home route:
// 1) Selected Works (4 cards, scroll-revealed)  2) condensed About
// 3) social footer (Instagram / X / Xiaohongshu — links are placeholders).
(function () {
  const {
    ProjectCard,
    Eyebrow,
    DateCode,
    Divider,
    Button
  } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Reveal — rise + un-blur as the element scrolls into view. Pure CSS
  // (scroll-driven `animation-timeline: view()` on a stable className) so a
  // re-render of the host can't reset it. `index` offsets the entry range
  // slightly for a staggered cascade; falls back to visible where the CSS
  // feature or reduced-motion applies. ──────────────────────────────────
  function Reveal({
    index = 0,
    children,
    style
  }) {
    const off = Math.min(index, 4) * 5; // % stagger by position in a group
    return /*#__PURE__*/React.createElement("div", {
      className: "tyg-reveal",
      style: {
        animationRange: `entry ${off}% cover 30%`,
        ...style
      }
    }, children);
  }

  // ── Section header — eyebrow + index + big light title ─────────────────
  function SectionHead({
    index,
    eyebrow,
    children
  }) {
    return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 16,
        marginBottom: 'var(--tyg-space-6)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 12,
        letterSpacing: '0.18em',
        color: 'var(--tyg-fg-faint)'
      }
    }, index), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 1,
        background: 'var(--tyg-line-soft)',
        transform: 'translateY(-4px)'
      }
    }), /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "dim"
    }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--tyg-font-display)',
        fontWeight: 'var(--tyg-w-light, 300)',
        fontSize: 'clamp(34px, 4vw, 60px)',
        lineHeight: 1.05,
        letterSpacing: '0.01em',
        color: 'var(--tyg-fg-title)'
      }
    }, children));
  }

  // ── Social icons ───────────────────────────────────────────────────────
  function IgIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "19",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.2",
      cy: "6.8",
      r: "1.1",
      fill: "currentColor",
      stroke: "none"
    }));
  }
  function XIcon() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
    }));
  }
  function XhsIcon() {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '0.04em'
      }
    }, "RED");
  }
  function Social({
    label,
    href,
    children
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": label,
      title: label,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        width: 46,
        height: 46,
        borderRadius: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        border: '1px solid ' + (hover ? 'var(--tyg-accent)' : 'var(--tyg-line-soft)'),
        color: hover ? 'var(--tyg-accent)' : 'var(--tyg-fg-dim)',
        background: hover ? 'rgba(0,127,255,0.06)' : 'transparent',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'color var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease), background var(--tyg-dur-fast) var(--tyg-ease), transform var(--tyg-dur) var(--tyg-ease)'
      }
    }, children);
  }

  // ── GSAP infinite-loop engine (Osmo) ───────────────────────────────────
  const gsap = window.gsap,
    Draggable = window.Draggable,
    InertiaPlugin = window.InertiaPlugin;
  function horizontalLoop(items, config) {
    let timeline;
    items = gsap.utils.toArray(items);
    config = config || {};
    gsap.context(() => {
      let onChange = config.onChange,
        lastIndex = 0,
        tl = gsap.timeline({
          repeat: config.repeat,
          onUpdate: onChange && function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          },
          paused: config.paused,
          defaults: {
            ease: 'none'
          },
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        spaceBefore = [],
        xPercents = [],
        curIndex = 0,
        indexIsDirty = false,
        center = config.center,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
        timeOffset = 0,
        container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
        totalWidth,
        getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') + (parseFloat(config.paddingRight) || 0),
        populateWidths = () => {
          let b1 = container.getBoundingClientRect(),
            b2;
          items.forEach((el, i) => {
            widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i] * 100 + gsap.getProperty(el, 'xPercent'));
            b2 = el.getBoundingClientRect();
            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
            b1 = b2;
          });
          gsap.set(items, {
            xPercent: i => xPercents[i]
          });
          totalWidth = getTotalWidth();
        },
        timeWrap,
        populateOffsets = () => {
          timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
          center && times.forEach((t, i) => {
            times[i] = timeWrap(tl.labels['label' + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
          });
        },
        getClosest = (values, value, wrap) => {
          let i = values.length,
            closest = 1e10,
            index = 0,
            d;
          while (i--) {
            d = Math.abs(values[i] - value);
            if (d > wrap / 2) d = wrap - d;
            if (d < closest) {
              closest = d;
              index = i;
            }
          }
          return index;
        },
        populateTimeline = () => {
          let i, item, curX, distanceToStart, distanceToLoop;
          tl.clear();
          for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
            tl.to(item, {
              xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
              duration: distanceToLoop / pixelsPerSecond
            }, 0).fromTo(item, {
              xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
            }, {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false
            }, distanceToLoop / pixelsPerSecond).add('label' + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
          }
          timeWrap = gsap.utils.wrap(0, tl.duration());
        },
        refresh = deep => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
        },
        onResize = () => refresh(true),
        proxy;
      gsap.set(items, {
        x: 0
      });
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener('resize', onResize);
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex && index !== curIndex) {
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = {
            time: timeWrap
          };
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
      }
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = setCurrent => {
        let index = getClosest(times, tl.time(), tl.duration());
        if (setCurrent) {
          curIndex = index;
          indexIsDirty = false;
        }
        return index;
      };
      tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
      tl.next = vars => toIndex(tl.current() + 1, vars);
      tl.previous = vars => toIndex(tl.current() - 1, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      if (config.draggable && typeof Draggable === 'function') {
        proxy = document.createElement('div');
        let wrap = gsap.utils.wrap(0, 1),
          ratio,
          startProgress,
          draggable,
          lastSnap,
          initChangeX,
          wasPlaying,
          align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
          syncIndex = () => tl.closestIndex(true);
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: 'x',
          onPressInit() {
            let x = this.x;
            gsap.killTweensOf(tl);
            wasPlaying = !tl.paused();
            tl.pause();
            startProgress = tl.progress();
            refresh();
            ratio = 1 / totalWidth;
            initChangeX = startProgress / -ratio - x;
            gsap.set(proxy, {
              x: startProgress / -ratio
            });
          },
          onDrag: align,
          onThrowUpdate: align,
          overshootTolerance: 0,
          inertia: true,
          snap(value) {
            if (Math.abs(startProgress / -ratio - this.x) < 10) return lastSnap + initChangeX;
            let time = -(value * ratio) * tl.duration(),
              wrappedTime = timeWrap(time),
              snapTime = times[getClosest(times, wrappedTime, tl.duration())],
              dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
            lastSnap = (time + dif) / tl.duration() / -ratio;
            return lastSnap;
          },
          onRelease() {
            syncIndex();
            draggable.isThrowing && (indexIsDirty = true);
          },
          onThrowComplete: () => {
            syncIndex();
            wasPlaying && tl.play();
          }
        })[0];
        tl.draggable = draggable;
      }
      tl.closestIndex(true);
      lastIndex = curIndex;
      onChange && onChange(items[curIndex], curIndex);
      timeline = tl;
      return () => window.removeEventListener('resize', onResize);
    });
    return timeline;
  }

  // ── WorksSlider — infinite offset slider with counter, nav & autoplay ──
  const pad = n => n < 10 ? '0' + n : '' + n;
  const wsCorner = {
    position: 'absolute',
    display: 'block',
    width: 11,
    height: 11,
    borderTop: '1px solid currentColor',
    borderLeft: '1px solid currentColor',
    borderTopLeftRadius: 4
  };
  const WorksSlider = React.memo(function WorksSlider({
    works
  }) {
    const rootRef = React.useRef(null);
    React.useLayoutEffect(() => {
      const root = rootRef.current;
      if (!root || !gsap) return;
      if (Draggable) gsap.registerPlugin(Draggable);
      if (InertiaPlugin) gsap.registerPlugin(InertiaPlugin);
      const slides = gsap.utils.toArray(root.querySelectorAll('[data-slider="slide"]'));
      if (!slides.length) return;
      const stepsCol = root.querySelector('[data-ws="steps-col"]');
      const totalEl = root.querySelector('[data-ws="total"]');
      const total = slides.length;
      totalEl.textContent = pad(total);
      stepsCol.innerHTML = '';
      slides.forEach((_, i) => {
        const d = document.createElement('div');
        d.setAttribute('data-ws-step', '');
        d.style.cssText = 'width:2.2ch;line-height:1;text-align:center;';
        d.textContent = pad(i + 1);
        stepsCol.appendChild(d);
      });
      const allSteps = stepsCol.querySelectorAll('[data-ws-step]');
      let activeElement;
      const loop = horizontalLoop(slides, {
        paused: true,
        draggable: true,
        center: false,
        onChange: (element, index) => {
          const D = REDUCED ? 0 : 0.5;
          if (activeElement && activeElement !== element.nextElementSibling) {
            activeElement.classList.remove('active');
            gsap.to(activeElement, {
              opacity: 0.26,
              duration: D,
              overwrite: 'auto'
            });
            const oc = activeElement.querySelector('.tyg-ws-cap');
            if (oc) gsap.to(oc, {
              opacity: 0,
              y: 10,
              duration: D,
              overwrite: 'auto'
            });
          }
          const next = element.nextElementSibling || slides[0];
          next.classList.add('active');
          gsap.to(next, {
            opacity: 1,
            duration: D,
            overwrite: 'auto'
          });
          const nc = next.querySelector('.tyg-ws-cap');
          if (nc) gsap.to(nc, {
            opacity: 1,
            y: 0,
            duration: REDUCED ? 0 : 0.55,
            delay: REDUCED ? 0 : 0.26,
            overwrite: 'auto'
          });
          activeElement = next;
          gsap.to(allSteps, {
            y: -100 * index + '%',
            ease: 'power3',
            duration: REDUCED ? 0 : 0.45
          });
        }
      });
      slides.forEach((slide, i) => slide.addEventListener('click', () => {
        if (slide.classList.contains('active')) {
          location.hash = slide.getAttribute('data-href');
        } else loop.toIndex(i - 1, {
          ease: 'power3',
          duration: 0.725
        });
      }));
      const nextBtn = root.querySelector('[data-slider="button-next"]');
      const prevBtn = root.querySelector('[data-slider="button-prev"]');
      nextBtn.addEventListener('click', () => loop.next({
        ease: 'power3',
        duration: 0.725
      }));
      prevBtn.addEventListener('click', () => loop.previous({
        ease: 'power3',
        duration: 0.725
      }));

      // autoplay — pauses only while hovering the active (fully-shown) slide; respects reduced-motion
      let timer = null,
        overActive = false;
      const stop = () => {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      };
      const start = () => {
        if (REDUCED) return;
        stop();
        timer = setInterval(() => loop.next({
          ease: 'power3',
          duration: 0.9
        }), 3800);
      };
      slides.forEach(slide => {
        slide.addEventListener('pointerenter', () => {
          if (slide.classList.contains('active')) {
            overActive = true;
            stop();
          }
        });
        slide.addEventListener('pointerleave', () => {
          if (slide.classList.contains('active')) {
            overActive = false;
            start();
          }
        });
      });
      root.addEventListener('pointerdown', stop);
      root.addEventListener('pointerup', () => {
        if (!overActive) start();
      });
      start();
      return () => {
        stop();
        loop && loop.kill && loop.kill();
      };
    }, []);
    const NavBtn = ({
      dir
    }) => /*#__PURE__*/React.createElement("button", {
      "data-slider": dir === 'next' ? 'button-next' : 'button-prev',
      className: "tyg-ws-btn",
      "aria-label": dir === 'next' ? 'next slide' : 'previous slide',
      style: {
        background: 'transparent',
        color: 'var(--tyg-fg-dim)',
        border: '1px solid var(--tyg-line-soft)',
        borderRadius: 'var(--tyg-radius)',
        width: 'clamp(46px,3.6vw,58px)',
        height: 'clamp(46px,3.6vw,58px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        cursor: 'pointer',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "13",
      viewBox: "0 0 17 12",
      fill: "none",
      style: {
        transform: dir === 'next' ? 'rotate(180deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z",
      fill: "currentColor"
    })), /*#__PURE__*/React.createElement("span", {
      className: "tyg-ws-corners",
      style: {
        color: 'var(--tyg-white)'
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        ...wsCorner,
        top: 0,
        left: 0
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        ...wsCorner,
        top: 0,
        right: 0,
        transform: 'rotate(90deg)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        ...wsCorner,
        bottom: 0,
        left: 0,
        transform: 'rotate(-90deg)'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        ...wsCorner,
        bottom: 0,
        right: 0,
        transform: 'rotate(180deg)'
      }
    })));
    return /*#__PURE__*/React.createElement("div", {
      ref: rootRef,
      style: {
        position: 'relative',
        height: 'clamp(300px, 40vw, 520px)',
        marginTop: 'var(--tyg-space-6)',
        overflow: 'hidden',
        touchAction: 'pan-y'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: '0 auto 0 0',
        zIndex: 3,
        width: 'clamp(230px, 32vw, 400px)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 'clamp(0px, 1.6vw, 24px)',
        background: 'linear-gradient(90deg, var(--tyg-bg) 64%, transparent)',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '74%',
        pointerEvents: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.16em',
        fontFamily: 'var(--tyg-font-display)',
        fontWeight: 300,
        fontSize: 'clamp(32px, 4.4vw, 56px)',
        lineHeight: 1,
        color: 'var(--tyg-fg-title)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "data-ws": "steps-col",
      style: {
        height: '1em',
        overflow: 'hidden'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        height: '0.6em',
        background: 'var(--tyg-fg-faint)',
        transform: 'rotate(15deg)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '1em',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "data-ws": "total",
      style: {
        width: '2.2ch',
        lineHeight: 1,
        textAlign: 'center',
        color: 'var(--tyg-fg-faint)'
      }
    }, "06"))), /*#__PURE__*/React.createElement("div", {
      className: "tyg-ws-nav",
      style: {
        display: 'flex',
        gap: 'clamp(14px, 1.6vw, 24px)'
      }
    }, /*#__PURE__*/React.createElement(NavBtn, {
      dir: "prev"
    }), /*#__PURE__*/React.createElement(NavBtn, {
      dir: "next"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "data-slider": "list",
      style: {
        display: 'flex',
        position: 'relative'
      }
    }, works.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.slug,
      "data-slider": "slide",
      "data-href": '#/work/' + w.slug,
      className: "tyg-ws-slide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tyg-ws-card",
      style: {
        borderRadius: 'var(--tyg-radius-md)',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--tyg-line-soft)',
        background: 'var(--tyg-ink-900)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__IMG(w.image),
      alt: w.title,
      draggable: "false",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        pointerEvents: 'none',
        userSelect: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "tyg-ws-cap",
      style: {
        position: 'absolute',
        top: 16,
        left: 16,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 9,
        padding: '7px 13px 7px 11px',
        borderRadius: 'var(--tyg-radius)',
        background: 'rgba(10,10,12,0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid var(--tyg-line-soft)',
        maxWidth: 'calc(100% - 32px)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--tyg-accent)',
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 11.5,
        letterSpacing: '0.04em',
        color: 'var(--tyg-fg)',
        lineHeight: 1.35
      }
    }, w.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 10.5,
        color: 'var(--tyg-fg-faint)',
        flex: 'none'
      }
    }, w.date)))))))));
  });
  function HomeSections({
    lang
  }) {
    const data = window.TYG_DATA;
    const works = data.works;
    const p = data.profile;
    const ja = lang === 'JA';
    const bioShort = ja ? '中国・四川省生まれ、東京を拠点に活動。武蔵野美術大学デザイン情報学コース修士課程修了。リアルタイムCGを軸に、インタラクティブ・インスタレーション、CG映像、VRなど多岐にわたる分野で制作している。' : 'Born in Sichuan, China; now based in Tokyo. MFA, Musashino Art University. Working primarily with real-time CG across interactive installation, CG video, and VR — multisensory experiences focused on the human side of technology.';
    const facts = [['Based', ja ? '東京 / Tokyo' : 'Tokyo, Japan'], ['Education', 'MFA — Musashino Art University'], ['Project', 'Synesthesia Array (w/ DNS)']];

    // ── Rising-seam blur — as this panel lifts up over the pinned hero, its
    // top edge is heavily blurred at first and eases to crisp as it rises. ──
    const [sp, setSp] = React.useState(0);
    React.useEffect(() => {
      let raf = 0;
      const on = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const h = window.innerHeight || 1;
          setSp(Math.min(Math.max(window.scrollY / h, 0), 1));
        });
      };
      window.addEventListener('scroll', on, {
        passive: true
      });
      on();
      return () => {
        window.removeEventListener('scroll', on);
        if (raf) cancelAnimationFrame(raf);
      };
    }, []);
    const seamEase = sp * sp * (3 - 2 * sp); // smoothstep
    const feather = REDUCED ? 0 : (1 - seamEase) * 150; // px of alpha-feathered top edge

    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        background: `linear-gradient(180deg, transparent 0px, var(--tyg-bg) ${feather}px)`
      }
    }, /*#__PURE__*/React.createElement("section", {
      className: "tyg-home-section",
      style: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 'min(92vw, 1480px)',
        margin: '0 auto',
        padding: 'max(72px, 8vh) clamp(32px, 5vw, 72px) clamp(40px, 7vh, 72px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      index: "01",
      eyebrow: ja ? '作品' : 'Selected Works'
    }, ja ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0CG\u3068", /*#__PURE__*/React.createElement("br", null), "\u30AA\u30FC\u30C7\u30A3\u30AA\u30D3\u30B8\u30E5\u30A2\u30EB") : /*#__PURE__*/React.createElement(React.Fragment, null, "Real-time CG &", /*#__PURE__*/React.createElement("br", null), "audiovisual performance")), /*#__PURE__*/React.createElement(Reveal, {
      index: 1
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/works",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 'var(--tyg-text-xs)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-dim)',
        paddingBottom: 6
      }
    }, ja ? 'すべて見る' : 'View all', " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "\u2192")))), /*#__PURE__*/React.createElement(Reveal, {
      index: 2
    }, /*#__PURE__*/React.createElement(WorksSlider, {
      works: works
    })))), /*#__PURE__*/React.createElement("section", {
      className: "tyg-home-section",
      style: {
        background: 'var(--tyg-bg-deep)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 'min(92vw, 1480px)',
        margin: '0 auto',
        padding: 'max(72px, 8vh) clamp(32px, 5vw, 72px) clamp(40px, 7vh, 72px)'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      index: "02",
      eyebrow: ja ? '概要' : 'About'
    }, p.nameJa), /*#__PURE__*/React.createElement("div", {
      className: "tyg-about-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, clamp(280px, 26vw, 400px)) minmax(0, 1fr)',
        gap: 'clamp(32px, 4.5vw, 64px)',
        alignItems: 'start',
        marginTop: 'var(--tyg-space-6)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--tyg-radius-lg)',
        overflow: 'hidden',
        aspectRatio: '3 / 4',
        background: 'var(--tyg-ink-900)',
        border: '1px solid var(--tyg-line-soft)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__IMG(p.portrait),
      alt: p.nameEn,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 11,
        letterSpacing: '0.12em',
        color: 'var(--tyg-fg-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", null, p.nameEn), /*#__PURE__*/React.createElement("span", null, "/ ", p.alias))), /*#__PURE__*/React.createElement(Reveal, {
      index: 1
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 28px',
        fontSize: 'clamp(17px, 1.3vw, 22px)',
        lineHeight: 1.9,
        color: 'var(--tyg-fg)',
        fontWeight: 300,
        maxWidth: 720
      }
    }, bioShort), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 30
      }
    }, facts.map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: 20,
        padding: '13px 0',
        borderTop: '1px solid var(--tyg-line-soft)',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)'
      }
    }, f[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tyg-fg)',
        fontSize: 'var(--tyg-text-base)'
      }
    }, f[1])))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "solid",
      href: "#/profile",
      style: {
        whiteSpace: 'nowrap'
      }
    }, ja ? 'プロフィール詳細' : 'Full profile'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      href: "#/contact",
      style: {
        whiteSpace: 'nowrap'
      }
    }, ja ? 'お問い合わせ' : 'Get in touch')))))), /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--tyg-bg-void)',
        borderTop: '1px solid var(--tyg-line-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--tyg-container)',
        margin: '0 auto',
        padding: '72px clamp(32px, 5vw, 72px) 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--tyg-font-display)',
        fontWeight: 300,
        fontSize: 'clamp(32px, 5vw, 56px)',
        lineHeight: 0.95,
        letterSpacing: '0.02em',
        color: 'var(--tyg-fg-title)'
      }
    }, "TAN YANGGU"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)'
      }
    }, "Visual Artist / RustyHead \xB7 Tokyo, JP")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 10.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)'
      }
    }, "Follow"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Social, {
      label: "Instagram",
      href: "#"
    }, /*#__PURE__*/React.createElement(IgIcon, null)), /*#__PURE__*/React.createElement(Social, {
      label: "X",
      href: "#"
    }, /*#__PURE__*/React.createElement(XIcon, null)), /*#__PURE__*/React.createElement(Social, {
      label: "Xiaohongshu",
      href: "#"
    }, /*#__PURE__*/React.createElement(XhsIcon, null))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        paddingTop: 22,
        borderTop: '1px solid var(--tyg-line-soft)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        color: 'var(--tyg-fg-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tan Yanggu \u2014 Portfolio"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:hello@tanyanggu.com",
      style: {
        color: 'var(--tyg-fg-dim)'
      }
    }, "hello@tanyanggu.com")))));
  }
  window.HomeSections = HomeSections;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/LandingScreen.jsx
try { (() => {
// LandingScreen — cinematic Home. Full-bleed video well + a live, tunable
// "filter lab": brightness/contrast/grade/grain/scanlines/vignette/blur,
// all adjustable from an on-page panel and persisted to localStorage.
(function () {
  const {
    LangSwitch,
    NavBar
  } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';

  // Drop your own clip here (WebM preferred). Relative to this folder.
  const HERO_VIDEO_SRC = window.__resources && window.__resources.heroVideo || 'media/home-bg.webm';

  // Random hero-video entry points (seconds). On every home-page load the clip
  // begins from one of these, chosen at random.
  const HERO_START_TIMES = [0, 6, 14, 24, 31];

  // ── Filter parameters ──────────────────────────────────────────────────
  const FILTER_KEY = 'tyg-home-filter-v1';
  const DEFAULTS = {
    brightness: 0.82,
    contrast: 1.12,
    saturate: 0.92,
    blur: 0,
    grayscale: 0,
    hue: 0,
    grain: 0.14,
    scanlines: 0.19,
    scanGap: 3,
    vignette: 1.0,
    wash: 0.13,
    tint: '#11305a',
    tintStrength: 0.14,
    tintBlend: 'soft-light',
    titleBlur: 9,
    frame: 0.68,
    titleBgColor: '#0a0a0b',
    titleBgOpacity: 0.42
  };
  const TINTS = ['#11305a', '#3a1f4d', '#0a0a0b', '#5a3a11', '#1f4d3a'];
  const TITLE_BG_COLORS = ['#0a0a0b', '#0d1a2e', '#1a0d0d', '#0d1a10', '#1a1a0a'];
  const BLENDS = ['soft-light', 'overlay', 'screen', 'multiply', 'color'];
  function hexRgba(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  function loadFilter() {
    try {
      return {
        ...DEFAULTS,
        ...JSON.parse(localStorage.getItem(FILTER_KEY) || '{}')
      };
    } catch (e) {
      return {
        ...DEFAULTS
      };
    }
  }

  // 128px tiling grain, generated once.
  function makeGrain() {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const x = c.getContext('2d');
    const img = x.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255 | 0;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    return c.toDataURL('image/png');
  }

  // ── Corner home icon — rounded, on every page, returns to Home ─────────
  function HomeIcon() {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#/",
      "aria-label": "Home",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'fixed',
        top: 22,
        left: 22,
        zIndex: 120,
        width: 46,
        height: 46,
        borderRadius: 13,
        overflow: 'hidden',
        display: 'block',
        boxSizing: 'border-box',
        border: '1px solid ' + (hover ? 'rgba(243,243,243,0.5)' : 'rgba(243,243,243,0.22)'),
        boxShadow: hover ? '0 0 0 4px rgba(243,243,243,0.05)' : 'none',
        transition: 'border-color var(--tyg-dur) var(--tyg-ease), box-shadow var(--tyg-dur) var(--tyg-ease), transform var(--tyg-dur) var(--tyg-ease)',
        transform: hover ? 'translateY(-1px)' : 'none',
        backdropFilter: 'blur(6px)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__IMG('assets/favicon.png'),
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        filter: hover ? 'brightness(1.15)' : 'brightness(1)',
        transition: 'filter var(--tyg-dur) var(--tyg-ease)'
      }
    }));
  }
  window.HomeIcon = HomeIcon;
  function OverlayLink({
    label,
    href,
    current
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'relative',
        fontFamily: 'var(--tyg-font-sans)',
        fontSize: 'var(--tyg-text-sm)',
        letterSpacing: 'var(--tyg-tracking-wide)',
        textTransform: 'uppercase',
        color: current ? 'var(--tyg-fg)' : 'var(--tyg-fg-dim)',
        transition: 'color var(--tyg-dur-fast) var(--tyg-ease)',
        paddingBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: hover ? 'var(--tyg-fg)' : 'inherit',
        transition: 'color var(--tyg-dur-fast) var(--tyg-ease)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 1,
        width: '100%',
        background: 'currentColor',
        opacity: 0.8,
        transform: hover || current ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--tyg-dur) var(--tyg-ease)'
      }
    }));
  }

  // ── Persistent top nav — the shared site NavBar, rendered as a fixed
  // overlay so it stays above the pinned hero and the rising sections.
  // Same component / style as every other page for consistency. ────────
  function HomeNav({
    lang,
    setLang
  }) {
    return /*#__PURE__*/React.createElement(NavBar, {
      lang: lang,
      onLangChange: setLang,
      brand: "",
      brandSuffix: "",
      fluid: true,
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 125,
        background: 'transparent',
        borderBottom: 'none'
      },
      links: [{
        label: 'Home',
        href: '#/',
        current: true
      }, {
        label: 'Works',
        href: '#/works'
      }, {
        label: 'Profile',
        href: '#/profile'
      }, {
        label: 'Contact',
        href: '#/contact'
      }]
    });
  }
  window.HomeNav = HomeNav;

  // ── Filter control panel ───────────────────────────────────────────────
  function Row({
    label,
    value,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-dim)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontFamily: 'var(--tyg-font-mono)',
        color: 'var(--tyg-fg-muted)'
      }
    }, value)), children);
  }
  function Slider({
    min,
    max,
    step,
    value,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: min,
      max: max,
      step: step,
      value: value,
      onChange: e => onChange(parseFloat(e.target.value)),
      style: {
        width: '100%',
        accentColor: '#cfe0ff',
        height: 2,
        cursor: 'pointer'
      }
    });
  }
  function FilterPanel({
    f,
    set,
    reset
  }) {
    const [open, setOpen] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    const copy = () => {
      const out = {};
      for (const k in DEFAULTS) out[k] = f[k];
      navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(out, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    };
    const btn = {
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: '7px 12px',
      borderRadius: 2,
      background: 'transparent',
      color: 'var(--tyg-fg-dim)',
      border: '1px solid var(--tyg-line-soft)',
      transition: 'color var(--tyg-dur-fast), border-color var(--tyg-dur-fast)'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        right: 22,
        bottom: 22,
        zIndex: 200,
        fontFamily: 'var(--tyg-font-sans)'
      }
    }, open && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 276,
        maxHeight: '78vh',
        overflowY: 'auto',
        marginBottom: 12,
        padding: '18px 18px 16px',
        borderRadius: 4,
        border: '1px solid var(--tyg-line-soft)',
        background: 'rgba(12,12,14,0.74)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg)'
      }
    }, "Filter Lab"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        letterSpacing: '0.1em',
        color: 'var(--tyg-fg-faint)',
        fontFamily: 'var(--tyg-font-mono)'
      }
    }, "HOME \xB7 BG")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)',
        margin: '0 0 10px'
      }
    }, "Grade"), /*#__PURE__*/React.createElement(Row, {
      label: "Brightness",
      value: f.brightness.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0.2,
      max: 1.6,
      step: 0.01,
      value: f.brightness,
      onChange: v => set('brightness', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Contrast",
      value: f.contrast.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0.5,
      max: 2,
      step: 0.01,
      value: f.contrast,
      onChange: v => set('contrast', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Saturation",
      value: f.saturate.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 2,
      step: 0.01,
      value: f.saturate,
      onChange: v => set('saturate', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Grayscale",
      value: f.grayscale.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 1,
      step: 0.01,
      value: f.grayscale,
      onChange: v => set('grayscale', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Hue rotate",
      value: f.hue + '°'
    }, /*#__PURE__*/React.createElement(Slider, {
      min: -180,
      max: 180,
      step: 1,
      value: f.hue,
      onChange: v => set('hue', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Blur",
      value: f.blur.toFixed(1) + 'px'
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 14,
      step: 0.1,
      value: f.blur,
      onChange: v => set('blur', v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)',
        margin: '6px 0 10px'
      }
    }, "Color tint"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 12
      }
    }, TINTS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => set('tint', c),
      "aria-label": c,
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        cursor: 'pointer',
        background: c,
        border: '1px solid ' + (f.tint === c ? 'var(--tyg-fg)' : 'rgba(243,243,243,0.18)'),
        boxShadow: f.tint === c ? '0 0 0 3px rgba(243,243,243,0.08)' : 'none'
      }
    }))), /*#__PURE__*/React.createElement(Row, {
      label: "Tint strength",
      value: f.tintStrength.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 1,
      step: 0.01,
      value: f.tintStrength,
      onChange: v => set('tintStrength', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Tint blend",
      value: f.tintBlend
    }, /*#__PURE__*/React.createElement("select", {
      value: f.tintBlend,
      onChange: e => set('tintBlend', e.target.value),
      style: {
        width: '100%',
        background: 'rgba(255,255,255,0.04)',
        color: 'var(--tyg-fg)',
        border: '1px solid var(--tyg-line-soft)',
        borderRadius: 2,
        padding: '5px 8px',
        fontSize: 11,
        fontFamily: 'var(--tyg-font-mono)'
      }
    }, BLENDS.map(b => /*#__PURE__*/React.createElement("option", {
      key: b,
      value: b,
      style: {
        background: '#16161a'
      }
    }, b)))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)',
        margin: '6px 0 10px'
      }
    }, "Texture"), /*#__PURE__*/React.createElement(Row, {
      label: "Grain",
      value: f.grain.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 0.6,
      step: 0.01,
      value: f.grain,
      onChange: v => set('grain', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Scanlines",
      value: f.scanlines.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 0.6,
      step: 0.01,
      value: f.scanlines,
      onChange: v => set('scanlines', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Scanline gap",
      value: f.scanGap + 'px'
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 2,
      max: 8,
      step: 1,
      value: f.scanGap,
      onChange: v => set('scanGap', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Vignette",
      value: f.vignette.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 1,
      step: 0.01,
      value: f.vignette,
      onChange: v => set('vignette', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Dark wash",
      value: f.wash.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 1,
      step: 0.01,
      value: f.wash,
      onChange: v => set('wash', v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)',
        margin: '6px 0 10px'
      }
    }, "Composition"), /*#__PURE__*/React.createElement(Row, {
      label: "Title blur",
      value: f.titleBlur + 'px'
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 200,
      step: 1,
      value: f.titleBlur,
      onChange: v => set('titleBlur', v)
    })), /*#__PURE__*/React.createElement(Row, {
      label: "Title bg opacity",
      value: f.titleBgOpacity.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 1,
      step: 0.01,
      value: f.titleBgOpacity,
      onChange: v => set('titleBgOpacity', v)
    })), /*#__PURE__*/React.createElement("div", {
      style: { display: 'flex', gap: 8, margin: '6px 0 10px' }
    }, TITLE_BG_COLORS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => set('titleBgColor', c),
      'aria-label': c,
      style: {
        width: 26, height: 26, borderRadius: '50%', cursor: 'pointer', background: c,
        border: '1px solid ' + (f.titleBgColor === c ? 'var(--tyg-fg)' : 'rgba(243,243,243,0.18)'),
        boxShadow: f.titleBgColor === c ? '0 0 0 3px rgba(243,243,243,0.08)' : 'none'
      }
    }))), /*#__PURE__*/React.createElement(Row, {
      label: "Frame opacity",
      value: f.frame.toFixed(2)
    }, /*#__PURE__*/React.createElement(Slider, {
      min: 0,
      max: 1,
      step: 0.01,
      value: f.frame,
      onChange: v => set('frame', v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: reset,
      style: {
        ...btn,
        flex: 1
      }
    }, "Reset"), /*#__PURE__*/React.createElement("button", {
      onClick: copy,
      style: {
        ...btn,
        flex: 1,
        color: copied ? '#cfe0ff' : 'var(--tyg-fg-dim)'
      }
    }, copied ? 'Copied ✓' : 'Copy JSON'))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => !o),
      "aria-label": "Filter settings",
      style: {
        width: 46,
        height: 46,
        borderRadius: 13,
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'rgba(12,12,14,0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid ' + (open ? 'rgba(243,243,243,0.5)' : 'rgba(243,243,243,0.22)'),
        color: 'var(--tyg-fg)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"
    }))));
  }

  // ── Generative fallback (shown only when no video src) ─────────────────
  function useFlowField(ref, enabled) {
    React.useEffect(() => {
      if (!enabled) return;
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w,
        h,
        dpr,
        raf,
        t = 0,
        parts = [];
      const COUNT = 680;
      function size() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = '#0a0a0b';
        ctx.fillRect(0, 0, w, h);
        const g = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.7);
        g.addColorStop(0, 'rgba(34,40,58,0.55)');
        g.addColorStop(1, 'rgba(10,10,11,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        parts = [];
        for (let i = 0; i < COUNT; i++) parts.push({
          x: Math.random() * w,
          y: Math.random() * h
        });
      }
      function noise(x, y, tt) {
        return Math.sin(x * 0.0042 + tt * 0.25) + Math.cos(y * 0.0051 - tt * 0.2) + Math.sin((x + y) * 0.0026 + tt * 0.15);
      }
      function frame() {
        t += 0.016;
        ctx.fillStyle = 'rgba(10,10,11,0.055)';
        ctx.fillRect(0, 0, w, h);
        for (const p of parts) {
          const a = noise(p.x, p.y, t) * Math.PI;
          p.x += Math.cos(a) * 1.25;
          p.y += Math.sin(a) * 1.25;
          if (p.x < 0) p.x += w;
          if (p.x > w) p.x -= w;
          if (p.y < 0) p.y += h;
          if (p.y > h) p.y -= h;
          const hue = 208 + 28 * Math.sin(t * 0.1 + p.x * 0.001);
          const li = 46 + 20 * Math.sin(p.y * 0.002 + t * 0.1);
          ctx.fillStyle = 'hsla(' + hue + ',38%,' + li + '%,0.12)';
          ctx.fillRect(p.x, p.y, 1.5, 1.5);
        }
        raf = requestAnimationFrame(frame);
      }
      size();
      raf = requestAnimationFrame(frame);
      window.addEventListener('resize', size);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', size);
      };
    }, [enabled]);
  }

  // ── Technical / blueprint overlay primitives ──────────────────────────
  function GridField({
    opacity
  }) {
    const cols = 12;
    const rows = [0.27, 0.62];
    // crosses sit exactly on (vertical line × horizontal rule) intersections
    const cross = [{
      x: 25,
      y: 27,
      d: '0s'
    }, {
      x: 75,
      y: 27,
      d: '1.1s'
    }, {
      x: 58.3333,
      y: 62,
      d: '0.5s'
    }, {
      x: 33.3333,
      y: 62,
      d: '1.7s'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 22,
        zIndex: 6,
        pointerEvents: 'none',
        opacity,
        overflow: 'hidden'
      }
    }, Array.from({
      length: cols - 1
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "tyg-grow-v",
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: (i + 1) / cols * 100 + '%',
        width: 2,
        marginLeft: -1,
        background: 'rgba(243,243,243,0.18)',
        '--gd': i * 0.05 + 's'
      }
    })), rows.map((t, ri) => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "tyg-grow-h",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: t * 100 + '%',
        height: 2,
        marginTop: -1,
        background: 'rgba(243,243,243,0.18)',
        '--gd': 0.12 + ri * 0.1 + 's'
      }
    })), cross.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.x + '-' + c.y,
      className: "tyg-blink",
      style: {
        position: 'absolute',
        left: c.x + '%',
        top: c.y + '%',
        width: 16,
        height: 16,
        transform: 'translate(-50%, -50%)',
        animationDelay: c.d
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: 0,
        width: 2,
        height: '100%',
        marginLeft: -1,
        background: 'var(--tyg-fg-dim)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '50%',
        left: 0,
        height: 2,
        width: '100%',
        marginTop: -1,
        background: 'var(--tyg-fg-dim)'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      className: "tyg-scan",
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 2,
        background: 'linear-gradient(180deg, transparent, var(--tyg-accent), transparent)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "tyg-sweep",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(0,127,255,0.55), transparent)'
      }
    }));
  }
  function Cross({
    top,
    left,
    delay
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "tyg-blink",
      style: {
        position: 'absolute',
        zIndex: 7,
        width: 11,
        height: 11,
        top,
        left,
        animationDelay: delay,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: 0,
        width: 1,
        height: '100%',
        marginLeft: -0.5,
        background: 'var(--tyg-fg-faint)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '50%',
        left: 0,
        height: 1,
        width: '100%',
        marginTop: -0.5,
        background: 'var(--tyg-fg-faint)'
      }
    }));
  }
  function CornerBtn({
    style,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        zIndex: 9,
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--tyg-line-soft)',
        color: 'var(--tyg-fg-dim)',
        background: 'rgba(12,12,14,0.4)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        ...style
      }
    }, children);
  }
  function PixelArrow({
    dir,
    className,
    style
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      className: className,
      width: "24",
      height: "16",
      viewBox: "0 0 24 16",
      style: {
        position: 'absolute',
        zIndex: 8,
        ...style
      },
      fill: "none",
      stroke: "var(--tyg-accent)",
      strokeWidth: "2.4",
      shapeRendering: "crispEdges"
    }, dir === 'right' ? /*#__PURE__*/React.createElement("path", {
      d: "M2 8h14M13 3l5 5-5 5"
    }) : /*#__PURE__*/React.createElement("path", {
      d: "M22 8H8M11 3l-5 5 5 5"
    }));
  }
  function Anno({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        zIndex: 8,
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 10.5,
        letterSpacing: '0.1em',
        color: 'var(--tyg-fg-faint)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        ...style
      }
    }, children);
  }
  function LandingScreen({
    lang,
    setLang
  }) {
    const [f, setF] = React.useState(loadFilter);
    React.useEffect(() => {
      try {
        localStorage.setItem(FILTER_KEY, JSON.stringify(f));
      } catch (e) {}
    }, [f]);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const reset = () => setF({
      ...DEFAULTS
    });
    const grain = React.useMemo(makeGrain, []);

    // ── Hero layout variant (01 editorial · 02 centered · 03 giant) ──────
    const [layout, setLayout] = React.useState(() => {
      try {
        return parseInt(localStorage.getItem('tyg-home-layout-v1'), 10) || 1;
      } catch (e) {
        return 1;
      }
    });
    React.useEffect(() => {
      try {
        localStorage.setItem('tyg-home-layout-v1', String(layout));
      } catch (e) {}
    }, [layout]);
    const canvasRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const hasVideo = !!HERO_VIDEO_SRC;
    useFlowField(canvasRef, !hasVideo);

    // Pick a fresh random entry point for this page load and seek there once the
    // clip's metadata (duration) is known.
    const heroStart = React.useRef(HERO_START_TIMES[Math.floor(Math.random() * HERO_START_TIMES.length)]);
    const seekToRandomStart = React.useCallback(() => {
      const v = videoRef.current;
      if (!v) return;
      let t = heroStart.current;
      if (Number.isFinite(v.duration) && v.duration > 0) t = Math.min(t, Math.max(0, v.duration - 0.1));
      try {
        v.currentTime = t;
      } catch (e) {}
    }, []);
    const cssFilter = `brightness(${f.brightness}) contrast(${f.contrast}) saturate(${f.saturate}) grayscale(${f.grayscale}) hue-rotate(${f.hue}deg) blur(${f.blur}px)`;

    // ── Scroll-coupled exit ────────────────────────────────────────────
    // The hero is pinned (position:fixed) while the sections below rise up
    // and cover it. As they rise, the hero's foreground — title, role line,
    // index, lines, frosted blocks, crosshairs — eases out with the scroll.
    const REDUCED = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const [scrollP, setScrollP] = React.useState(0);
    React.useEffect(() => {
      let raf = 0;
      const onScroll = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const h = window.innerHeight || 1;
          setScrollP(Math.min(Math.max(window.scrollY / h, 0), 1));
        });
      };
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      onScroll();
      return () => {
        window.removeEventListener('scroll', onScroll);
        if (raf) cancelAnimationFrame(raf);
      };
    }, []);

    // ── First-paint intro gate — keep the foreground hidden until the boot
    // loader has begun dismissing, then release the staggered cascade. ──
    const [started, setStarted] = React.useState(false);
    React.useEffect(() => {
      if (REDUCED) {
        setStarted(true);
        return;
      }
      let t;
      const tick = () => {
        const l = document.getElementById('tyg-loader');
        if (!l || l.classList.contains('tyg-loaded')) {
          setStarted(true);
          return;
        }
        t = setTimeout(tick, 60);
      };
      tick();
      const safety = setTimeout(() => setStarted(true), 3000);
      return () => {
        clearTimeout(t);
        clearTimeout(safety);
      };
    }, []);

    // Kick the gated intro animations — some engines won't assign a start
    // time to a CSS animation that only matches once an ancestor class is
    // toggled, leaving them frozen on frame 0. Nudge any null-startTime ones.
    React.useEffect(() => {
      if (!started) return;
      const kick = () => {
        document.querySelectorAll('.tyg-go .tyg-intro, .tyg-go .tyg-intro-cx, .tyg-go .tyg-grow-v, .tyg-go .tyg-grow-h, .tyg-go .tyg-grow-box').forEach(el => el.getAnimations().forEach(a => {
          if (a.startTime === null) {
            try {
              a.startTime = document.timeline.currentTime;
            } catch (e) {}
          }
        }));
      };
      const r = requestAnimationFrame(() => requestAnimationFrame(kick));
      return () => cancelAnimationFrame(r);
    }, [started, layout]);
    // foreground is fully gone a touch before the panel finishes covering;
    // smoothstep gives the easing the brief asked for.
    const fp = Math.min(scrollP / 0.74, 1);
    const fgOpacity = 1 - fp * fp * (3 - 2 * fp);
    const fgShift = REDUCED ? 0 : -scrollP * 64;
    // whole-hero veil — as the page scrolls toward the sections, the entire
    // first screen (video + foreground) eases to the background colour and
    // is gone before the rising panel finishes covering it.
    const veil = REDUCED ? 0 : (() => {
      const t = Math.min(scrollP / 0.82, 1);
      return t * t * (3 - 2 * t);
    })();
    const fgAtRest = scrollP <= 0.0005;
    const fgStyle = {
      position: 'absolute',
      inset: 0,
      zIndex: 6,
      opacity: fgOpacity,
      transform: fgAtRest ? 'none' : `translateY(${fgShift}px)`,
      pointerEvents: fgOpacity < 0.04 ? 'none' : 'auto',
      willChange: fgAtRest ? 'auto' : 'opacity, transform'
    };

    // ── Shared content fragments ──────────────────────────────────────────
    const FIELDS = ['Media Art', '3DCG', 'Audio-Visual', 'Interaction Design', 'AI'];
    const fieldRow = extra => /*#__PURE__*/React.createElement("div", {
      className: "tyg-intro",
      style: {
        '--iy': '22px',
        animationDelay: '0.52s',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '8px 14px',
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 'var(--tyg-text-sm)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-dim)',
        ...extra
      }
    }, FIELDS.map((d, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: d
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.5,
        color: 'var(--tyg-fg-faint)'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, d))));

    // ── Three hero title compositions ─────────────────────────────────────
    function renderIdentity() {
      // 02 — centered monumental
      if (layout === 2) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            zIndex: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 24px',
            pointerEvents: 'none'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            display: 'inline-block',
            padding: '4px 8px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '8px',
            animationDelay: '0.22s',
            position: 'absolute',
            inset: '-34px -90px',
            backdropFilter: `blur(${f.titleBlur}px)`,
            WebkitBackdropFilter: `blur(${f.titleBlur}px)`,
            background: hexRgba(f.titleBgColor, f.titleBgOpacity),
            pointerEvents: 'none',
            maskImage: 'radial-gradient(120% 120% at 50% 50%, #000 44%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(120% 120% at 50% 50%, #000 44%, transparent 100%)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '16px',
            animationDelay: '0.16s',
            position: 'relative',
            marginBottom: 24,
            fontFamily: 'var(--tyg-font-mono)',
            fontSize: 'var(--tyg-text-xs)',
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'var(--tyg-fg-faint)'
          }
        }, "Portfolio \xB7 Ed. 2026"), /*#__PURE__*/React.createElement("h1", {
          className: "tyg-intro",
          style: {
            '--iy': '40px',
            animationDelay: '0.30s',
            position: 'relative',
            margin: 0,
            fontFamily: 'var(--tyg-font-display)',
            fontWeight: 'var(--tyg-w-light)',
            color: 'var(--tyg-fg-title)',
            lineHeight: 0.9,
            letterSpacing: '0.03em',
            fontSize: 'clamp(52px, 10vw, 150px)'
          }
        }, "TAN\xA0YANGGU"), /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '26px',
            animationDelay: '0.40s',
            position: 'relative',
            marginTop: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            color: 'var(--tyg-fg)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 48,
            height: 1,
            background: 'var(--tyg-line-strong, var(--tyg-fg-dim))'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--tyg-text-2xl)',
            letterSpacing: 'var(--tyg-tracking-wide)',
            textTransform: 'uppercase'
          }
        }, "RustyHead"), /*#__PURE__*/React.createElement("span", {
          style: {
            width: 48,
            height: 1,
            background: 'var(--tyg-line-strong, var(--tyg-fg-dim))'
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '24px',
            animationDelay: '0.48s',
            position: 'relative',
            marginTop: 18,
            fontSize: 'var(--tyg-text-md)',
            letterSpacing: 'var(--tyg-tracking-wide)',
            textTransform: 'uppercase',
            color: 'var(--tyg-fg-muted)'
          }
        }, "Visual Artist\xA0\xA0/\xA0\xA0Interactive Engineer"), fieldRow({
          justifyContent: 'center',
          marginTop: 18
        }), /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '20px',
            animationDelay: '0.58s',
            position: 'relative',
            marginTop: 16,
            fontFamily: 'var(--tyg-font-mono)',
            fontSize: 'var(--tyg-text-xs)',
            letterSpacing: '0.14em',
            color: 'var(--tyg-fg-dim)'
          }
        }, "Based in Tokyo, JP")));
      }
      // 03 — two-line giant, meta strip across the bottom
      if (layout === 3) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '9%',
            zIndex: 8,
            padding: '0 clamp(24px, 6vw, 84px)',
            pointerEvents: 'none'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            display: 'inline-block'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '8px',
            animationDelay: '0.22s',
            position: 'absolute',
            inset: '-30px -60px',
            backdropFilter: `blur(${f.titleBlur}px)`,
            WebkitBackdropFilter: `blur(${f.titleBlur}px)`,
            background: hexRgba(f.titleBgColor, f.titleBgOpacity),
            pointerEvents: 'none',
            maskImage: 'radial-gradient(130% 130% at 22% 50%, #000 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(130% 130% at 22% 50%, #000 50%, transparent 100%)'
          }
        }), /*#__PURE__*/React.createElement("h1", {
          className: "tyg-intro",
          style: {
            '--iy': '46px',
            animationDelay: '0.28s',
            position: 'relative',
            margin: 0,
            fontFamily: 'var(--tyg-font-display)',
            fontWeight: 'var(--tyg-w-light)',
            color: 'var(--tyg-fg-title)',
            lineHeight: 0.82,
            letterSpacing: '0.01em',
            fontSize: 'clamp(64px, 13vw, 200px)',
            textTransform: 'uppercase'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block'
          }
        }, "Tan"), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block'
          }
        }, "Yanggu"))), /*#__PURE__*/React.createElement("div", {
          className: "tyg-intro",
          style: {
            '--iy': '24px',
            animationDelay: '0.46s',
            position: 'relative',
            marginTop: 30,
            paddingTop: 22,
            borderTop: '1px solid var(--tyg-line-soft)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: '12px 40px'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            color: 'var(--tyg-fg)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 28,
            height: 1,
            background: 'var(--tyg-line-strong, var(--tyg-fg-dim))'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--tyg-text-2xl)',
            letterSpacing: 'var(--tyg-tracking-wide)',
            textTransform: 'uppercase'
          }
        }, "RustyHead")), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--tyg-text-md)',
            letterSpacing: 'var(--tyg-tracking-wide)',
            textTransform: 'uppercase',
            color: 'var(--tyg-fg-muted)'
          }
        }, "Visual Artist / Interactive Engineer"), fieldRow({}), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--tyg-font-mono)',
            fontSize: 'var(--tyg-text-xs)',
            letterSpacing: '0.14em',
            color: 'var(--tyg-fg-dim)'
          }
        }, "Based in Tokyo, JP")));
      }
      // 01 — editorial, lower-left (default)
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: 84,
          bottom: '13%',
          zIndex: 8,
          maxWidth: 'min(92vw, 880px)',
          textAlign: 'left'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          display: 'inline-block',
          padding: '6px 4px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "tyg-intro",
        style: {
          '--iy': '8px',
          animationDelay: '0.22s',
          position: 'absolute',
          inset: '-20px -56px',
          backdropFilter: `blur(${f.titleBlur}px)`,
          WebkitBackdropFilter: `blur(${f.titleBlur}px)`,
          background: hexRgba(f.titleBgColor, f.titleBgOpacity),
          pointerEvents: 'none',
          maskImage: 'radial-gradient(130% 120% at 30% 46%, #000 46%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(130% 120% at 30% 46%, #000 46%, transparent 100%)'
        }
      }), /*#__PURE__*/React.createElement("h1", {
        className: "tyg-intro",
        style: {
          '--iy': '36px',
          animationDelay: '0.30s',
          position: 'relative',
          margin: 0,
          fontFamily: 'var(--tyg-font-display)',
          fontWeight: 'var(--tyg-w-light)',
          color: 'var(--tyg-fg-title)',
          lineHeight: 0.94,
          letterSpacing: '0.02em',
          fontSize: 'clamp(40px, 6.6vw, 92px)',
          textAlign: 'left'
        }
      }, "TAN\xA0YANGGU"), /*#__PURE__*/React.createElement("div", {
        className: "tyg-intro",
        style: {
          '--iy': '26px',
          animationDelay: '0.38s',
          position: 'relative',
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          color: 'var(--tyg-fg)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 40,
          height: 1,
          background: 'var(--tyg-line-strong, var(--tyg-fg-dim))'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--tyg-text-2xl)',
          letterSpacing: 'var(--tyg-tracking-wide)',
          textTransform: 'uppercase',
          fontWeight: 'var(--tyg-w-regular)'
        }
      }, "RustyHead")), /*#__PURE__*/React.createElement("div", {
        className: "tyg-intro",
        style: {
          '--iy': '24px',
          animationDelay: '0.46s',
          position: 'relative',
          marginTop: 18,
          fontSize: 'var(--tyg-text-md)',
          letterSpacing: 'var(--tyg-tracking-wide)',
          textTransform: 'uppercase',
          color: 'var(--tyg-fg-muted)',
          fontWeight: 'var(--tyg-w-regular)'
        }
      }, "Visual Artist\xA0\xA0/\xA0\xA0Interactive Engineer"), fieldRow({
        marginTop: 18
      }), /*#__PURE__*/React.createElement("div", {
        className: "tyg-intro",
        style: {
          '--iy': '20px',
          animationDelay: '0.58s',
          position: 'relative',
          marginTop: 16,
          fontFamily: 'var(--tyg-font-mono)',
          fontSize: 'var(--tyg-text-xs)',
          letterSpacing: '0.14em',
          color: 'var(--tyg-fg-dim)'
        }
      }, "Based in Tokyo, JP")));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        minHeight: 560,
        overflow: 'hidden',
        background: 'var(--tyg-bg-void)',
        zIndex: 0
      }
    }, !hasVideo && /*#__PURE__*/React.createElement("canvas", {
      ref: canvasRef,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0
      }
    }), hasVideo && /*#__PURE__*/React.createElement("video", {
      ref: videoRef,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      src: HERO_VIDEO_SRC,
      onLoadedMetadata: seekToRandomStart,
      className: "tyg-kenburns",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        zIndex: 1,
        filter: cssFilter
      }
    }), f.tintStrength > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
        background: f.tint,
        opacity: f.tintStrength,
        mixBlendMode: f.tintBlend
      }
    }), f.grain > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
        backgroundImage: `url(${grain})`,
        backgroundSize: '160px 160px',
        opacity: f.grain,
        mixBlendMode: 'overlay',
        animation: 'tyg-grain 0.5s steps(3) infinite'
      }
    }), f.scanlines > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 4,
        pointerEvents: 'none',
        opacity: f.scanlines,
        backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.9) 0px, rgba(0,0,0,0.9) 1px, transparent 1px, transparent ${f.scanGap}px)`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        pointerEvents: 'none',
        background: `radial-gradient(120% 90% at 50% 45%, rgba(10,10,11,0) 30%, rgba(10,10,11,${f.vignette}) 100%), linear-gradient(180deg, rgba(10,10,11,${f.wash}) 0%, rgba(10,10,11,0) 24%, rgba(10,10,11,0) 70%, rgba(10,10,11,${Math.min(f.wash + 0.25, 1)}) 100%)`
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: started ? 'tyg-go' : undefined,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        pointerEvents: 'none'
      }
    }, [{
      w: 92,
      h: 58,
      top: '13%',
      right: '10%',
      d: '0s'
    }, {
      w: 30,
      h: 30,
      top: '21%',
      right: '7%',
      d: '1.2s'
    }, {
      w: 18,
      h: 40,
      top: '11%',
      right: '5.5%',
      d: '2.1s'
    }, {
      w: 11,
      h: 11,
      top: '25%',
      right: '14%',
      d: '0.6s'
    }, {
      w: 64,
      h: 38,
      top: '40%',
      right: '13%',
      d: '1.7s'
    }, {
      w: 24,
      h: 24,
      top: '54%',
      right: '7.5%',
      d: '2.9s'
    }, {
      w: 48,
      h: 28,
      top: '17%',
      left: '15%',
      d: '0.9s'
    }, {
      w: 22,
      h: 50,
      top: '31%',
      left: '9%',
      d: '3.7s'
    }, {
      w: 70,
      h: 26,
      top: '64%',
      left: '20%',
      d: '1.4s'
    }, {
      w: 16,
      h: 16,
      bottom: '8%',
      right: '22%',
      d: '3.3s'
    }].map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "tyg-grow-box",
      style: {
        position: 'absolute',
        width: b.w,
        height: b.h,
        top: b.top,
        bottom: b.bottom,
        left: b.left,
        right: b.right,
        background: 'rgba(243,243,243,0.05)',
        border: '1px solid rgba(243,243,243,0.16)',
        backdropFilter: `blur(${f.titleBlur + 40}px)`,
        WebkitBackdropFilter: `blur(${f.titleBlur + 40}px)`,
        pointerEvents: 'none',
        '--gd': 0.18 + i * 0.07 + 's'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: started ? 'tyg-go' : undefined,
      style: fgStyle
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 6,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement(GridField, {
      opacity: f.frame
    }), /*#__PURE__*/React.createElement("div", {
      className: "tyg-grow-h",
      style: {
        position: 'absolute',
        inset: 22,
        border: '1px solid var(--tyg-line-soft)',
        opacity: f.frame,
        '--gd': '0.1s'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "tyg-intro",
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        '--iy': '-10px',
        animationDelay: '0.24s'
      }
    }, /*#__PURE__*/React.createElement(CornerBtn, {
      style: {
        top: 22,
        right: 22,
        borderLeft: 'none',
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tyg-rotate",
      style: {
        display: 'block',
        width: 13,
        height: 13
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 12 12",
      stroke: "currentColor",
      strokeWidth: "1.2",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "4.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 1.6V6l3 1.5"
    })))), /*#__PURE__*/React.createElement(CornerBtn, {
      style: {
        bottom: 22,
        left: 22,
        borderRight: 'none',
        borderTop: 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 12 12",
      stroke: "currentColor",
      strokeWidth: "1.2",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3l6 6M9 3l-6 6"
    }))), /*#__PURE__*/React.createElement(CornerBtn, {
      style: {
        bottom: 22,
        right: 22,
        borderLeft: 'none',
        borderTop: 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 12 12",
      stroke: "currentColor",
      strokeWidth: "1.2",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3l4 3-4 3M7 3v6"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "tyg-intro",
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        '--ix': '8px',
        '--iy': '20px',
        animationDelay: '0.32s'
      }
    }, [{
      top: '18%',
      left: '32%',
      d: '0s'
    }, {
      top: '34%',
      left: '54%',
      d: '0.7s'
    }, {
      top: '28%',
      left: '70%',
      d: '2.5s'
    }, {
      top: '46%',
      left: '82%',
      d: '1.9s'
    }, {
      top: '62%',
      left: '26%',
      d: '1.4s'
    }, {
      top: '70%',
      left: '64%',
      d: '0.3s'
    }, {
      top: '66%',
      left: '46%',
      d: '1.1s'
    }, {
      top: '52%',
      left: '16%',
      d: '3.0s'
    }].map((c, i) => /*#__PURE__*/React.createElement(Cross, {
      key: 'x' + i,
      top: c.top,
      left: c.left,
      delay: c.d
    }))), /*#__PURE__*/React.createElement("div", {
      className: "tyg-intro-cx",
      style: {
        '--iy': '18px',
        animationDelay: '0.46s',
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: 18,
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 10.5,
        letterSpacing: '0.1em',
        color: 'var(--tyg-fg-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "#grid"), /*#__PURE__*/React.createElement("span", null, "#12columns"), /*#__PURE__*/React.createElement("span", null, "#margin22"), /*#__PURE__*/React.createElement("span", null, "#gutter20")), layout === 1 && /*#__PURE__*/React.createElement("div", {
      className: "tyg-intro",
      style: {
        '--iy': '22px',
        animationDelay: '0.12s',
        position: 'absolute',
        top: 92,
        left: 80,
        zIndex: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--tyg-font-display)',
        fontWeight: 'var(--tyg-w-light)',
        fontSize: 'clamp(52px, 8.5vw, 120px)',
        lineHeight: 0.86,
        letterSpacing: '0.02em',
        color: 'transparent',
        WebkitTextStroke: '1px var(--tyg-line-soft)'
      }
    }, "2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)'
      }
    }, "Portfolio \xB7 Ed.")), renderIdentity(), /*#__PURE__*/React.createElement("div", {
      className: "tyg-intro",
      style: {
        '--iy': '14px',
        animationDelay: '0.40s',
        position: 'absolute',
        right: 64,
        bottom: 40,
        zIndex: 10,
        fontSize: 'var(--tyg-text-xs)',
        letterSpacing: '0.12em',
        color: 'var(--tyg-fg-faint)',
        fontFamily: 'var(--tyg-font-mono)'
      }
    }, "\xA92026"), /*#__PURE__*/React.createElement("a", {
      href: "#works-cue",
      onClick: e => {
        e.preventDefault();
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      },
      "aria-label": "Scroll",
      className: "tyg-intro-cx",
      style: {
        '--iy': '16px',
        animationDelay: '0.72s',
        position: 'absolute',
        left: '50%',
        bottom: 74,
        transform: 'translateX(-50%)',
        zIndex: 11,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 10,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement("svg", {
      className: "tyg-scrollcue",
      width: "14",
      height: "16",
      viewBox: "0 0 14 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.3"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1v12M2.5 9.5 7 14l4.5-4.5"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 22,
        bottom: 22,
        zIndex: 190,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '9px 9px 9px 15px',
        borderRadius: 3,
        background: 'rgba(12,12,14,0.62)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--tyg-line-soft)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--tyg-font-mono)',
        fontSize: 9.5,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--tyg-fg-faint)'
      }
    }, "Layout"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, [1, 2, 3].map(n => {
      const on = layout === n;
      return /*#__PURE__*/React.createElement("button", {
        key: n,
        onClick: () => setLayout(n),
        "aria-label": 'Layout ' + n,
        title: ['Editorial', 'Centered', 'Giant'][n - 1],
        style: {
          width: 30,
          height: 30,
          borderRadius: 2,
          cursor: 'pointer',
          fontFamily: 'var(--tyg-font-mono)',
          fontSize: 11,
          letterSpacing: '0.04em',
          color: on ? 'var(--tyg-bg-void)' : 'var(--tyg-fg-dim)',
          background: on ? 'var(--tyg-fg)' : 'transparent',
          border: '1px solid ' + (on ? 'var(--tyg-fg)' : 'var(--tyg-line-soft)'),
          transition: 'color var(--tyg-dur-fast) var(--tyg-ease), background var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease)'
        }
      }, '0' + n);
    }))), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 40,
        pointerEvents: 'none',
        background: 'var(--tyg-bg)',
        opacity: veil
      }
    }));
  }
  window.LandingScreen = LandingScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/LandingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProfileScreen.jsx
try { (() => {
// ProfileScreen — bio + bilingual name, then Performance / Exhibition / Award / Skills.
// First-paint intro: header text + portrait rise from below in sequence; every
// horizontal hairline (row separators + divider, NOT the nav line) grows out
// from its left edge with an ease-in-out, staggered one after another.
(function () {
  const {
    NavBar,
    Eyebrow,
    DateCode
  } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';

  // ── shared timing ──────────────────────────────────────────────────────
  const RISE_STEP = 0.07; // stagger between rising header elements
  const LINE_START = 0.42; // first line begins growing after the header settles
  const LINE_STEP = 0.075; // stagger between successive growing lines

  // A 1px hairline that grows out from the left when the page enters.
  function Line({
    d
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tyg-pf-line",
      style: {
        height: 1,
        background: 'var(--tyg-line-soft)',
        '--d': d + 's'
      }
    });
  }
  function ListBlock({
    label,
    rows,
    labelDelay,
    nextLine
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        marginBottom: 'var(--tyg-space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tyg-pf-rise",
      style: {
        '--d': labelDelay + 's'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "dim",
      style: {
        marginBottom: 18
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, rows.map((r, i) => {
      const d = nextLine();
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.createElement(Line, {
        d: d
      }), /*#__PURE__*/React.createElement("div", {
        className: "tyg-pf-rise",
        style: {
          '--d': d + 's',
          display: 'grid',
          gridTemplateColumns: '88px 1fr',
          gap: 20,
          padding: '12px 0',
          alignItems: 'baseline'
        }
      }, /*#__PURE__*/React.createElement(DateCode, {
        tone: "dim"
      }, r[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--tyg-fg)',
          fontSize: 'var(--tyg-text-base)'
        }
      }, r[1]), r[2] && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--tyg-fg-dim)',
          fontSize: 'var(--tyg-text-sm)',
          marginLeft: 10
        }
      }, "\xB7 ", r[2]))));
    })));
  }
  function ProfileScreen({
    lang,
    setLang
  }) {
    const p = window.TYG_DATA.profile;
    const rootRef = React.useRef(null);
    React.useEffect(() => {
      const el = rootRef.current;
      if (!el) return;
      const id = requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('tyg-pf-go')));
      return () => cancelAnimationFrame(id);
    }, []);

    // Sequential delay generator for the growing hairlines.
    let li = 0;
    const nextLine = () => LINE_START + li++ * LINE_STEP;
    return /*#__PURE__*/React.createElement("div", {
      ref: rootRef,
      className: "tyg-pf"
    }, /*#__PURE__*/React.createElement("style", null, `
          @keyframes tyg-pf-rise {
            from { opacity: 0; transform: translateY(34px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .tyg-pf .tyg-pf-rise { opacity: 0; }
          .tyg-pf.tyg-pf-go .tyg-pf-rise {
            animation: tyg-pf-rise .9s cubic-bezier(.16,.83,.31,1) var(--d, 0s) both;
            will-change: opacity, transform;
          }
          /* hairline grows from its left edge — ease-in-out, like the SVG draw */
          @keyframes tyg-pf-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .tyg-pf .tyg-pf-line { transform: scaleX(0); transform-origin: left center; }
          .tyg-pf.tyg-pf-go .tyg-pf-line {
            animation: tyg-pf-grow 1.5s cubic-bezier(.25,1,.5,1) var(--d, 0s) both;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .tyg-pf .tyg-pf-rise, .tyg-pf .tyg-pf-line {
              animation: none !important; opacity: 1 !important; transform: none !important;
            }
          }
        `), /*#__PURE__*/React.createElement(NavBar, {
      lang: lang,
      onLangChange: setLang,
      brand: "Tan Yanggu",
      brandSuffix: "Portfolio",
      links: [{
        label: 'Home',
        href: '#/'
      }, {
        label: 'Works',
        href: '#/works'
      }, {
        label: 'Profile',
        href: '#/profile',
        current: true
      }, {
        label: 'Contact',
        href: '#/contact'
      }]
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--tyg-container-narrow)',
        margin: '0 auto',
        padding: '48px clamp(20px, 5vw, 72px) 96px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        gap: 32,
        alignItems: 'start',
        marginBottom: 'var(--tyg-space-7)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tyg-pf-rise",
      style: {
        '--d': '0s',
        borderRadius: 'var(--tyg-radius-md)',
        overflow: 'hidden',
        aspectRatio: '3 / 4',
        background: 'var(--tyg-ink-900)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__IMG(p.portrait),
      alt: p.nameEn,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "tyg-pf-rise",
      style: {
        '--d': RISE_STEP + 's'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Profile")), /*#__PURE__*/React.createElement("h1", {
      className: "tyg-pf-rise",
      style: {
        '--d': RISE_STEP * 2 + 's',
        margin: '12px 0 4px',
        fontSize: 'var(--tyg-text-4xl)',
        fontWeight: 300
      }
    }, p.nameJa), /*#__PURE__*/React.createElement("div", {
      className: "tyg-pf-rise",
      style: {
        '--d': RISE_STEP * 3 + 's',
        color: 'var(--tyg-fg-dim)',
        fontSize: 'var(--tyg-text-md)',
        letterSpacing: '0.04em'
      }
    }, p.nameEn, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tyg-fg-faint)'
      }
    }, "/ ", p.alias)))), /*#__PURE__*/React.createElement("p", {
      className: "tyg-pf-rise",
      style: {
        '--d': RISE_STEP * 4 + 's',
        fontSize: 'var(--tyg-text-md)',
        lineHeight: 1.9,
        color: 'var(--tyg-fg)',
        fontWeight: 300,
        marginBottom: '1em'
      }
    }, lang === 'JA' ? p.bioJa : p.bioEn), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--tyg-space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(Line, {
      d: LINE_START
    })), /*#__PURE__*/React.createElement(ListBlock, {
      label: "Performance",
      rows: p.performance,
      labelDelay: LINE_START + LINE_STEP,
      nextLine: nextLine
    }), /*#__PURE__*/React.createElement(ListBlock, {
      label: "Exhibition",
      rows: p.exhibition,
      labelDelay: nextLine() + LINE_STEP * 0.5,
      nextLine: nextLine
    }), /*#__PURE__*/React.createElement(ListBlock, {
      label: "Award",
      rows: p.award,
      labelDelay: nextLine() + LINE_STEP * 0.5,
      nextLine: nextLine
    }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      className: "tyg-pf-rise",
      style: {
        '--d': nextLine() + LINE_STEP * 0.5 + 's'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "dim",
      style: {
        marginBottom: 18
      }
    }, "Skills")), p.skills.map((s, i) => {
      const d = nextLine();
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.createElement(Line, {
        d: d
      }), /*#__PURE__*/React.createElement("div", {
        className: "tyg-pf-rise",
        style: {
          '--d': d + 's',
          display: 'grid',
          gridTemplateColumns: '170px 1fr',
          gap: 20,
          padding: '10px 0'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--tyg-fg-dim)',
          fontSize: 'var(--tyg-text-sm)'
        }
      }, s[0]), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--tyg-fg)',
          fontSize: 'var(--tyg-text-base)'
        }
      }, s[1])));
    }))));
  }
  window.ProfileScreen = ProfileScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectScreen.jsx
try { (() => {
// ProjectScreen — a single work: full-bleed hero, title + meta, prose, gallery.
(function () {
  const {
    NavBar,
    MetaRow,
    Button,
    Divider
  } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';
  function ProjectScreen({
    slug,
    lang,
    setLang
  }) {
    const work = window.TYG_DATA.works.find(w => w.slug === slug) || window.TYG_DATA.works[0];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
      lang: lang,
      onLangChange: setLang,
      brand: "Tan Yanggu",
      brandSuffix: "Portfolio",
      links: [{
        label: 'Home',
        href: '#/'
      }, {
        label: 'Works',
        href: '#/works',
        current: true
      }, {
        label: 'Profile',
        href: '#/profile'
      }, {
        label: 'Contact',
        href: '#/contact'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        background: 'var(--tyg-ink-900)',
        aspectRatio: '21 / 9',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__IMG(work.image),
      alt: work.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--tyg-container-narrow)',
        margin: '0 auto',
        padding: '48px clamp(20px, 5vw, 72px) 96px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/works",
      style: {
        fontSize: 'var(--tyg-text-xs)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--tyg-fg-dim)'
      }
    }, "\u2190 ", lang === 'JA' ? '作品一覧' : 'All works'), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '20px 0 16px',
        fontSize: 'var(--tyg-text-4xl)',
        fontWeight: 300,
        lineHeight: 1.25
      }
    }, work.title), /*#__PURE__*/React.createElement(MetaRow, {
      date: work.date,
      tags: work.tags,
      dateTone: "muted"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        color: 'var(--tyg-fg-dim)',
        fontSize: 'var(--tyg-text-sm)'
      }
    }, work.place), /*#__PURE__*/React.createElement(Divider, null), work.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 'var(--tyg-text-md)',
        lineHeight: 1.7,
        color: 'var(--tyg-fg)',
        marginBottom: '1.2em',
        fontWeight: 300
      }
    }, p)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '32px'
      }
    }, work.gallery.map((src, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderRadius: 'var(--tyg-radius-md)',
        overflow: 'hidden',
        background: 'var(--tyg-ink-900)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__IMG(src),
      alt: "",
      style: {
        width: '100%',
        display: 'block'
      }
    })))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tyg-fg-faint)',
        fontSize: 'var(--tyg-text-sm)'
      }
    }, "Tan Yanggu \u2014 ", work.date), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      href: "#/works"
    }, "Back to works"))));
  }
  window.ProjectScreen = ProjectScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Tan Yanggu portfolio — sample content for the UI kit.
// Curatorial copy in the brand voice; imagery from assets/images.

// Asset resolver — when this page is bundled to standalone, the bundler fills
// window.__resources[id] with blob URLs (ids declared via <meta ext-resource-dependency>).
// Otherwise we fall back to the on-disk path (TYG_BASE + logical path), so the
// live app is unaffected.
window.__ASSET_MAP = window.__ASSET_MAP || {
  'assets/images/perf-wesa.jpg': 'img_perfwesa',
  'assets/images/perf-lee-1.jpg': 'img_perflee1',
  'assets/images/perf-lee-2.jpg': 'img_perflee2',
  'assets/images/emergent-cosmos.jpg': 'img_emergent',
  'assets/images/fulldome-body.jpg': 'img_fulldome',
  'assets/images/key-visual.jpg': 'img_keyvisual',
  'assets/favicon.png': 'favicon'
};
window.__IMG = window.__IMG || function (p) {
  var r = window.__resources,
    m = window.__ASSET_MAP;
  if (r && m && m[p] && r[m[p]]) return r[m[p]];
  return (window.TYG_BASE || '') + p;
};
window.TYG_DATA = {
  works: [{
    slug: 'wesa-2025',
    title: 'WeSA Festival 2025 — DNS & RustyHead',
    date: '2025.12',
    place: 'Seoul, Korea',
    tags: ['AfterEffects', 'AI', 'UnrealEngine', 'VJ'],
    image: 'assets/images/perf-wesa.jpg',
    gallery: ['assets/images/perf-wesa.jpg', 'assets/images/perf-lee-1.jpg', 'assets/images/perf-lee-2.jpg'],
    body: ['An audiovisual live set performed with sound artist DNS at WeSA Festival 2025 in Seoul. Real-time imagery rendered in Unreal Engine responds to the modular signal — eroded geometry, projection light, and the occasional warm rupture.', 'The visual system was built to be played, not played back: scenes are driven live from the performance, drifting between near-monochrome density and sudden colour.']
  }, {
    slug: 'emergent-cosmos',
    title: 'Emergent Cosmos',
    date: '2025.08',
    place: 'Personal work',
    tags: ['Personal', 'UnrealEngine'],
    image: 'assets/images/emergent-cosmos.jpg',
    gallery: ['assets/images/emergent-cosmos.jpg', 'assets/images/fulldome-body.jpg'],
    body: ['A real-time study in formation and collapse. Particles accrete into structure and dissolve again, lit only by their own motion against the void.']
  }, {
    slug: 'synesthesia-array',
    title: 'A/V Performance at Synesthesia Array',
    date: '2024.12',
    place: 'Tokyo, Japan',
    tags: ['AfterEffects', 'AI', 'Resolume Arena', 'UnrealEngine'],
    image: 'assets/images/perf-lee-1.jpg',
    gallery: ['assets/images/perf-lee-1.jpg', 'assets/images/perf-lee-2.jpg'],
    body: ['The inaugural night of Synesthesia Array — the Tokyo-based audiovisual series co-founded with sound artist DNS at the end of 2024. A live performance for projection, controllers, and silhouette.']
  }, {
    slug: 'expanding-body',
    title: '拡張的身体',
    date: '2024.09',
    place: 'Tokyo, Japan',
    tags: ['CG', 'Fulldome Projection', 'TouchDesigner'],
    image: 'assets/images/fulldome-body.jpg',
    gallery: ['assets/images/fulldome-body.jpg', 'assets/images/emergent-cosmos.jpg'],
    body: ['A fulldome work on the body extended through technology. The dome distorts the figure into orbit — a kaleidoscopic anatomy mapped across the planetarium ceiling.']
  }, {
    slug: 'tohoku-tour',
    title: 'DNS + RustyHead — Japan Tohoku Tour',
    date: '2025.09',
    place: 'Ishinomaki / Morioka, Japan',
    tags: ['TouchDesigner', 'VJ'],
    image: 'assets/images/perf-lee-2.jpg',
    gallery: ['assets/images/perf-lee-2.jpg', 'assets/images/perf-wesa.jpg'],
    body: ['Two nights of audiovisual performance across the Tohoku region with DNS — improvised visuals routed live through TouchDesigner.']
  }, {
    slug: 'data-family',
    title: 'Project Data Family',
    date: '2023.05',
    place: 'Tokyo, Japan',
    tags: ['Interactive Installation', 'LiDAR', 'Personal', 'Unity'],
    image: 'assets/images/key-visual.jpg',
    gallery: ['assets/images/key-visual.jpg', 'assets/images/emergent-cosmos.jpg'],
    body: ['An interactive installation reading the room with LiDAR, binding visitors into a shared, shifting field rendered in Unity.']
  }],
  profile: {
    nameEn: 'Tan Yanggu',
    nameJa: 'タン ヤング',
    alias: 'RustyHead',
    portrait: 'assets/images/perf-lee-1.jpg',
    bioJa: '中国・四川省生まれ、現在は東京を拠点に活動。武蔵野美術大学デザイン情報学コース修士課程修了。リアルタイムCGをメインとし、インタラクティブ・インスタレーション、CG映像、VRなど多岐にわたる分野で作品を制作している。',
    bioEn: 'Born in Sichuan, China; now based in Tokyo. MFA, Musashino Art University. Working primarily with real-time CG across interactive installation, CG video, and VR — focused on the human side of technology, creating multisensory experiences that move the viewer\u2019s emotions. Has performed audiovisual live sets across Tokyo, Seoul, Shanghai, Hong Kong, and Shenzhen. In late 2024, co-founded the Tokyo-based audiovisual project Synesthesia Array with sound artist DNS.',
    performance: [['2025.12', 'WeSA Festival 2025', 'Seoul, Korea'], ['2025.11', 'Modular Commune 2025', 'Beijing, China'], ['2025.09', 'DNS + RustyHead Tohoku Tour', 'Ishinomaki / Morioka, Japan'], ['2025.07', 'Synesthesia Array Vol.02', 'Tokyo, Japan'], ['2025.05', 'Fairytale in Shanghai', 'Shanghai, China'], ['2025.04', 'Planned Accidents', 'Seoul, Korea'], ['2024.12', 'Synesthesia Array Vol.01', 'Tokyo, Japan']],
    exhibition: [['2026.01', 'Musashino Art University Degree Show 2025', 'Tokyo, Japan'], ['2025.12', 'Ghost in the Mirror — Screening & Exhibition', 'Shanghai, China'], ['2025.10', 'Int\u2019l Science Film Festival — 14th Dome Festa', 'Tokyo, Japan'], ['2025.08', 'Nakano ZERO Media Arts Program 2025', 'Tokyo, Japan']],
    award: [['2026', 'Musashino Art University — Graduation Work Excellence Prize'], ['2025', '14th Dome Festa Short Film Contest — Encouragement Prize'], ['2023', '4th Zijin Award China Student Design — Innovation Prize']],
    skills: [['Real-time Rendering', 'UnrealEngine, UnityEngine, TouchDesigner'], ['DCC tools', 'Blender, Cinema 4D'], ['Others', 'Photoshop, After Effects, Illustrator']]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.MetaRow = __ds_scope.MetaRow;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DateCode = __ds_scope.DateCode;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TagRow = __ds_scope.TagRow;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
