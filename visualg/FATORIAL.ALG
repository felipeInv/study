Algoritmo "Fatorial"
//  
//  
   Var
      npf,cond,resultado:inteiro
      cont:caractere
   Inicio
         repita
         escreva("fale um número para eu fatorar: ")
                       leia(npf)
         cond<-npf
         resultado<-1
         enquanto (cond>0) faca
               resultado<-resultado*cond
               cond<-cond-1
         fimenquanto
         escreval(resultado)
         escreva("quer continuar? s/n ")
                        leia(cont)
         ate(cont="n")

Fimalgoritmo