// (Observer) A interface WeatherObserver define a assinatura para o método que os objetos observadores devem implementar.
interface WeatherObserver {
  update(subject: Weather): void;
}

// (Subject) A interface Weather define a assinatura para os métodos que os objetos sujeitos devem implementar.
abstract class Weather {
  private _observers: WeatherObserver[] = [];

  public addObserver(observer: WeatherObserver): void {
    this._observers.push(observer);
  }

  public removeObserver(observer: WeatherObserver): void {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex > -1) {
      this._observers.splice(observerIndex, 1);
    }
  }

  public notifyObservers(): void {
    for (const observer of this._observers) {
      observer.update(this);
    }
  }

  public abstract changeWeather(): void;
}

// (ConcreteSubject) Contém um estado de interesse para os observadores (os que tem a interface "WeatherObserver" implementada).
class WeatherData extends Weather {
  public state = 'sunny';

  public changeWeather(): void {
    this.state = this.state === 'sunny' ? 'rainy' : 'sunny';
    this.notifyObservers();
  }
}

// (ConcreteObserver) Reagem ao estado do WeatherData (ConcreteSubject).
class UserInterface implements WeatherObserver {
  public update(subject: Weather): void {
    if (subject instanceof WeatherData) {
      console.log(`UserInterface: O tempo mudou para ${subject.state}.`);
    }
  }
}

class LoggingSystem implements WeatherObserver {
  public update(subject: Weather): void {
    if (subject instanceof WeatherData) {
      console.log(
        `LoggingSystem: Registrando a mudança de tempo para ${subject.state}.`,
      );
    }
  }
}

class ThirdPartyService implements WeatherObserver {
  public update(subject: Weather): void {
    if (subject instanceof WeatherData) {
      console.log(
        `ThirdPartyService: Enviando notificação de mudança de tempo para ${subject.state}.`,
      );
    }
  }
}

/***************
 * CLIENT CODE *
 ***************/

// O código do cliente cria um objeto ConcreteSubject, adiciona observadores a ele e muda o estado do ConcreteSubject.
function clientCode(): void {
  const weather = new WeatherData();

  const userInterface = new UserInterface();
  weather.addObserver(userInterface);

  const loggingSystem = new LoggingSystem();
  weather.addObserver(loggingSystem);

  const thirdPartyService = new ThirdPartyService();
  weather.addObserver(thirdPartyService);

  console.log('Client: Mudando o tempo...');
  weather.changeWeather(); // Saída depende do estado do tempo

  console.log('Client: Removendo um observador (UserInterface)...');
  weather.removeObserver(userInterface);

  console.log('Client: Mudando o tempo novamente...');
  weather.changeWeather(); // Saída depende do estado do tempo
}

clientCode();

export {};
