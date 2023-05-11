# Factory Method

![Tipo](https://img.shields.io/badge/Tipo-Criacional-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★☆-yellow)

## Descrição

O Factory Method é um padrão de projeto criacional que fornece uma interface para criar objetos em uma superclasse, mas permitindo que as subclasses decidam o tipo de objetos que serão criados. Ele é especialmente útil quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.

## Características

- Define uma interface para criar um objeto, mas deixa a decisão de qual classe instanciar para as subclasses.
- Encapsula a lógica de criação de objetos, permitindo que o código fique independente de tipos de classes específicas.
- Pode introduzir uma nova classe de produtos sem quebrar o código cliente existente.

## Benefícios

- Fomenta a reutilização do código e a separação de responsabilidades, uma vez que o código que usa o produto não depende do código que o cria.
- Oferece um bom nível de flexibilidade ao permitir que subclasses decidam como os objetos serão criados.
- Quando bem aplicado, pode melhorar a organização do código e tornar mais fácil adicionar novas classes de produtos.
- Ajuda a aplicar o "Open/Closed Principle" (aberto para extensão e fechado para modificação), ao permitir que novos produtos sejam adicionados sem a nescessidade dos antigos serem modificados.
- Ajuda a aplicar o "Responsabiliry Principle" (separar as responsabilidades), ao separar o código que cria os objetos do código que o utiliza.

## Considerações

O Factory Method pode ser uma solução complexa de implementar e manter caso a aplicação não necessite de novos tipos de classes ou se as subclasses não precisarem de flexibilidade para decidir como os objetos são criados. Além disso, pode levar à criação de um grande número de subclasses pequenas, o que pode tornar o código mais difícil de seguir.

Outra preocupação é que a aplicação do padrão Factory Method pode levar à criação de muitas subclasses menores. Isso pode tornar o código mais difícil de entender e manter, especialmente em projetos maiores.

Ao considerar o uso do Factory Method, avalie se os benefícios de desacoplamento e flexibilidade superam as possíveis desvantagens, como aumento da complexidade e maior número de subclasses.

## Caso de uso

### Problema

Suponha que você está desenvolvendo um software para uma empresa que produz diferentes tipos de móveis: cadeiras, mesas, sofás, etc. Cada tipo de móvel tem um processo de produção diferente e você precisa criar uma maneira de encapsular esses processos de produção sem tornar o código do sistema muito acoplado às classes concretas.

### Solução

O padrão Factory Method pode ser a solução. Você cria uma classe abstrata "Fábrica de Móveis" com um método de criação de móveis. Esse método é marcado como "abstract" para que cada subclasse de fábrica de móveis (como "Fábrica de Cadeiras", "Fábrica de Mesas", etc.) possa fornecer sua própria implementação para o método de criação. Isso permite que o código que usa a fábrica de móveis permaneça independente de como cada tipo de móvel é criado.

## Estrutura

![Factory Method Structure](https://imgur.com/xbIGUk6.png)

1. **Product:** É uma interface ou classe abstrata que define os métodos que todos os produtos devem implementar.
   **No "Caso de uso":** No exemplo de móveis, é a interface Furniture.
2. **ConcreteProduct:** São as classes concretas que implementam a interface Product.
   **No "Caso de uso":** São as classes Chair, Table e Sofa.
3. **Creator:** É uma interface ou classe abstrata que declara o método de fábrica. Este método retorna um objeto ConcreteProduct (que implementaram a interface Product).
   **No "Caso de uso":** É a classe abstrata FurnitureFactory.
4. **ConcreteCreator:** São as classes concretas que implementam o método de fábrica declarado em Creator. Cada ConcreteCreator retorna um objeto ConcreteProduct específico.
   **No "Caso de uso":** São as classes ChairFactory, TableFactory e SofaFactory.
