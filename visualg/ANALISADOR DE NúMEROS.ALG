Algoritmo "analisador de números"
   Var
      m: real
      c,c2,n,s,d5,d2,nulo:inteiro
   Inicio
         s<-0
         d5<-0
         d2<-0
         nulo<-0
         escreva ("quantos valores você quer analizar: ")
                 leia(C)
         para c2<- 1 ate c faca
              escreva("fale o",c2,"º valor: ")
                            leia(n)
              s<-s+n
              se (n%5=0) e (n>0) entao
                 d5<-d5+1
              fimse
              se (n%2=0) entao
               d2<-d2+n
              fimse
              se (n=0) entao
                 nulo<-nulo+1
              fimse
         fimpara
         m<-s/c
         escreval ("A soma entre os valores é:",s)
         escreval ("A média entre os valores é:",m)
         escreval ("Valores divisiveis por cinco:",d5)
         escreval ("Valores nulos:",nulo)
         escreval ("soma dos valores pares:",d2)
Fimalgoritmo