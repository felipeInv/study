Algoritmo "contar"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
   var
      contador_f,contador_i,cond,pular: inteiro
   Inicio
    escreva("fale at� que n�mero eu tenho que contar: ")
                  leia(contador_f)
    escreva("fale de qual n�mero eu tenho que come�ar contar: ")
                  leia(contador_i)
    se (contador_i < contador_f) entao
       enquanto (contador_i<=contador_f) faca
         escreval(contador_i)
        contador_i<-contador_i+1
       fimenquanto
    senao
         se (contador_i > contador_f) entao
          enquanto (contador_i>=contador_f) faca
           escreval(contador_i)
           contador_i<-contador_i-1
       fimenquanto
       senao
            escreva("valores inv�lidos")
       fimse
    fimse
Fimalgoritmo