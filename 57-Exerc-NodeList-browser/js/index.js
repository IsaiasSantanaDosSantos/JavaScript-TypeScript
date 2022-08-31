const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body); //Pegar a cor do elemento!!!
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.padding = '5px 10px';
  p.style.borderRadius = '5px';
  p.style.fontWeight = 'bold';
  p.style.color = '#fff';
}
// ps.forEach(function (p) {
//   p.style.color = 'red';
// });
