# Prototype

![Tipo](https://img.shields.io/badge/Tipo-Criacional-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★★-brightgreen)

## Descrição

O Prototype é um padrão de projeto criacional que permite a criação de objetos novos copiando um objeto existente, conhecido como "protótipo". Isso é especialmente útil quando o custo de inicializar um objeto do zero é mais caro ou complexo do que copiá-lo a partir de um objeto existente.

Este padrão permite que você crie cópias de objetos sem saber detalhes sobre suas classes específicas. Para isso, ele define uma interface com um método de clonagem que todas as classes que desejam ser "clonáveis" devem implementar.

Na prática, esse método de clonagem cria um novo objeto da mesma classe e copia todos os campos do objeto original para o novo. Isso inclui até mesmo campos privados, já que muitas linguagens permitem esse tipo de acesso entre objetos da mesma classe.

Este padrão é especialmente útil quando você tem objetos complexos com muitos campos e configurações variadas.

## Características

- Este padrão envolve a criação de uma nova instância de uma classe copiando uma instância existente.
- As classes específicas dos objetos a serem criados são determinadas em tempo de execução.
- O padrão pode ser útil quando o custo de criação de uma instância de uma classe é mais caro ou complexo do que copiar uma instância existente.

## Benefícios

- Copiar um objeto pode ser significativamente mais rápido do que criar um novo objeto.
- O padrão pode esconder as complexidades envolvidas na criação de novos instâncias.
- O padrão oferece uma forma de adicionar novas classes ao sistema de forma dinâmica.

## Considerações

Clonar objetos pode ser um processo caro em termos de recursos se o objeto a ser clonado possui muitos atributos. Portanto, decidir entre uma cópia rasa ou profunda é uma consideração importante.

## Estrutura

## Caso de uso

### Problema

Suponha que você está desenvolvendo um editor de gráficos. Os usuários podem criar formas como círculos, retângulos e triângulos e desenhar essas formas em uma tela. Então você precisa criar uma forma de permitir uma clonagem eficiente dos objetos que representam estas formas, para adicionar a funcionalidade de "Duplicar" no editor de gráficos.

### Solução

Utilizando o padrão Prototype, você pode facilmente duplicar as formas que já estão na tela, evitando a recriação das formas do zero.

![Prototype Diagram](https://imgur.com/J5LBTQ7.png)

1. **Prototype:** É uma interface ou classe abstrata que define os métodos que as classes que podem ser clonadas devem ter (aqui deve ser incluso o método de clonagem).
   - **No "Caso de uso":** É a interface Cloneable.
2. **ConcretePrototype:** São as classes concretas que implementam a interface Prototype e portanto podem ser clonadas.
   - **No "Caso de uso":** São as classes Circle e Rectangle.
