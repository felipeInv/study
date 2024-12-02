let nomes = ['vine', 'vivi' ,'fefe', 'lala','pri','ana','fefe','maria','gabi'];

// let posicao1 = nomes.indexOf('fefe');
// console.log(posicao1);

// let posicao2 = nomes.indexOf('fefe', 2);
// console.log(posicao2);

// let posicao3 = nomes.indexOf('paty');
// console.log(posicao3);

// let posicao4 = nomes.indexOf('fefe');
// let posicao5 = nomes.lastIndexOf('fefe');

// console.log(posicao4 + " "+ posicao5)

let pesquisa = "vivivi";
if(nomes.includes(pesquisa)){
    console.log(`${pesquisa} existe na lista`);
}
else{
    console.log(`${pesquisa} não existe na lista`);
}