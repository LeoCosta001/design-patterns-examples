// A interface Component define o comportamento para os objetos concretos.
interface Component {
  operation(): string;
}

// A classe ConcreteComponent é uma implementação básica da interface Component.
class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}

// A classe BaseDecorator possui um campo para referenciar um objeto Component
// e a implementação do comportamento é delegada para este objeto.
abstract class BaseDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

// ConcreteDecorators adicionam funcionalidades ao componente, podendo adicionar estado ou
// sobrepor o comportamento do componente.
class ConcreteDecoratorA extends BaseDecorator {
  operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends BaseDecorator {
  operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

/****************
 * CLIENT CODE  *
 ****************/

// O código do cliente pode suportar tanto os componentes simples como os decorados,
// usando a mesma interface de componentes.
function clientCode(component: Component): void {
  console.log(`RESULT: ${component.operation()}`);
}

// Dessa forma, o código do cliente pode ser escrito de maneira agnóstica à maneira
// como os componentes são compostos.
const simple = new ConcreteComponent();
console.log('Client: Eu vou ter um componente simples:');
clientCode(simple); // Saída: "RESULT: ConcreteComponent"
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Agora eu vou ter um componente decorado:');
clientCode(decorator2); // Saída: "RESULT: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))"

export {};
