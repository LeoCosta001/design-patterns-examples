# Decorator

![Tipo](https://img.shields.io/badge/Tipo-Estrutural-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★☆-yellow)

## Descrição

O Decorator é um padrão de projeto estrutural que permite que você adicione novos comportamentos a objetos, colocando esses objetos dentro de "objetos wrapper" especiais que contêm os comportamentos.

O propósito do padrão Decorator é permitir que os objetos sejam decorados com novos comportamentos sem modificar suas estruturas. É uma alternativa à herança para estender funcionalidades, onde novas funcionalidades são adicionadas envolvendo os objetos em classes decoradoras.

## Caracteristicas

- Permite adicionar funcionalidades a objetos em tempo de execução sem modificar sua estrutura.
- Usa wrapper para envolver objetos, em vez de herança, para estender suas funcionalidades.
- Os decoradores têm a mesma interface que os objetos que decoram, permitindo que sejam usados de forma intercambiável.
- Um objeto pode ser envolvido por múltiplos decoradores, cada um adicionando seu próprio comportamento.
- Decoradores mantêm referência ao objeto decorado e podem executar comportamentos adicionais antes ou depois de delegar ao objeto original.

## Benefícios

- Permite adicionar funcionalidades a objetos em tempo de execução, tornando o sistema mais adaptável às necessidades variáveis.
- Permite estender o comportamento de objetos sem fazer novas subclasses.
- Permite adicionar ou remover responsabilidades de um objeto em tempo de execução.
- Aplica o princípio da responsabilidade única. Você pode dividir a funcionalidade entre várias classes.

## Considerações

Caso precise remover um decorador específico de um objeto decorado sua complexidade pode subir muito dado o fato de que os decoradores por padrão não tem suporte a este comportamento, nestes casos o mais simples é refazer a decorações omitindo o decorador desejado.

O código pode se tornar mais complicado, pois é introduzido um grande número de pequenas classes.

## Caso de uso

### Problema

Imagine que você está desenvolvendo um sistema para uma loja de cafés. O cliente pode comprar um café simples ou personalizar com diversos ingredientes, como leite, chocolate, chantilly etc. Inicialmente, você pode pensar em criar uma classe para cada tipo de café (por exemplo, `CafeSimples`, `CafeComLeite`, `CafeComChocolateEChantilly`). No entanto, isso rapidamente se torna impraticável pois o número de combinações cresce exponencialmente à medida que novos ingredientes são adicionados. Além disso, se um novo ingrediente for introduzido, você teria que criar várias classes para todas as combinações possíveis com esse novo ingrediente.

### Solução

O padrão Decorator oferece uma solução elegante para este problema. Você pode criar uma classe `Cafe` que serve como componente base, e várias classes de decoradores para cada tipo de ingrediente (como `LeiteDecorator`, `ChocolateDecorator`, `ChantillyDecorator`). Cada decorador envolve uma instância de `Cafe` e pode adicionar funcionalidades ou alterar o comportamento dessa instância. Desta forma, é possível combinar decoradores para criar variações de cafés de maneira flexível e extensível.

## Estrutura

![Decorator Diagram](https://refactoring.guru/images/patterns/diagrams/decorator/structure.png)

Um Decorator típico incluirá a seguinte estrutura:

1. **Component:** Define a interface ou classe abstrata para objetos que podem ter responsabilidades adicionadas a eles dinamicamente.
   1. **No "Caso de uso":** É a interface `Coffee`.
2. **ConcreteComponent:** É a classe de objeto a ser decorada. Ele implementa a interface do componente.
   1. **No "Caso de uso":** É a classe `SimpleCoffee` que implementa a interface `Coffee`.
3. **Decorator (ou BaseDecorator):** É uma classe abstrata que mantém uma referência para um objeto Component e define uma interface que segue a interface do Componente (para que os ConcreteDecorators sejam obrigados a manter os métodos e propriedades definidos na interface Component).
   1. **No "Caso de uso":** É a classe abstrata `CoffeeDecorator` que implementa a interface `Coffee`.
4. **ConcreteDecorator:** É uma classe decoradora que recebe o ConcreteComponent como parâmetro para dicionar responsabilidades ao mesmo quando o seu método é chamado.
   1. **No "Caso de uso":** São as classes `MilkDecorator`, `ChocolateDecorator` e `WhippedCreamDecorator` que implementam a classe `CoffeeDecorator`.
