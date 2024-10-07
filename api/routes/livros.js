import express from "express";
import { getLivros, addLivro, updateLivro, deleteLivro } from "../controllers/livros.js";

const router = express.Router();

// Rota para obter todos os livros
router.get("/", getLivros);

// Rota para adicionar um novo livro
router.post("/", addLivro);

// Rota para atualizar um livro existente com base no ID
router.put("/:id_livro", updateLivro);

// Rota para deletar um livro com base no ID
router.delete("/:id_livro", deleteLivro);

export default router;
