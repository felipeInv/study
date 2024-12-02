function getHours(data){
    if(data && !(data instanceof Date)){
        throw new TypeError(`Esperando Instância de Date`);
    };

    //acima, se a data for enviado e não for uma instância de Date, gere um erro

    if(!data){ //se a data não for enviada, gere uma instância de Date
        data = new Date();
    }

    return data.toLocaleTimeString(`pt-br`,{
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        hour12: false,
    }
    ); //retorna a hora
};

try{
    const data = new Date(`03-04-2007 12:20:19`)
    console.log(getHours(data));
} catch(err){
    //tratar erro
} finally{
    console.log("Tenha um bom dia!")
}
