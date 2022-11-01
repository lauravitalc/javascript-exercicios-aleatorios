// No Javascript é aplicado à arrays, funciona como uma função. Serve para o propósito de repetição. Indice precisa ser numérico.

var meu_array = ['Amor', 'Paixão', 'Raiva', 'Tristeza', 'Indiferença'];

meu_array.forEach(function(valor, indice){
    console.log('Indice: ' + indice + " Valor: " + valor )
})
