// Some todos os números (reduce)
// Retorne um array com os número pares (Filter)
// Retorne um array como dobrodos valores (Maps)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Some todos os números (reduce)
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   acumulador += valor;

//   return acumulador;
// }, 0);

// console.log(total);

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador += valor;

  return acumulador;
}, 0);

console.log(total);

//#########################

// // Retorne um array com os número pares (Filter) PARA ISSO DEVE-SE USAR FILTER
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(total);

//############################
// Retorne um array como dobro dos valores (Maps) PARA ISSO DEVE-SE USAR MAP
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador.push(valor*2);
//     return acumulador;
//   }, []);
//   console.log(total);

//#########################

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Edurado', idade: 255 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 200 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
