// const nome = 'Luiz';
// const sobrenome = 'Otavio';

// const falaNome = () => nome + ' ' + sobrenome;

// //Como exportar
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// //Outra forma de exportar
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qlqrCoisa = 'Qualquer coisa';

// // console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};

//Esse acaba não sendo exporado devido ao exports anterior
// exports.outraCoisa = 'Outra coisa.';
