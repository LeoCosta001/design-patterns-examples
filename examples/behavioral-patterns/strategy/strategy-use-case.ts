// (Strategy) A interface RouteStrategy define a assinatura para o método que todas as estratégias de rota devem implementar.
interface RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string;
}

// (ConcreteStrategy) Implementações concretas da interface RouteStrategy para diferentes tipos de cálculo de rota.
class FastestRouteStrategy implements RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string {
    return `Calculando a rota mais rápida de ${startPoint} para ${endPoint}`;
  }
}

class EconomicRouteStrategy implements RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string {
    return `Calculando a rota mais econômica de ${startPoint} para ${endPoint}`;
  }
}

class ScenicRouteStrategy implements RouteStrategy {
  calculateRoute(startPoint: string, endPoint: string): string {
    return `Calculando a rota mais turística de ${startPoint} para ${endPoint}`;
  }
}

// (Context) A classe RouteCalculator usa uma estratégia de RouteStrategy para calcular a rota.
class RouteCalculator {
  private _strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this._strategy = strategy;
  }

  // Permite mudar a estratégia em tempo de execução.
  public setStrategy(strategy: RouteStrategy): void {
    this._strategy = strategy;
  }

  public calculateRoute(startPoint: string, endPoint: string): string {
    return this._strategy.calculateRoute(startPoint, endPoint);
  }
}

/****************
 * CLIENTE CODE *
 ****************/

// O código do cliente pode configurar o RouteCalculator com diferentes estratégias de rota.
function clientCode(
  routeCalculator: RouteCalculator,
  startPoint: string,
  endPoint: string,
): void {
  console.log('Client: Calculando rota...');
  console.log(routeCalculator.calculateRoute(startPoint, endPoint));
}

const routeCalculator = new RouteCalculator(new FastestRouteStrategy());
console.log('App: Calculando a rota mais rápida.');
clientCode(routeCalculator, 'Ponto A', 'Ponto B'); // Saída: "Calculando a rota mais rápida de Ponto A para Ponto B"

console.log('');

routeCalculator.setStrategy(new EconomicRouteStrategy());
console.log('App: Calculando a rota mais econômica.');
clientCode(routeCalculator, 'Ponto A', 'Ponto B'); // Saída: "Calculando a rota mais econômica de Ponto A para Ponto B"

console.log('');

routeCalculator.setStrategy(new ScenicRouteStrategy());
console.log('App: Calculando a rota mais turística.');
clientCode(routeCalculator, 'Ponto A', 'Ponto B'); // Saída: "Calculando a rota mais turística de Ponto A para Ponto B"

export {};
