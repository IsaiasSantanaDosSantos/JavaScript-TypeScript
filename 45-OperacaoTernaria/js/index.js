//Operação ternária: "?" e ":"
//Serve para incurtar alguma parte do código

const pontuacaoUsuario = 500;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';

//Checar váriável padrão
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

/*
//Forma normal de codificar 
if(pontuacaoUsuario >= 1000){
    console.log("Usuário VIP")
} else {
    console.log("Usuário normal")
}
*/
