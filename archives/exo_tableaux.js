// Tableaux de nombres

const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);


// ----------------------------------------------------------------------------------------------------

//  exo 1 - Afficher tous les nombres dans la console

console.log(numbers);


// ----------------------------------------------------------------------------------------------------

//  exo 2 - Retourner un tableau avec les valeurs doublées

console.log(numbers.map(n => n * 2));


// ----------------------------------------------------------------------------------------------------

//  exo 3 - Retourner un tableau ne contenant que les valeurs impaires

console.log(numbers.filter(n => n % 2 === 0));


// ----------------------------------------------------------------------------------------------------

//  exo 4 - Retourner un tableau ne contenant pas le premier élément

console.log(numbers.slice(1));


// ----------------------------------------------------------------------------------------------------

//  exo 5 - Retourner un tableau ne contenant pas le dernier élément

console.log(numbers.slice(0, 9));


// ----------------------------------------------------------------------------------------------------

//  exo 6 - Retourner la somme des nombres

console.log(numbers.reduce((acc, n) => acc + n, 0));

// ----------------------------------------------------------------------------------------------------

//  exo 7 - Retourner le plus grand nombre

console.log()

// ----------------------------------------------------------------------------------------------------

//  exo 8 - Indiquer si le tableau contient au moins un nombre multiple de 9



// ----------------------------------------------------------------------------------------------------

//  exo 9 - Indiquer si le tableau ne contient que des nombres positifs

// ----------------------------------------------------------------------------------------------------

//  exo 10 - Retourner un tableau contenant d'abord les nombres pairs, puis les nombres impairs, en conservant leur ordre relatif dans chaque groupe