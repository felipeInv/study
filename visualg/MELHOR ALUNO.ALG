Algoritmo "melhor aluno"
   Var
      qda,cond1,cond2,nota, nota_m:inteiro
      aluno,nome_m:caractere
   Inicio
       escreva("quantos aluno você vai comparar: ")
                leia(qda)
       cond1<-1
       cond2<-0
       enquanto (cond1<=qda) faca
               escreva("qual o nome do",cond1,"º aluno: ")
               leia(aluno)
               escreva ("qual foi a nota de ",aluno,": ")
               leia(nota)
               escreval
               se (nota>cond2) entao
                  nota_m<- nota
                  nome_m<- aluno
               cond1<-cond1+1
               fimse
       fimenquanto
       escreva("o melhor aluno/a foi ",nome_m," com a nota de",nota_m)
Fimalgoritmo