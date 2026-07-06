# Les grandes victoires militaires de Byzance

Site web interactif et pédagogique retraçant les plus grands succès militaires
de l'Empire byzantin (Empire romain d'Orient), de la fondation de
Constantinople (330) à la chute de 1453.

## Démarrage sans rien installer (le plus simple)

Le fichier **`Byzance - victoires (double-clic).html`** contient le site
complet en un seul fichier : téléchargez-le et **double-cliquez** dessus,
il s'ouvre dans votre navigateur. (Connexion Internet nécessaire pour le
fond de carte.) Il est régénéré par `npm run build` (copie de
`dist/index.html`).

Sous Windows, avec Node.js installé, on peut aussi double-cliquer sur
**`LANCER.bat`** : il installe les dépendances au premier lancement puis
ouvre le site en mode développement.

## Démarrage

```bash
cd byzance-victoires
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite (par défaut http://localhost:5173).

Build de production :

```bash
npm run build
npm run preview
```

> Le fond de carte utilise les tuiles OpenStreetMap : une connexion Internet
> est nécessaire pour afficher la carte.

## Fonctionnalités

- **Carte animée** (Leaflet) ouvrant directement la page, avec 31 victoires
  byzantines géolocalisées (coordonnées approximatives).
- **Bouton Lecture / Pause** : les batailles apparaissent dans l'ordre
  chronologique ; boutons « Réinitialiser » et « Tout afficher ».
- **Frise chronologique 330–1453** synchronisée avec la carte ; chaque jalon
  est cliquable.
- **Marqueurs colorés par type de victoire** : défensive (bleu), offensive
  (rouge), navale (vert d'eau), siège victorieux (or), victoire stratégique
  majeure (pourpre) — filtrables via la légende.
- **Fiche détaillée** au clic : date, lieu, coordonnées, adversaires,
  commandants, résultat, importance stratégique, résumé, effectifs et
  **niveau de certitude des effectifs** (connu / estimé / discuté / non
  fiable).
- **Reconstitution animée de chaque bataille** : diagramme SVG schématique
  en 3-4 phases (dispositifs, mouvements, terrain), avec lecture
  automatique, navigation phase par phase et légende narrative — 31
  scénarios fondés sur le déroulement décrit par les sources.
- **Dix dossiers thématiques** (survie de l'empire, armée, tactiques,
  empereurs, généraux, victoires par adversaire, période tardive) avec liens
  croisés vers la carte.
- **Section « Défaites majeures en contexte »** (Yarmouk, Manzikert,
  Myriokephalon, 1204, 1453) — volontairement **hors** de la carte des
  victoires.
- **Bibliographie** et note de méthode en pied de page.

## Ligne éditoriale historique

- Aucun chiffre précis inventé : les effectifs incertains sont donnés en
  fourchette et marqués « discutés » ou « non fiables ».
- Distinction systématique entre victoire tactique et victoire stratégique.
- Les divergences entre sources (Procope, Skylitzès, Anne Comnène, Nicétas
  Choniatès…) et entre historiens modernes sont signalées dans les fiches.

## Structure du code

```
byzance-victoires/
├── index.html
├── src/
│   ├── main.tsx              # Point d'entrée
│   ├── App.tsx               # État global (lecture, filtres, sélection)
│   ├── styles.css            # Thème byzantin (pourpre, or, ivoire)
│   ├── types.ts              # Types, libellés et couleurs des victoires
│   ├── components/
│   │   ├── Header.tsx           # Titre et navigation
│   │   ├── AnimatedMap.tsx      # Carte Leaflet animée
│   │   ├── Timeline.tsx         # Frise 330–1453 + contrôles lecture/pause
│   │   ├── BattleCard.tsx       # Fiche détaillée d'une bataille
│   │   ├── BattleAnimation.tsx  # Lecteur de reconstitution animée (SVG)
│   │   ├── VictoryFilters.tsx   # Légende filtrante par type de victoire
│   │   ├── PeriodSection.tsx    # Dossiers thématiques
│   │   └── Sources.tsx          # Bibliographie et note de méthode
│   └── data/
│       ├── battles.ts           # Les 31 victoires (données séparées du code)
│       ├── anim-types.ts        # Types des reconstitutions animées
│       ├── animations-early.ts  # Scénarios animés 530-941
│       ├── animations-late.ts   # Scénarios animés 960-1259
│       ├── animations.ts        # Index des reconstitutions
│       ├── defeats.ts           # Défaites majeures, en contexte uniquement
│       ├── sections.ts          # Contenu des dossiers thématiques
│       └── bibliography.ts      # Bibliographie
└── vite.config.ts
```

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript (mode strict)
- [Leaflet](https://leafletjs.com/) pour la carte interactive
- CSS moderne responsive, sans framework
