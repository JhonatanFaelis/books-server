const fs = require('fs')

const getTodosFavoritos = () => {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

const deletaFavoritoPorId = (id) => {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));

    const indexLivroADeletar = livros.filter((x) => x.id != id);

    return fs.writeFileSync("favoritos.json", JSON.stringify(indexLivroADeletar))
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}
