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
    app.emit('pronto');
  })
  .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes.js');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

//Para tratar os dados que for coletado pelo formulário, sem esse parâmetro os dados ficam 'underfined' ↓
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'dhksdjflfhfksdfksadas sadsad sad sadas asdasd asdasd dh(',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

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
