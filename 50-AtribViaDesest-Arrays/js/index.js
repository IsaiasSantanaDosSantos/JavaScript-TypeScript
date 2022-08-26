//Desestruturação de Arrays

// indice →       0    1    2    3    4    5    6    7    8
//                ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓
//const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

//Pega um item da lista com variável
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

//Pega um/vários item da lista com desestruturação
// const [firstNumber, secundNumber, ...resto] = numeros;
//console.log(firstNumber, secundNamber);

//Pega o resto dos itens do array
// console.log(resto);

//Podemos pular items da lista tbm...
// const [firstNumber, , thirdNumber, , , sixNumber] = numeros;
// console.log(firstNumber, thirdNumber, sixNumber);

// let a = 'A'; //Valor B
// let b = 'B'; //Valor C
// let c = 'C'; //Valor A

// console.log(a, b, c);
// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//Exemple com array dentro de outro array
const numeros = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];

console.log(numeros[1][2]);
const [, [, , seis]] = numeros; //Forma mais complicada
console.log(seis);

const [lista1, lista2, lista3] = numeros;

console.log(lista2);
console.log(lista2[2]); // Forma menos complicada e mais fácil de entender
