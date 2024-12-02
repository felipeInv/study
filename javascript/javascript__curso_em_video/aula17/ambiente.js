var amigo = {
            nome: 'Felipe', 
            sexo: 'masculino', 
            idade: 17,
            peso: 60,
            engordar(p){
                    console.log('engordou')
                    this.peso+=p
                }
            }
amigo.engordar(3)
console.log(`Seu nome é ${amigo.nome}, você tem ${amigo.idade} anos, é do sexo ${amigo.sexo} e pesa ${amigo.peso}Kg`)