//estrutura de repetição

//   criar variável, codição para executar, acréscimo/decrécimo

/*
for (let i = 0; i <= 5; i+=1){
    console.log(`Linha ${i}`)
}

for(let c = 5; c>= 1; c-=1){
    console.log(`Linha ${c}`);
}
*/

/*

for(let i = 0; i<=10; i+=1){
    const par = (i%2==0) ? 'par' : 'Ímpar';
        console.log(i,par);
}

*/

const frutas = ["Maçã", "Pêra", "Uva", "Manga", "Tomate"];

for(let i = 0; i<frutas.length; i+=1){
    console.log(`Índice ${i} - ${frutas[i]}`)
}