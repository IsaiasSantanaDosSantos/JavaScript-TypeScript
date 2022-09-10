// arguments que sustenta todos os argumentos enviados "apenas em funções com a palavra function"
// function funcao(a, b = 2, c = 4) {
//   //   let total = 0;
//   //   for (arg of arguments) {
//   //     total += arg;
//   //   }
//   //   b = b || 0; //valor padrão caso não houver valor "Forma antiga"
//   console.log(a + b + c);
// }

// funcao();

/*

function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

//Assim ↓
funcao({ nome: 'Luis', sobrenome: 'Otario', idade: 38 });

//Ou assim ↓
let obj = { nome: 'Luis', sobrenome: 'Otario', idade: 38 };
funcao(obj);

*/
/*
//Com Arrays
function funcao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

//Assim ↓
funcao(['Isaias', 'Carlos', 'Pedro']);
*/

//Com rest operation
const conta = function (operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === '+') acumulador += num;
    if (operador === '-') acumulador -= num;
    if (operador === '/') acumulador /= num;
    if (operador === '*') acumulador *= num;
  }
  console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
