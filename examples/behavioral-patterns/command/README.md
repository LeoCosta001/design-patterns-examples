# Command

![Tipo](https://img.shields.io/badge/Tipo-Comportamental-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★☆☆☆-orange)

## Descrição

O Command é um padrão de projeto comportamental que transforma uma solicitação em um objeto, permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas. Este padrão é útil para implementar operações que são executadas em resposta a eventos, como em um sistema cujo diferentes eventos possam solicitar ações semelhantes.

> **Observação:** O que é uma "Solicitação"?
> Uma solicitação é um pedido que contém as informações necessárias para executar uma operação específica.
>
> Em termos de programação, uma solicitação é um objeto que encapsula todos os detalhes necessários para determinar o tipo da ação que deve ser executada.
> Por exemplo, em um editor de texto, copiar, colar, desfazer e refazer são solicitações que contém informações sobre o que deve ser feito, e após serem processadas essas solicitações serão executadas.

## Características

- Encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações.
- Suporte para enfileiramento de comandos, registro de logs e operações reversíveis (undo/redo).
- Desacopla o objeto que invoca a operação do objeto que realmente executa a operação.

## Benefícios

- Reduz o acoplamento entre o cliente (aquele que cria a solicitação) e o executor da operação (função responsável por executar o que foi solicitado).
- Facilita a implementação de operações que podem ser desfeitas.
- Permite a combinação de comandos simples em comandos compostos.
- Suporte para enfileiramento de comandos e registro de logs.

## Considerações

O uso do padrão Command pode levar a um aumento no número de classes no sistema, uma vez que cada comando pode ser implementado como uma classe separada.

Deve-se ter cuidado para gerenciar a complexidade e evitar a criação de muitas classes pequenas e difíceis de manter.

## Caso de uso

### Problema

Imagine que você está desenvolvendo um editor de texto que suporta operações como copiar, colar, desfazer e refazer. Essas operações podem ser acionadas por botões, teclas de atalho ou outros eventos. Você precisa de uma maneira de encapsular essas operações para que possam ser executadas, desfeitas e refeitas de maneira consistente.

Suponha que você está desenvolvendo um software para uma empresa que produz diferentes tipos de móveis: cadeiras, mesas, sofás, etc. Cada tipo de móvel tem um processo de produção diferente e você precisa criar uma maneira de encapsular esses processos de produção sem tornar o código do sistema muito acoplado às classes concretas.

### Solução

Utilizando o padrão Command, você pode encapsular cada operação (copiar, colar, desfazer, refazer) em uma classe de comando separada. Cada comando implementa uma interface comum que define um método para executar a operação. O editor de texto pode manter uma pilha de comandos executados para suportar as funcionalidades de desfazer e refazer.

## Estrutura

![Command Diagram](https://imgur.com/xuX2S3k.png)

1. **Command:** Interface que declara um método para executar o comando.
   - **No “Caso de uso”:** É a interface Command com o método execute().
2. **ConcreteCommand:** Classes concretas que implementam a interface Command, encapsulando a ação a ser realizada.
   - **No “Caso de uso”:** São as classes CopyCommand e PasteCommand.
3. **Invoker:** Classe que mantém uma referência ao objeto Command e chama o método execute() para realizar a solicitação.
   - **No “Caso de uso”:** É a classe EditorInvoker.
4. **Receiver:** Classe que contém a lógica de negócios para executar a solicitação.
   - **No “Caso de uso”:** É a classe Editor.
5. **Client:** Classe que cria e configura os objetos Command e Invoker.
   - **No “Caso de uso”:** É a classe Application.

**OBS:** No "Caso de uso" a classe Application não fazem parte do padrão Command, ela está apenas sendo usada para representar uma possível implementação do padrão.
