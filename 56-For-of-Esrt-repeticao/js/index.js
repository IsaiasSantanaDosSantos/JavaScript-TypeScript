//Especifico para objetos iteráveis

const nomes = ['Luiz Otávio', 'Isaias', 'Gabriel'];
console.log('##### for clássico ↓');

for (let i = 0; i < nomes.length; i++) {
  //Geralmente com iteráveis (arrays ou strings)
  console.log(nomes[i]);
}

console.log('##### for in ↓');

for (let i in nomes) {
  //Retona o índece ou chave
  console.log(nomes[i]);
}
console.log('##### for of ↓');

for (let valor of nomes) {
  //Retorna os valores em si (iteráveis, arrays ou strings)
  console.log(valor);
}

console.log('##### forEach ↓');

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
