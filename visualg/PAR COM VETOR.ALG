algoritmo "par com vetor"
var
   n: vetor [1..7] de inteiro
   i,p: inteiro
inicio
      p<-0
  para i <- 1 ate 7 faca
       escreva ("fale o",i,"� n�mero: ")
               leia(n[i])
       se (n[i]%2=0) entao
       p<-p+1
       fimse
  fimpara
  escreval("voc� falou",p," n�meros pares")
  escreva("e a posi��o dos n�meros pares que voc� falou �: ")
  para i<- 1 ate 7  faca
  se (n[i]%2=0) entao
    escreva (i)
  fimse
  fimpara
fimalgoritmo