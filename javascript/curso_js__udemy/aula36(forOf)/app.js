//For Of, objetos iteráveis (objetos não são iteráveis)

const nomes = ['Luiz Felipe', "Lucas", "Gerson"];

//For Clássico
console.log("======================================");
for(let i = 0; i < nomes.length; i+=1){
    console.log(i, nomes[i]);
}
//For In
console.log("======================================");
for(let i in nomes){
    console.log(i, nomes[i]);
}

//For Of
console.log("======================================");
for(let valor of nomes){
    console.log(valor);
}

console.log("======================================");
//valor e índice (ForEach = forIn + ForOf) = Executar uma função em cada elemento de um array.
nomes.forEach(function (valor, indice, array){
    console.log(indice, valor, array);
})

//(objetos não são iteráveis)
console.log("======================================");
const pessoa = {
    nome: 'Felipe',
    idade: 18,
    genero: "Masculino",
};
for(let valor of pessoa){
    console.log(valor)
}