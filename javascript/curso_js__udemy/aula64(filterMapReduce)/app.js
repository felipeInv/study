const numeros = [50, 3, 25, 34, 64, 7, 19, 5, 6, 2, 19, 6, 28];

/*
const par = numeros.filter((valor)=>{
    return (valor%2 ==0)
});

console.log(par);

const dobro = par.map(function(valor){
    return valor*2;
});

console.log(dobro);

const total = dobro.reduce((acumulador, valor)=>{
    return acumulador += valor;
});

console.log(total);
*/

const resultado = numeros.filter((valor)=>{
    return (valor%2 ==0)
}).map(function(valor){
    return valor*2;
}).reduce((acumulador, valor)=>{
    return acumulador += valor;
});

console.log(resultado);