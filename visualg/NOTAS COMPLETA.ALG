Algoritmo "Notas completa"
   Var
       ma,mt,mr,n1,n2,n3,n4:real
       mt_formatado,smt,amt:caractere
   Inicio
         escreval("-----------------NOTA-BOLETIM-MÉDIA-APROVEITAMENTO-----------------")
         escreval("___________________________________________________________________")
         escreval
         escreval("vou te ajudar a saber a média, o status e o aproveitamento das notas.")
         escreval("___________________________________________________________________")
         escreval
         escreva("qual a média para ser considerado aprovado? ")
                       leia(ma)
         escreva("qual a média para ser considerado recuperação? ")
                        leia(mr)
         escreva("Nota 1: ")
                       leia(n1)
         escreva("Nota 2: ")
                       leia(n2)
         escreva("Nota 3: ")
                       leia(n3)
         escreva("Nota 4: ")
                       leia(n4)
         escreval
         escreval("___________________________________________________________________")
         escreval
         mt<-(n1+n2+n3+n4)/4
         se (mt<mr) entao
            smt<-"Reprovado"
         senao
              se (mt>=ma) entao
                 smt<-"Aprovado"
              senao
                   smt<-"Recuperação"
              fimse
         fimse
         se (mt>=9) entao
            amt<-"A"
         senao
             se (mt<9)e (mt>=8) entao
                amt<-"B"
             senao
                se (mt<8)e (mt>=7) entao
                    amt<-"C"
                senao
                     se (mt<7)e (mt>=6) entao
                        amt<-"D"
                     senao
                          se (mt<6)e (mt>=5) entao
                              amt<-"E"
                          senao
                              amt<-"F"
                          fimse
                    fimse
                fimse
             fimse
         fimse
         escreval("a média das 4 notas é: ......",mt)
         escreval("o status do aluno é:.........",smt)
         escreval("o aproveitamento é:..........",amt)
        escreval("______________________________________")
Fimalgoritmo