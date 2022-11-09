//Exportar direto no elemento/variável
export const nome = 'Luiz';
export const sobrenome = 'Otavio';
export const idade = 38;
//const cpf = 'hjjsdh'; //Não será importado

export function soma(x, y) {
return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// Outra madeira de exportar

// const nome = 'Luiz';
// const sobrenome = 'Otavio';
// const idade = 38;

// function soma(x, y) {
//   return x + y;
// }

// export default (x, y) => x * 2;

// export { nome, sobrenome, idade, soma };
