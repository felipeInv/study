Algoritmo "contar com o repita"
   var
      nf,ni,cond:inteiro
   Inicio
         escreva("me fale de qual n�mero eu tenho que come�ar: ")
              leia(ni)
         escreva("me fale at� que n�mero tenho que contar: ")
              leia(nf)
         se (ni>nf) ou (ni<nf) entao
         repita
               se (ni<nf)entao
                escreval(ni)
                 ni<-ni+1
               senao
                    escreval(ni)
                    ni<-ni-1
               fimse
         ate(ni=nf)
         escreval(ni)
         senao
          escreval(" n�meros iguais")
         fimse

Fimalgoritmo