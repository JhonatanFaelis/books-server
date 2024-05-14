const { getTodosLivros, getLivroId, insereLivro, atualizarLivro, deletarLivro } = require('../service/LivroService')

function getLivros(req, res) {
    try {
        const Listalivro = getTodosLivros()
        res.send(Listalivro)
    } catch (error) {

    }
}

const getLivrosById = (req, res) => {
    const id = req.params.id;
    const livro = getLivroId(id)

    res.send(livro)
}

const postLivro = (req, res) => {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo);
        res.send(`Livro criado com sucesso!`)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const patchLivro = (req, res) => {
    try {
        const livrpParaAtualizar = req.body;
        atualizarLivro(req.params.id, livrpParaAtualizar)
        res.send(`Livro criado com sucesso!`)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const deleteLivro = (req, res) => {
    try {
        deletarLivro(req.params.id);
        res.send("deletado com sucesso!")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = { getLivros, getLivrosById, postLivro, patchLivro, deleteLivro }