# Singleton

![Tipo](https://img.shields.io/badge/Tipo-Criacional-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★★-brightgreen)

## Descrição

O Singleton é um padrão de projeto criacional que garante a existência de apenas uma instância de uma classe em uma aplicação e fornece um único ponto de acesso global a essa instância. Este padrão é útil quando você deseja que um objeto seja compartilhado por várias partes do código sem a necessidade de criar várias instâncias.

## Características

- Uma única instância da classe é criada e mantida.
- A classe fornece um método estático para acessar essa instância única.
- O construtor da classe é privado, para evitar a criação de instâncias adicionais fora da própria classe.

## Benefícios

- Controla o acesso à instância única, garantindo que apenas uma instância seja criada.
- Reduz a necessidade de variáveis globais e evita a poluição do espaço global.
- Pode melhorar o desempenho e o uso de recursos, especialmente se a criação do objeto for cara em termos de tempo ou recursos.

## Considerações

Singleton pode não ser a melhor solução em todos os casos. Ele pode ser considerado um "anti-padrão" quando usado incorretamente, como quando você força a lógica de negócios a depender dele sem um motivo válido.
O Singleton também pode tornar mais difícil testar seu código, pois ele introduz um estado global. Considere outras opções, como a injeção de dependência, se for mais adequado para o seu caso de uso.

## Caso de uso

### Problema

Imagine que você está criando um sistema de configurações para um aplicativo. Esse sistema armazena várias configurações (como tema, linguagem e volume) que precisam ser acessadas e modificadas por várias partes do aplicativo. Sem um padrão adequado, você pode acabar com várias instâncias do objeto de configurações, cada uma armazenando diferentes valores, o que torna difícil manter a consistência.

### Solução

Utilizando o padrão Singleton, você garante que haja apenas uma instância do objeto de configurações no aplicativo. Isso permite que todas as partes do aplicativo acessem e modifiquem as configurações por meio de um único ponto de acesso global.

## Estrutura

![Singleton Method Structure](https://imgur.com/2UCFJR7.png)

1. **Singleton:** É a classe responsável por garantir a existência de uma única instância de uma determinada classe em toda a aplicação.
   - **No "Caso de uso":** É a classe Configuration.
   - Esta classe é constituída principalmente por:
     - Uma propriedade estática privada (geralmente chamada de _instance) criada para armazenar a instância a qual você queira que seja única em toda a sua aplicação, podendo ser a instância da própria classe Singleton ou qualquer outra.
       - **No "Caso de uso":** É a propriedade estática privada _intance dentro da classe Configuration.
     - Um construtor privado para garantir que novas instâncias da classe Singleton não possam ser criadas diretamente fora da classe.
       - **No "Caso de uso":** É o construtor constructor() dentro da classe Configuration.
     - Um método estático público responsável por retornar a instância única que está armazenada na propriedade estática privada _instance da classe Singleton.
       - **OBS:** Se a instância ainda não tiver sido criada este método irá criá-la e armazená-la na propriedade estática privada_instance (para futuras consultas) e então retorná-la.
       - **No "Caso de uso":** É o método getInstance() dentro da classe Configuration.
