/* Reutilizável, Sobscrita de métodos */
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
class Avestruz extends Passaro {
    constructor(){
        super('Grande', 'Branco e Preto', 250, 15000);
    }

    enterrarCabeca(){
        console.log('Enterrar a cabeça');
    }

    voar(){
        console.log('Não sabe voar');
    }
}

let papagaio = new Papagaio(true, 'Verde', 25, 350);
console.log(papagaio);
papagaio.voar();

let avestruz = new Avestruz();
avestruz.enterrarCabeca();
avestruz.voar();