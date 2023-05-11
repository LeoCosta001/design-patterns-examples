// (Product) A interface Furniture define a assinatura para os métodos que todos os tipos de móveis devem implementar.
interface Furniture {
  use(): void;
}

// (ConcreteProduct) Para cada tipo de mobilia é definido uma classe que implementam a interface Furniture.
class Chair implements Furniture {
  use(): void {
    console.log('Sitting on a chair...');
  }
}

class Table implements Furniture {
  use(): void {
    console.log('Putting something on the table...');
  }
}

class Sofa implements Furniture {
  use(): void {
    console.log('Lying on the sofa...');
  }
}

// (Creator) A classe FurnitureFactory é o nosso 'Creator'. Ela possui o método factory que cria e retorna objetos Furniture.
abstract class FurnitureFactory {
  // O método factory é marcado como 'abstract' para que cada subclasse de FurnitureFactory possa fornecer sua própria implementação.
  abstract createFurniture(): Furniture;
}

// (ConcreteCreator) As subclasses FurnitureFactory implementam o método factory para retornar um novo objeto Furniture.
class ChairFactory extends FurnitureFactory {
  createFurniture(): Furniture {
    return new Chair();
  }
}

class TableFactory extends FurnitureFactory {
  createFurniture(): Furniture {
    return new Table();
  }
}

class SofaFactory extends FurnitureFactory {
  createFurniture(): Furniture {
    return new Sofa();
  }
}

/***********
 * CLIENTE *
 ***********/

// O código do cliente recebe um objeto FurnitureFactory e usa-o para criar e usar um novo objeto Furniture.
function clientCode(furnitureFactory: FurnitureFactory): void {
  const furniture = furnitureFactory.createFurniture();
  furniture.use();
}

// O código do cliente pode criar diferentes tipos de móveis, dependendo da fábrica que ele usa.
clientCode(new ChairFactory()); // Saída: "Sitting on a chair..."
clientCode(new TableFactory()); // Saída: "Putting something on the table..."
clientCode(new SofaFactory()); // Saída: "Lying on the sofa..."

export {};
