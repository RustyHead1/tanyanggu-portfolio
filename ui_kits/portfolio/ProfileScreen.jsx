// ProfileScreen — bio + bilingual name, then Performance / Exhibition / Award / Skills.
// First-paint intro: header text + portrait rise from below in sequence; every
// horizontal hairline (row separators + divider, NOT the nav line) grows out
// from its left edge with an ease-in-out, staggered one after another.
(function () {
  const { NavBar, Eyebrow, DateCode } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';

  // ── shared timing ──────────────────────────────────────────────────────
  const RISE_STEP = 0.07;   // stagger between rising header elements
  const LINE_START = 0.42;  // first line begins growing after the header settles
  const LINE_STEP = 0.075;  // stagger between successive growing lines

  // A 1px hairline that grows out from the left when the page enters.
  function Line({ d }) {
    return (
      <div className="tyg-pf-line"
        style={{ height: 1, background: 'var(--tyg-line-soft)', '--d': d + 's' }} />
    );
  }

  // Resolve a cell that may be a plain string or an { en, ja } pair.
  const cell = (v, ja) => (v && typeof v === 'object') ? (ja ? v.ja : v.en) : v;

  function ListBlock({ label, rows, labelDelay, nextLine, ja }) {
    return (
      <section style={{ marginBottom: 'var(--tyg-space-7)' }}>
        <div className="tyg-pf-rise" style={{ '--d': labelDelay + 's' }}>
          <Eyebrow tone="dim" style={{ marginBottom: 18 }}>{label}</Eyebrow>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rows.map((r, i) => {
            const d = nextLine();
            return (
              <div key={i}>
                <Line d={d} />
                <div className="tyg-pf-rise" style={{
                  '--d': d + 's',
                  display: 'grid', gridTemplateColumns: '88px 1fr', gap: 20,
                  padding: '12px 0', alignItems: 'baseline',
                }}>
                  <DateCode tone="dim">{r[0]}</DateCode>
                  <div>
                    <span style={{ color: 'var(--tyg-fg)', fontSize: 'var(--tyg-text-base)' }}>{cell(r[1], ja)}</span>
                    {r[2] && <span style={{ color: 'var(--tyg-fg-dim)', fontSize: 'var(--tyg-text-sm)', marginLeft: 10 }}>· {cell(r[2], ja)}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  function ProfileScreen({ lang, setLang }) {
    const p = window.TYG_DATA.profile;
    const rootRef = React.useRef(null);

    React.useEffect(() => {
      const el = rootRef.current;
      if (!el) return;
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => el.classList.add('tyg-pf-go')));
      return () => cancelAnimationFrame(id);
    }, []);

    const ja = lang === 'JA';

    // Sequential delay generator for the growing hairlines.
    let li = 0;
    const nextLine = () => LINE_START + (li++) * LINE_STEP;

    return (
      <div ref={rootRef} className="tyg-pf">
        <style>{`
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
        `}</style>

        <NavBar
          lang={lang}
          onLangChange={setLang}
          brand="Tan Yanggu"
          brandSuffix="Portfolio"
          links={[
            { label: 'Home', href: '#/' },
            { label: 'Works', href: '#/works' },
            { label: 'Profile', href: '#/profile', current: true },
            { label: 'Contact', href: '#/contact' },
          ]}
        />
        <main style={{ maxWidth: 'var(--tyg-container-narrow)', margin: '0 auto', padding: '48px clamp(20px, 5vw, 72px) 96px' }}>
          <div className="tyg-pf-head" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'start', marginBottom: 'var(--tyg-space-7)' }}>
            <div className="tyg-pf-rise" style={{ '--d': '0s', borderRadius: 'var(--tyg-radius-md)', overflow: 'hidden', aspectRatio: '3 / 4', background: 'var(--tyg-ink-900)' }}>
              <img src={window.__IMG(p.portrait)} alt={p.nameEn} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <div className="tyg-pf-rise" style={{ '--d': RISE_STEP + 's' }}>
                <Eyebrow>Profile</Eyebrow>
              </div>
              <h1 className="tyg-pf-rise" style={{ '--d': (RISE_STEP * 2) + 's', margin: '12px 0 4px', fontSize: 'var(--tyg-text-4xl)', fontWeight: 300 }}>{p.nameEn}</h1>
              <div className="tyg-pf-rise" style={{ '--d': (RISE_STEP * 3) + 's', color: 'var(--tyg-fg-dim)', fontSize: 'var(--tyg-text-md)', letterSpacing: '0.04em' }}>
                {ja
                  ? <>{p.nameJa} <span style={{ color: 'var(--tyg-fg-faint)' }}>/ {p.alias}</span></>
                  : <span style={{ color: 'var(--tyg-fg-faint)' }}>{p.alias}</span>}
              </div>
            </div>
          </div>

          <p className="tyg-pf-rise" style={{ '--d': (RISE_STEP * 4) + 's', fontSize: 'var(--tyg-text-md)', lineHeight: 1.9, color: 'var(--tyg-fg)', fontWeight: 300, marginBottom: '1em' }}>
            {lang === 'JA' ? p.bioJa : p.bioEn}
          </p>

          <div style={{ margin: 'var(--tyg-space-6) 0' }}><Line d={LINE_START} /></div>
          <ListBlock label="Performance" rows={p.performance} labelDelay={LINE_START + LINE_STEP} nextLine={nextLine} ja={ja} />
          <ListBlock label="Exhibition" rows={p.exhibition} labelDelay={nextLine() + LINE_STEP * 0.5} nextLine={nextLine} ja={ja} />
          <ListBlock label="Award" rows={p.award} labelDelay={nextLine() + LINE_STEP * 0.5} nextLine={nextLine} ja={ja} />

          <section>
            <div className="tyg-pf-rise" style={{ '--d': (nextLine() + LINE_STEP * 0.5) + 's' }}>
              <Eyebrow tone="dim" style={{ marginBottom: 18 }}>Skills</Eyebrow>
            </div>
            {p.skills.map((s, i) => {
              const d = nextLine();
              return (
                <div key={i}>
                  <Line d={d} />
                  <div className="tyg-pf-rise tyg-pf-skill" style={{ '--d': d + 's', display: 'grid', gridTemplateColumns: '170px 1fr', gap: 20, padding: '10px 0' }}>
                    <span style={{ color: 'var(--tyg-fg-dim)', fontSize: 'var(--tyg-text-sm)' }}>{s[0]}</span>
                    <span style={{ color: 'var(--tyg-fg)', fontSize: 'var(--tyg-text-base)' }}>{s[1]}</span>
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      </div>
    );
  }
  window.ProfileScreen = ProfileScreen;
})();
