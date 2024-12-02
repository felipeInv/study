const verificarNum = (num) =>{
    if((num%3 == 0) && (num%5 == 0)){
        var divisao = `divisível por 3 e 5`;
    } else if((num%5 == 0)){
        var divisao = `divisível por 5`;
    } else if((num%3 == 0)){
        var divisao = `divisível por 3`;
    } else{
        var divisao = `não divisível por 3 e 5`;
    }
    
    if(typeof(num) == 'number'){
        var isNumber = `é um número`;
    } else{
        var isNumber = `não é um número`;
    }

    return `${num}, ${divisao}, ${isNumber}`
};

for(let numero = 0; numero<=100; numero+=1){
    console.log(verificarNum(numero));
}