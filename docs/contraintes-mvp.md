---
contraintes_mvp:
  projet: "AutoFix-Tech"
  persona:
    nom: "Modou Diop"
    age: 38
    role: "Cadre / Chauffeur VTC"
    ville: "Dakar"
    equipement: "Smartphone Android basique (3G/WhatsApp), Compte Wave/Orange Money"

  contraintes_non_negociables:
    - id: "C-01"
      titre: "Recherche ultra-rapide et affichage sobre"
      critere: >-
        Le MVP DOIT permettre à l'automobiliste d'effectuer une recherche de pièce en 3 clics maximum
        (Marque · Modèle/Année · Nom de la pièce ou photo carte grise) et afficher les résultats dans un format Web Mobile ultra-léger (< 2 Mo),
        lisible sur écran smartphone basique avec le format strict : PIÈCE · ÉTAT (Neuf/Occasion) · PRIX (FCFA) · BOUTIQUE & QUARTIER · DERNIÈRE MAJ (Heure/Date).
      origine: "Chapeau Blanc (simplicité d'usage et sobriété numérique)"
      elimine: >-
        Toute obligation de créer un compte avec mot de passe avant de chercher, toute application native lourde à télécharger sur le Play Store (ex : APK de +30 Mo),
        ou tout système nécessitant une connexion 4G/5G haut débit.

    - id: "C-02"
      titre: "Gratuité totale pour l'automobiliste"
      critere: >-
        Le MVP DOIT être 100 % gratuit pour l'automobiliste pour la recherche et la mise en relation
        (clic d'appel direct ou message WhatsApp pré-rempli vers le revendeur) — sans jamais exiger de paiement ou de carte bancaire pour afficher un prix ou un numéro de contact.
      origine: "Chapeau Noir (risque d'attrition et de méfiance sur le modèle payant)"
      elimine: >-
        Tout modèle de numéros surtaxés, tout paywall pour débloquer le nom du vendeur, tout abonnement payant imposé au client final dès la première utilisation.

    - id: "C-03"
      titre: "Traçabilité et fraîcheur des données"
      critere: >-
        Le MVP DOIT horodater chaque fiche prix/stock avec la date et l'heure de la dernière confirmation du revendeur (ex : "Stock vérifié il y a 2h")
        ET exiger au moins 1 photo réelle de la pièce pour les pièces d'occasion ("venant"), afin que Modou puisse vérifier la fraîcheur et la conformité de l'information.
      origine: "Chapeau Noir (risque d'annonces fantômes et de pièces vendues entre-temps)"
      elimine: >-
        Tout système d'affichage de catalogue statique sans gestion de stock actif, toute annonce datant de plus de 72h sans confirmation du vendeur,
        tout prix "indicatif" ou estimé par un algorithme sans validation du stock physique en magasin.

    - id: "C-04"
      titre: "Périmètre restreint au lancement"
      critere: >-
        Le MVP DOIT couvrir au lancement uniquement les 5 marques automobiles les plus représentées à Dakar (Toyota, Peugeot, Hyundai, Nissan, Mitsubishi)
        et se concentrer sur les 10 pièces d'usure/courantes les plus recherchées (amortisseurs, plaquettes de frein, filtres, phares, rétroviseurs, démarreurs, alternateurs, cardans, batteries, pompes à eau).
      origine: "Chapeau Blanc (focalisation sur le volume fort impact)"
      elimine: >-
        Toute ambition de couvrir l'intégralité du parc automobile mondial (ex : marques de luxe ou véhicules rares), tout système de catalogue universel complexe à maintenir — la priorité est de garantir 90 % de taux de réponse sur les pannes du quotidien.

    - id: "C-05"
      titre: "Vendeurs physiquement vérifiés"
      critere: >-
        Le MVP DOIT s'appuyer sur un réseau initial d'au moins 10 revendeurs locaux vérifiés physiquement (présence effective en magasin à Colobane, Castors, Thiaroye ou Grand Yoff)
        disposant d'un accès WhatsApp Business, et NE DOIT PAS afficher de pièce provenant d'un vendeur non identifié ou non modéré par l'équipe.
      origine: "Chapeau Noir (risque d'escroquerie et de fausses pièces)"
      elimine: >-
        Tout scraping automatique d'annonces sur des sites tiers sans vérification, tout formulaire d'inscription vendeur 100 % automatisé sans modération humaine préalable,
        tout système de vendeurs anonymes ou informels non géo-localisés.

    - id: "C-06"
      titre: "Exclusion des briques logistiques et e-commerce"
      critere: >-
        Le MVP NE DOIT PAS inclure de module de livraison intégrée, de paiement en ligne de la pièce, ou de système de garantie/SAV géré par la plateforme dans la V1 — ces briques constituent une complexité logistique et juridique qui retarderait le lancement sans valider l'hypothèse centrale (la valeur de la visibilité sur le prix et le stock).
      origine: "Chapeau Noir (risque d'échec logistique et de litiges sur pièces défectueuses)"
      elimine: >-
        Tout système de paiement e-commerce intégré, tout module de suivi de livreur type Yango/Uber, tout service d'expertise/contrôle technique des pièces par la plateforme — ces services appartiennent à la V2.

  fonctionnalites_eliminees:
    - "Application native Android/iOS (Play Store / App Store)"
    - "Paiement en ligne du montant total de la pièce"
    - "Module de livraison express par coursier"
    - "Système de cotation/enchères entre revendeurs"
    - "Recherche par schéma technique d'atelier (Vue éclatée constructeur)"
    - "Couverture géographique hors de la région de Dakar"

  critere_validation_final: >-
    Le MVP est valide si et seulement si : au moins 30 propriétaires de véhicules à Dakar déclarent, après 4 semaines de mise en service,
    avoir utilisé AutoFix-Tech pour trouver une pièce, s'être rendus chez le revendeur ou l'avoir contacté via la plateforme,
    et avoir réduit leur temps de recherche à moins de 30 minutes tout en obtenant la pièce au prix affiché (ou inférieur).
