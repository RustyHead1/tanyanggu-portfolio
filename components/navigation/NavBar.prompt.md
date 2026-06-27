The site's minimal sticky header — a text wordmark left, terse uppercase nav with a grow-in underline, and the `LangSwitch`, all on the void.

```jsx
<NavBar
  brand="Tan Yanggu"
  brandSuffix="Portfolio"
  links={[
    { label: 'Works', href: 'works/index.html', current: true },
    { label: 'Profile', href: 'profile/index.html' },
    { label: 'Contact', href: 'contact/index.html' },
  ]}
  lang={lang}
  onLangChange={setLang}
/>
```

There is no graphic logo — the wordmark is Space Grotesk text with a faint pipe separator. Composes `LangSwitch`.
