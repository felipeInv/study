const frutas = ["Banana", "Uva", "Manga"];

const pessoa = {
    nome: "Luiz",
    idade: "fruta",
    genero: "masculino",
}

//For in, ler o índice, ou chaves do objetos

for(let index in frutas){
    console.log(index, frutas[index]);
}
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}