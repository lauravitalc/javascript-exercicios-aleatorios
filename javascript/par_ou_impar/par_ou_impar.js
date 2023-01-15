// function numero(){
//     var numero = parseInt(document.getElementById("n1").value);
//     var resultado = document.getElementById("resultado");
//     if(numero % 2 == 0){
//         resultado.innerHTML = `O número ${numero} é par`;
//     } else {
//         resultado.innerHTML = `O número ${numero} é impar`;
//     }
// }

function parOuImpar(n){
    (n % 2 == 0) ? console.log('O número é par') : console.log('o número é impar');
}

parOuImpar(45)
parOuImpar(44);