let nome = "felipe";
function falaNome(){
    // nome = 'veiga'
    console.log(nome);
}

function usaFalaNome(){
    nome = 'luiz';
    falaNome();
}
usaFalaNome();