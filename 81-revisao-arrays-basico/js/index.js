// Array são valores por referencia
// const nomes = ['Adriana', 'Edu', 'José', 'Paul', 'Roberto'];
// Funciona para: String, Objetos, Funções, Números
// const novo = [...nomes];
// nomes[2] = 'Paul';
// delete nomes[2];
// console.log(nomes);

// const removido = novo.shift(); //Remove do começo
// console.log(novo, removido);
// nomes.pop() //Remove no final
// nomes.push('Roberto'); //Adiciona no final
// nomes.unshift('Adriana'); //Adiciona no começo
// console.log(nomes);
// const novo = nomes.slice(1, -2); //Remove elementos

// console.log(novo);

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ') //Transforma string em array
const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' '); // Transforma array em string
console.log(nome);
