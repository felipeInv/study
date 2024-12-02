//Declaração de função (function hoisting - eleva a declaraçã para o topo do escopo)
falar();
function falar(){
    console.log('Oi');
}

// First-class object, objetos de primeira classe (pode ser tratada como um dado)
const souDado = function(){
    console.log('Sou um dado');
};

function executar(funcao){
    funcao();
}
executar(souDado);

//arrow Function (muda no this)
const funcaoArrow = () =>{
    console.log(`Sou uma arrow function`);
};
funcaoArrow();

//dentro de um objeto
const objt = {
    nome: 'Felipe',
    falar() {
        console.log(`Estou em um objeto`)
    },
}
objt.falar();


















/////////////////// somar número aleatórios
const num1 = function(){
    const num = Math.round(Math.random()*10);
    return Number(num);
}


const num2 = function(){
    const num = Math.round(Math.random*10);
    return Number(num);
}


