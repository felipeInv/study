// get tem a função de te retornar o valor, então para você ter o verdadeiro valor de determinada chave, precisará executar ela, porém chamar ela como se fosse uma chave mesmo, não como uma função, sem os ();



function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let valorPrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return valorPrivado;
        },
        set: function(valor/* valor que está querendo ser o novo valor de 'estoque'*/){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem de erro');
            }
            valorPrivado = valor;
        },
    });
};

const p1 = new Produto('Camiseta', 20, 3);

/*console.log(p1); 
console.log('')
console.log('======================')
console.log('')*/
/*
p1.estoque = '500'; //acionou o set;
console.log(p1.estoque);  //acionou o get;
*/

// No Function Fabric
function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa','')
            nome = valor;
            console.log('valor alterado');
        },
    };
}; 

const p2 = criaProduto('Calça');
p2.nome = 'qualquer coisa'; //acionou o set;
console.log(p2.nome); //acionou o get;
