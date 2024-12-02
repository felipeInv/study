let cronometro = window.document.querySelector('#timer');
let iniciar = window.document.querySelector('#iniciar');
let pausar = window.document.querySelector('#pausar');
let zerar = window.document.querySelector('#zerar');

let count = 0;

let timer;

function pegarsegundo(){
    timer = setInterval(function(){
        cronometro.innerHTML = getSecond(count)
        count+=1;
    },1000);
}

iniciar.addEventListener('click', function(){
    cronometro.classList.remove('pausado');
    clearInterval(timer);
    pegarsegundo();
    
})

pausar.addEventListener('click', function(){
    cronometro.classList.add('pausado')
    clearInterval(timer)
})

zerar.addEventListener('click', function(e){
    cronometro.classList.add('pausado')
    clearInterval(timer)
    cronometro.innerHTML = getSecond(0);
    count = 0;
})

function getSecond(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'GMT'});
}