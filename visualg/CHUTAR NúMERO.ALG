Algoritmo "Chutar N�mero"
   Var
   na,chute:inteiro
   Inicio
   na<- 763
   repita
   escreva("escolha um n�mero de 0 a 1000: ")
                    leia(chute)
   se (chute=na) entao
      escreval("acertou")
   senao
        se (chute>na) entao
           escreval("menos")
        senao
             se (chute<na) entao
                escreval("mais")
             senao
                  escreval("n�mero inv�lido")
             fimse
        fimse
   fimse
   at� (chute=na)
Fimalgoritmo