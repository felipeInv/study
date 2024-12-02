Algoritmo "apto"
   Var
      n,a,i: inteiro
   Inicio
      escreva("em que ano estamos? ")
                leia(a)
      escreva("em que ano você nasceu? ")
                leia(n)
      escreval
      escreval("______________________________________________")
      escreval
      i<- a-n
      se (i>=18) entao
         escreval("você tem",i," anos e está apto para dirigir")
      senao
       escreval("você tem",i," anos e não está apto para dirigir")
      fimse
      escreval
      escreval("______________________________________________")
Fimalgoritmo