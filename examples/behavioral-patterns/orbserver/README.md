# Observer

![Tipo](https://img.shields.io/badge/Tipo-Comportamental-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★☆-yellow)

## Descrição

O Observer é um padrão de projeto comportamental que define um mecanismo de assinatura onde um objeto (o "sujeito") mantém uma lista de seus dependentes (os "observadores") e os notifica automaticamente de qualquer mudança de estado.

## Características

- Permite que objetos observem e reajam às mudanças de estado em outros objetos.
- Encoraja o princípio de responsabilidade única, pois permite que você separe os núcleos da lógica de negócios de código que reage a mudanças de estado.
- Implementa a dependência de um-para-muitos entre objetos para que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

## Benefícios

- Promove um acoplamento fraco entre o sujeito e seus observadores. O sujeito não precisa saber nada sobre seus observadores, além da interface do observador.
- Permite adicionar observadores em tempo de execução, proporcionando maior flexibilidade.
- Oferece uma alternativa ao uso pesado de callbacks e polling para monitorar o estado das coisas.
- Permite que diferentes partes de um aplicativo reajam a mudanças de estado de maneira personalizada.

## Considerações

A implementação do Observer pode se tornar complexa em situações onde há muitos observadores, ou quando há complexidade na hierarquia de observação. Além disso, o padrão Observer pode introduzir problemas de desempenho se usado imprudentemente, especialmente em aplicações de alta performance.

## Caso de uso

### Problema

Suponha que você está criando um sistema de alertas meteorológicos. Você precisa ser capaz de informar uma série de diferentes partes do sistema quando o tempo muda, como interfaces de usuário, sistemas de registro e serviços de terceiros.

### Solução

O padrão Observer pode ser a solução. Você cria um objeto "Clima" que mantém uma lista de objetos dependentes (os "observadores") e os notifica sempre que o clima muda.

## Estrutura

![Observer Diagram](https://imgur.com/oW8suzR.png)

1. **Subject** É uma interface ou classe abstrata que mantém uma lista de observadores e fornece métodos para adicionar, remover e notificar observadores.
   - **No "Caso de uso":** No exemplo do sistema de alertas meteorológicos, é a classe Weather.
2. **ConcreteSubject:** É uma classe que implementa a interface Subject. Mantém o estado de interesse para os observadores e envia uma notificação aos observadores quando seu estado muda.
   - **No "Caso de uso":** É a classe WeatherData, que implementa a classe Weather.
3. **Observer:** É uma interface ou classe abstrata que define o método de atualização que os observadores devem implementar.
   - **No "Caso de uso":** É a interface WeatherObserver.
4. **ConcreteObserver:** É uma classe que implementa a interface Observer, e que tem determinados métodos que são executados quando o estado do ConcreteSubject é alterado.
   - **No "Caso de uso":** São as classes UserInterface, LoggingSystem e ThirdPartyService.
