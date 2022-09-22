//

const pessoas = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
};

const chave = 'nome';
console.log(pessoas.nome);
console.log(pessoas[chave]);

console.log('\n#################\n');

// → new array
const pessoas1 = new Object();
pessoas1.nome = 'Isaias';
pessoas1.sobrenome = 'Cardoso';
pessoas1.idade = 69;

//Para apagar
// delete pessoas1.nome;

console.log(pessoas1);
console.log(pessoas1.nome);
console.log(pessoas1[chave]);

pessoas1.falaNome = function () {
  return `${this.nome} está falando seu nome.`;
};

pessoas1.falaNome();

pessoas1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
// console.log(pessoas1.getDataNascimento());

for (let chaves in pessoas1) {
  console.log(pessoas1[chaves]);
}

//Factory functions / Constructor functions / Classes
console.log('Factory functions / Constructor functions / Classes\n');

//Factory functions ↓
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto());

console.log('\n#################\n');
// Constructor functions
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //Caso queira travar todos os objetos criando a partir deste construtor, não possibilitando a alteração do valor criado inicialmente
  //↓
  //   Object.freeze(this);
}

// {} Cria objeto vazio <- this -> this
const p2 = new Pessoa2('Luiz', 'Miranda');
// Object.freeze(p2); //Trava o objeto não deixando modificar os valores
const p3 = new Pessoa2('José', 'Ricardo');
// delete p3.nome;
console.log(`p2 → ${JSON.stringify(p2)}`);
console.log(`p3 → ${JSON.stringify(p3)}`);
p2.nome = 'Sem nome';
console.log(p2);
console.log(p3);
