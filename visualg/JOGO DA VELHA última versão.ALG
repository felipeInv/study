Algoritmo "Jogo da Velha"
Var
   l,c,montab:inteiro
   m:vetor[1..3,1..3] de caractere
   simb,posicao: caractere
   spm: logico
funcao verfsubs(p:caractere):logico
var
   cond: logico
inicio
   cond<- falso
   para l<-1 ate 3 faca
      para c<-1 ate 3 faca
         se (p = m[l,c]) entao
            m[l,c]<- simb
            cond<- verdadeiro
         fimse
      fimpara
   fimpara
   retorne cond
fimfuncao
procedimento mostravelha()
inicio
   para l<- 1 ate 3 faca
      para c<- 1 ate 3 faca
         se (c<>3) entao
            escreva (m[l,c]:2,"|")
         senao
            escreva (m[l,c]:2)
         fimse
      fimpara
      escreval
      se (l<>3) entao
         escreval("--+--+--")
      fimse
   fimpara
fimprocedimento
Inicio
   spm<- falso
   simb<- "x"
   montab<-1
   para l<- 1 ate 3 faca
      para c<- 1 ate 3 faca
         m[l,c]<- numpcarac(montab)
         montab<- montab+1
      fimpara
   fimpara
   repita
      repita
         limpatela
         mostravelha()
         escreval
         escreva ("onde você quer por o ",simb,":")
         leia(posicao)
         spm<-  verfsubs(posicao)
      ate (spm = verdadeiro)
      se (simb="x") entao
         simb<-"o"
      senao
         simb<-"x"
      fimse
   ate (l=4)
Fimalgoritmo