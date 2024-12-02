var agora = new Date()
var hora = agora.getHours()
var nome = 'Felipe'
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