Algoritmo "Tabuada"
   Var
      npt,cpt,r:real
      verif:inteiro
   Inicio
         escreva("me fale um n�mero para eu mostrar a tabuada dele: ")
                     leia(npt)
         escreva("at� qual n�mero voc� quer a tabuado do",npt,":")
                      leia(cpt)
         verif<-0
         enquanto (verif<=cpt) faca
                  r<- verif*npt
                  escreval(   npt," x ",verif," = ",r)
                  verif<- verif+1
         fimenquanto
Fimalgoritmo