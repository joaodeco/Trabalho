const express = require('express');
const app = express();
const port = 3000;

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
    });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:$
    {port}`);
});