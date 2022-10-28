var objetos = Array('Cadeira', 'Impressora', 'Garfo');
var resultado = document.getElementById('resultado');

function adicionar(){
    var item = document.getElementById('item').value;
    if(item == ''){
        alert('Informe um valor válido');
    } else if(item !== ''){
        objetos.push(item);
        document.getElementById('item').value = ''
    }

    resultado.innerHTML = objetos;
}

function ordenar() {
    objetos.sort()
    console.log(objetos)
    resultado.innerHTML = objetos;
}


