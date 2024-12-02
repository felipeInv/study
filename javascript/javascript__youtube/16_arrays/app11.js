let nomes = ['vine', 'vivi' ,'fefe', 'lala','pri','ana','maria','gabi'];

let tamanho = nomes.map(nome => nome.length);

console.log(tamanho);

let num = [9,25,144,81];

console.table(num.map(numero => Math.sqrt(numero)));

console.log(nomes.map(nome => {
    return `Olá ${nome}`
}));