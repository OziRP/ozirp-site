# Refonte du site OziRP — Édition 2026

## Ce ZIP contient

- `index.html` : accueil moderne, navigation et présentation des fonctionnalités RP.
- `commandes.html` : catalogue des commandes.
- `lunel-rp.html` : page du serveur Lunel RP avec accès Discord et code ER:LC.
- `styles.css` : nouveau design responsive, style également compatible avec les pages légales actuelles.
- `script.js` : menu mobile, recherche et filtres du catalogue, copie des commandes et du code LUNEL.

Le catalogue comprend **84 commandes documentées**, établies depuis les définitions du bot disponibles le 26 octobre 2026. L'affichage réel dépend des droits et réglages du serveur. Certaines commandes staff ne sont pas visibles par tous les membres.

## Installation sur GitHub Pages

Dépôt : https://github.com/OziRP/ozirp-site
Site public actuel : https://ozirp.github.io/ozirp-site/

1. Télécharger ce ZIP puis l'extraire sur le PC.
2. Ouvrir le dépôt GitHub `OziRP/ozirp-site` sur la branche `main`.
3. Facultatif mais recommandé : sauvegarder d'abord les 5 fichiers d'origine.
4. Dans la racine du dépôt, utiliser **Add file → Upload files**.
5. Déposer les 5 fichiers `.html`, `.css` et `.js` de ce dossier ; remplacer les versions portant les mêmes noms.
6. Valider avec **Commit changes**.
7. Vérifier le site public après publication de GitHub Pages.

**Ne pas remplacer ni supprimer** :
- `cgu.html`
- `politique-confidentialite.html`
- le dossier `assets/` et ses logos OziRP.

Ces fichiers sont utilisés par le site mais intentionnellement absents du ZIP : ils doivent rester dans le dépôt. Les pages légales conservent ainsi leur contenu actuel.

## Vérification

- Accueil, commandes, Lunel RP : vérifier l'affichage sur ordinateur et mobile.
- `commandes.html` : rechercher `facture`, `tombola` puis filtrer par catégorie.
- `lunel-rp.html` : cliquer sur **Copier** pour obtenir le code `LUNEL`.
- Pages légales : vérifier que les liens CGU et confidentialité restent disponibles.

## Liens conservés

- Discord Lunel RP : https://discord.gg/ZyDnUXGUGc
- Contact : ozi.rp26@gmail.com
- ER:LC : LUNEL

Cette refonte est **statique** : elle n'accède pas à la base de données Oracle OziRP et n'affiche pas de statistiques temps réel. Elle ne change aucun fichier du bot Discord.
