
var resultado = document.getElementById("resultado");
function gerar(){
    numero = Math.floor(Math.random() * 100); // Math Floor para retirar os decimais.
    resultado.innerHTML = `O número aleatório é: ${numero}`;
}

function limpar(){
    numero = null;
    resultado.innerHTML = "Limpo";
}