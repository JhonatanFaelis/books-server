//importar o Router
const { Router } = require("express")
const { getLivros, getLivrosById, postLivro, patchLivro, deleteLivro } = require("../controller/LivroController")

//criar um router
const router = Router();

router.get("/", getLivros)

router.get("/:id", getLivrosById)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivro)
//importar a rota
module.exports = router;


