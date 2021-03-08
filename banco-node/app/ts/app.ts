let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

let clienteController = new ClienteController();
clienteController.listar();

const cls:Clientes = new Clientes();
const cl1 = new Cliente('João', '321456','3');
const cl2 = new Cliente('Marta', '654789', '4');
cls.inserir(cl1);
cls.inserir(cl2);

cls.listar().forEach(conta => console.log(conta));
console.log(cls.pesquisar('321456'));
cls.remover('654789');
console.log(cls.listar());
