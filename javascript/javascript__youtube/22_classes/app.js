console.clear();

class Pessoa{
    //propriedades | fields | campos
    nome
    apelido
    idade

    nome_completo(){
        return `${this.nome} ${this.apelido}`
    }
};

let eu = new Pessoa();
let tu = new Pessoa();
eu.nome = "felipe";
eu.apelido = "veiga";
eu.idade = 17;


tu.nome = "vine";
tu.apelido = "veiga";
tu.idade = 17;

console.log(eu.nome_completo());
console.log(tu.nome_completo());