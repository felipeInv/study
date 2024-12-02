const prompt = require("prompt-sync")();
const remuneracao = Number(prompt("Qual o valor da remuneração inicial: "));
const timeWork = Number(prompt("A quantos anos trabalha na empresa: "));

const quadrieniosFull = Math.floor(timeWork/4);

const remuneracaoEnd = remuneracao*(1+(1/100))**quadrieniosFull;


console.log();
console.log(`Com ${timeWork} anos trabalhados, isso representa ${quadrieniosFull} quadriênios completos`);
console.log(`Logo o salário final será ${remuneracaoEnd}`);