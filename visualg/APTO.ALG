Algoritmo "apto"
   Var
      n,a,i: inteiro
   Inicio
      escreva("em que ano estamos? ")
                leia(a)
      escreva("em que ano voc� nasceu? ")
                leia(n)
      escreval
      escreval("______________________________________________")
      escreval
      i<- a-n
      se (i>=18) entao
         escreval("voc� tem",i," anos e est� apto para dirigir")
      senao
       escreval("voc� tem",i," anos e n�o est� apto para dirigir")
      fimse
      escreval
      escreval("______________________________________________")
Fimalgoritmo