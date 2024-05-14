const express = require("express");
const rotaLivros = require("./rotas/Livro")
const app = express();
app.use(express.json())

const port = 81;

app.use("/livros", rotaLivros)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

