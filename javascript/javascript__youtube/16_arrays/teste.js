let nomes = ['felipe','vivi','vine'];
let restante = nomes.length


nomes.forEach((nome, posicao) =>{
        restante = restante-1
        console.log(`A pessoa ${nome} ficou na ${posicao+1}ª posição! - ainda faltam ${restante} pessoas`)
    }
)