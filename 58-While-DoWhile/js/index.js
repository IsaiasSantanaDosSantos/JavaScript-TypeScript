//Geralmente se usa o "for" quando sabemos quantas vezes o loop se repetirá
//Diferente do While, que geralmente usamos quando não sabemos quantas vezes se repetirá
//Example One
// const nome = "luiz"
// let i = 0;

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

//Example two
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
while (rand !== 10) {
  rand = random(min, max);

  console.log(rand);
}

console.log('#############');
//Com o 'do while o código é executado pelo menos uma vez sempre
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
