algoritmo "quantos valores est�o entre 0 e 10"
     var
        n: inteiro
        cond1,cond3,qn,sip: inteiro
        cond2:  caractere
    inicio
       sip<-0
       escreva("quantos n�meros voc� quer saber se est�o entre 0 e 10: ")
                        leia(qn)
       para cond3<-1 ate qn faca
           escreva("fale um n�mero: ")
                  leia(n)
           se (n<=10) e (n>=0) entao
               cond1<- cond1+1
           fimse
           se(n<=10) e (n>=0) e (n%2=1) entao
                        sip<-sip+n
           fimse
       fimpara
       escreval("o total de n�meros que est�o entre 0 e 10 �",cond1)
       escreval("a soma dos valos �mpares que est�o entre 0 e 10 �",sip)
fimalgoritmo