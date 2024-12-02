Algoritmo "valor hora"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
Var
   s,h,d,hfd,vH: real
Inicio
      escreval("olá, vou te ajudar a achar o valor da sua hora de trabalho.")
      escreval
      escreval("___________________________________________________________")
      escreva("primeiro me fale quantas horas por dia você trabalha(exemplo: hora.minutos): ")
                        leia(h)
      hfd<- h+(h/100*3.08)
      escreva("quantos dias por mês você trabalha: ")
                       leia(d)
      escreva("qual o seu salário: ")
                    leia(s)
      vH<-s/(hfd*d)
      escreval
      escreval("___________________________________________________________")
      escreva("o valor da sua hora é aproximadamente",vh,".")
Fimalgoritmo