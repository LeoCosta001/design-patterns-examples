// Subsistemas complexos
class Subsystem1 {
  operation1(): string {
    return 'Subsystem1: Pronto!';
  }

  operationN(): string {
    return 'Subsystem1: Go!';
  }
}

class Subsystem2 {
  operation1(): string {
    return 'Subsystem2: Prepare-se!';
  }

  operationZ(): string {
    return 'Subsystem2: Fire!';
  }
}

// Classe Facade fornece uma interface simples para operações complexas dos subsistemas
class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(
    subsystem1: Subsystem1 = new Subsystem1(),
    subsystem2: Subsystem2 = new Subsystem2(),
  ) {
    this.subsystem1 = subsystem1;
    this.subsystem2 = subsystem2;
  }

  operation(): string {
    console.log('Facade: Iniciando subsistemas:');
    console.log(this.subsystem1.operation1()); // Saída: "Subsystem1: Pronto!"
    console.log(this.subsystem2.operation1()); // Saída: "Subsystem2: Prepare-se!"
    console.log('Facade: Iniciando operações complexas dos subsistemas:');
    console.log(this.subsystem1.operationN()); // Saída: "Subsystem1: Go!"
    console.log(this.subsystem2.operationZ()); // Saída: "Subsystem2: Fire!"
    return 'Facade: Execução completa!';
  }
}

/****************
 * CLIENTE CODE *
 ****************/

function clientCode(facade: Facade): void {
  console.log(facade.operation()); // Saída: "Facade: Execução completa!"
}

// O código do cliente pode ter parte ou todos os subsistemas já criados.
// Neste caso, ele apenas usa a Facade, que simplifica a interação.
const facade = new Facade();
clientCode(facade);

export {};
