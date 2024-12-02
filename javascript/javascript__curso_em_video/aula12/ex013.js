var agora = new Date()
var diaS = agora.getDay()
var hora = agora.getHours()
var nome = 'Felipe'
switch(diaS){
    case 0:
        console.log('Hoje é domingo!')
        break
    case 1:
        console.log('Hoje é Segunda - Feira!')
        break
    case 2:
        console.log('Hoje é Terça - Feira!')
        break
    case 3:
        console.log('Hoje é Quarta - Feira!')
        break
    case 4:
        console.log('Hoje é Quinta - Feira!')
        break
    case 5:
        console.log('Hoje é Sexta - Feira!')
        break
    case 6:
        console.log('Hoje é Sábado!')
        break
}
console.log(`Agora são exatamente ${hora} horas`)
if(hora > 0 && hora<12){
    console.log(`Bom dia ${nome}!`)
}
else if(hora >= 12 && hora < 18){
    console.log(`Boa tarde ${nome}!`)
}
else{
    console.log(`Boa noite ${nome}!`)
}