import express from "express";
import { getVendaItemHasClientes, addVendaItemHasCliente, updateVendaItemHasCliente, deleteVendaItemHasCliente } from "../controllers/vendaItemHasCliente.js";

const router = express.Router();

// Rota para obter todos os registros de venda_item_has_cliente
router.get("/", getVendaItemHasClientes);

// Rota para adicionar um novo registro de venda_item_has_cliente
router.post("/", addVendaItemHasCliente);

// Rota para atualizar um registro de venda_item_has_cliente existente com base nos IDs
router.put("/:venda_item_id_venda_item/:cliente_pessoa_email_pessoa", updateVendaItemHasCliente);

// Rota para deletar um registro de venda_item_has_cliente com base nos IDs
router.delete("/:venda_item_id_venda_item/:cliente_pessoa_email_pessoa", deleteVendaItemHasCliente);

export default router;
