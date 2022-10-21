class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado!');
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.name + ' já desligado!');
    }
    this.ligado = false;
  }
}
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
  ligar() {
    console.log('Olha você alterou o método ligar.');
  }
  falaOi() {
    console.log('Oi');
  }
}

const t1 = new Tablet('S9M', true);
const d1 = new Smartphone('Iphone', 'preto', 's12');

console.log(d1);
// console.log(t1.ligar);
t1.ligar();
t1.ligar();
t1.falaOi();
