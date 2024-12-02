// Mês começa no 0 e no dia da semana, 0 é Domingo

/*
const tresHoras = 1000 * 60 * 60 * 3;
const umDia = tresHoras*8;
//const data = new Date(0+tresHoras+umDia); //01/01/1970 (- 3 horas por conta do fuso) Timestamp Unix ou época Unix, aí vai aumentando em milésimos
//const data = new Date(2006, 8, 6, 19, 15, 0, 500); //ano, mês(começa no zero), dia, hora, minuto, segundo, milésimo
const data = new Date(`2006-09-06 19:15:33.601`);//Date string
console.log(`Ano: ${data.getFullYear()} 
\nMês: ${data.getMonth()+1} 
\nDia: ${data.getDate()} 
\nDia da semana: ${data.getDay()+1} 
\nHora: ${data.getHours()} 
\nMinuto: ${data.getMinutes()} 
\nSegundo: ${data.getSeconds()} 
\nMilésimo: ${data.getMilliseconds()}`); 
console.log(data.toString());

//milésimo de segundo da data atual em referente ao marco 0
console.log(Date.now());

*/

const data = new Date();
const dataBrasil = formatarData(data);

function formatarData(data){
    const ano = zeroAesquerda(data.getFullYear());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const dia = zeroAesquerda(data.getDate());
    const hora = zeroAesquerda(data.getHours());
    const minuto = zeroAesquerda(data.getMinutes());
    const segundo = zeroAesquerda(data.getSeconds());

    return`${dia}/${mes}/${ano} | ${hora}:${minuto}:${segundo}`
}

function zeroAesquerda(num){
        return (num<=9) ? `0${num}` : num
        //  (condição) ? (se verdadeira) : (se falsa);
}
console.log(dataBrasil);