const express = require('express');
const res = require('express/lib/response');
const app = express();

//ctrl + p > stop code run → para parar o servidor

//CRUD -> CREATE, READ, UPDATE, DELET
//        POST    GET   PUT     DELETAR

// http://meusite.com/ <- Get -> Entregue a página → /
// http://meusite.com/sobre <- Get -> Entregue a página → /sobre
// http://meusite.com/contato <- Get -> Entregue a página → /contato

app.get('/', (req, resp) => {
  //
  resp.send(
    '<form action="/" method="POST">Name: <input type="text" name="name"/><button>Enviar</button></button></form>'
  );
  console.log('Acessa http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

app.post('/', (req, resp) => {
  resp.send('Recebi o formulário!');
});

app.get('/contato', (req, resp) => {
  //
  resp.send('Thank you for sending us your message!');
});
app.listen(3000); //Abrir na porta 3000
