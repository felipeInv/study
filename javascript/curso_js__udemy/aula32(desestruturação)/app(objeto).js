const pessoa = {
    nome: "Felipe",
    sobrenome: 'Veiga',
    idade: 18,
    // casado: true,
    endereco: {
        rua: "Catão",
        bairro: "Pavuna",
        numero: 135,
    },
    
}

// atribuição via desestruturação, pegar o valor da chave "nome" que esteja no objeto "pessoa" e atribua ela a uma variável chamada "nome"
const { nome } = pessoa;
console.log(nome);

//caso uma chave não exista, há como deixar um valor default
const { sobrenome, casado = false } = pessoa;
console.log(sobrenome, casado);

//pegar o valor de uma chave, porém criar uma varável com nome diferente
const { idade: anoNasc  } = pessoa;
console.log(anoNasc)

//pegar valores de chave dentro de objetos queestão dentro de objetos
const {endereco: {rua: r, numero = 0}} = pessoa;
console.log(r, numero)

//pegar objeto completo dentro de objeto
const { endereco } = pessoa
console.log(endereco)

//pegar o "rest"
const {nome: temp, ...resto} = pessoa
console.log(resto)