const express = require('express');
const faker = require('faker');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

// Gera uma lista fictícia de usuários com a biblioteca faker
function generateUsers() {
    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push({
            id: i + 1,
            name: faker.name.findName(),
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            country: faker.address.country()
        });
    }
    return users;
}

app.get('/usuarios', (req, res) => {
    res.json(generateUsers());
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
