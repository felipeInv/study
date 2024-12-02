algoritmo "Par ou Ímpar"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
   n,r:real
inicio
      escreva("vou te ajudar a saber se o número é ímpar ou par, me fale o número: ")
                   leia(n)
      r<- n%2
      se(r=0)entao
         escreva(n," é par.")
      senao
           escreva(n," é ímpar.")
      fimse
fimalgoritmo