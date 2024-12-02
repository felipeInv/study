const prompt = require("prompt-sync")();
const nome = String(prompt("Qual o nome do veículo: "));
const valorTotal = Number(prompt("Qual o valor total do veículo: "));
const entradaPorcentagem = Number(prompt("Qual a porcentagem do valor da entrada (sem o %): "));
const numParcela = Number(prompt("Em quantas parcelas será divida o restante do valor: "));

const valorEntrada = valorTotal * (entradaPorcentagem/100);

const valorParcela = (valorTotal-valorEntrada) / numParcela;



console.log(`Modelo: ${nome}`);
console.log(`Com valor de entrada R$${valorEntrada} e o restante deverá ser pago em ${numParcela} parcela iguais de R$${valorParcela} reais`);