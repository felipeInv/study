Algoritmo "conversor de dolar"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
Var
  Vd,rd,Vr,Rr:real
   dolarReal:caractere
Inicio
      escreval("ol�, vou te ajudar a converter o valor de real em dolar ou vice e versa")
      escreval
      escreva ("voc� tem dolar ou real?(escreva d ou r)")
              leia(dolarReal)
      se (dolarReal = "r") entao
         escreva("me fale o valor em real: ")
                     leia(Vr)
         Rr<-Vr/4.92
         escreva(Vr," real/is � igual a,",Rr," dolar/es")
     senao
          escreva("me fale o valor em dolar: ")
                     leia(Vd)
         rd<-Vd*4.92
         escreva(Vd," dolar/es � igual a,",rd," real/is")
     fimse
Fimalgoritmo