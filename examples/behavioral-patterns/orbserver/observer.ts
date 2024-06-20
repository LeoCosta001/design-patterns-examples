// A interface Observer declara um conjunto de métodos para notificar objetos observadores.
interface Observer {
  update(subject: Subject): void;
}

// A interface Subject declara um conjunto de métodos para gerenciar os objetos observadores.
abstract class Subject {
  private _observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this._observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex > -1) {
      this._observers.splice(observerIndex, 1);
    }
  }

  // Este método deve ser chamado dentro (e no final) de todos os métodos que atualizam o estado da classe "ConcreteSubject".
  public notifyObservers(): void {
    for (const observer of this._observers) {
      observer.update(this);
    }
  }

  // Método que atualiza o estado da classe "ConcreteSubject".
  public abstract changeState(): void;
}

// A classe ConcreteSubject mantém os estados de interesse para vários objetos ConcreteObserver.
class ConcreteSubject extends Subject {
  public state: number = Math.floor(Math.random() * (10 + 1));

  public changeState(): void {
    this.state = Math.floor(Math.random() * (10 + 1));
    this.notifyObservers();
  }
}

// As classes ConcreteObserver reagem ao estado da classe ConcreteSubject quando o mesmo está listado como um observador.
class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 5) {
      console.log('ConcreteObserverA: Reagiu ao evento.');
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log('ConcreteObserverB: Reagiu ao evento.');
    }
  }
}

/***************
 * CLIENT CODE *
 ***************/

// O código do cliente pode trabalhar tanto com a classe do sujeito concreto quanto com as classes dos observadores concretos.
// O cliente deve estar ciente de que ao alterar o estado do sujeito, ele também executará o método "notifyObservers()" que, por sua vez, chamará o método "update()" de todos os observadores.
// O cliente deve estar ciente que o método "update()" de cada observador pode ter uma implementação diferente para cada observador.
function clientCode(subject: Subject): void {
  console.log(
    'Client: Não estou ciente da implementação dos observadores, quero apenas mudar o estado do sujeito.',
  );
  subject.changeState();
}

console.log(
  'App: Inicializado com a classe ConcreteSubject e ConcreteObserverA.',
);
const concreteSubject1 = new ConcreteSubject();
const observerA = new ConcreteObserverA();
concreteSubject1.addObserver(observerA);
clientCode(concreteSubject1); // Saída (Se "state < 5"): "ConcreteObserverA: Reagiu ao evento."

console.log('');

console.log(
  'App: Inicializado com a classe ConcreteSubject e ConcreteObserverB.',
);
const concreteSubject2 = new ConcreteSubject();
const observerB = new ConcreteObserverB();
concreteSubject2.addObserver(observerB);
clientCode(concreteSubject2); // Saída (Se "state === 0 or state >= 2"): "ConcreteObserverB: Reagiu ao evento."

export {};
