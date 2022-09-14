function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift(); //Retirar o 1ª nome do array
      this.sobrenome = valor.join(' '); //Pegar os valores restantes
      console.log(valor);
    },
    fala: function (assunto = 'besteira') {
      return `${nome} ${sobrenome} fala sobre ${assunto} repetitivamente.`;
    },
    altura: altura,
    peso: peso,
    //Getter
    get imc() {
      const indece = this.peso / this.altura ** 2;
      return indece.toFixed(2); // Retornoar duas casas decimais
    },
  };
}

const p1 = criaPessoa('Luis', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Rodrigo', 'Silva', 1.6, 50);
const p3 = criaPessoa('Pedro', 'Henrique', 1.57, 59);
const p4 = criaPessoa('Rafaela', 'Mendes', 1.87, 110);
p1.nomeCompleto = 'Isaias Santana dos Santos';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.fala());
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
console.log(p4.imc);
