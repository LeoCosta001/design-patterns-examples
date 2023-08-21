// A interface Prototype declara métodos de clonagem.
interface Prototype {
  clone(): Prototype;
  operation(): string;
}

// A classe ConcretePrototype implementa a interface Prototype.
class ConcretePrototype implements Prototype {
  private _field: string;

  constructor(field: string) {
    this._field = field;
  }

  public clone(): Prototype {
    return new ConcretePrototype(this._field);
  }

  public operation(): string {
    return 'ConcretePrototype: ' + this._field;
  }
}

/***************
 * CLIENT CODE *
 ***************/
const myObject: Prototype = new ConcretePrototype('ABC');
// Clone do objeto "myObject" sendo atribuído a variável "myObjectClone".
const myObjectClone: Prototype = myObject.clone();

console.log('Objeto original: ', myObject.operation()); // Saída: "Objeto original: ConcretePrototype: ABC"
console.log('Objeto clonado: ', myObjectClone.operation()); // Saída: "Objeto clonado: ConcretePrototype: ABC"

export {};
