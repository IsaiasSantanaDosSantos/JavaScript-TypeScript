const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }); //'w' apaga e reescreve e 'a' acrescenta ao que já está escrito
};
