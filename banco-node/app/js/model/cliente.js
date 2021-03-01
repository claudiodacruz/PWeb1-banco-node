class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    get conta() {
        return this._conta;
    }
    set nome(value) {
        this._nome = value;
    }
    set cpf(value) {
        this._cpf = value;
    }
    set conta(value) {
        this._conta = value;
    }
    toString() {
        return `Nome: ${this.nome} - CPF: ${this.cpf} - Conta: ${this.conta}`;
    }
}
