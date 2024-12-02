
let nomes = ['vivi', 'fefe', 'vine', 'lala', 'gugu'];

let [nome1, nome2, nome3, nome4, nome5] = nomes;

console.log(nome1);
console.log(nome2);
console.log(nome3);
console.log(nome4);
console.log(nome5);

console.log('-'.repeat(50));

let nome_completo = 'Luiz Felipe';
let [nome, apelido] = nome_completo.split(' ');

console.log(nome);
console.log(apelido);

console.log('-'.repeat(50));

let [primeiro, ,terceiro] = nomes;

console.log(primeiro);
console.log(terceiro);

console.log('-'.repeat(50));

let nome_unico = ['fefe','vivi'];
let [first, second,,quarto] = nome_unico;

console.log(first);
console.log(second);
console.log(quarto);

console.log('-'.repeat(50));

let usuario = {};

[usuario.nome, usuario.apelido] = "Luiz Felipe".split(' ');

console.log(usuario.nome);
console.log(usuario.apelido);