Algoritmo "empr�stimo"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
var
   VDE,VJ,VT,P,VPP,j:real
Inicio
      escreval("ol� vou te ajudar a achar o valor dos juros com e sem parcela")
      escreval
      escreva("qual � a taxa de juros (ponha s� o n�mero) ")
                    leia(j)
      escreva("qual ser� o valor do empr�stimo: ")
                    leia(VDE)
      escreva("em quantas vezes voc� vai pagar: ")
                  leia(P)
      VJ<-VDE*j/100
      VT<-VJ+VDE
      VPP<-VT/P
      escreva(VDE," real/is receberia",VJ," de juros e o valor total ficaria",VT," real/is, e com",P," parcela/s, cada mensalidade ficaria",VPP," real/is")
Fimalgoritmo