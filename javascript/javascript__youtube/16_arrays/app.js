let lista = new Array();
let nomes = ['vivi', 'fefe', 'vine'];

console.log(nomes.length);

let dados =[
    'felipe',
    33,
    true,
    58.50
];

console.log(dados)

let clientes = [
    {nome: 'felipe', idade: 17},
    {nome: 'vivi', idade: 16},
    {nome: 'vine', idade: 17},
]

console.log(clientes[1].idade)

clientes.forEach (cliente =>
    console.log(`O(A) cliente ${cliente.nome} tem ${cliente.idade} anos de idade`)    
)