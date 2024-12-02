Algoritmo "Contador escolha"
//  
//  
   Var
      n,cont:inteiro
   Inicio
         escreval("================================")
         escreval("super contador")
         repita
         escreval("================================")
         escreval
         escreval("escolha")
         escreval(" [1] contar de 1 a 10")
         escreval(" [2] contar de 10 a 1")
         escreval(" [3] sair")
         escreval("================================")
         escreval
         leia(n)
         escolha (n)
         caso 1
              cont <- 1
              enquanto (cont<=10)faca
                       se (cont<10) entao
                          escreva(cont,"...")
                          cont<- cont+1
                       senao
                          escreval(cont,"...")
                          cont<- cont+1
                       fimse
              fimenquanto

         caso 2
              cont <- 10
              enquanto (cont>=1)faca
                       se (cont>1) entao
                          escreva(cont,"...")
                          cont<- cont-1
                       senao
                          escreval(cont,"...")
                          cont<- cont-1
                       fimse
              fimenquanto
         caso 3
              escreva("saindo...")
         fimescolha
         ate (n=3)
Fimalgoritmo