// retorna um valor diferente a cada chamada;
function* gerador1() {
    //código;
    yield "valor 1";
    //código;
    yield "valor 2";
    //código;
    yield "valor 3";
};
/*
const g1 = gerador1();


// console.log(g1.next(), g1.next().value, g1.next(), g1.next());

for(let valor of g1){
    console.log(valor);
};
*/


//pode=se criar um contador infinito que aumenta de acordo com o número de chamadas
function* gerador2() {
    let contador = 0;

    while (true) {
        yield contador;
        contador += 1;
    }
}
/*
const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/



//uma função geradora, pode continuar o trabalho de outra
/*
function* gerador3(){
    yield 1;
    yield 2;
    yield 3;
}

function* gerador4(){
    yield* gerador3();
    yield 4;
    yield 5;
    yield 6;
}

let g4 = gerador4();
for (valor of g4){
    console.log(valor);
}
*/

function* gerador5(){
    yield function(){
        console.log("Vim do i1")
    };

    //com return, ele para a função
    return function(){
        console.log('contexto g5');
    };

    //essa parte não será atingida, por conta do return
    yield function(){
        console.log('Vim do i2');
    }
}
const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();
