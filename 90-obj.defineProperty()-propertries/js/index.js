// defineProperty - defineProperties

// defineProperty ↓
console.log('\n#### ↓ defineProperty ↓ ###\n');
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //Mostra a chave
    value: estoque, // valor
    writable: true, // permite alterar valor
    configurable: true, //configurável
  });
}
const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500;
// delete p1.estoque;
// console.log(p1);
console.log(Object.keys(p1)); //Mostra as chaves do objeto

for (let chave in p1) {
  //Mostra as chaves do objeto tbm
  console.log(chave);
}

//defineProperties ↓
console.log('\n#### ↓ defineProperties ↓ ###\n');
function Produto2(nome2, preco2, estoque2) {
  Object.defineProperty(this, 'estoque2', {
    enumerable: true, //Mostra a chave
    value: estoque2, // valor
    writable: true, // permite alterar valor
    configurable: true, //configurável
  });
  Object.defineProperties(this, {
    nome2: {
      enumerable: true, //Mostra a chave
      value: nome2, // valor
      writable: true, // permite alterar valor
      configurable: true, //configurável
    },
    preco2: {
      enumerable: true, //Mostra a chave
      value: preco2, // valor
      writable: true, // permite alterar valor
      configurable: true, //configurável
    },
  });
}
const p2 = new Produto2('Bonê', 18, 24);
console.log(Object.keys(p2));
console.log(p2);

for (let chave in p2) {
  console.log(chave);
}
