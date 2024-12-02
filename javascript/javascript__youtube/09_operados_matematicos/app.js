/*

"+" == Adição e concatenação
"-" == Subtração 
"*" == Multiplicação
"/" == Divisão
"%" == Resto da divisão
"**" == Potência

number + number = adição
number + string = concatenação
string + string = concatenação
string + number + number = concatenação
number + number + string = soma e concatenação

Caso ponha um mais ou um menos antes da variável, ele converterá para positivo ou negativo

+true = 1
+false = 0

converter string em número

let valor_a = "10"
let valor_b = "20"

+valor_a

ou

Number(valor_a)

*/

let valor_a = "10"
let valor_b = "20"
console.log(+valor_a + +valor_b)
