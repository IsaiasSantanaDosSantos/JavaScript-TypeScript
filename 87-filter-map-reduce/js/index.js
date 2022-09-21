// Retorne a soma do dobro de todos os pares
// → Filtrar pares
// → Dobrar os valores
// → Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//FORMA MAIS LONGA
// const numerosPares = numeros
//   .filter(function (valor) {
//     return valor % 2 === 0;
//   })
//   .map(function (valor) {
//     return valor * 2;
//   })
//   .reduce(function (ac, valor) {
//     return ac + valor;
//   });

//FORMA MAIS CURTA
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numerosPares);
