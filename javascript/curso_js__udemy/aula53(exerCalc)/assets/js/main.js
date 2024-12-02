function criaCalculadora() {
    return {
        display: window.document.querySelector('#diplay'),
        clear: window.document.querySelector('.btn-clear'),


        inicia() {
            this.clickKeyboard();
            this.clickButton();
        },

        clickButton() {
            document.addEventListener('click', function (e) {
                const elemento = e.target;
                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                };
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                };
                if(elemento.classList.contains('btn-del')){
                    this.clearLastDisplay();
                };
                if(elemento.classList.contains('btn-eq')){
                    this.realizaConta();
                };
                
            }.bind(this)) //this vira o pai onde a função foi criada
        },

        btnParaDisplay(texto){
            this.display.value += texto;
        },
        clearDisplay(){
            this.display.value = '';
        },
        clearLastDisplay(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta inválida');
                    return
                }
                this.display.value = conta;
            }catch(e){
                alert('conta inválida');
                return
            }
        },
        clickKeyboard(){
            document.addEventListener('keyup', e=>{
                if(e.keyCode == 13){
                    this.realizaConta();
                }
            })
        },
    };
};

const calculadora1 = criaCalculadora();
calculadora1.inicia();
