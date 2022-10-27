function adivinhar(){
    var resultado = document.getElementById('resultado');
    var numero = document.getElementById('numero').value;
    var numeroAleatorio = Math.floor(Math.random() * 100); 
    if(numero == numeroAleatorio){
        resultado.innerHTML = `Você adivinhou! O número aleatório era: ${numeroAleatorio}`;
    } else {
        resultado.innerHTML = `Você não adivinhou! O número aleatório era: ${numeroAleatorio}`;
    }
}