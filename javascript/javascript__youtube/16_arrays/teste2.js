let nomes_idade = [
    {nome: 'fefe', idade: 17},
    {nome: 'maria', idade: 16},
    {nome: 'fernando', idade: 14},
    {nome: 'manuel', idade: 18},
    {nome: 'joão', idade: 20},
    {nome: 'jorge', idade: 17},
    {nome: 'manuela', idade: 27},
    {nome: 'fernanda', idade: 22},
];

let maior_idade = nomes_idade.filter(cli => cli.idade >= 18);
let menor_idade = nomes_idade.filter(cli => cli.idade < 18);

let maior_idade2 =[];
let control = 0;

maior_idade.forEach ((pessoa) => {
    maior_idade2[control] = pessoa.nome;
    control++;
} );

control = 0;
let menor_idade2 =[];

menor_idade.forEach ((pessoa) =>{
    menor_idade2[control] = pessoa.nome;
    control++
})

console.log("Maior de idade: " + maior_idade2)
console.log("Menor de idade: " + menor_idade2)