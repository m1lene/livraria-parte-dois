import express from "express";
import { getVendaItems, addVendaItem, updateVendaItem, deleteVendaItem } from "../controllers/vendaItem.js";

const router = express.Router();

// Rota para obter todos os itens de venda
router.get("/", getVendaItems);

// Rota para adicionar um novo item de venda
router.post("/", addVendaItem);

// Rota para atualizar um item de venda existente com base no ID
router.put("/:id_venda_item", updateVendaItem);

// Rota para deletar um item de venda com base no ID
router.delete("/:id_venda_item", deleteVendaItem);

export default router;
