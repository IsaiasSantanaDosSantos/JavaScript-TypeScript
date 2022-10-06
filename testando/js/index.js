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
