//cada valor possui um índice que começa do 0;


const nomes = ['Felipe', "Vitória", "Maria", 'Patrícia']; // array literal
// String, Objetos,  Funções, Números;
console.log(nomes);
const nomes2 = new Array('Vanessa', "Lucas", "Marcelo"); // array literal
console.log(nomes2);
nomes[2] = 'Fernanda'; // substituir valor
console.log(nomes);
delete nomes[2] //deleta valor sem alterar índice;
console.log(nomes);

console.log('');
console.log('=============================================');
console.log('');

//No Array, os valores são apssados por referência, ou seja, caso queira "copiar" um valor, ele apenas pegará a referência daquele valor, então tudo que fizer em um arry, impactará o outro
const nomes3 = ['vine', 'duda', 'pricila'];
console.log(nomes3);
const nomes4 = nomes3;
console.log(nomes4);
nomes3[2] = 'pri pri';
console.log(nomes3);
console.log(nomes4);
nomes4[2] = 'pri a pri';
console.log(nomes3);
console.log(nomes4);


console.log('');
console.log('=============================================');
console.log('');

nomes.pop(); //retira o última valor
console.log(nomes);

console.log('');
console.log('=============================================');
console.log('');

const novo = [...nomes]; //copia apenas os valores, sem referência;
novo[1] = 'Vivi';  
console.log(novo);
console.log(nomes.length) //pegar tamanho do array

console.log('');
console.log('=============================================');
console.log('');

nomes[2] = 'Patrícia';
const valueLastRemove = nomes.pop(); //remove o último valor e retorna ele, alterando o índice;
console.log(valueLastRemove);
console.log(nomes);

const valueFirstRemove = nomes.shift(); //remove e retorna o primeiro valor, alterando o índice;
console.log(valueFirstRemove);
console.log(nomes); 

nomes.push('vine', 'pricila'); //adicionar valores ao fim do array
console.log(nomes); 

nomes.unshift('Felipe', 'Patrícia'); //adicionar valores ao início do array
console.log(nomes); 

console.log('');
console.log('=============================================');
console.log('');

console.log(nomes); 
const nomesSlice = nomes.slice(2,4) //retorna um array com valores escolhidos; (índice de início, índice após o final(+1))
console.log(nomes); 
console.log(nomesSlice); 
const nomesSliceLast = nomes.slice(0, -2) //quero retorna os 2 últimos valores;
console.log(nomesSliceLast); 

console.log('');
console.log('=============================================');
console.log('');

const nome = 'luiz felipe veiga';
const arrayNome = nome.split(' '); //separa a string por espaço(' '), e retorna um array;
console.log(arrayNome);

const novoNome = arrayNome.join(' '); //transforma um array em uma string, o parâmetro é o que vai separar o array(' ');
console.log(novoNome);