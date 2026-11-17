# ProgWeb2 — Exercices (chabloz.eu)

| Dossier | TP | Lancer |
|---|---|---|
| `01_fonctions` | Initiation aux fonctions | `node functions.js` |
| `02_tableaux` | Tableaux et programmation fonctionnelle | `node array.js` |
| `03_dom` | Manipulation du DOM (cartes) | serveur HTTP → `cards.html` |
| `04_tier_list` | DOM et délégation d'évènements | serveur HTTP → `tier_list.html` |

## Lancer les TP DOM (03, 04)

Les scripts sont des modules (`type="module"`) : **pas de `file://`**, il faut un serveur HTTP.

1. Dans VS Code : clic droit sur le dossier → *Open in Integrated Terminal*
2. `php -S 127.0.0.1:8080` (ou `npx serve` / extension **Live Server**)
3. Ouvrir `http://127.0.0.1:8080/cards.html` ou `http://127.0.0.1:8080/tier_list.html`

## À savoir

- `02_tableaux/array.js` : les tableaux `numbers` et `strings` sont des exemples → remplace-les par ceux de l'énoncé.
- Les fichiers HTML/CSS et `dom.js` sont ceux du prof (dépôt `Chabloz/IM54_ProgWebCor`). Seuls les `.js` d'exercice sont écrits ici.
- Vérifié : nombres de cartes sélectionnées A→F = 1, 13, 26, 12, 6, 39 ; tier list testée (ajout, ▲▼ aux limites S/D, ordre +/−, suppression confirmée/annulée).
