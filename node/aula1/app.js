// const { nome, sobrenome, falaNome } = require('./mod1');

// console.log(nome, sobrenome);

// console.log(falaNome());
const path = require('path'); //Arquivo do Module_nodes
const axios = require('axios');

//Importando apenas a classe Pessoa
const { Pessoa } = require('./mod1');
('strict');
//Importando o modulo todo
const mod1 = require('./mod1');

const p1 = new Pessoa('Isaias');

console.log(p1);
console.log(mod1);
// console.log(Pessoa);

// //Importar arquivo externo com axios
// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then((response) => console.log(response.data))
//   .catch((e) => console.log(e));
