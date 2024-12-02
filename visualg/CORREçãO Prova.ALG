algoritmo "correção pobre"
   var
     i,i2,media: inteiro
     gabarito: vetor [1..10] de caractere
     nomes: vetor [1..3] de caractere
     notas: vetor [1..10] de caractere
     medias: vetor [1..3] de inteiro
   inicio
       para i<- 1 ate 10 faca
                escreva("gabarito da questão",i," :")
                        leia(gabarito[i])
                gabarito[i]<- minusc(gabarito[i])
       fimpara
       para i<- 1 ate 3 faca
         escreval
         escreva ("qual o nome do aluno: ")
                      leia (nomes[i])
               para i2<-1 ate 10 faca
                    escreva ("qual foi a ",i2,"º respota do ",nomes[i],": ")
                            leia(notas[i2])
               fimpara
               para i2<- 1 ate 10 faca
                  se (notas[i2]=gabarito[i2]) entao
                     media<- media+1
                  fimse
               fimpara
               medias[i]<- media
               media<-0
       fimpara
       escreval
       para i<- 1 ate 3 faca
       escreval("média do ",nomes[i]," foi:",medias[i]:3:1)
       fimpara
       
fimalgoritmo