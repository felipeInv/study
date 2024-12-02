Algoritmo "Boletim de partida de futebol"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
   Var
      t1,t2,rs:caractere
      g1,g2,d:inteiro
   Inicio
   escreva("Fale um dos times que jogaram a partida: ")
                 leia(t1)
   escreva("quantos gols eles fizeram?: ")
                 leia(g1)
   escreva("Fale o outro time que jogou a partida: ")
                 leia(t2)
   escreva("quantos gols eles fizeram?: ")
                 leia(g2)
   d<-abs(g1-g2)
   escolha d
    caso 0
         rs<-"Empate"
    caso 1,2
         rs<-"Normal"
    outrocaso
         rs<-"goleada"
    fimescolha
   escreval
   escreval("___________________________________________________")
   escreval
   escreval("DIFERENÇA: ",d)
   escreval("FOI CONSIDERADO: ",rs)
   fimalgoritmo