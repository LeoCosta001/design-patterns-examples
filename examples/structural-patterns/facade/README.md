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

...

## Caso de uso

### Problema

Imagine um sistema de entretenimento doméstico com vários dispositivos: uma TV, um sistema de som, um console de jogos, e um reprodutor de Blu-ray. Cada dispositivo tem seu próprio conjunto de controles e interfaces, tornando a operação do sistema como um todo complicada. O usuário precisa gerenciar manualmente cada dispositivo separadamente, como ligar a TV, ajustar o volume no sistema de som, escolher o input certo na TV para o console de jogos, e assim por diante. Isso resulta em uma experiência de usuário confusa e desordenada.

### Solução

Ao aplicar o padrão Facade, podemos simplificar a interação com o sistema de entretenimento. Para este caso podemos criar uma classe que será a fachada, ela encapsula a complexidade dos diversos dispositivos. Essa fachada oferece métodos simples como `watchMovie` e `playGame`, que internamente lidam com a configuração apropriada de cada dispositivo (ligar a TV, ajustar o volume, selecionar o input correto, etc.). Com isso, o usuário tem uma interface unificada e simplificada para interagir com o sistema, melhorando significativamente a experiência de uso.

## Estrutura

...
