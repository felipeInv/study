function relogio(){
    let cronometro = window.document.querySelector('#timer');
let contador = 0;
let timer;

function gerarSegundo(segundo){
    let data = new Date(segundo*1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'GMT'})
}

function startTime(){
    timer = setInterval(function(){
        contador+=1
        cronometro.innerText = gerarSegundo(contador);
    },1000);
}

document.addEventListener('click', (e)=>{
    const elemento = e.target;
    if(elemento.classList.contains('iniciar')) {
        cronometro.classList.remove('pausado');
        clearInterval(timer);
        startTime();
    };
    if(elemento.classList.contains('pausar')) {
        cronometro.classList.add('pausado');
        clearInterval(timer);
    };
    if(elemento.classList.contains('zerar')) {
        clearInterval(timer);
        cronometro.classList.add('pausado');
        contador=0;
        cronometro.innerText = gerarSegundo(contador)
    };
});
}
relogio();