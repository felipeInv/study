Algoritmo "N� par com o para"
   Var
      n,cond1,cond:inteiro
      s,cond2: caractere
   Inicio
         para cond<-1 ate 2 faca
         escreva("escolhar o n�mero: ")
                           leia(n)
              cond1<- n%2
              se (cond1 = 0) entao
                 escreval("n�mero par")
              senao
                 escreval("n�mer0o �mpar")
              fimse
              escreva ("quer continuar[s/n]? ")
                      leia(cond2)
              se (cond2= "s") entao
                 cond<-1
              senao
                 cond<-2
              fimse
         fimpara
Fimalgoritmo