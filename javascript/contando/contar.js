function contar(){
    var resultado = document.getElementById('resultado');
    var contando = 1;
    while (contando <= 100) {
        resultado.innerHTML += `${contando} | `;
        contando++; // Corresponde a cont = cont + 1
    }

}