Algoritmo "fun�oes no nome"
Var
   nome: caractere
   ql: inteiro
Inicio
      escreva("fale seu nome: ")
              leia(nome)
      escreval("seu nome tem",compr(nome)," letras")
      escreval(maiusc(nome))
      escreval(minusc(nome))
      escreval("a primeira letra � ",copia(nome,1,1)," e o c�digo dela �",asc(copia(nome,1,1)))
      escreval("e a �ltima letra � ",copia(nome,compr(nome),1)," e o c�digo dela �",asc(copia(nome,compr(nome),1)))
Fimalgoritmo