Algoritmo "calcular idade- pronto"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
Var
   nasceu,ano_atual,idade_dela:inteiro
Inicio
      escreva("em que ano você nasceu? ")
                  leia(nasceu)
      escreva("em que ano estamos? ")
                  leia(ano_atual)
      idade_dela<- ano_atual-nasceu
      se (idade_dela >= 18) entao
         escreval("você tem",idade_dela," de anos, portanto deve por",idade_dela," velas no seu bolo")
         escreval("   e você já maior de idade")
      senao
           escreval(" você tem",idade_dela," de anos, portanto deve colocar",idade_dela," velas no seu bolo.")
           escreval("   e você ainda não é maior de idade.")
      fimse
Fimalgoritmo