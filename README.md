# Design Patterns Examples

## Introdução

Este é o meu repositório pessoal de exemplos de Design Patterns utilizando TypeScript. Aqui eu documentei minha jornada de aprendizado, enquanto explorava padrões de design populares e aprendia como aplicá-los em projetos desenvolvidos com TypeScript.

Se você está começando agora a estudar sobre Design Patterns, ou está buscando soluções reutilizáveis para problemas comuns em seus projetos, este repositório pode ser uma fonte útil de referência. Os exemplos aqui apresentados são simples e fáceis de entender, e cada um vem acompanhado de uma breve explicação de como e quando utilizar o padrão em questão.

Ao longo do tempo, pretendo adicionar mais exemplos e documentação para compartilhar minha experiência e aprendizado. Se você é um desenvolvedor que está interessado em aprender mais sobre padrões de design de software, sinta-se à vontade para explorar e experimentar os exemplos aqui presentes.

**OBS:** Lembre-se, este repositório é uma documentação pessoal e está em constante evolução, por isso, se você encontrar algum erro ou tiver sugestões para melhorias, por favor, sinta-se à vontade para entrar em contato comigo. Espero que este repositório seja útil para você assim como está sendo para mim!

## Rodando o código

1. Instale o Node.js e o NPM no seu ambiente (se ainda não estiver instalado).
2. Instale o TypeScript globalmente:
   1. No terminal (ou prompt de comando) digite o seguinte comando para instalar o TypeScript globalmente: `npm install -g typescript`.
   2. Verifique se o TypeScript foi instalado corretamente executando o comando: `tsc --version`. (Se você receber a versão do TypeScript instalada, a instalação foi bem-sucedida).
3. Rode o comando `npm install` neste repositório.
4. Compile os arquivos TypeScript usando o comando: `npm run build`.
   Isto irá criar um diretório chamado `dist/example` no diretório rais contendo todos os arquivos TypeScript compilados.
5. Rode o código de um Design Pattern especifico utilizando o comando `node dist/example/NOME_DO_PATTERN.js`, por exemplo: `node dist/example/singleton.js`.

### Formatação e verificação de qualidade do código

Este projeto utiliza ESLint e Prettier para garantir que o código esteja formatado de maneira consistente e siga as boas práticas de codificação. Você pode usar os seguintes comandos para formatar e verificar a qualidade do código:

- `npm run format`: Formata o código usando o Prettier.
- `npm run lint`: Verifica a qualidade do código usando o ESLint.

Lembre-se de executar esses comandos antes de enviar suas alterações para o repositório para garantir que o código esteja formatado corretamente e siga as boas práticas de codificação.

## Observações

- As nomenclaturas que tiverem a palavra "My" significa que é um nome genérico e que pode ser usado qualquer outro, mas os que não tiverem significa que o ideal é que eles tenham realmente aquela nomenclaturas (válido para classes, variáveis, interfaces, etc).
  **Exemplo:** `class MySingleton {...}`.
