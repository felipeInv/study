algoritmo "primeiro exercício"
//  
//  
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
   Rq,ResultadoRq,delta,x1,x2,rqdelta,bnegativo:real
   n1,n2,resultadoDaSoma,Na,Nb,Nc,resultado_soma_b_c,rfe,ptI,rtI,a,b,c:inteiro
inicio
   escreval("vamos fazer 5 contas hoje")
   escreval("_________________________________________________")
   escreval
   escreva("escolha um número para eu achar a raíz quadrada: ")
   leia(Rq)
   ResultadoRq<-raizq(Rq)
   escreval("a raíz quadrada de",rq," é",ResultadoRq)
   escreval("_________________________________________________")
   escreval
   escreval("agora eu vou fazer a soma de dois números")
   escreva("fale o primeiro número: ")
   leia(n1)
   escreva("fale o segundo número: ")
   leia(n2)
   resultadoDaSoma<-n1+n2
   escreval("a soma de",n1," e",n2," é igual a",resultadoDaSoma)
   escreval("_________________________________________________")
   escreval
   escreval("agora eu vou fazer uma expressão numérica, a expressão será essa: a*(b+c)")
   escreva("escolha o valor de A: ")
   leia(Na)
   escreva("escolha o valor de B: ")
   leia(Nb)
   escreva("escolha o valor de C: ")
   leia(Nc)
   escreval
   resultado_soma_b_c <-Nb+Nc
   rfe<-resultado_soma_b_c*Na
   escreval("primeiro vamos resolver o que está dentro dos parênteses, B(cujo valor é",Nb,") e C(cujo valor é",Nc,"), o resultado será",resultado_soma_b_c)
   escreval("agora só pegarmos esse resultado e multiplicar por A (cujo valor é",Na,") o resultado final será",rfe)
   escreval("_________________________________________________")
   escreval
   escreval("agora vamos vê algumas curiosidades da divisão")
   escreval("nessa caso, eu irei escolher os 2 números para a gente dividir, esses número serão 7 e o 2")
   escreval("a divisão entre eles seria 3.5, porém existe duas curiosidades que a gente pode tirar disso")
   ptI<-7\2
   rtI<-7%2
   escreval("a parte inteira dessa divisão, será",ptI)
   escreval("e o resto dessa soma se só pudesse usar números inteiros será",rtI)
    escreval("_________________________________________________")
   escreval
   escreval("po último vamos resolver bhaskara")
   escreva ("me fale o valor de A: ")
           leia (a)
   escreva ("me fale o valor de B: ")
           leia (b)
   escreva ("me fale o valor de C: ")
           leia (c)
   delta<-(b^2)-(4*a*c)
   escreval("delta é igual a:",delta)
   escreval
   rqdelta<-RaizQ(delta)
   bnegativo<- b-(2*b)
   x1<- ((bnegativo)+(rqdelta))/(2*a)
   x2<- ((bnegativo)-(rqdelta))/(2*a)
   escreval("x1 ou X-linha é igual a:",x1)
   escreval("e x2 ou X- duas linhas é igual a:",x2)
fimalgoritmo