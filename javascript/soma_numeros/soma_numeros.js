function calcular() {
var number1 = document.querySelector( '#n1').value;
var number2 = document.querySelector( '#n2').value;
var soma = parseInt(number1) + parseInt(number2); // Os números serão concatenados e não somados, Contra isso podemos utilizar parseInt, para que nossos números sejam interpretados como números e sejam somados e não concatenados. (Informação por: Em busca do código)
var resultado = document.getElementById("resultado").innerHTML = soma;
}