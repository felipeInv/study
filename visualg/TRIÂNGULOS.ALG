algoritmo "tri�ngulos"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
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
escreval("oii ",nome,", hoje eu vou te ajudar a saber se o tri�ngulo � Equil�tero(tem todos os lados iguais) ou Escaleno(todos os lados s�o diferentes)")
escreval("__________________________________________________")
escreval
escreva("para comer�ar, me fale o valor do primeiro lado: ")
leia(l1)
escreva ("me fala o valor do segundo lado: ")
leia(l2)
escreva("por �ltimo, me fala o valor do terceito lado: ")
leia(l3)
escreval("__________________________________________________")
escreval
tri<-(l1<l2+l3)e(l2<l1+l3)e(l3<l2+l1)
eq<-(l1=l2)e(l2=l3)
es<-(l1<>l2)e(l2<>l3)e(l3<>l2)
escreval("o tri�ngulo � Equil�tero?",eq)
escreval("o tri�ngulo � EScaleno?",es)
escreval("com esses valores, ele de fato pode ser um tri�ngulo?",tri)
fimalgoritmo