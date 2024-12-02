console.clear();

let empresa_microsoft ={
    nome: 'microsoft',
    ramo: "software",
    produtos: ["word", 'excel', 'pptx'],
    valor: 3000000000000,
};

let {nome, ...resto} = empresa_microsoft

console.log(nome);
console.log(resto);