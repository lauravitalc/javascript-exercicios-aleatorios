function somar(){
    var resultado = 0;
    for(i in arguments){
        resultado += arguments[i];
    }

    return resultado;
}

console.log(somar(1,5,7,4))