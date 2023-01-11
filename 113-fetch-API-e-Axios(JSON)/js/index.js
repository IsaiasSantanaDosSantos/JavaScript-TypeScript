                                                                                                                                                                                                                                                                                                                                                                                                                                                                     // fetch('pessoas.json')
//   .then((resposta) => resposta.json())
//   .then((json) => carregaElementosNaPagina(json));

axios('pessoas.json').then((resposta) =>
  carregaElementosNaPagina(resposta.data)
);

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  table.style.border = '1px solid #000';
  table.style.borderCollapse = 'collapse';

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    td1.style.border = '1px solid #000';
    td1.style.padding = '3px 5px';
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    td2.style.border = '1px solid #000';
    td2.style.padding = '3px 5px';
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.salario;
    td3.style.border = '1px solid #000';
    td3.style.padding = '3px 5px';
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = pessoa.email;
    td4.style.border = '1px solid #000';
    td4.style.padding = '3px 5px';
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.innerHTML = pessoa.sexo;
    td5.style.border = '1px solid #000';
    td5.style.padding = '3px 5px';
    if (pessoa.sexo === 'F') td5.style.background = 'pink';
    else if (pessoa.sexo === 'M') td5.style.background = 'blue';
    else td5.style.background = 'red';
    tr.appendChild(td5);
   

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
