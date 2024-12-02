console.clear();

class Pessoa{
    #nome


    constructor(n){
        this.#nome = n;
    }

    setNome(nome){
        if(nome == "felipe"){
            this.#nome = "Felipe Veiga".toUpperCase();
        }
        else{
            this.#nome = nome.toUpperCase();
        }
    }
    getNome(){
        return this.#nome;
    }
    #apresentar_interno(){
        console.log('Nome: '+ this.#nome);
    }
    apresentar(){
        this.#apresentar_interno()
    }
}

let eu = new Pessoa('felipe');

eu.setNome('felipe');

console.log(eu.getNome())

eu.apresentar();