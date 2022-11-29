require('dotenv').config();
const express = require('express');
// const res = require('express/lib/response');
const app = express();
//MongoBD
const mongoose = require('mongoose');

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectei à base de dados.');
    app.emit('pronto');
  })
  .catch((e) => console.log(e));

const routes = require('./routes.js');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

//Para tratar os dados que for coletado pelo formulário, sem esse parâmetro os dados ficam 'underfined' ↓
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos propríos middlewares
app.use(middlewareGlobal);

app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    //Abrir na porta 3000
    console.log('Acessar http://localhost:3000');
    console.log('Servidor excutando na porta 3000');
  });
});

app.get('/contato', (req, resp) => {
  //
  resp.send('Thank you for sending us your message!');
});
