//Capturar evento do Formulário
const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso'); //Pegar valor do input de peso
  const inputAltura = e.target.querySelector('#altura'); //Pegar valor do input de altura

  //Converter valores para Number
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura inválido', false);
    return;
  }
  const imc = getImc(peso, altura);

  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

//Função para ver em qual nível a pessoa está na tabela
function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'obesidade grau 1',
    'obesidade grau 2',
    'obesidade grau 3',
  ];

  if (imc >= 40) return nivel[5];
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc >= 18.6) return nivel[1];
  if (imc <= 18.4) return nivel[0];
}
//Função para calcular IMC
function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2); //O .toFixed(2) e para colocar 2 casas decimais
}

//função para criar elemento, no caso uma tag "p"
function criaP(classame) {
  const p = document.createElement('p');
  return p;
}

//função para apagar a div resultado e colocar o que estiver na tag "p" que foi criada na função acima
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ``;

  const p = criaP();
  //Para mudar a cor do fundo conforme o resultado
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
//Parei nós 28 minutos 36 segundos da aula 44
