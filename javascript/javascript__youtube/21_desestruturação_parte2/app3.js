console.clear();

let cliente = {
    nome: "Felipe",
    apelido: "Veiga",
    peso: 60,
    profissão: 'dev',
}

let {nome: nome_completo, apelido, peso, profissão: cargo = 'indefinido'} = cliente;

console.log(nome_completo);
console.log(apelido);
console.log(peso);
console.log(cargo);