console.clear();
const nome = 'luiz'; //string
const nome1 = "luiz"; //string
const nome2 = `luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //nulo -> não aponta para local nenhum na memória
const aprovado = true; //Boolean = true,false (lógico)

console.log(typeof(aprovado));

const a = [1,2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a,b);

let varParaCopiar = 2;
const varcopiado = 2;
console.log(varParaCopiar, varcopiado);
varParaCopiar = 3;
console.log(varParaCopiar, varcopiado);