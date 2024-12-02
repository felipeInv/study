//usa-se quando há um método dentro de uma função construtora que será usado em todas as suas instâncias, nesse caso, cada vez que você instanciar um novo objeto, terá novos objetos que possuem dentro de si a mesma linha de código, os métodos, e isso pode prejudicar a perfomance, caso aconteça isso, coloque esse métodos dentro do "prototype";


function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome 
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa('felipe', "veiga");
const pessoa2 = new Pessoa('vitória', "veiga");
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
console.log(Pessoa.prototype)


/*

Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

*/