Algoritmo "somar v�rios n�mero"
Var
   n,cond: inteiro
   ns,rs: real
Inicio
      escreva("quantos n�meros voc� quer somar: ")
      leia(n)
      rs<- 0
      cond<-1
      escreval
      repita
             escreva ("fale",cond,"� n�mero que vc quer somar: ")
              leia(ns)
             cond<- cond+1
             rs<- rs+ns
      ate (cond>n)
      escreval
      escreva("   o resultado da soma deles �",rs)
Fimalgoritmo