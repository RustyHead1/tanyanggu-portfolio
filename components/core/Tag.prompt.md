The signature brand atom — redesigned as a geek/minimal **terminal token** for tool/medium metadata. Borderless mono with a faint leading sigil; on hover the sigil brightens, the label crosses to electric blue, and a hairline accent underline wipes in from the left. This is how the brand names software: as text tokens, never icons.

```jsx
<TagRow>
  <Tag href="category/unrealengine/index.html">UnrealEngine</Tag>
  <Tag href="category/touchdesigner/index.html">TouchDesigner</Tag>
  <Tag active>Personal</Tag>
</TagRow>
```

Variants: `hash` (default, `#Tag`), `bracket` (`[Tag]`), `angle` (`<Tag>`), and `outline` — a quiet hairline chip for filter rows / selectable states. Capitalize tool names exactly as written (UnrealEngine, AfterEffects, AI, VJ, LiDAR). `href` makes it a taxonomy link; `active` forces the electric-blue state. Wrap clusters in `<TagRow>` for consistent 12px gap + wrapping.
