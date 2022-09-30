// 705.484.450-52   070.987.720-03
/*
7x     0x    5x    4x    8x    4x    4x    5x    0x 
10     9     8     7     6     5     4     3     2 
77     0     40    28    48    20    16    15    0 = 237

7x     0x     5x     4x     8x     4x     4x     5x    0x     5x
11     10     9      8      7      6      5      4     3      2
77     0      45     32     56     24     20     20    0      10 = 284

11  -  (237 % 11 ) = 5 (Primeiro digíto) 
"Se o digíto for maior que 9, consideramos "0""

11  -  (284 % 11 ) = 2 (Primeiro digíto)
*/
//Exemplo
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, ''); //Tira tudo que a na string deixando apenas números
    },
  });
}
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  //   console.log(novoCpf);

  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
  //   console.log(digito);
};
ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('379.938.578-99');
if (cpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}

// console.log(cpf.valida());
