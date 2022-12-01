let Carro = function(){
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMax = 180

    this.acelerar = function(){
        //this.velocidadeAtual += 10
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMax){
            velocidade = this.velocidadeMax
        }

        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }
    
    this.setVelocidadeAtual = function(velocidadeAtual){
        return this.velocidadeAtual = velocidadeAtual
    }
}

let carros = new Carro()

console.log(carros.getVelocidadeAtual())
carros.acelerar()
console.log(carros.getVelocidadeAtual())
carros.acelerar()
console.log(carros.getVelocidadeAtual())
carros.acelerar()
console.log(carros.getVelocidadeAtual())
carros.acelerar()
console.log(carros.getVelocidadeAtual())
carros.acelerar()
console.log(carros.getVelocidadeAtual())
carros.velocidadeMax = 280
console.log(carros.getVelocidadeAtual())

// ---------------------------------------------------------

let Carro2 = function(){
    var velocidadeMax = 180
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0

    this.acelerar = function(){
        //this.velocidadeAtual += 10
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMax){
            velocidade = velocidadeMax
        }

        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }
    
    this.setVelocidadeAtual = function(velocidadeAtual){
        return this.velocidadeAtual = velocidadeAtual
    }
}

let carros2 = new Carro2()

console.log(carros2.getVelocidadeAtual())
carros2.acelerar()
console.log(carros2.getVelocidadeAtual())
carros2.acelerar()
console.log(carros2.getVelocidadeAtual())
carros2.acelerar()
console.log(carros2.getVelocidadeAtual())
carros2.acelerar()
console.log(carros2.getVelocidadeAtual())
carros2.acelerar()
console.log(carros2.getVelocidadeAtual())