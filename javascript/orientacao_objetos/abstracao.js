// Entidade, Identidade, Caracteristicas, Ações
/*
    Exemplo:

    Entidade: Carro
    Identidade: x = new Carro()
    Características (atributos): marca, modelo, cor, qtdePortas
    Ações: ligar, acelerar, freirar, desligar

    Entidade: ContaBancaria
    Identidade: x = new ContaBancaria();
    Características: agencia, numeroConta, saldo, limite
    Ações: depositar, sacar, consultaSaldo

    Entidade: Sonho
    Identidade: x = new Sonho()
    Características: tipo, historia, gostaria_sonhar_denovo
    Ações: exibirHistoria

    Retirado do curso: Desenvolvimento Web Completo 2022
*/

    // Class representa o modelo da entidade/objeto. Usaremos o termo objeto (instância do modelo)
    // Constructor
    // This
    // Características = atributos, as ações seriam funções, porém dentro da classe é considerada um metódo
    class ContaBancaria {
        constructor(){
            this.agencia = 1075
            this.numeroConta = 85566
            this.saldo = 100
            this.limite = 500
        }

        depositar(valorDeposito){
            this.saldo += valorDeposito;
        }

        sacar(valorSaque){
            this.saldo -= valorSaque;
        }

        consultarSaldo(){
            return this.saldo;
        }
    }

    // Criando a entidade
    let x = new ContaBancaria(); // Transforme essa classe em um objeto que posso utilizar dentro do meu código

    console.log(x.consultarSaldo());
    x.depositar(400);
    console.log(x.consultarSaldo());
    x.sacar(200);
    console.log(x.consultarSaldo());

/*
    ------------------------------------------------
*/
    class Cadeira {
        constructor(qtde_pernas, giratoria, cor){
            this.qtde_pernas = qtde_pernas;
            this.giratoria = giratoria;
            this.cor = cor;
        }

        girarCadeira(){
            if(this.giratoria === true){
                console.log('Girou');
            } else {
                console.log('A Cadeira não é giratória');
            }
        }
    }

    let cadeira = new Cadeira(4, false, 'rosa');
    cadeira.girarCadeira();

    let cadeiras = Array();
    cadeiras.push(new Cadeira(4, true, 'azul'));
    cadeiras.push(new Cadeira(3, false, 'rosa'));

/*
    ------------------------------------------------
*/
