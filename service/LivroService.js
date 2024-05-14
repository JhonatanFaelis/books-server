const fs = require('fs')

const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("livros.json"))
}

const getLivroId = (id) => {
    //get, estou pegando o parametro de id, recuperando a lista de livros que temos
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    // aqui temos o find na lista recuperada para pegar o livro com o id informado
    const livro = livros.find(l => l.id == id);
    // se encontrarmos o livro ele retorna livro, se nao, retorna uma mensagme de erro. 
    if (livro)
        return livro
    else
        return "Livro não encontrado."
}

const insereLivro = (livroNovo) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novalistaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novalistaDeLivros))
}

const atualizarLivro = (id, modificacoes) => {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    let livroAModificar = livrosAtuais.find(l => l.id == id)

    if (!livroAModificar)
        return "Livro não encontrado"

    const conteudoMudado = { ...livroAModificar, ...modificacoes }

    let indice = livrosAtuais.findIndex(l => l.id == id);

    livrosAtuais[indice] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

const deletarLivro = (id) => {
    try {
        let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

        let livroADeletar = livrosAtuais.find(l => l.id == id);

        if (!livroADeletar) {
            return "Livro não encontrado";
        }

        let indice = livrosAtuais.findIndex(l => l.id == id);

        livrosAtuais.splice(indice, 1);

        fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais, null, 2));

        return "Livro deletado com sucesso";
    } catch (error) {
        return `Erro ao deletar livro: ${error.message}`;
    }
};

module.exports = { getTodosLivros, getLivroId, insereLivro, atualizarLivro, deletarLivro }