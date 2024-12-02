var valores = [8, 1, 42 , 7 , 4 ,9]
valores.sort(function(a, b) { return a - b; })
for(var c = 0; c < valores.length; c++){
    console.log(`${c} - ${valores[c]}`)
}

console.log(valores.indexOf(31))

for (var c2 in valores){
    console.log(`${c2} - ${valores[c2]}`)
}