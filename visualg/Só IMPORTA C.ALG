Algoritmo "Só importa C"
Var
   i,c:inteiro
   soc: vetor [1..3] de caractere
   ncc: vetor [0..3] de caractere
Inicio
   c<-0
   para i<-1 ate 3 faca
      escreva("fale o",i,"º nome: ")
      leia(soc[i])
   fimpara
   para i<-1 ate 3 faca
      se (copia(soc[i],1,1)="c") ou (copia(soc[i],1,1)="C") entao
         c<-c+1
         ncc[c]<-soc[i]
      fimse
   fimpara
   escreval("nome/s com c:",c)
   para i<-1 ate c faca
      escreval (ncc[i])
   fimpara
Fimalgoritmo