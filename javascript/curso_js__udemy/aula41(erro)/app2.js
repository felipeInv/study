try{
    //executada quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e não deu erro',);
    console.log('Fechei o arquivo');
    
    try{
        console.log('Continuei usando o sistema');
        console.log('deu alguma erro', a);
    } catch{
        console.log(`Tratei o erro`)
    } finally{
        console.log('Finalizei de usar o arquivo')
    }

} catch(err){
    //executada quando há erros
    console.log('Tratei o erro');
} finally{
    // excutado sempree por último
    console.log('Fechei o arquivo');
}