algoritmo "jogo da velha"
var
   m: vetor [1..3, 1..3] de caractere
   l,c,tot,sacabou: inteiro
   mudar,cond: logico
   simb,posicao:caractere
funcao deuvelha():logico
var
   sc: inteiro
inicio
   para l<-1 ate 3 faca
      para c<-1 ate 3 faca
         se (m[l,c]="x") ou (m[l,c]="o") entao
            sc<-sc+0
         senao
            sc<-sc+1
         fimse
      fimpara
   fimpara
   se (sc=0) entao
      retorne verdadeiro
   senao
      escreval("deu velha")
      retorne falso
   fimse
fimfuncao
procedimento mudarsimb(var a:caractere)
inicio
   se (a="x") entao
      a<-"o"
   senao
      a<- "x"
   fimse
fimprocedimento
funcao verifatri(p,s:caractere):logico
var
   achou:logico
inicio
   achou<-falso
   para l<-1 ate 3 faca
      para c<-1 ate 3 faca
         se (m[l,c]=p) e (caracpnum(p)<9) entao
            m[l,c]<- simb
            achou<-verdadeiro
         fimse
      fimpara
   fimpara
   se (achou=verdadeiro)entao
      retorne verdadeiro
   senao
      retorne falso
   fimse
fimfuncao
procedimento preenchervelha()
inicio
   para l<-1 ate 3 faca
      para c<-1 ate 3 faca
         tot<- tot+1
         m[l,c]<- numpcarac(tot)
      fimpara
   fimpara
fimprocedimento
procedimento mostravelha()
inicio
   escreval("+---+---+---+")
   para l<-1 ate 3 faca
      para c<-1 ate 3 faca
         se (c<>3) entao
            escreva("|",m[l,c]:3)
         senao
            escreva("|",m[l,c]:3,"|")
         fimse
      fimpara
      escreval
      escreval("+---+---+---+")
   fimpara
fimprocedimento
inicio
   sacabou<-1
   preenchervelha()
   simb<- "x"
   enquanto (sacabou<=1) faca
      repita
         limpatela
         mostravelha()
         escreva("onde você quer por o ",simb,"? ")
         leia (posicao)
         cond<- verifatri(posicao,simb)
      ate (cond=verdadeiro)
      mudarsimb(simb)
      para c<-1 ate 3 faca
         se (m[1,c]= m[2,c])e(m[2,c]=m[3,c]) entao
            sacabou<- sacabou+1
            limpatela
            mostravelha()
            escreval("jogo finalizado")
         fimse
      fimpara
      //horizontal
      para l<-1 ate 3 faca
         se (m[l,1]= m[l,2])e(m[l,2]=m[l,3]) entao
            sacabou<- sacabou+1
            limpatela
            mostravelha()
            escreval("jogo finalizado")
         fimse
      fimpara
      //diagonal principal
      se (m[1,1]= m[2,2])e(m[2,2]=m[3,3]) entao
         sacabou<- sacabou+1
         limpatela
         mostravelha()
         escreval("jogo finalizado")
      fimse
      //diagonal I-principal
      se (m[1,3]= m[2,2])e(m[2,2]=m[3,1]) entao
         sacabou<- sacabou+1
         limpatela
         mostravelha()
         escreval("jogo finalizado")
      fimse
   fimenquanto
fimalgoritmo