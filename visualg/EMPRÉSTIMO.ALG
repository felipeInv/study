Algoritmo "empréstimo"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
   VDE,VJ,VT,P,VPP,j:real
Inicio
      escreval("olá vou te ajudar a achar o valor dos juros com e sem parcela")
      escreval
      escreva("qual é a taxa de juros (ponha só o número) ")
                    leia(j)
      escreva("qual será o valor do empréstimo: ")
                    leia(VDE)
      escreva("em quantas vezes você vai pagar: ")
                  leia(P)
      VJ<-VDE*j/100
      VT<-VJ+VDE
      VPP<-VT/P
      escreva(VDE," real/is receberia",VJ," de juros e o valor total ficaria",VT," real/is, e com",P," parcela/s, cada mensalidade ficaria",VPP," real/is")
Fimalgoritmo