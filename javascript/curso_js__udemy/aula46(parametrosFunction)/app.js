// a função declarada com a palavra function, possui uma variável chamada "arguments" que guarda todos os argumentos fornercidos
/*
function funcao(){
    let total = 0;
    for(let valor of arguments){
        total+=valor;
    }
    console.log(total);
}
funcao(1,4,5,7,2,8,11);
*/

//parâmetros sem argumentos ficam como "undefined"
/*
function funcao(a, b, c, d, e, f, g) {   
    console.log(a, b, c, d, e, f, g);
}
funcao(1, 2, 3, 4);

*/

//caso o parâmetro não tenha argumento, pode-se definir um valor padrão
/*
function funcao(a, b = 0, c=3) {
    // b = b || 0;
    console.log(a + b + c);
}
funcao(1, 4);
*/

//pular a definição de um parâmetro, usasse "undefined" no argumento
/*
function funcao(a, b = 0, c=3) {
    // b = b || 0;
    console.log(a + b + c);
}
funcao(1, undefined , 2);
*/

//atribuição via desestruturação

//objeto
/*
function funcao({nome, sobrenome, idade}) {
    // b = b || 0;
    console.log(nome, sobrenome, idade);
}
// funcao({nome: "felipe", sobrenome: "veiga", idade: "18"});
const pessoa = {
    nome: "Felipe",
    sobrenome: "Veiga",
    idade: 18,
}
funcao(pessoa);
*/

//array
/*
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
funcao(['Luiz', "felipe", 18])
*/

//usando rest operator
const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') { acumulador += numero }
        else if (operador === '-') { acumulador -= numero }
        else if (operador === '*') { acumulador *= numero }
        else if (operador === '/') { acumulador /= numero };
    }
    console.log(acumulador);
};
conta('+', 0, 1, 4, 2, 3);
conta('-', 0, 1, 4, 2, 3);
conta('*', 1, 1, 4, 2, 3);
conta('/', 1, 1, 4, 2, 3);