//IIFE -> Immediately invoked fuction expression

//protege suas váriais do escopo global
/*
function qualquerCoisa(){
    console.log('oi')
};
qualquerCoisa();
*/
(function(idade, peso, altura){
    const sobrenome = "Veiga"
    function criarNome(nome){
        return(nome + " " + sobrenome);
    }
    function falarNome(){
        console.log(criarNome("felipe"));
    }
    falarNome();
    console.log(idade, peso, altura)
})(18, 60, 1.84);