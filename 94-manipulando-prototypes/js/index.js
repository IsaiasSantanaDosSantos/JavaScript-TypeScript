// // new Object → Object.prototype

// const objA = {
//   chaveA: 'A',
//   //_proto_: Object.prototype
// };
// // new Object → Object.prototype

// const objB = {
//   chaveB: 'B',
//   //_proto_: objA
// };
// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// console.log(objC.chaveB);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percenatual) {
  this.preco = this.preco - this.preco * (percenatual / 100);
};

Produto.prototype.aumento = function (percenatual) {
  this.preco = this.preco + this.preco * (percenatual / 100);
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
  nome: 'Caneca',
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});

p3.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);
