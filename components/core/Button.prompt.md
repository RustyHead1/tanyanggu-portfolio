A quiet, gallery-formal button whose electric-blue accent only appears on hover/focus — use sparingly, since this brand prefers plain text links.

```jsx
<Button variant="outline" href="works/index.html">View works</Button>
<Button variant="solid" size="lg" onClick={submit}>Get in touch</Button>
<Button variant="ghost" size="sm">Back</Button>
```

Variants: `solid` (light fill → blue on hover), `outline` (hairline border → blue fill on hover), `ghost` (text-only → blue). Sizes: `sm` / `md` / `lg`. Props: `href` (renders an `<a>`), `disabled`, `fullWidth`. Keep labels terse and sentence-case.
