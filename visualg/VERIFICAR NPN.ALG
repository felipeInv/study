Algoritmo "Verificar NPN"
   Var
      qdn, cond1,rn,rp,rnu:inteiro
      n:real
   Inicio
         escreva("quantos números você quer definir se são positivos, negativos ou nulos: ")
                          leia(qdn)
         qdn<-qdn+1
         cond1<-1
         rn<-0
         rp<-0
         rnu<-0
         repita
               escreva("fale o",cond1,"º número: ")
                             leia(n)
               se (n<0) entao
                  rn<- rn+1
               senao
                    se (n>0) entao
                       rp<- rp+1
                    senao
                         rnu<-rnu+1
                    fimse
               fimse
               cond1<-cond1+1
         ate (cond1=qdn)
         escreval("números positivos:",rp)
         escreval("números negativos:",rn)
         escreval("números nulos:",rnu)
         Fimalgoritmo