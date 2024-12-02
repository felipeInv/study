/*

Object.values;
Object.entries;
Object.assign(des,key);
Object.getOwnPropertyDescriptor(o, 'prop');
...(spread);

//Já vimos
Object.keys(retona as chaves);
Object.freeze(congela o objeto, não poderá ser alterado ou deletado suas chaves e valores);
Object.defineProperty(define uma propriedade);
Object.defineProperties(define várias propriedades);

*/

const produto = {
    nome: 'blusa',
    preco: 20,
    estoque: 5
};
//copiar sem ser por referência


/*

const produto2 = {
    ...produto, //espalhando o objeto nesse novo objeto;
    material: 'algodão', //adicionando novas chaves
};

*/

/*

//                           destino, qual objeto vai ter seus valores pego, etc
const produto2 = Object.assign({}, produto, {material: 'seda'})

*/

/*

const produto2 = {nome: produto.nome, preco: produto.preco, estoque: produto.estoque};

*/
/*
produto2.estoque = 3;
console.log(produto);
console.log(produto2);
*/


//Pegar os descritores de uma chave;
/*

console.log(Object.getOwnPropertyDescriptor(produto, 'estoque'));
Object.defineProperty(produto, 'estoque', {
    value: 10,
    writable: false,
});
produto.estoque = 8; // não mudará pois acima o "writable" is "false"
console.log(Object.getOwnPropertyDescriptor(produto, 'estoque'));

*/

/*

//pegar os valores de um objeto
console.log(Object.values(produto));
//pegar as chaves
console.log(Object.keys(produto));
//Os o 2
console.log(Object.entries(produto));

*/

for(let valor of Object.entries(produto)){
    console.log(`Chave é ${valor[0]} e o valor é ${valor[1]}`);
};