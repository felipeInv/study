function Calculadora(){
    this.display = window.document.querySelector('.display');

    this.iniciar = function(){
        this.clickButton();
        this.pressEnter();
    };
    this.clickButton = ()=>{
        document.addEventListener('click', (e)=>{
            const elemento = e.target;
            if(elemento.classList.contains('btn-num')){
                this.buttonDisplay(elemento.innerText);
            };
            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            };
            if(elemento.classList.contains('btn-del')){
                this.delLastDisplay();
            };
            if(elemento.classList.contains('btn-eq')){
                this.calcDisplay();
            }
        })
    }
    this.buttonDisplay = (valor)=>{
        this.display.value += valor;
        this.display.focus();
    };
    this.clearDisplay = () => this.display.value = '';
    this.delLastDisplay = ()=>{
        this.display.value = this.display.value.slice(0, -1);
    };
    this.calcDisplay = ()=>{
        try{
            let conta =  eval(this.display.value);
            if(!conta){
                alert('conta inválida');
                return
            }
            this.display.value = conta;
        }catch(err){
            alert('conta inválida');
            return
        }
    }
    this.pressEnter= ()=>{
        document.addEventListener('keypress', (event)=>{
            if(event.keyCode == 13){
                this.calcDisplay();
            }
        })
    };
}
const calculadora1 = new Calculadora();
calculadora1.iniciar();
