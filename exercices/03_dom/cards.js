// TP 3 — Manipulation du DOM
// Lancer : dans ce dossier, `php -S 127.0.0.1:8080` puis ouvrir http://127.0.0.1:8080/cards.html
// (ou l'extension VS Code « Live Server »)
// Le script est un module (type="module") : il s'exécute après le parsing du HTML, pas besoin de DOMContentLoaded.

// Fisher–Yates (repris du TP tableaux)
function shuffleInPlace(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

// Exercice 1 — retirer la sélection des cartes du paquet
function clearSelection() {
  document.querySelectorAll('.deck playing-card').forEach((card) => {
    card.classList.remove('selected');
  });
}

// Exercice 2 — un sélecteur CSS par bouton, limité au .deck
function selectAll(selector) {
  clearSelection();
  document.querySelectorAll(selector).forEach((card) => card.classList.add('selected'));
}

// A : une seule carte → querySelector
document.querySelector('#select-ace-spade').addEventListener('click', () => {
  clearSelection();
  document.querySelector('.deck #SPADE-ACE').classList.add('selected');
});

const buttons = {
  'select-hearts': '.deck playing-card.heart', // 13
  'select-red': '.deck playing-card:is(.heart, .diamond)', // 26
  'select-face-cards': '.deck playing-card[data-face-card]', // 12
  'select-red-face-cards': '.deck playing-card:is(.heart, .diamond)[data-face-card]', // 6
  'select-not-spades': '.deck playing-card:not(.spade)', // 39
};

for (const [id, selector] of Object.entries(buttons)) {
  document.getElementById(id).addEventListener('click', () => selectAll(selector));
}

// Exercice 4 — récupérer une seule fois les 52 cartes, en vrai tableau
const deck = [...document.querySelectorAll('.deck playing-card')];

// Exercice 5 — tirer une main
const hand = document.querySelector('#hand');

document.querySelector('#draw-hand').addEventListener('click', () => {
  const handCards = shuffleInPlace([...deck])
    .slice(0, 5)
    .map((card) => {
      const clone = card.cloneNode(true);
      clone.removeAttribute('id'); // un id doit rester unique dans la page
      clone.classList.remove('selected');
      return clone;
    });
  hand.replaceChildren(...handCards);
});

// Exercices 3 et 6 : tests manuels dans le navigateur.
// Vérif rapide dans la console après chaque clic :
//   document.querySelectorAll('.deck .selected').length
