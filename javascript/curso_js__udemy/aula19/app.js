// const nome01 = 'Luiz';
// const sobrenome01 = 'Veiga';
// const idade01 = 17;

// const nome02 = 'Vitória';
// const sobrenome02 = 'Nascimento';
// const idade02 = 16;

//criar objeto, utilize as chaves
// const pessoa1 = {
//     nome: "Luiz",
//     sobrenome: "Veiga",
//     Idade: 17,
// };
// const pessoa2 = {
//     nome: "Vitória",
//     sobrenome: "Nascimento",
//     Idade: 16,
// };

//acesse por ponto
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

//função que cria objeto

function criarPessoa(nome, sobrenome, idade){
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        nome,
        sobrenome,
        idade,

        //criar uma função dentro de um objeto
        fala(){
            console.log(`A minha idade é ${this.idade}`);
        },
        incrementaIdade(){
            // this.idade = this.idade + 1;
            this.idade++
        }
    };
}

const pessoa01 = criarPessoa('Luiz', 'Veiga', 17);
const pessoa02 = criarPessoa('Vitória', 'Nascimento', 17);
const pessoa03 = criarPessoa('Vine', 'Veiga', 17);
const pessoa04 = criarPessoa('Duda', 'Veiga', 20);
const pessoa05 = criarPessoa('Maria', 'Veiga', 32);

// console.log(pessoa01.sobrenome);
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
