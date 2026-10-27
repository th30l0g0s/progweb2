// ---------------------------------------------------------------
//  exo 1 - Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.
console.log("--------------------------------------------------------------------------");
console.log(" EXO 1 - Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.");

function valMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function getMax(a, b, c) {
    let max = a;
    if (b > a) max = b;
    if (c > a) max = c;
    return max;
}

console.log(valMax(5, 10, 3)); // Affiche 10
console.log(valMax(7, 2, 9));  // Affiche 9
console.log(valMax(1, 1, 1));  // Affiche 1
console.log(getMax(5, 10, 3)); // Affiche 10
console.log(getMax(7, 2, 9));  // Affiche 9
console.log(getMax(1, 1, 1));  // Affiche 1

// ---------------------------------------------------------------
// exo 2 - Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).
console.log("--------------------------------------------------------------------------");
console.log(" EXO 2 -  Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure.");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i=0; i<10; i++) {
    console.log(getRandomInt(3, 7));
}


// ---------------------------------------------------------------
// exo 3 - Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant.
console.log("--------------------------------------------------------------------------");
console.log(" EXO 3 - Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant");

function compareA (a, b) {
    if (a != b) {
        return true;
    } else {
        return false;
    }
}
function compareB (a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

console.log(compareA(0, 1));
console.log(compareB(0, 1));

// ---------------------------------------------------------------
// exo 4 - En fonction d'un nombre n (ou n > 0) donné en paramètre, écrire une fonction qui affiche dans la console :
// - Les nombres entiers pairs compris entre 0 et n.
// - Les nombres entiers pairs et multiples de 7 compris entre 0 et n.
// - Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n.
// - Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.
console.log("--------------------------------------------------------------------------");
console.log(" EXO 4 - Fonction qui donne les multiple de 7, 3 et/ou 2 ");

function getPar(n) {
    
    if (n % 2 == 0 && n % 3 == 0 && n % 7 == 0) {
        console.log("Pair + multiple de 3 et 7, nombre : " + n);
        for (let i=0; i<=n; i += 2) {
            console.log(i);
        }
    } else if (n % 2 == 0 && n % 3 == 0 && n % 7 != 0) {
        console.log("Pair + multiple de 3, nombre : " + n);
        for (let i=0; i<=n; i += 2) {
            console.log(i);
        }
    } else if (n % 2 == 0 && n % 3 != 0 && n % 7 == 0) {
        console.log("Pair + multiple de 7, nombre : " + n);
        for (let i=0; i<=n; i += 2) {
            console.log(i);
        }
    } else if ( n % 2 == 0) {
        console.log("Pair, nombre : " + n);
        for (let i=0; i<=n; i += 2) {
            console.log(i);
        }
    } else {
        console.log("Impaire non multiple de 3 ou/et 7, nombre : " + n);
    }
}

getPar(42);
getPar(6);
getPar(14);
getPar(11);

// ---------------------------------------------------------------
// exo 5 - Ecrire deux fonctions retournant réciproquement:
// - le nombre de piles obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.
// - le nombre de piles et de faces obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.
console.log("--------------------------------------------------------------------------");
console.log(" EXO 5 - Fonction retournant le nombre de pile ou de face");

function numberOfHeads(count) {
  let heads = 0;

  for (let i = 0; i < count; i++) {
    if (Math.random() < 0.5) heads++;
  }

  return heads;
}

function numberOfHeadsAndTails(count) {
  const heads = numberOfHeads(count);
  return { heads, tails: count - heads };
}

console.log(numberOfHeads(1));
console.log(numberOfHeads(2));
console.log(numberOfHeads(3));
console.log(numberOfHeads(5));
console.log(numberOfHeads(7));
console.log(numberOfHeads(11));
console.log(numberOfHeadsAndTails(1));
console.log(numberOfHeadsAndTails(2));
console.log(numberOfHeadsAndTails(3));
console.log(numberOfHeadsAndTails(5));
console.log(numberOfHeadsAndTails(7));
console.log(numberOfHeadsAndTails(11));


// ---------------------------------------------------------------
// exo 6 - Ecrire une fonction qui indique si un nombre entier est un nombre premier ou non. Tester la fonction avec les valeurs suivantes: 0, 1, 2, 3, 4, 9, 11, 26, 87178291197, 87178291199.
console.log("--------------------------------------------------------------------------");
console.log(" EXO 6 - Fonction si un nombre est entier.");


function getPrime(n){
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    
    for (i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(getPrime(0));
console.log(getPrime(1));
console.log(getPrime(2));
console.log(getPrime(3));
console.log(getPrime(4));
console.log(getPrime(9));
console.log(getPrime(11));
console.log(getPrime(26));
console.log(getPrime(87178291197));
console.log(getPrime(87178291199));


// ---------------------------------------------------------------
// exo 7 - Ecrire une fonction nommée cl qui affiche dans la console, ligne après ligne, toutes les données fournies en paramètre.
console.log("--------------------------------------------------------------------------");
console.log("Exo 7");

function cl(...values) {
  values.forEach(value => console.log(value));
}

console.log(cl("Je m'appelle Laurent", 13, "juin", 1979));


// ---------------------------------------------------------------
// exo 8 - Écrire deux fonctions :
// - double, qui retourne le double du nombre reçu ;
// - square, qui retourne le carré du nombre reçu.
// Écrire ensuite une fonction transform qui reçoit un nombre et une fonction en paramètres. Elle doit appliquer la fonction reçue au nombre, puis retourner le résultat.
console.log("--------------------------------------------------------------------------");
console.log(" Exo 8");

function double(n) {
    return 2*n;
}

function square(n) {
    return n*n;
}

function transform(a, b) {
    return b(a);
}

console.log(transform(5, double));
console.log(transform(5, square));


// ---------------------------------------------------------------
// exo 9
console.log("--------------------------------------------------------------------------");
console.log(" Exo 9");


function repeatTransform(a, b, c) {
    
    let result = a;

    // 1. on stocke la valeur de départ
    const etapes = [result];

    for (let i = 0; i < c; i++) {
        result = b(result);
        // 2. on ajoute chaque étape au tableau
        etapes.push(result);
    }

    // 3. affichage unique
    console.log(`Returns ${result}: ${etapes.join(" → ")}`); 
    
    // 4. on renvoie aussi la valeur
    return result;                    
}

repeatTransform(2, double, 3);
repeatTransform(2, square, 2);

// ---------------------------------------------------------------
// exo 10
console.log("--------------------------------------------------------------------------");
console.log(" Exo 10");



function createGreeting(salut) {
    return function (name) {
        return `${salut}, ${name} !`;
    }
}

const sayHello = createGreeting('Hello');
const sayWelcome = createGreeting('Welcome');

console.log(sayHello('Ada'));
console.log(sayWelcome('Linus'));
