//Funções IIFE (imediatas) → Immediately invoked funcition expression

//Dessa forma ao chamar a função, ela é tocada no escopo global. Não queremos isso!!
function qlqrCoisa() {
  console.log(12345);
}

qlqrCoisa();

//Assim que se escreve uma funcão IIFE!
(function (idade, peso, altura) {
  const sobrenome = 'Santana';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(criaNome('José'));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);

const nome = 'Qualquer nome';
