const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const faker = require('faker');

const app = express();
const PORT = 3000;

// Conectando com o Banco
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'seu_usuario_mysql',
    password: 'sua_senha_mysql',
    database: 'nome_db_criado'
});


const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'nome_tabela_criada'
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Não foi possível obter os usuários.' });
    }
});

// Gerando os dados
app.get('/gerar-dados', async (req, res) => {
    try {
        for (let i = 0; i < 10; i++) {
            await Usuario.create({
                nome: faker.name.findName(),
                email: faker.internet.email()
            });
        }
        res.send('Dados gerados com sucesso!');
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar dados.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`);
});
