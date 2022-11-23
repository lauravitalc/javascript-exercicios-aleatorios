/* Seguro, Reutilizável
    Dar visibilidade
    Metódos privados e públicos
    Criação de camada de segurança, evitando que aplicação acesse recursos privados do objeto.
    Permite que metódos e atributos sejam herdados por outros objetos (herança)
    Operadores de visibilidade ainda não suportados pelo javascript.
    */

class Tv {
    constructor() {
        this._relacaoCanais = Array(2, 4, 5, 7, 10);
        this._canalAtivo = 5;
        this._volume = 10;
    }
    // Get
    // canalAtivo vira pseudovariavel.
    get canalAtivo(){
        return this._canalAtivo;
    }
    //Set
    set canalAtivo(canal){
        let x = this._relacaoCanais.indexOf(canal)

        if(x !== -1){
            this._canalAtivo = canal;
        }
    }
}

let tv = new Tv();
tv.canalAtivo = 56;
console.log(tv.canalAtivo);