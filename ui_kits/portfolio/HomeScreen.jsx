// HomeScreen — the canonical landing view: a calm two-up grid of works.
(function () {
  const { NavBar, ProjectCard, Eyebrow } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';

  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // FadeCard — staggered reveal on first paint: rises from below while
  // blurring from soft (feathered, diffuse edges) to sharp. Both image and
  // text blur together. `filter` is dropped to 'none' once settled so it
  // doesn't flatten the thumbnail's 3D tilt. Pure CSS, no motion lib.
  function FadeCard({ index = 0, children }) {
    const [shown, setShown] = React.useState(REDUCED);
    const [done, setDone] = React.useState(REDUCED);
    const base = 60 + index * 120;

    React.useEffect(() => {
      if (REDUCED) return;
      const t1 = setTimeout(() => setShown(true), base);
      const t2 = setTimeout(() => setDone(true), base + 850);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [base]);

    return (
      <div
        style={{
          transform: `translateY(${shown ? 0 : 28}px)`,
          opacity: shown ? 1 : 0,
          filter: done ? 'none' : (shown ? 'blur(0px)' : 'blur(16px)'),
          transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease, filter 0.8s ease',
          willChange: 'transform, filter, opacity',
        }}
      >
        {children}
      </div>
    );
  }

  function HomeScreen({ lang, setLang }) {
    const works = window.TYG_DATA.works;
    return (
      <div>
        <NavBar
          lang={lang}
          onLangChange={setLang}
          brand="Tan Yanggu"
          brandSuffix="Portfolio"
          links={[
            { label: 'Home', href: '#/' },
            { label: 'Works', href: '#/works', current: true },
            { label: 'Profile', href: '#/profile' },
            { label: 'Contact', href: '#/contact' },
          ]}
        />
        <main style={{ maxWidth: 'var(--tyg-container)', margin: '0 auto', padding: '48px clamp(20px, 5vw, 72px) 96px' }}>
          <header style={{ marginBottom: 'var(--tyg-space-7)' }}>
            <Eyebrow>{lang === 'JA' ? '作品' : 'Selected Works'}</Eyebrow>
            <h1 style={{ marginTop: 12, fontSize: 'var(--tyg-text-5xl)', fontWeight: 300, lineHeight: 1.1 }}>
              {lang === 'JA' ? 'リアルタイムCGと' : 'Real-time CG &'}<br />
              {lang === 'JA' ? 'オーディオビジュアル' : 'audiovisual performance'}
            </h1>
          </header>
          <div className="tyg-works-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 28px' }}>
            {works.map((w, i) => (
              <FadeCard key={w.slug} index={i}>
                <ProjectCard
                  tilt
                  image={window.__IMG(w.image)}
                  title={window.TYG_PICK(w, lang).title}
                  date={w.date}
                  tags={w.tags}
                  href={'#/work/' + w.slug}
                  objectPosition={w.imagePosition}
                />
              </FadeCard>
            ))}
          </div>
        </main>
      </div>
    );
  }
  window.HomeScreen = HomeScreen;
})();
