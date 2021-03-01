class ClienteEspecial extends Cliente{

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: string) {
        super(nome, cpf,conta);
    }

    inserir(dep: Cliente) : void {
        this.dependentes.push(dep);
    }
}