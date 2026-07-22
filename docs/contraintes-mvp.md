---

## Contraintes MVP — AutoFix-Tech

### Persona

**Modou Diop** · 38 ans · Cadre / Chauffeur VTC · Dakar · Smartphone Android basique (3G/WhatsApp) · Compte Wave/Orange Money

---

### Contraintes Non Négociables

#### Contrainte 1

**Critère :** Le MVP DOIT permettre à l'automobiliste d'effectuer une recherche de pièce en **3 clics maximum** (Marque · Modèle/Année · Nom de la pièce ou photo carte grise) et afficher les résultats dans un format Web Mobile ultra-léger (< 2 Mo), lisible sur écran smartphone basique avec le format strict : **PIÈCE · ÉTAT (Neuf/Occasion) · PRIX (FCFA) · BOUTIQUE & QUARTIER · DERNIÈRE MAJ (Heure/Date)**.
**Origine :** Chapeau Blanc (simplicité d'usage et sobriété numérique)
**Élimine :** Toute obligation de créer un compte avec mot de passe avant de chercher, toute application native lourde à télécharger sur le Play Store (ex : APK de +30 Mo), ou tout système nécessitant une connexion 4G/5G haut débit.

---

#### Contrainte 2

**Critère :** Le MVP DOIT être **100 % gratuit pour l'automobiliste** pour la recherche et la mise en relation (clic d'appel direct ou message WhatsApp pré-rempli vers le revendeur) — sans jamais exiger de paiement ou de carte bancaire pour afficher un prix ou un numéro de contact.
**Origine :** Chapeau Noir (risque d'attrition et de méfiance sur le modèle payant)
**Élimine :** Tout modèle de numéros surtaxés, tout paywall pour débloquer le nom du vendeur, tout abonnement payant imposé au client final dès la première utilisation.

---

#### Contrainte 3

**Critère :** Le MVP DOIT **horodater chaque fiche prix/stock** avec la date et l'heure de la dernière confirmation du revendeur (ex : *"Stock vérifié il y a 2h"*) ET **exiger au moins 1 photo réelle de la pièce** pour les pièces d'occasion ("venant"), afin que Modou puisse vérifier la fraîcheur et la conformité de l'information.
**Origine :** Chapeau Noir (risque d'annonces fantômes et de pièces vendues entre-temps)
**Élimine :** Tout système d'affichage de catalogue statique sans gestion de stock actif, toute annonce datant de plus de 72h sans confirmation du vendeur, tout prix "indicatif" ou estimé par un algorithme sans validation du stock physique en magasin.

---

#### Contrainte 4

**Critère :** Le MVP DOIT couvrir au lancement uniquement les **5 marques automobiles les plus représentées à Dakar** (ex : Toyota, Peugeot, Hyundai, Nissan, Mitsubishi) et se concentrer sur les **10 pièces d'usure/courantes les plus recherchées** (ex : amortisseurs, plaquettes de frein, filtres, phares, rétroviseurs, démarreurs, alternateurs, cardans, batteries, pompes à eau).
**Origine :** Chapeau Blanc (focalisation sur le volume fort impact)
**Élimine :** Toute ambition de couvrir l'intégralité du parc automobile mondial (ex : marques de luxe ou véhicules rares), tout système de catalogue universel complexe à maintenir — la priorité est de garantir 90 % de taux de réponse sur les pannes du quotidien.

---

#### Contrainte 5

**Critère :** Le MVP DOIT s'appuyer sur un réseau initial d'au moins **10 revendeurs locaux vérifiés physiquement** (présence effective en magasin à Colobane, Castors, Thiaroye ou Grand Yoff) disposant d'un accès WhatsApp Business, et NE DOIT PAS afficher de pièce provenant d'un vendeur non identifié ou non modéré par l'équipe.
**Origine :** Chapeau Noir (risque d'escroquerie et de fausses pièces)
**Élimine :** Tout scraping automatique d'annonces sur des sites tiers sans vérification, tout formulaire d'inscription vendeur 100 % automatisé sans modération humaine préalable, tout système de vendeurs anonymes ou informels non géo-localisés.

---

#### Contrainte 6

**Critère :** Le MVP NE DOIT PAS inclure de module de livraison intégrée, de paiement en ligne de la pièce, ou de système de garantie/SAV géré par la plateforme dans la V1 — ces briques constituent une complexité logistique et juridique qui retarderait le lancement sans valider l'hypothèse centrale (la valeur de la visibilité sur le prix et le stock).
**Origine :** Chapeau Noir (risque d'échec logistique et de litiges sur pièces défectueuses)
**Élimine :** Tout système de paiement e-commerce intégré, tout module de suivi de livreur type Yango/Uber, tout service d'expertise/contrôle technique des pièces par la plateforme — ces services appartiennent à la V2.

---

### Fonctionnalités Éliminées

* **Application native Android/iOS (Play Store / App Store)** → éliminée parce que le téléchargement d'une application est un frein majeur pour une recherche ponctuelle de panne ; une Web App progressive (PWA) mobile-first via navigateur ou un bot WhatsApp suffit amplement.
* **Paiement en ligne du montant total de la pièce** → éliminé en V1 parce que les transactions de pièces d'occasion nécessitent souvent une inspection visuelle par le mécanicien avant achat final ; imposer le paiement en ligne crée un frein à la conversion.
* **Module de livraison express par coursier** → éliminé en V1 pour éviter la gestion des retours de pièces incompatibles et les coûts logistiques non maîtrisés ; la mise en relation directe (retrait en boutique ou accord direct client-vendeur) est privilégiée.
* **Système de cotation/enchères entre revendeurs** → éliminé parce qu'il alourdirait le parcours vendeur et retarderait la réponse immédiate attendue par l'automobiliste bloqué au garage.
* **Recherche par schéma technique d'atelier (Vue éclatée constructeur)** → éliminée parce que trop complexe pour un utilisateur non mécanicien comme Modou Diop ; la recherche par nom courant + photo de la carte grise/pièce est conservée.
* **Couverture géographique hors de la région de Dakar** → éliminée pour concentrer l'effort de collecte et la densité d'offres sur une seule zone géographique maîtrisée avant toute expansion régionale.

---

### Critère de Validation Final

Le MVP est valide si et seulement si : **au moins 30 propriétaires de véhicules à Dakar** déclarent, après 4 semaines de mise en service, avoir utilisé AutoFix-Tech pour trouver une pièce, s'être rendus chez le revendeur ou l'avoir contacté via la plateforme, et avoir **réduit leur temps de recherche à moins de 30 minutes** tout en obtenant la pièce au prix affiché (ou inférieur).
