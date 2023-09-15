const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
    let usuarios = [];
    for (let i = 0; i < 10; i++) {
        usuarios.push({
            id: i + 1,
            nome: faker.name.findName(),
            email: faker.internet.email(),
            endereco: faker.address.streetAddress()
        });
    }
    res.json(usuarios);
});

module.exports = router;
