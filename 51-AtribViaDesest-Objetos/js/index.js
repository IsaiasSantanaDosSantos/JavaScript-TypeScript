const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av. Brasil',
    numero: 320,
  },
};
// console.log(pessoa.nome);
//console.log(pessoa[0]);         // Não funciona assim!!!

// const nome = pessoa.nome;

//Atribuição via desestuturação
//const { nome } = pessoa;        //Cria uma variável com o nome 'nome'
// const { nome = '', sobrenome } = pessoa;     //Deixa um valor padrão??
// const { nome: teste = '', sobrenome } = pessoa; //Muda o nome da variável
// console.log(teste, sobrenome);
// const {
//   endereco: { rua, numero },
// } = pessoa; //pegar itens dentro do outro objeto
// console.log('Nome da rua/av ' + rua, 'Número ' + numero);

//Usando a propriedade "rest" para pegar o resto
const { nome, sobrenome, ...res } = pessoa;
console.log(nome, res);
