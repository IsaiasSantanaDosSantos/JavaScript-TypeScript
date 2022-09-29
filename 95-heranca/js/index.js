// Abstração → Produto (nos dois) aumento/desconto
// Camiseta = cor, Caneca = material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (porcentual) {
  this.preco = this.preco + this.preco * (porcentual / 100);
};

const camiseta = new Camiseta('Regata', 7.48, 'Preta');
camiseta.aumento(100); //Almenta porcentual
console.log(camiseta);

const camiseta2 = new Produto('BabyLook', 12.5, ' Azul');
camiseta2.aumento(100); //Aumente valor
console.log(camiseta2);

function Caneca(nome, preco, materia, cor, estoque) {
  Produto.call(this, nome, preco);
  this.materia = materia;
  this.cor = cor;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function () {
      if (typeof valor !== 'number') return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function (porcentual) {
  this.preco = this.preco - this.preco * (porcentual / 100);
};

const caneca = new Caneca('Caneca', 22.7, 'Plástico', 'Branca', 5);
caneca.estoque = 100;
caneca.desconto(20);
console.log(caneca);
console.log(caneca.estoque);
