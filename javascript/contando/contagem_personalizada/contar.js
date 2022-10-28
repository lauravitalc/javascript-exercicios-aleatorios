function contar(){
    var resultado = document.getElementById("resultado")
    var numero1 = Number(document.getElementById("n1").value);
    var numero2 = Number(document.getElementById("n2").value);
    var contador;

    if(numero1 < numero2) {
        contador = numero1;
        while(contador <= numero2){
            resultado.innerHTML += `${contador} | `;
            contador++
        }
    } else if(numero2 < numero1){
        contador = numero1;
        while(contador >= numero2){
            resultado.innerHTML += `${contador} | `;
            contador--
        }

    }
}