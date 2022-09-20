//O Map cria um array com valor diferente (ou não) do array original com o mesmo tamanho

//Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//FORMA MAIS LONGA ↓
// const numerosEmDobro = numeros.map(function (valor) {
//   return  valor*2

// });

//FORMA MAIS CURTA ↓
const numerosEmDobro = numeros.map((valor) => valor * 2);

console.log(numerosEmDobro);
//**************************** */
//Para cada elemento
//Retorne apenas uma string com o nome da pessoa
//Renova apenas a chave "nome" do objeto
//Adiciona uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Edurado', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//Retorne apenas uma string com o nome da pessoa
const nomesPessoas = pessoas.map((obj) => (obj = obj.nome));
console.log(nomesPessoas);

//Renova apenas a chave "nome" do objeto
//1ª forma
// const idades = pessoas.map(function (obj) {
//   delete obj.nome;
//   return obj;
// });
// console.log(idades);

//2ª forma
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);

//Adiciona uma chave id em cada objeto

//DESTA FORMA AGENTE ALTERA O ARRAY ORIGINAL
// const comIds = pessoas.map(function (obj, indice) {
//   obj.id = (indice + 1) * 111; //Para não ficar com id a partir do 0 (zero)
//   return obj;
// });
// console.log(comIds);

//DESTA FORMA NÃO ALTERAMOS O ARRAY ORIGINAL
const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = (indice + 1) * 111; //Para não ficar com id a partir do 0 (zero)
  return newObj;
});
console.log(comIds);
