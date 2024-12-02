//pode alterar os valores do array;
//o número de retorno vai ser igual ao tamanho do array, você pode retornar qualquer coisa, porém também consegue iterar pode cada alor do array;

/*
const numeros = [50, 3, 25, 34, 64, 7, 19, 5, 6, 2, 19, 6, 28];
const numDobro = numeros.map(function(valor, indice){
    return valor*2;
});

console.log(numDobro);
*/












// para não alterar o objeto original com o map, crie uma várivel dentro da função no map, copie o objeto para ela com o "rest operator" e retorne ela

const pessoas = [
    { nome: 'Luiz', Idade: 18 },
    { nome: 'Vitória', Idade: 17 },
    { nome: 'Vine', Idade: 17 },
    { nome: 'Duda', Idade: 20 },
    { nome: 'Pricila', Idade: 42 },
    { nome: 'Felipe', Idade: 24 },
];

const nomePessoas = pessoas.map(valor =>{
    return valor.nome;
});

console.log(nomePessoas);

const novoPessoas = pessoas.map(valor =>{
    // delete valor.nome;
    return { idade: valor.Idade }

});

console.log(novoPessoas);


const pessoasID = pessoas.map((valor, indice)=>{
    const newObjt = {...valor};
    newObjt.id = indice;
    return newObjt;
});
console.log(pessoas);
console.log(pessoasID);