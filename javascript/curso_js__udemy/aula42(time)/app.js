function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    })
    
}

//Intervalo de tempo
//abaixo eu usei uma função anônima
const timer = setInterval(function(){console.log(mostraHora())}, 1000);

//excuta só uma vez com delay
setTimeout(function(){
    clearInterval(timer)
}, 10000)

setTimeout(function(){
    console.log("Olá mundo!")
}, 5000)