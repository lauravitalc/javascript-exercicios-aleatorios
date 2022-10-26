function calcular() {
    var number1 = document.getElementById('n1').value;
    var number2= document.getElementById('n2').value;

    var media = (parseInt(number1) + parseInt(number2)) / 2;

    var resultado = document.getElementById('resultado').innerHTML = "A média é: " + media;
}