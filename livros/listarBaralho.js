const {flashcard} = require('../data');

const listarFlashcard = (req, res) => {
    res.status(200).send(flashcard);
}

module.exports = listarFlashcard;