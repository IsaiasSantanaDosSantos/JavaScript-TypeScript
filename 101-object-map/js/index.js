const pessoas = [
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'Luiz' },
  { id: 1, nome: 'Helena' },
];

// const novasPessoa = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa
//     novasPessoa[id] = {...pessoa}
// }

const novasPessoa = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoa.set(id, { ...pessoa });
}
for (const pessoa of novasPessoa) {
  console.log(pessoa);
}
for (const pessoa of novasPessoa.keys()) {
  console.log(pessoa);
}
for (const pessoa of novasPessoa.values()) {
  console.log(pessoa);
}

novasPessoa.delete(2);
console.log(novasPessoa);

// for (const [indentifier, { id, nome }] of novasPessoa) {
//   console.log(indentifier, id, nome);
// }
// console.log(novasPessoa);
// console.log(novasPessoa.get(2));
