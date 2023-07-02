# Adapter

![Tipo](https://img.shields.io/badge/Tipo-Estrutural-informational)
![Facilidade de implementação](https://img.shields.io/badge/Facilidade%20de%20implementação-★★★★★-brightgreen)

## Descrição

O Adapter é um padrão de projeto estrutural que permite que objetos com interfaces incompatíveis trabalhem juntos.
Ele atua como uma ponte entre duas interfaces incompatíveis, ao ser compatível com uma das interfaces e ao mesmo tempo recebendo uma interface diferente como parâmetro, o resultado é um objeto adaptado, em outras palavras, é um objeto que pode (ou não) manter seus valores de antes da adaptação porêm será usado com uma interface diferente.

## Características

- Permite que duas classes que de outra forma seriam incompatíveis trabalhem juntas, envolvendo uma delas com uma interface que seja compatível com a outra.
- Frequentemente usado para fazer com que classes existentes funcionem com outras sem modificar seu código-fonte.

## Benefícios

- Aumenta a reutilização de código ao permitir que classes antigas ou incompatíveis funcionem com classes mais recentes ou de terceiros, sem a necessidade de alterar o código original.
- Aumenta a compatibilidade entre interfaces incompatíveis, permitindo que diferentes partes de um sistema colaborem mesmo que não tenham sido projetadas para trabalhar juntas.
- Segue o "Open/Closed Principle", permitindo que o comportamento de uma classe existente seja estendido sem modificá-la.

## Considerações

O Adapter pode adicionar complexidade ao código ao introduzir uma série de pequenas classes.

Pode tornar o código mais difícil de entender para alguém não familiarizado com o padrão.

## Caso de uso

### Problema

Imagine que você está integrando um sistema de processamento de pagamentos de terceiros ao seu aplicativo de comércio eletrônico. No entanto, a interface fornecida pelo sistema de processamento de pagamentos é incompatível com a interface esperada pelo seu aplicativo. Você precisa de uma solução que permita que seu aplicativo trabalhe com o sistema de processamento de pagamentos sem ter que modificar o código-fonte de nenhum dos dois.

### Solução

O padrão Adapter pode ser usado aqui. Você pode criar uma classe de adaptador que encapsule o sistema de processamento de pagamentos. A classe de adaptador implementa uma interface que é compatível com a interface esperada pelo seu aplicativo, e traduz as chamadas do seu aplicativo para o sistema de processamento de pagamentos usando a interface fornecida por este sistema.

## Estrutura

![Adapter Diagram](https://imgur.com/hGERnJF.png)

1. **Target:** É a interface que o cliente espera usar.
   - **No "Caso de uso":** No exemplo do aplicativo de comércio eletrônico, é a interface `PaymentProcessor` usada para processar pagamentos.
2. **Adapter:** É a classe que implementa a interface `Target` e recebe por parâmetro a classe `Adaptee`. Converte chamadas da interface `Target` para chamadas compatíveis com a interface `Adaptee`.
   - **No "Caso de uso":** É a classe `ThirdPartyPaymentAdapter` que você cria para encapsular o sistema de processamento de pagamentos de terceiros.
3. **Adaptee:** É a classe existente que possui uma interface incompatível que precisa ser adaptada.
   - **No "Caso de uso":** É a classe `ThirdPartyPaymentSystem` do sistema de processamento de pagamentos de terceiros.
4. **Client:** É a classe que deseja colaborar com a classe
