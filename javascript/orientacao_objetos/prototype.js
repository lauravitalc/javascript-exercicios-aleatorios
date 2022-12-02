// Todos os objetos em Javascript descendem de Object

// Objeto literal

let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo: function() { console.log('Levantar Voo')}
}

// Função Construtora

let AviaoF = function() {
    this.cor = 'Azul',
    this.modelo = 'Boeing 787',
    levantarVoo = function() { console.log('Levantar Voo')}
}

let a2 = new AviaoF();

// Classe

class AviaoC {
    constructor(){
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo() { console.log('Levantar Voo')} 
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)


// _proto_ : Object -> Quando um objeto é criado ele descente de object, nosso prototipo, padrão. Em Javascript todos os objetos descendem de Object. Object é uma função.

