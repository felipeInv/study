console.clear();

let valores = new Map([
    ['nome','felipe'],
    ['idade', 17],
    [1,'1111111'],
    [2,'2222222'],
    [3,'3333333'],
]);

console.table(valores);

let objeto1 = {
    nome: 'felipe',
    apelido: 'veiga',
    idade: 17,
};

let valores2 = new Map(Object.entries(objeto1));

console.table(valores2)