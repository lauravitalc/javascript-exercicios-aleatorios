/* Podemos implementar uma "fábrica" para a criação dos nossos objetos em tempo de execução
Automizar a criação de objeto */


// CRIAÇÃO ESTATICA

let Bicicleta1 = {
    cor: 'Preto',
    marcha: 'Única',
    aro: 12,
    pedalar(){ console.log('Método pedalar executado')}
}

let Bicicleta2 = {
    cor: 'Branca',
    marcha: 'Única',
    aro: 28,
    pedalar(){ console.log('Método pedalar executado')}
}

console.log(Bicicleta1)
console.log(Bicicleta2)

// --------------------------------------------------------------

// CRIAÇÃO DINAMICA

let BicicletaFactory = function(cor, marcha, aro) {
    // lógica
    // Requisição htttp
    // Resposta http
    return {
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar(){ console.log('Método pedalar executado')}
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26)
console.log(Bicicleta3)


let Bicicleta4 = BicicletaFactory('Azul', 'Única', 18)
console.log(Bicicleta4)
