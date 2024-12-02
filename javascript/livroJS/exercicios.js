//Soma

/*

const num1 = Number(prompt("Fale um número: "));
const num2 = Number(prompt("Fale outro número: "));
const soma = num1 + num2;
alert(`A soma entre o número ${num1} e ${num2} é: ${soma} `);

*/

//Dobro

/*

let numeroDobrar = Number(prompt("Fale um número"));
let dobro = numeroDobrar*2;
alert(`O dobro do valor ${numeroDobrar} é: ${dobro.toFixed(2)}`);

*/

//Adicional Janta

/*

let valorJanta = Number(prompt(`Qual foi o valor da janta: `));
let adicional = Number(prompt(`De quanto é o adicional: `));
const valorTotal = valorJanta + (valorJanta*(adicional/100));
alert(`O valor total será: R$ ${valorTotal.toFixed(2)}`);

*/

//Horas Viagem

/*

let dias = Number(prompt(`Quantos dias de viagem:`));
let horas = Number(prompt(`Quantas horas de viagem:`));
const horasTotais = horas + (dias*24);
alert(`O total de horas  será: ${horasTotais}`);

*/

//Antecessor e Sucessor

/*

let numero = Number(prompt(`Fale o número:`));
const antecessor = numero-1;
const sucessor = numero+1;
alert(`Antecessor: ${antecessor}, Número: ${numero}, Sucessor: ${sucessor}`);

*/

//Dividir conta

/*

let valorJantaDividir = Number(prompt(`Qual foi o valor da conta:`));
let numPessoas = Number(prompt(`Quantas pessoas irão pagar:`));
let valorPessoas = valorJantaDividir/numPessoas;
alert(`O valor que cada um deve pagar, será: R$ ${valorPessoas.toFixed(2)}`);

*/

//Modalidae Pagamento

/*

const valorProduto = Number(prompt(`Qual o valor do produto:`));
const desconto = Number(prompt(`Qual a porcetangem do valor à vista:`));
const parcela = Number(prompt(`Em quantas vezes pode ser parcelado:`));
const aVista = valorProduto -(valorProduto*(desconto/100));
const valorParcela = valorProduto/parcela;
alert(`Valor à vista: R$ ${aVista.toFixed(2)}, Se for parcelado em ${parcela} vezes, cada parcela ficará R${valorParcela.toFixed(2)}`)

*/


//Média

/*

let nota1 = Number(prompt(`Quanto foi a primeira nota:`));
let nota2 = Number(prompt(`Quanto foi a segunda nota:`));
const media = (nota1+nota2) / 2;
alert(`O valor da média, será: ${media.toFixed(2)}`)

*/