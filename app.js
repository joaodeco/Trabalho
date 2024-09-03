const express = require('express');
const app = express();
const port = 3000;

const adicionarLivro = require('./livros/adicionarLivro');
app.post('/livros', adicionarLivro);

const listarLivros = require('./livross/listarLivros');
app.get('/livros', listarLivros);

const atualizarLivro = require('./livros/atualizarLivro');
app.put('/livros/:id', atualizarLivro);

const deletarLivro = require('./livros/deletarLivro');
app.delete('livros/:id', deletarLivro);

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
    });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:$
    {port}`);
});