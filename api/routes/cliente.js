import express from "express";
import {list, addCliente, updateCliente, deleteCliente, getCliente} from "../controllers/cliente.js";

const router = express.Router();

router.get("/list", list);

router.post("/add", addCliente);

router.put("/update", updateCliente);

router.delete("/delete", deleteCliente);

router.get("/get", getCliente);

export default router;