import express from "express";
import { getLivroHasAutores, addLivroHasAutor, updateLivroHasAutor, deleteLivroHasAutor } from "../controllers/livroHasAutor.js";

const router = express.Router();

router.get("/", getLivroHasAutores);
router.post("/", addLivroHasAutor);
router.put("/:livro_id_livro/:autor_id_autor", updateLivroHasAutor);
router.delete("/:livro_id_livro/:autor_id_autor", deleteLivroHasAutor);

export default router;
