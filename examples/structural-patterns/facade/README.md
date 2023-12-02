# Facade

![Tipo](https://img.shields.io/badge/Tipo-Estrutural-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★★-brightgreen)

## Descrição

O Facade é um padrão de projeto estrutural que fornece uma interface simplificada para um conjunto de interfaces em um subsistema. Este padrão introduz uma fachada (classe) que unifica diversas interfaces complexas, tornando o subsistema mais fácil de ser utilizado.

## Características

- Oferece uma interface simples para sistemas complexos.
- O código cliente lida apenas com a fachada, reduzindo as dependências com o subsistema.

## Benefícios

- Torna o uso de sistemas complexos mais intuitivo.
- Protege o código cliente de componentes complexos do subsistema.

## Considerações

O Facade simplifica a interface de subsistemas complexos, mas pode se tornar um ponto único de falha. Se a implementação da fachada contiver bugs ou deficiências, isso pode afetar todo o sistema que depende dela.

Uma fachada pode acabar sendo muito acoplada com as classes dos subsistemas, o que leva a dificuldades na manutenção e na expansão do sistema. Se os subsistemas evoluem e a fachada não é atualizada adequadamente, pode haver desalinhamento entre as necessidades dos clientes e as capacidades da fachada.

Além disso, o uso excessivo ou inadequado do padrão Facade pode levar a uma situação onde a fachada se torna uma interface "onipresente" que esconde totalmente os subsistemas. Isso pode dificultar a realização de tarefas que exigem maior controle ou acesso mais detalhado aos subsistemas, limitando a flexibilidade.

Ao considerar o uso do padrão Facade, é importante ponderar se a simplicidade e a abstração proporcionadas justificam a possibilidade de um acoplamento mais estreito e uma potencial redução na flexibilidade do sistema.

## Caso de uso

### Problema

Imagine um sistema de entretenimento doméstico com vários dispositivos: uma TV, um sistema de som, um console de jogos, e um reprodutor de Blu-ray. Cada dispositivo tem seu próprio conjunto de controles e interfaces, tornando a operação do sistema como um todo complicada. O usuário precisa gerenciar manualmente cada dispositivo separadamente, como ligar a TV, ajustar o volume no sistema de som, escolher o input certo na TV para o console de jogos, e assim por diante. Isso resulta em uma experiência de usuário confusa e desordenada.

### Solução

Ao aplicar o padrão Facade, podemos simplificar a interação com o sistema de entretenimento. Para este caso podemos criar uma classe que será a fachada, ela encapsula a complexidade dos diversos dispositivos. Essa fachada oferece métodos simples como `watchMovie` e `playGame`, que internamente lidam com a configuração apropriada de cada dispositivo (ligar a TV, ajustar o volume, selecionar o input correto, etc.). Com isso, o usuário tem uma interface unificada e simplificada para interagir com o sistema, melhorando significativamente a experiência de uso.

## Estrutura

![Facade Diagram](https://imgur.com/NJfhi1Y.png)

1. **SubsystemClass ("n" Classes de subsistema):** São classes concretas que implementam funcionalidades complexas e específicas do subsistema. Estas classes podem operar independentemente, mas são geralmente complexas ou difíceis de usar diretamente.
   - **No "Caso de uso":** No exemplo do sistema de entretenimento, são as classes `SmartTV`, `SurroundSoundSystem`, `PlayStation` e `SonyBluRayPlayer`, que representam diferentes componentes do sistema.
2. **Facade:** É uma classe concreta que fornece para o cliente uma interface simplificada para operações complexas dos subsistemas.
   - **No "Caso de uso":** É a classe `HomeEntertainmentFacade`, que unifica e simplifica a interação com o sistema de entretenimento doméstico.
