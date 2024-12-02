/*
const frutas = ['banana', "uva", `manga`]
let i = 0;
while(i<frutas.length){
    console.log(frutas[i])
    i+=1
}
*/

const min = 1;
const max= 10;
function random(min, max){
    let r = Math.random()*(max - min) + min;
    return r;
}
let count = 0;
do{
    count +=1
    aleatorio = Math.floor(random(min, max+1));
    console.log(count, aleatorio);
}while(aleatorio !== 10);

console.log(`Chance: ${(1/count*100).toFixed(2)}%`);