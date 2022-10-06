//Classe Pessoa
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando.`);
  }
  //   comer() {
  //     console.log(`${this.nome} está comendo.`);
  //   }
  //   beber() {
  //     console.log(`${this.nome} está bebendo.`);
  //   }
}

//Função construtora "comparativo"
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Luiz', 'Carlos');
const p2 = new Pessoa2('Luiz', 'Otávio');
// const p2 = new Pessoa('José', 'Ramos');
// const p3 = new Pessoa('Natália', 'Dias');
// const p4 = new Pessoa('Pedro', 'Henrique');
console.log(p1);
console.log(p2);
// console.log(p3);
// console.log(p4);
// p1.beber();
// p1.comer()
p1.falar();
