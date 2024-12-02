//É melhor criar várias funções que tem apenas um papel, do que uma função com muitos papéis














// function saudacao(nome){
//     console.log(`Bom dia ${nome}! - Dentro da função`);
//     return(`Bom dia ${nome}!`);
// };
// saudacao('Felipe');
// saudacao('Maria');

// const retorno_funcao = saudacao('Luiz');
// console.log(retorno_funcao, ' - Fora da função')

//pode-se atribuir um valor aos parâmteros caso eles não sejam passados
function soma(a = 1, b = 1){
    const resultado = a + b;
    return(resultado);
};

console.log(soma(4, 2));
// não é possível acessar uma váriavel que esteja dentro de uma função
// console.log(resultado)
// Porém é possível criar uma váriavel com mesmo nome
const resultado = soma(2, 6)
console.log(resultado)

// é possível por a função |anônima| dentro de uma váriavel e ela precisa encerrar com ";"

const raiz = function(numero){
    return(numero **0.5)
};
console.log(raiz(9));

// criação de uma arrow function | () => {}
const subtrair = (a, b) => {
    return(a-b)
};
console.log(subtrair(5, 3));

//arrow function de uma linha e de forma avançada

const arrow_function = n => n**0.5;
console.log(arrow_function(144));