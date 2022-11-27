class Animal {
    constructor(cor, tamanho, peso){
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }

    dormir(){
        console.log('dormir');
    }

}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso);
        this.bico = bico;
    }

    voar(){
        console.log('voar');
    }

}

class Papagaio extends Passaro {
    constructor(saberFalar, cor, tamanho, peso){
        super('Médio', cor, tamanho, peso)
        this.saberFalar = saberFalar;
    }

    falar(){
        console.log('falar');
    }
}

let papagaio = new Papagaio(true, 'Verde', 25, 350);
console.log(papagaio)

let papagaio2 = new Papagaio(false, 'Amarelo', 15, 150);
console.log(papagaio2)