//Tbm funciona em objetos

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'José'); // Uma forma de concatenar

// Tbm tem o "..." rest → spread

const a3 = [...a1, ...a2, 'Paulo', ...[7, 8, 9]];
console.log(a3);
