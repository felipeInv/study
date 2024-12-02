function retornaFuncao(nome){
    return function(){
        return nome;
    };
};

const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('felipe2');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());