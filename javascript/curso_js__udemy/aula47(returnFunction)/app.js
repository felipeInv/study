//return, retorna um valor, a função tamném é finalizada
//retorna o valor da soma
/*
function soma(a, b){
    return a+b;
}
//não retorna o valor da soma, só exibe
function soma2(a, b){
    console.log(a + b);
}
*/
//retonar um objeto
/*
function criaPessoa (nome, idade){
    return {
        nome, //por ter o mesmo nome da variável e o mesmo nome da chave, só precisa escrever uma vez
        idade, //por ter o mesmo nome da variável e o mesmo nome da chave, só precisa escrever uma vez
    }
}
const p1 = criaPessoa('luiz', 18);
const p2= criaPessoa('vine', 17);
console.log(typeof p1);
console.log(typeof p2);
*/
/*
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}
//const olaMundo = falaFrase('Olá')('Mundo');
const olaMundo = falaFrase('Olá');
const resto = olaMundo('mundo');
*/
function criarMultiplicacao(multiplicador){
    function multiplicacao(numero){
        return numero*multiplicador;
    }
    return multiplicacao
}

// console.log(criarMultiplicacao(4)(4));

//define o primeiro parâmetro como padrão sempre que for chamado a váriavel
const duplica = criarMultiplicacao(2);
const triplica = criarMultiplicacao(3);
const quadriplica = criarMultiplicacao(4);

//define o parâmetro da função que está aninhada
console.log(duplica(8)); //16
console.log(triplica(5)); //15
console.log(quadriplica(2)); //8
