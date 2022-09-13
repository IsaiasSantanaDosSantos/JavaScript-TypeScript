function retornaFuncao(nome) {
  //   const nome = 'Luiz';
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('luis');
const funcao2 = retornaFuncao('jão');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
