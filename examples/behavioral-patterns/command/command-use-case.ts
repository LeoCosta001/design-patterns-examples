// (Command) A interface Command declara um método para executar um comando e qualquer outro método que possa ser comum a todos os comandos.
interface Command {
  execute(): void;
  undo(): void;
}

// (Receiver) A classe Editor contém a lógica de negócios real que será chamada pelos comandos.
class Editor {
  private _text = '';

  getText(): string {
    return this._text;
  }

  copy(text: string): void {
    console.log(`Copiar texto: ${text}`);
  }

  paste(text: string): void {
    this._text += text;
    console.log(`Colar texto: ${text}`);
  }

  undoPaste(text: string): void {
    this._text = this._text.substring(0, this._text.length - text.length);
    console.log(`Desfazer texto colado: ${text}`);
  }
}

// (ConcreteCommand) As classes CopyCommand e PasteCommand implementam diferentes variações do comando definido pela interface Command.
class CopyCommand implements Command {
  constructor(private _editor: Editor, private _text: string) {}

  execute(): void {
    this._editor.copy(this._text);
  }

  undo(): void {
    console.log('Nada a desfazer para o comando de cópia.');
  }
}

class PasteCommand implements Command {
  constructor(private _editor: Editor, private _text: string) {}

  execute(): void {
    this._editor.paste(this._text);
  }

  undo(): void {
    this._editor.undoPaste(this._text);
  }
}

// (Invoker) A classe EditorInvoker solicita o comando para ser executado (todos os métodos da classe Command são processadas por esta classe).
class EditorInvoker {
  private _history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this._history.push(command);
  }

  undo(): void {
    const command = this._history.pop();
    if (command) {
      command.undo();
    }
  }
}

/****************
 * CLIENTE CODE *
 ****************/

// O código do cliente cria comandos concretos e os atribui ao invocador.
class Application {
  private _editor = new Editor();
  private _invoker = new EditorInvoker();

  copyText(text: string): void {
    const copyCommand = new CopyCommand(this._editor, text);
    this._invoker.executeCommand(copyCommand);
  }

  pasteText(text: string): void {
    const pasteCommand = new PasteCommand(this._editor, text);
    this._invoker.executeCommand(pasteCommand);
  }

  undoLastAction(): void {
    this._invoker.undo();
  }

  getEditorText(): string {
    return this._editor.getText();
  }
}

// O código do cliente cria uma instância da aplicação e executa comandos nela.
const app = new Application();

app.copyText('Olá, mundo!');
app.pasteText('Olá, mundo!');
console.log(app.getEditorText()); // Saída: "Olá, mundo!""

app.undoLastAction();
console.log(app.getEditorText()); // Saída: (vazio)

export {};
