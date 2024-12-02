const form = window.document.querySelector('form');
const outputMedia = window.document.querySelector('#media');
const outputSituacao = window.document.querySelector('#situacao');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = form.nome.value;
    
    const nota1 = Number(window.document.querySelector('#nota1').value);
    const nota2 = Number(window.document.querySelector('#nota2').value);

    const media = (nota1+nota2)/2;

    outputMedia.innerHTML = `Média das notas: ${media.toFixed(2)}`;

    if(media>=7){
        outputSituacao.innerHTML = `Parabéns ${nome}, você foi aprovado(a)!`;
        outputSituacao.style.color = 'green'
    } else if(media>=4){
        outputSituacao.innerHTML = `${nome}, você ficou de recuperação!`
        outputSituacao.style.color = 'yellow'
    } else{
        outputSituacao.innerHTML = `Infelizmente ${nome}, você foi reprovado(a)!`;
        outputSituacao.style.color = 'red'
    } 
});