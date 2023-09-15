const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/usuarios', userRoutes);

app.listen(port, () => {
    console.log(`Servidor conectado na porta ${port}`);
});