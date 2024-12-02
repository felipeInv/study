algoritmo "média"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
n1,n2,soma:inteiro
resultado:real
inicio
      escreval("olá, eu vou calcular a média de dois valores para você")
      escreval
      escreva("primeiro me fale um número: ")
                        leia(n1)
      escreva("agora me fale outro número: ")
                     leia(n2)
      soma<-n1+n2
      resultado<-soma/2
      escreval("para calcular a média entre",n1," e",n2,", primeiro vamos somar esses dois números, que dará",soma,".")
      escreval
      escreva("agora vamos dividir essa soma por 2, já que é a quantidade de números que somamos, o resulrtado será",resultado)
fimalgoritmo