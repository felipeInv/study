//reduz tudo a um valor só, como segundo parâmetro deve-se definir um valor inicial para o acumulador e sempre retornar o acumulador no bloco para que ele possa assumir esse valor na próxima iteração;

/*
const numeros = [50, 3, 25, 34, 64, 7, 19, 5, 6, 2, 19, 6, 28];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    // console.log(acumulador);
    return acumulador;
}, 0)

console.log(total);



const par = numeros.reduce(function(acumulador, valor){
    if(valor%2 == 0){
        acumulador.push(valor);
    }
    return acumulador;
}, []);

console.log(par);


const dobro = numeros.reduce((acumulador, valor)=>{
    acumulador.push(valor*2);
    return acumulador;
}, [])

console.log(dobro);
*/



const pessoas = [
    { nome: 'Luiz', Idade: 18 },
    { nome: 'Vitória', Idade: 17 },
    { nome: 'Vine', Idade: 17 },
    { nome: 'Duda', Idade: 20 },
    { nome: 'Pricila', Idade: 42 },
    { nome: 'Felipe', Idade: 24 },
];

const moreYears = pessoas.reduce(function(acumulador, valor){
    if(valor.Idade > acumulador.Idade){
        return valor; //o valor passará a ser o valor do acumulador na próxima iteração;
    }
    return acumulador; //o acumulador passará a ser o valor do acumulador na próxima iteração;
})

console.log(moreYears);