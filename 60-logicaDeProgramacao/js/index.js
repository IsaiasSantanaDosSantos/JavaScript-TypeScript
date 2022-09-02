//escreva uma função que recebe 2 números e retorne o maio deles

/**
 *
 * Forma que o Isaias fazer
 *
 */
// let num1 = document.querySelector('.num1');
// let num2 = document.querySelector('.num2');
// let retorno = document.querySelector('.retorno');

// document.querySelector('.btnRetorno').addEventListener('click', () => {
//   console.log(Number(num1.value), Number(num2.value));
//   const n1 = Number(num1.value);
//   const n2 = Number(num2.value);
//   retorno.style.fontSize = '20px';
//   retorno.innerHTML = '';
//   if (n1 > n2) {
//     retorno.innerHTML = `The number "${n1}" is BIGGER than "${n2}".`;
//   } else if (n1 === n2) {
//     retorno.innerHTML = `The number "${n1}" is igual the number "${n2}".`;
//   } else {
//     retorno.innerHTML = `The number "${n1}" is smaller than "${n2}".`;
//   }
//   // console.log(n2, n1);
// });
/**
 *
 * Fim da forma que o Isaias fazer
 *
 */
/**
 *
 * Forma que o instrutor fazer
 *
 */

function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(max(12, 15));

//Melhorando...
console.log(' Primeira melhoria...');
//Tirar o else. Como Tem apenas duas opções ele não faz falta
function outra(x, y) {
  if (x > y) {
    return x;
  }
  return y;
}
console.log(outra(12, 15));

console.log(' Segunda melhoria...');
//Tirar o else. Como Tem apenas duas opções ele não faz falta
//Dininuir o tamanho do bloco...
function maisUma(x, y) {
  if (x > y) return x;
  return y;
}
console.log(maisUma(12, 15));

console.log(' Terceira melhoria...');
//Tirar o else. Como Tem apenas duas opções ele não faz falta
//Dininuir mais ainda o tamanho do bloco...
function outraNovamente(x, y) {
  return x > y ? x : y;
}
console.log(outraNovamente(12, 15));

console.log(' Quarta melhoria...');
//Tirar o else. Como Tem apenas duas opções ele não faz falta
//Dininuir mais ainda o tamanho do bloco...
const max2 = (x, y) => {
  return x > y ? x : y;
};
console.log(max2(12, 15));

console.log(' Quinta melhoria...');
//Tirar o else. Como Tem apenas duas opções ele não faz falta
//Dininuir mais ainda o tamanho do bloco...
const max3 = (x, y) => (x > y ? x : y);

console.log(max3(12, 15));
