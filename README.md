# Tan Yanggu — Design System

A design system distilled from the portfolio of **Tan Yanggu / タン ヤング (RustyHead)** — a real-time-CG and audiovisual artist born in Sichuan, China, and based in Tokyo. The system captures the cinematic, near-black gallery aesthetic of his site — a dark void and a single electric-blue accent — retyped in a **geek / terminal voice**: Space Grotesk display + JetBrains Mono for everything technical.

> *Real-time CG as the core medium — interactive installation, CG film, and VR — focused on the human side of technology, creating multisensory experiences that move the viewer's emotions.*

## Source material

This system was reverse-engineered from the artist's live portfolio export:

- **GitHub:** [`RustyHead1/tanyanggu-portfolio`](https://github.com/RustyHead1/tanyanggu-portfolio) — a static (HTTrack) mirror of **tanyanggu.com**, a bilingual (日本語 / English) WordPress site on the **Astra** theme with the *Content Views* grid plugin.
- The token values (colors, type scale, radii) are sampled **directly** from the theme's compiled CSS, not approximated. Explore the repo to verify values or pull additional project imagery.

Related practice repos (context only, not design sources): `RustyHead1/Yonomori-Digital-Archive` (Unity), `RustyHead1/Temporal-Rift-Project-by-Unreal` (UE 5.3).

## Who this is for

Use this system to build **artist-portfolio surfaces, exhibition/performance announcements, project case studies, and AV-event collateral** that feel native to Tan Yanggu's world. It is dark-first, image-led, and quiet — the work is the loudest thing on the page.

---

## CONTENT FUNDAMENTALS

**Voice — curatorial, not promotional.** Copy reads like a gallery label or a festival programme, not a marketing page. Statements are factual and spare. The artist describes *what the work is and where it was shown*, then steps back. There is no "we", no exclamation, no call-to-action urgency.

**Bilingual by default.** Every surface exists in Japanese and English; many run them side by side. Japanese is frequently primary (the site's default language is `ja`). Names appear in both scripts: **Tan Yanggu** / **タン ヤング**. Build with room for CJK — set `--tyg-tracking-cjk` on Japanese runs and never letter-tighten Japanese.

**Person & tense.** Third person for the bio ("…is based in Tokyo", "has performed at…"). Project pages are descriptive and present/past tense. First person is essentially absent. "You" is never used.

**Casing.** Titles are sentence/title case as written — no SCREAMING CAPS in body copy. Uppercase is reserved for small structural labels (eyebrows, nav, section markers) where the system adds wide tracking. Project titles keep their given form, including mixed-script ones: *LiVS / 僕の声、跳ね返る【武蔵β.Ver】Music Video*.

**Metadata is the texture.** Each work is stamped with a **date code** (`2025.12`, `2024.09`) and a row of **tool/medium tags**: `UnrealEngine`, `TouchDesigner`, `AfterEffects`, `AI`, `VJ`, `Personal`, `Interactive Installation`, `LiDAR`, `Unity`, `Fulldome Projection`, `VR`. These tags are the brand's connective tissue — terse, technical, capitalized as proper tool names.

**Example copy (verbatim from source):**
- Bio: *"中国・四川省生まれ、現在は東京を拠点に活動。武蔵野美術大学デザイン情報学コース修士課程修了。"*
- Bio (EN sense): *"Born in Sichuan, China; now based in Tokyo. MFA, Musashino Art University. Works primarily with real-time CG across interactive installation, CG video, and VR."*
- Project titles: *Emergent Cosmos · Echo · Blood Linkage · 拡張的身体 · MetaSound Project · A/V Performance at Synesthesia Array*
- Skills block: *"Real-time Rendering：UnrealEngine, UnityEngine, TouchDesigner / DCC tools：Blender, Cinema 4D / Others：Photoshop, After Effects, Illustrator"* (note the full-width colon `：`).
- Footer: *"Copyright © 2026 Tan Yanggu | Portfolio |"*

**Emoji:** none. Never. The register is gallery-formal.

---

## VISUAL FOUNDATIONS

**The void is the canvas.** Everything sits on near-black `#0f0f10` (`--tyg-bg`). Cards, articles, and the page share this exact value — there are *no* lighter card surfaces by default; separation comes from the imagery and from whitespace, not from boxes. The footer drops a hair deeper to `#100f0f`. The full-bleed media wells can go to `#0a0a0b`.

**Color is rationed.** Off-white `#f3f3f3` carries all text and resting links; headings sit at `#f2f2f2`. Exactly **one** chromatic accent exists — electric blue `#007fff` — and it appears *only* on interaction: link hover, button hover, focus, the nav underline. Deeper blues (`#046bd2`, `#045cb4`) handle pressed/focus-border states. Muted greys (`#a8a8a8`, `#9ca3af`) handle captions and meta. That's the whole palette. Resist adding hues.

**Type — geek / terminal.** Two voices. **Space Grotesk** (300/400/500/600/700) is the technical neo-grotesque that carries display *and* body; the signature display move is **medium (500) with tight tracking** (`-0.02em`) — engineered and confident, with light (300) still on call for airy moments. **JetBrains Mono** is the geek signal, *rationed* to structural/technical text only: code, metadata, eyebrows, nav, date codes, and tool tags — never body. CJK (日本語/中文) rides **M PLUS 1 Code**, a coding-grade Japanese face, so bilingual runs keep the same terminal temperature. Body is 400 at 16px / 1.65. The scale (px): h1 36 (500), h2 30, h3 24, h4/title 20, h5 18, h6 16, meta 13 (mono), taxonomy 14. Uppercase mono labels get wide tracking (`0.08–0.16em`); Latin body uses `-0.02em` on headings only; Japanese is never letter-tightened (`+0.05em`).

**Imagery is the hero — and it has a temperature.** Photos and renders are **dark, atmospheric, near-monochrome**: cool blue-grey projection light, fulldome distortion, silhouetted performers at controllers, with **rare warm punctuation** (a stab of red/orange from a projection). Treat imagery as desaturated and cinematic; let it bleed to the page edge or sit in 16:9 frames. Never bright, never candy-colored.

**Backgrounds.** Flat void — **no gradients, no patterns, no textures, no noise overlays** as decoration. The only "gradient" allowed is a functional protection scrim under text laid over an image (bottom-up black fade). Depth is photographic, not CSS.

**Borders & cards.** Thumbnails and cards round at **6px** (`--tyg-radius-md`) with `overflow:hidden`; buttons/inputs/tags at **4px**. Borders are hairline and *light* (`#f3f3f3` solid on tags/inputs) or a 14%-opacity off-white rule (`--tyg-line-soft`) for quiet dividers. Cards carry essentially no shadow on the void — if elevated, a deep soft `0 6px 15px -2px rgba(0,0,0,.45)`.

**Tags / pills.** The defining UI atom: a bordered capsule — `1px solid #f0f0f0`, ~`5px` padding, `4px` radius — off-white text that **inverts on hover** to a light fill with black text. Compact, wrapping, technical.

**Animation — restrained and slow.** Hover is the language: links cross-fade to blue (`0.2s`), thumbnails either **nudge down to `scale(0.95)`** or, in the blog layout, **slowly zoom to `scale(1.1)` over `0.5s`**. Easing is gentle (`ease` / a soft cubic-bezier). No bounce, no spring, no infinite loops, no parallax gimmicks. Motion should feel like a slow camera move.

**Hover / press states.** Hover = color shift to blue and/or a subtle scale; never a hard background swap (except the tag invert). Press isn't elaborately styled — the system stays calm. Focus is a 2px **dotted** outline in blue (carried straight from the source).

**Transparency & blur.** Used sparingly and only with purpose — a text-protection scrim over media, or a thin sticky header. No frosted-glass everywhere; blur is not decoration here.

**Layout.** Centered 1200px content column (1240px desktop max), 750px narrow column for prose/single pages, 20px gutters. The home view is a calm **two-up grid** of project cards. Sticky minimal header (text wordmark left, terse nav right); slim footer. Generous 3em (48px) section padding — gallery air.

---

## ICONOGRAPHY

The source site is **almost icon-free** — deliberately. Its restraint is the rule to follow.

- **No icon library, no icon font** for content. The Astra theme ships only utility glyphs: a hamburger/close (inline `<svg>`, `currentColor`), a chevron used for menu dropdowns and the scroll-to-top control, and a magnifier for search. These are simple, single-weight, monochrome line/solid SVGs that inherit text color.
- **The wordmark is text, not a logo:** "Tan Yanggu | Portfolio" set in Space Grotesk (or JetBrains Mono for a terminal treatment). There is no graphic logo mark; the favicon (`assets/favicon.png`) is the only brand bitmap.
- **Tools are named in words, not icons.** Where other systems would show a software icon, this one writes `UnrealEngine` / `TouchDesigner` as a text tag. Keep it that way.
- **No emoji, no unicode-glyph icons** in content. A bare `»` / `›` appears only as a breadcrumb/pagination separator.
- **Substitution guidance:** if a surface genuinely needs UI icons (e.g. a richer player or settings screen the source doesn't have), use **Lucide** (https://unpkg.com/lucide-static) — thin, single-weight, monochrome line icons that match the restrained `currentColor` SVG character of the theme. **Flag any such addition as a substitution**, since the brand itself ships almost none.

---

## VISUAL FOUNDATIONS AT A GLANCE

| Token group | Key values |
|---|---|
| Background | `#0f0f10` (page/cards), `#100f0f` (footer), `#0a0a0b` (media void) |
| Text | `#f3f3f3` body, `#f2f2f2` headings, `#a8a8a8` / `#9ca3af` muted |
| Accent | `#007fff` (hover/focus only) · `#046bd2` deep · `#045cb4` deeper |
| Type | Space Grotesk 300/400/500/600/700 (display+body) + JetBrains Mono (code/meta/labels) + M PLUS 1 Code (CJK); h1 36/500, body 16/400/1.65 |
| Radii | 6px cards, 4px controls/tags, 9999px pills |
| Container | 1200px / 1240px / 750px narrow |
| Motion | 0.2s link fade, 0.3–0.5s image scale, gentle easing, no bounce |

---

## INDEX — what's in this folder

**Foundations**
- `styles.css` — global entry point (import this one file). Imports the four token files + base layer.
- `tokens/fonts.css` — Space Grotesk + JetBrains Mono + M PLUS 1 Code via Google Fonts.
- `tokens/colors.css` — ink scale, foreground, accent, lines, semantic aliases.
- `tokens/typography.css` — families (sans/mono/cjk), weights, scale, leading, tracking, semantic roles.
- `tokens/spacing.css` — spacing, radii, borders, shadows, layout, motion.
- `tokens/base.css` — element-level reset/defaults.
- `foundations/*.card.html` — specimen cards for the Design System tab (Type / Colors / Spacing / Brand).

**Components** (`components/`) — reusable React primitives, each with `.jsx` + `.d.ts` + `.prompt.md` and a `@dsCard` thumbnail. Load via the compiled `_ds_bundle.js`; namespace reported by `check_design_system`.
- `components/core/` — `Button`, `Tag`, `Badge`, `DateCode`, `Eyebrow`, `Divider`
- `components/cards/` — `ProjectCard`, `MetaRow`
- `components/navigation/` — `NavBar`, `LangSwitch`

**UI kit** (`ui_kits/portfolio/`) — high-fidelity recreation of the live site: home project grid, project detail, and profile. `index.html` is an interactive click-through.

**Skill**
- `SKILL.md` — makes this folder usable as a downloadable Claude Agent Skill.

> **Caveat — fonts:** Space Grotesk, JetBrains Mono, and M PLUS 1 Code all load from the Google Fonts CDN (no binaries vendored). If you need fully offline assets, drop the `.woff2` files into `tokens/` and swap `fonts.css` to `@font-face`. M PLUS 1 Code covers Japanese kana + kanji; for simplified-Chinese-only glyphs add a `Noto Sans SC` fallback.kens/` and swap `fonts.css` to `@font-face`.
