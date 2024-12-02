Algoritmo "Nº par com o para"
   Var
      n,cond1,cond:inteiro
      s,cond2: caractere
   Inicio
         para cond<-1 ate 2 faca
         escreva("escolhar o número: ")
                           leia(n)
              cond1<- n%2
              se (cond1 = 0) entao
                 escreval("número par")
              senao
                 escreval("númer0o ímpar")
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