Algoritmo "poi com procedimento"
Var
   n,r:inteiro
procedimento poi(a:inteiro)
inicio
      r<-a%2
   se (r=0) entao
      escreval("par")
   senao
      escreval ("�mpar")
   fimse
fimprocedimento
Inicio
   escreva("n�mero: ")
   leia(n)
   poi(n)
Fimalgoritmo