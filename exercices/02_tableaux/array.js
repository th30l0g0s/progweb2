// TP 2 — Tableaux et programmation fonctionnelle
// Lancer : node array.js
// ⚠️ Les données ci-dessous sont des exemples : remplace-les par celles de l'énoncé.
//    Toutes les fonctions marchent avec n'importe quel contenu.

// =====================================================================
// Tableaux de nombres
// =====================================================================
const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);

// 1) Afficher chaque nombre
numbers.forEach((n) => console.log(n));

// 2) à 10) — aucune fonction ne modifie le tableau reçu (il est figé de toute façon)
const doubleAll = (nums) => nums.map((n) => n * 2);
const oddOnly = (nums) => nums.filter((n) => n % 2 !== 0); // !== 0 gère aussi les négatifs (-7 % 2 === -1)
const withoutFirst = (nums) => nums.slice(1);
const withoutLast = (nums) => nums.slice(0, -1);
const sum = (nums) => nums.reduce((acc, n) => acc + n, 0);
const max = (nums) => Math.max(...nums);
const hasMultipleOf9 = (nums) => nums.some((n) => n % 9 === 0);
const allPositive = (nums) => nums.every((n) => n > 0);
const evenThenOdd = (nums) => [
  ...nums.filter((n) => n % 2 === 0),
  ...nums.filter((n) => n % 2 !== 0),
];

console.log('2) doubleAll     ', doubleAll(numbers));
console.log('3) oddOnly       ', oddOnly(numbers));
console.log('4) withoutFirst  ', withoutFirst(numbers));
console.log('5) withoutLast   ', withoutLast(numbers));
console.log('6) sum           ', sum(numbers));
console.log('7) max           ', max(numbers));
console.log('8) hasMultipleOf9', hasMultipleOf9(numbers));
console.log('9) allPositive   ', allPositive(numbers));
console.log('10) evenThenOdd  ', evenThenOdd(numbers));

// =====================================================================
// Tableaux de chaînes
// =====================================================================
const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

const wordsWithR = (words) => words.filter((w) => w.toLowerCase().includes('r'));
const allFiveLetters = (words) => words.every((w) => w.length === 5);
const prependLorem = (words) => ['Lorem', ...words];
const appendIpsum = (words) => [...words, 'Ipsum'];
// Impair (5) → indice 2 ; pair (4) → indice 1 (juste avant le milieu)
const replaceMiddle = (words) => words.with(Math.floor((words.length - 1) / 2), 'radar');
const concatAll = (words) => words.join('');
const firstAlphabetical = (words) => words.toSorted((a, b) => a.localeCompare(b))[0];
const isPalindromeJoined = (words) => {
  const joined = words.join('').toLowerCase();
  return joined === [...joined].reverse().join('');
};

console.log('1) wordsWithR        ', wordsWithR(strings));
console.log('2) allFiveLetters    ', allFiveLetters(strings));
console.log('3) prependLorem      ', prependLorem(strings));
console.log('4) appendIpsum       ', appendIpsum(strings));
console.log('5) replaceMiddle     ', replaceMiddle(strings), replaceMiddle(['a', 'b', 'c', 'd']));
console.log('6) concatAll         ', concatAll(strings));
console.log('7) firstAlphabetical ', firstAlphabetical(strings));
console.log('8) isPalindromeJoined', isPalindromeJoined(strings));

// =====================================================================
// Tableaux d'objets : jeu de cartes
// =====================================================================
const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;
const RANKS = Object.freeze([2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE]);
const SUITS = Object.freeze(['hearts', 'spades', 'clubs', 'diamonds']);

// 1) Structure : une carte = { rank: 14, suit: 'spades' } ; le paquet = tableau de cartes
//    (Java : une classe Card avec 2 champs + List<Card> ; en JS un objet littéral suffit)

// 2) Paquet de 52 cartes
const buildBaseDeck = () => SUITS.flatMap((suit) => RANKS.map((rank) => ({ rank, suit })));

// 3) Fisher–Yates moderne (modifie le tableau reçu)
function shuffleInPlace(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]]; // échange par déstructuration
  }
  return cards;
}

// 4) Tirer n cartes sans toucher au paquet d'origine
const drawCards = (deck, n) => shuffleInPlace([...deck]).slice(0, n);

// 5) Comparaison par rang (même contrat que compareTo / Comparator en Java)
const compareRank = (a, b) => a.rank - b.rank;

// 7) Affichage
function displayRank(rank) {
  const faces = { [JACK]: 'J', [QUEEN]: 'Q', [KING]: 'K', [ACE]: 'A' };
  return faces[rank] ?? String(rank);
}
const SYMBOLS = { hearts: '♥', spades: '♠', clubs: '♣', diamonds: '♦' };
const RED_ON_WHITE = '\x1b[31;47m';
const BLACK_ON_WHITE = '\x1b[30;47m';
const RESET = '\x1b[0m';

function showCard(card) {
  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
  const color = isRed ? RED_ON_WHITE : BLACK_ON_WHITE;
  console.log(`${color} ${displayRank(card.rank)}${SYMBOLS[card.suit]} ${RESET}`);
}

const deck = Object.freeze(buildBaseDeck());
console.log('2) taille du paquet :', deck.length); // 52

const [c1, c2] = drawCards(deck, 2);
const cmp = compareRank(c1, c2);
console.log('5)', c1, c2, cmp === 0 ? 'égalité' : cmp > 0 ? 'la 1re est plus forte' : 'la 2e est plus forte');

// 6) Main de 5 cartes + carte la plus haute (la 1re rencontrée en cas d'égalité)
const getHighestCard = (hand) => hand.reduce((best, card) => (compareRank(card, best) > 0 ? card : best));

const hand = drawCards(deck, 5);
console.log('6) main :');
hand.forEach(showCard);
console.log('6) plus haute :');
showCard(getHighestCard(hand));
