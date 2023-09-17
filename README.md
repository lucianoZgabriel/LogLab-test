# LogLab-test

# * Questão 1 (Angular)

Implementação de um botão que reage quando clicado com um alerta.

## Instruções para execução

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto via terminal.
3. Execute `npm install` para instalar as dependências.
4. Execute `ng serve`
____________________________________ 

# * Questão 2 (API Rest com Node.js e Express) 

Este projeto é uma API Rest que retorna uma lista de usuários fictícios gerados a partir da biblioteca `faker`.

## Instruções para execução

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto via terminal.
3. Execute `npm install` para instalar as dependências.
4. Para iniciar o servidor, execute `node server.js`.
5. Acesse `http://localhost:3000/usuarios` em seu navegador ou cliente API para obter a lista de usuários.

## Testando

Esta API pode ser testada usando ferramentas como Postman ou  acessando o endpoint através do navegador. 
_________________________________


# * Questão 3

Página HTML com a exibição de alguns produtos.

## Instruções para execução

1. Clone o repositório para a sua máquina local.
2. Na pasta do projeto, abrir o arquivo `index.html` com o navegador.
_________________________________   

# * Questão 4 (Aplicação React + Vite)

Esta é uma aplicação em React que exibe uma lista de itens, com um botão onde a cada clique um item é adicionado na lista e exibido na página.

## Instruções para execução

1. Necessário a versão mais recente do Node.js (20.6.1)
2. Clone o repositório para a sua máquina local.
3. Navegue até a pasta do projeto via terminal.
4. Execute `npm install` para instalar as dependências.
5. Para rodar a aplicação, execute `npm run dev`.
__________________________________

# Questão 5 (API Next.js + next-connect)

Uma API que retorna uma lista de produtos.

## Instruções para execução

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto via terminal.
3. Execute `npm install` para instalar as dependências.
4. Execute o comando `npm run dev`.
5. [Após isso o aplicativo estará rodando em `http://localhost:3000`
6. O endpoint poderá ser acessado em `http://localhost:3000/api/produtos`
_________________________________

# * Questão 7 (React, Next.js, HTML, CSS, Js)

Esta aplicação consiste em uma interface frontend desenvolvida com React que interage com duas APIs backend distintas para exibir listas de usuários e produtos.
A aplicação apresenta uma lista de usuários obtida de uma API desenvolvida com Express, de forma aleatória, contendo ao lado um botão para editar o nome.
A lista de produtos é mostrada proveniente de uma API construída usando Next.js

## Instruções para execução

1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório `node-api`
3. Execute o comando `npm install`para instalar as dependências.
4. Execute no terminal `node server.js` para rodar o servidor na porta 4000.
5. Acesse no navegador `http://localhost:4000/usuarios` para certificar-se que está on-line.
6. Volte para diretório raiz do projeto.
7. Entre no diretório `next-api`
8. Execute o comando `npm install`
9. No terminal rode `npm run dev` para conectar o servidor na porta 3000.
10. Acesse no navegador `http://localhost:3000/api/products`, para certificar-se que está on-line.
11. Na pasta raiz, entre em `react-app`
12. Execute `npm install`
13. No terminal execute `npm run dev`
14. Aplicação já deverá estar rodando.
________________________________


# * Questão 8 (Criar DB no MySQL com o Sequelize + API)

Nesta aplicação podemos criar uma DB no MySQL através do CLI do Sequelize, e integrar com uma API que gera dados fictícios e insere no BD.

## Instruções para execução

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto via terminal.
3. Execute `npm install` para instalar as dependências.
4. Configure sua conexão no arquivo `config/config.json` :
5. {
  "development": {
    "username": "seu_usuario_mysql",
    "password": "sua_senha_mysql",
    "database": "nome_db_novo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  ...
}
6. Execute no terminal `npx sequelize-cli db:create` para a criação do DB
7. Para criação do modelo execute no terminal: `npx sequelize-cli model:generate --name nome_da_tabela --attributes nome:string,email:string`
8. Para migrar o modelo execute a linha: `npx sequelize-cli db:migrate`
9. No arquivo `server.js`, na parte de conexão com o BD, coloque o seu usuário e senha do MySQL e o nome do DB criado.
10. Na parte de Modelo, altere a linha `tableName: 'usuarios'` para `tableName: 'nome_sua_tabela_criada'`
11. Execute o comando `node server.js`
12. Para gerar os dados e inserir no BD criado, acesse `http://localhost:3000/gerar-dados`
13. Para ver a lista de usuários cadastradas no BD, acesse `http://localhost:3000/usuarios`

