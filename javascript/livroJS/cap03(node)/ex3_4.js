const prompt = require('prompt-sync')();

const pesoKg = Number(prompt("Qual o pesa da ração em (Kg): "));
const consumo= Number(prompt("Qual o consumo diário em grama: "));

const pesoG = pesoKg*1000;
const dias = Math.floor(pesoG/consumo);

const sobra = pesoG%consumo;

console.log(`Com ${pesoG} gramas de ração e um consumo de ${consumo} gramas, a ração durará ${dias} dia(s) e sobrará ${sobra}`);