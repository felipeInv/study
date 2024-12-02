//apenas itera sobre os valores;


const a1 = [10, 20, 30];
let count = 0;
a1.forEach(function(valor, indice, array){
    count += valor;
});

console.log(count);