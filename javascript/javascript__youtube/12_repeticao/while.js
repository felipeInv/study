let resultado = 1;
let control = 1;
/*
while(control <= 5){
    resultado = control * resultado;
    control++;
}
*/
while(control <= 6){
    resultado = control * resultado;
    control++;
    if(control==6){break}
}
/*
do{
    resultado = control * resultado;
    control++;
}while(control <= 5);
*/
console.log(resultado);