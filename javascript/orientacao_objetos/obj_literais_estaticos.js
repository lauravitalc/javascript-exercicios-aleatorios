/*
Objeto literal ou estático
{
chave/atributo/nome: valor,
verDescricao: function....
}
*/

class Produto {
    constructor(descricao, preco){
        this.descricao = descricao;
        this.preco = preco;
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`);
    }
}

let produto = new Produto('Notebook', 2200)
produto.verDescricao();

// Objeto literal - Nem sempre existe a necessidade de criação de uma classe para criar um objeto.

let produtoLiteral =   {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`);
    }
}

produtoLiteral.verDescricao();

/*
Utilizando Produto Literal
Formulário -> servidor
recupera dados e monta um objeto literal
objt literal -> json -> htttp -> server -> armazena
*/

// Melhorias na notação


let nome = 'Laura'
let idade = 22
let sexo = 'Feminino'
let profissao = 'Estudante'

let objeto = {
    nome, // nome = nome variavel / valor = valor da variaveç
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

objeto.exibirResumo();


let teste = {
    nome: 'Luisa',
    idade: 15
}

console.log(teste)

teste.nome = 'Julia'
teste.idade = 34

console.log(teste)