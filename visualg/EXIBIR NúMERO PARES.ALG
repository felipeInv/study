Algoritmo "exibir número pares"
   Var
      n,c:inteiro
   Inicio
         escreva("fale um número: ")
                       leia(n)
         se (n%2=0) entao
            para c<- n ate 0 passo -2 faca
                 escreva (c,"...")
            fimpara
         senao
          n<-n-1
          para c<- n ate 0 passo -2 faca
                escreva (c,"...")
          fimpara
         fimse
Fimalgoritmo