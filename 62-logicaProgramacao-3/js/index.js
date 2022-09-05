//Minha resolução, que não deu certo por sinal
// const recebeNumero = (num) => {
//   if (num === Number) {
//     console.log('É' + num);
//   }
//   if (num % 3 === 0) {
//     console.log('Fizz');
//   } else if (num % 5 === 0) {
//     console.log('Buzz');
//   } else if (num % 3 === 0 || num % 5 === 0) {
//     console.log(`FizzBuzz`);
//   } else if (num % 3 !== 0 || num % 5 !== 0) {
//     console.log(`${num}`);
//   }
// };

// console.log(recebeNumero(5));

//Resolução correta

function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}
console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
