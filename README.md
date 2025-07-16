# mfe-root-config

## Descrição

Este módulo é responsável por orquestrar todos os microfrontends da aplicação utilizando o framework `single-spa`. Ele realiza o registro das aplicações, define as rotas para acesso a cada módulo e centraliza a importação de dependências compartilhadas (`React`, `React-Dom`) por meio do `import-map`.

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

## Registro dos microfrontends

Os microfrontends são registrados utilizando a função `registerApplication` do `single-spa`, conforme seus respectivos nomes e rotas.

## Importações Compartilhadas

O arquivo `index.ejs` define as dependências globais que serão utilizadas por todos os microfrontends.
