Algoritmo "aprovado"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
   Var
    n1,n2,n3,n4,m, mo, mr: real
   Inicio
   escreval("------NOTA FINAL-----")
   escreval
   escreval("forneça as notas logo abaixo e a média objetiva")
   escreva(" qual a média objetiva: ")
             leia(mo)
   escreva(" qual a média para recuperação: ")
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
      escreva("a média das notas é",m," o que significa que está APROVADO")
   senao
       se (m<mo) e (m>=mr)entao
         escreva("a média das notas é",m," o que significa que está de RECUPERAÇÃO")
       senao
        escreva("a média das notas é",m," o que significa que está REPROVADO")
       fimse
   fimse
Fimalgoritmo