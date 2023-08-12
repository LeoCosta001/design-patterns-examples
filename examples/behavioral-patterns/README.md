# Design Patterns - Behavioral

## Descrição

Os padrões comportamentais são um dos três tipos principais de padrões de design, juntamente com os padrões criacionais e estruturais.

Os padrões comportamentais têm a ver com a comunicação e interação entre os objetos, bem como a responsabilidade que esses objetos possuem em um sistema. Eles focam em como os objetos são interligados e como os elementos dentro deles se comunicam entre si.

## Características

Os onze padrões de design comportamentais são: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method e Visitor.

- **Chain of Responsibility** : Este padrão é usado para desacoplar o remetente e o receptor de um pedido com base no tipo de pedido. Ele passa o pedido ao longo de uma cadeia de receptores até que um objeto possa manipulá-lo.
- **Command** : O padrão Command é usado para encapsular uma solicitação como um objeto, permitindo assim que os parâmetros sejam passados, armazenados e transmitidos a outros objetos. Isso também permite que as operações possam ser desfeitas.
- **Interpreter** : Este padrão é usado para definir a gramática de um idioma simples, representar sentenças nesse idioma e interpretar essas sentenças. É útil em compiladores ou em editores de texto, por exemplo.
- **Iterator** : O padrão Iterator é usado para fornecer uma maneira de acessar os elementos de uma coleção de objetos sequencialmente sem expor a representação subjacente da coleção.
- **Mediator** : Este padrão é usado para encapsular a comunicação entre classes de objetos, de forma que as classes não precisem se referenciar explicitamente. Isso reduz as dependências entre as classes.
- **Memento** : O padrão Memento é usado para capturar o estado de um objeto em um determinado momento e armazená-lo de tal forma que possa ser restaurado para esse estado posteriormente.
- **Observer** : Este padrão é usado quando uma mudança em um objeto requer mudanças em outros, e você não sabe quantos objetos precisam ser mudados. Ele define uma dependência de um para muitos de forma que quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.
- **State** : O padrão State é usado quando o comportamento de um objeto muda com base em seu estado. Ele permite que um objeto altere seu comportamento quando seu estado interno muda.
- **Strategy** : Este padrão é usado para definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis. O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.
- **Template Method** : O padrão Template Method é usado para definir a estrutura de um algoritmo, permitindo que algumas etapas sejam implementadas por classes derivadas. Ele permite que as subclasses redefinam certas etapas de um algoritmo sem alterar sua estrutura.
- **Visitor** : Este padrão é usado para separar um conjunto de estruturas de um conjunto de operações a serem realizadas nessas estruturas. Isso permite adicionar novas operações sem modificar as estruturas.

Cada um desses padrões tem suas próprias características e detalhes de implementação, mas todos compartilham a intenção de melhorar a comunicação e responsabilidades entre os objetos em um sistema de software. Ao promover interações eficientes e bem definidas entre os objetos, os padrões comportamentais ajudam a tornar o sistema mais flexível, fácil de manter e de compreender, ao mesmo tempo em que contribuem para um código mais claro e modular.
