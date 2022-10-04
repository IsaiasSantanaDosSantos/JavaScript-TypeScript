function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};
const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// const pessoaPrototype = { ...falar, ...comer, ...beber }; //↓ Outraforma 
const pessoaPrototype = Object.assign({}, falar, comer, beber);

const p1 = criaPessoa('Luis', 'Otavuo');
const p2 = criaPessoa('Maria', 'PAula');

console.log(p1);
console.log(p2);
