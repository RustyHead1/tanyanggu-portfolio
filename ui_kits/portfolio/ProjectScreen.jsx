// ProjectScreen — a single work: full-bleed hero, title + meta, prose, gallery.
(function () {
  const { NavBar, MetaRow, Button, Divider } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';

  function ProjectScreen({ slug, lang, setLang }) {
    const work = window.TYG_DATA.works.find((w) => w.slug === slug) || window.TYG_DATA.works[0];
    const t = window.TYG_PICK(work, lang);

    // Instagram block — defined here so it can be placed above or below the YouTube
    // video. IG's official embed is a white card (no dark mode), so we keep its account
    // bar (avatar + username) at the top and clip away the white footer (likes/caption),
    // leaving the dark video that blends into the dark site. The `instagram` field is a
    // single clip or an array of them; each clip is a bare reel id (string) or an object:
    //   { path: 'reel/<id>' | 'p/<id>', aspect: '<w> / <h>', width: <px> }
    // `aspect` = the VIDEO's real aspect ratio (drives the crop, MUST match the clip or
    // the white footer peeks in / the video clips); `width` = max size. The two spacers
    // set the box height to account-bar (54px) + video, so the footer falls below the
    // clipped region. Set `instagramAbove: true` on a work to render it above the
    // YouTube video instead of below.
    const instagramBlock = work.instagram && (Array.isArray(work.instagram) ? work.instagram : [work.instagram]).map((raw, i) => {
      const ig = typeof raw === 'string' ? { path: 'reel/' + raw } : raw;
      const width = ig.width || 600;            // ← size, set in data.js
      const parts = (ig.aspect || '16 / 9').split('/');   // ← video aspect, set in data.js
      const ratioPct = (parseFloat(parts[1]) / parseFloat(parts[0])) * 100; // video height as % of width
      const IG_HEADER = 54;                     // IG embed's fixed account bar, px
      return (
        <div key={i} style={{ display: 'flex', justifyContent: 'center', margin: '8px 0 32px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: width,
            borderRadius: 'var(--tyg-radius-md)', overflow: 'hidden', background: 'var(--tyg-ink-900)' }}>
            <div style={{ height: IG_HEADER }} />
            <div style={{ paddingTop: ratioPct + '%' }} />
            <iframe
              src={'https://www.instagram.com/' + ig.path + '/embed/'}
              title={t.title + ' — Instagram'}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%',
                height: 'calc(100% + 200px)', border: 0, display: 'block' }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      );
    });

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

        {/* Full-bleed hero. Crop offset (object-position) falls back from the
            hero-specific `heroPosition` to the grid's `imagePosition` to center.
            The hero is 21:9 (wider/shorter than the 16:9 grid card), so it may
            need its own value. Vertical 0% = top, 50% = center, 100% = bottom. */}
        <div className="tyg-proj-hero" style={{ width: '100%', background: 'var(--tyg-ink-900)', aspectRatio: '21 / 9', overflow: 'hidden' }}>
          <img src={window.__IMG(work.image)} alt={t.title}
               style={{ width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: work.heroPosition || work.imagePosition || 'center', display: 'block' }} />
        </div>

        <main style={{ maxWidth: 'var(--tyg-container-narrow)', margin: '0 auto', padding: '48px clamp(20px, 5vw, 72px) 96px' }}>
          <a href="#/works" style={{ fontSize: 'var(--tyg-text-xs)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--tyg-fg-dim)' }}>
            ← {lang === 'JA' ? '作品一覧' : 'All works'}
          </a>

          <h1 style={{ margin: '20px 0 16px', fontSize: 'var(--tyg-text-4xl)', fontWeight: 300, lineHeight: 1.25 }}>
            {t.title}
          </h1>
          <MetaRow date={work.date} tags={work.tags} dateTone="muted" />
          <div style={{ marginTop: 8, color: 'var(--tyg-fg-dim)', fontSize: 'var(--tyg-text-sm)' }}>{t.place}</div>

          <Divider />

          {t.body.map((p, i) => (
            <p key={i} style={{ fontSize: 'var(--tyg-text-md)', lineHeight: 1.7, color: 'var(--tyg-fg)', marginBottom: '1.2em', fontWeight: 300 }}>
              {p.split('\n').map((line, j, arr) => (
                <React.Fragment key={j}>{line}{j < arr.length - 1 && <br />}</React.Fragment>
              ))}
            </p>
          ))}

          {/* Instagram above the YouTube video when the work sets instagramAbove */}
          {work.instagramAbove && instagramBlock}

          {/* YouTube — the original work's video, embedded responsively */}
          {work.youtube && (
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', margin: '8px 0 32px',
              borderRadius: 'var(--tyg-radius-md)', overflow: 'hidden', background: 'var(--tyg-ink-900)' }}>
              <iframe
                src={'https://www.youtube.com/embed/' + work.youtube}
                title={t.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}

          {/* Instagram below the YouTube video (default placement) */}
          {!work.instagramAbove && instagramBlock}

          {/* Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
            {work.gallery.map((src, i) => (
              <div key={i} style={{ borderRadius: 'var(--tyg-radius-md)', overflow: 'hidden', background: 'var(--tyg-ink-900)' }}>
                <img src={window.__IMG(src)} alt="" style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>

          <Divider />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--tyg-fg-faint)', fontSize: 'var(--tyg-text-sm)' }}>Tan Yanggu — {work.date}</span>
            <Button variant="outline" size="sm" href="#/works">Back to works</Button>
          </div>
        </main>
      </div>
    );
  }
  window.ProjectScreen = ProjectScreen;
})();
