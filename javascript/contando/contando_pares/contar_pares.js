function contar(){
    var resultado = document.getElementById("resultado");
    var contador = 2;
    while(contador <= 10 ){
        resultado.innerHTML += `${contador} | `;
        contador += 2
        
    }
}