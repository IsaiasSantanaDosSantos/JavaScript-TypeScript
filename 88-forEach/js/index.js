// foEach só pode ser usado dentro de arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Com o for...
for (let valor of a1) {
  console.log(valor);
}

// Simulação de Reduce()
let total = 0;
a1.forEach((valor) => {
  total += valor;
});
console.log(total);
