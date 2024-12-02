algoritmo "triângulos"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
nome      :caractere
eq,es,tri :logico
l1,l2,l3  :real
inicio
escreva("por favor, diga seu nome: ")
leia(nome)
escreval("_________________________")
escreval
escreval("oii ",nome,", hoje eu vou te ajudar a saber se o triângulo é Equilátero(tem todos os lados iguais) ou Escaleno(todos os lados são diferentes)")
escreval("__________________________________________________")
escreval
escreva("para comerçar, me fale o valor do primeiro lado: ")
leia(l1)
escreva ("me fala o valor do segundo lado: ")
leia(l2)
escreva("por último, me fala o valor do terceito lado: ")
leia(l3)
escreval("__________________________________________________")
escreval
tri<-(l1<l2+l3)e(l2<l1+l3)e(l3<l2+l1)
eq<-(l1=l2)e(l2=l3)
es<-(l1<>l2)e(l2<>l3)e(l3<>l2)
escreval("o triângulo é Equilátero?",eq)
escreval("o triângulo é EScaleno?",es)
escreval("com esses valores, ele de fato pode ser um triângulo?",tri)
fimalgoritmo