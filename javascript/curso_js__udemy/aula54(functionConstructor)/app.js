// função construtora retorna objeto também, seu nome começa com a letra maiúscula

function Pessoa(nome, sobrenome, idade, id){
    //criando como variável, ela não pode ser acessada fora do objeto com notação de ponto(.);
    const ident = Number(id);
    const falaInterna = function(){
        console.log('sou um método interno');
    }

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.fala = function(){
        return (`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos, meu id é: ${ident}!`);
    };
};

const pessoa1 = new Pessoa('felipe', 'veiga', 18, '01');
const pessoa2 = new Pessoa('vitória', 'nascimento', 17, '02');

console.log(pessoa1.fala());
console.log(pessoa2.fala());