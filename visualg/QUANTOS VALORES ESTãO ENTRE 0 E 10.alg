algoritmo "quantos valores estão entre 0 e 10"
     var
        n: inteiro
        cond1,cond3,qn,sip: inteiro
        cond2:  caractere
    inicio
       sip<-0
       escreva("quantos números você quer saber se estão entre 0 e 10: ")
                        leia(qn)
       para cond3<-1 ate qn faca
           escreva("fale um número: ")
                  leia(n)
           se (n<=10) e (n>=0) entao
               cond1<- cond1+1
           fimse
           se(n<=10) e (n>=0) e (n%2=1) entao
                        sip<-sip+n
           fimse
       fimpara
       escreval("o total de números que estão entre 0 e 10 é",cond1)
       escreval("a soma dos valos ímpares que estão entre 0 e 10 é",sip)
fimalgoritmo