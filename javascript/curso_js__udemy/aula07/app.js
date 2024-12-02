console.clear();
//não podemos criar constantes com palavras reservadas
//constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não podemos modificar o valor de uma constante    
//Ao inicializar uma constante, deve-se já atribuir um valor a ela.
//Não crie var/let/const sem dizer qual ela é(var/let/const).

// const nome = "João";
// console.log(nome)
// nome = "felipe";

// console.log(nome)

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero*segundoNumero;
const resultadoDuplicado = resultado*2;
let resultadoTriplicado = resultado*3 
resultadoTriplicado = resultadoTriplicado+5
console.log(primeiroNumero);
console.log(segundoNumero);
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof(primeiroNumero));
console.log(typeof(primeiroNumero + segundoNumero), primeiroNumero + segundoNumero);
console.log(typeof(primeiroNumero - segundoNumero), primeiroNumero - segundoNumero);