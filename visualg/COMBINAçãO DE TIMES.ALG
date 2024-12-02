algoritmo "combinação de times"
   var
      times:vetor [1..3] de caractere
      condTimes,condTimes2: inteiro
   inicio
         para condTimes<- 1 ate 3 faca
              escreva("fale o nome do",condTimes,"º time: ")
                            leia (times[condTimes])
         fimpara
         escreval
         para condTimes<- 1 ate 3 faca
              para condTimes2<- 1 ate 3 faca
                   se (condTimes<>condTimes2) entao
                      escreval(times[condTimes]:12," x ",times[condTimes2])
                   fimse
              fimpara
         fimpara
fimalgoritmo