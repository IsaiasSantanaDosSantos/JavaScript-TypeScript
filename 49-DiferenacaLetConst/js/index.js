const h1 = document.querySelector('.container h1');
const data = new Date();

//FORMA MAIS VERBOSA ↓
// function getWeekDay(diaSemana) {
//   let diaSemanaTxt;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTxt = 'domingo';
//       return diaSemanaTxt;
//     case 1:
//       diaSemanaTxt = 'segunda-feira';
//       return diaSemanaTxt;
//     case 2:
//       diaSemanaTxt = 'terça-feira';
//       return diaSemanaTxt;
//     case 3:
//       diaSemanaTxt = 'quarta-feira';
//       return diaSemanaTxt;
//     case 4:
//       diaSemanaTxt = 'quinta-feira';
//       return diaSemanaTxt;
//     case 5:
//       diaSemanaTxt = 'sexta-feira';
//       return diaSemanaTxt;
//     case 6:
//       diaSemanaTxt = 'sábado';
//       return;
//   }
// }

//FORMA MENOS VERBOSA E MAIS COESA ↓ (melhor que a forma de cima que é a mesma coisa)
function getWeekDay(diaSemana) {
  const diaSemanaTxt = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];
  return diaSemanaTxt[diaSemana];
}

//FORMA MAIS VERBOSA ↓
// function getNameMonths(numberMonth) {
//   let monthName;
//   switch (numberMonth) {
//     case 0:
//       monthName = 'janeiro';
//       return monthName;
//     case 1:
//       monthName = 'fevereiro';
//       return monthName;
//     case 2:
//       monthName = 'março';
//       return monthName;
//     case 3:
//       monthName = 'abril';
//       return monthName;
//     case 4:
//       monthName = 'maio';
//       return monthName;
//     case 5:
//       monthName = 'junho';
//       return monthName;
//     case 6:
//       monthName = 'julho';
//       return monthName;
//     case 7:
//       monthName = 'agosto';
//       return monthName;
//     case 8:
//       monthName = 'setembro';
//       return monthName;
//     case 9:
//       monthName = 'outubro';
//       return monthName;
//     case 10:
//       monthName = 'novembro';
//       return monthName;
//     case 11:
//       monthName = 'dezembro';
//       return;
//   }
// }

//FORMA MENOS VERBOSA E MAIS COESA ↓ (melhor que a forma de cima que é a mesma coisa)
function getNameMonths(numberMonth) {
  const monthName = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'autubro',
    'novembro',
    'dezembro',
  ];
  return monthName[numberMonth];
}

function putZeroRight(num) {
  return num >= 10 ? num : `0${num}`;
}
function createDate() {
  const weekDay = data.getDay();
  const monthNumber = data.getMonth();

  const dayName = getWeekDay(weekDay);
  const monthName = getNameMonths(monthNumber);
  //   console.log(dayName, monthName);
  return `${dayName}, ${data.getDate()} de ${monthName} de ${data.getFullYear()} ${putZeroRight(
    data.getHours()
  )}:${putZeroRight(data.getMinutes())}`;
}
h1.innerHTML = createDate(data);

//FORMA MAIS COESA DE TODAS (com biblioteca)

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-BR', {
//   dateStyle: 'full',
//   timeStyle: 'short',
// });
