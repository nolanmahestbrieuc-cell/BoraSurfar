# borasurfar

Marché en ligne pour acheter et vendre des planches de surf, combinaisons et
équipement d'occasion. Application React + TypeScript + Tailwind CSS, avec
icônes Lucide.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:5173`.

```bash
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├── App.tsx                        # assemble les sections et gère l'état (catégorie, filtres)
├── components/
│   ├── PromoBanner.tsx             # bandeau promo turquoise
│   ├── Header.tsx                  # logo + navigation (menu mobile inclus)
│   ├── CategoryNavigation.tsx      # planches / combinaisons / équipement
│   ├── FilterBar.tsx               # barre "Filtrer les résultats" + badge
│   ├── FilterPanel.tsx             # panneau de filtres (prix max)
│   ├── EmptyResults.tsx            # état vide + réinitialisation
│   ├── ResultsGrid.tsx             # grille d'annonces
│   ├── SurfBoardsSection.tsx       # section de contenu en bas de page
│   ├── MobileBottomNavigation.tsx  # barre de navigation mobile fixe
│   └── icons/SurfboardIcon.tsx     # icône planche de surf (style Lucide)
├── data/                           # données mockées (catégories, annonces)
└── types.ts
```

Les données sont mockées dans `src/data/` et prêtes à être remplacées par un
appel API réel.

## Responsive

- **Mobile** : header compact avec menu déroulant, catégories défilables
  horizontalement, barre de navigation fixe en bas d'écran.
- **Desktop** : contenu centré (largeur max ~1200px), navigation horizontale
  complète dans le header, barre de navigation mobile masquée.

## Déploiement (GitHub Pages)

Le workflow `.github/workflows/deploy.yml` build et déploie automatiquement
le site sur GitHub Pages à chaque push sur `claude/borasurfar-site-im825a`
(ou manuellement via l'onglet Actions → "Deploy to GitHub Pages" → Run workflow).

Le `base` Vite est fixé à `/BoraSurfar/` (voir `vite.config.ts`) pour
correspondre à l'URL `https://<owner>.github.io/BoraSurfar/`.

**Étape unique côté GitHub (à faire une fois)** : dans Settings → Pages,
régler "Source" sur **GitHub Actions**.
