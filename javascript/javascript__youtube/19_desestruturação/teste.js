let felipe_pessoa ={
    nome: "Vitória",
    idade: 16,
    apelido: "Aline",
}

let chaves = Object.keys(felipe_pessoa);

let valores = Object.values(felipe_pessoa);

console.log(chaves);
console.log(valores);


console.log(`A pessoa com o ${chaves[valores.indexOf(felipe_pessoa.nome)]} de ${felipe_pessoa.nome} tem ${felipe_pessoa.idade} anos de ${chaves[valores.indexOf(felipe_pessoa.idade)]} e possui o ${chaves[valores.indexOf(felipe_pessoa.apelido)]} ${felipe_pessoa.apelido}`)