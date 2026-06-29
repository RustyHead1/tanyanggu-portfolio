// LandingScreen — cinematic Home. Full-bleed video well + a live, tunable
// "filter lab": brightness/contrast/grade/grain/scanlines/vignette/blur,
// all adjustable from an on-page panel and persisted to localStorage.
(function () {
  const { LangSwitch, NavBar } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';

  // Drop your own clip here (WebM preferred). Relative to this folder.
  const HERO_VIDEO_SRC = (window.__resources && window.__resources.heroVideo) || 'media/home-bg.webm';

  // Random hero-video entry points (seconds). On every home-page load the clip
  // begins from one of these, chosen at random.
  const HERO_START_TIMES = [0, 6, 14, 24, 31];

  // ── Filter parameters ──────────────────────────────────────────────────
  // NOTE: bumped to v2 so a previously-saved v1 snapshot in localStorage can't
  // override the new title-frost defaults below.
  const FILTER_KEY = 'tyg-home-filter-v2';
  const DEFAULTS = {
    brightness: 0.82, contrast: 1.12, saturate: 0.92, blur: 0,
    grayscale: 0, hue: 0,
    grain: 0.14, scanlines: 0.19, scanGap: 3,
    vignette: 1.0, wash: 0.13,
    tint: '#11305a', tintStrength: 0.14, tintBlend: 'soft-light',
    // titleBlur = 标题方块磨砂模糊程度（px）。titleBgOpacity = 方块底色不透明度，
    // 0 = 纯透明，只剩模糊。两者就是你要调的值。
    titleBlur: 8, frame: 0.68,
    titleBgColor: '#0a0a0b', titleBgOpacity: 0,
  };
  const TINTS = ['#11305a', '#3a1f4d', '#0a0a0b', '#5a3a11', '#1f4d3a'];
  const TITLE_BG_COLORS = ['#0a0a0b', '#0d1a2e', '#1a0d0d', '#0d1a10', '#1a1a0a'];
  const BLENDS = ['soft-light', 'overlay', 'screen', 'multiply', 'color'];

  // ── Geometric construction grid ────────────────────────────────────────
  // ONE shared 12-column module, living inside the 22px hairline frame.
  // The blueprint rules, the frosted blocks and every crosshair snap to it,
  // so the page reads as a true geometric construction: grid lines run along
  // block edges, crosses sit dead-on the intersections. All coords below are
  // percentages of the inner (inset-22) box, so the layers stay registered.
  const GRID = { cols: 12, rows: [0.22, 0.42, 0.62, 0.80] };
  const gx = i => (i / GRID.cols) * 100;   // column index → % x
  const gy = r => r * 100;                 // row fraction → % y

  // Frosted blocks — each snapped to a grid cell [c0..c1] × [y0..y1] so all
  // four edges land exactly on grid lines (i.e. every block is "enclosed").
  const GRID_BLOCKS = [
    { c0: 9,  c1: 11, y0: 0,    y1: 0.22 },
    { c0: 11, c1: 12, y0: 0,    y1: 0.22 },
    { c0: 10, c1: 11, y0: 0.22, y1: 0.42 },
    { c0: 9,  c1: 11, y0: 0.42, y1: 0.62 },
    { c0: 11, c1: 12, y0: 0.62, y1: 0.80 },
    { c0: 1,  c1: 3,  y0: 0,    y1: 0.22 },
    { c0: 0,  c1: 1,  y0: 0.22, y1: 0.42 },
    { c0: 6,  c1: 8,  y0: 0,    y1: 0.22 },
    { c0: 3,  c1: 4,  y0: 0.22, y1: 0.42 },
    { c0: 7,  c1: 9,  y0: 0.42, y1: 0.62 },
  ];

  // Bold crosshairs — sit exactly on (column line × row line) intersections.
  const GRID_CROSS = [
    { c: 3,  r: 0.22, d: '0s'   },
    { c: 9,  r: 0.22, d: '1.1s' },
    { c: 6,  r: 0.42, d: '0.5s' },
    { c: 11, r: 0.42, d: '2.0s' },
    { c: 2,  r: 0.62, d: '1.7s' },
    { c: 10, r: 0.62, d: '0.3s' },
    { c: 7,  r: 0.80, d: '1.4s' },
    { c: 5,  r: 0.42, d: '2.6s' },
  ];

  // Faint secondary crosshairs — different intersections, for layered detail.
  const GRID_CROSS_FAINT = [
    { c: 1, r: 0.22 }, { c: 5, r: 0.62 }, { c: 8, r: 0.80 },
    { c: 4, r: 0.62 }, { c: 10, r: 0.42 }, { c: 2, r: 0.42 },
  ];

  // ── Mobile construction grid (≤600px) ─────────────────────────────────
  // A FINER 6-column grid (5 interior rules) so the title's frosted box snaps
  // to lines close to the text instead of rounding out to a giant cell. Still
  // far sparser than the 12-column desktop grid. Blocks and crosshairs below
  // are defined in THIS grid's coords, so block edges land on its lines and
  // every crosshair sits dead-on a line intersection.
  // Tune freely: c = column index 0..6, r = row fraction (use GRID_M.rows
  // values + 0 and 1 so edges stay on lines). More cols/rows → tighter box.
  // The big 0.30→0.55 band is where the title block sits.
  const GRID_M = { cols: 6, rows: [0.10, 0.20, 0.30, 0.55, 0.65, 0.75] };

  // ── Title block (main title + subtitle + their frosted box) ────────────
  // The box is a FIXED grid cell, with the text centred vertically inside it
  // and left-aligned. Three knobs:
  //   TITLE_TOP_M = 顶边（落在某条 GRID_M.rows 线上）
  //   TITLE_H_M   = 高度（顶+高=底边，也要落在某条线上）  ← 高度参数
  //   c1          = 右边到第几列（c1:4 → 第 4 列为止）
  const TITLE_TOP_M = 0.40;
  const TITLE_H_M   = 0.25;
  const TITLE_CELL_M = { c0: 0, c1: 4, y0: TITLE_TOP_M, y1: TITLE_TOP_M + TITLE_H_M };

  // Background blocks — only these (the cells you circled) are FROSTED; any
  // block can be turned into a plain outline by adding `blur: false`.
  // (The title's own box keeps its blur regardless — it's separate.)
  const GRID_BLOCKS_M = [
    { c0: 0, c1: 1, y0: 0,    y1: 0.10 },   // top-left, by the year
    { c0: 1, c1: 2, y0: 0,    y1: 0.10 },   // top
    { c0: 5, c1: 6, y0: 0.10, y1: 0.20 },   // top-right
    { c0: 5, c1: 6, y0: 0.20, y1: 0.30 },   // right
    { c0: 0, c1: 1, y0: 0.20, y1: 0.30 },   // left
    { c0: 0, c1: 4, y0: 0.75, y1: 1 },      // bottom — one merged box (cols 0→4, like the title box)
  ];
  // Crosshairs — re-fitted to sit on the current line intersections.
  const GRID_CROSS_M = [
    { c: 1, r: 0.30, d: '0s'   },
    { c: 5, r: 0.30, d: '0.7s' },
    { c: 5, r: 0.55, d: '0.3s' },
    { c: 2, r: 0.65, d: '1.0s' },
  ];
  const GRID_CROSS_FAINT_M = [
    { c: 4, r: 0.20 }, { c: 1, r: 0.75 },
  ];

  function loadFilter() {
    // titleBlur 永远用代码里的默认值，忽略本地存储里可能存下的旧值，
    // 这样不管是否在本机调过滤镜，模糊程度都统一应用最新的设定。
    try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(FILTER_KEY) || '{}'), titleBlur: DEFAULTS.titleBlur }; }
    catch (e) { return { ...DEFAULTS }; }
  }

  function hexRgba(hex, a) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }

  // 128px tiling grain, generated once.
  function makeGrain() {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d'); const img = x.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    return c.toDataURL('image/png');
  }

  // ── Corner home icon — rounded, on every page, returns to Home ─────────
  function HomeIcon() {
    const [hover, setHover] = React.useState(false);
    return (
      <a href="#/" aria-label="Home"
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          position: 'fixed', top: 22, left: 22, zIndex: 120,
          width: 46, height: 46, borderRadius: 13, overflow: 'hidden', display: 'block', boxSizing: 'border-box',
          border: '1px solid ' + (hover ? 'rgba(243,243,243,0.5)' : 'rgba(243,243,243,0.22)'),
          boxShadow: hover ? '0 0 0 4px rgba(243,243,243,0.05)' : 'none',
          transition: 'border-color var(--tyg-dur) var(--tyg-ease), box-shadow var(--tyg-dur) var(--tyg-ease), transform var(--tyg-dur) var(--tyg-ease)',
          transform: hover ? 'translateY(-1px)' : 'none', backdropFilter: 'blur(6px)',
        }}>
        <img src={window.__IMG('assets/favicon.png')} alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: hover ? 'brightness(1.15)' : 'brightness(1)', transition: 'filter var(--tyg-dur) var(--tyg-ease)' }} />
      </a>
    );
  }
  window.HomeIcon = HomeIcon;

  function OverlayLink({ label, href, current }) {
    const [hover, setHover] = React.useState(false);
    return (
      <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ position: 'relative', fontFamily: 'var(--tyg-font-sans)', fontSize: 'var(--tyg-text-sm)',
          letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase',
          color: current ? 'var(--tyg-fg)' : 'var(--tyg-fg-dim)',
          transition: 'color var(--tyg-dur-fast) var(--tyg-ease)', paddingBottom: 3 }}>
        <span style={{ color: hover ? 'var(--tyg-fg)' : 'inherit', transition: 'color var(--tyg-dur-fast) var(--tyg-ease)' }}>{label}</span>
        <span style={{ position: 'absolute', left: 0, bottom: 0, height: 1, width: '100%', background: 'currentColor', opacity: 0.8,
          transform: (hover || current) ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
          transition: 'transform var(--tyg-dur) var(--tyg-ease)' }} />
      </a>
    );
  }

  // ── Persistent top nav — the shared site NavBar, rendered as a fixed
  // overlay so it stays above the pinned hero and the rising sections.
  // Same component / style as every other page for consistency. ────────
  function HomeNav({ lang, setLang }) {
    // On phones the bar is transparent (no divider) over the hero — page 1 —
    // and turns opaque dark with its divider once the works section (page 2)
    // has risen to cover the hero. Desktop keeps the always-transparent look.
    const [solid, setSolid] = React.useState(false);
    React.useEffect(() => {
      const mq = window.matchMedia ? window.matchMedia('(max-width: 820px)') : null;
      let raf = 0;
      const onScroll = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const mobile = mq ? mq.matches : false;
          const past = window.scrollY > (window.innerHeight || 1) * 0.85;
          setSolid(mobile && past);
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      if (mq) (mq.addEventListener ? mq.addEventListener('change', onScroll) : mq.addListener(onScroll));
      onScroll();
      return () => {
        window.removeEventListener('scroll', onScroll);
        if (mq) (mq.removeEventListener ? mq.removeEventListener('change', onScroll) : mq.removeListener(onScroll));
        if (raf) cancelAnimationFrame(raf);
      };
    }, []);
    return (
      <NavBar
        lang={lang}
        onLangChange={setLang}
        brand=""
        brandSuffix=""
        fluid
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 125,
          background: solid ? 'var(--tyg-bg)' : 'transparent',
          // keep a 1px border at all times and only fade its colour in — avoids
          // the 1px layout shift a none→solid toggle would cause. The "off" state
          // uses the line colour at zero alpha (NOT the `transparent` keyword,
          // which is transparent BLACK) so the fade is a clean transparent→grey
          // alpha ramp instead of passing through muddy black tones.
          borderBottom: '1px solid ' + (solid ? 'var(--tyg-line-soft)' : 'rgba(243,243,243,0)'),
          transition: 'background var(--tyg-dur) var(--tyg-ease), border-color var(--tyg-dur) var(--tyg-ease)' }}
        links={[
          { label: 'Home', href: '#/', current: true },
          { label: 'Works', href: '#/works' },
          { label: 'Profile', href: '#/profile' },
          { label: 'Contact', href: '#/contact' },
        ]}
      />
    );
  }
  window.HomeNav = HomeNav;

  // ── Filter control panel ───────────────────────────────────────────────
  function Row({ label, value, children }) {
    return (
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <span style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tyg-fg-dim)' }}>{label}</span>
          <span style={{ fontSize: 11, fontFamily: 'var(--tyg-font-mono)', color: 'var(--tyg-fg-muted)' }}>{value}</span>
        </div>
        {children}
      </div>
    );
  }
  function Slider({ min, max, step, value, onChange }) {
    return (
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: '#cfe0ff', height: 2, cursor: 'pointer' }} />
    );
  }

  function FilterPanel({ f, set, reset }) {
    const [open, setOpen] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    const copy = () => {
      const out = {}; for (const k in DEFAULTS) out[k] = f[k];
      navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(out, null, 2));
      setCopied(true); setTimeout(() => setCopied(false), 1400);
    };
    const btn = {
      fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
      padding: '7px 12px', borderRadius: 2, background: 'transparent', color: 'var(--tyg-fg-dim)',
      border: '1px solid var(--tyg-line-soft)', transition: 'color var(--tyg-dur-fast), border-color var(--tyg-dur-fast)',
    };
    return (
      <div style={{ position: 'fixed', left: 22, bottom: 22, zIndex: 200, fontFamily: 'var(--tyg-font-sans)' }}>
        {open && (
          <div style={{ width: 276, maxHeight: '78vh', overflowY: 'auto', marginBottom: 12, padding: '18px 18px 16px',
            borderRadius: 4, border: '1px solid var(--tyg-line-soft)',
            background: 'rgba(12,12,14,0.74)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tyg-fg)' }}>Filter Lab</span>
              <span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--tyg-fg-faint)', fontFamily: 'var(--tyg-font-mono)' }}>HOME · BG</span>
            </div>

            <div style={{ fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)', margin: '0 0 10px' }}>Grade</div>
            <Row label="Brightness" value={f.brightness.toFixed(2)}><Slider min={0.2} max={1.6} step={0.01} value={f.brightness} onChange={v => set('brightness', v)} /></Row>
            <Row label="Contrast" value={f.contrast.toFixed(2)}><Slider min={0.5} max={2} step={0.01} value={f.contrast} onChange={v => set('contrast', v)} /></Row>
            <Row label="Saturation" value={f.saturate.toFixed(2)}><Slider min={0} max={2} step={0.01} value={f.saturate} onChange={v => set('saturate', v)} /></Row>
            <Row label="Grayscale" value={f.grayscale.toFixed(2)}><Slider min={0} max={1} step={0.01} value={f.grayscale} onChange={v => set('grayscale', v)} /></Row>
            <Row label="Hue rotate" value={f.hue + '°'}><Slider min={-180} max={180} step={1} value={f.hue} onChange={v => set('hue', v)} /></Row>
            <Row label="Blur" value={f.blur.toFixed(1) + 'px'}><Slider min={0} max={14} step={0.1} value={f.blur} onChange={v => set('blur', v)} /></Row>

            <div style={{ fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)', margin: '6px 0 10px' }}>Color tint</div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              {TINTS.map(c => (
                <button key={c} onClick={() => set('tint', c)} aria-label={c}
                  style={{ width: 26, height: 26, borderRadius: '50%', cursor: 'pointer', background: c,
                    border: '1px solid ' + (f.tint === c ? 'var(--tyg-fg)' : 'rgba(243,243,243,0.18)'),
                    boxShadow: f.tint === c ? '0 0 0 3px rgba(243,243,243,0.08)' : 'none' }} />
              ))}
            </div>
            <Row label="Tint strength" value={f.tintStrength.toFixed(2)}><Slider min={0} max={1} step={0.01} value={f.tintStrength} onChange={v => set('tintStrength', v)} /></Row>
            <Row label="Tint blend" value={f.tintBlend}>
              <select value={f.tintBlend} onChange={e => set('tintBlend', e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', color: 'var(--tyg-fg)', border: '1px solid var(--tyg-line-soft)',
                  borderRadius: 2, padding: '5px 8px', fontSize: 11, fontFamily: 'var(--tyg-font-mono)' }}>
                {BLENDS.map(b => <option key={b} value={b} style={{ background: '#16161a' }}>{b}</option>)}
              </select>
            </Row>

            <div style={{ fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)', margin: '6px 0 10px' }}>Texture</div>
            <Row label="Grain" value={f.grain.toFixed(2)}><Slider min={0} max={0.6} step={0.01} value={f.grain} onChange={v => set('grain', v)} /></Row>
            <Row label="Scanlines" value={f.scanlines.toFixed(2)}><Slider min={0} max={0.6} step={0.01} value={f.scanlines} onChange={v => set('scanlines', v)} /></Row>
            <Row label="Scanline gap" value={f.scanGap + 'px'}><Slider min={2} max={8} step={1} value={f.scanGap} onChange={v => set('scanGap', v)} /></Row>
            <Row label="Vignette" value={f.vignette.toFixed(2)}><Slider min={0} max={1} step={0.01} value={f.vignette} onChange={v => set('vignette', v)} /></Row>
            <Row label="Dark wash" value={f.wash.toFixed(2)}><Slider min={0} max={1} step={0.01} value={f.wash} onChange={v => set('wash', v)} /></Row>

            <div style={{ fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)', margin: '6px 0 10px' }}>Composition</div>
            <Row label="Title blur" value={f.titleBlur + 'px'}><Slider min={0} max={200} step={1} value={f.titleBlur} onChange={v => set('titleBlur', v)} /></Row>
            <Row label="Title bg opacity" value={f.titleBgOpacity.toFixed(2)}><Slider min={0} max={1} step={0.01} value={f.titleBgOpacity} onChange={v => set('titleBgOpacity', v)} /></Row>
            <div style={{ display: 'flex', gap: 8, margin: '6px 0 10px' }}>
              {TITLE_BG_COLORS.map(c => (
                <button key={c} onClick={() => set('titleBgColor', c)} aria-label={c}
                  style={{ width: 26, height: 26, borderRadius: '50%', cursor: 'pointer', background: c,
                    border: '1px solid ' + (f.titleBgColor === c ? 'var(--tyg-fg)' : 'rgba(243,243,243,0.18)'),
                    boxShadow: f.titleBgColor === c ? '0 0 0 3px rgba(243,243,243,0.08)' : 'none' }} />
              ))}
            </div>
            <Row label="Frame opacity" value={f.frame.toFixed(2)}><Slider min={0} max={1} step={0.01} value={f.frame} onChange={v => set('frame', v)} /></Row>

            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button onClick={reset} style={{ ...btn, flex: 1 }}>Reset</button>
              <button onClick={copy} style={{ ...btn, flex: 1, color: copied ? '#cfe0ff' : 'var(--tyg-fg-dim)' }}>{copied ? 'Copied ✓' : 'Copy JSON'}</button>
            </div>
          </div>
        )}
        <button onClick={() => setOpen(o => !o)} aria-label="Filter settings"
          style={{ width: 46, height: 46, borderRadius: 13, marginLeft: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', background: 'rgba(12,12,14,0.6)', backdropFilter: 'blur(10px)',
            border: '1px solid ' + (open ? 'rgba(243,243,243,0.5)' : 'rgba(243,243,243,0.22)'), color: 'var(--tyg-fg)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
          </svg>
        </button>
      </div>
    );
  }

  // ── Generative fallback (shown only when no video src) ─────────────────
  function useFlowField(ref, enabled) {
    React.useEffect(() => {
      if (!enabled) return;
      const canvas = ref.current; if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w, h, dpr, raf, t = 0, parts = []; const COUNT = 680;
      function size() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.clientWidth; h = canvas.clientHeight;
        canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = '#0a0a0b'; ctx.fillRect(0, 0, w, h);
        const g = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.7);
        g.addColorStop(0, 'rgba(34,40,58,0.55)'); g.addColorStop(1, 'rgba(10,10,11,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        parts = []; for (let i = 0; i < COUNT; i++) parts.push({ x: Math.random() * w, y: Math.random() * h });
      }
      function noise(x, y, tt) { return Math.sin(x * 0.0042 + tt * 0.25) + Math.cos(y * 0.0051 - tt * 0.2) + Math.sin((x + y) * 0.0026 + tt * 0.15); }
      function frame() {
        t += 0.016; ctx.fillStyle = 'rgba(10,10,11,0.055)'; ctx.fillRect(0, 0, w, h);
        for (const p of parts) {
          const a = noise(p.x, p.y, t) * Math.PI; p.x += Math.cos(a) * 1.25; p.y += Math.sin(a) * 1.25;
          if (p.x < 0) p.x += w; if (p.x > w) p.x -= w; if (p.y < 0) p.y += h; if (p.y > h) p.y -= h;
          const hue = 208 + 28 * Math.sin(t * 0.1 + p.x * 0.001); const li = 46 + 20 * Math.sin(p.y * 0.002 + t * 0.1);
          ctx.fillStyle = 'hsla(' + hue + ',38%,' + li + '%,0.12)'; ctx.fillRect(p.x, p.y, 1.5, 1.5);
        }
        raf = requestAnimationFrame(frame);
      }
      size(); raf = requestAnimationFrame(frame); window.addEventListener('resize', size);
      return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); };
    }, [enabled]);
  }

  // ── Technical / blueprint overlay primitives ──────────────────────────
  function GridField({ opacity, grid = GRID, gx: gxp = gx, crosses = GRID_CROSS }) {
    return (
      <div className="tyg-hero-gridfield" style={{ position: 'absolute', inset: 22, zIndex: 6, pointerEvents: 'none', opacity, overflow: 'hidden' }}>
        {/* vertical column lines */}
        {Array.from({ length: grid.cols - 1 }).map((_, i) => (
          <span key={'v' + i} className="tyg-grow-v" style={{ position: 'absolute', top: 0, bottom: 0, left: gxp(i + 1) + '%', width: 2, marginLeft: -1, background: 'rgba(243,243,243,0.18)', '--gd': (i * 0.05) + 's' }} />
        ))}
        {/* horizontal blueprint rules — the lowest (0.80) rule is omitted so no
            static rule crosses just above the bottom-center scroll cue. The row
            stays in the grid's rows for block snapping / crosshair registration. */}
        {grid.rows.map((r, ri) => (
          r === 0.80 ? null :
          <span key={'h' + r} className="tyg-grow-h" style={{ position: 'absolute', left: 0, right: 0, top: gy(r) + '%', height: 2, marginTop: -1, background: 'rgba(243,243,243,0.18)', '--gd': (0.12 + ri * 0.08) + 's' }} />
        ))}
        {/* blinking crosshairs, dead-on the grid intersections */}
        {crosses.map(c => (
          <span key={c.c + '-' + c.r} className="tyg-blink" style={{ position: 'absolute', left: gxp(c.c) + '%', top: gy(c.r) + '%', width: 16, height: 16, transform: 'translate(-50%, -50%)', animationDelay: c.d }}>
            <span style={{ position: 'absolute', left: '50%', top: 0, width: 2, height: '100%', marginLeft: -1, background: 'var(--tyg-fg-dim)' }} />
            <span style={{ position: 'absolute', top: '50%', left: 0, height: 2, width: '100%', marginTop: -1, background: 'var(--tyg-fg-dim)' }} />
          </span>
        ))}
        {/* animated vertical scan + horizontal sweep, in electric blue */}
        <span className="tyg-scan" style={{ position: 'absolute', top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, transparent, var(--tyg-accent), transparent)' }} />
        <span className="tyg-sweep" style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(0,127,255,0.55), transparent)' }} />
      </div>
    );
  }

  function Cross({ top, left, delay }) {
    // centered on its point so it lands exactly on the grid intersection
    return (
      <span className="tyg-blink" style={{ position: 'absolute', zIndex: 7, width: 11, height: 11, top, left, transform: 'translate(-50%, -50%)', animationDelay: delay, pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', left: '50%', top: 0, width: 1, height: '100%', marginLeft: -0.5, background: 'var(--tyg-fg-faint)' }} />
        <span style={{ position: 'absolute', top: '50%', left: 0, height: 1, width: '100%', marginTop: -0.5, background: 'var(--tyg-fg-faint)' }} />
      </span>
    );
  }

  // ── Title construction frame ───────────────────────────────────────────
  // Rendered as a SIBLING overlay of the title block (NOT a child — an element
  // with backdrop-filter clips its descendants to its border-box, which would
  // swallow these lines). It takes the block's own `inset` so it covers the
  // exact same box, then draws projection lines on the four edges (run far past
  // the viewport; the hero's overflow:hidden trims them) and corner crosshairs.
  // Pure CSS → resolution / zoom / DPR independent; hugs the block at any size.
  function TitleConstruction({ inset, projection = true }) {
    const proj = 'rgba(243,243,243,0.3)';   // construction lines hugging the title block
    const vline = { position: 'absolute', top: '-200vh', height: '400vh', width: 1, background: proj };
    const hline = { position: 'absolute', left: '-200vw', width: '400vw', height: 1, background: proj };
    const corner = { position: 'absolute', width: 16, height: 16, transform: 'translate(-50%, -50%)' };
    const cVert = { position: 'absolute', left: '50%', top: 0, width: 1, height: '100%', marginLeft: -0.5, background: 'var(--tyg-fg-dim)' };
    const cHorz = { position: 'absolute', top: '50%', left: 0, height: 1, width: '100%', marginTop: -0.5, background: 'var(--tyg-fg-dim)' };
    const corners = [
      { left: 0,      top: 0,      d: '0s'   },
      { left: '100%', top: 0,      d: '0.3s' },
      { left: 0,      top: '100%', d: '0.6s' },
      { left: '100%', top: '100%', d: '0.9s' },
    ];
    return (
      <div aria-hidden="true" style={{ position: 'absolute', inset, pointerEvents: 'none' }}>
        {/* projection lines on the block's edges, extended across the field
            (the long gray lines). Disabled when projection === false. */}
        {projection && <span style={{ ...vline, left: -1 }} />}
        {projection && <span style={{ ...vline, right: -1 }} />}
        {projection && <span style={{ ...hline, top: -1 }} />}
        {projection && <span style={{ ...hline, bottom: -1 }} />}
        {/* corner crosshairs */}
        {corners.map((c, i) => (
          <span key={i} className="tyg-blink" style={{ ...corner, left: c.left, top: c.top, animationDelay: c.d }}>
            <span style={cVert} /><span style={cHorz} />
          </span>
        ))}
      </div>
    );
  }

  // ── Grid-snapped title block ───────────────────────────────────────────
  // Lays the title text at its anchor, measures it (via offset metrics, so the
  // first-paint intro transforms never skew the read), then grows the frosted
  // backdrop + construction frame OUT to the nearest ENCLOSING grid line on all
  // four sides. Result: the block always wraps the text, yet every edge lands
  // exactly on a construction-grid line — at any resolution / zoom / DPR.
  // Lives in the inset-22 box so its % coords share the GridField's basis.
  // Re-measures on resize, font load and text reflow.
  function GridSnapTitle({ f, blur, boxStyle, contentStyle, contentClass, grid = GRID, pad = 12, fixedCell, children }) {
    const boxRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const [rect, setRect] = React.useState(null);

    React.useLayoutEffect(() => {
      // Fixed-cell mode (mobile): the box IS a grid cell, no measuring — the
      // content is centred inside it instead of the box hugging the content.
      if (fixedCell) {
        setRect({
          left: (fixedCell.c0 / grid.cols) * 100,
          top: fixedCell.y0 * 100,
          width: ((fixedCell.c1 - fixedCell.c0) / grid.cols) * 100,
          height: (fixedCell.y1 - fixedCell.y0) * 100,
        });
        return;
      }
      const box = boxRef.current, content = contentRef.current;
      if (!box || !content) return;
      const rowLines = [0, ...grid.rows, 1];
      const floor = (a, v) => a.filter(x => x <= v + 0.5).reduce((p, x) => Math.max(p, x), a[0]);
      const ceil  = (a, v) => a.filter(x => x >= v - 0.5).reduce((p, x) => Math.min(p, x), a[a.length - 1]);
      const measure = () => {
        const bw = box.clientWidth, bh = box.clientHeight;
        if (!bw || !bh || !content.offsetWidth) return;
        const xs = []; for (let i = 0; i <= grid.cols; i++) xs.push((i / grid.cols) * bw);
        const ys = rowLines.map(r => r * bh);
        const L = content.offsetLeft - pad, T = content.offsetTop - pad;
        const R = content.offsetLeft + content.offsetWidth + pad;
        const B = content.offsetTop + content.offsetHeight + pad;
        const left = floor(xs, L), right = ceil(xs, R);
        const top = floor(ys, T), bottom = ceil(ys, B);
        setRect({
          left: (left / bw) * 100, top: (top / bh) * 100,
          width: ((right - left) / bw) * 100, height: ((bottom - top) / bh) * 100,
        });
      };
      measure();
      const raf = requestAnimationFrame(measure);   // settle after first layout
      let ro;
      if (typeof ResizeObserver !== 'undefined') { ro = new ResizeObserver(measure); ro.observe(box); ro.observe(content); }
      window.addEventListener('resize', measure);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure).catch(() => {});
      return () => { cancelAnimationFrame(raf); if (ro) ro.disconnect(); window.removeEventListener('resize', measure); };
    }, [pad, grid, fixedCell]);

    const fill = rect && { position: 'absolute', left: rect.left + '%', top: rect.top + '%', width: rect.width + '%', height: rect.height + '%' };
    // While the frost is clearing on early scroll the blur eases to 0 (still a
    // valid backdrop-filter); once it hits 0 we drop to `none` so the panel can't
    // vanish when the fading foreground wrapper starts isolating its descendants.
    const blurPx = (blur == null ? f.titleBlur : blur);
    return (
      <div ref={boxRef} style={{ position: 'absolute', inset: 22, zIndex: 8, pointerEvents: 'none', ...boxStyle }}>
        {/* Non-animated scale wrapper — lets one CSS knob (.tyg-hero-titlescale)
            shrink the whole block (frost box + construction + text) as a unit.
            The box is measured from the UN-scaled layout, so it keeps hugging
            the text after scaling. */}
        <div className="tyg-hero-titlescale" style={{ position: 'absolute', inset: 0, transformOrigin: 'left bottom' }}>
        {rect && (
          <React.Fragment>
            <div className="tyg-intro" style={{ ...fill, '--iy': '8px', animationDelay: '0.22s',
              backdropFilter: blurPx > 0.5 ? `blur(${blurPx}px)` : 'none',
              WebkitBackdropFilter: blurPx > 0.5 ? `blur(${blurPx}px)` : 'none',
              background: hexRgba(f.titleBgColor, f.titleBgOpacity), border: '1px solid rgba(243,243,243,0.24)',
              pointerEvents: 'none' }} />
            <div style={{ ...fill, pointerEvents: 'none' }}><TitleConstruction inset={0} /></div>
          </React.Fragment>
        )}
        <div ref={contentRef} className={contentClass} style={{ pointerEvents: 'auto',
          ...((fixedCell && rect)
            ? { position: 'absolute', left: rect.left + '%', top: rect.top + '%', width: rect.width + '%', height: rect.height + '%',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
                paddingLeft: 'clamp(14px, 6vw, 34px)', paddingRight: 12, boxSizing: 'border-box' }
            : contentStyle) }}>{children}</div>
        </div>
      </div>
    );
  }

  function CornerBtn({ style, children }) {
    return (
      <div style={{ position: 'absolute', zIndex: 9, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid var(--tyg-line-soft)', color: 'var(--tyg-fg-dim)', background: 'rgba(12,12,14,0.4)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', ...style }}>
        {children}
      </div>
    );
  }

  function PixelArrow({ dir, className, style }) {
    return (
      <svg className={className} width="24" height="16" viewBox="0 0 24 16" style={{ position: 'absolute', zIndex: 8, ...style }}
        fill="none" stroke="var(--tyg-accent)" strokeWidth="2.4" shapeRendering="crispEdges">
        {dir === 'right' ? <path d="M2 8h14M13 3l5 5-5 5" /> : <path d="M22 8H8M11 3l-5 5 5 5" />}
      </svg>
    );
  }

  function Anno({ children, style }) {
    return <span style={{ position: 'absolute', zIndex: 8, fontFamily: 'var(--tyg-font-mono)', fontSize: 10.5, letterSpacing: '0.1em', color: 'var(--tyg-fg-faint)', whiteSpace: 'nowrap', pointerEvents: 'none', ...style }}>{children}</span>;
  }

  function LandingScreen({ lang, setLang }) {
    const [f, setF] = React.useState(loadFilter);
    React.useEffect(() => { try { localStorage.setItem(FILTER_KEY, JSON.stringify(f)); } catch (e) {} }, [f]);
    const set = (k, v) => setF(p => ({ ...p, [k]: v }));
    const reset = () => setF({ ...DEFAULTS });
    const grain = React.useMemo(makeGrain, []);

    // ── Active construction grid — coarse 4-col on phones, dense 12-col
    // otherwise. Blocks + crosshairs are driven from the same chosen grid so
    // they always register against the lines that are actually drawn. ──────
    const [isMobile, setIsMobile] = React.useState(
      () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 600px)').matches);
    React.useEffect(() => {
      if (!window.matchMedia) return;
      const mq = window.matchMedia('(max-width: 600px)');
      const on = () => setIsMobile(mq.matches);
      mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
      return () => { mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on); };
    }, []);
    const GEO = isMobile
      ? { grid: GRID_M, blocks: GRID_BLOCKS_M, cross: GRID_CROSS_M, crossFaint: GRID_CROSS_FAINT_M }
      : { grid: GRID,   blocks: GRID_BLOCKS,   cross: GRID_CROSS,   crossFaint: GRID_CROSS_FAINT };
    const gX = i => (i / GEO.grid.cols) * 100;   // active column index → % x

    // ── Hero layout — locked to variant 03 (giant) ──────────────────────
    const layout = 3;

    const canvasRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const hasVideo = !!HERO_VIDEO_SRC;
    useFlowField(canvasRef, !hasVideo);

    // Pick a fresh random entry point for this page load and seek there once the
    // clip's metadata (duration) is known. Guards against start times that fall
    // past a shorter-than-expected clip.
    const heroStart = React.useRef(HERO_START_TIMES[Math.floor(Math.random() * HERO_START_TIMES.length)]);
    const seekToRandomStart = React.useCallback(() => {
      const v = videoRef.current;
      if (!v) return;
      let t = heroStart.current;
      if (Number.isFinite(v.duration) && v.duration > 0) t = Math.min(t, Math.max(0, v.duration - 0.1));
      try { v.currentTime = t; } catch (e) {}
    }, []);

    const cssFilter = `brightness(${f.brightness}) contrast(${f.contrast}) saturate(${f.saturate}) grayscale(${f.grayscale}) hue-rotate(${f.hue}deg) blur(${f.blur}px)`;

    // ── Scroll-coupled exit ────────────────────────────────────────────
    // The hero is pinned (position:fixed) while the sections below rise up
    // and cover it. As they rise, the hero's foreground — title, role line,
    // index, lines, frosted blocks, crosshairs — eases out with the scroll.
    const REDUCED = typeof window !== 'undefined' && window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
    }, []);

    // ── First-paint intro gate — keep the foreground hidden until the boot
    // loader has begun dismissing, then release the staggered cascade. ──
    const [started, setStarted] = React.useState(false);
    React.useEffect(() => {
      if (REDUCED) { setStarted(true); return; }
      let t;
      const tick = () => {
        const l = document.getElementById('tyg-loader');
        if (!l || l.classList.contains('tyg-loaded')) { setStarted(true); return; }
        t = setTimeout(tick, 60);
      };
      tick();
      const safety = setTimeout(() => setStarted(true), 3000);
      return () => { clearTimeout(t); clearTimeout(safety); };
    }, []);

    // Kick the gated intro animations — some engines won't assign a start
    // time to a CSS animation that only matches once an ancestor class is
    // toggled, leaving them frozen on frame 0. Nudge any null-startTime ones.
    React.useEffect(() => {
      if (!started) return;
      const kick = () => {
        document.querySelectorAll('.tyg-go .tyg-intro, .tyg-go .tyg-intro-cx, .tyg-go .tyg-grow-v, .tyg-go .tyg-grow-h, .tyg-go .tyg-grow-box')
          .forEach(el => el.getAnimations().forEach(a => {
            if (a.startTime === null) { try { a.startTime = document.timeline.currentTime; } catch (e) {} }
          }));
      };
      const r = requestAnimationFrame(() => requestAnimationFrame(kick));
      return () => cancelAnimationFrame(r);
    }, [started, layout]);

    // ── Reverse-grow on scroll ──────────────────────────────────────────
    // As the wheel scrolls down, scrub the first-paint growth animations
    // backward: the blueprint lines retract toward their origin and each
    // frosted block shrinks back to nothing — the init "growth" played in
    // reverse, so the construction un-builds as the hero scrolls away.
    // Untouched until the first scroll, so the forward intro plays in full.
    const growAnimsRef = React.useRef(null);
    const grewBackRef = React.useRef(false);
    React.useEffect(() => {
      if (REDUCED || !started) return;
      const RETRACT_RANGE = 0.55;                       // fully reversed by ~55% of vh
      const t = Math.min(scrollP / RETRACT_RANGE, 1);
      const rev = t * t * (3 - 2 * t);                  // smoothstep 0 → 1
      if (rev <= 0 && !grewBackRef.current) return;     // pre-scroll: leave the intro alone

      if (!growAnimsRef.current) {
        const list = [];
        document.querySelectorAll('.tyg-grow-v, .tyg-grow-h, .tyg-grow-box').forEach(el =>
          el.getAnimations().forEach(a => {
            const end = a.effect && a.effect.getComputedTiming().endTime;
            if (end) { try { a.pause(); } catch (e) {} list.push({ a, end }); }
          }));
        growAnimsRef.current = list;
      }
      const list = growAnimsRef.current;
      if (!list.length) return;
      grewBackRef.current = true;
      // currentTime = endTime → fully grown; → 0 → fully retracted.
      list.forEach(({ a, end }) => { try { a.currentTime = Math.max(0, end * (1 - rev)); } catch (e) {} });
    }, [scrollP, started]);

    // ── Scroll exit, sequenced so the frosted panels never pop ──────────────
    // 1) First the "frost clears": the title + block backdrop-blur eases to 0
    //    while the foreground is still un-isolated (opacity 1, no transform /
    //    will-change), so backdrop-filter stays valid and the blur visibly melts
    //    away instead of snapping off.
    // 2) Only AFTER the frost is gone does the foreground lift + fade. By then the
    //    blurred panels have dropped to `backdrop-filter: none`, so the wrapper can
    //    safely become a "backdrop root" (transform/opacity/will-change) without
    //    its descendants vanishing — the bug that made the title block disappear.
    const FROST_RAMP = 0.06;                                  // clear frost over first 6% of vh
    const frost = Math.min(scrollP / FROST_RAMP, 1);          // 0 → 1
    const titleBlurNow = f.titleBlur * (1 - frost);
    const blockBlurNow = 4 * (1 - frost);                     // GRID_BLOCKS rest at blur(4px)

    const fgAtRest = scrollP <= FROST_RAMP;                   // hold transforms off until frost cleared
    const op_t = Math.min(Math.max((scrollP - FROST_RAMP) / (0.74 - FROST_RAMP), 0), 1);
    const fgOpacity = 1 - op_t * op_t * (3 - 2 * op_t);       // smoothstep, starts after the frost clears
    const fgShift = REDUCED ? 0 : -scrollP * 64;
    // shared lift applied to BOTH the foreground (grid, title, crosshairs) and the
    // frosted-block layer, so the blocks track the grid lines as it rises.
    const layerTransform = fgAtRest ? 'none' : `translateY(${fgShift}px)`;
    // whole-hero veil — as the page scrolls toward the sections, the entire
    // first screen (video + foreground) eases to the background colour and
    // is gone before the rising panel finishes covering it.
    const veil = REDUCED ? 0 : (() => { const t = Math.min(scrollP / 0.82, 1); return t * t * (3 - 2 * t); })();
    const fgStyle = {
      position: 'absolute', inset: 0, zIndex: 6,
      opacity: fgOpacity,
      transform: layerTransform,
      pointerEvents: fgOpacity < 0.04 ? 'none' : 'auto',
      willChange: fgAtRest ? 'auto' : 'opacity, transform',
    };

    // ── Shared content fragments ──────────────────────────────────────────
    const FIELDS = ['Media Art', '3DCG', 'Audio-Visual', 'Interaction Design', 'AI'];
    const fieldRow = (extra) => (
      <div className="tyg-intro" style={{ '--iy': '22px', animationDelay: '0.52s', position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 14px', fontFamily: 'var(--tyg-font-mono)', fontSize: 'var(--tyg-text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tyg-fg-dim)', ...extra }}>
        {FIELDS.map((d, i) => (
          <React.Fragment key={d}>
            {i > 0 && <span style={{ opacity: 0.5, color: 'var(--tyg-fg-faint)' }}>·</span>}
            <span style={{ whiteSpace: 'nowrap' }}>{d}</span>
          </React.Fragment>
        ))}
      </div>
    );

    // ── Three hero title compositions ─────────────────────────────────────
    function renderIdentity() {
      // 02 — centered monumental (block snaps symmetrically around the grid centre)
      if (layout === 2) {
        return (
          <GridSnapTitle key="t2" f={f} blur={titleBlurNow} pad={16}
            boxStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            contentStyle={{ position: 'relative', textAlign: 'center', padding: '0 8px' }}>
            <div className="tyg-intro" style={{ '--iy': '16px', animationDelay: '0.16s', position: 'relative', marginBottom: 24, fontFamily: 'var(--tyg-font-mono)', fontSize: 'var(--tyg-text-xs)', letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)' }}>Portfolio · Ed. 2026</div>
            <h1 className="tyg-intro" style={{ '--iy': '40px', animationDelay: '0.30s', position: 'relative', margin: 0, fontFamily: 'var(--tyg-font-display)', fontWeight: 'var(--tyg-w-light)', color: 'var(--tyg-fg-title)', lineHeight: 0.9, letterSpacing: '0.03em', fontSize: 'clamp(52px, 10vw, 150px)' }}>TAN&nbsp;YANGGU</h1>
            <div className="tyg-intro" style={{ '--iy': '26px', animationDelay: '0.40s', position: 'relative', marginTop: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, color: 'var(--tyg-fg)' }}>
              <span style={{ width: 48, height: 1, background: 'var(--tyg-line-strong, var(--tyg-fg-dim))' }} />
              <span style={{ fontSize: 'var(--tyg-text-2xl)', letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase' }}>RustyHead</span>
              <span style={{ width: 48, height: 1, background: 'var(--tyg-line-strong, var(--tyg-fg-dim))' }} />
            </div>
            <div className="tyg-intro" style={{ '--iy': '24px', animationDelay: '0.48s', position: 'relative', marginTop: 18, fontSize: 'var(--tyg-text-md)', letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase', color: 'var(--tyg-fg-muted)' }}>Visual Artist&nbsp;&nbsp;/&nbsp;&nbsp;Interactive Engineer</div>
            {fieldRow({ justifyContent: 'center', marginTop: 18 })}
            <div className="tyg-intro" style={{ '--iy': '20px', animationDelay: '0.58s', position: 'relative', marginTop: 16, fontFamily: 'var(--tyg-font-mono)', fontSize: 'var(--tyg-text-xs)', letterSpacing: '0.14em', color: 'var(--tyg-fg-dim)' }}>Based in Tokyo, JP</div>
          </GridSnapTitle>
        );
      }
      // 03 — two-line giant; the title block snaps to a grid cell, the meta
      // strip rides the row line beneath it (kept out of the block on purpose).
      if (layout === 3) {
        const edge = 'clamp(14px, 6vw, 62px)';
        return (
          <React.Fragment>
            <GridSnapTitle key="t3" f={f} blur={titleBlurNow} pad={isMobile ? 8 : 14} grid={GEO.grid}
              fixedCell={isMobile ? TITLE_CELL_M : undefined}
              contentClass={isMobile ? undefined : 'tyg-hero-title'}
              contentStyle={{ position: 'absolute', left: edge, bottom: '24%', textAlign: 'left' }}>
              <h1 className="tyg-intro tyg-hero-h1" style={{ '--iy': '46px', animationDelay: '0.28s', position: 'relative', margin: 0, fontFamily: 'var(--tyg-font-display)', fontWeight: 'var(--tyg-w-light)', color: 'var(--tyg-fg-title)', lineHeight: 0.82, letterSpacing: '0.01em', fontSize: 'clamp(64px, 13vw, 200px)', textTransform: 'uppercase' }}>
                <span style={{ display: 'block' }}>Tan</span>
                <span style={{ display: 'block' }}>Yanggu</span>
              </h1>
              {/* RustyHead — subtitle, directly beneath the title. On phones the
                  title box is a fixed (narrow) grid cell, so the two flanking
                  rules FLEX to fill whatever space is left beside the text rather
                  than staying a fixed 44px each — otherwise the trailing rule
                  spills past the frosted box's right edge. Desktop keeps the
                  fixed-width rules (auto-width row, plenty of room). */}
              <div className="tyg-intro" style={{ '--iy': '30px', animationDelay: '0.42s', position: 'relative', marginTop: 24, display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 16, color: 'var(--tyg-fg)', width: isMobile ? '100%' : undefined, maxWidth: '100%', boxSizing: 'border-box' }}>
                <span style={{ height: 1, background: 'var(--tyg-line-strong, var(--tyg-fg-dim))', flex: isMobile ? '1 1 0%' : '0 0 44px', minWidth: 0 }} />
                <span className="tyg-hero-sub" style={{ flex: '0 0 auto', whiteSpace: 'nowrap', fontSize: 'var(--tyg-text-2xl)', letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase', fontWeight: 'var(--tyg-w-regular)' }}>RustyHead</span>
                <span style={{ height: 1, background: 'var(--tyg-line-strong, var(--tyg-fg-dim))', flex: isMobile ? '1 1 0%' : '0 0 44px', minWidth: 0 }} />
              </div>
            </GridSnapTitle>
            {/* Meta strip — role headline, then fields (left) and location (right)
                along the lower row line, with RustyHead now lifted into the title. */}
            <div className="tyg-hero-metascale" style={{ position: 'absolute', inset: 22, zIndex: 8, pointerEvents: 'none', transformOrigin: 'left bottom' }}>
              <div className="tyg-intro" style={{ '--iy': '24px', animationDelay: '0.54s', position: 'absolute', left: edge, right: edge, bottom: '7%', pointerEvents: 'auto', paddingTop: 22 }}>
                <div className="tyg-hero-role" style={{ fontSize: 'var(--tyg-text-md)', letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase', color: 'var(--tyg-fg-muted)', marginBottom: 16 }}>Visual Artist&nbsp;&nbsp;/&nbsp;&nbsp;Interactive Engineer</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px 40px' }}>
                  {fieldRow({})}
                  <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 'var(--tyg-text-xs)', letterSpacing: '0.14em', color: 'var(--tyg-fg-dim)' }}>Based in Tokyo, JP</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
      // 01 — editorial, lower-left (default). Bottom anchored to the 0.80 row
      // line so the block snaps cleanly into the lower-left grid cells.
      return (
        <GridSnapTitle key="t1" f={f} blur={titleBlurNow} pad={12}
          contentStyle={{ position: 'absolute', left: 'clamp(14px, 5.5vw, 62px)', bottom: '24%', textAlign: 'left' }}>
          <h1 className="tyg-intro" style={{ '--iy': '36px', animationDelay: '0.30s', position: 'relative', margin: 0, fontFamily: 'var(--tyg-font-display)', fontWeight: 'var(--tyg-w-light)',
            color: 'var(--tyg-fg-title)', lineHeight: 0.94, letterSpacing: '0.02em', fontSize: 'clamp(40px, 6.6vw, 92px)', textAlign: 'left' }}>
            TAN&nbsp;YANGGU
          </h1>
          <div className="tyg-intro" style={{ '--iy': '26px', animationDelay: '0.38s', position: 'relative', marginTop: 20, display: 'flex', alignItems: 'center', gap: 16, color: 'var(--tyg-fg)' }}>
            <span style={{ width: 40, height: 1, background: 'var(--tyg-line-strong, var(--tyg-fg-dim))' }} />
            <span style={{ fontSize: 'var(--tyg-text-2xl)', letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase', fontWeight: 'var(--tyg-w-regular)' }}>RustyHead</span>
          </div>
          <div className="tyg-intro" style={{ '--iy': '24px', animationDelay: '0.46s', position: 'relative', marginTop: 18, fontSize: 'var(--tyg-text-md)', letterSpacing: 'var(--tyg-tracking-wide)', textTransform: 'uppercase', color: 'var(--tyg-fg-muted)', fontWeight: 'var(--tyg-w-regular)' }}>
            Visual Artist&nbsp;&nbsp;/&nbsp;&nbsp;Interactive Engineer
          </div>
          {fieldRow({ marginTop: 18 })}
          <div className="tyg-intro" style={{ '--iy': '20px', animationDelay: '0.58s', position: 'relative', marginTop: 16, fontFamily: 'var(--tyg-font-mono)', fontSize: 'var(--tyg-text-xs)', letterSpacing: '0.14em', color: 'var(--tyg-fg-dim)' }}>
            Based in Tokyo, JP
          </div>
        </GridSnapTitle>
      );
    }

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', minHeight: 560, overflow: 'hidden', background: 'var(--tyg-bg-void)', zIndex: 0 }}>

        {/* Layer 0 — generative fallback */}
        {!hasVideo && <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', zIndex: 0 }} />}

        {/* Layer 1 — the video well + graded CSS filter */}
        {hasVideo && (
          <video ref={videoRef} autoPlay muted loop playsInline src={HERO_VIDEO_SRC} className="tyg-kenburns"
            onLoadedMetadata={seekToRandomStart}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 1, filter: cssFilter }} />
        )}

        {/* Layer 2 — color tint */}
        {f.tintStrength > 0 && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: f.tint, opacity: f.tintStrength, mixBlendMode: f.tintBlend }} />
        )}

        {/* Layer 3 — grain */}
        {f.grain > 0 && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
            backgroundImage: `url(${grain})`, backgroundSize: '160px 160px', opacity: f.grain, mixBlendMode: 'overlay',
            animation: 'tyg-grain 0.5s steps(3) infinite' }} />
        )}

        {/* Layer 4 — scanlines */}
        {f.scanlines > 0 && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none', opacity: f.scanlines,
            backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.9) 0px, rgba(0,0,0,0.9) 1px, transparent 1px, transparent ${f.scanGap}px)` }} />
        )}

        {/* Layer 5 — vignette + wash for legibility */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
          background: `radial-gradient(120% 90% at 50% 45%, rgba(10,10,11,0) 30%, rgba(10,10,11,${f.vignette}) 100%), linear-gradient(180deg, rgba(10,10,11,${f.wash}) 0%, rgba(10,10,11,0) 24%, rgba(10,10,11,0) 70%, rgba(10,10,11,${Math.min(f.wash + 0.25, 1)}) 100%)` }} />

        {/* Frosted blocks — snapped to the construction grid (inset 22), so
            every block's four edges land exactly on grid lines and each one
            reads as an enclosed cell. They live in their OWN layer OUTSIDE the
            foreground .tyg-go wrapper so that AT REST no transformed / will-change
            ancestor turns this into a "backdrop root" and nulls the blur — the
            backdrop-filter needs the graded video in its backdrop. On scroll the
            layer takes the SAME lift as the foreground (so the blocks track the
            grid lines), but only AFTER their blur has eased to 0, so the lift's
            transform never nulls a live backdrop-filter. */}
        <div className={'tyg-hero-blocks' + (started ? ' tyg-go' : '')} style={{ position: 'absolute', inset: 22, zIndex: 5, pointerEvents: 'none', transform: layerTransform }}>
        {GEO.blocks.map((b, i) => {
          // Per-block frost: blurred unless the block sets `blur: false`
          // (then it's just a thin outline). Title box blur is separate.
          const blurThis = b.blur !== false && blockBlurNow > 0.5;
          return (
          <div key={i} className="tyg-grow-box" style={{
            position: 'absolute',
            left: gX(b.c0) + '%', top: gy(b.y0) + '%',
            width: (gX(b.c1) - gX(b.c0)) + '%', height: (gy(b.y1) - gy(b.y0)) + '%',
            background: 'rgba(243,243,243,0.05)', border: '1px solid rgba(243,243,243,0.16)',
            backdropFilter: blurThis ? `blur(${blockBlurNow}px)` : 'none',
            WebkitBackdropFilter: blurThis ? `blur(${blockBlurNow}px)` : 'none',
            pointerEvents: 'none', '--gd': (0.18 + i * 0.07) + 's',
          }} />
          );
        })}
        </div>

        {/* ── Foreground — fades + drifts up with the scroll as the
             sections below rise to cover the pinned hero ─────────────── */}
        <div className={started ? 'tyg-go' : undefined} style={fgStyle}>

        {/* Layer 6 — technical blueprint grid + animated scan / sweep */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
          <GridField opacity={f.frame} grid={GEO.grid} gx={gX} crosses={GEO.cross} />
          {/* Hairline frame — unfurls from the left as it eases in */}
          <div className="tyg-grow-h" style={{ position: 'absolute', inset: 22, border: '1px solid var(--tyg-line-soft)', opacity: f.frame, '--gd': '0.1s' }} />
        </div>

        {/* Blueprint corner controls (top-left corner is the Home icon) */}
        <div className="tyg-intro" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', '--iy': '-10px', animationDelay: '0.24s' }}>
        <CornerBtn style={{ top: 22, right: 22, borderLeft: 'none', borderBottom: 'none' }}>
          <span className="tyg-rotate" style={{ display: 'block', width: 13, height: 13 }}>
            <svg width="13" height="13" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.2" fill="none"><circle cx="6" cy="6" r="4.4" /><path d="M6 1.6V6l3 1.5" /></svg>
          </span>
        </CornerBtn>
        <CornerBtn style={{ bottom: 22, left: 22, borderRight: 'none', borderTop: 'none' }}>
          <svg width="13" height="13" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.2" fill="none"><path d="M3 3l6 6M9 3l-6 6" /></svg>
        </CornerBtn>
        <CornerBtn style={{ bottom: 22, right: 22, borderLeft: 'none', borderTop: 'none' }}>
          <svg width="13" height="13" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.2" fill="none"><path d="M3 3l4 3-4 3M7 3v6" /></svg>
        </CornerBtn>
        </div>

        {/* Secondary blueprint crosshairs — inset 22 so they share the grid;
            each sits on a (column line × row line) intersection */}
        <div className="tyg-intro" style={{ position: 'absolute', inset: 22, pointerEvents: 'none', '--ix': '8px', '--iy': '20px', animationDelay: '0.32s' }}>
        {GEO.crossFaint.map((c, i) => (
          <Cross key={'x' + i} top={gy(c.r) + '%'} left={gX(c.c) + '%'} delay={(i * 0.4) + 's'} />
        ))}
        </div>

        {/* Big editorial index — outlined year marker, top-left (layout 01 only) */}
        {layout === 1 && (
        <div className="tyg-intro tyg-hero-year" style={{ '--iy': '22px', animationDelay: '0.12s', position: 'absolute', top: 'clamp(72px, 9vh, 100px)', left: 'clamp(28px, 5.5vw, 80px)', zIndex: 9 }}>
          <div className="tyg-hero-yearnum" style={{ fontFamily: 'var(--tyg-font-display)', fontWeight: 'var(--tyg-w-light)', fontSize: 'clamp(52px, 8.5vw, 120px)',
            lineHeight: 0.86, letterSpacing: '0.02em', color: 'transparent', WebkitTextStroke: '1px var(--tyg-line-soft)' }}>2026</div>
          <div className="tyg-hero-yearcap" style={{ marginTop: 10, fontFamily: 'var(--tyg-font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)' }}>Portfolio · Ed.</div>
        </div>
        )}

        {/* Same outlined year marker, top-left for layout 03 */}
        {layout === 3 && (
        <div className="tyg-intro tyg-hero-year" style={{ '--iy': '22px', animationDelay: '0.12s', position: 'absolute', top: 'clamp(72px, 9vh, 100px)', left: 'clamp(28px, 5.5vw, 80px)', zIndex: 9 }}>
          <div className="tyg-hero-yearnum" style={{ fontFamily: 'var(--tyg-font-display)', fontWeight: 'var(--tyg-w-light)', fontSize: 'clamp(52px, 8.5vw, 120px)',
            lineHeight: 0.86, letterSpacing: '0.02em', color: 'transparent', WebkitTextStroke: '1px var(--tyg-line-soft)' }}>2026</div>
          <div className="tyg-hero-yearcap" style={{ marginTop: 10, fontFamily: 'var(--tyg-font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tyg-fg-faint)' }}>Portfolio · Ed.</div>
        </div>
        )}

        {renderIdentity()}

        {/* Bottom meta corners */}
        <div className="tyg-intro" style={{ '--iy': '14px', animationDelay: '0.40s', position: 'absolute', right: 64, bottom: 40, zIndex: 10, fontSize: 'var(--tyg-text-xs)', letterSpacing: '0.12em', color: 'var(--tyg-fg-faint)', fontFamily: 'var(--tyg-font-mono)' }}>©2026</div>

        {/* Scroll cue — invites the works / about sections below the fold */}
        <a href="#works-cue" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }); }}
          aria-label="Scroll" className="tyg-intro-cx tyg-hero-scroll"
          style={{ '--iy': '16px', animationDelay: '0.72s', position: 'absolute', left: '50%', bottom: 70, transform: 'translateX(-50%)', zIndex: 11,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, cursor: 'pointer',
            fontFamily: 'var(--tyg-font-mono)', fontSize: 17, letterSpacing: '0.34em', textTransform: 'uppercase',
            color: 'var(--tyg-fg-dim)' }}>
          <span>Scroll</span>
          <svg className="tyg-scrollcue" width="28" height="32" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.1">
            <path d="M7 1v12M2.5 9.5 7 14l4.5-4.5" />
          </svg>
        </a>

        </div>
        {/* /Foreground wrapper */}

        {/* Fade-to-background veil — turns the whole first screen into the bg
            colour as it scrolls away into the sections below */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 40, pointerEvents: 'none',
          background: 'var(--tyg-bg)', opacity: veil }} />

      </div>
    );
  }
  window.LandingScreen = LandingScreen;
})();
