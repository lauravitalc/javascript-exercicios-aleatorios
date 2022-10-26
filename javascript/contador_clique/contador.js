var contador = 0;
var resultado = document.getElementById("resultado");

function clicar(){
    contador++;
    resultado.innerHTML = "São " + contador + " cliques";
}

function zerar() {
    contador = 0;
    resultado.innerHTML = "Não há cliques";
}