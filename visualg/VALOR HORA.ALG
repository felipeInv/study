Algoritmo "valor hora"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
Var
   s,h,d,hfd,vH: real
Inicio
      escreval("ol�, vou te ajudar a achar o valor da sua hora de trabalho.")
      escreval
      escreval("___________________________________________________________")
      escreva("primeiro me fale quantas horas por dia voc� trabalha(exemplo: hora.minutos): ")
                        leia(h)
      hfd<- h+(h/100*3.08)
      escreva("quantos dias por m�s voc� trabalha: ")
                       leia(d)
      escreva("qual o seu sal�rio: ")
                    leia(s)
      vH<-s/(hfd*d)
      escreval
      escreval("___________________________________________________________")
      escreva("o valor da sua hora � aproximadamente",vh,".")
Fimalgoritmo