Algoritmo "Fatorial com fun��o"
Var
   n,c,rs,r:inteiro
funcao fatorial(var a,b:inteiro):inteiro
inicio
repita
b<-b*a
a<-a-1
ate (a=0)
retorne b
fimfuncao
Inicio
      escreva("fale um n�mero: ")
                    leia(n)
      c<-n
      r<-1
      rs<- fatorial(c,r)
      escreval(r)
Fimalgoritmo