function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
};

Produto.prototype.aumentaPreco = function(percentagem){
    return this.preco = this.preco + (this.preco*(percentagem/100));
}; 
Produto.prototype.diminuiPreco = function(percentagem){
    return this.preco = this.preco - (this.preco*(percentagem/100));
}; 

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
};

Camiseta.prototype = Object.create(Produto.prototype); //o Camiseta.prototype é um objeto vazio, então ele está recebendo um objeto que cujo o prototype dele é o "Produto.prototype";

const camiseta1 = new Camiseta('regata', 20, 'verde');