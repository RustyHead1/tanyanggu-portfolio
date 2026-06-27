// HomeSections — everything below the cinematic hero on the Home route:
// 1) Selected Works (4 cards, scroll-revealed)  2) condensed About
// 3) social footer (Instagram / X / Xiaohongshu — links are placeholders).
(function () {
  const { ProjectCard, Eyebrow, DateCode, Divider, Button } = window.TanYangguDesignSystem_bf6778;
  const BASE = window.TYG_BASE || '';
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Reveal — rise + un-blur as the element scrolls into view. Pure CSS
  // (scroll-driven `animation-timeline: view()` on a stable className) so a
  // re-render of the host can't reset it. `index` offsets the entry range
  // slightly for a staggered cascade; falls back to visible where the CSS
  // feature or reduced-motion applies. ──────────────────────────────────
  function Reveal({ index = 0, children, style }) {
    const off = Math.min(index, 4) * 5; // % stagger by position in a group
    return (
      <div className="tyg-reveal"
        style={{ animationRange: `entry ${off}% cover 30%`, ...style }}>
        {children}
      </div>
    );
  }

  // ── Section header — eyebrow + index + big light title ─────────────────
  function SectionHead({ index, eyebrow, children }) {
    return (
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 'var(--tyg-space-6)' }}>
          <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 12, letterSpacing: '0.18em', color: 'var(--tyg-fg-faint)' }}>{index}</span>
          <span style={{ width: 28, height: 1, background: 'var(--tyg-line-soft)', transform: 'translateY(-4px)' }} />
          <Eyebrow tone="dim">{eyebrow}</Eyebrow>
        </div>
        <h2 style={{ margin: 0, fontFamily: 'var(--tyg-font-display)', fontWeight: 'var(--tyg-w-light, 300)',
          fontSize: 'clamp(34px, 4vw, 60px)', lineHeight: 1.05, letterSpacing: '0.01em', color: 'var(--tyg-fg-title)' }}>
          {children}
        </h2>
      </Reveal>
    );
  }

  // ── Social icons ───────────────────────────────────────────────────────
  function IgIcon() {
    return (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  function XIcon() {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    );
  }
  function XhsIcon() {
    return (
      <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.04em' }}>RED</span>
    );
  }
  function Social({ label, href, children }) {
    const [hover, setHover] = React.useState(false);
    const isMail = /^mailto:/.test(href);
    return (
      <a href={href} target={isMail ? undefined : '_blank'} rel={isMail ? undefined : 'noopener noreferrer'} aria-label={label} title={label}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ width: 46, height: 46, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxSizing: 'border-box',
          border: '1px solid ' + (hover ? 'var(--tyg-accent)' : 'var(--tyg-line-soft)'),
          color: hover ? 'var(--tyg-accent)' : 'var(--tyg-fg-dim)',
          background: hover ? 'rgba(0,127,255,0.06)' : 'transparent',
          transform: hover ? 'translateY(-2px)' : 'none',
          transition: 'color var(--tyg-dur-fast) var(--tyg-ease), border-color var(--tyg-dur-fast) var(--tyg-ease), background var(--tyg-dur-fast) var(--tyg-ease), transform var(--tyg-dur) var(--tyg-ease)' }}>
        {children}
      </a>
    );
  }

  // ── GSAP infinite-loop engine (Osmo) ───────────────────────────────────
  const gsap = window.gsap, Draggable = window.Draggable, InertiaPlugin = window.InertiaPlugin;
  function horizontalLoop(items, config) {
    let timeline;
    items = gsap.utils.toArray(items);
    config = config || {};
    gsap.context(() => {
      let onChange = config.onChange, lastIndex = 0,
        tl = gsap.timeline({ repeat: config.repeat, onUpdate: onChange && function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) { lastIndex = i; onChange(items[i], i); }
          }, paused: config.paused, defaults: { ease: 'none' },
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
        length = items.length, startX = items[0].offsetLeft, times = [], widths = [],
        spaceBefore = [], xPercents = [], curIndex = 0, indexIsDirty = false, center = config.center,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
        timeOffset = 0,
        container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
        totalWidth,
        getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') + (parseFloat(config.paddingRight) || 0),
        populateWidths = () => {
          let b1 = container.getBoundingClientRect(), b2;
          items.forEach((el, i) => {
            widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i] * 100 + gsap.getProperty(el, 'xPercent'));
            b2 = el.getBoundingClientRect();
            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
            b1 = b2;
          });
          gsap.set(items, { xPercent: i => xPercents[i] });
          totalWidth = getTotalWidth();
        },
        timeWrap,
        populateOffsets = () => {
          timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
          center && times.forEach((t, i) => { times[i] = timeWrap(tl.labels['label' + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset); });
        },
        getClosest = (values, value, wrap) => {
          let i = values.length, closest = 1e10, index = 0, d;
          while (i--) { d = Math.abs(values[i] - value); if (d > wrap / 2) d = wrap - d; if (d < closest) { closest = d; index = i; } }
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
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
              .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
              .add('label' + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
          }
          timeWrap = gsap.utils.wrap(0, tl.duration());
        },
        refresh = (deep) => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
        },
        onResize = () => refresh(true), proxy;
      gsap.set(items, { x: 0 });
      populateWidths(); populateTimeline(); populateOffsets();
      window.addEventListener('resize', onResize);
      function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index), time = times[newIndex];
        if (time > tl.time() !== index > curIndex && index !== curIndex) { time += tl.duration() * (index > curIndex ? 1 : -1); }
        if (time < 0 || time > tl.duration()) { vars.modifiers = { time: timeWrap }; }
        curIndex = newIndex; vars.overwrite = true; gsap.killTweensOf(proxy);
        return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
      }
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = setCurrent => { let index = getClosest(times, tl.time(), tl.duration()); if (setCurrent) { curIndex = index; indexIsDirty = false; } return index; };
      tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
      tl.next = vars => toIndex(tl.current() + 1, vars);
      tl.previous = vars => toIndex(tl.current() - 1, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) { tl.vars.onReverseComplete(); tl.reverse(); }
      if (config.draggable && typeof (Draggable) === 'function') {
        proxy = document.createElement('div');
        let wrap = gsap.utils.wrap(0, 1), ratio, startProgress, draggable, lastSnap, initChangeX, wasPlaying,
          align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
          syncIndex = () => tl.closestIndex(true);
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode, type: 'x',
          onPressInit() { let x = this.x; gsap.killTweensOf(tl); wasPlaying = !tl.paused(); tl.pause(); startProgress = tl.progress(); refresh(); ratio = 1 / totalWidth; initChangeX = (startProgress / -ratio) - x; gsap.set(proxy, { x: startProgress / -ratio }); },
          onDrag: align, onThrowUpdate: align, overshootTolerance: 0, inertia: true,
          snap(value) {
            if (Math.abs(startProgress / -ratio - this.x) < 10) return lastSnap + initChangeX;
            let time = -(value * ratio) * tl.duration(), wrappedTime = timeWrap(time),
              snapTime = times[getClosest(times, wrappedTime, tl.duration())], dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
            lastSnap = (time + dif) / tl.duration() / -ratio; return lastSnap;
          },
          onRelease() { syncIndex(); draggable.isThrowing && (indexIsDirty = true); },
          onThrowComplete: () => { syncIndex(); wasPlaying && tl.play(); }
        })[0];
        tl.draggable = draggable;
      }
      tl.closestIndex(true); lastIndex = curIndex;
      onChange && onChange(items[curIndex], curIndex);
      timeline = tl;
      return () => window.removeEventListener('resize', onResize);
    });
    return timeline;
  }

  // ── WorksSlider — infinite offset slider with counter, nav & autoplay ──
  const pad = n => (n < 10 ? '0' + n : '' + n);
  const wsCorner = { position: 'absolute', display: 'block', width: 11, height: 11,
    borderTop: '1px solid currentColor', borderLeft: '1px solid currentColor', borderTopLeftRadius: 4 };

  const WorksSlider = React.memo(function WorksSlider({ works, lang }) {
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
        paused: true, draggable: true, center: false,
        onChange: (element, index) => {
          const D = REDUCED ? 0 : 0.5;
          if (activeElement && activeElement !== element.nextElementSibling) {
            activeElement.classList.remove('active');
            gsap.to(activeElement, { opacity: 0.26, duration: D, overwrite: 'auto' });
            const oc = activeElement.querySelector('.tyg-ws-cap');
            if (oc) gsap.to(oc, { opacity: 0, y: 10, duration: D, overwrite: 'auto' });
          }
          const next = element.nextElementSibling || slides[0];
          next.classList.add('active');
          gsap.to(next, { opacity: 1, duration: D, overwrite: 'auto' });
          const nc = next.querySelector('.tyg-ws-cap');
          if (nc) gsap.to(nc, { opacity: 1, y: 0, duration: REDUCED ? 0 : 0.55, delay: REDUCED ? 0 : 0.26, overwrite: 'auto' });
          activeElement = next;
          gsap.to(allSteps, { y: (-100 * index) + '%', ease: 'power3', duration: REDUCED ? 0 : 0.45 });
        }
      });

      slides.forEach((slide, i) => slide.addEventListener('click', () => {
        if (slide.classList.contains('active')) { location.hash = slide.getAttribute('data-href'); }
        else loop.toIndex(i - 1, { ease: 'power3', duration: 0.725 });
      }));
      const nextBtn = root.querySelector('[data-slider="button-next"]');
      const prevBtn = root.querySelector('[data-slider="button-prev"]');
      nextBtn.addEventListener('click', () => loop.next({ ease: 'power3', duration: 0.725 }));
      prevBtn.addEventListener('click', () => loop.previous({ ease: 'power3', duration: 0.725 }));

      // autoplay — pauses only while hovering the active (fully-shown) slide; respects reduced-motion
      let timer = null, overActive = false;
      const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
      const start = () => { if (REDUCED) return; stop(); timer = setInterval(() => loop.next({ ease: 'power3', duration: 0.9 }), 3800); };
      slides.forEach((slide) => {
        slide.addEventListener('pointerenter', () => { if (slide.classList.contains('active')) { overActive = true; stop(); } });
        slide.addEventListener('pointerleave', () => { if (slide.classList.contains('active')) { overActive = false; start(); } });
      });
      root.addEventListener('pointerdown', stop);
      root.addEventListener('pointerup', () => { if (!overActive) start(); });
      start();

      return () => { stop(); loop && loop.kill && loop.kill(); };
    }, []);

    const NavBtn = ({ dir }) => (
      <button data-slider={dir === 'next' ? 'button-next' : 'button-prev'} className="tyg-ws-btn"
        aria-label={dir === 'next' ? 'next slide' : 'previous slide'}
        style={{ background: 'transparent', color: 'var(--tyg-fg-dim)', border: '1px solid var(--tyg-line-soft)',
          borderRadius: 'var(--tyg-radius)', width: 'clamp(46px,3.6vw,58px)', height: 'clamp(46px,3.6vw,58px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, cursor: 'pointer', flex: 'none' }}>
        <svg width="19" height="13" viewBox="0 0 17 12" fill="none" style={{ transform: dir === 'next' ? 'rotate(180deg)' : 'none' }}>
          <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor" />
        </svg>
        <span className="tyg-ws-corners" style={{ color: 'var(--tyg-white)' }} aria-hidden="true">
          <i style={{ ...wsCorner, top: 0, left: 0 }} />
          <i style={{ ...wsCorner, top: 0, right: 0, transform: 'rotate(90deg)' }} />
          <i style={{ ...wsCorner, bottom: 0, left: 0, transform: 'rotate(-90deg)' }} />
          <i style={{ ...wsCorner, bottom: 0, right: 0, transform: 'rotate(180deg)' }} />
        </span>
      </button>
    );

    return (
      <div ref={rootRef} style={{ position: 'relative', height: 'clamp(300px, 40vw, 520px)',
        marginTop: 'var(--tyg-space-6)', overflow: 'hidden', touchAction: 'pan-y' }}>

        {/* left overlay — big counter + nav buttons, over a gradient fade */}
        <div style={{ position: 'absolute', inset: '0 auto 0 0', zIndex: 3, width: 'clamp(230px, 32vw, 400px)',
          display: 'flex', alignItems: 'center', paddingLeft: 'clamp(0px, 1.6vw, 24px)',
          background: 'linear-gradient(90deg, var(--tyg-bg) 64%, transparent)', pointerEvents: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            height: '74%', pointerEvents: 'auto' }}>
            {/* counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.16em',
              fontFamily: 'var(--tyg-font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1, color: 'var(--tyg-fg-title)' }}>
              <div data-ws="steps-col" style={{ height: '1em', overflow: 'hidden' }}></div>
              <div style={{ width: 2, height: '0.6em', background: 'var(--tyg-fg-faint)', transform: 'rotate(15deg)' }} />
              <div style={{ height: '1em', overflow: 'hidden' }}>
                <div data-ws="total" style={{ width: '2.2ch', lineHeight: 1, textAlign: 'center', color: 'var(--tyg-fg-faint)' }}>06</div>
              </div>
            </div>
            {/* nav */}
            <div className="tyg-ws-nav" style={{ display: 'flex', gap: 'clamp(14px, 1.6vw, 24px)' }}>
              <NavBtn dir="prev" />
              <NavBtn dir="next" />
            </div>
          </div>
        </div>

        {/* the slider track */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <div data-slider="list" style={{ display: 'flex', position: 'relative' }}>
              {works.map((w) => (
                <div key={w.slug} data-slider="slide" data-href={'#/work/' + w.slug} className="tyg-ws-slide">
                  <div className="tyg-ws-card" style={{ borderRadius: 'var(--tyg-radius-md)', width: '100%', height: '100%', position: 'relative',
                    overflow: 'hidden', border: '1px solid var(--tyg-line-soft)', background: 'var(--tyg-ink-900)' }}>
                    <img src={window.__IMG(w.image)} alt={window.TYG_PICK(w, lang).title} draggable="false"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                        pointerEvents: 'none', userSelect: 'none' }} />
                    <div className="tyg-ws-cap" style={{ position: 'absolute', top: 16, left: 16, display: 'flex',
                      flexWrap: 'wrap', alignItems: 'center', gap: 9, padding: '7px 13px 7px 11px', borderRadius: 'var(--tyg-radius)',
                      background: 'rgba(10,10,12,0.6)', backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)', border: '1px solid var(--tyg-line-soft)', maxWidth: 'calc(100% - 32px)' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tyg-accent)', flex: 'none' }} />
                      <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 11.5, letterSpacing: '0.04em',
                        color: 'var(--tyg-fg)', lineHeight: 1.35 }}>{window.TYG_PICK(w, lang).title}</span>
                      <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 10.5, color: 'var(--tyg-fg-faint)', flex: 'none' }}>{w.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  });

  function HomeSections({ lang }) {
    const data = window.TYG_DATA;
    const works = data.works;
    const p = data.profile;
    const ja = lang === 'JA';

    const bioShort = ja
      ? '中国・四川省生まれ、東京を拠点に活動。武蔵野美術大学デザイン情報学コース修士課程修了。リアルタイムCGを軸に、インタラクティブ・インスタレーション、CG映像、VRなど多岐にわたる分野で制作している。'
      : 'Born in Sichuan, China; now based in Tokyo. MFA, Musashino Art University. Working primarily with real-time CG across interactive installation, CG video, and VR — multisensory experiences focused on the human side of technology.';

    const facts = [
      ['Based', ja ? '東京 / Tokyo' : 'Tokyo, Japan'],
      ['Education', 'MFA — Musashino Art University'],
      ['Project', 'Synesthesia Array (w/ DNS)'],
    ];

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
      window.addEventListener('scroll', on, { passive: true });
      on();
      return () => { window.removeEventListener('scroll', on); if (raf) cancelAnimationFrame(raf); };
    }, []);
    const seamEase = sp * sp * (3 - 2 * sp);          // smoothstep
    const feather  = REDUCED ? 0 : (1 - seamEase) * 150;  // px of alpha-feathered top edge

    return (
      <div style={{ position: 'relative', zIndex: 1,
        background: `linear-gradient(180deg, transparent 0px, var(--tyg-bg) ${feather}px)` }}>

        {/* The panel's top edge feathers into the hero via the animated alpha
            gradient above — no backdrop blur, so the hero's bottom stays crisp
            as the second page rises to cover it. */}

        {/* ── 01 — Selected Works ───────────────────────────────────── */}
        <section className="tyg-home-section" style={{ minHeight: '100vh', display: 'flex',
          flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
          <div style={{ width: '100%', maxWidth: 'min(92vw, 1480px)', margin: '0 auto', padding: 'max(72px, 8vh) clamp(32px, 5vw, 72px) clamp(40px, 7vh, 72px)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <SectionHead index="01" eyebrow={ja ? '作品' : 'Selected Works'}>
                {ja ? <>リアルタイムCGと<br />オーディオビジュアル</> : <>Real-time CG &amp;<br />audiovisual performance</>}
              </SectionHead>
              <Reveal index={1}>
                <a href="#/works" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--tyg-font-mono)',
                  fontSize: 'var(--tyg-text-xs)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tyg-fg-dim)',
                  paddingBottom: 6 }}>
                  {ja ? 'すべて見る' : 'View all'} <span style={{ fontSize: 14 }}>→</span>
                </a>
              </Reveal>
            </div>

            <Reveal index={2}>
              <WorksSlider works={works} lang={lang} />
            </Reveal>
          </div>
        </section>

        {/* ── 02 — About (condensed profile) ────────────────────────── */}
        <section className="tyg-home-section" style={{ background: 'var(--tyg-bg-deep)', minHeight: '100vh',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
          <div style={{ width: '100%', maxWidth: 'min(92vw, 1480px)', margin: '0 auto', padding: 'max(72px, 8vh) clamp(32px, 5vw, 72px) clamp(40px, 7vh, 72px)' }}>
            <SectionHead index="02" eyebrow={ja ? '概要' : 'About'}>
              {p.nameJa}
            </SectionHead>

            <div className="tyg-about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, clamp(280px, 26vw, 400px)) minmax(0, 1fr)', gap: 'clamp(32px, 4.5vw, 64px)', alignItems: 'start', marginTop: 'var(--tyg-space-6)' }}>
              <Reveal>
                <div style={{ borderRadius: 'var(--tyg-radius-lg)', overflow: 'hidden', aspectRatio: '3 / 4',
                  background: 'var(--tyg-ink-900)', border: '1px solid var(--tyg-line-soft)' }}>
                  <img src={window.__IMG(p.portrait)} alt={p.nameEn}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                  fontFamily: 'var(--tyg-font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--tyg-fg-faint)' }}>
                  <span>{p.nameEn}</span><span>/ {p.alias}</span>
                </div>
              </Reveal>

              <Reveal index={1}>
                <p style={{ margin: '0 0 28px', fontSize: 'clamp(17px, 1.3vw, 22px)', lineHeight: 1.9,
                  color: 'var(--tyg-fg)', fontWeight: 300, maxWidth: 720 }}>{bioShort}</p>

                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
                  {facts.map((f, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20,
                      padding: '13px 0', borderTop: '1px solid var(--tyg-line-soft)', alignItems: 'baseline' }}>
                      <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 11, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'var(--tyg-fg-faint)' }}>{f[0]}</span>
                      <span style={{ color: 'var(--tyg-fg)', fontSize: 'var(--tyg-text-base)' }}>{f[1]}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Button variant="solid" href="#/profile" style={{ whiteSpace: 'nowrap' }}>{ja ? 'プロフィール詳細' : 'Full profile'}</Button>
                  <Button variant="ghost" href="#/contact" style={{ whiteSpace: 'nowrap' }}>{ja ? 'お問い合わせ' : 'Get in touch'}</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Footer — socials + colophon ───────────────────────────── */}
        <footer style={{ background: 'var(--tyg-bg-void)', borderTop: '1px solid var(--tyg-line-soft)' }}>
          <div style={{ maxWidth: 'var(--tyg-container)', margin: '0 auto', padding: '72px clamp(32px, 5vw, 72px) 40px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <div>
                <div style={{ fontFamily: 'var(--tyg-font-display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 56px)',
                  lineHeight: 0.95, letterSpacing: '0.02em', color: 'var(--tyg-fg-title)' }}>TAN YANGGU</div>
                <div style={{ marginTop: 12, fontFamily: 'var(--tyg-font-mono)', fontSize: 11, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--tyg-fg-faint)' }}>Visual Artist / RustyHead · Tokyo, JP</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
                <span style={{ fontFamily: 'var(--tyg-font-mono)', fontSize: 10.5, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'var(--tyg-fg-faint)' }}>Follow</span>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Social label="Instagram" href="https://www.instagram.com/rustyhead_yg/"><IgIcon /></Social>
                  <Social label="X" href="https://x.com/RustyHead_YG"><XIcon /></Social>
                  <Social label="Xiaohongshu" href="https://xhslink.com/m/98SwUz8TVJO"><XhsIcon /></Social>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 56, paddingTop: 22, borderTop: '1px solid var(--tyg-line-soft)',
              display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
              fontFamily: 'var(--tyg-font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--tyg-fg-faint)' }}>
              <span>© 2026 Tan Yanggu — Portfolio</span>
              <a href="mailto:tanyanggu123@gmail.com" style={{ color: 'var(--tyg-fg-dim)' }}>tanyanggu123@gmail.com</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  window.HomeSections = HomeSections;
})();
