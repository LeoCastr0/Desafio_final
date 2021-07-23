import VendaService from "../services/venda.service.js"

async function createVenda(req, res, next) {
    try {
        let venda = req.body
        if (!venda.data || !venda.clienteId || !venda.livroId) {
            throw new Error(" data, clienteId e livroId são obrigatórios")
        }
        venda = await VendaService.createVenda(venda)
        res.send(venda)
        global.logger.info(`POST /venda - ${JSON.stringify(venda)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    createVenda,
}
