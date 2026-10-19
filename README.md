# Go-Zone – sito web

React 19 + Vite + Tailwind CSS v4 + react-router.

```bash
npm install
npm run dev        # sviluppo
npm run typecheck  # controllo TypeScript
npm run lint       # ESLint (js/ts/tsx)
npm run build      # build di produzione in dist/
```

## Struttura

```
src/
  index.css            design token (@theme) + accenti per zona
  App.tsx              route
  data/                contenuti: zone, team, contatti, storie, libri
  hooks/               useInView, useBodyScrollLock
  Components/
    Ui/                primitive condivise: Section, Container, SectionHeader,
                       Card, FeatureCard, MiniCard, Badge, Button, Prose, FadeIn, Modal…
    Navbar, Footer, Layout, HeroSection, Aree, Team, BannerSportello,
    StoriesClimate, SportelloInfo
  Pages/               una cartella per pagina
```

## Regole di stile

- **Niente colori o stili inline**: usare i token (`brand-*`, `ink`, `muted`, `line`, `cream`, `accent`).
- **Un solo verde di brand.** Ogni zona ridefinisce solo `--color-accent` con
  `data-zone="geo|psy|anthro|circular"` sul contenitore; i componenti usano `text-accent`, `bg-accent/10`, ecc.
- **Ogni pagina** = `HeroSection` + una serie di `Section`, ognuna con `SectionHeader`.
- **Mobile first**: classi base per il telefono, poi `sm:` / `md:` / `lg:`.
- **Immagini** in `public/`: hero ≤ 2200px, avatar ≤ 480px.
