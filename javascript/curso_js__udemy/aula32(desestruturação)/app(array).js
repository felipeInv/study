const numeros = [15, 27, 39, 48, 55, 66, 77, 88, 94];

//rest "..." pegar o resto
//spread "..." distribuir algo
/*
const [primeiroNumero, segundoNumero, terceiroNumero,...resto] = numeros;

console.table(primeiroNumero);
console.table(segundoNumero);
console.table(terceiroNumero);
console.table(resto);

*/

/*

const [um, , tres, , cinco, , ,oito] = numeros;
console.log(um);
console.log(tres);
console.log(cinco);
console.log(oito);

*/

//                    0        1        2
//                  0 1 2    0 1 2    0 1 2
const numeros2 = [ [1,2,3], [4,5,6], [7,8,9]] ;
const[,[,,seis]] = numeros2;
const[lista1, lista2, lista3] = numeros2;

console.log(numeros2[1][2])
console.log(seis)
console.log(lista1, lista2, lista3);
console.log(lista3[2]);