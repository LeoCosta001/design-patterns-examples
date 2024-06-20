// A interface Product declara a interface dos objetos que o método de fábrica deve retornar.
interface Product {
  operation(): string;
}

// A classe Creator declara o método de fábrica que deve retornar um objeto da classe Product.
// As subclasses do Creator geralmente fornecem a implementação desse método.
abstract class Creator {
  public abstract factoryMethod(): Product;

  // Observe que o Creator também pode fornecer alguma implementação padrão do método factoryMethod.
  public someOperation(): string {
    // Chama o método de fábrica para criar um objeto Product.
    const product = this.factoryMethod();
    // Agora, usa o produto.
    return `Creator: O mesmo código do criador acabou de trabalhar com ${product.operation()}`;
  }
}

// As classes ConcreteProduct fornecem várias implementações da interface Product.
class ConcreteProduct1 implements Product {
  operation(): string {
    return '{Resultado do ConcreteProduct1}';
  }
}

class ConcreteProduct2 implements Product {
  operation(): string {
    return '{Resultado do ConcreteProduct2}';
  }
}

// As classes ConcreteCreator sobrescrevem o método de fábrica para mudar o tipo de produto resultante.
class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/***************
 * CLIENT CODE *
 ***************/

// O código do cliente trabalha com uma instância de um criador concreto, embora através de sua interface base.
// Contanto que o cliente continue trabalhando com o criador por meio da interface base, você pode passar qualquer subclasse do criador.
function clientCode(creator: Creator): void {
  console.log(
    'Client: Não estou ciente da classe vinda por parâmetro, mas ainda funciona.',
  );
  console.log(creator.someOperation());
}

// Aplicação escolhe o tipo de criador dependendo da configuração ou do ambiente.
console.log('App: Lançado com a classe ConcreteCreator1.');
clientCode(new ConcreteCreator1()); // Saída: "Creator: O mesmo código do criador acabou de trabalhar com {Resultado do ConcreteProduct1}"
console.log('');

console.log('App: Lançado com a classe ConcreteCreator2.');
clientCode(new ConcreteCreator2()); // Saída: "Creator: O mesmo código do criador acabou de trabalhar com {Resultado do ConcreteProduct2}"

export {};
