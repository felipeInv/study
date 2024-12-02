// construtor do objeto
console.clear();

function pessoa(nm, ap, tlf){
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;

    this.nome_completo = () =>{
        return `${this.nome} ${this.apelido}`;
    }
    this.alterar_nome = (novo_nome) => {
        this.nome = novo_nome;
    }
}
let cliente = new pessoa ('felipe', "veiga", 990568560);
let cliente2 = new pessoa ('vitória', "aline", 123456789);
let cliente3 = new pessoa ('bruno', "perini", 9987654321);

// console.log(cliente1.nome_completo());

// cliente1.alterar_nome("Felipe");

// console.log(cliente1.nome_completo());

// cliente2.alterar_nome("vivi");

// console.log(cliente3.nome_completo())

// cliente1.estado_civil = "solteiro";

// console.log(cliente1.estado_civil)

console.log(cliente2.nome)