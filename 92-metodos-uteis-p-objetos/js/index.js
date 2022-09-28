/*
 Object.values
 Object.entries
 Object.assign( des, any )
 Object.getOwnPropertyDescriptor(o, 'prop') 
 ...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freezer (congela o objeto)
Object.definePropertues (define várias propriedades)
Object.defineProperty (define uma propriedade)
 */

const produto = { nome: 'Produto', preco: 1.8 };
Object.freeze(produto); //Não deixa fazer alterações no objeto
const caneca = {
  ...produto,
  material: 'Porcelana',
};

caneca.nome = 'Outra Coisa';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);

console.log('#####################');

const produto2 = { nome: 'Produto', preco: 1.8 };
const caneca2 = Object.assign({}, produto, { material: 'porcelana' });

console.log(produto2);
console.log(caneca2);

console.log('#####################');

const caneca3 = { nome: produto2.nome, preco: produto2.preco };

console.log(caneca3);
console.log(Object.keys(caneca3)); //Retorna apenas as chaves do objeto em um array

console.log('#####################');
console.log(Object.getOwnPropertyDescriptor(caneca3, 'nome')); //Retorna as propriedades
console.log(Object.values(caneca3)); //Ao contrario das chaves retorna apenas os valores delas
console.log(Object.entries(caneca3)); //Retorna os dois, as chaves e os valores ambos separados por arrays cada par

for (let [chave, valor] of Object.entries(caneca3)) {
  console.log(chave, valor);
}
