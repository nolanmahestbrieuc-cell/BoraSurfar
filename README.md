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

## Page « Maison Aurèle »

Le projet contient une seconde page, indépendante de la marketplace : la page
d'accueil du restaurant gastronomique **Maison Aurèle**. C'est une entrée Vite
distincte (`maison-aurele.html`), accessible en local sur
`http://localhost:5173/maison-aurele.html` et buildée dans
`dist/maison-aurele.html`.

Direction artistique : mise en page éditoriale type magazine (grille 12
colonnes, décalages verticaux, filets fins), typographie serif Cormorant
Garamond, fond sombre chaud et accents dorés, whitespace généreux.

```
maison-aurele.html                     # entrée HTML (polices, meta)
src/maison-aurele/
├── main.tsx                            # point d'entrée React
├── MaisonAurele.tsx                    # assemble les sections
├── maison-aurele.css                   # grain, filet doré, animations
├── components/
│   ├── TopBar.tsx                      # navigation fixe + bouton Réserver
│   ├── Hero.tsx                        # visuel plein cadre, accroche, CTA
│   ├── Manifesto.tsx                   # récit « La maison » en grille magazine
│   ├── MenuPreview.tsx                 # aperçu de la carte + formules
│   ├── DishCard.tsx                    # plat signature
│   ├── SectionLabel.tsx                # intitulé de rubrique (« I — La maison »)
│   └── Footer.tsx                      # réservation, adresse, horaires
├── data/restaurant.ts                  # plats, menus, horaires, coordonnées
└── assets/*.svg                        # visuels placeholder (à remplacer par des photos)
```

Les visuels de `src/maison-aurele/assets/` sont des **placeholders SVG**
(ambiance de salle, passe de cuisine, table dressée, trois plats). Ils se
remplacent par de vraies photographies en changeant simplement les imports
dans `data/restaurant.ts`, `Hero.tsx` et `Manifesto.tsx`.

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

Le site est disponible à :
**https://nolanmahestbrieuc-cell.github.io/BoraSurfar/**
