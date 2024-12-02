console.clear();

let valor1 = 25;
let valor2 = 14;
/*
function somar(a, b){ return a+b};
function subtrair(a, b){ return a-b};
function multiplicar(a, b){ return a*b};
function dividir(a, b){ return a/b};
*/
let somar = (a, b) => {
    return `${a} + ${b} = ${a+b}`
};
let subtrair = (a, b) => {
    return `${a} - ${b} = ${a-b}`
};
let multiplicar = (a, b) => {
    return `${a} * ${b} = ${a*b}`
};
let dividir = (a, b) => {
    return `${a} / ${b} = ${a/b}`
};


console.log(`Em relação aos números ${valor1} e ${valor2} é:
${somar(valor1, valor2)}
${subtrair(valor1, valor2)}
${multiplicar(valor1, valor2)}
${dividir(valor1, valor2)}
`)