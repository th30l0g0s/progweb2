//  1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.

function valMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(valMax(5, 10, 3)); // Affiche 10
console.log(valMax(7, 2, 9));  // Affiche 9
console.log(valMax(1, 1, 1));  // Affiche 1


// 2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).

function valEntier(a, b) {

}


// 3) Ecrire deux fonctions compareA et compareB qui retournent les mêmes résultats que dans les exemples suivant:
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


// compareA(4, '4'); // true 
// compareA(4.0, '4'); // true
// compareA(4, 'quatre'); // false

// compareB(8, '8'); // false
// compareB(8, 'huit'); // false