const {livros} = require('../data');

function adicionarLivro(req, res) {
    console.log(req.body);
    const novoLivro = {
        id: livros.length + 1,
        nome:req.body.titulo
    };
    livros.push(novoLivro)
    res
    .status(201)
    .send({message: 'Livro adicionado com sucesso!', Livros: novoLivro});
}

module.exports = adicionarLivro