const express = require('express');
const faker = require('faker');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());


function generateUsers() {
    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push({
            id: i + 1,
            nome: faker.name.findName(),
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            cidade: faker.address.city(),
            pais: faker.address.country()
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
