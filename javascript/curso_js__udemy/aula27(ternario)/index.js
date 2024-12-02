// ? :

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Usuário VIP` : `Usuário Normal`;
// varialde = (condição) ? (se verdadeira) : (se falsa);

//Usuário não definiu nenhuma cor
const corUsuario = null;

//se o usuário não definfiu nenhuma cor, será verde então
const corPadrao = corUsuario || "Verde"

console.log(nivelUsuario, corUsuario);