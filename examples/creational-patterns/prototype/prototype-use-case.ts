// (Prototype) A interface Cloneable fornece um método para clonar um objeto e deve ser implementado de alguma forma em todos os objetos que podem ser clonados.
// OBS: Foi adicionado um tipo de retorno "polimérfico" para o método clone (indicando que se trata de um protótipo genérico), mas isto é opcional.
interface Cloneable<T> {
  clone(): T;
}

// A interface Shape declara métodos de clonagem e desenho para todas as formas concretas.
interface Shape extends Cloneable<Shape> {
  draw(): void;
}

// (ConcretePrototype) A classe Circle implementa a interface Shape.
class Circle implements Shape {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // Implementação do método clone
  public clone(): Shape {
    return new Circle(this._radius);
  }

  public draw(): void {
    console.log('Desenhando um círculo com o raio: ' + this._radius);
  }
}

// (ConcretePrototype) A classe Rectangle implementa a interface Shape.
class Rectangle implements Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  // Implementação do método clone
  public clone(): Shape {
    return new Rectangle(this._width, this._height);
  }

  public draw(): void {
    console.log(
      'Desenhando um retângulo com a largura: ' +
        this._width +
        ', altura: ' +
        this._height,
    );
  }
}

/***************
 * CLIENT CODE *
 ***************/
const circle: Shape = new Circle(5);
const duplicateCircle: Shape = circle.clone();
console.log('Objeto original:');
circle.draw(); // Saída: "Desenhando um círculo com o raio: 5"
console.log('Objeto duplicado:');
duplicateCircle.draw(); // Saída: "Desenhando um círculo com o raio: 5"

const rectangle: Shape = new Rectangle(3, 4);
const duplicateRectangle: Shape = rectangle.clone();
console.log('Objeto original:');
rectangle.draw(); // Saída: "Desenhando um retângulo com a largura: 3, altura: 4"
console.log('Objeto duplicado:');
duplicateRectangle.draw(); // Saída: "Desenhando um retângulo com a largura: 3, altura: 4"

export {};
