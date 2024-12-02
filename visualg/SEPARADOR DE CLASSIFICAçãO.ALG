Algoritmo "Separador de classificação"
          Var
             cond,s: caractere
             idade,cabelo,condM,condH:inteiro
          Inicio
                repita
                      escreval("=========================")
                      escreval
                      escreva("qual seu sexo [m/f]: ")
                                    leia(s)
                      escreva("qual sua idade: ")
                                    leia (idade)
                      escreval("qual a cor do seu cabelo?")
                      escreval("=========================")
                      escreval("[1] Preto")
                      escreval("[2] Castanho")
                      escreval("[3] Loiro")
                      escreval("[4] Ruivo")
                      escreval("=========================")
                      leia(cabelo)
                      escreval
                      escreva("você quer continuar [s/n]? ")
                      se (s="m") e (idade>18) e (cabelo=2) entao
                         condH<- condH+1
                      fimse
                      se (s="f") e (idade>=25) e (idade<=30) e (cabelo=3) entao
                         condM<- condM+1
                      fimse
                      leia(cond)
                ate(cond="n")
                escreval
                escreval("Total de homens com mais de 18 e cabelos castanhos:",condH)
                escreval("Total de mulheres entre 25 e 30 e cabelos loiros:",condM)
Fimalgoritmo