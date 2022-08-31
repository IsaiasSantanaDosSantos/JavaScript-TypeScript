// const frutas = ['batata', 'limão', 'abóbora', 'uva'];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let i in frutas) {  //Lê os índeces do objeto
//   console.log(i);
// }

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  idade: 38,
};
for (let key in pessoa) {
  console.log(key, pessoa[key]);
}
