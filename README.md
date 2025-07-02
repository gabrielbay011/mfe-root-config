# mfe-root-config

## Descrição

Este módulo é responsável por orquestrar todos os micro front-ends da aplicação utilizando o framework `single-spa`. Ele realiza o registro das aplicações, define as rotas para acesso a cada módulo e centraliza a importação de dependências compartilhadas (`React`, `React-Dom`) por meio do `import-map`.

## Como rodar localmente

### Pré-requisitos

- Node.js
- Gerenciador de pacotes
- root-config rodando em paralelo

### Passos

```
# Instale as dependências
npm install

# Inicie a aplicação
npm start
```

## Registro dos micro front-ends

Os micro front-ends são registrados utilizando a função `registerApplication` do `single-spa`, conforme seus respectivos nomes e rotas.

## Importações Compartilhadas

O arquivo `index.ejs` define as dependências globais que serão utilizadas por todos os micro front-ends.
