class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: string;

    constructor(nome: string, cpf: string, conta: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get conta(): string {
        return this._conta;
    }

    set nome(value: string) {
        this._nome = value;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    set conta(value: string) {
        this._conta = value;
    }

    toString():string{
        return `Nome: ${this.nome} - CPF: ${this.cpf} - Conta: ${this.conta}`;
    }
}