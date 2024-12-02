const numeros = [50, 3, 25, 34, 64, 7, 19, 5, 6, 2, 19, 6, 28];
/*
let maior10 = [];
let count = 0;
while (count < numeros.length) {
    if (numeros[count] > 10) {
        maior10.push(numeros[count]);
    }
    count += 1;
}
*/
/*
function callbackFilter(valor, indice, array){
    return valor > 10; //true or false;
}
*/

//a função filter serve para filtrar os valores do array, basta chamar ela, e como parâmetro, por uma referência de uma função(apenas o nome dela sem os parênteses) ou por uma arrow function ou uma função anônima, na função que foi passada como parâmetro, pode ser usados 3 parâmetros nela (valor, índice e o array todo), a função "filter" irá iterar sobre o array, ou seja, tudo que estiver na na função que foi passada como parâmetro, irá acontecer com todos os valores do array em ordem de índice; 
/*
const numerosFilter = numeros.filter(callbackFilter)
console.log(numerosFilter);
*/


const pessoas = [
    { nome: 'Luiz', Idade: 18 },
    { nome: 'Vitória', Idade: 17 },
    { nome: 'Vine', Idade: 17 },
    { nome: 'Duda', Idade: 20 },
    { nome: 'Pricila', Idade: 42 },
    { nome: 'Felipe', Idade: 24 },
]

const word5 = pessoas.filter((valor, indice, array) => {
    return valor.nome.length >= 5;
});
console.log(word5);


const years40 = pessoas.filter((valor)=>{
    return valor.Idade > 40;
})

console.log(years40);

const lastA = pessoas.filter((valor) =>{
    return valor.nome.toLowerCase().endsWith('a');
})
console.log(lastA);