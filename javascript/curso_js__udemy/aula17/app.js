// array são indexados por valores, sendo acessados pelos [colchetes]
let alunos = ['Luiz', 'Maria', 'Júlia', 1, true, null];
console.log(alunos[1]);
console.log(alunos[3]);
console.log(alunos[0]);
alunos[0]='Felipe' //alterar valor
console.log(alunos[0]);
alunos[6] = 'Duda'; //criar valor
console.log(alunos);
console.log(alunos.length); //tamanho do array, lembrando que aqui a contagem inicia em 1
alunos[alunos.length] = "Vitória"; //criar um novo valor, logo após o último    
alunos.push("Vivi"); //criar um novo valor com um método, logo após o último   
alunos.unshift("Vine"); //criar um novo valor com um método, logo antes do primeiro, logo ele passa a ser o primeiro   
console.log(alunos);
let removido_final = alunos.pop(); //remove e retorna o último valor com um método
console.log(alunos, removido_final);
let removido_inicio = alunos.shift(); //remove e retorna o primeiro valor com um método
console.log(alunos, removido_inicio);
delete alunos[2]; //remove o valor e deixa o índice vazio
console.log(alunos);
console.log(alunos[50]); //valor não definido | undefined
console.log(alunos.slice(0,3)); //retorna os valores do intervalos escolhidos, o segundo parâmetro é exclusivo
console.log(alunos.slice(0,-1)); //pode-se também usar valor negativo para contar de trás para frente
console.log(typeof(alunos)); //array é um objeto
console.log(alunos instanceof Array); //verificar se é um array
