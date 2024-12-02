algoritmo "jogo da velha"
var
   m: vetor [1..3, 1..3] de caractere
   l,c,tot,xoo,parar: inteiro
   jogar: caractere
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
   para l<-1 ate 3 faca
      para c<-1 ate 3 faca
         tot<- tot+1
         m[l,c]<- numpcarac(tot)
      fimpara
   fimpara
   escreval
   xoo<-0
   parar<- 0
   enquanto (parar=0)e (xoo<9)faca
      xoo<-xoo+1
      se (xoo%2=0) entao
         limpatela
         mostravelha()
         escreva("digite onde você quer por o X: ")
         leia(jogar)
         para l<-1 ate 3 faca
            para c<-1 ate 3 faca
               se (m[l,c]= jogar) entao
                  m[l,c]<- "x"
               fimse
            fimpara
         fimpara
      fimse
      se (xoo%2=1) entao
         limpatela
         mostravelha()
         escreva("digite onde você quer por o O: ")
         leia(jogar)
         para l<-1 ate 3 faca
            para c<-1 ate 3 faca
               se (m[l,c]= jogar) entao
                  m[l,c]<- "o"
               fimse
            fimpara
         fimpara
      fimse
      //vertical
      para c<-1 ate 3 faca
         se (m[1,c]= m[2,c])e(m[3,c]=m[2,c]) entao
            parar<-1
            limpatela
            mostravelha()
            escreval("jogo finalizado")
         fimse
      fimpara
      //horizontal
      para l<-1 ate 3 faca
         se (m[l,1]= m[l,2])e(m[l,2]=m[l,3]) entao
            parar<-1
             limpatela
            mostravelha()
            escreval("jogo finalizado")
         fimse
      fimpara
      //diagonal principal
      se (m[1,1]= m[2,2])e(m[2,2]=m[3,3]) entao
         parar<-1
          limpatela
            mostravelha()
            escreval("jogo finalizado")
      fimse
      //diagonal I-principal
      se (m[1,3]= m[2,2])e(m[2,2]=m[3,1]) entao
         parar<-1
          limpatela
            mostravelha()
            escreval("jogo finalizado")
      fimse
   fimenquanto
    limpatela
            mostravelha()
            escreval("jogo finalizado")
fimalgoritmo