/*

try //significa tentar,se alguma erro aocntecer nesse bloco, ele executará o bloco "catch"
catch //é acompnhado da "variável" que contém o error


try{
    //executada quando não há erros
} catch(err //variável de controle){
    //executada quando há erros
}

*/



/*
try{
    console.log(variavel)
} catch(err){
    console.log("variavel não existe")
    console.log(err) // err é o erro
};

*/

function somar (x,y){
    if( (typeof(x) != 'number') || (typeof(y) != 'number') ){
        throw new Error(`X e Y precisa ser número`)
    }
    return x+y;
}

try{
    console.log(somar(4,4));
    console.log(somar('e',4));
} catch(err){
    // console.log(err)
    console.log(`Tente novamente mais tarde!`)
}