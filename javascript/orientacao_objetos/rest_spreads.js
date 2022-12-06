/* Spread - Para espalhar estruturas de dados
Rest - Para juntar estruturas de dados.
*/ 


// Spread

let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo) // Espalhou a string
console.log([...tituloArtigo]) // Colocando tudo dentro de um array

let lista = ['NodeJS e MongoDB', 'ES6, Typescript e Angular 4']
let lista2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
let lista3 = ['Web Completo', 'Android Completo', ...lista, ...lista2]

console.log(lista3)

let pessoa = { nome: 'Laura', idade: 22}
let clone = { endereco: 'Rua Adam Sandler', ...pessoa}

console.log(clone)


// Rest

function soma(...param){
    let resultado = 0
    param.forEach( v => resultado += v)
    return resultado
}

console.log(soma(2,5,7,89))

function multiplicacao(m, ...p){
let resultado = 0
p.forEach(v => resultado += m * v)
return resultado
}

console.log(multiplicacao(5,3,12,32))