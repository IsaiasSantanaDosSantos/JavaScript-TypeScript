
  const inputTarefa = document.querySelector('.input-tarefa');
  const btnTarefa = document.querySelector('.btn-tarefa');
  const tarefas = document.querySelector('.tarefas');

  function criaLi() {
    const li = document.createElement('li');
    return li;
  }
  //Pegar evento de tecla!!
  // inputTarefa.addEventListener('keypress', function(e) {
  // console.log(e)
  // })

  //Pegar evento da tecla 'enter'
  inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
    }
  });

  //Limpar input e fazer focus no mesmo
  function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
  }

  //Criar botão
  function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    //   botaoApagar.classList.add('apagar'); //Add class
    botaoApagar.setAttribute('class', 'apagar'); //Add class ou id!!!
    li.appendChild(botaoApagar);
  }

  //Cria uma tarefa e manda para a tag/elemento 'li'
  function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
  }

  //Verifica se o input estiver vazio não faz nada!
  btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  });

  //Apagar botão com seu pai
  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
      el.parentElement.remove();
      salvarTarefas();
    }
  });

  //Salvar tarefa em um array
  function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
    console.log(tarefaJSON);
  }

  //pegar tarefas do localStorage
  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDetarefas = JSON.parse(tarefas);

    for (let tarefa of listaDetarefas) {
      criaTarefa(tarefa);
    }
  }

  adicionaTarefasSalvas();

