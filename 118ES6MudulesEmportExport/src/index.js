//Uma forma de importar ↓
import Funcaoimportdada, { nome, sobrenome, idade, soma } from './modulo1';

console.log(nome, sobrenome, idade);
console.log(soma(5, 3));

const p1 = new Funcaoimportdada(nome, 'Henrique');
console.log(p1);

//*******************************//

//Outra forma de importar tudo dentro de um objeto ↓
// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

//*******************************//

//Importando o "padrão" (arquivo que está como: default) ↓

// import qualquerNome, { nome, sobrenome, idade, soma } from './modulo1';
// console.log(qualquerNome(12.5, 5));
// // console.log(qualquerNome);

// console.log(nome, sobrenome, idade);
// console.log(soma(5, 3));
