let felipe_pessoa ={
    nome: "Vitória",
    idade: 16,
    apelido: "Aline",
}

let chaves = [];
let valores = [];

for(let [key, valor] of Object.entries(felipe_pessoa)){
    chaves = key;
    valores = valor
}

console.log(chaves);
console.log(valores);


console.log(`A pessoa com o ${chaves[valores.indexOf(felipe_pessoa.nome)]} de ${felipe_pessoa.nome} tem ${felipe_pessoa.idade} anos de ${chaves[valores.indexOf(felipe_pessoa.idade)]} e possui o ${chaves[valores.indexOf(felipe_pessoa.apelido)]} ${felipe_pessoa.apelido}`)