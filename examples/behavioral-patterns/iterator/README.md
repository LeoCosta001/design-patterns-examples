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
