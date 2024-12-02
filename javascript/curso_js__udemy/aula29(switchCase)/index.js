const data = new Date();
const diaSemana = data.getDay(); //número do dia da semana
const textDayWeek = getDayWeekText(diaSemana); //Texto do dia da semana
console.log(`${diaSemana} - ${textDayWeek}`); //Exibir número e textp do dia da semana

function getDayWeekText(diaSemana){
    let diaSemanaTexto; 
    switch(diaSemana){
        case 0: 
            diaSemanaTexto = "Domingo"
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = "Segunda-Feira"
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = "Terça-Feira"
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = "Quarta-Feira"
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = "Quinta-Feira"
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = "Sexta-Feira"
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = "Sábado"
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "Valor da semana Inválido"
            return diaSemanaTexto;
    }
}

const outroDia = new Date(`2006-09-06 19:15:33.601`);
const numOutroDia = outroDia.getDay();
const textOutrodia = getDayWeekText(numOutroDia);

const outroDia1 = new Date(`2007-04-03 19:15:33.601`);
const numOutroDia1 = outroDia1.getDay();
const textOutrodia1 = getDayWeekText(numOutroDia1);


console.log(`${numOutroDia} - ${textOutrodia}`); //Exibir número e textp do dia da semana
console.log(`${numOutroDia1} - ${textOutrodia1}`); //Exibir número e textp do dia da semana