exports.paginaInicial = (req, res) => {
  res.send(
    '<form action="/" method="POST"><label>Name: <input type="text" name="qualquercoisa"/><br/></label><label>Cidade: <input type="text" name="outrocampo"/></label><br/><button>Enviar</button></button></form>'
  );
};

exports.trataPost = (req, res) => {
  res.send('Ei sou sua nova rota de POST.');
};
