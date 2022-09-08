function meuTime() {
  function getTimeFromSecund(segundos) {
    const data = new Date(segundos * 1000); //Para ter o milesimo de segundos
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  const relogio = document.querySelector('.relogio');
  //Não precisa mais pegar os botões pois já esta sendo feito isso no "e.target"
  // const iniciar = document.querySelector('.iniciar');
  // const pausar = document.querySelector('.pausar');
  // const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSecund(segundos);
    }, 1000);
  }

  //Para saber em qual elemento está sendo clicado!!
  // document.addEventListener('click', (e) => {
  //   console.log(e.target);
  // });

  //Juntar todos os eventos de clique em um só lugar. Maravilhoso!!!
  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
  });

  // iniciar.addEventListener('click', function (event) {
  //   relogio.classList.remove('pausado');
  //   clearInterval(timer);
  //   iniciaRelogio();
  // });
  // pausar.addEventListener('click', function (event) {
  //   relogio.classList.add('pausado');
  //   clearInterval(timer);
  // });
  // zerar.addEventListener('click', function (event) {
  //   relogio.classList.remove('pausado');
  //   clearInterval(timer);
  //   relogio.innerHTML = '00:00:00';
  //   segundos = 0;
  // });
}
meuTime();
