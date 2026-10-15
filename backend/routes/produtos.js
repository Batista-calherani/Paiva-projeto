import express from "express";
import { addProduto, atualizarProduto, deletarProduto, listProdutos } from "../lib/functions.js";

const router = express.Router();

router.get("/", listProdutos);

router.post("/:id", addProduto);

router.put("/:id", atualizarProduto);

router.delete("/:id", deletarProduto);

export default router;