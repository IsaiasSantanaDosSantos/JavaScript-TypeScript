const elementos = [
  { tag: 'p', texto: 'Deus está na frente' },
  { tag: 'div', texto: 'Deus no comando' },
  { tag: 'footer', texto: 'Deus no controle' },
  { tag: 'section', texto: 'Deus está com você' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');
for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  //   tagCriada.innerText = texto;
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);
