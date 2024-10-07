import express from "express";
import { getAuthors, addAuthor, updateAuthor, deleteAuthor } from "../controllers/autor.js";

const router = express.Router();

// Rota para obter todos os autores
router.get("/", getAuthors);

// Rota para adicionar um novo autor
router.post("/", addAuthor);

// Rota para atualizar um autor existente com base no ID
router.put("/:id", updateAuthor);

// Rota para deletar um autor com base no ID
router.delete("/:id", deleteAuthor);

export default router;
