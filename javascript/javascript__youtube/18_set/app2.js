console.clear();

let felipe = {nome: 'felipe', idade: 17};
let vitoria = {nome: 'vivi', idade: 16};
let vine = {nome: 'vine', idade: 17};

let valores = new Set([felipe, vitoria, vine])

console.log(valores)

valores.forEach(valor => {
    console.log(valor.nome);
})
