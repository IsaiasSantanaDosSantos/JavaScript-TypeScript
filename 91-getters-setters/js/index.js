// defineProperty → Getters e Setters
//Getters e Setter → "maneira de proteger"
//Getter → obtem o valor
//Setter → setar/configurar

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //Mostra a chave
    configurable: true, // configurável
    get: function () {
      //Mostra o valor
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem');
        return;
      }
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa!', '');
      nome = valor;
    },
  };
}
// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = 244;
// console.log(p1.estoque);
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa!';
console.log(p2.nome);
