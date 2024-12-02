console.clear();

let nomes = new Set(['fefe', 'vivi', 'vine']);

for (chave of nomes.keys()){
    console.log(chave);
}

console.log('-'.repeat(20))

for (chave of nomes.values()){
    console.log(chave);
}

for (chave of nomes.entries()){
    console.log(chave);
}