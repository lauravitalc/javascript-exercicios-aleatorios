function numero(){
    var numero = parseInt(document.getElementById("n1").value);
    var resultado = document.getElementById("resultado");
    if(numero % 2 == 0){
        resultado.innerHTML = `O número ${numero} é par`;
    } else {
        resultado.innerHTML = `O número ${numero} é impar`;
    }
}