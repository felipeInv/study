Algoritmo "conversor de dolar"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
Var
  Vd,rd,Vr,Rr:real
   dolarReal:caractere
Inicio
      escreval("olá, vou te ajudar a converter o valor de real em dolar ou vice e versa")
      escreval
      escreva ("você tem dolar ou real?(escreva d ou r)")
              leia(dolarReal)
      se (dolarReal = "r") entao
         escreva("me fale o valor em real: ")
                     leia(Vr)
         Rr<-Vr/4.92
         escreva(Vr," real/is é igual a,",Rr," dolar/es")
     senao
          escreva("me fale o valor em dolar: ")
                     leia(Vd)
         rd<-Vd*4.92
         escreva(Vd," dolar/es é igual a,",rd," real/is")
     fimse
Fimalgoritmo