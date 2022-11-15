// const Cachorro = require('./B/C/D/mod');

// const cachorrinho = new Cachorro('Bibu');

// cachorrinho.latir();

// const Cachorro = require('./Z/mod2');

// const c1 = new Cachorro('Bonnier');

// c1.latir();

//Navegando entre arquivos:
// Para frente → ./B/arquivo.js ou ./arquivo.js
//Para voltar → ../"nomePasta"/"nomeArquivo"

//Para saber onde estamos atualmente (caminho absoluto "desde a primeira pasta do pc"):
// console.log(__filename); //→ mostra nome do arquivo atual
// console.log(__dirname); //→ mostra nome da pasta atual

//Navegar entre pastas pelo 'path'
// const path = require('path');
// console.log(path.resolve(__dirname, '..', '..', 'node', 'aula1')); //→ voltou duas pastas e entrei em outra...

//Para importar a extensão (.js) no final do arquivo não faz direfença se houver ou não, a não ser se for outro tipo de arquivo
const Cachorro = require('./Z/mod2.js');
const c1 = new Cachorro('Bob');
c1.latir();
