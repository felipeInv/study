Algoritmo "c�lculo do imc"
Var
   p,a,imc: real
Inicio
   escreval("Ol�! Vou te ajudar a calcular o IMC (�ndice de Massa Corporal). Preciso te fazer apenas duas perguntas.")
   escreval("______________________________")
   escreva("Me fale a altura: ")
   leia(a)
   escreva("Agora me fale o peso: ")
   leia(p)
   imc <- p / (a * a)
   se (imc < 17) entao
      escreval("Seu IMC �", imc, " e voc� est� muito abaixo do peso.")
   senao
        se (imc >= 17) e (imc < 18.5) entao
           escreval("Seu IMC �", imc, " e voc� est� abaixo do peso.")
        senao
             se (imc >= 18.5) e (imc < 25) entao
                escreval("Seu IMC �", imc, " e voc� est� no peso ideal.")
             senao
                  se (imc >= 25) e (imc < 30) entao
                     escreval("Seu IMC �", imc, " e voc� est� com sobrepeso.")
                  senao
                       se (imc >= 30) e (imc < 35) entao
                          escreval("Seu IMC �", imc, " e voc� est� com obesidade.")
                        senao
                             se (imc >= 35) e (imc < 40) entao
                                escreval("Seu IMC �", imc, " e voc� est� com obesidade severa.")
                             senao
                                  escreval("Seu IMC �", imc, " e voc� est� com obesidade m�rbida.")
                             fimse
                        fimse
                  fimse
             fimse
        fimse
   fimse
Fimalgoritmo


as