// A interface Strategy declara a interface usada em todas as estratégias de um contexto.
interface Strategy {
  execute(data: string): string;
}

// As classes ConcreteStrategy implementam diferentes variações do algoritmo definido pela interface Strategy.
class ConcreteStrategyA implements Strategy {
  public execute(data: string): string {
    return `ConcreteStrategyA: Manipulando dados ${data}`;
  }
}

class ConcreteStrategyB implements Strategy {
  public execute(data: string): string {
    return `ConcreteStrategyB: Manipulando dados ${data}`;
  }
}

// A classe Context mantém uma referência a uma das estratégias e comunica-se com este objeto apenas via interface Strategy.
class Context {
  private _strategy: Strategy;

  constructor(strategy: Strategy) {
    this._strategy = strategy;
  }

  // O Context permite substituir uma estratégia associada em tempo de execução.
  public setStrategy(strategy: Strategy): void {
    this._strategy = strategy;
  }

  public executeStrategy(data: string): string {
    return this._strategy.execute(data);
  }
}

/****************
 * CLIENTE CODE *
 ****************/

// O código do cliente trabalha com o Context e as estratégias concretas através da interface base (Strategy).
// Isso permite a intercambialidade das estratégias em tempo de execução.
function clientCode(context: Context, data: string): void {
  console.log('Client: Estratégia está sendo executada.');
  console.log(context.executeStrategy(data));
}

// A aplicação escolhe a estratégia concreta e a passa para o contexto.
const context = new Context(new ConcreteStrategyA());
console.log('App: Executado com a ConcreteStrategyA.');
clientCode(context, 'teste'); // Saída: "ConcreteStrategyA: Manipulando dados teste"

console.log('');

context.setStrategy(new ConcreteStrategyB());
console.log('App: Executado com a ConcreteStrategyB.');
clientCode(context, 'teste'); // Saída: "ConcreteStrategyB: Manipulando dados teste"

export {};
