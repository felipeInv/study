console.clear();

let valores = new Set(); /* não pode repetir valores*/

valores.add('felipe');
valores.add('vivi');
valores.add('vine');

console.table(valores)

if(valores.has('felipe')){
    console.log('existe');
}
else{
    console.log('não existe');
};

valores.add('felipe');
valores.add('vivi');
valores.add('vine');

console.table(valores)