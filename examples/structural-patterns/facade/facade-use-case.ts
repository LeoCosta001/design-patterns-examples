// (Subsystem1, Subsystem2, etc) Definindo as interfaces e classes do subsistema complexo
interface TV {
  turnOn(): string;
  turnOff(): string;
  setInput(input: string): string;
}

interface SoundSystem {
  setVolume(volumeLevel: number): string;
}

interface GameConsole {
  startGame(gameTitle: string): string;
}

interface BluRayPlayer {
  playMovie(movieTitle: string): string;
}

// Implementações concretas dos subsistemas
class SmartTV implements TV {
  turnOn(): string {
    return 'TV ligada';
  }

  turnOff(): string {
    return 'TV desligada';
  }

  setInput(input: string): string {
    return `Input da TV ajustado para ${input}`;
  }
}

class SurroundSoundSystem implements SoundSystem {
  setVolume(volumeLevel: number): string {
    return `Volume do sistema de som ajustado para ${volumeLevel}`;
  }
}

class PlayStation implements GameConsole {
  startGame(gameTitle: string): string {
    return `Iniciando o jogo ${gameTitle} no console`;
  }
}

class SonyBluRayPlayer implements BluRayPlayer {
  playMovie(movieTitle: string): string {
    return `Reproduzindo o filme ${movieTitle}`;
  }
}

// (Facade) A classe Facade unifica as operações do subsistema
class HomeEntertainmentFacade {
  private _tv: TV;
  private _soundSystem: SoundSystem;
  private _gameConsole: GameConsole;
  private _bluRayPlayer: BluRayPlayer;

  constructor(
    tv: TV,
    soundSystem: SoundSystem,
    gameConsole: GameConsole,
    bluRayPlayer: BluRayPlayer,
  ) {
    this._tv = tv;
    this._soundSystem = soundSystem;
    this._gameConsole = gameConsole;
    this._bluRayPlayer = bluRayPlayer;
  }

  watchMovie(movieTitle: string): string {
    this._tv.turnOn();
    this._tv.setInput('HDMI1');
    this._soundSystem.setVolume(30);
    return this._bluRayPlayer.playMovie(movieTitle);
  }

  playGame(gameTitle: string): string {
    this._tv.turnOn();
    this._tv.setInput('HDMI2');
    this._soundSystem.setVolume(20);
    return this._gameConsole.startGame(gameTitle);
  }
}

/****************
 * CLIENTE CODE *
 ****************/

// O código do cliente usa a fachada para interagir com o subsistema complexo
function clientCode(facade: HomeEntertainmentFacade): void {
  console.log(facade.watchMovie('O Senhor dos Anéis')); // Saída: "Reproduzindo o filme O Senhor dos Anéis"
  console.log(facade.playGame('The Last of Us')); // Saída: "Iniciando o jogo The Last of Us no console"
}

// Criação dos objetos do subsistema e da fachada
const tv = new SmartTV();
const soundSystem = new SurroundSoundSystem();
const gameConsole = new PlayStation();
const bluRayPlayer = new SonyBluRayPlayer();

const homeEntertainment = new HomeEntertainmentFacade(
  tv,
  soundSystem,
  gameConsole,
  bluRayPlayer,
);

// Uso da fachada no código do cliente
clientCode(homeEntertainment);

export {};
