let formulario = window.document.getElementById("form");

formulario.addEventListener('submit', function (event) {
    
        event.preventDefault();
        limparOutput()
        
        const inputPeso = event.target.querySelector('#peso');
        const inputAltura = event.target.querySelector('#altura');
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        //validação de dados
        if(!peso || !altura){ //diferente de peso(number) ou altura(number), ou seja, não for um número, também é ativo se estiver vazio
            if(!peso && !altura){
                setOutput(`Altura e peso inválido`, false);
            } else{
                if(!peso){ //diferente de peso(number), ou seja, não for um número
                    setOutput('peso inválido', false);
                }
                if(!altura){ //diferente de altura(number), ou seja, não for um número
                    setOutput('altura inválida', false);
                }
            }
            return // parar função
        }

        const getIMC = calcularIMC(peso, altura);
        const getlevelImc = nivelImc(getIMC);
        
        const resposta = `Seu peso é ${peso} e sua altura é ${altura}, logo seu IMC é: ${getIMC.toFixed(2)}, portanto sua classificação é ${getlevelImc}!`;

        setOutput(resposta, true);
    }
);

function calcularIMC(p, a){
    return p/(a*a);
}

function nivelImc(valorImc){
    const nivel = ["Abaixo do Peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if(valorImc>=40){
        return nivel[5];
    }
    if(valorImc>=35){
        return nivel[4];
    } 
    if(valorImc>=30){
        return nivel[3];
    } 
    if(valorImc>=25){
        return nivel[2];
    } 
    if(valorImc>=18.5){
        return nivel[1];
    } 
    if(valorImc<18.5){
        return nivel[0];
    }
}

function limparOutput(){
    const output = window.document.querySelector('#result');
    output.innerHTML = "";
}

function criaParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo
}

function corFundo(dateValid, p){
    if(dateValid == true){
        p.classList.add(`resultadoValido`)
    } else{   
        p.classList.add(`resultadoInvalido`)
    }
}

function setOutput(mensagem, isValid){

    
    const output = window.document.querySelector('#result');
    
    const paragrafo = criaParagrafo();
    corFundo(isValid, paragrafo);
    paragrafo.innerHTML += mensagem;

    output.appendChild(paragrafo);
}