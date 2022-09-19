//            -5        -4        -3      -2        -1
//             0         1         2       3         4
const nomes = ['Isaias', 'José', 'Paulo', 'Pedro', 'Henrique'];

// nomes.splice(indice, delete, elem1, elem2, elem3, ...)
//pop

// const removidos = nomes.splice(3, 2); //Exclui dois a parti do indice 3
//const removidos = nomes.splice(-2. Number.MAX_VALUE); //Para remover a partir do indice -2 todos os demais (da direita)
// const removidos = nomes.splice(3, 0, 'Abraão'); //Add a partir do indice 3

//SIMULAR O POP
// const removidos = nomes.splice(-1, 1);

//SIMULAR O SHIFT
// const removidos = nomes.splice(0, 1);

//SIMULAR O PUSH
// nomes.splice(nomes.length, 0, 'Roberto', 'Frederico'); //Se for apenas para add 1 elemento, é mais fácil/melhor usar o push

//SIMULAR O UNSHIFT
nomes.splice(0, 0, 'Roberto', 'Frederico');

console.log(nomes);
