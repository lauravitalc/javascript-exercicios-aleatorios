function calcular(){
    var ano = parseInt(document.getElementById('ano').value);
    var resultado = document.getElementById('resultado');

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();

    var calculoIdade = anoAtual - ano;
    resultado.innerHTML = `O ano atual é: ${anoAtual}. O ano que você nasceu é ${ano}. Você nasceu há ${calculoIdade} anos atrás `;
}