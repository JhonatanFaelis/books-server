const express = require("express");
const rotaLivros = require("./rotas/Livro")
const rotaFavorito = require("./rotas/favoritos")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors({origin : "*"}))

const port = 81;

app.use("/livros", rotaLivros)

app.use('/favoritos', rotaFavorito)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

