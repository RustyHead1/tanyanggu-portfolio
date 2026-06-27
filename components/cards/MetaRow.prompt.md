A work's metadata line — a `DateCode` followed by a wrapping row of tool/medium `Tag`s. The connective texture under every project title.

```jsx
<MetaRow
  date="2025.12"
  tags={['AfterEffects', 'AI', 'UnrealEngine', 'VJ']}
/>
```

`tags` accepts plain strings or `{label, href}` for taxonomy links. Composes `DateCode` + `Tag`/`TagRow`.
