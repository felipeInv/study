let felipe_pessoa ={
    nome: "Felipe",
    idade: 17,
    apelido: "Veiga",
}

for(let [key, valor] of Object.entries(felipe_pessoa)){
    console.log(`${key} - ${valor}`);
}