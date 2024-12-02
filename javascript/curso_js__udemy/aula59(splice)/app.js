//altera a função 

const nomes = ['Felipe', "Pricila", "Vitória", "Duda", "Vine"];
//nomes.splice(qual índice começará a modificação, quantos elementos quer remover, qual elemento quer adicionar, qual elemento quer adicionar, qual elemento quer adicionar,... );

//obs.: os elementos será colocados a partir dos retirados;

/*
console.log(nomes);
nomes.splice(2,2,"luiz", 'veiga');
console.log(nomes);
*/
/*
//pop, tirar último valor (retorna valor removido);
const removeLast = nomes.splice(-1,1);
console.log(nomes);
console.log(removeLast);

//shif, tira primeiro valor (retorna valor removido);
const removeFirst = nomes.splice(0,1)
console.log(nomes);
console.log(removeFirst);

//push, põe um novo valor no final
const newLast = nomes.splice(nomes.length,0,'vivi');
console.log(nomes);

//unshift, põe um novo valor no início
const newFirst = nomes.splice(0,0,'Felipe');
console.log(nomes);

*/


//No primeiro parâmetro do splice, você pode por número negativo, o que indica que ele começará a conta de trás para frente (o último índice vira -1 e assim por diante)

//Number.MAX_VALUE, é o maior número que existe no Javascrpit, então você pode usar ele no segundo parâmetro para deletar toda o array a partir de um elemento(no primeiro índice)


//com os 3 parâmetros voc~e consegue trocar os valores, adiocionano novos, apenas escolhendo: onde começar, qual intervalor remover, o que por no lugar;