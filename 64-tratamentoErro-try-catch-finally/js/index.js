//Tratamento de erro

/*
try {
  //É execultada quando não há erros
  console.log('Abrir um arquivo');
  console.log('Manipulei o arquivo e gerou um erro');
  console.log('Fechei o arquivo');
  //Posso colocar um 'try' dentro de outro tbm
  try {
    console.log(b);
  } catch (e) {
    console.log('Deu erro');
  } finally {
    console.log('Também sou finally')
  }
} catch (err) {
  //É execultado quando há erros
  console.log('Tratando o erro');
} finally {
  //Sempre é execultado
  console.log('FINALLY: Eu sempre sou execultado');
}
*/

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date');
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit', //Deixar hora com dois digitos
    minute: '2-digit', //Deixar minuto com dois digitos
    second: '2-digit', //Deixar segundos com dois digitos
    hour12: false, //Retonar hora em 24 horas
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(11);
  console.log(hora);
} catch (e) {
  //Tratar erro
  console.log(e);
} finally {
  console.log('Tenha um bom diaS');
}
