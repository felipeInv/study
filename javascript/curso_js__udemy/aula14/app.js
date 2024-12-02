let num1 = 10; //number
let num2 = 2.4896; //number

console.log(num1.toString()+num2); //interpretar como string
// num1 = num1.toString();
console.log(typeof(num1));
console.log(num1.toString(2), typeof(num1.toString(2))); //interpretar como string binária
console.log(num2.toFixed(2)); //casas decimais
console.log(Number.isInteger(num1)); //conferir se é inteiro
console.log(Number.isInteger(num2)); //conferir se é inteiro
let temp = num1 * "Olá";
console.log(Number.isNaN(temp)); //conferir se é inteiro
temp = num1 * "5";
console.log(Number.isNaN(temp)); //conferir se é inteiro

// IEEE 754-2008

let dec1 = 0.7;
let dec2 = 0.1;

dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2

console.log(dec1);
console.log(Number.isInteger(dec1));


dec1 = parseFloat(dec1.toFixed(2))
console.log(dec1);
console.log(Number.isInteger(dec1));

dec1 += dec2 //dec1 = dec1+dec2
dec1 = parseFloat(dec1.toFixed(2))
console.log(dec1);
console.log(Number.isInteger(dec1));

dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 += dec2 //dec1 = dec1+dec2
dec1 = parseFloat(dec1.toFixed(2))
console.log(dec1);
console.log(Number.isInteger(dec1));

// outro método para resolver

let numero1 = 0.2;
let numero2 = 0.7;
let resultado = numero1+numero2;
console.log(resultado);

resultado = ((numero1*100)+(numero2*100))/100;
console.log(resultado);

console.log(Number(numero1+numero2).toFixed(1))