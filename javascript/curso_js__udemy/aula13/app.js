//String são indexadas, ou seja, é possível ser iterada, começando pelo index 0
let umaString = "Um texto";
console.log(umaString.concat(' e um outro texto', ' em um lindo dia'));
console.log(umaString.indexOf("t"));
console.log(umaString.lastIndexOf("t"));
console.log(umaString.replace("Um", "Dois")); //muda apenas o primeiro
console.log(umaString.length); //aqui começa do 1
console.log(umaString.slice(3,7+1)); //o último valor é exclusivo
console.log(umaString.slice(3)); //pode-se usar apenas o start
console.log(umaString.slice(-3)); //valor negativo começa do final
console.log(umaString.split(' ')); //separa por um caracter e retorna um array, o caractere será excluído
console.log(umaString.split('t',1)); //quantos resultados você quer
console.log(umaString.toUpperCase()); //maiúsculo
console.log(umaString.toLowerCase()); //minúsculo