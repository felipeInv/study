Algoritmo "contar"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
   var
      contador_f,contador_i,cond,pular: inteiro
   Inicio
    escreva("fale até que número eu tenho que contar: ")
                  leia(contador_f)
    escreva("fale de qual número eu tenho que começar contar: ")
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
            escreva("valores inválidos")
       fimse
    fimse
Fimalgoritmo