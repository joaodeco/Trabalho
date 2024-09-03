const {livros} = require('../data');

function adicionarLivro(req, res) {
    console.log(req.body);
    const novoLivro = {
        id: baralhos.length + 1,
        nome:req.body.titulo
    };
    baralhos.push(novoBaralho)
    res
    .status(201)
    .send({message: 'Baralho criado com sucesso!', Baralhos: novoBaralho});
}

module.exports = criarBaralho