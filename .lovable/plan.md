# AutoForge — Plan de construction

Application web 3 pages en React + TanStack Start + Tailwind v4 (stack du template), design bleu #1565C0 / blanc / orange #F59E0B, police Inter.

## Structure des routes
- `src/routes/__root.tsx` — mise à jour : header fixe (logo 🔧 AutoForge + nav Accueil/Catalogue/Contact), footer global (mentions légales + contact), chargement de la police Inter via `<link>` Google Fonts, metadata SEO racine.
- `src/routes/index.tsx` — page **Accueil** (remplace le placeholder).
- `src/routes/catalogue.tsx` — page **Catalogue**.
- `src/routes/contact.tsx` — page **Contact**.

Chaque route feuille définit son propre `head()` (title, description, og:title, og:description) spécifique.

## Design system (src/styles.css)
Ajout de tokens sémantiques (oklch équivalents) :
- `--brand` = #1565C0 (bleu principal)
- `--brand-foreground` = blanc
- `--accent-orange` = #F59E0B
- `--success` = vert (pastille Disponible)
- `--danger` = rouge (pastille Indisponible)
Mappage dans `@theme inline` pour utilitaires `bg-brand`, `text-brand`, `bg-accent-orange`, etc. Police par défaut : Inter via `--font-sans`.

## Page 1 — Accueil (`/`)
- Hero pleine largeur, fond blanc, accent bleu : titre « Trouvez la bonne pièce auto à Dakar, sans détour » + sous-titre sur la centralisation prix/dispo/localisation.
- Deux CTA : bouton plein bleu « Trouver une pièce » (→ `/catalogue`), bouton contour orange « Devenir revendeur partenaire » (→ `/contact`).
- Section chiffres (3 stats réalistes secteur pièces auto Dakar) :
  - « 120+ fournisseurs référencés à Dakar et sa banlieue »
  - « 3 500+ références de pièces suivies en temps réel »
  - « Jusqu'à 40% d'économies vs. intermédiaires du marché »
- Bloc « Comment ça marche » court (3 étapes) pour crédibiliser la home.

## Page 2 — Catalogue (`/catalogue`)
- Barre de filtres : Tous | Toyota | Renault | Hyundai (state local `useState`, filtre par marque détectée dans le nom).
- Grille responsive (1 col mobile, 2 col md, 3 col lg) de 6 cartes avec les données exactes :
  1. Plaquettes de frein Toyota Corolla — Marché Petersen, Dakar — 15 000 FCFA — Disponible
  2. Alternateur Renault Logan — Thiaroye-sur-Mer — 45 000 FCFA — Disponible
  3. Pare-choc avant Hyundai i10 — Colobane, Dakar — 60 000 FCFA — Indisponible
  4. Filtre à huile Peugeot 206 — Marché HLM, Dakar — 5 000 FCFA — Disponible
  5. Batterie Kia Picanto 12V — Diamniadio — 55 000 FCFA — Disponible
  6. Rétroviseur droit Toyota Hilux — Marché Petersen, Dakar — 20 000 FCFA — Disponible
- Chaque carte : nom (titre), zone/fournisseur (avec icône lieu), prix en gras bleu, pastille colorée statut (vert Disponible / rouge Indisponible).

## Page 3 — Contact (`/contact`)
- Formulaire (state contrôlé, validation HTML5) : Nom complet, E-mail, Téléphone, Message (textarea). Soumission → toast/message succès local (pas de backend demandé).
- Bouton envoi bleu #1565C0 pleine largeur mobile.
- Bloc adresse : « Route de Diamniadio, Zone Industrielle, Dakar » + rappel email/téléphone de contact.

## Responsive & navigation
- Header fixe (top-0, backdrop-blur, ombre légère), padding-top compensé sur le contenu.
- Mobile first, breakpoint principal `md:` (768px). Menu mobile : nav horizontale compacte (3 liens seulement, tient sans burger).
- Liens actifs stylisés via `activeProps` de `<Link>`.

## Détails techniques
- Utiliser `<Link to="/catalogue">` / `<Link to="/contact">` (jamais `<a href>`).
- Aucune couleur codée en dur dans les composants : utilitaires Tailwind basés sur les tokens ajoutés dans `styles.css`.
- Police Inter : `<link>` Google Fonts dans `head().links` du root (pas d'`@import` URL dans styles.css).
- Placeholder de `src/routes/index.tsx` totalement remplacé.
- Aucun backend / Lovable Cloud requis (site vitrine statique).

## Vérification finale
- Build passe, les 3 routes rendent, filtres du catalogue fonctionnent, formulaire contact affiche confirmation, header fixe visible sur les 3 pages.
