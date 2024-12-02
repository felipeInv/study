algoritmo "Fibonnacci com função"
var
   v1,v2,co,pf:inteiro
funcao proximofibo(var a,b:inteiro):inteiro
var
   v3:inteiro
inicio
   v3<-a+b
   a<-b
   b<-v3
   co<-co+1
   retorne v3
fimfuncao
inicio
   v1<-0
   escreva(v1,"...")
   v2<-1
   escreva(v2,"...")
   enquanto (co<20) faca
      pf<- proximofibo (v1,v2)
      escreva(pf,"...")
   fimenquanto
fimalgoritmo