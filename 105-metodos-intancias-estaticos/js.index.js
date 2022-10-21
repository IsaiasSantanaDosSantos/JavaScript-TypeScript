function teste() {
  console.log('Este é meu teste!');
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste()
  }

  //Método de instância
  almentarVolume() {
    this.volume += 2;
  }

  //Método de instância
  diminuieVolume() {
    this.volume -= 2;
  }
  //Método estático
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto('Lg');


