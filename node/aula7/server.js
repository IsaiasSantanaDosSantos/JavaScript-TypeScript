const express = require('express');
const res = require('express/lib/response');
const app = express();

// /profiles/12345?campanha=googleads&nome_campanha=seila

app.get('/', (req, resp) => {
  resp.send(
    '<form action="/" method="POST">Name: <input type="text" name="name"/><button>Enviar</button></button></form>'
  );
});



app.post('/', (req, resp) => {
  resp.send('Recebi o formulário!');
});

app.listen(3000, () => {
  //Abrir na porta 3000
  console.log('Acessa http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
