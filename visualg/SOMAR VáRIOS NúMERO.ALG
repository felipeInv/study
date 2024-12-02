Algoritmo "somar vários número"
Var
   n,cond: inteiro
   ns,rs: real
Inicio
      escreva("quantos números você quer somar: ")
      leia(n)
      rs<- 0
      cond<-1
      escreval
      repita
             escreva ("fale",cond,"° número que vc quer somar: ")
              leia(ns)
             cond<- cond+1
             rs<- rs+ns
      ate (cond>n)
      escreval
      escreva("   o resultado da soma deles é",rs)
Fimalgoritmo