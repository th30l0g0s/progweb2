// Déclarations d'une fonction

// I) Déclaration claissique
function add(a, b) {
    return a + b;
}

console.log(add(1,2));


// II) Expression de fonction
const add2 = function (a, b) {
    return a + b;
}

console.log(add2(2,3));


// III) Fonction fléchée
const add3 = (a, b) => a + b;          // retour implicite
const add4 = (a, b) => { return a + b; };  // avec accolades, return obligatoire
const square = x => x * x;            // 1 paramètre : parenthèses facultatives
const hello = () => "salut";          // 0 paramètre : () obligatoires
const makeObj = () => ({ a: 1 });     // renvoyer un objet : parenthèses autour

console.log(add3(3,4));
console.log(add4(3,4));
console.log(square(3));
console.log(hello());
console.log(makeObj());


// IV) Méthode d’objet
const calc = {
    add(a,b) { return a + b}
};

console.log(calc.add(4,6)) ;


// V) Méthode de classe
class Calc {
  add(a, b) { return a + b; }
  static mul(a, b) { return a * b; }
}
new Calc().add(2, 3);
Calc.mul(2, 3);


// Appels de fonctions

// I) Appel direct

// II) Comme méthode

// III) Comme callback

// IV) Avec new (constructeur)

// V) 