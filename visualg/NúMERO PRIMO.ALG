Algoritmo "Número primo"
   Var
      n,cond1,r:inteiro
      r2:caractere
   Inicio
         escreva("qual número você quer descobrir o fatorial: ")
                       leia(n)
         se(n=2)ou(n=1) entao
                 escreval("primo")
         senao
         cond1<- 2
         repita
           r <- n % cond1
           se (r=0) entao
              r2 <- "não primo"
           senao
              r2 <- "primo"
           fimse
           cond1 <-cond1+1
         ate(r2="não primo") ou (cond1=n)
         fimse
         escreval (r2)
Fimalgoritmo