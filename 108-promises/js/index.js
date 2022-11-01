function rand(min, max) {
  min *= 1000;
  max += 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false);
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibide dados a tela');
  })
  .catch((e) => {
    console.log('ERRO:', e);
  });

console.log('Isso aqui será exibido antes de quaçquer coisa.');
