function calculos(){
    var resultado = document.getElementById('resultado');
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var select = document.getElementById('select').value;

    var soma = n1 + n2;
    var subtrair = n1 - n2;
    var multiplicar = n1 * n2;
    var dividir = n1 / n2;

    switch(select){
        case 'somar':
            resultado.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}`
            break;
        case 'subtrair':
            resultado.innerHTML = `A subtração entre ${n1} e ${n2} é ${subtrair}`
            break;
        case 'multiplicar':
            resultado.innerHTML = `A multiplicação entre ${n1} e ${n2} é ${multiplicar}`
            break;
        case 'dividir':
            resultado.innerHTML = `A divisão entre ${n1} e ${n2} é ${dividir}`
            break;
    }

}