const express = require('express');
// const res = require('express/lib/response');
const app = express();
const routes = require('./routes.js');

//Para tratar os dados que for coletado pelo formulário, sem esse parâmetro os dados ficam 'underfined' ↓
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/contato', (req, resp) => {
  //
  resp.send('Thank you for sending us your message!');
});
app.listen(3000); //Abrir na porta 3000
