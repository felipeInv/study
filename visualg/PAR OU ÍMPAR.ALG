algoritmo "Par ou �mpar"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
var
   n,r:real
inicio
      escreva("vou te ajudar a saber se o n�mero � �mpar ou par, me fale o n�mero: ")
                   leia(n)
      r<- n%2
      se(r=0)entao
         escreva(n," � par.")
      senao
           escreva(n," � �mpar.")
      fimse
fimalgoritmo