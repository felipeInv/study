/*let resultado = 1;
for(c = 1; c <= 5; c++){
    resultado = resultado*c
    if(c==2){continue}
    console.log(resultado);
}*/

felipe: for(c1 = 1; c1 <= 3; c1++){
    for(c2 = 1; c2 <= 3; c2++){
        console.log(`${c1} + ${c2} = ${c1+c2}`)
        if(c2 == 2) break felipe; 
    }
}