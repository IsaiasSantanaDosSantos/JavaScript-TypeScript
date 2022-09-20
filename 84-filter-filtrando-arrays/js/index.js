//Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos (dependendo fo filtro que fizermos)

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// //Forma mais longa ↓
// function callbackFilter(valor, indice, array) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

//Forma mais curta ↓
const numerosFiltrados = numeros.filter((valor) => valor > 10);

//Teste usando todos os argumentos
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice, array);
//   return valor > 10;
// });
console.log(numerosFiltrados);

//**************************** */
//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retones as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Edurado', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComIdadeMaior = pessoas.filter((obj) => obj.idade >= 45);
console.log(pessoasComIdadeMaior);

const pessoasComNomeQueTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith('a')
);
console.log(pessoasComNomeQueTerminaComA);
