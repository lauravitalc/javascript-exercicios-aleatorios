let frutas = ['Abacaxi', 'Maça', 'Uva', 'Melancia']

let [a, b, ,c, d = 'Banana'] = frutas
console.log(a, b, c, d)


let coisas = [['Abacaxi', 'Maça', 'Uva', 'Melancia'], ['Ana', 'Júlia']]
let [,[,y]] = coisas

console.log(y)

// --------------------------------

let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

// é um
// tem um

// array => []
// objeto => {}
let { descricao: t, preco: u, detalhes: {fabricante, modelo}} = produto
console.log(t, u, fabricante)


// --------------------------------

/* let arr = [10,20,30,40,50]

function teste([a, b]){
console.log(a,b)
}

teste(arr) */

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste({a, b}){
    console.log(a,b)
}

teste(obj)

// ------------------------------


let array1 = [10,20,30,40,50,60,70]

let [r, ...resto] = array1

console.log(r)
console.log(resto) 


let objetos = {
    a: 10, b: 20, c: 30, d: 40
}

let{v, ...outros} = objetos

console.log(v)
console.log(outros)