// A interface Target representa a interface que o cliente compreende e espera usar.
interface Target {
  request(): string;
}

// Esta é uma classe existente que tem uma interface que precisa ser adaptada.
class Adaptee {
  public specificRequest(): string {
    return 'resultado específico do adaptee';
  }
}

// O Adaptador torna a interface do Adaptee compatível com a interface Target, graças à composição.
class Adapter implements Target {
  private _adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this._adaptee = adaptee;
  }

  public request(): string {
    const result = this._adaptee.specificRequest();
    return `Adapter: (Resultado adaptado) ${result}`;
  }
}

/****************
 * CLIENTE CODE *
 ****************/

// O código do cliente suporta apenas classes que seguem a interface Target.
function clientCode(target: Target): void {
  console.log(target.request());
}

// O cliente pode usar o Adapter para fazer com que o Adaptee seja compatível com a interface Target.
const adaptee = new Adaptee();
console.log(
  'Client: Adaptee tem uma interface incompatível. Não consigo usá-lo diretamente:',
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');

const adapter = new Adapter(adaptee);
console.log(
  'Client: Mas posso usar um adaptador para fazer o Adaptee ser compatível com o Target:',
);
clientCode(adapter);

export {};
