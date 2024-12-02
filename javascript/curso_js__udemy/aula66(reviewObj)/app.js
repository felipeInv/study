//Literal (são valores que você mesmo colocou de forma direta);

//Uma string Literal é as aspas e crase: "",'',``;
//Um array literal é feito com colchetes;
//Um número literal é um número que você colocou em uma váriavel
//Função literal é feito com "Function";

//mas todos esses tem construtores
/*
const pessoa = {
    nome: 'Luiz Felipe',
    sobrenome: "Veiga Souza",
};

const chave = 'nome';
const chave2 = 'sobrenome';

//pode-se usar um valor dinâmico para acessar a chave do objeto, usando: obejto[valor dinâmico]; 

console.log(pessoa.nome, pessoa[chave2]);
console.log(pessoa[chave], pessoa.sobrenome);
*/




//Construtor de Obejto;
/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz Felipe';
pessoa1.sobrenome = 'Veiga Souza';
pessoa1.idade = 18;

const pessoa2 = new Object();
pessoa2.nome = 'Marcus Vinicius';
pessoa2.sobrenome = 'Veiga Miranda';

//Apagar chave
// delete pessoa1.nome

//função dentro do objeto;
pessoa1.nomeCompleto = function(){
    return(`${this.nome} ${this.sobrenome}`);
};
pessoa1.getDateNasc = function(){
    let data = new Date();
    return data.getFullYear()-this.idade;
};

for(let chave in pessoa1 ){
    console.log(pessoa1[chave]);
};

*/
/*
//Factory Funtion

function criaPessoa(nome, sobrenome){
    return{
        // nome: nome, ou
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        },
    }
}

let pessoa3 = criaPessoa("Felipe", "Veiga");
console.log(pessoa3.nomeCompleto);
*/

//Constructor Function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); //line 105;
};

//a palavra new retorna um novo objeto e faz a palavra "this" refenciar esse novo objeto;
const pessoa4 = new Pessoa("vitória", "Nascimento"); 
const pessoa5 = new Pessoa("Felipe", "Veiga");
pessoa5.nome = 'Luiz'; //o "const" não é alterado, apenas o valor do seu valor;
console.log(pessoa4);
console.log(pessoa5);

/*

O que significa sem abstração

const pessoa5 = (endereço de memória) que leva aos valores, esses valores podem ser alterados;
o que não pode é mudar o endereço de memória, ou seja:
const pessoa5 = (novo endereço), ou no caso;
const pessoa5 = new Pessoa("vitória", "Nascimento"); 
const pessoa5 = new Date();

*/

//Abaixo function com array também;
//Travar o objeto para que não consiga alterar nem mesmo os valores;
Object.freeze(pessoa5);
pessoa5.sobrenome = 'souza';
console.log(pessoa5);

//travar qualquer objeto oriundo de um construtor;
//por dentro do construtor o seguinte código
    //Object.freeze(this);