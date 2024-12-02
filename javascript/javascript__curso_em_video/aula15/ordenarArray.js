var lista = [3,7,5,2]
var control = 1
for (c1 = 0 ; c1 < lista.length ; c1++){
    for (c2 = 0 ; c2 < lista.length; c2++){
        if(lista[c1] < lista[c2]){
            control = lista[c1]
            lista[c1] = lista [c2]
            lista [c2] = control
        }
    }
}
console.log(lista)