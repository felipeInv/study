Algoritmo "cálculo do imc"
Var
   p,a,imc: real
Inicio
   escreval("Olá! Vou te ajudar a calcular o IMC (Índice de Massa Corporal). Preciso te fazer apenas duas perguntas.")
   escreval("______________________________")
   escreva("Me fale a altura: ")
   leia(a)
   escreva("Agora me fale o peso: ")
   leia(p)
   imc <- p / (a * a)
   se (imc < 17) entao
      escreval("Seu IMC é", imc, " e você está muito abaixo do peso.")
   senao
        se (imc >= 17) e (imc < 18.5) entao
           escreval("Seu IMC é", imc, " e você está abaixo do peso.")
        senao
             se (imc >= 18.5) e (imc < 25) entao
                escreval("Seu IMC é", imc, " e você está no peso ideal.")
             senao
                  se (imc >= 25) e (imc < 30) entao
                     escreval("Seu IMC é", imc, " e você está com sobrepeso.")
                  senao
                       se (imc >= 30) e (imc < 35) entao
                          escreval("Seu IMC é", imc, " e você está com obesidade.")
                        senao
                             se (imc >= 35) e (imc < 40) entao
                                escreval("Seu IMC é", imc, " e você está com obesidade severa.")
                             senao
                                  escreval("Seu IMC é", imc, " e você está com obesidade mórbida.")
                             fimse
                        fimse
                  fimse
             fimse
        fimse
   fimse
Fimalgoritmo


as