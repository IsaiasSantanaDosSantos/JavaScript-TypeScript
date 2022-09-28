// Construtora -> molde (classe)
function Pessoa(nome, sobrenome, profissao) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.profissao = profissao;
  //   this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome; //Esta forma trás menos benefícios ao site por carregar um método em cada objeto
}

Pessoa.prototype.estouAqui = 'Hahahaha';

Pessoa.prototype.nomeCompleto = function () {
  //Esta forma é mais eficiente pois apenas link com o objeto levando a propriedade desejada.
  return this.nome + ' ' + this.sobrenome;
};
Pessoa.prototype.nomeCompletoProfissao = function () {
  //Esta forma é mais eficiente pois apenas link com o objeto levando a propriedade desejada.
  return this.nome + ' ' + this.sobrenome + ' trabalha como: ' + this.profissao;
};
//Instância
const pessoa1 = new Pessoa('Luiz', 'O.', 'Motorista'); // ← Pessoa = Função contrutora
const pessoa2 = new Pessoa('Maria', 'A.', 'Açougueiro'); //← Pessoa = Função construtora
const data = new Date(); //← Date = Função construtora

console.log(pessoa1);
console.log(pessoa2);
console.log(data);
console.log(pessoa1.estouAqui);
console.log(pessoa1.nomeCompleto);
