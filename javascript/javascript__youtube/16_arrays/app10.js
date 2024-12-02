let nomes_tel = [
    {nome: 'fefe', idade: 17},
    {nome: 'vine', idade: 17},
    {nome: 'vivi', idade: 16},
];

// let cliente1 = nomes_tel.find(cliente => cliente.idade == 17);
// console.log(cliente1);

// let cliente2 = nomes_tel.findIndex(cliente => cliente.nome == "fefe");
// console.log(cliente2);

let cliente3 = nomes_tel.filter(cliente => cliente.idade == 17)
console.log(cliente3);