# Biblioteca Lab365 - CRUD & Sequelize

Sistema backend que demonstra a implementação de operações **CRUD** (Criar, Ler, Atualizar e Deletar) para gerenciamento de livros, leitores, instrumentos e auditórios.

- As tabelas SQL foram criadas utilizando **PostgreSQL**
- As consultas SQL foram testadas e validadas com o **Postman**
- A interação com o banco de dados foi gerenciada por meio de uma aplicação **Node.js** utilizando o **Express.js**
- **Sequelize** foi utilizado como ORM para facilitar a comunicação entre a aplicação e o banco de dados

Projeto desenvolvido no módulo 2 da formação **Futuro DEV - Floripa Mais Tec 2**, coordenada pelo **Lab365** em parceria com a **Prefeitura de Florianópolis**, **SESI** e **SENAI**.

<br>

## Tecnologias Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![Json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

<br>

## Rodar o repositório

### Na primeira vez é necessário instalar as dependências:

1. `npm install`
2. `cp .env_example .env`

### Para rodar o repositório em ambiente local:

```
npm run start:dev
```

## Trabalhando com Migrations

### Criar uma migration:
```
npx sequelize-cli migration:generate --name nome_da_migração
```

### Rodar uma migration:

```
npx sequelize db:migrate
```

### Reverter a última migration:

```
npx sequelize-cli db:migrate:undo
```

### Reverter todas as migrations:

```
npx sequelize-cli db:migrate:undo_all
```

<br>

## Bibliotecas utilizadas

### Instalar o nodemon:

`npm install nodemon`

### Instalar o sequelize:

`npm install sequelize`

### Instalar o driver do PostgreSQL:

`npm install pg`

### Instalar o CLI do sequelize:

`npm install -g sequelize-cli`

### Instalar o dotenv:

`npm install dotenv`

<br>

## Documentação do Sequelize

https://sequelize.org/docs/v6/core-concepts/model-basics/

