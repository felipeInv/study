algoritmo "m�dia"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
var
n1,n2,soma:inteiro
resultado:real
inicio
      escreval("ol�, eu vou calcular a m�dia de dois valores para voc�")
      escreval
      escreva("primeiro me fale um n�mero: ")
                        leia(n1)
      escreva("agora me fale outro n�mero: ")
                     leia(n2)
      soma<-n1+n2
      resultado<-soma/2
      escreval("para calcular a m�dia entre",n1," e",n2,", primeiro vamos somar esses dois n�meros, que dar�",soma,".")
      escreval
      escreva("agora vamos dividir essa soma por 2, j� que � a quantidade de n�meros que somamos, o resulrtado ser�",resultado)
fimalgoritmo