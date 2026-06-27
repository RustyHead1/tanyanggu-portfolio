---
name: tanyanggu-design
description: Use this skill to generate well-branded interfaces and assets for Tan Yanggu (タン ヤング / RustyHead) — a Tokyo-based real-time-CG and audiovisual artist — for production or for throwaway prototypes, mocks, slides, and portfolio surfaces. Contains the design guidelines, colors, type, fonts, imagery, and UI-kit components needed to design on-brand.
user-invocable: true
---

# Tan Yanggu — Design Skill

Read **README.md** in this skill first — it holds the full guide: content voice, visual foundations, iconography, and a token-at-a-glance table. Then explore the other files.

## What's here
- `styles.css` — global entry point. Link this one file; it imports the tokens + base layer.
- `tokens/` — colors, typography, spacing/radii/shadow/motion, fonts (Raleway via Google Fonts).
- `foundations/*.card.html` — visual specimens for type, color, spacing, and brand.
- `components/` — React primitives (`Button`, `Tag`, `Badge`, `DateCode`, `Eyebrow`, `Divider`, `MetaRow`, `ProjectCard`, `NavBar`, `LangSwitch`) with `.d.ts` contracts and `.prompt.md` usage notes.
- `ui_kits/portfolio/` — an interactive recreation of the live site (home grid / project detail / profile).

## How to work
- **Throwaway artifacts** (slides, mocks, prototypes): copy the assets you need out of `/assets`, link `styles.css`, and build static HTML the user can open. Use the foundation cards and UI kit as visual reference.
- **Production code**: read the token files and component prompts to design natively with the brand; reuse the CSS custom properties (`--tyg-*`) rather than hard-coding values.

## Hold the line on the brand
- Dark-first: everything sits on the near-black void (`#0f0f10`). No light surfaces by default.
- Off-white Raleway type (light 300 for display). One accent only — electric blue `#007fff`, on interaction only.
- Imagery is the hero: dark, near-monochrome, cinematic, with rare warm punctuation.
- Almost no icons; tools are named as text **tags**. No emoji. No gradients/patterns as decoration.
- Curatorial, bilingual (JA/EN) voice — gallery label, not marketing.

If invoked with no brief, ask what the user wants to build, ask a few focused questions, then act as an expert designer who outputs on-brand HTML artifacts or production code.
