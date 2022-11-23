const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//   { nome: 'João' },
//   { nome: 'Eduardo' },
//   { nome: 'Luiza' },
//   { nome: 'Marcelo' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function lerAqruivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);

  dados.forEach((val) => console.log(val.nome));
}

lerAqruivo(caminhoArquivo);
// console.log(dadosArquivos);
