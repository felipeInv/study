// let nomes = ['vine', 'vivi' ,'fefe', 'lala','pri','ana','maria','gabi'];

// nomes.sort();

// console.log(nomes)

let numeros = [1,45,2,7,34,71];

// let ver = numeros.sort((a,b) => {
//     console.log(`${a} compara com ${b}`);
// })

// let control = 0;

// for (c1 = 0; c1 < numeros.length; c1++){
//     for (c2 = 0;c2 < numeros.length; c2++ ){
//         if(numeros[c1] < numeros[c2]){
//             control = numeros[c1];
//             numeros[c1] = numeros[c2];
//             numeros[c2] = control;
//         }
//     }
// }

numeros.sort((a,b) =>{
    return a-b
})

console.log(numeros)