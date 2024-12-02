//This -> se dentro de um objeto você estiver em uma função e dentro dessa função, você quiser acessar a alguma chave do objeto, só usar (this.nomedachave);

//Factory Function(Função fábrica)
function pessoa(nome, sobrenome, idade, altura, peso) {
    return {
        nome,
        sobrenome,
        idade,
        //Getter (obter apenas o valor)
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(` `);
            this.nome = valor.shift(); //estou atribuindo o primeiro nome à minha chave "nome";
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },
        fala(assunto = 'sobre nada') {
            return (`${nome} está falando ${assunto}`);
        },
        altura,
        peso,
        //Getter (obter apenas o valor)
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
    };
}
const p1 = pessoa('Felipe', 'Veiga', 18, 1.84, 60);
const p2 = pessoa('Vitória', 'Nascimento', 17, 1.60, 60);
p1.nomeCompleto = "Luiz Felipe Souza";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('Opa'));
// console.log(p1);
// console.log(p2.imc);
