# UI Kit — Tan Yanggu Portfolio

A high-fidelity, interactive recreation of **tanyanggu.com** built entirely from this design system's components. It is a faithful rebuild of the live site's structure and feel — not a redesign.

## Run it

Open `index.html`. It is a single-page, hash-routed click-through:

- **`#/`** — Home: the calm two-up grid of works (the site's canonical view).
- **`#/work/:slug`** — Project detail: full-bleed hero, title + `MetaRow`, curatorial prose, image gallery.
- **`#/profile`** — Profile: bilingual name, bio, and the Performance / Exhibition / Award / Skills lists.
- **`#/contact`** — Contact.

Use the **JA / EN** switch in the header to flip the language on Home / Profile / Contact.

## What it composes

| Screen | Design-system components used |
|---|---|
| `HomeScreen.jsx` | `NavBar`, `Eyebrow`, `ProjectCard` (→ `MetaRow` → `DateCode`, `Tag`) |
| `ProjectScreen.jsx` | `NavBar`, `MetaRow`, `Divider`, `Button` |
| `ProfileScreen.jsx` | `NavBar`, `Eyebrow`, `DateCode`, `Divider` |
| `index.html` (Contact + shell) | `NavBar`, `Eyebrow`, `Button` |

`data.js` holds the sample content (works + profile) in the brand voice. Imagery lives in `/assets/images`.

## Files
- `index.html` — app shell, hash router, Contact screen, footer. Loads `../../_ds_bundle.js` and `../../styles.css`.
- `data.js` — works + profile content.
- `HomeScreen.jsx` · `ProjectScreen.jsx` · `ProfileScreen.jsx` — screens, each registered on `window`.

> Components resolve from `window.TanYangguDesignSystem_bf6778` (the compiled bundle). `window.TYG_BASE` (`../../`) prefixes asset paths so images resolve from the project root.
