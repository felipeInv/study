/*
//new Object, tem uma função atrelada a ela, o "Object.prototype"
const objA = {
    chaveA: "A",
    //__proto__: Object.prototype;
};
const objB = {
    chaveB: "B",
    //__proto__: objA;
};
const objC = new Object();
objC.chaveC = 'C';

//mudar o prototype do objeto
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA);

*/

function Produto(nome, valor, estoque, venda){
    this.nome = nome;
    this.valor = valor;
    this.estoque = estoque;
    this.venda = venda;
};
Produto.prototype.disponivel = function(){
    return this.estoque - this.venda;
};
Produto.prototype.descontoPorcentagem = function(percentual){
    this.valor = this.valor - (this.valor * (percentual/100));
};
Produto.prototype.aumentoPorcentagem = function(percentual){
    this.valor = this.valor + (this.valor * (percentual/100));
};

const camiseta = new Produto('camiseta', 20, 10, 3);
const sapato = {nome: 'sapato', valor: 40, estoque: 4, venda: 3};
Object.setPrototypeOf(sapato, Produto.prototype);

const caneca = Object.create(Produto.prototype, {
    cor: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'verde'
    },
    rare: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 1
    },
});
caneca.nome = 'caneca';
caneca.valor = 10;
caneca.estoque = 15;
caneca.venda = 7;
