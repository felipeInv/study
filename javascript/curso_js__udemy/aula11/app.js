console.clear();

/*
Operadores aritméticos

+ = soma e concatenação
- = subtração
* = multiplicação
/ = divisão
** = potência
% = resto da divisão

*/

/*
Precedência

()
**
* / %
+ -

*/

const num1 = '5';
const num2 = 10;

console.log(num1 ** num2)

/*
Incremento

++
--
+=
-=
/=
*=
**=

*/
let contador = 1;
contador++;
contador++;
contador--;
++contador;
console.log(--contador);

let step = 2;
let contandoPulando = 1;
contandoPulando+=step //contandoPulando = contandoPulando + step;
console.log(contandoPulando);
contandoPulando-=step 
console.log(contandoPulando);
contandoPulando*=step 
console.log(contandoPulando);
contandoPulando/=step 
console.log(contandoPulando);

//NaN = Not a Number

const number1 = 10;
let number2 = '5';
let number3 = '5.32';
let number4 = '7.48';
number2 = parseInt(number2);
number3 = parseFloat(number3);
number4 = Number(number4);
console.log(number1*number2);
console.log(number2*number3);
console.log(number3*number4);
console.log(typeof(number2));
console.log(typeof(number3));
console.log(typeof(number4));
