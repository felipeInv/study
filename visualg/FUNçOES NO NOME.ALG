Algoritmo "funçoes no nome"
Var
   nome: caractere
   ql: inteiro
Inicio
      escreva("fale seu nome: ")
              leia(nome)
      escreval("seu nome tem",compr(nome)," letras")
      escreval(maiusc(nome))
      escreval(minusc(nome))
      escreval("a primeira letra é ",copia(nome,1,1)," e o código dela é",asc(copia(nome,1,1)))
      escreval("e a última letra é ",copia(nome,compr(nome),1)," e o código dela é",asc(copia(nome,compr(nome),1)))
Fimalgoritmo