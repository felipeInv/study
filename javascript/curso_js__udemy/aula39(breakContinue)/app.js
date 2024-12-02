//continue, pula para o início do bloco pulando tudo que vem abaixo
// sai do bloco e continua o código fora do bloco

const pular = 3;
const parar = 7
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`============================`);
console.log(`For Clássico`);
console.log(`============================`);
for(let i = 0; i < numeros.length; i+=1){

    let numero = numeros[i];

    if(numero === pular){
        console.log(`Pulei o ${pular}`);
        continue;
    }
    if(numero === parar){
        console.log(`Parei no ${parar}`);
        break;
    }
    console.log(numero);    
}
console.log(`============================`);
console.log(`For In`);
console.log(`============================`);
for(let numero of numeros){

    if(numero === pular){
        console.log(`Pulei o ${pular}`);
        continue;
    }
    if(numero === parar){
        console.log(`Parei no ${parar}`);
        break;
    }
    console.log(numero);    
}
console.log(`============================`);
console.log(`For Of`);
console.log(`============================`);
for(let i in numeros){

    let numero = numeros[i];

    if(numero === pular){
        console.log(`Pulei o ${pular}`);
        continue;
    }
    if(numero === parar){
        console.log(`Parei no ${parar}`);
        break;
    }
    console.log(numero);    
}

console.log(`============================`);
console.log(`While`);
let count = 0;
console.log(`============================`);
while(count<numeros.length-1){
    if(numeros[count] === pular){
        console.log(`Pulei o ${numeros[count]}`);
        count+=1;
        continue;
    }
    if(numeros[count] === parar){
        console.log(`Parei no ${numeros[count]}`);
        count+=1;
        break;
    }
    console.log(numeros[count]);
    count+=1;
}

console.log(`============================`);
console.log(`Do While`);
let c = 0;
console.log(`============================`);
do{
    if(numeros[c] === pular){
        console.log(`Pulei o ${numeros[c]}`);
        c+=1;
        continue;
    }
    if(numeros[c] === parar){
        console.log(`Parei no ${numeros[c]}`);
        c+=1;
        break;
    }
    console.log(numeros[c]);
    c+=1;
} while(count<numeros.length);