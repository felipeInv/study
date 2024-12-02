

//var pode ser redeclarada, let não;

//let tem escopo de bloco {...} | var só tem escopo de função

const verdadeiro = true;
/*

let nome = 'felipe1'; //criando
var nome2 = 'felipe';


var nome2 = 'luiz'; //redeclarado


if(verdadeiro){
    let nome = 'felipe2' //criando
    var nome2 = 'veiga'; //redeclarado
    console.log(nome, nome2)
    
    if(verdadeiro){
        let nome = 'felipe3' //criando
        var nome2 = 'souza'; //redeclarado
        console.log(nome, nome2)
    }
}
console.log(nome, nome2, `fora dos IFs`); //nesse caso o valor do var, recebeu o valor dos blocos aninhados, já o let não

*/

//uma função protege as váriaveis criadas dentro dele, ainda sim, funções podem acessar váriaveis criadas fora


/*

function falarOi(){
    console.log(`Oi`);
    let testeLet = "Let";
    var testeVar = "Var";

    //nesse caso, como o if está dentro da função, a váriavel pode ser acessada

    if(verdadeiro){
        console.log( testeLet, testeVar);
        let dentro = 'let criada centro' //let não será acessada fora dessa função(if)
        var dentro2 = 'var criada centro'
    }

    console.log(dentro, dentro2)
}

falarOi();

*/



sobrenome = "Souza"; //foi mudado valor mesmo ela sendo declarada depois por conta do "hoisting", ele levou a declaração da váriavel para o topo do código, porém não seu valor de origem;

console.log(sobrenome); //"undefined" porque foi criado depois

var sobrenome = "Veiga"; //ele fez o "hoisting", elevou a declaração da váriavel para o topo do código, porém não seu valor

//HOISTING NÃO FUNCIONA COM LET

sobrenome1 = "Souza"; //foi mudado valor mesmo ela sendo declarada depois por conta do "hoisting", ele levou a declaração da váriavel para o topo do código, porém não seu valor de origem;

console.log(sobrenome1); //"undefined" porque foi criado depois

let sobrenome1 = "Veiga";

//O HOISTING TAMBÉM FUNCIONA COM FUNÇÃO, PORÉM SÓ SE ELA FOR DECLRADA SOZINHA, SEM SER EM UMA VARIÁVEL