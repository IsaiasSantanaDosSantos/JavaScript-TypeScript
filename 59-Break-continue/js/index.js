const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('###### CONTINUE  #####');
for (let numero of numeros) {
  if (numero === 2) {
    //Aqui se o número for igual a 2, ele pula e vai para o próximo
    continue;
  }
  console.log(numero);
}

console.log('###### BREAK #####');

for (let numero of numeros) {
  if (numero === 2) {
    //Aqui se o número for igual a 2, ele pula e vai para o próximo
    continue;
  }
  if (numero === 7) {
    //Aqui quando for verdadeiro para tudo
    console.log('Encontrei o 7, saindo...');
    break;
  }

  console.log(numero);
}

console.log('###### BREAK #####');

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o 2');
    //Aqui se o número for igual a 2, ele pula e vai para o próximo

    continue;
  }
  console.log(numero);
  if (numero === 7) {
    //Aqui quando for verdadeiro para tudo
    console.log('Encontrei o 7, saindo...');

    break;
  }
}
console.log('###### WHILE #####');
let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o 2');
    //Aqui se o número for igual a 2, ele pula e vai para o próximo
    i++; //Sempre colocar o encremento/decremento tbm antes no brake em while, caso contrario dará um lopp infinito
    continue;
  }
  console.log(numero);
  if (numero === 7) {
    //Aqui quando for verdadeiro para tudo
    console.log('Encontrei o 7, saindo...');
    i++; //Sempre colocar o encremento/decremento tbm antes no brake em while, caso contrario dará um lopp infinito
    break;
  }
  i++;
}
console.log('###### DO WHILE #####');
let e = 0;
do {
  let numero = numeros[e];

  if (numero === 2) {
    console.log('Pulei o 2');
    //Aqui se o número for igual a 2, ele pula e vai para o próximo
    e++; //Sempre colocar o encremento/decremento tbm antes no brake em while, caso contrario dará um lopp infinito
    continue;
  }
  console.log(numero);
  if (numero === 7) {
    //Aqui quando for verdadeiro para tudo
    console.log('Encontrei o 7, saindo...');
    e++; //Sempre colocar o encremento/decremento tbm antes no brake em while, caso contrario dará um lopp infinito
    break;
  }
  e++;
} while (e < numeros.length);
