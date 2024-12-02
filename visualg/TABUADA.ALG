Algoritmo "Tabuada"
   Var
      npt,cpt,r:real
      verif:inteiro
   Inicio
         escreva("me fale um número para eu mostrar a tabuada dele: ")
                     leia(npt)
         escreva("até qual número você quer a tabuado do",npt,":")
                      leia(cpt)
         verif<-0
         enquanto (verif<=cpt) faca
                  r<- verif*npt
                  escreval(   npt," x ",verif," = ",r)
                  verif<- verif+1
         fimenquanto
Fimalgoritmo