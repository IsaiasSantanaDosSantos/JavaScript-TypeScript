// for (let i = 0; i <= 5; i++) {
//   //Conta de um em um
//   console.log('Linha → ' + i);
// }

// for (let i = 0; i <= 50; i += 5) {
//   //Conta de cinco em cinco ou mais se querer
//   console.log('Linha → ' + i);
// }

// for (let i = -50; i <= 50; i += 5) {
//   //Conta de cinco em cinco ou mais se querer e começa de qualquer número que quiser
//   console.log('Linha → ' + i);
// }

// for (let i = 50; i >= 10; i -= 5) {
//     //Conta de cinco em cinco ou mais se querer e começa de qualquer número que quiser
//     console.log('Linha → ' + i);
//   }

//pegar números pares
// for (let i = 0; i <= 10; i++) {
//   //Verifica se número é par ou impar
//   const par = i % 2 === 0 ? 'par' : 'impar'; //Se for 'par' será chamado "par", caso contrario se chamará "impar"
//   console.log(i, par);
// }

const frutas = ['Maças', 'pera', 'uva', 'Otávio', 'José', 4, 6, 'Isaias'];

for (let i = 0; i < frutas.length; i++) {
  // console.log(frutas[i]);
  console.log(`Índice ${i} → `, frutas[i]);
}
