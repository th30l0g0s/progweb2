# ProgWeb2

Ceci est le git de mon cours de programmation web en filière ingénierie des médias de la HEIG-VD enseigné par Nicolas Chabloz.

Énoncés : <https://chabloz.eu/progweb/exercices.html>

## Structure

```
sandbox/
├── archives/          anciens essais (exo_fonctions, exo_tableaux, tierList…)
└── exercices/
    ├── 01_fonctions/  functions.js
    ├── 02_tableaux/   array.js
    ├── 03_dom/        cards.html · cards.css · cards.js
    └── 04_tier_list/  tier_list.html · tier_list.css · dom.js · tier_list.js
```

## Lancer les exercices

### TP 1 et 2 (Node, dans le terminal)

Depuis `sandbox` :

```bash
node exercices/01_fonctions/functions.js
node exercices/02_tableaux/array.js
```

### TP 3 et 4 (navigateur)

Les scripts sont des modules (`type="module"`) : ils ne se chargent pas en `file://`, il faut un serveur HTTP.

```bash
cd exercices/03_dom          # ou exercices/04_tier_list
php -S 127.0.0.1:8080
```

Puis ouvrir `http://127.0.0.1:8080/cards.html` (ou `tier_list.html`). Alternative : extension VS Code **Live Server**.

---

## TP 1 — Initiation aux fonctions

Fichier : `exercices/01_fonctions/functions.js`

| # | Fonction | Ce qu'elle fait | Notion clé |
|---|---|---|---|
| 1 | `max3(a, b, c)` | Plus grand de 3 nombres | `Math.max` accepte n arguments (en Java : 2 seulement) |
| 2 | `randomInt(min, max)` | Entier aléatoire, bornes incluses | `Math.floor(Math.random() * (max - min + 1)) + min` |
| 3 | `compareA` / `compareB` | `4 == '4'` → `true` ; `8 === '8'` → `false` | `==` convertit les types, `===` non (pas d'équivalent Java) |
| 4 | `evens`, `evensAndMultiplesOf7`, `evensMult3OrMult7`, `evensMult3NotMult7` | Affiche les entiers de 0 à n selon des conditions | Modulo `%`, `&&`, `\|\|`, parenthèses |
| 5 | `flipCoin`, `countHeads(n)`, `countHeadsAndTails(n)` | Simule n lancers, compte piles (et faces) | Renvoyer plusieurs valeurs avec un objet `{ heads, tails }` |
| 6 | `isPrime(n)` | Teste si n est premier | Diviseurs impairs jusqu'à √n → rapide même pour 87178291199 |
| 7 | `cl(...args)` | Affiche chaque paramètre sur une ligne | Paramètre *rest* `...args` (≈ varargs Java) |
| 8 | `double`, `square`, `transform(x, fn)` | Applique une fonction reçue en paramètre | Fonctions = valeurs (Java : interface `Function<T,R>`) |
| 9 | `repeatTransform(x, fn, times)` | Réapplique `fn` plusieurs fois | Boucle + accumulateur |
| 10 | `createGreeting(greeting)` | Renvoie une fonction `name => "Hello Ada !"` | **Closure** : la fonction interne garde `greeting` |

## TP 2 — Tableaux et programmation fonctionnelle

Fichier : `exercices/02_tableaux/array.js`

> ⚠️ Les tableaux `numbers` et `strings` sont des **exemples** : à remplacer par ceux de l'énoncé. Les fonctions marchent avec n'importe quel contenu et **ne modifient jamais** le tableau reçu (`Object.freeze`).

### Nombres

| # | Fonction | Méthode utilisée |
|---|---|---|
| 1 | affichage | `forEach` |
| 2 | `doubleAll` | `map` |
| 3 | `oddOnly` | `filter` (`n % 2 !== 0`, gère les négatifs) |
| 4 | `withoutFirst` | `slice(1)` |
| 5 | `withoutLast` | `slice(0, -1)` |
| 6 | `sum` | `reduce` |
| 7 | `max` | `Math.max(...nums)` (spread) |
| 8 | `hasMultipleOf9` | `some` |
| 9 | `allPositive` | `every` |
| 10 | `evenThenOdd` | 2 × `filter` + spread, ordre conservé |

### Chaînes

| # | Fonction | Méthode utilisée |
|---|---|---|
| 1 | `wordsWithR` | `filter` + `includes('r')` |
| 2 | `allFiveLetters` | `every` + `length` |
| 3 | `prependLorem` | `['Lorem', ...words]` |
| 4 | `appendIpsum` | `[...words, 'Ipsum']` |
| 5 | `replaceMiddle` | `with(index, 'radar')`, index = `floor((length - 1) / 2)` (pair → juste avant le milieu) |
| 6 | `concatAll` | `join('')` |
| 7 | `firstAlphabetical` | `toSorted` + `localeCompare` (sans modifier l'original) |
| 8 | `isPalindromeJoined` | `join` + `toLowerCase` + comparaison avec l'inverse |

### Jeu de cartes (tableaux d'objets)

- **Structure** : une carte = `{ rank: 14, suit: 'spades' }`, le paquet = tableau de cartes (en Java : classe `Card` + `List<Card>`).
- `buildBaseDeck()` : 52 cartes avec `flatMap` + `map` sur `SUITS` × `RANKS`.
- `shuffleInPlace(cards)` : **Fisher–Yates** moderne, échange par déstructuration `[a[i], a[j]] = [a[j], a[i]]`.
- `drawCards(deck, n)` : copie (`[...deck]`), mélange, prend `n` cartes → paquet d'origine intact.
- `compareRank(a, b)` : `a.rank - b.rank` (même contrat que `compareTo` en Java).
- `getHighestCard(hand)` : `reduce`, garde la première en cas d'égalité.
- `displayRank(rank)` : 11–14 → `J Q K A`, sinon le nombre en texte.
- `showCard(card)` : affiche `A♠` en couleurs ANSI (`\x1b[31;47m` rouge sur blanc, `\x1b[30;47m` noir sur blanc, `\x1b[0m` reset).

## TP 3 — Manipulation du DOM (cartes)

Fichiers : `exercices/03_dom/` — HTML/CSS fournis par le prof, `cards.js` écrit.

| Ex. | Ce qui est fait |
|---|---|
| 1 | `clearSelection()` : `querySelectorAll('.deck playing-card')` + `classList.remove('selected')` |
| 2 | 6 boutons, **un seul sélecteur CSS** chacun, limité à `.deck` (voir tableau ci-dessous) |
| 3 | Chaque clic remplace la sélection (appel de `clearSelection` d'abord) |
| 4 | `deck = [...document.querySelectorAll(...)]` : NodeList → vrai tableau, une seule fois au démarrage |
| 5 | **Draw a hand** : copie + mélange de `deck`, 5 premières cartes, `cloneNode(true)`, `removeAttribute('id')`, retrait de `selected`, puis `#hand.replaceChildren(...handCards)` |
| 6 | Après un tirage, les boutons A–F ne touchent jamais la main |

| Bouton | Sélecteur | Cartes |
|---|---|---|
| A | `.deck #SPADE-ACE` (via `querySelector`) | 1 |
| B | `.deck playing-card.heart` | 13 |
| C | `.deck playing-card:is(.heart, .diamond)` | 26 |
| D | `.deck playing-card[data-face-card]` | 12 |
| E | `.deck playing-card:is(.heart, .diamond)[data-face-card]` | 6 |
| F | `.deck playing-card:not(.spade)` | 39 |

✅ Vérifié : comptes ci-dessus exacts, la main contient 5 cartes sans `id`.

## TP 4 — DOM et délégation d'évènements (tier list)

Fichiers : `exercices/04_tier_list/` — HTML/CSS/`dom.js` fournis par le prof, `tier_list.js` écrit.

- **Démarrage** : `tmplItem` cloné une seule fois depuis `#item-template`, `TIERS = ['S', 'A', 'B', 'C', 'D']`.
- **1) Ajout** : écoute `submit` sur `#add-item-form` (couvre le bouton **Add** et la touche **Entrée**), `preventDefault()`, clone du modèle, nom via `textContent` (pas d'injection HTML), ajout à la fin de `#tier-s`.
- **2) Suppression** : **un seul** écouteur délégué (`delegateOn`) sur `#tiers` pour tous les `button[data-action]`. Un clic sur le `<span>` compte comme un clic sur le bouton grâce à `closest()`. `confirm()` avant `remove()`.
- **3) Changement de tier** : `up` / `down` lisent `dataset.tier`, calculent la cible dans `TIERS`, `append` dans `.items` de la cible. Rien en S (▲) ni en D (▼).
- **4) Ordre** : `previous` / `next` avec `previousElementSibling` / `nextElementSibling` + `swapNodes`. Rien s'il n'y a pas de voisin.

**Pourquoi la délégation ?** Les cartes sont créées dynamiquement : un écouteur posé sur le parent `#tiers` fonctionne aussi pour les cartes ajoutées plus tard, sans en rattacher un à chaque carte.

✅ Vérifié : ajout, ▲▼ aux limites S/D, Order +/− en première et dernière position, suppression confirmée et annulée, clic sur les symboles.
