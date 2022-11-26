/* Reutilizável, Manuntenção 
Termos como super classe e sub classe, classes especializadas, classe pai e filha, etc.
*/

class Animal {
    constructor(){
        this.cor = '';
        this.tamanho = null;
        this.peso = null;
    }

    dormir(){
        console.log('dormir');
    }

}
class Cachorro extends Animal{
    constructor(){
        super();
        this.orelhas = 'Grandes';
    }

    correr(){
        console.log('correr');
    }

    rosnar(){
        console.log('rosnar');
    }
}

class Passaro extends Animal{
    constructor(){
        super();
        this.bico = 'Curto';
    }

    voar(){
        console.log('voar');
    }

}

class Papagaio extends Passaro {
    constructor(){
        super()
        // this.cor = '';
        // this.tamanho = '';
        // this.bico = '';
        this.saberFalar = true;
    }

    falar(){
        console.log('falar');
    }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

console.log(cachorro, passaro)
cachorro.dormir();
passaro.dormir();
papagaio.dormir();
papagaio.falar();