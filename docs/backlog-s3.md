# HMW Définitif

**"Comment pourrions-nous aider les propriétaires de véhicules à comparer en temps réel la disponibilité et le prix des pièces détachées chez les revendeurs locaux, afin de réduire le temps d'immobilisation de leur voiture et d'éviter les surcoûts ?"**

---

## User Stories MUST *(À construire obligatoirement en S3)*

### US-01

* **Story :** En tant que propriétaire de véhicule, je veux rechercher une pièce détachée en saisissant la marque, le modèle, l'année ou le numéro VIN / photo de la carte grise, afin d'identifier sans erreur la référence exacte de la pièce compatible avec mon véhicule.
* **Priorité :** MUST
* **Outil :** Bolt.new (interface web mobile-first, recherche guidée ou upload image/carte grise)
* **Effort :** Moyen
* **Adresse :** *Pain Reliever* — Suppression des erreurs de compatibilité et des retours de pièces incompatibles.
* **Critère d'acceptation :** L'utilisateur sélectionne son véhicule en 3 clics ou via recherche texte/carte grise, et le système affiche la référence exacte constructeur (OEM) associée à la pièce demandée.

### US-02

* **Story :** En tant que revendeur local de pièces, je veux mettre à jour mon stock et mes prix (état : neuf/occasion, prix en FCFA/€, quantité dispo) depuis un formulaire mobile ultra-simple, afin que mes produits soient visibles immédiatement par les automobilistes en recherche.
* **Priorité :** MUST
* **Outil :** Bolt.new (interface marchand / formulaire web rapide basique)
* **Effort :** Faible
* **Adresse :** *Gain Creator* — Numérisation rapide des stocks sans nécessiter de logiciel ERP complexe chez le vendeur.
* **Critère d'acceptation :** Le vendeur peut publier ou modifier la disponibilité et le prix d'une pièce en moins de 1 minute chrono depuis son smartphone, avec horodatage de la dernière mise à jour.

### US-03

* **Story :** En tant que propriétaire de véhicule, je veux consulter la liste des revendeurs locaux ayant la pièce en stock, triée par prix et par distance, avec la mention de la dernière mise à jour du prix, afin de choisir l'offre la plus rentable et proche de chez moi.
* **Priorité :** MUST
* **Outil :** Bolt.new (moteur de comparaison + cartes / géolocalisation simple)
* **Effort :** Moyen
* **Adresse :** *Gain Creator* — Transparence totale des prix et gain de temps (fin de la tournée physique des casseurs/boutiques).
* **Critère d'acceptation :** L'écran de résultat affiche au moins 2 revendeurs avec : Nom de la boutique, quartier/distance, état de la pièce, prix affiché et bouton d'action ("Appeler" ou "Réserver").

### US-04

* **Story :** En tant que propriétaire de véhicule, je veux envoyer une demande de réservation ou contacter directement le revendeur via WhatsApp/SMS en 1 clic, afin de bloquer la pièce avant de me déplacer.
* **Priorité :** MUST
* **Outil :** Integration WhatsApp Business API / Webhook SMS / Lien pré-rempli `wa.me`
* **Effort :** Faible
* **Adresse :** *Pain Reliever* — Évite le déplacement inutile si la pièce est vendue entre-temps.
* **Critère d'acceptation :** Un clic sur "Contacter" ouvre un message pré-rempli ("*Bonjour, je souhaite réserver la pièce X pour véhicule Y vue sur la plateforme au prix de Z FCFA*") envoyé directement au revendeur.

### US-05

* **Story :** En tant qu'administrateur de la plateforme, je veux valider et modérer les fiches revendeurs et les annonces créées, afin de garantir que seuls des vendeurs réels et des prix cohérents soient affichés aux utilisateurs.
* **Priorité :** MUST
* **Outil :** Bolt.new (panneau d'administration CRUD revendeurs & pièces)
* **Effort :** Faible
* **Adresse :** *Pain Reliever* — Protection contre les faux revendeurs et les prix fantômes.
* **Critère d me d'acceptation :** Un revendeur non validé par l'admin ne peut pas voir ses pièces publiées publiquement. L'admin peut valider, suspendre ou supprimer une boutique en 1 clic.

---

## User Stories SHOULD *(À construire si le temps le permet en S3)*

### US-06

* **Story :** En tant que propriétaire de véhicule, je veux publier une "demande urgente" quand une pièce n'est pas en stock dans la base, afin que les revendeurs abonnés reçoivent une alerte et puissent me répondre s'ils l'ont en magasin.
* **Priorité :** SHOULD
* **Outil :** Dify (workflow de dispatch de la demande aux vendeurs) + SMS / WhatsApp API
* **Effort :** Moyen
* **Adresse :** *Pain Reliever* — Solution pour les pièces rares ou les véhicules anciens.
* **Critère d'acceptation :** Si une recherche ne donne 0 résultat, l'utilisateur remplit un formulaire de demande express qui envoie un SMS/WhatsApp automatique aux 5 revendeurs les plus proches gérant cette marque.

### US-07

* **Story :** En tant qu'administrateur, je veux consulter un tableau de bord affichant le nombre de recherches effectuées, le taux de mise en relation (clics WhatsApp/Appels) et le délai moyen de réponse des revendeurs, afin de piloter l'efficacité de la plateforme.
* **Priorité :** SHOULD
* **Outil :** Bolt.new (Dashboard KPI interne)
* **Effort :** Moyen
* **Adresse :** *Gain Creator* — Suivi de la métrique Nord (temps moyen gagné sur la recherche de pièce).
* **Critère d'acceptation :** Le dashboard affiche en temps réel les top 5 pièces les plus recherchées, le volume de mises en relation générées et le taux de fraîcheur des stocks (< 48h).

---

## User Stories COULD *(Roadmap post-MVP — S4 et au-delà)*

### US-08

* **Story :** En tant que propriétaire de véhicule, je veux payer un acompte de réservation via Wave ou Mobile Money, afin de garantir que la pièce me soit réservée jusqu'à mon arrivée ou celle de mon mécanicien.
* **Priorité :** COULD
* **Outil :** Wave API / PayDunya / Orange Money API + Bolt.new
* **Effort :** Élevé
* **Adresse :** *Gain Creator* — Securisation de la transaction pour l'acheteur et le vendeur.
* **Critère d'acceptation :** Le paiement déclenche un reçu QR Code unique envoyé par SMS à présenter au revendeur lors du retrait.

### US-09

* **Story :** En tant que mécanicien/garage partenaire, je veux enregistrer le profil de mes clients et commander directement les pièces pour leur compte avec une livraison express sur le lieu de panne, afin de réduire le temps d'immobilisation au garage.
* **Priorité :** COULD
* **Outil :** Bolt.new (Espace Mécanicien) + Module coursier/livraison (ex: Yango/TouchPoint)
* **Effort :** Élevé
* **Adresse :** *Gain Creator* — Externalisation de la logistique de livraison pièces.
* **Critère d'acceptation :** Un mécanicien peut commander une pièce et suivre l'arrivée du livreur au garage en temps réel sur une carte.

---

## Plan de Sprint (S3) & Démo S6

### Sprint S3

* **Semaine 1 — Côté Vendeur & Référentiel :**
* **US-01** (sélection véhicule / pièce) + **US-02** (saisie stock revendeur) + **US-05** (back-office admin).
* *Objectif :* Avoir 5 revendeurs de test enregistrés et 20 pièces référencées en base d'ici vendredi.


* **Semaine 2 — Côté Client & Mise en relation :**
* **US-03** (comparateur / liste triée) + **US-04** (bouton de mise en relation WhatsApp/SMS).
* *Objectif :* Réaliser un parcours complet de recherche -> comparaison -> réservation en condition réelle sur mobile.


* **Si avance constatée :** Démarrer **US-06** (demande express si pièce introuvable).

### Démo S6 — À démonstrer obligatoirement devant le jury

1. **US-02 (Live vendeur) :** Simulation d'un revendeur mettant à jour le prix d'un amortisseur ou filtre en direct depuis son téléphone.
2. **US-03 (Live recherche client) :** Recherche synchrone côté client montrant la pièce mise à jour immédiatement en haut des résultats.
3. **US-04 (Preuve de mise en relation) :** Clic sur "Réserver" et réception instantanée du message pré-rempli sur le téléphone physique du revendeur (posé sur la table).
