/*
primitivos (imutáveis) = number, string, undefined, null, boolean (bigint, symbol) - valores copiados
*/

// let nome = "Luiz";
// nome[0] = 'l';
// nome[3] = 's';
// // a letras não foram alteradas, por ser imutável
// console.log(nome)

/*
let a = "A";
let b = a; ;; //copia, mas não vincula (ele não ponta para o mesmo lugar na memória)
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

*/
/*
Refeência (mutáveis) = Array, Object, Function -  passados por referência
*/
/*

let a = [1,2,3];
let b = a; //copia e vincula (ele ponta para o mesmo lugar na memória)
let c = b;
console.log(a);
console.log(b);
a.push(4,5)
console.log(a);
console.log(b);
b.pop();
console.log(a);
console.log(b);
c.push('luiz')
console.log(a);
console.log(b);
console.log(c);

//copiar sem passar referência
c = [...a]
c.push('Opa')
console.log(a);
console.log(b);
console.log(c);

*/



//Com objeto também
const pessoa = {
    nome: 'luiz',
    sobrenome: 'Otávio',
}

const outraPessoa = pessoa; //apontam para o mesmo lugar na memória

console.log(pessoa);
console.log(outraPessoa);

pessoa.nome = 'Vine'
console.log(pessoa);
console.log(outraPessoa);

const terceiraPessoa = {...pessoa}; //copiou sem ser por referência
terceiraPessoa.nome = 'Felipe'
console.log(terceiraPessoa);