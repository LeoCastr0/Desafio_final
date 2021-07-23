import Venda from "../models/venda.model.js"
import Livro from "../models/livro.model.js"
import Cliente from "../models/cliente.model.js"
import Livros from "./livro.repository.js"

async function insertSale(venda) {
    try {
        return await Venda.create(venda)
    } catch (err) {
        throw err
    }
}

export default {
    insertSale,
}
