import express from "express";
import { getEditoras, addEditora, updateEditora, deleteEditora } from "../controllers/editora.js";

const router = express.Router();

// Rota para obter todas as editoras
router.get("/", getEditoras);

// Rota para adicionar uma nova editora
router.post("/", addEditora);

// Rota para atualizar uma editora existente com base no ID
router.put("/:id_editora", updateEditora);

// Rota para deletar uma editora com base no ID
router.delete("/:id_editora", deleteEditora);

export default router;
