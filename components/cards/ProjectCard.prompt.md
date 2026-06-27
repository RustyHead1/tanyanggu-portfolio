The home-grid work tile — a 16:9 thumbnail, a 20px title, and a `MetaRow`. On hover the title fades to electric blue and the thumbnail nudges to `scale(0.95)`, the exact gesture from tanyanggu.com.

```jsx
<ProjectCard
  image="assets/images/perf-wesa.jpg"
  title="WeSA Festival 2025 — DNS & RustyHead"
  date="2025.12"
  tags={['AfterEffects', 'AI', 'UnrealEngine', 'VJ']}
  href="works/wesa/index.html"
/>
```

Lay out two-up in a grid with ~28px gap for the canonical home view. Titles keep their given form, including mixed-script ones. Composes `MetaRow` → `DateCode` + `Tag`.
