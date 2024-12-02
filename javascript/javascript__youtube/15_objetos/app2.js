// objeto com literal do objeto

let cliente = {
    nome: "felipe",
    apelido: 'veiga',
    telefone: 123456789,
    estado_civil: 'solteiro',

    /*nome_completo: function(){
        return `${this.nome} ${this.apelido}`;
    },
    alterar_nome: function(novo_nome){
        this.nome = novo_nome;
    },*/
}

// console.log(cliente1.nome_completo());

// cliente1.alterar_nome("Felipe");

// console.log(cliente1.nome_completo());

// console.log("estado_civil" in cliente1)

//  delete cliente1.estado_civil

// // console.log("estado_civil" in cliente1)

// if("estado_civil" in cliente1){
//     console.log("Existe")
// }
// else{
//     console.log("não existe")
// }

for (key in cliente){
    console.log(key + " = " + cliente[key])
}

