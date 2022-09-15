//Funções construtores → controe objetos
//Funções fabrica → fabrica objetos
//Contrutora → sempre iniciar nome com letra maiúscula "Pessoa" (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privada
    const ID = 123456

    const metodoIntermo = function(){

    }

    //Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Paulo', 'Eduardo');
p2.metodo();

// console.log(p1.nome, p2.nome);
