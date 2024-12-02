algoritmo "dissecando matriz"
var
   m: vetor [1..4, 1..4] de inteiro
   l,c,resposta: inteiro
inicio
   para l<-1 ate 4 faca
      para c<-1 ate 4 faca
         escreva("fale o valor para ficar na posição ",l,",",c,": ")
         leia(m[l,c])
      fimpara
   fimpara
   limpatela
   escreval("mostrando opções")
   escreval("==============================")
   escreval("[1] Mostrar a matriz")
   escreval("[2] Diagonal Principal")
   escreval("[3] Triângulo superior")
   escreval("[4] Triângulo inferior")
   escreval("[5] sair")
   escreval("==============================")
   leia(resposta)
   repita
      se (resposta=1) entao
         limpatela
         para l<- 1 ate 4 faca
            para c<- 1 ate 4 faca
               escreva(m[l,c])
            fimpara
            escreval
         fimpara
         escreval("==============================")
         escreval("[1] Mostrar a matriz")
         escreval("[2] Diagonal Principal")
         escreval("[3] Triângulo superior")
         escreval("[4] Triângulo inferior")
         escreval("[5] sair")
         escreval("==============================")
         leia(resposta)
      senao
         se (resposta=2) entao
            limpatela
            para l<- 1 ate 4 faca
               para c<- 1 ate 4 faca
                  se (l=c) entao
                     escreva(m[l,c])
                  senao
                     escreva("  ")
                  fimse
               fimpara
               escreval
            fimpara
            escreval("==============================")
            escreval("[1] Mostrar a matriz")
            escreval("[2] Diagonal Principal")
            escreval("[3] Triângulo superior")
            escreval("[4] Triângulo inferior")
            escreval("[5] sair")
            escreval("==============================")
            leia(resposta)
         senao
            se (resposta=3) entao
               limpatela
               para l<- 1 ate 4 faca
                  para c<- 1 ate 4 faca
                     se (l<>c) e (l<>4) e (c<>1) entao
                        se (l=3) e (c=2) entao
                           escreva("  ")
                        senao
                           escreva(m[l,c])
                        fimse
                     senao
                        escreva("  ")
                     fimse
                  fimpara
                  escreval
               fimpara
               escreval("==============================")
               escreval("[1] Mostrar a matriz")
               escreval("[2] Diagonal Principal")
               escreval("[3] Triângulo superior")
               escreval("[4] Triângulo inferior")
               escreval("[5] sair")
               escreval("==============================")
               leia(resposta)
            senao
               se (resposta=4) entao
                  limpatela
                  para l<- 1 ate 4 faca
                     para c<- 1 ate 4 faca
                        se (l<>c) e (l<>1) e (c<>4) entao
                           se (l=2) e (c=3) entao
                              escreva("  ")
                           senao
                              escreva(m[l,c])
                           fimse
                        senao
                           escreva("  ")
                        fimse
                     fimpara
                     escreval
                  fimpara
                  escreval("==============================")
                  escreval("[1] Mostrar a matriz")
                  escreval("[2] Diagonal Principal")
                  escreval("[3] Triângulo superior")
                  escreval("[4] Triângulo inferior")
                  escreval("[5] sair")
                  escreval("==============================")
                  leia(resposta)
               senao
                  se (resposta=5) entao
                  limpatela
                     escreva("saindooo....")
                     escreval("==============================")
                  fimse
               fimse
            fimse
         fimse
      fimse
   ate (resposta=5)
fimalgoritmo