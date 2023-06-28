// (Component) A interface Coffee define a assinatura para os métodos que todos os tipos de cafés devem implementar.
interface Coffee {
    cost(): number;
    description(): string;
}

// (ConcreteComponent) Implementação básica de um café.
class SimpleCoffee implements Coffee {
    cost(): number {
        return 2;
    }

    description(): string {
        return 'Simple coffee';
    }
}

// (BaseDecorator) Classe base para todos os decoradores.
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract description(): string;
}

// (ConcreteDecorator) Decorador para adicionar leite ao café.
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 1;
    }

    description(): string {
        return this.coffee.description() + ', with milk';
    }
}

// (ConcreteDecorator) Decorador para adicionar chocolate ao café.
class ChocolateDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 1.5;
    }

    description(): string {
        return this.coffee.description() + ', with chocolate';
    }
}

// (ConcreteDecorator) Decorador para adicionar chantilly ao café.
class WhippedCreamDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 0.8;
    }

    description(): string {
        return this.coffee.description() + ', with whipped cream';
    }
}

/***********
 * CLIENTE *
 ***********/

// O código do cliente pode criar diferentes tipos de cafés, combinando várias opções.
function clientCode(coffee: Coffee): void {
    console.log(`${coffee.description()} costs $${coffee.cost()}`);
}

// Criando um café simples
const simpleCoffee = new SimpleCoffee();
clientCode(simpleCoffee); // Saída: "Simple coffee costs $2"

// Adicionando leite
const coffeeWithMilk = new MilkDecorator(simpleCoffee);
clientCode(coffeeWithMilk); // Saída: "Simple coffee, with milk costs $3"

// Adicionando leite e chocolate
const coffeeWithMilkAndChocolate = new ChocolateDecorator(coffeeWithMilk);
clientCode(coffeeWithMilkAndChocolate); // Saída: "Simple coffee, with milk, with chocolate costs $4.5"

// Adicionando leite, chocolate e chantilly
const coffeeWithMilkChocolateAndWhippedCream = new WhippedCreamDecorator(coffeeWithMilkAndChocolate);
clientCode(coffeeWithMilkChocolateAndWhippedCream); // Saída: "Simple coffee, with milk, with chocolate, with whipped cream costs $5.3"

export {};
