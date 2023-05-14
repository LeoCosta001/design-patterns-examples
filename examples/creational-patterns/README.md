# Design Patterns - Creational

## Descrição

Os padrões criacionais são um dos três tipos principais de padrões de design, juntamente com os padrões estruturais e comportamentais.

Os padrões criacionais lidam com os mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação. O modo básico de criação de objeto pode resultar em problemas de design ou em complexidade adicionada ao projeto de software. Os padrões criacionais resolvem esse problema controlando a criação de objetos de maneira diferente.

## Características

Os cinco padrões criacionais de design são: Singleton, Builder, Prototype, Factory Method e Abstract Factory.

- **Singleton** : Este padrão garante que apenas uma instância de uma classe é criada e fornece um ponto de acesso global a ela. O Singleton limita a instânciação de uma "classe" a um único objeto. Isto é útil quando exatamente um objeto é necessário para coordenar ações no sistema.
- **Builder** : Este padrão é usado para construir um objeto complexo passo a passo e o produto final será criado apenas quando todos os passos específicos forem concluídos. Esta separação permite que você construa objetos de maneira mais flexível e controlada.
- **Prototype** : Este padrão é usado quando a criação de um objeto é cara ou complexa e requer muita CPU. Ele fornece uma maneira de copiar o objeto original (ou protótipo) e então modificar o objeto copiado conforme necessário, em vez de criar um novo objeto do zero.
- **Factory Method** : Este padrão fornece uma maneira de delegar a lógica de instanciação a subclasses. Ele fornece uma interface para criar objetos, mas permite que as subclasses alterem o tipo de objetos que serão criados.
- **Abstract Factory** : Este padrão fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas. Ele é usado quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.

Cada um desses padrões tem suas próprias peculiaridades e detalhes de implementação, mas todos eles compartilham a intenção de fornecer uma maneira mais eficaz, eficiente e organizada de criar objetos em projetos de software. Eles ajudam a tornar o sistema mais robusto, escalável e fácil de manter, além de promover a reutilização de código e a modularidade.
