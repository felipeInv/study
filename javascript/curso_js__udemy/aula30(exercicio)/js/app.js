/*

const output = window.document.querySelector('#text');

const datas = new Date();

const data = getDate(datas);


console.log(datas);

output.innerHTML = `${data.textDayWeek}, ${data.diaMes} de ${data.textMonth} de ${data.ano} | ${data.hour}:${addZeroLeft(data.minute)}`;

function getDate(datas){
    const ano = datas.getFullYear();
    const numMes = datas.getMonth();
    const diaMes = datas.getDate();
    const numWeek = datas.getDay();
    const hour = datas.getHours();
    const minute = datas.getMinutes();
    const textDayWeek = getDayWeek(numWeek);
    const textMonth = getTextMonth(numMes);

    return{ano, numMes, diaMes, numWeek, hour, minute, textDayWeek, textMonth}
}

function getDayWeek(day){
    switch(day){
        case 0: return "Domingo";
        case 1: return "Segunda-Feira";
        case 2: return "Terça-Feira";
        case 3: return "Quarta-Feira";
        case 4: return "Quinta-Feira";
        case 5: return "Sexta-Feira";
        case 6: return "Sábado";
        default: return "valor da semana inválido";
    }
}

function getTextMonth(month){
    let mes;
    switch(month){
        case 0:
            mes = "Janeiro";
            return mes;
        case 1:
            mes = "Fevereiro";
            return mes;
        case 2:
            mes = "Março";
            return mes;
        case 3:
            mes = "Abril";
            return mes;
        case 4:
            mes = "Maio";
            return mes;
        case 5:
            mes = "Junho";
            return mes;
        case 6:
            mes = "Julho";
            return mes;
        case 7:
            mes = "Agosto";
            return mes;
        case 8:
            mes = "Setembro";
            return mes;
        case 9:
            mes = "Outubro";
            return mes;
        case 10:
            mes = "Novembro";
            return mes;
        case 11:
            mes = "Dezembro";
            return mes;
    }
}

function addZeroLeft(num){
        // varialde = (condição) ? (se verdadeira) : (se falsa); 
        return ((num < 10) ? `0${num}` : num )
}


*/










/*

const output = window.document.querySelector('#text');
const datas = new Date();
const opcoes = {
    dateStyle: 'full', 
    timeStyle: 'full'
}

output.innerHTML = datas.toLocaleString('pt-BR', opcoes);

*/

const output = window.document.querySelector('#text');
const datas = new Date();

const data = getDatas(datas);

function getDatas(datas){
    const ano = datas.getFullYear();
    const numMes = datas.getMonth();
    const diaMes = datas.getDate();
    const numWeek = datas.getDay();
    const hour = datas.getHours();
    const minute = datas.getMinutes();

    const textDayWeek = getDayWeek(numWeek);
    const textMonth = getTextMonth(numMes);

    return{ano, numMes, diaMes, numWeek, hour, minute, textDayWeek, textMonth};
}

function getTextMonth(numMes){
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return mes[numMes];
}

function getDayWeek(numWeek){
    const diaWeek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    return diaWeek[numWeek];
}

function addZeroLeft(num){
    // varialde = (condição) ? (se verdadeira) : (se falsa); 
    return ((num < 10) ? `0${num}` : num )
}

output.innerHTML = `${data.textDayWeek}, ${data.diaMes} de ${data.textMonth} de ${data.ano} | ${data.hour}:${addZeroLeft(data.minute)}`;     