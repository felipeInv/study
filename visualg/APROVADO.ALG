Algoritmo "aprovado"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
   Var
    n1,n2,n3,n4,m, mo, mr: real
   Inicio
   escreval("------NOTA FINAL-----")
   escreval
   escreval("forne�a as notas logo abaixo e a m�dia objetiva")
   escreva(" qual a m�dia objetiva: ")
             leia(mo)
   escreva(" qual a m�dia para recupera��o: ")
             leia(mr)
   escreva(" nota1: ")
             leia(n1)
   escreva(" nota2: ")
             leia(n2)
   escreva(" nota3: ")
             leia(n3)
   escreva(" nota4: ")
             leia(n4)
   escreval
   escreval("--------------------------")
   escreval
   m<-(n1+n2+n3+n4)/4
   se (m>=mo) entao
      escreva("a m�dia das notas �",m," o que significa que est� APROVADO")
   senao
       se (m<mo) e (m>=mr)entao
         escreva("a m�dia das notas �",m," o que significa que est� de RECUPERA��O")
       senao
        escreva("a m�dia das notas �",m," o que significa que est� REPROVADO")
       fimse
   fimse
Fimalgoritmo