Algoritmo "contar com o repita"
   var
      nf,ni,cond:inteiro
   Inicio
         escreva("me fale de qual número eu tenho que começar: ")
              leia(ni)
         escreva("me fale até que número tenho que contar: ")
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
          escreval(" números iguais")
         fimse

Fimalgoritmo