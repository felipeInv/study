Algoritmo "Chutar Número"
   Var
   na,chute:inteiro
   Inicio
   na<- 763
   repita
   escreva("escolha um número de 0 a 1000: ")
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
                  escreval("número inválido")
             fimse
        fimse
   fimse
   até (chute=na)
Fimalgoritmo