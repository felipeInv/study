algoritmo "Detector de pesado"
   var
      np,cond,n:caractere
      kgp,p:real
   procedimento topo()
   inicio
      escreval("=========Detector de pesado=========")
      escreval("a pessoa mais pesada agora é ",np," com",kgp,"kg")
      escreval("===============================================")
   fimprocedimento
   inicio
      np<- "ninguém"
      kgp<-0
      repita
      topo()
      escreva ("qual o nome da pessoa: ")
              leia(n)
      escreva ("qual o peso de ",n,": ")
              leia (p)
      se (p>kgp) entao
         kgp<-p
         np<-n
      fimse
      escreva("quer acrescentar mais algum nome[s/n]? ")
                    leia (cond)
      limpatela
      ate (cond="n")
      topo()
fimalgoritmo