function mostrarHora() {
  let data = new Date();
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

const time = setInterval(function () {
  console.log(mostrarHora());
}, 1000);
//SetTimeout determina o tempo que o setInterval vai funcionar e é execultado apenas uma vez
setTimeout(function () {
  clearInterval(time);
}, 3000);

setTimeout(function () {
  console.log('Passou 2 segundos');
}, 5000);
