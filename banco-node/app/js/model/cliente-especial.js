class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
    }
    inserir(dep) {
        this.dependentes.push(dep);
    }
}
