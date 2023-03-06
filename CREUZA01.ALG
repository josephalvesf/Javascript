Algoritmo "Creuza01"

Var
   ano_atual, ano_nasci, idade:Inteiro
   
    reias, dolares, F, C, preco, imposto, emprestimo, parcelas, pagar, D:real
   
Inicio

         escreva("Qual o valor do emprestimo? ")
         leia(emprestimo)
         escreva ("quantas parcelas? ")

         leia(parcelas)
         pagar <- emprestimo +(emprestimo * 0.2)
              D <-pagar / parcelas
         escreval("vou parga ",parcelas, "parcelado ", D, " reias")









      escreva("Qual o preco do produto? US$ ")
      leia(preco)
      imposto<- (preco *60)/100
      escreval("O imposto sera de US$ ", imposto )





     escreva("Qual é a temperatura aqui? ")
     leia(F)
     C <- (F-32)/1.8
     escreval("No Brasil estaria ", C:4:1)
     






  escreva("em que ano nos estamos? ")
  leia(ano_atual)
  escreval("em que ano eu nasci? ")
  leia(ano_nasci)
    idade <- ano_atual - ano_nasci
    escreval("Minha idade sera ", idade," anos")
    
    
    
    
   escreva("Quantos reais eu tenho? R$")
   leia(reias)
     dolares   <-reias/2.20
      escreva("Posso ter US$", dolares )
    
    

  





   
   


Fimalgoritmo