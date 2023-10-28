# Iterator

![Tipo](https://img.shields.io/badge/Tipo-Comportamental-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★☆-yellow)

## Descrição

O Iterator é um padrão de projeto comportamental que fornece uma maneira de acessar os elementos de uma coleção sequencialmente sem expor a estrutura interna da coleção (seja ela uma lista, planilha, árvore, ou algum outro tipo). Isso permite que diferentes coleções sejam percorridas da mesma maneira, independentemente de como estão organizadas ou armazenadas internamente.

> **Observação:** O que é uma "Coleção"?
> Uma coleção, no contexto da programação e da ciência da computação, refere-se a um conjunto de objetos ou itens agrupados juntos. Estes objetos podem ser de qualquer tipo: numbers, strings, objects, entre outros. Coleções são frequentemente usadas para armazenar, recuperar e manipular dados em programas.
>
> De forma simples pode ser dito que "Uma coleção é um contêiner para um grupo de objetos".

## Características

* Fornece uma interface padrão para percorrer diferentes estruturas de dados (como listas, pilhas, árvores, etc.).
* Encapsula os detalhes de iteração da coleção.
* Permite o acesso sequencial aos elementos sem expor a representação interna do mesmo.
* Pode ter diferentes tipos de iteradores para a mesma coleção, dependendo da necessidade da travessia (forma que a coleção é percorrida).

## Benefícios

* Simplifica o código cliente ao ocultar os detalhes de iteração da coleção.
* Promove o princípio de responsabilidade única, pois a lógica de iteração está separada da lógica da coleção.
* Oferece uma maneira uniforme de percorrer diferentes estruturas de dados.

## Considerações

O Iterator pode facilmente aumentar a complexidade se apenas uma simples travessia for necessária.

Em alguns casos, pode ser mais eficiente acessar a coleção diretamente em vez de usar um iterador.

## Caso de uso

### Problema

Imagine que você está desenvolvendo uma aplicação de playlist de música. Os usuários têm listas de reprodução que podem ser compostas de várias fontes de música (local, streaming, rádio). Cada fonte de música tem sua própria maneira de armazenar e acessar músicas. Você precisa de uma maneira consistente de percorrer todas as músicas em uma lista de reprodução, independentemente de sua fonte.

### Solução

O padrão Iterator pode ser usado para fornecer uma interface uniforme para percorrer as músicas. Cada fonte de música pode implementar seu próprio iterador, mas todos os iteradores seguirão a mesma interface. Assim, a lógica do cliente que percorre as músicas de uma lista de reprodução pode permanecer consistente e desacoplada das implementações específicas das fontes de música.

## Estrutura

![Iterator Diagram](https://imgur.com/XNbXg6I.png)

1. **Iterator:** É uma interface ou classe abstrata que define os métodos de iteração que todas as coleções iteráveis devem implementar.
   - **No "Caso de uso":** É a interface PlaylistIterator.
2. **ConcreteIterator:** São as classes que definem a forma de iteração de cada coleção.
   - **No "Caso de uso":** São as classes LocalPlaylistIterator, StreamingPlaylistIterator e RadioPlaylistIterator.
3. **Aggregate:** São as interfaces ou classes abstratas que declaram um método que retorna o objeto de iteração (Iterator) que as classes de coleções devem conter.
   - **No "Caso de uso":** É a interface Playlist.
4. **ConcreteAggregate:** São as classes de coleções (implementam o método que retorna o objeto de iteração por meio da interface Aggregate).
   - **No "Caso de uso":** São as classes LocalPlaylist, StreamingPlaylist e RadioPlaylist.

**OBS:** No "Caso de uso" a interface Music (AnyProduct) e a classe LocalMusic (ConcreteAnyProduct) não fazem parte do padrão Iterator, elas estão apenas sendo usadas para representar a classe do produto que será iterado.
