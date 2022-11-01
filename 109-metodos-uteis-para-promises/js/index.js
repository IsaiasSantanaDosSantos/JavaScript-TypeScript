function rand(min, max) {
  min *= 1000;
  max += 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}
function baixarPagina() {
  const emCache = true;

  //resolve
  //   if (emCache) {
  //     return Promise.resolve('Página em cache');
  //   } else {
  //     return esperaAi('Baixei a página', rand(1, 3000));
  //   }
  if (emCache) {
    return Promise.reject('Página em cache');
  } else {
    return esperaAi('Baixei a página', rand(1, 3000));
  }
}

baixarPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log('ERRO: ', e));
//Promises.all Promises.race  Promises.resolve Promises.reject

// const promises = [
//   //   'Primeiro valor',
//   esperaAi('Promise 1', rand(1, 5)),
//   esperaAi('Promise 2', rand(1, 5)),
//   esperaAi('Promise 3', rand(1, 5)),
//   esperaAi(1000, rand(1, 5)),
//   //   'Outro valor',
// ];
//Compila na ordem que está
// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

//Entrega a primeira que conseguir compilar
// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });
