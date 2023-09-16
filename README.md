# LogLab-test

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
6. Execute no terminal `npx sequelize-cli db:create` para a criacação do DB
7. Para criação do modelo execute no terminal: `npx sequelize-cli model:generate --name nome_da_tabela --attributes nome:string,email:string`
8. Para migrar o modelo execute a linha: `npx sequelize-cli db:migrate`
9. No arquivo `server.js`, na parte de conexão com o BD, coloque o seu usúario e senha do MySQL e o nome do DB criado.
10. Na parte de Modelo, altere a linha `tableName: 'usuarios'` para `tableName: 'nome_tabela_criada'`
11. Execute o comando `node server.js`
12. Para gerar os dados e inserir no BD criado, acesse `http://localhost:3000/gerar-dados`
13. Para ver a lista de usuários cadastradas no BD, acesse `http://localhost:3000/usuarios`

