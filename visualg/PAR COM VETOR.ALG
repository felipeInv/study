algoritmo "par com vetor"
var
   n: vetor [1..7] de inteiro
   i,p: inteiro
inicio
      p<-0
  para i <- 1 ate 7 faca
       escreva ("fale o",i,"º número: ")
               leia(n[i])
       se (n[i]%2=0) entao
       p<-p+1
       fimse
  fimpara
  escreval("você falou",p," números pares")
  escreva("e a posição dos números pares que você falou é: ")
  para i<- 1 ate 7  faca
  se (n[i]%2=0) entao
    escreva (i)
  fimse
  fimpara
fimalgoritmo