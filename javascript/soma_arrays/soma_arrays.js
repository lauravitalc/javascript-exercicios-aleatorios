function somaArray(array){
    var soma = 0;
    for(i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma;
}

var arrayNumeros = [1, 5, 70, 46, 32, 86, 945];
var arrayNumeros = somaArray(arrayNumeros);

console.log(arrayNumeros);