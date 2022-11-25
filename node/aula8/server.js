const express = require('express');
const res = require('express/lib/response');
const app = express();

//Para tratar os dados que for coletado pelo formulário, sem esse parâmetro os dados ficam 'underfined' ↓
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
  //
  resp.send(
    '<form action="/" method="POST"><label>Name: <input type="text" name="qualquercoisa"/><br/></label><label>Cidade: <input type="text" name="outrocampo"/></label><br/><button>Enviar</button></button></form>'
  );
  console.log('Acessa http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // /profiles/3
  // //profiles/?chave1=valor1&chave2=valo2&chave3=valor3

  console.log(req.params);
  console.log(req.query);
  res.send(req.query.idade);
});

app.post('/', (req, resp) => {
  console.log(req.body); //Aqui que fica o retorno do formulário enviado
  resp.send(
    `Obrigado por sua mensagem ${req.body.qualquercoisa}. Tenha uma ótima noite!`
  );
});

app.get('/contato', (req, resp) => {
  //
  resp.send('Thank you for sending us your message!');
});
app.listen(3000); //Abrir na porta 3000
