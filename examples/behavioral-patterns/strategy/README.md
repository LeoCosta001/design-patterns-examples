# Strategy

![Tipo](https://img.shields.io/badge/Tipo-Criacional-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★☆-yellow)

## Descrição

O Strategy é um padrão de projeto comportamental que permite definir uma família de algoritmos, encapsular cada um deles como um objeto e torná-los intercambiáveis.
O padrão Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam, promovendo a flexibilidade e a reutilização de código.

Este resultado é possível quando todos os algoritmos da mesma familia, apesar de terem lógicas e processos diferentes, ainda sim, todos retornam o resultado padronizado por uma única interface.

## Características

* Permite a variação de partes do algoritmo em tempo de execução sem modificar o código que utiliza o algoritmo.
* Encapsula comportamentos específicos em classes separadas, proporcionando a possibilidade de trocar esses comportamentos dinamicamente.
* Segue o princípio da programação orientada a objetos que diz "prefira a composição à herança".

## Benefícios

- Fomenta a reutilização do código, já que os algoritmos são encapsulados em classes separadas que podem ser reutilizadas independentemente.
- Oferece flexibilidade na escolha dos algoritmos a serem utilizados, permitindo mudar o comportamento de um objeto em tempo de execução.
- Ajuda a aplicar o "Open/Closed Principle" (aberto para extensão e fechado para modificação), ao permitir que novos produtos sejam adicionados sem a necessidade dos antigos serem modificados.
- Ajuda a aplicar o "Responsabiliry Principle" (separar as responsabilidades), ao separar o código de cada algoritmo em diferentes classes.

## Considerações

O uso do padrão Strategy pode levar a um aumento no número de objetos no sistema, o que pode aumentar a complexidade na manutenção se não for bem gerenciado.
É importante ter um equilíbrio entre a necessidade de flexibilidade e a complexidade introduzida.

## Caso de uso

### Problema

Imagine que você está desenvolvendo para uma empresa um aplicativo de navegação que pode calcular a rota entre dois pontos. Dependendo do contexto, o usuário pode querer a rota mais rápida, a mais econômica, ou a mais turística.
Cada tipo de rota tem o mesmo resultado "calcular a rota entre dois pontos", porém você precisa criar um algorítmo diferente para cada tipo de rota de forma que ao adicionar um novo tipo de rota não impacte as implementações das rotas antigas.

### Solução

O padrão Strategy é ideal para esta situação. Podemos ter uma classe "Calcular rota" com um método que aceita calcular rotas usando diferentes algoritmos de cálculo de rota. Cada algoritmo entrega o mesmo tipo de resultado (rotas calculadas) porém com valores diferentes, e o usuário pode mudar o algoritmo que será usado para calcular a rota em tempo real de acordo com sua preferência.

## Estrutura

![Strategy Diagram](https://imgur.com/3VwXFMV.png)

1. **Strategy:** É uma interface ou classe abstrata que define os métodos que todas as estratégias devem implementar.
   - **No "Caso de uso":** No exemplo é a interface RouteStrategy.
2. **ConcreteStrategies:** São as classes concretas que implementam a interface Strategy.
   - **No "Caso de uso":** São as classes FastestRouteStrategy, EconomicRouteStrategy e ScenicRouteStrategy.
3. **Context:** É uma classe que mantém uma referência a interface ou classe abstrata Strategy, contendo métodos para alterar e executar uma nova estratégia em tempo de execução.
   - **No "Caso de uso":** É a classe RouteCalculator.
