console.clear();

let valores = new Map();
valores.set('nome', 'felipe');
valores.set('idade', 17);
valores.set(1,'111111');
valores.set(2,'222222');
valores.set(3,'333333');

console.table(valores);

console.log(valores.get(1));
console.log(valores.get('idade'));

if(!valores.has('apelido')){
    console.log(`Não existe`);
}
else{
    console.log("existe");
};

valores.delete(2);
console.table(valores);
console.log(valores.size);

valores.clear();
console.table(valores);
console.log(valores.size);