// TP 1 — Initiation aux fonctions
// Lancer : node functions.js

// 1) Plus grand de trois nombres
// (Java : Math.max n'accepte que 2 arguments ; en JS, Math.max en accepte autant qu'on veut)
function max3(a, b, c) {
  return Math.max(a, b, c);
}
console.log('1)', max3(3, 9, 5)); // 9

// 2) Entier aléatoire entre min et max (inclus)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('2)', randomInt(1, 6));

// 3) Comparaisons
// == compare après conversion de type ; === compare valeur ET type (pas d'équivalent direct en Java)
function compareA(a, b) {
  return a == b;
}
function compareB(a, b) {
  return a === b;
}
console.log('3)', compareA(4, '4'), compareA(4.0, '4'), compareA(4, 'quatre')); // true true false
console.log('3)', compareB(8, '8'), compareB(8, 'huit')); // false false

// 4) Affichages selon n (n > 0)
function evens(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
function evensAndMultiplesOf7(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0 && i % 7 === 0) console.log(i);
  }
}
function evensMult3OrMult7(n) {
  for (let i = 0; i <= n; i++) {
    if ((i % 2 === 0 && i % 3 === 0) || i % 7 === 0) console.log(i);
  }
}
function evensMult3NotMult7(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 7 !== 0) console.log(i);
  }
}
console.log('4a)'); evens(10);
console.log('4b)'); evensAndMultiplesOf7(30);
console.log('4c)'); evensMult3OrMult7(30);
console.log('4d)'); evensMult3NotMult7(50);

// 5) Lancers de pièces
function flipCoin() {
  return Math.random() < 0.5 ? 'pile' : 'face';
}
function countHeads(n) {
  let heads = 0;
  for (let i = 0; i < n; i++) {
    if (flipCoin() === 'pile') heads++;
  }
  return heads;
}
// Renvoie un objet (en Java il faudrait une classe/record ou un tableau)
function countHeadsAndTails(n) {
  const heads = countHeads(n);
  return { heads, tails: n - heads };
}
console.log('5)', countHeads(100), countHeadsAndTails(100));

// 6) Nombres premiers
// Test jusqu'à la racine carrée, seulement les impairs → rapide même pour 87178291199
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let d = 3; d * d <= n; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}
for (const n of [0, 1, 2, 3, 4, 9, 11, 26, 87178291197, 87178291199]) {
  console.log('6)', n, isPrime(n));
}

// 7) cl : affiche chaque paramètre sur une ligne
// ...args = paramètre « rest » (équivalent Java : varargs String... args)
function cl(...args) {
  for (const arg of args) console.log(arg);
}
console.log('7)');
cl(1, 2, 'a', [3.1, 4, 159]);

// 8) double, square, transform
// Les fonctions sont des valeurs : on peut les passer en paramètre
// (Java : il faudrait une interface fonctionnelle, ex. Function<Integer, Integer>)
const double = (x) => x * 2;
const square = (x) => x * x;
const transform = (x, fn) => fn(x);
console.log('8)', transform(5, double), transform(5, square)); // 10 25

// 9) repeatTransform
function repeatTransform(x, fn, times) {
  let result = x;
  for (let i = 0; i < times; i++) {
    result = fn(result);
  }
  return result;
}
console.log('9)', repeatTransform(2, double, 3), repeatTransform(2, square, 2)); // 16 16

// 10) createGreeting : fonction qui renvoie une fonction (closure)
// La fonction interne « se souvient » de greeting même après la fin de createGreeting
function createGreeting(greeting) {
  return (name) => `${greeting} ${name} !`;
}
const sayHello = createGreeting('Hello');
const sayWelcome = createGreeting('Welcome');
console.log('10)', sayHello('Ada'), '|', sayWelcome('Linus'));
