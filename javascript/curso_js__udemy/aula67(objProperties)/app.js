// defineProperty - defineProperties;
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //                    qual objeto, qual propriedade do objeto, property description(precisa ser um objeto)
    Object.defineProperty(this, 'estoque',{
        enumerable: true, //se a chave será inclúida em operações de enumeração (iteração);
        value: estoque, //definir o valor dele; 
        writable: false, //se pode ou não alterar o valor posteriormente;
        configurable: true, //se as configurações podem ser reconfiguradas posteriormente e se a chave pode ser apagada;
    });
    Object.defineProperty(this, 'estoque',{
        enumerable: true, //se a chave será inclúida em operações de enumeração (iteração);
        value: estoque, //definir o valor dele; 
        writable: true, //se pode ou não alterar o valor posteriormente;
        configurable: false, //se as configurações podem ser reconfiguradas posteriormente e se a chave pode ser apagada;
    });

    /* o código abaixo gerará um erro porque a propriedade "configurable", acima, está como "false";
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true, //se a chave será inclúida em operações de enumeração (iteração);
        value: estoque, //definir o valor dele; 
        writable: false, //se pode ou não alterar o valor posteriormente;
        configurable: true, //se as configurações podem ser reconfiguradas posteriormente e se a chave pode ser apagada;
    });*/
}
/*
const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));//retorna as chaves do objeto;
console.log(Object.values(p1));//retorna os valores do objeto;

for(let chave in p1){
    console.log(chave);
};
*/

//////////////  defineProperties() //define mais de uma propriedade(chave)  /////////////////////;

function Produto2(nome, preco, estoque){
    //                      qual objeto, um objeto e dentro dele você pode o valor da chave e suas propiedades em um objeto;
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //se a chave será inclúida em operações de enumeração (iteração);
            value: nome, //definir o valor dele; 
            writable: false, //se pode ou não alterar o valor posteriormente;
            configurable: true, //se as configurações podem ser reconfiguradas posteriormente e se a chave pode ser apagada;
        },
        preco: {
            enumerable: true, //se a chave será inclúida em operações de enumeração (iteração);
            value: preco, //definir o valor dele; 
            writable: false, //se pode ou não alterar o valor posteriormente;
            configurable: true, //se as configurações podem ser reconfiguradas posteriormente e se a chave pode ser apagada;
        },
        estoque: {
            enumerable: true, //se a chave será inclúida em operações de enumeração (iteração);
            value: estoque, //definir o valor dele; 
            writable: false, //se pode ou não alterar o valor posteriormente;
            configurable: true, //se as configurações podem ser reconfiguradas posteriormente e se a chave pode ser apagada;
        },
    });
};

const p2 = new Produto2('calça', 40, 4);
console.log(p2);