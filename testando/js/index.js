//Classes

class Automovel {
  constructor(ano, modelo, cor, portas) {
    this.ano = ano;
    this.modelo = modelo;
    this.cor = cor;
    this.portas = portas;
  }
  ferrari() {
    console.log(
      `O automóvell ${this.ano}, ${this.modelo}, ${this.cor} e ${this.portas} portas foi fabricado pela Ferrari`
    );
  }
  bugatti() {
    console.log(
      `O automóvell ${this.ano}, ${this.modelo}, ${this.cor} e ${this.portas} portas foi fabricado pela Bugatti`
    );
  }
  volks() {
    console.log(
      `O automóvell ${this.ano}, ${this.modelo}, ${this.cor} e ${this.portas} portas foi fabricado pela Volks`
    );
  }
}

const car1 = new Automovel(2018, 'Veloster', 'vermelho', 2, 5);
const car2 = new Automovel(2020, 'Super', 'azul', 3);
const car3 = new Automovel(2022, 'New Civic', 'prata', 4);

console.log(car1, car2, car3);
car1.ferrari();
car2.bugatti();
car3.volks();
console.log('Classe Automovel ↑');
console.log('Função construtora ↓');
function Sorvete(sabor, formato, peso, preco) {
  this.sabor = sabor;
  this.formato = formato;
  this.peso = peso;
  this.preco = preco;
}

Sorvete.prototype.picole = function () {
  console.log(
    `O picolé de ${this.sabor}, ${this.formato} e pesando ${this.peso} curta R$${this.preco} reais`
  );
};

const p1 = new Sorvete('Morango', 'achatado', '200gr', 5.89);
console.log(p1);
p1.picole();
