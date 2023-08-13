# Design Patterns - Structural

## Descrição

Os padrões estruturais são um dos três tipos principais de padrões de design, ao lado dos padrões criacionais e comportamentais.

Os padrões estruturais têm a ver com a composição de classes e objetos, de modo a formar estruturas maiores e mais complexas. Eles ajudam a garantir que, quando uma parte do sistema muda, toda a estrutura pode se adaptar a essa mudança de maneira eficiente. Os padrões estruturais são especialmente úteis para garantir que diferentes partes de um sistema possam trabalhar juntas de maneira eficaz sem conhecer os detalhes de implementação umas das outras.

## Características

Os sete padrões de design estruturais são: Adapter, Bridge, Composite, Decorator, Facade, Flyweight e Proxy.

- **Adapter** : Este padrão permite que duas interfaces incompatíveis trabalhem juntas. Ele envolve a criação de um objeto adaptador que faz a conversão entre a interface antiga e a nova, permitindo que código que não seria compatível possa funcionar em conjunto.
- **Bridge** : O padrão Bridge é usado para desacoplar uma abstração de sua implementação, de forma que as duas possam variar independentemente. Isso é alcançado criando uma ponte entre a abstração e a implementação.
- **Composite** : Este padrão é usado para tratar objetos individuais e composições de objetos de maneira uniforme. Ele permite que você crie estruturas de árvore complexas com os objetos e forneça uma maneira de acessar os objetos de forma unificada.
- **Decorator** : O padrão Decorator é usado para adicionar novas funcionalidades a um objeto dinamicamente, sem alterar sua estrutura. Ele envolve a criação de uma série de "decoradores" que são usados para envolver objetos concretos.
- **Facade** : O padrão Facade é usado para fornecer uma interface simplificada para um conjunto de interfaces em um subsistema. Isso torna o subsistema mais fácil de usar, pois oculta a complexidade dos componentes subjacentes.
- **Flyweight** : Este padrão é usado para minimizar o uso de memória ou os custos computacionais ao compartilhar o máximo possível de dados com objetos similares. Ele é útil quando se lida com uma grande quantidade de objetos que têm partes de seu estado em comum.
- **Proxy** : O padrão Proxy é usado quando se deseja representar outro objeto e controlar o acesso a ele. Um proxy pode atuar como um intermediário entre o cliente e o objeto real e pode adicionar funcionalidades adicionais, como controle de acesso ou registro de atividades.

Cada um desses padrões possui suas próprias características e detalhes de implementação, mas todos compartilham a intenção de fornecer uma estrutura mais organizada, eficiente e flexível para o design de sistemas de software. Eles ajudam a tornar o sistema mais fácil de entender, manter e escalar, ao mesmo tempo em que promovem a reutilização de código e modularidade.
