algoritmo "primeiro exerc�cio"
//  
//  
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
var
   Rq,ResultadoRq,delta,x1,x2,rqdelta,bnegativo:real
   n1,n2,resultadoDaSoma,Na,Nb,Nc,resultado_soma_b_c,rfe,ptI,rtI,a,b,c:inteiro
inicio
   escreval("vamos fazer 5 contas hoje")
   escreval("_________________________________________________")
   escreval
   escreva("escolha um n�mero para eu achar a ra�z quadrada: ")
   leia(Rq)
   ResultadoRq<-raizq(Rq)
   escreval("a ra�z quadrada de",rq," �",ResultadoRq)
   escreval("_________________________________________________")
   escreval
   escreval("agora eu vou fazer a soma de dois n�meros")
   escreva("fale o primeiro n�mero: ")
   leia(n1)
   escreva("fale o segundo n�mero: ")
   leia(n2)
   resultadoDaSoma<-n1+n2
   escreval("a soma de",n1," e",n2," � igual a",resultadoDaSoma)
   escreval("_________________________________________________")
   escreval
   escreval("agora eu vou fazer uma express�o num�rica, a express�o ser� essa: a*(b+c)")
   escreva("escolha o valor de A: ")
   leia(Na)
   escreva("escolha o valor de B: ")
   leia(Nb)
   escreva("escolha o valor de C: ")
   leia(Nc)
   escreval
   resultado_soma_b_c <-Nb+Nc
   rfe<-resultado_soma_b_c*Na
   escreval("primeiro vamos resolver o que est� dentro dos par�nteses, B(cujo valor �",Nb,") e C(cujo valor �",Nc,"), o resultado ser�",resultado_soma_b_c)
   escreval("agora s� pegarmos esse resultado e multiplicar por A (cujo valor �",Na,") o resultado final ser�",rfe)
   escreval("_________________________________________________")
   escreval
   escreval("agora vamos v� algumas curiosidades da divis�o")
   escreval("nessa caso, eu irei escolher os 2 n�meros para a gente dividir, esses n�mero ser�o 7 e o 2")
   escreval("a divis�o entre eles seria 3.5, por�m existe duas curiosidades que a gente pode tirar disso")
   ptI<-7\2
   rtI<-7%2
   escreval("a parte inteira dessa divis�o, ser�",ptI)
   escreval("e o resto dessa soma se s� pudesse usar n�meros inteiros ser�",rtI)
    escreval("_________________________________________________")
   escreval
   escreval("po �ltimo vamos resolver bhaskara")
   escreva ("me fale o valor de A: ")
           leia (a)
   escreva ("me fale o valor de B: ")
           leia (b)
   escreva ("me fale o valor de C: ")
           leia (c)
   delta<-(b^2)-(4*a*c)
   escreval("delta � igual a:",delta)
   escreval
   rqdelta<-RaizQ(delta)
   bnegativo<- b-(2*b)
   x1<- ((bnegativo)+(rqdelta))/(2*a)
   x2<- ((bnegativo)-(rqdelta))/(2*a)
   escreval("x1 ou X-linha � igual a:",x1)
   escreval("e x2 ou X- duas linhas � igual a:",x2)
fimalgoritmo