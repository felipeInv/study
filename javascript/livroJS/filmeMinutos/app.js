const form = window.document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inTitle = window.document.querySelector('#inTitleFilme');
    const inTime = window.document.querySelector('#inTimeFilme');

    const minTime = Number(inTime.value);
    const horas = Math.floor(minTime/60);
    const minutos = minTime%60;

    const outTitle = window.document.querySelector('#outTitleFilme');
    const outTime = window.document.querySelector('#outTimeFilme');

    outTitle.innerHTML = `Título do Filme: ${inTitle.value}`;
    outTime.innerHTML = `Horas de filme: ${horas}<br>Minutos de filme: ${minutos}`;
})