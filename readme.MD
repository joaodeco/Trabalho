A divisão da equipe ficou assim:

Murilo: Escolheu e fez a parte dos estudantes.
Conrado: Escolheu e fez a parte dos livros.
Gabriel Lazarini: Escolheu e fez a parte do aluguel.

A parte dos livros serve para adicionar, listar, atualizar e deletar as informações relacionadas aos livros, como mostrado no código a seguir:

adicionar: 

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

listar: 

const {livros} = require('../data');

const listarLivros = (req, res) => {
    res.status(200).send(livros);
}

module.exports = listarLivros;

atualizar:

const {livros} = require('../data');

const atualizarLivro = (req, res) => {
    const {id} = req.params;
    const novoTitulo = req.body.titulo;

    const livro = livros.find((b) => b.id == id);

    if (!livro) {
        return res.status(404).send({message: 'Livro não encontrado'});
    }
    livro.titulo = novoTitulo;
    res.status(200).send({
        message: 'Livro atualizado.',
        livro:livro
    });
}

module.exports = atualizarLivro

deletar:

const { livros} = require('../data')

const deletarLivro = (req, res) => {
    const { id } = req.params;
    const index = livros.findIndex((b) => b.id == id);
    
    if (index === -1) {
    return res.status(404).send('Livro não encontrado!');
    }
    
    const livroDeletado = livros.splice(index, 1)[0];
    
    res.status(200).send({
    message: 'Livro deletado com sucesso!',
    livro: livroDeletado
    })
    }
    
    module.exports = deletarLivro;