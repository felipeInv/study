console.clear();

class Pessoa {
    // nome
    // apelido

    constructor(n, i){
        this.nome = n;
        this.idade = i;
    }


    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
};

let eu = new Pessoa('felipe', 17);
eu.nome = 'vine'
console.log(eu.apresentar())