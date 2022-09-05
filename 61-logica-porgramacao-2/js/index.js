//Minha resolução
function ePaisagem(x, y) {
  return x > y ? true : false;
}

console.log(ePaisagem(800, 900));

//Resolução correta
function soPaisagen(largura, altura) {
  return largura > altura;
}
console.log(soPaisagen(1200, 900));

//Convertendo para arrow-function

const mesmaFunccao = (larg, alt) => larg > alt;

console.log(mesmaFunccao(1520, 1080));
