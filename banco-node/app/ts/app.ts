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
