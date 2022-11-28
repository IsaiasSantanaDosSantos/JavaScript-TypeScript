const express = require('express');
// const res = require('express/lib/response');
const app = express();
const routes = require('./routes.js');
const path = require('path');

//Para tratar os dados que for coletado pelo formulário, sem esse parâmetro os dados ficam 'underfined' ↓
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.get('/contato', (req, resp) => {
  //
  resp.send('Thank you for sending us your message!');
});
app.listen(3000, () => {
  //Abrir na porta 3000
  console.log('Acessar http://localhost:3000');
  console.log('Servidor excutando na porta 3000');
});
