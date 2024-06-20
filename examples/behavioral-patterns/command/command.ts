// A interface Command declara a interface usada em todos os comandos concretos.
interface Command {
  execute(): void;
}

// As classes ConcreteCommand implementam diferentes variações do comando definido pela interface Command.
class ConcreteCommandA implements Command {
  private _receiver: Receiver;

  constructor(receiver: Receiver) {
    this._receiver = receiver;
  }

  public execute(): void {
    this._receiver.action('ConcreteCommandA');
  }
}

class ConcreteCommandB implements Command {
  private _receiver: Receiver;

  constructor(receiver: Receiver) {
    this._receiver = receiver;
  }

  public execute(): void {
    this._receiver.action('ConcreteCommandB');
  }
}

// A classe Receiver contém a lógica de negócios real que será chamada pelos comandos.
class Receiver {
  public action(command: string): void {
    console.log(`Receiver: Executando a ação para ${command}`);
  }
}

// A classe Invoker solicita o comando para ser executado (todos os métodos da classe Command são processadas por esta classe).
class Invoker {
  private _onStart: Command | null = null;
  private _onFinish: Command | null = null;

  public setOnStart(command: Command): void {
    this._onStart = command;
  }

  public setOnFinish(command: Command): void {
    this._onFinish = command;
  }

  public executeCommands(): void {
    console.log('Invoker: Alguém quer que eu faça algo antes de começar?');
    if (this._onStart) {
      this._onStart.execute();
    }

    console.log('Invoker: ...executando algo importante...');

    console.log('Invoker: Alguém quer que eu faça algo depois de terminar?');
    if (this._onFinish) {
      this._onFinish.execute();
    }
  }
}

/***************
 * CLIENT CODE *
 ***************/

// OBS: O cliente geralmente cria uma classe para abstrair a lógica de negócios, que é usada para executar os processos descritos abaixo (para um exemplo prático analise a classe "Application" do arquivo command-use-case.ts)

// O código do cliente cria comandos concretos e os atribui ao invocador.
const receiver = new Receiver();
const commandA = new ConcreteCommandA(receiver);
const commandB = new ConcreteCommandB(receiver);

const invoker = new Invoker();
invoker.setOnStart(commandA);
invoker.setOnFinish(commandB);

console.log('Client: Executando comandos através do Invoker.');
invoker.executeCommands(); // Saída: Executa as ações dos comandos A e B.

export {};
