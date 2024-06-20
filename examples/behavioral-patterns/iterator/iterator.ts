// A interface Iterator declara os métodos necessários para percorrer uma coleção sequencialmente.
interface Iterator<T> {
  // Retorna o próximo elemento da coleção.
  next(): T;
  // Retorna verdadeiro se ainda houver elementos na coleção.
  hasNext(): boolean;
}

// A interface Aggregate declara um método para obter um iterador.
interface Aggregate<T> {
  getIterator(): Iterator<T>;
}

// ConcreteIterator implementa a interface Iterator.
class ConcreteIterator implements Iterator<string> {
  private _collection: string[];
  private _position = 0;

  constructor(collection: string[]) {
    this._collection = collection;
  }

  next(): string {
    return this._collection[this._position++];
  }

  hasNext(): boolean {
    return this._position < this._collection.length;
  }
}

// ConcreteAggregate implementa a interface Aggregate e retorna um ConcreteIterator.
class ConcreteAggregate implements Aggregate<string> {
  private _items: string[] = [];

  constructor(items: string[]) {
    this._items = items;
  }

  getIterator(): Iterator<string> {
    return new ConcreteIterator(this._items);
  }
}

/***************
 * CLIENT CODE *
 ***************/

// O código do cliente trabalha com uma instância de um agregado concreto e seu iterador.
function clientCode(aggregate: Aggregate<string>): void {
  const iterator = aggregate.getIterator();

  console.log('Iterando sobre a coleção:');
  while (iterator.hasNext()) {
    console.log(iterator.next()); // Saída: "item1", "item2", "item3", "item4"
  }
}

const items = ['item1', 'item2', 'item3', 'item4'];
const aggregate = new ConcreteAggregate(items);

clientCode(aggregate);

export {};
