algoritmo "listagem com vetor"
var
   nome: vetor [1..3] de caractere
   nota1: vetor [1..3] de real
   nota2: vetor [1..3] de real
   nota3: vetor [1..3] de real
   nota4: vetor [1..3] de real
   media: vetor [1..3] de real
   mediat: real
   i: inteiro
inicio
      mediat<- 0
      para i<-1 ate 3 faca
       escreva("diga o nome do aluno/a: ")
                     leia(nome[i])
       escreva("diga a primeira nota do ",nome[i],": ")
                     leia(nota1[i])
       escreva("diga a segunda nota do ",nome[i],": ")
                     leia(nota2[i])
       escreva("diga a terceira nota do ",nome[i],": ")
                     leia(nota3[i])
       escreva("diga a quarta nota do ",nome[i],": ")
                     leia(nota4[i])
       escreval("____________________________________________________")
       media[i]<- (nota1[i]+nota2[i]+nota3[i]+nota4[i])/4
       limpatela
      fimpara
      para i<- 1 ate 3 faca
      mediat<-mediat+media[i]
      fimpara
      mediat<- mediat/3
      para i<- 1 ate 3 faca
      se (media[i]>=mediat) entao
         escreval(nome[i]:10," média:",media[i]:4:1," e está APROVADO")
      senao
         escreval(nome[i]:10," média:",media[i]:4:1," e está REPROVADO")
      fimse
      fimpara
fimalgoritmo