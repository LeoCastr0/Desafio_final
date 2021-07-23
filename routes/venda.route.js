import express from "express"
import VendaController from "../controllers/venda.controller.js"

const router = express.Router()

router.post("/", VendaController.createVenda)

export default router
