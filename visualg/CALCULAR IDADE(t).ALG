Algoritmo "calcular idade- pronto"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
Var
   nasceu,ano_atual,idade_dela:inteiro
Inicio
      escreva("em que ano voc� nasceu? ")
                  leia(nasceu)
      escreva("em que ano estamos? ")
                  leia(ano_atual)
      idade_dela<- ano_atual-nasceu
      se (idade_dela >= 18) entao
         escreval("voc� tem",idade_dela," de anos, portanto deve por",idade_dela," velas no seu bolo")
         escreval("   e voc� j� maior de idade")
      senao
           escreval(" voc� tem",idade_dela," de anos, portanto deve colocar",idade_dela," velas no seu bolo.")
           escreval("   e voc� ainda n�o � maior de idade.")
      fimse
Fimalgoritmo