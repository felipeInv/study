algoritmo "Função no nome 2.0"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
var
   nome, condL: caractere
   a,b,c,d,ee,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,cond1,cond2,t2:inteiro
inicio
   a<-0
   b<-0
   c<-0
   d<-0
   ee<-0
   f<-0
   g<-0
   h<-0
   i<-0
   j<-0
   k<-0
   l<-0
   m<-0
   n<-0
   o<-0
   p<-0
   q<-0
   r<-0
   s<-0
   t<-0
   u<-0
   v<-0
   w<-0
   x<-0
   y<-0
   z<-0
   cond2<-1
   escreval("escreva uma palavra (em minúsculo): ")
   leia(nome)
   para t2<-compr(nome) ate 1 passo -1 faca
   escreva(copia(nome,t2,1))
   fimpara
   escreval
   escreval("essa palavra tem",compr(nome)," letras.")
   escreval
   para cond1<- 1 ate compr(nome) faca
      escreval (maiusc(copia(nome,cond1,1)),"/",minusc(copia(nome,cond1,1)), " códido-> ",asc(copia(nome,cond1,1)))
   fimpara
   escreva
   repita
   condL<-copia(nome,cond2,1)
   se (condL="a") entao
      a<-a+1
   senao
        se (condL="b") entao
      b<-b+1
   senao
        se(condL="c") entao
      c<-c+1
   senao
        se (condL="d") entao
      d<-d+1
   senao
        se (condL="e") entao
      ee<-ee+1
   senao
        se (condL="f") entao
      f<-f+1
   senao
        se  (condL="g") entao
      g<-g+1
   senao
        se (condL="h") entao
      h<-h+1
   senao
        se (condL="i") entao
      i<-i+1
   senao
        se (condL="j") entao
      j<-j+1
   senao
        se (condL="k") entao
      k<-k+1
   senao
        se (condL="l") entao
      l<-l+1
   senao
        se (condL="m") entao
      m<-m+1
   senao
        se (condL="n") entao
      n<-n+1
   senao
        se (condL="o") entao
      o<-o+1
   senao
        se (condL="p") entao
      p<-p+1
   senao
        se (condL="q") entao
      q<-q+1
   senao
        se (condL="r") entao
      r<-r+1
   senao
        se (condL="s") entao
      s<-s+1
   senao
        se (condL="t") entao
      t<-t+1
   senao
        se (condL="u") entao
      u<-u+1
   senao
        se (condL="v") entao
      v<-v+1
   senao
        se (condL="w") entao
      w<-w+1
   senao
        se (condL="x") entao
      x<-x+1
   senao
        se (condL="y") entao
      y<-y+1
   senao
        se (condL="z") entao
      z<-z+1
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
   fimse
      cond2<-cond2+1
   ate(cond2>compr(nome))
   escreval
   escreval ("quantidade de letra:")
   escreval
   se (a>0)entao
      escreval("A:",a)
   fimse
   se (b>0)entao
      escreval("B:",b)
   fimse
   se (c>0)entao
      escreval("C:",c)
   fimse
   se (d>0)entao
      escreval("D:",d)
   fimse
   se (ee>0)entao
      escreval("E:",ee)
   fimse
   se (f>0)entao
      escreval("F:",F)
   fimse
   se (g>0)entao
      escreval("G:",g)
   fimse
   se (h>0)entao
      escreval("H:",h)
   fimse
   se (i>0)entao
      escreval("I:",i)
   fimse
   se (j>0)entao
      escreval("J:",j)
   fimse
   se (k>0)entao
      escreval("K:",k)
   fimse
   se (l>0)entao
      escreval("L:",l)
   fimse
   se (m>0)entao
      escreval("M:",m)
   fimse
   se (n>0)entao
      escreval("N:",n)
   fimse
   se (o>0)entao
      escreval("O:",o)
   fimse
   se (p>0)entao
      escreval("P:",p)
   fimse
   se (q>0)entao
      escreval("Q:",q)
   fimse
   se (r>0)entao
      escreval("R:",r)
   fimse
   se (s>0)entao
      escreval("S:",s)
   fimse
   se (t>0)entao
      escreval("T:",t)
   fimse
   se (u>0)entao
      escreval("U:",u)
   fimse
   se (v>0)entao
      escreval("V:",v)
   fimse
   se (w>0)entao
      escreval("W:",w)
   fimse
   se (x>0)entao
      escreval("X:",x)
   fimse
   se (y>0)entao
      escreval("Y:",y)
   fimse
   se (z>0)entao
      escreval("Z:",z)
   fimse
fimalgoritmo